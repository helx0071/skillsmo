---
name: ffmpeg-media-workflow
description: "Plan or perform local audio and video transformations with FFmpeg and FFprobe. Use for trimming, joining, resizing, format conversion, audio extraction, captions, loudness, synchronization, or export troubleshooting."
---

# FFmpeg media workflow

## Goal

Make a predictable media change from measured input properties and verify the produced output.

## Workflow

1. Clarify the requested edit, source and destination files, target platform or format, quality needs, and whether overwriting is permitted.
2. Inspect available FFmpeg/FFprobe versions and probe the input streams, duration, dimensions, frame rate, sample rate, channels, rotation, and metadata.
3. Plan the command from measured properties; prefer stream copy when it preserves the requested result and re-encode only when needed.
4. Run a non-destructive command to a new output path, explain unavoidable quality or metadata trade-offs, and preserve the source.
5. Probe and play/check the result for stream presence, duration, dimensions, audio sync, captions, loudness, and target constraints.

## Decision rules

- Use `ffprobe` before choosing stream maps or codecs; do not assume stream order or variable frame rate behavior.
- Choose codecs and settings from the actual delivery specification; compatibility differs by platform.
- Use temporary outputs and only replace files after verification and explicit user intent.

## Boundaries

- Do not overwrite, delete, upload, or publish source media without authorization.
- Do not claim the result is visually or audibly correct from command success alone.
- Do not bundle copied third-party FFmpeg scripts, clips, LUTs, or example assets.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.
