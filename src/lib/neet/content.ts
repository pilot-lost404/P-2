import type { Discipline, Lab, Path, Skill, Stage } from "./types";
import { EXTENSION_LESSONS, SCALING_LESSONS, SHIPPING_LESSONS } from "./curriculum-extra";

export const SITE = {
  name: "NEET",
  long: "Not in Education, Employment, or Training",
  tagline: "We ain't an academy. We're a group.",
};

export const STAGES: {
  id: Stage;
  label: string;
  level: number;
  meaning: string;
  evidence: string;
}[] = [
  {
    id: "search",
    label: "Search",
    level: 1,
    meaning: "You can ask good questions and find real sources.",
    evidence: "Framing exercises, question logs, first attempts",
  },
  {
    id: "know",
    label: "Know",
    level: 2,
    meaning: "You can explain it and hold a working mental model.",
    evidence: "Pause-and-think checks, explain-back",
  },
  {
    id: "adapt",
    label: "Adapt",
    level: 3,
    meaning: "You can apply it when the constraints change.",
    evidence: "Variant problems and practice labs",
  },
  {
    id: "proceed",
    label: "Proceed",
    level: 4,
    meaning: "You can decide, build, and defend it.",
    evidence: "Shipped artifacts, review, spaced retrieval",
  },
];

export const DISCIPLINES: Record<Discipline, { label: string; blurb: string }> = {
  thinking: {
    label: "Systems Thinking",
    blurb: "Stocks, loops, delays, leverage, and boundary critique.",
  },
  design: {
    label: "System Design",
    blurb: "Requirements, data, scale, reliability, and trade-offs.",
  },
  engineering: {
    label: "Engineering",
    blurb: "Formal verification, safety, dependability, and lifecycle rigor.",
  },
};

export const SKILLS: Skill[] = [
  // Foundational Thinking
  {
    id: "st-stocks",
    discipline: "thinking",
    title: "Stocks & flows",
    blurb: "Track what accumulates and what moves it.",
    prerequisites: [],
  },
  {
    id: "st-loops",
    discipline: "thinking",
    title: "Feedback loops",
    blurb: "Spot reinforcing and balancing structure.",
    prerequisites: ["st-stocks"],
  },
  {
    id: "st-leverage",
    discipline: "thinking",
    title: "Leverage points",
    blurb: "Find where small pushes change a lot.",
    prerequisites: ["st-loops"],
  },
  {
    id: "st-boundaries",
    discipline: "thinking",
    title: "Boundary critique",
    blurb: "Examine what is inside vs outside system scope.",
    prerequisites: ["st-leverage"],
  },

  // System Design
  {
    id: "sd-requirements",
    discipline: "design",
    title: "Requirements & estimation",
    blurb: "Frame the problem, quantify load and latency budgets.",
    prerequisites: [],
  },
  {
    id: "sd-data",
    discipline: "design",
    title: "Data & storage",
    blurb: "Pick the store that fits the access pattern.",
    prerequisites: ["sd-requirements"],
  },
  {
    id: "sd-scale",
    discipline: "design",
    title: "Scaling & caching",
    blurb: "Absorb load without lying to users.",
    prerequisites: ["sd-data"],
  },
  {
    id: "sd-reliability",
    discipline: "design",
    title: "Design for reliability",
    blurb: "Budget for failure, then survive it.",
    prerequisites: ["sd-scale"],
  },
  {
    id: "sd-consensus",
    discipline: "design",
    title: "Distributed consensus",
    blurb: "Raft, Paxos, quorums and replication invariants.",
    prerequisites: ["sd-data", "sd-scale"],
  },
  {
    id: "sd-trade-studies",
    discipline: "design",
    title: "Decision analysis & MCDA",
    blurb: "Score alternatives with utility curves and sensitivity.",
    prerequisites: ["sd-requirements"],
  },

  // Systems Engineering & High Assurance
  {
    id: "en-reading",
    discipline: "engineering",
    title: "Reading unfamiliar code",
    blurb: "Build a map before you change anything.",
    prerequisites: [],
  },
  {
    id: "en-testing",
    discipline: "engineering",
    title: "Tests as feedback",
    blurb: "Make change cheap and safe.",
    prerequisites: ["en-reading"],
  },
  {
    id: "en-shipping",
    discipline: "engineering",
    title: "Shipping small",
    blurb: "Get a thin slice live and learn.",
    prerequisites: ["en-testing"],
  },
  {
    id: "en-assurance-gsn",
    discipline: "engineering",
    title: "Assurance cases (GSN)",
    blurb: "Structure claims, arguments and evidence trees.",
    prerequisites: ["en-testing"],
  },
  {
    id: "en-safety-stpa",
    discipline: "engineering",
    title: "System safety & STPA",
    blurb: "Identify unsafe control actions and hazard feedback.",
    prerequisites: ["st-loops", "en-assurance-gsn"],
  },
  {
    id: "en-dependability-markov",
    discipline: "engineering",
    title: "Markov dependability & Weibull",
    blurb: "Model MTBF, MTTR, availability and failure distributions.",
    prerequisites: ["sd-reliability"],
  },
];

