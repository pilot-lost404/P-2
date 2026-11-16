import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentField = "";
  let insideQuote = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === "," && !insideQuote) {
      currentRow.push(currentField);
      currentField = "";
    } else if ((char === "\r" || char === "\n") && !insideQuote) {
      if (char === "\r" && nextChar === "\n") i++;
      currentRow.push(currentField);
      if (currentRow.some((c) => c.length > 0)) rows.push(currentRow);
      currentRow = [];
      currentField = "";
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }
  return rows;
}

const sourceRows = parseCSV(fs.readFileSync("content/pack/sources.csv", "utf8")).slice(1);
const auditRows = parseCSV(fs.readFileSync("content/pack/DEEP_SCRAPE_AUDIT.csv", "utf8")).slice(1);
const mdFiles = fs
  .readdirSync("content/pack")
  .filter((f) => f.endsWith(".md") && f !== "CONTENT_IMPORT_GUIDE.md");

// Build file metadata
const fileMeta = [];
mdFiles.forEach((f) => {
  const text = fs.readFileSync(path.join("content/pack", f), "utf8");
  const h1Match = text.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1].trim() : f.replace(/\.md$/, "");
  const numMatch = f.match(/^(\d+)_/);
  const number = numMatch ? parseInt(numMatch[1], 10) : null;
  const slug = f.replace(/\.md$/, "").toLowerCase().replace(/_/g, "-");
  fileMeta.push({
    filename: f,
    slug,
    title,
    number,
    text,
  });
});

// Audit map
const auditMap = new Map();
auditRows.forEach((row) => {
  const [researchRef, canonicalId, title, url, status, tools, extractionExtent, limitations] = row;
  const item = {
    researchRef,
    canonicalId,
    title,
    url,
    status,
    tools,
    extractionExtent,
    limitations,
  };
  auditMap.set(canonicalId, item);
  if (researchRef && researchRef !== canonicalId) {
    auditMap.set(researchRef, item);
  }
});

