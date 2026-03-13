#!/usr/bin/env node
/**
 * mock-server.js
 * Start a mock server from captured schema via Neo CLI.
 *
 * Usage:
 *   node mock-server.js --domain api.example.com
 *   node mock-server.js --domain api.example.com --port 4000
 *
 * Note: Neo mock server support depends on the installed Neo version.
 * If unavailable, this script prints the manual approach using the exported schema.
 */

import { execSync, spawn } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
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

const domain = getArg('--domain') || '';
const port = getArg('--port') || '3456';

if (!domain) {
  process.stderr.write('--domain is required\n');
  process.stderr.write('Usage: node mock-server.js --domain <domain> [--port <port>]\n');
  process.exit(1);
}

function runNeo(neoArgs) {
  const cmd = `node "${neoCjs}" ${neoArgs}`;
  try {
    const output = execSync(cmd, { cwd: neoDir, stdio: 'pipe', encoding: 'utf8' });
    process.stdout.write(output);
    return true;
  } catch (err) {
    if (err.stdout) process.stdout.write(err.stdout);
    if (err.stderr) process.stderr.write(err.stderr);
    return false;
  }
}

function spawnNeo(neoArgs) {
  const parts = ['node', neoCjs, ...neoArgs.split(' ').filter(Boolean)];
  const child = spawn(parts[0], parts.slice(1), {
    cwd: neoDir,
    stdio: 'inherit',
  });
  child.on('exit', (code) => process.exit(code || 0));
}

// Ensure schema exists before starting mock server
process.stderr.write(`[mock-server] Checking schema for domain: ${domain}\n`);
const schemaCheck = runNeo(`schema show ${domain}`);

if (!schemaCheck) {
  process.stderr.write(`\n[mock-server] No schema found for ${domain}.\n`);
  process.stderr.write('Generate schema first:\n');
  process.stderr.write(`  node .claude/skills/web-tap/scripts/generate-schema.js --domain ${domain}\n`);
  process.exit(1);
}

// Try to start mock server via Neo
process.stderr.write(`\n[mock-server] Starting mock server for ${domain} on port ${port}...\n`);
process.stderr.write('Press Ctrl+C to stop.\n\n');

// Try neo mock command (may be available in newer Neo versions)
try {
  const mockHelp = execSync(`node "${neoCjs}" --help`, { cwd: neoDir, encoding: 'utf8' });
  if (mockHelp.includes('mock')) {
    spawnNeo(`mock --domain ${domain} --port ${port}`);
  } else {
    // Fallback: export schema and print manual mock server instructions
    printManualApproach();
  }
} catch {
  printManualApproach();
}

function printManualApproach() {
  process.stderr.write('[mock-server] neo mock command not available in this version.\n\n');
  process.stderr.write('Manual approach using the exported schema:\n\n');

  process.stderr.write('Option 1 — Prism (OpenAPI mock server):\n');
  process.stderr.write(`  npx @stoplight/prism-cli mock <schema-file>.yaml --port ${port}\n\n`);

  process.stderr.write('Option 2 — json-server (simple REST mock):\n');
  process.stderr.write('  1. Export schema: node generate-schema.js --domain ' + domain + ' --format openapi > schema.yaml\n');
  process.stderr.write('  2. Convert to JSON routes and run: npx json-server --watch db.json --port ' + port + '\n\n');

  process.stderr.write('Option 3 — Export captured responses as static fixtures:\n');
  process.stderr.write(`  node capture-traffic.js --action export --domain ${domain} --format json > captures.json\n`);
  process.stderr.write('  Use captures.json as mock data with any HTTP mock framework.\n\n');

  // Export schema automatically for convenience
  process.stderr.write(`Exporting schema for ${domain} now...\n`);
  const schemaFile = `.neo/schemas/${domain.replace(/\./g, '-')}-schema.json`;
  process.stderr.write(`Schema will be at: ${schemaFile}\n\n`);
  runNeo(`schema show ${domain}`);
}
