import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Empty, LoadError, PageHeader, SearchField } from "@/components/neet/ui";
import { listPrompts } from "@/lib/neet/library.functions";
import { pageHead } from "@/lib/neet/meta";

export const Route = createFileRoute("/exercises")({
  loader: () => listPrompts(),
  head: ({ match }) =>
    pageHead(
      "Design exercises",
      "Practice prompts from URL shorteners to safety cases, each with concepts and required artifacts.",
      match.pathname,
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  component: Exercises,
});

const split = (s: string | null) => (s ?? "").split(/;\s*/).filter(Boolean);

function Exercises() {
  const prompts = Route.useLoaderData();
  const [q, setQ] = useState("");
  const list = prompts.filter((p) =>
    [p.prompt_id, p.exercise, p.primary_concepts, p.required_artifacts]
      .join(" ")
      .toLowerCase()
      .includes(q.toLowerCase()),
  );
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
      <PageHeader eyebrow="Practice" title="Design exercises">
        {prompts.length} prompts. Pick one, produce the artifacts, then submit evidence in a lab.
      </PageHeader>
      <div className="mt-8">
        <SearchField value={q} onChange={setQ} placeholder="Search exercises or concepts…" />
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.length === 0 && (
          <li className="sm:col-span-2 lg:col-span-3">
            <Empty>No exercises match.</Empty>
          </li>
        )}
        {list.map((p) => (
          <li key={p.prompt_id} className="flex flex-col rounded-3xl bg-surface p-5">
            <span className="self-start rounded-full bg-bg px-2.5 py-1 text-xs tabular-nums text-muted">
              {p.prompt_id}
            </span>
            <h2 className="mt-3 text-lg font-semibold leading-snug">{p.exercise}</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {split(p.primary_concepts).map((c) => (
                <span key={c} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">Artifacts</p>
            <ul className="mt-1 space-y-1 text-sm">
              {split(p.required_artifacts).map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  {a}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
