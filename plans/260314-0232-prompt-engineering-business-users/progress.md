# Progress — Prompt Engineering for Business Users

**Last updated:** 2026-03-14 03:10 by fullstack-developer (Facilitator guide — 5 per-session files complete)

## Session Intent
Design 10h Vietnamese course (5×2h Zoom) on prompt engineering for business users. From LLM basics → context engineering → custom skill creation. Target: managers, marketing, teachers.

## Current Phase
Phase 2: Learning Objectives — **COMPLETE (REVISED — merged architecture)**
Phase 4: Lesson Plan — **COMPLETE (REVISED — merged architecture)**
Phase 7: Materials Production — **IN PROGRESS** (facilitator guide complete; slides, handout, activities pending)

## Files Created

**Research Reports (completed):**
- `research/audience-report.md` — Audience pain points, Vietnam context, language preferences, motivation drivers
- `research/benchmark-report.md` — Competitive landscape, existing courses, market gaps, best practices
- `research/pedagogy-report.md` — Virtual engagement without breakouts, energy management, TRACI framework, homework models
- `research/sme-report.md` — LLM fundamentals, chat patterns, agentic AI, prompt engineering principles, real-world examples

**Synthesis Report:**
- `plans/reports/researcher-260314-0240-parallel-research-synthesis.md` — Compressed truth from all 4 researchers + design decisions

**Phase 2 + 4 (planner — original):**
- `phase-02-learning-objectives.md` — REWRITTEN (see below)
- `phase-04-lesson-plan.md` — REWRITTEN (see below)

**Phase 2 + 4 (fullstack-developer — revised merged architecture):**
- `phase-02-learning-objectives.md` — 15 objectives across REVISED 5 sessions. S1: AI+Prompt Mastery merged (Claude.ai, contract scenario). S2: Agent Thinking (Cowork intro). S3: Cowork+Claude Code hands-on (runs contract-agent). S4: Context Engineering+MCP. S5: SKILL.md capstone. Contract-agent woven through S1+S3 explicitly. All Bloom's Apply+.
- `phase-04-lesson-plan.md` — Minute-by-minute for revised 5 sessions. S1 fully interactive (demo-first, no lecture blocks, theory woven into exercises). Contract-agent as running example across all 5 sessions. Opening script, full activity procedure (contract scenario), transition script, assessment question. Pacing: 0-35/break/40-75/break/80-110/110-120. Polls every 8-10 min.

## Key Findings (Compression of Truth)

### Audience Profile
- **4 Critical Barriers:** Accuracy/trust (50%), skill gap (40%), ROI skepticism (95% pilots fail), no CLI comfort
- **Vietnam-Specific:** Language (English + Vietnamese mix = "immediate turn-off"), hierarchy culture, 11% digital-ready workforce, no ChatGPT market data available
- **Motivations:** Competitive pressure, manager mandates, job security, curiosity (teachers)

### Competitive Landscape
- **Gap:** No Vietnamese prompt engineering courses for non-technical users
- **Market:** ChatGPT dominant (68%); Claude growth rapid (46% work use)
- **Best practices:** Concept-first, web UI only, workflow-specific, live instruction, hands-on feedback
- **Price point:** $50–100 viable in Vietnam; $300+ unaffordable

### Pedagogy (Constraints + Enablers)
- **No breakout rooms:** Use polls (8–10 min), chat activities, think-pair-share, storytelling
- **2-hour sessions:** Break after 35 min + 70 min (fatigue spike at 50 min)
- **Non-technical:** Analogies (LLM = pattern-matching), progressive disclosure, multimodal examples
- **Homework:** Task-based (20–30 min), real-world scenarios, apply within 1 week

### Content Scope (5 Modules)
1. LLM fundamentals (1.5–2h) — mental model, training data, hallucination, real-world examples
2. Chat-based AI (1.5h) — context window, rate limits, capabilities, hands-on patterns
3. Agentic AI (1.5h) — autonomy, context management, MCP, cost efficiency, real-world ROI
4. Prompt engineering principles (2h) — 6 components, few-shot, chain-of-thought, iteration
5. Capstone project (1.5–2h) — learner creates reusable skill for their workflow

