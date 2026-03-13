---
name: kk:web-tap
description: Tap into any web app's API traffic — capture, generate OpenAPI schemas, replay calls, create mock servers. Powered by Neo.
license: MIT
version: 1.0.0
argument-hint: "[url or domain or action]"
---

# kk:web-tap

Turn any web app into an API. No official API needed. No browser automation required.

Neo passively captures every `fetch()` and `XMLHttpRequest` your browser makes, learns the patterns, and lets you replay those API calls directly — complete with cookies, CSRF tokens, and session auth inherited automatically.

## Prerequisites

1. **Chrome browser** running with CDP (Chrome DevTools Protocol) accessible
2. **Neo extension loaded** in Chrome:
   - Open `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked" → select `.claude/skills/web-tap/neo/extension-dist/`
   - Browse any website — Neo starts capturing immediately
3. **Neo CLI built** — run setup script (see below)
4. **Node.js 18+** installed

## Setup

```bash
node .claude/skills/web-tap/scripts/setup-neo.js
```

This will:
- Verify the neo submodule and `tools/neo.cjs` exist
- Install npm dependencies if needed
- Print Chrome extension installation instructions
- Run `neo status` to confirm connection

## Capabilities

| Capability | Script | Neo Command |
|---|---|---|
| Capture API traffic | `capture-traffic.js` | `neo capture list/watch/export` |
| Generate OpenAPI schema | `generate-schema.js` | `neo schema generate/show` |
| Replay API calls | `replay-api.js` | `neo replay <id>`, `neo exec <url>` |
| Discover API flows | `capture-traffic.js --action flows` | `neo flows <domain>` |
| Start mock server | `mock-server.js` | `neo mock` / manual approach |
| Export HAR/JSON | `capture-traffic.js --action export` | `neo capture export` |

## Choosing an Approach

| Scenario | Use |
|---|---|
| Target site has an official API | Official API directly |
| Need to discover undocumented endpoints | **web-tap** — capture + schema generate |
| Need to automate UI clicks/forms | chrome-devtools skill (or Neo v2 UI layer) |
| Need API + UI automation together | **web-tap** + chrome-devtools hybrid |
| One-off request replay | web-tap replay |
| Persistent mock server for testing | web-tap mock-server |

## Common Workflows

### Capture All APIs From a Site

```bash
# 1. Connect Neo to running Chrome
node .claude/skills/web-tap/scripts/capture-traffic.js --action connect

# 2. Watch live traffic for a domain
node .claude/skills/web-tap/scripts/capture-traffic.js --action watch --domain github.com

# 3. Export captured traffic
node .claude/skills/web-tap/scripts/capture-traffic.js --action export --domain github.com --format json
```

### Generate OpenAPI Schema for a Domain

```bash
# 1. First capture some traffic (browse the site normally)
node .claude/skills/web-tap/scripts/capture-traffic.js --action watch --domain api.example.com

# 2. Generate schema from captured traffic
node .claude/skills/web-tap/scripts/generate-schema.js --domain api.example.com

# 3. View the generated schema
node .claude/skills/web-tap/scripts/generate-schema.js --domain api.example.com --action show --format openapi
```

### Replay a Login Flow

```bash
# 1. Capture traffic while logging in manually
node .claude/skills/web-tap/scripts/capture-traffic.js --action search --domain example.com

# 2. List captures to find login endpoint IDs
node .claude/skills/web-tap/scripts/capture-traffic.js --action list --domain example.com

# 3. Replay the login call (inherits browser session)
node .claude/skills/web-tap/scripts/replay-api.js --id <capture-id>

# 4. Or execute directly with custom params
node .claude/skills/web-tap/scripts/replay-api.js --endpoint https://example.com/api/login --method POST
```

### Create a Mock Server

```bash
# 1. Generate schema for the domain
node .claude/skills/web-tap/scripts/generate-schema.js --domain api.example.com

# 2. Start mock server on port 4000
node .claude/skills/web-tap/scripts/mock-server.js --domain api.example.com --port 4000
```

## Hybrid Integration with chrome-devtools

When both `kk:web-tap` and `kk:chrome-devtools` skills are present, you get the full automation stack:

- **web-tap** handles API discovery, capture, replay, and schema generation
- **chrome-devtools** handles UI automation (clicking, form filling, screenshots)
- **Neo v2 UI layer** (`neo snapshot`, `neo click`, `neo fill`) bridges both — same CLI, both layers

Detect chrome-devtools presence:
```bash
ls .claude/skills/chrome-devtools/SKILL.md 2>/dev/null && echo "chrome-devtools available"
```

Hybrid pattern — navigate UI to trigger APIs, then replay without UI:
```bash
# Step 1: Use chrome-devtools to navigate and trigger API calls
# Step 2: web-tap captures all API traffic automatically
# Step 3: Replay APIs directly without browser automation
node .claude/skills/web-tap/scripts/capture-traffic.js --action export --domain example.com
node .claude/skills/web-tap/scripts/replay-api.js --endpoint https://example.com/api/data
```

## Security Notes

- **Local only** — Neo communicates via Chrome DevTools Protocol on localhost, no data leaves your machine
- **CDP port security** — Chrome must be launched with `--remote-debugging-port` flag; do not expose this port to external networks
- **Credentials** — Session cookies and auth tokens are inherited from the browser tab; never stored in plain text by Neo
- **Captured data** — API responses may contain sensitive data; treat `.neo/` directory as sensitive, exclude from git
- **Replay safety** — Replaying write operations (POST/PUT/DELETE) executes real actions; review before replaying mutating calls

## Configuration

Default config at `.claude/skills/web-tap/templates/neo-config.json`:

```json
{
  "captureFilter": { "domains": [], "excludePatterns": [] },
  "schema": { "outputDir": ".neo/schemas" },
  "proxy": { "port": 3456 }
}
```

Copy and customize for your project:
```bash
cp .claude/skills/web-tap/templates/neo-config.json .neo/config.json
```
