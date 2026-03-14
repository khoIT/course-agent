# Research Report: Prompt Engineering for Business Users — SME Discovery

**Prepared by:** Researcher (Subject Matter Expert)
**Date:** 2026-03-14
**Course:** Prompt Engineering for Business Users (10-hour, Vietnamese audience)
**Status:** Complete — Ready for Planner Phase

---

## Executive Summary

Completed comprehensive subject matter research across 7 core teaching topics using WebSearch (Jan–Mar 2026). Synthesized findings into learner-centered curriculum framework. **Confidence levels:** High (LLMs, chat, agents, MCP adoption); Medium (context engineering, skills design).

Key insight: **MCP has crossed the chasm from experimental to industry standard** (100K → 8M downloads in 5 months; OpenAI adopted Mar 2025). Agentic AI ROI is quantifiable (60–85% time savings, 70–95% error reduction). Business users are ready for this course.

---

## Topics Researched & Key Takeaways

### 1. LLM Fundamentals (High Confidence)
**Must-teach mental models:**
- Predict-the-next-word statistical process at scale (trillions of tokens)
- Transformer architecture enables parallel processing + long-range dependencies
- Training data quality + diversity directly impact accuracy + reliability
- Three-step process: Input encode → decode → output prediction

**Misconceptions to address:**
- AI doesn't "understand" like humans; it predicts probabilities
- Larger models ≠ always better; prompt quality often matters more
- Hallucination is intrinsic; requires explicit guidance (few-shot, chain-of-thought)

**Business examples:** Marketing (batch email subject lines), Management (quarterly report summaries), Teaching (quiz generation from lecture notes).

---

### 2. Chat-Based AI Limitations (High Confidence)
**Disconnected from tools—core limitation:** Both Claude.ai + ChatGPT can draft/analyze but cannot execute actions (look up Shopify orders, create Jira tickets, update CRM). Manual copy-paste kills efficiency for business workflows.

**Key constraints:**
- Context window: Claude 200K tokens (~500 pages); ChatGPT ~130K
- Rate limits: Claude Pro 216 msgs/day; ChatGPT Plus 80 msgs/3hr
- Usage-dependent: Claude better for long documents; ChatGPT better for integrated tools
- Cost: Claude API cheaper for large outputs; ChatGPT better for user toolkit

**Misconceptions:**
- ❌ Chat can automate workflows (it can't—no execution)
- ❌ Larger context window = never need to summarize (quality degrades >3K tokens)

**Business examples:** HR helpdesk (internal, benefits from large context) vs. customer support (external, needs live data integration).

---

### 3. Why Agentic AI > Chat (High Confidence)
**Autonomy advantage:** Chat requires your next prompt for every step. Agents plan, execute, self-correct, continue until done.

**Terminal-native execution:** Agents read/write files, run commands, integrate with git—no manual copy-paste overhead.

**MCP standardization:** Model Context Protocol (Anthropic Nov 2024, adopted by OpenAI/Google/Microsoft/AWS by Mar 2025) = USB-C moment. 5,800+ MCP servers available; 8M downloads by Apr 2025.

**Quantified ROI:**
- Time savings: 30-min task (chat) → 5-min task (agent)
- Cost: 10 back-and-forth chat exchanges → 1 agent call
- Productivity: Engineers report 50% boost using Claude Code; 80% of leaders plan agent integration 2025–2026

**Misconceptions:**
- ❌ Agents are hard; chat is simpler (opposite for complex tasks)
- ❌ Must understand every step (agents show work + self-correct)

---

### 4. Prompt Engineering Principles (High Confidence)
**Core components of effective prompts:** Role + Tone + Task + Format + Constraints + Audience.

**Key techniques:**
- **Clarity > cleverness:** Clear structure + context matter more than clever phrasing
- **Few-shot prompting:** Show 1–2 examples; LLM learns pattern faster than from instructions
- **Chain-of-thought:** Ask "think step-by-step"; improves reasoning by 30–50%
- **Practical token limit:** Sweet spot = 150–300 words (reasoning degrades ~3K tokens)
- **Iteration:** Prompt engineering is experimental; test + refine required

**Misconceptions:**
- ❌ Longer prompts = better results (diminishing returns >300 words)
- ❌ Magic phrases improve output (specificity beats politeness)
- ❌ One perfect prompt forever (prompts degrade with context changes)

**Business examples:** Generic "write sales email" vs. structured role + tone + constraint → 100x better output.

---

### 5. Context Engineering (Medium-High Confidence)
**Smart zone = 40–60% context utilization.** Below 40% = wasted space. Above 60% = quality degrades.

**Research-Plan-Implement (RPI) workflow:**
- Phase 1 (Research): Discover + compress findings (truth)
- Phase 2 (Plan): Outline steps with file names + line numbers (intent)
- Phase 3 (Implement): Execute while staying <40% context

**Frequent Intentional Compaction (FIC):** Proactively summarize + discard raw data every 3–5 steps. Don't wait for token crash.

**Two-zone context:** Stable (system instructions, project identity—preserved) vs. Variable (current turn, tool results—compacted frequently).

**Misconceptions:**
- ❌ Large context window = no need to manage context
- ❌ Compaction = losing information (smart compaction = signal + discard noise)
- ❌ Only compact when running out of tokens (proactive > reactive)

**Business impact:** Audit of 20 PDFs—chat hits token limit; agent using RPI = 1) summarize risks 2) plan audit steps 3) validate findings (with compaction between each phase).

