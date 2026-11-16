import { createFileRoute } from "@tanstack/react-router";
import Link from "@/components/neet/AppLink";
import { PATHS } from "@/lib/neet/content";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [{ title: "Page not found · NEET" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});

/**
 * A real not-found page.
 *
 * There was none, so a mistyped URL or a stale library slug rendered the root *error*
 * boundary ("This page didn't load"), which blames the server for a bad link. This page
 * says what happened and offers the three places a lost reader actually wants.
 */
function NotFound() {
  const suggestions = PATHS.slice(0, 3);

  return (
    <div className="mx-auto max-w-2xl px-5 py-24">
      <p className="font-label text-sm uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Off the map.</h1>
      <p className="measure mt-4 text-lg leading-8 text-muted">
        That page doesn&apos;t exist. It may have been renamed, or the link may have a typo. Nothing
        is broken on your side.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/paths" className="btn-ink text-sm">
          Browse paths
        </Link>
        <Link href="/library" className="btn-soft text-sm">
          Search the library
        </Link>
      </div>

      <p className="mt-10 font-label text-xs uppercase tracking-widest text-muted">
        Or start with one of these
      </p>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {suggestions.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/paths/${p.slug}`}
              className="flex min-h-11 items-center justify-between gap-4 py-3 text-text hover:text-accent"
            >
              <span className="font-medium">{p.title}</span>
              <span aria-hidden className="shrink-0 text-muted">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted">
        Press{" "}
        <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>{" "}
        to search everything from anywhere.
      </p>
    </div>
  );
}
