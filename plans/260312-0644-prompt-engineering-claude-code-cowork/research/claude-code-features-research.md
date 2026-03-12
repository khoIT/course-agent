# Claude Code Features Research Report

**Date:** 2026-03-12
**Scope:** Comprehensive feature research for Claude Code (CLI tool) adaptation into business course material
**Target Audience:** Non-technical business users learning collaborative AI workflows

---

## 1. Core Features Overview

### What is Claude Code?

Claude Code is Anthropic's official CLI tool that extends Claude AI into the command line with project awareness, persistent state, and collaborative features. Unlike web-based Claude, it integrates directly with your local filesystem and supports complex multi-agent orchestration.

**Key Positioning:**
- Native CLI experience with deep project context
- Persistent state across sessions (plans, memory, configurations)
- Multi-session teamwork coordination
- Extensible skill system
- Hook-based customization

---

## 2. Usage Patterns for Business Users

### Basic Workflow
1. **Project Initialization**: Run Claude Code in a project directory
2. **Create CLAUDE.md**: Define project-specific instructions and workflows
3. **Execute Slash Commands**: Trigger specialized behaviors (`/team`, `/plan`, `/preview`, etc.)
4. **Monitor Tasks**: Track subagent work via task lists and messaging
5. **Review Outputs**: Read reports, updated code, and generated materials

### Key Principles
- **Plan-First**: All significant work starts with persistent plan files on disk
- **Context Inheritance**: Agents load CLAUDE.md to understand project context
- **Token Efficiency**: Reuse plans and memory to avoid redundant work
- **Separation of Concerns**: Assign clear file ownership to prevent conflicts

---

## 3. CLAUDE.md: Project Instruction Files

### Purpose
CLAUDE.md files are project-level configuration files that tell Claude Code how to approach all work in that project. They define:
- Agent roles and responsibilities
- Approved workflows and standards
- Tool selection guidelines
- Quality criteria and success metrics

### Structure
```markdown
# CLAUDE.md

## Role & Responsibilities
[Describes what agents should do in this project]

## Workflows
[Links to workflow rule files in .claude/rules/]

## Tool Selection Guide
[When to use which tools and skills]

## Hook Response Protocol
[How to handle special blocking scenarios]

## Skill Configuration
[Which skills to activate and how]
```

### Inheritance Pattern
- **Project-level CLAUDE.md**: Applies to all work in that project
- **Agents load CLAUDE.md**: Before any work begins, agents read the CLAUDE.md to understand context and constraints
- **Enforced Compliance**: Agents must follow all instructions in CLAUDE.md — they override default behavior

### Teachable Concept for Business Users
Frame as: "Project playbook that pre-trains AI agents on how your team works"

---

## 4. Slash Commands

### Available Commands

| Command | Purpose | Business Use Case |
|---------|---------|-------------------|
| `/team <template>` | Spawn multi-agent teams | "Coordinate 3 researchers on different angles" |
| `/plan <description>` | Create persistent plans | "Define course design phases" |
| `/preview <file>` | View/browse project files | "Review lesson plan before submission" |
| `/preview --explain <topic>` | Generate visual explanations | "Create diagrams for class materials" |
| `/preview --slides <topic>` | Generate presentation format | "Turn concept into slide outline" |
| `/preview --diagram <topic>` | Generate architecture diagrams | "Map workflow relationships" |
| `/ask <question>` | Quick context-aware questions | "Summarize recent work" |
| `/compact` | Compress context history | "Free up token budget" |
| `/test <scope>` | Run test suites | "Validate course quality" |
| `/review <scope>` | Code/content review | "Check for errors before publish" |
| `/docs <action>` | Manage documentation | "Update project roadmap" |

### Command Syntax Patterns
- Flags come first: `/preview --explain <arg>`
- Arguments are slug-converted: "OAuth 2.0 Flow" → `oauth-2-0-flow`
- Contextual resolution: `/preview that file` resolves from recent mentions

---

## 5. Skills System

### What Are Skills?

Skills are specialized tool packages that Claude agents can activate on-demand. Each skill:
- Has a SKILL.md file defining its behavior
- Contains reference documentation in `references/` folder
- May include scripts or executable code
- Can be combined with other skills for complex workflows

### Core Skills Inventory (60+ available)

**Content Creation Skills:**
- `course-designer` — ADDIE methodology workflow for course design
- `pptx` — PowerPoint slide generation
- `docx` — Word document generation
- `canvas-design` — Illustration and infographic creation
- `mermaidjs-v11` — Diagram generation

**Development Skills:**
- `frontend-development`, `backend-development` — Language-specific coding
- `git` — Version control operations
- `code-review` — Security and quality assessment
- `test` — Testing and validation

