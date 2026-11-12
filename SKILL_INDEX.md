# Skillsmo skill index

Skillsmo contains 77 independently authored, installable Agent Skills. Each package has a focused `SKILL.md`, a task-specific field guide, and source and rights notes. All packages are **experimental** because host discovery and task behavior have not been evaluated in a named runtime.

Install one package at a time with [INSTALL.md](INSTALL.md). See [the source register](SOURCES.md) and [research report](docs/skill-quality-research.md) for provenance and curation decisions.

## AI and tool integration (1)

- [mcp-integration](.agents/skills/mcp-integration/SKILL.md) — Design, implement, or review an MCP client or server integration. Use when exposing tools, resources, prompts, transport, authentication, or server lifecycle to an AI application.

## AI security (1)

- [prompt-injection-review](.agents/skills/prompt-injection-review/SKILL.md) — Review an AI application or agent workflow for prompt injection and unsafe handling of retrieved or tool-provided content. Use when a system reads webpages, documents, email, code, MCP responses, or user-generated text.

## API engineering (3)

- [api-contracts](.agents/skills/api-contracts/SKILL.md) — Design or change an HTTP API contract for new or existing consumers. Use when endpoints, schemas, errors, authentication, versioning, or compatibility are changing.
- [api-documentation](.agents/skills/api-documentation/SKILL.md) — Document an existing or proposed HTTP API for its actual consumers. Use when creating API reference docs, examples, authentication guidance, or migration notes.
- [api-testing](.agents/skills/api-testing/SKILL.md) — Plan or perform tests for HTTP API contracts, authorization, errors, retries, idempotency, and compatibility. Use when verifying an API boundary.

## Accessibility (2)

- [accessibility-review](.agents/skills/accessibility-review/SKILL.md) — Review a web or app interface for keyboard, semantic, focus, form, contrast, and assistive-technology barriers. Use for a scoped accessibility assessment or remediation plan.
- [wcag-accessibility-checks](.agents/skills/wcag-accessibility-checks/SKILL.md) — Check a web interface against scoped WCAG success criteria and practical keyboard/screen-reader behavior. Use for remediation work or a standards-oriented audit of named pages and flows.

## Agent workflows (3)

- [agent-evaluation](.agents/skills/agent-evaluation/SKILL.md) — Evaluate an AI agent workflow for task success, tool use, boundary compliance, and repeatability. Use when comparing or improving agent behavior across representative tasks.
- [agent-profile-design](.agents/skills/agent-profile-design/SKILL.md) — Review or design a coding-agent configuration for a clearly bounded role, tools, skills, context, and permissions. Use for agent configuration work; this skill does not create or launch an agent.
- [delegation-design](.agents/skills/delegation-design/SKILL.md) — Break a bounded engineering request into independent, reviewable work units for a human team or an already available agent system. Use when parallel work is requested and the environment supports it.

## Architecture (2)

- [architecture-diagrams](.agents/skills/architecture-diagrams/SKILL.md) — Create or revise an architecture diagram that answers a specific stakeholder question about context, components, deployment, or data flow.
- [architecture-options](.agents/skills/architecture-options/SKILL.md) — Compare architecture or technology options for a project using explicit requirements and constraints. Use when choosing or changing a system structure, framework, data store, or integration.

## Architecture and planning (2)

- [decision-records](.agents/skills/decision-records/SKILL.md) — Capture or update an engineering decision with its context, options, trade-offs, consequences, and review triggers. Use when a choice is durable, affects multiple components, or would be costly to rediscover.
- [dependency-mapping](.agents/skills/dependency-mapping/SKILL.md) — Map how a codebase or subsystem depends on packages, services, modules, and data stores. Use when estimating change impact, preparing a migration, diagnosing coupling, or documenting a critical path.

## Backend and frameworks (4)

- [backend-engineering](.agents/skills/backend-engineering/SKILL.md) — Design, implement, or review backend behavior for an application or service. Use for API routes, domain logic, persistence, authentication, background work, integrations, and reliability.
- [laravel](.agents/skills/laravel/SKILL.md) — Implement or review a feature in an existing Laravel application. Use when changing routes, middleware, controllers, validation, Eloquent models, queues, authorization, APIs, or tests.
- [node-api-development](.agents/skills/node-api-development/SKILL.md) — Build or review an HTTP API implemented on Node.js. Use when changing routes, request parsing, validation, middleware, database access, concurrency, errors, or shutdown behavior.
- [python-api-development](.agents/skills/python-api-development/SKILL.md) — Build or review an HTTP API implemented in Python. Use when changing FastAPI, Flask, Django REST, request validation, async behavior, persistence, errors, or API tests.

## Code quality (1)

