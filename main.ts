import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fixed: sleep now takes 8 minutes instead of 3 hours replaying that embarrassing thing you said in 2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
