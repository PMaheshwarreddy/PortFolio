// Copies backend/src/data.js (the single source of truth) into frontend/src/data.js.
// On hosts that only check out the frontend folder, the backend file is missing,
// so the committed frontend copy is used as-is.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, '../../backend/src/data.js');
const target = resolve(here, '../src/data.js');

if (!existsSync(source)) {
  console.log('[sync-data] backend/src/data.js not found, keeping existing frontend/src/data.js');
  process.exit(0);
}

const header = '// AUTO-GENERATED from backend/src/data.js by scripts/sync-data.mjs. Do not edit here.\n';
const body = readFileSync(source, 'utf8');
const next = header + body;
const current = existsSync(target) ? readFileSync(target, 'utf8') : '';

if (current !== next) {
  writeFileSync(target, next);
  console.log('[sync-data] frontend/src/data.js updated');
}
