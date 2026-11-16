/**
 * Response security headers, applied in `src/server.ts` to every response the Worker emits.
 *
 * Why here and not in `src/start.ts`: request middleware is compiled in but does not run
 * for document responses in this app, so HTML shipped with no headers at all. The Worker
 * entry is the one place that sees every response — pages, errors and asset fallbacks —
 * so that is where the contract lives. Verified against the built Worker (`wrangler dev`),
 * not against the Vite dev server, which does not run the Worker at all.
 */

/** Supabase is called directly from the browser for auth and RLS-scoped reads. */
function supabaseOrigin(): string | null {
  const url =
    (import.meta.env?.["VITE_SUPABASE_URL"] as string | undefined) ??
    (typeof process !== "undefined" ? process.env["SUPABASE_URL"] : undefined);
  if (!url) return null;
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
}

/**
 * `script-src` has to allow inline scripts: TanStack Start emits its hydration bootstrap
 * inline, and this framework version has no nonce plumbing (there is a `nonce` type on the
 * server context but nothing consumes it). Removing `'unsafe-inline'` today would break the
 * app rather than harden it. Everything else is locked down, which still blocks the
 * high-value attacks a CSP is for: injected external scripts, form hijacking, base-tag
 * rewrites, plugins, and framing by anyone outside the editor allowlist.
 */
function contentSecurityPolicy(): string {
  const supabase = supabaseOrigin();
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    `connect-src 'self'${supabase ? ` ${supabase}` : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    // The app is intentionally embeddable by its own preview surfaces (Lovable editor,
    // the hosted sandbox preview) and by nothing else. `'none'` would be stricter but
    // would make the preview blank, which is a worse failure than a scoped allowlist.
    "frame-ancestors 'self' https://*.lovable.app https://*.lovableproject.com https://*.e2b.app",
    "upgrade-insecure-requests",
  ].join("; ");
}

export function securityHeaders(): Record<string, string> {
  return {
    "Content-Security-Policy": contentSecurityPolicy(),
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    // Deliberately no X-Frame-Options: CSP frame-ancestors supersedes it, and the
    // legacy header cannot express the preview allowlist above.
  };
}

/**
 * Returns a response with the security headers applied.
 *
 * Redirects and 304s keep their status; the headers are added without touching the body,
 * so streaming responses (HTML, sitemap XML) are not buffered.
 */
/**
 * Pages that render anything about the signed-in person, or that hold a form with a
 * secret in it. These must never be stored by a shared cache, and must not be replayed
 * from a browser cache after sign-out. `private, no-store` covers both.
 */
const PERSONAL_PREFIXES = ["/me", "/auth", "/reset-password"];

export function isPersonalPath(pathname: string): boolean {
  const p = pathname.toLowerCase();
  return PERSONAL_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`));
}

export function cacheControlFor(pathname: string): string {
  // HTML is never fingerprinted, so it must revalidate; personal pages must not persist.
  if (isPersonalPath(pathname)) return "private, no-store";
  return "public, max-age=0, must-revalidate";
}

export function applySecurityHeaders(
  response: Response,
  headers = securityHeaders(),
  pathname?: string,
): Response {
  // A redirect we cannot safely repackage would lose its body; cloning the headers is
  // enough because every response we produce here has a mutable header list.
  const all = pathname ? { ...headers, "Cache-Control": cacheControlFor(pathname) } : headers;
  try {
    for (const [name, value] of Object.entries(all)) response.headers.set(name, value);
    return response;
  } catch {
    const copy = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
    for (const [name, value] of Object.entries(all)) copy.headers.set(name, value);
    return copy;
  }
}
