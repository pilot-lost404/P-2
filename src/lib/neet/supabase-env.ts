/**
 * Whether Supabase is configured for this deployment.
 *
 * `@/integrations/supabase/client` is generated and its `supabase` export throws on first
 * property access when the env vars are missing — which used to crash every page that
 * merely rendered a component touching auth. Always check this flag first.
 */
export const supabaseConfigured = Boolean(
  (import.meta.env["VITE_SUPABASE_URL"] || process.env["SUPABASE_URL"]) &&
  (import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] || process.env["SUPABASE_PUBLISHABLE_KEY"]),
);
