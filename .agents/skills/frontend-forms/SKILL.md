---
name: frontend-forms
description: "Design, implement, or review accessible forms with reliable validation and clear recovery. Use for sign-up, checkout, search, settings, multi-step forms, and error-state improvements."
---

# Frontend form design and validation

## Goal

Help people submit accurate information with minimal friction and understandable errors.

## Workflow

1. Identify the user's task, required data, privacy impact, form length, and server-side validation contract.
2. Choose semantic controls and labels; group related fields and explain constraints before submission where useful.
3. Implement client feedback for speed while preserving authoritative server validation; associate errors with fields and retain safe input after correction.
4. Cover keyboard and assistive-technology reading order, required state, error summary, focus movement, async status, autocomplete, and mobile input behavior.
5. Verify success, invalid input, server rejection, network failure, double submit, and recovery paths.

## Decision rules

- Ask only for data needed to complete the task.
- Use inline validation when it improves recovery; avoid interruptive feedback before the person has acted.
- Keep field values after recoverable failures unless privacy or security requires clearing them.

## Boundaries

- Do not rely on browser validation or client-side checks as a security boundary.
- Do not log or expose passwords, payment data, or unnecessary personal information.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
