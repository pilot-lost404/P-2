import { slugify } from "@/lib/neet/slug";
import type { Block } from "@/lib/neet/types";
import Callout from "./Callout";
import PauseAndThink from "./PauseAndThink";

export default function LessonBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="measure">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(b.text)}
                className="mb-3 mt-12 text-2xl font-semibold text-text md:text-3xl"
              >
                {b.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="my-5 text-[1.0625rem] leading-[1.7] text-text">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="my-5 list-disc space-y-2 pl-6 marker:text-accent">
                {b.items.map((it) => (
                  <li key={it} className="leading-[1.7]">
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <Callout key={i} title={b.title} tone={b.tone}>
                {b.text}
              </Callout>
            );
          case "code":
            return (
              <figure
                key={i}
                className="my-6 overflow-hidden rounded-lg border border-line bg-surface"
              >
                {b.label && (
                  <figcaption className="border-b border-line px-4 py-2 font-label text-xs uppercase tracking-widest text-muted">
                    {b.label}
                  </figcaption>
                )}
                <pre className="overflow-x-auto p-4 font-label text-sm leading-6 text-text">
                  <code>{b.text}</code>
                </pre>
              </figure>
            );
          case "flow":
            return (
              <figure key={i} className="my-8">
                <ol className="flex flex-wrap items-center gap-2">
                  {b.steps.map((s, si) => (
                    <li key={si} className="flex items-center gap-2">
                      <span className="rounded-md border border-line bg-surface px-3 py-2 font-label text-sm text-text">
                        {s}
                      </span>
                      {si < b.steps.length - 1 && (
                        <span aria-hidden className="text-accent">
                          →
                        </span>
                      )}
                      {si === b.steps.length - 1 && b.loop && (
                        <span aria-hidden className="text-accent">
                          ↺
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
                {b.caption && (
                  <figcaption className="mt-3 text-sm text-muted">{b.caption}</figcaption>
                )}
              </figure>
            );
          case "pause":
            return <PauseAndThink key={b.id} block={b} />;
        }
      })}
    </div>
  );
}
