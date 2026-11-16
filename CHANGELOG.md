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
- 11 paths / 29 lessons / 16 labs / 16 skills, all reachable.

### Wiring

- **Lessons point at their lab.** Every lesson sidebar now lists the labs that assess
  its skills (`LabLinks`, deep-linking to `/labs#<id>`).
- **Labs point back at their lesson.** Every lab card opens with "Read first: …" naming
  the lesson that teaches it, so practice never starts cold.
- **Path pages show the practice.** A path page lists every lab its lessons unlock, and
  the paths index shows discipline, lesson count and hours instead of only a tagline.

### Invariants, enforced

`src/lib/neet/curriculum.test.ts` fails the build if any of these regress:

- a lab assesses a skill no lesson teaches, or a skill has no lesson at all;
- a lesson has no retrieval check, a `pause` has an out-of-range answer, or two pauses
  share an id;
- a lesson cites a source id that is not in `content/pack/sources.csv`;
- a path is a single lesson, two paths or lessons share a slug, or a lesson/path time
  estimate falls outside its sane band;
- a lab cannot be reached from a lesson or from any path page;
- any skill lacks a lab, or two labs share an id.

`src/lib/neet/scale.test.ts` pins the mastery maths the README used to claim without
covering: half-life decay, the coverage cap that stops one perfect answer buying mastery,
the variant/lab requirement for Adapt, the artifact requirement for Proceed, the
calibration gap, and the step-ordering rules above.

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

### Progression

- **Six skills had no lab.** `st-stocks`, `st-leverage`, `st-boundaries`, `sd-data`,
  `sd-reliability` and `en-testing` could reach Know and then stop: the gate said "needs
  a variant or lab" and there was nothing to open. All 16 skills now have a lab (16 total).
- **`nextBestStep()` recommended reading over practice.** A skill at Know with no
  application evidence was skipped in favour of the next unread lesson — the exact
  read-more-build-nothing loop this project exists to break. Application now outranks
  breadth, and lab steps deep-link to the specific lab card (`/labs#lab-cache`) instead
  of dumping the reader into a list of ten.
- **Added `reviewQueue()`**, which orders skills by how long they have gone without
  retrieval. The first attempt ordered by points lost, which ranked a 20-day-old skill
  above a 90-day-old one because a stale skill has already shed most of what it will
  lose; ordering by elapsed time is what spaced-repetition schedulers do.
- The dashboard gained a "Due for retrieval" card and the heatmap now leads with **days
  active this year** rather than a streak counter — a broken streak punishes absence
  instead of encouraging return.

### Verified

`npm run verify` → `tsc` 0 errors · 6 files / 50 tests · eslint 0 errors (4 shadcn
`react-refresh` warnings) · production build ok. Crawl of all 170 sitemap URLs plus
every `/learn/*` link: all 200. Unknown paths return 404.

## Unreleased — hygiene and honesty

- **`bun.lock` was stale.** It still pinned the 28 packages removed in `a187555` and never saw
  the vite 8 / zod 4 upgrades, so a Bun install would have reinstated the advisories that
  commit fixed. `package-lock.json` is now the only lockfile; `package.json` declares
  `packageManager` and `engines`. `bunfig.toml` stays for the 24h supply-chain guard.
- **Both generators could corrupt the tree.** `generate_source_enrichment.js` emitted an
  older `getSourcesForArticle` than the committed file (no body-aware citation scan), so
  regenerating would have silently deleted working behaviour and broken three tests; it now
  emits what actually ships, formats its own output, and reads `content/pack/` instead of
  the byte-identical `SS_content/` copy that has been deleted.
  `gen-pack-data.mjs` emitted a blank line prettier rejects and a blanket `eslint-disable`
  that had become unused, so `npm run pack` used to leave the tree failing `npm run lint`.
- **`/coverage` no longer shows its own build log.** 13 of the 44 metadata notes were
  per-pass count reconciliations that disagree with each other (252 → 275 → 283 → 292 →
  320 → 322 sources) and read as claims about the current pack. They moved to
  `PACK_CHANGELOG.md` (outside `content/pack/`, where every `.md` is counted as a volume).
- **`/sources` gained the caveat the metadata already carried**: standards are
  licensed/paywalled, scope is summarised, editions must be checked with the issuer.
- **`/reset-password` crashed without Supabase env vars** — it imported the generated client
  at module scope, and that client throws on first access. It now loads lazily behind
  `supabaseConfigured`.
- **The sitemap advertised a host that does not exist.** `neet-learning.pages.dev` was
  hard-coded as the fallback origin, so all 170 `<loc>` entries and every canonical link
  pointed somewhere this site is not served from. No fallback now: set `VITE_SITE_URL` for
  absolute URLs, otherwise they stay relative. `.env.example` documents the variables.

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
