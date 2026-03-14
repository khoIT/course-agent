# Parallel Research Synthesis Report
## Prompt Engineering for Business Users (Vietnam)

**Report Type:** Compression of Truth (all 4 parallel researchers combined)
**Date:** 2026-03-14
**Target Audience:** Orchestrator → Course Designer (planner agent)

---

## Key Insights Across All Research Streams

### 1. Audience Profile (4 Critical Barriers)
From `research/audience-report.md`:

**Primary Pain Points:**
- **Accuracy/Trust Deficit (50%)** — Learners worry AI produces hallucinations; need error detection training early
- **Skill Gap (40%)** — Most have zero AI experience; confidence is the barrier, not IQ
- **ROI Skepticism (95% fail)** — Fear this is "another AI trend"; need fast-win in Session 1
- **Technical Barriers (No CLI)** — Cannot use command-line; must stick to web UI (ChatGPT.com, Claude.ai)

**Vietnam-Specific:**
- **Language:** English words in Vietnamese text = "immediate turn-off" → Full translation mandatory
- **Culture:** Hierarchy + rote learning preferred; authority deference strong
- **Digital readiness:** 11% workforce has Industry 4.0 skills; 20%+ growth; gov mandate by June 2025
- **No market data:** ChatGPT/Claude split in Vietnam unknown; assume ChatGPT-first, Claude secondary

**Motivation Drivers:**
- Competitive pressure (peers using AI)
- Manager mandate (efficiency targets)
- Job security narrative (reskilling)
- Curiosity (specific to teachers)

---

### 2. Competitive Landscape (What Works, What Fails)
From `research/benchmark-report.md`:

**Market Gaps (Our Opportunity):**
- ✓ No Vietnamese-language prompt engineering courses
- ✓ Existing courses assume English proficiency + technical comfort
- ✓ Most are asynchronous (Udemy, LinkedIn) → Vietnamese prefer live synchronous instruction
- ✗ Most teaching is "how to write prompts" → Missing "how to build agentic systems"

**Best Practices to Steal:**
1. **Concept-first pedagogy** (Coursera) — LLM basics before prompt techniques
2. **Web UI focus, no code** (LinkedIn, Replit) — Accessibility critical
3. **Workflow-specific examples** (Maven) — Manager email, marketer copy, teacher rubric
4. **Cohort-based live instruction** (Maven) — Engagement + accountability > asynchronous
5. **Hands-on immediate feedback** (Replit) — Practice in real-time with ChatGPT/Claude

**What to Avoid:**
- ✗ Code/CLI examples (kills non-technical learners)
- ✗ "Advanced AI concepts" (confuses instead of empowers)
- ✗ Generic prompts (must be role-specific)
- ✗ Asynchronous-only delivery (Vietnamese market responds to live instruction)

**Pricing Insight:**
- Vietnam market more price-sensitive: $50–100 viable; $300+ unaffordable
- Live Zoom 5×2h more accessible than cohort + asynchronous recording

---

### 3. Pedagogy for This Specific Group
From `research/pedagogy-report.md`:

**Virtual Engagement (No Breakout Rooms — Our Constraint):**
- Polls every 8–10 min (maintain attention)
- Chat activities (Venn diagrams, word associations, real-time feedback)
- Hand signals/emoji reactions (confidence checks)
- Think-pair-share in chat (not breakouts)
- Storytelling from peers (resonate with adults)

**Session Energy Management (2-hour sessions):**
```
0–35 min: Concept intro + engagement (poll, chat, demo)
35–38 min: BREAK (stretch, look away)
38–70 min: Deeper concept + practice
70–73 min: BREAK (energy checkpoint)
73–120 min: Application + reflection + homework
```
**Critical:** Fatigue spike after 50 min. Two 3-min breaks + activity variation = engagement maintained.