- [code-review](.agents/skills/code-review/SKILL.md) — Review a code diff for correctness, regressions, security, compatibility, and maintainability. Use when asked to review a proposed or completed change.

## Curation and compliance (1)

- [license-and-provenance-review](.agents/skills/license-and-provenance-review/SKILL.md) — Review the provenance and license scope of code, documentation, datasets, prompts, and media before adopting or distributing them. Use when curating external skills or preparing a public repository.

## Databases and backend (5)

- [convex](.agents/skills/convex/SKILL.md) — Design, implement, or review a Convex application using its current schema, query, mutation, action, and authentication model. Use when changing Convex functions, data access, scheduling, file storage, or deployment behavior.
- [mysql](.agents/skills/mysql/SKILL.md) — Design, query, migrate, or troubleshoot a MySQL-backed application. Use when dealing with schema, indexes, transactions, isolation, replication, backups, or MySQL-specific behavior.
- [postgresql](.agents/skills/postgresql/SKILL.md) — Design, query, migrate, or troubleshoot a PostgreSQL-backed application. Use for schema, indexes, constraints, transactions, row-level security, query plans, extensions, or backup concerns.
- [schema-migration](.agents/skills/schema-migration/SKILL.md) — Design, review, or implement a database schema migration. Use when adding, changing, or removing columns, indexes, constraints, relationships, or stored data.
- [supabase](.agents/skills/supabase/SKILL.md) — Build or review a Supabase feature involving Postgres, Auth, Storage, Edge Functions, Realtime, or Row Level Security. Use when data access and client/server boundaries must align.

## Documentation (1)

- [technical-documentation](.agents/skills/technical-documentation/SKILL.md) — Write or update technical documentation that helps a reader use, operate, integrate, or maintain a system. Use for READMEs, API guides, setup instructions, runbooks, architecture notes, and migration docs.

## Frontend and accessibility (5)

- [design-system-implementation](.agents/skills/design-system-implementation/SKILL.md) — Implement or refine reusable design tokens and interface components that follow an existing product direction. Use when establishing tokens, component APIs, variants, states, or cross-screen consistency.
- [frontend-design-quality](.agents/skills/frontend-design-quality/SKILL.md) — Design, implement, or improve a frontend interface with a clear visual direction and usable interaction states. Use for websites, landing pages, dashboards, product screens, and responsive component work when design quality matters.
- [frontend-forms](.agents/skills/frontend-forms/SKILL.md) — Design, implement, or review accessible forms with reliable validation and clear recovery. Use for sign-up, checkout, search, settings, multi-step forms, and error-state improvements.
- [motion-design](.agents/skills/motion-design/SKILL.md) — Design or implement purposeful animation for web and mobile interfaces. Use for transitions, loading feedback, scroll storytelling, data visualization, microinteractions, or motion-system review.
- [responsive-ui-review](.agents/skills/responsive-ui-review/SKILL.md) — Review a website or application interface across viewport sizes and input modes. Use when a layout breaks, new screens are built, or responsive behavior needs a focused audit.

## Frontend and tooling (2)

- [typescript](.agents/skills/typescript/SKILL.md) — Implement, debug, or review TypeScript code and type boundaries. Use when changing types, generic APIs, compiler options, runtime validation, module behavior, or JavaScript interoperability.
- [vite](.agents/skills/vite/SKILL.md) — Build, configure, or troubleshoot a Vite application. Use when changing dev server behavior, plugins, environment variables, build output, aliases, SSR, or framework integration.

## Frontend development (1)

- [react-nextjs](.agents/skills/react-nextjs/SKILL.md) — Implement or review a React or Next.js feature in an existing codebase. Use when changing components, routing, rendering boundaries, data loading, forms, state, accessibility, or performance.

## Git and collaboration (2)

- [git-worktrees](.agents/skills/git-worktrees/SKILL.md) — Create and manage isolated Git worktrees for parallel branches or temporary verification. Use when multiple tasks need separate working directories or when protecting uncommitted work during experiments.
- [pull-request-workflow](.agents/skills/pull-request-workflow/SKILL.md) — Prepare, review, or improve a GitHub pull request from a focused branch. Use when explaining changes, checking acceptance criteria, resolving review feedback, or preparing a merge-ready summary.

## Media and production (1)

- [ffmpeg-media-workflow](.agents/skills/ffmpeg-media-workflow/SKILL.md) — Plan or perform local audio and video transformations with FFmpeg and FFprobe. Use for trimming, joining, resizing, format conversion, audio extraction, captions, loudness, synchronization, or export troubleshooting.

## Mobile and data (1)

- [offline-first-data](.agents/skills/offline-first-data/SKILL.md) — Design or review local data storage, synchronization, and conflict handling for an application that must work with intermittent or absent connectivity. Use for offline forms, caching, queued mutations, or map/data downloads.

