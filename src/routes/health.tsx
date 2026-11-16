import { createFileRoute } from "@tanstack/react-router";
import Link from "@/components/neet/AppLink";
import { LoadError } from "@/components/neet/ui";
import { getHealth } from "@/lib/neet/library.functions";
import { pageHead } from "@/lib/neet/meta";

export const Route = createFileRoute("/health")({
  loader: () => getHealth(),
  head: ({ match }) =>
    pageHead(
      "Content status",
      "Whether the knowledge pack loaded intact: volumes, sources and how many have been verified.",
      match.pathname,
    ),
  errorComponent: ({ error }) => <LoadError error={error} />,
  component: ContentStatus,
});

/**
 * This page used to be called "System Telemetry & Health" and published the server's
 * absolute database path, Node version, platform and memory usage to anyone. It now
 * reports the one thing a reader actually cares about: is the content intact, and how
 * much of it has been verified.
 */
function ContentStatus() {
  const health = Route.useLoaderData();
  const okHealth = health.status === "ok";
  const audited = health.pack.sources_audited;
  const total = health.pack.sources;
  const pct = Math.round((audited / Math.max(1, total)) * 100);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-label text-sm uppercase tracking-widest text-accent">Status</p>
      <h1 className="mt-2 text-4xl font-semibold">Content status</h1>
      <p className="measure mt-4 text-lg text-muted">
        The knowledge pack is bundled at build time, so a broken build cannot ship half a library.
        This page reports what loaded and how much of it has been checked.
      </p>

      <div
        className={`mt-8 flex items-start gap-3 rounded-2xl border p-5 ${
          okHealth ? "border-ok/40 bg-ok/5" : "border-warn/50 bg-warn/5"
        }`}
      >
        <span aria-hidden className="mt-0.5 text-lg">
          {okHealth ? "✓" : "!"}
        </span>
        <div>
          <p className="font-semibold text-text">
            {okHealth ? "All volumes loaded" : "Some volumes are missing"}
          </p>
          <p className="mt-1 text-sm text-muted">
            Checked {new Date(health.checked_at).toLocaleString()}. A healthy pack needs at least
            120 volumes and 300 sources.
          </p>
        </div>
      </div>

      <dl className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          ["Volumes", health.pack.articles.toLocaleString()],
          ["Sources", total.toLocaleString()],
          ["Words", health.pack.words.toLocaleString()],
          ["Sources audited", `${audited} (${pct}%)`],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-surface p-5">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums text-text">{value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-10 rounded-2xl border border-line p-5">
        <h2 className="text-lg font-semibold">What &ldquo;audited&rdquo; means</h2>
        <p className="measure mt-2 text-sm leading-6 text-muted">
          Each source in the register carries a verification state taken from the pack&apos;s own
          <code className="mx-1 rounded bg-surface-2 px-1 py-0.5 text-[0.9em]">
            DEEP_SCRAPE_AUDIT
          </code>
          register: <strong className="text-text">read in full</strong>,{" "}
          <strong className="text-text">partially read</strong>,{" "}
          <strong className="text-text">found, not fully read</strong>, or{" "}
          <strong className="text-text">not audited</strong>. A source in the register is not proof
          its content was reviewed. Normative standards are licensed and summarised by scope, not
          reproduced.
        </p>
        <Link href="/sources" className="prose-link mt-4 inline-block text-sm font-medium">
          See verification state on every source →
        </Link>
      </section>
    </div>
  );
}
