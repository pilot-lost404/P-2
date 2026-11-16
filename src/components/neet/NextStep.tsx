import Link from "@/components/neet/AppLink";
import { PATHS, allLessons, flatLessons, lessonHref } from "@/lib/neet/content";
import { computeAll, nextBestStep } from "@/lib/neet/scale";
import { useProgress } from "@/lib/neet/store";

/**
 * "Start here" — one action, not a menu.
 *
 * The research on self-directed learning is consistent: a list of 11 paths and 120
 * volumes produces paralysis, and the fix is a single recommended next action with a
 * stated reason. `nextBestStep()` already computed this; it was buried on /me behind
 * signing in. This surfaces it on the landing page for everyone.
 */
const KIND_LABEL: Record<string, string> = {
  lesson: "Next lesson",
  lab: "Practice lab",
  review: "Review",
};

export default function NextStep({ variant = "hero" }: { variant?: "hero" | "inline" }) {
  const { evidence, completed } = useProgress();
  const progress = computeAll(evidence);
  const step = nextBestStep(progress, completed);

  // Signed-out visitors with no local history get the true first lesson of the
  // beginner on-ramp rather than an empty state.
  // The genuine beginner on-ramp, not a slug guess: PATHS[0] is Track 0.
  const spine = PATHS.find((p) => p.level === "Beginner") ?? PATHS[0]!;
  const first = flatLessons(spine)[0]!;
  const started = evidence.length > 0 || completed.length > 0;

  // `completed` stores lesson keys ("path/lesson"), not hrefs, so compare on the key.
  const current = started
    ? allLessons().find((l) => lessonHref(l.path.slug, l.lesson.slug) === step.href)
    : undefined;

  const href = started ? step.href : lessonHref(spine.slug, first.lesson.slug);
  const title = started ? step.title : first.lesson.title;
  const reason = started
    ? step.reason
    : "Eight minutes, one idea, and one question that checks whether it landed.";
  const minutes = started ? (current?.lesson.minutes ?? 10) : first.lesson.minutes;
  const label = started ? (KIND_LABEL[step.kind] ?? "Next") : "Start here";
  const isDone = current
    ? completed.includes(`${current.path.slug}/${current.lesson.slug}`)
    : false;

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-5">
        <div className="min-w-0">
          <p className="font-label text-xs uppercase tracking-widest text-accent">{label}</p>
          <p className="mt-1 truncate font-semibold text-text">{title}</p>
          <p className="mt-0.5 text-sm text-muted">{reason}</p>
        </div>
        <Link href={href} className="btn-ink shrink-0 text-sm">
          {isDone ? "Revisit" : "Continue"} →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-xl text-left">
      <div className="rounded-3xl border border-line bg-bg p-5 shadow-[var(--shadow-lift)] sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-tint px-3 py-1 font-label text-xs uppercase tracking-widest text-accent">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            {label}
          </span>
          <span className="text-sm tabular-nums text-muted">{minutes} min</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-text">{title}</h2>
        <p className="mt-1.5 text-sm leading-6 text-muted">{reason}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link href={href} className="btn-ink flex-1 text-base sm:flex-none">
            {isDone ? "Revisit this lesson" : "Start learning"} →
          </Link>
          <Link
            href="/paths"
            className="text-sm text-muted underline-offset-4 hover:text-text hover:underline"
          >
            or browse all paths
          </Link>
        </div>
      </div>
    </div>
  );
}
