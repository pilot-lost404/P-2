import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/neet/meta";
import Link from "@/components/neet/AppLink";
import Motto from "@/components/neet/Motto";
import { STAGES } from "@/lib/neet/content";

const EVIDENCE = [
  { type: "Quiz", weight: "1", note: "A pause-and-think answer, with your confidence recorded." },
  { type: "Explain", weight: "1.5", note: "Your own words, self-rated." },
  { type: "Variant", weight: "2", note: "The same idea under changed constraints." },
  { type: "Lab", weight: "2.5", note: "A hands-on exercise with submitted evidence." },
  { type: "Artifact", weight: "3", note: "Something shipped that you can defend." },
  { type: "Review", weight: "1", note: "Retrieval after time has passed." },
];

function MethodPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="font-label text-sm uppercase tracking-widest text-accent">The method</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">The Proceed Scale</h1>
      <Motto className="mt-5 text-lg" />
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Every skill moves through four stages. You do not advance by clicking
        &ldquo;complete&rdquo;. You advance by producing evidence, and the evidence fades if you
        stop using it.
      </p>

      <ol className="mt-12 space-y-4">
        {STAGES.map((s) => (
          <li
            key={s.id}
            className="grid gap-3 rounded-3xl bg-surface p-6 md:grid-cols-[6rem_1fr_1fr]"
          >
            <p className="font-label text-sm text-accent">Level {s.level}</p>
            <div>
              <h2 className="text-xl font-semibold">{s.label}</h2>
              <p className="mt-1 text-muted">{s.meaning}</p>
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-muted">Evidence</p>
              <p className="mt-1">{s.evidence}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-muted">Level 0 means unseen: no evidence yet.</p>

      <section className="mt-16" aria-labelledby="how-h">
        <h2 id="how-h" className="text-3xl font-semibold">
          How mastery is calculated
        </h2>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-surface p-5 font-label text-sm leading-7">{`quality  = Σ(weight × score × decay) ÷ Σ(weight)
coverage = min(1, Σ(weight) ÷ 6)
mastery  = quality × coverage

decay    = 0.5 ^ (days since ÷ 45)

Level 2  mastery ≥ 0.25
Level 3  mastery ≥ 0.55 and a variant or lab
Level 4  mastery ≥ 0.80 and an artifact`}</pre>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left">
            <caption className="sr-only">Evidence types and weights</caption>
            <thead>
              <tr className="border-b border-line font-label text-xs uppercase tracking-widest text-muted">
                <th scope="col" className="py-2 pr-4">
                  Evidence
                </th>
                <th scope="col" className="py-2 pr-4">
                  Weight
                </th>
                <th scope="col" className="py-2">
                  What it is
                </th>
              </tr>
            </thead>
            <tbody>
              {EVIDENCE.map((e) => (
                <tr key={e.type} className="border-b border-line">
                  <th scope="row" className="py-3 pr-4 font-normal text-accent">
                    {e.type}
                  </th>
                  <td className="py-3 pr-4 font-label">{e.weight}</td>
                  <td className="py-3 text-muted">{e.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-surface ring-1 ring-accent-dim p-8">
        <h2 className="text-3xl font-semibold">Calibration</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Before each question you say how sure you are. The gap between that confidence and your
          results is a metric of its own. Knowing what you do not know is part of learning.
        </p>
        <Link
          href="/me/calibration"
          className="mt-5 inline-block text-accent underline underline-offset-4"
        >
          See your calibration →
        </Link>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/method")({
  head: ({ match }) =>
    pageHead(
      "The method",
      "The Proceed Scale: Search, Know, Adapt, Proceed. Progress backed by evidence.",
      match.pathname,
    ),
  component: MethodPage,
});
