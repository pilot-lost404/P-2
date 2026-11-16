import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Nav from "@/components/neet/Nav";
import Footer from "@/components/neet/Footer";
import CommandPalette from "@/components/neet/CommandPalette";
import ProgressSync from "@/components/neet/ProgressSync";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { supabaseConfigured } from "@/lib/neet/supabase-env";

function NotFoundComponent() {
  // The real 404 page lives at /404 so it can also be linked to directly; the root
  // boundary is only reached by unmatched paths, so render the same content inline.
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="font-label text-sm uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Off the map.</h1>
      <p className="mt-4 text-muted">
        That page doesn&apos;t exist. Try the paths, or press ⌘K to search.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/paths" className="btn-ink text-sm">
          Browse paths
        </Link>
        <Link to="/library" className="btn-soft text-sm">
          Search the library
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-ink text-sm"
          >
            Try again
          </button>
          <a href="/" className="btn-soft text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ matches }) => {
    // An unmatched URL renders the not-found boundary, but the root head still applies — so
    // without this branch a 404 shipped the homepage's title and description. That is a real
    // SEO defect: a mistyped or dead URL looks like a thin duplicate of the home page, and a
    // crawler has no reason to drop it. A 404 must say it is a 404 and ask not to be indexed.
    // Two shapes to check: a route-level boundary sets `status: "notFound"`, but when the
    // boundary is the root itself the router instead keeps `status: "success"` and sets an
    // internal `_notFound` flag. Both mean "this URL does not exist".
    const notFound = matches.some(
      (m) => m.status === "notFound" || (m as { _notFound?: boolean })._notFound === true,
    );
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...(notFound
          ? [{ title: "Page not found · NEET" }, { name: "robots", content: "noindex" }]
          : [
              { title: "NEET: we ain't an academy, we're a group" },
              {
                name: "description",
                content:
                  "A group learning systems thinking, system design and engineering by building.",
              },
              { property: "og:type", content: "website" },
              { name: "twitter:card", content: "summary_large_image" },
            ]),
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  useEffect(() => {
    if (!supabaseConfigured) return;
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => data.subscription.unsubscribe();
  }, [router, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      {/* tabIndex -1 is what makes the skip link actually work: without it the browser
          scrolls to <main> but focus stays on the link, so the next Tab returns to the nav. */}
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette />
      <ProgressSync />
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
}
