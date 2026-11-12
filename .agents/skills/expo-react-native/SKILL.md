---
name: expo-react-native
description: "Build, debug, or review an Expo and React Native feature across iOS and Android. Use when changing navigation, native modules, permissions, app configuration, EAS builds, or platform-specific UI."
---

# Expo and React Native workflow

## Goal

Make mobile changes that match the installed Expo SDK and behave correctly on the target platforms.

## Workflow

1. Inspect Expo SDK, React Native version, package manager, app config, navigation stack, build profiles, and native directories.
2. Clarify target platforms, device or simulator, permission requirements, offline expectations, and whether the project uses managed or prebuild workflows.
3. Implement using documented APIs compatible with the installed SDK; isolate platform differences and preserve existing deep links and state.
4. Run focused static and device checks for launch, navigation, safe areas, keyboard, accessibility, permission denial, and background/foreground behavior.
5. Document any native rebuild or store-review requirement and summarize platform coverage honestly.

## Decision rules

- Check Expo SDK compatibility before using a package or API.
- Use development builds when native code or config plugins are involved; a simulator-only flow may not expose device restrictions.
- Handle permission denied or limited access as normal product states.

## Boundaries

- Do not change signing credentials, production channels, or app-store release settings without explicit authorization.
- Do not claim iOS and Android parity if only one platform was checked.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