// Map domain topics based on title/type/relevance keywords
function deriveDomainTopics(title, type, rel) {
  const combined = `${title} ${type} ${rel}`.toLowerCase();
  const topics = new Set();

  if (
    combined.includes("incose") ||
    combined.includes("nasa") ||
    combined.includes("systems engineering") ||
    combined.includes("sebok")
  ) {
    topics.add("Systems Engineering");
  }
  if (
    combined.includes("thinking") ||
    combined.includes("meadows") ||
    combined.includes("system dynamics") ||
    combined.includes("feedback")
  ) {
    topics.add("Systems Thinking");
  }
  if (
    combined.includes("requirement") ||
    combined.includes("traceability") ||
    combined.includes("29148")
  ) {
    topics.add("Requirements Engineering");
  }
  if (
    combined.includes("distributed") ||
    combined.includes("consensus") ||
    combined.includes("raft") ||
    combined.includes("paxos") ||
    combined.includes("spanner") ||
    combined.includes("zookeeper")
  ) {
    topics.add("Distributed Systems");
  }
  if (
    combined.includes("safety") ||
    combined.includes("hazard") ||
    combined.includes("stamp") ||
    combined.includes("stpa") ||
    combined.includes("61508") ||
    combined.includes("26262") ||
    combined.includes("882")
  ) {
    topics.add("Safety & Hazard Analysis");
  }
  if (
    combined.includes("reliability") ||
    combined.includes("weibull") ||
    combined.includes("markov") ||
    combined.includes("fmeca") ||
    combined.includes("fmea") ||
    combined.includes("availability") ||
    combined.includes("rcm")
  ) {
    topics.add("Reliability & Dependability");
  }
  if (
    combined.includes("security") ||
    combined.includes("threat") ||
    combined.includes("stride") ||
    combined.includes("crypto") ||
    combined.includes("cyber")
  ) {
    topics.add("Security Architecture");
  }
  if (
    combined.includes("sysml") ||
    combined.includes("mbse") ||
    combined.includes("model") ||
    combined.includes("simulation") ||
    combined.includes("digital twin")
  ) {
    topics.add("MBSE & Modeling");
  }
  if (
    combined.includes("architecture") ||
    combined.includes("atam") ||
    combined.includes("iso 42010") ||
    combined.includes("arc42") ||
    combined.includes("patterns") ||
    combined.includes("c4")
  ) {
    topics.add("Software & Enterprise Architecture");
  }
  if (
    combined.includes("data") ||
    combined.includes("mesh") ||
    combined.includes("lakehouse") ||
    combined.includes("stream") ||
    combined.includes("kafka") ||
    combined.includes("contract")
  ) {
    topics.add("Data Architecture");
  }
  if (
    combined.includes("cloud") ||
    combined.includes("sre") ||
    combined.includes("slo") ||
    combined.includes("sli") ||
    combined.includes("devops") ||
    combined.includes("kubernetes")
  ) {
    topics.add("Cloud & SRE");
  }
  if (
    combined.includes("decision") ||
    combined.includes("trade study") ||
    combined.includes("mcda") ||
    combined.includes("utility") ||
    combined.includes("bayes")
  ) {
    topics.add("Decision Analysis & Trade Studies");
  }
  if (
    combined.includes("verification") ||
    combined.includes("validation") ||
    combined.includes("testing") ||
    combined.includes("qualification") ||
    combined.includes("v&v")
  ) {
    topics.add("Verification & Validation");
  }
  if (
    combined.includes("aerospace") ||
    combined.includes("automotive") ||
    combined.includes("medical") ||
    combined.includes("rail") ||
    combined.includes("defense") ||
    combined.includes("dod")
  ) {
    topics.add("Regulated Sector Assurance");
  }
  if (
    combined.includes("human") ||
    combined.includes("hra") ||
    combined.includes("ergonomics") ||
    combined.includes("cognitive")
  ) {
    topics.add("Human Systems Integration");
  }
  if (
    combined.includes("lifecycle") ||
    combined.includes("support") ||
    combined.includes("obsolescence") ||
    combined.includes("dmsms") ||
    combined.includes("maintenance") ||
    combined.includes("phm")
  ) {
    topics.add("Product Support & Lifecycle");
  }

  if (topics.size === 0) {
    topics.add("Systems Foundations");
  }
  return Array.from(topics).slice(0, 4);
}

// Map domain topic to related article numbers
const topicToVolumes = {
  "Systems Engineering": [0, 1, 3, 21, 23, 29, 38, 48, 81, 98],
  "Systems Thinking": [0, 1, 2, 27, 28, 61, 103],
  "Requirements Engineering": [3, 4, 29, 63, 85],
  "Distributed Systems": [5, 7, 32, 45, 65],
  "Safety & Hazard Analysis": [8, 23, 36, 44, 77, 107, 108],
  "Reliability & Dependability": [8, 35, 46, 75, 100, 101, 110, 111, 112, 113],
  "Security Architecture": [9, 37, 42, 48, 73],
  "MBSE & Modeling": [22, 39, 67, 84, 102],
  "Software & Enterprise Architecture": [3, 5, 6, 25, 30, 31, 40, 46, 64, 84, 99],
  "Data Architecture": [7, 34, 66, 90],
  "Cloud & SRE": [10, 33, 50, 100],
  "Decision Analysis & Trade Studies": [6, 30, 88, 89, 96, 97, 118],
  "Verification & Validation": [21, 38, 70, 104, 105, 106],
  "Regulated Sector Assurance": [44, 48, 78, 92, 108, 109],
  "Human Systems Integration": [41, 74, 87, 91],
  "Product Support & Lifecycle": [21, 48, 101, 114, 115, 116, 117],
};

// Build enriched source records
const enrichedSources = [];
const articleSourceMap = {};

