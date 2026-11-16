const SITE = "NEET";

/**
 * Where the deployed site lives, used for canonical URLs and the sitemap.
 *
 * Set `VITE_SITE_URL` at build time (e.g. `VITE_SITE_URL=https://example.org npm run build`).
 * There is deliberately no hard-coded fallback host: writing absolute URLs for a domain the
 * site is not served from is worse than writing relative ones, because it tells crawlers and
 * link previews to visit somebody else's host. When the variable is absent, canonical links
 * and sitemap entries stay relative to whatever origin serves the page.
 */
export const SITE_URL = ((import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "").replace(
  /\/+$/,
  "",
);

/** Absolute when the origin is known, otherwise path-relative. */
export function absoluteUrl(path: string) {
  return SITE_URL ? `${SITE_URL}${path}` : path;
}

/**
 * Normalise a pathname into the one canonical form we advertise.
 *
 * Research consensus on duplicate URLs is that you pick one form and apply it to canonicals,
 * internal links, the sitemap and redirects alike; if those disagree, a search engine is free
 * to ignore the one you declared. Routing already collapses a trailing slash with a 307, so
 * the remaining divergence is letter case — TanStack's router ignores it, so `/Paths` and
 * `/paths` both render. Lower-casing here means every case variant points at one URL instead
 * of each page claiming to be its own canonical.
 */
export function canonicalPath(pathname: string) {
  const trimmed = pathname
    .replace(/\/{2,}/g, "/")
    .replace(/\/+$/, "")
    .toLowerCase();
  return trimmed === "" ? "/" : trimmed;
}

/**
 * Head tags for a page. `pathname` should come from the router's `match.pathname` so the
 * canonical is the page's own URL — hand-passed paths drift out of date the moment a route
 * moves, and a stale canonical is worse than none.
 */
export function pageHead(title: string, description: string, pathname?: string) {
  const full = `${title} · ${SITE}`;
  const canonical = pathname ? absoluteUrl(canonicalPath(pathname)) : undefined;
  return {
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
