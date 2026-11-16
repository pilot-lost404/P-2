# Technical Stack Deep Dive

A second audit, this time of the **stack itself** rather than the product logic. Sources are
community reports (Reddit r/reactjs, r/webdev, r/Cloudflare), vendor limit docs, and
framework guides; each recommendation says what was applied and what was deliberately not.

Measured on this checkout, not assumed. Numbers below are reproducible with
`npm run verify` and the commands quoted inline.

---

## 1. What the stack actually is

| Layer          | Choice                                        | Version           |
| -------------- | --------------------------------------------- | ----------------- |
| Framework      | TanStack Start (SSR + server functions)       | 1.168             |
| Router         | TanStack Router, file-based, typed            | 1.170             |
| Data           | TanStack Query                                | 5.101             |
| UI             | React 19                                      | 19.2              |
| Bundler        | Vite **8.1.5 → 8.3.8** (rolldown)             | changed this pass |
| Styling        | Tailwind CSS 4 (`@theme inline` tokens)       | 4.2               |
| Runtime target | Cloudflare Workers via Nitro, `nodejs_compat` | —                 |
| DB / auth      | Supabase (Postgres + PostGIS-less, GoTrue)    | supabase-js 2.119 |
| Validation     | Zod **3.25 → 4.6.7**                          | changed this pass |
| Markdown       | react-markdown 10 + remark-gfm                | —                 |

Health of that stack, as measured now:

```console
$ npm audit --omit=dev          → 0 vulnerabilities   (was: 2 high)
$ npx tsc --noEmit              → clean, strict + exactOptionalPropertyTypes
$ npx vitest run                → 4 files / 23 tests
$ npx eslint .                  → 0 errors, 4 warnings (shadcn react-refresh)
$ npx vite build                → exit 0, Workers target
client JS                       → 1,178 KB across 40 chunks
server bundle                   → 5.2 MB raw / 1.16 MB gzip
cold pack module init           → 46 ms (esbuild-bundled, Node 22)
```

---

## 2. The consensus on TanStack Start (and what it means here)

The Reddit threads are unusually consistent, and most of the criticism is _about Next.js_
rather than praise of Start. The recurring points:

**What people like:** client-first with server features opt-in; type-safe routing and server
functions; middleware that behaves; no RSC mental model; no Vercel gravity. One production
user on Workers: _"I've been running a TanStack Start app on Cloudflare Workers and it's been
a great experience so far."_ [1]

**What people warn about:**

1. **Documentation gaps on non-default paths.** _"There's always somehow a documentation gap
   on what I'm trying to do."_ [1] _"The documentation is terrible. Especially if you need to
   run it outside of Vercel's ecosystem."_ [2]
2. **Ecosystem immaturity.** _"Still pre-1.0, the deploy story is less paved, and the
   ecosystem of examples is smaller."_ [1] _"Start is still finding its footing in production
   scenarios."_ [3]
3. **Dev-server rough edges.** _"Not all changes to the codebase would reflect in my browser
   … often have to restart the dev server and delete the cache."_ [4]
4. **Server code leaking to the client if `createServerFn` is wrapped in a factory.** The
   compiler detects the _literal_ call; a helper returning the builder breaks stripping. [5]

### Applied

**Pitfall 4 verified against the real bundle rather than trusted.** The risk is specific and
invisible, so I grepped the built client assets for server identity:

```console
$ for t in "your session expired" account.store sourceEnrichment PACK_MARKDOWN signCommitment loadMe; do
    printf "%-24s " "$t"; grep -rl "$t" .output/public/assets/*.js | wc -l; done
your session expired     0
account.store            0
sourceEnrichment         0
PACK_MARKDOWN            0
signCommitment           0
loadMe                   0
```

No handler body, no auth error string, and no pack text reaches the browser. Two markers do
appear and are _expected_, which is worth stating precisely rather than hiding behind a
clean sweep:

- `createClient` / `getClaims` / `SUPABASE_URL` — the Supabase **client SDK** ships, because
  the browser signs in with it. It is the publishable key path only; `service_role` appears
  zero times.
- `DEEP_SCRAPE_AUDIT` — the literal string in the `/health` page's explanatory copy, not the
  CSV. Confirmed by reading the surrounding chunk.

All 16 server functions call `createServerFn({…})` literally at the definition site — no
factory wrapper anywhere. This is now a _checked_ property rather than a hopeful one, with
the caveat that "grep the bundle" is a proxy for understanding: it proves the obvious leaks
are absent, not that stripping is correct in general.