## Decisions Made
- **Dual framework:** TRACI for analysis (decompose requests), 6-component for construction (build prompts). Both taught in Session 2.
- **Hallucination addressed Session 1** (not deferred). Source triangulation strategy introduced with first demo.
- **Progressive tool chain:** Claude.ai (S1-2) → Cowork (S3) → Claude Code guided (S4) → Claude Code independent (S5).
- **Terminal objectives at Apply+ level.** No "understand/know" as terminal verbs. Enabling objectives use Understand only when paired with measurable indicators.
- **Vietnamese-first with English parenthetical** on first use only. All objectives, scripts, activity procedures in Vietnamese.
- **4-block pacing** per session: 35min concept → 5min break → 35min practice → 5min break → 30min apply → 10min wrap. Polls every 8-10 min.
- **Capstone = SKILL.md** creation + peer presentation (3 min each) with structured feedback.
- **[REVISED] Sessions 1+2 merged** into single AI+Prompt Mastery session. Old S1 (AI Foundations) + Old S2 (Prompt Mastery) collapsed — theory now woven into exercises, no standalone lecture blocks. Session 1 opens with live demo (demo-first, no intro slides).
- **[REVISED] Tool chain adjusted:** Claude.ai (S1) → Cowork intro (S2) → Cowork+Claude Code (S3) → Claude Code (S4) → Claude Code capstone (S5).
- **[REVISED] Contract-agent as running example** — not supplementary. Google Vietnam order (prompt.md + Mau-hop-dong.docx → hop-dong output) woven through S1 (prompt exercises), S2 (chat vs. agent demo), S3 (learners run it themselves), S4 (CLAUDE.md case study), S5 (SKILL.md inspiration).
- **[REVISED] Session 1 design principle:** Demo first (minute 0), explain after. Inductive approach — examples → principles. No poll-free stretch >8 min.

## Current State
Phase 2 + Phase 4 rewritten for revised 5-session merged architecture. Contract-agent (Google Vietnam scenario) is now the running example through all 5 sessions. S1 redesigned as demo-first, fully interactive (no lecture blocks). All 15 objectives and full minute-by-minute lesson plan updated. Ready for PLAN APPROVAL GATE — user must approve before material generation begins.

## Blockers / Risks
- Vietnam ChatGPT/Claude market split unknown (recommend user survey)
- Teacher-specific pain points need SME validation
- Translation glossary: RESOLVED — added as Section 7 of learner handout

## Files Created (Facilitator Guide — 2026-03-14)
- `courses/prompt-engineering-for-business-users/03-facilitator-guide.md` — index, contract-agent thread, homework summary, backup plans
- `courses/prompt-engineering-for-business-users/03-facilitator-guide-session-01.md` — B1 full depth: 4 polls VN text, speaker scripts, demo steps, 4 troubleshooting scenarios
- `courses/prompt-engineering-for-business-users/03-facilitator-guide-session-02.md` — B2: chat vs agent demo, brief mẫu, workflow mapping, 4 troubleshooting scenarios
- `courses/prompt-engineering-for-business-users/03-facilitator-guide-session-03.md` — B3: Claude Code setup, contract-agent run, CLAUDE.md anatomy, 4 troubleshooting scenarios
- `courses/prompt-engineering-for-business-users/03-facilitator-guide-session-04.md` — B4: context engineering, RPI/Smart Zone, MCP filesystem, 4 troubleshooting scenarios
- `courses/prompt-engineering-for-business-users/03-facilitator-guide-session-05.md` — B5: SKILL.md workshop, presentation rubric, vote protocol, 5 troubleshooting scenarios
- `courses/prompt-engineering-for-business-users/INSTRUCTOR-START-HERE.md` — UPDATED: 5 per-session files, tool setup timeline, pre-send checklist, success metrics

## Decisions Made (Facilitator Guide)
- Modularized into 5 per-session files to respect 200-line limit; equal depth enforced
- B5 has most detail (5 troubleshooting scenarios) — coach/MC role needs more nuance
- All scripts Vietnamese; English terms in parentheses first use only
- Contract-agent thread: B1 demo → B2 compare → B3 run → B4 case study → B5 inspiration
- Old files (sessions-1-2, sessions-3-4-5) superseded but not deleted

## Next Steps
1. **Slides:** Spawn ui-ux-designer for 5 slide decks (pptx skill)
2. **Handout:** Update `04-learner-handout.md` for revised 5-session architecture
3. **Activities:** Per-session worksheet files in `05-activities/` — workflow mapping (B2), CLAUDE.md template (B3-4), SKILL.md template (B4-5)
4. **Visual Designer:** Infographics — Chat vs Agent, SKILL.md anatomy, 5-session timeline
5. **Quality Evaluator:** 19-criterion evaluation on facilitator guide + all materials when complete

---

**Last updated:** 2026-03-14 03:11 by fullstack-developer (facilitator guide — 5 per-session files + index + INSTRUCTOR-START-HERE)

## Files Created (contract-agent-demo)

