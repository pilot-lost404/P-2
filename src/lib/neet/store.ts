import { useSyncExternalStore } from "react";
import { LABS, PATHS, flatLessons, lessonKey } from "./content";
import type { Evidence, Lab } from "./types";

export interface State {
  completed: string[];
  saved: string[];
  evidence: Evidence[];
  answers: Record<string, { choice: number; confidence: number }>;
  labs: Record<string, { note: string; rating: number; at: string }>;
  explains: Record<string, { text: string; rating: number }>;
}

const KEY = "neet.progress.v1";
const EMPTY: State = {
  completed: [],
  saved: [],
  evidence: [],
  answers: {},
  labs: {},
  explains: {},
};

let cache: State = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function read(): State {
  if (typeof window === "undefined") return EMPTY;
  if (!loaded) {
    loaded = true;
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) cache = { ...EMPTY, ...JSON.parse(raw) };
    } catch {
      cache = EMPTY;
    }
  }
  return cache;
}

function write(next: State) {
  cache = next;
  loaded = true;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      loaded = false;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress(): State {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

/** Fired after `actions.mergeRemote` so the UI can tell replaced from appended. */
export const PROGRESS_MERGED = "neet:progress-merged";

/** True once running in the browser, so UIs can avoid flashing empty states. */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export type ProgressKind = "lesson" | "lab" | "quiz" | "explain" | "article";
export interface ProgressSignal {
  kind: ProgressKind;
  ref: string;
  skillId?: string | undefined;
  /** Evidence fields. Without these, mastery could not be rebuilt on a new device. */
  score?: number | undefined;
  confidence?: number | undefined;
  weight?: number | undefined;
  at?: string | undefined;
}

/** Broadcast a finished activity; ProgressSync forwards it to the account when signed in. */
export function emitProgress(sig: ProgressSignal) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<ProgressSignal>("neet:progress", { detail: sig }));
}

/**
 * Which skill a stored evidence row belongs to.
 *
 * Quiz refs are pause ids (`<lessonKey>:<n>`), explain refs are `explain:<lessonKey>`,
 * and lab refs are lab ids — the first two can be resolved back to a lesson.
 */
export function evidenceSkillFor(kind: string, ref: string): string | undefined {
  if (kind === "quiz") {
    const key = ref.split(":").slice(0, -1).join(":");
    if (key) return lessonSkill(key);
  }
  if (kind === "explain") return lessonSkill(ref.replace(/^explain:/, ""));
  const lab = LABS.find((l) => l.id === ref);
  return lab?.skillId;
}

export function lessonSkill(key: string): string | undefined {
  for (const p of PATHS)
    for (const { lesson } of flatLessons(p))
      if (lessonKey(p.slug, lesson.slug) === key) return lesson.skillIds[0];
  return undefined;
}

export function readProgressSnapshot(): State {
  return read();
}

const toggle = (list: string[], v: string) =>
  list.includes(v) ? list.filter((x) => x !== v) : [...list, v];

