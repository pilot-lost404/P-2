import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Chip, Field, LoadError, PageHeader } from "@/components/neet/ui";
import { listRoles } from "@/lib/neet/library.functions";
import { pageHead } from "@/lib/neet/meta";

export const Route = createFileRoute("/careers")({
  loader: () => listRoles(),
  head: ({ match }) =>
    pageHead(
      "Career roles",
      "Systems roles with competency areas, deliverables and a portfolio project for each.",
      match.pathname,
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  component: Careers,
});

function Careers() {
  const roles = Route.useLoaderData();
  const levels = Array.from(new Set(roles.map((r) => r.career_level).filter(Boolean))) as string[];
  const [level, setLevel] = useState<string | null>(null);
  const list = roles.filter((r) => !level || r.career_level === level);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
      <PageHeader eyebrow="Careers" title="Roles & competencies">
        {roles.length} roles, each with the work it produces and a project that proves it.
      </PageHeader>
      <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
        <Chip active={!level} onClick={() => setLevel(null)}>
          All levels
        </Chip>
        {levels.map((l) => (
          <Chip key={l} active={level === l} onClick={() => setLevel(l)}>
            {l}
          </Chip>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {list.map((r) => (
          <li key={r.id} className="rounded-3xl bg-surface p-6">
            <p className="text-xs text-muted">{r.career_level}</p>
            <h2 className="mt-1 text-xl font-semibold leading-snug">{r.role}</h2>
            <dl className="mt-4 grid gap-3">
              <Field label="Competency areas">{r.competency_areas}</Field>
              <Field label="Typical deliverables">{r.typical_deliverables}</Field>
              <Field label="Source anchors">{r.source_anchors}</Field>
            </dl>
            {r.portfolio_project && (
              <div className="mt-4 rounded-2xl bg-bg p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  Portfolio project
                </p>
                <p className="mt-1 text-sm">{r.portfolio_project}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
