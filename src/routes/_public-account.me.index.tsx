import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/neet/meta";
import Link from "@/components/neet/AppLink";
import Dashboard from "@/components/neet/Dashboard";
import ProgressHeatmap from "@/components/neet/ProgressHeatmap";
import { useMe } from "@/hooks/use-me";
import { exportDossier } from "@/lib/neet/account.functions";
import { useState } from "react";

function MePage() {
  const { me, error, loading, refetch } = useMe();
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await exportDossier();
      if (res.data) {
        const blob = new Blob([JSON.stringify(res.data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `systems-engineering-portfolio-${new Date().toISOString().split("T")[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("Export error:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-label text-sm uppercase tracking-widest text-accent">My progress</p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Your Proceed Scale</h1>
          <p className="measure mt-4 text-lg leading-8 text-muted">
            {me?.persisted
              ? "Synced to your account, so it follows you to another device."
              : "Saved in this browser. Sign in to keep it across devices."}{" "}
            <Link href="/me/calibration" className="text-accent underline underline-offset-4">
              Calibration →
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={handleExport}
          disabled={exporting}
          className="btn-soft text-sm"
          aria-busy={exporting}
        >
          {exporting ? "Preparing export…" : "Export portfolio (JSON)"}
        </button>
      </div>
      <section aria-labelledby="heat-h" className="mt-10 rounded-3xl bg-surface p-5 sm:p-7">
        <h2 id="heat-h" className="font-label text-sm uppercase tracking-widest text-accent">
          Daily progress
        </h2>
        <div className="mt-4">
          {error ? (
            <p className="text-sm text-muted">
              {error}{" "}
              <button className="text-accent underline" onClick={() => refetch()}>
                Retry
              </button>
            </p>
          ) : loading || !me ? (
            <div className="h-32 animate-pulse rounded-2xl bg-surface-2" />
          ) : (
            <ProgressHeatmap events={me.events} />
          )}
        </div>
      </section>
      <div className="mt-14">
        <Dashboard />
      </div>

      <section className="mt-14 rounded-2xl border border-line p-6">
        <h2 className="text-lg font-semibold">Why this number moves</h2>
        <p className="measure mt-2 text-sm leading-6 text-muted">
          Mastery is computed from your evidence and decays when you stop using a skill, so an old
          score is never presented as a current one. Levels are gated by the kind of evidence — you
          cannot reach <em>Adapt</em> without a lab, or <em>Proceed</em> without an artefact.
        </p>
        <Link href="/method" className="prose-link mt-3 inline-block text-sm font-medium">
          How the Proceed Scale works →
        </Link>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/_public-account/me/")({
  head: ({ match }) =>
    pageHead("My progress", "Your daily progress, streaks and Proceed Scale.", match.pathname),
  component: MePage,
});
