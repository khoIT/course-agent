# SME Report: Prompt Engineering for Business Users (March 2026)

Last updated: 2026-03-14 by researcher (SME)

## 1. Key Frameworks Discovered

### 1.1 Prompt Engineering → Context Engineering Evolution

The field has fundamentally shifted. **Context engineering** is now the dominant paradigm — "the systematic discipline of designing and optimizing how contextual information flows through AI systems." Prompt engineering optimizes single interactions; context engineering architects entire information systems around LLMs.

**Four Core Strategies of Context Engineering** (FlowHunt/IntuitionLabs):
1. **Write Context** — persist critical data outside the context window (scratchpads, memory files, CLAUDE.md)
2. **Select Context** — retrieve only relevant data via embeddings, knowledge graphs, semantic search
3. **Compress Context** — distill information via summarization, trimming (Claude Code auto-compacts at 95% capacity; "a focused 300-token context often outperforms an unfocused 113,000-token context")
4. **Isolate Context** — split across systems via multi-agent architectures, sandboxes

Source: [FlowHunt Context Engineering Guide](https://www.flowhunt.io/blog/context-engineering/)

### 1.2 Anthropic's Official Prompting Best Practices (Claude 4.6, March 2026)

Six foundational principles from Anthropic's docs:

1. **Be clear and direct** — "Show your prompt to a colleague with minimal context. If they'd be confused, Claude will be too."
2. **Add context/motivation** — explain WHY, not just WHAT. Claude generalizes from explanations.
3. **Use examples (few-shot)** — 3-5 examples wrapped in `<example>` tags. Make them relevant, diverse, structured.
4. **Structure with XML tags** — `<instructions>`, `<context>`, `<input>` to reduce misinterpretation.
5. **Give Claude a role** — even a single sentence focuses behavior and tone.
6. **Long context: data at top, query at bottom** — queries at the end improve quality by up to 30%.

Source: [Anthropic Prompting Best Practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

### 1.3 CLAUDE.md as Persistent Memory System

CLAUDE.md = the only persistent memory mechanism for coding/knowledge agents. LLMs are stateless; CLAUDE.md enters every session.

**Three-Part Structure (WHY-WHAT-HOW)** (HumanLayer):
- **WHAT**: Map codebase/project — tech stack, structure
- **WHY**: Explain purpose and function of components
- **HOW**: Commands, verification methods, workflows

**Progressive Disclosure Framework**: Don't dump everything into CLAUDE.md. Create separate docs (`agent_docs/`, `references/`) and point to them. "Prefer pointers to copies."

**Sizing**: Target <300 lines root file. HumanLayer keeps theirs at ~60 lines. Frontier LLMs reliably follow ~150-200 instructions; Claude Code's system prompt already consumes ~50 of that budget.

**Anti-patterns**:
- Don't auto-generate with `/init` (too generic)
- Don't make Claude a linter (use hooks instead)
- Don't include code snippets (they go stale)
- Don't add non-universal instructions (Claude deprioritizes irrelevant context)

Sources: [HumanLayer](https://www.humanlayer.dev/blog/writing-a-good-claude-md), [Builder.io](https://www.builder.io/blog/claude-md-guide)

### 1.4 Vibe Coding → Agentic Engineering Progression

Coined by Andrej Karpathy, **vibe coding** = building apps via natural language intent, no programming required. Collins Word of the Year 2025. $4.7B global market.

But Karpathy himself now says vibe coding is passe. The new default: **agentic engineering** — "you are not writing code directly 99% of the time — you are orchestrating agents who do and acting as oversight."

Three levels (Apiiro):
1. **AI-Assisted Coding** — autocomplete, suggestions (Copilot-era)
2. **Vibe Coding** — describe intent, AI generates (Lovable, Bolt.new)
3. **Agentic Coding** — AI agents plan, execute, test, modify autonomously; humans supervise and approve

Sources: [Apiiro](https://apiiro.com/blog/60-second-read-ai-assisted-coding-vibe-coding-and-agentic-coding-explained/), [The New Stack](https://thenewstack.io/vibe-coding-is-passe/)

### 1.5 Cowork Three-Question Delegation Framework

Before every Cowork task, ask:
1. **What does "done" look like?** — define the end state explicitly
2. **What context can't Claude infer?** — provide what's missing
3. **What constraints apply?** — time, format, scope limits

Source: [Karo Zieminski Cowork Guide](https://karozieminski.substack.com/p/claude-cowork-guide-plugins-memory-sub-agents-tips)

## 2. Claude Tools Landscape (March 2026)

### 2.1 Claude Cowork (Desktop — launched Jan 2026)
- **Target**: Non-technical users (knowledge workers, managers, assistants)
- **Interface**: Visual desktop app, no terminal required
- **Capabilities**: Local file access, sub-agent coordination, scheduled automation, professional outputs (Excel w/ formulas, PowerPoint, formatted docs)
- **Plugins**: Gmail, Notion, Calendar, Figma connectors. Private enterprise marketplaces (Feb 2026 update)
- **Microsoft integration**: Copilot Cowork (March 2026) — Claude tech powering M365 workflows
- **Limitation**: No cross-session memory (workaround: persistent memory files in project folder)
- **Availability**: Pro, Max, Team, Enterprise plans

Source: [Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

### 2.2 Claude Code (Terminal — for power users)
- **Target**: Developers + increasingly non-technical power users
- **Interface**: Terminal/CLI, VS Code extension
- **Key feature**: CLAUDE.md for persistent context
- **Non-technical use cases** (Department of Product): PRD generation, Jira ticket writing, file organization, SEO analysis, personal knowledge systems, "Product OS"
- **Workflow shift**: "Claude first, only peek at code when reviewing" — terminal as primary interface

Sources: [Department of Product](https://departmentofproduct.substack.com/p/how-to-use-claude-code-for-non-engineering), [Builder.io](https://www.builder.io/blog/claude-code)

### 2.3 MCP (Model Context Protocol)
- **What**: Open-source standard by Anthropic to connect AI to external tools/data
- **Scale**: 97M+ monthly SDK downloads, 10,000+ active servers (early 2026)
- **Governance**: Now under Agentic AI Foundation (Linux Foundation). Adopted by Anthropic, OpenAI, Google, Microsoft.
- **Business connectors**: HubSpot CRM (Q2 2025), ActiveCampaign email (June 2025), Klaviyo (Aug 2025)
- **Challenge for business users**: Setting up MCP servers still requires technical knowledge. Enterprise connectors via Cowork plugins are the easier path.

Source: [eesel.ai MCP Guide](https://www.eesel.ai/blog/claude-code-mcp-tools)

### 2.4 Skills (Custom Automation)
- Encode recurring workflows so you don't re-explain processes
- Stack multiple skills simultaneously — Claude loads relevant instructions progressively
- Separate by domain (one voice skill, one corporate writing skill, one newsletter skill)
- Available in both Code (SKILL.md files) and Cowork (plugin-based)

## 3. Best Prompt Engineering Techniques for Non-Technical Users

### 3.1 The RTF Framework (Role-Task-Format)
Widely taught as the simplest entry point:
- **Role**: "You are a senior marketing analyst..."
- **Task**: "Analyze this Q3 sales data and identify..."
- **Format**: "Present as a table with columns for..."

### 3.2 Six Components of an Effective Prompt
1. **Role/Persona** — who Claude should be
2. **Context/Background** — relevant situation info
3. **Task/Instruction** — what to do (be specific, use verbs)
4. **Constraints** — what NOT to do, length limits, style
5. **Examples** — 3-5 few-shot demonstrations
6. **Output Format** — how to structure the response

### 3.3 Chain-of-Thought (CoT) for Business Users
Ask Claude to "think step by step" or "reason through this before answering." Dramatically improves accuracy for analytical tasks. Anthropic's official guidance: "Prefer general instructions over prescriptive steps — 'think thoroughly' often produces better reasoning than hand-written step-by-step plans."

### 3.4 Few-Shot Prompting
Provide 3-5 examples of desired input→output pairs. Wrap in `<example>` tags. Make examples diverse (cover edge cases). Most reliable way to steer Claude's output format, tone, structure.

### 3.5 XML Structuring for Complex Prompts
Use `<instructions>`, `<context>`, `<input>`, `<constraints>` tags. Particularly effective when mixing instructions + data + examples. Non-technical users can learn this as a "template" approach.

### 3.6 The "Brilliant New Employee" Mental Model
Anthropic's golden rule: "Think of Claude as a brilliant but new employee who lacks context on your norms and workflows." This reframe helps business users understand why explicit instructions matter.

## 4. Agentic Workflow Patterns

### 4.1 Task Delegation via Cowork
Real workflow example from Karo Zieminski:
- 50 meeting transcripts → sub-agents process in parallel → 4 minutes vs 30 minutes sequential
- Email triage: categorize by urgency, draft replies
- Expense tracking: receipt photos → organized spreadsheets with formulas

### 4.2 Cowork Folder Architecture
Recommended structure for non-technical users:
```
project/
  thoughts/
  ideas/
  todo/
  outputs/
  done/
  references/
  CLAUDE.md
```

### 4.3 Multi-Context Window State Management (Anthropic Official)
For long-running tasks:
1. Use first context window to set up framework (tests, scripts)
2. Write state to structured files (JSON for status, freeform for progress notes)
3. Use git for state tracking across sessions
4. Save progress before context refresh; rehydrate from disk on resume
5. Prompt: "Your context window will be automatically compacted... do not stop tasks early due to token budget concerns."

### 4.4 Sub-Agent Orchestration
Claude 4.6 can natively recognize when tasks benefit from delegation to sub-agents. Can spawn them proactively. Risk: over-spawning — add guidance like "Use subagents when tasks can run in parallel or require isolated context. For simple tasks, work directly."

## 5. Common Mistakes / Misconceptions

### 5.1 "More Context = Better Results"
FALSE. Research shows a focused 300-token context outperforms 113,000 unfocused tokens. "Context rot" — performance degrades unpredictably as input expands. Models maintain high accuracy until sudden drops (95% → 60%).

### 5.2 "Just Use a Long Prompt"
Frontier LLMs follow ~150-200 instructions reliably. Beyond that, compliance drops exponentially. Keep CLAUDE.md lean; use progressive disclosure.

### 5.3 "Prompt Engineering is Dead"
MISLEADING. Prompt engineering has evolved into context engineering, not disappeared. Individual prompt craft still matters — it's now one layer in a larger system.

### 5.4 "AI Will Write Perfect Output First Try"
Iterative refinement is essential. Keep a log of what you tried and why. Self-correction pattern: generate draft → review against criteria → refine.

### 5.5 "Cowork Has Memory Between Sessions"
FALSE. No native cross-session memory. Workaround: persistent memory files in project folder (CLAUDE.md, decision logs, preference notes).

### 5.6 "Claude Follows Every Instruction in CLAUDE.md"
FALSE. System includes a reminder that Claude "should not respond to this context unless it is highly relevant." Non-universal, irrelevant instructions get deprioritized. Only include instructions that apply across ALL sessions.

### 5.7 Over-Prompting for Claude 4.6
Claude 4.6 is much more proactive than previous models. Instructions like "CRITICAL: You MUST use this tool" cause overtriggering. Use normal language: "Use this tool when..."

## 6. Sources

1. [Anthropic Prompting Best Practices (Official)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) — Claude 4.6 official guidance
2. [FlowHunt Context Engineering Guide](https://www.flowhunt.io/blog/context-engineering/) — comprehensive context engineering framework
3. [HumanLayer: Writing a Good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md) — WHY-WHAT-HOW structure, instruction load research
4. [Builder.io: How I Use Claude Code](https://www.builder.io/blog/claude-code) — workflow shift to Claude-first
5. [Builder.io: CLAUDE.md Guide](https://www.builder.io/blog/claude-md-guide) — structure recommendations
6. [Claude Help Center: Get Started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork) — official Cowork documentation
7. [Karo Zieminski: Cowork Power User Guide](https://karozieminski.substack.com/p/claude-cowork-guide-plugins-memory-sub-agents-tips) — plugins, skills, sub-agents, memory workarounds
8. [Department of Product: Claude Code for Non-Engineering](https://departmentofproduct.substack.com/p/how-to-use-claude-code-for-non-engineering) — non-technical use cases
9. [Apiiro: AI-Assisted vs Vibe vs Agentic Coding](https://apiiro.com/blog/60-second-read-ai-assisted-coding-vibe-coding-and-agentic-coding-explained/) — evolution of AI-assisted development
10. [The New Stack: Vibe Coding is Passe (Karpathy)](https://thenewstack.io/vibe-coding-is-passe/) — agentic engineering as new default
11. [eesel.ai: MCP Tools Guide](https://www.eesel.ai/blog/claude-code-mcp-tools) — practical MCP setup
12. [IntuitionLabs: What Is Context Engineering](https://intuitionlabs.ai/articles/what-is-context-engineering) — definition and framework
13. [Lakera: Prompt Engineering Guide 2026](https://www.lakera.ai/blog/prompt-engineering-guide) — comprehensive overview
14. [VentureBeat: Agentic Swarm Coding](https://venturebeat.com/ai/vibe-coding-is-dead-agentic-swarm-coding-is-the-new-enterprise-moat) — enterprise adoption patterns

## Confidence Level
**High** for all frameworks and tools described — all sourced from official docs or established industry publications (March 2026). The Cowork landscape is still evolving rapidly (research preview); enterprise features may change.

## Recommendations for Course Design
1. **Teach the progression**: single prompt → structured prompt → CLAUDE.md → Cowork skills → agentic workflows
2. **Use Cowork as primary tool** for this audience (non-technical), with Code as advanced track
3. **Hands-on with CLAUDE.md** is critical — most impactful skill for persistent AI collaboration
4. **Context engineering mental model** should frame the entire course, not just "prompt tips"
5. **The "brilliant new employee" analogy** is the single best mental model for business users
6. **Include common mistakes** as a dedicated module — misconceptions drive most failures
