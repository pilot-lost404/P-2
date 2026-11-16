import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Account routes that work without a Supabase session.
 *
 * `/me` and `/learn/...` were nested under `_authenticated`, whose `beforeLoad` redirects
 * to `/auth` when there is no session. That made the whole curriculum unreachable on a
 * deployment without Supabase credentials (and on any preview without a login), even
 * though progress is perfectly usable from browser storage. Signed-in users get the same
 * experience plus sync; signed-out users are no longer locked out of the lessons.
 */
export const Route = createFileRoute("/_public-account")({
  component: () => <Outlet />,
});