- `courses/prompt-engineering-for-business-users/05-activities/contract-agent-demo/README.md` — Vietnamese learner guide (what, how to use, file list)
- `courses/prompt-engineering-for-business-users/05-activities/contract-agent-demo/prompt.md` — Google Vietnam order (copied verbatim from original)
- `courses/prompt-engineering-for-business-users/05-activities/contract-agent-demo/CLAUDE.md` — Sanitized agent config (role, inputs, steps, output — under 30 lines, no boilerplate)
- `courses/prompt-engineering-for-business-users/05-activities/contract-agent-demo/bai-tap-prompt.md` — 3 exercises: change customer info, add services, create SKILL.md
- `courses/prompt-engineering-for-business-users/05-activities/contract-agent-demo/mau-skill.md` — SKILL.md template with placeholders for capstone (Session 5)
- `courses/prompt-engineering-for-business-users/05-activities/contract-agent-demo/Mau-hop-dong-dich-vu-truyen-thong.docx` — copied as-is from original repo

---

**Last updated:** 2026-03-14 03:11 by fullstack-developer (learner handout rewritten)

## Files Modified (learner handout)

- `courses/prompt-engineering-for-business-users/04-learner-handout.md` — FULLY REWRITTEN. Previous version used wrong frameworks (RTT/CO-STAR) and omitted Agent, Claude Code, SKILL.md sections. New version: 7 sections organized by task, all Vietnamese, contract-agent woven through sections 1/3/5 as worked examples. Includes: 6-component framework, TRACI, few-shot template, chain-of-thought template, 3 ready-to-use prompts, hallucination detection guide, source triangulation checklist, task brief template, Chat vs Agent matrix, Cowork vs Claude Code comparison, Claude Code step-by-step install, CLAUDE.md template with filled example, MCP connection guide, SKILL.md 6-part template, workflow analysis table, skill quality checklist, glossary of 17 AI terms in Vietnamese.

---

**Last updated:** 2026-03-14 by fullstack-developer (course overview + slide content files)

## Files Created (Course Overview + Slides)

- `courses/prompt-engineering-for-business-users/00-course-overview.md` — Vietnamese course overview: tổng quan, đối tượng (managers/marketing/teachers), 5-session structure table, contract-agent explanation, prerequisites, 5 learning outcomes, materials list
- `courses/prompt-engineering-for-business-users/02-slides/slides-session-01-ai-va-prompt.md` — 17 slides: demo-first opening, 3 mental models, hallucination demo, RTF formula, 6-component framework, few-shot + chain-of-thought, 4 polls with Vietnamese text, 3 exercises, homework Prompt Library
- `courses/prompt-engineering-for-business-users/02-slides/slides-session-02-tu-duy-agent.md` — 15 slides: chat vs agent demo (5 messages vs 1 brief), 3 core differences, decision matrix, task brief 4-part template, workflow mapping exercise, 3 polls, homework 2 Cowork tasks
- `courses/prompt-engineering-for-business-users/02-slides/slides-session-03-cowork-va-claude-code.md` — 15 slides: contract-agent live demo, CLAUDE.md anatomy (4 parts), Claude Code setup steps, run contract-agent exercise, modify order exercise, draft personal CLAUDE.md, 3 polls
- `courses/prompt-engineering-for-business-users/02-slides/slides-session-04-context-engineering.md` — 16 slides: context engineering concept, Smart Zone diagram, RPI pattern, CLAUDE.md case study, MCP introduction (filesystem), advanced CLAUDE.md (few-shot + terminology + constraints), 3 polls
- `courses/prompt-engineering-for-business-users/02-slides/slides-session-05-xay-dung-skill.md` — 17 slides: 5-session timeline recap, SKILL.md 6-part anatomy, workflow decomposition 4 steps, 3 common mistakes, presentation rubric, workshop + test & iterate, peer presentations, vote, 5 course takeaways, confidence poll

## Decisions Made (Course Overview + Slides)
- 00-course-overview.md written entirely in Vietnamese with contract-agent as running example explanation
- Slide counts: S1=17, S2=15, S3=15, S4=16, S5=17 (within 10-17 range, accounting for poll/exercise instruction slides)
- All slides follow design principles: 1 key idea per slide, max 5 bullet points, Vietnamese text with English in parentheses on first use
- Every session includes: poll slides with exact Vietnamese text, demo instruction slides, exercise instruction slides, takeaway slide, homework slide, next session preview
- Contract-agent visuals described as placeholders: "[Hình minh họa: ...]"

## Current State
Phase 7 Materials Production: course overview complete, slide content files complete (5 sessions), facilitator guide complete, learner handout complete, contract-agent demo complete, **activity files complete (11 files across all 5 sessions)**. Remaining: pptx conversion from slide content files, quality evaluation.

