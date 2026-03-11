# web-tap Scripts

Wrapper scripts that orchestrate Neo CLI for API capture, schema generation, replay, and mock servers.

All scripts use ES module syntax and call Neo CLI via `node .claude/skills/web-tap/neo/tools/neo.cjs`.

## Prerequisites

Run setup once before using any other script:

```bash
node .claude/skills/web-tap/scripts/setup-neo.js
```

---

## setup-neo.js

Verify environment, install dependencies, print extension instructions, run status check.

```bash
node setup-neo.js
```

Checks performed:
- neo/ submodule present and has `tools/neo.cjs`
- `npm install` run if `node_modules` missing
- Chrome extension installation instructions printed
- `neo status` run to confirm CDP connectivity

---

## capture-traffic.js

Capture, list, watch, export, and search API traffic.

| Action | Command |
|---|---|
| Connect to Chrome | `node capture-traffic.js --action connect` |
| List captures | `node capture-traffic.js --action list [--domain github.com] [--limit 20]` |
| Watch live traffic | `node capture-traffic.js --action watch --domain github.com` |
| Export as JSON | `node capture-traffic.js --action export --domain github.com` |
| Export as HAR | `node capture-traffic.js --action export --domain github.com --format har` |
| Search captures | `node capture-traffic.js --action search --query "CreateIssue"` |
| Discover API flows | `node capture-traffic.js --action flows --domain github.com` |
| List all domains | `node capture-traffic.js --action domains` |
| Traffic stats | `node capture-traffic.js --action stats --domain github.com` |

**Flags:**
- `--action` — one of: connect, list, watch, export, search, flows, domains, stats, summary, status
- `--domain` — domain filter (e.g., `github.com`)
- `--format` — `json` (default) or `har`
- `--limit` — number of results (default 20)
- `--since` — time filter (e.g., `1h`, `30m`)
- `--query` — search term for `--action search`

---

## generate-schema.js

Generate and inspect OpenAPI/JSON schema from captured traffic.

| Action | Command |
|---|---|
| Generate schema | `node generate-schema.js --domain github.com` |
| Show schema (JSON) | `node generate-schema.js --domain github.com --action show` |
| Show schema (OpenAPI) | `node generate-schema.js --domain github.com --action show --format openapi` |
| Search endpoints | `node generate-schema.js --domain github.com --action search --query "repos"` |
| Label endpoints (AI) | `node generate-schema.js --domain github.com --action label` |

**Flags:**
- `--domain` — required, target domain
- `--action` — one of: generate (default), show, search, label
- `--format` — `json` (default) or `openapi`
- `--query` — search term for `--action search`

---

## replay-api.js

Replay captured API calls or execute fetch requests inside the browser tab.

| Use case | Command |
|---|---|
| Replay by capture ID | `node replay-api.js --id cap_abc123` |
| Replay on specific tab | `node replay-api.js --id cap_abc123 --tab "github.com"` |
| Execute GET request | `node replay-api.js --endpoint https://api.github.com/user` |
| Execute POST request | `node replay-api.js --endpoint https://api.example.com/login --method POST` |
| Smart API call | `node replay-api.js --domain github.com --query "list repos"` |

**Flags:**
- `--id` — capture ID from `capture-traffic.js --action list`
- `--endpoint` — URL to execute in browser context
- `--method` — HTTP method (default GET)
- `--tab` — tab URL pattern to use for context
- `--domain` — domain for smart API call (use with `--query`)
- `--query` — search term for smart API call
- `--auto-headers` — auto-inject auth headers when replaying

---

## mock-server.js

Start a mock server from captured schema.

```bash
node mock-server.js --domain api.example.com
node mock-server.js --domain api.example.com --port 4000
```

**Flags:**
- `--domain` — required, domain to mock
- `--port` — server port (default 3456)

If Neo's native mock command is unavailable, the script prints manual instructions for Prism or json-server and exports the schema.

---

## Notes

- All scripts write status messages to stderr, data to stdout (pipe-friendly)
- `--action watch` streams live traffic — use Ctrl+C to stop
- Capture IDs come from `capture-traffic.js --action list`
- Replaying write calls (POST/PUT/DELETE) executes real actions in the browser
- Treat `.neo/` directory as sensitive — exclude from git