**Pitfall: route guards are not security.** Every account endpoint runs behind `accountAuth`
middleware, never behind `beforeLoad`. Confirmed by reading the 8 `createServerFn` handlers in
`account.functions.ts`: all carry `.middleware([accountAuth])`. The `_public-account` layout
deliberately has **no** guard, because those pages hold no secrets — the earlier
`_authenticated` guard was gating public curriculum, not protecting data.

### Deliberately not applied

**Migrating off TanStack Start.** The complaints are about _starting_ on Start, not about
running it; the app is already built on it and every P0 is fixed. Migration would be pure
loss.

**Adopting RSC when TanStack ships it.** Multiple threads warn that RSC implementations are
diverging and undocumented [1][6]. Nothing here needs server components; the data is loaders
plus 16 server functions.

---

## 3. Bundle and dependency hygiene — the biggest win of this pass

The Reddit/vendor consensus on shadcn: unreachable scaffold files don't ship (tree-shaken)
but they _do_ keep dependencies alive, which is a dependency-graph and supply-chain problem,
not a byte-count one. The canonical example is an issue that found _33 unreachable files
keeping 24 runtime dependencies alive_ and deleted both. [7]

This repo had the same shape, worse: **35 of 46** `components/ui/*.tsx` files were
unreachable from any entry point.

Verified by import-graph fixpoint, then applied:

```console
before: 46 ui components, 27 dependencies reachable only through dead files
after : 11 ui components, that dependency set gone
```

