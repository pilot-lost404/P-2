import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "./AppLink";
import { slugify } from "@/lib/neet/slug";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CITATION_ALIASES } from "@/lib/neet/citation-aliases";
import type { ArticleCitation } from "@/lib/neet/library.functions";

export type CitationMap = Record<string, ArticleCitation>;

function text(children: unknown): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(text).join("");
  if (children && typeof children === "object" && "props" in children)
    return text((children as { props: { children: unknown } }).props.children);
  return "";
}

/** Pre-processes body markdown to convert citations [S01], [S23, S112], [NASA-SP-2016-6105] into cite: links */
/**
 * Turns `[S01]` / `[S274, S275]` / `[NASA-…]` markers outside code fences into links to
 * the source register. They deliberately point at `/sources#S01` rather than a custom
 * `cite:` scheme: react-markdown's default `urlTransform` allows only http(s), mailto,
 * tel and relative URLs, so a custom scheme was silently rewritten to `href=""`.
 */
function enrichMarkdownCitations(body: string): string {
  const parts = body.split(/(```[\s\S]*?```)/g);
  return parts
    .map((part, idx) => {
      if (idx % 2 === 1) return part; // inside a code fence
      return part.replace(/\[([A-Za-z0-9\-_/:. ,–—]+)\](?!\()/g, (match, inner: string) => {
        const trimmed = inner.trim();
        const sMatches = trimmed.match(/S\d{2,3}/g);
        if (sMatches && sMatches.length > 0 && /^[S\d\s,–—-]+$/.test(trimmed)) {
          return sMatches.map((sid: string) => `[${sid}](/sources#${sid})`).join(" ");
        }
        if (/^(NASA|ISO|IEC|MIL-STD|SysML)/i.test(trimmed)) {
          return `[${trimmed}](/sources#${CITATION_ALIASES[trimmed] ?? trimmed})`;
        }
        return match;
      });
    })
    .join("");
}

/**
 * A citation chip.
 *
 * Resolution happens on the server (getArticle returns a `citations` map), so the
 * browser no longer imports the 608 kB enrichment index. When a citation has no
 * server record we still render an honest chip — it links to the register and says
 * plainly that the source is unverified, rather than pretending to know it.
 */
function CitationPill({
  sourceId,
  label,
  citation,
}: {
  sourceId: string;
  label: string;
  citation?: ArticleCitation | undefined;
}) {
  const canonicalId = CITATION_ALIASES[sourceId] ?? sourceId;
  const resolved = citation ?? undefined;
  const displayLabel = label.startsWith("[") && label.endsWith("]") ? label : `[${label}]`;
  const verified = resolved?.verification.state === "full";

  return (
    <TooltipProvider delayDuration={120}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={`/sources#${canonicalId}`}
            className="mx-0.5 inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 align-baseline font-mono text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            <span>{displayLabel}</span>
            {/* Non-colour signal for verification state (WCAG 1.4.1). */}
            {verified && <span aria-label="read in full">✓</span>}
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          className="z-50 max-w-xs rounded-xl border border-line bg-bg p-3 text-left text-text shadow-xl"
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded-md bg-ink px-1.5 py-0.5 font-mono text-[11px] font-semibold text-bg">
              {canonicalId}
            </span>
            {resolved?.source_type && (
              <span className="text-[11px] font-medium text-muted">{resolved.source_type}</span>
            )}
          </div>
          <p className="text-xs font-semibold leading-snug text-text">
            {resolved?.title ?? "Not in the source register"}
          </p>
          {resolved?.relevance && (
            <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-muted">
              {resolved.relevance}
            </p>
          )}
          <p className="mt-2 text-[11px] text-muted">
            {resolved ? resolved.verification.label : "No audit record"} · open in register →
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/** Renders pack Markdown with the site's type scale; internal .md links route to the library, citations route to sources. */
export default function Markdown({
  body,
  fileMap,
  citations = {},
}: {
  body: string;
  fileMap: Record<string, string>;
  citations?: CitationMap;
}) {
  const enrichedBody = useMemo(() => enrichMarkdownCitations(body), [body]);

  return (
    <div className="measure min-w-0 text-[1.0625rem] leading-[1.7] text-text">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: () => null,
          h2: ({ children }) => (
            <h2
              id={slugify(text(children))}
              className="mb-3 mt-14 scroll-mt-24 text-2xl font-semibold leading-tight md:text-3xl"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={slugify(text(children))}
              className="mb-2 mt-10 scroll-mt-24 text-xl font-semibold"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => <h4 className="mb-2 mt-6 font-semibold">{children}</h4>,
          p: ({ children }) => <p className="my-5 leading-[1.7]">{children}</p>,
          ul: ({ children }) => (
            <ul className="my-5 list-disc space-y-2 pl-6 marker:text-accent">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-5 list-decimal space-y-2 pl-6 marker:text-muted">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 rounded-r-xl border-l-4 border-accent bg-accent-tint px-5 py-1 text-text">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-10 border-line" />,
          code: ({ children, className }) =>
            className ? (
              <code className={className}>{children}</code>
            ) : (
              <code className="rounded-md bg-surface-2 px-1.5 py-0.5 text-[0.9em] [overflow-wrap:anywhere]">
                {children}
              </code>
            ),
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-2xl bg-surface p-5 text-sm leading-6">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-surface-2 text-xs uppercase tracking-wide text-muted">
              {children}
            </thead>
          ),
          th: ({ children }) => <th className="px-4 py-3 font-medium">{children}</th>,
          td: ({ children }) => (
            <td className="border-t border-line px-4 py-3 align-top">{children}</td>
          ),
          a: ({ href = "", children }) => {
            if (href.startsWith("cite:")) {
              const rawId = href.replace("cite:", "");
              return (
                <CitationPill
                  sourceId={rawId}
                  label={text(children)}
                  citation={citations[rawId] ?? citations[CITATION_ALIASES[rawId] ?? rawId]}
                />
              );
            }
            if (/^\/sources#S\d{2,3}$/i.test(href) || /^#S\d{2,3}$/i.test(href)) {
              const rawId = href.split("#")[1]!;
              return (
                <CitationPill
                  sourceId={rawId}
                  label={text(children)}
                  citation={citations[rawId] ?? citations[CITATION_ALIASES[rawId] ?? rawId]}
                />
              );
            }
            const file = href.split("#")[0]!.split("/").pop()!;
            const slug = fileMap[file];
            if (slug)
              return (
                <Link href={`/library/${slug}`} className="prose-link font-medium">
                  {children}
                </Link>
              );
            if (/^https?:/.test(href))
              return (
                <a href={href} target="_blank" rel="noreferrer" className="prose-link break-words">
                  {children}
                </a>
              );
            return (
              <a href={href} className="prose-link">
                {children}
              </a>
            );
          },
        }}
      >
        {enrichedBody}
      </ReactMarkdown>
    </div>
  );
}
