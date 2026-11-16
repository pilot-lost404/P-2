import { describe, expect, it } from "vitest";
import { applySecurityHeaders, cacheControlFor, securityHeaders } from "./security-headers";

describe("security headers", () => {
  it("states every header the browser needs", () => {
    const h = securityHeaders();
    expect(h["Strict-Transport-Security"]).toContain("max-age=");
    expect(h["X-Content-Type-Options"]).toBe("nosniff");
    expect(h["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
    expect(h["Content-Security-Policy"]).toBeTruthy();
    expect(h["Permissions-Policy"]).toMatch(/camera=\(\)/);
  });

  it("never weakens script-src with unsafe-eval", () => {
    // 'unsafe-inline' is required: TanStack Start emits its hydration bootstrap inline and
    // this framework version has no nonce plumbing. 'unsafe-eval' is not required by
    // anything in the bundle, so it must never be added.
    const csp = securityHeaders()["Content-Security-Policy"]!;
    expect(csp).not.toContain("unsafe-eval");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("form-action 'self'");
  });

  it("scopes framing to our own origins instead of everyone", () => {
    const csp = securityHeaders()["Content-Security-Policy"]!;
    expect(csp).toContain("frame-ancestors");
    expect(csp).not.toContain("frame-ancestors *");
    // No wildcard default: an unset default-src is how a CSP ends up doing nothing.
    expect(csp).not.toContain("default-src *");
  });

  it("applies headers to a response without changing its status or body", async () => {
    const original = new Response("hello", {
      status: 418,
      headers: { "content-type": "text/plain", "x-custom": "kept" },
    });
    const out = applySecurityHeaders(original);
    expect(out.status).toBe(418);
    expect(out.headers.get("x-custom")).toBe("kept");
    expect(out.headers.get("content-type")).toBe("text/plain");
    expect(out.headers.get("x-content-type-options")).toBe("nosniff");
    expect(await out.text()).toBe("hello");
  });

  it("keeps redirects redirecting", () => {
    const redirect = new Response(null, { status: 302, headers: { location: "/auth" } });
    const out = applySecurityHeaders(redirect);
    expect(out.status).toBe(302);
    expect(out.headers.get("location")).toBe("/auth");
    expect(out.headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
  });

  it("keeps a 304 empty rather than turning it into a body", async () => {
    const notModified = new Response(null, { status: 304 });
    const out = applySecurityHeaders(notModified);
    expect(out.status).toBe(304);
    expect(await out.text()).toBe("");
  });
});

describe("cache policy", () => {
  it("never lets a shared cache store a personal page", () => {
    for (const p of ["/me", "/me/calibration", "/auth", "/reset-password"]) {
      expect(cacheControlFor(p), p).toBe("private, no-store");
    }
  });

  it("makes public HTML revalidate rather than go stale", () => {
    for (const p of ["/", "/paths", "/library/02-systems-thinking", "/labs"]) {
      expect(cacheControlFor(p), p).toBe("public, max-age=0, must-revalidate");
    }
  });

  it("does not treat a lookalike path as personal", () => {
    // /method and /membership are not /me; a naive startsWith("/me") would catch /method.
    expect(cacheControlFor("/method")).toBe("public, max-age=0, must-revalidate");
    expect(cacheControlFor("/membership")).toBe("public, max-age=0, must-revalidate");
  });

  it("applies the per-path cache header through the wrapper", () => {
    const out = applySecurityHeaders(new Response("x"), securityHeaders(), "/me/calibration");
    expect(out.headers.get("cache-control")).toBe("private, no-store");
    expect(out.headers.get("x-content-type-options")).toBe("nosniff");
  });
});
