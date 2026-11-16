import Link from "@/components/neet/AppLink";
import { lessonHref } from "@/lib/neet/content";
import { firstOpenLesson, pathProgress } from "@/lib/neet/derive";
import { useProgress } from "@/lib/neet/store";
import type { Path } from "@/lib/neet/types";

export default function StartButton({ path }: { path: Path }) {
  const { completed } = useProgress();
  const p = pathProgress(path, completed);
  const target = firstOpenLesson(path, completed);
  const label =
    p.done === 0 ? "Start this path" : p.done === p.total ? "Review this path" : "Continue";
  return (
    <Link href={lessonHref(path.slug, target!.lesson.slug)} className="inline-flex btn-ink">
      {label} →
    </Link>
  );
}

export function PathProgressSummary({ path }: { path: Path }) {
  const { completed } = useProgress();
  const p = pathProgress(path, completed);
  return (
    <span className="font-label text-sm text-muted">
      {p.done} of {p.total} lessons complete
    </span>
  );
}
