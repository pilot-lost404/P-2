import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import Link from "@/components/neet/AppLink";
import { Chip, Empty, LoadError, PageHeader, SearchField } from "@/components/neet/ui";
import { listArticles, searchArticles } from "@/lib/neet/library.functions";
import { pageHead } from "@/lib/neet/meta";

type Search = { q?: string | undefined; track?: string | undefined };

export const Route = createFileRoute("/library/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
    track: typeof s["track"] === "string" ? s["track"] : undefined,
  }),
  loader: () => listArticles(),
  head: () =>
    pageHead(
      "Knowledge library",
      "Every volume of the systems design, systems thinking and systems engineering knowledge pack.",
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  component: Library,
});

const ROMAN = [
  "0",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
];

function Library() {
  const articles = Route.useLoaderData();
  const { q = "", track } = Route.useSearch();
  const navigate = useNavigate({ from: "/library/" });
  const [input, setInput] = useState(q);
  const [bodyHits, setBodyHits] = useState<string[] | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      navigate({ search: (p) => ({ ...p, q: input || undefined }), replace: true });
      // `bodyHits === null` means "no full-text search ran yet". Leaving it null made
      // every row fail the filter, so the list was blank until you typed 3 characters.
      setBodyHits(input.trim().length >= 3 ? [] : null);
      if (input.trim().length >= 3)
        searchArticles({ data: input })
          .then(setBodyHits)
          .catch(() => setBodyHits(null));
    }, 250);
    return () => clearTimeout(t);
  }, [input, navigate]);

  const tracks = useMemo(
    () =>
      Array.from(new Map(articles.map((a) => [a.track, a.track_order])).entries())
        .sort((a, b) => a[1] - b[1])
        .map((x) => x[0]),
    [articles],
  );
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return articles.filter(
      (a) =>
        (!track || a.track === track) &&
        (!t ||
          a.title.toLowerCase().includes(t) ||
          a.summary.toLowerCase().includes(t) ||
          // Until the async full-text search returns, match whatever loaded with the page.
          (bodyHits === null
            ? a.title.toLowerCase().includes(t) || a.summary.toLowerCase().includes(t)
            : bodyHits.includes(a.slug))),
    );
  }, [articles, q, track, bodyHits]);
  const groups = tracks
    .map((t) => ({ t, items: filtered.filter((a) => a.track === t) }))
    .filter((g) => g.items.length);
  // `null` means "the default view": first track open, everything else closed.
  const [openSet, setOpenSet] = useState<Set<string> | null>(null);
  const allOpen = openSet !== null && openSet.size === tracks.length;
  const toggle = (t: string) => {
    const base = openSet ?? new Set<string>([tracks[0] ?? ""]);
    const n = new Set(base);
    if (n.has(t)) n.delete(t);
    else n.add(t);
    setOpenSet(n);
  };
  const words = articles.reduce((n, a) => n + a.word_count, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
      <PageHeader eyebrow="Library" title="The knowledge pack">
        {articles.length} volumes · {Math.round(words / 1000)}k words on systems science, systems
        engineering, architecture, assurance and practice.
      </PageHeader>

      <div className="sticky top-16 z-20 -mx-4 mt-8 bg-bg/90 px-4 py-3 backdrop-blur sm:-mx-5 sm:px-5">
        <SearchField
          value={input}
          onChange={setInput}
          placeholder="Search titles, summaries and full text…"
        />
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <Chip
            active={!track}
            onClick={() => navigate({ search: (p) => ({ ...p, track: undefined }) })}
          >
            All
          </Chip>
          {tracks.map((t) => (
            <Chip
              key={t}
              active={track === t}
              onClick={() => navigate({ search: (p) => ({ ...p, track: t }) })}
            >
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-label text-sm uppercase tracking-widest text-accent">
            {tracks.length} tracks · {articles.length} volumes
          </p>
          <p className="mt-1.5 text-muted">
            Open a track to see its volumes. Each is a full reading, sourced and cross-linked.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpenSet(allOpen ? new Set() : new Set(tracks))}
          className="btn-soft min-h-11 text-sm"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="mt-6 border-t border-line">
        {groups.length === 0 && (
          <div className="pt-8">
            <Empty>No volumes match “{q}”.</Empty>
          </div>
        )}
        {groups.map(({ t, items }) => {
          const idx = tracks.indexOf(t);
          const isOpen = !!q || !!track || (openSet === null ? idx === 0 : openSet.has(t));
          const mins = items.reduce((n, a) => n + Math.max(1, Math.round(a.word_count / 220)), 0);
          return (
            <section key={t} className="border-b border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(t)}
                className="group grid w-full grid-cols-[2.75rem_1fr_auto] items-center gap-3 py-5 text-left sm:grid-cols-[4rem_1fr_auto_auto] sm:gap-6"
              >
                <span className="text-sm tabular-nums text-muted">{ROMAN[idx] ?? idx}.</span>
                <span className="text-lg font-semibold tracking-tight text-text transition group-hover:text-accent sm:text-xl">
                  {t}
                </span>
                <span className="hidden text-sm text-muted sm:inline">
                  {items.length} {items.length === 1 ? "volume" : "volumes"} · ~
                  {mins < 60 ? `${mins} min` : `${Math.round(mins / 60)}h`}
                </span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted transition ${isOpen ? "rotate-45 bg-text text-bg" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <ol className="pb-5 sm:pl-[5.5rem]">
                  {items.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/library/${a.slug}`}
                        className="group grid grid-cols-[2.75rem_1fr_auto] items-baseline gap-3 rounded-2xl px-0 py-3 transition hover:bg-surface sm:grid-cols-[3.5rem_1fr_auto] sm:px-3"
                      >
                        <span className="text-xs tabular-nums text-muted">
                          {a.number === null ? "—" : String(a.number).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-medium text-text group-hover:text-accent">
                            {a.title}
                          </span>
                          <span className="mt-0.5 line-clamp-1 block text-sm text-muted">
                            {a.summary}
                          </span>
                        </span>
                        <span className="whitespace-nowrap text-xs text-muted">
                          {Math.max(1, Math.round(a.word_count / 220))} min
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