sourceRows.forEach((row) => {
  const [sourceId, title, url, sourceType, relevance, qualitySignal, limitations] = row;
  const audit = auditMap.get(sourceId);
  const topics = deriveDomainTopics(title, sourceType, relevance);

  // Find exact citing articles
  const citedFiles = [];
  const citeMatches = fileMeta.filter((m) => m.text.includes(sourceId));
  citeMatches.forEach((m) => {
    citedFiles.push({
      slug: m.slug,
      number: m.number,
      title: m.title,
      filename: m.filename,
    });
  });

  // If no direct Sxx citation found in text, associate with primary domain volume
  if (citedFiles.length === 0) {
    const fallbackNumbers = new Set();
    topics.forEach((t) => {
      const vols = topicToVolumes[t] || [];
      vols.slice(0, 3).forEach((v) => fallbackNumbers.add(v));
    });
    if (fallbackNumbers.size === 0) fallbackNumbers.add(0);

    fallbackNumbers.forEach((num) => {
      const m = fileMeta.find((f) => f.number === num);
      if (m && !citedFiles.some((c) => c.slug === m.slug)) {
        citedFiles.push({
          slug: m.slug,
          number: m.number,
          title: m.title,
          filename: m.filename,
        });
      }
    });
  }

  // Update reverse mapping
  citedFiles.forEach((cf) => {
    if (!articleSourceMap[cf.slug]) articleSourceMap[cf.slug] = [];
    if (!articleSourceMap[cf.slug].includes(sourceId)) {
      articleSourceMap[cf.slug].push(sourceId);
    }
  });

  // Generate rich summary & practical takeaways
  let summary = "";
  if (audit && audit.extractionExtent && audit.extractionExtent.length > 20) {
    summary = `${relevance}. Extraction detail: ${audit.extractionExtent}`;
  } else {
    summary = `Authoritative reference covering ${relevance.toLowerCase()}. Essential context for ${topics.join(", ")}.`;
  }

  let takeaways = "";
  if (qualitySignal.includes("primary") || qualitySignal.includes("Official")) {
    takeaways = `Treat as normative baseline for ${topics[0] || "system design"}. Note operational limitations: ${limitations}.`;
  } else if (sourceType.includes("paper") || sourceType.includes("Academic")) {
    takeaways = `Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: ${limitations}.`;
  } else {
    takeaways = `Practical implementation guidance and architectural patterns. Balance against project-specific constraints: ${limitations}.`;
  }

  enrichedSources.push({
    source_id: sourceId,
    title,
    url: url || null,
    source_type: sourceType || "Reference",
    relevance: relevance || "",
    quality_signal: qualitySignal || "Documented reference",
    limitations: limitations || "Verify current edition and applicability",
    audit: audit
      ? {
          status: audit.status,
          tools: audit.tools,
          extraction_extent: audit.extractionExtent,
          limitations: audit.limitations,
        }
      : undefined,
    domain_topics: topics,
    summary,
    takeaways,
    cited_in_articles: citedFiles,
  });
});

console.log("Total enriched sources built:", enrichedSources.length);
console.log("Articles with cited sources count:", Object.keys(articleSourceMap).length);
console.log("Sample enriched source 1:", JSON.stringify(enrichedSources[0], null, 2));

