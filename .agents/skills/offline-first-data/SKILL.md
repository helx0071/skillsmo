---
name: offline-first-data
description: "Design or review local data storage, synchronization, and conflict handling for an application that must work with intermittent or absent connectivity. Use for offline forms, caching, queued mutations, or map/data downloads."
---

# Offline-first data behavior

## Goal

Preserve user intent and data integrity across reconnects, duplicate delivery, and concurrent edits.

## Workflow

1. List user actions that must work offline, data sensitivity, expected offline duration, storage limits, and acceptable staleness.
2. Define authoritative records, local cache shape, mutation queue, synchronization trigger, and conflict policy.
3. Make queued operations idempotent or deduplicated; order dependent writes and distinguish retryable from permanent failures.
4. Design visible sync state, conflict resolution, account changes, sign-out behavior, deletion, and storage cleanup.
5. Verify airplane mode, force close, reconnect, duplicate retries, out-of-order responses, stale schema, and conflict scenarios.

## Decision rules

- Keep the server authoritative for shared or security-sensitive state while making local pending state explicit.
- Choose last-write-wins only when data semantics tolerate loss and the user understands it.
- Avoid caching sensitive data beyond the product's stated need.

## Boundaries

- Do not imply that a local write is server-confirmed.
- Do not discard pending user work or resolve conflicts silently.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
