import { useState } from "react";
import Link from "@/components/neet/AppLink";
import { allLessons, lessonHref, skillById } from "@/lib/neet/content";
import { actions, useProgress } from "@/lib/neet/store";
import type { Lab } from "@/lib/neet/types";

const TYPE_LABEL = { lab: "Lab", variant: "Variant problem", artifact: "Artifact" } as const;

export default function LabCard({ lab }: { lab: Lab }) {
  const { labs } = useProgress();
  const sub = labs[lab.id];
  const [note, setNote] = useState("");
  const [rating, setRating] = useState(0);
  const [editing, setEditing] = useState(false);
  const skill = skillById(lab.skillId);
  const showForm = !sub || editing;

  return (
    <article id={lab.id} className="scroll-mt-24 rounded-3xl bg-surface p-6">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-label text-xs uppercase tracking-widest">
        <span className="text-accent">{TYPE_LABEL[lab.evidenceType]}</span>
        <span className="text-muted">{skill?.title}</span>
        <span className="text-muted">~{lab.minutes} min</span>
        {sub && <span className="ml-auto text-ok">Submitted</span>}
      </div>
      <h2 className="mt-3 text-xl font-semibold text-text">{lab.title}</h2>
      <p className="mt-2 text-muted">{lab.brief}</p>
      <LessonSource skillId={lab.skillId} />

      <ol className="mt-4 list-decimal space-y-1 pl-6 marker:font-label marker:text-accent">
        {lab.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <p className="mt-4 rounded-lg bg-surface-2 p-3 text-sm">
        <span className="font-label text-xs uppercase tracking-widest text-accent">Twist · </span>
        {lab.twist}
      </p>

      <div className="mt-5 border-t border-line pt-5">
        <p className="font-label text-xs uppercase tracking-widest text-muted">
          Evidence to submit
        </p>
        <p className="mt-1 text-text">{lab.artifact}</p>

        {showForm ? (
          <div className="mt-3">
            <label htmlFor={`${lab.id}-note`} className="sr-only">
              Link or notes
            </label>
            <textarea
              id={`${lab.id}-note`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Paste a link or write what you found…"
              className="w-full rounded-lg border border-line bg-bg p-3 text-text placeholder:text-muted"
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted">How well did it go?</span>
              {["Shaky", "OK", "Solid"].map((l, i) => (
                <button
                  key={l}
                  type="button"
                  aria-pressed={rating === i + 1}
                  onClick={() => setRating(i + 1)}
                  className={`rounded-full border px-3 py-1 text-sm ${rating === i + 1 ? "border-accent bg-accent text-bg" : "border-line text-muted hover:text-text"}`}
                >
                  {l}
                </button>
              ))}
              <button
                type="button"
                disabled={note.trim().length < 5 || rating === 0}
                onClick={() => {
                  actions.submitLab(lab, note.trim(), rating);
                  setEditing(false);
                  setNote("");
                  setRating(0);
                }}
                className="ml-auto btn-ink text-sm  disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit evidence
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3 rounded-lg bg-surface-2 p-4">
            <p className="whitespace-pre-wrap break-words text-text">{sub.note}</p>
            <p className="mt-2 flex items-center gap-3 font-label text-xs text-muted">
              Self-rating: {["", "Shaky", "OK", "Solid"][sub.rating]}
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="text-accent underline underline-offset-4"
              >
                Resubmit
              </button>
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

/** The lesson that teaches this lab's skill, so practice never starts cold. */
function LessonSource({ skillId }: { skillId: string }) {
  const all = allLessons();
  const first =
    all.find((x) => x.lesson.skillIds[0] === skillId) ??
    all.find((x) => x.lesson.skillIds.includes(skillId));
  if (!first) return null;
  return (
    <p className="mt-3 text-sm text-muted">
      Read first:{" "}
      <Link
        href={lessonHref(first.path.slug, first.lesson.slug)}
        className="text-text underline underline-offset-4 hover:text-accent"
      >
        {first.lesson.title}
      </Link>{" "}
      in {first.path.title}
    </p>
  );
}
