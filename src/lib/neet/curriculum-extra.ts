import type { Lesson } from "./types";

/**
 * Additional curriculum, kept in its own module so `content.ts` stays navigable.
 *
 * Why this file exists: an audit of the shipped curriculum found two skills with a
 * practice lab but **no lesson** (`sd-scale`, `en-shipping`), which meant a lab could
 * award evidence for something the learner was never taught, and three one-lesson paths
 * that ended the moment they began. These lessons close those gaps.
 *
 * House rules, enforced by `curriculum.test.ts`:
 *   - every skill is taught by at least one lesson before a lab can assess it;
 *   - every lesson has at least one `pause` block (retrieval, not just reading);
 *   - citations point at real ids in `content/pack/sources.csv`.
 */

/** Scaling & caching — teaches `sd-scale`, which previously only had a lab. */
export const SCALING_LESSONS: Lesson[] = [
  {
    slug: "caching-and-the-stale-read-problem",
    title: "Caching, and the stale read you just accepted",
    minutes: 12,
    summary:
      "A cache is a bet that the data will not change before someone reads it. Learn to state that bet out loud, because it is the only thing that makes a cache fast and the only thing that makes it wrong.",
    skillIds: ["sd-scale"],
    keep: [
      "A cache is a correctness trade, not a performance trick. Name the staleness you accept.",
      "Cache-aside still reads through on a miss; a stale entry is a write-path problem, not a read-path one.",
      "Measure the hit ratio before you tune anything — a cache with a 20% hit rate adds a hop for nothing.",
    ],
    blocks: [
      { t: "h2", text: "The bet a cache makes" },
      {
        t: "p",
        text: "Putting a cache in front of a slow lookup is the cheapest performance win in system design, and the easiest way to serve someone the wrong answer. A cache entry is a copy. The moment it is written, it starts drifting from the source of truth. Everything else — TTL, invalidation, versioning — is a strategy for bounding how wrong that copy is allowed to be.",
      },
      {
        t: "flow",
        steps: [
          "Read request",
          "Cache hit → return copy",
          "Cache miss → read source",
          "Write copy to cache",
        ],
        caption:
          "Cache-aside on the read path. The write path, not shown, is where staleness is born.",
      },
      {
        t: "p",
        text: "The question is never 'should we cache'. It is 'how stale may this value be, and what does a reader do with a stale value'. A profile avatar may be minutes stale. An account balance may not be stale at all. The same infrastructure serves both, and only the requirement tells you which one you are building.",
      },
      {
        t: "h2",
        text: "Three ways to be wrong",
      },
      {
        t: "ul",
        items: [
          "**TTL only.** Simple and bounded: every entry is at most N seconds stale. Costs a burst of misses at expiry, and cannot express 'this specific record changed'.",
          "**Write-through invalidation.** Delete or update the entry when the source changes. Correct in the happy path, racy when two writers interleave with a read.",
          "**Versioned entries.** Store the version next to the value and reject a copy older than the one you already hold. More machinery, but it survives out-of-order delivery.",
        ],
      },
      {
        t: "callout",
        tone: "warn",
        title: "The classic race",
        text: "Reader misses, fetches value V1. Writer updates the source to V2 and deletes the cache. Reader then writes V1 into the cache. The cache now holds a value older than the database, and no TTL will fix it sooner than expiry. Read-through-plus-delete cannot prevent this ordering; versioning or a short TTL can bound it.",
      },
      {
        t: "pause",
        id: "cache-1",
        skillId: "sd-scale",
        q: "A user updates their display name, reloads, and still sees the old name for 60 seconds. What is the most likely design?",
        options: [
          "The write failed and was silently dropped.",
          "A cache-aside read with a 60-second TTL and no invalidation on write.",
          "The database is under-provisioned and the query timed out.",
        ],
        answer: 1,
        why: "A consistent 60-second window that then corrects itself is the fingerprint of TTL expiry. A failed write would not self-heal; a slow query would be intermittent.",
      },
      { t: "h2", text: "When the cache node restarts" },
      {
        t: "p",
        text: "An empty cache is not a neutral state. Every request that used to hit now misses, so the source of truth receives the full read load at once — the thundering herd. This is why 'the cache went down' and 'the database went down' are often the same incident, minutes apart. Google's SRE material [S15] treats this as a capacity question: your origin must survive a cold cache, or the cache is a single point of failure rather than a performance layer.",
      },
      {
        t: "pause",
        id: "cache-2",
        skillId: "sd-scale",
        q: "Your cache serves 95% of reads. It restarts empty during peak traffic. What happens to the database?",
        options: [
          "Nothing — the 5% of misses were already being served.",
          "Read load jumps roughly 20x, which is far above its provisioned capacity.",
          "It gets faster, because the cache was masking slow queries.",
        ],
        answer: 1,
        why: "If 95% of reads hit, then misses are 5%, so the origin normally sees 1/20th of read traffic. A cold cache sends all of it at once — a 20x spike, not a 5% one.",
      },
      {
        t: "callout",
        title: "Read more",
        text: "Google SRE Book [S15] for load and overload behaviour, and Google Cloud's reliability pillar [S20] for how a performance layer becomes a reliability dependency.",
      },
    ],
  },
];

