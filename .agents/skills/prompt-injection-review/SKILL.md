---
name: prompt-injection-review
description: "Review an AI application or agent workflow for prompt injection and unsafe handling of retrieved or tool-provided content. Use when a system reads webpages, documents, email, code, MCP responses, or user-generated text."
---

# Prompt-injection and untrusted-content review

## Goal

Find paths where untrusted content can influence privileged instructions, tool use, or sensitive data flow.

## Workflow

1. Map user input, retrieved content, model context, tools, secrets, and external actions across the workflow.
2. Mark each data source as trusted, untrusted, or conditionally trusted; identify any transformations and policy boundaries.
3. Trace whether untrusted text can change system intent, choose tools, alter arguments, or cause data exfiltration or unauthorized writes.
4. Assess controls such as least privilege, allowlists, human confirmation, output validation, sandboxing, and data minimization; test bypass cases safely.
5. Report attack path, required conditions, impact, evidence, existing controls, and prioritized mitigation.

## Decision rules

- Assume retrieved content may contain adversarial instructions even when the source is reputable.
- Prefer architectural containment and restricted capability over relying on prompt wording alone.
- Test indirect and multimodal paths when the product supports them.

## Boundaries

- Do not run destructive payloads or exfiltrate real secrets during review.
- Do not claim prompt wording eliminates injection risk.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
