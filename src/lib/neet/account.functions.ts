import { createServerFn, createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import * as store from "./account.store";
import type { Me, MeEvent } from "./account.store";

export type { Me, MeEvent };

export type Result<T> = { data: T; error: null } | { data: null; error: string };

const ok = <T>(data: T): Result<T> => ({ data, error: null });
const fail = (msg: string, detail?: unknown): Result<never> => {
  if (detail) console.error("[account]", msg, detail);
  return { data: null, error: msg };
};

export type AccountAuthContext = {
  supabase: SupabaseClient<Database> | null;
  userId: string;
};

function hasSupabaseEnv(): boolean {
  return Boolean(
    process.env["SUPABASE_URL"]?.trim() && process.env["SUPABASE_PUBLISHABLE_KEY"]?.trim(),
  );
}

/**
 * Auth for account endpoints.
 *
 * Previously this middleware base64-decoded the JWT body to read `sub` *before* any
 * signature check and, when verification failed, fell back to the constant id
 * `00000000-0000-0000-0000-000000000001` — so every unauthenticated caller shared one
 * profile. Now: a token is only trusted after Supabase's `getClaims()` verifies its
 * signature and expiry, and an unverified caller gets a 401 instead of a ghost account.
 *
 * This mirrors `requireSupabaseAuth` (generated) but is not a manual JWT parse: it does
 * the same signature-verifying `getClaims()` call, and it adds the one case that
 * middleware cannot cover — a deployment with no Supabase credentials, where there is no
 * session to verify at all. Only then is a per-browser dev id accepted, and its data
 * never leaves the in-memory dev store.
 */
export const accountAuth = createMiddleware({ type: "function" }).server(async ({ next }) => {
  if (!hasSupabaseEnv()) {
    // The client sends `x-neet-dev-user`: a random id it created and stored in its own
    // browser. It is not a credential and unlocks nothing beyond this browser's scratch
    // data; it exists so two previews don't share one profile.
    const request = getRequest();
    const devUser = request?.headers?.get("x-neet-dev-user")?.slice(0, 64) || "local-dev-user";
    const context: AccountAuthContext = { supabase: null, userId: `dev:${devUser}` };
    return next({ context });
  }

  const authHeader = getRequest()?.headers?.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    throw new Error("Unauthorized: sign in to use this feature.");
  }
  const token = authHeader.slice("Bearer ".length).trim();
  if (!token) throw new Error("Unauthorized: missing token.");

  const client = createClient<Database>(
    process.env["SUPABASE_URL"]!,
    process.env["SUPABASE_PUBLISHABLE_KEY"]!,
    {
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          headers.set("apikey", process.env["SUPABASE_PUBLISHABLE_KEY"]!);
          headers.set("Authorization", `Bearer ${token}`);
          return fetch(input, { ...init, headers });
        },
      },
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    },
  );

  // Verification, not decoding: getClaims validates the JWT signature and expiry.
  const { data, error } = await client.auth.getClaims(token);
  const sub = data?.claims?.sub;
  if (error || typeof sub !== "string") {
    throw new Error("Unauthorized: your session expired. Sign in again.");
  }

  const context: AccountAuthContext = { supabase: client, userId: sub };
  return next({ context });
});

/** Shared loader so getMe and exportDossier cannot drift apart. */
async function loadMe(context: AccountAuthContext): Promise<Result<Me>> {
  const { supabase, userId } = context;

  if (!supabase) {
    const res = store.getMe(userId);
    if (res.error || !res.data) return fail(res.error ?? "Couldn't load your account.");
    const local = res.data;
    return ok({
      profile: local.profile,
      goals: local.goals,
      events: local.events,
      persisted: false,
    });
  }

  try {
    const [p, g, e] = await Promise.all([
      supabase
        .from("profiles")
        .select("display_name, initials, signature_seed, signed_at")
        .eq("id", userId)
        .maybeSingle(),
      supabase.from("learning_goals").select("id, text").order("created_at"),
      supabase
        .from("progress_events")
        .select("kind, ref, discipline, occurred_on")
        .order("occurred_on")
        .limit(5000),
    ]);

    if (p.error || g.error || e.error) {
      console.error("[account] Supabase read failed", p.error ?? g.error ?? e.error);
      return fail("Couldn't load your account right now. Try again in a moment.");
    }

    let profile = p.data;
    if (!profile) {
      const ins = await supabase
        .from("profiles")
        .insert({ id: userId, display_name: "", initials: "U" })
        .select("display_name, initials, signature_seed, signed_at")
        .single();
      if (ins.error) return fail("Couldn't create your profile. Try again in a moment.");
      profile = ins.data;
    }

    return ok({
      profile,
      goals: g.data ?? [],
      events: (e.data ?? []).map((row) => ({
        ...row,
        score: null,
        confidence: null,
        weight: null,
      })),
      persisted: true,
    });
  } catch (err) {
    console.error("[account] Supabase read threw", err);
    return fail("Couldn't reach your account. Check your connection and retry.");
  }
}

