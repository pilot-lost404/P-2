# Changelog

Dated by intent, not by release. This project has no version tags yet; the three
commits below are the whole history.

## Unreleased — completing the course layer

The curriculum was the last unfinished thing: three of eleven paths were one-lesson
stubs, two skills had a lab that assessed material no lesson ever taught, and nothing
prevented either problem from coming back.

### Content

- **Three paths no longer end on their first page.** `systems-thinking-fundamentals`,
  `system-design-from-scratch` and `engineering-from-scratch` gained a second module
  (`src/lib/neet/curriculum-extra.ts`):
  - `from-model-to-intervention` — validation, sensitivity, and why a model that
    cannot be wrong cannot be useful.
  - `caching-and-the-stale-read-problem` — the read path, TTL vs write-through, and
    invalidation as a correctness question rather than a performance one.
  - `the-thin-slice` — how to ship something end to end small enough to survive.
- **Every skill is now taught before it is assessed.** `sd-scale` was only ever tested
  by `lab-cache` and `en-shipping` only by `lab-ship`; both now have a lesson.
- 11 paths / 29 lessons / 10 labs / 16 skills, all 16 reachable.

### Wiring

- **Lessons point at their lab.** Every lesson sidebar now lists the labs that assess
  its skills (`LabLinks`, deep-linking to `/labs#<id>`).
- **Labs point back at their lesson.** Every lab card opens with "Read first: …" naming
  the lesson that teaches it, so practice never starts cold.
- **Path pages show the practice.** A path page lists every lab its lessons unlock, and
  the paths index shows discipline, lesson count and hours instead of only a tagline.

### Invariants, enforced

`src/lib/neet/curriculum.test.ts` (14 tests) fails the build if any of these regress:

- a lab assesses a skill no lesson teaches, or a skill has no lesson at all;
- a lesson has no retrieval check, a `pause` has an out-of-range answer, or two pauses
  share an id;
- a lesson cites a source id that is not in `content/pack/sources.csv`;
- a path is a single lesson, two paths or lessons share a slug, or a lesson/path time
  estimate falls outside its sane band;
- a lab cannot be reached from a lesson or from any path page.

### Fixed

- **`/reset-password` crashed when Supabase was not configured.** It imported the
  generated client at module scope, and that client throws on first property access.
  The client is now imported lazily and only when `supabaseConfigured`.
- **The sitemap advertised a host that does not exist.** `neet-learning.pages.dev` was
  hard-coded as the fallback origin, so all 170 `<loc>` entries and every canonical
  link pointed somewhere the site is not served. There is no fallback now: set
  `VITE_SITE_URL` at build time for absolute URLs, otherwise links stay relative.
  `robots.txt` no longer names the dead host either. `.env.example` documents all three
  optional variables.
- `README.md` and the sitemap route comment said 26 lessons / 18 tests / 8 lint
  warnings; the real numbers are 29 / 37 / 4.

### Verified

`npm run verify` → `tsc` 0 errors · 5 files / 37 tests · eslint 0 errors (4 shadcn
`react-refresh` warnings) · production build ok. Crawl of all 170 sitemap URLs plus
every `/learn/*` link: all 200. Unknown paths return 404.

## `a187555` — Tech stack deep dive

Researched TanStack Start, Cloudflare Workers limits and the 2026 Supabase guidance;
wrote `TECH_STACK_DEEP_DIVE.md`. Applied: 0 advisories after upgrades, 28 unused
packages and 35 orphan `ui/` files removed, `/sitemap.xml` (server route) and a real
`/404` added, `verify`/`pack` scripts documented. Measured the server bundle against
the 64 MiB limit and grepped the client bundle to confirm no server-only module leaks.

## `e6f1d83` — P0 defects and the content layer

Removed `node:sqlite` from the runtime path (it does not exist on Workers — every
non-Supabase route and `/health` threw), replaced it with build-time `?raw` pack
imports, made auth verify tokens via `getClaims()` instead of decoding them, stopped
silently swapping the user's data store on error, fixed citation rendering, and
unlocked `/me` and `/learn/*` on deployments without Supabase. See
`FIXES_APPLIED.md` for the defect-by-defect table and `PROJECT_DEEP_DIVE.md` for the
analysis it came from.

## `41e6ef0` — Initial commit

The curriculum site, the 120-volume reference pack (≈100k words, 320 registered
sources), 10 labs, 16 skills, and the evidence-based progression model.
