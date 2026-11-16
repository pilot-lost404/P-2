import { useState } from "react";
import { actions, useProgress } from "@/lib/neet/store";
import type { Block } from "@/lib/neet/types";

type Pause = Extract<Block, { t: "pause" }>;

const CONF = [
  { v: 0.33, label: "Guessing" },
  { v: 0.66, label: "Fairly sure" },
  { v: 1, label: "Certain" },
];

export default function PauseAndThink({ block }: { block: Pause }) {
  const { answers } = useProgress();
  const saved = answers[block.id];
  const [choice, setChoice] = useState<number | null>(null);
  const [conf, setConf] = useState<number | null>(null);

  const answered = !!saved;
  const picked = saved ? saved.choice : choice;
  const correct = answered && picked === block.answer;

  return (
    <section
      aria-labelledby={`${block.id}-q`}
      className="my-8 rounded-3xl bg-surface ring-1 ring-accent-dim p-6"
    >
      <p className="font-label text-xs uppercase tracking-widest text-accent">Pause and think</p>
      <h3 id={`${block.id}-q`} className="mt-2 text-lg font-semibold text-text">
        {block.q}
      </h3>

      {!answered && (
        <fieldset className="mt-4">
          <legend className="text-sm text-muted">How sure are you before you answer?</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {CONF.map((c) => (
              <label
                key={c.v}
                className={`cursor-pointer rounded-full border px-3 py-1 text-sm ${conf === c.v ? "border-accent bg-accent text-bg" : "border-line text-muted hover:text-text"}`}
              >
                <input
                  type="radio"
                  name={`${block.id}-conf`}
                  className="sr-only"
                  checked={conf === c.v}
                  onChange={() => setConf(c.v)}
                />
                {c.label}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div role="radiogroup" aria-labelledby={`${block.id}-q`} className="mt-4 space-y-2">
        {block.options.map((o, i) => {
          const isPicked = picked === i;
          const state = answered
            ? i === block.answer
              ? "border-ok bg-ok/10"
              : isPicked
                ? "border-warn bg-warn/10"
                : "border-line opacity-70"
            : isPicked
              ? "border-accent bg-surface-2"
              : "border-line hover:border-accent-dim";
          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={isPicked}
              disabled={answered}
              onClick={() => setChoice(i)}
              className={`flex w-full items-start gap-3 rounded-lg border p-3 text-left ${state}`}
            >
              <span className="font-label text-sm text-accent">{String.fromCharCode(65 + i)}</span>
              <span className="text-text">{o}</span>
            </button>
          );
        })}
      </div>

      {!answered ? (
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            disabled={choice === null || conf === null}
            onClick={() =>
              choice !== null &&
              conf !== null &&
              actions.answerPause(block.id, block.skillId, choice, choice === block.answer, conf)
            }
            className="btn-ink text-sm  disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check answer
          </button>
          {(choice === null || conf === null) && (
            <span className="text-sm text-muted">Pick a confidence level and an answer.</span>
          )}
        </div>
      ) : (
        <div role="status" className={`mt-4 rounded-lg p-4 ${correct ? "bg-ok/10" : "bg-warn/10"}`}>
          <p
            className={`font-label text-sm uppercase tracking-widest ${correct ? "text-ok" : "text-warn"}`}
          >
            {correct ? "Correct" : "Not quite"}
          </p>
          <p className="mt-1 text-text">{block.why}</p>
          <CalibrationNote correct={correct} confidence={saved?.confidence ?? 0.5} />
        </div>
      )}
    </section>
  );
}

const CONF_LABEL: Record<number, string> = { 0.33: "guessing", 0.66: "fairly sure", 1: "certain" };

/**
 * Names the gap between how sure the learner was and how it went, at the moment it
 * happens. Calibration is the one metric here that a self-rater cannot fake, and a
 * "certain but wrong" answer is the single most useful event in the whole curriculum —
 * so it gets said out loud rather than being left on a chart on another page.
 */
function CalibrationNote({ correct, confidence }: { correct: boolean; confidence: number }) {
  const label = CONF_LABEL[confidence] ?? (confidence >= 0.9 ? "certain" : "fairly sure");
  const over = confidence >= 0.9;
  let text: string | null = null;
  if (!correct && over)
    text = `You were ${label} and wrong. That mismatch is the useful part — re-read the paragraph above before moving on.`;
  else if (correct && confidence <= 0.34)
    text = "You were guessing and got it. Worth knowing: that is luck, not mastery.";
  else if (correct && over) text = "Certain and right. This one is holding.";
  if (!text) return null;
  return <p className="mt-2 text-sm text-muted">{text}</p>;
}
