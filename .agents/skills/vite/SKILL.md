---
name: vite
description: "Build, configure, or troubleshoot a Vite application. Use when changing dev server behavior, plugins, environment variables, build output, aliases, SSR, or framework integration."
---

# Vite project workflow

## Goal

Make Vite changes consistent with the installed version and the project's deployment model.

## Workflow

1. Inspect Vite version, framework plugin, package scripts, config, environment files, build target, and deployment host.
2. Identify whether the issue occurs in development, preview, production build, SSR, or a specific plugin path.
3. Apply the smallest config or code change; preserve environment variable exposure boundaries and correct asset/base paths.
4. Run targeted dev/build/preview checks and inspect generated output or network requests for the affected behavior.
5. Document assumptions about environment, adapter, and deployment base path.

## Decision rules

- Use `import.meta.env` semantics and expose only intentionally public variables.
- Check plugin compatibility with the installed Vite major version.
- Use preview or production build to validate issues that dev server behavior cannot represent.

## Boundaries

- Never place secrets in client-exposed environment variables.
- Do not claim deployment works based only on the dev server.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