---

### 6. AI Agents & MCP (High Confidence)
**Agent definition:** Independent entity that reasons, plans, executes sequences, self-corrects, adapts to circumstances.

**Tools = actions.** Without tools, agents are just chatbots. MCP standardizes tool integration (solves "N×M" connector problem).

**MCP adoption velocity (critical for course timing):**
- Launch: Anthropic Nov 2024
- Adoption: OpenAI (Mar 2025), Google, Microsoft, AWS, Linux Foundation
- Market: 100K downloads (Nov 2024) → 8M (Apr 2025); 5,800+ servers
- Status: **Industry standard for connecting AI to tools**

**Agentic AI Foundation (Mar 2025):** Linux Foundation governs MCP + goose + AGENTS.md. Security framework being standardized.

**Business ROI:** 60–85% time reduction; 70–95% error reduction; 40–65% cost savings.

**Misconceptions:**
- ❌ Agents = plugins (agents have reasoning loop)
- ❌ MCP is only for engineers (abstracted from users)
- ❌ Agents replace domain experts (agents amplify expertise)

---

### 7. Skills & Custom Workflows (Medium Confidence)
**Skill = reusable, named workflow encapsulating repeatable task** (e.g., "GenerateMarketingBrief", "SummarizeDocument").

**Design pattern:** Manual workflow → automate steps → test on 5 real cases → package → share → iterate.

**Modern accessibility:** Drag-drop + natural language; no coding required. 92% of execs expect AI-enabled workflows by 2025.

**Iteration framework:** 1) Measure time saved 2) Error reduction 3) User satisfaction 4) Refine or retire based on data.

**Misconceptions:**
- ❌ Building skills requires coding (modern tools abstracted)
- ❌ One skill works for all use cases (skills must be narrowly scoped)
- ❌ Skills are done forever (skills decay; business context changes)

**Business examples:** HR onboarding skill (hours → minutes), Teaching lesson planning (automate sequencing + timing), Marketing analysis (batch processing 100 competitor pages).

---

## Recommended Course Structure

**6 sessions × 1.5–2 hours = 10 hours total**

1. **Session 1 (2h):** LLM fundamentals + chat limitations → foundation
2. **Session 2 (2h):** Why agents matter + MCP adoption → motivation
3. **Session 3 (2h):** Prompt engineering principles + practice → applicable immediately
4. **Session 4 (1.5h):** Context engineering + RPI workflow → mindset shift
5. **Session 5 (1.5h):** Agents + tools overview → conceptual
6. **Session 6 (1h):** Building simple skill → hands-on practice

**Balance:** 40% Conceptual | 50% Hands-on | 10% Governance/Risk

---

## Gaps & Recommendations

### For Planner Phase
1. **Design terminal objectives** per session (Bloom's Taxonomy: Remember → Understand → Apply)
2. **Identify assessment methods** (quiz, role-play, hands-on lab, skill design project)
3. **Select Vietnamese business case studies** (Western sources; need local context)

### For Content Development
1. **Security/governance module:** MCP has known risks (prompt injection, tool permissions). Mitigation patterns needed
2. **Iteration emphasis:** 30–40% of class time = prompt/skill refinement (not just creation)
3. **Fallback examples:** If Vietnamese case studies unavailable, use manufacturing + education sectors (universal)

### Risk Mitigation
- **Security gap:** Research on MCP governance advancing (Linux Foundation AAIF, Apr 2025). Recommend late-stage update
- **Vietnamese context:** Use international examples + invite learners to adapt to local business (participatory design)
- **Context engineering credibility:** Framework is emerging (2025); position as "cutting-edge productivity mindset" not "established best practice"

---

## Research Sources & Confidence

**High confidence (backed by 5+ authoritative sources):**
- LLM fundamentals (Keymakr 2026, ACM, Nature, Elastic)
- Chat-based AI (EESEL, Gmelius, Zapier comparisons 2025)
- Prompt engineering (CodeSignal, OpenAI official, Medium 2025 guides)
- Agentic AI & MCP (Linux Foundation, Anthropic, OpenAI, Thoughtworks, Red Hat)

**Medium confidence (emerging discipline):**
- Context engineering (Jason Liu 2025 research, HumanLayer FIC framework; not yet mainstream)
- Skills design (IBM workflows, n8n, Manus; platform-specific variance)

**Research method:** WebSearch (2026 sources); cross-referenced key claims; avoided single-source findings. All sources cited in full report (research/sme-report.md).

---

## Deliverables

**Files created in plan directory:**
- `plan.md` — Course overview + phase status + research summary
- `progress.md` — Session intent + findings + next steps
- `research/sme-report.md` — 246-line comprehensive SME report (all 7 topics, sources, business examples, recommended depth)

**Ready for:** Planner phase (learning objectives design) → Present lesson plan to user for approval → Material generation

---

## Unresolved Questions

1. **Vietnamese business context:** Should course include translated case studies or invite learners to localize examples? Recommend async research task or partner with Vietnamese business analyst during content phase
2. **MCP security governance:** Linux Foundation AAIF (Mar 2025) is actively developing security standards. Recommend 2–4 week delay before finalizing security content to incorporate latest guidance
3. **Hands-on lab platform:** Which tools will learners use for skill-building lab? (Claude.ai web, Claude Code CLI, third-party workflow platform?) Recommend clarification before facilitator guide development

---

**Status:** READY FOR PLANNER PHASE