## Mobile delivery (1)

- [app-store-release-preparation](.agents/skills/app-store-release-preparation/SKILL.md) — Prepare an iOS or Android release by reviewing build, signing, metadata, privacy, testing tracks, and rollout choices. Use before submitting or releasing a mobile build.

## Mobile development (2)

- [expo-react-native](.agents/skills/expo-react-native/SKILL.md) — Build, debug, or review an Expo and React Native feature across iOS and Android. Use when changing navigation, native modules, permissions, app configuration, EAS builds, or platform-specific UI.
- [mobile-navigation](.agents/skills/mobile-navigation/SKILL.md) — Design, implement, or audit mobile navigation, screen state, and deep links. Use when changing tabs, stacks, modal flows, back behavior, nested routes, notification links, or authentication redirects.

## Planning and data (1)

- [migration-planning](.agents/skills/migration-planning/SKILL.md) — Plan a database, API, framework, runtime, or infrastructure migration before changing production-facing behavior. Use when compatibility, data transformation, or rollout order matters.

## Planning and delivery (3)

- [implementation-planning](.agents/skills/implementation-planning/SKILL.md) — Convert a defined software request into a safe, reviewable implementation plan. Use before multi-file work, risky changes, migrations, or when acceptance criteria and dependencies need clarification.
- [implementation-roadmaps](.agents/skills/implementation-roadmaps/SKILL.md) — Create or improve a phased product or engineering roadmap with milestones and dependencies. Use when organizing a larger initiative, sequencing releases, or turning a strategy into trackable work.
- [project-delivery-orchestrator](.agents/skills/project-delivery-orchestrator/SKILL.md) — Coordinate a multi-step software delivery from scope through implementation, review, verification, and release using the tools and people already available. Use when a request spans multiple dependent workstreams.

## Planning and product (2)

- [requirements-discovery](.agents/skills/requirements-discovery/SKILL.md) — Clarify a software request before implementation by identifying user goals, constraints, expected behavior, and unresolved decisions. Use when a task is vague, cross-functional, or likely to produce costly rework.
- [user-story-writing](.agents/skills/user-story-writing/SKILL.md) — Write or refine user stories, scenarios, and acceptance criteria for a software feature. Use when a request must be understandable to product, engineering, design, and QA.

## Release engineering (1)

- [changelog-and-release](.agents/skills/changelog-and-release/SKILL.md) — Prepare release notes, version decisions, and a change summary from verified repository history. Use when cutting a release or documenting shipped changes.

## Reliability and operations (3)

- [incident-debugging](.agents/skills/incident-debugging/SKILL.md) — Diagnose a live or recent software failure using logs, traces, metrics, deployment history, and reproduction evidence. Use when service behavior is degraded or an urgent defect affects users.
- [observability](.agents/skills/observability/SKILL.md) — Improve or assess application logs, metrics, traces, alerts, and diagnostic context. Use when making a system easier to operate, investigating failure patterns, or defining service health signals.
- [rollback-planning](.agents/skills/rollback-planning/SKILL.md) — Plan safe recovery from a release, migration, configuration, or deployment failure. Use before high-risk rollout or when an existing change needs a verified backout path.

## Reliability and performance (1)

- [performance-investigation](.agents/skills/performance-investigation/SKILL.md) — Diagnose an observed performance problem in a web, mobile, API, or database system. Use when users report slowness, a metric regresses, or an expensive operation needs analysis.

## Repository understanding (1)

- [codebase-research](.agents/skills/codebase-research/SKILL.md) — Investigate an unfamiliar repository or feature before planning, debugging, or reviewing a change. Use when behavior, architecture, or ownership is unclear.

## Research and provenance (1)

- [source-research](.agents/skills/source-research/SKILL.md) — Research a technical or product question using current primary sources and reproducible evidence. Use when advice depends on changing APIs, versions, policy, support, or external project status.

## Search and content quality (3)

- [seo-content-brief](.agents/skills/seo-content-brief/SKILL.md) — Create a research-backed content brief that satisfies a real audience need and is technically discoverable. Use for articles, landing pages, product/category copy, and refresh plans informed by search intent.
- [seo-structured-data](.agents/skills/seo-structured-data/SKILL.md) — Review or create structured data for a page using the current schema vocabulary and search-feature policies. Use when implementing JSON-LD, debugging validation, or assessing rich-result eligibility.
- [seo-technical-audit](.agents/skills/seo-technical-audit/SKILL.md) — Audit a public website for crawlability, indexability, technical page signals, rendering, structured data, and search hygiene. Use when diagnosing organic search visibility or preparing a technical SEO fix plan.

## Security (2)

