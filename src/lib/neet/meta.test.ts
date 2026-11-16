import { describe, expect, it } from "vitest";
import { canonicalPath } from "./meta";

describe("canonicalPath", () => {
  it("keeps the root as a single slash", () => {
    expect(canonicalPath("/")).toBe("/");
    expect(canonicalPath("")).toBe("/");
  });

  it("strips the trailing slash the router redirects away from", () => {
    // The router answers /paths/ with a 307 to /paths, so /paths/ is never canonical.
    expect(canonicalPath("/paths/")).toBe("/paths");
    expect(canonicalPath("/library/02-systems-thinking/")).toBe("/library/02-systems-thinking");
  });

  it("lower-cases so case variants converge on one URL", () => {
    // /Me and /PATHS both render today; without this each would claim to be its own canonical.
    expect(canonicalPath("/Me")).toBe("/me");
    expect(canonicalPath("/PATHS")).toBe("/paths");
    expect(canonicalPath("/Learn/Engineering-From-Scratch/The-Thin-Slice")).toBe(
      "/learn/engineering-from-scratch/the-thin-slice",
    );
  });

  it("collapses repeated slashes rather than emitting them", () => {
    expect(canonicalPath("//paths//")).toBe("/paths");
  });

  it("leaves an already-canonical path untouched", () => {
    expect(canonicalPath("/library/02-systems-thinking")).toBe("/library/02-systems-thinking");
  });
});
