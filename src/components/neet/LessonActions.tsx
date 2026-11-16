import Link from "@/components/neet/AppLink";
import { useState } from "react";
import { lessonHref, lessonKey } from "@/lib/neet/content";
import { actions, useProgress } from "@/lib/neet/store";

interface Props {
  pathSlug: string;
  lessonSlug: string;
  skillId: string;
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function SaveButton({ pathSlug, lessonSlug }: { pathSlug: string; lessonSlug: string }) {
  const { saved } = useProgress();
  const key = lessonKey(pathSlug, lessonSlug);
  const isSaved = saved.includes(key);
  return (
    <button
      type="button"
      aria-pressed={isSaved}
      onClick={() => actions.toggleSaved(key)}
      className={`rounded-md border px-3 py-1.5 text-sm ${isSaved ? "border-accent text-accent" : "border-line text-muted hover:text-text"}`}
    >
      {isSaved ? "★ Saved" : "☆ Save for later"}
    </button>
  );
}

export default function LessonActions({ pathSlug, lessonSlug, skillId, prev, next }: Props) {
  const { completed, explains } = useProgress();
  const key = lessonKey(pathSlug, lessonSlug);
  const done = completed.includes(key);
  const saved = explains[key];
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="mt-14 measure space-y-8">
      <section aria-labelledby="explain" className="rounded-3xl bg-surface p-6">
        <p className="font-label text-xs uppercase tracking-widest text-accent">Explain it back</p>
        <h2 id="explain" className="mt-2 text-lg font-semibold">
          Say it in your own words.
        </h2>
        <p className="mt-1 text-sm text-muted">
          Two or three sentences, as if to a friend. Then rate how well you think you did. Rating is
          self-assessed and counts as evidence.
        </p>
        {saved ? (
          <div className="mt-4 rounded-lg bg-surface-2 p-4">
            <p className="whitespace-pre-wrap text-text">{saved.text}</p>
            <p className="mt-2 font-label text-xs text-muted">
              Self-rating: {["", "Shaky", "OK", "Solid"][saved.rating]}
            </p>
          </div>
        ) : (
          <>
            <label htmlFor="explain-text" className="sr-only">
              Your explanation
            </label>
            <textarea
              id="explain-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              className="mt-4 w-full rounded-lg border border-line bg-bg p-3 text-text placeholder:text-muted"
              placeholder="In my own words…"
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
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
                disabled={text.trim().length < 20 || rating === 0}
                onClick={() => actions.explainBack(key, skillId, text.trim(), rating)}
                className="ml-auto btn-ink text-sm  disabled:cursor-not-allowed disabled:opacity-40"
              >
                Save explanation
              </button>
            </div>
            {text.trim().length < 20 && (
              <p className="mt-2 text-xs text-muted">Write at least 20 characters.</p>
            )}
          </>
        )}
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => actions.toggleComplete(key)}
          aria-pressed={done}
          className={`rounded-md px-5 py-2.5 font-semibold ${done ? "border border-accent text-accent" : "bg-accent text-bg hover:brightness-110"}`}
        >
          {done ? "✓ Completed (undo)" : "Mark lesson complete"}
        </button>
        <p className="text-sm text-muted">
          Completing a lesson tracks your place. Mastery comes from evidence above, not from this
          button.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            href={lessonHref(pathSlug, prev.slug)}
            className="rounded-lg border border-line p-4 hover:border-accent-dim"
          >
            <span className="font-label text-xs text-muted">← Previous</span>
            <span className="mt-1 block text-text">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={lessonHref(pathSlug, next.slug)}
            className="rounded-lg border border-line p-4 text-right hover:border-accent-dim"
          >
            <span className="font-label text-xs text-muted">Next →</span>
            <span className="mt-1 block text-text">{next.title}</span>
          </Link>
        ) : (
          <Link
            href="/labs"
            className="rounded-lg border border-accent-dim p-4 text-right hover:bg-surface"
          >
            <span className="font-label text-xs text-accent">End of path →</span>
            <span className="mt-1 block text-text">Prove it in a practice lab</span>
          </Link>
        )}
      </div>
    </div>
  );
}
