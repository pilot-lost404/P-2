import { useNavigate } from "@tanstack/react-router";
import { splitHref } from "@/lib/neet/href";
import { useEffect, useMemo, useRef, useState } from "react";
import { LABS, PATHS, allLessons, lessonHref } from "@/lib/neet/content";

interface Item {
  label: string;
  hint: string;
  href: string;
  keywords: string;
}

const PAGES: Item[] = [
  {
    label: "Knowledge library",
    hint: "Page",
    href: "/library",
    keywords: "articles volumes pack read",
  },
  { label: "Design exercises", hint: "Page", href: "/exercises", keywords: "prompts practice" },
  { label: "Careers", hint: "Page", href: "/careers", keywords: "roles competencies jobs" },
  { label: "Sources", hint: "Page", href: "/sources", keywords: "references standards books" },
  { label: "Research coverage", hint: "Page", href: "/coverage", keywords: "audit gaps matrix" },
  { label: "Paths", hint: "Page", href: "/paths", keywords: "courses explore curriculum map" },
  { label: "Practice labs", hint: "Page", href: "/labs", keywords: "labs practice artifact" },
  {
    label: "The method",
    hint: "Page",
    href: "/method",
    keywords: "search know adapt proceed scale",
  },
  { label: "My progress", hint: "Page", href: "/me", keywords: "dashboard scale radar" },
  { label: "Content status", hint: "Page", href: "/health", keywords: "health status pack intact" },
  {
    label: "Calibration",
    hint: "Page",
    href: "/me/calibration",
    keywords: "confidence performance gap",
  },
];

export default function CommandPalette() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(
    () => [
      ...PAGES,
      ...PATHS.map((p) => ({
        label: p.title,
        hint: "Path",
        href: `/paths/${p.slug}`,
        keywords: p.tagline,
      })),
      ...allLessons().map((x) => ({
        label: x.lesson.title,
        hint: `Lesson · ${x.path.title}`,
        href: lessonHref(x.path.slug, x.lesson.slug),
        keywords: x.lesson.summary,
      })),
      ...LABS.map((l) => ({
        label: l.title,
        hint: "Lab",
        href: "/labs#" + l.id,
        keywords: l.brief,
      })),
    ],
    [],
  );

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items.slice(0, 8);
    return items
      .map((i) => ({
        i,
        s: i.label.toLowerCase().includes(t)
          ? 2
          : (i.keywords + i.hint).toLowerCase().includes(t)
            ? 1
            : 0,
      }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((x) => x.i);
  }, [q, items]);

  useEffect(() => {
    const reset = () => {
      setQ("");
      setActive(0);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        reset();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => {
      reset();
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("neet:palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("neet:palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function go(item?: Item) {
    if (!item) return;
    setOpen(false);
    navigate(splitHref(item.href) as never);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-[15vh]"
      onMouseDown={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="w-full max-w-xl overflow-hidden rounded-3xl bg-surface shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === "Enter") go(results[active]);
          }}
          placeholder="Search lessons, paths, labs…"
          aria-label="Search"
          className="w-full border-b border-line bg-transparent px-5 py-4 text-lg text-text placeholder:text-muted focus:outline-none"
        />
        <ul role="listbox" className="max-h-80 overflow-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-muted">
              Nothing found for &ldquo;{q}&rdquo;.
            </li>
          )}
          {results.map((r, i) => (
            <li
              key={r.href + r.label}
              role="option"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(r)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2.5 ${i === active ? "bg-surface-2 text-accent" : "text-text"}`}
            >
              <span>{r.label}</span>
              <span className="truncate font-label text-xs text-muted">{r.hint}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-line px-4 py-2 font-label text-xs text-muted">
          ↑↓ navigate · ↵ open · esc close
        </p>
      </div>
    </div>
  );
}
