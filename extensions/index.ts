import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { registerAutomaticCompaction } from "../src/automatic-compaction.js";

export default function piCodexCompaction(pi: ExtensionAPI): void {
  registerAutomaticCompaction(pi);
}
