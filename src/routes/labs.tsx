import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/neet/meta";
import { LABS } from "@/lib/neet/content";
import LabCard from "@/components/neet/LabCard";

function LabsPage() {
  const labs = LABS;
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="font-label text-sm uppercase tracking-widest text-accent">Practice labs</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Build the thing.</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Labs are where Know becomes Adapt and Adapt becomes Proceed. Each one has a twist that
        changes the constraints, and each one produces evidence that lifts your level on the Proceed
        Scale.
      </p>
      <div className="mt-10 space-y-6">
        {labs.map((l) => (
          <LabCard key={l.id} lab={l} />
        ))}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/labs")({
  head: () =>
    pageHead("Practice labs", "Hands-on labs with a twist that produce real evidence of skill."),
  component: LabsPage,
});
