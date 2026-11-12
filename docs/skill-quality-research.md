# Skills quality and source research

**Reviewed:** 2026-11-12  
**Scope:** reusable Agent Skills for frontend, backend, SEO, writing, media, security, testing, and project workflows.  
**Method:** broad discovery followed by primary-source review, repository/license inspection, and independent synthesis. The package text was authored for Skillsmo; external repositories are research inputs, not copied bundles.

## Format and distribution

The Agent Skills format uses a skill folder with a `SKILL.md` containing YAML frontmatter and task instructions, with optional supporting files. The trigger description should explain capability and activation. Skillsmo uses `.agents/skills/<name>/SKILL.md` and only the `name` and `description` fields.

The Vercel Skills CLI documents repository preview with `--list`, package selection with `--skill`, host selection with `--agent`, direct GitHub skill-folder URLs, and Node.js 22.20+. Codex and OpenCode are listed as targets; OpenCode documents shared skill discovery. Hermes documents external directory configuration, which remains a separate host step. This establishes an intended path, not a successful installation from this private repository. See [INSTALL.md](../INSTALL.md).

### Why skills have different folder structures

The Agent Skills format requires a folder with SKILL.md; supporting files are optional. OpenAI's authoring guidance distinguishes references for background material, scripts for repeatable actions, and assets for reusable templates. Anthropic's documentation describes progressive disclosure: a host can load the main skill first and read supporting references or run a script when needed. The actual ability to execute scripts and use files varies by host and version, so a portable folder structure does not by itself prove runtime compatibility.

Folder-rich packages solve concrete needs. For example, the pinned [iART motion verify toolkit](https://github.com/iart-ai/motion-skills/tree/ba94b7067684e349204242432e8bf6c4d634a8ca/tools/verify) includes helpers to capture frames, make contact sheets, and inspect encoded video properties. Those checks suit visual outputs with measurable properties. MotionSites' reviewed package contains examples and media under a custom mixed notice, which explicitly excludes some material from its MIT terms; that is why rights must be checked per file and folder, not inferred from a repository-level license. Skillsmo imports none of those scripts or assets.

The current Skillsmo tree has 77 SKILL.md files, 77 field guides, and 77 source/rights notes. It has no package scripts, assets, or examples. That is a deliberate conservative baseline, not a requirement of the format. The full collection audit also found the same five generic review questions and one reporting paragraph in all 77 field guides; the practical-focus portion is task-specific. See the [implementation status](implementation-status.md) and [authoring guide](skill-authoring-guide.md) for the cleanup rule and future resource criteria.

Source references for these format decisions are in [SOURCES.md](../SOURCES.md), including the Agent Skills specification, OpenAI and Anthropic authoring documentation, iART motion skills, and MotionSites.

## Frontend design research

Reviewed Taste, Impeccable, Hallmark, UI UX Pro Max, Anthropic frontend design, MotionSites, and iART motion skills at the revisions in [SOURCES.md](../SOURCES.md).

| Source | Observed pattern | Skillsmo decision |
|---|---|---|
| Taste | Explicit art direction and rendered-result review | State design direction and inspect rendered UI; no examples, palettes, code, or wording copied. |
| Impeccable | Focused interface critique and refinement | Diagnose the highest-impact issue; no commands or prose copied. |
| Hallmark | Design procedure connected to concrete checks | Keep design and verification connected without adopting tooling or file conventions. |
| UI UX Pro Max | Structured design choices and platform coverage | Check product and platform context; no data or tooling redistributed. |
| MotionSites | Art direction, media selection, screenshot review | Use the general value of deliberate media and visual review only. Its mixed license excludes examples and media from MIT coverage; none are included. |
| iART motion skills | Specific motion-graphics task coverage | Specify purpose and deliverable; no recipes, scripts, or assets copied. |
| Anthropic frontend skill | Clear greenfield design trigger | Research-only reference; no package wording or files copied. |

The resulting frontend workflows start with user needs and existing constraints, state visual choices, implement relevant states, and inspect the rendered result when available. Visual review and accessibility review provide different evidence.

## Backend and security research

Reviewed official runtime, framework, database, HTTP, and API documentation for Node.js, Python/FastAPI, Laravel/PHP, Convex, Supabase, MySQL, PostgreSQL, React/Next.js, Expo, Vite, TypeScript, HTTP, and OpenAPI. Reviewed OWASP API Security, ASVS, Cheat Sheets, and GenAI resources. Community backend packages informed scope comparison only.

The synthesis emphasizes identity versus authorization, server/database authority, input validation, idempotency, resource bounds, failure semantics, version-aware references, and tests for denied access, duplicates, and dependency failures. Security reports need a concrete path and evidence; checklist coverage alone does not prove safety.

## SEO research

Google Search Central is the primary policy source for search eligibility, people-first content, structured data, and spam. A valid page may still not be crawled, indexed, ranked, or shown as a rich result. The SEO packages separate crawling, index eligibility, and observed performance; prioritize original user value; and reject fabricated experience, fake reviews, and guaranteed outcomes.

Semrush and community SEO packages were reviewed for workflow coverage and tool assumptions. Skillsmo requires no paid data account and reproduces no provider data. Missing Search Console, crawl, query-volume, or analytics evidence must be reported as a gap.

## Writing and humanizer research

Reviewed a public humanizer package and Google's people-first content guidance. The adopted principle is reader-focused editing: improve clarity and flow while preserving meaning, authorship, evidence, and voice. The writing packages do not promise detector outcomes, conceal authorship, fabricate personal experience, or complete missing quotations. Technical, legal, and safety language should not be varied when repetition protects precision.

## FFmpeg and media research

Reviewed FFmpeg/FFprobe command and filter documentation plus public Agent Skill implementations. The safe workflow is inspect streams, plan from measured properties, write to a new destination, and verify metadata and playback. A successful command does not prove perceptual quality. Skillsmo bundles no upstream tools, scripts, wrappers, LUTs, or sample assets.

### Additional focused comparisons

The FFmpeg review compared the official command documentation with a recipe-oriented command skill, a script-backed local editing toolkit, and a video editing workflow that can use external transcription services. Skillsmo keeps the reusable inspect-plan-execute-verify sequence and excludes all recipes, code, transcription integrations, and media. This keeps the package usable without prescribing a specific tool suite.

The SEO review also inspected a broad multi-skill SEO toolkit with specialist-agent definitions and a large script collection. Its scope does not fit Skillsmo's skills-only packages, so it was excluded; no agent definitions or scripts were imported. Focused SEO procedures remain backed by Google Search Central and versioned sources.

Additional humanizer examples were compared for how they handle author voice and detector claims. Skillsmo keeps reader-focused editing and evidence preservation, while excluding pattern catalogs, detector scoring, voice fingerprints, and any claim to evade detection.

## Curation landscape and exclusions

The Vercel Skills CLI and VoltAgent community index informed distribution and candidate discovery. Index size, popularity, or a repository license cannot establish rights or quality for every linked skill; every candidate needs its own review. Candidates were excluded when their scope was an agent definition, host behavior unclear, rights ambiguous, or authoritative evidence unavailable.

This is a selected-source audit, not a claim to have searched every public repository.

## Limitations

- All 77 packages are experimental; no host installation or realistic task evaluation is recorded.
- Official documentation is living and should be checked against target project versions.
- Repository-wide license metadata may miss folder-specific and third-party exceptions.
- This research report covers curation and package design; it does not establish runtime compatibility or replace the separate repository-history audit in the [public-release checklist](public-release-checklist.md).