**Teaching Technical Concepts to Non-Technical Adults:**
- **Analogies = gold standard** (LLM = pattern-matching machine; API = waiter)
- **Progressive disclosure** (Session 1 broad → Session 2+ specific)
- **Visual organizers** (diagrams > definitions)
- **Multimodal** (text + diagram + live demo)
- **Avoid:** Jargon without definition; assume zero prior knowledge

**Prompt Engineering Pedagogy (TRACI Framework):**
- **Task** — What do you want the AI to do?
- **Role** — What persona should the AI adopt?
- **Audience** — Who is the output for?
- **Create** — What format/length?
- **Intent** — What's the underlying goal?

(Validated in academic settings; transferable to business users if grounded in their workflows.)

**Real-World Homework (High Confidence):**
- Task-based assignments ("Draft 3 marketing prompts for [company scenario]")
- 20–30 min homework; must apply within 1 week
- Problem-based scenarios (mirror actual work)
- Autonomy over step-by-step scripts (adults engage more)

---

### 4. Content Depth & Scope (What to Teach)
From `research/sme-report.md`:

**Module 1: LLM Fundamentals (1.5–2 hours)**
- Mental model: Next-word prediction (statistically)
- Transformer architecture basics
- Training data impact (hallucination, cutoff dates, quality)
- Common misconceptions addressed
- Real-world examples (marketing batch generation, report summarization, quiz creation)

**Module 2: Chat-Based AI (Claude.ai, ChatGPT) (1.5 hours)**
- Context window (Claude 200K vs ChatGPT 130K; why it matters)
- Rate limits (Claude 216 msgs/day; ChatGPT 80 msgs/3h)
- Capabilities + limitations (can draft/analyze; cannot execute/integrate)
- Cost-effectiveness comparison
- Hands-on: Prompt patterns (clarity, few-shot, structured output)

**Module 3: Agentic AI (Claude Code / "Cowork") (1.5 hours)**
- Autonomy vs. collaboration (chat = every step requires new prompt; agents = plan + execute)
- Context management (agents compact automatically)
- MCP (Model Context Protocol) = standardized tool integration
- Cost efficiency for repeatable tasks
- Real-world examples: Marketing campaign (chat 3h vs. agent 15min); teaching content (5 manual steps → 1 agent flow)

**Module 4: Prompt Engineering Principles (2 hours)**
- 6 components: Role + Tone + Task + Format + Constraints + Audience
- Few-shot prompting (show examples, not just instructions)
- Chain-of-thought (ask to show reasoning; +30–50% reasoning quality)
- Practical token limits (150–300 words sweet spot; quality degrades >3K)
- Iteration culture (test + refine > perfect-first-draft)

**Module 5: Capstone Project (1.5–2 hours)**
- Create a reusable skill for learner's workflow
- Managers: Delegation instructions template
- Marketers: Product copy framework (with A/B testing prompt)
- Teachers: Assignment brief generator + rubric creation prompt
- Hands-on + feedback during live session

---

## Design Constraints & Enablers

