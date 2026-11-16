# NEET — Project Deep Dive, Learning-Design Review, and Change Plan

> **Scope of this document.** Part 1 explains what this repository actually does, from the
> database up to the last CSS class. Part 2 is a research pass (Reddit, practitioner threads,
> instructional-design and learning-science sources) on what works and what backfires for a
> project like this. Part 3 maps that research onto **specific, file-level changes**, ranked.
>
> Everything in Part 1 was verified by reading the code and running it, not inferred from
> `README.md`. Where I ran a command, the evidence is quoted.
>
> **This is a dated snapshot, not living documentation.** It describes the repository as it
> was on 2026-11-05, before any of Part 3 was implemented. Several figures in it no longer
> match the code: 26 lessons (now 29), 10 labs (now 16), a `node:sqlite` `db.server.ts`
> (deleted), `SS_content/` as a byte-identical mirror (deleted), the `_authenticated` route
> (now the pathless `_public-account`), 8 eslint warnings (now 0), and "Export Verified
> Portfolio" (now "Export portfolio (JSON)"). Part 3 is kept as the record of what was
> proposed; `FIXES_APPLIED.md` and `CHANGELOG.md` record what was done and the current
> numbers.

---

## Part 0 — TL;DR for the impatient

**What it is:** a self-directed learning platform for **systems thinking, system design, and
systems engineering**, built on TanStack Start + Supabase, wrapped in a reclaimed "NEET" identity
("We ain't an academy. We're a group."). It ships three products in one repo: a 26-lesson
**curriculum** with an evidence-based mastery model, a 120-volume **knowledge pack** (~100k words)
with 320 cited sources, and **accounts** with a signature-onboarding ritual, a GitHub-style
progress heatmap, and a portfolio export.

**The three biggest strengths** — and they are genuinely unusual:

1. **Confidence is captured per answer**, and a calibration view compares "how sure you were" to
   "how right you were." Almost nothing in the self-taught space does this, and it's the single
   most defensible idea in the product.
2. **Mastery decays** (45-day half-life) and **requires different evidence types** to level up
   (a lab for *Adapt*, a shipped artifact for *Proceed*). That is real learning science, not XP.
3. **Provenance is first-class**: every volume cites `S`-IDs, and there's a scrape audit that
   distinguishes *full fetch* from *discovery only*.

**The five most serious problems**, in order:

1. **Production is broken by default.** The build target is Cloudflare Workers, and in the built
   output `node:sqlite` is replaced by `notImplementedClass(...)`. Every route that falls back to
   SQLite (`/library`, `/library/$slug`, `/sources`, `/exercises`, `/careers`, `/coverage`,
   `/health`) throws in a real deploy.
2. **Progress does not really follow the user.** Only `kind/ref/discipline/date` is synced. Scores
   and confidence — the entire input to the mastery model — stay in `localStorage`. Cross-device
   "Your Proceed Scale" therefore resets to zero.
3. **Auth has a hardcoded fallback user.** `resilientAuth` base64-decodes the JWT `sub` without
   verifying it and falls back to `00000000-0000-0000-0000-000000000001`. The real, verifying
   middleware (`requireSupabaseAuth`) exists but is **used by nothing** (`grep` returns zero hits).
4. **"Export Verified Portfolio" exports the local SQLite copy only** — and labels it "verified"
   when nothing has been verified by anyone.
5. **The content ratio is inverted.** 120 reading volumes for 26 lessons, and the three *beginner*
   on-ramp paths are one lesson each (8–9 minutes). The place a newcomer lands is the thinnest
   part of the product.

**The single highest-leverage change:** stop being a library with a course attached, and become a
course that happens to have a library. See §3.2.

---

## Part 1 — What the project actually does

### 1.1 One-paragraph summary

`pilot-lost404/P-2` is a **Lovable-generated** TanStack Start application (`src/start.ts`,
`.lovable/`) that positions itself as an anti-academy: a group of people learning to design and
engineer real systems, with no gatekeepers, where you show work instead of collecting badges. It
contains a hand-authored curriculum of **11 paths / 26 lessons / 16 skills / 10 labs**, a
machine-assembled **knowledge pack** of 120 markdown volumes plus six CSV registries, and a
Supabase-backed account layer providing email auth, learning goals, a signed commitment, a
52-week activity heatmap, streaks, a calibration view, and a JSON data export. Content can be
served from Supabase/Postgres when configured, or from a **synchronous SQLite database seeded from
`content/pack` at boot** when it isn't — a two-tier fallback that runs straight through the app.

### 1.2 Stack, as installed

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | TanStack Start `1.168` + TanStack Router `1.170` | file-based routes, SSR, server functions (`createServerFn`) |
| Build | Vite `8.1.5` (rolldown), `@lovable.dev/vite-tanstack-config` `2.26.5` | Nitro build, **Cloudflare Workers is the default target** |
| UI | React `19.2`, Tailwind v4, shadcn/ui (Radix), lucide, recharts, sonner | 40+ primitives in `src/components/ui` |
| Auth/DB (cloud) | Supabase (`@supabase/supabase-js` `2.119`) | email+password, RLS, Postgres |
| DB (local) | `node:sqlite` `DatabaseSync` + FTS5 | synchronous, seeded at boot, WAL mode |
| Schema | Drizzle (`drizzle/schema.ts`, Postgres dialect) | **documentation only** — not used at runtime, no migrations present |
| Validation | Zod `3.25` | on server-function validators |
| Tests | Vitest `4.1` + Testing Library | 3 files |

Note the version pins that matter: React 19 + Vite 8 + rolldown + TanStack Start 1.168 is an
aggressive, fast-moving combination. `bunfig.toml` adds a 24-hour supply-chain guard
(`minimumReleaseAge = 86400`), which is a sensible instinct — but it only applies to Bun, and the
repo also commits `package-lock.json`, so installs via npm bypass the guard entirely.

### 1.3 The domain model (`src/lib/neet/types.ts` + `content.ts`)

```
Discipline  = "thinking" | "design" | "engineering"      // the three columns of the app
Stage       = "search" | "know" | "adapt" | "proceed"    // Level 1..4, the "Proceed Scale"
Skill       = { id, discipline, title, blurb, prerequisites[] }
Path        = { slug, title, discipline, level, about[], outcomes[], artifact, modules[] }
Module      = { slug, title, summary, lessons[] }
Lesson      = { slug, title, minutes, summary, skillIds[], keep[], blocks[] }
Lab         = { id, title, skillId, evidenceType, minutes, brief, steps[], twist, artifact }
Evidence    = { skillId, type, score, weight, at, confidence?, ref? }
```

