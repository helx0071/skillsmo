---
name: secure-code-review
description: "Review a focused code change for exploitable security defects using the feature's trust boundaries and data flow. Use for authentication, authorization, input handling, file access, payments, secrets, or other sensitive changes."
---

# Secure code review

## Goal

Find actionable security issues in changed behavior and support each finding with code evidence and a realistic impact path.

## Workflow

1. Read the diff and identify assets, entry points, trust boundaries, roles, and sensitive data affected by the change.
2. Trace input from source to validation, authorization, state change, external call, and output; inspect callers and tests.
3. Check relevant risks such as object/property/function authorization, injection, unsafe deserialization, SSRF, resource abuse, secrets, and error disclosure.
4. Validate likely findings against framework behavior and exploit preconditions; consider existing mitigations and deployment controls.
5. Report findings by severity with file/line evidence, attack scenario, impact, fix guidance, and areas not reviewed.

## Decision rules

- Prioritize reachable, impact-bearing paths over generic checklist matches.
- Distinguish confirmed vulnerability, plausible risk, hardening advice, and false positive.
- Use the applicable security standard as a coverage aid, not a substitute for context.

## Boundaries

- Do not exploit production systems or access real user data during code review.
- Do not call code secure or fully audited after reviewing a partial diff.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
