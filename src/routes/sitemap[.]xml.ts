import { createFileRoute } from "@tanstack/react-router";
import { PATHS, allLessons, lessonHref } from "@/lib/neet/content";
import { listArticles } from "@/lib/neet/library.functions";
import { absoluteUrl } from "@/lib/neet/meta";

/**
 * /sitemap.xml
 *
 * The site is a 120-volume reference library plus 29 lessons; without a sitemap none of
 * that is discoverable except by crawling the library accordion. TanStack Start's built-in
 * sitemap only covers prerendered pages, and these routes are rendered on demand, so this
 * is a server route that builds the URL set from the same pack the pages render.
 *
 * The bracketed filename (`sitemap[.]xml`) escapes the dot — TanStack Router would
 * otherwise treat "xml" as a child route segment.
 *
 * Entries are absolute only when VITE_SITE_URL is set at build time; see meta.ts.
 */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const articles = await listArticles();
        const today = new Date().toISOString().slice(0, 10);

        const urls: { loc: string; changefreq: string; priority: string }[] = [
          { loc: "/", changefreq: "weekly", priority: "1.0" },
          { loc: "/paths", changefreq: "weekly", priority: "0.9" },
          { loc: "/labs", changefreq: "monthly", priority: "0.8" },
          { loc: "/library", changefreq: "weekly", priority: "0.9" },
          { loc: "/sources", changefreq: "monthly", priority: "0.7" },
          { loc: "/method", changefreq: "yearly", priority: "0.7" },
          { loc: "/exercises", changefreq: "monthly", priority: "0.6" },
          { loc: "/careers", changefreq: "monthly", priority: "0.6" },
          { loc: "/coverage", changefreq: "monthly", priority: "0.5" },
          { loc: "/health", changefreq: "daily", priority: "0.3" },
          ...PATHS.map((p) => ({
            loc: `/paths/${p.slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })),
          // Lessons are readable without an account, so they belong in the index.
          ...allLessons().map((l) => ({
            loc: lessonHref(l.path.slug, l.lesson.slug),
            changefreq: "monthly",
            priority: "0.7",
          })),
          ...articles.map((a) => ({
            loc: `/library/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${absoluteUrl(u.loc)}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            // Content only changes on deploy; an hour of caching is plenty.
            "cache-control": "public, max-age=3600, stale-while-revalidate=86400",
          },
        });
      },
    },
  },
});
