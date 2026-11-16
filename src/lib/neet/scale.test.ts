import { describe, expect, it } from "vitest";
import { LABS, SKILLS } from "./content";
import {
  calibration,
  computeAll,
  computeSkill,
  decay,
  disciplineScores,
  nextBestStep,
  reviewQueue,
} from "./scale";
import type { Evidence } from "./types";

const DAY = 86_400_000;
const NOW = Date.parse("2026-06-01T00:00:00.000Z");

const ev = (over: Partial<Evidence> & { score: number }): Evidence => ({
  skillId: "st-stocks",
  type: "quiz",
  weight: 1,
  at: new Date(NOW).toISOString(),
  ...over,
});

describe("mastery maths", () => {
  it("decays by half every 45 days", () => {
    expect(decay(0)).toBe(1);
    expect(decay(45)).toBeCloseTo(0.5, 12);
    expect(decay(90)).toBeCloseTo(0.25, 12);
    // A future timestamp must not amplify mastery into >1.
    expect(decay(-10)).toBe(1);
  });

  it("starts at zero with a stated gate, not a silent 0", () => {
    const p = computeSkill("st-stocks", [], NOW);
    expect(p.level).toBe(0);
    expect(p.mastery).toBe(0);
    expect(p.gate).toBeTruthy();
  });

  it("caps coverage so one perfect answer cannot buy mastery", () => {
    const one = computeSkill("st-stocks", [ev({ score: 1, weight: 1 })], NOW);
    expect(one.mastery).toBeLessThan(0.2);
    const many = Array.from({ length: 6 }, () => ev({ score: 1, weight: 1 }));
    expect(computeSkill("st-stocks", many, NOW).mastery).toBeCloseTo(1, 6);
  });

  it("requires application evidence for Adapt", () => {
    const quizOnly = Array.from({ length: 8 }, () => ev({ score: 1, weight: 1 }));
    const quizProgress = computeSkill("st-stocks", quizOnly, NOW);
    expect(quizProgress.mastery).toBeGreaterThanOrEqual(0.55);
    expect(quizProgress.level).toBe(2);
    expect(quizProgress.gate).toContain("lab");

    const withLab = [...quizOnly, ev({ score: 1, weight: 2.5, type: "lab" })];
    expect(computeSkill("st-stocks", withLab, NOW).level).toBe(3);
  });

  it("requires an artifact for Proceed", () => {
    const base = Array.from({ length: 10 }, () =>
      ev({ score: 1, weight: 1, type: "lab" as const }),
    );
    const noArtifact = computeSkill("st-stocks", base, NOW);
    expect(noArtifact.level).toBe(3);
    expect(noArtifact.gate).toContain("artifact");

    const withArtifact = [...base, ev({ score: 1, weight: 3, type: "artifact" })];
    expect(computeSkill("st-stocks", withArtifact, NOW).level).toBe(4);
  });

  it("ignores evidence belonging to other skills", () => {
    const foreign = [ev({ skillId: "sd-scale", score: 1, weight: 6 })];
    expect(computeSkill("st-stocks", foreign, NOW).mastery).toBe(0);
  });

  it("scores every skill, and a symmetric discipline average", () => {
    const all = computeAll([ev({ score: 1, weight: 6 })], NOW);
    expect(all).toHaveLength(SKILLS.length);
    const scores = disciplineScores(all);
    for (const v of Object.values(scores)) expect(v).toBeGreaterThanOrEqual(0);
    // Only one thinking skill has evidence, so that discipline averages over its own count.
    expect(scores.thinking).toBeGreaterThan(0);
    expect(scores.design).toBe(0);
  });

  it("reports the calibration gap on rated evidence only", () => {
    const cal = calibration([ev({ score: 0, confidence: 1 }), ev({ score: 1, confidence: 0.33 })]);
    expect(cal.n).toBe(2);
    expect(cal.gap).toBeCloseTo((1 + 0.33) / 2 - 0.5, 6);
  });

  it("builds a review queue ordered by mastery actually lost", () => {
    const stale = [
      ev({ score: 1, weight: 6, at: new Date(NOW - 90 * DAY).toISOString() }),
      ev({
        skillId: "st-boundaries",
        score: 1,
        weight: 6,
        at: new Date(NOW - 20 * DAY).toISOString(),
      }),
    ];
    const q = reviewQueue(computeAll(stale, NOW), NOW);
    expect(q.length).toBe(2);
    // Most overdue first — not "most points already lost", which would rank the
    // 20-day-old skill above the 90-day-old one.
    expect(q[0]!.skillId).toBe("st-stocks");
    expect(q[0]!.days).toBe(90);
    for (const p of q) {
      expect(p.retained).toBeGreaterThan(0);
      expect(p.retained).toBeLessThanOrEqual(1);
    }
  });

  it("sends a stale skill to review before anything new", () => {
    const stale = [ev({ score: 1, weight: 6, at: new Date(NOW - 60 * DAY).toISOString() })];
    const step = nextBestStep(computeAll(stale, NOW), [], NOW);
    expect(step.kind).toBe("review");
    expect(step.href.startsWith("/learn/")).toBe(true);
  });

  it("sends a known-but-unapplied skill straight to its lab card", () => {
    // Enough quizzing to clear the Know stage (level 2) but never any application.
    const quizOnly = Array.from({ length: 6 }, () => ev({ score: 1, weight: 1 }));
    const step = nextBestStep(computeAll(quizOnly, NOW), [], NOW);
    expect(step.kind).toBe("lab");
    // Deep link, not the bare list: every lab has an id we can target.
    expect(step.href).toMatch(/^\/labs#lab-[a-z-]+$/);
    expect(LABS.some((l) => step.href.endsWith(`#${l.id}`))).toBe(true);
  });

  it("always returns a usable first step, even with no data at all", () => {
    const step = nextBestStep(computeAll([], NOW), [], NOW);
    expect(step.href.startsWith("/learn/")).toBe(true);
    expect(step.reason.length).toBeGreaterThan(0);
  });
});
