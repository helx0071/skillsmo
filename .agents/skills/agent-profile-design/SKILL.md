---
name: agent-profile-design
description: "Review or design a coding-agent configuration for a clearly bounded role, tools, skills, context, and permissions. Use for agent configuration work; this skill does not create or launch an agent."
---

# Agent configuration review

## Goal

Make the configuration match its task while exposing its real permission and capability limits.

## Workflow

1. Identify the user task, supported host/version, expected artifacts, and decisions the agent may make.
2. Map required tools and data access to least privilege; distinguish host-enforced permissions from text instructions.
3. Select reusable skills by trigger and task fit; avoid duplicating whole workflows in the agent configuration.
4. Specify handoffs, failure behavior, confirmation gates, and what must be returned to the user.
5. Review the actual host schema and test plan before describing compatibility.

## Decision rules

- Use the host's official configuration format and current version.
- Keep model/provider, tool access, and user authority as separate settings.
- Prefer explicit exclusions and escalation conditions over vague safety language.

## Boundaries

- Do not imply that a prompt or profile is a sandbox.
- Do not claim a host supports configuration fields without checking its current docs.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