export const PATHS: Path[] = [
  // ==========================================
  // Track 0: Orientation & Grounding
  // ==========================================
  {
    slug: "orientation-and-grounding",
    title: "Track 0: Orientation & Grounding",
    discipline: "thinking",
    tagline: "Mental models, the iceberg model, and boundary critique.",
    level: "Beginner",
    about: [
      "Every architecture failure begins with a misdrawn boundary or a hidden assumption. This track introduces systems science from the ground up: separating events from systemic structure, identifying feedback delays, and questioning boundary judgments before writing code.",
      "Rooted in Donella Meadows' systems thinking, INCOSE lifecycle principles, and Open University systems practice, you learn how to diagnose why systems behave the way they do rather than blaming individuals.",
    ],
    outcomes: [
      "Separate visible events from patterns, underlying structure, and mental models",
      "Model situations with stock-and-flow dynamics and balancing/reinforcing loops",
      "Apply Churchman-Ulrich boundary critique to declare what is inside and outside system scope",
      "Identify emergent behaviors and leverage points that resist unintended consequences",
    ],
    artifact:
      "A causal-loop diagram of a production socio-technical system, defending one high-leverage intervention against policy resistance.",
    modules: [
      {
        slug: "mental-models-and-iceberg",
        title: "Mental Models & The Iceberg",
        summary: "Why visible events mislead, and how structure dictates long-term behavior.",
        lessons: [
          {
            slug: "the-iceberg-and-system-boundaries",
            title: "The Iceberg Model & System Boundaries",
            minutes: 10,
            summary:
              "Explore the four levels of the iceberg: events, patterns, system structures, and mental models. Learn why system boundaries are choices, not objective facts.",
            skillIds: ["st-stocks", "st-boundaries"],
            keep: [
              "Events are symptoms; structure is the cause.",
              "A system boundary is an explicit modeling decision that determines which feedbacks you see and which you ignore.",
              "Consult Volume 00 and Volume 01 in the Library for canonical definitions.",
            ],
            blocks: [
              { t: "h2", text: "The Four Levels of the Iceberg" },
              {
                t: "p",
                text: "When an outage occurs, the incident is merely the tip of the iceberg. To stop recurring fires, engineers must dig through patterns of behavior down to the system structures and underlying mental models that generated them.",
              },
              {
                t: "flow",
                steps: [
                  "Events (Reaction)",
                  "Patterns (Anticipation)",
                  "System Structure (Design)",
                  "Mental Models (Transformation)",
                ],
                caption: "The Iceberg Model: each deeper level provides greater leverage.",
              },
              {
                t: "pause",
                id: "iceberg-check-1",
                skillId: "st-stocks",
                q: "A service runs out of database connections every Monday at 9 AM. Which diagnosis represents structural understanding?",
                options: [
                  "The database team was slow to restart the pool.",
                  "A cron job launches batch reports simultaneously with peak user logins without rate limiting.",
                  "Monday had higher network traffic than Sunday.",
                ],
                answer: 1,
                why: "Connecting the scheduled cron job to the peak login surge identifies the structural mechanism rather than isolated events.",
              },
              { t: "h2", text: "System Boundaries & Stakeholder Scopes" },
              {
                t: "p",
                text: "A system boundary is never neutral. If you exclude support operations or regulatory reporting from your boundary, you do not eliminate their costs—you merely externalize them. Primary references: INCOSE Systems Engineering Handbook [S01] and Donella Meadows [S04].",
              },
              {
                t: "callout",
                title: "Knowledge Pack Anchor",
                text: "Review Volume 01 (Definitions and Mental Models) in the Library for formal boundaries, cohesion, and coupling definitions.",
              },
            ],
          },
          {
            slug: "emergence-and-cohesion",
            title: "Emergence, Cohesion & Coupling",
            minutes: 12,
            summary:
              "Understand why system behavior cannot be predicted from individual components in isolation, and how coupling creates unexpected failure modes.",
            skillIds: ["st-stocks", "st-boundaries"],
            keep: [
              "Emergence is a property of the whole system that none of the parts possess alone.",
              "Tight coupling transmits shocks; loose coupling buffers them but introduces coordination latency.",
            ],
            blocks: [
              { t: "h2", text: "The Whole is Different from the Sum of Parts" },
              {
                t: "p",
                text: "Emergent behavior—such as retry storms, cascading brownouts, and oscillation—arises from the interaction between components. Local optimization frequently degrades overall system health.",
              },
              {
                t: "pause",
                id: "emergence-check-1",
                skillId: "st-boundaries",
                q: "When every client library adds immediate exponential retries without jitter, what emergent behavior appears under backend distress?",
                options: [
                  "The backend recovers faster due to reliable delivery.",
                  "A retry storm that amplifies load and prevents backend recovery.",
                  "No change in load.",
                ],
                answer: 1,
                why: "Synchronized retries create resonant traffic spikes that overload already degraded services.",
              },
              {
                t: "callout",
                title: "Normative Baseline",
                text: "Refer to INCOSE Handbook [S01] Section 2 and Software Architecture in Practice [S03].",
              },
            ],
          },
        ],
      },
      {
        slug: "dynamics-and-leverage",
        title: "Feedback Dynamics & Leverage Points",
        summary: "Feedback loops, stock-and-flow accounting, and Meadows' leverage hierarchy.",
        lessons: [
          {
            slug: "stocks-flows-and-delays",
            title: "Stocks, Flows & Delay Oscillations",
            minutes: 11,
            summary:
              "Learn the accounting of systems: stocks hold memory, flows change rates, and delays cause destructive oscillations.",
            skillIds: ["st-stocks", "st-loops"],
            keep: [
              "Stocks accumulate history; they cannot change instantaneously.",
              "Delays in balancing feedback loops inevitably cause overshoot and hunting.",
            ],
            blocks: [
              { t: "h2", text: "Stock and Flow Accounting" },
              {
                t: "p",
                text: "A stock is an accumulation of matter, energy, or information over time (e.g., queued requests, tech debt, open incidents). Flows are rates that add to (inflows) or drain from (outflows) stocks.",
              },
              {
                t: "code",
                label: "system dynamics loop",
                text: "backlog[t] = backlog[t - dt] + (incident_inflow - resolution_outflow) * dt",
              },
              {
                t: "pause",
                id: "stocks-check-1",
                skillId: "st-loops",
                q: "Why does adding more engineers to a late software project often make it later (Brooks's Law)?",
                options: [
                  "New engineers write slower code.",
                  "Training new engineers is a delayed flow that temporarily drains productive capacity from existing engineers.",
                  "Communication channels shrink.",
                ],
                answer: 1,
                why: "The onboarding delay diverts existing senior capacity before the new inflow can contribute.",
              },
            ],
          },
          {
            slug: "donella-meadows-leverage-hierarchy",
            title: "Meadows' Leverage Points Hierarchy",
            minutes: 13,
            summary:
              "Master the 12 leverage points: why parameters are weak interventions and how information flows and system goals dominate.",
            skillIds: ["st-leverage"],
            keep: [
              "Numbers and parameters are the lowest leverage; goals, feedback structures, and paradigms are the highest.",
              "Closing a missing feedback loop is more potent than doubling a parameter budget.",
            ],
            blocks: [
              { t: "h2", text: "Where to Push so the System Moves" },
              {
                t: "p",
                text: "Engineers spend 90% of their time arguing over parameters (buffer size, thread pool capacity). Donella Meadows showed that changing information flows and system rules provides exponentially higher leverage.",
              },
              {
                t: "flow",
                steps: [
                  "Parameters (Weak)",
                  "Buffers & Delays",
                  "Feedback Strength",
                  "Information Flows",
                  "System Rules",
                  "System Goals (Strongest)",
                ],
                caption: "Meadows Leverage Hierarchy: moving from parameters to paradigm shifts.",
              },
              {
                t: "pause",
                id: "leverage-check-1",
                skillId: "st-leverage",
                q: "Which intervention represents high leverage when developers frequently ship regressions?",
                options: [
                  "Increase the timeout parameter on test runners.",
                  "Route production telemetry and error traces directly into the authoring team's slack channel.",
                  "Require three managerial sign-offs on pull requests.",
                ],
                answer: 1,
                why: "Routing telemetry to authors restores a missing feedback loop, closing the information delay.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 1: Core Systems Foundation
  // ==========================================
  {
    slug: "core-systems-foundation",
    title: "Track 1: Core Systems Foundation",
    discipline: "design",
    tagline: "Architecture styles, quality attributes, and distributed data.",
    level: "Beginner",
    about: [
      "Translating ambiguous customer requirements into a verifiable distributed architecture requires a structured method. This track covers requirements elicitation, quality attribute scenarios (ISO/IEC 25010), estimation arithmetic, datastore selection, and defense-in-depth reliability.",
      "Spanning Volumes 03 through 10, you will master the foundational disciplines required for professional software system design: C4 modeling, CAP boundaries, and failure survivability.",
    ],
    outcomes: [
      "Convert fuzzy requirements into measurable Quality Attribute Scenarios (stimulus, environment, response, response measure)",
      "Estimate peak throughput, storage growth, and network bandwidth on back-of-envelope arithmetic",
      "Select relational, key-value, document, or columnar stores based strictly on access pattern semantics",
      "Design defense-in-depth resilience: bulkheads, circuit breakers, and rate limiters",
    ],
    artifact:
      "A structured System Architecture Document (C4 Level 2) with back-of-the-envelope calculations and three defended architectural trade-offs.",
    modules: [
      {
        slug: "requirements-and-estimation",
        title: "Requirements & Capacity Sizing",
        summary: "Quality attribute scenarios, latency budgets, and sizing arithmetic.",
        lessons: [
          {
            slug: "quality-attribute-scenarios",
            title: "Quality Attribute Scenarios (ATAM & ISO 25010)",
            minutes: 12,
            summary:
              "Learn why requirements like 'the system must be fast' are useless, and how to write 6-part testable quality attribute scenarios.",
            skillIds: ["sd-requirements"],
            keep: [
              "A quality requirement must specify: source, stimulus, artifact, environment, response, and response measure.",
              "Quality attributes always trade against each other: latency vs durability, availability vs consistency.",
            ],
            blocks: [
              { t: "h2", text: "The Six Parts of a Quality Scenario" },
              {
                t: "p",
                text: "Following SEI Architecture Tradeoff Analysis Method (ATAM) [S03, S125] and ISO/IEC/IEEE 29148 [S121], every quality attribute must be rigorously quantifiable.",
              },
              {
                t: "flow",
                steps: [
                  "Stimulus Source",
                  "Stimulus",
                  "Artifact",
                  "Environment",
                  "Response",
                  "Response Measure",
                ],
                caption: "ATAM Quality Attribute Scenario anatomy.",
              },
              {
                t: "pause",
                id: "scenario-check-1",
                skillId: "sd-requirements",
                q: "Which statement represents an actionable quality attribute requirement?",
                options: [
                  "The checkout API must be highly available.",
                  "Under normal peak load (2,000 req/s), 99.9% of checkout requests must succeed within 250ms.",
                  "The UI should feel snappy.",
                ],
                answer: 1,
                why: "It provides concrete environment (2,000 req/s), response (succeed), and response measure (99.9% within 250ms).",
              },
              {
                t: "callout",
                title: "Reference Volume",
                text: "See Volume 04 (Requirements and Quality Attributes) in the Library.",
              },
            ],
          },
          {
            slug: "back-of-the-envelope-estimation",
            title: "Back-of-the-Envelope Capacity Sizing",
            minutes: 11,
            summary:
              "Master standard sizing heuristics: 10^5 seconds per day, peak-to-average multipliers, and storage growth calculation.",
            skillIds: ["sd-requirements"],
            keep: [
              "1 day is ~86,400 seconds (call it 10^5).",
              "Always size for peak load (typically 3x to 10x average) and include replication factor for storage.",
            ],
            blocks: [
              { t: "h2", text: "Mental Math for Scale" },
              {
                t: "code",
                label: "scaling heuristic",
                text: "100M writes/day = 100M / 10^5 = 1,000 writes/sec average\nPeak (3x) = 3,000 writes/sec\n1 KB/write * 100M = 100 GB/day = 36.5 TB/year raw\nWith 3x replication = ~110 TB/year usable capacity required",
              },
              {
                t: "pause",
                id: "est-check-1",
                skillId: "sd-requirements",
                q: "If an app receives 50 million read requests per day, what is the approximate average read RPS?",
                options: ["~50 RPS", "~500 RPS", "~5,000 RPS", "~50,000 RPS"],
                answer: 1,
                why: "50,000,000 / 100,000 seconds = 500 requests per second.",
              },
            ],
          },
        ],
      },
      {
        slug: "data-and-reliability-foundations",
        title: "Distributed Data & Defense in Depth",
        summary: "Storage access patterns, CAP boundaries, and failure containment.",
        lessons: [
          {
            slug: "storage-paradigms-and-cap",
            title: "Access Patterns & The CAP Boundary",
            minutes: 14,
            summary:
              "Evaluate relational, document, key-value, and wide-column stores against access patterns and partition tolerance.",
            skillIds: ["sd-data"],
            keep: [
              "Start from query access patterns, access keys, and read/write ratios, never from database brand names.",
              "In a network partition, you must choose between consistency (reject writes) or availability (accept stale writes).",
            ],
            blocks: [
              { t: "h2", text: "Matching Access Patterns to Store" },
              {
                t: "p",
                text: "Relational stores excel at transactional integrity across multiple entities. Document stores fit aggregate boundaries. Key-value stores provide sub-millisecond point lookups. See Volume 07 (Distributed Systems and Data).",
              },
              {
                t: "pause",
                id: "cap-check-1",
                skillId: "sd-data",
                q: "A financial ledger service suffers a network partition between data centers. To prevent money duplication, what must it do under PACELC/CAP?",
                options: [
                  "Accept writes locally and hope to reconcile later.",
                  "Reject writes and sacrifice availability to guarantee consistency.",
                  "Switch immediately to an in-memory cache.",
                ],
                answer: 1,
                why: "Financial ledgers require linearizable consistency; allowing uncoordinated split-brain writes creates irreconcilable fraud.",
              },
            ],
          },
          {
            slug: "defense-in-depth-resilience",
            title: "Defense in Depth: Bulkheads & Breakers",
            minutes: 12,
            summary:
              "Implement bulkheads, circuit breakers, backpressure, and rate limiting to prevent localized failures from becoming cascading outages.",
            skillIds: ["sd-reliability"],
            keep: [
              "Isolate failure domains using bulkheads so one slow dependency cannot exhaust all worker threads.",
              "Circuit breakers trip open when error rates cross thresholds, shedding load before infrastructure collapses.",
            ],
            blocks: [
              { t: "h2", text: "Bulkhead Isolation" },
              {
                t: "p",
                text: "Like compartments in a ship's hull, bulkheads isolate thread pools, database connections, and memory allocations. Primary reference: Release It! and Volume 08 (Reliability and Defense in Depth).",
              },
              {
                t: "pause",
                id: "bulkhead-check-1",
                skillId: "sd-reliability",
                q: "An upstream analytics logging service hangs and takes 30 seconds per call. What prevents the main payment checkout service from freezing?",
                options: [
                  "A shared global thread pool.",
                  "A dedicated connection pool with short timeouts and a circuit breaker for analytics.",
                  "More CPU cores.",
                ],
                answer: 1,
                why: "Isolating the analytics call into its own bounded bulkhead ensures payment threads remain unaffected.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 2: Advanced Distributed Systems & Expansion
  // ==========================================
  {
    slug: "advanced-distributed-systems",
    title: "Track 2: Advanced Distributed Systems & Expansion",
    discipline: "design",
    tagline: "Consensus protocols, time, ordering, and resilience patterns.",
    level: "Intermediate",
    about: [
      "In distributed environments, physical clocks cannot be trusted, network partitions are inevitable, and order is relative. This track dives into the mechanisms behind high-availability distributed engines: Paxos, Raft, vector clocks, Google Spanner TrueTime, and distributed transactions.",
      "Covering Volumes 27 through 35, you will learn the exact trade-offs that separate toy microservices from battle-hardened distributed infrastructure.",
    ],
    outcomes: [
      "Analyze distributed consensus mechanics: leader election, log replication, and split-brain resolution in Raft and Paxos",
      "Model causality using Lamport timestamps, vector clocks, and bounded clock skew (TrueTime)",
      "Design idempotent APIs and event-driven workflows that survive duplicate deliveries and out-of-order execution",
      "Structure multi-region replication architectures balancing read latency against write replication costs",
    ],
    artifact:
      "A distributed consensus & failure simulation report demonstrating how a 3-node cluster handles network partitions and leader recovery.",
    modules: [
      {
        slug: "consensus-and-ordering",
        title: "Consensus & Time in Distributed Systems",
        summary: "Raft, Paxos, quorums, and causal order.",
        lessons: [
          {
            slug: "raft-and-paxos-consensus",
            title: "Consensus Protocols: Raft, Paxos & Quorums",
            minutes: 15,
            summary:
              "Deep dive into state machine replication: leader terms, log matching invariants, and quorum intersections (Q1 + Q2 > N).",
            skillIds: ["sd-consensus"],
            keep: [
              "Consensus requires a strict majority quorum: N/2 + 1 nodes must agree on every log entry.",
              "Raft ensures correctness through the Leader Completeness property: a leader only commits entries present in its own log.",
            ],
            blocks: [
              { t: "h2", text: "Why Quorums Intersect" },
              {
                t: "p",
                text: "Any two majorities of size (N/2 + 1) in a cluster of size N must share at least one node. That overlapping node guarantees that the most up-to-date log term is always represented. References: Raft [S18], Paxos Made Live [S15].",
              },
              {
                t: "pause",
                id: "quorum-check-1",
                skillId: "sd-consensus",
                q: "In a 5-node Raft cluster, a network partition isolates 2 nodes on one side and 3 nodes on the other. Can the 2-node partition commit writes?",
                options: [
                  "Yes, if both 2 nodes agree.",
                  "No, because 2 is not a strict majority of 5 (need at least 3 nodes).",
                  "Yes, if one node is elected leader.",
                ],
                answer: 1,
                why: "Without 3 nodes (majority of 5), the minority partition cannot form a quorum and must reject writes.",
              },
              {
                t: "callout",
                title: "Library Reference",
                text: "Study Volume 32 (Distributed Systems) and Volume 65 (Distributed Systems Correctness) for full mathematical invariants.",
              },
            ],
          },
          {
            slug: "physical-vs-logical-time",
            title: "Time, Clocks & Ordering: Lamport to TrueTime",
            minutes: 13,
            summary:
              "Why NTP skew breaks serialization, how Lamport and vector clocks capture causality, and how Google Spanner uses GPS/atomic clocks to bound uncertainty.",
            skillIds: ["sd-consensus"],
            keep: [
              "Physical wall-clock time cannot establish causal order in distributed networks due to variable clock drift.",
              "Google Spanner TrueTime bounds clock skew [t.earliest, t.latest] and waits out uncertainty before committing.",
            ],
            blocks: [
              { t: "h2", text: "The Illusion of Wall-Clock Time" },
              {
                t: "p",
                text: "Two events occurring on separate servers cannot be ordered by physical timestamps unless the measurement uncertainty is strictly smaller than the duration between events. Primary paper: Spanner [S20].",
              },
              {
                t: "pause",
                id: "time-check-1",
                skillId: "sd-consensus",
                q: "Server A writes record X at 12:00:01.000 (clock drift +50ms). Server B writes record Y at 12:00:01.020 (clock drift -50ms). What happens if you sort by local timestamps?",
                options: [
                  "Server B appears to happen after Server A correctly.",
                  "Server A's write appears after Server B's write, inverting true causal order.",
                  "The database rejects both.",
                ],
                answer: 1,
                why: "The clock skews reverse the recorded sequence, breaking linearizability.",
              },
            ],
          },
        ],
      },
      {
        slug: "distributed-transactions-and-resilience",
        title: "Transactions, Idempotency & SRE",
        summary: "Two-phase commit, sagas, idempotency keys, and error budgets.",
        lessons: [
          {
            slug: "two-phase-commit-vs-sagas",
            title: "2PC vs Sagas & Idempotency Invariants",
            minutes: 14,
            summary:
              "Examine why Two-Phase Commit (2PC) blocks during coordinator failure, and how to implement compensating Saga transactions with strict idempotency.",
            skillIds: ["sd-data", "sd-reliability"],
            keep: [
              "Two-Phase Commit provides ACID atomicity across databases but is vulnerable to coordinator blocking.",
              "Sagas provide eventual consistency through forward actions and compensating rollback workflows.",
            ],
            blocks: [
              { t: "h2", text: "The Coordinator Blocking Problem" },
              {
                t: "p",
                text: "In 2PC, if the coordinator crashes after participants have voted 'Prepare', participants must hold row locks indefinitely until the coordinator recovers. Sagas eliminate distributed locks by using business-level compensation.",
              },
              {
                t: "pause",
                id: "saga-check-1",
                skillId: "sd-reliability",
                q: "In an e-commerce Saga (Reserve Inventory -> Charge Payment -> Ship Item), the Payment step fails. What must the Saga orchestrator do?",
                options: [
                  "Restart the database.",
                  "Execute the compensating action: Release Reserved Inventory.",
                  "Wait indefinitely for payment to succeed.",
                ],
                answer: 1,
                why: "Sagas recover from mid-flow failures by executing backward compensating transactions.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 3: Deep Research & Complex Architecture
  // ==========================================
  {
    slug: "deep-research-complex-architecture",
    title: "Track 3: Deep Research & Complex Architecture",
    discipline: "design",
    tagline: "Methodological pluralism, mission engineering, and formal correctness.",
    level: "Advanced",
    about: [
      "When systems grow to planetary scale or mission-critical criticality, standard design heuristics are insufficient. This track explores advanced systems methodologies: Soft Systems Methodology (Checkland), Critical Systems Heuristics (Ulrich), DoD Mission Engineering Guidebook v2.0, formal verification with TLA+, and data mesh contracts.",
      "Spanning Volumes 61 through 75, you will bridge the gap between academic systems science and industrial high-assurance engineering.",
    ],
    outcomes: [
      "Apply Methodological Pluralism to choose the right systems approach (hard vs soft systems, cybernetics, boundary critique)",
      "Structure DoD / NASA Mission Threads with Measures of Effectiveness (MOE) and Measures of Performance (MOP)",
      "Formally verify distributed protocols and safety invariants using model checking concepts",
      "Implement data mesh architectures with schemas, data contracts, and lakehouse ACID transaction governance",
    ],
    artifact:
      "A Mission Thread Architecture specification with formal boundary critique and verification matrices.",
    modules: [
      {
        slug: "methodologies-and-mission-threads",
        title: "Systems Methods & Mission Engineering",
        summary: "Boundary critique, soft systems, and mission operational architectures.",
        lessons: [
          {
            slug: "boundary-critique-and-pluralism",
            title: "Methodological Pluralism & Boundary Critique",
            minutes: 14,
            summary:
              "Learn Ulrich's Critical Systems Heuristics (CSH) and Checkland's Soft Systems Methodology (SSM) for wicked, contested multi-stakeholder problems.",
            skillIds: ["st-boundaries"],
            keep: [
              "Hard systems assume agreed objectives; soft systems recognize that problem definitions themselves are contested.",
              "Ulrich's 12 boundary questions explicitly interrogate who benefits, who decides, and who bears the costs.",
            ],
            blocks: [
              { t: "h2", text: "Ulrich's Critical Systems Heuristics" },
              {
                t: "p",
                text: "Every system design embodies normative assumptions about value. Boundary critique makes those value judgments transparent. Primary references: Open University Systems Approaches [S180] and Critical Systems Heuristics [S185].",
              },
              {
                t: "pause",
                id: "csh-check-1",
                skillId: "st-boundaries",
                q: "Why is a transit ticketing system that works perfectly in simulations considered a failure if elderly passengers cannot use the interface?",
                options: [
                  "The software has bugs.",
                  "The designers restricted their boundary to ticket throughput and excluded human accessibility stakeholders from their purpose definition.",
                  "The hardware was too cheap.",
                ],
                answer: 1,
                why: "Boundary critique reveals that excluding affected non-user stakeholders causes systemic failure.",
              },
              {
                t: "callout",
                title: "Knowledge Pack Volume",
                text: "Study Volume 61 (Systems Methods, Methodological Pluralism and Boundary Critique) in the Library.",
              },
            ],
          },
          {
            slug: "mission-engineering-threads",
            title: "Mission Engineering & Operational Analysis",
            summary:
              "Deconstruct operational mission threads from capability needs down to technical tasks, citing DoD MEG 2.0.",
            minutes: 13,
            skillIds: ["sd-requirements"],
            keep: [
              "Mission engineering evaluates end-to-end mission outcomes, not merely isolated component specifications.",
              "Tie Measures of Effectiveness (MOE) to operational goals and Measures of Performance (MOP) to technical subsystems.",
            ],
            blocks: [
              { t: "h2", text: "DoD Mission Engineering Guide 2.0" },
              {
                t: "p",
                text: "According to the DoD Mission Engineering Guide v2.0 [S186], a mission thread traces how sensors, networks, decision nodes, and actuators interact under contested operational environments.",
              },
              {
                t: "pause",
                id: "mission-check-1",
                skillId: "sd-requirements",
                q: "In a search-and-rescue drone system, which metric is a Measure of Effectiveness (MOE)?",
                options: [
                  "Camera resolution is 4K (60 FPS).",
                  "Drone flight endurance is 45 minutes.",
                  "Time to locate and relay survivor coordinates is under 20 minutes across 95% of terrain.",
                ],
                answer: 2,
                why: "An MOE evaluates operational mission success from the stakeholder's perspective, whereas resolution and flight time are technical MOPs.",
              },
            ],
          },
        ],
      },
      {
        slug: "formal-methods-and-data-contracts",
        title: "Formal Correctness & Data Governance",
        summary: "TLA+ invariants and federated data contracts.",
        lessons: [
          {
            slug: "formal-invariants-model-checking",
            title: "Formal Methods & Invariant Verification",
            minutes: 15,
            summary:
              "Explore how formal specification (TLA+, Alloy, SPIN) discovers race conditions and deadlock states that unit tests never reach.",
            skillIds: ["en-testing", "sd-consensus"],
            keep: [
              "Testing shows the presence of bugs, not their absence. Model checking explores all reachable state transitions.",
              "A Safety Invariant is a property that must be true in every valid state: 'bad things never happen'.",
            ],
            blocks: [
              { t: "h2", text: "Exhaustive State Exploration" },
              {
                t: "p",
                text: "TLA+ models systems as state machines. The TLC model checker evaluates all permutations of concurrent actions to find counterexamples. See Volume 70 (Formal Methods, Model Checking and Verification Assurance).",
              },
              {
                t: "pause",
                id: "tla-check-1",
                skillId: "en-testing",
                q: "What distinguishes a liveness property from a safety property in formal verification?",
                options: [
                  "Liveness properties are faster to test.",
                  "Safety says nothing bad ever happens; liveness says something good eventually happens.",
                  "Safety is for hardware; liveness is for software.",
                ],
                answer: 1,
                why: "Safety ensures invariants hold in every state; liveness ensures the system makes progress without deadlocking or livelocking.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 4: Expert Systems & High-Assurance Extension
  // ==========================================
  {
    slug: "expert-systems-high-assurance",
    title: "Track 4: Expert Systems & High-Assurance Extension",
    discipline: "engineering",
    tagline: "Assurance cases (GSN), SoS interoperability, and digital threads.",
    level: "Expert",
    about: [
      "In aerospace, automotive, medical, and defense domains, certifying a system requires defensible evidence chains. This track covers Goal Structuring Notation (GSN), System-of-Systems (SoS) governance (DoW SoS Guidebook / ISO 21839), architecture frameworks (DoDAF 2.02, UAF, NAF), and digital thread product line engineering.",
      "Spanning Volumes 82 through 95, you will construct formal argument trees that satisfy certification authorities and withstand independent scrutiny.",
    ],
    outcomes: [
      "Construct defensible Assurance Cases using Goal Structuring Notation (GSN) with claims, strategies, context, and evidence",
      "Architect System-of-Systems (SoS) federations managing emergent interoperability under decentralized governance",
      "Map enterprise architectures across DoDAF 2.02 (DM2), UAF 1.2, and NATO NAF 4.1 viewpoints",
      "Govern Product Line Engineering (PLE) with feature models, 150% BOMs, and digital thread traceability",
    ],
    artifact:
      "A complete GSN Assurance Case diagram with supporting verification evidence references for a high-assurance subsystem.",
    modules: [
      {
        slug: "gsn-and-assurance-cases",
        title: "Goal Structuring Notation (GSN)",
        summary: "Argument engineering, evidential weight, and safety cases.",
        lessons: [
          {
            slug: "gsn-argument-engineering",
            title: "Structuring Assurance Cases with GSN",
            minutes: 14,
            summary:
              "Learn how to build GSN trees: Goals, Strategies, Context, Assumptions, and Solutions (Evidence). Understand evidence decay and defeat arguments.",
            skillIds: ["en-assurance-gsn"],
            keep: [
              "A safety case is a structured argument, supported by a body of evidence, showing that a system is acceptably safe for a given application in a given operating context.",
              "Never link evidence directly to a top-level goal without an explicit decomposition strategy.",
            ],
            blocks: [
              { t: "h2", text: "The Core Elements of GSN" },
              {
                t: "p",
                text: "Goal Structuring Notation (GSN Standard Version 3) provides visual syntax to represent argument structures. Top goals decompose via strategies into sub-goals until supported by concrete solutions (evidence). Reference: GSN Standard [S82].",
              },
              {
                t: "flow",
                steps: [
                  "Top Goal (Claim)",
                  "Strategy (Argument)",
                  "Sub-Goals (Decomposition)",
                  "Solutions (Evidence Items)",
                ],
                caption: "GSN Decomposition Hierarchy.",
              },
              {
                t: "pause",
                id: "gsn-check-1",
                skillId: "en-assurance-gsn",
                q: "Why is a 1,000-page test report alone not a valid safety case?",
                options: [
                  "It is too long to read.",
                  "Test results are raw evidence; without a structured argument connecting tests to explicit hazard mitigation claims, they prove nothing about overall safety.",
                  "Safety cases only allow mathematical proofs.",
                ],
                answer: 1,
                why: "Evidence without an argument leaves the certification authority to guess whether the tests actually covered all relevant hazard modes.",
              },
              {
                t: "callout",
                title: "Library Anchor",
                text: "Inspect Volume 82 (Assurance Cases, GSN Argument Engineering and Evidence Quality) for full GSN syntax.",
              },
            ],
          },
        ],
      },
      {
        slug: "sos-and-architecture-frameworks",
        title: "Systems of Systems & Frameworks",
        summary: "Interoperability, federation governance, and DoDAF/UAF/NAF.",
        lessons: [
          {
            slug: "system-of-systems-governance",
            title: "System-of-Systems (SoS) Governance & ISO 21839",
            minutes: 13,
            summary:
              "Examine Maier's SoS criteria: operational and managerial independence of components, evolutionary development, emergent behavior, and geographic distribution.",
            skillIds: ["st-boundaries"],
            keep: [
              "SoS components have their own stakeholders, budgets, and lifecycles; you cannot command them like subroutines.",
              "Distinguish Directed, Acknowledged, Collaborative, and Virtual SoS governance models.",
            ],
            blocks: [
              { t: "h2", text: "Maier's Criteria for System-of-Systems" },
              {
                t: "p",
                text: "According to the DoW System of Systems Engineering Guidebook (2026) and ISO/IEC/IEEE 21839 [S256], an SoS federation must negotiate interface contracts and accommodate independent component releases.",
              },
              {
                t: "pause",
                id: "sos-check-1",
                skillId: "st-boundaries",
                q: "In an Acknowledged SoS, what power does the overarching SoS lead have over constituent systems?",
                options: [
                  "Total dictatorial control over all code and budgets.",
                  "Recognized SoS objectives and collaborative influence, but constituent systems retain independent managerial authority and funding.",
                  "No influence at all.",
                ],
                answer: 1,
                why: "In an Acknowledged SoS, constituent systems have their own independent leadership and objectives that must be aligned through negotiation.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 5: Decision, Trade-Off & Execution
  // ==========================================
  {
    slug: "decision-trade-off-execution",
    title: "Track 5: Decision, Trade-Off & Execution",
    discipline: "design",
    tagline: "MCDA, NASA technical review gates, SEMP, and ISO 42030.",
    level: "Advanced",
    about: [
      "Engineering leadership is the discipline of making defensible decisions under uncertainty. This track covers Multi-Criteria Decision Analysis (MCDA), sensitivity envelopes, NASA lifecycle review gates (NPR 7123.1D), Systems Engineering Management Plans (SEMP), and ISO 42030 architecture evaluation.",
      "Covering Volumes 96 through 102, you will learn how to structure technical reviews, define entrance/exit criteria, and prevent schedule-driven optimism from causing catastrophic project failures.",
    ],
    outcomes: [
      "Conduct rigorous Multi-Criteria Decision Analysis (MCDA) with normalized scoring, swing weights, and sensitivity analysis",
      "Manage NASA / DoD Technical Review Gates (SRR, PDR, CDR) with verifiable entrance and success criteria",
      "Author Systems Engineering Management Plans (SEMP) integrated with DoD IMP/IMS control structures",
      "Execute evidence-based architecture reviews following ISO/IEC/IEEE 42030 and SEI ATAM guidelines",
    ],
    artifact:
      "A Trade Study Decision Matrix with sensitivity envelopes comparing three candidate system architectures.",
    modules: [
      {
        slug: "trade-studies-and-decision-analysis",
        title: "Trade Studies & Multi-Criteria Decisions",
        summary: "MCDA mechanics, utility functions, and sensitivity analysis.",
        lessons: [
          {
            slug: "mcda-mechanics-and-sensitivity",
            title: "Multi-Criteria Decision Analysis (MCDA)",
            minutes: 14,
            summary:
              "Learn how to establish evaluation criteria, normalize dissimilar dimensions (cost, latency, risk), assign swing weights, and conduct sensitivity sweeps.",
            skillIds: ["sd-trade-studies"],
            keep: [
              "Never assign criteria weights arbitrarily; use swing weighting to assess the value of shifting from worst to best acceptable performance.",
              "If changing a subjective weight by 5% flips the winning candidate, the decision is sensitive and requires empirical testing.",
            ],
            blocks: [
              { t: "h2", text: "The Anatomy of a Rigorous Trade Study" },
              {
                t: "p",
                text: "Following NASA Systems Engineering Handbook [S02, S269] and NASA/SP-2010-576 [S334], trade studies must avoid confirmation bias by establishing criteria and weighting before scoring candidates.",
              },
              {
                t: "flow",
                steps: [
                  "Define Context & Scope",
                  "Establish Criteria",
                  "Swing Weighting",
                  "Score Candidates",
                  "Sensitivity Analysis",
                  "Defend Recommendation",
                ],
                caption: "NASA Trade Study Process.",
              },
              {
                t: "pause",
                id: "trade-check-1",
                skillId: "sd-trade-studies",
                q: "Why is a decision matrix where Candidate A scores 82.4 and Candidate B scores 81.9 dangerous without sensitivity analysis?",
                options: [
                  "Numbers never lie.",
                  "The difference is within scoring noise; minor changes in weight or subjective score could reverse the outcome.",
                  "Candidate A is objectively superior.",
                ],
                answer: 1,
                why: "A 0.5-point gap on a 100-point scale is within margin of error; sensitivity analysis is mandatory to evaluate stability.",
              },
              {
                t: "callout",
                title: "Library Reference",
                text: "Review Volume 96 (Trade Studies, Multi-Criteria Decision Analysis and Sensitivity) in the Library.",
              },
            ],
          },
        ],
      },
      {
        slug: "lifecycle-gates-and-semp",
        title: "Technical Review Gates & SEMP",
        summary: "NASA NPR 7123.1D gates, SEMP, and IMP/IMS engineering control.",
        lessons: [
          {
            slug: "technical-readiness-review-gates",
            title: "Technical Reviews & Gate Entrance/Success Criteria",
            minutes: 13,
            summary:
              "Examine NASA NPR 7123.1D review gates: System Requirements Review (SRR), Preliminary Design Review (PDR), and Critical Design Review (CDR).",
            skillIds: ["sd-trade-studies"],
            keep: [
              "A review gate is not a slide presentation; it is an audit of technical maturity against pre-published success criteria.",
              "Passing PDR establishes the Allocated Baseline; passing CDR establishes the Initial Product Baseline.",
            ],
            blocks: [
              { t: "h2", text: "NPR 7123.1D Appendix G Review Criteria" },
              {
                t: "p",
                text: "Review gates verify that requirements are allocated, risks are bounded, and interfaces are baselined before committing capital to downstream phases. References: NASA Technical Review Criteria [S59, S272].",
              },
              {
                t: "pause",
                id: "gate-check-1",
                skillId: "sd-trade-studies",
                q: "What is the primary entrance criterion for a Critical Design Review (CDR)?",
                options: [
                  "All code is deployed to production.",
                  "Detailed drawings, ICDs, and software unit specifications are complete and proven to meet requirements allocated at PDR.",
                  "Marketing has approved launch.",
                ],
                answer: 1,
                why: "CDR confirms that detailed design is mature enough to initiate fabrication, coding, and integration without significant redesign risk.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 6: Fifth-Level Systems Engineering (MBSE, Verification, Safety)
  // ==========================================
  {
    slug: "fifth-level-systems-engineering",
    title: "Track 6: Fifth-Level Systems Engineering (MBSE, Verification, Safety)",
    discipline: "engineering",
    tagline: "System dynamics validation, STPA hazard analysis, and sector assurance.",
    level: "Expert",
    about: [
      "Fifth-level systems engineering moves beyond documentation into executable model assurance, formal safety-guided design, and cross-sector certification. This track covers System Dynamics validation (Forrester/Sterman), independent V&V, STPA hazard analysis (Leveson), and sector standards (DO-178C, ISO 26262, IEC 61508).",
      "Covering Volumes 103 through 110, you will master the techniques used to engineer safety-critical spaceflight, automotive, and nuclear control systems.",
    ],
    outcomes: [
      "Validate simulation models using dimensional consistency, extreme-condition tests, and behavioral sensitivity",
      "Design verification evidence matrices guaranteeing bidirectional traceability from requirements to test procedures",
      "Perform System-Theoretic Process Analysis (STPA) to uncover Unsafe Control Actions (UCAs) in automated feedback loops",
      "Map sector-specific assurance obligations across aviation (DO-178C), automotive (ISO 26262), and process safety (IEC 61508)",
    ],
    artifact:
      "A complete STPA Control Structure Diagram identifying Unsafe Control Actions and mitigation constraints for an autonomous subsystem.",
    modules: [
      {
        slug: "simulation-credibility-and-vv",
        title: "Model Credibility & Independent V&V",
        summary: "NASA-STD-7009B model assurance and IV&V evidence coverage.",
        lessons: [
          {
            slug: "system-dynamics-model-validation",
            title: "Model Credibility: Boundary & Extreme-Condition Tests",
            minutes: 14,
            summary:
              "Learn how to validate simulation models: unit consistency tests, behavior reproduction, extreme condition tests, and sensitivity analysis.",
            skillIds: ["en-testing"],
            keep: [
              "A model that only works under nominal conditions is dangerous; test models at extreme limits (zero inventory, infinite load).",
              "Dimensional inconsistency is proof of flawed physics or flawed logic.",
            ],
            blocks: [
              { t: "h2", text: "NASA-STD-7009B Credibility Assessment" },
              {
                t: "p",
                text: "Under NASA Standard for Models and Simulations (NASA-STD-7009B) [S280, S281], decisions made from simulation evidence must assess verification, validation, input pedigree, and uncertainty. See Volume 103 and Volume 105.",
              },
              {
                t: "pause",
                id: "sim-check-1",
                skillId: "en-testing",
                q: "In an extreme-condition test of an autoscaling model, arrival rate is set to 0. What must the simulated server pool do?",
                options: [
                  "Keep spinning up nodes.",
                  "Gracefully scale down to minimum idle baseline without dividing by zero or producing negative instances.",
                  "Crash the simulation.",
                ],
                answer: 1,
                why: "Extreme-condition tests verify that the model mathematics remain robust at boundary states without mathematical singularities.",
              },
            ],
          },
        ],
      },
      {
        slug: "stpa-and-functional-safety",
        title: "STPA Hazard Analysis & Sector Assurance",
        summary: "Nancy Leveson's STPA, Unsafe Control Actions, and sector safety standards.",
        lessons: [
          {
            slug: "stpa-hazard-analysis-method",
            title: "System-Theoretic Process Analysis (STPA)",
            minutes: 15,
            summary:
              "Master STPA: define accidents and system hazards, model hierarchical control structures, and identify Unsafe Control Actions (UCAs).",
            skillIds: ["en-safety-stpa"],
            keep: [
              "Safety is a dynamic control problem, not just a component reliability problem.",
              "Components can all work exactly as specified, yet their interaction can cause a catastrophe due to flawed process models.",
            ],
            blocks: [
              { t: "h2", text: "Why Component FMECA Fails on Complex Systems" },
              {
                t: "p",
                text: "Traditional safety methods (FMEA, FTA) assume accidents result from component failures. STPA [S77, S209] recognizes that modern software-intensive systems fail due to unsafe interactions between non-failing components.",
              },
              {
                t: "flow",
                steps: [
                  "Define Accidents & Hazards",
                  "Model Hierarchical Control Structure",
                  "Identify Unsafe Control Actions (UCAs)",
                  "Determine Causal Scenarios",
                ],
                caption: "The Four Steps of STPA.",
              },
              {
                t: "pause",
                id: "stpa-check-1",
                skillId: "en-safety-stpa",
                q: "Which scenario represents an Unsafe Control Action (UCA) where no hardware component failed?",
                options: [
                  "A wire snapped due to fatigue.",
                  "An automated flight control system commanded pitch-down when pilots were pulling up, because its angle-of-attack sensor filter did not match flight dynamics.",
                  "A battery drained.",
                ],
                answer: 1,
                why: "The software executed its programmed logic accurately, but flawed control assumptions produced an unsafe action.",
              },
              {
                t: "callout",
                title: "Reference Volume",
                text: "Consult Volume 107 (System Safety: Integrated Hazard Analysis and Risk-Informed Safety Cases) in the Library.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Track 7: Sixth-Level Dependability, Markov Models & Lifecycle
  // ==========================================
  {
    slug: "sixth-level-dependability-lifecycle",
    title: "Track 7: Sixth-Level Dependability, Markov Models & Lifecycle",
    discipline: "engineering",
    tagline: "Weibull lifetime modeling, Markov dependability, PHM, and obsolescence.",
    level: "Expert",
    about: [
      "Sixth-level systems engineering is the quantitative science of lifetime performance, continuous-time repairable dependability, and whole-lifecycle supportability. This track covers Weibull censored data analysis, Crow-AMSAA reliability growth, continuous-time Markov chains (CTMC), Prognostics and Health Management (ISO 13381-1:2025), and DMSMS obsolescence.",
      "Covering Volumes 111 through 120, you will master the mathematical tools needed to model and guarantee mission-critical availability over decades of operational life.",
    ],
    outcomes: [
      "Fit Weibull distributions (shape beta, scale eta) to right-censored and interval-censored failure data",
      "Construct Continuous-Time Markov Chain (CTMC) state transition matrices to compute steady-state and instantaneous availability",
      "Model Remaining Useful Life (RUL) and condition-based maintenance thresholds following ISO 13381-1:2025",
      "Manage electronic-parts assurance, DMSMS obsolescence risk, and Level of Repair Analysis (LORA)",
    ],
    artifact:
      "A Continuous-Time Markov Chain (CTMC) state-transition availability model with steady-state availability derivations.",
    modules: [
      {
        slug: "quantitative-reliability-and-markov",
        title: "Weibull Analysis & Markov Dependability",
        summary: "Weibull censoring, reliability growth, and Markov availability modeling.",
        lessons: [
          {
            slug: "weibull-censored-data-analysis",
            title: "Quantitative Reliability: Weibull & Censoring",
            minutes: 15,
            summary:
              "Learn how to estimate Weibull shape (beta) and scale (eta) parameters from censored field data. Distinguish infant mortality (beta < 1), random failure (beta = 1), and wear-out (beta > 1).",
            skillIds: ["en-dependability-markov"],
            keep: [
              "Beta < 1 indicates infant mortality (quality/manufacturing defect); Beta = 1 indicates random failure (exponential); Beta > 1 indicates wear-out.",
              "Never discard censored units (survivors); doing so severely underestimates component reliability.",
            ],
            blocks: [
              { t: "h2", text: "The Weibull Lifetime Distribution" },
              {
                t: "p",
                text: "The Weibull distribution models lifetime physics across mechanics, electronics, and software crash cycles. References: NIST Engineering Statistics Handbook [S302, S303] and Volume 111.",
              },
              {
                t: "code",
                label: "weibull reliability function",
                text: "R(t) = exp(-(t / eta)^beta)",
              },
              {
                t: "pause",
                id: "weibull-check-1",
                skillId: "en-dependability-markov",
                q: "A batch of hard drives has a calculated Weibull shape parameter Beta = 3.2. What maintenance policy is indicated?",
                options: [
                  "Run-to-failure, since failures are purely random.",
                  "Scheduled replacement before the wear-out knee, because failure rate increases sharply over time.",
                  "Burn-in testing to eliminate infant mortality.",
                ],
                answer: 1,
                why: "Beta > 1 (specifically 3.2) indicates strong wear-out; preventative replacement before the wear-out threshold prevents catastrophic outages.",
              },
            ],
          },
          {
            slug: "markov-dependability-availability",
            title: "Repairable Systems & Markov Dependability",
            minutes: 16,
            summary:
              "Construct Continuous-Time Markov Chains (CTMC) for fault-tolerant redundant architectures (1oo2, 2oo3). Derive steady-state availability: A = MTBF / (MTBF + MTTR).",
            skillIds: ["en-dependability-markov"],
            keep: [
              "Markov models accommodate state-dependent transitions: shared repair teams, degraded performance modes, and common-cause trips.",
              "Steady-state availability A_ss = sum of probabilities of all operational states.",
            ],
            blocks: [
              { t: "h2", text: "State Space Availability Modeling" },
              {
                t: "p",
                text: "When components can fail and be repaired, reliability block diagrams fail if repair dependencies exist. Continuous-time Markov chains model transitions between Operational, Degraded, and Failed states. References: NASA RP-1348 [S321] and Volume 112.",
              },
              {
                t: "code",
                label: "markov transition rate matrix Q",
                text: "State 0 (Both Up):       [-2*lambda,   2*lambda,       0]\nState 1 (Degraded 1 Up):  [mu,         -(lambda + mu), lambda]\nState 2 (Failed 0 Up):    [0,          2*mu,           -2*mu]",
              },
              {
                t: "pause",
                id: "markov-check-1",
                skillId: "en-dependability-markov",
                q: "In an active-standby database pair with repair rate mu = 2/hr and failure rate lambda = 0.01/hr, why is Markov availability higher than a non-repairable reliability block diagram?",
                options: [
                  "It uses faster processors.",
                  "Because failed nodes can be repaired and returned to service while the surviving node carries traffic.",
                  "Markov math ignores failure.",
                ],
                answer: 1,
                why: "Markov modeling accounts for continuous repair (MTTR), allowing the system to restore redundancy before a second failure causes an outage.",
              },
              {
                t: "callout",
                title: "Knowledge Pack Volume",
                text: "Study Volume 112 (Repairable-System Dependability, Markov Models and Availability Engineering) for full differential derivations.",
              },
            ],
          },
        ],
      },
      {
        slug: "prognostics-and-lifecycle-support",
        title: "Prognostics & Lifecycle Supportability",
        summary: "Remaining useful life (RUL), PHM, and DMSMS obsolescence.",
        lessons: [
          {
            slug: "phm-and-obsolescence-engineering",
            title: "Prognostics (PHM), RUL & Obsolescence (DMSMS)",
            minutes: 14,
            summary:
              "Explore Prognostics and Health Management under ISO 13381-1:2025, Remaining Useful Life (RUL) estimation, and Diminishing Manufacturing Sources and Material Shortages (DMSMS).",
            skillIds: ["en-dependability-markov"],
            keep: [
              "Prognostics moves from reactive/preventative maintenance to predictive condition-based decisions.",
              "DMSMS obsolescence management plans for electronic component discontinuation years before production halts.",
            ],
            blocks: [
              { t: "h2", text: "Condition-Based Maintenance & RUL" },
              {
                t: "p",
                text: "According to ISO 13381-1:2025 and Volume 113, health indices track degradation features (vibration, resistance, packet loss) toward a functional failure threshold to schedule repairs during planned downtime.",
              },
              {
                t: "pause",
                id: "phm-check-1",
                skillId: "en-dependability-markov",
                q: "What is the primary operational advantage of Prognostics (PHM) over fixed-interval maintenance?",
                options: [
                  "It requires zero sensors.",
                  "Components are replaced based on actual physical degradation rather than arbitrary run hours, preventing unnecessary discard and surprise failures.",
                  "It eliminates all software updates.",
                ],
                answer: 1,
                why: "Condition-based decisions extract maximum safe component life while ensuring maintenance occurs before functional failure.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // Preserved Classic Paths for Backwards Compatibility
  // ==========================================
  {
    slug: "systems-thinking-fundamentals",
    title: "Systems Thinking Fundamentals",
    discipline: "thinking",
    tagline: "See the loops behind the events.",
    level: "Beginner",
    about: [
      "Most problems we call 'people problems' are structure problems. This path teaches you to see stocks, flows, feedback loops and delays, so you can explain why a system behaves the way it does before you try to fix it.",
      "It is the base for everything else here. System design is systems thinking with servers, and engineering is systems thinking with deadlines.",
    ],
    outcomes: [
      "Separate events, patterns, and structure",
      "Model a situation as stocks and flows",
      "Identify reinforcing and balancing loops, and the delays inside them",
      "Argue for a leverage point instead of a bigger push",
    ],
    artifact:
      "A causal loop diagram of a system you live inside, with one leverage point defended.",
    modules: [
      {
        slug: "orientation",
        title: "Orientation",
        summary: "What a system is, and why events mislead.",
        lessons: [
          {
            slug: "what-is-a-system",
            title: "What is a system?",
            minutes: 8,
            summary:
              "Elements, interconnections, and purpose, and why the visible event is rarely the cause.",
            skillIds: ["st-stocks"],
            keep: [
              "Look for structure, not villains.",
              "A system's purpose is revealed by its behaviour, not its mission statement.",
            ],
            blocks: [
              { t: "h2", text: "Events are the tip" },
              {
                t: "p",
                text: "A deadline slips. A service falls over. A friend group goes quiet. These are events. If you only react to events you will fix the same thing every month.",
              },
              {
                t: "flow",
                steps: ["Events", "Patterns", "Structure", "Mental models"],
                caption: "Dig downward. Each layer explains the one above it.",
              },
              {
                t: "pause",
                id: "what-is-a-system-1",
                skillId: "st-stocks",
                q: "A team ships late three sprints in a row. Which explanation is structural?",
                options: [
                  "Alex was sick during sprint two.",
                  "Estimates are made by the people who get blamed for misses, so they are padded, then cut by management, then missed.",
                  "Sprint three had a public holiday.",
                ],
                answer: 1,
                why: "The loop repeats regardless of who is sick or which week has a holiday. That is what makes it structure.",
              },
              { t: "h2", text: "Parts, links, purpose" },
              {
                t: "p",
                text: "A system has elements, interconnections between them, and a function or purpose. Changing the elements usually changes the least. Changing the links or the purpose changes the most.",
              },
              {
                t: "callout",
                title: "Purpose is what it does",
                text: "If a hospital rewards throughput over recovery, its purpose is throughput, whatever the brochure says.",
              },
            ],
          },
        ],
      },
      {
        slug: "from-model-to-action",
        title: "From model to action",
        summary: "A model earns its keep when it predicts.",
        lessons: [...(EXTENSION_LESSONS["systems-thinking-fundamentals"] ?? [])],
      },
    ],
  },
  {
    slug: "system-design-from-scratch",
    title: "System Design from Scratch",
    discipline: "design",
    tagline: "From a vague prompt to a defended architecture.",
    level: "Intermediate",
    about: [
      "This path teaches system design as a way of thinking, not a bag of tricks. You will practise clarifying the problem, estimating the load, picking storage that matches the access pattern, and designing for the failures you will actually have.",
      "Every unit ends with a trade-off you must defend, because the answer is rarely 'use Kafka'. The answer is 'here is what I gave up, and here is why that is fine'.",
    ],
    outcomes: [
      "Run a repeatable framework from prompt to design",
      "Estimate traffic and storage on the back of an envelope",
      "Choose a datastore by access pattern",
      "Use caching and replication without breaking correctness",
    ],
    artifact:
      "A one-page design doc for a URL shortener, with estimates, a diagram, and three defended trade-offs.",
    modules: [
      {
        slug: "frame",
        title: "Frame the problem",
        summary: "A framework and the numbers behind it.",
        lessons: [
          {
            slug: "a-framework-for-design",
            title: "A framework for design",
            minutes: 9,
            summary:
              "Clarify, estimate, sketch, deep-dive, revisit. The order matters more than the details.",
            skillIds: ["sd-requirements"],
            keep: [
              "Ask before you draw.",
              "A design without stated requirements cannot be wrong, which means it cannot be right either.",
            ],
            blocks: [
              { t: "h2", text: "Five steps" },
              {
                t: "flow",
                steps: ["Clarify", "Estimate", "Sketch", "Deep-dive", "Revisit trade-offs"],
                caption: "Loop back to Clarify when a number surprises you.",
              },
              {
                t: "pause",
                id: "a-framework-for-design-1",
                skillId: "sd-requirements",
                q: "You are asked to 'design a chat app'. What is the best first move?",
                options: [
                  "Draw a load balancer and some servers.",
                  "Ask who the users are, how many, and what 'delivered' must mean.",
                  "Choose a database.",
                ],
                answer: 1,
                why: "Requirements decide everything that follows. Drawing first is guessing.",
              },
            ],
          },
        ],
      },
      {
        slug: "scale",
        title: "Scale it",
        summary: "Caching is a correctness trade dressed as a performance trick.",
        lessons: [...SCALING_LESSONS],
      },
    ],
  },
  {
    slug: "engineering-from-scratch",
    title: "Engineering from Scratch",
    discipline: "engineering",
    tagline: "Read it, test it, ship it. Repeat, in small pieces.",
    level: "Beginner",
    about: [
      "Engineering is mostly reading, testing, and shipping. This path trains those three habits on real code, with less theory and more small, finished things.",
      "You are not here for a certificate. You are here to leave with something you built and can show.",
    ],
    outcomes: [
      "Build a map of a codebase before changing it",
      "Write tests that make change cheap",
      "Ship a thin slice and learn from it",
    ],
    artifact:
      "A small project, live on the internet, with tests and a README explaining your decisions.",
    modules: [
      {
        slug: "habits",
        title: "Three habits",
        summary: "Read, test, ship.",
        lessons: [
          {
            slug: "reading-unfamiliar-code",
            title: "Reading unfamiliar code",
            minutes: 9,
            summary: "Find the entry point, follow one request, and write down what you learned.",
            skillIds: ["en-reading"],
            keep: [
              "Follow one path end to end before you read everything.",
              "Notes are the first contribution.",
            ],
            blocks: [
              { t: "h2", text: "Follow one request" },
              {
                t: "flow",
                steps: ["Entry point", "Routing", "Business logic", "Storage", "Response"],
                caption: "Trace a single feature through the layers.",
              },
              {
                t: "pause",
                id: "reading-unfamiliar-code-1",
                skillId: "en-reading",
                q: "You join a project with 200 files. What is the best first step?",
                options: [
                  "Read every file alphabetically.",
                  "Run it, pick one user action, and trace it through the code.",
                  "Refactor the folder structure.",
                ],
                answer: 1,
                why: "A single traced path gives you a map. Reading everything gives you noise.",
              },
            ],
          },
        ],
      },
      {
        slug: "ship",
        title: "Ship it",
        summary: "The thinnest slice that a real user can finish.",
        lessons: [...SHIPPING_LESSONS],
      },
    ],
  },
];

export const LABS: Lab[] = [
  {
    id: "lab-loop-map",
    title: "Map a feedback loop",
    skillId: "st-loops",
    evidenceType: "lab",
    minutes: 45,
    brief:
      "Draw a causal loop diagram of something you live inside: a habit, a team, a community, a codebase.",
    steps: [
      "Pick one stock that matters to you.",
      "List what raises and what lowers it.",
      "Draw the arrows and close at least one loop.",
      "Label each loop R or B, and mark the delays.",
    ],
    twist: "Now remove one link. What does the system do?",
    artifact: "A photo or link to your diagram, plus two sentences on the loop you found.",
  },
  {
    id: "lab-estimate",
    title: "Estimate a URL shortener",
    skillId: "sd-requirements",
    evidenceType: "variant",
    minutes: 40,
    brief: "Size a URL shortener: reads, writes, storage, bandwidth. Show your arithmetic.",
    steps: [
      "State your assumptions (users, links per user, clicks per link).",
      "Compute average and peak requests per second.",
      "Compute five-year storage.",
      "Decide whether one database could hold it.",
    ],
    twist: "Traffic grows tenfold overnight. What breaks first?",
    artifact: "A short note or link with your numbers and the first bottleneck.",
  },
  {
    id: "lab-cache",
    title: "Add a cache, then break it",
    skillId: "sd-scale",
    evidenceType: "variant",
    minutes: 60,
    brief:
      "Put a cache-aside layer in front of a slow lookup, then write the scenario where it serves wrong data.",
    steps: [
      "Implement cache-aside with a TTL.",
      "Measure latency before and after.",
      "Find a sequence of writes that leaves stale data.",
      "Fix it, and say what the fix costs.",
    ],
    twist: "The cache node restarts under load. What does the database see?",
    artifact: "A repo or gist link and a paragraph on the staleness you accept.",
  },
  {
    id: "lab-reading",
    title: "Read a repo you did not write",
    skillId: "en-reading",
    evidenceType: "lab",
    minutes: 50,
    brief:
      "Pick a small open-source project, run it, trace one feature, and write the map you wish existed.",
    steps: [
      "Clone and run it.",
      "Pick one user-visible action.",
      "Trace it to storage and back.",
      "Write a one-page ARCHITECTURE.md.",
    ],
    twist: "Fix a typo or a doc bug and open a pull request.",
    artifact: "A link to your notes or the pull request.",
  },
  {
    id: "lab-ship",
    title: "Ship something in 48 hours",
    skillId: "en-shipping",
    evidenceType: "artifact",
    minutes: 120,
    brief:
      "Build the thinnest useful version of an idea and put it on the internet with tests and a README.",
    steps: [
      "Write the one sentence the project does.",
      "Build the thin slice end to end.",
      "Add at least two behaviour tests.",
      "Deploy it and send the link to one person.",
    ],
    twist: "One person uses it and finds a bug. Fix it within a day.",
    artifact: "The live URL and the repo link.",
  },
  {
    id: "lab-raft-consensus",
    title: "Raft consensus election & split-brain simulation",
    skillId: "sd-consensus",
    evidenceType: "lab",
    minutes: 90,
    brief:
      "Model or simulate a 5-node Raft cluster. Simulate a network partition isolating 2 nodes from 3 nodes. Demonstrate why only the majority partition can commit entries.",
    steps: [
      "Initialize 5 nodes with randomized election timeouts.",
      "Elect a leader and replicate 3 log entries to a quorum.",
      "Inject a network partition dividing nodes into {Node1, Node2} and {Node3, Node4, Node5}.",
      "Attempt writes on both sides and record responses and log terms.",
      "Heal the partition and observe uncommitted entry truncation.",
    ],
    twist:
      "The old leader on the minority side re-joins after the majority side elected a new leader at Term 3. Prove how the old leader steps down.",
    artifact:
      "A test script or notebook showing cluster state, term changes, and split-brain rejection.",
  },
  {
    id: "lab-gsn-assurance",
    title: "Construct a GSN assurance case",
    skillId: "en-assurance-gsn",
    evidenceType: "artifact",
    minutes: 75,
    brief:
      "Construct a Goal Structuring Notation (GSN) safety argument for a critical subsystem (e.g. autonomous emergency braking or medical infusion pump).",
    steps: [
      "Formulate the Top-Level Safety Claim (Goal G1).",
      "Declare the Operational Context and Assumptions.",
      "Decompose G1 via an explicit Hazard Mitigation Strategy (S1).",
      "Develop sub-goals covering hazard detection, fail-safe actuation, and software verification.",
      "Link concrete solution nodes (evidence: test reports, formal proofs, FMECA rows).",
    ],
    twist:
      "A third-party library used in the sensor driver is updated without certification. How do you mark evidence decay or defeat the argument?",
    artifact: "A GSN diagram (Mermaid or visual export) and a one-page defense memo.",
  },
  {
    id: "lab-mcda-trade-study",
    title: "MCDA trade study with sensitivity analysis",
    skillId: "sd-trade-studies",
    evidenceType: "variant",
    minutes: 60,
    brief:
      "Execute a Multi-Criteria Decision Analysis (MCDA) evaluating three database or cloud architecture alternatives against cost, latency, availability, and vendor lock-in.",
    steps: [
      "Define 4 weighted criteria using swing weighting.",
      "Score 3 candidate architectures on normalized scales (0 to 10).",
      "Calculate composite utility scores for each candidate.",
      "Perform a sensitivity sweep on the highest-weighted criterion by ±20%.",
      "Identify the tipping point where the winning candidate flips.",
    ],
    twist: "Budget cuts reduce allowable infrastructure cost by 40%. Does the ranking survive?",
    artifact:
      "A spreadsheet or script showing the scoring matrix, swing weights, and sensitivity graph.",
  },
  {
    id: "lab-stpa-hazard",
    title: "STPA hazard analysis on a control loop",
    skillId: "en-safety-stpa",
    evidenceType: "lab",
    minutes: 80,
    brief:
      "Apply System-Theoretic Process Analysis (STPA) to an automated vehicle or industrial robot control structure.",
    steps: [
      "Identify system-level losses and system hazards.",
      "Draw the hierarchical control structure: Controller, Actuator, Controlled Process, Sensors.",
      "Identify at least 4 Unsafe Control Actions across the 4 UCA categories (not providing, providing, providing too early/late, stopping too soon).",
      "Derive system safety constraints to eliminate or mitigate each UCA.",
    ],
    twist:
      "Sensor latency increases from 10ms to 250ms due to bus congestion. Which UCA activates?",
    artifact:
      "A control structure diagram and an STPA UCA analysis table with mitigation constraints.",
  },
  {
    id: "lab-markov-availability",
    title: "Markov availability model for an HA cluster",
    skillId: "en-dependability-markov",
    evidenceType: "artifact",
    minutes: 90,
    brief:
      "Construct a continuous-time Markov model for an active/standby database pair with repair.",
    steps: [
      "Define state space: State 0 (Both Healthy), State 1 (Degraded, 1 Failed), State 2 (Outage, Both Failed).",
      "Assign failure rates (lambda = 1 / MTBF) and repair rates (mu = 1 / MTTR).",
      "Write the transition rate matrix Q and state probability differential equations.",
      "Solve for steady-state probabilities P0, P1, and P2.",
      "Calculate steady-state availability A_ss = P0 + P1, and annual downtime in minutes.",
    ],
    twist:
      "A common-cause failure (e.g. rack power outage) trips both nodes simultaneously with rate gamma. How does availability change?",
    artifact:
      "A Python/Jupyter script or detailed mathematical derivation calculating availability under nominal and common-cause scenarios.",
  },
];

/* ---------- helpers (pure, safe on server and client) ---------- */

export const lessonKey = (pathSlug: string, lessonSlug: string) => `${pathSlug}/${lessonSlug}`;
export const lessonHref = (pathSlug: string, lessonSlug: string) =>
  `/learn/${pathSlug}/${lessonSlug}`;

export function flatLessons(path: Path) {
  return path.modules.flatMap((m) => m.lessons.map((l) => ({ module: m, lesson: l })));
}

export function allLessons() {
  return PATHS.flatMap((p) => flatLessons(p).map((x) => ({ path: p, ...x })));
}

export function pathMinutes(path: Path) {
  return flatLessons(path).reduce((n, x) => n + x.lesson.minutes, 0);
}

export function skillById(id: string) {
  return SKILLS.find((s) => s.id === id);
}

/** Labs that assess a skill. A lesson should point at these so practice follows reading. */
export function labsForSkill(skillId: string) {
  return LABS.filter((l) => l.skillId === skillId);
}

/** Every lab a learner can attempt after finishing this path, in skill order. */
export function labsForPath(path: Path) {
  const skills = new Set(flatLessons(path).flatMap((x) => x.lesson.skillIds));
  return LABS.filter((l) => skills.has(l.skillId));
}
