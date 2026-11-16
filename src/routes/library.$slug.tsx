import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { recordArticleRead } from "@/lib/neet/account.functions";
import Link from "@/components/neet/AppLink";
import Breadcrumbs from "@/components/neet/Breadcrumbs";
import Markdown from "@/components/neet/Markdown";
import { slugify } from "@/lib/neet/slug";
import { LoadError } from "@/components/neet/ui";
import { getArticle } from "@/lib/neet/library.functions";
import { absoluteUrl, pageHead } from "@/lib/neet/meta";

export const Route = createFileRoute("/library/$slug")({
  loader: async ({ params }) => {
    const data = await getArticle({ data: params.slug });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, match }) =>
    pageHead(
      loaderData?.article.title ?? "Library",
      loaderData?.article.summary.slice(0, 160) || "A volume from the knowledge pack.",
      match.pathname,
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-3xl font-semibold">Volume not found</h1>
      <Link href="/library" className="btn-ink mt-6">
        Back to library
      </Link>
    </div>
  ),
  component: ArticlePage,
});

const VERIFICATION_STYLE: Record<string, string> = {
  full: "border-ok/40 bg-ok/10 text-text",
  partial: "border-warn/40 bg-warn/10 text-text",
  discovery: "border-line bg-surface-2 text-muted",
  unreachable: "border-line bg-surface-2 text-muted",
  unaudited: "border-line bg-bg text-muted",
};

/** Verification is text + border, never colour alone. */
function VerificationBadge({ v }: { v: { state: string; label: string } }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
        VERIFICATION_STYLE[v.state] ?? VERIFICATION_STYLE["unaudited"]
      }`}
    >
      {v.state === "full" ? "✓" : v.state === "partial" ? "◐" : "·"} {v.label}
    </span>
  );
}

/** Article structured data, so search and reading tools see the real title/date. */
function ArticleJsonLd({ title, summary, slug }: { title: string; summary: string; slug: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    url: absoluteUrl(`/library/${slug}`),
    ...(absoluteUrl("/") && {
      isPartOf: { "@type": "WebSite", name: "NEET", url: absoluteUrl("/") },
    }),
    inLanguage: "en",
    isAccessibleForFree: true,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function ArticlePage() {
  const { article, prev, next, fileMap, citedSources, citations } = Route.useLoaderData();
  const markRead = useServerFn(recordArticleRead);

  // Reading a volume is activity. `article` existed as an event kind but nothing ever
  // emitted it, so the heatmap ignored the library entirely.
  useEffect(() => {
    const day = new Date().toISOString().slice(0, 10);
    markRead({ data: { slug: article.slug, occurred_on: day } }).catch(() => {
      /* activity tracking must never break reading */
    });
  }, [article.slug, markRead]);

  const headings = Array.from(article.body.matchAll(/^##\s+(.+)$/gm)).map((m) =>
    m[1]!.replace(/[*_`]/g, "").trim(),
  );

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-5 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <ArticleJsonLd title={article.title} summary={article.summary} slug={article.slug} />
      <article className="min-w-0">
        <Breadcrumbs
          items={[
            { label: "Library", href: "/library" },
            { label: article.track, href: `/library?track=${encodeURIComponent(article.track)}` },
            { label: article.number === null ? "Guide" : `No. ${article.number}` },
          ]}
        />
        <p className="mt-8 text-sm text-muted">
          {article.track} · {Math.max(1, Math.round(article.word_count / 220))} min read ·{" "}
          {article.word_count.toLocaleString()} words
        </p>
        <h1 className="measure-wide mt-2 text-3xl font-semibold md:text-4xl">{article.title}</h1>

        {headings.length > 2 && (
          <details className="mt-6 rounded-2xl bg-surface p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-medium">On this page</summary>
            <ul className="mt-3 space-y-2 text-sm">
              {headings.map((h) => (
                <li key={h}>
                  <a href={`#${slugify(h)}`} className="text-muted hover:text-accent">
                    {h}
                  </a>
                </li>
              ))}
              {citedSources && citedSources.length > 0 && (
                <li>
                  <a href="#cited-sources" className="font-medium text-accent">
                    Cited sources ({citedSources.length})
                  </a>
                </li>
              )}
            </ul>
          </details>
        )}

        <div className="mt-6">
          <Markdown body={article.body} fileMap={fileMap} citations={citations} />
        </div>

        {citedSources && citedSources.length > 0 && (
          <section id="cited-sources" className="mt-16 border-t border-line pt-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-semibold leading-tight">Cited sources</h2>
              <span className="rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-xs font-medium text-muted">
                {citedSources.length} {citedSources.length === 1 ? "reference" : "references"}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Each row shows how far the source was actually read. A citation means the volume
              points at it — not that the whole document was reviewed.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {citedSources.map((s) => (
                <div
                  key={s.source_id}
                  className="group flex flex-col justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/50"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="rounded-md bg-ink px-2 py-0.5 font-mono text-[11px] font-semibold text-bg">
                        {s.source_id}
                      </span>
                      <span className="truncate text-[11px] text-muted">{s.source_type}</span>
                    </div>
                    <h3 className="mt-2.5 font-semibold leading-snug text-text">{s.title}</h3>
                    {s.relevance && (
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                        {s.relevance}
                      </p>
                    )}
                    <div className="mt-2">
                      <VerificationBadge v={s.verification} />
                    </div>
                    {s.domain_topics && s.domain_topics.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {s.domain_topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] text-muted"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-xs">
                    <Link
                      href={`/sources#${s.source_id}`}
                      className="prose-link inline-flex items-center gap-1 font-medium"
                    >
                      Source register <span>→</span>
                    </Link>
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-text transition-colors flex items-center gap-0.5"
                      >
                        Publisher <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <nav
          className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2"
          aria-label="Volume navigation"
        >
          {prev ? (
            <Link
              href={`/library/${prev.slug}`}
              className="rounded-3xl bg-surface p-5 hover:bg-surface-2"
            >
              <span className="text-xs text-muted">← Previous</span>
              <span className="mt-1 block font-medium">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/library/${next.slug}`}
              className="rounded-3xl bg-surface p-5 text-right hover:bg-surface-2"
            >
              <span className="text-xs text-muted">Next →</span>
              <span className="mt-1 block font-medium">{next.title}</span>
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-auto">
        <nav aria-label="On this page">
          <p className="font-label text-xs uppercase tracking-wide text-muted">On this page</p>
          <ul className="mt-3 space-y-2 border-l border-line pl-4 text-sm">
            {headings.map((h) => (
              <li key={h}>
                <a href={`#${slugify(h)}`} className="text-muted hover:text-accent">
                  {h}
                </a>
              </li>
            ))}
            {citedSources && citedSources.length > 0 && (
              <li key="cited-sources">
                <a href="#cited-sources" className="font-medium text-accent hover:underline">
                  Cited sources ({citedSources.length})
                </a>
              </li>
            )}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
