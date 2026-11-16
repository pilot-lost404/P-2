# Fixes applied

What changed, why, and what verifies it. Section numbers refer to `PROJECT_DEEP_DIVE.md`.

## P0 — correctness and security

| # | Defect from §3.1 | Fix | Evidence |
| --- | --- | --- | --- |
| a | Pack read with `node:sqlite`, which does not exist on Cloudflare Workers — every non-Supabase path and `/health` threw at runtime | Deleted `db.server.ts`. The pack is now compiled in at build time: `scripts/gen-pack-data.mjs` emits `?raw` imports, and `src/lib/neet/pack.ts` parses them synchronously with no `fs`. `import.meta.glob` was tried first and is **not** transformed by this Vite build (it returned 0 files), so explicit imports are used. | `vite build` exit 0; 0 occurrences of `sqlite` in `src/`; app serves 200 on 13 routes with no Supabase env |
| b | Auth base64-decoded the JWT and fell back to one shared constant user id | `accountAuth` now verifies with Supabase `getClaims()` (signature + expiry) and returns 401 with no token. The constant fallback is gone. A per-browser `x-neet-dev-user` id is used **only** when no Supabase credentials exist, and its data never leaves the in-memory dev store. | `grep` for `00000000-0000-0000` → none; `resilientAuth` gone |
| c | `exportDossier` read the local store only | It now builds from `loadMe()`, the same source the dashboard reads, and is named "Export portfolio (JSON)" instead of "Verified Portfolio" | `src/lib/neet/account.functions.ts` |
| d | Scores never left the browser: mastery reset on a new device | `ProgressSync` sends `recordEvidence` with `skill_id`, `score`, `confidence`, `weight`; `recordEvents` still carries activity. On load, account evidence is merged back into the local store (`actions.mergeRemote`). Store emits now include the evidence fields, and the article-read event is actually emitted. | `src/components/neet/ProgressSync.tsx`, `src/lib/neet/store.ts` |
| e | `try/catch → localDb` silently swapped the user's data store | Fallbacks removed. Failures return a message the UI renders; the local store is only used when Supabase is genuinely not configured | `account.functions.ts` |
| f | `/health` published DB path, Node version, memory | Rewritten as **Content status**: pack counts and verification coverage only, no internals | `src/routes/health.tsx` |
| g | Search interpolated user input into a PostgREST `.or()` filter | Search is an in-process substring search over the compiled pack — no query string is built from user input | `src/lib/neet/pack.ts` |
| h | Type-check and tests were red | `tsc --noEmit` clean (both original errors fixed); the unrunnable `node:sqlite` test was replaced by 10 pack tests | `npx tsc --noEmit` → 0; `vitest run` → 3 files / 18 tests |

## Bugs found while rebuilding (not in the original list)

| Bug | Fix |
| --- | --- |
| Citation chips never rendered: `cite:S01` links were stripped to `href=""` by `react-markdown`'s `urlTransform`, so the plain `[S04]` text leaked into the page | Citations are emitted as `/sources#S04` and resolved to chips with server-provided titles and verification state |
| The browser imported the 608 kB source-enrichment index for tooltips | Resolution moved server-side; `Markdown.tsx` receives a `citations` map. Client bundle no longer contains enrichment data |
| `/library` rendered **one** article link in the server HTML — 120 volumes were invisible to crawlers and to first-time readers; the first track was collapsed and a `bodyHits === null` filter excluded every row | First track opens by default, an "Expand all" control was added, and the filter treats "no search yet" as "no body restriction" |
| `/me` and `/learn/...` redirected to `/auth`, locking the whole curriculum on deployments without Supabase | Moved to a pathless `_public-account` layout. Signing in adds sync; it is not a gate |
| Every page that rendered an auth-aware component crashed when env vars were missing (generated client throws on first property access) | `src/lib/neet/supabase-env.ts` exposes `supabaseConfigured`; all callers check it. `client.ts` is generated and was left untouched |
| The auth header was never attached to server-function calls | `attachSupabaseAuth` is registered in `src/start.ts` and sends the bearer token (or the dev id) |
| Deep links like `/sources#S254` targeted a row past the 50-row window | The hash raises the render limit before scrolling |
| Nav had 7 top-level links, no active indicator, sub-44px icon buttons, and stayed open after navigating | 5 primary links + footer for the rest, underline active state, 44px targets, closes on route change |
| Selecting a chip or "All" filter was conveyed by colour only | Chips add a ✓ glyph; verification badges pair an icon with a label |

## Design rules applied (sourced from the web)

| Rule | Source | Where it lands |
| --- | --- | --- |
| Body ≥16px, line-height 1.5–1.7, 45–75ch measure | ff2d.com "Web Typography Best Practices" | `--measure: 62ch`, `--text-base: 18px`, `leading-[1.7]` |
| Type scale ratio 1.2–1.25, ≤6–8 steps, `clamp()` bounded in `rem` | design.dev type-scale table; madegooddesigns 2026 trends | `--text-xs … --text-5xl`, major third, rem bounds |
| Contrast ≥4.5:1 text / 3:1 UI, never colour-only | WCAG 2.2 via ff2d + design.dev | `--accent` moved 0.58 → 0.52 (**measured 4.34:1 → 5.55:1**), `--muted` 0.47 (6.82:1), glyphs and borders alongside colour |
| Space above a heading ≈1.5–2× below (proximity) | ff2d "10 Rules" | `mt-14/mb-3` for h2, `mt-10/mb-2` for h3 in prose and lesson blocks |
| Links underline; never rely on colour | ff2d, creotivity | `.prose-link` utility with underlined accent links |
| One primary CTA per view, hierarchy over decoration | fisherdesignandadvertising; jawdadesigns "12 principles" | New landing page: a single "Start learning" hero action with a stated reason |
| Whitespace is an active element | onething.design 2026 | Tokenised spacing on sections, cards and prose |
| 44px tap targets, 200% zoom, 320px reflow, `forced-colors` | WCAG 2.5.8 / 1.4.4 / 1.4.10 via the above | `.btn-*` `min-height: 2.75rem`, icon buttons `min-h-11 min-w-11`, `forced-colors` focus ring |
| ≤2 typefaces; systematise in tokens | onething.design; HubSpot best practices | Single system stack + mono for code, all sizes/measures tokenised |

## Verification (run at the end of this pass)

```console
$ npx tsc --noEmit          # exit 0, no diagnostics
$ npx vitest run            # 3 files, 18 tests passed
$ npx eslint .              # 0 errors, 8 warnings (shadcn react-refresh only)
$ npx vite build            # exit 0, Cloudflare Workers output
```

Runtime smoke test against `vite dev` with the preview host header — all 200:
`/ /paths /library /sources /health /method /labs /me /me/calibration /exercises /careers /coverage /auth`,
plus `/learn/orientation-and-grounding/the-iceberg-and-system-boundaries` and
`/library/02-systems-thinking` (12 citation chips, 0 empty `href`).

Client bundle: 1.4 MB total assets; the main chunk no longer contains pack text, enrichment
data, or audit tables.

## Still requires Lovable / a Supabase migration

`progress_events` has no `skill_id`, `score`, `confidence` or `weight` columns, so scored
evidence currently falls back to activity-only sync when Supabase is configured. The server
code already writes those columns when present and degrades cleanly when they are not.
`drizzle/schema.ts` and `supabase/migrations/` were **not** edited, per `AGENTS.md`.
