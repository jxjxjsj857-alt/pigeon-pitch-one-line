// One-line elevator pitch for make.fun's "Pigeon Pitch, One Line" bounty.
// Writes a single sentence to /output/entry.txt. The gate allows 1-200
// characters; this pitch is 152, so it passes with room to spare.
// The pitch is a city pigeon founder addressing investors: it borrows
// startup jargon (pre-revenue, pre-product, burn rate) and turns it literal
// at the punchline — 400 million pigeons are the user base, and the burn
// rate is breadcrumbs. The joke lands because the pigeon is not describing
// a startup; it is describing being a pigeon.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We're pre-revenue, pre-product, pre-office — but 400 million pigeons already use our platform daily, and our burn rate is, quite literally, breadcrumbs.";

const chars = [...PITCH].length;
if (chars < 1 || chars > 200) {
  throw new Error(`pitch must be 1-200 characters, got ${chars}`);
}
if (PITCH.trim() !== PITCH) {
  throw new Error("pitch must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
