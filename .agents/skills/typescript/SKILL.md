---
name: typescript
description: "Implement, debug, or review TypeScript code and type boundaries. Use when changing types, generic APIs, compiler options, runtime validation, module behavior, or JavaScript interoperability."
---

# TypeScript implementation and review

## Goal

Use types to clarify valid program states while retaining runtime checks for untrusted data.

## Workflow

1. Inspect TypeScript version, `tsconfig`, module resolution, lint rules, build target, and project type conventions.
2. Trace the data and API boundary; identify which values are trustworthy at compile time and which arrive at runtime.
3. Model domain states with narrow, composable types; add runtime parsing or validation at external boundaries.
4. Resolve compiler errors at the source rather than suppressing them; avoid broad assertions and `any` where safer types are possible.
5. Run the targeted typecheck and relevant tests/build; document version or interoperability assumptions.

## Decision rules

- Use discriminated unions for materially different states and exhaustive checks where they prevent missed cases.
- Prefer `unknown` plus narrowing for untrusted inputs.
- Use a type assertion only when a runtime invariant is established and documented.

## Boundaries

- Do not treat compile-time types as validation of network, disk, environment, or user input.
- Do not disable strict checks globally to bypass one error.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
