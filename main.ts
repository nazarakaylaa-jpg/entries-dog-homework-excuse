// The Dog Ate My Homework: Funniest Excuse
// Writes one line, under 200 characters, in which a dog explains why
// the homework got eaten. The dog's logic: the worksheet asked what
// its favourite food is, so it answered the question the only way a
// dog can — by circling "paper" with its teeth.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The worksheet asked what my favourite food is. I circled 'paper' with my teeth.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
