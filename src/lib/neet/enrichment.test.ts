import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { getSourcesForArticle, CITATION_ALIASES } from "./sourceEnrichment";

const body = readFileSync("content/pack/02_SYSTEMS_THINKING.md", "utf8");

describe("citation resolution", () => {
  it("finds explicit S-ids in a body", () => {
    const ids = getSourcesForArticle("02_SYSTEMS_THINKING.md", body).map((s) => s.source_id);
    expect(ids).toContain("S04");
    expect(ids).toContain("S07");
  });

  it("resolves standards aliases case-insensitively", () => {
    const ids = getSourcesForArticle("x.md", "See NASA/SP-2016-6105 and ISO/IEC/IEEE 15288.").map(
      (s) => s.source_id,
    );
    expect(ids).toContain(CITATION_ALIASES["NASA/SP-2016-6105"]);
    expect(ids).toContain(CITATION_ALIASES["ISO/IEC/IEEE 15288"]);
  });

  it("prefers the longest alias match (6105A over 6105)", () => {
    const ids = getSourcesForArticle("x.md", "NASA-HDBK-1009A applies.").map((s) => s.source_id);
    expect(ids).toContain(CITATION_ALIASES["NASA-HDBK-1009A"]);
  });

  it("never returns duplicate ids", () => {
    const ids = getSourcesForArticle("02_SYSTEMS_THINKING.md", body).map((s) => s.source_id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("does not throw on a body with no citations", () => {
    expect(getSourcesForArticle("empty.md", "Nothing to see.")).toEqual([]);
  });
});
