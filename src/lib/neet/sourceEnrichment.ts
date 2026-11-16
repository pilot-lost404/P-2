/**
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

export const ENRICHED_SOURCES: Record<string, EnrichedSource> = {
  S01: {
    source_id: "S01",
    title: "INCOSE Systems Engineering Handbook",
    url: "https://www.incose.org/resources-publications/technical-publications/se-handbook/",
    source_type: "Professional handbook",
    relevance: "Lifecycle processes and systems engineering",
    quality_signal: "Official primary",
    limitations: "Commercial/member access; verify live edition",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering lifecycle processes and systems engineering. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Commercial/member access; verify live edition.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S02: {
    source_id: "S02",
    title: "NASA Systems Engineering Handbook Rev 2",
    url: "https://essp.larc.nasa.gov/EVI-6/pdf_files/NASA_SystemsEngineeringHandbookRev2.pdf",
    source_type: "Government handbook",
    relevance: "Lifecycle; requirements; trade studies; verification/validation",
    quality_signal: "Government primary",
    limitations: "NASA-program context",
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "Verification & Validation",
      "Product Support & Lifecycle",
    ],
    summary:
      "Authoritative reference covering lifecycle; requirements; trade studies; verification/validation. Essential context for Systems Engineering, Requirements Engineering, Verification & Validation, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA-program context.",
    cited_in_articles: [
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
    ],
  },
  S03: {
    source_id: "S03",
    title: "Software Architecture in Practice 4th ed",
    url: "https://www.pearson.com/en-us/subject-catalog/p/software-architecture-in-practice/P200000003472/9780136886099",
    source_type: "Book",
    relevance: "Architecture quality attributes and evaluation",
    quality_signal: "Publisher listing",
    limitations: "Commercial book",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering architecture quality attributes and evaluation. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Commercial book.",
    cited_in_articles: [
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "06-decision-method-and-tradeoffs",
        number: 6,
        title: "06 — Decision method and trade-offs",
        filename: "06_DECISION_METHOD_AND_TRADEOFFS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S04: {
    source_id: "S04",
    title: "Donella Meadows Project Systems Thinking Resources",
    url: "https://donellameadows.org/systems-thinking-resources/",
    source_type: "Learning resource",
    relevance: "Iceberg; stocks/flows; systems thinking",
    quality_signal: "Primary educational source",
    limitations: "Resource collection not a complete course",
    domain_topics: ["Systems Thinking"],
    summary:
      "Authoritative reference covering iceberg; stocks/flows; systems thinking. Essential context for Systems Thinking.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Resource collection not a complete course.",
    cited_in_articles: [
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "28-problem-framing-and-systems-methods",
        number: 28,
        title: "28 — Problem framing and systems methodologies",
        filename: "28_PROBLEM_FRAMING_AND_SYSTEMS_METHODS.md",
      },
    ],
  },
  S05: {
    source_id: "S05",
    title: "System Dynamics Society Road Maps",
    url: "https://systemdynamics.org/learning/road-maps/",
    source_type: "Learning resource",
    relevance: "Feedback; stock-flow; exercises",
    quality_signal: "Professional society",
    limitations: "Resource quality varies by course",
    domain_topics: ["Systems Thinking"],
    summary:
      "Authoritative reference covering feedback; stock-flow; exercises. Essential context for Systems Thinking.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Resource quality varies by course.",
    cited_in_articles: [
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "28-problem-framing-and-systems-methods",
        number: 28,
        title: "28 — Problem framing and systems methodologies",
        filename: "28_PROBLEM_FRAMING_AND_SYSTEMS_METHODS.md",
      },
    ],
  },
  S06: {
    source_id: "S06",
    title: "Waters Center Thinking Tools Studio",
    url: "https://thinkingtoolsstudio.waterscenterst.org/courses/tools",
    source_type: "Learning resource",
    relevance: "Causal loops; iceberg; ladder of inference",
    quality_signal: "Educational provider",
    limitations: "Pedagogical resource",
    domain_topics: ["Systems Thinking"],
    summary:
      "Authoritative reference covering causal loops; iceberg; ladder of inference. Essential context for Systems Thinking.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Pedagogical resource.",
    cited_in_articles: [
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S07: {
    source_id: "S07",
    title: "Open University Systems Thinking Hub",
    url: "https://www.open.edu/openlearn/systems-thinking-hub",
    source_type: "Course hub",
    relevance: "Systems Thinking in Practice",
    quality_signal: "University",
    limitations: "Course availability can change",
    domain_topics: ["Systems Thinking"],
    summary:
      "Authoritative reference covering systems thinking in practice. Essential context for Systems Thinking.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Course availability can change.",
    cited_in_articles: [
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S08: {
    source_id: "S08",
    title: "C4 model",
    url: "https://c4model.com/",
    source_type: "Architecture notation",
    relevance: "Architecture diagrams",
    quality_signal: "Method author source",
    limitations: "Diagramming model not evaluation",
    domain_topics: ["MBSE & Modeling", "Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering architecture diagrams. Essential context for MBSE & Modeling, Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Diagramming model not evaluation.",
    cited_in_articles: [
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S09: {
    source_id: "S09",
    title: "CMU SEI ATAM collection",
    url: "https://www.sei.cmu.edu/library/architecture-tradeoff-analysis-method-collection/",
    source_type: "Architecture evaluation",
    relevance: "Risk/trade-off evaluation",
    quality_signal: "Institutional primary",
    limitations: "Quality depends on inputs and facilitation",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering risk/trade-off evaluation. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Quality depends on inputs and facilitation.",
    cited_in_articles: [
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "06-decision-method-and-tradeoffs",
        number: 6,
        title: "06 — Decision method and trade-offs",
        filename: "06_DECISION_METHOD_AND_TRADEOFFS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
    ],
  },
  S10: {
    source_id: "S10",
    title: "Google Cloud Well-Architected",
    url: "https://docs.cloud.google.com/architecture/framework",
    source_type: "Cloud framework",
    relevance: "Ops; security; reliability; cost; performance; sustainability",
    quality_signal: "Official vendor primary",
    limitations: "Vendor-specific; reviewed 2026-10-13",
    domain_topics: ["Reliability & Dependability", "Security Architecture", "Cloud & SRE"],
    summary:
      "Authoritative reference covering ops; security; reliability; cost; performance; sustainability. Essential context for Reliability & Dependability, Security Architecture, Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Reliability & Dependability. Note operational limitations: Vendor-specific; reviewed 2026-10-13.",
    cited_in_articles: [
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "10-operations-observability-and-delivery",
        number: 10,
        title: "10 — Operations, observability and delivery",
        filename: "10_OPERATIONS_OBSERVABILITY_AND_DELIVERY.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
    ],
  },
  S11: {
    source_id: "S11",
    title: "Azure Well-Architected Framework",
    url: "https://learn.microsoft.com/en-us/azure/well-architected/",
    source_type: "Cloud framework",
    relevance: "Quality-driven workload design",
    quality_signal: "Official vendor primary",
    limitations: "Vendor-specific",
    domain_topics: ["Cloud & SRE"],
    summary:
      "Authoritative reference covering quality-driven workload design. Essential context for Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Cloud & SRE. Note operational limitations: Vendor-specific.",
    cited_in_articles: [
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "10-operations-observability-and-delivery",
        number: 10,
        title: "10 — Operations, observability and delivery",
        filename: "10_OPERATIONS_OBSERVABILITY_AND_DELIVERY.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S12: {
    source_id: "S12",
    title: "AWS Well-Architected",
    url: "https://aws.amazon.com/architecture/well-architected/",
    source_type: "Cloud framework",
    relevance: "Cloud design principles and six pillars",
    quality_signal: "Official vendor primary",
    limitations: "Vendor-specific",
    domain_topics: ["Cloud & SRE"],
    summary:
      "Authoritative reference covering cloud design principles and six pillars. Essential context for Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Cloud & SRE. Note operational limitations: Vendor-specific.",
    cited_in_articles: [
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "10-operations-observability-and-delivery",
        number: 10,
        title: "10 — Operations, observability and delivery",
        filename: "10_OPERATIONS_OBSERVABILITY_AND_DELIVERY.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "40-enterprise-architecture-business-process-and-governance",
        number: 40,
        title: "40 — Enterprise architecture, business process and governance",
        filename: "40_ENTERPRISE_ARCHITECTURE_BUSINESS_PROCESS_AND_GOVERNANCE.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
      {
        slug: "64-architecture-governance-conformance-and-evolution",
        number: 64,
        title: "64 — Architecture governance, conformance, evolution and erosion",
        filename: "64_ARCHITECTURE_GOVERNANCE_CONFORMANCE_AND_EVOLUTION.md",
      },
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S13: {
    source_id: "S13",
    title: "ISO/IEC 25010",
    url: "https://www.iso.org/standard/78176.html",
    source_type: "Standard",
    relevance: "Product quality model",
    quality_signal: "Standards body",
    limitations: "Verify current edition and licensing",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official ISO listing; text licensed.",
      limitations: "Verify current edition and licensing",
    },
    domain_topics: ["MBSE & Modeling"],
    summary: "Product quality model. Extraction detail: Official ISO listing; text licensed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Verify current edition and licensing.",
    cited_in_articles: [
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "74-functional-safety-standards-by-sector-and-assurance-boundaries",
        number: 74,
        title: "74 — Functional-safety standards by sector and assurance boundaries",
        filename: "74_FUNCTIONAL_SAFETY_STANDARDS_BY_SECTOR_AND_ASSURANCE_BOUNDARIES.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S14: {
    source_id: "S14",
    title: "Azure Cloud Design Patterns",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/",
    source_type: "Pattern catalogue",
    relevance: "Distributed/cloud patterns and trade-offs",
    quality_signal: "Official documentation",
    limitations: "Many patterns are general but examples are Azure-oriented",
    domain_topics: ["Distributed Systems", "Software & Enterprise Architecture", "Cloud & SRE"],
    summary:
      "Authoritative reference covering distributed/cloud patterns and trade-offs. Essential context for Distributed Systems, Software & Enterprise Architecture, Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Distributed Systems. Note operational limitations: Many patterns are general but examples are Azure-oriented.",
    cited_in_articles: [
      {
        slug: "05-architecture-styles-and-patterns",
        number: 5,
        title: "05 — Architecture styles and patterns",
        filename: "05_ARCHITECTURE_STYLES_AND_PATTERNS.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "103-system-dynamics-model-building-validation-and-policy-intervention",
        number: 103,
        title: "System Dynamics: Model Building, Validation and Policy Intervention",
        filename: "103_SYSTEM_DYNAMICS_MODEL_BUILDING_VALIDATION_AND_POLICY_INTERVENTION.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "28-problem-framing-and-systems-methods",
        number: 28,
        title: "28 — Problem framing and systems methodologies",
        filename: "28_PROBLEM_FRAMING_AND_SYSTEMS_METHODS.md",
      },
      {
        slug: "31-software-architecture-and-domain-design-deep-dive",
        number: 31,
        title: "31 — Software architecture and domain design: the deeper structure",
        filename: "31_SOFTWARE_ARCHITECTURE_AND_DOMAIN_DESIGN_DEEP_DIVE.md",
      },
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "40-enterprise-architecture-business-process-and-governance",
        number: 40,
        title: "40 — Enterprise architecture, business process and governance",
        filename: "40_ENTERPRISE_ARCHITECTURE_BUSINESS_PROCESS_AND_GOVERNANCE.md",
      },
      {
        slug: "41-human-factors-socio-technical-and-organization-design",
        number: 41,
        title: "41 — Human factors, socio-technical systems and organization design",
        filename: "41_HUMAN_FACTORS_SOCIO_TECHNICAL_AND_ORGANIZATION_DESIGN.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
      {
        slug: "99-architecture-evaluation-iso42030-atam-and-evidence-based-review",
        number: 99,
        title: "99 — Architecture evaluation: ISO 42030, ATAM and evidence-based review",
        filename: "99_ARCHITECTURE_EVALUATION_ISO42030_ATAM_AND_EVIDENCE_BASED_REVIEW.md",
      },
    ],
  },
  S15: {
    source_id: "S15",
    title: "Google SRE Book",
    url: "https://sre.google/sre-book/table-of-contents/",
    source_type: "Book/operations",
    relevance: "SLO; overload; incident; reliability",
    quality_signal: "First-party engineering reference",
    limitations: "Google operating context",
    domain_topics: ["Reliability & Dependability", "Cloud & SRE"],
    summary:
      "Authoritative reference covering slo; overload; incident; reliability. Essential context for Reliability & Dependability, Cloud & SRE.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Google operating context.",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "10-operations-observability-and-delivery",
        number: 10,
        title: "10 — Operations, observability and delivery",
        filename: "10_OPERATIONS_OBSERVABILITY_AND_DELIVERY.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
      {
        slug: "33-cloud-native-platform-engineering-and-operations",
        number: 33,
        title: "33 — Cloud-native architecture, platform engineering and operations",
        filename: "33_CLOUD_NATIVE_PLATFORM_ENGINEERING_AND_OPERATIONS.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
    ],
  },
  S16: {
    source_id: "S16",
    title: "Shopify Deconstructing the Monolith",
    url: "https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity",
    source_type: "Case study",
    relevance: "Modular monolith; boundaries; productivity",
    quality_signal: "First-hand practitioner",
    limitations: "Company case dated 2019",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering modular monolith; boundaries; productivity. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Company case dated 2019.",
    cited_in_articles: [
      {
        slug: "05-architecture-styles-and-patterns",
        number: 5,
        title: "05 — Architecture styles and patterns",
        filename: "05_ARCHITECTURE_STYLES_AND_PATTERNS.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "11-product-impact-and-org-design",
        number: 11,
        title: "11 — Product impact and organizational design",
        filename: "11_PRODUCT_IMPACT_AND_ORG_DESIGN.md",
      },
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "31-software-architecture-and-domain-design-deep-dive",
        number: 31,
        title: "31 — Software architecture and domain design: the deeper structure",
        filename: "31_SOFTWARE_ARCHITECTURE_AND_DOMAIN_DESIGN_DEEP_DIVE.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
      {
        slug: "77-reliability-centered-maintenance-and-integrated-product-support",
        number: 77,
        title: "77 — Reliability-centered maintenance and integrated product support",
        filename: "77_RELIABILITY_CENTERED_MAINTENANCE_AND_INTEGRATED_PRODUCT_SUPPORT.md",
      },
    ],
  },
  S17: {
    source_id: "S17",
    title: "TU Delft Modern Distributed Systems",
    url: "https://learningforlife.tudelft.nl/modern-distributed-systems/",
    source_type: "Course",
    relevance: "Distributed systems fundamentals and project",
    quality_signal: "University",
    limitations: "Course status may change",
    domain_topics: ["Distributed Systems"],
    summary:
      "Authoritative reference covering distributed systems fundamentals and project. Essential context for Distributed Systems.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Course status may change.",
    cited_in_articles: [
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
      {
        slug: "72-real-time-control-embedded-and-cyber-physical-assurance",
        number: 72,
        title: "72 — Real-time control, embedded systems and cyber-physical assurance",
        filename: "72_REAL_TIME_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_ASSURANCE.md",
      },
      {
        slug: "73-operations-research-robust-decisions-and-hybrid-simulation",
        number: 73,
        title: "73 — Operations research, robust decisions and hybrid simulation",
        filename: "73_OPERATIONS_RESEARCH_ROBUST_DECISIONS_AND_HYBRID_SIMULATION.md",
      },
    ],
  },
  S18: {
    source_id: "S18",
    title: "CS Primer Distributed Systems",
    url: "https://csprimer.com/courses/distributed-systems/",
    source_type: "Course",
    relevance: "Distributed systems and key-value store project",
    quality_signal: "Independent curriculum",
    limitations: "Check updates",
    domain_topics: ["Distributed Systems"],
    summary:
      "Authoritative reference covering distributed systems and key-value store project. Essential context for Distributed Systems.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Check updates.",
    cited_in_articles: [
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
      {
        slug: "62-mission-engineering-mission-architectures-and-operational-analysis",
        number: 62,
        title: "62 — Mission engineering, mission architecture and operational analysis",
        filename: "62_MISSION_ENGINEERING_MISSION_ARCHITECTURES_AND_OPERATIONAL_ANALYSIS.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S19: {
    source_id: "S19",
    title: "Designing Data-Intensive Applications",
    url: "https://dataintensive.net/",
    source_type: "Book",
    relevance: "Storage; replication; distributed data; streams",
    quality_signal: "Publisher/author resource",
    limitations: "Commercial book; check edition",
    domain_topics: ["Distributed Systems", "Data Architecture"],
    summary:
      "Authoritative reference covering storage; replication; distributed data; streams. Essential context for Distributed Systems, Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Commercial book; check edition.",
    cited_in_articles: [
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "102-model-based-engineering-model-assurance-and-toolchain-governance",
        number: 102,
        title:
          "102 — Model-based engineering: model assurance, credibility and toolchain governance",
        filename: "102_MODEL_BASED_ENGINEERING_MODEL_ASSURANCE_AND_TOOLCHAIN_GOVERNANCE.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "63-requirements-engineering-formalization-and-evidence-chains",
        number: 63,
        title: "63 — Requirements engineering: formalization, traceability and evidence chains",
        filename: "63_REQUIREMENTS_ENGINEERING_FORMALIZATION_AND_EVIDENCE_CHAINS.md",
      },
      {
        slug: "64-architecture-governance-conformance-and-evolution",
        number: 64,
        title: "64 — Architecture governance, conformance, evolution and erosion",
        filename: "64_ARCHITECTURE_GOVERNANCE_CONFORMANCE_AND_EVOLUTION.md",
      },
      {
        slug: "65-distributed-systems-correctness-consensus-and-time",
        number: 65,
        title: "65 — Distributed systems correctness: consensus, time, ordering and idempotency",
        filename: "65_DISTRIBUTED_SYSTEMS_CORRECTNESS_CONSENSUS_AND_TIME.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
      {
        slug: "99-architecture-evaluation-iso42030-atam-and-evidence-based-review",
        number: 99,
        title: "99 — Architecture evaluation: ISO 42030, ATAM and evidence-based review",
        filename: "99_ARCHITECTURE_EVALUATION_ISO42030_ATAM_AND_EVIDENCE_BASED_REVIEW.md",
      },
    ],
  },
  S20: {
    source_id: "S20",
    title: "Google Cloud Reliability Pillar",
    url: "https://docs.cloud.google.com/architecture/framework/reliability",
    source_type: "Framework",
    relevance: "Resilience/reliability principles",
    quality_signal: "Official vendor primary",
    limitations: "Vendor-specific; reviewed 2026-10-27",
    domain_topics: ["Reliability & Dependability", "Cloud & SRE"],
    summary:
      "Authoritative reference covering resilience/reliability principles. Essential context for Reliability & Dependability, Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Reliability & Dependability. Note operational limitations: Vendor-specific; reviewed 2026-10-27.",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "68-system-safety-stpa-safety-cases-and-hazard-control",
        number: 68,
        title: "68 — System safety: STPA, hazard control and safety cases",
        filename: "68_SYSTEM_SAFETY_STPA_SAFETY_CASES_AND_HAZARD_CONTROL.md",
      },
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
      {
        slug: "90-data-platform-semantics-data-mesh-lakehouse-and-contract-governance",
        number: 90,
        title: "90 — Data-platform architecture: semantics, contracts, mesh and lakehouse choices",
        filename: "90_DATA_PLATFORM_SEMANTICS_DATA_MESH_LAKEHOUSE_AND_CONTRACT_GOVERNANCE.md",
      },
    ],
  },
  S21: {
    source_id: "S21",
    title: "PostHog Feature Flags Outage 2025-09-29",
    url: "https://posthog.com/handbook/company/post-mortems/2025-09-29-flags-is-down",
    source_type: "Postmortem",
    relevance: "Retry amplification; timeout; health check; rollback",
    quality_signal: "First-hand practitioner",
    limitations: "Single incident",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering retry amplification; timeout; health check; rollback. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Single incident.",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "45-architecture-antipatterns-and-failure-modes",
        number: 45,
        title: "45 — Architecture anti-patterns and recurring failure modes",
        filename: "45_ARCHITECTURE_ANTIPATTERNS_AND_FAILURE_MODES.md",
      },
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "71-human-systems-integration-automation-and-cognitive-engineering",
        number: 71,
        title: "71 — Human systems integration, automation and cognitive engineering",
        filename: "71_HUMAN_SYSTEMS_INTEGRATION_AUTOMATION_AND_COGNITIVE_ENGINEERING.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
    ],
  },
  S22: {
    source_id: "S22",
    title: "PostHog Recurring Feature Flags Outages Oct 2025",
    url: "https://posthog.com/handbook/company/post-mortems/2025-10-21-feature-flags-recurring-outages",
    source_type: "Postmortem",
    relevance: "CPU sizing; pool exhaustion; cache/retry cascade",
    quality_signal: "First-hand practitioner",
    limitations: "One organization/workload",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering cpu sizing; pool exhaustion; cache/retry cascade. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: One organization/workload.",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "102-model-based-engineering-model-assurance-and-toolchain-governance",
        number: 102,
        title:
          "102 — Model-based engineering: model assurance, credibility and toolchain governance",
        filename: "102_MODEL_BASED_ENGINEERING_MODEL_ASSURANCE_AND_TOOLCHAIN_GOVERNANCE.md",
      },
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "45-architecture-antipatterns-and-failure-modes",
        number: 45,
        title: "45 — Architecture anti-patterns and recurring failure modes",
        filename: "45_ARCHITECTURE_ANTIPATTERNS_AND_FAILURE_MODES.md",
      },
      {
        slug: "72-real-time-control-embedded-and-cyber-physical-assurance",
        number: 72,
        title: "72 — Real-time control, embedded systems and cyber-physical assurance",
        filename: "72_REAL_TIME_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_ASSURANCE.md",
      },
      {
        slug: "73-operations-research-robust-decisions-and-hybrid-simulation",
        number: 73,
        title: "73 — Operations research, robust decisions and hybrid simulation",
        filename: "73_OPERATIONS_RESEARCH_ROBUST_DECISIONS_AND_HYBRID_SIMULATION.md",
      },
      {
        slug: "75-engineering-incident-forensics-and-system-failure-cases-ii",
        number: 75,
        title: "75 — Engineering incident forensics and system failure cases II",
        filename: "75_ENGINEERING_INCIDENT_FORENSICS_AND_SYSTEM_FAILURE_CASES_II.md",
      },
      {
        slug: "76-agentic-ai-systems-threat-model-evaluation-and-control-2026",
        number: 76,
        title: "76 — Agentic AI systems: threat modeling, evaluation and control (2026)",
        filename: "76_AGENTIC_AI_SYSTEMS_THREAT_MODEL_EVALUATION_AND_CONTROL_2026.md",
      },
      {
        slug: "93-incident-forensics-causal-analysis-and-learning-systems",
        number: 93,
        title:
          "93 — Incident forensics: causal analysis, organizational learning and design feedback",
        filename: "93_INCIDENT_FORENSICS_CAUSAL_ANALYSIS_AND_LEARNING_SYSTEMS.md",
      },
    ],
  },
  S23: {
    source_id: "S23",
    title: "NIST Cybersecurity Framework 2.0",
    url: "https://www.nist.gov/cyberframework",
    source_type: "Security framework",
    relevance: "Cybersecurity risk management",
    quality_signal: "Government primary",
    limitations: "Not a product security checklist/certification",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering cybersecurity risk management. Essential context for Security Architecture.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Not a product security checklist/certification.",
    cited_in_articles: [
      {
        slug: "09-security-and-threat-modeling",
        number: 9,
        title: "09 — Security and threat modeling",
        filename: "09_SECURITY_AND_THREAT_MODELING.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "76-agentic-ai-systems-threat-model-evaluation-and-control-2026",
        number: 76,
        title: "76 — Agentic AI systems: threat modeling, evaluation and control (2026)",
        filename: "76_AGENTIC_AI_SYSTEMS_THREAT_MODEL_EVALUATION_AND_CONTROL_2026.md",
      },
      {
        slug: "77-reliability-centered-maintenance-and-integrated-product-support",
        number: 77,
        title: "77 — Reliability-centered maintenance and integrated product support",
        filename: "77_RELIABILITY_CENTERED_MAINTENANCE_AND_INTEGRATED_PRODUCT_SUPPORT.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
    ],
  },
  S24: {
    source_id: "S24",
    title: "NIST SP 800-207 Zero Trust",
    url: "https://csrc.nist.gov/pubs/sp/800/207/final",
    source_type: "Security guidance",
    relevance: "Zero Trust Architecture",
    quality_signal: "Government primary",
    limitations: "Apply to system-specific threat model",
    audit: {
      status: "Targeted extraction",
      tools: "Exa; Firecrawl",
      extraction_extent: "Official NIST publication page/abstract reviewed.",
      limitations: "Apply to system-specific threat model",
    },
    domain_topics: ["Security Architecture", "Software & Enterprise Architecture"],
    summary:
      "Zero Trust Architecture. Extraction detail: Official NIST publication page/abstract reviewed.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Apply to system-specific threat model.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "82-assurance-cases-gsn-argument-engineering-and-evidence-quality",
        number: 82,
        title: "82 — Assurance cases, GSN argument engineering and evidence quality",
        filename: "82_ASSURANCE_CASES_GSN_ARGUMENT_ENGINEERING_AND_EVIDENCE_QUALITY.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S25: {
    source_id: "S25",
    title: "NIST SP 800-53",
    url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    source_type: "Security controls",
    relevance: "Security/privacy controls",
    quality_signal: "Government primary",
    limitations: "Tailor to scope",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering security/privacy controls. Essential context for Security Architecture.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Tailor to scope.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "85-configuration-management-baselines-digital-thread-and-product-data",
        number: 85,
        title: "85 — Configuration management, baselines, digital thread and product data",
        filename: "85_CONFIGURATION_MANAGEMENT_BASELINES_DIGITAL_THREAD_AND_PRODUCT_DATA.md",
      },
      {
        slug: "86-product-line-engineering-commonality-variability-and-platform-governance",
        number: 86,
        title: "86 — Product-line engineering: commonality, variability and platform governance",
        filename: "86_PRODUCT_LINE_ENGINEERING_COMMONALITY_VARIABILITY_AND_PLATFORM_GOVERNANCE.md",
      },
      {
        slug: "89-value-engineering-function-analysis-and-lifecycle-value-decisions",
        number: 89,
        title: "89 — Value engineering, function analysis and lifecycle-value decisions",
        filename: "89_VALUE_ENGINEERING_FUNCTION_ANALYSIS_AND_LIFECYCLE_VALUE_DECISIONS.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
      {
        slug: "92-sector-assurance-applicability-and-regulatory-evidence-chains",
        number: 92,
        title: "92 — Sector assurance applicability and regulatory evidence chains",
        filename: "92_SECTOR_ASSURANCE_APPLICABILITY_AND_REGULATORY_EVIDENCE_CHAINS.md",
      },
      {
        slug: "94-research-evidence-provenance-and-standard-version-control",
        number: 94,
        title: "94 — Research evidence, provenance and standard-version control",
        filename: "94_RESEARCH_EVIDENCE_PROVENANCE_AND_STANDARD_VERSION_CONTROL.md",
      },
    ],
  },
  S26: {
    source_id: "S26",
    title: "OWASP ASVS",
    url: "https://owasp.org/www-project-application-security-verification-standard/",
    source_type: "Security verification",
    relevance: "Application security requirements",
    quality_signal: "Community standard",
    limitations: "Check current release",
    domain_topics: [
      "Requirements Engineering",
      "Security Architecture",
      "Verification & Validation",
    ],
    summary:
      "Authoritative reference covering application security requirements. Essential context for Requirements Engineering, Security Architecture, Verification & Validation.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Check current release.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
      {
        slug: "90-data-platform-semantics-data-mesh-lakehouse-and-contract-governance",
        number: 90,
        title: "90 — Data-platform architecture: semantics, contracts, mesh and lakehouse choices",
        filename: "90_DATA_PLATFORM_SEMANTICS_DATA_MESH_LAKEHOUSE_AND_CONTRACT_GOVERNANCE.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
      {
        slug: "96-trade-studies-multi-criteria-decision-analysis-and-sensitivity",
        number: 96,
        title: "96 — Trade studies, multi-criteria decision analysis and sensitivity",
        filename: "96_TRADE_STUDIES_MULTI_CRITERIA_DECISION_ANALYSIS_AND_SENSITIVITY.md",
      },
    ],
  },
  S27: {
    source_id: "S27",
    title: "OWASP Top 10",
    url: "https://owasp.org/www-project-top-ten/",
    source_type: "Security guidance",
    relevance: "Common web application risks",
    quality_signal: "Community reference",
    limitations: "Awareness list not complete threat model",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering common web application risks. Essential context for Security Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Awareness list not complete threat model.",
    cited_in_articles: [
      {
        slug: "100-operational-reliability-objectives-sli-slo-error-budgets-and-mission-metrics",
        number: 100,
        title:
          "100 — Operational reliability objectives: SLI, SLO, error budgets and mission metrics",
        filename:
          "100_OPERATIONAL_RELIABILITY_OBJECTIVES_SLI_SLO_ERROR_BUDGETS_AND_MISSION_METRICS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "96-trade-studies-multi-criteria-decision-analysis-and-sensitivity",
        number: 96,
        title: "96 — Trade studies, multi-criteria decision analysis and sensitivity",
        filename: "96_TRADE_STUDIES_MULTI_CRITERIA_DECISION_ANALYSIS_AND_SENSITIVITY.md",
      },
      {
        slug: "97-technical-reviews-readiness-gates-entrance-and-success-criteria",
        number: 97,
        title: "97 — Technical reviews, readiness gates and evidence of maturity",
        filename: "97_TECHNICAL_REVIEWS_READINESS_GATES_ENTRANCE_AND_SUCCESS_CRITERIA.md",
      },
      {
        slug: "98-semp-technical-planning-imp-ims-and-engineering-execution-control",
        number: 98,
        title: "98 — SEMP, technical planning, IMP/IMS and engineering execution control",
        filename: "98_SEMP_TECHNICAL_PLANNING_IMP_IMS_AND_ENGINEERING_EXECUTION_CONTROL.md",
      },
      {
        slug: "99-architecture-evaluation-iso42030-atam-and-evidence-based-review",
        number: 99,
        title: "99 — Architecture evaluation: ISO 42030, ATAM and evidence-based review",
        filename: "99_ARCHITECTURE_EVALUATION_ISO42030_ATAM_AND_EVIDENCE_BASED_REVIEW.md",
      },
    ],
  },
  S28: {
    source_id: "S28",
    title: "OWASP API Security",
    url: "https://owasp.org/www-project-api-security/",
    source_type: "Security guidance",
    relevance: "API-specific risks",
    quality_signal: "Community reference",
    limitations: "Check current release",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering api-specific risks. Essential context for Security Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Check current release.",
    cited_in_articles: [
      {
        slug: "09-security-and-threat-modeling",
        number: 9,
        title: "09 — Security and threat modeling",
        filename: "09_SECURITY_AND_THREAT_MODELING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
    ],
  },
  S29: {
    source_id: "S29",
    title: "OpenTelemetry Documentation",
    url: "https://opentelemetry.io/docs/",
    source_type: "Technical documentation",
    relevance: "Observability instrumentation",
    quality_signal: "Open-source project documentation",
    limitations: "Versioned ecosystem",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering observability instrumentation. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Versioned ecosystem.",
    cited_in_articles: [
      {
        slug: "10-operations-observability-and-delivery",
        number: 10,
        title: "10 — Operations, observability and delivery",
        filename: "10_OPERATIONS_OBSERVABILITY_AND_DELIVERY.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S30: {
    source_id: "S30",
    title: "DORA",
    url: "https://dora.dev/",
    source_type: "Research/practice",
    relevance: "Software delivery and operational performance",
    quality_signal: "Research program",
    limitations: "Avoid metric quotas",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering software delivery and operational performance. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Avoid metric quotas.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "10-operations-observability-and-delivery",
        number: 10,
        title: "10 — Operations, observability and delivery",
        filename: "10_OPERATIONS_OBSERVABILITY_AND_DELIVERY.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
    ],
  },
  S31: {
    source_id: "S31",
    title: "ECIS 2025 Conway's Law Study",
    url: "https://aisel.aisnet.org/ecis2025/ent_system/ent_system/5",
    source_type: "Research",
    relevance: "Organizational coupling and modularity",
    quality_signal: "Academic research",
    limitations: "Interpret with study design/scope",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering organizational coupling and modularity. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Interpret with study design/scope.",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
      {
        slug: "11-product-impact-and-org-design",
        number: 11,
        title: "11 — Product impact and organizational design",
        filename: "11_PRODUCT_IMPACT_AND_ORG_DESIGN.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S32: {
    source_id: "S32",
    title: "Uber Service-Oriented Architecture",
    url: "https://www.uber.com/us/en/blog/service-oriented-architecture/",
    source_type: "Case study",
    relevance: "Service discovery/contracts/resilience",
    quality_signal: "First-hand practitioner",
    limitations: "Dated 2015; organization-specific",
    domain_topics: ["Software & Enterprise Architecture", "Data Architecture"],
    summary:
      "Authoritative reference covering service discovery/contracts/resilience. Essential context for Software & Enterprise Architecture, Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Dated 2015; organization-specific.",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
      {
        slug: "113-prognostics-health-management-rul-and-condition-based-decisions",
        number: 113,
        title:
          "113 — Prognostics and health management: RUL, uncertainty and maintenance decisions",
        filename: "113_PROGNOSTICS_HEALTH_MANAGEMENT_RUL_AND_CONDITION_BASED_DECISIONS.md",
      },
      {
        slug: "114-manufacturing-quality-special-process-control-and-electronic-parts-assurance",
        number: 114,
        title:
          "114 — Manufacturing quality, special-process control and electronic-parts assurance",
        filename:
          "114_MANUFACTURING_QUALITY_SPECIAL_PROCESS_CONTROL_AND_ELECTRONIC_PARTS_ASSURANCE.md",
      },
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "11-product-impact-and-org-design",
        number: 11,
        title: "11 — Product impact and organizational design",
        filename: "11_PRODUCT_IMPACT_AND_ORG_DESIGN.md",
      },
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "31-software-architecture-and-domain-design-deep-dive",
        number: 31,
        title: "31 — Software architecture and domain design: the deeper structure",
        filename: "31_SOFTWARE_ARCHITECTURE_AND_DOMAIN_DESIGN_DEEP_DIVE.md",
      },
    ],
  },
  S33: {
    source_id: "S33",
    title: "Adyen Accounting and Reporting Architecture",
    url: "https://www.adyen.com/knowledge-hub/design-to-duty-adyen-architecture-part2",
    source_type: "Case study",
    relevance: "Ledger correctness; sharding; durable queues",
    quality_signal: "First-hand practitioner",
    limitations: "Company-specific payment design",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering ledger correctness; sharding; durable queues. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Company-specific payment design.",
    cited_in_articles: [
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "116-systems-engineering-measurement-technical-performance-and-leading-indicators",
        number: 116,
        title:
          "116 — Systems engineering measurement, technical performance and leading indicators",
        filename:
          "116_SYSTEMS_ENGINEERING_MEASUREMENT_TECHNICAL_PERFORMANCE_AND_LEADING_INDICATORS.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S34: {
    source_id: "S34",
    title: "Grammarly Linkerd Mystery",
    url: "https://www.grammarly.com/blog/engineering/the-great-linkerd-mystery/",
    source_type: "Incident case",
    relevance: "DNS/conntrack/hidden network limits",
    quality_signal: "First-hand practitioner",
    limitations: "AWS infrastructure-specific",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering dns/conntrack/hidden network limits. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: AWS infrastructure-specific.",
    cited_in_articles: [
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "45-architecture-antipatterns-and-failure-modes",
        number: 45,
        title: "45 — Architecture anti-patterns and recurring failure modes",
        filename: "45_ARCHITECTURE_ANTIPATTERNS_AND_FAILURE_MODES.md",
      },
    ],
  },
  S35: {
    source_id: "S35",
    title: "Faustino et al Stepwise Monolith Migration",
    url: "https://arxiv.org/abs/2201.07226",
    source_type: "Research paper",
    relevance: "Measured migration/performance trade-offs",
    quality_signal: "Academic preprint",
    limitations: "Single-system study",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering measured migration/performance trade-offs. Essential context for Systems Foundations.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Single-system study.",
    cited_in_articles: [
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
    ],
  },
  S36: {
    source_id: "S36",
    title: "Xiao et al Microservice Energy Trade-offs",
    url: "https://arxiv.org/abs/2501.14402",
    source_type: "Research paper",
    relevance: "Energy/performance/maintainability trade-offs",
    quality_signal: "Academic preprint",
    limitations: "Online Boutique experiment; load-dependent",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering energy/performance/maintainability trade-offs. Essential context for Systems Foundations.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Online Boutique experiment; load-dependent.",
    cited_in_articles: [
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S37: {
    source_id: "S37",
    title: "bol.com Historical Data Migration",
    url: "https://techlab.bol.com/en/blog/splitting-the-data-of-the-monolith-because-who-needs-to-sleep-anyway/",
    source_type: "Case study",
    relevance: "Live data migration and continuity",
    quality_signal: "First-hand practitioner",
    limitations: "Company-specific",
    domain_topics: ["Data Architecture"],
    summary:
      "Authoritative reference covering live data migration and continuity. Essential context for Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Company-specific.",
    cited_in_articles: [
      {
        slug: "12-real-world-case-studies",
        number: 12,
        title: "12 — Real-world case studies",
        filename: "12_REAL_WORLD_CASE_STUDIES.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "45-architecture-antipatterns-and-failure-modes",
        number: 45,
        title: "45 — Architecture anti-patterns and recurring failure modes",
        filename: "45_ARCHITECTURE_ANTIPATTERNS_AND_FAILURE_MODES.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
    ],
  },
  S38: {
    source_id: "S38",
    title: "AWS SAA Certification",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    source_type: "Certification",
    relevance: "AWS architecture associate",
    quality_signal: "Official issuer",
    limitations: "Price and requirements change",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering aws architecture associate. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Price and requirements change.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S39: {
    source_id: "S39",
    title: "AWS SAA-C03 Exam Guide",
    url: "https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.pdf",
    source_type: "Exam guide",
    relevance: "AWS associate objectives",
    quality_signal: "Official issuer",
    limitations: "Retrieved v1.1 dated 2026-10-29",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering aws associate objectives. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Retrieved v1.1 dated 2026-10-29.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S40: {
    source_id: "S40",
    title: "AWS SAP Certification",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
    source_type: "Certification",
    relevance: "Advanced AWS architecture",
    quality_signal: "Official issuer",
    limitations: "Current format/prerequisites to verify",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering advanced aws architecture. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Current format/prerequisites to verify.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S41: {
    source_id: "S41",
    title: "AWS SAP-C02 Exam Guide",
    url: "https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-professional-02/solutions-architect-professional-02.pdf",
    source_type: "Exam guide",
    relevance: "Professional AWS architecture objectives",
    quality_signal: "Official issuer",
    limitations: "Guide can change",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering professional aws architecture objectives. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Guide can change.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S42: {
    source_id: "S42",
    title: "Microsoft AZ-305 Study Guide",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305",
    source_type: "Exam guide",
    relevance: "Azure architecture objectives",
    quality_signal: "Official issuer",
    limitations: "Retrieved skills measured 2026-04-17",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering azure architecture objectives. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Retrieved skills measured 2026-04-17.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S43: {
    source_id: "S43",
    title: "Google Professional Cloud Architect",
    url: "https://cloud.google.com/learn/certification/cloud-architect",
    source_type: "Certification",
    relevance: "Google Cloud architecture credential",
    quality_signal: "Official issuer",
    limitations: "Fee/exam/validity can change",
    domain_topics: ["Software & Enterprise Architecture", "Cloud & SRE"],
    summary:
      "Authoritative reference covering google cloud architecture credential. Essential context for Software & Enterprise Architecture, Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Fee/exam/validity can change.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
    ],
  },
  S44: {
    source_id: "S44",
    title: "TOGAF Certification Portfolio",
    url: "https://www.opengroup.org/certifications/togaf-certification-portfolio",
    source_type: "Certification",
    relevance: "Enterprise architecture method",
    quality_signal: "Official issuer",
    limitations: "Includes 10th edition and legacy 9.2 paths",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering enterprise architecture method. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Includes 10th edition and legacy 9.2 paths.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S45: {
    source_id: "S45",
    title: "INCOSE SEP Certification",
    url: "https://www.incose.org/certification/start-your-certification/",
    source_type: "Certification",
    relevance: "ASEP/CSEP/ESEP",
    quality_signal: "Official issuer",
    limitations: "Verify current detailed requirements",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering asep/csep/esep. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Verify current detailed requirements.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S46: {
    source_id: "S46",
    title: "INCOSE Exam Information",
    url: "https://www.incose.org/certification/start-your-certification/taking-the-exam/",
    source_type: "Exam guidance",
    relevance: "Systems engineering exam",
    quality_signal: "Official issuer",
    limitations: "Access blocked in fetch; verify live",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering systems engineering exam. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Access blocked in fetch; verify live.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S47: {
    source_id: "S47",
    title: "CNCF Training and Certification",
    url: "https://www.cncf.io/training/",
    source_type: "Certification/course catalogue",
    relevance: "Cloud-native credentials",
    quality_signal: "Official issuer",
    limitations: "Paths and renewal can change",
    domain_topics: ["Cloud & SRE"],
    summary:
      "Authoritative reference covering cloud-native credentials. Essential context for Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Cloud & SRE. Note operational limitations: Paths and renewal can change.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S48: {
    source_id: "S48",
    title: "Martin Fowler Microservices",
    url: "https://martinfowler.com/articles/microservices.html",
    source_type: "Practitioner essay",
    relevance: "Microservices characteristics and trade-offs",
    quality_signal: "Practitioner commentary",
    limitations: "Not universal migration prescription",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering microservices characteristics and trade-offs. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Not universal migration prescription.",
    cited_in_articles: [
      {
        slug: "15-learning-roadmap",
        number: 15,
        title: "15 — 24-week learning roadmap",
        filename: "15_LEARNING_ROADMAP.md",
      },
    ],
  },
  S49: {
    source_id: "S49",
    title: "HLD Handbook",
    url: "https://hld.handbook.academy/",
    source_type: "Open curriculum",
    relevance: "High-level design modules/exercises",
    quality_signal: "Open learning resource",
    limitations: "Self-described scale not independently audited",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering high-level design modules/exercises. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Self-described scale not independently audited.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S50: {
    source_id: "S50",
    title: "UQ Software Architecture Course Repository",
    url: "https://github.com/CSSE6400/software-architecture",
    source_type: "Course repository",
    relevance: "Course notes; practicals; assignments; references",
    quality_signal: "University artifact",
    limitations: "Check current activity",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering course notes; practicals; assignments; references. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Check current activity.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
    ],
  },
  S51: {
    source_id: "S51",
    title: "Ameller and Franch Quality Attributes and Decisions",
    url: "https://arxiv.org/abs/1206.5166",
    source_type: "Research paper",
    relevance: "Linking quality/constraints to architecture decisions",
    quality_signal: "Academic preprint",
    limitations: "Method proposal not a standard",
    domain_topics: ["Software & Enterprise Architecture", "Decision Analysis & Trade Studies"],
    summary:
      "Authoritative reference covering linking quality/constraints to architecture decisions. Essential context for Software & Enterprise Architecture, Decision Analysis & Trade Studies.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Method proposal not a standard.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S52: {
    source_id: "S52",
    title: "Blatter et al Communication Structure and System Design",
    url: "https://doi.org/10.1109/reser.2013.13",
    source_type: "Research paper",
    relevance: "Conway's Law experimental pilot",
    quality_signal: "Academic research",
    limitations: "Authors report inconclusive results",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering conway's law experimental pilot. Essential context for Systems Foundations.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Authors report inconclusive results.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S53: {
    source_id: "S53",
    title: "NASA Systems Engineering Competency Model 2025",
    url: "https://www.nasa.gov/wp-content/uploads/2025/09/se-competency-model.pdf",
    source_type: "Government competency model",
    relevance: "Role competencies: system design, product realization, technical management",
    quality_signal: "Government primary",
    limitations: "PDF; verify version before using for formal assessment",
    domain_topics: ["Systems Engineering", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering role competencies: system design, product realization, technical management. Essential context for Systems Engineering, MBSE & Modeling.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: PDF; verify version before using for formal assessment.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S54: {
    source_id: "S54",
    title: "NASA Systems Engineering Handbook Rev 2 — NTRS",
    url: "https://ntrs.nasa.gov/api/citations/20170001761/downloads/20170001761.pdf",
    source_type: "Government handbook",
    relevance: "Lifecycle, design, product realization, technical management",
    quality_signal: "Government primary",
    limitations: "NASA context; not universal industry law",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering lifecycle, design, product realization, technical management. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA context; not universal industry law.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S55: {
    source_id: "S55",
    title: "NASA Common Technical Processes and SE Engine",
    url: "https://www.nasa.gov/reference/2-1-the-common-technical-processes-and-the-se-engine/",
    source_type: "Government guidance",
    relevance: "Iterative and recursive system design and realization",
    quality_signal: "Government primary",
    limitations: "NASA context",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering iterative and recursive system design and realization. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA context.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S56: {
    source_id: "S56",
    title: "NASA Requirements Management",
    url: "https://www.nasa.gov/reference/6-2-requirements-management/",
    source_type: "Government guidance",
    relevance: "Requirements hierarchy, traceability, baselines, changes",
    quality_signal: "Government primary",
    limitations: "NASA context",
    audit: {
      status: "Full fetch + targeted extraction",
      tools: "TinyFish; Firecrawl",
      extraction_extent:
        "Full HTML/targeted extraction of inputs, activities, traceability, changes and outputs.",
      limitations: "NASA context",
    },
    domain_topics: ["Systems Engineering", "Requirements Engineering"],
    summary:
      "Requirements hierarchy, traceability, baselines, changes. Extraction detail: Full HTML/targeted extraction of inputs, activities, traceability, changes and outputs.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA context.",
    cited_in_articles: [
      {
        slug: "63-requirements-engineering-formalization-and-evidence-chains",
        number: 63,
        title: "63 — Requirements engineering: formalization, traceability and evidence chains",
        filename: "63_REQUIREMENTS_ENGINEERING_FORMALIZATION_AND_EVIDENCE_CHAINS.md",
      },
    ],
  },
  S57: {
    source_id: "S57",
    title: "NASA Interface Management",
    url: "https://www.nasa.gov/reference/6-3-interface-management/",
    source_type: "Government guidance",
    relevance: "Interface process and ICD/IRD/IDD/ICP outputs",
    quality_signal: "Government primary",
    limitations: "NASA context",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "NASA interface management process page fetched.",
      limitations: "NASA context",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "Interface process and ICD/IRD/IDD/ICP outputs. Extraction detail: NASA interface management process page fetched.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA context.",
    cited_in_articles: [
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
    ],
  },
  S58: {
    source_id: "S58",
    title: "NASA V&V Plan Outline",
    url: "https://www.nasa.gov/reference/appendix-i-verification-and-validation-plan-outline/",
    source_type: "Government template",
    relevance: "V&V plans, qualification tests, verification matrices",
    quality_signal: "Government primary",
    limitations: "Template should be tailored",
    domain_topics: ["Systems Engineering", "Verification & Validation"],
    summary:
      "Authoritative reference covering v&v plans, qualification tests, verification matrices. Essential context for Systems Engineering, Verification & Validation.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Template should be tailored.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S59: {
    source_id: "S59",
    title: "NASA Technical Review Criteria Appendix G",
    url: "https://nodis.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7123_001D_&page_name=AppendixG",
    source_type: "Government standard/process",
    relevance: "SRR, PDR and other review entrance/success criteria",
    quality_signal: "Government primary",
    limitations: "NASA NPR context; check current revision",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering srr, pdr and other review entrance/success criteria. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA NPR context; check current revision.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S60: {
    source_id: "S60",
    title: "NASA Systems Engineering Competency Framework reference (INCOSE) ISECF",
    url: "https://www.incose.org/wp-content/uploads/legacy/professional-development-portal/isecf.pdf",
    source_type: "Professional competency framework",
    relevance: "Systems engineering competency areas",
    quality_signal: "Professional society",
    limitations: "Legacy PDF; verify current framework",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering systems engineering competency areas. Essential context for Systems Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Legacy PDF; verify current framework.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
    ],
  },
  S61: {
    source_id: "S61",
    title: "INCOSE Systems Engineering Experience Areas",
    url: "https://www.incose.org/certification/documenting-experience/",
    source_type: "Professional certification guidance",
    relevance: "Experience evidence across SE role areas",
    quality_signal: "Professional society primary",
    limitations: "Certification process can change",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering experience evidence across se role areas. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Certification process can change.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S62: {
    source_id: "S62",
    title: "INCOSE Systems Engineering Standards",
    url: "https://www.incose.org/about-systems-engineering/standards-policies/",
    source_type: "Standards index",
    relevance: "ISO/IEC/IEEE and domain standards inventory",
    quality_signal: "Professional society primary",
    limitations: "Index changes; verify live editions",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering iso/iec/ieee and domain standards inventory. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Index changes; verify live editions.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S63: {
    source_id: "S63",
    title: "SEBoK Systems Engineering and Management",
    url: "https://sebokwiki.org/wiki/Systems_Engineering_and_Management",
    source_type: "Body of knowledge",
    relevance: "Lifecycle concepts and process knowledge areas",
    quality_signal: "Professional body of knowledge",
    limitations: "Living wiki; note revision date",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering lifecycle concepts and process knowledge areas. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Living wiki; note revision date.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S64: {
    source_id: "S64",
    title: "SEBoK MBSE",
    url: "https://sebokwiki.org/wiki/Model-Based_Systems_Engineering_(MBSE)",
    source_type: "Body of knowledge",
    relevance: "MBSE principles, workflow, model quality",
    quality_signal: "Professional body of knowledge",
    limitations: "Living wiki; note revision date",
    domain_topics: ["Systems Engineering", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering mbse principles, workflow, model quality. Essential context for Systems Engineering, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Living wiki; note revision date.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S65: {
    source_id: "S65",
    title: "SEBoK Systems Engineering Quality Attributes",
    url: "https://sebokwiki.org/wiki/Systems_Engineering_and_Quality_Attributes",
    source_type: "Body of knowledge",
    relevance: "Safety, reliability, security, resilience, HSI and specialty engineering",
    quality_signal: "Professional body of knowledge",
    limitations:
      "Living wiki; note revision date; Also referred to as INCOSE systems safety/reliability quality attributes in the duplicate lead; see S65 canonical record.",
    domain_topics: [
      "Systems Engineering",
      "Safety & Hazard Analysis",
      "Reliability & Dependability",
      "Security Architecture",
    ],
    summary:
      "Authoritative reference covering safety, reliability, security, resilience, hsi and specialty engineering. Essential context for Systems Engineering, Safety & Hazard Analysis, Reliability & Dependability, Security Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Living wiki; note revision date; Also referred to as INCOSE systems safety/reliability quality attributes in the duplicate lead; see S65 canonical record..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "09-security-and-threat-modeling",
        number: 9,
        title: "09 — Security and threat modeling",
        filename: "09_SECURITY_AND_THREAT_MODELING.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
    ],
  },
  S66: {
    source_id: "S66",
    title: "SEBoK Systems of Systems",
    url: "https://sebokwiki.org/wiki/Systems%5Fof%5FSystems%5F%28SoS%29",
    source_type: "Body of knowledge",
    relevance: "System-of-systems engineering",
    quality_signal: "Professional body of knowledge",
    limitations: "Living wiki; note revision date",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering system-of-systems engineering. Essential context for Systems Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Living wiki; note revision date.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S67: {
    source_id: "S67",
    title: "OMG SysML v2 Specification Overview",
    url: "https://www.omg.org/sysml/sysmlv2/",
    source_type: "Official specification overview",
    relevance: "SysML v2 semantics, API, scope and intended use",
    quality_signal: "Standards organization primary",
    limitations: "Check current specification and implementation conformance",
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Authoritative reference covering sysml v2 semantics, api, scope and intended use. Essential context for MBSE & Modeling.",
    takeaways:
      "Treat as normative baseline for MBSE & Modeling. Note operational limitations: Check current specification and implementation conformance.",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
    ],
  },
  S68: {
    source_id: "S68",
    title: "OMG SysML v2 Tools Listing",
    url: "https://www.omg.org/sysml/sysmlv2/sysml-tool/",
    source_type: "Official tool catalogue",
    relevance: "SysML v2 tools and implementations",
    quality_signal: "Standards organization catalogue",
    limitations: "Vendor claims require independent evaluation",
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Authoritative reference covering sysml v2 tools and implementations. Essential context for MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Vendor claims require independent evaluation.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S69: {
    source_id: "S69",
    title: "MIT 16.842 Fundamentals of Systems Engineering",
    url: "https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/",
    source_type: "University course",
    relevance: "Lifecycle, requirements, architecture, trades, MBSE, integration, V&V",
    quality_signal: "University primary",
    limitations: "Course is from Fall 2015",
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "MBSE & Modeling",
      "Software & Enterprise Architecture",
    ],
    summary:
      "Authoritative reference covering lifecycle, requirements, architecture, trades, mbse, integration, v&v. Essential context for Systems Engineering, Requirements Engineering, MBSE & Modeling, Software & Enterprise Architecture.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Course is from Fall 2015.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S70: {
    source_id: "S70",
    title: "MIT 16.842 Syllabus",
    url: "https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/pages/syllabus/",
    source_type: "University syllabus",
    relevance: "Assessments, design competition and course structure",
    quality_signal: "University primary",
    limitations: "Historical course offering",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering assessments, design competition and course structure. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Historical course offering.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S71: {
    source_id: "S71",
    title: "MIT 16.842 Lecture Notes",
    url: "https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/pages/lecture-notes/",
    source_type: "University course notes",
    relevance: "Lecture sequence and topic map",
    quality_signal: "University primary",
    limitations: "Download and check individual materials/licensing",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering lecture sequence and topic map. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Download and check individual materials/licensing.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S72: {
    source_id: "S72",
    title: "University of Virginia Systems Engineering Roles",
    url: "https://engineering.virginia.edu/offices-programs/center-engineering-career-development/career-development-systems-engineering-job-titles-and-job-descriptions",
    source_type: "University career guide",
    relevance: "Role examples including SE I, integration, requirements, V&V",
    quality_signal: "University guidance",
    limitations:
      "Role descriptions vary by employer; Also covers Systems Engineer I, Integration Engineer, Requirements Analyst, V&V, MBSE, lead/architect, reliability and control-system role examples; user-supplied duplicate retained in source alias notes.",
    domain_topics: ["Systems Engineering", "Requirements Engineering", "Verification & Validation"],
    summary:
      "Authoritative reference covering role examples including se i, integration, requirements, v&v. Essential context for Systems Engineering, Requirements Engineering, Verification & Validation.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Role descriptions vary by employer; Also covers Systems Engineer I, Integration Engineer, Requirements Analyst, V&V, MBSE, lead/architect, reliability and control-system role examples; user-supplied duplicate retained in source alias notes..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S73: {
    source_id: "S73",
    title: "ISA Safety Instrumented Systems Lifecycle Course",
    url: "https://www.isa.org/training/course-description/ec50",
    source_type: "Professional training",
    relevance: "IEC 61511, SIL, LOPA, SIS lifecycle, FAT/SAT",
    quality_signal: "Professional society primary",
    limitations: "Training course not a standard; check availability",
    domain_topics: ["Safety & Hazard Analysis", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering iec 61511, sil, lopa, sis lifecycle, fat/sat. Essential context for Safety & Hazard Analysis, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Safety & Hazard Analysis. Note operational limitations: Training course not a standard; check availability.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S75: {
    source_id: "S75",
    title: "Reliability and Maintainability Engineering Guidebook (DoW)",
    url: "https://www.cto.mil/wp-content/uploads/2025/12/RM-BoK-2025-12-10-Cleared.pdf",
    source_type: "Government guidebook",
    relevance: "RAM, FRACAS, FMEA/FTA, reliability allocation and lifecycle",
    quality_signal: "Government primary",
    limitations: "DoW context",
    domain_topics: ["Reliability & Dependability", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering ram, fracas, fmea/fta, reliability allocation and lifecycle. Essential context for Reliability & Dependability, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Reliability & Dependability. Note operational limitations: DoW context.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
    ],
  },
  S76: {
    source_id: "S76",
    title: "SECNAV Reliability and Maintainability Engineering Guidebook",
    url: "https://www.cto.mil/wp-content/uploads/2023/09/SECNAV-RME-2022.pdf",
    source_type: "Government guidebook",
    relevance: "Reliability engineering, FMECA, FRACAS, mission profile",
    quality_signal: "Government primary",
    limitations: "US Navy acquisition context",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "SECNAV R&M Guidebook PDF fetched.",
      limitations: "US Navy acquisition context",
    },
    domain_topics: ["Reliability & Dependability"],
    summary:
      "Reliability engineering, FMECA, FRACAS, mission profile. Extraction detail: SECNAV R&M Guidebook PDF fetched.",
    takeaways:
      "Treat as normative baseline for Reliability & Dependability. Note operational limitations: US Navy acquisition context.",
    cited_in_articles: [
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
      {
        slug: "77-reliability-centered-maintenance-and-integrated-product-support",
        number: 77,
        title: "77 — Reliability-centered maintenance and integrated product support",
        filename: "77_RELIABILITY_CENTERED_MAINTENANCE_AND_INTEGRATED_PRODUCT_SUPPORT.md",
      },
    ],
  },
  S77: {
    source_id: "S77",
    title: "System-Theoretic Process Analysis Handbook",
    url: "https://www.flighttestsafety.setp.org/images/STPA_Handbook.pdf",
    source_type: "Methods handbook",
    relevance: "STPA and control-structure hazard analysis",
    quality_signal: "Academic/practitioner handbook",
    limitations: "Check revision, intended use and domain fit",
    domain_topics: ["Safety & Hazard Analysis"],
    summary:
      "Authoritative reference covering stpa and control-structure hazard analysis. Essential context for Safety & Hazard Analysis.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Check revision, intended use and domain fit.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
    ],
  },
  S78: {
    source_id: "S78",
    title: "INCOSE International Symposium — Integration and Famous Failures",
    url: "https://incose.onlinelibrary.wiley.com/doi/10.1002/j.2334-5837.2019.00617.x",
    source_type: "Conference paper",
    relevance: "Integration contribution to famous system failures",
    quality_signal: "Peer-reviewed conference paper",
    limitations: "Paywall may apply",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering integration contribution to famous system failures. Essential context for Systems Engineering.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Paywall may apply.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S79: {
    source_id: "S79",
    title: "Fatal Software Failures in Spaceflight (2024)",
    url: "https://www.mdpi.com/2673-8392/4/2/61",
    source_type: "Research review",
    relevance: "Ariane 5 and software/system failure analysis",
    quality_signal: "Research article",
    limitations: "Use alongside original accident investigation reports",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering ariane 5 and software/system failure analysis. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Use alongside original accident investigation reports.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S80: {
    source_id: "S80",
    title: "NASA Cost Effectiveness Considerations",
    url: "https://www.nasa.gov/reference/2-5-cost-effectiveness-considerations/",
    source_type: "Government guidance",
    relevance: "Trade studies, lifecycle cost and cost-effectiveness",
    quality_signal: "Government primary",
    limitations: "NASA context",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering trade studies, lifecycle cost and cost-effectiveness. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA context.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S81: {
    source_id: "S81",
    title: "NASA Technical Performance Measures",
    url: "https://ntrs.nasa.gov/citations/20110014436",
    source_type: "Technical paper",
    relevance: "TPM, utility analysis and dissimilar-attribute trade-offs",
    quality_signal: "NASA technical paper",
    limitations: "Method choice must fit project context",
    domain_topics: ["Systems Engineering", "Decision Analysis & Trade Studies"],
    summary:
      "Authoritative reference covering tpm, utility analysis and dissimilar-attribute trade-offs. Essential context for Systems Engineering, Decision Analysis & Trade Studies.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Method choice must fit project context.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "06-decision-method-and-tradeoffs",
        number: 6,
        title: "06 — Decision method and trade-offs",
        filename: "06_DECISION_METHOD_AND_TRADEOFFS.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
    ],
  },
  S82: {
    source_id: "S82",
    title: "Awesome Lists Manifesto",
    url: "https://github.com/sindresorhus/awesome/blob/main/awesome.md",
    source_type: "Curation guideline",
    relevance: "Curated recommendation, scope, rationale and list quality",
    quality_signal: "Community primary",
    limitations: "Use as editorial inspiration, not technical authority",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering curated recommendation, scope, rationale and list quality. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Use as editorial inspiration, not technical authority.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S83: {
    source_id: "S83",
    title: "Awesome List Contribution Guide",
    url: "https://github.com/sindresorhus/awesome/blob/main/contributing.md",
    source_type: "Contribution policy",
    relevance: "Community contribution workflow",
    quality_signal: "Community primary",
    limitations: "Repository contribution rules may change",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering community contribution workflow. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Repository contribution rules may change.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S84: {
    source_id: "S84",
    title: "Awesome Design Systems",
    url: "https://github.com/klaufel/awesome-design-systems",
    source_type: "Curated resource catalogue",
    relevance: "Example of topical resource taxonomy",
    quality_signal: "Community curated list",
    limitations: "Different subject domain; use information architecture only",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering example of topical resource taxonomy. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Different subject domain; use information architecture only.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S85: {
    source_id: "S85",
    title: "FMHY",
    url: "https://fmhy.net/",
    source_type: "Curated resource portal",
    relevance: "Category browsing, beginner guide, updates and resource discovery",
    quality_signal: "Community curated portal",
    limitations: "Topic-specific content is not copied into this project",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering category browsing, beginner guide, updates and resource discovery. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Topic-specific content is not copied into this project.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S86: {
    source_id: "S86",
    title: "FMHY Beginner Guide",
    url: "https://fmhy.net/beginners-guide",
    source_type: "Onboarding example",
    relevance: "Beginner onboarding, FAQs and safe-use framing",
    quality_signal: "Community primary",
    limitations: "Use only as UX pattern reference",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering beginner onboarding, faqs and safe-use framing. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Use only as UX pattern reference.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S87: {
    source_id: "S87",
    title: "FMHY Contribution Guide",
    url: "https://fmhy.net/other/contributing",
    source_type: "Editorial/contribution policy",
    relevance: "Review, test, report and contribution workflow",
    quality_signal: "Community primary",
    limitations: "Use only as governance pattern reference",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering review, test, report and contribution workflow. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Use only as governance pattern reference.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S88: {
    source_id: "S88",
    title: "FMHY November 2026 Updates",
    url: "https://fmhy.net/posts/nov-2026",
    source_type: "Change-log example",
    relevance: "Monthly changelog, additions/removals, category revision",
    quality_signal: "Community primary",
    limitations: "Snapshot dated Nov 2026",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering monthly changelog, additions/removals, category revision. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Snapshot dated Nov 2026.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S89: {
    source_id: "S89",
    title: "The Four Agreements — Official Author Page",
    url: "https://www.miguelruiz.com/the-four-agreements/",
    source_type: "Book/author resource",
    relevance: "Optional communication/personal reflection",
    quality_signal: "Author primary",
    limitations: "Not an engineering method or standard",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering optional communication/personal reflection. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Not an engineering method or standard.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S90: {
    source_id: "S90",
    title: "Systemantics — bibliographic record",
    url: "https://books.google.com/books/about/Systemantics.html?hl=en&id=8dkaAAAAMAAJ",
    source_type: "Book/bibliography",
    relevance: "Critical reflection on designed systems and failure",
    quality_signal: "Bibliographic record",
    limitations: "Satirical/aphoristic; not normative engineering law",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering critical reflection on designed systems and failure. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Satirical/aphoristic; not normative engineering law.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S91: {
    source_id: "S91",
    title: "Brian Douglas — Control Systems Tutorials",
    url: "https://www.youtube.com/@BrianBDouglas",
    source_type: "Video learning resource",
    relevance: "Control theory, feedback and control engineering explanations",
    quality_signal: "Practitioner learning resource",
    limitations: "Pair with mathematics, labs and standards",
    domain_topics: ["Systems Thinking"],
    summary:
      "Authoritative reference covering control theory, feedback and control engineering explanations. Essential context for Systems Thinking.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Pair with mathematics, labs and standards.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S92: {
    source_id: "S92",
    title: "NASA Systems Engineering Overview (SEH 2.0)",
    url: "https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/",
    source_type: "Government guidance",
    relevance: "Definition, boundaries, system purpose and lifecycle",
    quality_signal: "Government primary",
    limitations: "NASA context",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering definition, boundaries, system purpose and lifecycle. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: NASA context.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S93: {
    source_id: "S93",
    title: "Systems Engineering Guidebook 2026 — DoW",
    url: "https://www.cto.mil/wp-content/uploads/2026/09/SE-Guidebook-2026.pdf",
    source_type: "Government guidebook",
    relevance:
      "Reviews, design considerations, technical management, agile and digital engineering",
    quality_signal: "Government primary",
    limitations: "Domain/agency context; confirm governing policy",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering reviews, design considerations, technical management, agile and digital engineering. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Domain/agency context; confirm governing policy.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "62-mission-engineering-mission-architectures-and-operational-analysis",
        number: 62,
        title: "62 — Mission engineering, mission architecture and operational analysis",
        filename: "62_MISSION_ENGINEERING_MISSION_ARCHITECTURES_AND_OPERATIONAL_ANALYSIS.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "92-sector-assurance-applicability-and-regulatory-evidence-chains",
        number: 92,
        title: "92 — Sector assurance applicability and regulatory evidence chains",
        filename: "92_SECTOR_ASSURANCE_APPLICABILITY_AND_REGULATORY_EVIDENCE_CHAINS.md",
      },
      {
        slug: "94-research-evidence-provenance-and-standard-version-control",
        number: 94,
        title: "94 — Research evidence, provenance and standard-version control",
        filename: "94_RESEARCH_EVIDENCE_PROVENANCE_AND_STANDARD_VERSION_CONTROL.md",
      },
    ],
  },
  S94: {
    source_id: "S94",
    title: "Systems of Systems Engineering Guidebook 2026 — DoW",
    url: "https://www.cto.mil/wp-content/uploads/2026/10/SoS-Engineering-2026.pdf",
    source_type: "Government guidebook",
    relevance: "SoS governance, autonomy and integration",
    quality_signal: "Government primary",
    limitations: "DoW context",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering sos governance, autonomy and integration. Essential context for Systems Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: DoW context.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "43-system-of-systems-interoperability-and-governance",
        number: 43,
        title: "43 — System of systems, interoperability and federation",
        filename: "43_SYSTEM_OF_SYSTEMS_INTEROPERABILITY_AND_GOVERNANCE.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "92-sector-assurance-applicability-and-regulatory-evidence-chains",
        number: 92,
        title: "92 — Sector assurance applicability and regulatory evidence chains",
        filename: "92_SECTOR_ASSURANCE_APPLICABILITY_AND_REGULATORY_EVIDENCE_CHAINS.md",
      },
      {
        slug: "94-research-evidence-provenance-and-standard-version-control",
        number: 94,
        title: "94 — Research evidence, provenance and standard-version control",
        filename: "94_RESEARCH_EVIDENCE_PROVENANCE_AND_STANDARD_VERSION_CONTROL.md",
      },
    ],
  },
  S95: {
    source_id: "S95",
    title: "NASA Systems Engineering Experience: Lessons from JWST",
    url: "https://ntrs.nasa.gov/api/citations/20250005920/downloads/26_011208_1.pdf",
    source_type: "Conference/technical paper",
    relevance: "TPM and margin management lessons from JWST",
    quality_signal: "NASA technical paper",
    limitations: "Mission-specific experience report",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering tpm and margin management lessons from jwst. Essential context for Systems Engineering.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Mission-specific experience report.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S97: {
    source_id: "S97",
    title: "Starting from Scratch: System Design, Lesson 1",
    url: "https://medium.com/@priyasrivastava18official/starting-from-scratch-system-design-lesson-1-2fec913f6eac",
    source_type: "Article / tutorial",
    relevance: "User-provided introductory system-design series lead",
    quality_signal: "User-provided URL; not independently reviewed in this pass",
    limitations:
      "Check availability and technical depth; treat as supplementary practitioner material",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering user-provided introductory system-design series lead. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Check availability and technical depth; treat as supplementary practitioner material.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S98: {
    source_id: "S98",
    title: "System Design From Scratch — O’Reilly",
    url: "https://www.oreilly.com/library/view/system-design-from/0642572384012/",
    source_type: "Book / publisher catalog",
    relevance: "System design book/resource lead",
    quality_signal: "Publisher listing; bibliographic lead",
    limitations:
      "Likely access-controlled/purchased; inspect current edition, author, contents and licensing before assigning; not an open textbook",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering system design book/resource lead. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Likely access-controlled/purchased; inspect current edition, author, contents and licensing before assigning; not an open textbook.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S99: {
    source_id: "S99",
    title: "The Need for Systems Engineering — Coursera (canonical course)",
    url: "https://www.coursera.org/learn/need-for-systems-engineering",
    source_type: "Online course",
    relevance: "Beginner introduction to SE, lifecycle, systems thinking and requirements",
    quality_signal:
      "Course page extracted live; University of Colorado Boulder; five modules; 9 assignments; page showed “Enroll for free” on 2026-11-05",
    limitations:
      "Free enrollment does not guarantee free certificate or all graded access; confirm platform terms at enrollment; course content may change",
    domain_topics: [
      "Systems Engineering",
      "Systems Thinking",
      "Requirements Engineering",
      "Product Support & Lifecycle",
    ],
    summary:
      "Authoritative reference covering beginner introduction to se, lifecycle, systems thinking and requirements. Essential context for Systems Engineering, Systems Thinking, Requirements Engineering, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Free enrollment does not guarantee free certificate or all graded access; confirm platform terms at enrollment; course content may change.",
    cited_in_articles: [
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
    ],
  },
  S100: {
    source_id: "S100",
    title: "What Is Systems Engineering? — freeCodeCamp",
    url: "https://www.freecodecamp.org/news/what-is-systems-engineering/",
    source_type: "Article / beginner guide",
    relevance: "Beginner explanation of systems, lifecycle and software relevance",
    quality_signal: "Article extracted live",
    limitations:
      "Secondary educational explainer; verify claims against NASA/SEBoK/INCOSE before treating as normative",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering beginner explanation of systems, lifecycle and software relevance. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Secondary educational explainer; verify claims against NASA/SEBoK/INCOSE before treating as normative.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
    ],
  },
  S101: {
    source_id: "S101",
    title: "Best Practices for Traceability in Systems Engineering — PTC",
    url: "https://www.ptc.com/en/resources/application-lifecycle-management/report/best-practices-traceability-systems-engineering",
    source_type: "Vendor report / gated resource",
    relevance: "Requirements traceability and product lifecycle management",
    quality_signal: "Live landing page; PTC content",
    limitations:
      "Lead form/gated experience appeared; vendor perspective, product-led; pair with NASA requirements management and ISO/IEC/IEEE 29148",
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "Product Support & Lifecycle",
    ],
    summary:
      "Authoritative reference covering requirements traceability and product lifecycle management. Essential context for Systems Engineering, Requirements Engineering, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Lead form/gated experience appeared; vendor perspective, product-led; pair with NASA requirements management and ISO/IEC/IEEE 29148.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S102: {
    source_id: "S102",
    title: "Aircraft Systems Engineering — MIT OCW 16.885 guide PDF",
    url: "https://ocw.mit.edu/courses/16-885j-aircraft-systems-engineering-fall-2005/6128a102c1a9b6dbd30f2fb18c12aa64_sefguide_01_01.pdf",
    source_type: "Course guide / PDF",
    relevance: "Aircraft system engineering course resource and aerospace context",
    quality_signal: "User-provided MIT OCW asset URL",
    limitations:
      "Course-specific and historical; use alongside current systems engineering standards and more recent MIT 16.842",
    domain_topics: ["Systems Engineering", "Distributed Systems", "Regulated Sector Assurance"],
    summary:
      "Authoritative reference covering aircraft system engineering course resource and aerospace context. Essential context for Systems Engineering, Distributed Systems, Regulated Sector Assurance.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Course-specific and historical; use alongside current systems engineering standards and more recent MIT 16.842.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "05-architecture-styles-and-patterns",
        number: 5,
        title: "05 — Architecture styles and patterns",
        filename: "05_ARCHITECTURE_STYLES_AND_PATTERNS.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S103: {
    source_id: "S103",
    title: "MIT 16.842 YouTube playlist",
    url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP60jIMmB53zl6awCKMnABhYx",
    source_type: "Video playlist",
    relevance: "MIT lecture videos for Fundamentals of Systems Engineering",
    quality_signal: "Playlist identity corroborated by search; linked from user-provided video URL",
    limitations:
      "Some sessions may not have recordings; use MIT OCW course page for authoritative syllabus/material links",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering mit lecture videos for fundamentals of systems engineering. Essential context for Systems Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Some sessions may not have recordings; use MIT OCW course page for authoritative syllabus/material links.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S104: {
    source_id: "S104",
    title: "Private Dropbox systems-engineering collection (user supplied)",
    url: "https://www.dropbox.com/scl/fo/0zil2ndp7ari8qjiyp148/ACD5z_9kbjV55RNdLKX8UO8?rlkey=nzw721yggsoprxhz08opwyxx1&e=1&dl=0",
    source_type: "Private user collection / folder",
    relevance: "Potential user-curated source collection for later site ingestion",
    quality_signal: "URL supplied by user; content not inspected",
    limitations:
      "Private/authenticated link; not indexed or verified; inspect files individually before importing; respect licenses and confidentiality",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering potential user-curated source collection for later site ingestion. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Private/authenticated link; not indexed or verified; inspect files individually before importing; respect licenses and confidentiality.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S105: {
    source_id: "S105",
    title: "Awesome Lists directory — Calvin Jeng",
    url: "https://awesomelists.calvinjeng.io/#/",
    source_type: "Curated directory / resource index",
    relevance: "Discovery and navigation pattern for topic-specific curated lists",
    quality_signal:
      "Rendered page inspected; category browse/search UI; powered by sindresorhus/awesome",
    limitations:
      "Directory is a discovery layer; review each underlying list independently and check maintenance/quality",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering discovery and navigation pattern for topic-specific curated lists. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Directory is a discovery layer; review each underlying list independently and check maintenance/quality.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S106: {
    source_id: "S106",
    title: "Awesome — sindresorhus",
    url: "https://github.com/sindresorhus/awesome",
    source_type: "GitHub curated index / governance model",
    relevance: "Curated resource list structure, editorial rules, scope and contribution quality",
    quality_signal: "GitHub repository and manifesto/contribution files inspected",
    limitations:
      "Do not bulk-copy the index; use its curation principles; repo showed PR pause notice at inspection",
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Authoritative reference covering curated resource list structure, editorial rules, scope and contribution quality. Essential context for MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Do not bulk-copy the index; use its curation principles; repo showed PR pause notice at inspection.",
    cited_in_articles: [
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S107: {
    source_id: "S107",
    title: "Awesome Design Systems entry in AwesomeLists",
    url: "https://awesomelists.calvinjeng.io/#/klaufel/awesome-design-systems",
    source_type: "Directory entry",
    relevance: "Example of how a directory indexes a topic-specific list",
    quality_signal: "Rendered entry inspected; links to GitHub source",
    limitations: "Underlying resource list must be evaluated on its own merits",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering example of how a directory indexes a topic-specific list. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Underlying resource list must be evaluated on its own merits.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S108: {
    source_id: "S108",
    title: "NASA Systems Engineering Handbook — landing page",
    url: "https://www.nasa.gov/reference/systems-engineering-handbook/",
    source_type: "Government handbook index",
    relevance:
      "Handbook navigation: fundamentals, NASA lifecycle, system design, product realization, technical management",
    quality_signal:
      "Current page URL resolves but extraction returned substantial global-site boilerplate; chapter structure corroborated by NASA NTRS handbook",
    limitations:
      "Use NTRS Handbook Rev 2 PDF and direct NASA chapter pages as primary study content",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering handbook navigation: fundamentals, nasa lifecycle, system design, product realization, technical management. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Use NTRS Handbook Rev 2 PDF and direct NASA chapter pages as primary study content.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S109: {
    source_id: "S109",
    title: "INCOSE Systems Engineering Body of Knowledge — official landing page",
    url: "https://www.incose.org/resources-publications/technical-publications/systems-engineering-body-of-knowledge/",
    source_type: "Professional body-of-knowledge index",
    relevance: "Authoritative map to SEBoK, GRCSE and systems-engineering knowledge references",
    quality_signal:
      "Current official INCOSE page extracted live; SEBoK described as moderated living wiki jointly managed by INCOSE, IEEE-CS and SERC",
    limitations:
      "SEBoK itself is a guide/reference map, not a single exhaustive textbook; follow references to primary sources",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering authoritative map to sebok, grcse and systems-engineering knowledge references. Essential context for Systems Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: SEBoK itself is a guide/reference map, not a single exhaustive textbook; follow references to primary sources.",
    cited_in_articles: [
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
    ],
  },
  S110: {
    source_id: "S110",
    title: "SEBoK — Systems Engineering Overview",
    url: "https://sebokwiki.org/wiki/Systems_Engineering_Overview",
    source_type: "Body-of-knowledge article",
    relevance: "Definition, system context, engineered systems and lifecycle context",
    quality_signal: "SEBoK primary community-maintained knowledge resource inspected",
    limitations: "Living wiki; record revision date and article references",
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering definition, system context, engineered systems and lifecycle context. Essential context for Systems Engineering, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Living wiki; record revision date and article references.",
    cited_in_articles: [
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
    ],
  },
  S111: {
    source_id: "S111",
    title: "MIT 16.842 — Class Videos",
    url: "https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/video_galleries/class-videos/",
    source_type: "University video lectures",
    relevance:
      "Recorded sessions on requirements, modeling, architecture, trades, MBSE, integration, V&V, operations, lifecycle",
    quality_signal: "MIT OCW official page discovered",
    limitations: "The page notes no recordings for sessions 1 and 12",
    domain_topics: [
      "Requirements Engineering",
      "MBSE & Modeling",
      "Software & Enterprise Architecture",
      "Verification & Validation",
    ],
    summary:
      "Authoritative reference covering recorded sessions on requirements, modeling, architecture, trades, mbse, integration, v&v, operations, lifecycle. Essential context for Requirements Engineering, MBSE & Modeling, Software & Enterprise Architecture, Verification & Validation.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: The page notes no recordings for sessions 1 and 12.",
    cited_in_articles: [
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "05-architecture-styles-and-patterns",
        number: 5,
        title: "05 — Architecture styles and patterns",
        filename: "05_ARCHITECTURE_STYLES_AND_PATTERNS.md",
      },
      {
        slug: "06-decision-method-and-tradeoffs",
        number: 6,
        title: "06 — Decision method and trade-offs",
        filename: "06_DECISION_METHOD_AND_TRADEOFFS.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S112: {
    source_id: "S112",
    title: "NASA NESC Academy — Getting Started Using MBSE",
    url: "https://nescacademy.nasa.gov/video/29e48e45cda7432eb1577b5c159bbf6f1d",
    source_type: "Government video / training",
    relevance: "MBSE adoption, model-with-purpose, sizing scope, constraints and planning",
    quality_signal: "NASA NESC Academy page extracted live; slides and related videos linked",
    limitations: "NASA project context; useful to prevent all-or-nothing MBSE adoption assumptions",
    domain_topics: ["Systems Engineering", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering mbse adoption, model-with-purpose, sizing scope, constraints and planning. Essential context for Systems Engineering, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA project context; useful to prevent all-or-nothing MBSE adoption assumptions.",
    cited_in_articles: [
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
    ],
  },
  S113: {
    source_id: "S113",
    title: "Systems Engineering 101 — School of Systems Engineering",
    url: "https://www.schoolofsystemsengineering.com/se-101",
    source_type: "Professional course",
    relevance:
      "Introductory SE pathway, role orientation, ConOps, requirements, architecture and INCOSE route",
    quality_signal: "Course page extracted live; says 8–10 hours, self-paced, paid enrol link",
    limitations:
      "Commercial course; validate instructor credentials, exact price and current cohort/access before recommending",
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "Software & Enterprise Architecture",
    ],
    summary:
      "Authoritative reference covering introductory se pathway, role orientation, conops, requirements, architecture and incose route. Essential context for Systems Engineering, Requirements Engineering, Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Commercial course; validate instructor credentials, exact price and current cohort/access before recommending.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "05-architecture-styles-and-patterns",
        number: 5,
        title: "05 — Architecture styles and patterns",
        filename: "05_ARCHITECTURE_STYLES_AND_PATTERNS.md",
      },
      {
        slug: "06-decision-method-and-tradeoffs",
        number: 6,
        title: "06 — Decision method and trade-offs",
        filename: "06_DECISION_METHOD_AND_TRADEOFFS.md",
      },
    ],
  },
  S114: {
    source_id: "S114",
    title: "Systems Engineering 101 — Jama Software webinar recap",
    url: "https://www.jamasoftware.com/blog/webinar-recap-systems-engineering-101-building-a-strong-foundation-for-your-career/",
    source_type: "Vendor webinar/article",
    relevance: "Systems engineering career foundation and requirements traceability context",
    quality_signal: "User-supplied URL; not yet independently extracted in latest pass",
    limitations: "Vendor perspective; pair with NASA/SEBoK/INCOSE",
    domain_topics: ["Systems Engineering", "Requirements Engineering"],
    summary:
      "Authoritative reference covering systems engineering career foundation and requirements traceability context. Essential context for Systems Engineering, Requirements Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Vendor perspective; pair with NASA/SEBoK/INCOSE.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
    ],
  },
  S115: {
    source_id: "S115",
    title: "50 Systems Engineering 101 — Crisis Now PDF",
    url: "https://talk.crisisnow.com/wp-content/uploads/2022/02/50-Systems-Engineering-101.pdf",
    source_type: "PDF / presentation lead",
    relevance: "Potential introductory systems engineering presentation",
    quality_signal: "User-supplied PDF URL; content not reviewed in this pass",
    limitations:
      "Publisher/context and technical quality need verification; inspect PDF before use",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering potential introductory systems engineering presentation. Essential context for Systems Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Publisher/context and technical quality need verification; inspect PDF before use.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S116: {
    source_id: "S116",
    title: "Systems Engineering 101 — Acmena",
    url: "https://www.acmena.com.au/insight/systems-engineering-101/",
    source_type: "Industry article",
    relevance:
      "ConOps, mission definition, stakeholder needs, lifecycle, V-model and interface risk",
    quality_signal: "Article extracted live; includes Hubble interface anecdote",
    limitations:
      "Practitioner/company perspective; verify case details against primary NASA history before citing as definitive",
    domain_topics: ["Systems Engineering", "MBSE & Modeling", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering conops, mission definition, stakeholder needs, lifecycle, v-model and interface risk. Essential context for Systems Engineering, MBSE & Modeling, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Practitioner/company perspective; verify case details against primary NASA history before citing as definitive.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S117: {
    source_id: "S117",
    title: "Control Systems Lectures — Brian Douglas / Engineering Media",
    url: "https://engineeringmedia.com/videos",
    source_type: "Practitioner video library",
    relevance:
      "Control systems, modeling, feedback, state-space, digital engineering and interdisciplinary learning",
    quality_signal: "Publisher page discovered; cross-links to video and podcast resources",
    limitations: "Supplement with formal texts, derivations and simulation labs",
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering control systems, modeling, feedback, state-space, digital engineering and interdisciplinary learning. Essential context for Systems Thinking, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Supplement with formal texts, derivations and simulation labs.",
    cited_in_articles: [
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
    ],
  },
  S118: {
    source_id: "S118",
    title: "Coursera Introduction to Systems Engineering Specialization",
    url: "https://www.coursera.org/specializations/introduction-systems-engineering",
    source_type: "Online specialization",
    relevance: "Multi-course beginner-to-intermediate SE learning route",
    quality_signal: "Linked from current Coursera course page",
    limitations: "Platform access, subscription and certificate pricing vary; check current terms",
    domain_topics: ["Systems Engineering"],
    summary:
      "Authoritative reference covering multi-course beginner-to-intermediate se learning route. Essential context for Systems Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Platform access, subscription and certificate pricing vary; check current terms.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S119: {
    source_id: "S119",
    title: "ISO/IEC/IEEE 15288:2023 — System life cycle processes",
    url: "https://www.iso.org/standard/81702.html",
    source_type: "International standard",
    relevance: "Lifecycle process framework for human-created systems",
    quality_signal: "Official publisher catalogue",
    limitations: "Full normative text is licensed; tailor process use to domain and contract.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official ISO listing; text licensed.",
      limitations: "Full normative text is licensed; tailor process use to domain and contract.",
    },
    domain_topics: ["Human Systems Integration", "Product Support & Lifecycle"],
    summary:
      "Lifecycle process framework for human-created systems. Extraction detail: Official ISO listing; text licensed.",
    takeaways:
      "Treat as normative baseline for Human Systems Integration. Note operational limitations: Full normative text is licensed; tailor process use to domain and contract..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S120: {
    source_id: "S120",
    title: "ISO/IEC/IEEE 42010:2022 — Architecture description",
    url: "https://www.iso.org/standard/74393.html",
    source_type: "International standard",
    relevance: "Architecture stakeholders, concerns, viewpoints, views and rationale",
    quality_signal: "Official publisher catalogue",
    limitations:
      "Architecture-description standard; not a single prescribed architecture method; text is licensed.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official ISO publisher page; normative text licensed.",
      limitations:
        "Architecture-description standard; not a single prescribed architecture method; text is licensed.",
    },
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Architecture stakeholders, concerns, viewpoints, views and rationale. Extraction detail: Official ISO publisher page; normative text licensed.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Architecture-description standard; not a single prescribed architecture method; text is licensed..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
      {
        slug: "64-architecture-governance-conformance-and-evolution",
        number: 64,
        title: "64 — Architecture governance, conformance, evolution and erosion",
        filename: "64_ARCHITECTURE_GOVERNANCE_CONFORMANCE_AND_EVOLUTION.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S121: {
    source_id: "S121",
    title: "ISO/IEC/IEEE 29148:2018 — Requirements engineering",
    url: "https://www.iso.org/standard/72089.html",
    source_type: "International standard",
    relevance: "Requirements engineering process and information items",
    quality_signal: "Official publisher catalogue",
    limitations:
      "Check successor/reaffirmation status before contractual use; full text is licensed.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official ISO listing; text licensed.",
      limitations:
        "Check successor/reaffirmation status before contractual use; full text is licensed.",
    },
    domain_topics: ["Requirements Engineering"],
    summary:
      "Requirements engineering process and information items. Extraction detail: Official ISO listing; text licensed.",
    takeaways:
      "Treat as normative baseline for Requirements Engineering. Note operational limitations: Check successor/reaffirmation status before contractual use; full text is licensed..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S122: {
    source_id: "S122",
    title: "ISO/IEC/IEEE 42020:2019 — Architecture processes",
    url: "https://www.iso.org/standard/68982.html",
    source_type: "International standard",
    relevance: "Architecture processes and governance",
    quality_signal: "Official publisher catalogue",
    limitations: "Licensed standard; pair with 42010 architecture-description concepts.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official ISO listing; text licensed.",
      limitations: "Licensed standard; pair with 42010 architecture-description concepts.",
    },
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Architecture processes and governance. Extraction detail: Official ISO listing; text licensed.",
    takeaways:
      "Treat as normative baseline for Software & Enterprise Architecture. Note operational limitations: Licensed standard; pair with 42010 architecture-description concepts..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S123: {
    source_id: "S123",
    title: "ISO/IEC/IEEE 24748-1:2024 — Life cycle management",
    url: "https://www.iso.org/standard/84709.html",
    source_type: "International standard",
    relevance: "Lifecycle management guidance",
    quality_signal: "Official publisher catalogue",
    limitations: "Guidance does not replace organization-specific lifecycle tailoring.",
    domain_topics: ["Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering lifecycle management guidance. Essential context for Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Product Support & Lifecycle. Note operational limitations: Guidance does not replace organization-specific lifecycle tailoring..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S124: {
    source_id: "S124",
    title: "OMG SysML 2.0 formal specification",
    url: "https://www.omg.org/spec/SysML/2.0/About-SysML",
    source_type: "Formal specification",
    relevance:
      "MBSE modeling language for requirements, structure, behavior, analysis and verification",
    quality_signal: "OMG formal specification; published September 2025",
    limitations:
      "Tool support and migration maturity vary; distinguish language specification from vendor implementation.",
    domain_topics: ["Requirements Engineering", "MBSE & Modeling", "Verification & Validation"],
    summary:
      "Authoritative reference covering mbse modeling language for requirements, structure, behavior, analysis and verification. Essential context for Requirements Engineering, MBSE & Modeling, Verification & Validation.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Tool support and migration maturity vary; distinguish language specification from vendor implementation..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S125: {
    source_id: "S125",
    title: "SEI Quality Attribute Workshops (QAW), Third Edition",
    url: "https://www.sei.cmu.edu/library/quality-attribute-workshops-qaws-third-edition/",
    source_type: "Institutional method",
    relevance: "Early stakeholder elicitation and prioritization of quality-attribute scenarios",
    quality_signal: "CMU Software Engineering Institute report",
    limitations:
      "Method guide; application needs trained facilitation and domain-specific scenarios.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official SEI page/abstract; full report not fetched.",
      limitations:
        "Method guide; application needs trained facilitation and domain-specific scenarios.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Early stakeholder elicitation and prioritization of quality-attribute scenarios. Extraction detail: Official SEI page/abstract; full report not fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Method guide; application needs trained facilitation and domain-specific scenarios..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "64-architecture-governance-conformance-and-evolution",
        number: 64,
        title: "64 — Architecture governance, conformance, evolution and erosion",
        filename: "64_ARCHITECTURE_GOVERNANCE_CONFORMANCE_AND_EVOLUTION.md",
      },
    ],
  },
  S126: {
    source_id: "S126",
    title: "The TOGAF Standard, 10th Edition",
    url: "https://publications.opengroup.org/c220",
    source_type: "Enterprise architecture standard",
    relevance: "Enterprise architecture method, content, capability and governance",
    quality_signal: "The Open Group standard publisher; Technical Corrigendum 1 applied May 2025",
    limitations:
      "Commercial/licensed standard; framework adoption can become bureaucratic if not tailored.",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering enterprise architecture method, content, capability and governance. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Commercial/licensed standard; framework adoption can become bureaucratic if not tailored..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
      {
        slug: "40-enterprise-architecture-business-process-and-governance",
        number: 40,
        title: "40 — Enterprise architecture, business process and governance",
        filename: "40_ENTERPRISE_ARCHITECTURE_BUSINESS_PROCESS_AND_GOVERNANCE.md",
      },
    ],
  },
  S127: {
    source_id: "S127",
    title: "OMG BPMN 2.0.2 specification",
    url: "https://www.omg.org/spec/BPMN/2.0.2",
    source_type: "Formal specification",
    relevance: "Business process modeling notation",
    quality_signal: "OMG formal specification; January 2014",
    limitations:
      "BPMN diagrams need clear modeling conventions; avoid confusing descriptive maps with executable workflows.",
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Authoritative reference covering business process modeling notation. Essential context for MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: BPMN diagrams need clear modeling conventions; avoid confusing descriptive maps with executable workflows..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "40-enterprise-architecture-business-process-and-governance",
        number: 40,
        title: "40 — Enterprise architecture, business process and governance",
        filename: "40_ENTERPRISE_ARCHITECTURE_BUSINESS_PROCESS_AND_GOVERNANCE.md",
      },
    ],
  },
  S128: {
    source_id: "S128",
    title: "arc42 method",
    url: "https://arc42.org/method/",
    source_type: "Architecture method and documentation template",
    relevance:
      "Iterative architecture work: clarify requirements, design structures/concepts, document, accompany implementation and evaluate",
    quality_signal: "Maintainer documentation",
    limitations: "Opinionated method/template, not an international standard or proof of quality.",
    domain_topics: ["Requirements Engineering", "Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering iterative architecture work: clarify requirements, design structures/concepts, document, accompany implementation and evaluate. Essential context for Requirements Engineering, Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Opinionated method/template, not an international standard or proof of quality..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S129: {
    source_id: "S129",
    title: "NIST SP 800-160 Vol. 1 Rev. 1 — Engineering Trustworthy Secure Systems",
    url: "https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final",
    source_type: "Government systems-security engineering publication",
    relevance: "Secure systems engineering integrated with lifecycle activities",
    quality_signal: "NIST primary publication; final November 2022",
    limitations:
      "U.S. government guidance; select controls based on system context and applicable law.",
    audit: {
      status: "Targeted extraction",
      tools: "Exa; Firecrawl",
      extraction_extent: "Official NIST publication page and abstract extracted.",
      limitations:
        "U.S. government guidance; select controls based on system context and applicable law.",
    },
    domain_topics: ["Systems Engineering", "Security Architecture", "Product Support & Lifecycle"],
    summary:
      "Secure systems engineering integrated with lifecycle activities. Extraction detail: Official NIST publication page and abstract extracted.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: U.S. government guidance; select controls based on system context and applicable law..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S130: {
    source_id: "S130",
    title: "NIST SP 800-160 Vol. 2 Rev. 1 — Developing Cyber-Resilient Systems",
    url: "https://csrc.nist.gov/pubs/sp/800/160/v2/r1/final",
    source_type: "Government systems-security engineering publication",
    relevance: "Cyber resilience engineering and system lifecycle integration",
    quality_signal: "NIST primary publication",
    limitations: "U.S. government guidance; verify revision and errata before compliance mapping.",
    domain_topics: ["Security Architecture", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering cyber resilience engineering and system lifecycle integration. Essential context for Security Architecture, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: U.S. government guidance; verify revision and errata before compliance mapping..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
    ],
  },
  S131: {
    source_id: "S131",
    title: "IEC Functional Safety overview",
    url: "https://www.iec.ch/functional-safety",
    source_type: "Standards-body overview",
    relevance: "Functional safety, IEC 61508 and sector-derived safety standards",
    quality_signal: "International Electrotechnical Commission",
    limitations: "Overview page; normative requirements are in licensed IEC standards.",
    audit: {
      status: "Discovery / blocked",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent:
        "IEC overview discovered; TinyFish bot_blocked; IEC 61508 product listing found.",
      limitations: "Overview page; normative requirements are in licensed IEC standards.",
    },
    domain_topics: ["Safety & Hazard Analysis"],
    summary:
      "Functional safety, IEC 61508 and sector-derived safety standards. Extraction detail: IEC overview discovered; TinyFish bot_blocked; IEC 61508 product listing found.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Overview page; normative requirements are in licensed IEC standards..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
      {
        slug: "74-functional-safety-standards-by-sector-and-assurance-boundaries",
        number: 74,
        title: "74 — Functional-safety standards by sector and assurance boundaries",
        filename: "74_FUNCTIONAL_SAFETY_STANDARDS_BY_SECTOR_AND_ASSURANCE_BOUNDARIES.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S132: {
    source_id: "S132",
    title: "NASA Fault Tree Handbook with Aerospace Applications",
    url: "https://s3vi.ndc.nasa.gov/ssri-kb/static/resources/Fault%20Tree%20Handbook_NASA.pdf",
    source_type: "Government technical handbook",
    relevance: "Fault tree construction, logic, quantification and applications",
    quality_signal: "NASA technical handbook",
    limitations:
      "Historical technical reference; verify assumptions and applicability to the target system.",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "NASA Fault Tree Handbook full PDF fetched.",
      limitations:
        "Historical technical reference; verify assumptions and applicability to the target system.",
    },
    domain_topics: ["Systems Engineering", "Regulated Sector Assurance"],
    summary:
      "Fault tree construction, logic, quantification and applications. Extraction detail: NASA Fault Tree Handbook full PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Historical technical reference; verify assumptions and applicability to the target system..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S133: {
    source_id: "S133",
    title: "NASA Common Cause Failures and Ultra Reliability 2",
    url: "https://ntrs.nasa.gov/api/citations/20160005837/downloads/20160005837.pdf",
    source_type: "Government technical paper",
    relevance: "Common-cause failures and limits of redundant-system reliability",
    quality_signal: "NASA NTRS paper",
    limitations:
      "Technical paper; use as a focused reference, not a universal numerical reliability model.",
    domain_topics: ["Systems Engineering", "Reliability & Dependability"],
    summary:
      "Authoritative reference covering common-cause failures and limits of redundant-system reliability. Essential context for Systems Engineering, Reliability & Dependability.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Technical paper; use as a focused reference, not a universal numerical reliability model..",
    cited_in_articles: [
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
    ],
  },
  S134: {
    source_id: "S134",
    title: "ICAO Safety Risk Management Methods — 2026 training guidance",
    url: "https://www.icao.int/sites/default/files/SMI/TrainingDocs/Chapter%202%20Safety%20Management%20Fundamentals/2.6-09-SRM-Methods-Overview-and-analysis-based-on-systems-thinking-2026.pdf",
    source_type: "Intergovernmental training guidance",
    relevance: "Comparison of safety risk methods, including bow-tie and STPA",
    quality_signal: "ICAO training material; 2026",
    limitations:
      "Training guidance, not a substitute for state regulation or sector safety standards.",
    domain_topics: ["Safety & Hazard Analysis"],
    summary:
      "Authoritative reference covering comparison of safety risk methods, including bow-tie and stpa. Essential context for Safety & Hazard Analysis.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Training guidance, not a substitute for state regulation or sector safety standards..",
    cited_in_articles: [
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
    ],
  },
  S135: {
    source_id: "S135",
    title: "Introduction to STAMP — MIT Partnership for a Systems Approach to Safety",
    url: "https://psas.scripts.mit.edu/home/wp-content/uploads/2016/04/STAMP-Intro-2016.pdf",
    source_type: "University teaching material",
    relevance: "System-theoretic accident model, safety constraints and control structure",
    quality_signal: "MIT educational material",
    limitations: "Introductory slides; pair with full STPA handbook and domain standards.",
    domain_topics: ["Safety & Hazard Analysis", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering system-theoretic accident model, safety constraints and control structure. Essential context for Safety & Hazard Analysis, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Introductory slides; pair with full STPA handbook and domain standards..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
    ],
  },
  S136: {
    source_id: "S136",
    title: "NIST AI Risk Management Framework 1.0",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
    source_type: "Government risk framework",
    relevance: "Govern, Map, Measure and Manage AI risks",
    quality_signal: "NIST primary publication",
    limitations:
      "Voluntary framework; does not establish that a system is safe merely by claiming alignment.",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering govern, map, measure and manage ai risks. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Voluntary framework; does not establish that a system is safe merely by claiming alignment..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
    ],
  },
  S137: {
    source_id: "S137",
    title: "NIST AI 600-1 — Generative AI Profile",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    source_type: "Government AI risk profile",
    relevance: "GenAI-specific risk and control considerations",
    quality_signal: "NIST primary publication; July 2024",
    limitations:
      "Profile of AI RMF 1.0; risk knowledge changes quickly; maintain version and applicability notes.",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering genai-specific risk and control considerations. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Profile of AI RMF 1.0; risk knowledge changes quickly; maintain version and applicability notes..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
    ],
  },
  S138: {
    source_id: "S138",
    title: "Guidelines for Secure AI System Development",
    url: "https://www.ncsc.gov.uk/files/Guidelines-for-secure-AI-system-development.pdf",
    source_type: "Government cybersecurity guidance",
    relevance: "Secure AI lifecycle from design through development, deployment and operation",
    quality_signal: "Multi-agency primary guidance led by UK NCSC and international partners",
    limitations:
      "Guidance rather than a certifiable product standard; apply with system-specific threat modeling.",
    domain_topics: ["Security Architecture", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering secure ai lifecycle from design through development, deployment and operation. Essential context for Security Architecture, Product Support & Lifecycle.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Guidance rather than a certifiable product standard; apply with system-specific threat modeling..",
    cited_in_articles: [
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
    ],
  },
  S139: {
    source_id: "S139",
    title: "AWS Well-Architected Generative AI Lens",
    url: "https://docs.aws.amazon.com/pdfs/wellarchitected/latest/generative-ai-lens/generative-ai-lens.pdf",
    source_type: "Vendor architecture guidance",
    relevance:
      "GenAI workload architecture, controlled autonomy, observability and resource efficiency",
    quality_signal: "AWS official architecture publication",
    limitations:
      "Vendor-specific and AWS-oriented; translate principles rather than copying service choices.",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering genai workload architecture, controlled autonomy, observability and resource efficiency. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Vendor-specific and AWS-oriented; translate principles rather than copying service choices..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
    ],
  },
  S140: {
    source_id: "S140",
    title: "Martin Fowler — Data Guide / Data Mesh",
    url: "https://martinfowler.com/data/",
    source_type: "Practitioner article collection",
    relevance: "Data mesh principles, data architecture and data-management design",
    quality_signal: "Practitioner publisher; references original data-mesh thinking",
    limitations:
      "Conceptual/practitioner source; data mesh is an organizational/architectural choice, not a universal replacement for a warehouse.",
    domain_topics: ["Software & Enterprise Architecture", "Data Architecture"],
    summary:
      "Authoritative reference covering data mesh principles, data architecture and data-management design. Essential context for Software & Enterprise Architecture, Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Conceptual/practitioner source; data mesh is an organizational/architectural choice, not a universal replacement for a warehouse..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "40-enterprise-architecture-business-process-and-governance",
        number: 40,
        title: "40 — Enterprise architecture, business process and governance",
        filename: "40_ENTERPRISE_ARCHITECTURE_BUSINESS_PROCESS_AND_GOVERNANCE.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S141: {
    source_id: "S141",
    title: "Microsoft Engineering Fundamentals — Data-heavy design guidance",
    url: "https://microsoft.github.io/code-with-engineering-playbook/design/design-patterns/data-heavy-design-guidance/",
    source_type: "Practitioner engineering guide",
    relevance: "Data-heavy workloads, consistency choices and data design trade-offs",
    quality_signal: "Microsoft engineering playbook",
    limitations:
      "Practitioner guidance; statements about eventual consistency require context and should not be applied as absolutes.",
    domain_topics: ["Data Architecture"],
    summary:
      "Authoritative reference covering data-heavy workloads, consistency choices and data design trade-offs. Essential context for Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Practitioner guidance; statements about eventual consistency require context and should not be applied as absolutes..",
    cited_in_articles: [
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S142: {
    source_id: "S142",
    title: "Martin Fowler — Linking Modular Architecture to Development Teams",
    url: "https://martinfowler.com/articles/linking-modular-arch.html",
    source_type: "Practitioner case study",
    relevance: "Architecture boundaries, team topology and developer experience",
    quality_signal: "Practitioner article with reported case outcomes",
    limitations:
      "Single organizational case; reported percentage improvements are context-specific, not causal universal laws.",
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering architecture boundaries, team topology and developer experience. Essential context for Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Single organizational case; reported percentage improvements are context-specific, not causal universal laws..",
    cited_in_articles: [
      {
        slug: "41-human-factors-socio-technical-and-organization-design",
        number: 41,
        title: "41 — Human factors, socio-technical systems and organization design",
        filename: "41_HUMAN_FACTORS_SOCIO_TECHNICAL_AND_ORGANIZATION_DESIGN.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "99-architecture-evaluation-iso42030-atam-and-evidence-based-review",
        number: 99,
        title: "99 — Architecture evaluation: ISO 42030, ATAM and evidence-based review",
        filename: "99_ARCHITECTURE_EVALUATION_ISO42030_ATAM_AND_EVIDENCE_BASED_REVIEW.md",
      },
    ],
  },
  S143: {
    source_id: "S143",
    title: "Socio-technical congruence and software build success",
    url: "https://doi.org/10.1109/TSE.2011.29",
    source_type: "Peer-reviewed research",
    relevance: "Relationship between coordination dependencies and technical dependencies",
    quality_signal: "IEEE Transactions on Software Engineering paper",
    limitations:
      "Findings are context-dependent; article reports limits and exceptions to congruence claims.",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering relationship between coordination dependencies and technical dependencies. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Findings are context-dependent; article reports limits and exceptions to congruence claims..",
    cited_in_articles: [
      {
        slug: "41-human-factors-socio-technical-and-organization-design",
        number: 41,
        title: "41 — Human factors, socio-technical systems and organization design",
        filename: "41_HUMAN_FACTORS_SOCIO_TECHNICAL_AND_ORGANIZATION_DESIGN.md",
      },
    ],
  },
  S144: {
    source_id: "S144",
    title: "Building and Evaluating a Theory of Architectural Technical Debt",
    url: "https://research.chalmers.se/publication/522928/file/522928_Fulltext.pdf",
    source_type: "Peer-reviewed research",
    relevance: "Architectural debt causes, symptoms, consequences and management",
    quality_signal: "Open-access research paper",
    limitations:
      "Qualitative grounded-theory study; useful conceptual model, not a quantitative prediction tool.",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering architectural debt causes, symptoms, consequences and management. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Qualitative grounded-theory study; useful conceptual model, not a quantitative prediction tool..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "31-software-architecture-and-domain-design-deep-dive",
        number: 31,
        title: "31 — Software architecture and domain design: the deeper structure",
        filename: "31_SOFTWARE_ARCHITECTURE_AND_DOMAIN_DESIGN_DEEP_DIVE.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
    ],
  },
  S145: {
    source_id: "S145",
    title: "Introduction to the Theory of Complex Systems",
    url: "http://cps-www.bu.edu/hes/book-thurner18.pdf",
    source_type: "Academic textbook",
    relevance: "Complex adaptive systems, network interactions, feedback and quantitative modeling",
    quality_signal: "University-hosted academic text",
    limitations: "Advanced mathematical treatment; access and completeness may vary by host.",
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering complex adaptive systems, network interactions, feedback and quantitative modeling. Essential context for Systems Thinking, MBSE & Modeling.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Advanced mathematical treatment; access and completeness may vary by host..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "31-software-architecture-and-domain-design-deep-dive",
        number: 31,
        title: "31 — Software architecture and domain design: the deeper structure",
        filename: "31_SOFTWARE_ARCHITECTURE_AND_DOMAIN_DESIGN_DEEP_DIVE.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
    ],
  },
  S146: {
    source_id: "S146",
    title: "A Primer for System Dynamics Modeling and Simulation",
    url: "https://www.informs-sim.org/wsc18papers/includes/files/024.pdf",
    source_type: "Academic conference paper",
    relevance: "Feedback, dynamic modeling, simulation and applications",
    quality_signal: "INFORMS Winter Simulation Conference proceedings",
    limitations:
      "Introductory paper; use with formal system-dynamics texts for deeper model validation.",
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering feedback, dynamic modeling, simulation and applications. Essential context for Systems Thinking, MBSE & Modeling.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Introductory paper; use with formal system-dynamics texts for deeper model validation..",
    cited_in_articles: [
      {
        slug: "28-problem-framing-and-systems-methods",
        number: 28,
        title: "28 — Problem framing and systems methodologies",
        filename: "28_PROBLEM_FRAMING_AND_SYSTEMS_METHODS.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
    ],
  },
  S147: {
    source_id: "S147",
    title: "A Methodological Framework for Integrating Systems Thinking and System Dynamics",
    url: "https://proceedings.systemdynamics.org/2000/PDFs/cavana41.pdf",
    source_type: "Academic conference paper",
    relevance:
      "Problem structuring, causal-loop modeling, dynamic modeling, scenarios and learning",
    quality_signal: "System Dynamics Society proceedings",
    limitations: "Older methodological paper; useful as an approach, not a universal standard.",
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering problem structuring, causal-loop modeling, dynamic modeling, scenarios and learning. Essential context for Systems Thinking, MBSE & Modeling.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Older methodological paper; useful as an approach, not a universal standard..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "27-systems-science-and-complexity",
        number: 27,
        title: "27 — Systems science, complexity and the deeper foundations",
        filename: "27_SYSTEMS_SCIENCE_AND_COMPLEXITY.md",
      },
      {
        slug: "28-problem-framing-and-systems-methods",
        number: 28,
        title: "28 — Problem framing and systems methodologies",
        filename: "28_PROBLEM_FRAMING_AND_SYSTEMS_METHODS.md",
      },
      {
        slug: "51-research-frontiers-and-open-engineering-problems",
        number: 51,
        title: "51 — Research frontiers and open engineering problems",
        filename: "51_RESEARCH_FRONTIERS_AND_OPEN_ENGINEERING_PROBLEMS.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
    ],
  },
  S148: {
    source_id: "S148",
    title: "TOGAF Certification Portfolio",
    url: "https://publications.opengroup.org/certifications/togaf",
    source_type: "Certification owner",
    relevance: "TOGAF certification routes and official credential information",
    quality_signal: "The Open Group certification owner",
    limitations: "Exam paths, prerequisites and fees change; verify before enrollment.",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering togaf certification routes and official credential information. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Exam paths, prerequisites and fees change; verify before enrollment..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
    ],
  },
  S149: {
    source_id: "S149",
    title: "INCOSE SEP Certification Program Requirements 2026",
    url: "https://www.incose.org/wp-content/uploads/2026/01/CER-PROC-01_Certification-Program-Definition-and-Requirements_2026.pdf",
    source_type: "Certification owner document",
    relevance: "ASEP/CSEP/ESEP eligibility, knowledge and experience requirements",
    quality_signal: "INCOSE primary program document; 2026 edition",
    limitations:
      "Requirements change; use the latest INCOSE revision and check experience documentation carefully.",
    domain_topics: ["Systems Engineering", "Requirements Engineering"],
    summary:
      "Authoritative reference covering asep/csep/esep eligibility, knowledge and experience requirements. Essential context for Systems Engineering, Requirements Engineering.",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Requirements change; use the latest INCOSE revision and check experience documentation carefully..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
    ],
  },
  S150: {
    source_id: "S150",
    title: "ASQ Certified Reliability Engineer (CRE)",
    url: "https://www.asq.org/cert/reliability-engineer",
    source_type: "Professional certification",
    relevance: "Reliability engineering body of knowledge and exam credential",
    quality_signal: "ASQ certification owner",
    limitations:
      "Experience requirements and exam policies vary by current ASQ rules; verify before applying.",
    domain_topics: ["Reliability & Dependability"],
    summary:
      "Authoritative reference covering reliability engineering body of knowledge and exam credential. Essential context for Reliability & Dependability.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Experience requirements and exam policies vary by current ASQ rules; verify before applying..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
    ],
  },
  S151: {
    source_id: "S151",
    title: "ISC2 CISSP Exam Outline",
    url: "https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline",
    source_type: "Professional certification",
    relevance: "Security domains, role coverage and exam scope",
    quality_signal: "ISC2 certification owner",
    limitations:
      "Experience requirement and exam outline can change; certification does not replace system-specific design evidence.",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering security domains, role coverage and exam scope. Essential context for Security Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Experience requirement and exam outline can change; certification does not replace system-specific design evidence..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "53-career-pathways-and-credential-selection",
        number: 53,
        title: "53 — Career pathways and credential selection",
        filename: "53_CAREER_PATHWAYS_AND_CREDENTIAL_SELECTION.md",
      },
    ],
  },
  S152: {
    source_id: "S152",
    title: "FinOps Framework",
    url: "https://www.finops.org/framework/",
    source_type: "Professional framework",
    relevance: "Cloud and technology value management; unit economics and cost accountability",
    quality_signal: "FinOps Foundation framework",
    limitations:
      "Not a substitute for financial controls or workload-level engineering; practices depend on procurement model.",
    domain_topics: ["Cloud & SRE"],
    summary:
      "Authoritative reference covering cloud and technology value management; unit economics and cost accountability. Essential context for Cloud & SRE.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Not a substitute for financial controls or workload-level engineering; practices depend on procurement model..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "33-cloud-native-platform-engineering-and-operations",
        number: 33,
        title: "33 — Cloud-native architecture, platform engineering and operations",
        filename: "33_CLOUD_NATIVE_PLATFORM_ENGINEERING_AND_OPERATIONS.md",
      },
      {
        slug: "55-product-strategy-value-and-system-design",
        number: 55,
        title: "55 — Product strategy, value engineering and system design",
        filename: "55_PRODUCT_STRATEGY_VALUE_AND_SYSTEM_DESIGN.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
    ],
  },
  S153: {
    source_id: "S153",
    title: "NIST SP 800-218 — Secure Software Development Framework",
    url: "https://csrc.nist.gov/pubs/sp/800/218/final",
    source_type: "Government cybersecurity publication",
    relevance: "Secure software development practices across SDLC",
    quality_signal: "NIST primary publication",
    limitations:
      "Software-development framework; integrate with broader system security and safety engineering.",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering secure software development practices across sdlc. Essential context for Security Architecture.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Software-development framework; integrate with broader system security and safety engineering..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S154: {
    source_id: "S154",
    title: "OWASP Threat Modeling Cheat Sheet",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
    source_type: "Open security guidance",
    relevance: "Threat modeling process, assets, trust boundaries, threats and mitigations",
    quality_signal: "OWASP project documentation",
    limitations: "Community-maintained guidance; not a complete security assurance standard.",
    domain_topics: ["Security Architecture", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering threat modeling process, assets, trust boundaries, threats and mitigations. Essential context for Security Architecture, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Community-maintained guidance; not a complete security assurance standard..",
    cited_in_articles: [
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
    ],
  },
  S155: {
    source_id: "S155",
    title: "CISA Secure by Design",
    url: "https://www.cisa.gov/securebydesign",
    source_type: "Government cybersecurity initiative",
    relevance: "Secure-by-design and secure-by-default product principles",
    quality_signal: "CISA primary guidance and initiative",
    limitations:
      "Policy/initiative guidance; map to concrete system requirements, testing and accountability.",
    domain_topics: ["Security Architecture"],
    summary:
      "Authoritative reference covering secure-by-design and secure-by-default product principles. Essential context for Security Architecture.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Policy/initiative guidance; map to concrete system requirements, testing and accountability..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
    ],
  },
  S156: {
    source_id: "S156",
    title: "NIST SP 800-223 — Cloud Computing Security Reference Architecture",
    url: "https://csrc.nist.gov/pubs/sp/800/223/final",
    source_type: "Government technical publication",
    relevance: "Cloud security reference architecture",
    quality_signal: "NIST primary publication",
    limitations: "Check publication status/current revision before adoption; cloud models vary.",
    domain_topics: ["Security Architecture", "Software & Enterprise Architecture", "Cloud & SRE"],
    summary:
      "Authoritative reference covering cloud security reference architecture. Essential context for Security Architecture, Software & Enterprise Architecture, Cloud & SRE.",
    takeaways:
      "Treat as normative baseline for Security Architecture. Note operational limitations: Check publication status/current revision before adoption; cloud models vary..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S157: {
    source_id: "S157",
    title: "ISO/IEC 27001:2022 — Information security management systems",
    url: "https://www.iso.org/standard/27001",
    source_type: "International standard",
    relevance: "Information security management system requirements",
    quality_signal: "ISO publisher catalogue",
    limitations:
      "Management-system standard; certification is organizational, not proof that a given product is secure.",
    domain_topics: ["Requirements Engineering", "Security Architecture"],
    summary:
      "Authoritative reference covering information security management system requirements. Essential context for Requirements Engineering, Security Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Management-system standard; certification is organizational, not proof that a given product is secure..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S158: {
    source_id: "S158",
    title: "ISO 22301 — Business continuity management systems",
    url: "https://www.iso.org/standard/75106.html",
    source_type: "International standard",
    relevance: "Business continuity management system requirements",
    quality_signal: "ISO publisher catalogue",
    limitations:
      "Organizational continuity management; not a replacement for technical recovery design and testing.",
    domain_topics: ["Requirements Engineering"],
    summary:
      "Authoritative reference covering business continuity management system requirements. Essential context for Requirements Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Organizational continuity management; not a replacement for technical recovery design and testing..",
    cited_in_articles: [
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
    ],
  },
  S159: {
    source_id: "S159",
    title: "ISO 31000 — Risk management guidelines",
    url: "https://www.iso.org/iso-31000-risk-management.html",
    source_type: "International standard / guidance",
    relevance: "Risk principles, framework and process",
    quality_signal: "ISO official overview",
    limitations: "Guidance; risk appetite, context and governance must be tailored.",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering risk principles, framework and process. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Guidance; risk appetite, context and governance must be tailored..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S160: {
    source_id: "S160",
    title: "ISO/IEC 42001:2023 — AI management system",
    url: "https://www.iso.org/standard/81230.html",
    source_type: "International standard",
    relevance: "Organizational AI management system requirements",
    quality_signal: "ISO publisher catalogue",
    limitations: "Management-system requirements; not a guarantee of model or product safety.",
    domain_topics: ["Requirements Engineering"],
    summary:
      "Authoritative reference covering organizational ai management system requirements. Essential context for Requirements Engineering.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Management-system requirements; not a guarantee of model or product safety..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
    ],
  },
  S161: {
    source_id: "S161",
    title: "ISO/IEC 62443 — Industrial automation and control system security",
    url: "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards",
    source_type: "Sector standards series",
    relevance: "Industrial OT/ICS cybersecurity lifecycle, zones, conduits and security levels",
    quality_signal: "ISA/IEC standards publisher and series overview",
    limitations:
      "Multi-part standards family; select parts based on asset owner, integrator, supplier and component scope.",
    domain_topics: ["Security Architecture", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering industrial ot/ics cybersecurity lifecycle, zones, conduits and security levels. Essential context for Security Architecture, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Multi-part standards family; select parts based on asset owner, integrator, supplier and component scope..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
    ],
  },
  S162: {
    source_id: "S162",
    title: "ISO 26262 — Road vehicles functional safety",
    url: "https://www.iso.org/standard/68383.html",
    source_type: "Sector safety standard family",
    relevance: "Functional safety for automotive electrical/electronic systems",
    quality_signal: "ISO publisher catalogue",
    limitations:
      "Automotive domain-specific; does not replace SOTIF, cybersecurity or whole-vehicle safety analysis.",
    domain_topics: ["Safety & Hazard Analysis", "Regulated Sector Assurance"],
    summary:
      "Authoritative reference covering functional safety for automotive electrical/electronic systems. Essential context for Safety & Hazard Analysis, Regulated Sector Assurance.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Automotive domain-specific; does not replace SOTIF, cybersecurity or whole-vehicle safety analysis..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S163: {
    source_id: "S163",
    title: "ISO 21448 — Road vehicles Safety of the Intended Functionality (SOTIF)",
    url: "https://www.iso.org/standard/77490.html",
    source_type: "Sector safety standard",
    relevance:
      "Hazards from functional insufficiencies and foreseeable misuse in intended functionality",
    quality_signal: "ISO publisher catalogue",
    limitations:
      "Automotive domain-specific; distinguish from malfunction-based functional safety.",
    domain_topics: ["Safety & Hazard Analysis"],
    summary:
      "Authoritative reference covering hazards from functional insufficiencies and foreseeable misuse in intended functionality. Essential context for Safety & Hazard Analysis.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Automotive domain-specific; distinguish from malfunction-based functional safety..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
    ],
  },
  S164: {
    source_id: "S164",
    title: "ISO 14971 — Medical devices risk management",
    url: "https://www.iso.org/standard/72704.html",
    source_type: "Sector risk-management standard",
    relevance: "Medical-device risk management across lifecycle",
    quality_signal: "ISO publisher catalogue",
    limitations:
      "Medical-device context; current edition and jurisdictional adoption must be verified.",
    domain_topics: ["Regulated Sector Assurance", "Product Support & Lifecycle"],
    summary:
      "Authoritative reference covering medical-device risk management across lifecycle. Essential context for Regulated Sector Assurance, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Medical-device context; current edition and jurisdictional adoption must be verified..",
    cited_in_articles: [
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S165: {
    source_id: "S165",
    title: "IEC 62304 — Medical device software lifecycle processes",
    url: "https://webstore.iec.ch/en/publication/6792",
    source_type: "Sector software lifecycle standard",
    relevance: "Medical-device software lifecycle and safety classification",
    quality_signal: "IEC official publisher catalogue",
    limitations:
      "Scope is medical-device software; coordinate with ISO 14971 and applicable regulatory requirements.",
    domain_topics: [
      "Safety & Hazard Analysis",
      "Regulated Sector Assurance",
      "Product Support & Lifecycle",
    ],
    summary:
      "Authoritative reference covering medical-device software lifecycle and safety classification. Essential context for Safety & Hazard Analysis, Regulated Sector Assurance, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Scope is medical-device software; coordinate with ISO 14971 and applicable regulatory requirements..",
    cited_in_articles: [
      {
        slug: "14-certifications-and-credentials",
        number: 14,
        title: "14 — Certifications and credentials",
        filename: "14_CERTIFICATIONS_AND_CREDENTIALS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S167: {
    source_id: "S167",
    title: "NASA Systems Engineering Handbook — Product Integration (5.2)",
    url: "https://www.nasa.gov/reference/5-2-product-integration/",
    source_type: "Government engineering handbook section",
    relevance:
      "System/subsystem integration strategy, assembly, integration sequencing and verification linkage",
    quality_signal:
      "NASA official handbook material; page content partly affected by site navigation on one fetch",
    limitations: "Use with the integration plan outline and system-specific verification strategy",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent:
        "NASA section fetched with process inputs/activities/outputs; Firecrawl page had site chrome issue.",
      limitations:
        "Use with the integration plan outline and system-specific verification strategy",
    },
    domain_topics: ["Systems Engineering", "Verification & Validation"],
    summary:
      "System/subsystem integration strategy, assembly, integration sequencing and verification linkage. Extraction detail: NASA section fetched with process inputs/activities/outputs; Firecrawl page had site chrome issue.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Use with the integration plan outline and system-specific verification strategy.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S168: {
    source_id: "S168",
    title: "NASA Systems Engineering Handbook — Integration Plan Outline (Appendix H)",
    url: "https://www.nasa.gov/reference/appendix-h-integration-plan-outline/",
    source_type: "Government engineering handbook section",
    relevance:
      "Integration plan contents, integration steps, resources, schedules and verification strategy",
    quality_signal: "NASA official handbook appendix; URL located and indexed",
    limitations: "Template requires tailoring and does not replace detailed procedures",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "NASA Appendix H integration plan outline fetched.",
      limitations: "Template requires tailoring and does not replace detailed procedures",
    },
    domain_topics: ["Systems Engineering", "Verification & Validation"],
    summary:
      "Integration plan contents, integration steps, resources, schedules and verification strategy. Extraction detail: NASA Appendix H integration plan outline fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Template requires tailoring and does not replace detailed procedures.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "58-systems-integration-interface-and-configuration-engineering",
        number: 58,
        title: "58 — Systems integration, interface and configuration engineering",
        filename: "58_SYSTEMS_INTEGRATION_INTERFACE_AND_CONFIGURATION_ENGINEERING.md",
      },
    ],
  },
  S169: {
    source_id: "S169",
    title: "NASA Life Cycle Logistics Support Guidebook",
    url: "https://www.nasa.gov/wp-content/uploads/2023/02/nasa_lcls_guidebook.pdf",
    source_type: "Government technical guidebook",
    relevance:
      "Maintenance concept, supply support, support/test equipment, workforce, technical data, facilities and sustainment",
    quality_signal:
      "NASA guidebook PDF extracted; contents and lifecycle logistics chapters reviewed",
    limitations: "NASA program context; adapt to sector and acquisition model",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "NASA lifecycle logistics guidebook PDF fetched.",
      limitations: "NASA program context; adapt to sector and acquisition model",
    },
    domain_topics: ["Systems Engineering", "Data Architecture", "Product Support & Lifecycle"],
    summary:
      "Maintenance concept, supply support, support/test equipment, workforce, technical data, facilities and sustainment. Extraction detail: NASA lifecycle logistics guidebook PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA program context; adapt to sector and acquisition model.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
      {
        slug: "77-reliability-centered-maintenance-and-integrated-product-support",
        number: 77,
        title: "77 — Reliability-centered maintenance and integrated product support",
        filename: "77_RELIABILITY_CENTERED_MAINTENANCE_AND_INTEGRATED_PRODUCT_SUPPORT.md",
      },
    ],
  },
  S170: {
    source_id: "S170",
    title: "Principles of Cyber-Physical Systems — Rajeev Alur",
    url: "https://www.cis.upenn.edu/~alur/pcps.html",
    source_type: "Academic textbook / university resource",
    relevance:
      "CPS modeling, concurrency, control, hybrid systems, real-time systems and formal verification",
    quality_signal: "Author-hosted university page; MIT Press textbook published 2015",
    limitations: "Advanced textbook; not a certification or sector-specific safety standard",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Author-hosted book page and overview fetched.",
      limitations: "Advanced textbook; not a certification or sector-specific safety standard",
    },
    domain_topics: ["Security Architecture", "MBSE & Modeling", "Verification & Validation"],
    summary:
      "CPS modeling, concurrency, control, hybrid systems, real-time systems and formal verification. Extraction detail: Author-hosted book page and overview fetched.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Advanced textbook; not a certification or sector-specific safety standard.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
      {
        slug: "72-real-time-control-embedded-and-cyber-physical-assurance",
        number: 72,
        title: "72 — Real-time control, embedded systems and cyber-physical assurance",
        filename: "72_REAL_TIME_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_ASSURANCE.md",
      },
    ],
  },
  S171: {
    source_id: "S171",
    title: "Operational Research Methods — The Operational Research Society",
    url: "https://www.theorsociety.com/ORS/ORS/About-OR/OR-Methods.aspx",
    source_type: "Professional society resource",
    relevance:
      "Operations research methods including optimization, simulation, decision analysis, queuing, ABM and problem structuring",
    quality_signal: "Professional society page extracted live",
    limitations: "Introductory method index; use academic texts and domain data for implementation",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Professional society method index fetched.",
      limitations:
        "Introductory method index; use academic texts and domain data for implementation",
    },
    domain_topics: ["MBSE & Modeling", "Decision Analysis & Trade Studies"],
    summary:
      "Operations research methods including optimization, simulation, decision analysis, queuing, ABM and problem structuring. Extraction detail: Professional society method index fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Introductory method index; use academic texts and domain data for implementation.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
      {
        slug: "73-operations-research-robust-decisions-and-hybrid-simulation",
        number: 73,
        title: "73 — Operations research, robust decisions and hybrid simulation",
        filename: "73_OPERATIONS_RESEARCH_ROBUST_DECISIONS_AND_HYBRID_SIMULATION.md",
      },
    ],
  },
  S172: {
    source_id: "S172",
    title: "Operations Research — Texas A&M University Engineering",
    url: "https://engineering.tamu.edu/industrial/research/operations-research.html",
    source_type: "University research overview",
    relevance:
      "Optimization, stochastic systems, applied probability, simulation, scheduling, networks, congestion and reliability",
    quality_signal: "University research group overview",
    limitations: "Research scope rather than a step-by-step learning text",
    domain_topics: ["Reliability & Dependability", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering optimization, stochastic systems, applied probability, simulation, scheduling, networks, congestion and reliability. Essential context for Reliability & Dependability, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Research scope rather than a step-by-step learning text.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "57-operations-research-optimization-and-simulation",
        number: 57,
        title: "57 — Operations research, optimization and simulation",
        filename: "57_OPERATIONS_RESEARCH_OPTIMIZATION_AND_SIMULATION.md",
      },
    ],
  },
  S173: {
    source_id: "S173",
    title: "ITU-T L.1801 (02/2026) — Environmental impact of AI systems",
    url: "https://www.itu.int/epublications/publication/itu-t-l-1801-2026-02-guidelines-for-assessing-the-environmental-impact-of-artificial-intelligence-systems",
    source_type: "International telecommunications recommendation",
    relevance: "Life-cycle assessment for AI systems, direct footprint and higher-order effects",
    quality_signal: "ITU recommendation page and table of contents extracted; February 2026",
    limitations:
      "Apply functional unit, system boundary and data assumptions carefully; current implementation data may be incomplete",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering life-cycle assessment for ai systems, direct footprint and higher-order effects. Essential context for Systems Foundations.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Apply functional unit, system boundary and data assumptions carefully; current implementation data may be incomplete.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
    ],
  },
  S174: {
    source_id: "S174",
    title: "NIST Circular Economy in the High-Tech World Workshop Report",
    url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1500-204.pdf",
    source_type: "Government research/workshop report",
    relevance:
      "Reuse, repair, recycling and circularity for electronics, solar panels and batteries",
    quality_signal: "NIST primary workshop report",
    limitations: "Workshop synthesis, not a prescriptive standard",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering reuse, repair, recycling and circularity for electronics, solar panels and batteries. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Workshop synthesis, not a prescriptive standard.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "60-sustainable-systems-engineering-and-lifecycle-assessment",
        number: 60,
        title: "60 — Sustainable systems engineering and lifecycle assessment",
        filename: "60_SUSTAINABLE_SYSTEMS_ENGINEERING_AND_LIFECYCLE_ASSESSMENT.md",
      },
    ],
  },
  S175: {
    source_id: "S175",
    title: "Structurizr Documentation",
    url: "https://docs.structurizr.com/",
    source_type: "Tool documentation",
    relevance:
      "C4 models as code, Structurizr DSL, architecture views and version-controlled documentation",
    quality_signal: "Maintainer documentation extracted live",
    limitations: "Tool documentation; licensing/features depend on deployment and edition",
    domain_topics: ["MBSE & Modeling", "Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering c4 models as code, structurizr dsl, architecture views and version-controlled documentation. Essential context for MBSE & Modeling, Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Tool documentation; licensing/features depend on deployment and edition.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S176: {
    source_id: "S176",
    title: "PlantUML",
    url: "https://plantuml.com/",
    source_type: "Open-source tool documentation",
    relevance: "Text-to-diagram generation for software/engineering diagrams",
    quality_signal: "Official project documentation; licensing options explained on download page",
    limitations: "Validate supported diagram types, renderer and license before organizational use",
    domain_topics: ["Systems Foundations"],
    summary:
      "Authoritative reference covering text-to-diagram generation for software/engineering diagrams. Essential context for Systems Foundations.",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: Validate supported diagram types, renderer and license before organizational use.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S177: {
    source_id: "S177",
    title: "Cameo Systems Modeler 2024x Documentation",
    url: "https://docs.nomagic.com/spaces/CSM2024x/pages/136723595/Cameo+Systems+Modeler+Documentation",
    source_type: "Vendor tool documentation",
    relevance: "SysML/MBSE modeling environment and model documentation",
    quality_signal: "Official product documentation; version-specific page discovered",
    limitations:
      "Commercial platform; verify license, current version, SysML v2 support and interoperability",
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Authoritative reference covering sysml/mbse modeling environment and model documentation. Essential context for MBSE & Modeling.",
    takeaways:
      "Treat as normative baseline for MBSE & Modeling. Note operational limitations: Commercial platform; verify license, current version, SysML v2 support and interoperability.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S178: {
    source_id: "S178",
    title: "OMG Systems Modeling — SysML v2 Release Repository",
    url: "https://github.com/systems-modeling/sysml-v2-release/",
    source_type: "Specification implementation repository",
    relevance: "SysML v2 release artifacts, examples and pilot implementation editors",
    quality_signal: "OMG Systems Modeling community release repository",
    limitations:
      "Pilot implementation is not equivalent to a production-certified engineering tool",
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Authoritative reference covering sysml v2 release artifacts, examples and pilot implementation editors. Essential context for MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Pilot implementation is not equivalent to a production-certified engineering tool.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "54-systems-design-tooling-and-modeling-stack",
        number: 54,
        title: "54 — Systems design tooling and modeling stack",
        filename: "54_SYSTEMS_DESIGN_TOOLING_AND_MODELING_STACK.md",
      },
    ],
  },
  S179: {
    source_id: "S179",
    title: "NASA-STD-87291 — Reliability and Maintainability Standard",
    url: "https://standards.nasa.gov/standard/NASA/NASA-STD-87291",
    source_type: "Government technical standard",
    relevance:
      "NASA R&M objectives and strategies for design, evaluation and operation of spaceflight/support systems",
    quality_signal: "NASA standards catalogue",
    limitations:
      "NASA applicability; confirm current version, status and project applicability before use",
    domain_topics: [
      "Systems Engineering",
      "Reliability & Dependability",
      "Product Support & Lifecycle",
    ],
    summary:
      "Authoritative reference covering nasa r&m objectives and strategies for design, evaluation and operation of spaceflight/support systems. Essential context for Systems Engineering, Reliability & Dependability, Product Support & Lifecycle.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA applicability; confirm current version, status and project applicability before use.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "56-control-embedded-and-cyber-physical-systems",
        number: 56,
        title: "56 — Control, embedded and cyber-physical systems",
        filename: "56_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_SYSTEMS.md",
      },
      {
        slug: "59-product-support-logistics-and-lifecycle-engineering",
        number: 59,
        title: "59 — Product support, logistics and lifecycle engineering",
        filename: "59_PRODUCT_SUPPORT_LOGISTICS_AND_LIFECYCLE_ENGINEERING.md",
      },
    ],
  },
  S180: {
    source_id: "S180",
    title: "Introducing Systems Approaches — Open University",
    url: "https://oro.open.ac.uk/70335/1/Systems_approaches_ch1.pdf",
    source_type: "Academic chapter",
    relevance: "Five systems methods: SD, VSM, SODA, SSM and CSH",
    quality_signal: "Exa discovery; TinyFish attempted",
    limitations: "TinyFish reported target_unreachable; treat as discovery-only in this pass",
    audit: {
      status: "Discovery only / fetch unreachable",
      tools: "Exa discovery; TinyFish attempted",
      extraction_extent: "TinyFish reported target_unreachable.",
      limitations: "TinyFish reported target_unreachable; treat as discovery-only in this pass",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Five systems methods: SD, VSM, SODA, SSM and CSH. Extraction detail: TinyFish reported target_unreachable.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: TinyFish reported target_unreachable; treat as discovery-only in this pass.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
    ],
  },
  S181: {
    source_id: "S181",
    title: "Soft Systems Methodology: A Thirty Year Retrospective — Checkland",
    url: "https://www.betterevaluation.org/sites/default/files/ChecklandSSM.pdf",
    source_type: "Academic / foundational article",
    relevance: "SSM history, method evolution and use",
    quality_signal: "Exa discovery",
    limitations: "TinyFish target_unreachable; not counted as full fetch",
    audit: {
      status: "Discovery only / fetch unreachable",
      tools: "Exa discovery; TinyFish attempted",
      extraction_extent: "TinyFish reported target_unreachable.",
      limitations: "TinyFish target_unreachable; not counted as full fetch",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "SSM history, method evolution and use. Extraction detail: TinyFish reported target_unreachable.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: TinyFish target_unreachable; not counted as full fetch.",
    cited_in_articles: [
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
    ],
  },
  S182: {
    source_id: "S182",
    title: "Introduction to Soft Systems Methodology",
    url: "https://doi.org/10.54120/jost.000008",
    source_type: "Academic article",
    relevance: "SSM history, root definitions and activity models",
    quality_signal: "Exa discovery",
    limitations:
      "Use as an introductory overview; not a complete substitute for Checkland primary texts",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Introductory overview; full text not fetched.",
      limitations:
        "Use as an introductory overview; not a complete substitute for Checkland primary texts",
    },
    domain_topics: ["MBSE & Modeling"],
    summary:
      "SSM history, root definitions and activity models. Extraction detail: Introductory overview; full text not fetched.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Use as an introductory overview; not a complete substitute for Checkland primary texts.",
    cited_in_articles: [
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
    ],
  },
  S183: {
    source_id: "S183",
    title: "Strategic Options Development and Analysis (SODA) — University of Strathclyde",
    url: "https://pureportal.strath.ac.uk/en/publications/strategic-options-development-and-analysis-soda/",
    source_type: "Academic chapter metadata",
    relevance: "Cognitive mapping and negotiated strategic options",
    quality_signal: "TinyFish full page fetch",
    limitations: "Abstract/metadata fetched; full book chapter not present on page",
    audit: {
      status: "Targeted page fetch",
      tools: "TinyFish",
      extraction_extent: "Abstract and page metadata fetched; not the complete book chapter.",
      limitations: "Abstract/metadata fetched; full book chapter not present on page",
    },
    domain_topics: ["Data Architecture", "Human Systems Integration"],
    summary:
      "Cognitive mapping and negotiated strategic options. Extraction detail: Abstract and page metadata fetched; not the complete book chapter.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Abstract/metadata fetched; full book chapter not present on page.",
    cited_in_articles: [
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
    ],
  },
  S184: {
    source_id: "S184",
    title: "The Viable System Model: Interpretations and Applications",
    url: "https://library.uniteddiversity.coop/Systems_and_Networks/Viable_Systems_Model/The%20Viable%20System%20Model.pdf",
    source_type: "Book / edited collection",
    relevance: "VSM provenance, development and applications",
    quality_signal: "Exa discovery",
    limitations: "Full text not fetched; third-party mirror",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Third-party mirror; not fetched.",
      limitations: "Full text not fetched; third-party mirror",
    },
    domain_topics: ["MBSE & Modeling"],
    summary:
      "VSM provenance, development and applications. Extraction detail: Third-party mirror; not fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Full text not fetched; third-party mirror.",
    cited_in_articles: [
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
    ],
  },
  S185: {
    source_id: "S185",
    title: "Critical Systems Heuristics: The Idea and Practice of Boundary Critique",
    url: "https://oro.open.ac.uk/70336/1/Systems_approaches_ch6.pdf",
    source_type: "Academic chapter",
    relevance: "CSH framework and boundary critique",
    quality_signal: "Exa discovery",
    limitations: "TinyFish target_unreachable; content summarized from discovery excerpt only",
    audit: {
      status: "Discovery only / fetch unreachable",
      tools: "Exa discovery; TinyFish attempted",
      extraction_extent: "TinyFish reported target_unreachable.",
      limitations: "TinyFish target_unreachable; content summarized from discovery excerpt only",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "CSH framework and boundary critique. Extraction detail: TinyFish reported target_unreachable.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: TinyFish target_unreachable; content summarized from discovery excerpt only.",
    cited_in_articles: [
      {
        slug: "61-systems-methods-pluralism-problem-structuring-and-boundary-critique",
        number: 61,
        title: "61 — Systems methods, methodological pluralism and boundary critique",
        filename: "61_SYSTEMS_METHODS_PLURALISM_PROBLEM_STRUCTURING_AND_BOUNDARY_CRITIQUE.md",
      },
    ],
  },
  S186: {
    source_id: "S186",
    title: "DoD Mission Engineering Guide Version 2.0",
    url: "https://ac.cto.mil/wp-content/uploads/2023/11/MEG_2_Oct2023.pdf",
    source_type: "Government guidebook",
    relevance: "Mission threads, mission engineering threads, MOE/MOP/MOS and analysis run matrix",
    quality_signal: "TinyFish full PDF fetch",
    limitations:
      "Full text fetched; not independently validated against a live superseding version",
    audit: {
      status: "Full fetch",
      tools: "TinyFish",
      extraction_extent: "Full PDF text fetched and method contents reviewed.",
      limitations:
        "Full text fetched; not independently validated against a live superseding version",
    },
    domain_topics: ["Regulated Sector Assurance"],
    summary:
      "Mission threads, mission engineering threads, MOE/MOP/MOS and analysis run matrix. Extraction detail: Full PDF text fetched and method contents reviewed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Full text fetched; not independently validated against a live superseding version.",
    cited_in_articles: [
      {
        slug: "62-mission-engineering-mission-architectures-and-operational-analysis",
        number: 62,
        title: "62 — Mission engineering, mission architecture and operational analysis",
        filename: "62_MISSION_ENGINEERING_MISSION_ARCHITECTURES_AND_OPERATIONAL_ANALYSIS.md",
      },
    ],
  },
  S188: {
    source_id: "S188",
    title: "DoD Architecture Framework (DoDAF) v2.02 — official portal",
    url: "https://dodcio.defense.gov/dodaf20.aspx",
    source_type: "Government architecture framework",
    relevance: "Architecture viewpoints and data-model organization",
    quality_signal: "Exa discovery",
    limitations:
      "Portal states v2.02 is approved release as of August 2010; PDF fetch attempt unreachable",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official portal discovered; PDF fetch attempt unreachable.",
      limitations:
        "Portal states v2.02 is approved release as of August 2010; PDF fetch attempt unreachable",
    },
    domain_topics: [
      "MBSE & Modeling",
      "Software & Enterprise Architecture",
      "Data Architecture",
      "Regulated Sector Assurance",
    ],
    summary:
      "Architecture viewpoints and data-model organization. Extraction detail: Official portal discovered; PDF fetch attempt unreachable.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Portal states v2.02 is approved release as of August 2010; PDF fetch attempt unreachable.",
    cited_in_articles: [
      {
        slug: "62-mission-engineering-mission-architectures-and-operational-analysis",
        number: 62,
        title: "62 — Mission engineering, mission architecture and operational analysis",
        filename: "62_MISSION_ENGINEERING_MISSION_ARCHITECTURES_AND_OPERATIONAL_ANALYSIS.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S189: {
    source_id: "S189",
    title: "Mission Architecture Style Guide Version 1.0",
    url: "https://ac.cto.mil/wp-content/uploads/2025/01/U-Mission-Architecture-Style-Guide-Final_07Jan2025.pdf",
    source_type: "Government architecture guide",
    relevance: "Mission architecture documentation with MBSE",
    quality_signal: "Exa discovery",
    limitations: "Not fully fetched in this pass",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Not fully fetched.",
      limitations: "Not fully fetched in this pass",
    },
    domain_topics: ["MBSE & Modeling", "Software & Enterprise Architecture"],
    summary:
      "Authoritative reference covering mission architecture documentation with mbse. Essential context for MBSE & Modeling, Software & Enterprise Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Not fully fetched in this pass.",
    cited_in_articles: [
      {
        slug: "62-mission-engineering-mission-architectures-and-operational-analysis",
        number: 62,
        title: "62 — Mission engineering, mission architecture and operational analysis",
        filename: "62_MISSION_ENGINEERING_MISSION_ARCHITECTURES_AND_OPERATIONAL_ANALYSIS.md",
      },
    ],
  },
  S191: {
    source_id: "S191",
    title: "NASA-HDBK-1009A — Systems Modeling Handbook for Systems Engineering",
    url: "https://standards.nasa.gov/system/files/tmp/2025-03-12-NASA-HDBK-1009A.pdf",
    source_type: "Government technical handbook",
    relevance: "SysML model lifecycle, model plan, metamodel, traceability and V&V work products",
    quality_signal: "Exa + Firecrawl targeted extraction + TinyFish full PDF fetch",
    limitations: "SysML v1.7 references; does not itself prescribe SysML v2 tool implementation",
    audit: {
      status: "Full fetch + targeted extraction",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "88-page 2025 NASA modeling handbook fetched and key sections extracted.",
      limitations: "SysML v1.7 references; does not itself prescribe SysML v2 tool implementation",
    },
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "MBSE & Modeling",
      "Verification & Validation",
    ],
    summary:
      "SysML model lifecycle, model plan, metamodel, traceability and V&V work products. Extraction detail: 88-page 2025 NASA modeling handbook fetched and key sections extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: SysML v1.7 references; does not itself prescribe SysML v2 tool implementation.",
    cited_in_articles: [
      {
        slug: "102-model-based-engineering-model-assurance-and-toolchain-governance",
        number: 102,
        title:
          "102 — Model-based engineering: model assurance, credibility and toolchain governance",
        filename: "102_MODEL_BASED_ENGINEERING_MODEL_ASSURANCE_AND_TOOLCHAIN_GOVERNANCE.md",
      },
      {
        slug: "63-requirements-engineering-formalization-and-evidence-chains",
        number: 63,
        title: "63 — Requirements engineering: formalization, traceability and evidence chains",
        filename: "63_REQUIREMENTS_ENGINEERING_FORMALIZATION_AND_EVIDENCE_CHAINS.md",
      },
    ],
  },
  S193: {
    source_id: "S193",
    title: "ATAM: Method for Architecture Evaluation — SEI",
    url: "https://www.sei.cmu.edu/documents/629/2000_005_001_13706.pdf",
    source_type: "Government-sponsored technical report",
    relevance: "Architecture trade-offs, sensitivity points, risks and scenarios",
    quality_signal: "Exa + Firecrawl full PDF fetch + TinyFish full PDF fetch",
    limitations:
      "Original report dated 2000; use alongside current architecture evaluation practice",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Original ATAM report fetched; method steps and risk analysis reviewed.",
      limitations:
        "Original report dated 2000; use alongside current architecture evaluation practice",
    },
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Architecture trade-offs, sensitivity points, risks and scenarios. Extraction detail: Original ATAM report fetched; method steps and risk analysis reviewed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Original report dated 2000; use alongside current architecture evaluation practice.",
    cited_in_articles: [
      {
        slug: "64-architecture-governance-conformance-and-evolution",
        number: 64,
        title: "64 — Architecture governance, conformance, evolution and erosion",
        filename: "64_ARCHITECTURE_GOVERNANCE_CONFORMANCE_AND_EVOLUTION.md",
      },
      {
        slug: "99-architecture-evaluation-iso42030-atam-and-evidence-based-review",
        number: 99,
        title: "99 — Architecture evaluation: ISO 42030, ATAM and evidence-based review",
        filename: "99_ARCHITECTURE_EVALUATION_ISO42030_ATAM_AND_EVIDENCE_BASED_REVIEW.md",
      },
    ],
  },
  S195: {
    source_id: "S195",
    title: "In Search of an Understandable Consensus Algorithm (Raft)",
    url: "https://raft.github.io/raft.pdf",
    source_type: "Peer-reviewed research paper",
    relevance: "Leader election, log replication and consensus safety",
    quality_signal: "Exa discovery",
    limitations: "Full PDF not fetched in this pass",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Original paper identified; full fetch not performed.",
      limitations: "Full PDF not fetched in this pass",
    },
    domain_topics: ["Distributed Systems", "Safety & Hazard Analysis"],
    summary:
      "Leader election, log replication and consensus safety. Extraction detail: Original paper identified; full fetch not performed.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Full PDF not fetched in this pass.",
    cited_in_articles: [
      {
        slug: "65-distributed-systems-correctness-consensus-and-time",
        number: 65,
        title: "65 — Distributed systems correctness: consensus, time, ordering and idempotency",
        filename: "65_DISTRIBUTED_SYSTEMS_CORRECTNESS_CONSENSUS_AND_TIME.md",
      },
    ],
  },
  S196: {
    source_id: "S196",
    title: "ZooKeeper: Wait-free Coordination for Internet-scale Systems",
    url: "https://pdos.csail.mit.edu/6.824/papers/zookeeper.pdf",
    source_type: "Peer-reviewed research paper",
    relevance: "Atomic broadcast, coordination and replicated state",
    quality_signal: "Exa discovery",
    limitations: "Full PDF not fetched in this pass",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Original paper identified; full fetch not performed.",
      limitations: "Full PDF not fetched in this pass",
    },
    domain_topics: ["Distributed Systems"],
    summary:
      "Atomic broadcast, coordination and replicated state. Extraction detail: Original paper identified; full fetch not performed.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Full PDF not fetched in this pass.",
    cited_in_articles: [
      {
        slug: "65-distributed-systems-correctness-consensus-and-time",
        number: 65,
        title: "65 — Distributed systems correctness: consensus, time, ordering and idempotency",
        filename: "65_DISTRIBUTED_SYSTEMS_CORRECTNESS_CONSENSUS_AND_TIME.md",
      },
    ],
  },
  S197: {
    source_id: "S197",
    title: "Paxos Made Live — An Engineering Perspective",
    url: "https://static.googleusercontent.com/media/research.google.com/en/us/archive/paxos_made_live.pdf",
    source_type: "First-party engineering paper",
    relevance: "Production engineering lessons for consensus-based systems",
    quality_signal: "Exa discovery",
    limitations: "Full PDF not fetched in this pass",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Original paper identified; full fetch not performed.",
      limitations: "Full PDF not fetched in this pass",
    },
    domain_topics: ["Distributed Systems"],
    summary:
      "Production engineering lessons for consensus-based systems. Extraction detail: Original paper identified; full fetch not performed.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Full PDF not fetched in this pass.",
    cited_in_articles: [
      {
        slug: "65-distributed-systems-correctness-consensus-and-time",
        number: 65,
        title: "65 — Distributed systems correctness: consensus, time, ordering and idempotency",
        filename: "65_DISTRIBUTED_SYSTEMS_CORRECTNESS_CONSENSUS_AND_TIME.md",
      },
    ],
  },
  S198: {
    source_id: "S198",
    title: "Eventual Consistency Today: Limitations, Extensions, and Beyond",
    url: "https://people.eecs.berkeley.edu/~alig/papers/eventual-consistency-limitations-extensions.pdf",
    source_type: "Academic/practitioner paper",
    relevance: "Consistency guarantees beyond basic eventual consistency",
    quality_signal: "Exa + TinyFish full PDF fetch",
    limitations: "Full text fetched; interpret in context of its publication date",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "PDF text fetched and reviewed.",
      limitations: "Full text fetched; interpret in context of its publication date",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Consistency guarantees beyond basic eventual consistency. Extraction detail: PDF text fetched and reviewed.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Full text fetched; interpret in context of its publication date.",
    cited_in_articles: [
      {
        slug: "65-distributed-systems-correctness-consensus-and-time",
        number: 65,
        title: "65 — Distributed systems correctness: consensus, time, ordering and idempotency",
        filename: "65_DISTRIBUTED_SYSTEMS_CORRECTNESS_CONSENSUS_AND_TIME.md",
      },
    ],
  },
  S199: {
    source_id: "S199",
    title: "Spanner: Google’s Globally-Distributed Database",
    url: "https://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/39966.pdf",
    source_type: "First-party systems research paper",
    relevance: "External consistency, TrueTime and globally distributed transactions",
    quality_signal: "Exa + Firecrawl full PDF fetch + TinyFish full PDF fetch",
    limitations: "Production architecture is specific to Google implementation and assumptions",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Spanner paper PDF fetched; TrueTime/consistency content reviewed.",
      limitations: "Production architecture is specific to Google implementation and assumptions",
    },
    domain_topics: ["Distributed Systems", "Data Architecture"],
    summary:
      "External consistency, TrueTime and globally distributed transactions. Extraction detail: Spanner paper PDF fetched; TrueTime/consistency content reviewed.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Production architecture is specific to Google implementation and assumptions.",
    cited_in_articles: [
      {
        slug: "65-distributed-systems-correctness-consensus-and-time",
        number: 65,
        title: "65 — Distributed systems correctness: consensus, time, ordering and idempotency",
        filename: "65_DISTRIBUTED_SYSTEMS_CORRECTNESS_CONSENSUS_AND_TIME.md",
      },
    ],
  },
  S200: {
    source_id: "S200",
    title: "Data Mesh: A Systematic Gray Literature Review",
    url: "https://dl.acm.org/doi/10.1145/3687301",
    source_type: "Research paper / systematic grey literature review",
    relevance: "Four data mesh principles, implementation patterns and challenges",
    quality_signal: "ACM Computing Surveys; Exa abstract and Firecrawl page scrape",
    limitations:
      "The systematic review analyzes 114 industrial gray-literature sources; full page provides abstract/metadata but premium features may be gated.",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish; Firecrawl",
      extraction_extent: "Full HTML paper fetched; review corpus and four principles extracted.",
      limitations: "Review synthesizes grey literature; not a normative standard",
    },
    domain_topics: ["Software & Enterprise Architecture", "Data Architecture"],
    summary:
      "Four data mesh principles, implementation patterns and challenges. Extraction detail: Full HTML paper fetched; review corpus and four principles extracted.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: The systematic review analyzes 114 industrial gray-literature sources; full page provides abstract/metadata but premium features may be gated..",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
      {
        slug: "90-data-platform-semantics-data-mesh-lakehouse-and-contract-governance",
        number: 90,
        title: "90 — Data-platform architecture: semantics, contracts, mesh and lakehouse choices",
        filename: "90_DATA_PLATFORM_SEMANTICS_DATA_MESH_LAKEHOUSE_AND_CONTRACT_GOVERNANCE.md",
      },
    ],
  },
  S201: {
    source_id: "S201",
    title: "How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh",
    url: "https://www.martinfowler.com/articles/data-monolith-to-mesh.html",
    source_type: "First-party practitioner article",
    relevance: "Data mesh principles and centralized data platform failure modes",
    quality_signal: "Exa + TinyFish full HTML fetch",
    limitations: "Concept paper; organizational results depend on context",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "Full article fetched and architecture principles reviewed.",
      limitations: "Concept paper; organizational results depend on context",
    },
    domain_topics: ["Distributed Systems", "Data Architecture"],
    summary:
      "Data mesh principles and centralized data platform failure modes. Extraction detail: Full article fetched and architecture principles reviewed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Concept paper; organizational results depend on context.",
    cited_in_articles: [
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
    ],
  },
  S202: {
    source_id: "S202",
    title: "The Data Lakehouse: Data Warehousing and More",
    url: "https://arxiv.org/html/2310.08697",
    source_type: "Research paper",
    relevance: "Lakehouse architecture and data warehouse requirements",
    quality_signal: "Exa + TinyFish full HTML fetch",
    limitations: "Research/preprint context; compare against product implementation docs",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "Full HTML paper fetched.",
      limitations: "Research/preprint context; compare against product implementation docs",
    },
    domain_topics: [
      "Requirements Engineering",
      "Software & Enterprise Architecture",
      "Data Architecture",
    ],
    summary:
      "Lakehouse architecture and data warehouse requirements. Extraction detail: Full HTML paper fetched.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Research/preprint context; compare against product implementation docs.",
    cited_in_articles: [
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
    ],
  },
  S203: {
    source_id: "S203",
    title: "Probabilistic Risk Assessment Procedures Guide for NASA Managers and Practitioners",
    url: "https://ntrs.nasa.gov/api/citations/20120001369/downloads/20120001369.pdf",
    source_type: "Government technical guide",
    relevance: "PRA scenario development, dependencies, uncertainty and human reliability",
    quality_signal: "Exa + Firecrawl full PDF fetch; TinyFish timeout",
    limitations: "2012 guide; check current NASA policy and project-specific requirements",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl",
      extraction_extent: "PRA guide full PDF fetched; targeted summary reviewed.",
      limitations: "2012 guide; check current NASA policy and project-specific requirements",
    },
    domain_topics: [
      "Systems Engineering",
      "Reliability & Dependability",
      "Human Systems Integration",
    ],
    summary:
      "PRA scenario development, dependencies, uncertainty and human reliability. Extraction detail: PRA guide full PDF fetched; targeted summary reviewed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2012 guide; check current NASA policy and project-specific requirements.",
    cited_in_articles: [
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
    ],
  },
  S204: {
    source_id: "S204",
    title: "Bayesian Inference for NASA Probabilistic Risk and Reliability Analysis",
    url: "https://ntrs.nasa.gov/api/citations/20090023159/downloads/20090023159.pdf",
    source_type: "Government technical handbook",
    relevance: "Bayesian inference and parameter estimation for sparse risk/reliability data",
    quality_signal: "Exa + Firecrawl full PDF fetch",
    limitations: "2009 handbook; examples and tools may be dated",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl",
      extraction_extent: "NASA Bayesian reliability handbook full PDF fetched.",
      limitations: "2009 handbook; examples and tools may be dated",
    },
    domain_topics: [
      "Systems Engineering",
      "Reliability & Dependability",
      "Data Architecture",
      "Decision Analysis & Trade Studies",
    ],
    summary:
      "Bayesian inference and parameter estimation for sparse risk/reliability data. Extraction detail: NASA Bayesian reliability handbook full PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2009 handbook; examples and tools may be dated.",
    cited_in_articles: [
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
    ],
  },
  S206: {
    source_id: "S206",
    title: "Procedures for Conducting Common Cause Failure Analysis in PSA — IAEA-TECDOC-648",
    url: "https://www-pub.iaea.org/MTCD/Publications/PDF/te_648_web.pdf",
    source_type: "Intergovernmental technical report",
    relevance: "CCF identification and modeling in probabilistic safety assessment",
    quality_signal: "Exa + TinyFish full PDF fetch",
    limitations: "Published 1992; historical method reference, verify current nuclear guidance",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "IAEA CCF procedures document text fetched.",
      limitations: "Published 1992; historical method reference, verify current nuclear guidance",
    },
    domain_topics: ["Safety & Hazard Analysis", "MBSE & Modeling"],
    summary:
      "CCF identification and modeling in probabilistic safety assessment. Extraction detail: IAEA CCF procedures document text fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Published 1992; historical method reference, verify current nuclear guidance.",
    cited_in_articles: [
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S207: {
    source_id: "S207",
    title: "NASA Methodology for Physics of Failure-Based Reliability Assessments",
    url: "https://ntrs.nasa.gov/api/citations/20230004376/downloads/20230004376.pdf",
    source_type: "Government technical handbook",
    relevance: "Physics-of-failure mechanisms and assessment methodology",
    quality_signal: "Exa + TinyFish full PDF fetch",
    limitations: "2024 publication; model validity depends on stress/profile assumptions",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "NASA PoF reliability handbook fetched.",
      limitations: "2024 publication; model validity depends on stress/profile assumptions",
    },
    domain_topics: ["Systems Engineering", "Reliability & Dependability"],
    summary:
      "Physics-of-failure mechanisms and assessment methodology. Extraction detail: NASA PoF reliability handbook fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2024 publication; model validity depends on stress/profile assumptions.",
    cited_in_articles: [
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S208: {
    source_id: "S208",
    title: "NASA System Safety Handbook, Volume 1",
    url: "https://ntrs.nasa.gov/api/citations/20120003291/downloads/20120003291.pdf",
    source_type: "Government safety handbook",
    relevance: "Lifecycle system-safety framework and risk-informed safety case",
    quality_signal: "Exa + Firecrawl + TinyFish full PDF fetch",
    limitations: "2011 handbook; verify current NASA and sector-specific safety requirements",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "NASA System Safety Handbook full PDF fetched.",
      limitations: "2011 handbook; verify current NASA and sector-specific safety requirements",
    },
    domain_topics: [
      "Systems Engineering",
      "Safety & Hazard Analysis",
      "Product Support & Lifecycle",
    ],
    summary:
      "Lifecycle system-safety framework and risk-informed safety case. Extraction detail: NASA System Safety Handbook full PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2011 handbook; verify current NASA and sector-specific safety requirements.",
    cited_in_articles: [
      {
        slug: "68-system-safety-stpa-safety-cases-and-hazard-control",
        number: 68,
        title: "68 — System safety: STPA, hazard control and safety cases",
        filename: "68_SYSTEM_SAFETY_STPA_SAFETY_CASES_AND_HAZARD_CONTROL.md",
      },
    ],
  },
  S209: {
    source_id: "S209",
    title: "An STPA Primer — MIT",
    url: "https://psas.scripts.mit.edu/home/wp-content/uploads/2013/10/An-STPA-Primer-version-0-4.pdf",
    source_type: "Academic/technical primer",
    relevance: "System-Theoretic Process Analysis and unsafe control actions",
    quality_signal: "Exa + Firecrawl + TinyFish full PDF fetch",
    limitations: "Version 1, 2013; some sections marked incomplete in the primer",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "STPA primer fetched; method steps and limitations reviewed.",
      limitations: "Version 1, 2013; some sections marked incomplete in the primer",
    },
    domain_topics: ["Safety & Hazard Analysis"],
    summary:
      "System-Theoretic Process Analysis and unsafe control actions. Extraction detail: STPA primer fetched; method steps and limitations reviewed.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Version 1, 2013; some sections marked incomplete in the primer.",
    cited_in_articles: [
      {
        slug: "68-system-safety-stpa-safety-cases-and-hazard-control",
        number: 68,
        title: "68 — System safety: STPA, hazard control and safety cases",
        filename: "68_SYSTEM_SAFETY_STPA_SAFETY_CASES_AND_HAZARD_CONTROL.md",
      },
    ],
  },
  S211: {
    source_id: "S211",
    title: "NIST SP 800-160 Vol. 2 Rev. 1 — Developing Cyber-Resilient Systems",
    url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-160v2r1.pdf",
    source_type: "Government technical publication",
    relevance: "Cyber-resilience goals, objectives and techniques",
    quality_signal: "Exa + Firecrawl full PDF fetch",
    limitations: "Use with current NIST publication history and organization risk context",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl",
      extraction_extent: "NIST cyber-resiliency engineering PDF fetched and summarized.",
      limitations: "Use with current NIST publication history and organization risk context",
    },
    domain_topics: ["Security Architecture"],
    summary:
      "Cyber-resilience goals, objectives and techniques. Extraction detail: NIST cyber-resiliency engineering PDF fetched and summarized.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Use with current NIST publication history and organization risk context.",
    cited_in_articles: [
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S212: {
    source_id: "S212",
    title: "NIST SP 800-218 — Secure Software Development Framework v1.1",
    url: "https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-218.pdf",
    source_type: "Government technical framework",
    relevance: "Secure software development practices across SDLC",
    quality_signal: "Exa + Firecrawl + TinyFish full PDF fetch",
    limitations: "2022 publication; verify subsequent profiles/updates",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "NIST SSDF PDF fetched.",
      limitations: "2022 publication; verify subsequent profiles/updates",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Secure software development practices across SDLC. Extraction detail: NIST SSDF PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2022 publication; verify subsequent profiles/updates.",
    cited_in_articles: [
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S213: {
    source_id: "S213",
    title: "NIST SP 800-161 Rev. 1 Update 1 — Cybersecurity Supply Chain Risk Management",
    url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf",
    source_type: "Government technical publication",
    relevance: "Supply-chain cyber risk management for systems and organizations",
    quality_signal: "Exa + Firecrawl full PDF fetch; TinyFish timeout",
    limitations:
      "Tailor controls to supplier relationships, system criticality and acquisition context",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl",
      extraction_extent: "NIST C-SCRM PDF fetched; TinyFish timed out.",
      limitations:
        "Tailor controls to supplier relationships, system criticality and acquisition context",
    },
    domain_topics: ["Security Architecture"],
    summary:
      "Supply-chain cyber risk management for systems and organizations. Extraction detail: NIST C-SCRM PDF fetched; TinyFish timed out.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Tailor controls to supplier relationships, system criticality and acquisition context.",
    cited_in_articles: [
      {
        slug: "69-systems-security-cyber-resilience-and-supply-chain-assurance",
        number: 69,
        title: "69 — Systems security, cyber resilience and supply-chain assurance",
        filename: "69_SYSTEMS_SECURITY_CYBER_RESILIENCE_AND_SUPPLY_CHAIN_ASSURANCE.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S216: {
    source_id: "S216",
    title: "Human-Machine Teaming Systems Engineering Guide — MITRE",
    url: "https://www.mitre.org/sites/default/files/2021-11/prs-17-4208-human-machine-teaming-systems-engineering-guide.pdf",
    source_type: "Government-sponsored technical guide",
    relevance: "Observability, predictability, adaptability, directability and HMT requirements",
    quality_signal: "Exa discovery; TinyFish attempted",
    limitations: "TinyFish target_unreachable; full document not extracted",
    audit: {
      status: "Discovery only / fetch unreachable",
      tools: "Exa; TinyFish attempted",
      extraction_extent: "TinyFish target_unreachable.",
      limitations: "TinyFish target_unreachable; full document not extracted",
    },
    domain_topics: ["Systems Engineering", "Requirements Engineering", "Human Systems Integration"],
    summary:
      "Observability, predictability, adaptability, directability and HMT requirements. Extraction detail: TinyFish target_unreachable.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: TinyFish target_unreachable; full document not extracted.",
    cited_in_articles: [
      {
        slug: "71-human-systems-integration-automation-and-cognitive-engineering",
        number: 71,
        title: "71 — Human systems integration, automation and cognitive engineering",
        filename: "71_HUMAN_SYSTEMS_INTEGRATION_AUTOMATION_AND_COGNITIVE_ENGINEERING.md",
      },
    ],
  },
  S217: {
    source_id: "S217",
    title: "Learning from Automation Surprises and “Going Sour” Accidents",
    url: "https://ntrs.nasa.gov/api/citations/19980016965/downloads/19980016965.pdf",
    source_type: "Government research report",
    relevance: "Human-centered automation and automation surprise",
    quality_signal: "Exa + TinyFish full PDF fetch",
    limitations: "1998 report; historical research, not current certification guidance",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "NASA automation-surprise report PDF fetched.",
      limitations: "1998 report; historical research, not current certification guidance",
    },
    domain_topics: ["Human Systems Integration"],
    summary:
      "Human-centered automation and automation surprise. Extraction detail: NASA automation-surprise report PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 1998 report; historical research, not current certification guidance.",
    cited_in_articles: [
      {
        slug: "71-human-systems-integration-automation-and-cognitive-engineering",
        number: 71,
        title: "71 — Human systems integration, automation and cognitive engineering",
        filename: "71_HUMAN_SYSTEMS_INTEGRATION_AUTOMATION_AND_COGNITIVE_ENGINEERING.md",
      },
    ],
  },
  S218: {
    source_id: "S218",
    title: "Challenges, Research, and Opportunities for Human–Machine Teaming in Aviation",
    url: "https://ntrs.nasa.gov/api/citations/20250002888/downloads/NASA-TM-20250002888.pdf",
    source_type: "Government technical memorandum",
    relevance: "Human-machine teaming research and assurance in aviation",
    quality_signal: "Exa + TinyFish full PDF fetch",
    limitations:
      "2025 publication; research directions do not replace aviation certification basis",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "NASA 2025 HMT technical memorandum fetched.",
      limitations:
        "2025 publication; research directions do not replace aviation certification basis",
    },
    domain_topics: ["Human Systems Integration"],
    summary:
      "Human-machine teaming research and assurance in aviation. Extraction detail: NASA 2025 HMT technical memorandum fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2025 publication; research directions do not replace aviation certification basis.",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "71-human-systems-integration-automation-and-cognitive-engineering",
        number: 71,
        title: "71 — Human systems integration, automation and cognitive engineering",
        filename: "71_HUMAN_SYSTEMS_INTEGRATION_AUTOMATION_AND_COGNITIVE_ENGINEERING.md",
      },
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
    ],
  },
  S220: {
    source_id: "S220",
    title:
      "Analysis of Distributed Control Systems with Shared Communication and Computation Resources",
    url: "https://web.ece.ucsb.edu/~hespanha/published/sharedresources_final.pdf",
    source_type: "Academic research paper",
    relevance: "Networked control timing, sampling, delays and scheduling",
    quality_signal: "Exa + TinyFish full PDF fetch",
    limitations: "Research paper; applicability depends on plant and system assumptions",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "Networked control systems paper fetched.",
      limitations: "Research paper; applicability depends on plant and system assumptions",
    },
    domain_topics: ["Distributed Systems"],
    summary:
      "Networked control timing, sampling, delays and scheduling. Extraction detail: Networked control systems paper fetched.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Research paper; applicability depends on plant and system assumptions.",
    cited_in_articles: [
      {
        slug: "72-real-time-control-embedded-and-cyber-physical-assurance",
        number: 72,
        title: "72 — Real-time control, embedded systems and cyber-physical assurance",
        filename: "72_REAL_TIME_CONTROL_EMBEDDED_AND_CYBER_PHYSICAL_ASSURANCE.md",
      },
    ],
  },
  S222: {
    source_id: "S222",
    title: "Hybrid Simulation Modelling in Operational Research: A State-of-the-Art Review",
    url: "https://eprints.soton.ac.uk/425363/2/1_s2.0_S0377221718308786_main.pdf",
    source_type: "Academic review paper",
    relevance: "Combining discrete-event, system dynamics and agent-based simulation",
    quality_signal: "Exa discovery",
    limitations: "TinyFish target_unreachable; full text not fetched",
    audit: {
      status: "Discovery only / fetch unreachable",
      tools: "Exa; TinyFish attempted",
      extraction_extent: "TinyFish target_unreachable.",
      limitations: "TinyFish target_unreachable; full text not fetched",
    },
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Combining discrete-event, system dynamics and agent-based simulation. Extraction detail: TinyFish target_unreachable.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: TinyFish target_unreachable; full text not fetched.",
    cited_in_articles: [
      {
        slug: "73-operations-research-robust-decisions-and-hybrid-simulation",
        number: 73,
        title: "73 — Operations research, robust decisions and hybrid simulation",
        filename: "73_OPERATIONS_RESEARCH_ROBUST_DECISIONS_AND_HYBRID_SIMULATION.md",
      },
    ],
  },
  S224: {
    source_id: "S224",
    title: "External Technical Root Cause Analysis — Channel File 291",
    url: "https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf",
    source_type: "First-party incident report",
    relevance: "Input validation mismatch, runtime memory safety, testing and staged deployment",
    quality_signal: "Exa + Firecrawl + TinyFish full PDF fetch",
    limitations: "Vendor first-party RCA; distinguish its analysis from independent review",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent:
        "First-party incident RCA fetched; input mismatch and mitigations reviewed.",
      limitations: "Vendor first-party RCA; distinguish its analysis from independent review",
    },
    domain_topics: ["Safety & Hazard Analysis", "Verification & Validation"],
    summary:
      "Input validation mismatch, runtime memory safety, testing and staged deployment. Extraction detail: First-party incident RCA fetched; input mismatch and mitigations reviewed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Vendor first-party RCA; distinguish its analysis from independent review.",
    cited_in_articles: [
      {
        slug: "75-engineering-incident-forensics-and-system-failure-cases-ii",
        number: 75,
        title: "75 — Engineering incident forensics and system failure cases II",
        filename: "75_ENGINEERING_INCIDENT_FORENSICS_AND_SYSTEM_FAILURE_CASES_II.md",
      },
      {
        slug: "93-incident-forensics-causal-analysis-and-learning-systems",
        number: 93,
        title:
          "93 — Incident forensics: causal analysis, organizational learning and design feedback",
        filename: "93_INCIDENT_FORENSICS_CAUSAL_ANALYSIS_AND_LEARNING_SYSTEMS.md",
      },
    ],
  },
  S225: {
    source_id: "S225",
    title: "Independent Review of NATS Flight Planning System Failure — CAP2993",
    url: "https://www.caa.co.uk/publication/download/23337",
    source_type: "Regulator independent investigation",
    relevance: "Flight-planning outage, contingency, resilience, recovery and governance",
    quality_signal: "Exa + Firecrawl + TinyFish full PDF fetch",
    limitations: "Incident report dated 31 May 2024; context-specific to UK air traffic",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "CAA final independent review PDF fetched.",
      limitations: "Incident report dated 31 May 2024; context-specific to UK air traffic",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Flight-planning outage, contingency, resilience, recovery and governance. Extraction detail: CAA final independent review PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Incident report dated 31 May 2024; context-specific to UK air traffic.",
    cited_in_articles: [
      {
        slug: "75-engineering-incident-forensics-and-system-failure-cases-ii",
        number: 75,
        title: "75 — Engineering incident forensics and system failure cases II",
        filename: "75_ENGINEERING_INCIDENT_FORENSICS_AND_SYSTEM_FAILURE_CASES_II.md",
      },
      {
        slug: "93-incident-forensics-causal-analysis-and-learning-systems",
        number: 93,
        title:
          "93 — Incident forensics: causal analysis, organizational learning and design feedback",
        filename: "93_INCIDENT_FORENSICS_CAUSAL_ANALYSIS_AND_LEARNING_SYSTEMS.md",
      },
    ],
  },
  S226: {
    source_id: "S226",
    title: "NTSB AIR-25-04 — Alaska Airlines Flight 1282",
    url: "https://www-s.ntsb.gov/investigations/AccidentReports/Reports/AIR2504.pdf",
    source_type: "Independent safety investigation",
    relevance: "Exit door plug separation and lifecycle/production/oversight factors",
    quality_signal: "Exa + Firecrawl + TinyFish full PDF fetch",
    limitations: "Final report dated 24 June 2025; use official findings and recommendations",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "NTSB final AIR-25-04 PDF fetched.",
      limitations: "Final report dated 24 June 2025; use official findings and recommendations",
    },
    domain_topics: ["Safety & Hazard Analysis", "Product Support & Lifecycle"],
    summary:
      "Exit door plug separation and lifecycle/production/oversight factors. Extraction detail: NTSB final AIR-25-04 PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Final report dated 24 June 2025; use official findings and recommendations.",
    cited_in_articles: [
      {
        slug: "75-engineering-incident-forensics-and-system-failure-cases-ii",
        number: 75,
        title: "75 — Engineering incident forensics and system failure cases II",
        filename: "75_ENGINEERING_INCIDENT_FORENSICS_AND_SYSTEM_FAILURE_CASES_II.md",
      },
      {
        slug: "93-incident-forensics-causal-analysis-and-learning-systems",
        number: 93,
        title:
          "93 — Incident forensics: causal analysis, organizational learning and design feedback",
        filename: "93_INCIDENT_FORENSICS_CAUSAL_ANALYSIS_AND_LEARNING_SYSTEMS.md",
      },
    ],
  },
  S227: {
    source_id: "S227",
    title: "ESA Ariane 501 Inquiry Board Report",
    url: "https://esamultimedia.esa.int/docs/esa-x-1819eng.pdf",
    source_type: "Independent technical investigation",
    relevance: "Ariane 5 Flight 501 failure investigation",
    quality_signal: "Exa discovery",
    limitations: "TinyFish returned empty content; not counted as full fetch",
    audit: {
      status: "Discovery / empty fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "TinyFish returned empty content; not counted as read.",
      limitations: "TinyFish returned empty content; not counted as full fetch",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Ariane 5 Flight 501 failure investigation. Extraction detail: TinyFish returned empty content; not counted as read.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: TinyFish returned empty content; not counted as full fetch.",
    cited_in_articles: [
      {
        slug: "75-engineering-incident-forensics-and-system-failure-cases-ii",
        number: 75,
        title: "75 — Engineering incident forensics and system failure cases II",
        filename: "75_ENGINEERING_INCIDENT_FORENSICS_AND_SYSTEM_FAILURE_CASES_II.md",
      },
      {
        slug: "93-incident-forensics-causal-analysis-and-learning-systems",
        number: 93,
        title:
          "93 — Incident forensics: causal analysis, organizational learning and design feedback",
        filename: "93_INCIDENT_FORENSICS_CAUSAL_ANALYSIS_AND_LEARNING_SYSTEMS.md",
      },
    ],
  },
  S228: {
    source_id: "S228",
    title: "Independent Review of RTGS Outage on 20 October 2014 — Bank of England",
    url: "https://www.bankofengland.co.uk/-/media/boe/files/report/2015/independent-review-of-rtgs-outage-on-20-october-2014.pdf",
    source_type: "Independent incident review",
    relevance: "Configuration changes and latent process defects in critical payment system",
    quality_signal: "Exa discovery",
    limitations: "TinyFish target_unreachable; full extraction not completed",
    audit: {
      status: "Discovery / fetch unreachable",
      tools: "Exa; TinyFish attempted",
      extraction_extent: "TinyFish target_unreachable.",
      limitations: "TinyFish target_unreachable; full extraction not completed",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Configuration changes and latent process defects in critical payment system. Extraction detail: TinyFish target_unreachable.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: TinyFish target_unreachable; full extraction not completed.",
    cited_in_articles: [
      {
        slug: "75-engineering-incident-forensics-and-system-failure-cases-ii",
        number: 75,
        title: "75 — Engineering incident forensics and system failure cases II",
        filename: "75_ENGINEERING_INCIDENT_FORENSICS_AND_SYSTEM_FAILURE_CASES_II.md",
      },
      {
        slug: "93-incident-forensics-causal-analysis-and-learning-systems",
        number: 93,
        title:
          "93 — Incident forensics: causal analysis, organizational learning and design feedback",
        filename: "93_INCIDENT_FORENSICS_CAUSAL_ANALYSIS_AND_LEARNING_SYSTEMS.md",
      },
    ],
  },
  S229: {
    source_id: "S229",
    title: "OWASP Top 10 for Agentic Applications 2026",
    url: "https://genai.owasp.org/download/52117/",
    source_type: "Community security taxonomy",
    relevance:
      "Agent goal hijack, tool misuse, identity/privilege, supply chain, RCE, memory, inter-agent, cascades, human trust, rogue agents",
    quality_signal: "Exa + TinyFish full document fetch",
    limitations:
      "Version dated December 2025; threat taxonomy and community guidance, not a standard",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent:
        "OWASP Agentic Top 10 2026 document fetched, including full risk taxonomy.",
      limitations:
        "Version dated December 2025; threat taxonomy and community guidance, not a standard",
    },
    domain_topics: ["Security Architecture", "Human Systems Integration"],
    summary:
      "Agent goal hijack, tool misuse, identity/privilege, supply chain, RCE, memory, inter-agent, cascades, human trust, rogue agents. Extraction detail: OWASP Agentic Top 10 2026 document fetched, including full risk taxonomy.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Version dated December 2025; threat taxonomy and community guidance, not a standard.",
    cited_in_articles: [
      {
        slug: "76-agentic-ai-systems-threat-model-evaluation-and-control-2026",
        number: 76,
        title: "76 — Agentic AI systems: threat modeling, evaluation and control (2026)",
        filename: "76_AGENTIC_AI_SYSTEMS_THREAT_MODEL_EVALUATION_AND_CONTROL_2026.md",
      },
    ],
  },
  S230: {
    source_id: "S230",
    title: "Careful Adoption of Agentic AI Services — Australian Cyber Security Centre",
    url: "https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services",
    source_type: "Government cybersecurity guidance",
    relevance: "Agent evaluation, least privilege, approvals, monitoring and phased autonomy",
    quality_signal: "Exa + TinyFish full HTML fetch",
    limitations:
      "Guidance for government, industry and critical infrastructure; tailor to local law",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "ACSC agentic AI adoption guidance fetched and controls reviewed.",
      limitations:
        "Guidance for government, industry and critical infrastructure; tailor to local law",
    },
    domain_topics: ["Security Architecture"],
    summary:
      "Agent evaluation, least privilege, approvals, monitoring and phased autonomy. Extraction detail: ACSC agentic AI adoption guidance fetched and controls reviewed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Guidance for government, industry and critical infrastructure; tailor to local law.",
    cited_in_articles: [
      {
        slug: "76-agentic-ai-systems-threat-model-evaluation-and-control-2026",
        number: 76,
        title: "76 — Agentic AI systems: threat modeling, evaluation and control (2026)",
        filename: "76_AGENTIC_AI_SYSTEMS_THREAT_MODEL_EVALUATION_AND_CONTROL_2026.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
    ],
  },
  S231: {
    source_id: "S231",
    title: "NIST AI RMF Playbook",
    url: "https://airc.nist.gov/docs/AI_RMF_Playbook.pdf",
    source_type: "Government risk-management resource",
    relevance: "GOVERN, MAP, MEASURE and MANAGE actions for AI risk",
    quality_signal: "Exa discovery + TinyFish full PDF fetch",
    limitations:
      "Playbook is informative material, not a certification or independent assurance result",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent: "NIST AI RMF Playbook PDF fetched.",
      limitations:
        "Playbook is informative material, not a certification or independent assurance result",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "GOVERN, MAP, MEASURE and MANAGE actions for AI risk. Extraction detail: NIST AI RMF Playbook PDF fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Playbook is informative material, not a certification or independent assurance result.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S232: {
    source_id: "S232",
    title: "NASA Software Engineering Handbook — AI/Super Intelligence Software Assurance",
    url: "https://swehb.nasa.gov/spaces/SWEHBVD/pages/184320002/8.25+-+Super+Intelligence+And+Software+Assurance",
    source_type: "Government software assurance handbook section",
    relevance:
      "AI/SI assurance, human oversight, uncertainty, data quality and lifecycle artifacts",
    quality_signal: "Exa + Firecrawl + TinyFish full HTML fetch",
    limitations:
      "NASA handbook terminology uses “Super Intelligence”; page revision/context should be checked live",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "NASA handbook section fetched; terminology preserved as in source.",
      limitations:
        "NASA handbook terminology uses “Super Intelligence”; page revision/context should be checked live",
    },
    domain_topics: [
      "Systems Engineering",
      "Data Architecture",
      "Human Systems Integration",
      "Product Support & Lifecycle",
    ],
    summary:
      "AI/SI assurance, human oversight, uncertainty, data quality and lifecycle artifacts. Extraction detail: NASA handbook section fetched; terminology preserved as in source.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA handbook terminology uses “Super Intelligence”; page revision/context should be checked live.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
      {
        slug: "41-human-factors-socio-technical-and-organization-design",
        number: 41,
        title: "41 — Human factors, socio-technical systems and organization design",
        filename: "41_HUMAN_FACTORS_SOCIO_TECHNICAL_AND_ORGANIZATION_DESIGN.md",
      },
      {
        slug: "74-functional-safety-standards-by-sector-and-assurance-boundaries",
        number: 74,
        title: "74 — Functional-safety standards by sector and assurance boundaries",
        filename: "74_FUNCTIONAL_SAFETY_STANDARDS_BY_SECTOR_AND_ASSURANCE_BOUNDARIES.md",
      },
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S234: {
    source_id: "S234",
    title: "DoD Manual 4151.25 — Reliability-Centered Maintenance (2024)",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/415125p.pdf",
    source_type: "Government manual",
    relevance: "RCM sequence, consequence logic, task types, P-F interval and documentation",
    quality_signal: "Exa discovery + Firecrawl targeted extraction",
    limitations: "Applicable to DoD context; confirm current issuance and tailoring",
    audit: {
      status: "Targeted extraction",
      tools: "Exa; Firecrawl",
      extraction_extent:
        "RCM method and task logic targeted extraction; TinyFish target_unreachable.",
      limitations: "Applicable to DoD context; confirm current issuance and tailoring",
    },
    domain_topics: [
      "Reliability & Dependability",
      "Regulated Sector Assurance",
      "Product Support & Lifecycle",
    ],
    summary:
      "RCM sequence, consequence logic, task types, P-F interval and documentation. Extraction detail: RCM method and task logic targeted extraction; TinyFish target_unreachable.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Applicable to DoD context; confirm current issuance and tailoring.",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "77-reliability-centered-maintenance-and-integrated-product-support",
        number: 77,
        title: "77 — Reliability-centered maintenance and integrated product support",
        filename: "77_RELIABILITY_CENTERED_MAINTENANCE_AND_INTEGRATED_PRODUCT_SUPPORT.md",
      },
    ],
  },
  S235: {
    source_id: "S235",
    title: "S-Series Integrated Product Support Specifications — AIA",
    url: "https://www.aia-aerospace.org/standards/s-series-ips/",
    source_type: "Industry standards suite",
    relevance: "Integrated product support data and processes across lifecycle",
    quality_signal: "Exa discovery",
    limitations: "Standards-suite page; individual specifications may be licensed",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Standards suite overview identified; individual specifications may be licensed.",
      limitations: "Standards-suite page; individual specifications may be licensed",
    },
    domain_topics: ["Data Architecture", "Product Support & Lifecycle"],
    summary:
      "Integrated product support data and processes across lifecycle. Extraction detail: Standards suite overview identified; individual specifications may be licensed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Standards-suite page; individual specifications may be licensed.",
    cited_in_articles: [
      {
        slug: "77-reliability-centered-maintenance-and-integrated-product-support",
        number: 77,
        title: "77 — Reliability-centered maintenance and integrated product support",
        filename: "77_RELIABILITY_CENTERED_MAINTENANCE_AND_INTEGRATED_PRODUCT_SUPPORT.md",
      },
    ],
  },
  S236: {
    source_id: "S236",
    title: "NIST AI Risk Management Framework — current program page",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    source_type: "Government risk framework portal",
    relevance: "AI RMF status and 2026 critical-infrastructure profile work",
    quality_signal: "TinyFish full HTML fetch",
    limitations: "NIST page states AI RMF 1.0 is being revised; monitor for later releases",
    audit: {
      status: "Full fetch",
      tools: "TinyFish",
      extraction_extent:
        "Current NIST AI RMF portal page fetched; revision and 2026 profile status noted.",
      limitations: "NIST page states AI RMF 1.0 is being revised; monitor for later releases",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "AI RMF status and 2026 critical-infrastructure profile work. Extraction detail: Current NIST AI RMF portal page fetched; revision and 2026 profile status noted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NIST page states AI RMF 1.0 is being revised; monitor for later releases.",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S244: {
    source_id: "S244",
    title: "ISO/IEC/IEEE 16085:2021 — Systems and software engineering — Risk management",
    url: "https://www.iso.org/standard/74371.html",
    source_type: "Standards publisher search",
    relevance: "Lifecycle risk management process reference",
    quality_signal: "ISO official standard record; Exa and Firecrawl full page extraction",
    limitations: "Published edition 1 (2021-01), under review; full normative text is licensed.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Publisher search page only; resolve specific version before use.",
      limitations: "Search landing page; resolve current edition before formal use",
    },
    domain_topics: ["Product Support & Lifecycle"],
    summary:
      "Lifecycle risk management process reference. Extraction detail: Publisher search page only; resolve specific version before use.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Published edition 1 (2021-01), under review; full normative text is licensed..",
    cited_in_articles: [
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S246: {
    source_id: "S246",
    title: "Goal Structuring Notation (GSN) Community Standard v3",
    url: "https://scsc.uk/scsc-141c",
    source_type: "Community engineering standard",
    relevance:
      "Structured assurance arguments: claims, context, assumptions, strategies and evidence",
    quality_signal:
      "Safety-Critical Systems Club Assurance Case Working Group; Firecrawl page scrape and TinyFish download",
    limitations:
      "Version 3 is the current version identified on the owner page in this research snapshot; confirm any later updates.",
    audit: {
      status: "Targeted page fetch + downloadable standard discovered",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Owner page fetched; linked v3 standard landing/download identified.",
      limitations: "Normative standard file itself not fully parsed; verify latest release.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Structured assurance arguments: claims, context, assumptions, strategies and evidence. Extraction detail: Owner page fetched; linked v3 standard landing/download identified.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Version 3 is the current version identified on the owner page in this research snapshot; confirm any later updates..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "82-assurance-cases-gsn-argument-engineering-and-evidence-quality",
        number: 82,
        title: "82 — Assurance cases, GSN argument engineering and evidence quality",
        filename: "82_ASSURANCE_CASES_GSN_ARGUMENT_ENGINEERING_AND_EVIDENCE_QUALITY.md",
      },
    ],
  },
  S247: {
    source_id: "S247",
    title:
      "Current Practices in Constructing and Evaluating Assurance Cases With Applications to Aviation",
    url: "https://ntrs.nasa.gov/api/citations/20150002819/downloads/20150002819.pdf",
    source_type: "NASA technical research report",
    relevance: "Assurance-case construction, review, argument structures and aviation examples",
    quality_signal: "NASA NTRS; Exa discovery; Firecrawl/TinyFish not full-fetch in this pass",
    limitations: "Research report, not a regulator-approved certification basis.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Abstract and snippets only; not full-fetched in current pass.",
      limitations: "NASA report; do not treat as certification policy.",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "Assurance-case construction, review, argument structures and aviation examples. Extraction detail: Abstract and snippets only; not full-fetched in current pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Research report, not a regulator-approved certification basis..",
    cited_in_articles: [
      {
        slug: "82-assurance-cases-gsn-argument-engineering-and-evidence-quality",
        number: 82,
        title: "82 — Assurance cases, GSN argument engineering and evidence quality",
        filename: "82_ASSURANCE_CASES_GSN_ARGUMENT_ENGINEERING_AND_EVIDENCE_QUALITY.md",
      },
    ],
  },
  S249: {
    source_id: "S249",
    title: "NATO Architecture Framework (NAF) Version 4.1",
    url: "https://www.nato.int/content/dam/nato/webready/documents/publications-and-reports/NATO-Architecture-Framework-v4-1-en.pdf",
    source_type: "Alliance architecture framework",
    relevance: "Architecture viewpoints, methods, governance and interoperability",
    quality_signal: "NATO; Firecrawl and TinyFish PDF extraction",
    limitations:
      "NATO-specific framework; align with national/organizational mandates and data exchange requirements.",
    audit: {
      status: "Full fetch / targeted extraction",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "PDF title, version, structure and methods/viewpoint framework extracted.",
      limitations: "NATO architecture context; use applicable federation and national governance.",
    },
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Architecture viewpoints, methods, governance and interoperability. Extraction detail: PDF title, version, structure and methods/viewpoint framework extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NATO-specific framework; align with national/organizational mandates and data exchange requirements..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S250: {
    source_id: "S250",
    title: "NASA Configuration Management Standard NASA-STD-0005",
    url: "https://standards.nasa.gov/standard/NASA/NASA-STD-0005",
    source_type: "Government standard record",
    relevance:
      "Configuration planning, identification, control, accounting, verification and audit",
    quality_signal: "NASA Standards record; Firecrawl full HTML scrape",
    limitations:
      "Explicitly INACTIVE for new design since 2015-03-09; retain for historical context only, do not present as current NASA requirement.",
    audit: {
      status: "Full metadata fetch",
      tools: "Firecrawl",
      extraction_extent:
        "Official status page fetched; scope, version and lifecycle functions captured.",
      limitations:
        "Marked INACTIVE for new design since 2015-03-09; not current standard for new design.",
    },
    domain_topics: ["Systems Engineering", "Verification & Validation"],
    summary:
      "Configuration planning, identification, control, accounting, verification and audit. Extraction detail: Official status page fetched; scope, version and lifecycle functions captured.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Explicitly INACTIVE for new design since 2015-03-09; retain for historical context only, do not present as current NASA requirement..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "85-configuration-management-baselines-digital-thread-and-product-data",
        number: 85,
        title: "85 — Configuration management, baselines, digital thread and product data",
        filename: "85_CONFIGURATION_MANAGEMENT_BASELINES_DIGITAL_THREAD_AND_PRODUCT_DATA.md",
      },
      {
        slug: "92-sector-assurance-applicability-and-regulatory-evidence-chains",
        number: 92,
        title: "92 — Sector assurance applicability and regulatory evidence chains",
        filename: "92_SECTOR_ASSURANCE_APPLICABILITY_AND_REGULATORY_EVIDENCE_CHAINS.md",
      },
      {
        slug: "94-research-evidence-provenance-and-standard-version-control",
        number: 94,
        title: "94 — Research evidence, provenance and standard-version control",
        filename: "94_RESEARCH_EVIDENCE_PROVENANCE_AND_STANDARD_VERSION_CONTROL.md",
      },
    ],
  },
  S251: {
    source_id: "S251",
    title: "Product Line Analysis: A Practical Introduction — CMU/SEI-2001-TR-001",
    url: "https://www.sei.cmu.edu/documents/649/2001_005_001_13853.pdf",
    source_type: "Government-sponsored research report",
    relevance:
      "Product-line requirements, feature models, commonality, variability and architecture reuse",
    quality_signal: "CMU SEI; Exa discovery; Firecrawl and TinyFish PDF extraction",
    limitations:
      "Foundational 2001 report; pair with current product-line practice and domain-specific evidence.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Full report beginning and modeling/requirements contents extracted.",
      limitations: "2001 foundational report; pair with current product-line evidence.",
    },
    domain_topics: [
      "Requirements Engineering",
      "MBSE & Modeling",
      "Software & Enterprise Architecture",
    ],
    summary:
      "Product-line requirements, feature models, commonality, variability and architecture reuse. Extraction detail: Full report beginning and modeling/requirements contents extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Foundational 2001 report; pair with current product-line practice and domain-specific evidence..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "86-product-line-engineering-commonality-variability-and-platform-governance",
        number: 86,
        title: "86 — Product-line engineering: commonality, variability and platform governance",
        filename: "86_PRODUCT_LINE_ENGINEERING_COMMONALITY_VARIABILITY_AND_PLATFORM_GOVERNANCE.md",
      },
    ],
  },
  S253: {
    source_id: "S253",
    title: "6.0 Crosscutting Technical Management — NASA Systems Engineering Handbook",
    url: "https://www.nasa.gov/reference/6-0-crosscutting-technical-management/",
    source_type: "Government engineering process guidance",
    relevance:
      "Technical planning, requirements, interfaces, risk, configuration, data management, assessment and decision analysis",
    quality_signal: "NASA handbook page; Exa discovery and TinyFish full-page extraction",
    limitations: "NASA process framing; tailor to program and governing NPRs.",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent:
        "Full HTML body extracted; eight crosscutting technical management processes enumerated.",
      limitations: "NASA context; tailor to governing NPR and program.",
    },
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "Data Architecture",
      "Decision Analysis & Trade Studies",
    ],
    summary:
      "Technical planning, requirements, interfaces, risk, configuration, data management, assessment and decision analysis. Extraction detail: Full HTML body extracted; eight crosscutting technical management processes enumerated.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA process framing; tailor to program and governing NPRs..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "85-configuration-management-baselines-digital-thread-and-product-data",
        number: 85,
        title: "85 — Configuration management, baselines, digital thread and product data",
        filename: "85_CONFIGURATION_MANAGEMENT_BASELINES_DIGITAL_THREAD_AND_PRODUCT_DATA.md",
      },
    ],
  },
  S254: {
    source_id: "S254",
    title: "Value Engineering: A Guidebook of Best Practices and Tools — February 2025",
    url: "https://www.cto.mil/wp-content/uploads/2025/02/SD-24-VE-Guidebook-25Feb2025-Cleared-1.pdf",
    source_type: "Government engineering guidebook",
    relevance:
      "Function analysis, value, lifecycle cost, alternatives and value-engineering practice",
    quality_signal: "DoD OUSD(R&E); Exa discovery and Firecrawl/TinyFish PDF extraction",
    limitations:
      "DoD policy context; function and performance must not be sacrificed for initial-cost reduction.",
    audit: {
      status: "Full fetch / targeted extraction",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "PDF contents, version, function/value definitions and methods located.",
      limitations: "DoD context; not a generic cost-cutting checklist.",
    },
    domain_topics: ["Product Support & Lifecycle"],
    summary:
      "Function analysis, value, lifecycle cost, alternatives and value-engineering practice. Extraction detail: PDF contents, version, function/value definitions and methods located.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: DoD policy context; function and performance must not be sacrificed for initial-cost reduction..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "89-value-engineering-function-analysis-and-lifecycle-value-decisions",
        number: 89,
        title: "89 — Value engineering, function analysis and lifecycle-value decisions",
        filename: "89_VALUE_ENGINEERING_FUNCTION_ANALYSIS_AND_LIFECYCLE_VALUE_DECISIONS.md",
      },
    ],
  },
  S255: {
    source_id: "S255",
    title: "ISO/IEC/IEEE 21839:2019 — System of systems lifecycle considerations",
    url: "https://www.iso.org/standard/71955.html",
    source_type: "International standard listing",
    relevance: "Critical SoS considerations for constituent systems throughout their lifecycle",
    quality_signal: "ISO official listing; Exa discovery",
    limitations:
      "Licensed normative content; check the 2026 edition-2 publication status before formal use.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official publisher listing and scope discovered.",
      limitations: "Normative text licensed; a 2026 second edition is under publication.",
    },
    domain_topics: ["Product Support & Lifecycle"],
    summary:
      "Critical SoS considerations for constituent systems throughout their lifecycle. Extraction detail: Official publisher listing and scope discovered.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Licensed normative content; check the 2026 edition-2 publication status before formal use..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "92-sector-assurance-applicability-and-regulatory-evidence-chains",
        number: 92,
        title: "92 — Sector assurance applicability and regulatory evidence chains",
        filename: "92_SECTOR_ASSURANCE_APPLICABILITY_AND_REGULATORY_EVIDENCE_CHAINS.md",
      },
      {
        slug: "94-research-evidence-provenance-and-standard-version-control",
        number: 94,
        title: "94 — Research evidence, provenance and standard-version control",
        filename: "94_RESEARCH_EVIDENCE_PROVENANCE_AND_STANDARD_VERSION_CONTROL.md",
      },
    ],
  },
  S256: {
    source_id: "S256",
    title: "ISO/IEC/IEEE 21839 Edition 2 — under publication (2026 snapshot)",
    url: "https://www.iso.org/standard/91120.html",
    source_type: "International standards development record",
    relevance: "Updated SoS lifecycle considerations aligned with ISO/IEC/IEEE 15288 and 24748-1",
    quality_signal: "ISO official listing; Exa discovery",
    limitations:
      "Status observed as UNDER PUBLICATION on 2026-11-05; not yet a published normative edition.",
    audit: {
      status: "Full page metadata and abstract fetch",
      tools: "Exa; Firecrawl",
      extraction_extent:
        "Edition 2 status, scope and lifecycle alignment extracted; official record says under publication and will replace 2019 edition.",
      limitations:
        "Not yet a published normative edition as of 2026-11-05; ISO page estimates final production up to seven weeks.",
    },
    domain_topics: ["Product Support & Lifecycle"],
    summary:
      "Updated SoS lifecycle considerations aligned with ISO/IEC/IEEE 15288 and 24748-1. Extraction detail: Edition 2 status, scope and lifecycle alignment extracted; official record says under publication and will replace 2019 edition.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Status observed as UNDER PUBLICATION on 2026-11-05; not yet a published normative edition..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "83-system-of-systems-engineering-governance-interoperability-and-emergence",
        number: 83,
        title: "83 — System-of-systems engineering: governance, interoperability and emergence",
        filename: "83_SYSTEM_OF_SYSTEMS_ENGINEERING_GOVERNANCE_INTEROPERABILITY_AND_EMERGENCE.md",
      },
      {
        slug: "92-sector-assurance-applicability-and-regulatory-evidence-chains",
        number: 92,
        title: "92 — Sector assurance applicability and regulatory evidence chains",
        filename: "92_SECTOR_ASSURANCE_APPLICABILITY_AND_REGULATORY_EVIDENCE_CHAINS.md",
      },
      {
        slug: "94-research-evidence-provenance-and-standard-version-control",
        number: 94,
        title: "94 — Research evidence, provenance and standard-version control",
        filename: "94_RESEARCH_EVIDENCE_PROVENANCE_AND_STANDARD_VERSION_CONTROL.md",
      },
    ],
  },
  S257: {
    source_id: "S257",
    title: "ISO 10007:2017 — Quality management: Guidelines for configuration management",
    url: "https://webstore.ansi.org/preview-pages/ISO/preview_ISO+10007-2017.pdf",
    source_type: "International standard preview",
    relevance:
      "Configuration management responsibilities, planning, identification, change control, status accounting and audit",
    quality_signal: "ANSI preview of ISO standard; Exa discovery",
    limitations:
      "Preview is incomplete; verify active status and full text with ISO before contractual use.",
    audit: {
      status: "Preview only",
      tools: "Exa discovery",
      extraction_extent: "Preview/contents only; full text not fetched.",
      limitations: "Check status and full licensed text with ISO.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Configuration management responsibilities, planning, identification, change control, status accounting and audit. Extraction detail: Preview/contents only; full text not fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Preview is incomplete; verify active status and full text with ISO before contractual use..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "85-configuration-management-baselines-digital-thread-and-product-data",
        number: 85,
        title: "85 — Configuration management, baselines, digital thread and product data",
        filename: "85_CONFIGURATION_MANAGEMENT_BASELINES_DIGITAL_THREAD_AND_PRODUCT_DATA.md",
      },
    ],
  },
  S258: {
    source_id: "S258",
    title: "ITU-T L.1410 (11/2024) — ICT environmental life-cycle assessment",
    url: "https://www.itu.int/rec/T-REC-L.1410-202411-I",
    source_type: "International telecommunications recommendation",
    relevance:
      "LCA methodology for ICT goods, networks and services; first-, second- and higher-order effects",
    quality_signal: "ITU-T official recommendation page; TinyFish fetch",
    limitations:
      "Recommendation status and accessible PDF were current at research snapshot; apply functional unit and boundary carefully.",
    audit: {
      status: "Metadata/targeted extraction",
      tools: "Exa; TinyFish",
      extraction_extent:
        "Official recommendation page metadata, status and available PDF identified.",
      limitations: "Full normative PDF not extracted in this pass.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "LCA methodology for ICT goods, networks and services; first-, second- and higher-order effects. Extraction detail: Official recommendation page metadata, status and available PDF identified.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Recommendation status and accessible PDF were current at research snapshot; apply functional unit and boundary carefully..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S259: {
    source_id: "S259",
    title: "ITU-T L.1801 (02/2026) — Environmental impact assessment for AI systems",
    url: "https://www.itu.int/epublications/es/publication/itu-t-l-1801-2026-02-guidelines-for-assessing-the-environmental-impact-of-ai-systems/en",
    source_type: "International telecommunications recommendation",
    relevance:
      "AI system LCA, scope, inventory, impact assessment, comparative effects and rebound effects",
    quality_signal: "ITU official publication page; Exa discovery and Firecrawl partial contents",
    limitations:
      "Web page extraction incomplete; the recommendation is a methodology, not a universal emissions factor database.",
    audit: {
      status: "Partial extraction",
      tools: "Exa; Firecrawl",
      extraction_extent: "Scope and LCA chapter structure extracted.",
      limitations: "Full source fetch partially errored; no full-text review claimed.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "AI system LCA, scope, inventory, impact assessment, comparative effects and rebound effects. Extraction detail: Scope and LCA chapter structure extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Web page extraction incomplete; the recommendation is a methodology, not a universal emissions factor database..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S260: {
    source_id: "S260",
    title: "Agentic AI Harnesses — Australian Cyber Security Centre (11 September 2026)",
    url: "https://www.cyber.gov.au/publication/agentic-ai-harnesses",
    source_type: "Government cybersecurity guidance",
    relevance:
      "Agent harness permissions, identity, least privilege, monitoring, human oversight and phased deployment",
    quality_signal:
      "Australian Cyber Security Centre official guidance; Exa discovery and Firecrawl full HTML extraction",
    limitations:
      "Audience includes executives, CISOs and IT leaders; tailor to local law and organisational risk.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl",
      extraction_extent:
        "Full HTML body and controls extracted; harness components, risks, good practices and audience captured.",
      limitations: "Government guidance; tailor controls to use case and jurisdiction.",
    },
    domain_topics: ["Security Architecture", "Human Systems Integration"],
    summary:
      "Agent harness permissions, identity, least privilege, monitoring, human oversight and phased deployment. Extraction detail: Full HTML body and controls extracted; harness components, risks, good practices and audience captured.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Audience includes executives, CISOs and IT leaders; tailor to local law and organisational risk..",
    cited_in_articles: [
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
    ],
  },
  S262: {
    source_id: "S262",
    title: "S-Series Integrated Product Support Specifications",
    url: "https://www.s-series.org/",
    source_type: "Industry specification suite",
    relevance:
      "S1000D, S2000M, S3000L, S4000P, S5000F, S6000T and SX000i product-support data exchange",
    quality_signal: "S-Series owner portal; Exa discovery",
    limitations:
      "Some individual specifications have terms/usage conditions; do not assume open licensing for every artifact.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official suite and member specification purposes discovered.",
      limitations: "Individual specs may be under use terms; not fully fetched.",
    },
    domain_topics: ["Data Architecture", "Product Support & Lifecycle"],
    summary:
      "S1000D, S2000M, S3000L, S4000P, S5000F, S6000T and SX000i product-support data exchange. Extraction detail: Official suite and member specification purposes discovered.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Some individual specifications have terms/usage conditions; do not assume open licensing for every artifact..",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S263: {
    source_id: "S263",
    title:
      "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics",
    url: "https://vldb.org/cidrdb/2021/lakehouse-a-new-generation-of-open-platforms-that-unify-data-warehousing-and-advanced-analytics.html",
    source_type: "Original research paper",
    relevance:
      "Lakehouse design rationale, open data formats, transactional storage and analytics/ML workload convergence",
    quality_signal: "CIDR 2021 proceedings; Exa discovery",
    limitations:
      "Authors are associated with Databricks; treat as an original proposal and evaluate against independent implementations.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Original CIDR 2021 paper landing page and abstract discovered; PDF fetch unreachable.",
      limitations:
        "Authors associated with platform vendor; treat as original proposal, not neutral comparative evaluation.",
    },
    domain_topics: ["Data Architecture"],
    summary:
      "Lakehouse design rationale, open data formats, transactional storage and analytics/ML workload convergence. Extraction detail: Original CIDR 2021 paper landing page and abstract discovered; PDF fetch unreachable.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Authors are associated with Databricks; treat as an original proposal and evaluate against independent implementations..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "90-data-platform-semantics-data-mesh-lakehouse-and-contract-governance",
        number: 90,
        title: "90 — Data-platform architecture: semantics, contracts, mesh and lakehouse choices",
        filename: "90_DATA_PLATFORM_SEMANTICS_DATA_MESH_LAKEHOUSE_AND_CONTRACT_GOVERNANCE.md",
      },
    ],
  },
  S264: {
    source_id: "S264",
    title: "Human Reliability Analysis for Nuclear Installations — IAEA",
    url: "https://www-pub.iaea.org/MTCD/Publications/PDF/p15769-PUB2102_web.pdf",
    source_type: "International nuclear safety guidance",
    relevance:
      "Human reliability analysis process: HFE identification, qualitative assessment, quantification and PSA integration",
    quality_signal: "IAEA official publication; Exa discovery and Firecrawl full PDF extraction",
    limitations:
      "Nuclear installation scope; HRA methods and error probabilities are context dependent.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl",
      extraction_extent:
        "Full PDF text fetched; HFE identification, qualitative assessment, quantitative assessment and PSA integration steps summarized.",
      limitations:
        "Nuclear installation context; method assumptions and data require domain-specific calibration.",
    },
    domain_topics: [
      "Safety & Hazard Analysis",
      "Reliability & Dependability",
      "Human Systems Integration",
    ],
    summary:
      "Human reliability analysis process: HFE identification, qualitative assessment, quantification and PSA integration. Extraction detail: Full PDF text fetched; HFE identification, qualitative assessment, quantitative assessment and PSA integration steps summarized.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Nuclear installation scope; HRA methods and error probabilities are context dependent..",
    cited_in_articles: [
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
    ],
  },
  S265: {
    source_id: "S265",
    title: "NUREG/CR-1278 — Handbook of Human Reliability Analysis",
    url: "https://www.nrc.gov/docs/ML0712/ML071210299.pdf",
    source_type: "Regulatory technical report",
    relevance: "HRA methods and estimated human-error probabilities for nuclear power plant PRA",
    quality_signal: "U.S. NRC technical report; Exa discovery",
    limitations:
      "Older handbook; fetch was blocked in this research pass; do not imply current regulator endorsement without checking updates.",
    audit: {
      status: "Discovery only / blocked",
      tools: "Exa discovery; Firecrawl attempted",
      extraction_extent: "Purpose and scope abstract extracted; Firecrawl tunnel failed.",
      limitations: "Older handbook; confirm later methods/regulatory guidance before use.",
    },
    domain_topics: ["Reliability & Dependability", "Human Systems Integration"],
    summary:
      "HRA methods and estimated human-error probabilities for nuclear power plant PRA. Extraction detail: Purpose and scope abstract extracted; Firecrawl tunnel failed.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Older handbook; fetch was blocked in this research pass; do not imply current regulator endorsement without checking updates..",
    cited_in_articles: [
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
    ],
  },
  S266: {
    source_id: "S266",
    title: "NASA Human Systems Integration Handbook v2.0",
    url: "https://ntrs.nasa.gov/api/citations/20210010952/downloads/HSI%20Handbook%20v2.0%20092121_FINAL%20COPY.pdf",
    source_type: "Government engineering handbook",
    relevance:
      "Human Systems Integration across lifecycle, HSI domains, planning and technical integration",
    quality_signal: "NASA; Firecrawl full/targeted PDF extraction",
    limitations:
      "NASA context; human-domain taxonomy may be tailored by other agencies and industries.",
    audit: {
      status: "Full fetch",
      tools: "Firecrawl",
      extraction_extent: "Full PDF beginning and domain overview extracted.",
      limitations: "NASA context; adapt HSI taxonomies by domain.",
    },
    domain_topics: [
      "Systems Engineering",
      "Human Systems Integration",
      "Product Support & Lifecycle",
    ],
    summary:
      "Human Systems Integration across lifecycle, HSI domains, planning and technical integration. Extraction detail: Full PDF beginning and domain overview extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA context; human-domain taxonomy may be tailored by other agencies and industries..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "41-human-factors-socio-technical-and-organization-design",
        number: 41,
        title: "41 — Human factors, socio-technical systems and organization design",
        filename: "41_HUMAN_FACTORS_SOCIO_TECHNICAL_AND_ORGANIZATION_DESIGN.md",
      },
      {
        slug: "74-functional-safety-standards-by-sector-and-assurance-boundaries",
        number: 74,
        title: "74 — Functional-safety standards by sector and assurance boundaries",
        filename: "74_FUNCTIONAL_SAFETY_STANDARDS_BY_SECTOR_AND_ASSURANCE_BOUNDARIES.md",
      },
      {
        slug: "87-human-reliability-analysis-task-models-dependence-and-uncertainty",
        number: 87,
        title: "87 — Human reliability analysis: tasks, dependence, context and uncertainty",
        filename: "87_HUMAN_RELIABILITY_ANALYSIS_TASK_MODELS_DEPENDENCE_AND_UNCERTAINTY.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S267: {
    source_id: "S267",
    title: "Probabilistic Validation: Theoretical Foundation and Methodological Platform",
    url: "https://asmedigitalcollection.asme.org/risk/article/9/2/021204/1157526/Probabilistic-Validation-Theoretical-Foundation",
    source_type: "Peer-reviewed research",
    relevance:
      "Uncertainty-informed validity evaluation for model predictions used in probabilistic risk assessment",
    quality_signal: "Exa discovery",
    limitations:
      "Specific methodology; evaluate applicability and obtain full paper before applying.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Abstract-level search result reviewed; full paper not fetched.",
      limitations: "Specific research method; full text needed before operational use.",
    },
    domain_topics: ["MBSE & Modeling", "Verification & Validation"],
    summary:
      "Uncertainty-informed validity evaluation for model predictions used in probabilistic risk assessment. Extraction detail: Abstract-level search result reviewed; full paper not fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Specific methodology; evaluate applicability and obtain full paper before applying..",
    cited_in_articles: [
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
    ],
  },
  S268: {
    source_id: "S268",
    title: "Towards a Data Mesh Reference Architecture",
    url: "https://doi.org/10.1007/978-3-031-79059-1_21",
    source_type: "Peer-reviewed research",
    relevance: "Data mesh reference architecture, archetypes, adoption challenges and validation",
    quality_signal: "Exa discovery",
    limitations: "Conference/book chapter; full text not fetched in this pass.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Abstract/metadata reviewed; full chapter not fetched.",
      limitations: "Conference/book chapter; check full text and methodology details.",
    },
    domain_topics: [
      "Software & Enterprise Architecture",
      "Data Architecture",
      "Verification & Validation",
    ],
    summary:
      "Data mesh reference architecture, archetypes, adoption challenges and validation. Extraction detail: Abstract/metadata reviewed; full chapter not fetched.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Conference/book chapter; full text not fetched in this pass..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "90-data-platform-semantics-data-mesh-lakehouse-and-contract-governance",
        number: 90,
        title: "90 — Data-platform architecture: semantics, contracts, mesh and lakehouse choices",
        filename: "90_DATA_PLATFORM_SEMANTICS_DATA_MESH_LAKEHOUSE_AND_CONTRACT_GOVERNANCE.md",
      },
    ],
  },
  S190: {
    source_id: "S190",
    title: "OMG Unified Architecture Framework (UAF) Specification Version 1.2 — About UAF",
    url: "https://www.omg.org/spec/UAF/1.2/About-UAF",
    source_type: "OMG normative architecture framework",
    relevance:
      "UAF domain metamodel, UAFML, architecture viewpoints and aspects for enterprise, mission, SoS and cyber-physical architecture",
    quality_signal: "OMG official specification page; Firecrawl and TinyFish extraction",
    limitations:
      "The About page and specification listing are not a substitute for the full normative specification; UAF is a framework, not an automatic design method.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent:
        "OMG official page fetched; UAF DMM/UAFML, normative/informative components and viewpoint structure extracted.",
      limitations: "About page is not the full normative specification.",
    },
    domain_topics: [
      "Security Architecture",
      "MBSE & Modeling",
      "Software & Enterprise Architecture",
    ],
    summary:
      "UAF domain metamodel, UAFML, architecture viewpoints and aspects for enterprise, mission, SoS and cyber-physical architecture. Extraction detail: OMG official page fetched; UAF DMM/UAFML, normative/informative components and viewpoint structure extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: The About page and specification listing are not a substitute for the full normative specification; UAF is a framework, not an automatic design method..",
    cited_in_articles: [
      {
        slug: "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability",
        number: 84,
        title: "84 — Architecture frameworks: DoDAF, UAF, NAF and semantic interoperability",
        filename: "84_ARCHITECTURE_FRAMEWORKS_DM2_UAF_NAF_AND_SEMANTIC_INTEROPERABILITY.md",
      },
    ],
  },
  S269: {
    source_id: "S269",
    title: "6.8 Decision Analysis — NASA Systems Engineering Handbook",
    url: "https://www.nasa.gov/reference/6-8-decision-analysis/",
    source_type: "Government engineering process guidance",
    relevance:
      "Decision context, criteria, alternatives, analysis method selection, decision report and assumptions",
    quality_signal: "NASA official page; Exa and TinyFish page extraction",
    limitations: "NASA process guidance; tailor to project and authority.",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent:
        "Process description fetched; decision context, criteria, alternatives, analysis, comparison and report captured.",
      limitations: "NASA process guidance; extraction includes current page body.",
    },
    domain_topics: ["Systems Engineering", "Decision Analysis & Trade Studies"],
    summary:
      "Decision context, criteria, alternatives, analysis method selection, decision report and assumptions. Extraction detail: Process description fetched; decision context, criteria, alternatives, analysis, comparison and report captured.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA process guidance; tailor to project and authority..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "96-trade-studies-multi-criteria-decision-analysis-and-sensitivity",
        number: 96,
        title: "96 — Trade studies, multi-criteria decision analysis and sensitivity",
        filename: "96_TRADE_STUDIES_MULTI_CRITERIA_DECISION_ANALYSIS_AND_SENSITIVITY.md",
      },
    ],
  },
  S270: {
    source_id: "S270",
    title: "Appendix J: Systems Engineering Management Plan (SEMP) Content Outline — NASA",
    url: "https://www.nasa.gov/reference/appendix-j-semp-content-outline/",
    source_type: "Government engineering process guidance",
    relevance:
      "SEMP purpose, structure, technical process tailoring and engineering specialty integration",
    quality_signal: "NASA official page; Exa and TinyFish page extraction",
    limitations:
      "Guidance outline; content and granularity should be tailored to programme size and lifecycle.",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent:
        "SEMP scope and three general content sections extracted; living-document and tailoring guidance recorded.",
      limitations: "NASA guidance; SEMP detail tailored to programme/project size.",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "SEMP purpose, structure, technical process tailoring and engineering specialty integration. Extraction detail: SEMP scope and three general content sections extracted; living-document and tailoring guidance recorded.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Guidance outline; content and granularity should be tailored to programme size and lifecycle..",
    cited_in_articles: [
      {
        slug: "98-semp-technical-planning-imp-ims-and-engineering-execution-control",
        number: 98,
        title: "98 — SEMP, technical planning, IMP/IMS and engineering execution control",
        filename: "98_SEMP_TECHNICAL_PLANNING_IMP_IMS_AND_ENGINEERING_EXECUTION_CONTROL.md",
      },
    ],
  },
  S271: {
    source_id: "S271",
    title: "6.1 Technical Planning — NASA Systems Engineering Handbook",
    url: "https://www.nasa.gov/reference/6-1-technical-planning/",
    source_type: "Government engineering process guidance",
    relevance:
      "Technical planning, roles, workflow, resources, SEMP and alignment to master schedule",
    quality_signal: "NASA official page; Exa and TinyFish page extraction",
    limitations: "NASA process guidance; tailor under the applicable NPR.",
    audit: {
      status: "Full fetch",
      tools: "Exa; TinyFish",
      extraction_extent:
        "Technical planning process and planning infrastructure, roles, resources, plans and synchronization extracted.",
      limitations: "NASA context; tailor processes and plans to mission.",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "Technical planning, roles, workflow, resources, SEMP and alignment to master schedule. Extraction detail: Technical planning process and planning infrastructure, roles, resources, plans and synchronization extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA process guidance; tailor under the applicable NPR..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "98-semp-technical-planning-imp-ims-and-engineering-execution-control",
        number: 98,
        title: "98 — SEMP, technical planning, IMP/IMS and engineering execution control",
        filename: "98_SEMP_TECHNICAL_PLANNING_IMP_IMS_AND_ENGINEERING_EXECUTION_CONTROL.md",
      },
    ],
  },
  S272: {
    source_id: "S272",
    title: "NPR 7123.1D Appendix G — Life-Cycle and Technical Review Entrance and Success Criteria",
    url: "https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7123_001D_&page_name=AppendixG",
    source_type: "Mandatory NASA procedural requirements",
    relevance: "Review entrance/success criteria, SRR/SDR and lifecycle gate technical maturity",
    quality_signal:
      "NASA NODIS official procedural requirements; Firecrawl and TinyFish extraction",
    limitations:
      "Effective 2023-07-05, expiration 2028-07-05 at snapshot; mandatory for NASA employees; project tailoring expected.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent:
        "Official current NODIS page and Appendix G criteria fetched; effective/expiry dates and tailoring requirements captured.",
      limitations: "Effective 2023-07-05; expires 2028-07-05; mandatory NASA employee procedure.",
    },
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "Product Support & Lifecycle",
    ],
    summary:
      "Review entrance/success criteria, SRR/SDR and lifecycle gate technical maturity. Extraction detail: Official current NODIS page and Appendix G criteria fetched; effective/expiry dates and tailoring requirements captured.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Effective 2023-07-05, expiration 2028-07-05 at snapshot; mandatory for NASA employees; project tailoring expected..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "97-technical-reviews-readiness-gates-entrance-and-success-criteria",
        number: 97,
        title: "97 — Technical reviews, readiness gates and evidence of maturity",
        filename: "97_TECHNICAL_REVIEWS_READINESS_GATES_ENTRANCE_AND_SUCCESS_CRITERIA.md",
      },
    ],
  },
  S273: {
    source_id: "S273",
    title: "ISO/IEC/IEEE 42030:2019 — Architecture Evaluation Framework",
    url: "https://www.iso.org/standard/73436.html",
    source_type: "International standard listing",
    relevance: "Architecture evaluation framework for enterprise, systems and software",
    quality_signal: "ISO official record; Exa and Firecrawl page extraction",
    limitations: "Edition 1 (2019-07), reviewed/confirmed in 2025; normative full text licensed.",
    audit: {
      status: "Full page metadata and abstract fetch",
      tools: "Exa; Firecrawl",
      extraction_extent:
        "Official edition/status, 2025 review confirmation, scope and evaluation purposes extracted.",
      limitations: "Normative text is licensed.",
    },
    domain_topics: ["Software & Enterprise Architecture"],
    summary:
      "Architecture evaluation framework for enterprise, systems and software. Extraction detail: Official edition/status, 2025 review confirmation, scope and evaluation purposes extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Edition 1 (2019-07), reviewed/confirmed in 2025; normative full text licensed..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "99-architecture-evaluation-iso42030-atam-and-evidence-based-review",
        number: 99,
        title: "99 — Architecture evaluation: ISO 42030, ATAM and evidence-based review",
        filename: "99_ARCHITECTURE_EVALUATION_ISO42030_ATAM_AND_EVIDENCE_BASED_REVIEW.md",
      },
    ],
  },
  S274: {
    source_id: "S274",
    title: "Google SRE Book — Service Level Objectives",
    url: "https://sre.google/sre-book/service-level-objectives/",
    source_type: "Practitioner engineering book",
    relevance:
      "SLI/SLO/SLA concepts, measurement windows, user-focused reliability metrics and objective setting",
    quality_signal: "Google SRE book; Exa, Firecrawl and TinyFish extraction",
    limitations:
      "Google practice; use as practitioner guidance, not a universal safety or regulatory standard.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "SLI/SLO/SLA, measurement and objective-selection chapter extracted.",
      limitations:
        "Practitioner guidance for services; not a substitute for sector safety obligations.",
    },
    domain_topics: ["Reliability & Dependability", "Cloud & SRE"],
    summary:
      "SLI/SLO/SLA concepts, measurement windows, user-focused reliability metrics and objective setting. Extraction detail: SLI/SLO/SLA, measurement and objective-selection chapter extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Google practice; use as practitioner guidance, not a universal safety or regulatory standard..",
    cited_in_articles: [
      {
        slug: "100-operational-reliability-objectives-sli-slo-error-budgets-and-mission-metrics",
        number: 100,
        title:
          "100 — Operational reliability objectives: SLI, SLO, error budgets and mission metrics",
        filename:
          "100_OPERATIONAL_RELIABILITY_OBJECTIVES_SLI_SLO_ERROR_BUDGETS_AND_MISSION_METRICS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S275: {
    source_id: "S275",
    title: "Google SRE Book — Embracing Risk",
    url: "https://sre.google/sre-book/embracing-risk/",
    source_type: "Practitioner engineering book",
    relevance: "Reliability-risk trade-offs, risk tolerance, error budgets and opportunity cost",
    quality_signal: "Google SRE book; Exa, Firecrawl and TinyFish extraction",
    limitations:
      "Software service context; extreme reliability may be mandatory in safety-critical systems.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent: "Risk tolerance, availability targets and error-budget logic extracted.",
      limitations: "Software service practice; adapt carefully to consequence class.",
    },
    domain_topics: ["Reliability & Dependability", "Cloud & SRE"],
    summary:
      "Reliability-risk trade-offs, risk tolerance, error budgets and opportunity cost. Extraction detail: Risk tolerance, availability targets and error-budget logic extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Software service context; extreme reliability may be mandatory in safety-critical systems..",
    cited_in_articles: [
      {
        slug: "100-operational-reliability-objectives-sli-slo-error-budgets-and-mission-metrics",
        number: 100,
        title:
          "100 — Operational reliability objectives: SLI, SLO, error budgets and mission metrics",
        filename:
          "100_OPERATIONAL_RELIABILITY_OBJECTIVES_SLI_SLO_ERROR_BUDGETS_AND_MISSION_METRICS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S276: {
    source_id: "S276",
    title: "Survey of Trade Study Methods for Practical Decision-Making — NASA IV&V",
    url: "https://www.nasa.gov/wp-content/uploads/2016/10/survey_of_trade_study_methods_-_baker.pdf",
    source_type: "NASA technical research report",
    relevance: "Pugh, AHP and Kepner-Tregoe comparison; sensitivity analysis and method selection",
    quality_signal: "NASA IV&V report; Exa, Firecrawl and TinyFish PDF extraction",
    limitations: "Research/report example; method rankings are context and weighting dependent.",
    audit: {
      status: "Full fetch",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent:
        "Pugh/AHP/KT comparison, trade-study sequence and example result extracted.",
      limitations: "NASA IV&V report; scoring outcome depends on criteria and weighting.",
    },
    domain_topics: [
      "Systems Engineering",
      "Decision Analysis & Trade Studies",
      "Verification & Validation",
    ],
    summary:
      "Pugh, AHP and Kepner-Tregoe comparison; sensitivity analysis and method selection. Extraction detail: Pugh/AHP/KT comparison, trade-study sequence and example result extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Research/report example; method rankings are context and weighting dependent..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "96-trade-studies-multi-criteria-decision-analysis-and-sensitivity",
        number: 96,
        title: "96 — Trade studies, multi-criteria decision analysis and sensitivity",
        filename: "96_TRADE_STUDIES_MULTI_CRITERIA_DECISION_ANALYSIS_AND_SENSITIVITY.md",
      },
    ],
  },
  S277: {
    source_id: "S277",
    title:
      "Integrated Master Plan and Integrated Master Schedule Preparation and Use Guide — October 2024 Change 1",
    url: "https://www.cto.mil/wp-content/uploads/2024/10/IMP-IMS-Guide-May2023-C1-Oct2024.pdf",
    source_type: "Government programme-management guide",
    relevance:
      "IMP events/accomplishments/criteria and IMS tasks; linkage to WBS, engineering and integrated schedule",
    quality_signal: "DoW/DoD OUSD(R&E); Exa, Firecrawl and TinyFish PDF extraction",
    limitations: "DoD guidance context; tailor to acquisition pathway and contract.",
    audit: {
      status: "Full fetch / targeted extraction",
      tools: "Exa; Firecrawl; TinyFish",
      extraction_extent:
        "Version/change record, IMP event/accomplishment/criteria hierarchy and IMS task structure extracted.",
      limitations: "DoD acquisition programme context.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "IMP events/accomplishments/criteria and IMS tasks; linkage to WBS, engineering and integrated schedule. Extraction detail: Version/change record, IMP event/accomplishment/criteria hierarchy and IMS task structure extracted.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: DoD guidance context; tailor to acquisition pathway and contract..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "98-semp-technical-planning-imp-ims-and-engineering-execution-control",
        number: 98,
        title: "98 — SEMP, technical planning, IMP/IMS and engineering execution control",
        filename: "98_SEMP_TECHNICAL_PLANNING_IMP_IMS_AND_ENGINEERING_EXECUTION_CONTROL.md",
      },
    ],
  },
  S278: {
    source_id: "S278",
    title:
      "NASA System Safety Handbook Volume 2 — Concepts, Guidelines and Implementation Examples",
    url: "https://ntrs.nasa.gov/api/citations/20150015500/downloads/20150015500.pdf",
    source_type: "Government handbook",
    relevance:
      "Objectives-driven system safety, integrated safety analysis and risk-informed safety case",
    quality_signal: "NASA/SP-2014-612; full PDF fetched with TinyFish",
    limitations:
      "NASA guidance; dated November 2014; not a regulation or universal sector standard.",
    audit: {
      status: "Full PDF extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full PDF extraction",
      limitations:
        "NASA guidance; dated November 2014; not a regulation or universal sector standard.",
    },
    domain_topics: ["Systems Engineering", "Safety & Hazard Analysis"],
    summary:
      "Authoritative reference covering objectives-driven system safety, integrated safety analysis and risk-informed safety case. Essential context for Systems Engineering, Safety & Hazard Analysis.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA guidance; dated November 2014; not a regulation or universal sector standard..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
    ],
  },
  S279: {
    source_id: "S279",
    title: "IEEE 1012-2024 — System, Software and Hardware Verification and Validation",
    url: "https://standards.ieee.org/ieee/1012/7324/",
    source_type: "International standard listing",
    relevance: "Lifecycle V&V for systems, hardware, software and interfaces by integrity level",
    quality_signal: "IEEE SA official record; status active; published 2025-08-22",
    limitations: "Normative full text licensed; scope listing alone cannot establish conformance.",
    audit: {
      status: "Official status/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official status/abstract extraction",
      limitations:
        "Normative full text licensed; scope listing alone cannot establish conformance.",
    },
    domain_topics: ["Verification & Validation", "Product Support & Lifecycle"],
    summary:
      "Lifecycle V&V for systems, hardware, software and interfaces by integrity level. Extraction detail: Official status/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Normative full text licensed; scope listing alone cannot establish conformance..",
    cited_in_articles: [
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S280: {
    source_id: "S280",
    title: "NASA-STD-7009B — Standard for Models and Simulations",
    url: "https://standards.nasa.gov/standard/NASA/NASA-STD-7009",
    source_type: "Government technical standard",
    relevance: "M&S design, development, use and credibility/acceptance criteria",
    quality_signal: "NASA official standards catalogue; active; 2024-03-05",
    limitations:
      "NASA context; catalog says not mandatory; approval authority and project criteria matter.",
    audit: {
      status: "Official status/scope extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official status/scope extraction",
      limitations:
        "NASA context; catalog says not mandatory; approval authority and project criteria matter.",
    },
    domain_topics: ["Systems Engineering", "MBSE & Modeling"],
    summary:
      "M&S design, development, use and credibility/acceptance criteria. Extraction detail: Official status/scope extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA context; catalog says not mandatory; approval authority and project criteria matter..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S281: {
    source_id: "S281",
    title: "NASA-STD-7009B full PDF",
    url: "https://standards.nasa.gov/sites/default/files/standards/NASA/B/1/NASA-STD-7009B-Final-3-5-2024.pdf",
    source_type: "Government technical standard PDF",
    relevance: "Model/simulation lifecycle, credibility and acceptance",
    quality_signal: "NASA official PDF",
    limitations:
      "Use with current official record; discipline-specific methods may be in other recommended practices.",
    audit: {
      status: "Official source located; PDF not separately parsed this pass",
      tools: "Exa; TinyFish",
      extraction_extent: "Official source located; PDF not separately parsed this pass",
      limitations:
        "Use with current official record; discipline-specific methods may be in other recommended practices.",
    },
    domain_topics: ["Systems Engineering", "MBSE & Modeling", "Product Support & Lifecycle"],
    summary:
      "Model/simulation lifecycle, credibility and acceptance. Extraction detail: Official source located; PDF not separately parsed this pass",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Use with current official record; discipline-specific methods may be in other recommended practices..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S282: {
    source_id: "S282",
    title: "NASA-HDBK-1009A — Systems Modeling Handbook for Systems Engineering",
    url: "https://standards.nasa.gov/standard/NASA/NASA-HDBK-1009",
    source_type: "Government engineering handbook",
    relevance:
      "SysML integration with stakeholder, ConOps, MOE, requirements, MOP, TPM and V&V work products",
    quality_signal:
      "NASA official standards record; active; dated 2025-03-12; full PDF fetched with TinyFish",
    limitations: "NASA-endorsed handbook; not mandatory and not a proof of model validity.",
    audit: {
      status: "Official status/scope extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official status/scope extraction",
      limitations: "NASA-endorsed handbook; not mandatory and not a proof of model validity.",
    },
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "MBSE & Modeling",
      "Verification & Validation",
    ],
    summary:
      "SysML integration with stakeholder, ConOps, MOE, requirements, MOP, TPM and V&V work products. Extraction detail: Official status/scope extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA-endorsed handbook; not mandatory and not a proof of model validity..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S283: {
    source_id: "S283",
    title: "GSFC-STD-7000B — General Environmental Verification Standard",
    url: "https://standards.nasa.gov/standard/GSFC/GSFC-STD-7000",
    source_type: "Government technical standard",
    relevance:
      "GSFC environmental verification by test and/or analysis, qualification, workmanship and test options",
    quality_signal: "NASA official standards record; active; 2021-04-28; review due 2027-04-28",
    limitations: "GSFC-specific; not marked NASA-wide mandatory.",
    audit: {
      status: "Official status/scope extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official status/scope extraction",
      limitations: "GSFC-specific; not marked NASA-wide mandatory.",
    },
    domain_topics: ["Verification & Validation"],
    summary:
      "GSFC environmental verification by test and/or analysis, qualification, workmanship and test options. Extraction detail: Official status/scope extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: GSFC-specific; not marked NASA-wide mandatory..",
    cited_in_articles: [
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S284: {
    source_id: "S284",
    title: "GSFC-STD-7000B full PDF",
    url: "https://standards.nasa.gov/sites/default/files/standards/GSFC/B/0/gsfc-std-7000b_signature_cycle_04_28_2021_fixed_links.pdf",
    source_type: "Government technical standard PDF",
    relevance: "Environmental test types and hardware verification guidance",
    quality_signal: "NASA official PDF located through search and source record",
    limitations: "Detailed test levels must be read from the actual standard; not universal.",
    audit: {
      status: "Source located; search index extracted; full TinyFish attempt timed out",
      tools: "Exa",
      extraction_extent: "Source located; search index extracted; full TinyFish attempt timed out",
      limitations: "Detailed test levels must be read from the actual standard; not universal.",
    },
    domain_topics: ["Verification & Validation"],
    summary:
      "Environmental test types and hardware verification guidance. Extraction detail: Source located; search index extracted; full TinyFish attempt timed out",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Detailed test levels must be read from the actual standard; not universal..",
    cited_in_articles: [
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S285: {
    source_id: "S285",
    title: "GSFC-HDBK-8004 — FMECA and Risk Assessment Guideline",
    url: "https://standards.nasa.gov/standard/GSFC/GSFC-HDBK-8004",
    source_type: "Government engineering handbook",
    relevance: "Concurrent/living FMECA, failure effects and criticality risk assessment",
    quality_signal:
      "NASA official standards record; baseline approved 2024-08-20; PDF extracted with TinyFish",
    limitations:
      "GSFC mission/infrastructure context; handbook guidance, not general regulatory standard.",
    audit: {
      status: "Official status/scope extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official status/scope extraction",
      limitations:
        "GSFC mission/infrastructure context; handbook guidance, not general regulatory standard.",
    },
    domain_topics: ["Reliability & Dependability"],
    summary:
      "Concurrent/living FMECA, failure effects and criticality risk assessment. Extraction detail: Official status/scope extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: GSFC mission/infrastructure context; handbook guidance, not general regulatory standard..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
    ],
  },
  S286: {
    source_id: "S286",
    title: "GSFC-HDBK-8004 full PDF",
    url: "https://standards.nasa.gov/sites/default/files/standards/GSFC/Baseline/0/GSFC-HDBK-8004_Approved_0.pdf",
    source_type: "Government engineering handbook PDF",
    relevance: "FMECA method and evolving risk assessment register",
    quality_signal: "NASA official full PDF; 55 pages; TinyFish targeted extraction",
    limitations: "Revalidation date 2029-08-20 in document; check latest controlled copy.",
    audit: {
      status: "Full PDF extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full PDF extraction",
      limitations: "Revalidation date 2029-08-20 in document; check latest controlled copy.",
    },
    domain_topics: ["Reliability & Dependability"],
    summary:
      "Authoritative reference covering fmeca method and evolving risk assessment register. Essential context for Reliability & Dependability.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Revalidation date 2029-08-20 in document; check latest controlled copy..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
    ],
  },
  S287: {
    source_id: "S287",
    title: "System Dynamics Modeling Process — MIT",
    url: "https://ocw.mit.edu/courses/15-879-research-seminar-in-system-dynamics-spring-2014/da344570c02fbb708eec93084927c4bd_MIT15_879S14_ModelProcOver.pdf",
    source_type: "University course material",
    relevance:
      "Problem definition, reference modes, dynamic hypotheses, iterative feedback-loop model building",
    quality_signal: "MIT OCW; full PDF fetched with TinyFish",
    limitations: "One teaching method adapted from Jim Hines; not a universal prescribed sequence.",
    audit: {
      status: "Full PDF extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full PDF extraction",
      limitations:
        "One teaching method adapted from Jim Hines; not a universal prescribed sequence.",
    },
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering problem definition, reference modes, dynamic hypotheses, iterative feedback-loop model building. Essential context for Systems Thinking, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: One teaching method adapted from Jim Hines; not a universal prescribed sequence..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S288: {
    source_id: "S288",
    title: "System Dynamics Society — What is System Dynamics?",
    url: "https://systemdynamics.org/what-is-system-dynamics-old/",
    source_type: "Professional society overview",
    relevance: "Feedback modeling, endogenous explanation and system dynamics simulation",
    quality_signal: "System Dynamics Society page; full extraction",
    limitations: "Overview page; pair with books and formal model validation guidance.",
    audit: {
      status: "Full page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full page extraction",
      limitations: "Overview page; pair with books and formal model validation guidance.",
    },
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering feedback modeling, endogenous explanation and system dynamics simulation. Essential context for Systems Thinking, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Overview page; pair with books and formal model validation guidance..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S289: {
    source_id: "S289",
    title: "System Dynamics Society — Data and Uncertainty",
    url: "https://systemdynamics.org/data-and-uncertainty-in-system-dynamics/",
    source_type: "Professional society technical resource",
    relevance: "Data, calibration, Bayesian methods, sensitivity and uncertainty in SD",
    quality_signal: "System Dynamics Society page; Exa discovery",
    limitations: "Talk/resource page; not a complete validation protocol.",
    audit: {
      status: "Discovery only",
      tools: "Exa",
      extraction_extent: "Discovery only",
      limitations: "Talk/resource page; not a complete validation protocol.",
    },
    domain_topics: ["Systems Thinking", "Data Architecture", "Decision Analysis & Trade Studies"],
    summary:
      "Authoritative reference covering data, calibration, bayesian methods, sensitivity and uncertainty in sd. Essential context for Systems Thinking, Data Architecture, Decision Analysis & Trade Studies.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Talk/resource page; not a complete validation protocol..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
      {
        slug: "06-decision-method-and-tradeoffs",
        number: 6,
        title: "06 — Decision method and trade-offs",
        filename: "06_DECISION_METHOD_AND_TRADEOFFS.md",
      },
      {
        slug: "30-architecture-description-evaluation-and-decisions",
        number: 30,
        title: "30 — Architecture description, evaluation and decision methods",
        filename: "30_ARCHITECTURE_DESCRIPTION_EVALUATION_AND_DECISIONS.md",
      },
      {
        slug: "88-risk-uncertainty-model-validation-and-value-of-information",
        number: 88,
        title: "88 — Risk, uncertainty, model validation and value of information",
        filename: "88_RISK_UNCERTAINTY_MODEL_VALIDATION_AND_VALUE_OF_INFORMATION.md",
      },
    ],
  },
  S290: {
    source_id: "S290",
    title: "NASA System Safety Discipline and Resources",
    url: "https://sma.nasa.gov/sma-disciplines/system-safety",
    source_type: "Government engineering reference hub",
    relevance: "System safety, PRA, safety-case resources and guidance",
    quality_signal: "NASA official index page; Exa discovery",
    limitations: "Index hub; specific document version should be recorded separately.",
    audit: {
      status: "Official index page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official index page extraction",
      limitations: "Index hub; specific document version should be recorded separately.",
    },
    domain_topics: ["Systems Engineering", "Safety & Hazard Analysis"],
    summary:
      "System safety, PRA, safety-case resources and guidance. Extraction detail: Official index page extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Index hub; specific document version should be recorded separately..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
    ],
  },
  S291: {
    source_id: "S291",
    title: "FAA AC 20-115D official record",
    url: "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1032046",
    source_type: "Regulator advisory circular",
    relevance: "Airborne software development assurance using DO-178C and supplements",
    quality_signal: "FAA official status record: active; 2017-07-21",
    limitations: "Acceptable means, not regulation; project certification basis controls.",
    audit: {
      status: "Official regulator status/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official regulator status/abstract extraction",
      limitations: "Acceptable means, not regulation; project certification basis controls.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Airborne software development assurance using DO-178C and supplements. Extraction detail: Official regulator status/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Acceptable means, not regulation; project certification basis controls..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S292: {
    source_id: "S292",
    title: "FAA AC 20-152A official record",
    url: "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1041323",
    source_type: "Regulator advisory circular",
    relevance: "Airborne electronic hardware development assurance using DO-254/ED-80",
    quality_signal: "FAA official status record: active; 2022-10-07",
    limitations: "Acceptable means, not regulation; scope excludes SEE assessment.",
    audit: {
      status: "Official regulator status/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official regulator status/abstract extraction",
      limitations: "Acceptable means, not regulation; scope excludes SEE assessment.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Airborne electronic hardware development assurance using DO-254/ED-80. Extraction detail: Official regulator status/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Acceptable means, not regulation; scope excludes SEE assessment..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S293: {
    source_id: "S293",
    title: "FAA Software and Airborne Electronic Hardware References",
    url: "https://www.faa.gov/aircraft/air_cert/design_approvals/air_software/software_regs",
    source_type: "Regulator reference index",
    relevance: "FAA software and airborne hardware ACs, orders and policies",
    quality_signal: "FAA official index fetched with TinyFish",
    limitations: "Index last updated 2024-05-23; verify specific AC status on its own record.",
    audit: {
      status: "Official index page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official index page extraction",
      limitations: "Index last updated 2024-05-23; verify specific AC status on its own record.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "FAA software and airborne hardware ACs, orders and policies. Extraction detail: Official index page extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Index last updated 2024-05-23; verify specific AC status on its own record..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S294: {
    source_id: "S294",
    title: "ISO/PAS 8800:2024 — Road Vehicles Safety and AI",
    url: "https://www.iso.org/standard/83303.html",
    source_type: "Publicly Available Specification",
    relevance: "AI elements and vehicle-level safety-related behavior",
    quality_signal: "ISO official record and full abstract extracted",
    limitations:
      "PAS, not full IS; scope limited to series-production road vehicles and AI-related safety properties.",
    audit: {
      status: "Official standard metadata/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official standard metadata/abstract extraction",
      limitations:
        "PAS, not full IS; scope limited to series-production road vehicles and AI-related safety properties.",
    },
    domain_topics: ["Safety & Hazard Analysis"],
    summary:
      "AI elements and vehicle-level safety-related behavior. Extraction detail: Official standard metadata/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: PAS, not full IS; scope limited to series-production road vehicles and AI-related safety properties..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
    ],
  },
  S295: {
    source_id: "S295",
    title: "ISO 26262 Series Overview",
    url: "https://www.iso.org/publication/PUB200262.html",
    source_type: "International standard catalogue",
    relevance: "Automotive E/E functional safety lifecycle",
    quality_signal: "ISO official package record",
    limitations: "Parts are in revision; check individual part status; normative text licensed.",
    audit: {
      status: "Official standard package record extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official standard package record extraction",
      limitations: "Parts are in revision; check individual part status; normative text licensed.",
    },
    domain_topics: [
      "Safety & Hazard Analysis",
      "Regulated Sector Assurance",
      "Product Support & Lifecycle",
    ],
    summary:
      "Automotive E/E functional safety lifecycle. Extraction detail: Official standard package record extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Parts are in revision; check individual part status; normative text licensed..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S296: {
    source_id: "S296",
    title: "IEC 62304:2006 — Medical Device Software Lifecycle",
    url: "https://www.iso.org/standard/38421.html",
    source_type: "International standard listing",
    relevance: "Medical device software lifecycle process",
    quality_signal: "ISO official record; confirmed 2023; Amendment 1:2015 listed",
    limitations: "Base standard plus amendment; full normative text licensed.",
    audit: {
      status: "Official standard metadata/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official standard metadata/abstract extraction",
      limitations: "Base standard plus amendment; full normative text licensed.",
    },
    domain_topics: ["Regulated Sector Assurance", "Product Support & Lifecycle"],
    summary:
      "Medical device software lifecycle process. Extraction detail: Official standard metadata/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Base standard plus amendment; full normative text licensed..",
    cited_in_articles: [
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S297: {
    source_id: "S297",
    title: "FDA Medical Device Cybersecurity Guidance — February 2026",
    url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cybersecurity-medical-devices-quality-management-system-considerations-and-content-premarket",
    source_type: "Regulator guidance",
    relevance: "Medical device cybersecurity design, labeling and premarket evidence",
    quality_signal: "FDA official page; 2026-02-03; full PDF extracted",
    limitations:
      "Nonbinding guidance; supersedes June 2025 guidance; statutory section 524B is separate.",
    audit: {
      status: "Official guidance page and full PDF extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official guidance page and full PDF extraction",
      limitations:
        "Nonbinding guidance; supersedes June 2025 guidance; statutory section 524B is separate.",
    },
    domain_topics: ["Security Architecture", "Regulated Sector Assurance"],
    summary:
      "Medical device cybersecurity design, labeling and premarket evidence. Extraction detail: Official guidance page and full PDF extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Nonbinding guidance; supersedes June 2025 guidance; statutory section 524B is separate..",
    cited_in_articles: [
      {
        slug: "09-security-and-threat-modeling",
        number: 9,
        title: "09 — Security and threat modeling",
        filename: "09_SECURITY_AND_THREAT_MODELING.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S298: {
    source_id: "S298",
    title: "FDA Medical Device Cybersecurity Guidance PDF — February 2026",
    url: "https://www.fda.gov/media/119933/download",
    source_type: "Regulator guidance PDF",
    relevance: "Secure product development, cybersecurity risks and documentation through TPLC",
    quality_signal: "FDA official PDF; TinyFish full PDF extraction",
    limitations: "Read with current statutory requirements, QMSR and related FDA guidance.",
    audit: {
      status: "Full PDF extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full PDF extraction",
      limitations: "Read with current statutory requirements, QMSR and related FDA guidance.",
    },
    domain_topics: ["Security Architecture", "Regulated Sector Assurance"],
    summary:
      "Authoritative reference covering secure product development, cybersecurity risks and documentation through tplc. Essential context for Security Architecture, Regulated Sector Assurance.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Read with current statutory requirements, QMSR and related FDA guidance..",
    cited_in_articles: [
      {
        slug: "09-security-and-threat-modeling",
        number: 9,
        title: "09 — Security and threat modeling",
        filename: "09_SECURITY_AND_THREAT_MODELING.md",
      },
      {
        slug: "37-cybersecurity-architecture-and-systems-security-engineering",
        number: 37,
        title: "37 — Cybersecurity architecture and systems security engineering",
        filename: "37_CYBERSECURITY_ARCHITECTURE_AND_SYSTEMS_SECURITY_ENGINEERING.md",
      },
      {
        slug: "42-ai-enabled-systems-architecture-and-ai-assurance",
        number: 42,
        title: "42 — AI-enabled system architecture and AI assurance",
        filename: "42_AI_ENABLED_SYSTEMS_ARCHITECTURE_AND_AI_ASSURANCE.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S299: {
    source_id: "S299",
    title: "ISO DIS 29148 Edition 3 — Requirements Engineering",
    url: "https://www.iso.org/standard/94091.html",
    source_type: "Draft international standard listing",
    relevance: "Requirements engineering standard revision",
    quality_signal: "ISO official DIS record; enquiry phase; 12-week DIS ballot began 2026-09-14",
    limitations: "Draft, not a published normative standard; do not cite clauses as mandatory.",
    audit: {
      status: "Official draft status/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official draft status/abstract extraction",
      limitations: "Draft, not a published normative standard; do not cite clauses as mandatory.",
    },
    domain_topics: ["Requirements Engineering", "Distributed Systems"],
    summary:
      "Requirements engineering standard revision. Extraction detail: Official draft status/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Draft, not a published normative standard; do not cite clauses as mandatory..",
    cited_in_articles: [
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
      {
        slug: "05-architecture-styles-and-patterns",
        number: 5,
        title: "05 — Architecture styles and patterns",
        filename: "05_ARCHITECTURE_STYLES_AND_PATTERNS.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "32-distributed-systems-consistency-and-failure-modes",
        number: 32,
        title: "32 — Distributed systems, consistency and partial failure",
        filename: "32_DISTRIBUTED_SYSTEMS_CONSISTENCY_AND_FAILURE_MODES.md",
      },
    ],
  },
  S300: {
    source_id: "S300",
    title: "IEC 61508-1:2026 PRV — Functional Safety",
    url: "https://webstore.iec.ch/en/publication/117296",
    source_type: "Final Draft International Standard",
    relevance: "Generic functional safety for E/E/PE safety-related systems",
    quality_signal:
      "IEC official webstore; FDIS voting 2026-10-02 to 2026-11-13; full source snippet extracted",
    limitations:
      "Draft/pre-release, forecast publication 2027-01-22; do not treat as final Edition 3.",
    audit: {
      status: "Official FDIS status/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official FDIS status/abstract extraction",
      limitations:
        "Draft/pre-release, forecast publication 2027-01-22; do not treat as final Edition 3.",
    },
    domain_topics: ["Distributed Systems", "Safety & Hazard Analysis"],
    summary:
      "Generic functional safety for E/E/PE safety-related systems. Extraction detail: Official FDIS status/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Draft/pre-release, forecast publication 2027-01-22; do not treat as final Edition 3..",
    cited_in_articles: [
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
    ],
  },
  S301: {
    source_id: "S301",
    title: "NIST Engineering Statistics Handbook — Weibull Distribution",
    url: "https://www.itl.nist.gov/div898/handbook/apr/section1/apr162.htm",
    source_type: "Government statistical handbook",
    relevance: "Weibull lifetime distribution, hazard function, shape/scale and parameterization",
    quality_signal: "NIST/SEMATECH e-Handbook; full page extraction",
    limitations:
      "Methodological reference; distribution fit and physical assumptions still require validation.",
    audit: {
      status: "Full page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full page extraction",
      limitations:
        "Methodological reference; distribution fit and physical assumptions still require validation.",
    },
    domain_topics: ["Safety & Hazard Analysis", "Reliability & Dependability"],
    summary:
      "Authoritative reference covering weibull lifetime distribution, hazard function, shape/scale and parameterization. Essential context for Safety & Hazard Analysis, Reliability & Dependability.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Methodological reference; distribution fit and physical assumptions still require validation..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
    ],
  },
  S302: {
    source_id: "S302",
    title: "NIST Engineering Statistics Handbook — Censored Reliability Data",
    url: "https://www.itl.nist.gov/div898/handbook/apr/section1/apr131.htm",
    source_type: "Government statistical handbook",
    relevance: "Type I/II right censoring and readout/interval data",
    quality_signal: "NIST/SEMATECH e-Handbook; full page extraction",
    limitations:
      "Introductory statistical method; more complex competing risks and dependent data need specialized analysis.",
    audit: {
      status: "Full page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full page extraction",
      limitations:
        "Introductory statistical method; more complex competing risks and dependent data need specialized analysis.",
    },
    domain_topics: ["Reliability & Dependability", "Data Architecture"],
    summary:
      "Authoritative reference covering type i/ii right censoring and readout/interval data. Essential context for Reliability & Dependability, Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Introductory statistical method; more complex competing risks and dependent data need specialized analysis..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
    ],
  },
  S303: {
    source_id: "S303",
    title: "NIST Engineering Statistics Handbook — Parameter Estimation from Censored Data",
    url: "https://www.itl.nist.gov/div898/handbook/apr/section4/apr41.htm",
    source_type: "Government statistical handbook",
    relevance: "Graphical estimation, MLE and confidence bounds",
    quality_signal: "NIST/SEMATECH e-Handbook; full page extraction",
    limitations: "MLE performance depends on sample size, model fit and data assumptions.",
    audit: {
      status: "Full page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full page extraction",
      limitations: "MLE performance depends on sample size, model fit and data assumptions.",
    },
    domain_topics: ["Data Architecture"],
    summary:
      "Authoritative reference covering graphical estimation, mle and confidence bounds. Essential context for Data Architecture.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: MLE performance depends on sample size, model fit and data assumptions..",
    cited_in_articles: [
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
    ],
  },
  S304: {
    source_id: "S304",
    title: "NIST Engineering Statistics Handbook — Lognormal and Weibull Test Plans",
    url: "https://www.itl.nist.gov/div898/handbook/apr/section3/apr312.htm",
    source_type: "Government statistical handbook",
    relevance: "Reliability demonstration test design for Weibull/lognormal models",
    quality_signal: "NIST/SEMATECH e-Handbook; full page extraction",
    limitations:
      "Planning requires assumptions/known shape and acceleration factors; limited data can invalidate plans.",
    audit: {
      status: "Full page extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Full page extraction",
      limitations:
        "Planning requires assumptions/known shape and acceleration factors; limited data can invalidate plans.",
    },
    domain_topics: ["Reliability & Dependability", "MBSE & Modeling"],
    summary:
      "Authoritative reference covering reliability demonstration test design for weibull/lognormal models. Essential context for Reliability & Dependability, MBSE & Modeling.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Planning requires assumptions/known shape and acceleration factors; limited data can invalidate plans..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S305: {
    source_id: "S305",
    title: "MIL-HDBK-189C — Reliability Growth Management",
    url: "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=53928",
    source_type: "Defense handbook",
    relevance: "Reliability growth planning and assessment models",
    quality_signal: "DLA ASSIST official record; status/revision table extracted",
    limitations:
      "Defense acquisition context; not a universal reliability prediction or field reliability guarantee.",
    audit: {
      status: "Official metadata/revision table extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official metadata/revision table extraction",
      limitations:
        "Defense acquisition context; not a universal reliability prediction or field reliability guarantee.",
    },
    domain_topics: ["Reliability & Dependability", "MBSE & Modeling", "Regulated Sector Assurance"],
    summary:
      "Reliability growth planning and assessment models. Extraction detail: Official metadata/revision table extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Defense acquisition context; not a universal reliability prediction or field reliability guarantee..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S306: {
    source_id: "S306",
    title: "ISO 14224:2016 — Reliability and Maintenance Data Collection",
    url: "https://www.iso.org/standard/64076.html",
    source_type: "International standard listing",
    relevance: "Equipment, failure and maintenance data taxonomy and quality",
    quality_signal: "ISO official record and abstract extraction; reviewed/confirmed 2022",
    limitations: "Petroleum, petrochemical and natural gas sector scope; normative text licensed.",
    audit: {
      status: "Official standard metadata/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official standard metadata/abstract extraction",
      limitations:
        "Petroleum, petrochemical and natural gas sector scope; normative text licensed.",
    },
    domain_topics: [
      "Reliability & Dependability",
      "Data Architecture",
      "Product Support & Lifecycle",
    ],
    summary:
      "Equipment, failure and maintenance data taxonomy and quality. Extraction detail: Official standard metadata/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Petroleum, petrochemical and natural gas sector scope; normative text licensed..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S307: {
    source_id: "S307",
    title: "IEC 61709:2017 — Electrical Component Reliability Reference Conditions",
    url: "https://webstore.iec.ch/en/publication/28554",
    source_type: "International standard listing",
    relevance: "Reference conditions and stress models for converting component failure rates",
    quality_signal: "IEC official record/abstract extraction",
    limitations:
      "Does not provide base failure rates; assumes component within useful life and functional limits.",
    audit: {
      status: "Official standard scope/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official standard scope/abstract extraction",
      limitations:
        "Does not provide base failure rates; assumes component within useful life and functional limits.",
    },
    domain_topics: ["Reliability & Dependability", "MBSE & Modeling"],
    summary:
      "Reference conditions and stress models for converting component failure rates. Extraction detail: Official standard scope/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Does not provide base failure rates; assumes component within useful life and functional limits..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S308: {
    source_id: "S308",
    title: "SAE JA1011_202411 — RCM Process Evaluation Criteria",
    url: "https://saemobilus.sae.org/standards/ja1011_202411-evaluation-criteria-reliability-centered-maintenance-rcm-processes",
    source_type: "Recommended practice listing",
    relevance: "Minimum evaluation criteria for a process to be called RCM",
    quality_signal: "SAE Mobilus official listing; revision November 2024",
    limitations:
      "Normative/licensed text; use current edition rather than copied question sets from older summaries.",
    audit: {
      status: "Official standard record/abstract extraction",
      tools: "Exa; TinyFish",
      extraction_extent: "Official standard record/abstract extraction",
      limitations:
        "Normative/licensed text; use current edition rather than copied question sets from older summaries.",
    },
    domain_topics: ["Reliability & Dependability"],
    summary:
      "Minimum evaluation criteria for a process to be called RCM. Extraction detail: Official standard record/abstract extraction",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Normative/licensed text; use current edition rather than copied question sets from older summaries..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
    ],
  },
  S309: {
    source_id: "S309",
    title: "Issues to Consider While Developing a System Dynamics Model",
    url: "https://metasd.com/wp-content/uploads/2010/03/SDModelCritique.pdf",
    source_type: "Academic/practitioner technical paper",
    relevance: "Model boundaries, dynamic hypotheses and system dynamics model critique",
    quality_signal: "Exa discovery",
    limitations:
      "Older critique paper; use as a methodological supplement, not a current institutional standard.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations:
        "Older critique paper; use as a methodological supplement, not a current institutional standard.",
    },
    domain_topics: ["Systems Thinking", "MBSE & Modeling"],
    summary:
      "Model boundaries, dynamic hypotheses and system dynamics model critique. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Older critique paper; use as a methodological supplement, not a current institutional standard..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "02-systems-thinking",
        number: 2,
        title: "02 — Systems thinking",
        filename: "02_SYSTEMS_THINKING.md",
      },
      {
        slug: "22-mbse-digital-engineering-and-sysml",
        number: 22,
        title: "22 — MBSE, digital engineering and SysML",
        filename: "22_MBSE_DIGITAL_ENGINEERING_AND_SYSML.md",
      },
      {
        slug: "39-mbse-sysml-digital-engineering-and-model-governance",
        number: 39,
        title: "39 — MBSE, SysML, digital engineering and model governance",
        filename: "39_MBSE_SYSML_DIGITAL_ENGINEERING_AND_MODEL_GOVERNANCE.md",
      },
      {
        slug: "67-probabilistic-risk-common-cause-and-physics-of-failure",
        number: 67,
        title: "67 — Probabilistic risk, common-cause failure and physics of failure",
        filename: "67_PROBABILISTIC_RISK_COMMON_CAUSE_AND_PHYSICS_OF_FAILURE.md",
      },
    ],
  },
  S310: {
    source_id: "S310",
    title: "NASA SWE-141 — Software Independent Verification and Validation",
    url: "https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695499/SWE-141+-+Software+Independent+Verification+and+Validation",
    source_type: "Government software assurance guidance",
    relevance: "Independent verification and validation across software lifecycle",
    quality_signal: "NASA Software Engineering Handbook; Exa discovery",
    limitations: "NASA software context; verify current handbook revision and tailoring.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations: "NASA software context; verify current handbook revision and tailoring.",
    },
    domain_topics: [
      "Systems Engineering",
      "Verification & Validation",
      "Product Support & Lifecycle",
    ],
    summary:
      "Independent verification and validation across software lifecycle. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA software context; verify current handbook revision and tailoring..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S311: {
    source_id: "S311",
    title: "NASA SWE-072 — Bidirectional Traceability from Test Procedures to Requirements",
    url: "https://swehb.nasa.gov/spaces/7150/pages/16449898/SWE-072+-+Bidirectional+Traceability+Between+Software+Test+Procedures+and+Software+Requirements",
    source_type: "Government software assurance guidance",
    relevance: "Software test-procedure traceability, coverage and change impact",
    quality_signal: "NASA Software Engineering Handbook; Exa discovery",
    limitations: "NASA software context; guidance is not a universal standard.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations: "NASA software context; guidance is not a universal standard.",
    },
    domain_topics: ["Systems Engineering", "Requirements Engineering"],
    summary:
      "Software test-procedure traceability, coverage and change impact. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA software context; guidance is not a universal standard..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "04-requirements-and-quality-attributes",
        number: 4,
        title: "04 — Requirements and quality attributes",
        filename: "04_REQUIREMENTS_AND_QUALITY_ATTRIBUTES.md",
      },
      {
        slug: "29-requirements-engineering-traceability-and-change",
        number: 29,
        title: "29 — Requirements engineering, traceability and change control",
        filename: "29_REQUIREMENTS_ENGINEERING_TRACEABILITY_AND_CHANGE.md",
      },
    ],
  },
  S312: {
    source_id: "S312",
    title: "NASA Product Verification Process",
    url: "https://www.nasa.gov/reference/5-3-product-verification/",
    source_type: "Government engineering process guidance",
    relevance: "Product verification of realized product against approved specifications",
    quality_signal: "NASA Systems Engineering Handbook; TinyFish extraction",
    limitations:
      "NASA lifecycle guidance; verification/validation processes may be tailored under governing policy.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations:
        "NASA lifecycle guidance; verification/validation processes may be tailored under governing policy.",
    },
    domain_topics: ["Systems Engineering", "Verification & Validation"],
    summary:
      "Product verification of realized product against approved specifications. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: NASA lifecycle guidance; verification/validation processes may be tailored under governing policy..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
    ],
  },
  S313: {
    source_id: "S313",
    title: "Goal Structuring Notation Standard — Current Community Standard",
    url: "https://scsc.uk/gsn-standard",
    source_type: "Assurance-case notation standard",
    relevance: "GSN notation, current version 3 and use for engineering arguments",
    quality_signal: "SCSC official standard page; Firecrawl and TinyFish extraction",
    limitations:
      "Notation does not validate argument logic or evidence; consult full normative standard.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations:
        "Notation does not validate argument logic or evidence; consult full normative standard.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "GSN notation, current version 3 and use for engineering arguments. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Notation does not validate argument logic or evidence; consult full normative standard..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S314: {
    source_id: "S314",
    title: "European Union Agency for Railways — Common Safety Method Risk Evaluation",
    url: "https://www.era.europa.eu/domains/common-safety-methods/risk-evaluation-assessment-csm_en",
    source_type: "Regulator guidance / EU regulation reference",
    relevance: "Risk assessment for technical, operational and organizational railway changes",
    quality_signal: "ERA official page; Exa discovery",
    limitations:
      "Interpret with the current applicable EU regulation, amendments and national authorisation rules.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations:
        "Interpret with the current applicable EU regulation, amendments and national authorisation rules.",
    },
    domain_topics: ["Safety & Hazard Analysis", "Regulated Sector Assurance"],
    summary:
      "Risk assessment for technical, operational and organizational railway changes. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Interpret with the current applicable EU regulation, amendments and national authorisation rules..",
    cited_in_articles: [
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "23-systems-engineering-specialties",
        number: 23,
        title: "23 — Specialty engineering and cross-disciplinary knowledge",
        filename: "23_SYSTEMS_ENGINEERING_SPECIALTIES.md",
      },
      {
        slug: "36-system-safety-hazard-analysis-and-assurance",
        number: 36,
        title: "36 — System safety, hazard analysis and safety assurance",
        filename: "36_SYSTEM_SAFETY_HAZARD_ANALYSIS_AND_ASSURANCE.md",
      },
      {
        slug: "44-domain-architecture-reference-map",
        number: 44,
        title: "44 — Domain architecture reference map",
        filename: "44_DOMAIN_ARCHITECTURE_REFERENCE_MAP.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "78-standards-regulatory-assurance-and-certification-map-deep",
        number: 78,
        title: "78 — Standards, regulation and certification: deep assurance map",
        filename: "78_STANDARDS_REGULATORY_ASSURANCE_AND_CERTIFICATION_MAP_DEEP.md",
      },
    ],
  },
  S315: {
    source_id: "S315",
    title: "ISO/IEC/IEEE 24748-1:2024 — Life Cycle Management Guidelines",
    url: "https://standards.ieee.org/ieee/24748-1/10942/",
    source_type: "International standard listing",
    relevance: "Life cycle concepts, stages, process application, adaptation and management",
    quality_signal: "IEEE SA official record; Exa discovery",
    limitations: "Normative text licensed; use current ISO/IEC/IEEE publication record.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations: "Normative text licensed; use current ISO/IEC/IEEE publication record.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Life cycle concepts, stages, process application, adaptation and management. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Normative text licensed; use current ISO/IEC/IEEE publication record..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
    ],
  },
  S316: {
    source_id: "S316",
    title: "NASA Technical Standards System",
    url: "https://standards.nasa.gov/",
    source_type: "Government standards catalogue",
    relevance: "NASA standards status, controlled documents and revision records",
    quality_signal: "NASA official catalogue; Exa discovery",
    limitations: "Catalogue index, not a standard; verify each document page.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations: "Catalogue index, not a standard; verify each document page.",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "NASA standards status, controlled documents and revision records. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Catalogue index, not a standard; verify each document page..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
    ],
  },
  S317: {
    source_id: "S317",
    title: "NASA Center Technical Standards",
    url: "https://standards.nasa.gov/center-specific-standards",
    source_type: "Government standards catalogue",
    relevance:
      "Center standards including GSFC FMECA, risk, environmental verification and lifecycle review standards",
    quality_signal: "NASA official catalogue; Exa discovery",
    limitations: "Index only; document applicability varies by center and programme.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Search result and official page location recorded; not deeply scraped in this pass.",
      limitations: "Index only; document applicability varies by center and programme.",
    },
    domain_topics: [
      "Systems Engineering",
      "Reliability & Dependability",
      "Verification & Validation",
      "Product Support & Lifecycle",
    ],
    summary:
      "Center standards including GSFC FMECA, risk, environmental verification and lifecycle review standards. Extraction detail: Search result and official page location recorded; not deeply scraped in this pass.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Index only; document applicability varies by center and programme..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "08-reliability-defense-in-depth",
        number: 8,
        title: "08 — Reliability and defense in depth",
        filename: "08_RELIABILITY_DEFENSE_IN_DEPTH.md",
      },
      {
        slug: "35-reliability-maintainability-availability-and-resilience",
        number: 35,
        title: "35 — Reliability, maintainability, availability and resilience engineering",
        filename: "35_RELIABILITY_MAINTAINABILITY_AVAILABILITY_AND_RESILIENCE.md",
      },
      {
        slug: "46-architecture-problem-solving-and-review-playbook",
        number: 46,
        title: "46 — Architecture problem-solving and review playbook",
        filename: "46_ARCHITECTURE_PROBLEM_SOLVING_AND_REVIEW_PLAYBOOK.md",
      },
      {
        slug: "21-systems-engineering-lifecycle-and-processes",
        number: 21,
        title: "21 — Systems engineering lifecycle and process architecture",
        filename: "21_SYSTEMS_ENGINEERING_LIFECYCLE_AND_PROCESSES.md",
      },
      {
        slug: "38-verification-validation-test-engineering-and-assurance",
        number: 38,
        title: "38 — Verification, validation, test engineering and assurance",
        filename: "38_VERIFICATION_VALIDATION_TEST_ENGINEERING_AND_ASSURANCE.md",
      },
      {
        slug: "70-formal-methods-model-checking-and-verification-assurance",
        number: 70,
        title: "70 — Formal methods, model checking and verification assurance",
        filename: "70_FORMAL_METHODS_MODEL_CHECKING_AND_VERIFICATION_ASSURANCE.md",
      },
      {
        slug: "48-standards-and-regulatory-reference-map",
        number: 48,
        title: "48 — Standards and regulatory reference map",
        filename: "48_STANDARDS_AND_REGULATORY_REFERENCE_MAP.md",
      },
      {
        slug: "101-reliability-centered-maintenance-task-selection-and-supportability-engineering",
        number: 101,
        title:
          "101 — Reliability-centered maintenance: task selection and supportability engineering",
        filename:
          "101_RELIABILITY_CENTERED_MAINTENANCE_TASK_SELECTION_AND_SUPPORTABILITY_ENGINEERING.md",
      },
    ],
  },
  S318: {
    source_id: "S318",
    title: "NIST/SEMATECH Engineering Statistics Handbook — Repair-rate models",
    url: "https://itl.nist.gov/div898/handbook/apr/section1/apr17.htm",
    source_type: "Government statistical handbook",
    relevance: "HPP/NHPP recurrence models for repairable systems",
    quality_signal: "NIST official engineering statistics reference; full TinyFish extraction",
    limitations: "Web handbook; check modeling assumptions and exposure definition.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent:
        "Text extracted; repairable process definition and HPP/NHPP model families included",
      limitations: "Online handbook; methods depend on process assumptions.",
    },
    domain_topics: ["MBSE & Modeling"],
    summary:
      "HPP/NHPP recurrence models for repairable systems. Extraction detail: Text extracted; repairable process definition and HPP/NHPP model families included",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Web handbook; check modeling assumptions and exposure definition..",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S319: {
    source_id: "S319",
    title: "NIST/SEMATECH Engineering Statistics Handbook — NHPP power-law model",
    url: "https://itl.nist.gov/div898/handbook/apr/section1/apr172.htm",
    source_type: "Government statistical handbook",
    relevance: "Power-law NHPP, expected cumulative events, ROCOF, Duane/AMSAA relation",
    quality_signal: "NIST official; full TinyFish extraction",
    limitations: "Educational handbook, not a universal guarantee that power-law fits field data.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent:
        "Equation, interpretation, HPP special case, ROCOF and caution about Weibull terminology extracted",
      limitations: "Model selection and exposure assumptions still require engineering judgment.",
    },
    domain_topics: ["MBSE & Modeling"],
    summary:
      "Power-law NHPP, expected cumulative events, ROCOF, Duane/AMSAA relation. Extraction detail: Equation, interpretation, HPP special case, ROCOF and caution about Weibull terminology extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Educational handbook, not a universal guarantee that power-law fits field data..",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
    ],
  },
  S320: {
    source_id: "S320",
    title: "NIST/SEMATECH Engineering Statistics Handbook — NHPP power-law reliability growth",
    url: "https://itl.nist.gov/div898/handbook/apr/section1/apr191.htm",
    source_type: "Government statistical handbook",
    relevance: "Reliability growth slope, assumptions and end-of-test MTBF estimate",
    quality_signal: "NIST official; full TinyFish extraction",
    limitations: "Requires improvement process and process stability assumptions.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent: "Growth slope, assumptions and end-of-test MTBF relation extracted",
      limitations: "Only use where improvement process assumptions fit.",
    },
    domain_topics: ["Reliability & Dependability", "Cloud & SRE"],
    summary:
      "Reliability growth slope, assumptions and end-of-test MTBF estimate. Extraction detail: Growth slope, assumptions and end-of-test MTBF relation extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Requires improvement process and process stability assumptions..",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S321: {
    source_id: "S321",
    title:
      "NASA RP-1348 — Techniques for Modeling the Reliability of Fault-Tolerant Systems With the Markov State-Space Approach",
    url: "https://shemesh.larc.nasa.gov/fm/papers/Butler-RP-1348-Techniques-Model_Rel-FT.pdf",
    source_type: "Government technical report",
    relevance: "Fault-tolerant state models, static/reconfigurable redundancy, standby spares",
    quality_signal: "NASA Langley official PDF; full TinyFish extraction",
    limitations: "1995 tutorial; validate numerical methods/tools against current practice.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent: "Contents, model examples and tutorial scope extracted",
      limitations: "1995 tutorial; validate assumptions and implementation.",
    },
    domain_topics: ["Systems Engineering", "Reliability & Dependability", "MBSE & Modeling"],
    summary:
      "Fault-tolerant state models, static/reconfigurable redundancy, standby spares. Extraction detail: Contents, model examples and tutorial scope extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 1995 tutorial; validate numerical methods/tools against current practice..",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S322: {
    source_id: "S322",
    title: "NASA — An Introduction to Markov Modeling: Concepts and Uses",
    url: "https://ntrs.nasa.gov/api/citations/20020050518/downloads/20020050518.pdf",
    source_type: "Government technical tutorial",
    relevance:
      "Markov / semi-Markov models, repair, standby spares, intermittent/transient faults and imperfect coverage",
    quality_signal: "NASA Ames technical tutorial; full TinyFish extraction",
    limitations: "Tutorial; not a current standard.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent:
        "Scope, assumptions, Markov/semi-Markov and repair/redundancy topics extracted",
      limitations: "Tutorial, not standard.",
    },
    domain_topics: ["Systems Engineering", "Reliability & Dependability", "MBSE & Modeling"],
    summary:
      "Markov / semi-Markov models, repair, standby spares, intermittent/transient faults and imperfect coverage. Extraction detail: Scope, assumptions, Markov/semi-Markov and repair/redundancy topics extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Tutorial; not a current standard..",
    cited_in_articles: [
      {
        slug: "112-repairable-system-dependability-markov-models-and-availability-engineering",
        number: 112,
        title: "112 — Repairable-system dependability, Markov models and availability engineering",
        filename:
          "112_REPAIRABLE_SYSTEM_DEPENDABILITY_MARKOV_MODELS_AND_AVAILABILITY_ENGINEERING.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S323: {
    source_id: "S323",
    title: "ISO 13381-1:2025 — Prognostics, Part 1: General guidelines and requirements",
    url: "https://www.iso.org/standard/88029.html",
    source_type: "International standard",
    relevance: "Prognostics process development, required data, behaviors and concepts",
    quality_signal: "Official ISO record; current published Edition 3 (September 2025)",
    limitations: "Normative full text licensed; record page only.",
    audit: {
      status: "Targeted extraction",
      tools: "TinyFish",
      extraction_extent: "Official published edition, date, scope and lifecycle metadata extracted",
      limitations: "Normative text licensed; public record page only.",
    },
    domain_topics: ["Requirements Engineering", "Data Architecture"],
    summary:
      "Prognostics process development, required data, behaviors and concepts. Extraction detail: Official published edition, date, scope and lifecycle metadata extracted",
    takeaways:
      "Treat as normative baseline for Requirements Engineering. Note operational limitations: Normative full text licensed; record page only..",
    cited_in_articles: [
      {
        slug: "113-prognostics-health-management-rul-and-condition-based-decisions",
        number: 113,
        title:
          "113 — Prognostics and health management: RUL, uncertainty and maintenance decisions",
        filename: "113_PROGNOSTICS_HEALTH_MANAGEMENT_RUL_AND_CONDITION_BASED_DECISIONS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S324: {
    source_id: "S324",
    title: "NASA / PHM Society — Introduction to Prognostics",
    url: "https://phmsociety.org/wp-content/uploads/2011/08/Tutorial_Prognostics.pdf",
    source_type: "Technical conference tutorial",
    relevance: "PHM data path, RUL, data-driven/physics-based/hybrid methods and uncertainty",
    quality_signal: "NASA Ames / PHM Society tutorial; full TinyFish extraction",
    limitations: "2012 tutorial; concepts remain useful, not a current standard.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent: "PHM workflow, RUL, uncertainty, methods and metrics topics extracted",
      limitations: "2012 tutorial; not current standard.",
    },
    domain_topics: ["Systems Engineering", "Data Architecture", "Product Support & Lifecycle"],
    summary:
      "PHM data path, RUL, data-driven/physics-based/hybrid methods and uncertainty. Extraction detail: PHM workflow, RUL, uncertainty, methods and metrics topics extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2012 tutorial; concepts remain useful, not a current standard..",
    cited_in_articles: [
      {
        slug: "113-prognostics-health-management-rul-and-condition-based-decisions",
        number: 113,
        title:
          "113 — Prognostics and health management: RUL, uncertainty and maintenance decisions",
        filename: "113_PROGNOSTICS_HEALTH_MANAGEMENT_RUL_AND_CONDITION_BASED_DECISIONS.md",
      },
    ],
  },
  S325: {
    source_id: "S325",
    title:
      "Daigle, Saha & Goebel — A Comparison of Filter-based Approaches for Model-based Prognostics",
    url: "https://ntrs.nasa.gov/api/citations/20140006574",
    source_type: "NASA research paper",
    relevance: "State/parameter estimation and prediction; Daum, UKF and particle filters",
    quality_signal: "NASA NTRS metadata and abstract extracted",
    limitations: "Full text not fetched in this batch; access paper for full method comparison.",
    audit: {
      status: "Targeted extraction",
      tools: "TinyFish",
      extraction_extent: "NTRS metadata and abstract extracted",
      limitations: "Full paper not fetched.",
    },
    domain_topics: ["Systems Engineering", "MBSE & Modeling"],
    summary:
      "State/parameter estimation and prediction; Daum, UKF and particle filters. Extraction detail: NTRS metadata and abstract extracted",
    takeaways:
      "Provides formal academic/algorithmic proof models. Validate against target runtime constraints before adopting. Note: Full text not fetched in this batch; access paper for full method comparison..",
    cited_in_articles: [
      {
        slug: "113-prognostics-health-management-rul-and-condition-based-decisions",
        number: 113,
        title:
          "113 — Prognostics and health management: RUL, uncertainty and maintenance decisions",
        filename: "113_PROGNOSTICS_HEALTH_MANAGEMENT_RUL_AND_CONDITION_BASED_DECISIONS.md",
      },
    ],
  },
  S326: {
    source_id: "S326",
    title: "NASA — Prognostics chapter in Prognostics and Health Management of Engineering Systems",
    url: "https://ntrs.nasa.gov/api/citations/20160009529/downloads/20160009529.pdf",
    source_type: "Technical book chapter / government-hosted PDF",
    relevance: "RUL, health-based vs usage-based prognosis and uncertainty sources",
    quality_signal: "NASA NTRS PDF; full chapter extraction",
    limitations: "Book chapter, 2016; supplement with current ISO and tools.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent:
        "Chapter content on RUL, health/usage-based prognosis and uncertainty extracted",
      limitations: "Book chapter; verify book edition context.",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "RUL, health-based vs usage-based prognosis and uncertainty sources. Extraction detail: Chapter content on RUL, health/usage-based prognosis and uncertainty extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Book chapter, 2016; supplement with current ISO and tools..",
    cited_in_articles: [
      {
        slug: "113-prognostics-health-management-rul-and-condition-based-decisions",
        number: 113,
        title:
          "113 — Prognostics and health management: RUL, uncertainty and maintenance decisions",
        filename: "113_PROGNOSTICS_HEALTH_MANAGEMENT_RUL_AND_CONDITION_BASED_DECISIONS.md",
      },
    ],
  },
  S327: {
    source_id: "S327",
    title: "NASA Prognostic Python Packages (ProgPy)",
    url: "https://github.com/nasa/ProgPy",
    source_type: "Open-source engineering software",
    relevance:
      "Prognostic models, state estimators, predictors, algorithms and uncertainty propagation",
    quality_signal: "Official NASA GitHub repository; README extracted",
    limitations:
      "Software package is not independently validated for every target system; pin version and validate.",
    audit: {
      status: "Targeted extraction",
      tools: "TinyFish",
      extraction_extent:
        "README, package purpose, model/algorithm structure and citation version extracted",
      limitations: "Software is not automatically validated for all applications.",
    },
    domain_topics: ["Systems Engineering", "MBSE & Modeling"],
    summary:
      "Prognostic models, state estimators, predictors, algorithms and uncertainty propagation. Extraction detail: README, package purpose, model/algorithm structure and citation version extracted",
    takeaways:
      "Treat as normative baseline for Systems Engineering. Note operational limitations: Software package is not independently validated for every target system; pin version and validate..",
    cited_in_articles: [
      {
        slug: "113-prognostics-health-management-rul-and-condition-based-decisions",
        number: 113,
        title:
          "113 — Prognostics and health management: RUL, uncertainty and maintenance decisions",
        filename: "113_PROGNOSTICS_HEALTH_MANAGEMENT_RUL_AND_CONDITION_BASED_DECISIONS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S328: {
    source_id: "S328",
    title: "NASA-STD-8739.6B — Implementation Requirements for NASA Approved Workmanship Standards",
    url: "https://standards.nasa.gov/sites/default/files/standards/NASA/B/0/nasa-std-87396b.pdf",
    source_type: "NASA technical standard",
    relevance: "Implementation of NASA workmanship standards and hardware manufacturing controls",
    quality_signal: "NASA official standards PDF; front matter and history extracted",
    limitations:
      "Approved 2021; check live catalogue, applicability and tailoring for a specific project.",
    audit: {
      status: "Partial extraction",
      tools: "TinyFish",
      extraction_extent: "Front matter, history and early clauses extracted",
      limitations: "Not all clauses read in this pass.",
    },
    domain_topics: ["Systems Engineering", "Requirements Engineering"],
    summary:
      "Implementation of NASA workmanship standards and hardware manufacturing controls. Extraction detail: Front matter, history and early clauses extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Approved 2021; check live catalogue, applicability and tailoring for a specific project..",
    cited_in_articles: [
      {
        slug: "114-manufacturing-quality-special-process-control-and-electronic-parts-assurance",
        number: 114,
        title:
          "114 — Manufacturing quality, special-process control and electronic-parts assurance",
        filename:
          "114_MANUFACTURING_QUALITY_SPECIAL_PROCESS_CONTROL_AND_ELECTRONIC_PARTS_ASSURANCE.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S329: {
    source_id: "S329",
    title:
      "NASA-STD-8739.10 — Electrical, Electronic, and Electromechanical (EEE) Parts Assurance Standard",
    url: "https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline/0/nasa-std-873910.pdf",
    source_type: "NASA technical standard",
    relevance: "EEE part assurance, classification, obsolescence, parts management",
    quality_signal:
      "NASA official standards PDF; contents and obsolescence sections discovered/extracted",
    limitations:
      "Approved 2017 baseline; verify current status in NASA standards catalogue before use.",
    audit: {
      status: "Partial extraction",
      tools: "TinyFish",
      extraction_extent:
        "Front matter, table of contents and obsolescence section anchors identified",
      limitations: "Baseline 2017; verify live revision/status.",
    },
    domain_topics: ["Systems Engineering", "Product Support & Lifecycle"],
    summary:
      "EEE part assurance, classification, obsolescence, parts management. Extraction detail: Front matter, table of contents and obsolescence section anchors identified",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Approved 2017 baseline; verify current status in NASA standards catalogue before use..",
    cited_in_articles: [
      {
        slug: "114-manufacturing-quality-special-process-control-and-electronic-parts-assurance",
        number: 114,
        title:
          "114 — Manufacturing quality, special-process control and electronic-parts assurance",
        filename:
          "114_MANUFACTURING_QUALITY_SPECIAL_PROCESS_CONTROL_AND_ELECTRONIC_PARTS_ASSURANCE.md",
      },
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S330: {
    source_id: "S330",
    title: "Defense Standardization Program Office — DMSMS programme and SD-22 Guidebook page",
    url: "https://www.dsp.dla.mil/Programs/DMSMS/",
    source_type: "Government programme / guidance index",
    relevance:
      "DMSMS management; SD-22 guidebook updated January 2026; electrical/mechanical obsolescence",
    quality_signal: "Official DLA page; full page extraction",
    limitations:
      "January 2026 guidebook PDF itself not retrieved; page establishes update/status but not full clauses.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent:
        "Official DMSMS definition and SD-22 January 2026 update statement extracted",
      limitations: "January 2026 guidebook PDF itself not fetched.",
    },
    domain_topics: ["Regulated Sector Assurance", "Product Support & Lifecycle"],
    summary:
      "DMSMS management; SD-22 guidebook updated January 2026; electrical/mechanical obsolescence. Extraction detail: Official DMSMS definition and SD-22 January 2026 update statement extracted",
    takeaways:
      "Treat as normative baseline for Regulated Sector Assurance. Note operational limitations: January 2026 guidebook PDF itself not retrieved; page establishes update/status but not full clauses..",
    cited_in_articles: [
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S331: {
    source_id: "S331",
    title: "NASA Common Leading Indicators — Detailed Reference Guide",
    url: "https://nodis3.gsfc.nasa.gov/OCE_docs/OCE_52.pdf",
    source_type: "Government technical guide",
    relevance:
      "Requirements, interface, verification, reviews, software, problem reports, TPM, manufacturing, cost, schedule, staffing trends",
    quality_signal: "NASA OCE PDF; full TinyFish extraction",
    limitations:
      "January 2021 guidance; tailor to project and validate indicator predictive value.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent: "Contents and common leading indicator families extracted",
      limitations: "January 2021 guidance; tailor and validate predictive value.",
    },
    domain_topics: ["Systems Engineering", "Requirements Engineering", "Verification & Validation"],
    summary:
      "Requirements, interface, verification, reviews, software, problem reports, TPM, manufacturing, cost, schedule, staffing trends. Extraction detail: Contents and common leading indicator families extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: January 2021 guidance; tailor to project and validate indicator predictive value..",
    cited_in_articles: [
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "116-systems-engineering-measurement-technical-performance-and-leading-indicators",
        number: 116,
        title:
          "116 — Systems engineering measurement, technical performance and leading indicators",
        filename:
          "116_SYSTEMS_ENGINEERING_MEASUREMENT_TECHNICAL_PERFORMANCE_AND_LEADING_INDICATORS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S332: {
    source_id: "S332",
    title: "ISO/IEC/IEEE 15939:2017 — Systems and software engineering — Measurement process",
    url: "https://www.iso.org/standard/71197.html",
    source_type: "International standard",
    relevance: "Measurement information needs, measures, analysis validity and improvement",
    quality_signal: "Official ISO record; current published record page extracted",
    limitations:
      "DIS successor in development; 2017 remains published baseline at snapshot; licensed text.",
    audit: {
      status: "Targeted extraction",
      tools: "TinyFish",
      extraction_extent: "Official record, scope, status and DIS successor notice extracted",
      limitations: "Normative text licensed; current DIS not yet published.",
    },
    domain_topics: ["Systems Foundations"],
    summary:
      "Measurement information needs, measures, analysis validity and improvement. Extraction detail: Official record, scope, status and DIS successor notice extracted",
    takeaways:
      "Treat as normative baseline for Systems Foundations. Note operational limitations: DIS successor in development; 2017 remains published baseline at snapshot; licensed text..",
    cited_in_articles: [
      {
        slug: "116-systems-engineering-measurement-technical-performance-and-leading-indicators",
        number: 116,
        title:
          "116 — Systems engineering measurement, technical performance and leading indicators",
        filename:
          "116_SYSTEMS_ENGINEERING_MEASUREMENT_TECHNICAL_PERFORMANCE_AND_LEADING_INDICATORS.md",
      },
    ],
  },
  S333: {
    source_id: "S333",
    title: "NASA — Logical Decomposition",
    url: "https://www.nasa.gov/reference/4-3-logical-decomposition/",
    source_type: "Government engineering handbook page",
    relevance:
      "Functional decomposition, requirement allocation, architecture and MOE/MOP/TPM relationships",
    quality_signal: "NASA official handbook page; full TinyFish extraction",
    limitations: "Guidance; apply within project’s adopted NPR and technical authority context.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent:
        "Purpose, inputs, functional decomposition and MOE/MOP/TPM relationship extracted",
      limitations: "NASA handbook guidance.",
    },
    domain_topics: [
      "Systems Engineering",
      "Requirements Engineering",
      "Software & Enterprise Architecture",
    ],
    summary:
      "Functional decomposition, requirement allocation, architecture and MOE/MOP/TPM relationships. Extraction detail: Purpose, inputs, functional decomposition and MOE/MOP/TPM relationship extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Guidance; apply within project’s adopted NPR and technical authority context..",
    cited_in_articles: [
      {
        slug: "116-systems-engineering-measurement-technical-performance-and-leading-indicators",
        number: 116,
        title:
          "116 — Systems engineering measurement, technical performance and leading indicators",
        filename:
          "116_SYSTEMS_ENGINEERING_MEASUREMENT_TECHNICAL_PERFORMANCE_AND_LEADING_INDICATORS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S334: {
    source_id: "S334",
    title: "NASA/SP-2010-576 — Risk-Informed Decision Making Handbook",
    url: "https://ntrs.nasa.gov/api/citations/20100021361/downloads/20100021361.pdf",
    source_type: "Government technical handbook",
    relevance: "Risk-informed decision making in formulation, alternative analysis, graded rigor",
    quality_signal: "NASA NTRS PDF; full TinyFish extraction",
    limitations: "2010 handbook; check current NPR/policy and related updates.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent: "Handbook front matter and process context extracted",
      limitations: "2010 version; check current policy.",
    },
    domain_topics: ["Systems Engineering", "Decision Analysis & Trade Studies"],
    summary:
      "Risk-informed decision making in formulation, alternative analysis, graded rigor. Extraction detail: Handbook front matter and process context extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2010 handbook; check current NPR/policy and related updates..",
    cited_in_articles: [
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S336: {
    source_id: "S336",
    title: "NASA/SP-2011-3422 — NASA Risk Management Handbook",
    url: "https://ntrs.nasa.gov/api/citations/20120000033/downloads/20120000033.pdf",
    source_type: "Government technical handbook",
    relevance: "Risk management process, alternative uncertainty and risk treatment",
    quality_signal: "NASA NTRS PDF; full TinyFish extraction",
    limitations: "2011 handbook; confirm current governing policy and local tailoring.",
    audit: {
      status: "Full extraction",
      tools: "TinyFish",
      extraction_extent: "Handbook front matter and risk management context extracted",
      limitations: "2011 version; check current policy.",
    },
    domain_topics: ["Systems Engineering"],
    summary:
      "Risk management process, alternative uncertainty and risk treatment. Extraction detail: Handbook front matter and risk management context extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: 2011 handbook; confirm current governing policy and local tailoring..",
    cited_in_articles: [
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S338: {
    source_id: "S338",
    title: "Integrated Product Support Elements Guidebook v1.1b (January 2024)",
    url: "https://www.waru.edu/sites/default/files/2025-03/Integrated%20Product%20Support%20%28IPS%29%20Element-Guidebook%20v1.1b.pdf",
    source_type: "Government product-support guidebook",
    relevance: "12 IPS elements and lifecycle support integration",
    quality_signal: "Exa discovery / official DoD guidebook distribution page",
    limitations:
      "PDF fetch target_unreachable in this pass; treat content at summary level until read.",
    audit: {
      status: "Unreachable",
      tools: "TinyFish",
      extraction_extent: "Search metadata, title, date and guidebook page references captured",
      limitations: "PDF fetch target_unreachable.",
    },
    domain_topics: ["Product Support & Lifecycle"],
    summary:
      "12 IPS elements and lifecycle support integration. Extraction detail: Search metadata, title, date and guidebook page references captured",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: PDF fetch target_unreachable in this pass; treat content at summary level until read..",
    cited_in_articles: [
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S339: {
    source_id: "S339",
    title: "DoDI 5000.91 — Product Support Management for the Adaptive Acquisition Framework",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/500091p.PDF",
    source_type: "Government instruction",
    relevance: "Product support policy and IPS element framework",
    quality_signal: "Official DoD issuances record; Exa discovery",
    limitations:
      "Direct PDF fetch blocked; verify change number and current official file before use.",
    audit: {
      status: "Unreachable",
      tools: "Exa discovery; TinyFish attempted",
      extraction_extent: "Official DoD issuance URL identified and scope discovered",
      limitations: "Direct PDF fetch target_unreachable; verify latest change.",
    },
    domain_topics: ["Regulated Sector Assurance", "Product Support & Lifecycle"],
    summary:
      "Product support policy and IPS element framework. Extraction detail: Official DoD issuance URL identified and scope discovered",
    takeaways:
      "Treat as normative baseline for Regulated Sector Assurance. Note operational limitations: Direct PDF fetch blocked; verify change number and current official file before use..",
    cited_in_articles: [
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
    ],
  },
  S340: {
    source_id: "S340",
    title: "DoD Product Support Manager Guidebook",
    url: "https://www.waru.edu/tools/product-support-manager-psm-guidebook",
    source_type: "Government guidebook",
    relevance: "PSM responsibilities, LCSP and outcome-based lifecycle product support",
    quality_signal: "Official WarU/DAU source page; Exa discovery",
    limitations: "Bot blocked in TinyFish; May 2022 version status recorded by page.",
    audit: {
      status: "Blocked",
      tools: "Exa discovery; TinyFish attempted",
      extraction_extent: "Official distribution page and May 2022 update context discovered",
      limitations: "TinyFish bot_blocked.",
    },
    domain_topics: ["Regulated Sector Assurance", "Product Support & Lifecycle"],
    summary:
      "PSM responsibilities, LCSP and outcome-based lifecycle product support. Extraction detail: Official distribution page and May 2022 update context discovered",
    takeaways:
      "Treat as normative baseline for Regulated Sector Assurance. Note operational limitations: Bot blocked in TinyFish; May 2022 version status recorded by page..",
    cited_in_articles: [
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
    ],
  },
  S341: {
    source_id: "S341",
    title: "MIL-HDBK-1390 — Level of Repair Analysis",
    url: "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=280778",
    source_type: "Government defense handbook",
    relevance: "LORA process, cost/readiness choices, supportability analysis",
    quality_signal: "DLA ASSIST official record; active, validation notice 11 Sep 2024",
    limitations: "Handbook is guidance only and cannot be cited as a requirement; base doc 2015.",
    audit: {
      status: "Targeted extraction",
      tools: "Exa discovery",
      extraction_extent: "DLA ASSIST status, scope and validation notice extracted",
      limitations: "Handbook guidance only; full base handbook not extracted.",
    },
    domain_topics: ["Regulated Sector Assurance", "Product Support & Lifecycle"],
    summary:
      "LORA process, cost/readiness choices, supportability analysis. Extraction detail: DLA ASSIST status, scope and validation notice extracted",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Handbook is guidance only and cannot be cited as a requirement; base doc 2015..",
    cited_in_articles: [
      {
        slug: "117-product-support-integrated-logistics-and-level-of-repair-analysis",
        number: 117,
        title: "117 — Product support, integrated logistics and Level of Repair Analysis",
        filename: "117_PRODUCT_SUPPORT_INTEGRATED_LOGISTICS_AND_LEVEL_OF_REPAIR_ANALYSIS.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S343: {
    source_id: "S343",
    title: "NASA-STD-8739.10 EEE Parts Assurance Standard — official record",
    url: "https://standards.nasa.gov/standard/NASA/NASA-STD-8739.10",
    source_type: "Government standards catalogue",
    relevance: "Current status and applicability metadata for EEE parts assurance",
    quality_signal: "NASA catalogue page location captured",
    limitations: "Direct status page not separately scraped in this pass; PDF is baseline record.",
    audit: {
      status: "Discovery only",
      tools: "NASA catalogue reference",
      extraction_extent: "Catalogue URL identified",
      limitations: "Status page not separately fetched.",
    },
    domain_topics: ["Systems Engineering", "Data Architecture"],
    summary:
      "Current status and applicability metadata for EEE parts assurance. Extraction detail: Catalogue URL identified",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Direct status page not separately scraped in this pass; PDF is baseline record..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
    ],
  },
  S344: {
    source_id: "S344",
    title: "NASA-STD-8739.6B Workmanship Standard — official record",
    url: "https://standards.nasa.gov/standard/NASA/NASA-STD-8739.6",
    source_type: "Government standards catalogue",
    relevance: "Status and applicability metadata for NASA workmanship implementation",
    quality_signal: "NASA catalogue page location captured",
    limitations: "Direct status page not separately scraped in this pass; check current revision.",
    audit: {
      status: "Discovery only",
      tools: "NASA catalogue reference",
      extraction_extent: "Catalogue URL identified",
      limitations: "Status page not separately fetched.",
    },
    domain_topics: ["Systems Engineering", "Data Architecture"],
    summary:
      "Status and applicability metadata for NASA workmanship implementation. Extraction detail: Catalogue URL identified",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Direct status page not separately scraped in this pass; check current revision..",
    cited_in_articles: [
      {
        slug: "00-start-here",
        number: 0,
        title: "System Design & Systems Thinking — Research and Learning Pack",
        filename: "00_START_HERE.md",
      },
      {
        slug: "01-definitions-and-mental-models",
        number: 1,
        title: "01 — Definitions and mental models",
        filename: "01_DEFINITIONS_AND_MENTAL_MODELS.md",
      },
      {
        slug: "03-system-design-foundations",
        number: 3,
        title: "03 — System design foundations",
        filename: "03_SYSTEM_DESIGN_FOUNDATIONS.md",
      },
      {
        slug: "07-distributed-systems-and-data",
        number: 7,
        title: "07 — Distributed systems and data",
        filename: "07_DISTRIBUTED_SYSTEMS_AND_DATA.md",
      },
      {
        slug: "34-data-architecture-integration-and-migration",
        number: 34,
        title: "34 — Data architecture, integration and migration engineering",
        filename: "34_DATA_ARCHITECTURE_INTEGRATION_AND_MIGRATION.md",
      },
      {
        slug: "66-data-contracts-streaming-and-migration-assurance",
        number: 66,
        title: "66 — Data contracts, streaming semantics and migration assurance",
        filename: "66_DATA_CONTRACTS_STREAMING_AND_MIGRATION_ASSURANCE.md",
      },
    ],
  },
  S346: {
    source_id: "S346",
    title: "RAND — Robust Decision Making (RDM) method guide",
    url: "https://www.rand.org/pubs/tools/TL320/tool/robust-decision-making.html",
    source_type: "Research / decision-support method",
    relevance:
      "Decision-making under deep uncertainty, vulnerability analysis and scenario discovery",
    quality_signal: "RAND official method page; Exa discovery",
    limitations:
      "A method overview, not a universal engineering standard; use case-specific model and stakeholder validation.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Official method page and core RDM sequence found; not scraped in this batch.",
      limitations: "Method resource; not a standard.",
    },
    domain_topics: ["Decision Analysis & Trade Studies", "Product Support & Lifecycle"],
    summary:
      "Decision-making under deep uncertainty, vulnerability analysis and scenario discovery. Extraction detail: Official method page and core RDM sequence found; not scraped in this batch.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: A method overview, not a universal engineering standard; use case-specific model and stakeholder validation..",
    cited_in_articles: [
      {
        slug: "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty",
        number: 118,
        title: "118 — Robust decision-making, Bayesian evidence and deep uncertainty",
        filename: "118_ROBUST_DECISION_MAKING_BAYESIAN_EVIDENCE_AND_DEEP_UNCERTAINTY.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S348: {
    source_id: "S348",
    title: "SD-22 DMSMS Guidebook — March 2024 Working Draft",
    url: "https://www.waru.edu/sites/default/files/2024-04/SD-22%20DMSMS%20Guidebook%2C%20March%202024.pdf",
    source_type: "Government guidebook working draft",
    relevance:
      "Historical draft content on risk-based DMSMS management across acquisition lifecycle",
    quality_signal: "Exa discovery; direct TinyFish fetch attempted but target_unreachable",
    limitations:
      "Explicitly marked Working Draft FY24; superseded by January 2026 SD-22 update page; do not cite as current guidebook.",
    audit: {
      status: "Unreachable",
      tools: "Exa discovery; TinyFish attempted",
      extraction_extent:
        "Search result explicitly identifies the document as a Working Draft FY24.",
      limitations:
        "Not current; superseded in status by official January 2026 SD-22 page; PDF target_unreachable.",
    },
    domain_topics: ["Distributed Systems", "Product Support & Lifecycle"],
    summary:
      "Historical draft content on risk-based DMSMS management across acquisition lifecycle. Extraction detail: Search result explicitly identifies the document as a Working Draft FY24.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Explicitly marked Working Draft FY24; superseded by January 2026 SD-22 update page; do not cite as current guidebook..",
    cited_in_articles: [
      {
        slug: "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience",
        number: 115,
        title: "115 — DMSMS, obsolescence, supply assurance and lifecycle resilience",
        filename: "115_DMSMS_OBSOLESCENCE_SUPPLY_ASSURANCE_AND_LIFECYCLE_RESILIENCE.md",
      },
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S349: {
    source_id: "S349",
    title: "Reliability.Space — System-level reliability modeling method selection",
    url: "https://handbook.reliability.space/en/latest/system/handbook/reliability_prediction/methods.html",
    source_type: "Technical handbook / secondary resource",
    relevance: "RBD, FTA, Markov, Petri nets and Bayesian-network use cases and limitations",
    quality_signal: "Exa discovery only",
    limitations:
      "Secondary technical resource; verify modeling assumptions against NIST/NASA primary references.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent:
        "Method-selection table identified for RBD, FTA, Markov, Petri nets and Bayesian networks.",
      limitations: "Secondary source; verify each assumption against primary sources.",
    },
    domain_topics: [
      "Reliability & Dependability",
      "MBSE & Modeling",
      "Decision Analysis & Trade Studies",
    ],
    summary:
      "RBD, FTA, Markov, Petri nets and Bayesian-network use cases and limitations. Extraction detail: Method-selection table identified for RBD, FTA, Markov, Petri nets and Bayesian networks.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Secondary technical resource; verify modeling assumptions against NIST/NASA primary references..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
    ],
  },
  S252: {
    source_id: "S252",
    title: "Australian Cyber Security Centre — AI considerations within the Essentials",
    url: "https://www.cyber.gov.au/publication/ai-considerations-within-the-essentials",
    source_type: "Government cybersecurity guidance",
    relevance:
      "Governance, identity, permissions, vulnerability management and secure lifecycle considerations for AI systems",
    quality_signal: "ACSC official 2026 publication page; Exa discovery",
    limitations:
      "Australian cybersecurity context; confirm exact recommendations and applicability before adopting elsewhere.",
    audit: {
      status: "Discovery only",
      tools: "Exa discovery",
      extraction_extent: "Official current publication page and key AI-security claims discovered.",
      limitations: "Page not deeply scraped in this pass; jurisdiction-specific guidance.",
    },
    domain_topics: ["Security Architecture", "Product Support & Lifecycle"],
    summary:
      "Governance, identity, permissions, vulnerability management and secure lifecycle considerations for AI systems. Extraction detail: Official current publication page and key AI-security claims discovered.",
    takeaways:
      "Practical implementation guidance and architectural patterns. Balance against project-specific constraints: Australian cybersecurity context; confirm exact recommendations and applicability before adopting elsewhere..",
    cited_in_articles: [
      {
        slug: "18-source-library",
        number: 18,
        title: "18 — Source library",
        filename: "18_SOURCE_LIBRARY.md",
      },
      {
        slug: "91-human-machine-teaming-autonomy-boundaries-and-operational-control",
        number: 91,
        title: "91 — Human-machine teaming: autonomy boundaries, control and safety",
        filename: "91_HUMAN_MACHINE_TEAMING_AUTONOMY_BOUNDARIES_AND_OPERATIONAL_CONTROL.md",
      },
    ],
  },
};

export const ALL_ENRICHED_SOURCES: EnrichedSource[] = Object.values(ENRICHED_SOURCES);

export const ARTICLE_TO_SOURCES: Record<string, string[]> = {
  "00-start-here": [
    "S01",
    "S54",
    "S55",
    "S58",
    "S61",
    "S64",
    "S65",
    "S70",
    "S78",
    "S81",
    "S83",
    "S84",
    "S85",
    "S86",
    "S87",
    "S90",
    "S98",
    "S101",
    "S102",
    "S103",
    "S104",
    "S105",
    "S107",
    "S108",
    "S113",
    "S114",
    "S115",
    "S116",
    "S118",
    "S159",
    "S231",
    "S232",
    "S236",
    "S266",
    "S278",
    "S280",
    "S281",
    "S282",
    "S287",
    "S288",
    "S289",
    "S290",
    "S291",
    "S292",
    "S293",
    "S309",
    "S310",
    "S311",
    "S312",
    "S313",
    "S315",
    "S316",
    "S317",
    "S343",
    "S344",
  ],
  "01-definitions-and-mental-models": [
    "S01",
    "S02",
    "S03",
    "S54",
    "S55",
    "S58",
    "S61",
    "S64",
    "S65",
    "S78",
    "S81",
    "S101",
    "S102",
    "S103",
    "S108",
    "S113",
    "S114",
    "S115",
    "S116",
    "S118",
    "S232",
    "S266",
    "S278",
    "S280",
    "S281",
    "S282",
    "S287",
    "S288",
    "S289",
    "S290",
    "S309",
    "S310",
    "S311",
    "S312",
    "S316",
    "S317",
    "S343",
    "S344",
  ],
  "14-certifications-and-credentials": [
    "S01",
    "S12",
    "S13",
    "S14",
    "S15",
    "S16",
    "S38",
    "S39",
    "S40",
    "S41",
    "S42",
    "S43",
    "S44",
    "S45",
    "S46",
    "S47",
    "S67",
    "S124",
    "S126",
    "S131",
    "S136",
    "S137",
    "S148",
    "S149",
    "S150",
    "S151",
    "S153",
    "S155",
    "S160",
    "S161",
    "S165",
  ],
  "15-learning-roadmap": [
    "S01",
    "S02",
    "S04",
    "S05",
    "S07",
    "S08",
    "S09",
    "S14",
    "S15",
    "S16",
    "S19",
    "S21",
    "S22",
    "S32",
    "S34",
    "S48",
  ],
  "18-source-library": [
    "S01",
    "S02",
    "S03",
    "S04",
    "S05",
    "S06",
    "S07",
    "S08",
    "S09",
    "S10",
    "S11",
    "S12",
    "S13",
    "S14",
    "S15",
    "S16",
    "S17",
    "S18",
    "S20",
    "S21",
    "S22",
    "S23",
    "S24",
    "S25",
    "S26",
    "S27",
    "S28",
    "S29",
    "S30",
    "S31",
    "S32",
    "S33",
    "S34",
    "S35",
    "S36",
    "S37",
    "S38",
    "S39",
    "S40",
    "S41",
    "S42",
    "S43",
    "S44",
    "S45",
    "S46",
    "S47",
    "S49",
    "S50",
    "S51",
    "S52",
    "S53",
    "S59",
    "S60",
    "S62",
    "S63",
    "S66",
    "S67",
    "S68",
    "S69",
    "S71",
    "S72",
    "S73",
    "S75",
    "S79",
    "S80",
    "S82",
    "S88",
    "S89",
    "S91",
    "S92",
    "S93",
    "S94",
    "S95",
    "S97",
    "S119",
    "S120",
    "S121",
    "S122",
    "S123",
    "S124",
    "S125",
    "S126",
    "S127",
    "S128",
    "S129",
    "S130",
    "S131",
    "S132",
    "S135",
    "S136",
    "S139",
    "S140",
    "S144",
    "S145",
    "S147",
    "S148",
    "S151",
    "S152",
    "S156",
    "S157",
    "S165",
    "S167",
    "S168",
    "S169",
    "S170",
    "S171",
    "S172",
    "S173",
    "S174",
    "S175",
    "S176",
    "S177",
    "S178",
    "S179",
    "S180",
    "S218",
    "S246",
    "S249",
    "S250",
    "S251",
    "S253",
    "S254",
    "S255",
    "S256",
    "S257",
    "S258",
    "S259",
    "S262",
    "S263",
    "S268",
    "S269",
    "S271",
    "S272",
    "S273",
    "S274",
    "S275",
    "S276",
    "S277",
    "S318",
    "S320",
    "S321",
    "S322",
    "S323",
    "S327",
    "S328",
    "S329",
    "S330",
    "S331",
    "S333",
    "S334",
    "S336",
    "S338",
    "S341",
    "S346",
    "S348",
    "S349",
    "S252",
  ],
  "03-system-design-foundations": [
    "S02",
    "S08",
    "S09",
    "S54",
    "S55",
    "S58",
    "S61",
    "S64",
    "S65",
    "S78",
    "S81",
    "S101",
    "S102",
    "S103",
    "S108",
    "S111",
    "S113",
    "S114",
    "S115",
    "S116",
    "S118",
    "S158",
    "S232",
    "S266",
    "S278",
    "S280",
    "S281",
    "S282",
    "S290",
    "S299",
    "S310",
    "S311",
    "S312",
    "S316",
    "S317",
    "S343",
    "S344",
  ],
  "29-requirements-engineering-traceability-and-change": [
    "S02",
    "S09",
    "S11",
    "S12",
    "S99",
    "S101",
    "S111",
    "S113",
    "S114",
    "S119",
    "S121",
    "S126",
    "S158",
    "S282",
    "S299",
    "S311",
  ],
  "58-systems-integration-interface-and-configuration-engineering": [
    "S02",
    "S11",
    "S12",
    "S16",
    "S57",
    "S119",
    "S121",
    "S167",
    "S168",
  ],
  "04-requirements-and-quality-attributes": [
    "S03",
    "S09",
    "S10",
    "S11",
    "S12",
    "S13",
    "S101",
    "S111",
    "S113",
    "S114",
    "S158",
    "S282",
    "S299",
    "S311",
  ],
  "06-decision-method-and-tradeoffs": ["S03", "S09", "S81", "S111", "S113", "S289"],
  "02-systems-thinking": ["S04", "S05", "S06", "S07", "S287", "S288", "S289", "S309"],
  "27-systems-science-and-complexity": [
    "S04",
    "S05",
    "S10",
    "S11",
    "S14",
    "S109",
    "S110",
    "S145",
    "S147",
  ],
  "28-problem-framing-and-systems-methods": ["S04", "S05", "S14", "S146", "S147"],
  "30-architecture-description-evaluation-and-decisions": [
    "S09",
    "S12",
    "S81",
    "S120",
    "S126",
    "S128",
    "S289",
  ],
  "101-reliability-centered-maintenance-task-selection-and-supportability-engineering": [
    "S10",
    "S16",
    "S20",
    "S23",
    "S26",
    "S30",
    "S40",
    "S50",
    "S54",
    "S60",
    "S75",
    "S77",
    "S100",
    "S101",
    "S108",
    "S116",
    "S164",
    "S169",
    "S200",
    "S232",
    "S234",
    "S262",
    "S266",
    "S279",
    "S281",
    "S295",
    "S296",
    "S300",
    "S306",
    "S310",
    "S317",
  ],
  "10-operations-observability-and-delivery": ["S10", "S11", "S12", "S15", "S29", "S30"],
  "117-product-support-integrated-logistics-and-level-of-repair-analysis": [
    "S10",
    "S20",
    "S26",
    "S30",
    "S33",
    "S34",
    "S40",
    "S50",
    "S60",
    "S100",
    "S200",
    "S262",
    "S300",
    "S338",
    "S339",
    "S340",
    "S341",
  ],
  "39-mbse-sysml-digital-engineering-and-model-governance": [
    "S11",
    "S12",
    "S64",
    "S106",
    "S111",
    "S112",
    "S116",
    "S124",
    "S280",
    "S281",
    "S282",
    "S287",
    "S288",
    "S304",
    "S305",
    "S307",
    "S309",
  ],
  "48-standards-and-regulatory-reference-map": [
    "S11",
    "S12",
    "S54",
    "S101",
    "S102",
    "S108",
    "S110",
    "S116",
    "S119",
    "S123",
    "S162",
    "S164",
    "S232",
    "S266",
    "S279",
    "S281",
    "S295",
    "S296",
    "S297",
    "S298",
    "S305",
    "S306",
    "S310",
    "S314",
    "S317",
  ],
  "55-product-strategy-value-and-system-design": [
    "S11",
    "S13",
    "S14",
    "S15",
    "S30",
    "S37",
    "S140",
    "S142",
    "S144",
    "S152",
  ],
  "56-control-embedded-and-cyber-physical-systems": [
    "S11",
    "S13",
    "S17",
    "S117",
    "S131",
    "S135",
    "S170",
    "S179",
  ],
  "78-standards-regulatory-assurance-and-certification-map-deep": [
    "S11",
    "S12",
    "S13",
    "S21",
    "S24",
    "S102",
    "S119",
    "S120",
    "S121",
    "S122",
    "S123",
    "S129",
    "S131",
    "S162",
    "S164",
    "S211",
    "S212",
    "S213",
    "S244",
    "S295",
    "S296",
    "S297",
    "S298",
    "S305",
    "S314",
  ],
  "08-reliability-defense-in-depth": [
    "S12",
    "S14",
    "S15",
    "S20",
    "S21",
    "S22",
    "S65",
    "S162",
    "S163",
    "S278",
    "S285",
    "S286",
    "S290",
    "S294",
    "S295",
    "S301",
    "S302",
    "S304",
    "S305",
    "S306",
    "S307",
    "S308",
    "S314",
    "S317",
  ],
  "37-cybersecurity-architecture-and-systems-security-engineering": [
    "S12",
    "S13",
    "S15",
    "S23",
    "S24",
    "S65",
    "S129",
    "S130",
    "S153",
    "S154",
    "S155",
    "S297",
    "S298",
  ],
  "40-enterprise-architecture-business-process-and-governance": [
    "S12",
    "S14",
    "S126",
    "S127",
    "S140",
  ],
  "51-research-frontiers-and-open-engineering-problems": [
    "S12",
    "S13",
    "S14",
    "S124",
    "S133",
    "S136",
    "S138",
    "S144",
    "S145",
    "S147",
  ],
  "54-systems-design-tooling-and-modeling-stack": [
    "S12",
    "S15",
    "S17",
    "S29",
    "S30",
    "S68",
    "S124",
    "S128",
    "S153",
    "S156",
    "S175",
    "S176",
    "S177",
    "S178",
  ],
  "64-architecture-governance-conformance-and-evolution": ["S12", "S19", "S120", "S125", "S193"],
  "69-systems-security-cyber-resilience-and-supply-chain-assurance": [
    "S12",
    "S21",
    "S24",
    "S129",
    "S211",
    "S212",
    "S213",
  ],
  "84-architecture-frameworks-dm2-uaf-naf-and-semantic-interoperability": [
    "S12",
    "S14",
    "S18",
    "S19",
    "S24",
    "S120",
    "S140",
    "S141",
    "S188",
    "S249",
    "S190",
  ],
  "35-reliability-maintainability-availability-and-resilience": [
    "S13",
    "S65",
    "S75",
    "S76",
    "S133",
    "S134",
    "S135",
    "S136",
    "S285",
    "S286",
    "S301",
    "S302",
    "S304",
    "S305",
    "S306",
    "S307",
    "S308",
    "S317",
  ],
  "36-system-safety-hazard-analysis-and-assurance": [
    "S13",
    "S65",
    "S77",
    "S132",
    "S134",
    "S162",
    "S163",
    "S278",
    "S290",
    "S294",
    "S295",
    "S301",
    "S314",
  ],
  "42-ai-enabled-systems-architecture-and-ai-assurance": [
    "S13",
    "S16",
    "S65",
    "S136",
    "S137",
    "S138",
    "S160",
    "S297",
    "S298",
  ],
  "53-career-pathways-and-credential-selection": [
    "S13",
    "S14",
    "S15",
    "S60",
    "S67",
    "S68",
    "S136",
    "S139",
    "S148",
    "S151",
  ],
  "60-sustainable-systems-engineering-and-lifecycle-assessment": [
    "S13",
    "S15",
    "S16",
    "S17",
    "S139",
    "S152",
    "S169",
    "S173",
    "S174",
  ],
  "67-probabilistic-risk-common-cause-and-physics-of-failure": [
    "S13",
    "S20",
    "S64",
    "S106",
    "S111",
    "S116",
    "S132",
    "S203",
    "S204",
    "S206",
    "S207",
    "S280",
    "S281",
    "S282",
    "S287",
    "S288",
    "S304",
    "S305",
    "S307",
    "S309",
  ],
  "74-functional-safety-standards-by-sector-and-assurance-boundaries": [
    "S13",
    "S131",
    "S232",
    "S266",
  ],
  "05-architecture-styles-and-patterns": ["S14", "S16", "S102", "S111", "S113", "S299"],
  "07-distributed-systems-and-data": [
    "S14",
    "S17",
    "S18",
    "S19",
    "S102",
    "S232",
    "S289",
    "S299",
    "S302",
    "S303",
    "S306",
    "S343",
    "S344",
  ],
  "103-system-dynamics-model-building-validation-and-policy-intervention": ["S14"],
  "31-software-architecture-and-domain-design-deep-dive": ["S14", "S16", "S32", "S144", "S145"],
  "32-distributed-systems-consistency-and-failure-modes": [
    "S14",
    "S15",
    "S18",
    "S20",
    "S102",
    "S141",
    "S299",
  ],
  "34-data-architecture-integration-and-migration": [
    "S14",
    "S140",
    "S141",
    "S144",
    "S232",
    "S289",
    "S302",
    "S303",
    "S306",
    "S343",
    "S344",
  ],
  "41-human-factors-socio-technical-and-organization-design": [
    "S14",
    "S142",
    "S143",
    "S232",
    "S266",
  ],
  "57-operations-research-optimization-and-simulation": [
    "S14",
    "S17",
    "S28",
    "S50",
    "S146",
    "S147",
    "S171",
    "S172",
  ],
  "99-architecture-evaluation-iso42030-atam-and-evidence-based-review": [
    "S14",
    "S19",
    "S27",
    "S142",
    "S193",
    "S273",
  ],
  "33-cloud-native-platform-engineering-and-operations": ["S15", "S152"],
  "11-product-impact-and-org-design": ["S16", "S31", "S32"],
  "12-real-world-case-studies": ["S16", "S21", "S22", "S32", "S33", "S34", "S35", "S36", "S37"],
  "59-product-support-logistics-and-lifecycle-engineering": [
    "S16",
    "S17",
    "S35",
    "S75",
    "S76",
    "S169",
    "S179",
  ],
  "70-formal-methods-model-checking-and-verification-assurance": [
    "S16",
    "S58",
    "S111",
    "S167",
    "S279",
    "S282",
    "S283",
    "S284",
    "S310",
    "S312",
    "S317",
  ],
  "77-reliability-centered-maintenance-and-integrated-product-support": [
    "S16",
    "S23",
    "S76",
    "S169",
    "S234",
    "S235",
  ],
  "72-real-time-control-embedded-and-cyber-physical-assurance": ["S17", "S22", "S170", "S220"],
  "73-operations-research-robust-decisions-and-hybrid-simulation": ["S17", "S22", "S171", "S222"],
  "61-systems-methods-pluralism-problem-structuring-and-boundary-critique": [
    "S18",
    "S180",
    "S181",
    "S182",
    "S183",
    "S184",
    "S185",
  ],
  "62-mission-engineering-mission-architectures-and-operational-analysis": [
    "S18",
    "S93",
    "S186",
    "S188",
    "S189",
  ],
  "102-model-based-engineering-model-assurance-and-toolchain-governance": ["S19", "S22", "S191"],
  "63-requirements-engineering-formalization-and-evidence-chains": ["S19", "S56", "S191"],
  "65-distributed-systems-correctness-consensus-and-time": [
    "S19",
    "S195",
    "S196",
    "S197",
    "S198",
    "S199",
  ],
  "118-robust-decision-making-bayesian-evidence-and-deep-uncertainty": [
    "S20",
    "S33",
    "S34",
    "S204",
    "S334",
    "S336",
    "S346",
  ],
  "66-data-contracts-streaming-and-migration-assurance": [
    "S20",
    "S200",
    "S201",
    "S202",
    "S232",
    "S289",
    "S302",
    "S303",
    "S306",
    "S343",
    "S344",
  ],
  "68-system-safety-stpa-safety-cases-and-hazard-control": ["S20", "S208", "S209"],
  "88-risk-uncertainty-model-validation-and-value-of-information": [
    "S20",
    "S26",
    "S81",
    "S203",
    "S204",
    "S267",
    "S289",
  ],
  "90-data-platform-semantics-data-mesh-lakehouse-and-contract-governance": [
    "S20",
    "S26",
    "S200",
    "S263",
    "S268",
  ],
  "45-architecture-antipatterns-and-failure-modes": ["S21", "S22", "S34", "S37"],
  "71-human-systems-integration-automation-and-cognitive-engineering": [
    "S21",
    "S216",
    "S217",
    "S218",
  ],
  "87-human-reliability-analysis-task-models-dependence-and-uncertainty": [
    "S21",
    "S26",
    "S218",
    "S232",
    "S264",
    "S265",
    "S266",
  ],
  "91-human-machine-teaming-autonomy-boundaries-and-operational-control": [
    "S21",
    "S23",
    "S25",
    "S26",
    "S218",
    "S230",
    "S260",
    "S252",
  ],
  "75-engineering-incident-forensics-and-system-failure-cases-ii": [
    "S22",
    "S224",
    "S225",
    "S226",
    "S227",
    "S228",
  ],
  "76-agentic-ai-systems-threat-model-evaluation-and-control-2026": ["S22", "S23", "S229", "S230"],
  "93-incident-forensics-causal-analysis-and-learning-systems": [
    "S22",
    "S224",
    "S225",
    "S226",
    "S227",
    "S228",
  ],
  "09-security-and-threat-modeling": ["S23", "S28", "S65", "S297", "S298"],
  "82-assurance-cases-gsn-argument-engineering-and-evidence-quality": ["S24", "S246", "S247"],
  "83-system-of-systems-engineering-governance-interoperability-and-emergence": [
    "S24",
    "S25",
    "S43",
    "S93",
    "S94",
    "S249",
    "S255",
    "S256",
  ],
  "85-configuration-management-baselines-digital-thread-and-product-data": [
    "S25",
    "S250",
    "S253",
    "S257",
  ],
  "86-product-line-engineering-commonality-variability-and-platform-governance": ["S25", "S251"],
  "89-value-engineering-function-analysis-and-lifecycle-value-decisions": ["S25", "S254"],
  "92-sector-assurance-applicability-and-regulatory-evidence-chains": [
    "S25",
    "S93",
    "S94",
    "S250",
    "S255",
    "S256",
  ],
  "94-research-evidence-provenance-and-standard-version-control": [
    "S25",
    "S93",
    "S94",
    "S250",
    "S255",
    "S256",
  ],
  "96-trade-studies-multi-criteria-decision-analysis-and-sensitivity": [
    "S26",
    "S27",
    "S269",
    "S276",
  ],
  "100-operational-reliability-objectives-sli-slo-error-budgets-and-mission-metrics": [
    "S27",
    "S274",
    "S275",
  ],
  "97-technical-reviews-readiness-gates-entrance-and-success-criteria": ["S27", "S272"],
  "98-semp-technical-planning-imp-ims-and-engineering-execution-control": [
    "S27",
    "S270",
    "S271",
    "S277",
  ],
  "112-repairable-system-dependability-markov-models-and-availability-engineering": [
    "S31",
    "S32",
    "S318",
    "S319",
    "S320",
    "S321",
    "S322",
  ],
  "113-prognostics-health-management-rul-and-condition-based-decisions": [
    "S32",
    "S323",
    "S324",
    "S325",
    "S326",
    "S327",
  ],
  "114-manufacturing-quality-special-process-control-and-electronic-parts-assurance": [
    "S32",
    "S328",
    "S329",
  ],
  "115-dmsms-obsolescence-supply-assurance-and-lifecycle-resilience": [
    "S32",
    "S33",
    "S34",
    "S329",
    "S330",
    "S331",
    "S348",
  ],
  "116-systems-engineering-measurement-technical-performance-and-leading-indicators": [
    "S33",
    "S331",
    "S332",
    "S333",
  ],
  "21-systems-engineering-lifecycle-and-processes": [
    "S54",
    "S58",
    "S101",
    "S108",
    "S111",
    "S116",
    "S164",
    "S232",
    "S266",
    "S279",
    "S281",
    "S282",
    "S283",
    "S284",
    "S295",
    "S296",
    "S306",
    "S310",
    "S312",
    "S317",
  ],
  "38-verification-validation-test-engineering-and-assurance": [
    "S58",
    "S111",
    "S279",
    "S282",
    "S283",
    "S284",
    "S310",
    "S312",
    "S317",
  ],
  "22-mbse-digital-engineering-and-sysml": [
    "S64",
    "S106",
    "S111",
    "S116",
    "S280",
    "S281",
    "S282",
    "S287",
    "S288",
    "S304",
    "S305",
    "S307",
    "S309",
  ],
  "23-systems-engineering-specialties": [
    "S65",
    "S162",
    "S163",
    "S278",
    "S290",
    "S294",
    "S295",
    "S301",
    "S314",
  ],
  "46-architecture-problem-solving-and-review-playbook": [
    "S65",
    "S285",
    "S286",
    "S301",
    "S302",
    "S304",
    "S305",
    "S306",
    "S307",
    "S308",
    "S317",
  ],
  "43-system-of-systems-interoperability-and-governance": ["S94"],
  "44-domain-architecture-reference-map": [
    "S102",
    "S162",
    "S164",
    "S295",
    "S296",
    "S297",
    "S298",
    "S305",
    "S314",
  ],
};

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
  ATAM: "S125",
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
  const clean = slugOrFilename.replace(/\.md$/, "").toLowerCase().replace(/_/g, "-");
  const indexedIds = ARTICLE_TO_SOURCES[clean] || [];

  // Explicit S-ids in the body outrank the curated index: an article that cites S04
  // should show S04 even if the index was built before that citation was added.
  const directIds: string[] = [];
  if (articleBody) {
    for (const sid of articleBody.match(/\bS\d{2,3}\b/g) || []) {
      if (!directIds.includes(sid)) directIds.push(sid);
    }
    for (const [alias, sid] of Object.entries(CITATION_ALIASES)) {
      if (articleBody.includes(alias) && !directIds.includes(sid)) directIds.push(sid);
    }
  }

  const combinedIds = Array.from(new Set([...directIds, ...indexedIds]));
  return combinedIds.map((id) => ENRICHED_SOURCES[id]).filter(Boolean) as EnrichedSource[];
}