export const getMe = createServerFn({ method: "GET" })
  .middleware([accountAuth])
  .handler(({ context }) => loadMe(context));

const signSchema = z.object({
  displayName: z.string().trim().min(1).max(80),
  initials: z
    .string()
    .trim()
    .regex(/^[A-Z]{1,3}$/),
  seed: z
    .number()
    .int()
    .min(0)
    .max(2 ** 32),
  goal: z.string().trim().min(1).max(200),
});

export const signCommitment = createServerFn({ method: "POST" })
  .middleware([accountAuth])
  .validator((input: unknown) => signSchema.parse(input))
  .handler(async ({ data, context }): Promise<Result<true>> => {
    const { supabase, userId } = context;
    const local = store.signCommitment(userId, data);
    if (local.error) return fail(local.error);
    if (!supabase) return ok(true);

    const up = await supabase.from("profiles").upsert({
      id: userId,
      display_name: data.displayName,
      initials: data.initials,
      signature_seed: data.seed,
      signed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    if (up.error) return fail("Couldn't save your signature. Try again.");

    const count = await supabase
      .from("learning_goals")
      .select("id", { count: "exact", head: true });
    if ((count.count ?? 0) < 3) {
      const g = await supabase.from("learning_goals").insert({ user_id: userId, text: data.goal });
      if (g.error && !g.error.message.includes("duplicate")) {
        console.error("[account] goal insert failed", g.error);
      }
    }
    return ok(true);
  });

export const addGoal = createServerFn({ method: "POST" })
  .middleware([accountAuth])
  .validator((input: unknown) => z.object({ text: z.string().trim().min(1).max(200) }).parse(input))
  .handler(async ({ data, context }): Promise<Result<true>> => {
    const { supabase, userId } = context;
    const local = store.addGoal(userId, data.text);
    if (local.error) return fail(local.error);
    if (!supabase) return ok(true);

    const r = await supabase.from("learning_goals").insert({ user_id: userId, text: data.text });
    if (r.error) {
      if (r.error.message.includes("up to 3")) return fail("You can keep up to 3 learning goals.");
      return fail("Couldn't add that goal. Try again.");
    }
    return ok(true);
  });

export const removeGoal = createServerFn({ method: "POST" })
  .middleware([accountAuth])
  .validator((input: unknown) => z.object({ id: z.string().min(1) }).parse(input))
  .handler(async ({ data, context }): Promise<Result<true>> => {
    const { supabase, userId } = context;
    store.removeGoal(userId, data.id);
    if (!supabase) return ok(true);
    const r = await supabase.from("learning_goals").delete().eq("id", data.id);
    if (r.error) return fail("Couldn't remove that goal. Try again.");
    return ok(true);
  });

const eventSchema = z.object({
  kind: z.enum(["lesson", "lab", "quiz", "explain", "article"]),
  ref: z.string().min(1).max(200),
  discipline: z.enum(["st", "sd", "en"]).nullable(),
  occurred_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const recordEvents = createServerFn({ method: "POST" })
  .middleware([accountAuth])
  .validator((input: unknown) =>
    z.object({ events: z.array(eventSchema).min(1).max(500) }).parse(input),
  )
  .handler(async ({ data, context }): Promise<Result<number>> => {
    const { supabase, userId } = context;
    const local = store.recordEvents(userId, data.events);
    if (local.error) return fail(local.error);
    if (!supabase) return ok(data.events.length);

    const rows = data.events.map((e) => ({ ...e, user_id: userId }));
    const r = await supabase
      .from("progress_events")
      .upsert(rows, { onConflict: "user_id,kind,ref", ignoreDuplicates: true });
    if (r.error) return fail("Couldn't sync your progress. It's queued and will retry.");
    return ok(rows.length);
  });

const evidenceSchema = z.object({
  kind: z.enum(["quiz", "lab", "explain", "variant", "artifact", "review"]),
  ref: z.string().min(1).max(200),
  skillId: z.string().min(1).max(64),
  discipline: z.enum(["st", "sd", "en"]).nullable(),
  score: z.number().min(0).max(1),
  confidence: z.number().min(0).max(1).nullable(),
  weight: z.number().min(0).max(10),
  occurred_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

/**
 * Evidence sync. The old app synced only kind/ref/date, so mastery (which needs
 * score, confidence and weight) could never be rebuilt on another device.
 * This records the full row locally and, when Supabase has the extra columns,
 * pushes them too.
 */
export const recordEvidence = createServerFn({ method: "POST" })
  .middleware([accountAuth])
  .validator((input: unknown) =>
    z.object({ rows: z.array(evidenceSchema).min(1).max(500) }).parse(input),
  )
  .handler(async ({ data, context }): Promise<Result<number>> => {
    const { supabase, userId } = context;
    store.recordEvidence(userId, data.rows);
    if (!supabase) return ok(data.rows.length);

    const rows = data.rows.map((r) => ({
      user_id: userId,
      kind: r.kind,
      ref: r.ref,
      discipline: r.discipline,
      occurred_on: r.occurred_on,
      skill_id: r.skillId,
      score: r.score,
      confidence: r.confidence,
      weight: r.weight,
    }));
    const r = await supabase
      .from("progress_events")
      .upsert(rows as never, { onConflict: "user_id,kind,ref", ignoreDuplicates: true });
    if (r.error) {
      // Column not migrated yet: fall back to the activity-only sync so the
      // heatmap still works. Mastery stays device-local until the schema lands.
      const basic = data.rows.map((e) => ({
        user_id: userId,
        kind: e.kind === "artifact" || e.kind === "variant" ? "lab" : e.kind,
        ref: e.ref,
        discipline: e.discipline,
        occurred_on: e.occurred_on,
      }));
      const fallback = await supabase
        .from("progress_events")
        .upsert(basic, { onConflict: "user_id,kind,ref", ignoreDuplicates: true });
      if (fallback.error) return fail("Couldn't sync your evidence. It's queued and will retry.");
    }
    return ok(rows.length);
  });

/** Reading a volume counts as activity. Previously `kind: "article"` existed but nothing emitted it. */
export const recordArticleRead = createServerFn({ method: "POST" })
  .middleware([accountAuth])
  .validator((input: unknown) =>
    z.object({ slug: z.string().min(1).max(200), occurred_on: z.string() }).parse(input),
  )
  .handler(async ({ data, context }): Promise<Result<true>> => {
    const { supabase, userId } = context;
    store.recordEvents(userId, [
      { kind: "article", ref: data.slug, discipline: null, occurred_on: data.occurred_on },
    ]);
    if (!supabase) return ok(true);
    const r = await supabase.from("progress_events").upsert(
      {
        user_id: userId,
        kind: "article",
        ref: data.slug,
        discipline: null,
        occurred_on: data.occurred_on,
      },
      { onConflict: "user_id,kind,ref", ignoreDuplicates: true },
    );
    if (r.error) return fail("Couldn't record that reading.");
    return ok(true);
  });

/**
 * Export. This used to read the local fallback store and was labelled
 * "Verified Portfolio", although nothing had been verified. It now builds from
 * the same source of truth the dashboard reads and is honestly named a record.
 */
export const exportDossier = createServerFn({ method: "GET" })
  .middleware([accountAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const me = await loadMe(context);
    const base = store.exportDossier(userId);
    if (!supabase) return ok(base);
    if (me.error || !me.data) return ok(base);

    return ok({
      ...base,
      profile: me.data.profile,
      goals: me.data.goals.map((g) => ({ ...g, created_at: "" })),
      events: me.data.events.map((e) => ({
        kind: e.kind,
        ref: e.ref,
        discipline: e.discipline,
        occurred_on: e.occurred_on,
        score: e.score,
        confidence: e.confidence,
        weight: e.weight,
      })),
      metrics: {
        ...base.metrics,
        totalEvents: me.data.events.length,
        lessonsDone: me.data.events.filter((e) => e.kind === "lesson").length,
        labsDone: me.data.events.filter((e) => e.kind === "lab").length,
      },
    });
  });
