import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line, one roast, one agent that stops at every warning to ask "lanjut?".
// The roast is fixed text: no input, no clock, no network, no random.
// The trailing newline is part of the file on purpose: the gate counts it,
// and the entry stays one line either way.
const ROAST =
  "Our agent stops at every security warning, waits for a human to say 'lanjut', and calls that autonomous.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ROAST + '\n', 'utf8');
