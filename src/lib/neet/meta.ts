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

export function pageHead(title: string, description: string, path?: string) {
  const full = `${title} · ${SITE}`;
  const canonical = path ? absoluteUrl(path) : undefined;
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