export const actions = {
  /**
   * Merge evidence that came from the account into the local store.
   *
   * The dashboard used to compute mastery from localStorage only, so on a new device the
   * heatmap (synced) was full while the Proceed Scale (local) read zero. Evidence is now
   * round-tripped, and this rehydrates it. Keyed by skill + ref so re-syncing is
   * idempotent and never double-counts a quiz.
   */
  mergeRemote(
    rows: {
      kind: string;
      ref: string;
      occurred_on: string;
      score: number | null;
      confidence: number | null;
      weight: number | null;
    }[],
  ) {
    if (rows.length === 0) return;
    const s = read();
    const seen = new Set(s.evidence.map((e) => `${e.skillId}|${e.ref ?? ""}`));
    const added: Evidence[] = [];
    for (const r of rows) {
      if (r.score === null || !r.ref) continue;
      const skillId = evidenceSkillFor(r.kind, r.ref);
      if (!skillId) continue;
      const key = `${skillId}|${r.ref}`;
      if (seen.has(key)) continue;
      seen.add(key);
      added.push({
        skillId,
        type: (r.kind === "quiz" || r.kind === "explain" || r.kind === "lab"
          ? r.kind
          : "lab") as Evidence["type"],
        score: r.score,
        weight: r.weight ?? 1,
        at: `${r.occurred_on}T12:00:00.000Z`,
        ...(r.confidence === null ? {} : { confidence: r.confidence }),
        ref: r.ref,
      });
    }
    if (added.length === 0) return;
    write({ ...s, evidence: [...s.evidence, ...added] });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(PROGRESS_MERGED, { detail: added.length }));
    }
  },

  toggleComplete(key: string) {
    const s = read();
    const done = !s.completed.includes(key);
    write({ ...s, completed: toggle(s.completed, key) });
    if (done) emitProgress({ kind: "lesson", ref: key, skillId: lessonSkill(key) });
  },
  toggleSaved(key: string) {
    const s = read();
    write({ ...s, saved: toggle(s.saved, key) });
  },
  answerPause(id: string, skillId: string, choice: number, correct: boolean, confidence: number) {
    const s = read();
    if (s.answers[id]) return;
    const ev: Evidence = {
      skillId,
      type: "quiz",
      score: correct ? 1 : 0,
      weight: 1,
      at: new Date().toISOString(),
      confidence,
      ref: id,
    };
    write({
      ...s,
      answers: { ...s.answers, [id]: { choice, confidence } },
      evidence: [...s.evidence, ev],
    });
    emitProgress({
      kind: "quiz",
      ref: id,
      skillId,
      score: correct ? 1 : 0,
      confidence,
      weight: 1,
    });
  },
  explainBack(lessonKeyStr: string, skillId: string, text: string, rating: number) {
    const s = read();
    const prior = s.evidence.filter((e) => e.ref !== `explain:${lessonKeyStr}`);
    const ev: Evidence = {
      skillId,
      type: "explain",
      score: rating / 3,
      weight: 1.5,
      at: new Date().toISOString(),
      ref: `explain:${lessonKeyStr}`,
    };
    write({
      ...s,
      evidence: [...prior, ev],
      explains: { ...s.explains, [lessonKeyStr]: { text, rating } },
    });
    emitProgress({
      kind: "explain",
      ref: `explain:${lessonKeyStr}`,
      skillId,
      score: rating / 3,
      weight: 1.5,
    });
  },
  submitLab(lab: Lab, note: string, rating: number) {
    const s = read();
    const weight = lab.evidenceType === "artifact" ? 3 : lab.evidenceType === "lab" ? 2.5 : 2;
    const prior = s.evidence.filter((e) => e.ref !== lab.id);
    const ev: Evidence = {
      skillId: lab.skillId,
      type: lab.evidenceType,
      score: rating / 3,
      weight,
      at: new Date().toISOString(),
      ref: lab.id,
    };
    write({
      ...s,
      evidence: [...prior, ev],
      labs: { ...s.labs, [lab.id]: { note, rating, at: ev.at } },
    });
    emitProgress({
      kind: "lab",
      ref: lab.id,
      skillId: lab.skillId,
      score: rating / 3,
      weight,
    });
  },
  loadDemo() {
    const day = 86_400_000;
    const now = Date.now();
    const ago = (d: number) => new Date(now - d * day).toISOString();
    const q = (
      skillId: string,
      d: number,
      score: number,
      confidence: number,
      n: number,
    ): Evidence => ({
      skillId,
      type: "quiz",
      score,
      weight: 1,
      at: ago(d),
      confidence,
      ref: `demo-q-${skillId}-${n}`,
    });
    const evidence: Evidence[] = [
      q("st-stocks", 20, 1, 0.66, 1),
      q("st-stocks", 19, 1, 1, 2),
      q("st-stocks", 18, 1, 0.66, 3),
      q("st-stocks", 12, 1, 1, 4),
      q("st-loops", 15, 1, 0.66, 1),
      q("st-loops", 14, 0, 1, 2),
      q("st-loops", 13, 1, 1, 3),
      q("st-loops", 5, 1, 0.66, 4),
      {
        skillId: "st-loops",
        type: "lab",
        score: 0.9,
        weight: 2.5,
        at: ago(4),
        ref: "lab-loop-map",
      },
      {
        skillId: "st-loops",
        type: "explain",
        score: 0.66,
        weight: 1.5,
        at: ago(4),
        ref: "demo-explain-1",
      },
      q("st-leverage", 3, 0, 1, 1),
      q("st-leverage", 2, 1, 0.33, 2),
      q("sd-requirements", 30, 1, 1, 1),
      q("sd-requirements", 29, 1, 0.66, 2),
      q("sd-requirements", 28, 0, 1, 3),
      {
        skillId: "sd-requirements",
        type: "variant",
        score: 0.66,
        weight: 2,
        at: ago(27),
        ref: "lab-estimate",
      },
      q("sd-data", 24, 1, 0.66, 1),
      q("sd-data", 23, 1, 0.33, 2),
      q("en-reading", 9, 1, 0.66, 1),
      q("en-reading", 8, 1, 1, 2),
      { skillId: "en-reading", type: "lab", score: 1, weight: 2.5, at: ago(7), ref: "lab-reading" },
      {
        skillId: "en-reading",
        type: "artifact",
        score: 1,
        weight: 3,
        at: ago(6),
        ref: "demo-artifact-1",
      },
      {
        skillId: "en-reading",
        type: "review",
        score: 1,
        weight: 1,
        at: ago(1),
        ref: "demo-review-1",
      },
    ];
    const completed = flatLessons(PATHS[0]!)
      .slice(0, 3)
      .map((x) => lessonKey(PATHS[0]!.slug, x.lesson.slug));
    const s = read();
    write({ ...s, evidence, completed });
  },
  reset() {
    write(EMPTY);
  },
};
