import { describe, expect, it } from "vitest";
import {
  getArticle,
  getPackStats,
  listArticles,
  listPrompts,
  listRoles,
  listSources,
  parseCsv,
  resolveTrack,
  searchArticles,
  verificationFor,
} from "./pack";

/**
 * These assertions replace db.server.test.ts, which could never run: it imported
 * `node:sqlite`, which Vitest could not bundle, so 229 lines of checks contributed
 * zero tests while the suite still reported green.
 */
describe("pack content store", () => {
  it("loads every file in content/pack", () => {
    const stats = getPackStats();
    expect(stats.files).toBe(128);
    expect(stats.articles).toBe(120);
    expect(stats.sources).toBe(320);
    expect(stats.practice_prompts).toBe(73);
    expect(stats.roles).toBe(28);
    expect(stats.coverage_deep).toBe(50);
    expect(stats.coverage_research).toBe(28);
    expect(stats.scrape_audit).toBe(162);
  });

  it("reports real word counts rather than a hardcoded number", () => {
    expect(getPackStats().words).toBeGreaterThan(90_000);
  });

  it("orders articles by track, then volume number", () => {
    const articles = listArticles();
    expect(articles[0]?.slug).toBe("00-start-here");
    expect(articles[0]?.track).toBe("Start here");
    for (let i = 1; i < articles.length; i++) {
      expect(articles[i]!.track_order).toBeGreaterThanOrEqual(articles[i - 1]!.track_order);
    }
  });

  it("gives every article a title, summary and slug", () => {
    for (const a of listArticles()) {
      expect(a.slug).toMatch(/^[a-z0-9-]+$/);
      expect(a.title.length).toBeGreaterThan(0);
      expect(a.word_count).toBeGreaterThan(0);
      expect(a.summary.length).toBeGreaterThan(0);
    }
  });

  it("resolves previous/next navigation", () => {
    const first = getArticle("00-start-here");
    expect(first).not.toBeNull();
    expect(first!.prev).toBeNull();
    expect(first!.next).not.toBeNull();

    const missing = getArticle("does-not-exist");
    expect(missing).toBeNull();
  });

  it("searches titles, summaries and bodies case-insensitively", () => {
    const hits = searchArticles("feedback");
    expect(hits.length).toBeGreaterThan(0);
    expect(searchArticles("")).toEqual([]);
    expect(searchArticles("zzzzz-not-a-term")).toEqual([]);
  });

  it("maps track numbers to the published taxonomy", () => {
    expect(resolveTrack(0)).toEqual([0, "Start here"]);
    expect(resolveTrack(12)).toEqual([1, "Core foundation"]);
    expect(resolveTrack(118)).toEqual([7, "Sixth-level dependability"]);
    expect(resolveTrack(null)).toEqual([8, "Pack guides"]);
  });

  it("exposes verification state for every source", () => {
    const sources = listSources();
    const states = new Set(sources.map((s) => verificationFor(s.source_id).state));
    expect(states.has("unaudited")).toBe(true);
    for (const s of sources.slice(0, 20)) {
      expect(verificationFor(s.source_id).label.length).toBeGreaterThan(0);
    }
  });

  it("parses quoted CSV including escaped quotes and commas", () => {
    const rows = parseCsv('a,b\n"one, two","he said ""hi"""\n');
    expect(rows).toEqual([{ a: "one, two", b: 'he said "hi"' }]);
  });

  it("keeps prompts and roles intact", () => {
    expect(listPrompts().length).toBe(73);
    expect(listRoles().length).toBe(28);
    expect(getPackStats().sources_audited).toBeGreaterThan(0);
  });
});
