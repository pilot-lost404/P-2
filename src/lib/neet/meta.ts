const SITE = "NEET";
/** Where the deployed site lives, used for canonical + social URLs. */
export const SITE_URL =
  (import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "https://neet-learning.pages.dev";

export function pageHead(title: string, description: string, path?: string) {
  const full = `${title} · ${SITE}`;
  const canonical = path ? `${SITE_URL}${path}` : undefined;
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
