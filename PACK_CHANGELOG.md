# Reference pack — build history

> Moved out of `content/pack/` on purpose: every `.md` file in that directory is a
> volume, so a changelog living there would have been counted as a 121st volume.

These are the reconciliation notes that used to sit inside `PACK_METADATA.json` and
appear on the public `/coverage` page under "About the pack". They are a build log:
successive passes recomputed the counts as volumes were added, so they disagree with
each other by design (252 → 275 → 283 → 292 → 320 → 322 sources).

They are kept here for provenance and moved out of the product surface, which now shows
only the current state plus the caveats that a reader actually needs.

This file is not imported by the app and is not part of the pack.

- At the end-of-pass Firecrawl account check, account 3 reported 111 credits remaining; account 1 was exhausted and account 2 was ineligible for Firecrawl. TinyFish account 2 successfully handled selected extraction batches.
- Latest validated repository counts after this pass: 275 source records; 112 Markdown files; 120 scrape audit rows. A source count does not mean every source was fully fetched.
- Final count recomputed after all files were written: 275 sources, 112 Markdown knowledge files, 120 scrape audit rows.
- Final count after sixth-level pass: 283 structured source records; 113 Markdown files; 128 scrape audit rows; 43 coverage domains.
- Source-audit reconciliation added nine citation URLs used in documents 103–111 and corrected a legacy duplicate audit reference. Newly added system dynamics critique, GSN, ERA and NASA SWE/standards-index records are discovery-only unless the status field says otherwise.
- Final repository count after source reconciliation: 292 source records; 113 Markdown files; 137 audit rows.
- Recomputed after documents 112-118 and source/audit/coverage refresh: 320 source records; 120 Markdown files; 165 source-audit rows; 50 coverage domains; 73 practice prompts.
- Citation audit after documents 112-118 corrected source IDs in chapters 115-118. Added RAND RDM, ASD S-Series and explicit historical SD-22 draft records. The March 2024 SD-22 file is marked Working Draft; the official DLA page states the guidebook was updated in January 2026, but that newer PDF was not retrieved.
- Final sixth-level counts: 322 unique source records; 120 Markdown files; 167 source-audit rows; 50 coverage domains; 73 practice prompts.
- Duplicate source pointers used during drafting were removed from the master register so every source ID and canonical URL is unique; documents now cite the authoritative canonical source IDs.
- Final source reconciliation restored five source IDs used by earlier advanced volumes and removed duplicate canonical URL records by reusing original source IDs. Citation checks are required after export; the audit records full/partial/discovery-only/unreachable status.
- Duplicate source URLs introduced during draft expansion were reconciled to the original canonical source IDs; every source URL in the current master register is unique.
- Validated final audit size: 162 rows; these include full, partial, targeted, discovery-only, blocked and unreachable fetch statuses. This count is not the number of fully scraped sources.
