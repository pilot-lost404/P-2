import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/neet/meta";
import Breadcrumbs from "@/components/neet/Breadcrumbs";
import CalibrationView from "@/components/neet/CalibrationView";

function CalibrationPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Breadcrumbs items={[{ label: "My progress", href: "/me" }, { label: "Calibration" }]} />
      <h1 className="mt-8 text-4xl font-semibold md:text-5xl">Confidence vs performance</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        How sure you were, against how right you were.
      </p>
      <div className="mt-10">
        <CalibrationView />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/_public-account/me/calibration")({
  head: () => pageHead("Calibration", "How sure you were, against how right you were."),
  component: CalibrationPage,
});