Removed: 35 scaffold components + `use-mobile.tsx`, and 28 packages — 19 `@radix-ui/*`,
`cmdk`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`,
`@hookform/resolvers`, `react-resizable-panels`, `recharts`, `vaul`. `npm uninstall` reported
**81 packages removed** from the tree. `components.json` was kept, so any component can be
regenerated with `npx shadcn@latest add <name>`.

Also deleted: `scripts/seed-sqlite.ts`, which imported the removed `db.server.ts` — it was
broken and unrunnable, and `npm run seed:sqlite` pointed at it.

Why this matters on Workers specifically: **startup CPU is capped at 1 second and is
validated at deploy time** (error 10021), separately from the per-request budget. [8][9] A
smaller dependency graph is a smaller parse at startup. Server bundle is 5.2 MB raw with a
1.16 MB gzip; Cloudflare's new limit is **64 MiB uncompressed** for free and paid plans
(since 4 Sep 2026) [10][11], so size is not the binding constraint — but startup work still
is.

### What I got wrong, and reverted

I also rewrote citation matching from _26 × `body.includes(alias)`_ to a single alternation
regex, assuming it was hot-path CPU. It isn't:

```console
per-article citation scan: old 0.014 ms → new 0.029 ms     # 2x SLOWER
```

26 substring scans over a ~10 KB body is 0.0004 ms per call. The regex has to compile
alternation state and backtrack on partial matches; `includes` wins at this size. **Reverted
the source** and kept only the 5 new correctness tests, which are worth having regardless
(alias case-insensitivity, longest-match precedence, dedupe).

The honest conclusion: the pack is not a performance problem. Cold parse of all 120 volumes
is 46 ms and a full-text search is 2.9 ms. Optimising it further would be the exact
"premature optimisation dressed as rigour" that the deep dive should warn against.

---

## 4. Cloudflare Workers: what the platform now allows, and what still bites

Current documented limits [8][9]:

| Limit           | Free                                    | Paid                      |
| --------------- | --------------------------------------- | ------------------------- |
| Worker bundle   | 64 MiB uncompressed                     | 64 MiB uncompressed       |
| Startup CPU     | 1 s (deploy-time validation, err 10021) | 1 s                       |
| CPU per request | **10 ms**                               | 30 s default, up to 5 min |
| Memory          | 128 MB                                  | 128 MB                    |

The 10 ms free-plan CPU budget is the real constraint — _"a single multi-megabyte
`JSON.parse()` can eat the whole budget by itself"_ [9]. The pack ships ~1 MB of text and
parses to ~40 MB heap; if that ever landed _per request_ it would fail. It doesn't, because
module scope is initialised once per isolate. That is now the documented reason the pack is
imported at module scope rather than read per request, in `pack.ts`.

**Node compatibility, the trap that broke this project:** `nodejs_compat` does _not_ provide
`node:sqlite`. The previous code compiled `node:sqlite` into
`notImplementedClass("sqlite.DatabaseSync")` — it built fine and failed only at runtime. That
is the class of failure the platform's model invites, and it is why the content layer now has
zero Node built-in dependencies. Checked:

```console
$ grep -rn "node:sqlite\|node:fs" src/lib/neet/    → none in the runtime path
```

`pack.ts` is runtime-agnostic (pure string parsing), which is verified indirectly by the test
suite running it in Node and by the Workers build succeeding.

---

## 5. Supabase and server-boundary security

The 2026 guides converge on a short list, most of which this codebase now satisfies: [12][13]

| Practice                                            | State here                                                                                           |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `service_role` (or secret key) never in client code | Never referenced. Only the publishable key is used, in both browser and server clients               |
| Verify the JWT server-side, don't decode it         | `accountAuth` calls `client.auth.getClaims(token)` — signature + expiry. The old hand-decode is gone |
| Never let a caller supply their own identity        | User id comes only from verified claims; there is no `userId` input on any endpoint                  |
| Enable RLS on every table                           | **Outside this repo's control** — see below                                                          |
| Index the columns policies filter on                | Same                                                                                                 |
| Separate key per environment                        | Uses whatever `SUPABASE_*` env the deployment provides                                               |

The one thing I cannot fix here is RLS: `AGENTS.md` forbids editing `supabase/migrations/`,
so the policies are managed in Lovable. What the code can do — and now does — is refuse to
trust anything unverified on the way in.

The remaining schema gap is unchanged and still honest: `progress_events` has no
`skill_id`/`score`/`confidence`/`weight`. `recordEvidence` writes them when the columns
exist and falls back to activity-only sync when they don't, so the heatmap works either way
and the mastery model degrades visibly rather than silently.

---

## 6. Rendering and SEO

Two findings, both about discoverability rather than speed.

**Markdown rendering is not the bottleneck.** Benchmarks show react-markdown getting
expensive only with syntax highlighting on long, code-heavy, _streaming_ content — 23.1 s of
main-thread time vs 11.6 s without highlighting on a throttled long fixture. [14] This site
renders static prose with no highlighting plugin, and the docs' own advice is: keep documents
reasonably sized, memoise, and don't add heavy plugins. [14][15] `Markdown.tsx` already
memoises the citation pre-pass; no change warranted, and I did not add `React.memo` around
the component because the body changes on navigation anyway.

**A sitemap was missing entirely.** 120 volumes + 26 lessons + 11 paths, and crawlers could
only reach them by expanding a client-side accordion. Applied:

- `src/routes/sitemap[.]xml.ts` — a **server route** (bracketed filename escapes the dot,
  which TanStack Router would otherwise read as a child segment), building 167 URLs from the
  same pack the pages render. Built-in prerender sitemaps only cover prerendered pages, and
  these render on demand. [16][17]
- `robots.txt` now points at it.
- A real `/404` page: a mistyped URL used to render the root **error** boundary ("This page
  didn't load"), blaming the server for a bad link. Now it says what happened and offers paths
  - search.

```console
$ curl -s localhost:8080/sitemap.xml | grep -c "<url>"
167
```

---

## 7. Security advisories — fixed, not accepted

```console
$ npm audit --omit=dev
vite  8.0.0–8.1.5   high   cross-origin script execution via custom middleware (GHSA-9jrq-w75r-8gcw)
                           files outside server.fs.allow served on path collisions (GHSA-rq7h-c2jc-7f22)
