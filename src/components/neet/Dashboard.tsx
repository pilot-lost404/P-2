import Link from "@/components/neet/AppLink";
import { DISCIPLINES, PATHS, STAGES, SKILLS } from "@/lib/neet/content";
import { pathProgress } from "@/lib/neet/derive";
import {
  calibration,
  computeAll,
  disciplineScores,
  nextBestStep,
  reviewQueue,
} from "@/lib/neet/scale";
import { actions, useHydrated, useProgress } from "@/lib/neet/store";
import { useMe } from "@/hooks/use-me";
import ProgressBar from "./ProgressBar";
import SkillMap from "./SkillMap";
import SkillRadar from "./SkillRadar";

export default function Dashboard() {
  const hydrated = useHydrated();
  const { evidence, completed, saved } = useProgress();
  const { me } = useMe();

  if (!hydrated) {
    return (
      <div
        className="grid gap-6 md:grid-cols-2"
        aria-busy="true"
        aria-label="Loading your progress"
      >
        <div className="skeleton h-72" />
        <div className="skeleton h-72" />
        <div className="skeleton h-48 md:col-span-2" />
      </div>
    );
  }

  const progress = computeAll(evidence);
  // Honest scope label: the radar is built from this browser's evidence unless the
  // account actually returned scored evidence rows.
  const syncedEvidence = (me?.events ?? []).filter((e) => e.score !== null).length;
  const scores = disciplineScores(progress);
  const next = nextBestStep(progress, completed);
  const cal = calibration(evidence);
  const due = reviewQueue(progress).slice(0, 3);
  const empty = evidence.length === 0 && completed.length === 0;

  return (
    <div className="space-y-8">
      {empty && (
        <div className="rounded-xl border border-dashed border-accent-dim bg-surface p-8 text-center">
          <h2 className="text-2xl font-semibold">Nothing here yet.</h2>
          <p className="mx-auto mt-2 max-w-md text-muted">
            Your scale fills in as you answer questions and submit lab evidence. Start a lesson, or
            load sample data to see how it looks.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/paths" className="btn-ink">
              Browse paths
            </Link>
            <button type="button" onClick={actions.loadDemo} className="btn-soft text-sm">
              Load sample data
            </button>
          </div>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section aria-labelledby="radar-h" className="rounded-3xl bg-surface p-6">
          {syncedEvidence > 0 && (
            <p className="mb-2 text-xs text-muted">
              Includes {syncedEvidence} evidence rows from your account.
            </p>
          )}
          <h2 id="radar-h" className="font-label text-sm uppercase tracking-widest text-accent">
            Discipline scores
          </h2>
          <SkillRadar scores={scores} />
          <ul className="mt-4 grid grid-cols-3 gap-2 text-center">
            {(Object.keys(DISCIPLINES) as (keyof typeof DISCIPLINES)[]).map((d) => (
              <li key={d}>
                <p className="text-3xl font-semibold tabular-nums text-text">
                  {Math.round(scores[d])}
                </p>
                <p className="text-xs text-muted">{DISCIPLINES[d].label}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-6">
          <section
            aria-labelledby="next-h"
            className="rounded-3xl bg-surface ring-1 ring-accent-dim p-6"
          >
            <h2 id="next-h" className="font-label text-sm uppercase tracking-widest text-accent">
              Next best step
            </h2>
            <p className="mt-3 text-xl font-semibold text-text">{next.title}</p>
            <p className="mt-1 text-muted">{next.reason}</p>
            <Link href={next.href} className="mt-4 inline-flex btn-ink">
              {next.kind === "lab"
                ? "Open the lab"
                : next.kind === "review"
                  ? "Start review"
                  : "Open lesson"}{" "}
              →
            </Link>
          </section>

          {due.length > 0 && (
            <section aria-labelledby="due-h" className="rounded-3xl bg-surface p-6">
              <h2 id="due-h" className="font-label text-sm uppercase tracking-widest text-accent">
                Due for retrieval
              </h2>
              <p className="mt-2 text-sm text-muted">
                Mastery decays whether or not you come back. These are the skills losing the most
                ground.
              </p>
              <ul className="mt-3 space-y-2">
                {due.map((d) => (
                  <li key={d.skillId} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-text">
                      {SKILLS.find((s) => s.id === d.skillId)?.title}
                    </span>
                    <span className="shrink-0 font-label text-xs text-muted">
                      {d.days}d ago · {Math.round(d.retained * 100)}% retained
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/paths"
                className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
              >
                Re-read one, then answer its check
              </Link>
            </section>
          )}

          <section aria-labelledby="cal-h" className="rounded-3xl bg-surface p-6">
            <h2 id="cal-h" className="font-label text-sm uppercase tracking-widest text-accent">
              Calibration
            </h2>
            {cal.n === 0 ? (
              <p className="mt-3 text-muted">
                Answer a few pause-and-think questions to see how well your confidence matches your
                results.
              </p>
            ) : (
              <>
                <p className="mt-3 text-text">
                  <span className="text-3xl font-semibold tabular-nums">
                    {cal.gap >= 0 ? "+" : ""}
                    {Math.round(cal.gap * 100)}
                  </span>
                  <span className="ml-2 text-muted">
                    points.{" "}
                    {Math.abs(cal.gap) < 0.1
                      ? "Well calibrated."
                      : cal.gap > 0
                        ? "You tend to be overconfident."
                        : "You tend to be underconfident."}
                  </span>
                </p>
                <Link
                  href="/me/calibration"
                  className="mt-3 inline-block text-accent underline underline-offset-4"
                >
                  See the chart
                </Link>
              </>
            )}
          </section>

          <section aria-labelledby="paths-h" className="rounded-3xl bg-surface p-6">
            <h2 id="paths-h" className="font-label text-sm uppercase tracking-widest text-accent">
              Paths
            </h2>
            <ul className="mt-4 space-y-4">
              {PATHS.map((p) => {
                const pr = pathProgress(p, completed);
                return (
                  <li key={p.slug}>
                    <Link
                      href={`/paths/${p.slug}`}
                      className="flex items-baseline justify-between gap-3 hover:text-accent"
                    >
                      <span>{p.title}</span>
                      <span className="font-label text-xs text-muted">
                        {pr.done}/{pr.total}
                      </span>
                    </Link>
                    <ProgressBar value={pr.ratio} label={`${p.title} progress`} className="mt-2" />
                  </li>
                );
              })}
            </ul>
            {saved.length > 0 && (
              <p className="mt-4 text-sm text-muted">
                {saved.length} saved lesson{saved.length > 1 ? "s" : ""}.
              </p>
            )}
          </section>
        </div>
      </div>

      <section aria-labelledby="skills-h" className="rounded-3xl bg-surface p-6">
        <h2 id="skills-h" className="font-label text-sm uppercase tracking-widest text-accent">
          Skills on the Proceed Scale
        </h2>
        <ul className="mt-4 divide-y divide-line">
          {SKILLS.map((s) => {
            const p = progress.find((x) => x.skillId === s.id)!;
            const stage = p.level > 0 ? STAGES[p.level - 1]!.label : "Unseen";
            return (
              <li
                key={s.id}
                className="grid items-center gap-2 py-3 sm:grid-cols-[1.2fr_0.8fr_2fr]"
              >
                <span className="text-text">{s.title}</span>
                <span className="font-label text-sm text-accent">
                  L{p.level} · {stage}
                </span>
                <span className="text-sm text-muted">
                  {p.gate ?? "At the top of the scale. Keep it alive with review."}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="map-h">
        <h2 id="map-h" className="mb-5 text-xl font-semibold">
          Your curriculum map
        </h2>
        <SkillMap compact />
      </section>

      {!empty && (
        <div className="flex flex-wrap gap-3 text-sm">
          <button
            type="button"
            onClick={actions.loadDemo}
            className="text-muted underline underline-offset-4 hover:text-text"
          >
            Replace with sample data
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Erase all progress stored in this browser?")) actions.reset();
            }}
            className="text-warn underline underline-offset-4"
          >
            Reset my progress
          </button>
        </div>
      )}
    </div>
  );
}
