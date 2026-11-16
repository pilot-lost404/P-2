# NEET — systems thinking, system design, systems engineering

> **NEET** here means _we ain't an academy, we're a group_. It is **not** the medical
> entrance exam and **not** the "Not in Education, Employment, or Training" policy label.

A learning site: 11 paths / 29 lessons / 16 practice labs across three disciplines, backed
by a 120-volume reference pack (≈100,000 words, 320 registered sources). Progress is
evidence-based and decays when unused.

## Where the rest is written down

| File                      | What it is                                                           |
| ------------------------- | -------------------------------------------------------------------- |
| `PROJECT_DEEP_DIVE.md`    | How the whole system works, and the defects found in it.             |
| `FIXES_APPLIED.md`        | Each defect, its fix, and the command that proves it.                |
| `CHANGELOG.md`            | What changed and why, newest first.                                  |
| `TECH_STACK_DEEP_DIVE.md` | Stack decisions, researched limits, and what was rejected.           |
| `AGENTS.md`               | Contribution constraints (generated files, secrets, schema changes). |

## Running it

```sh
npm ci             # or `npm i`; package-lock.json is the only lockfile
npm run dev        # http://localhost:8080
```

Supabase is optional. With no `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY`, the app
runs in **local mode**: progress lives in this browser and in an in-memory server store, and
`/auth` explains that accounts aren't configured. With credentials present, sessions are
verified server-side and progress syncs.

| Command            | What it proves                                                                      |
| ------------------ | ----------------------------------------------------------------------------------- |
| `npx tsc --noEmit` | Types are clean (strict + `exactOptionalPropertyTypes`).                            |
| `npx vitest run`   | 6 files / 50 tests: pack, routing, mastery maths, citations, curriculum invariants. |
| `npx eslint .`     | 0 errors (4 warnings, all shadcn `react-refresh`).                                  |
| `npx vite build`   | Production build for Cloudflare Workers.                                            |
| `npm run verify`   | All four in one command.                                                            |
| `npm run pack`     | Regenerate the pack tables after editing `content/pack/`.                           |

Two generated files must be regenerated, never hand-edited:

| After editing…           | Run                                          | Writes                                                            |
| ------------------------ | -------------------------------------------- | ----------------------------------------------------------------- |
| `content/pack/*`         | `npm run pack`                               | `src/lib/neet/pack-data.generated.ts`, `pack-counts.generated.ts` |
| (rarely) source metadata | `node scripts/generate_source_enrichment.js` | `src/lib/neet/sourceEnrichment.ts`                                |

Set `VITE_SITE_URL` to your deployed origin at build time so canonical links and
`/sitemap.xml` carry real absolute URLs; unset, they stay relative. See `.env.example`.

## How content works

The knowledge pack under `content/pack/` is the single source of truth.

```
content/pack/*.md, *.csv
   └─ node scripts/gen-pack-data.mjs   → src/lib/neet/pack-data.generated.ts   (raw ?raw imports)
                                       → src/lib/neet/pack-counts.generated.ts (numbers only)
        └─ src/lib/neet/pack.ts        → parse, query, verification state
             └─ src/lib/neet/library.functions.ts → server functions
```

Why generated `?raw` imports rather than `fs` or `import.meta.glob`:

- `node:fs` and `node:sqlite` do not exist on Cloudflare Workers, so reading the pack at
  request time silently failed in production.
- `import.meta.glob` is **not** transformed by this Vite/rolldown setup (verified: it
  returned zero files), so it cannot be used.
- Explicit `?raw` imports are resolved by any bundler and ship as plain strings, which work
  on every runtime including tests.

Counts live in their own tiny module so a page can show "120 volumes" without pulling 1 MB
of markdown into the browser bundle.

## Architecture notes

- **Auth** — every account function runs behind `accountAuth`. A bearer token is only
  trusted after Supabase `getClaims()` verifies signature and expiry; no token means 401.
  There is no hand-rolled JWT parsing and no shared fallback user.
- **Progress** — `ProgressSync` pushes activity _and_ scored evidence (`score`,
  `confidence`, `weight`, `skill_id`), retries on failure and reconnect, backfills once per
  browser, and merges the account's evidence back into the local store on load. Mastery is
  therefore reproducible on a second device instead of resetting to zero.
- **Source honesty** — every source shows how far it was really read (read in full /
  partially read / found, not fully read / couldn't reach / not audited), derived from
  `DEEP_SCRAPE_AUDIT.csv`. A citation is never presented as proof of review.
- **Access** — `/me`, `/me/calibration` and `/learn/...` are public. Signing in adds sync; it
  is not a gate on the curriculum. Security lives in server-function middleware, never in
  `beforeLoad`: every `createServerFn` is a public HTTP endpoint.
- **Discoverability** — `src/routes/sitemap[.]xml.ts` serves 167 URLs built from the pack
  (the bracketed filename escapes the dot for TanStack Router). Decorative scaffold
  components were removed down to the 11 actually used, which dropped 28 runtime
  dependencies.
- **Security headers** — applied once in `src/server.ts` from
  `src/lib/security-headers.ts`, so pages, error pages, redirects and 404s all carry them.
  This is deployment-specific: the Worker serves HTML through SSR, so `public/_headers`
  only reaches `/assets/*` and request middleware in `src/start.ts` does not run for
  documents. CSP allows inline script (TanStack's hydration bootstrap, and this framework
  version has no nonce support) but forbids `unsafe-eval`, locks `object-src`, `base-uri`
  and `form-action`, and scopes framing to our own preview surfaces. Personal pages send
  `private, no-store`.
- **Canonicals** — every rendered page emits a self-referencing `rel=canonical` built from
  the router's own `match.pathname`, so it cannot drift when a route moves. Unmatched URLs
  respond 404 with a `noindex` "Page not found" head instead of inheriting the homepage's.

## Design system

Tokens live in `src/styles.css`:

- Type scale: major third (1.25) in `clamp()` with `rem` bounds, six steps, 18px root.
- Measures: `--measure: 62ch` for prose, `--measure-wide: 72ch` for headings and cards.
- Contrast: body text ≥ 4.5:1, UI/borders ≥ 3:1, verified numerically (`--accent` was
  `oklch(0.58)` at 4.34:1 — a real AA failure — and is now `0.52` at 5.55:1).
- Meaning is never carried by colour alone: citation chips use a ✓ glyph, verification
  badges pair an icon with a label, prose links stay underlined.
- 44px minimum tap targets, visible focus rings, `forced-colors` support, and layouts that
  survive 320px reflow and 200% zoom.

## Project layout

```
scripts/gen-pack-data.mjs      pack codegen
content/pack/                  120 volumes + 6 CSV registries
src/lib/neet/                  content model, pack store, mastery maths, server functions
src/components/neet/           UI (Markdown, Nav, Dashboard, labs, gates)
src/routes/                    public routes; _public-account/* for me + learn
supabase/migrations/, drizzle/ schema (managed via Lovable — do not hand-edit)
```

`PROJECT_DEEP_DIVE.md` records the full audit this work is based on, including the sources
behind each design decision.
