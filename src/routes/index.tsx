import { createFileRoute, Link } from "@tanstack/react-router";
import NextStep from "@/components/neet/NextStep";
import PathCard from "@/components/neet/PathCard";
import { SpotlightCard } from "@/components/neet/fx";
import { DISCIPLINES, LABS, PATHS, STAGES, allLessons, pathMinutes } from "@/lib/neet/content";
import { packCounts } from "@/lib/neet/pack-counts.generated";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEET — learn systems thinking, system design & systems engineering" },
      {
        name: "description",
        content:
          "A group learning systems thinking, system design and systems engineering by building. Short lessons, honest progress, real artefacts. Not a medical entrance exam, not a policy category.",
      },
      {
        property: "og:title",
        content: "NEET — systems thinking, system design & systems engineering",
      },
      {
        property: "og:description",
        content:
          "Short lessons, evidence-based mastery that decays, and artefacts you can show. We ain't an academy. We're a group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const lessons = allLessons().length;
  const minutes = PATHS.reduce((n, p) => n + pathMinutes(p), 0);

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Disambiguation: the acronym collides with a medical exam and a policy label. */}
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="font-semibold text-text">NEET</span>
            <span aria-hidden>·</span>
            <span>Not in Education, Employment, or Training</span>
          </p>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight text-text md:text-5xl">
            We ain&apos;t an academy.
            <span className="mt-1 block text-muted">We&apos;re a group.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
            Learn to see systems, design them, and prove the design holds. Short lessons, real
            artefacts, and a mastery score that decays when you stop using it.
          </p>

          <p className="mt-3 text-xs text-muted">
            Not the medical entrance exam. Not a policy category. A learning group.
          </p>
        </div>

        {/* One action, with a stated reason. */}
        <NextStep />

        <p className="mt-8 text-center font-label text-xs uppercase tracking-[0.2em] text-muted">
          Search · Know · Adapt · Proceed
        </p>
      </section>

      {/* --------------------------------------------------------------- facts */}
      <section aria-label="What is here" className="mx-auto mt-8 max-w-6xl px-5">
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { k: String(PATHS.length), v: "paths", s: `${lessons} lessons` },
            { k: `${Math.round(minutes / 60)}h`, v: "of lessons", s: "8–46 min each" },
            { k: String(LABS.length), v: "practice labs", s: "each with a twist" },
            {
              k: String(packCounts.articles),
              v: "reference volumes",
              s: `${Math.round(packCounts.words / 1000)}k words`,
            },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl bg-surface p-5">
              <dd className="text-3xl font-semibold tabular-nums text-text">{s.k}</dd>
              <dt className="mt-0.5 text-sm font-medium text-text">{s.v}</dt>
              <p className="mt-1 text-xs text-muted">{s.s}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* --------------------------------------------------------------- paths */}
      <section className="mx-auto mt-20 max-w-6xl px-5" aria-labelledby="paths-h">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-label text-sm uppercase tracking-widest text-accent">Paths</p>
            <h2 id="paths-h" className="mt-1.5 text-3xl font-semibold">
              Three disciplines, one thread
            </h2>
            <p className="measure mt-2 text-muted">
              How things behave, how to design them, how to build them. Start anywhere — they
              connect.
            </p>
          </div>
          <Link to="/paths" className="btn-soft text-sm">
            All {PATHS.length} paths
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PATHS.slice(0, 3).map((p) => (
            <PathCard key={p.slug} path={p} />
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {(Object.keys(DISCIPLINES) as (keyof typeof DISCIPLINES)[]).map((d) => (
            <li key={d}>
              <Link
                to="/paths"
                hash={`g-${d}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm text-text hover:border-accent"
              >
                <span className="font-medium">{DISCIPLINES[d].label}</span>
                <span className="text-muted">{PATHS.filter((p) => p.discipline === d).length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- method */}
      <section className="mx-auto mt-20 max-w-6xl px-5" aria-labelledby="method-h">
        <p className="font-label text-sm uppercase tracking-widest text-accent">The method</p>
        <h2 id="method-h" className="mt-1.5 text-3xl font-semibold">
          Four stages, for every skill
        </h2>
        <p className="measure mt-2 text-muted">
          Levels are gated by the kind of evidence you have, not by how many questions you answered.
          You cannot reach <em>Adapt</em> without a lab, or <em>Proceed</em> without an artefact.
        </p>

        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {STAGES.map((s) => (
            <li key={s.id}>
              <SpotlightCard className="h-full p-5">
                <div className="flex items-center gap-1.5" aria-hidden>
                  {STAGES.map((x) => (
                    <span
                      key={x.id}
                      className={`h-1.5 flex-1 rounded-full ${
                        x.level <= s.level ? "bg-accent" : "bg-surface-2"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-5 text-xs tabular-nums text-muted">Level {s.level}</p>
                <h3 className="mt-1 text-xl font-semibold">{s.label}</h3>
                <p className="mt-2 text-sm leading-6 text-text">{s.meaning}</p>
                <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-muted">
                  {s.evidence}
                </p>
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </section>

      {/* ----------------------------------------------------------------- why */}
      <section className="mx-auto mt-20 max-w-6xl px-5" aria-labelledby="why-h">
        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl bg-ink p-8 text-bg md:p-10">
            <p className="font-label text-sm uppercase tracking-widest opacity-70">Why NEET</p>
            <h2 id="why-h" className="mt-2 max-w-md text-3xl font-semibold leading-tight">
              The label, taken back.
            </h2>
            <p className="mt-4 max-w-lg leading-7 opacity-85">
              NEET describes where you sit relative to a system, not what you can do. The research
              on this label is clear that it is too often used as a noun for people, and that it
              sticks. We use it once, about ourselves, and then get on with the work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/method" className="rounded-full bg-bg px-5 py-2.5 font-medium text-ink">
                Read the method
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-line p-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Show work, not badges.</h2>
              <p className="mt-3 leading-7 text-muted">
                Mastery is computed from your evidence and fades when unused, so it stays honest.
                Confidence is recorded on every question, so you can see where you were sure and
                wrong.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/me" className="btn-ink text-sm">
                See my scale
              </Link>
              <Link to="/labs" className="btn-soft text-sm">
                Try a lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- library */}
      <section className="mx-auto mt-20 max-w-6xl px-5" aria-labelledby="lib-h">
        <div className="rounded-3xl bg-surface p-8 md:p-10">
          <p className="font-label text-sm uppercase tracking-widest text-accent">Reference</p>
          <h2 id="lib-h" className="mt-1.5 text-3xl font-semibold">
            Stuck? Then use the library.
          </h2>
          <p className="measure mt-2 text-muted">
            {packCounts.articles} volumes, {packCounts.sources} sources. Every source is labelled
            with how far it was actually read — a citation is not a claim of review.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/library" className="btn-soft text-sm">
              Browse volumes
            </Link>
            <Link to="/sources" className="btn-soft text-sm">
              Source register
            </Link>
            <Link to="/exercises" className="btn-soft text-sm">
              Design exercises
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