`Lesson.blocks` is a small **typed content DSL** rather than free markdown — `h2`, `p`, `ul`,
`callout`, `code`, `flow`, and `pause` (a multiple-choice check with a `why` explanation). This is
a good decision: it means lessons render as interactive *components*, not as prose with styling.

Actual measured content inventory:

| Thing | Count |
| --- | --- |
| Paths | **11** (8 tiered tracks + 3 "from scratch" on-ramps) |
| Lessons | **26** |
| Total lesson time | **333 minutes** (~5.5 hours) |
| Skills | **16** (4 thinking, 6 design, 6 engineering) |
| Labs | **10** |
| `pause` checks | **26** (one per lesson, no duplicates) |
| Knowledge volumes | **120** markdown files, **100,762 words**, mean 839, max 3,856 |
| Sources | **320** |
| Practice prompts | **73** |
| Role/competency rows | **28** |
| Coverage domains (deep / research) | **50 / 28** |
| Scrape audit rows | **162** |

The curriculum ladder is explicit and unusual — it keeps climbing past "advanced":

```
Track 0  Orientation & Grounding            46 min
Track 1  Core Systems Foundation            49 min
Track 2  Advanced Distributed Systems       42 min
Track 3  Deep Research & Complex Arch       42 min
Track 4  Expert Systems / High Assurance    27 min
Track 5  Decision, Trade-off, Execution     27 min
Track 6  Fifth-level Systems Engineering    29 min
Track 7  Sixth-level Dependability          45 min
         Systems Thinking From Scratch       8 min
         System Design From Scratch          9 min
         Engineering From Scratch            9 min
```

### 1.4 The mastery engine (`src/lib/neet/scale.ts`)

This is the intellectual core, and it is ~170 lines of pure, testable functions.

```
decay(d)    = 0.5 ^ (d / 45)                       // 45-day half-life
mastery     = [Σ w·score·decay] / [Σ w]  ×  min(1, Σw / 6)
level       = 1  by default
              2  if mastery ≥ 0.25
              3  if mastery ≥ 0.55 AND (a variant or lab exists)
              4  if mastery ≥ 0.80 AND an artifact exists
```

Three properties worth naming:

- **Gates are typed, not scored.** You cannot buy your way to *Adapt* with ten easy quizzes; you
  need a lab. You cannot reach *Proceed* without a shipped artifact. This is evidence-based
  credentialing in miniature.
- **Coverage is separate from quality.** `min(1, Σw/6)` stops one lucky answer from reading as
  mastery, and stops ten answers on one skill from pretending to be breadth.
- **It decays.** Come back in 90 days and your *Know* level is genuinely lower. That's honest, and
  it's the reason `nextBestStep()` puts "Review: X" ahead of new material after 14 days idle.

Around it: `disciplineScores()` (mean mastery per discipline → the radar chart),
`calibration()` (buckets evidence by stated confidence at 0.33/0.66/1.0, compares to actual
accuracy, reports the confidence-minus-accuracy **gap**), and `nextBestStep()`
(stale-review → lowest reachable skill → lesson vs lab → fallback).

The identity/heatmap math lives in `progress-math.ts` and is the best-tested code in the repo:
`initialsFrom`, `disciplineOf`, `isoDay` (local-date, deliberately not UTC), `bucketByDay`,
`level` (0/1/2/3/4 at 0/1/2–3/4–5/6+), `heatmapGrid` (52 weeks × 7, Sunday-first, future cells
flagged), `streaks`, and a `mulberry32` + FNV-1a pair so an ASCII signature renders identically on
every device.

### 1.5 Data flow and the two-tier backend

There are **two parallel backends** behind identical function signatures:

```
src/lib/neet/library.functions.ts     (content: read-only, public)
src/lib/neet/account.functions.ts     (personal: auth-scoped)
            │
            ├── hasSupabase()? ──yes──► Supabase PostgREST (anon key / user bearer)
            │                              │  on ANY error
            └── no ──────────────────────► ▼
                                     localDb  (node:sqlite, seeded from content/pack)
```

`db.server.ts` is 1,135 lines: it creates the schema (`articles`, `sources`,
`practice_prompts`, `roles`, `coverage_deep`, `coverage_research`, `scrape_audit`, `pack_meta`,
`profiles`, `learning_goals`, `progress_events`, plus an FTS5 virtual table), seeds it from
`content/pack` on first use, and implements the whole account API synchronously. It also contains
its own hand-written RFC-4180 CSV parser (`parseCsv`) and a track-number → track-name resolver.

Two consequences of this design that shape everything else:

- **Resilience is real.** The app genuinely works with zero cloud config: `npm run dev`, and
  content + accounts live in `.data/system_design.sqlite`.
- **Failure is invisible.** When Supabase errors, the code `console.warn`s and silently switches
  to a *different store*. A user with real cloud data can be shown a local, empty dataset and
  never be told. Same for `exportDossier()`, which never even tries Supabase.

### 1.6 Accounts, identity, and the ritual

- **Auth**: Supabase email/password; email confirmation is on; password reset via
  `/reset-password`; `src/routes/_authenticated/route.tsx` gates `/me`, `/me/calibration` and
  lessons with `redirect({ to: "/auth", search: { redirect } })` and `safeRedirect()` rejects
  off-origin redirects — correctly implemented.
- **Session**: `useSession()` is client-only for UI affordances; every server call re-validates a
  bearer token via the attached `Authorization` header (`auth-attacher.ts`).
- **Signature gate** (`SignatureGate.tsx`): first lesson visit opens a modal that draws an ASCII
  signature from the learner's initials (seeded by `initials + user.id`), which reacts to the
  cursor; you **press and hold for 1,400 ms** to "sign," type a learning goal, and commit. This is
  a genuinely good piece of product design — a commitment device disguised as a flourish.
- **Preview auth brokering** (`previewAuthStorage.ts`, 172 lines): on Lovable preview domains,
  the Supabase session is proxied to the editor over `postMessage`, origin-validated, with a
  logout tombstone and origin seeding. This is defensible security work and should be left alone.