### Hard Constraints (Non-Negotiable)
1. **Virtual Zoom, no breakout rooms** → Whole-group activities only
2. **No CLI tools** → ChatGPT.com + Claude.ai web UI only
3. **Vietnamese language** → Full translation mandatory; avoid English code-switching
4. **5 sessions × 2h** → ~100 min per session; tight pacing
5. **Non-technical audience** → No Python, APIs, or technical jargon (define what's used)

### Enablers (Leverage These)
1. **Live synchronous instruction** → Adult professionals prefer real-time feedback
2. **Workflows not abstract** → Teach via manager email, marketer copy, teacher rubric
3. **Chat popularity** → ChatGPT + Claude already familiar to most
4. **Rapid digital adoption** → Vietnam gov mandate + competitive pressure → motivation high
5. **Authority deference** → Instructor credibility paramount; expert positioning works

---

## Learner Persona (Composite from All Research)

**Name:** Linh (Manager) / Hoa (Marketer) / Trang (Teacher)

**Profile:**
- 5–15 years professional experience (mid-career)
- Busy; limited time for learning (~2h/week realistic)
- Non-technical background (never used CLI or wrote code)
- English proficiency: Reads + understands; prefers Vietnamese instruction
- AI experience: Tried ChatGPT casually; unsure how to get consistent results

**Pain Points:**
1. Accuracy concerns: "Does AI hallucinate? How do I catch errors?"
2. ROI skepticism: "I've heard AI is overhyped. Why spend time learning?"
3. Skill gap: "I don't understand how LLMs work."
4. Tool overwhelm: "ChatGPT, Claude, Gemini — which do I use?"

**Motivations:**
- Keep up with competitors
- Manager pressure to adopt AI
- Potential to save 5–10h/week on routine tasks
- Curiosity about emerging technology

**Learning Preferences:**
- Live instruction (Q&A, feedback, interaction)
- Structured content (not open-ended exploration)
- Business-specific examples (not generic use cases)
- Visible instructor expertise (hierarchy matters)
- Short, actionable homework (20–30 min max)

**Success Metric:**
- Creates 1 reusable prompt framework for their workflow
- Can explain to a colleague "how to prompt an AI"
- Uses at least 1 technique in their actual work within 1 week post-course

---

## Top 3 Design Decisions (Research-Backed)

### Decision 1: Session Structure
**Concept-First Progression:**
1. Session 1: LLM fundamentals + first prompt attempt (concept + fast-win)
2. Session 2: Chat patterns + context window (deeper understanding)
3. Session 3: Agentic workflows + Claude Code (unlock automation)
4. Session 4: Prompt engineering principles + iteration (mastery)
5. Session 5: Capstone project + skill creation (application)

**Why:** Coursera + Pedagogy research shows concept-first engagement higher than tool-first. Fast-win in Session 1 kills ROI skepticism.

### Decision 2: Activity Format
**Whole-Group Engagement (No Breakouts):**
- Polls every 8–10 min
- Chat activities (shared whiteboard, definitions, examples)
- Demo + pause for questions
- Think-pair-share in chat/verbal
- Individual practice with live instructor support

**Why:** No breakouts constraint; chat-based alternatives maintain engagement. Peer learning replaces with assigned speakers + storytelling.

### Decision 3: Homework Model
**Task-Based + Time-Boxed:**
- "Draft 3 marketing subject lines using [technique from Session 2]"
- "Create a delegation instruction prompt for your team" (manager)
- "Write a quiz question generator prompt for your subject" (teacher)
- 20–30 min; due 1 week later; brings draft to next session

**Why:** Real-world tasks + autonomy + 30-day application window = 50%+ retention vs. generic drills.

---

## Unresolved Research Gaps (Inform Next Phase)

1. **Vietnam ChatGPT/Claude market split** — Recommend early user survey; may affect tool emphasis
2. **Teacher-specific prompts** — Limited research on educator adoption; recommend SME interviews
3. **Cost sensitivity** — No data on pricing tolerance; early cohort feedback critical
4. **Translation quality** — Vietnamese tech terms evolving; glossary creation needed pre-launch

---

## Handoff to Planner (Next Phase)

With all 4 research reports complete, orchestrator should:

1. **Create learner portrait** (this synthesis + all 4 reports as reference)
2. **Design learning objectives** (SMART goals tied to learner needs + pedagogy findings)
3. **Outline lesson plan** (5 sessions, session flow, activity list, time allocations)
4. **Present to user for approval** (before material generation begins)

**File References:**
- `research/audience-report.md` — Audience pain points, Vietnam context, market data
- `research/benchmark-report.md` — Competitive landscape, best practices, pricing
- `research/pedagogy-report.md` — Virtual engagement, energy management, teaching techniques
- `research/sme-report.md` — Content depth, concept scaffolding, real-world examples

---

**Research synthesis complete. Ready for planner phase.**
