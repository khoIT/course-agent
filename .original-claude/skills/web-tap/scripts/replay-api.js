#!/usr/bin/env node
/**
 * replay-api.js
 * Replay captured API calls or execute fetch in browser context via Neo CLI.
 *
 * Usage:
 *   node replay-api.js --id <capture-id>
 *   node replay-api.js --id <capture-id> --tab "github.com"
 *   node replay-api.js --endpoint https://api.example.com/users --method GET
 *   node replay-api.js --endpoint https://api.example.com/login --method POST
 *   node replay-api.js --domain github.com --query "CreateIssue"
 */

import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const neoDir = resolve(__dirname, '..', 'neo');
const neoCjs = resolve(neoDir, 'tools', 'neo.cjs');

// Parse CLI args
const args = process.argv.slice(2);
function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
}
function hasFlag(flag) {
  return args.includes(flag);
}

const captureId = getArg('--id');
const endpoint = getArg('--endpoint');
const method = getArg('--method') || 'GET';
const tab = getArg('--tab');
const domain = getArg('--domain');
const query = getArg('--query');
const autoHeaders = hasFlag('--auto-headers');

if (!captureId && !endpoint && !query) {
  process.stderr.write('Provide --id <capture-id>, --endpoint <url>, or --domain + --query\n');
  process.stderr.write('Usage:\n');
  process.stderr.write('  node replay-api.js --id <capture-id> [--tab <pattern>] [--auto-headers]\n');
  process.stderr.write('  node replay-api.js --endpoint <url> [--method GET|POST|...]\n');
  process.stderr.write('  node replay-api.js --domain <domain> --query <search-term>\n');
  process.exit(1);
}

function runNeo(neoArgs) {
  const cmd = `node "${neoCjs}" ${neoArgs}`;
  try {
    const output = execSync(cmd, { cwd: neoDir, stdio: 'pipe', encoding: 'utf8' });
    process.stdout.write(output);
  } catch (err) {
    if (err.stdout) process.stdout.write(err.stdout);
    if (err.stderr) process.stderr.write(err.stderr);
    process.exit(err.status || 1);
  }
}

if (captureId) {
  // Replay a previously captured request by ID
  let replayArgs = `replay ${captureId}`;
  if (tab) replayArgs += ` --tab "${tab}"`;
  if (autoHeaders) replayArgs += ' --auto-headers';
  process.stderr.write(`[replay-api] Replaying capture ID: ${captureId}\n`);
  runNeo(replayArgs);

} else if (endpoint) {
  // Execute a fetch directly in the browser tab context
  let execArgs = `exec "${endpoint}"`;
  if (method && method !== 'GET') execArgs += ` --method ${method}`;
  if (tab) execArgs += ` --tab "${tab}"`;
  process.stderr.write(`[replay-api] Executing ${method} ${endpoint}\n`);
  runNeo(execArgs);

} else if (domain && query) {
  // Smart API call: schema lookup + auto-auth
  process.stderr.write(`[replay-api] Smart API call on ${domain}: ${query}\n`);
  runNeo(`api ${domain} "${query}"`);
}