## Next Steps
1. **PPTX conversion:** Use pptx skill to convert slide content markdown files to .pptx
2. **Visual Designer:** Infographics — Chat vs Agent, SKILL.md anatomy, 5-session timeline
3. **Quality Evaluator:** 19-criterion evaluation on all materials when complete

---

**Last updated:** 2026-03-14 04:15 by fullstack-developer (activity files — 11 files for all 5 sessions)

## Files Created (Activity Files)

**Session 1 — AI + Prompt Mastery (3 files):**
- `courses/prompt-engineering-for-business-users/05-activities/activity-s01-01-prompt-hop-dong-rtf-va-6-thanh-phan.md` — RTF vs 6-component prompt with contract-agent scenario, 13 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s01-02-few-shot-va-chain-of-thought.md` — Few-shot + chain-of-thought enhancement, 8 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s01-03-tac-vu-cong-viec-thuc-te.md` — Apply to personal work task, 15 min

**Session 2 — Agent Thinking (2 files):**
- `courses/prompt-engineering-for-business-users/05-activities/activity-s02-01-viet-task-brief-dau-tien.md` — Write 4-part task brief on Cowork, 14 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s02-02-workflow-mapping.md` — 5-task mapping + classify Chat/Agent/No AI, 15 min

**Session 3 — Cowork + Claude Code (3 files):**
- `courses/prompt-engineering-for-business-users/05-activities/activity-s03-01-chay-contract-agent.md` — Run contract-agent in Claude Code, 12 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s03-02-doi-don-hang-va-chay-lai.md` — Modify input and re-run, 5 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s03-03-phac-thao-claude-md-ca-nhan.md` — Draft personal CLAUDE.md, 15 min

**Session 4 — Context Engineering + MCP (3 files):**
- `courses/prompt-engineering-for-business-users/05-activities/activity-s04-01-viet-claude-md-hoan-chinh.md` — Complete CLAUDE.md + test, 15 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s04-02-ket-noi-mcp-tool.md` — Connect MCP filesystem, 10 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s04-03-claude-md-nang-cao.md` — Advanced CLAUDE.md (few-shot, terms, constraints), 15 min

**Session 5 — Capstone (3 files):**
- `courses/prompt-engineering-for-business-users/05-activities/activity-s05-01-hoan-thien-skill-md.md` — SKILL.md 6-part workshop, 15 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s05-02-test-va-iterate.md` — Test + iterate cycle, 10 min
- `courses/prompt-engineering-for-business-users/05-activities/activity-s05-03-trinh-bay-skill-truoc-lop.md` — 3-min presentations + rubric + vote, 25 min

## Decisions Made (Activity Files)
- 11 files total, all Vietnamese-first with English parenthetical on first use
- Contract-agent woven into S1 (prompt scenario), S2 (brief example), S3 (run it), S5 (inspiration)
- Claude Code commands in S3-S5 activities
- Each file self-contained: objective, prep, steps, template, criteria, facilitator notes
- All files under 150 lines

---

**Last updated:** 2026-03-14 by fullstack-developer (PPTX slide conversion)

## Files Created (PPTX Slides)

- `courses/prompt-engineering-for-business-users/02-slides/convert-slides-to-pptx.py` — Python conversion script: parses markdown slide format, creates 16:9 widescreen .pptx with title slide, content slides (bullet points, tables, code blocks, blockquotes), speaker notes, professional formatting (28pt titles, 16pt body, navy/blue accent)
- `courses/prompt-engineering-for-business-users/02-slides/session-01-ai-va-prompt.pptx` — 18 slides (73KB)
- `courses/prompt-engineering-for-business-users/02-slides/session-02-tu-duy-agent.pptx` — 16 slides (67KB)
- `courses/prompt-engineering-for-business-users/02-slides/session-03-cowork-va-claude-code.pptx` — 16 slides (67KB)
- `courses/prompt-engineering-for-business-users/02-slides/session-04-context-engineering.pptx` — 17 slides (70KB)
- `courses/prompt-engineering-for-business-users/02-slides/session-05-xay-dung-skill.pptx` — 18 slides (75KB)

## Current State
Phase 7 Materials Production: ALL materials complete — course overview, slide markdown, slide PPTX, facilitator guide (5 sessions), learner handout, contract-agent demo, activity files (11). Remaining: quality evaluation (Phase 8).

## Next Steps
1. **Quality Evaluator:** 19-criterion evaluation on all materials
2. **Visual Designer:** Infographics (optional enhancement)
