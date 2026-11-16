import { DISCIPLINES, SKILLS, skillById } from "@/lib/neet/content";
import { computeAll } from "@/lib/neet/scale";
import { useProgress } from "@/lib/neet/store";
import type { Discipline } from "@/lib/neet/types";
import StageRing from "./StageRing";

const ORDER: Discipline[] = ["thinking", "design", "engineering"];

/** The whole curriculum as a map: skills, prerequisites, and your level in each. */
export default function SkillMap({ compact = false }: { compact?: boolean }) {
  const { evidence } = useProgress();
  const progress = computeAll(evidence);
  const lvl = (id: string) => progress.find((p) => p.skillId === id)?.level ?? 0;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {ORDER.map((d) => (
        <section key={d} aria-labelledby={`map-${d}`}>
          <h3 id={`map-${d}`} className="font-label text-sm uppercase tracking-widest text-accent">
            {DISCIPLINES[d].label}
          </h3>
          <ol className="mt-4 space-y-0">
            {SKILLS.filter((s) => s.discipline === d).map((s, i, arr) => {
              const locked = s.prerequisites.some((p) => lvl(p) < 1);
              return (
                <li key={s.id} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-7 top-14 h-[calc(100%-3rem)] w-px bg-line"
                    />
                  )}
                  <StageRing level={lvl(s.id) as 0} size={56} locked={locked && lvl(s.id) === 0} />
                  <div className="flex-1">
                    <p
                      className={`font-medium ${locked && lvl(s.id) === 0 ? "text-muted" : "text-text"}`}
                    >
                      {s.title}
                    </p>
                    {!compact && <p className="text-sm text-muted">{s.blurb}</p>}
                    {s.prerequisites.length > 0 && (
                      <p className="mt-1 font-label text-xs text-muted">
                        {locked && lvl(s.id) === 0 ? "Locked · needs " : "Builds on "}
                        {s.prerequisites.map((p) => skillById(p)?.title).join(", ")}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
