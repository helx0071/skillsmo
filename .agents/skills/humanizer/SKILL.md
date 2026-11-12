---
name: humanizer
description: "Edit a draft to sound clear, specific, and natural while preserving meaning and verifiable facts. Use when asked to humanize text, remove generic phrasing, improve flow, or make writing sound less robotic."
---

# Clear and natural editing

## Goal

Improve the reader's experience without inventing facts, flattening the author's voice, or optimizing for AI detectors.

## Workflow

1. Identify audience, purpose, medium, tone, and how much revision the user wants; preserve any explicit style constraints.
2. Read for meaning, structure, factual claims, jargon, repeated ideas, generic transitions, and sentences that obscure the point.
3. Edit the highest-impact issues first: clarify the main point, replace vague language with supported specifics, vary sentence structure where natural, and remove empty emphasis.
4. Preserve claims, attribution, uncertainty, technical precision, and the author's intended stance; flag claims that need verification instead of filling gaps.
5. Compare the edit with the source for meaning drift and return the revised text with a short note about substantive changes if useful.

## Decision rules

- Keep repetition when precision or compliance requires it; natural writing is not forced variety.
- Treat style patterns as context-dependent signals, not proof of AI authorship.
- If the original is already clear, make minimal changes or say no rewrite is needed.

## Boundaries

- Do not promise that a text will bypass AI detection or conceal authorship.
- Do not fabricate examples, quotations, personal experience, citations, or statistics.
- Do not rewrite legal, medical, safety, or technical claims in a way that changes their meaning.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
