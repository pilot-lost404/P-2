import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Chip, Field, LoadError, PageHeader } from "@/components/neet/ui";
import { getCoverage } from "@/lib/neet/library.functions";
import { pageHead } from "@/lib/neet/meta";

export const Route = createFileRoute("/coverage")({
  loader: () => getCoverage(),
  head: ({ match }) =>
    pageHead(
      "Research coverage",
      "How deep each domain goes, what evidence backs it, and which gaps remain.",
      match.pathname,
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  component: Coverage,
});

type Tab = "deep" | "research" | "audit" | "about";

function Coverage() {
  const { deep, research, audit, meta } = Route.useLoaderData();
  const [tab, setTab] = useState<Tab>("deep");
  const pm = (meta["pack_metadata"] ?? {}) as Record<string, unknown>;
  const notes = Array.isArray(pm["notes"]) ? (pm["notes"] as string[]) : [];
  const stats = Object.entries(pm).filter(([, v]) => typeof v === "number") as [string, number][];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
      <PageHeader eyebrow="Transparency" title="Research coverage">
        {String(pm["title"] ?? "")} {pm["as_of"] ? `· snapshot ${String(pm["as_of"])}` : ""}
      </PageHeader>
      {stats.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {stats.map(([k, v]) => (
            <div key={k} className="rounded-3xl bg-surface p-5">
              <dt className="text-xs capitalize text-muted">{k.replace(/_/g, " ")}</dt>
              <dd className="mt-1 text-3xl font-semibold tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
        <Chip active={tab === "deep"} onClick={() => setTab("deep")}>
          Deep coverage ({deep.length})
        </Chip>
        <Chip active={tab === "research"} onClick={() => setTab("research")}>
          Domain map ({research.length})
        </Chip>
        <Chip active={tab === "audit"} onClick={() => setTab("audit")}>
          Extraction audit ({audit.length})
        </Chip>
        <Chip active={tab === "about"} onClick={() => setTab("about")}>
          About the pack
        </Chip>
      </div>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {tab === "deep" &&
          deep.map((d) => (
            <li key={d.id} className="rounded-3xl bg-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold leading-snug">{d.domain}</h2>
                <span className="shrink-0 rounded-full bg-ink px-2.5 py-0.5 text-xs text-bg">
                  {d.depth_in_repository}
                </span>
              </div>
              <dl className="mt-3 grid gap-2">
                <Field label="Volumes">{d.new_deep_volumes}</Field>
                <Field label="Source anchors">{d.primary_source_anchors}</Field>
                <Field label="Evidence status">{d.evidence_status}</Field>
                <Field label="Remaining gap">{d.remaining_gap}</Field>
                <Field label="Next validation">{d.next_validation_action}</Field>
              </dl>
            </li>
          ))}
        {tab === "research" &&
          research.map((d) => (
            <li key={d.id} className="rounded-3xl bg-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold leading-snug">{d.domain}</h2>
                <span className="shrink-0 rounded-full bg-surface-2 px-2.5 py-0.5 text-xs">
                  {d.coverage_status}
                </span>
              </div>
              <dl className="mt-3 grid gap-2">
                <Field label="Knowledge files">{d.knowledge_files}</Field>
                <Field label="Source anchors">{d.source_anchors}</Field>
                <Field label="Limitations / gaps">{d.known_limitations_or_gaps}</Field>
              </dl>
            </li>
          ))}
        {tab === "audit" &&
          audit.map((a) => (
            <li key={a.id} className="rounded-3xl bg-surface p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-ink px-2.5 py-0.5 text-bg">{a.research_ref}</span>
                <span className="text-muted">{a.status}</span>
              </div>
              <h2 className="mt-2 font-semibold leading-snug">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noreferrer" className="hover:text-accent">
                    {a.title} ↗
                  </a>
                ) : (
                  a.title
                )}
              </h2>
              <dl className="mt-3 grid gap-2">
                <Field label="Tools">{a.tools}</Field>
                <Field label="Extraction">{a.extraction_extent}</Field>
                <Field label="Limitations">{a.limitations}</Field>
              </dl>
            </li>
          ))}
        {tab === "about" && (
          <li className="rounded-3xl bg-surface p-6 md:col-span-2">
            <dl className="grid gap-3">
              <Field label="Version">{String(pm["version"] ?? "")}</Field>
              <Field label="Status">{String(pm["status"] ?? "")}</Field>
              <Field label="Research workflow">
                {String(pm["primary_research_workflow"] ?? "")}
              </Field>
            </dl>
            <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted">
              What this pack is, and what it is not
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              {notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Counts in this snapshot are reconciled by hand. The per-pass reconciliation history
              (252 → 275 → 283 → 292 → 320 → 322 sources) is a build log, not a claim about the
              current pack, so it lives in <code>PACK_CHANGELOG.md</code> in the repository rather
              than on this page. A source appearing in the register is not proof that its full text
              was reviewed — that is what the audit tab is for.
            </p>
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-medium">
                Portal entity schema (JSON)
              </summary>
              <pre className="mt-3 max-h-96 overflow-auto rounded-2xl bg-bg p-4 text-xs">
                {JSON.stringify(meta["portal_entity_schema"], null, 2)}
              </pre>
            </details>
          </li>
        )}
      </ul>
    </div>
  );
}
