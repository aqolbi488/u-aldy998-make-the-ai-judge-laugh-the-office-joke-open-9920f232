// One line of office comedy, written to /output/entry.txt.
// Deterministic: the same joke on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR asked for one word to sum up our culture. I said 'reply-all.' Apparently the right answer was 'family'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