- **Progress sync** (`ProgressSync.tsx`): browser events go out on a `neet:progress`
  `CustomEvent`, are batched (500 max), queued offline, retried every 15 s, and backfilled once
  per browser using a `neet.backfilled.<userId>` flag.

### 1.7 Routes and pages

| Route | What it does | Auth |
| --- | --- | --- |
| `/` | hero (ASCII particle canvas), stat tiles, paths, four-stage method, "why NEET" | public |
| `/paths`, `/paths/$slug` | 11 paths by discipline + skill map with prerequisite rings | public |
| `/learn/$path/$lesson` | 3-column lesson reader, block renderer, pause checks, explain-back, lab submission | **gated** |
| `/library`, `/library/$slug` | 120 volumes by track, full-text search, citation tooltips | public |
| `/sources` | 320 sources with type/topic filters + scrape-audit badges | public |
| `/exercises` | 73 design prompts with required artifacts | public |
| `/careers` | 28 roles with deliverables + a portfolio project each | public |
| `/coverage` | the coverage matrices and pack metadata | public |
| `/method` | the four-stage method | public |
| `/labs` | 10 labs with a twist each | public |
| `/health` | "System Telemetry" — counts, uptime, Node version, memory, **DB file path** | **public** |
| `/me`, `/me/calibration` | heatmap, radar, next best step, calibration, export | **gated** |
| `/auth`, `/reset-password` | sign in / up / forgot | public |

### 1.8 The knowledge pack

`content/pack/` (mirrored byte-for-byte in `SS_content/`, 1.3 MB each) holds 120 numbered volumes
`00_START_HERE` → `118_…` in eight thematic tracks, plus:

- `sources.csv` — 320 rows: `source_id,title,url,source_type,relevance,quality_signal,limitations`
- `practice_prompts.csv` — 73 rows: prompt → concepts → required artifacts (e.g. *P01 URL
  shortener; P02 ticket booking with reservation holds and payment idempotency*)
- `role_competency_matrix.csv` — 28 rows: role → level → competencies → deliverables → portfolio project
- `DEEP_COVERAGE_MATRIX.csv` (50) / `RESEARCH_COVERAGE_MATRIX.csv` (28) — domain → depth → **remaining gap** → next validation action
- `DEEP_SCRAPE_AUDIT.csv` (162) — per-source extraction status
- `PACK_METADATA.json`, `portal_entity_schema.json`

`scripts/` re-imports it all: `content_parse.py` (parse) → `load-content.py` (upsert to Supabase
via service role) and `seed-sqlite.ts` (assert exact counts + <1000 ms seed). `generate_source_enrichment.js`
produces `src/lib/neet/sourceEnrichment.ts` — **14,290 lines / 608 KB** of per-source summaries,
takeaways, domain topics, article cross-links, and audit data.

### 1.9 What I ran, and what it said

```console
$ npm install                 → ok
$ npx vitest run              → 2 files pass (8 tests); 1 suite FAILS TO LOAD
    Error: Cannot bundle Node.js built-in "node:sqlite" imported from
           "src/lib/neet/db.server.test.ts"
$ npx tsc --noEmit            → 2 errors
    src/components/neet/Markdown.tsx(31,32): TS7006: Parameter 'sid' implicitly has an 'any' type
    src/lib/neet/library.functions.ts(183,5): TS2322 ... exactOptionalPropertyTypes: 'audit'
$ npx eslint .                → 0 errors, 8 warnings (react-refresh only)
$ npx vite build              → ✓ built in 1.07s  (Nitro → .output/)
$ grep DatabaseSync .output/server/_ssr/db.server-*.mjs
    var DatabaseSync = /* @__PURE__ */ notImplementedClass("sqlite.DatabaseSync");
$ cat .output/server/wrangler.json
    { "compatibility_flags": ["nodejs_compat"], ... }   // Cloudflare Workers target
```

So: **the dev experience is clean, and the production target is not.** More on that below.

Also worth stating plainly, because it affects every judgement in Part 3: `db.server.test.ts` is
the largest and most valuable test file in the repo (229 lines asserting seed counts, article
ordering, search behaviour, goal limits, dossier export) and it **contributes zero tests** because
Vitest tries to bundle `node:sqlite`. The suite looks green at a glance (8 passing) while the
backbone is untested.

---

## Part 2 — What the internet says (and where this project collides with it)

I went looking for the failure modes that actually kill self-directed learning products and
self-taught learners. Below, each finding is paired with the specific way this repo either dodges
or walks straight into it.

### 2.1 Information overload and choice paralysis — **the #1 documented failure mode**

The most consistent advice across self-taught communities is: pick one thing and go deep, because
the temptation is to collect resources instead of doing the work.

