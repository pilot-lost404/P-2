import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMe, recordEvents, recordEvidence } from "@/lib/neet/account.functions";
import { useSession } from "@/hooks/use-session";
import { actions, lessonSkill, readProgressSnapshot, type ProgressSignal } from "@/lib/neet/store";
import { disciplineOf, isoDay } from "@/lib/neet/progress-math";
import { supabaseConfigured } from "@/lib/neet/supabase-env";

type ActivityRow = {
  kind: ProgressSignal["kind"];
  ref: string;
  discipline: "st" | "sd" | "en" | null;
  occurred_on: string;
};

type EvidenceRow = ActivityRow & {
  kind: "quiz" | "lab" | "explain";
  skillId: string;
  score: number;
  confidence: number | null;
  weight: number;
};

const today = () => isoDay(new Date());

const toActivity = (s: ProgressSignal, day = today()): ActivityRow => ({
  kind: s.kind,
  // Quiz and explain refs already carry their lesson key, so they are self-describing.
  ref: s.ref.slice(0, 200),
  discipline: disciplineOf(s.skillId),
  occurred_on: day,
});

const toEvidence = (s: ProgressSignal, day = today()): EvidenceRow | null => {
  if (typeof s.score !== "number" || !s.skillId) return null;
  if (s.kind !== "quiz" && s.kind !== "lab" && s.kind !== "explain") return null;
  return {
    kind: s.kind,
    ref: s.ref.slice(0, 200),
    discipline: disciplineOf(s.skillId),
    occurred_on: day,
    skillId: s.skillId,
    score: Math.min(1, Math.max(0, s.score)),
    confidence: typeof s.confidence === "number" ? s.confidence : null,
    weight: Math.min(10, Math.max(0, s.weight ?? 1)),
  };
};

/**
 * Two-way progress bridge.
 *
 * Up: every finished activity is queued and pushed to the account, retrying on failure
 * and on reconnect. Activities without a score go to `recordEvents`; scored ones also go
 * to `recordEvidence`, which carries the fields the mastery model needs.
 *
 * Down: on sign-in the account's scored evidence is merged back into this browser's store,
 * so the Proceed Scale survives a new device. Before this, only the heatmap synced and the
 * radar silently reset to zero.
 *
 * The backfill runs once per browser so evidence recorded before signing in is not lost.
 */
export default function ProgressSync() {
  const { user, ready } = useSession();
  const sendActivity = useServerFn(recordEvents);
  const sendEvidence = useServerFn(recordEvidence);
  const pullMe = useServerFn(getMe);
  const qc = useQueryClient();
  const activity = useRef<ActivityRow[]>([]);
  const evidence = useRef<EvidenceRow[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- down: hydrate account evidence into this browser -----------------------
  useEffect(() => {
    // In local (no-Supabase) mode there is no session, but the dev store still holds
    // this browser's evidence — pull it so a reload after a server restart is lossless.
    if (!ready) return;
    if (supabaseConfigured && !user) return;
    let alive = true;
    pullMe()
      .then((res) => {
        if (!alive || res.error || !res.data) return;
        actions.mergeRemote(res.data.events);
      })
      .catch(() => {
        /* offline: local evidence stays authoritative */
      });
    return () => {
      alive = false;
    };
  }, [ready, user, pullMe]);

  // ---- up: push local activity and evidence -----------------------------------
  useEffect(() => {
    if (!ready) return;

    const flush = async () => {
      timer.current = null;
      const acts = activity.current.splice(0, 500);
      const evs = evidence.current.splice(0, 500);
      if (!acts.length && !evs.length) return;

      let failed = false;
      if (evs.length) {
        try {
          const r = await sendEvidence({ data: { rows: evs } });
          if (r.error) throw new Error(r.error);
        } catch {
          evidence.current.unshift(...evs);
          failed = true;
        }
      }
      if (acts.length) {
        try {
          const r = await sendActivity({ data: { events: acts } });
          if (r.error) throw new Error(r.error);
        } catch {
          activity.current.unshift(...acts);
          failed = true;
        }
      }

      if (failed) timer.current = setTimeout(flush, 15_000);
      else qc.invalidateQueries({ queryKey: ["me"] });
    };

    const schedule = () => {
      if (!timer.current) timer.current = setTimeout(flush, 800);
    };

    const flag = `neet.backfilled.${user?.id ?? "local"}`;
    let backfilled = false;
    try {
      backfilled = localStorage.getItem(flag) === "1";
    } catch {
      backfilled = true;
    }
    if (!backfilled) {
      const snap = readProgressSnapshot();
      const day = today();
      snap.completed.forEach((k) =>
        activity.current.push(toActivity({ kind: "lesson", ref: k, skillId: lessonSkill(k) }, day)),
      );
      snap.evidence
        .filter((e) => !e.ref?.startsWith("demo"))
        .forEach((e) => {
          const at = isoDay(new Date(e.at));
          const sig: ProgressSignal = {
            kind: e.type === "quiz" ? "quiz" : e.type === "explain" ? "explain" : "lab",
            ref: e.ref ?? `${e.type}:${e.skillId}`,
            skillId: e.skillId,
            score: e.score,
            confidence: e.confidence,
            weight: e.weight,
            at: e.at,
          };
          activity.current.push(toActivity(sig, at));
          const row = toEvidence(sig, at);
          if (row) evidence.current.push(row);
        });
      try {
        localStorage.setItem(flag, "1");
      } catch {
        /* private mode: just skip the flag */
      }
      if (activity.current.length || evidence.current.length) schedule();
    }

    const onSignal = (e: Event) => {
      const sig = (e as CustomEvent<ProgressSignal>).detail;
      const day = sig.at ? isoDay(new Date(sig.at)) : today();
      activity.current.push(toActivity(sig, day));
      const row = toEvidence(sig, day);
      if (row) evidence.current.push(row);
      schedule();
    };
    const onOnline = () => schedule();

    window.addEventListener("neet:progress", onSignal);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("neet:progress", onSignal);
      window.removeEventListener("online", onOnline);
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
    };
  }, [user, ready, sendActivity, sendEvidence, qc]);

  return null;
}
