import Link from "@/components/neet/AppLink";
import { lessonHref, lessonKey } from "@/lib/neet/content";
import { pathProgress } from "@/lib/neet/derive";
import { useProgress } from "@/lib/neet/store";
import type { Path } from "@/lib/neet/types";
import ProgressBar from "./ProgressBar";

export default function LessonSidebar({ path, current }: { path: Path; current: string }) {
  const { completed } = useProgress();
  const p = pathProgress(path, completed);
  return (
    <nav aria-label="Course outline" className="text-sm">
      <Link
        href={`/paths/${path.slug}`}
        className="text-base font-medium leading-snug text-text hover:text-accent"
      >
        {path.title}
      </Link>
      <div className="mt-3 flex items-center gap-3">
        <ProgressBar value={p.ratio} label="Course progress" className="flex-1" />
        <span className="font-label text-xs text-muted">
          {p.done}/{p.total}
        </span>
      </div>
      <ol className="mt-6 space-y-5">
        {path.modules.map((m) => (
          <li key={m.slug}>
            <p className="font-label text-xs uppercase tracking-widest text-muted">{m.title}</p>
            <ul className="mt-2 space-y-1">
              {m.lessons.map((l) => {
                const isCurrent = l.slug === current;
                const isDone = completed.includes(lessonKey(path.slug, l.slug));
                return (
                  <li key={l.slug}>
                    <Link
                      href={lessonHref(path.slug, l.slug)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`flex items-start gap-2 rounded-md px-2 py-1.5 ${isCurrent ? "bg-surface-2 text-accent" : "text-muted hover:text-text"}`}
                    >
                      <span
                        aria-hidden
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${isDone ? "bg-accent" : "border border-muted"}`}
                      />
                      <span>
                        {l.title}
                        {isDone && <span className="sr-only"> (completed)</span>}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </nav>
  );
}
