---
name: mobile-navigation
description: "Design, implement, or audit mobile navigation, screen state, and deep links. Use when changing tabs, stacks, modal flows, back behavior, nested routes, notification links, or authentication redirects."
---

# Mobile navigation and deep links

## Goal

Make route transitions predictable across normal use, deep links, app restarts, and platform back behavior.

## Workflow

1. Inspect the navigation library, route graph, authentication state, deep-link configuration, and existing URL conventions.
2. Map entry points, expected destination, required data, and back behavior for each affected user journey.
3. Define route parameters and guards; handle missing, stale, unauthorized, or malformed links without exposing protected data.
4. Implement transitions while preserving state only where intended and respecting platform navigation conventions.
5. Verify fresh install, warm start, signed-out state, signed-in state, back navigation, invalid input, and nested routes.

## Decision rules

- Treat deep links as untrusted requests; authorize destination data on the server.
- Use stable identifiers in URLs and avoid sensitive values in route parameters.
- Prefer a clear fallback route over an empty or inaccessible destination.

## Boundaries

- Do not assume route visibility enforces authorization.
- Do not leak private content through previews, logs, or notifications.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