**Research & Analysis Skills:**
- `research` — Systematic research with synthesis
- `docs-seeker` — Documentation discovery
- `scout` — Codebase analysis

**Team Coordination:**
- `team` — Multi-agent orchestration
- `plan` — Plan creation and management
- `project-management` — Gantt charts and tracking

**Visual Generation:**
- `ai-artist` — Image generation
- `algorithmic-art` — Decorative/abstract visuals
- `preview` — File viewing and diagram generation

### Skill Activation Pattern

In CLAUDE.md:
```markdown
## Tool Selection Guide

- **`course-designer` skill** — use for ALL course design tasks
- **`pptx` skill** — use when creating slides
- **`canvas-design` skill** — use for custom illustrations
```

When an agent sees a skill referenced in CLAUDE.md, it activates that skill before doing work. This ensures consistent tool usage across all agents in a project.

---

## 6. Model Context Protocol (MCP) Servers

### What is MCP?

MCP (Model Context Protocol) is a standard for connecting Claude to external services through tools. An MCP server provides a set of "tools" that Claude can call to interact with external systems.

**Key Concept:** If Claude needs to use an external service (API, database, etc.), that service is exposed through an MCP server as a set of callable tools.

### How MCP Integrates with Claude Code

1. **Define MCP Servers** in `.claude/settings.json`
2. **Agent Calls Tool** → MCP server executes the request
3. **Server Returns Result** → Agent processes and continues

### Business User Framing

"Connect Claude to your company tools. E.g., write an MCP server for your CRM, and agents can pull customer data without copy-paste."

### Available MCP Skills in This Project

| Skill | Purpose |
|-------|---------|
| `mcp-builder` | Create new MCP servers (Python/TypeScript) |
| `use-mcp` | Discover and execute MCP tool requests |
| `mcp-management` | Manage MCP server configuration |

### MCP Server Development Workflow (for technical teams)

1. **Phase 1: Research** — Understand API and design tools
2. **Phase 2: Implement** — Build server (Python or TypeScript)
3. **Phase 3: Review** — Code quality and DRY principles
4. **Phase 4: Evaluate** — Create test scenarios

---

## 7. Subagent Delegation (Task-Based)

### How Delegation Works

**Lead Agent** (main Claude Code session) spawns **Subagents** (specialized agents) via the Task tool:

```
Lead: "I need research on 3 angles"
  → Creates Task 1 (researcher agent)
  → Creates Task 2 (researcher agent)
  → Creates Task 3 (researcher agent)
  ← Wait for completion
  ← Read all reports
  → Synthesize results
```

### Task Tool Parameters

```json
{
  "subject": "Research: React Server Components",
  "description": "Investigate architecture, alternatives, and risks. Save to reports/.",
  "owner": "researcher",
  "subagent_type": "researcher",
  "model": "haiku",
  "priority": 1
}
```

### Delegation Patterns

**Sequential Chaining:** One task feeds into the next
- Research → Analysis → Design → Development → Evaluation
- Used when outputs of one step are inputs to the next

**Parallel Execution:** Multiple independent tasks
- 3 researchers investigate different angles simultaneously
- Used when tasks have no dependencies

**Blocking Dependencies:** Some tasks wait for others to complete
- Tester waits for all developers to finish
- Specified via `addBlockedBy` parameter

### Key Context to Pass to Subagents

All subagent prompts MUST include:
1. **Work context path** — Git root of files being edited
2. **Reports path** — Where to save findings
3. **Active plan path** — Reference for what phase we're in
4. **Skill references** — Which SKILL.md files to read
5. **Tools to use** — Explicit instruction on research approach

---

## 8. Agent Teams (Advanced Collaboration)

### When to Use Agent Teams vs Subagents

| Use Case | Tool |
|----------|------|
| Single focused task | Subagent (Task tool) |
| Sequential chain (plan → code → test) | Subagent chain |
| 3+ independent parallel workstreams | Agent Team |
| Competing debug hypotheses | Agent Team |
| Cross-layer work (FE + BE + tests) | Agent Team |
| Workers need to discuss findings | Agent Team |

### Team Templates Available

| Template | Use Case |
|----------|----------|
| `kk:research <topic>` | Multiple researchers investigating different angles |
| `kk:cook <plan>` | Developers coding different modules, then testing |
| `kk:review <scope>` | Reviewers assessing different aspects (security, perf, tests) |
| `kk:debug <issue>` | Debuggers testing competing root-cause hypotheses |

### Team Features

- **Own Context Window**: Each teammate has separate token budget
- **Shared Task List**: Lead monitors progress via tasks
- **Direct Messaging**: Teammates can message each other
- **Event Hooks**: Lead notified when tasks complete
- **Agent Memory**: Teammates retain learning across sessions

### Business User Framing