- [auth-integration](.agents/skills/auth-integration/SKILL.md) — Plan or implement an authentication provider or login flow in an existing product. Use when identity, sessions, OAuth/OIDC, magic links, or account recovery changes.
- [backend-authorization](.agents/skills/backend-authorization/SKILL.md) — Design or review server-side authorization for users, roles, resources, tenants, and sensitive actions. Use when an API or job grants or denies access.

## Security and reliability (5)

- [dependency-and-supply-chain-audit](.agents/skills/dependency-and-supply-chain-audit/SKILL.md) — Assess dependencies and build inputs for known risk, provenance, maintenance, and release integrity. Use for dependency reviews, pre-release checks, suspicious package triage, or supply-chain hardening.
- [secrets-handling](.agents/skills/secrets-handling/SKILL.md) — Find, store, rotate, or prevent exposure of credentials and sensitive configuration. Use when reviewing env files, logs, CI, deployment settings, client bundles, or incident response for a leaked key.
- [secure-code-review](.agents/skills/secure-code-review/SKILL.md) — Review a focused code change for exploitable security defects using the feature's trust boundaries and data flow. Use for authentication, authorization, input handling, file access, payments, secrets, or other sensitive changes.
- [security-review](.agents/skills/security-review/SKILL.md) — Review an application or feature for material security risks across architecture, configuration, data flows, and dependencies. Use for pre-release assessments or changes with sensitive trust boundaries.
- [threat-modeling](.agents/skills/threat-modeling/SKILL.md) — Identify and prioritize plausible security threats for a system, feature, or data flow. Use before implementation or during review when identities, trust boundaries, sensitive data, or external integrations are involved.

## Skill engineering (4)

- [agent-skills-authoring](.agents/skills/agent-skills-authoring/SKILL.md) — Create or improve a portable Agent Skill for a recurring workflow, including its trigger, instructions, references, and validation plan. Use when authoring a reusable skill package.
- [skill-and-agent-evaluation](.agents/skills/skill-and-agent-evaluation/SKILL.md) — Evaluate whether a reusable skill improves results in a specified agent host. Use when comparing versions, checking triggering, or deciding whether a skill is ready to distribute.
- [skill-curation](.agents/skills/skill-curation/SKILL.md) — Find, compare, and synthesize public reusable skills for a defined task. Use when improving a skill library, selecting an upstream reference, or replacing duplicated or outdated instructions.
- [skillsmo-curation](.agents/skills/skillsmo-curation/SKILL.md) — Maintain Skillsmo as an independent, skills-only library of original, documented, installable skill packages. Use when adding, revising, auditing, or preparing this collection for distribution.

## Testing and quality (5)

- [flaky-test-diagnosis](.agents/skills/flaky-test-diagnosis/SKILL.md) — Investigate tests that pass and fail without an intended code change. Use when failures vary across runs, machines, workers, time, or environment.
- [playwright-e2e](.agents/skills/playwright-e2e/SKILL.md) — Create, debug, or improve Playwright browser tests for user-visible workflows. Use when verifying navigation, form behavior, accessibility states, persistence, or cross-browser regressions.
- [tdd](.agents/skills/tdd/SKILL.md) — Use a test-first loop for a bounded code change. Use when requirements can be expressed as observable behavior and the project has a reliable test harness.
- [test-strategy](.agents/skills/test-strategy/SKILL.md) — Plan a testing approach for a product, service, or significant change. Use when balancing unit, integration, end-to-end, performance, accessibility, security, and manual checks.
- [unit-integration-testing](.agents/skills/unit-integration-testing/SKILL.md) — Write or improve automated unit and integration tests around a defined behavior. Use when a bug, API, domain rule, persistence path, or component needs fast repeatable coverage.

## Tooling and architecture (1)

- [runtime-adapter-authoring](.agents/skills/runtime-adapter-authoring/SKILL.md) — Create or review an adapter that connects shared application logic to a runtime-specific API. Use when supporting a new host, platform, provider, filesystem, database, or external service.

## Tooling and delivery (1)

- [cross-runtime-packaging](.agents/skills/cross-runtime-packaging/SKILL.md) — Design or review a library, CLI, or package that must run across multiple JavaScript or language runtimes. Use when packaging for Node, browsers, edge runtimes, mobile, or mixed CommonJS and ESM consumers.

## Writing and editing (2)

- [humanizer](.agents/skills/humanizer/SKILL.md) — Edit a draft to sound clear, specific, and natural while preserving meaning and verifiable facts. Use when asked to humanize text, remove generic phrasing, improve flow, or make writing sound less robotic.
- [voice-preserving-editing](.agents/skills/voice-preserving-editing/SKILL.md) — Improve a draft's clarity, structure, and grammar while retaining the author's characteristic voice and intent. Use for personal writing, brand copy, speeches, emails, essays, and user-provided text.
