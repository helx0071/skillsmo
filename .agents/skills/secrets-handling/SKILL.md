---
name: secrets-handling
description: "Find, store, rotate, or prevent exposure of credentials and sensitive configuration. Use when reviewing env files, logs, CI, deployment settings, client bundles, or incident response for a leaked key."
---

# Secrets handling

## Goal

Minimize secret exposure and establish a safe lifecycle for credentials.

## Workflow

1. Identify the credential type, scope, owner, systems where it is used, and whether exposure is suspected or confirmed.
2. Inspect relevant configuration and history using approved tools; avoid printing raw secret values into logs or conversation.
3. Classify each location as server, client, build-time, runtime, CI, local, or third-party and check access boundaries.
4. For a confirmed leak, coordinate revocation/rotation, invalidate derived sessions, review use logs, and replace references safely.
5. Verify the new value is available only to intended consumers and document the rotation outcome without recording the secret.

## Decision rules

- Treat committed credentials as exposed even if the repository is private.
- Rotate before cleanup when the value may still be active; history cleanup does not revoke a credential.
- Use least privilege, short-lived credentials, and managed secret stores where supported.

## Boundaries

- Never paste or echo secret values in output, commands, screenshots, or issue reports.
- Do not rotate, revoke, or change production credentials without explicit authorization.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