"Like hiring a small team for a short-term project. Each teammate is independent, but lead coordinates and synthesizes results."

---

## 9. Hooks System

### What Are Hooks?

Hooks are custom scripts that run before or after tool execution. They can validate, block, or modify tool behavior.

### Examples of Project Hooks (from this codebase)

| Hook | Purpose |
|------|---------|
| `scout-block.cjs` | Blocks overly broad glob patterns to save context |
| `privacy-block.cjs` | Blocks access to sensitive files (requires user approval) |
| `post-tool.cjs` | Runs after tool execution to validate results |

### For Business Users

Frame as: "Guard rails that keep agents from making mistakes (e.g., preventing accidental deletion of important files)."

### Hook Response Protocol

When a hook blocks a tool:
1. Tool output contains `@@PRIVACY_PROMPT_START@@...@@PRIVACY_PROMPT_END@@`
2. Agent MUST use `AskUserQuestion` tool to request user approval
3. User can approve or skip
4. Only then can agent retry the blocked tool

---

## 10. Settings and Configuration

### .claude/settings.json

**Purpose:** Configure Claude Code runtime, permissions, and MCP servers

**Key Sections:**

```json
{
  "permissions": {
    "allow": [
      "Bash(specific commands)",
      "WebFetch(domain:github.com)",
      "Read(path/pattern)"
    ]
  },
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "mcp_servers": [
    {
      "name": "filesystem",
      "command": "node",
      "args": ["server.js"]
    }
  ]
}
```

**What It Configures:**
- **Permissions**: Which tools agents can use and on which resources
- **Environment Variables**: Enable experimental features
- **MCP Servers**: External service integrations
- **Hooks**: Custom validation scripts

### File Structure

```
.claude/
├── settings.json          # Runtime configuration
├── settings.local.json    # Local overrides
├── CLAUDE.md             # Project instructions (checked into git)
├── agents/               # Agent definitions
├── hooks/                # Pre/post-tool validation scripts
├── skills/               # 60+ skill packages
├── rules/                # Workflow protocols
└── agent-memory/         # Persistent agent learnings (gitignored)
```

---

## 11. Key Differences from Web-Based Claude

### Context Window Management

| Aspect | Web Claude | Claude Code |
|--------|-----------|-------------|
| **File Access** | Paste snippets | Full project filesystem |
| **State Persistence** | Lost on refresh | Survives sessions via plans & memory |
| **Context Compaction** | Not visible to user | Users must manage via plans |
| **Regeneration** | Full conversation | Resume from persistent plan |

### Workflow Capabilities

| Feature | Web | CLI |
|---------|-----|-----|
| Single-session task | ✓ | ✓ |
| Multi-session coordination | ✗ | ✓ (plans + memory) |
| Subagent spawning | ✗ | ✓ (Task tool) |
| Team coordination | ✗ | ✓ (Agent Teams) |
| Persistent configuration | ✗ | ✓ (CLAUDE.md) |
| Local git integration | ✗ | ✓ (native) |
| MCP server hosting | ✗ | ✓ |

### User Experience

| Aspect | Web | CLI |
|--------|-----|-----|
| **Learning curve** | Shallow | Steep (powerful but complex) |
| **Ideal for** | Quick tasks, ad hoc | Managed projects, teams |
| **Token efficiency** | Moderate | High (plans + memory + delegation) |
| **Debugging failures** | Trial/error | Deterministic (reproducible) |

---

## 12. Practical Workflows for Business Users

### Workflow A: Solo Content Creation with Plans
1. Create plan in `.claude/rules/`
2. Define phases and checkpoints
3. Work through plan phases sequentially
4. Update phase status as work progresses
5. Review all materials against plan before publishing

**Tools:** `/plan`, CLAUDE.md, persistent file updates

### Workflow B: Small Team Course Design
1. **Lead**: Create master plan
2. **Researchers**: Investigate 3 research angles in parallel (subagents)
3. **Designer**: Take research findings, create lesson plan
4. **Developers**: Build slides, activities, handouts in parallel
5. **Reviewers**: Check all materials against 19-criterion checklist
6. **Lead**: Synthesize feedback and finalize

**Tools:** Task tool (subagents), `/team` command, CLAUDE.md for consistency

### Workflow C: Debugging Production Issues
1. **Lead**: Describe issue, spawn 3 debuggers with competing hypotheses
2. **Debuggers**: Test hypotheses, message each other with findings
3. **Lead**: Wait for convergence on root cause
4. **Lead**: Synthesize debug report and recommended fix

**Tools:** `/team debug` command, direct messaging between agents

---

## 13. Teaching Recommendations

### For Non-Technical Business Users

