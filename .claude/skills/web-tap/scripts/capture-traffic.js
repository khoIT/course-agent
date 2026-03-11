#!/usr/bin/env node
/**
 * capture-traffic.js
 * Start/stop/list/watch/export/search captures via Neo CLI.
 *
 * Usage:
 *   node capture-traffic.js --action connect
 *   node capture-traffic.js --action list [--domain github.com] [--limit 20]
 *   node capture-traffic.js --action watch --domain github.com
 *   node capture-traffic.js --action export --domain github.com [--format json|har]
 *   node capture-traffic.js --action search [--domain example.com]
 *   node capture-traffic.js --action flows --domain github.com
 *   node capture-traffic.js --action domains
 *   node capture-traffic.js --action stats [--domain github.com]
 */

import { execSync, spawn } from 'child_process';
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

const action = getArg('--action') || 'list';
const domain = getArg('--domain') || '';
const format = getArg('--format') || 'json';
const limit = getArg('--limit') || '20';
const since = getArg('--since') || '';
const query = getArg('--query') || '';

function runNeo(neoArgs, streaming = false) {
  const cmd = `node "${neoCjs}" ${neoArgs}`;
  if (streaming) {
    // Use spawn for live-tailing commands
    const parts = ['node', neoCjs, ...neoArgs.split(' ').filter(Boolean)];
    const child = spawn(parts[0], parts.slice(1), {
      cwd: neoDir,
      stdio: 'inherit',
    });
    child.on('exit', (code) => process.exit(code || 0));
    return;
  }
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
  case 'connect':
    // Connect to Chrome CDP and save session
    runNeo('connect');
    break;

  case 'list': {
    // List captured requests, optionally filtered by domain
    let listArgs = 'capture list';
    if (domain) listArgs += ` ${domain}`;
    listArgs += ` --limit ${limit}`;
    if (since) listArgs += ` --since ${since}`;
    runNeo(listArgs);
    break;
  }

  case 'watch':
    // Live-tail traffic for a domain (streaming — use Ctrl+C to stop)
    if (!domain) {
      process.stderr.write('--domain is required for --action watch\n');
      process.exit(1);
    }
    runNeo(`capture watch ${domain}`, true);
    break;

  case 'export': {
    // Export captured traffic as JSON or HAR
    if (!domain) {
      process.stderr.write('--domain is required for --action export\n');
      process.exit(1);
    }
    let exportArgs = `capture export ${domain}`;
    if (format === 'har') exportArgs += ' --format har';
    if (since) exportArgs += ` --since ${since}`;
    runNeo(exportArgs);
    break;
  }

  case 'search': {
    // Search captures by query or domain
    let searchArgs = 'capture search';
    if (query) searchArgs += ` "${query}"`;
    if (domain) searchArgs += ` --domain ${domain}`;
    runNeo(searchArgs);
    break;
  }

  case 'flows': {
    // Discover API call sequence patterns for a domain
    if (!domain) {
      process.stderr.write('--domain is required for --action flows\n');
      process.exit(1);
    }
    runNeo(`flows ${domain}`);
    break;
  }

  case 'domains':
    // List all domains with captured traffic
    runNeo('capture domains');
    break;

  case 'stats': {
    // Show method/status/timing breakdown for a domain
    let statsArgs = 'capture stats';
    if (domain) statsArgs += ` ${domain}`;
    runNeo(statsArgs);
    break;
  }

  case 'summary':
    // Quick overview of all captured data
    runNeo('capture summary');
    break;

  case 'status':
    // Overall Neo status
    runNeo('status');
    break;

  default:
    process.stderr.write(`Unknown action: ${action}\n`);
    process.stderr.write('Valid actions: connect, list, watch, export, search, flows, domains, stats, summary, status\n');
    process.exit(1);
}