> "We tend to get very excited looking at titles and all the stuff we could be learning and then we
> get lost… Pick one resource, study it back to front, and then move to the next."
> — r/learnprogramming, *[Remember to focus on one resource or you'll be overwhelmed](https://www.reddit.com/r/learnprogramming/comments/osr22l/advice_remember_to_focus_on_one_resource_or_youll/)*

> "I stockpile resources and never really dive into them. It is procrastination and being
> infatuated with the *idea* of learning something new."
> — same thread

> "Don't view it from a completionist perspective… pick a popular stack and just work your way
> through." — r/Frontend, *[How does one deal with the plethora of resources](https://www.reddit.com/r/Frontend/comments/12ec5lw/how_does_one_deal_with_the_plethora_of_resources/)*

**Collision:** the app's home page advertises *11 Curriculum Paths · 120 Knowledge Volumes · 320
Primary Sources · 73 Design Exercises* before a new visitor has done a single thing. That is a
menu, and the research says menus cause paralysis. The library is excellent; it should not be the
front door.

**What the repo already gets right:** `nextBestStep()` in `scale.ts`. A single computed
recommendation with a *reason* ("Mastery decays without retrieval. This one has not been touched
in over two weeks.") is exactly the antidote. It's just buried at `/me`, behind auth, below a
radar chart.

### 2.2 Content dump vs. course

Instructional designers are blunt about this:

> "A course is not defined by how much material appears in the slides or what 'topic' is covered.
> A course is defined by whether the content hangs together… whether they can perform the outcome."
> — *[How to Tell If Your Course Is Nothing but a Content Dump](https://medium.com/grow-yourself-grow-your-business/how-to-tell-if-your-course-is-nothing-but-a-content-dump-dc0bf47c877d)*

> "If you have to have more than 3–4 objectives for a topic then that topic needs another lesson."
> — r/instructionaldesign, *[Too Many Learning Objectives?](https://www.reddit.com/r/instructionaldesign/comments/kiazdu/too_many_learning_objectives/)*

**Collision:** 120 reading volumes vs. 26 lessons. The three beginner paths — the ones a newcomer
will pick because they say "From Scratch" — total **26 minutes of instruction across 3 lessons**,
and then hand you a 46-minute Track 0 and a 3,800-word volume. The sequencing is inverted at
exactly the point where retention is most fragile.

### 2.3 Tutorial hell → you must build, and you must break things

This is the most repeated piece of advice in the entire system-design corpus, and it is
unambiguous:

> "System design only clicks when you build something that actually breaks. Reading about caching
> is useless until you've had a page load take 8 seconds because you were hitting the DB 200 times
> per request… pick one of your projects and try to make it handle 10x the traffic."
> — r/developersIndia, *[Everything feels too theoretical](https://www.reddit.com/r/developersIndia/comments/1sflrub/im_struggling_with_system_design_prep_everything/)*

> "Experience cannot come from research or tutorials, that's for knowledge. Go make a real thing."
> — r/softwarearchitecture, *[How Do I Properly Learn System Design?](https://www.reddit.com/r/softwarearchitecture/comments/1owsg6p/how_do_i_properly_learn_system_design_need/)*

> "Take the LAMP app you wrote in college and move it to Kubernetes… you can build a multi-node key
> value store, a simple queue, then build on top of them." — r/ExperiencedDevs, *[Practical system design experience](https://www.reddit.com/r/ExperiencedDevs/comments/pk8nv2/how_can_i_get_practical_system_design_experience/)*

**What the repo gets right:** the 10 labs have a **`twist`** — a changed constraint. That is
precisely the "make it break" mechanic, written down. `lab-raft-consensus`, `lab-stpa-hazard`, and
`lab-markov-availability` are the kind of thing people pay for.

**Collision:** labs are optional and live on a separate page. Nothing in the mastery model forces
you to *attempt* one — you simply cannot reach Level 3 without one, so the honest reading is that
most learners will plateau at Level 2 and never be told why in the place they're working.

### 2.4 Streaks and gamification actively backfire

The strongest and most consistent signal in this entire research pass:

> "Pay no attention to XP, gems, etc… These are psychological hacks they use to increase screen
> time, not learning." — r/duolingo, *[Going for the streaks but not truly learning?](https://www.reddit.com/r/duolingo/comments/1hd9zz0/going_for_the_streaks_but_not_truly_learning/)*

> "I have a 1394 day streak. But I have become immensely disgusted with the dysfunctional, useless
> and non-helpful gamification… turned a language learning tool that could be very good into a
> useless addictive video game." — same thread

> "Scientific studies have shown that attaching extrinsic reward to things that you were originally
> intrinsically motivated to do will actually lower your motivation." — *[How can I get over Duolingo burnout?](https://www.reddit.com/r/duolingo/comments/132yv7t/how_can_i_get_over_duolingo_burnout/)*

> "The day it disappears, I am sure to leave the app but not to give up on learning; to find a
> better alternative instead." — *[People who give up because you lost your streak](https://www.reddit.com/r/duolingo/comments/1dfu7ki/people_who_give_up_on_learning_a_language/) —* the streak becomes the product, and its loss kills the learner.

**Collision:** there is a **current streak** counter, a **longest streak** counter, and a 52-week
contribution grid — all three of the mechanics people complain about. And `.lovable/north-star.md`
names the product metric as **"Lessons completed each week."** Note also that the heatmap is styled
after GitHub's contribution graph, an intrinsically *competitive* artefact.

This is worth being precise about, because the repo has the ingredients for a better version:
mastery **decays**, which is a *loss-aversion-free* form of urgency. You don't punish a missed day;
you simply show that the thing you learned has faded and offer a 3-minute retrieval. That's honest
and it doesn't need a streak.

### 2.5 Calibration and overconfidence — the app's best idea, under-used

The research on self-assessment is consistent: novices cannot judge their own competence, and the
skill needed to evaluate performance is the same skill you're still building.

> "Learners think they know more than they do… Recognising content feels easier than recalling it
> from memory." — *[Metacognitive monitoring: fixing learner overconfidence](https://www.structural-learning.com/post/metacognitive-monitoring-fixing-student)* *(citing Kruger & Dunning 1999, Karpicke & Roediger 2008)*

> "The most useful implication is personal rather than diagnostic. Early in any new domain, your
> confidence is likely to be poorly calibrated to your actual competence… seek external feedback
> rather than relying on self-assessment."
> — [discussion of Dunning–Kruger, r/science](https://www.reddit.com/r/science/comments/13bonrt/the_dunningkruger_effect_may_largely_be_a/) *(and note the thread's own caveat that the classic curve is partly a statistical artifact — so present it as a personal diagnostic, never as a label for others)*

**What the repo gets right:** `answerPause(id, skillId, choice, correct, confidence)` records a
confidence value on every single check, and `calibration()` computes the gap. That is the
mechanism the literature asks for, already implemented, already unit-testable.

**Collision:** it's a sub-page (`/me/calibration`) reachable from one link, and the gap is never
used to *route* anyone. A learner sitting at high confidence + low accuracy on `st-stocks` should
be pushed back to fundamentals, not forward to `st-loops`. The data to do this already exists.

### 2.6 Generated content and citation trust

If your knowledge pack was assembled with LLM assistance and web extraction — and
`PACK_METADATA.json` describes exactly that workflow ("EFT: Exa discovery → Firecrawl extraction →
TinyFish page/PDF extraction") — the audience's default assumption is now distrust:

> "Nearly one-fifth of the citations… were entirely fabricated. Of the 141 citations that
> corresponded to real publications, almost half contained at least one error."
> — r/science, *[Two-thirds of AI-generated citations are fabricated or contain errors](https://www.reddit.com/r/science/comments/1p2jxl8/study_finds_nearly_twothirds_of_aigenerated/)*

> "I wouldn't use them for actually writing anything, but for finding sources related to a topic
> they can be very helpful." / "Hallucinations never truly go away. Do not trust, always verify."
> — same thread

**What the repo gets right:** the discipline here is better than most published material. There
*is* a `DEEP_SCRAPE_AUDIT.csv` that distinguishes `Full fetch` from `Discovery only` from
`Unreachable`, and `PACK_METADATA.json` includes explicit corrections ("IEC 61508-1:2026 is
FDIS/PRV in ballot, not final"; "NASA-STD-0005 is marked inactive for new design").

**Collision:** the audit is buried, and the payload doesn't match the promise. Measured:

| Metric | Value |
| --- | --- |
| Sources in `sources.csv` | 320 |
| Scrape-audit rows | 162 |
| Sources with **no** audit row | **158 (49%)** |
| Audit rows that are full-ish extraction | 77 (48% of audited) |
| Audit rows that are discovery-only / unreachable / blocked | 45+ |

So roughly half the source library has no recorded verification state, and of the half that does,
about half again is "found it, didn't fully read it." Meanwhile the UI calls the JSON export a
**"Verified Portfolio."** That word is doing work the data doesn't support, and it is the exact
thing a knowledgeable reader will check first.

There's also an internal contradiction: `PACK_METADATA.json` notes claim *"322 unique source
records; 165 audit rows"* and elsewhere *"275 source records; 112 Markdown files"*. The shipped
files are 320 / 162 / 120. The notes are a development changelog that has become user-facing copy
at `/coverage`.

### 2.7 Breadth vs. depth, and the credibility of self-certification

Two adjacent, well-covered topics:

> "I look at the optimal candidates as either T-shaped (depth in one area, but super-broad base) or
> pyramid-shaped… careful with the jack-of-all-trades-master-of-none kind of attitude."
> — r/cscareerquestions, *[Jack of all trades or master of one?](https://www.reddit.com/r/cscareerquestions/comments/4e3one/jack_of_all_trades_or_master_or_one/)*

> "The cert itself isn't really worthwhile. Instead use your skills to build up a portfolio of small
> projects that aren't just following tutorials." — r/learnprogramming, *[are Udemy certificates worth anything?](https://www.reddit.com/r/learnprogramming/comments/v2gef2/are_udemy_certificates_worth_anything_to_get_a_job/)*

> "Nobody cared whether Kramerica Industries was a real company. They cared that you could
> demonstrate the skills required to build a functional website."
> — r/careerguidance, *[How do you prove your skills without experience?](https://www.reddit.com/r/careerguidance/comments/1u8gq4w/how_do_you_prove_your_skills_to_employers_when/)*

**Collision:** the app spreads 16 skills across 3 disciplines and lets you roam. It needs a
deliberate **T**: pick one discipline as the spine (design is the most marketable), and make the
other two electives. And the thing the product calls a portfolio is a **JSON file that the learner
downloads** — invisible to anyone else, self-certified, and (see §3.1) currently generated from the
wrong database. "Show work, not badges" is the right promise; a private JSON download doesn't
deliver it.

### 2.8 "We're a group" — but there is no group

The tagline is a social claim. `SITE.tagline = "We ain't an academy. We're a group."` The
research on why solo learners quit is consistent:

> "Doing it all alone never really a good idea. You need an environment of like-minded people to
> keep you going." — r/learnprogramming, *[accountability partner](https://www.reddit.com/r/learnprogramming/comments/w5z9v7/searching_for_an_accountability_partner_to_force/)*

> "Having the 'pressure' to report what I did really did motivate me." — same thread

> "Learners who actively engaged in peer forums and study groups had a 25% higher completion rate
> than those who studied in isolation." — [MOOC completion analysis](https://ilsuccessore.it/why-mooc-completion-rates-are-stubbornly-low-an-in-depth-analysis)

**Collision:** there is no cohort, no partner, no review exchange, no forum, no comments — not
one multi-user surface in the entire app. Every table is owner-scoped by RLS. The identity promises
community and the software is a solo diary. This is the largest gap between brand and build.

### 2.9 Naming: a three-way acronym collision

"NEET" is simultaneously:

1. **NEET (UG)** — India's National Eligibility cum Entrance Test, the largest exam in the world by
   applicants, and (per the user's own location) the dominant local search intent for the string.
   ([Wikipedia](https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)))
2. **NEET** — the UK policy category *Not in Education, Employment, or Training*, which the
   research literature explicitly says is **stigmatising** and should not be used as a noun:
   > "the nouns 'a NEET' or 'NEETs' should never be used… These generalisations and labels can cause
   > real harm… They can also be internalised so that people labelled as 'NEET' define themselves as
   > being of lesser worth."
   > — *[Are We Stigmatising Young People? We need to talk about 'NEET'](https://www.researchgate.net/publication/397489963)*
3. Your brand, which *reclaims* it: "The label, taken back."

Reclaiming a label is legitimate and the homepage copy handles the stigma argument with real care
("NEET describes who is outside the system, not what they can do"). But a newcomer searching
"NEET" will never find you, and a reader who knows the policy term may read the brand as
insensitivity before reading the paragraph that defends it. This is a positioning problem, not a
moral one — and it is solvable without renaming.

### 2.10 Product scope

> "The product they needed to build was a tenth the size… The 3 things that actually kill MVPs: too
> many features, wrong tech stack for the stage, no feedback loop."
> — r/SaaS, *[I've built 20+ SaaS MVPs](https://www.reddit.com/r/SaaS/comments/1rpx6y0/ive_built_20_saas_mvps_for_nontechnical_founders/)*

**Collision:** the app ships an enterprise telemetry page, a JSON dossier exporter, cursor-reactive
ASCII particle physics, a command palette, a signature ritual, text-size toggles, and 40+ UI
primitives — around a core loop (lesson → check → lab → artifact) that is 333 minutes long and has
26 checks. The ornament-to-substance ratio is inverted.

---

## Part 3 — What to change

Ordered by severity. **P0** items are correctness/security and should be fixed before anyone else
sees the app. **P1** is learning design. **P2** is positioning. **P3** is hygiene.

### 3.1 P0 — Correctness and security

#### (a) Production deploy is broken: `node:sqlite` on Cloudflare Workers

**Evidence:** the build emits `var DatabaseSync = notImplementedClass("sqlite.DatabaseSync")` into
`.output/server/_ssr/db.server-*.mjs`, and `.output/server/wrangler.json` targets Workers with
`nodejs_compat`. `node:sqlite` is not available in workerd. Every `localDb.*` call therefore throws
at runtime — which includes the *entire* no-Supabase path and `/health`, which has no Supabase
branch at all.

**Fix, pick one:**

- **Fastest:** stop shipping a local DB to the edge. Make `db.server.ts` Node-only and set the Nitro
  preset to a Node target (`node-server`), or read the pack as static assets. If Workers is
  required, move to D1 or Supabase-only and delete the fallback.
- **Best:** keep SQLite, but only for local dev, behind an explicit flag
  (`process.env.USE_LOCAL_DB === "1"`). In production, require Supabase and fail loudly and early
  at boot rather than at request time.

Either way: add a smoke test that hits `/library`, `/health` and `/me` **against the built output**,
not just `vite dev`.

#### (b) Auth trusts an unverified JWT and falls back to a shared ghost user

`src/lib/neet/account.functions.ts`, `resilientAuth`:

```ts
const parts = token.split(".");
const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8")); // NOT verified
if (payload?.["sub"]) tokenUserId = payload["sub"];
...
const fallbackUserId = tokenUserId || "00000000-0000-0000-0000-000000000001";
```

The `sub` is read from the token body before any signature check, and when Supabase isn't
configured (or verification fails) **every caller collapses onto one constant user**. Combined with
`getMe`/`recordEvents`/`addGoal` being plain server functions, any client can read and write that
shared profile. Meanwhile `requireSupabaseAuth` in `src/integrations/supabase/auth-middleware.ts`
— the correct, verifying implementation — is imported by **nothing**:

```console
$ grep -rn "requireSupabaseAuth" src --include=*.ts --include=*.tsx | grep -v auth-middleware.ts
(no output)
```

**Fix:** use `requireSupabaseAuth` for all `account.functions.ts` handlers; delete `resilientAuth`
and the constant fallback entirely. If you need a no-cloud dev mode, gate it behind
`import.meta.env.DEV` and derive a per-session dev UUID, never a shared constant. Do not parse JWTs
by hand anywhere.

#### (c) `exportDossier` reads only local SQLite

```ts
export const exportDossier = createServerFn({ method: "GET" })
  .middleware([resilientAuth])
  .handler(async ({ context }) => {
    const { userId } = context;
    const { localDb } = await import("./db.server");
    return ok(localDb.exportLearnerDossier(userId));   // Supabase never consulted
  });
```

A Supabase user clicks **"Export Verified Portfolio (JSON)"** and receives a dossier built from the
local fallback store — empty, or worse, stale data from another context. **Fix:** mirror the
`getMe` pattern, or better: derive the dossier from `getMe()`'s data so there is exactly one source
of truth. And rename the button — see §3.3(c).

#### (d) Half the sync promise is missing: scores never leave the browser

`progress_events` is `(user_id, kind, ref, discipline, occurred_on)`. There is **no** `score`,
`confidence`, or `weight`. `ProgressSync` sends exactly those five fields. But `Dashboard` computes
mastery from `useProgress().evidence`, which is `localStorage`-only:

```ts
// account.functions.ts — the event schema
kind, ref, discipline, occurred_on        // nothing else survives the trip
```

So `/me` renders a **synced heatmap next to an unsynced skill radar**. On a new device the
heatmap is full and the Proceed Scale reads zero. AGENTS.md's claim — "progress follows the user
across devices" — is true for the activity log and false for the mastery model, which is the thing
the product is actually about.

**Fix:** add `score`, `confidence`, `weight`, `evidence_type` to `progress_events` (via Lovable —
AGENTS.md forbids editing `drizzle/` or `supabase/migrations/` by hand), include them in the
`recordEvents` schema, and make `Dashboard` prefer `me.events` when signed in. Until then, label
the radar "on this device" so it doesn't lie.

#### (e) Silent fallback swaps a user's data store

Every Supabase call is wrapped in `try { … } catch { return localDb.* }`. A transient 500 shows the
user a different, empty world with no indication. **Fix:** distinguish *"Supabase not configured"*
(a legitimate, expected fallback) from *"Supabase failed"* (an error the user must see). Return
`{ data: null, error: "Couldn't reach your account. Your local progress is shown." }` and render it
— `useMe` already has an `error` slot that nothing meaningful ever fills.

#### (f) `/health` exposes internals with no auth

`/health` is a public route returning the absolute DB path, Node version, platform, RSS/heap, and
row counts. Harmless locally, unwise as a public endpoint. **Fix:** drop `filePath` from the
response (or from the page), and either gate the route or reduce it to
`{ status: "ok" }`.

#### (g) Search filter injection surface

`searchArticles` interpolates user input into a PostgREST `.or()` filter:

```ts
.or(`title.ilike.%${term.replace(/[%,()]/g, " ")}%,summary.ilike.%${...}%,body.ilike.%${...}%`)
```

PostgREST filter syntax uses `.` and `:` structurally; the sanitizer strips `% , ( )` but not those.
The SQLite path uses parameterised `LIKE` correctly, so this is Supabase-only. **Fix:** use
`.textSearch("fts", …)` with a real `tsvector` column, or at minimum strip `.` `:` `"` `\\` too.

#### (h) Type-check and test suite are red

```console
src/components/neet/Markdown.tsx(31,32): TS7006: Parameter 'sid' implicitly has an 'any' type
src/lib/neet/library.functions.ts(183,5): TS2322 ... exactOptionalPropertyTypes
src/lib/neet/db.server.test.ts: Cannot bundle Node.js built-in "node:sqlite"
```

**Fix:** annotate `sid: string` (one line); make `EnrichedSource["audit"]` optional
(`audit?: EnrichedSourceAudit`) to match `exactOptionalPropertyTypes`; and give `vitest.config.ts`
a Node environment for `*.server.test.ts` (e.g. a `projects`/`environmentMatchGlobs` split with
`server.deps.inline` or by moving the DB test to a Node-only project). Getting 229 lines of DB
assertions back online is the cheapest quality win available.

### 3.2 P1 — Learning design (the changes that matter most)

#### (a) Invert the front door: lesson first, library later

Right now `/` leads with 11 paths, four stat tiles counting volumes/sources/exercises, and a
filter row. Change the hero's primary action from *"Start learning →"* (→ `/paths`, a menu) to a
**single computed next action**: *"Continue: Feedback loops · 12 min"* or, for a new visitor,
*"Start with Systems Thinking From Scratch · 8 min."* Move the 120-volume library to a secondary
CTA ("Browse the reference library — for when you're stuck").

The data for this already exists in `nextBestStep()`. Hoist it above auth: a signed-out visitor
should get a deterministic default (first incomplete lesson of the chosen spine), and the function
already has that fallback (`"Start at the beginning."`).

**Why:** §2.1. A menu of 11 options is the documented failure mode.

#### (b) Build the beginner spine properly

Three 8–9 minute paths for the three most important on-ramps is the biggest content gap. Targets:

- **8–12 lessons per from-scratch path**, each 8–15 minutes, each ending in a `pause` check **and**
  a small artefact (a diagram, a one-page capacity estimate, a failure-mode list).
- Every lesson gets 3–4 measurable objectives, not 8 (§2.2).
- Replace the "read volume 0, then track 0" hand-off with a *just-in-time* pointer: the lesson
  links the specific section of the specific volume it's answering, not the whole library.

#### (c) Make labs the spine, not the annex

- Move `LABS` into the lesson flow: each path's module should end in "apply" with its lab inline,
  not on a separate `/labs` page.
- Surface the *reason* a learner is stuck at Level 2 **inside the lesson**: `computeSkill()`
  already returns a `gate` string ("Needs a variant or lab to reach Adapt"). Render it next to the
  lesson's completion state, with a link to the lab.
- Add the "make it break" pattern explicitly to every lab step list — the `twist` field is this,
  so promote it from a footnote to the primary instruction. Consider a required "what broke, and
  what did you change?" reflection field on lab submission (it already collects `note` + `rating`).

#### (d) De-emphasise streaks; foreground decay

- Keep the heatmap as an *activity record*, but remove the streak counters from the default view
  (or relabel to "days active this month"). Never show a broken streak; never notify about one.
- Replace the north-star metric **"Lessons completed each week"** with something the product can
  honestly claim: **"artefacts shipped per learner per month"** or **"retrievals completed on
  decaying skills."** §2.4 is unambiguous that completion counts produce the gaming behaviour you
  don't want.
- Add a **3-minute retrieval** card on `/me` driven by decay: sort skills by
  `(mastery at last evidence) − (current mastery)` and offer one question. This is a *positive*
  urgency mechanic, and `decay()` + `lastEvidenceAt` already give you the sort key.

#### (e) Promote calibration to the main surface

- Put the confidence-vs-accuracy gap **on the lesson page**, right after each `pause` check:
  "You were certain, and you were wrong — that's the useful kind of data. Here's the paragraph
  again."
- Add a *prediction* before each lesson ("How many of the 3 checks do you think you'll get right?").
  The literature (§2.5) says prediction-then-result is what actually improves calibration.
- **Route on it:** if `confidence − accuracy > 0.3` on a skill, `nextBestStep()` should send the
  learner *back*, not forward. One condition in an existing function.

#### (f) Make verification status visible everywhere

- Add a `verified` badge to source chips: `full fetch` → "read in full", `discovery only` → "found, not fully read", `unreachable` → "couldn't reach".
- Fill the audit gap: **158 of 320 sources have no audit row.** Either audit them, or mark them
  `unverified` in `sources.csv` so the number stops being invisible.
- Add the disclaimer that `PACK_METADATA.json` already contains, on the page: *"Normative standards
  are licensed/paywalled; this summarises scope, not normative text. Check current editions with
  the issuer before use."*
- Move the changelog out of `/coverage`. That page should show the *current* matrices, not a
  history of count reconciliations ("Final sixth-level counts: 322 unique source records…"). Ship
  the changelog as `content/pack/CHANGELOG.md`.

#### (g) Ship a real T-shape

- Ask the learner to pick a **spine discipline** during onboarding (right after the signature gate,
  which is already a commitment moment).
- `disciplineScores()` becomes the headline: "Depth (spine): 34 → next gate: a lab in Scaling."
  The other two disciplines become explicitly labelled electives.
- Give the 16 skills a documented prerequisite graph and remove the two orphans — `sd-scale` and
  `en-shipping` have **no lesson at all** (they're reachable only via labs), so the skill map shows
  a ring you can never fill by reading:

```console
skills with no lesson: [ 'sd-scale', 'en-shipping' ]
```

### 3.3 P2 — Positioning, trust, and the "group"

#### (a) Fix the acronym collision without renaming

- Set a differentiating long-form everywhere in metadata: **"NEET — Systems Thinking, System Design
  & Systems Engineering"**. Add `NEET (systems engineering)` and `NEET learning` as the phrases in
  `og:title` / description / headings, so search engines can disambiguate from the medical exam.
- Add a one-line, above-the-fold disambiguation: *"Not the medical entrance exam. Not a policy
  category."* It's a joke that also fixes SEO.
- Use the label as a *self-description*, never as a noun for others (§2.9). The current copy already
  does this — keep it, and add a line to `AGENTS.md` so it survives future edits.

#### (b) Make "we're a group" mechanically true

This is the biggest brand/build gap (§2.8) and also the highest-retention lever. Minimum viable
version, in order of cost:

1. **A weekly cohort thread** — one page, one prompt ("what did you ship / what broke"), written
   artefacts only. Doesn't need real-time.
2. **Review exchange** — labs already collect a `note` + `rating`. Add "request review" → another
   learner sees the artefact + rubric. Two tables (`review_requests`, `reviews`), RLS: author reads
   all reviews of own work, reviewers read the request.
3. **A rubric per artefact type.** Self-rating out of 3 is currently the only quality signal and
   §2.5 says self-rating is exactly what novices can't do. A 4-criterion rubric per lab makes both
   self- and peer-review meaningful.

#### (c) Stop calling it "verified"

Rename the export. Honest options: **"My Learning Record (JSON)"**, **"Portfolio export"**. If you
want "verified," verification has to exist — which means a reviewer, a signature, or a published
artefact URL. Add a `verified_by` / `verified_at` column and leave them null until someone
actually reviews.

Better still, for the audience in §2.7: **publish the artefact, not the JSON.** A public
`/portfolio/:handle` page rendering a learner's labs, artefacts, and rubric scores is a hundred
times more credible to a hiring manager than a downloaded file — and it's the same data.

#### (d) Trim ornament until the core loop is undeniable

Candidates to cut or defer: `/health` as a product surface (keep it as an ops endpoint if you
need it), the ASCII particle canvas (beautiful; costs a client chunk and a rAF loop on the most
important page), `exportDossier` until it reads the right store. Every one of these is a feature
someone enjoyed building — that's fine, but §2.10 says the failure mode is shipping ten half-good
things instead of two great ones.

### 3.4 P3 — Engineering hygiene

| Issue | Evidence | Fix |
| --- | --- | --- |
| **608 KB module in the client bundle** | `Markdown.tsx` imports `CITATION_ALIASES, getEnrichedSource` from `sourceEnrichment.ts` (14,290 lines) → `library.$slug` chunk is **668 KB raw / 127 KB gz** | Move enrichment to the server: resolve citations in `getArticle` and pass a small `citations` map per article. Expect ~120 KB gz → ~20 KB. |
| **Two lockfiles** | `bun.lock` + `package-lock.json` both committed | Pick one, add `"packageManager"` to `package.json`, delete the other. |
| **Supply-chain guard bypassed** | `bunfig.toml` sets `minimumReleaseAge = 86400`; npm installs ignore it | If npm is the tool, add `npm config` / `.npmrc` equivalent or document Bun as required. |
| **Duplicated content pack** | `content/pack` and `SS_content` are byte-identical (1.3 MB each, 128 files) | Delete `SS_content` or make it a symlink/submodule. Two copies will drift. |
| **Schema has no migration path** | `drizzle/schema.ts` is Postgres, `drizzle/migrations/` is empty, runtime is SQLite, real tables came from Lovable | Treat `drizzle/schema.ts` as the source of truth and generate migrations through Lovable; otherwise delete it so it stops implying a schema you can't reproduce. |
| **No `.env.example`** | `ls .env*` → nothing | Add one listing `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SQLITE_DB_PATH`, `LOVABLE_DB_MIGRATION_URL`. A fresh clone currently cannot boot. |
| **Two sources of truth for content** | `content.ts` has 26 hand-authored lessons; `content/pack` has 120 volumes; the two barely reference each other (`grep -c "/library" content.ts` → **0**) | Add a `volumes: []` field to `Lesson` and require every lesson to cite 1–2 volume slugs. That single change ties the course to the library. |
| **Article reading isn't tracked** | `kind: "article"` exists in the schema and in `ProgressKind`; nothing ever emits it | Either wire it up (`emitProgress({ kind: "article", ref: slug })` on scroll-to-end) or remove it from the union so the heatmap legend isn't a lie. |
| **Hardcoded marketing numbers** | `index.tsx` stats: `"120"`, `"320"`, `"73"` as strings | Compute from data (`PATHS.length` is already computed; do the same for the rest) so the page can't drift from the pack. |
| **Duplicate/near-duplicate metadata notes** | `PACK_METADATA.json` notes list "Documents 96-102 add…" **twice**, and counts that contradict the shipped files | Dedupe the notes; move the history to `CHANGELOG.md`. |
| **`react-refresh` warnings (8)** | exported constants alongside components | Cosmetic; move constants (`slugify`, `buttonVariants`) to their own modules when convenient. |
| **Bundle base** | `index` 480 KB raw / 145 KB gz; `use-session` 220 KB / 56 KB gz; CSS 92 KB / 15 KB gz | Fine for a content app, but audit after the `sourceEnrichment` move — that one change dominates. |

---

## Part 4 — Suggested sequence

**Week 1 — make it true.**
Fix `requireSupabaseAuth` wiring, delete the fallback user, fix `exportDossier`, resolve the
`node:sqlite`/Workers target, gate `/health`, fix the two TS errors, get `db.server.test.ts`
running. Nothing else matters if the app lies about data or crashes in prod.

**Week 2 — make the loop honest.**
Add `score`/`confidence`/`weight` to `progress_events` (via Lovable), make `Dashboard` read synced
evidence when signed in, and label the radar "this device only" until it does.

**Week 3 — make the front door a door, not a menu.**
Hoist `nextBestStep()` into the hero, demote the library to a secondary CTA, and put the `gate`
string next to each lesson's completion state.

**Weeks 4–6 — make beginners succeed.**
Expand the three from-scratch paths to 8–12 lessons with artefacts; inline the labs; add the
rubric; wire lesson→volume citations.

**Ongoing — make "we're a group" real.**
Cohort thread → review exchange → public portfolio pages.

---

## Part 5 — The one thing I'd protect

Most of this document is a list of things to fix. It's worth saying clearly which instinct is
right, because it's rare and easy to lose in a refactor:

**The mastery model is the product.** Decaying, gated, evidence-typed mastery plus per-answer
confidence calibration is a coherent, defensible, teachable idea that almost nobody in the
self-taught space implements. It is also — and this is the tell — implemented as *pure functions
with unit tests*, which means it will survive whatever happens to the UI.

Everything else (the library, the ASCII particles, the heatmap, the health page) is scaffolding
around that. If you have to choose between polishing the scaffolding and deepening the model —
choose the model. Add the prediction step, route on miscalibration, and put the gate string where
the learner is actually working.

The tagline is "Show work, not badges." The mastery model is the only part of the codebase that
actually does that. Make it the centre, and the rest of the decisions get easier.

---

### Appendix — commands used to produce this document

```bash
find src -type f | wc -l                    # 130 files
wc -l src/lib/neet/*.ts src/routes/**/*.tsx  # content.ts 1763, db.server.ts 1135, sourceEnrichment.ts 14290
npm install && npx vitest run               # 8 pass, 1 suite fails to load
npx tsc --noEmit                            # 2 errors
npx eslint .                                # 0 errors, 8 warnings
npx vite build                              # ✓ 1.07s → .output/ (Cloudflare Workers)
grep DatabaseSync .output/server/_ssr/db.server-*.mjs   # notImplementedClass("sqlite.DatabaseSync")
grep -rn requireSupabaseAuth src            # no usages outside auth-middleware.ts
node --experimental-strip-types (content.ts) # 11 paths / 26 lessons / 16 skills / 10 labs / 26 pauses
python3 (csv audit)                          # 320 sources, 162 audit rows, 158 unaudited, 77 full-ish
gzip -c .output/public/assets/*.js           # library.$slug 127 KB gz, index 145 KB gz
```

**Sources consulted** are linked inline throughout Part 2. Reddit threads are community
anecdote, not evidence; I've preferred them where the consensus was broad and repeated, and flagged
where a cited effect (Dunning–Kruger) is itself contested. The instructional-design and
learning-science points (spacing, retrieval, content-dump vs. course, calibration) are
well-established and the linked pieces reference the underlying literature.
