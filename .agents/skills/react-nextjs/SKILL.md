---
name: react-nextjs
description: "Implement or review a React or Next.js feature in an existing codebase. Use when changing components, routing, rendering boundaries, data loading, forms, state, accessibility, or performance."
---

# React and Next.js feature workflow

## Goal

Deliver a user-visible change that follows the installed framework's rendering and routing model.

## Workflow

1. Inspect framework/version, router mode, server/client boundaries, data sources, styling, component patterns, and existing tests.
2. Trace the user journey, initial/loading/error/success states, data ownership, and interaction semantics before editing.
3. Choose the narrowest component and rendering boundary; keep secrets and privileged data on trusted server paths.
4. Implement with semantic markup and accessible controls; preserve existing route, cache, and state conventions.
5. Verify responsive behavior, keyboard use, hydration or navigation behavior, error handling, and relevant tests or build output.

## Decision rules

- Use docs for the installed Next.js or React version; distinguish App Router from Pages Router.
- Prefer server rendering/data access when it reduces client exposure and matches product behavior.
- Avoid adding global state when local or URL state is sufficient.

## Boundaries

- Do not move server-only values or secrets into client bundles.
- Do not assume a component renders the same in server, client, and static output.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
