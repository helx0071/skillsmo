---
name: observability
description: "Improve or assess application logs, metrics, traces, alerts, and diagnostic context. Use when making a system easier to operate, investigating failure patterns, or defining service health signals."
---

# Application observability

## Goal

Produce actionable operational signals while limiting sensitive data and alert noise.

## Workflow

1. Identify the service, user journeys, operators, failure modes, and current telemetry sources.
2. Choose signals tied to user outcomes, dependencies, latency, errors, saturation, and freshness rather than collecting everything.
3. Define structured log fields, metric labels, trace boundaries, correlation IDs, retention, and redaction rules.
4. Map alerts to an owner, symptom, severity, runbook, and response action; avoid alerts that only announce normal activity.
5. Verify signal behavior on success and representative failures, including cardinality, sampling, time windows, and missing telemetry.

## Decision rules

- Use metrics for aggregate trends, traces for request paths, and logs for contextual events.
- Keep identifiers bounded and avoid high-cardinality or private values in metric labels.
- Alert on user impact or actionable SLO burn, not every individual exception.

## Boundaries

- Do not log credentials, full payment details, or unnecessary personal data.
- Do not describe telemetry as monitoring coverage unless the relevant path emits and retains the signal.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
