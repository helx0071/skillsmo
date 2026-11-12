---
name: auth-integration
description: "Plan or implement an authentication provider or login flow in an existing product. Use when identity, sessions, OAuth/OIDC, magic links, or account recovery changes."
---

# Authentication integration

## Goal

Integrate identity without confusing authentication with permissions or weakening account recovery.

## Workflow

1. Inspect the current identity model, session storage, callback routes, user lifecycle, and supported environments.
2. Define sign-in, sign-out, renewal, expiration, recovery, linking, deletion, and error behavior.
3. Verify provider settings, redirect allowlists, token audience/issuer, state/nonce or PKCE requirements, cookie attributes, and secret storage.
4. Map identity claims to an application user record without trusting unvalidated client-provided roles.
5. Plan safe migration, session invalidation, and positive/negative verification for existing accounts.

## Decision rules

- Use the provider's current official docs and supported protocol flow.
- Keep authentication, authorization, and tenant scoping as separate decisions.
- Prefer established SDKs over custom protocol code when they fit.

## Boundaries

- Do not log access tokens, refresh tokens, one-time links, or recovery codes.
- Do not weaken verification to make a callback work.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
