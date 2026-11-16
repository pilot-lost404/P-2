import { createFileRoute } from "@tanstack/react-router";
import Link from "@/components/neet/AppLink";
import { DISCIPLINES, PATHS, flatLessons, pathMinutes } from "@/lib/neet/content";

export const Route = createFileRoute("/paths/")({
  head: () => ({
    meta: [
      { title: "Learning paths · NEET" },
      {
        name: "description",
        content:
          "Eleven paths across systems thinking, system design and systems engineering — each with lessons, a practice lab and one artefact.",
      },
    ],
  }),
  component: PathsIndex,
});

function PathsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <header className="max-w-2xl">
        <p className="font-label text-sm uppercase tracking-widest text-accent">Paths</p>
        <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Choose a thread</h1>
        <p className="measure mt-4 text-lg leading-8 text-muted">
          Eleven paths. Each is a sequence of short lessons, a lab with a twist, and an artefact you
          could show someone. You do not need to start at the beginning of everything — start where
          the problem is.
        </p>
      </header>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {PATHS.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/paths/${p.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-muted">{p.level}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold leading-snug text-text">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{p.tagline}</p>
              <p className="mt-3 font-label text-xs text-muted">
                {DISCIPLINES[p.discipline].label} · {flatLessons(p).length} lessons · ~
                {Math.max(1, Math.round(pathMinutes(p) / 60))}h
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text">
                Open path
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
