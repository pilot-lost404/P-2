import Link from "@/components/neet/AppLink";
import { useState } from "react";
import { lessonHref, lessonKey } from "@/lib/neet/content";
import { useProgress } from "@/lib/neet/store";
import type { Path } from "@/lib/neet/types";

export default function RoadmapAccordion({ path }: { path: Path }) {
  const { completed } = useProgress();
  const [open, setOpen] = useState<Record<string, boolean>>({ [path.modules[0]!.slug]: true });

  return (
    <ol className="space-y-3">
      {path.modules.map((m, mi) => {
        const done = m.lessons.filter((l) =>
          completed.includes(lessonKey(path.slug, l.slug)),
        ).length;
        const isOpen = !!open[m.slug];
        const panelId = `panel-${m.slug}`;
        return (
          <li key={m.slug} className="rounded-3xl bg-surface">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((o) => ({ ...o, [m.slug]: !o[m.slug] }))}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <span className="font-label text-sm text-accent">
                  {String(mi + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold text-text">{m.title}</span>
                  <span className="block text-sm text-muted">{m.summary}</span>
                </span>
                <span className="font-label text-xs text-muted">
                  {done}/{m.lessons.length}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-muted transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <ul id={panelId} className="border-t border-line">
                {m.lessons.map((l) => {
                  const isDone = completed.includes(lessonKey(path.slug, l.slug));
                  return (
                    <li key={l.slug} className="border-b border-line last:border-b-0">
                      <Link
                        href={lessonHref(path.slug, l.slug)}
                        className="flex items-start gap-4 px-5 py-4 hover:bg-surface-2"
                      >
                        <span
                          aria-hidden
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${isDone ? "border-accent bg-accent text-bg" : "border-line text-transparent"}`}
                        >
                          ✓
                        </span>
                        <span className="flex-1">
                          <span className="block text-text">
                            {l.title}
                            {isDone && <span className="sr-only"> (completed)</span>}
                          </span>
                          <span className="block text-sm text-muted">{l.summary}</span>
                        </span>
                        <span className="font-label text-xs text-muted">{l.minutes} min</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}
