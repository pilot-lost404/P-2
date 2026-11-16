import Link from "@/components/neet/AppLink";
import { labsForSkill } from "@/lib/neet/content";
import type { Lab } from "@/lib/neet/types";

const TYPE_LABEL = { lab: "Lab", variant: "Variant problem", artifact: "Artifact" } as const;

/**
 * Turns "read about it" into "do it". The curriculum invariant is that every
 * skill is taught before a lab assesses it, so a lesson can always name the lab
 * that comes next.
 */
export default function LabLinks({ skillIds }: { skillIds: string[] }) {
  const seen = new Set<string>();
  const labs: Lab[] = [];
  for (const id of skillIds) {
    for (const lab of labsForSkill(id)) {
      if (seen.has(lab.id)) continue;
      seen.add(lab.id);
      labs.push(lab);
    }
  }
  if (labs.length === 0) return null;

  return (
    <section aria-labelledby="practice-h" className="rounded-lg border border-line bg-surface p-4">
      <p id="practice-h" className="font-label text-xs uppercase tracking-widest text-accent">
        Practice this
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {labs.map((lab) => (
          <li key={lab.id}>
            <Link
              href={`/labs#${lab.id}`}
              className="flex min-h-11 items-center justify-between gap-2 rounded-md px-2 -mx-2 text-text hover:bg-surface-2"
            >
              <span>{lab.title}</span>
              <span className="shrink-0 font-label text-xs text-muted">
                {TYPE_LABEL[lab.evidenceType]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
