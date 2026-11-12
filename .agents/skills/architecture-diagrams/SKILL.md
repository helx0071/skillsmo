---
name: architecture-diagrams
description: "Create or revise an architecture diagram that answers a specific stakeholder question about context, components, deployment, or data flow."
---

# Software architecture diagrams

## Goal

Represent system boundaries and relationships clearly without turning the diagram into an implementation inventory.

## Workflow

1. Identify audience, question, scope, system boundary, and detail level.
2. Inspect repository structure and deployment/configuration evidence; label unknown or inferred components.
3. Choose a view and notation suited to the question, such as system context, containers, component flow, or deployment.
4. Show only important components, dependencies, trust boundaries, and data movement; name arrows with meaningful relationships.
5. Render the diagram and check labels, direction, legend, and consistency with the written architecture.

## Decision rules

- Use one diagram per question and layer complexity instead of overloading a single canvas.
- Prefer stable names from code and deployment docs; mark assumptions.
- Use Mermaid when text-based versioning and review are useful.

## Boundaries

- Do not claim a diagram proves runtime behavior or security.
- Do not draw inferred services as confirmed infrastructure.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
