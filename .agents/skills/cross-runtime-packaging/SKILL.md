---
name: cross-runtime-packaging
description: "Design or review a library, CLI, or package that must run across multiple JavaScript or language runtimes. Use when packaging for Node, browsers, edge runtimes, mobile, or mixed CommonJS and ESM consumers."
---

# Cross-runtime package design

## Goal

Define supported environments and ship a package whose entry points, dependencies, and exports match that compatibility promise.

## Workflow

1. Inventory intended runtimes, minimum versions, module systems, bundlers, operating systems, and consumer entry points.
2. Inspect source imports, platform APIs, native dependencies, package exports, build output, and generated declarations.
3. Separate portable core behavior from runtime-specific adapters and define the fallback or unsupported behavior for each platform.
4. Build the smallest valid artifact for every declared target and verify resolution, types, and runtime behavior using representative consumers.
5. Document compatibility boundaries, install requirements, and release checks; remove claims unsupported by evidence.

## Decision rules

- Prefer a small explicit support matrix over vague claims such as universal or edge-ready.
- Avoid polyfills or runtime shims unless their behavior and maintenance cost are justified.
- Treat package metadata and generated artifacts as part of the public API.

## Boundaries

- Do not mark a runtime supported based only on successful compilation.
- Do not add environment-specific dependencies to the shared core without proving they are available in every target.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