// Generate TypeScript file content
const tsContent = `/**
 * Auto-generated Enriched Source Index — regenerate with scripts/generate_source_enrichment.js.
 * Maps 320 knowledge sources and 162 audit items to pack volumes, domain topics, abstracts and practical takeaways.
 * Reads content/pack/ (the single source of truth); SS_content/ was a byte-identical copy and is gone.
 */

export interface EnrichedSourceAudit {
  status: string;
  tools: string;
  extraction_extent: string;
  limitations: string;
}

export interface EnrichedSourceArticleRef {
  slug: string;
  number: number | null;
  title: string;
  filename: string;
}

export interface EnrichedSource {
  source_id: string;
  title: string;
  url: string | null;
  source_type: string;
  relevance: string;
  quality_signal: string;
  limitations: string;
  audit?: EnrichedSourceAudit;
  domain_topics: string[];
  summary: string;
  takeaways: string;
  cited_in_articles: EnrichedSourceArticleRef[];
}

export const ENRICHED_SOURCES: Record<string, EnrichedSource> = ${JSON.stringify(
  Object.fromEntries(enrichedSources.map((s) => [s.source_id, s])),
  null,
  2,
)};

export const ALL_ENRICHED_SOURCES: EnrichedSource[] = Object.values(ENRICHED_SOURCES);

export const ARTICLE_TO_SOURCES: Record<string, string[]> = ${JSON.stringify(articleSourceMap, null, 2)};

/** Common alias mapping for standards and handbook names to source IDs */
export const CITATION_ALIASES: Record<string, string> = {
  "NASA-SP-2016-6105": "S02",
  "NASA/SP-2016-6105": "S02",
  "NASA-HDBK-1009A": "S191",
  "ISO/IEC/IEEE 15288": "S119",
  "ISO 15288": "S119",
  "ISO/IEC/IEEE 42010": "S120",
  "ISO 42010": "S120",
  "ISO/IEC/IEEE 29148": "S121",
  "ISO 29148": "S121",
  "ISO/IEC/IEEE 42020": "S122",
  "ISO 42020": "S122",
  "ISO/IEC/IEEE 21839": "S256",
  "ISO 21839": "S256",
  "ISO 26262": "S162",
  "IEC 61508": "S131",
  "MIL-STD-882E": "S77",
  "MIL-STD-882": "S77",
  "SysML v2": "S67",
  "SysML 2.0": "S67",
  "NPR 7123.1D": "S272",
  "NPR 7120.5F": "S121",
  "DoD 5000.88": "S123",
  "TOGAF 10": "S126",
  "BPMN 2.0": "S127",
  "NASA/SP-2010-576": "S334",
  "FAA AC 20-115D": "S291",
  "ATAM": "S125"
};

export function getEnrichedSource(id: string): EnrichedSource | undefined {
  const norm = id.trim().toUpperCase();
  if (ENRICHED_SOURCES[norm]) return ENRICHED_SOURCES[norm];
  const alias = CITATION_ALIASES[id.trim()];
  if (alias && ENRICHED_SOURCES[alias]) return ENRICHED_SOURCES[alias];
  return undefined;
}

export function getSourcesForArticle(
  slugOrFilename: string,
  articleBody?: string,
): EnrichedSource[] {
  const clean = slugOrFilename.replace(/\\.md$/, "").toLowerCase().replace(/_/g, "-");
  const indexedIds = ARTICLE_TO_SOURCES[clean] || [];

  // Explicit S-ids in the body outrank the curated index: an article that cites S04
  // should show S04 even if the index was built before that citation was added.
  const directIds: string[] = [];
  if (articleBody) {
    for (const sid of articleBody.match(/\\bS\\d{2,3}\\b/g) || []) {
      if (!directIds.includes(sid)) directIds.push(sid);
    }
    for (const [alias, sid] of Object.entries(CITATION_ALIASES)) {
      if (articleBody.includes(alias) && !directIds.includes(sid)) directIds.push(sid);
    }
  }

  const combinedIds = Array.from(new Set([...directIds, ...indexedIds]));
  return combinedIds.map((id) => ENRICHED_SOURCES[id]).filter(Boolean) as EnrichedSource[];
}
`;

fs.writeFileSync("src/lib/neet/sourceEnrichment.ts", tsContent, "utf8");

// The template is JSON.stringify output (quoted keys, long lines), but the repo lints
// with prettier/prettier on every file. Format what we just wrote so regenerating the
// index never turns `npm run lint` red. Skipped quietly if prettier isn't installed.
try {
  execFileSync("npx", ["prettier", "--write", "src/lib/neet/sourceEnrichment.ts"], {
    stdio: "ignore",
  });
} catch {
  console.warn("prettier not available; run `npx prettier --write` on the generated file.");
}
console.log("Successfully wrote src/lib/neet/sourceEnrichment.ts!");
