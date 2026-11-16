import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import * as content from "./content";
import { LABS, PATHS, SKILLS, allLessons, flatLessons, pathMinutes } from "./content";

const LESSONS = allLessons();

/** Source ids that actually exist in the source register. */
function registeredSourceIds(): Set<string> {
  const csv = readFileSync("content/pack/sources.csv", "utf8");
  return new Set(
    csv
      .slice(csv.indexOf("\n") + 1)
      .split("\n")
      .map((line) => line.split(",")[0]?.replace(/^"|"$/g, "").trim() ?? "")
      .filter((id) => /^S\d+$/.test(id)),
  );
}

describe("curriculum completeness", () => {
  it("teaches every skill before a lab assesses it", () => {
    const taught = new Set(LESSONS.flatMap((l) => l.lesson.skillIds));
    const labOnly = LABS.filter((lab) => !taught.has(lab.skillId)).map((l) => l.skillId);
    // This was the real gap: lab-cache and lab-ship assessed skills no lesson covered.
    expect(labOnly).toEqual([]);
  });

  it("has no orphan skills", () => {
    const taught = new Set(LESSONS.flatMap((l) => l.lesson.skillIds));
    expect(SKILLS.filter((s) => !taught.has(s.id)).map((s) => s.id)).toEqual([]);
  });

  it("gives every lesson at least one retrieval check", () => {
    const noPause = LESSONS.filter((l) => !l.lesson.blocks.some((b) => b.t === "pause"));
    expect(noPause.map((l) => l.lesson.slug)).toEqual([]);
  });

  it("keeps every pause answer index inside its options", () => {
    const bad: string[] = [];
    for (const { lesson } of LESSONS) {
      for (const b of lesson.blocks) {
        if (b.t !== "pause") continue;
        if (b.answer < 0 || b.answer >= b.options.length) bad.push(b.id);
        if (b.options.length < 2) bad.push(`${b.id}:too-few-options`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("uses unique pause ids across the whole curriculum", () => {
    const ids = LESSONS.flatMap((l) =>
      l.lesson.blocks.filter((b) => b.t === "pause").map((b) => (b.t === "pause" ? b.id : "")),
    );
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.length).toBeGreaterThan(25);
  });

  it("only cites sources that exist in the register", () => {
    const registered = registeredSourceIds();
    expect(registered.size).toBeGreaterThan(300);

    const cited = new Set<string>();
    for (const { lesson } of LESSONS) {
      const text = JSON.stringify(lesson);
      for (const m of text.matchAll(/\bS\d{2,3}\b/g)) cited.add(m[0]);
    }
    const unknown = [...cited].filter((id) => !registered.has(id)).sort();
    expect(unknown).toEqual([]);
    expect(cited.size).toBeGreaterThan(5);
  });

  it("has no duplicate lesson slugs inside a path", () => {
    for (const path of PATHS) {
      const slugs = flatLessons(path).map((x) => x.lesson.slug);
      expect(new Set(slugs).size, `duplicate lesson slug in ${path.slug}`).toBe(slugs.length);
    }
  });

  it("has no duplicate path slugs and stable, URL-safe slugs", () => {
    const slugs = PATHS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });

  it("keeps paths longer than a single page", () => {
    // A one-lesson path ends before it starts; that was true of three paths.
    const stubs = PATHS.filter((p) => flatLessons(p).length < 2).map((p) => p.slug);
    expect(stubs).toEqual([]);
  });

  it("keeps lesson and path time estimates in a sane band", () => {
    for (const { lesson } of LESSONS) {
      expect(lesson.minutes, lesson.slug).toBeGreaterThanOrEqual(5);
      expect(lesson.minutes, lesson.slug).toBeLessThanOrEqual(45);
    }
    for (const p of PATHS) expect(pathMinutes(p)).toBeGreaterThanOrEqual(15);
  });

  it("declares an artifact for every path and every lab", () => {
    expect(PATHS.filter((p) => !p.artifact.trim()).map((p) => p.slug)).toEqual([]);
    expect(LABS.filter((l) => !l.artifact.trim()).map((l) => l.id)).toEqual([]);
  });

  it("opens every lab with a lesson that teaches it", () => {
    // LabCard renders "Read first" from the primary skill, so the mapping must exist.
    const taught = new Set(LESSONS.flatMap((l) => l.lesson.skillIds));
    const cold = LABS.filter((lab) => !taught.has(lab.skillId)).map((l) => l.id);
    expect(cold).toEqual([]);
  });

  it("links practice back from lessons and paths", () => {
    const { labsForPath, labsForSkill } = content;
    for (const lab of LABS)
      expect(labsForSkill(lab.skillId).some((l) => l.id === lab.id)).toBe(true);
    // Every lab must be reachable from at least one path page.
    const reachable = new Set(PATHS.flatMap((p) => labsForPath(p).map((l) => l.id)));
    expect(LABS.filter((l) => !reachable.has(l.id)).map((l) => l.id)).toEqual([]);
  });

  it("has a lab for every skill", () => {
    // Skills reachable without a lab can never pass the Adapt gate, so their
    // "needs a lab" message points nowhere. This was true of six skills.
    const labSkills = new Set(LABS.map((l) => l.skillId));
    expect(SKILLS.filter((s) => !labSkills.has(s.id)).map((s) => s.id)).toEqual([]);
  });

  it("gives each lab exactly one skill and a distinct id", () => {
    expect(new Set(LABS.map((l) => l.id)).size).toBe(LABS.length);
    for (const lab of LABS) expect(SKILLS.some((s) => s.id === lab.skillId)).toBe(true);
  });
});
