<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.

<!-- LOVABLE:END -->

- Learning app code lives in src/components/neet and src/lib/neet. Course lessons/labs stay static in src/lib/neet/content.ts (with src/lib/neet/curriculum-extra.ts for the extension modules) and progress lives in browser localStorage; the knowledge pack (articles, sources, prompts, roles, coverage, audit, metadata) is compiled into the bundle from content/pack as `?raw` imports and read through src/lib/neet/pack.ts plus server functions in src/lib/neet/library.functions.ts. Why: the pack must work on Cloudflare Workers, where `node:fs` and `node:sqlite` do not exist; a runtime database read made every non-Supabase route throw.
- Raw pack files live in content/pack and are the single source of truth. After editing them run `npm run pack` (regenerates src/lib/neet/pack-data.generated.ts and pack-counts.generated.ts) and, if source metadata changed, `node scripts/generate_source_enrichment.js`. Do not hand-edit either generated file. scripts/load-content.py still upserts the pack into Supabase for the account-backed path; it needs SUPABASE_SERVICE_ROLE_KEY and must never run with that key in browser code. Why: keeps the deployed content reproducible from source files.
- Accounts: Cloud email auth; per-user data (profiles, learning_goals, progress_events) is owner-only RLS, accessed via src/lib/neet/account.functions.ts returning typed { data, error }. Browser progress emits `neet:progress` events that ProgressSync forwards/backfills. Why: progress follows the user across devices while lessons stay static.
- /me, /me/calibration and the lessons live under the pathless route src/routes/_public-account.tsx. They are readable without an account by design: signing in adds cross-device sync, it is not a gate. Any server function that needs a user must still verify the bearer token (src/lib/neet/accountAuth.ts) and must never trust a caller-supplied id. Supabase is optional — check src/lib/neet/supabase-env.ts before touching the generated client in src/integrations/supabase/client.ts, which throws on first access when the env vars are missing. ASCII effects (src/components/neet/ascii.tsx) run client-only; the particle backdrop is home-page only.

- Response headers are applied in src/server.ts via src/lib/security-headers.ts, and that is the only place they work. The deployment is Worker + static assets (nitro `cloudflare-module` preset), so document responses are SSR: `public/_headers` covers only `/assets/*`, and a `requestMiddleware` in src/start.ts is compiled but does not run for documents. Both were verified by curling the built Worker (`cd .output && npx wrangler dev`); `vite dev` does not run the Worker at all, so testing headers there proves nothing. CSP keeps `script-src 'unsafe-inline'` because TanStack Start emits its hydration bootstrap inline and this framework version has no nonce plumbing — do not add `'unsafe-eval'`.
- Canonical URLs are self-referencing, generated from the router's `match.pathname` in each route's `head` (helpers in src/lib/neet/meta.ts). Home and /paths have hand-written heads and must include their own canonical. A not-found match swaps the root head to a noindex "Page not found" — an unmatched URL must never inherit the homepage title and description.
- Colour tokens used as text must clear WCAG AA on every surface they appear on; --ok and --warn are used for real words, not just borders, and have their measured ratios in src/styles.css. Do not lighten them without re-measuring.
