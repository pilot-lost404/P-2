/**
 * Portable content store.
 *
 * Replaces the previous `db.server.ts`, which used `node:sqlite` (DatabaseSync) and
 * `node:fs` to seed a local database at boot. That design had two problems:
 *
 *   1. It only worked on Node. The app's default build target is Cloudflare Workers,
 *      where `node:sqlite` compiles down to `notImplementedClass(...)`. Every route
 *      that fell back to local data crashed in production.
 *   2. It silently swapped the data source: when Supabase errored, users were shown
 *      an empty local store with no explanation.
 *
 * Everything here is pure in-memory work over strings imported at build time
 * (see pack-data.generated.ts). No filesystem, no database, no async. It runs
 * identically in Node, on Workers, in the browser and in unit tests.
 */
import { PACK_CSV, PACK_FILE_COUNT, PACK_MARKDOWN } from "./pack-data.generated";

export type ArticleListItem = {
  slug: string;
  number: number | null;
  title: string;
  track: string;
  track_order: number;
  summary: string;
  word_count: number;
};

export type ArticleDetail = ArticleListItem & { filename: string; body: string };

export type ArticleNav = {
  slug: string;
  title: string;
  number: number | null;
  track_order: number;
};

export type SourceRecord = {
  source_id: string;
  title: string;
  url: string | null;
  source_type: string | null;
  relevance: string | null;
  quality_signal: string | null;
  limitations: string | null;
};

export type PracticePromptRecord = {
  prompt_id: string;
  exercise: string;
  primary_concepts: string | null;
  required_artifacts: string | null;
};

export type RoleRecord = {
  id: number;
  role: string;
  career_level: string | null;
  competency_areas: string | null;
  typical_deliverables: string | null;
  source_anchors: string | null;
  portfolio_project: string | null;
};

export type CoverageDeepRecord = {
  id: number;
  domain: string;
  depth_in_repository: string | null;
  new_deep_volumes: string | null;
  primary_source_anchors: string | null;
  evidence_status: string | null;
  remaining_gap: string | null;
  next_validation_action: string | null;
};

export type CoverageResearchRecord = {
  id: number;
  domain: string;
  knowledge_files: string | null;
  source_anchors: string | null;
  known_limitations_or_gaps: string | null;
  coverage_status: string | null;
};

export type ScrapeAuditRecord = {
  id: number;
  research_ref: string | null;
  canonical_source_id: string | null;
  title: string | null;
  url: string | null;
  status: string | null;
  tools: string | null;
  extraction_extent: string | null;
  limitations: string | null;
};

/** Parse RFC 4180 CSV text. Synchronous and dependency-free. */
export function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
        } else {
          inQuotes = false;
          i++;
        }
      } else {
        field += char;
        i++;
      }
    } else if (char === '"') {
      inQuotes = true;
      i++;
    } else if (char === ",") {
      row.push(field);
      field = "";
      i++;
    } else if (char === "\r" || char === "\n") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i++;
    } else {
      field += char;
      i++;
    }
  }
  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  if (rows.length === 0 || !rows[0]) return [];

  const headers = rows[0].map((h) => h.trim());
  const out: Record<string, string>[] = [];
  for (let r = 1; r < rows.length; r++) {
    const values = rows[r];
    if (!values || (values.length === 1 && (values[0] ?? "").trim() === "")) continue;
    const obj: Record<string, string> = {};
    for (let c = 0; c < headers.length; c++) {
      const key = headers[c];
      if (key !== undefined) obj[key] = values[c] ?? "";
    }
    out.push(obj);
  }
  return out;
}

const strOrNull = (v: string | undefined): string | null =>
  v !== undefined && v !== "" ? v : null;

/** Track taxonomy. Track 8 is the catch-all for guides and unnumbered files. */
const TRACK_RANGES: [lo: number, hi: number, order: number, name: string][] = [
  [1, 26, 1, "Core foundation"],
  [27, 60, 2, "Advanced expansion"],
  [61, 81, 3, "Deep research"],
  [82, 95, 4, "Expert extension"],
  [96, 102, 5, "Decision & execution"],
  [103, 110, 6, "Fifth-level engineering"],
  [111, 118, 7, "Sixth-level dependability"],
];

export function resolveTrack(n: number | null): [number, string] {
  if (n === null) return [8, "Pack guides"];
  if (n === 0) return [0, "Start here"];
  for (const [lo, hi, order, name] of TRACK_RANGES) {
    if (n >= lo && n <= hi) return [order, name];
  }
  return [8, "Pack guides"];
}

