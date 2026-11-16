import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import Link from "@/components/neet/AppLink";
import { Chip, Empty, Field, LoadError, PageHeader, SearchField } from "@/components/neet/ui";
import { listSources } from "@/lib/neet/library.functions";
import { pageHead } from "@/lib/neet/meta";

export const Route = createFileRoute("/sources")({
  loader: () => listSources(),
  head: () =>
    pageHead(
      "Source library",
      "Every referenced handbook, standard, paper and course with its quality signal, scrape audit and cross-volume citations.",
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  component: Sources,
});

const VERIFY_STYLE: Record<string, string> = {
  full: "border-ok/40 bg-ok/10",
  partial: "border-warn/40 bg-warn/10",
  discovery: "border-line bg-surface-2",
  unreachable: "border-line bg-surface-2",
  unaudited: "border-line bg-bg",
};

const VERIFY_ICON: Record<string, string> = {
  full: "✓",
  partial: "◐",
  discovery: "·",
  unreachable: "✕",
  unaudited: "?",
};

/** Verification uses an icon, a border and a label — never colour alone (WCAG 1.4.1). */
function VerificationPill({ verification }: { verification: { state: string; label: string } }) {
  return (
    <span
      title={verification.label}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium text-text ${
        VERIFY_STYLE[verification.state] ?? VERIFY_STYLE["unaudited"]
      }`}
    >
      <span aria-hidden>{VERIFY_ICON[verification.state] ?? "?"}</span>
      {verification.label}
    </span>
  );
}

function Sources() {
  const sources = Route.useLoaderData();
  const [q, setQ] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const [limit, setLimit] = useState(50);
  const [activeHash, setActiveHash] = useState<string>("");

  // Deep links like /sources#S254 point at a source that may sit past the initial
  // 50-row window, so raise the limit until the target is rendered and scroll to it.
  useEffect(() => {
    const raw = window.location.hash.replace("#", "");
    if (!raw) return;
    const i = sources.findIndex((s) => s.source_id.toLowerCase() === raw.toLowerCase());
    if (i >= 0 && i >= limit) setLimit(i + 1);
  }, [sources, limit]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveHash(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 200);
      }
    }
  }, [sources, limit]);

  const types = useMemo(() => {
    const c = new Map<string, number>();
    sources.forEach((s) => s.source_type && c.set(s.source_type, (c.get(s.source_type) ?? 0) + 1));
    return [...c.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map((x) => x[0]);
  }, [sources]);

  const domainTopics = useMemo(() => {
    const c = new Map<string, number>();
    sources.forEach((s) => {
      s.domain_topics?.forEach((t) => c.set(t, (c.get(t) ?? 0) + 1));
    });
    return [...c.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map((x) => x[0]);
  }, [sources]);

  const list = useMemo(() => {
    const t = q.toLowerCase().trim();
    return sources.filter((s) => {
      const matchType = !type || s.source_type === type;
      const matchTopic = !topic || s.domain_topics?.includes(topic);
      if (!matchType || !matchTopic) return false;
      if (!t) return true;

      const topicsStr = s.domain_topics?.join(" ") || "";
      const fullSearch = [
        s.source_id,
        s.title,
        s.relevance,
        s.source_type,
        s.limitations,
        s.takeaways,
        s.verification.label,
        s.verification.status,
        topicsStr,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return fullSearch.includes(t);
    });
  }, [sources, q, type, topic]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
      <PageHeader eyebrow="Sources" title="Source register">
        {sources.length} records. Each row shows how far it was actually read — a source in the
        register is not proof its content was reviewed.
      </PageHeader>

      <div className="mt-8 space-y-4">
        <SearchField
          value={q}
          onChange={(v) => {
            setQ(v);
            setLimit(50);
          }}
          placeholder="Search by ID (e.g. S01), title, domain, standard, or cited volume…"
        />

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Filter by Domain Topic
          </span>
          <div className="mt-1.5 flex gap-2 overflow-x-auto pb-1">
            <Chip active={!topic} onClick={() => setTopic(null)}>
              All topics
            </Chip>
            {domainTopics.map((dt) => (
              <Chip
                key={dt}
                active={topic === dt}
                onClick={() => setTopic(dt === topic ? null : dt)}
              >
                {dt}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Filter by Source Type
          </span>
          <div className="mt-1.5 flex gap-2 overflow-x-auto pb-1">
            <Chip active={!type} onClick={() => setType(null)}>
              All types
            </Chip>
            {types.map((st) => (
              <Chip key={st} active={type === st} onClick={() => setType(st === type ? null : st)}>
                {st}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-muted">
        <p>
          {list.length} shown of {sources.length}
        </p>
        {(type || topic || q) && (
          <button
            type="button"
            onClick={() => {
              setType(null);
              setTopic(null);
              setQ("");
            }}
            className="text-xs text-accent hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>

      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {list.length === 0 && (
          <li className="md:col-span-2">
            <Empty>No sources match your query.</Empty>
          </li>
        )}

        {list.slice(0, limit).map((s) => {
          const isTargeted = activeHash.toUpperCase() === s.source_id.toUpperCase();

          return (
            <li
              key={s.source_id}
              id={s.source_id}
              className={`rounded-3xl bg-surface p-5 transition-all scroll-mt-28 border ${
                isTargeted
                  ? "border-accent ring-2 ring-accent/30 shadow-lg bg-surface-2"
                  : "border-line hover:border-accent/40"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-ink px-2.5 py-1 font-mono font-medium text-bg">
                    {s.source_id}
                  </span>
                  {s.source_type && <span className="font-medium text-muted">{s.source_type}</span>}
                </div>

                <VerificationPill verification={s.verification} />
              </div>

              <h2 className="mt-3 text-lg font-semibold leading-snug">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span>{s.title}</span>
                    <span className="text-xs text-muted">↗</span>
                  </a>
                ) : (
                  s.title
                )}
              </h2>

              {s.domain_topics && s.domain_topics.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {s.domain_topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <dl className="mt-4 grid gap-2.5 text-sm">
                <Field label="Relevance">{s.relevance}</Field>
                {s.takeaways && <Field label="Key takeaway">{s.takeaways}</Field>}
                <Field label="Quality signal">{s.quality_signal}</Field>
                <Field label="Limitations">{s.limitations}</Field>
                {s.verification.status && (
                  <Field label="Audit record">{s.verification.status}</Field>
                )}
              </dl>
            </li>
          );
        })}
      </ul>

      {list.length > limit && (
        <div className="mt-10 text-center">
          <button
            type="button"
            className="btn-soft px-6 py-2.5"
            onClick={() => setLimit((l) => l + 60)}
          >
            Show more ({list.length - limit} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
