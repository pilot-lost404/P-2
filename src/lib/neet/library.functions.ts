import { createServerFn } from "@tanstack/react-start";
import * as pack from "./pack";
import type {
  ArticleListItem,
  CoverageDeepRecord,
  CoverageResearchRecord,
  ScrapeAuditRecord,
  SourceRecord,
} from "./pack";
import { ALL_ENRICHED_SOURCES, ENRICHED_SOURCES, getSourcesForArticle } from "./sourceEnrichment";

export type { ArticleListItem };

/**
 * Content reads.
 *
 * The generated pack is now the source of truth (pack.ts). Supabase is not queried
 * for pack content at all: it duplicated 1 MB of read-only markdown, and every query
 * was wrapped in a catch that swapped the data source without telling the user.
 * Accounts still live in Supabase (account.functions.ts).
 *
 * `sourceEnrichment.ts` (608 kB) is imported only by this module, which is imported
 * only by server routes and server functions — so it stays out of the browser bundle.
 */

/** A citation the article body actually references, resolved server-side. */
export type ArticleCitation = {
  source_id: string;
  title: string;
  url: string | null;
  source_type: string | null;
  relevance: string | null;
  verification: { state: string; label: string };
};

export const listArticles = createServerFn({ method: "GET" }).handler(
  async (): Promise<ArticleListItem[]> => pack.listArticles(),
);

export const searchArticles = createServerFn({ method: "GET" })
  .validator((q: string) => String(q ?? "").slice(0, 120))
  .handler(async ({ data: q }): Promise<string[]> => pack.searchArticles(q));

export const getArticle = createServerFn({ method: "GET" })
  .validator((slug: string) => String(slug))
  .handler(async ({ data: slug }) => {
    const res = pack.getArticle(slug);
    if (!res) return null;

    // Resolve citations here, on the server, so the browser never loads the
    // 608 kB enrichment index just to render a tooltip.
    const cited = getSourcesForArticle(res.article.filename, res.article.body);
    const citations: Record<string, ArticleCitation> = {};
    for (const s of cited) {
      citations[s.source_id] = {
        source_id: s.source_id,
        title: s.title,
        url: s.url,
        source_type: s.source_type,
        relevance: s.relevance,
        verification: pack.verificationFor(s.source_id),
      };
    }

    return {
      article: {
        slug: res.article.slug,
        filename: res.article.filename,
        number: res.article.number,
        title: res.article.title,
        track: res.article.track,
        track_order: res.article.track_order,
        summary: res.article.summary,
        body: res.article.body,
        word_count: res.article.word_count,
      },
      prev: res.prev,
      next: res.next,
      fileMap: res.fileMap,
      citations,
      citedSources: cited.map((s) => ({
        source_id: s.source_id,
        title: s.title,
        url: s.url,
        source_type: s.source_type,
        relevance: s.relevance,
        domain_topics: s.domain_topics ?? [],
        verification: pack.verificationFor(s.source_id),
      })),
    };
  });

export type EnrichedSourceOut = {
  source_id: string;
  title: string;
  url: string | null;
  source_type: string;
  relevance: string;
  quality_signal: string;
  limitations: string;
  domain_topics: string[];
  summary: string;
  takeaways: string;
  verification: { state: string; label: string; status: string | null };
};

export const listSources = createServerFn({ method: "GET" }).handler(
  async (): Promise<EnrichedSourceOut[]> => {
    const raw: SourceRecord[] = pack.listSources();

    // The pack is authoritative. A `sources` table override used to be consulted
    // whenever the pack was empty, which could silently replace 320 verified rows with
    // an unrelated table (and a broken remote table meant an empty register). One source
    // of truth is simpler and honest; drop the fallback.
    const rows = raw;

    return rows.map((s) => {
      const enriched = ENRICHED_SOURCES[s.source_id];
      return {
        source_id: s.source_id,
        title: s.title || enriched?.title || "",
        url: s.url || enriched?.url || null,
        source_type: s.source_type || enriched?.source_type || "Reference",
        relevance: s.relevance || enriched?.relevance || "",
        quality_signal: s.quality_signal || enriched?.quality_signal || "",
        limitations: s.limitations || enriched?.limitations || "",
        domain_topics: enriched?.domain_topics ?? [],
        summary: enriched?.summary || s.relevance || "",
        takeaways: enriched?.takeaways || "",
        verification: pack.verificationFor(s.source_id),
      };
    });
  },
);

export const listPrompts = createServerFn({ method: "GET" }).handler(async () =>
  pack.listPrompts(),
);

export const listRoles = createServerFn({ method: "GET" }).handler(async () => pack.listRoles());

export const getCoverage = createServerFn({ method: "GET" }).handler(async () => {
  const c = pack.getCoverage();
  return {
    deep: c.deep as CoverageDeepRecord[],
    research: c.research as CoverageResearchRecord[],
    audit: c.audit as ScrapeAuditRecord[],
    meta: c.meta as Record<string, string | number>,
    stats: pack.getPackStats(),
  };
});

/** Public health: honest, small, and free of server internals. */
export const getHealth = createServerFn({ method: "GET" }).handler(async () => {
  const stats = pack.getPackStats();
  const healthy = stats.articles >= 120 && stats.sources >= 300;
  return {
    status: healthy ? ("ok" as const) : ("degraded" as const),
    checked_at: new Date().toISOString(),
    pack: {
      articles: stats.articles,
      sources: stats.sources,
      words: stats.words,
      sources_audited: stats.sources_audited,
    },
  };
});

export const _internal = { ALL_ENRICHED_SOURCES };