const slugifyFilename = (file: string) =>
  file
    .slice(0, -3)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * First real paragraph that is not a heading, table, list, quote or code fence.
 * Some volumes (the glossary) are pure tables with no prose at all, so fall back
 * to the heading rather than shipping an empty card.
 */
function deriveSummary(body: string, title: string): string {
  for (const para of body.split(/\n\s*\n/)) {
    const p = para.trim();
    if (p && !/^([#|>*`-]|```)/.test(p)) {
      return p
        .replace(/\]\([^)]*\)/g, "]")
        .replace(/[*_`[\]]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 400);
    }
  }
  return `Reference: ${title}`;
}

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase()).replace(/_/g, " ");

function buildArticles(): ArticleDetail[] {
  const out: ArticleDetail[] = [];
  for (const [file, body] of Object.entries(PACK_MARKDOWN)) {
    const numMatch = /^(\d+)_/.exec(file);
    const number = numMatch?.[1] ? Number.parseInt(numMatch[1], 10) : null;
    const [track_order, track] = resolveTrack(number);
    const heading = /^#\s+(.+)$/m.exec(body)?.[1]?.trim();
    const title = heading ?? titleCase(file.slice(0, -3));
    out.push({
      slug: slugifyFilename(file),
      filename: file,
      number,
      title,
      track,
      track_order,
      summary: deriveSummary(body, title),
      body,
      word_count: body.trim().split(/\s+/).filter(Boolean).length,
    });
  }
  return out.sort(
    (a, b) =>
      a.track_order - b.track_order ||
      (a.number === null ? Number.MAX_SAFE_INTEGER : a.number) -
        (b.number === null ? Number.MAX_SAFE_INTEGER : b.number),
  );
}

const ARTICLES = buildArticles();
const BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));
const NAV: ArticleNav[] = ARTICLES.map((a) => ({
  slug: a.slug,
  title: a.title,
  number: a.number,
  track_order: a.track_order,
}));
const FILE_MAP: Record<string, string> = Object.fromEntries(
  ARTICLES.map((a) => [a.filename, a.slug]),
);

const SOURCES: SourceRecord[] = parseCsv(PACK_CSV["sources.csv"] ?? "").map((r) => ({
  source_id: r["source_id"] ?? "",
  title: r["title"] ?? "",
  url: strOrNull(r["url"]),
  source_type: strOrNull(r["source_type"]),
  relevance: strOrNull(r["relevance"]),
  quality_signal: strOrNull(r["quality_signal"]),
  limitations: strOrNull(r["limitations"]),
}));

const PROMPTS: PracticePromptRecord[] = parseCsv(PACK_CSV["practice_prompts.csv"] ?? "").map(
  (r) => ({
    prompt_id: r["prompt_id"] ?? "",
    exercise: r["exercise"] ?? "",
    primary_concepts: strOrNull(r["primary_concepts"]),
    required_artifacts: strOrNull(r["required_artifacts"]),
  }),
);

const ROLES: RoleRecord[] = parseCsv(PACK_CSV["role_competency_matrix.csv"] ?? "").map((r, i) => ({
  id: i + 1,
  role: r["role"] ?? "",
  career_level: strOrNull(r["career_level"]),
  competency_areas: strOrNull(r["competency_areas"]),
  typical_deliverables: strOrNull(r["typical_deliverables"]),
  source_anchors: strOrNull(r["source_anchors"]),
  portfolio_project: strOrNull(r["portfolio_project"]),
}));

const COVERAGE_DEEP: CoverageDeepRecord[] = parseCsv(
  PACK_CSV["DEEP_COVERAGE_MATRIX.csv"] ?? "",
).map((r, i) => ({
  id: i + 1,
  domain: r["domain"] ?? "",
  depth_in_repository: strOrNull(r["depth_in_repository"]),
  new_deep_volumes: strOrNull(r["new_deep_volumes"]),
  primary_source_anchors: strOrNull(r["primary_source_anchors"]),
  evidence_status: strOrNull(r["evidence_status"]),
  remaining_gap: strOrNull(r["remaining_gap"]),
  next_validation_action: strOrNull(r["next_validation_action"]),
}));

const COVERAGE_RESEARCH: CoverageResearchRecord[] = parseCsv(
  PACK_CSV["RESEARCH_COVERAGE_MATRIX.csv"] ?? "",
).map((r, i) => ({
  id: i + 1,
  domain: r["domain"] ?? "",
  knowledge_files: strOrNull(r["knowledge_files"]),
  source_anchors: strOrNull(r["source_anchors"]),
  known_limitations_or_gaps: strOrNull(r["known_limitations_or_gaps"]),
  coverage_status: strOrNull(r["coverage_status"]),
}));

const SCRAPE_AUDIT: ScrapeAuditRecord[] = parseCsv(PACK_CSV["DEEP_SCRAPE_AUDIT.csv"] ?? "").map(
  (r, i) => ({
    id: i + 1,
    research_ref: strOrNull(r["research_ref"]),
    canonical_source_id: strOrNull(r["canonical_source_id"]),
    title: strOrNull(r["title"]),
    url: strOrNull(r["url"]),
    status: strOrNull(r["status"]),
    tools: strOrNull(r["tools"]),
    extraction_extent: strOrNull(r["extraction_extent"]),
    limitations: strOrNull(r["limitations"]),
  }),
);

/* ------------------------------------------------------------------ queries */

export function listArticles(): ArticleListItem[] {
  return ARTICLES.map(({ body: _body, filename: _filename, ...rest }) => rest);
}

export function getArticle(slug: string): {
  article: ArticleDetail;
  prev: ArticleNav | null;
  next: ArticleNav | null;
  fileMap: Record<string, string>;
} | null {
  const article = BY_SLUG.get(slug);
  if (!article) return null;
  const i = NAV.findIndex((n) => n.slug === slug);
  return {
    article,
    prev: i > 0 ? (NAV[i - 1] ?? null) : null,
    next: i >= 0 && i < NAV.length - 1 ? (NAV[i + 1] ?? null) : null,
    fileMap: FILE_MAP,
  };
}

/** Case-insensitive substring search over title, summary and body. */
export function searchArticles(query: string): string[] {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(term) ||
      a.summary.toLowerCase().includes(term) ||
      a.body.toLowerCase().includes(term),
  )
    .slice(0, 200)
    .map((a) => a.slug);
}

export const listSources = () => SOURCES;
export const listPrompts = () => PROMPTS;
export const listRoles = () => ROLES;

export function getCoverage() {
  return {
    deep: COVERAGE_DEEP,
    research: COVERAGE_RESEARCH,
    audit: SCRAPE_AUDIT,
    meta: {
      files: PACK_FILE_COUNT,
      articles: ARTICLES.length,
      sources: SOURCES.length,
    } as Record<string, string | number>,
  };
}

/** Source verification state, derived from DEEP_SCRAPE_AUDIT.csv. */
export type Verification = "full" | "partial" | "discovery" | "unreachable" | "unaudited";

export function verificationFor(sourceId: string): {
  state: Verification;
  label: string;
  status: string | null;
} {
  const row = SCRAPE_AUDIT.find((a) => a.canonical_source_id === sourceId);
  if (!row?.status) {
    return { state: "unaudited", label: "Not audited", status: null };
  }
  const s = row.status.toLowerCase();
  if (s.includes("unreachable") || s.includes("blocked")) {
    return { state: "unreachable", label: "Couldn't reach", status: row.status };
  }
  if (s.startsWith("discovery") || s.includes("preview only")) {
    return { state: "discovery", label: "Found, not fully read", status: row.status };
  }
  if (s.includes("partial") || s.includes("targeted") || s.includes("metadata")) {
    return { state: "partial", label: "Partially read", status: row.status };
  }
  if (s.includes("full")) {
    return { state: "full", label: "Read in full", status: row.status };
  }
  return { state: "partial", label: "Partially read", status: row.status };
}

/** Pack-integrity snapshot. Kept for the health endpoint and the seed test. */
export function getPackStats() {
  const audited = new Set(
    SCRAPE_AUDIT.map((a) => a.canonical_source_id).filter((v): v is string => Boolean(v)),
  );
  return {
    files: PACK_FILE_COUNT,
    articles: ARTICLES.length,
    sources: SOURCES.length,
    practice_prompts: PROMPTS.length,
    roles: ROLES.length,
    coverage_deep: COVERAGE_DEEP.length,
    coverage_research: COVERAGE_RESEARCH.length,
    scrape_audit: SCRAPE_AUDIT.length,
    sources_audited: SOURCES.filter((s) => audited.has(s.source_id)).length,
    words: ARTICLES.reduce((n, a) => n + a.word_count, 0),
  };
}

export const pack = {
  files: PACK_FILE_COUNT,
  markdown: PACK_MARKDOWN,
  csv: PACK_CSV,
};
