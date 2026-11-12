---
name: voice-preserving-editing
description: "Improve a draft's clarity, structure, and grammar while retaining the author's characteristic voice and intent. Use for personal writing, brand copy, speeches, emails, essays, and user-provided text."
---

# Voice-preserving editing

## Goal

Make the requested improvements with minimal voice and meaning drift.

## Workflow

1. Identify the author, audience, purpose, requested edit depth, and any sample that represents the desired voice.
2. Summarize the draft's distinctive traits such as formality, rhythm, directness, vocabulary, humor, and sentence length.
3. Correct clarity and correctness issues while preserving those traits; keep strong original language when it already serves the reader.
4. Flag ambiguity, unsupported factual claims, sensitive wording, and passages where the intended meaning is uncertain.
5. Compare the final draft to the original for voice, stance, facts, and scope; provide alternatives only when the user benefits from a choice.

## Decision rules

- Use a light copyedit for voice-sensitive work and a deeper rewrite only when requested.
- Prefer the author's own phrasing over a polished generic substitute when both are clear.
- Ask before resolving an ambiguity that changes the author's position.

## Boundaries

- Do not imitate a private person's style from insufficient or unauthorized samples.
- Do not add experiences, commitments, promises, or opinions the author did not express.
- Do not make the text sound 'human' by adding errors or false personal details.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