/** Shipping small — teaches `en-shipping`, which previously only had a lab. */
export const SHIPPING_LESSONS: Lesson[] = [
  {
    slug: "the-thin-slice",
    title: "The thin slice ships, the perfect design does not",
    minutes: 11,
    summary:
      "The smallest version that a real user can complete end to end is not a compromise on quality — it is the only version that produces information. Learn to cut a slice instead of a corner.",
    skillIds: ["en-shipping"],
    keep: [
      "A thin slice crosses every layer: input, storage, output. Cutting a layer is not slicing.",
      "Ship to one real user before you ship to many imaginary ones.",
      "The first bug report is the deliverable, not a failure of the release.",
    ],
    blocks: [
      { t: "h2", text: "A corner versus a slice" },
      {
        t: "p",
        text: "Cutting a corner means skipping a layer of the system — no persistence, no error handling, no deploy. Cutting a slice means doing every layer, shallowly. A slice is verifiable end to end; a corner is not verifiable at all until the skipped part appears.",
      },
      {
        t: "flow",
        steps: ["One input", "One path", "One store", "One output", "Deployed"],
        caption:
          "The thinnest useful slice. Each step is thin; every step is present, including deployment.",
      },
      {
        t: "pause",
        id: "slice-1",
        skillId: "en-shipping",
        q: "You have two weeks to build a note-taking tool. Which plan produces the most information?",
        options: [
          "Build a rich offline-capable editor with a plugin system, deploy at the end.",
          "Build save-one-note-in-a-database-and-show-it, deployed on day two.",
          "Write the architecture document and get it reviewed.",
        ],
        answer: 1,
        why: "Only a deployed end-to-end path produces evidence. The others produce artefacts that cannot be wrong yet — and therefore cannot teach you anything.",
      },
      { t: "h2", text: "Deployment is a feature, not a phase" },
      {
        t: "p",
        text: "If the deploy happens once, at the end, then every unknown about production is resolved in the most expensive possible moment. A project that deploys on day two discovers its configuration, certificate and data-shape problems while there is still time to change direction. This is the operational half of the argument that NASA's verification planning makes in the large [S58]: verify against the real environment, not a described one.",
      },
      {
        t: "callout",
        tone: "warn",
        title: "What small does not mean",
        text: "Small does not mean untested or unowned. The slice still needs at least two behaviour tests and a README, because a user you hand a broken link to does not care how thin the slice was.",
      },
      {
        t: "pause",
        id: "slice-2",
        skillId: "en-shipping",
        q: "Your slice is live and one person finds a bug. What is the correct next step?",
        options: [
          "Roll back and rethink the design.",
          "Reproduce it, fix it, and note what your tests failed to cover.",
          "Add a feature so the bug is less visible.",
        ],
        answer: 1,
        why: "The bug is the information you shipped to get. Fixing it and closing the test gap is the loop working; rolling back throws the information away.",
      },
    ],
  },
];

/**
 * Single-lesson paths extended to a real sequence.
 *
 * `systems-thinking-fundamentals` was one 8-minute lesson; it now has a second that makes
 * the first actionable, so the "Start here" recommendation does not dead-end after one page.
 */
export const EXTENSION_LESSONS: Record<string, Lesson[]> = {
  "systems-thinking-fundamentals": [
    {
      slug: "from-model-to-intervention",
      title: "From model to intervention",
      minutes: 10,
      summary:
        "You drew the loop. Now the part that matters: choosing where to push, predicting what happens, and knowing when to stop pushing.",
      skillIds: ["st-leverage", "st-loops"],
      keep: [
        "An intervention without a prediction cannot be evaluated — write the prediction down first.",
        "High-leverage points are usually rules and information flows, not effort.",
        "Policy resistance is a signal that you pushed a loop instead of a structure.",
      ],
      blocks: [
        { t: "h2", text: "A model earns its keep when it predicts" },
        {
          t: "p",
          text: "A causal loop diagram that only explains the past is a story. To be a model it has to say what happens next — specifically, what will be different in two weeks if you do X instead of Y. That prediction is what turns an opinion into a test.",
        },
        {
          t: "flow",
          steps: [
            "Draw the loop",
            "Pick a leverage point",
            "Predict the response",
            "Intervene small",
            "Compare",
          ],
          loop: true,
          caption: "Each pass corrects the model. The diagram is a hypothesis, not a verdict.",
        },
        {
          t: "pause",
          id: "intervene-1",
          skillId: "st-leverage",
          q: "A backlog keeps growing despite hiring. Where is the highest-leverage place to look first?",
          options: [
            "Hire more people, faster.",
            "The rule that decides what enters the backlog and what order it leaves in.",
            "Ask the team to work longer hours.",
          ],
          answer: 1,
          why: "A growing stock with rising inflow capacity points at the rules governing flow, not the size of the workforce. Hiring into a broken admission rule accelerates the queue.",
        },
        { t: "h2", text: "Policy resistance" },
        {
          t: "p",
          text: "When a well-intentioned fix is absorbed and the system returns to its previous behaviour, actors inside the system are usually balancing your push. That is not stubbornness; it is the loop doing its job. Donella Meadows' leverage hierarchy [S04] puts rules, information flows and goals far above parameters like headcount or budget for exactly this reason.",
        },
        {
          t: "callout",
          title: "Where this goes next",
          text: "The practice lab for this path (lab-leverage, on the Labs page) asks you to rank twelve interventions and defend one against exactly this kind of resistance. Volume 02 — Systems Thinking in the library has the full treatment of leverage and delay.",
        },
      ],
    },
  ],
};
