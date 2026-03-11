#!/usr/bin/env node
/**
 * generate-schema.js
 * Generate OpenAPI or JSON schema from captured API traffic via Neo CLI.
 *
 * Usage:
 *   node generate-schema.js --domain github.com
 *   node generate-schema.js --domain github.com --action show --format openapi
 *   node generate-schema.js --domain github.com --action search --query "repos"
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

const action = getArg('--action') || 'generate';
const domain = getArg('--domain') || '';
const format = getArg('--format') || 'json';
const query = getArg('--query') || '';

if (!domain && action !== 'help') {
  process.stderr.write('--domain is required\n');
  process.stderr.write('Usage: node generate-schema.js --domain <domain> [--action generate|show|search] [--format openapi|json]\n');
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

switch (action) {
  case 'generate':
    // Generate schema from captured traffic for the domain
    process.stderr.write(`[generate-schema] Generating schema for: ${domain}\n`);
    runNeo(`schema generate ${domain}`);
    break;

  case 'show': {
    // Show the generated schema, optionally in OpenAPI format
    let showArgs = `schema show ${domain}`;
    if (format === 'openapi') showArgs += ' --openapi';
    runNeo(showArgs);
    break;
  }

  case 'search':
    // Search endpoints within a domain's schema
    if (!query) {
      process.stderr.write('--query is required for --action search\n');
      process.exit(1);
    }
    runNeo(`schema search ${domain} "${query}"`);
    break;

  case 'label':
    // Add semantic labels to schema endpoints (AI-enhanced)
    process.stderr.write(`[generate-schema] Labeling schema endpoints for: ${domain}\n`);
    runNeo(`label ${domain}`);
    break;

  default:
    process.stderr.write(`Unknown action: ${action}\n`);
    process.stderr.write('Valid actions: generate, show, search, label\n');
    process.exit(1);
}
