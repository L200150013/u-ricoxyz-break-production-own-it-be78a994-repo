import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I broke prod. I deployed untested code and took the whole site down — my deploy, my outage, my fix.";

const outDir = process.argv[2] ?? "./output";
mkdirSync(outDir, { recursive: true });
// Single line, no trailing newline: the gate counts 1-200 characters.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
