# Upstream provenance

- Repository: https://github.com/jvm/pi-mono
- Path: `packages/pi-codex-compaction`
- Revision: `9c8f99dcd` ("Release pi-codex-compaction 0.2.6")
- Upstream version: `pi-codex-compaction` 0.2.6 on npm, with identical files
- License: MIT; original `LICENSE` preserved.

This branch holds only that package, at the root of the repository, with its
history (`git subtree split`). Pi then installs it without the dependencies of
the other packages in the monorepo.

## Local changes

- Removed the install telemetry: `src/install-telemetry.ts`, its call in
  `extensions/index.ts`, and the `@mocito/install-telemetry` dependency. The
  package now has no runtime dependencies and makes no network request of its
  own; it only changes the requests that Pi sends to `https://api.openai.com/v1`.
- `README.md` and `SECURITY.md` say so.

## Checked on 2026-11-23

Pi 1.5.2, API key, `gpt-6.1-terra` and `gpt-6.2-sol`, threshold 1000 tokens: the
server compacted, later requests carried the `compaction` item in place of the
earlier history, the model recalled a fact from before the compaction, tool
calls kept working, and a resumed session recalled the fact too.
