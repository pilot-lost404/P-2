import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/neet/meta";
import Breadcrumbs from "@/components/neet/Breadcrumbs";
import RoadmapAccordion from "@/components/neet/RoadmapAccordion";
import StartButton, { PathProgressSummary } from "@/components/neet/StartButton";
import { DISCIPLINES, PATHS, flatLessons, pathMinutes, skillById } from "@/lib/neet/content";

function PathPage() {
  const { path } = Route.useLoaderData();

  const lessons = flatLessons(path);
  const skillIds = Array.from(new Set(lessons.flatMap((x) => x.lesson.skillIds)));

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs items={[{ label: "Paths", href: "/paths" }, { label: path.title }]} />

      <header className="mt-8 border-b border-line pb-10">
        <p className="font-label text-sm uppercase tracking-widest text-accent">
          {DISCIPLINES[path.discipline].label}
        </p>
        <h1 className="measure-wide mt-3 text-4xl font-semibold md:text-5xl">{path.title}</h1>
        <p className="measure mt-4 text-xl leading-8 text-muted">{path.tagline}</p>
        <p className="mt-6 font-label text-sm text-muted">
          {path.level} · {path.modules.length} modules · {lessons.length} lessons · ~
          {Math.max(1, Math.round(pathMinutes(path) / 60))}h
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <StartButton path={path} />
          <PathProgressSummary path={path} />
        </div>
      </header>

      <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-1">
        {[
          ["about-this-course", "About"],
          ["roadmap", "Roadmap"],
          ["artifact", "Artifact"],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-muted hover:bg-surface hover:text-text"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-14">
          <section id="about-this-course" aria-labelledby="about-h">
            <h2 id="about-h" className="text-3xl font-semibold">
              About this course
            </h2>
            <div className="measure mt-4 space-y-4 text-lg leading-8">
              {path.about.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <h3 className="mt-8 font-label text-sm uppercase tracking-widest text-muted">
              You will be able to
            </h3>
            <ul className="mt-3 space-y-2">
              {path.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="roadmap" aria-labelledby="roadmap-h">
            <h2 id="roadmap-h" className="mb-5 text-2xl font-semibold md:text-3xl">
              Roadmap
            </h2>
            <RoadmapAccordion path={path} />
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <section id="artifact" className="rounded-3xl bg-surface ring-1 ring-accent-dim p-6">
            <h2 className="font-label text-sm uppercase tracking-widest text-accent">
              Your artifact
            </h2>
            <p className="mt-3 font-semibold">{path.artifact}</p>
            <p className="mt-2 text-sm text-muted">
              This is the evidence that moves a skill to Proceed.
            </p>
          </section>
          <section className="rounded-3xl bg-surface p-6">
            <h2 className="font-label text-sm uppercase tracking-widest text-muted">
              Skills you build
            </h2>
            <ul className="mt-3 space-y-2">
              {skillIds.map((id) => (
                <li key={id} className="text-text">
                  {skillById(id)?.title}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/paths/$slug")({
  loader: ({ params }) => {
    const path = PATHS.find((p) => p.slug === params.slug);
    if (!path) throw notFound();
    return { path };
  },
  head: ({ loaderData }) =>
    pageHead(loaderData?.path.title ?? "Path", loaderData?.path.tagline ?? "A learning path."),
  component: PathPage,
});