zod   <4.6.6        high   memory exhaustion validating oversized constrained collections
```

Both were live in this project — the Vite ones are not theoretical here, since the dev server
is exposed under a proxied preview host. **Fixed** by upgrading Vite to 8.3.8 and Zod to
4.6.7. Zod 4 is a major bump, so the migration was verified rather than assumed:

```console
$ npx tsc --noEmit && npx vitest run && npx vite build    → all clean
$ npm audit --omit=dev                                     → found 0 vulnerabilities
```

The 8 Zod schemas in `account.functions.ts` are plain object/string/number/enum chains and
needed no API changes.

---

## 8. What to do next, ranked

1. **Move the evidence columns through Lovable.** Add `skill_id`, `score`, `confidence`,
   `weight` to `progress_events`, then the fallback branch in `recordEvidence` can go. This is
   the only thing standing between "progress syncs" and "mastery syncs".
2. **Prerender the static pages.** The marketing, method, labs and path pages are identical
   for every visitor; `prerender: { enabled: true, crawlLinks: true }` would serve them as
   assets and cut Worker invocations and cold-start cost. Deliberately not enabled in this
   pass: it changes the deploy model, and the preview here is a dev server where it cannot be
   validated.
3. **Playwright smoke test against `.output`.** The current routing test renders components;
   the previous P0 was a production-only runtime failure (`node:sqlite`) that no unit test
   could catch. A real browser against the built Worker would have caught it.
4. **Consider dropping the generated `client.ts` Supabase `Proxy`.** It throws on first
   property access when env vars are missing, which forced `supabaseConfigured` checks in four
   call sites. It's generated, so this is a Lovable-side change, not a local one.

## What to avoid (recorded so it isn't relitigated)

- **Don't add a UI library back.** 28 packages were removed for zero behaviour change. Any
  future component comes from `npx shadcn@latest add`, on demand.
- **Don't reach for `import.meta.glob`** for the pack — it is untransformed by this
  Vite/rolldown build (returns zero files). Explicit `?raw` imports work; this is already
  documented in `gen-pack-data.mjs`.
- **Don't put `node:` built-ins in any module reachable from a route.** `nodejs_compat`
  doesn't cover them all; they build clean and fail at request time.
- **Don't micro-optimise the pack.** Measured: search 2.9 ms, cold parse 46 ms. My own
  attempted optimisation made it 2× slower.
- **Don't put auth in `beforeLoad`.** It is navigation, not a security boundary; server
  functions are public HTTP endpoints.
- **Don't trust `npm run build` output as evidence that server code is excluded.** Grep the
  client assets for your server markers; the compiler-stripping rule is fragile.

---

## Sources

1. r/reactjs — [Why are people moving from Next.js to TanStack Start?](https://www.reddit.com/r/reactjs/comments/1this9u/why_are_people_moving_from_nextjs_to_tanstack/)
2. r/reactjs — [Coming back to React: how is TanStack Start vs Next stacking up?](https://www.reddit.com/r/reactjs/comments/1n58xvp/coming_back_to_react_how_is_tanstack_start_vs/)
3. r/webdev — [TanStack Start vs Next.js. Why are devs switching?](https://www.reddit.com/r/webdev/comments/1oijk15/tanstack_start_vs_nextjs_why_are_devs_switching/)
4. r/reactjs — [Tanstack vs React Router vs Next](https://www.reddit.com/r/reactjs/comments/1qqu390/tanstack_vs_react_router_vs_next/)
5. Makerkit — [TanStack Start vs Next.js in 2026](https://makerkit.dev/blog/tutorials/tanstack-start-vs-nextjs) and [What Is TanStack Start?](https://makerkit.dev/blog/tutorials/what-is-tanstack-start)
6. r/reactjs — [How is Tanstack a better choice?](https://www.reddit.com/r/reactjs/comments/1k27s0y/how_is_tanstack_a_better_choice/)
7. GitHub — [33 unreachable shadcn/ui scaffold files keep 24 runtime dependencies alive](https://github.com/hanthor/reilly.asia/issues/72)
8. Cloudflare — [Workers Limits](https://developers.cloudflare.com/workers/platform/limits/)
9. [Cloudflare Error 1102 vs 10021: startup CPU](https://www.itechguides.com/how-to-fix-cloudflare-workers-startup-cpu-errors-in-next-js/) and [Workers free plan limits 2026](https://www.cloudhim.com/cloudflare/cloudflare-workers-free-plan-limits)
10. Cloudflare changelog — [Deploy larger Workers, up to 64 MiB](https://community.cloudflare.com/t/workers-deploy-larger-workers-up-to-64-mib-for-both-free-and-paid-plans/955707)
11. [Cloudflare loosened one Workers limit and tightened another](http://produlis.com/blog/cloudflare-workers-size-limit-d1-enforcement)
12. [Supabase RLS Best Practices Checklist (2026)](https://axonbuild.com/blog/supabase-rls-best-practices/)
13. [Supabase Best Practices: Production Readiness Guide (2026)](https://gartsolutions.com/supabase-best-practices/)
14. daily.dev — [React Markdown alternatives: benchmarking 3 streaming renderers](https://daily.dev/posts/react-markdown-alternatives-benchmarking-3-streaming-renderers-ol1elefoc)
15. Contentful — [How to render and edit Markdown in React](https://www.contentful.com/blog/react-markdown/)
16. [Custom sitemaps in TanStack Start](https://royportas.com/posts/custom-sitemaps-in-tanstack-start)
17. [Generating Sitemaps in TanStack Start](https://rabzelj.com/blog/tanstack-start-sitemap-generation)
