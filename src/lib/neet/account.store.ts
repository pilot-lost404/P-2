/**
 * Portable account store.
 *
 * Replaces the SQLite half of the old `db.server.ts`. Personal data lives in memory
 * for the lifetime of the server process and is mirrored to Supabase whenever it is
 * configured (see account.functions.ts). The in-memory store exists so that local
 * development and preview deploys work with zero configuration.
 *
 * Two things were deliberately removed from the previous implementation:
 *   - the constant fallback user id `0000...0001`, which let every unauthenticated
 *     caller share one profile;
 *   - the hand-rolled JWT decode that read `sub` without verifying the signature.
 */

export type Result<T> = { data: T; error: null } | { data: null; error: string };

const ok = <T>(data: T): Result<T> => ({ data, error: null });
const fail = (error: string): Result<never> => ({ data: null, error });

export interface StoredProfile {
  display_name: string;
  initials: string;
  signature_seed: number;
  signed_at: string | null;
}

export interface StoredGoal {
  id: string;
  text: string;
  created_at: string;
}

/** Shape returned to the client. Defined here so account.functions can import it
 *  without creating a type-level cycle. */
export interface MeEvent {
  kind: string;
  ref: string;
  discipline: string | null;
  occurred_on: string;
  score: number | null;
  confidence: number | null;
  weight: number | null;
}

export interface Me {
  profile: StoredProfile;
  goals: { id: string; text: string }[];
  events: MeEvent[];
  persisted: boolean;
}

export interface StoredEvent {
  kind: string;
  ref: string;
  discipline: string | null;
  occurred_on: string;
  /** Evidence fields: added so mastery can be rebuilt on a second device. */
  score?: number | null;
  confidence?: number | null;
  weight?: number | null;
}

interface UserRecord {
  profile: StoredProfile;
  goals: StoredGoal[];
  events: Map<string, StoredEvent>;
}

const users = new Map<string, UserRecord>();

const EVENT_KEY = (e: { kind: string; ref: string }) => `${e.kind}::${e.ref}`;

function userRecord(userId: string): UserRecord {
  let rec = users.get(userId);
  if (!rec) {
    rec = {
      profile: { display_name: "", initials: "U", signature_seed: 0, signed_at: null },
      goals: [],
      events: new Map(),
    };
    users.set(userId, rec);
  }
  return rec;
}

const uuid = () =>
  globalThis.crypto?.randomUUID?.() ??
  `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

export function getMe(userId: string): Result<Omit<Me, "persisted">> {
  const rec = userRecord(userId);
  return ok({
    profile: { ...rec.profile },
    goals: rec.goals.map((g) => ({ id: g.id, text: g.text })),
    events: [...rec.events.values()]
      .sort((a, b) => a.occurred_on.localeCompare(b.occurred_on))
      .map((e) => ({
        kind: e.kind,
        ref: e.ref,
        discipline: e.discipline,
        occurred_on: e.occurred_on,
        score: e.score ?? null,
        confidence: e.confidence ?? null,
        weight: e.weight ?? null,
      })),
  });
}

export function signCommitment(
  userId: string,
  data: { displayName: string; initials: string; seed: number; goal: string },
): Result<true> {
  const rec = userRecord(userId);
  rec.profile = {
    display_name: data.displayName,
    initials: data.initials,
    signature_seed: data.seed,
    signed_at: new Date().toISOString(),
  };
  if (rec.goals.length < 3 && !rec.goals.some((g) => g.text === data.goal)) {
    rec.goals.push({ id: uuid(), text: data.goal, created_at: new Date().toISOString() });
  }
  return ok(true);
}

export function addGoal(userId: string, text: string): Result<true> {
  const rec = userRecord(userId);
  if (rec.goals.length >= 3) return fail("You can keep up to 3 learning goals.");
  rec.goals.push({ id: uuid(), text, created_at: new Date().toISOString() });
  return ok(true);
}

export function removeGoal(userId: string, id: string): Result<true> {
  const rec = userRecord(userId);
  rec.goals = rec.goals.filter((g) => g.id !== id);
  return ok(true);
}

export function recordEvents(
  userId: string,
  events: { kind: string; ref: string; discipline?: string | null; occurred_on: string }[],
): Result<number> {
  const rec = userRecord(userId);
  for (const e of events) {
    const key = EVENT_KEY(e);
    if (!rec.events.has(key)) {
      rec.events.set(key, {
        kind: e.kind,
        ref: e.ref,
        discipline: e.discipline ?? null,
        occurred_on: e.occurred_on,
        score: null,
        confidence: null,
        weight: null,
      });
    }
  }
  return ok(events.length);
}

/** Evidence rows that need to reach the mastery model. */
export function recordEvidence(
  userId: string,
  rows: {
    kind: string;
    ref: string;
    skillId: string;
    discipline: string | null;
    score: number;
    confidence: number | null;
    weight: number;
    occurred_on: string;
  }[],
): Result<number> {
  const rec = userRecord(userId);
  for (const r of rows) {
    const key = EVENT_KEY(r);
    const existing = rec.events.get(key);
    rec.events.set(key, {
      kind: r.kind,
      ref: r.ref,
      discipline: r.discipline,
      occurred_on: existing?.occurred_on ?? r.occurred_on,
      score: r.score,
      confidence: r.confidence,
      weight: r.weight,
    });
  }
  return ok(rows.length);
}

export function exportDossier(userId: string) {
  const rec = userRecord(userId);
  const events = [...rec.events.values()];
  return {
    exportDate: new Date().toISOString(),
    userId,
    profile: rec.profile,
    goals: rec.goals,
    events,
    metrics: {
      totalEvents: events.length,
      distinctDisciplines: [
        ...new Set(events.map((e) => e.discipline).filter(Boolean)),
      ] as string[],
      lessonsDone: events.filter((e) => e.kind === "lesson").length,
      labsDone: events.filter((e) => e.kind === "lab").length,
      artefactsShipped: events.filter((e) => e.kind === "lab" || e.kind === "explain").length,
    },
  };
}

/** Test hook: drop all in-memory accounts. */
export function resetAccountStore() {
  users.clear();
}

export const accountStore = {
  getMe,
  signCommitment,
  addGoal,
  removeGoal,
  recordEvents,
  recordEvidence,
  exportDossier,
  resetAccountStore,
};
