#!/usr/bin/env node
/**
 * setup-neo.js
 * Build neo, verify extension, run doctor checks.
 * Usage: node .claude/skills/web-tap/scripts/setup-neo.js
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillDir = resolve(__dirname, '..');
const neoDir = resolve(skillDir, 'neo');
const neoCjs = resolve(neoDir, 'tools', 'neo.cjs');

function log(msg) {
  process.stdout.write(`[web-tap setup] ${msg}\n`);
}

function logError(msg) {
  process.stderr.write(`[web-tap setup] ERROR: ${msg}\n`);
}

function runCmd(cmd, cwd, label) {
  try {
    log(`Running: ${label || cmd}`);
    const output = execSync(cmd, { cwd, stdio: 'pipe', encoding: 'utf8' });
    if (output.trim()) process.stdout.write(output);
    return true;
  } catch (err) {
    logError(`Command failed: ${cmd}`);
    if (err.stdout) process.stdout.write(err.stdout);
    if (err.stderr) process.stderr.write(err.stderr);
    return false;
  }
}

// Step 1: Verify neo submodule exists
log('Checking neo submodule...');
if (!existsSync(neoDir)) {
  logError(`neo/ directory not found at: ${neoDir}`);
  logError('Run: git submodule update --init --recursive');
  process.exit(1);
}
log(`neo/ found at: ${neoDir}`);

// Step 2: Verify neo CLI entry point
if (!existsSync(neoCjs)) {
  logError(`tools/neo.cjs not found at: ${neoCjs}`);
  logError('The neo submodule may be empty. Run: git submodule update --init --recursive');
  process.exit(1);
}
log(`tools/neo.cjs found.`);

// Step 3: Check node_modules, install if missing
const nodeModules = resolve(neoDir, 'node_modules');
if (!existsSync(nodeModules)) {
  log('node_modules not found — running npm install in neo/...');
  const installed = runCmd('npm install', neoDir, 'npm install');
  if (!installed) {
    logError('npm install failed. Check package.json and network access.');
    process.exit(1);
  }
} else {
  log('node_modules already present — skipping npm install.');
}

// Step 4: Check for extension-dist
const extensionDist = resolve(neoDir, 'extension-dist');
const extensionSrc = resolve(neoDir, 'extension');
log('\n--- Chrome Extension Installation ---');
if (existsSync(extensionDist)) {
  log(`Extension dist found at: ${extensionDist}`);
  log('To load the Neo extension in Chrome:');
  log('  1. Open chrome://extensions');
  log('  2. Enable "Developer mode" (top-right toggle)');
  log('  3. Click "Load unpacked"');
  log(`  4. Select: ${extensionDist}`);
  log('  5. Browse any website — Neo starts capturing immediately');
} else if (existsSync(extensionSrc)) {
  log('extension-dist/ not found, but extension/ source exists.');
  log('Build the extension with: cd neo && npm run build');
  log('Then load extension-dist/ in chrome://extensions');
} else {
  log('WARNING: No extension directory found. Neo may not capture traffic without it.');
}

// Step 5: Run neo status to verify connectivity
log('\n--- Neo Status Check ---');
const statusOk = runCmd(`node "${neoCjs}" status`, neoDir, 'neo status');
if (!statusOk) {
  log('');
  log('neo status failed — this is expected if Chrome is not running with CDP.');
  log('Start Chrome with CDP enabled:');
  log('  Mac:   /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222');
  log('  Linux: google-chrome --remote-debugging-port=9222');
  log('  Win:   chrome.exe --remote-debugging-port=9222');
  log('');
  log('Or use: node tools/neo.cjs start  (launches Chrome automatically)');
}

log('\nSetup complete. Run scripts from .claude/skills/web-tap/scripts/ to use web-tap.');
