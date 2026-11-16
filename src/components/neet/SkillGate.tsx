import { computeAll } from "@/lib/neet/scale";
import { useProgress } from "@/lib/neet/store";
import { skillById } from "@/lib/neet/content";

/**
 * The reason a skill is stuck, shown where the reader can act on it.
 *
 * `computeSkill()` has always returned a `gate` string ("Needs a variant or lab to reach
 * Adapt") but only the dashboard rendered it, one navigation away from the lesson that
 * would clear it. Prose in the docs said a learner is "stuck at Level 2 and told why";
 * this makes that true on the page.
 */
export default function SkillGate({
  skillId,
  className = "",
}: {
  skillId: string;
  className?: string;
}) {
  const { evidence } = useProgress();
  const skill = skillById(skillId);
  const progress = computeAll(evidence).find((p) => p.skillId === skillId);
  if (!skill || !progress || !progress.gate) return null;

  return (
    <p className={`text-sm text-muted ${className}`}>
      <span className="font-label text-xs uppercase tracking-widest text-accent">
        {skill.title}
      </span>{" "}
      · at level {progress.level}. {progress.gate}
    </p>
  );
}