**Start Simple:**
1. Introduce CLAUDE.md as "project playbook"
2. Show slash commands as "shortcuts that do specialized work"
3. Frame subagents as "hiring temporary specialists"
4. Emphasize plan-first approach to prevent lost work

**Teachable Concepts (not implementation details):**
- "Persistent plans survive context compaction" (not how compaction works)
- "Agent teams run in parallel" (not how threading works)
- "CLAUDE.md pre-trains agents on your workflow" (not how prompting works)
- "MCP servers connect to external tools" (not how protocols work)

**Real-World Analogies:**
- CLAUDE.md = "Employee handbook for AI agents"
- Plans = "Project roadmap that survives interruptions"
- Subagents = "Freelancers you hire for specific tasks"
- Agent Teams = "Temporary startup team with independent budget"
- Skills = "Tools in a craftsperson's toolbox"

### Curriculum Structure

**Module 1: Foundations (3 hrs)**
- What is Claude Code and why it's different
- CLAUDE.md as project instructions
- Basic filesystem awareness

**Module 2: Workflows (4 hrs)**
- Plan-first approach for content creation
- Slash command patterns
- File organization for sustainability

**Module 3: Delegation (4 hrs)**
- Subagents and Task tool
- Context passing (what agents need to know)
- Monitoring and error recovery

**Module 4: Teams (3 hrs)**
- When to use Agent Teams vs subagents
- Team templates (research, cook, review, debug)
- Practical team coordination example

**Module 5: Advanced (2 hrs)**
- Settings and configuration
- Custom hooks for guard rails
- MCP servers for integrations

---

## 14. Quality and Governance

### Built-In Quality Mechanisms

1. **Persistent Plans**: State survives session breaks
2. **Hook System**: Prevents accidental destructive actions
3. **Task Blocking**: Dependencies ensure proper sequencing
4. **Memory System**: Agents learn and improve over time
5. **Skill Verification**: Only approved tools can be used (via settings.json)

### Governance for Business Teams

**Recommended Setup:**
- **Lead Agent**: Manages plans, delegates tasks, synthesizes results
- **Specialist Agents**: Execute specific work streams
- **All agents**: Must follow CLAUDE.md before doing any work
- **Permissions**: Lock down sensitive operations (git push, delete files) in settings.json

---

## 15. Summary Table: Claude Code at a Glance

| Dimension | What It Is |
|-----------|-----------|
| **Core Purpose** | CLI extension of Claude with project awareness and multi-agent orchestration |
| **Primary Use** | Collaborative projects requiring persistent state and team coordination |
| **Key Innovation** | CLAUDE.md: pre-train all agents on project standards before work begins |
| **Persistent State** | Plans (on disk) + Memory (per-agent) + Settings (configuration) |
| **Collaboration** | Subagents (sequential/parallel tasks) + Agent Teams (cross-functional teams) |
| **Extensibility** | Skills (tool packages) + Hooks (validation) + MCP servers (external APIs) |
| **Best For** | Course design, content production, code review, research projects |
| **Not Ideal For** | One-off quick tasks (use web Claude instead) |

---

## Unresolved Questions

1. **MCP Server Hosting**: Can MCP servers be deployed externally, or must they run locally? (Affects distributed team scenarios)
2. **Token Budget Limits**: Are there documented limits on total tokens per team session? (Affects team size planning)
3. **Plan Template Customization**: How to create custom plan templates for domain-specific workflows? (Affects course design adaptability)
4. **Skill Version Management**: How are skill updates managed without breaking existing projects? (Affects long-term maintenance)
5. **Cross-Project Agent Memory**: Can agent memory be shared across projects, or is it strictly project-scoped? (Affects knowledge reuse)
6. **Hook Chaining**: Can hooks call other hooks, or only linear execution? (Affects complex validation scenarios)

---

## References & Sources

**Source Documents Analyzed:**
- CLAUDE.md (project instructions)
- .claude/rules/ (workflow protocols)
- .claude/skills/ (60+ skill definitions)
- .claude/agents/ (agent role definitions)
- .claude/command-archive/ (slash command documentation)

**Key Files Referenced:**
- `/course-designer/SKILL.md` — ADDIE workflow
- `/team/SKILL.md` — Agent Teams orchestration
- `/development-rules.md` — Content creation standards
- `/orchestration-protocol.md` — Delegation patterns
- `.claude/settings.local.json` — Permission and MCP configuration

**Documentation Quality Notes:**
- Official docs are well-structured in SKILL.md files
- Practical examples embedded in agent definitions
- Workflow protocols explicitly documented
- No external documentation required (all local)

---

**Research Completed:** 2026-03-12 06:46 UTC
**Status:** Ready for course adaptation
**Estimated Teaching Hours:** 16 hours (5 modules)
**Target Audience Level:** Non-technical business users comfortable with project coordination
