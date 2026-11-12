---
name: playwright-e2e
description: "Create, debug, or improve Playwright browser tests for user-visible workflows. Use when verifying navigation, form behavior, accessibility states, persistence, or cross-browser regressions."
---

# Playwright end-to-end testing

## Goal

Cover critical user journeys with stable assertions that match observable behavior.

## Workflow

1. Inspect app start commands, test configuration, fixtures, browser matrix, authentication strategy, and existing selectors.
2. Choose a user journey and define its observable initial state, action, result, and failure/recovery state.
3. Use accessible roles and labels where practical; isolate data, control network dependencies, and wait on meaningful conditions.
4. Assert user-visible outcomes and relevant URL or persisted state without relying on incidental implementation details.
5. Run the focused test and relevant suite; inspect traces, screenshots, or logs for failures and report browser coverage.

## Decision rules

- Use API setup only to arrange state when the UI behavior under test remains exercised.
- Prefer deterministic fixtures and isolated accounts over shared mutable test data.
- Add a new browser or viewport when it protects a supported user environment.

## Boundaries

- Do not use arbitrary sleeps as synchronization.
- Do not make an end-to-end suite depend on live third-party systems unless that dependency is the explicit target.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
