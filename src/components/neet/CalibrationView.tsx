import Link from "@/components/neet/AppLink";
import { calibration } from "@/lib/neet/scale";
import { actions, useHydrated, useProgress } from "@/lib/neet/store";

export default function CalibrationView() {
  const hydrated = useHydrated();
  const { evidence } = useProgress();
  if (!hydrated) return <div className="skeleton h-80" aria-busy="true" />;

  const cal = calibration(evidence);
  if (cal.n === 0) {
    return (
      <div className="rounded-xl border border-dashed border-accent-dim bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold">No confidence data yet.</h2>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Each pause-and-think question asks how sure you are before you answer. Answer a few and
          your chart appears here.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/paths" className="btn-ink">
            Start a lesson
          </Link>
          <button
            type="button"
            onClick={actions.loadDemo}
            className="rounded-md border border-line px-5 py-2.5 hover:border-accent-dim"
          >
            Load sample data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Avg confidence" value={`${Math.round(cal.avgConf * 100)}%`} />
        <Stat label="Avg performance" value={`${Math.round(cal.avgScore * 100)}%`} />
        <Stat
          label="Calibration gap"
          value={`${cal.gap >= 0 ? "+" : ""}${Math.round(cal.gap * 100)}`}
          accent
        />
      </div>

      <section aria-labelledby="chart-h" className="rounded-3xl bg-surface p-6">
        <h2 id="chart-h" className="font-label text-sm uppercase tracking-widest text-accent">
          Confidence vs accuracy
        </h2>
        <p className="mt-1 text-sm text-muted">
          If you are calibrated, the gold bar (accuracy) matches the confidence you claimed.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {cal.buckets.map((b) => (
            <figure key={b.key} className="text-center">
              <div
                className="flex h-48 items-end justify-center gap-3"
                role="img"
                aria-label={`${b.label}: claimed ${Math.round(b.conf * 100)} percent, actual ${b.accuracy === null ? "no data" : Math.round(b.accuracy * 100) + " percent"}, ${b.n} answers`}
              >
                <div
                  className="w-1/3 rounded-t bg-surface-2 ring-1 ring-line"
                  style={{ height: `${b.conf * 100}%` }}
                />
                <div
                  className={`w-1/3 rounded-t ${b.accuracy === null ? "bg-line" : "bg-accent"}`}
                  style={{ height: `${(b.accuracy ?? 0.02) * 100}%` }}
                />
              </div>
              <figcaption className="mt-3">
                <span className="block text-text">{b.label}</span>
                <span className="block font-label text-xs text-muted">
                  {b.n} answers ·{" "}
                  {b.accuracy === null ? "no data" : `${Math.round(b.accuracy * 100)}% right`}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-5 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-surface-2 ring-1 ring-line" />{" "}
            Claimed
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-accent" /> Actual
          </span>
        </p>
      </section>

      <p className="text-muted">
        {Math.abs(cal.gap) < 0.1
          ? "Your confidence tracks your results. Keep stress-testing it on harder questions."
          : cal.gap > 0
            ? "You are more sure than your results justify. Before the next question, ask what would make you wrong."
            : "You know more than you think. Trust yourself a little more and move faster."}
      </p>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-3xl bg-surface p-5">
      <p className="font-label text-xs uppercase tracking-widest text-muted">{label}</p>
      <p
        className={`mt-2 text-3xl font-semibold tabular-nums ${accent ? "text-accent" : "text-text"}`}
      >
        {value}
      </p>
    </div>
  );
}
