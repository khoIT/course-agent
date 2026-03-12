# Evaluation Report — Prompt Engineering với Claude Code & Cowork

> 19-criterion self-evaluation with Adversarial Audit Protocol

---

## Adversarial Audit (BEFORE scoring)

### Weaknesses Identified (≥5 required)

**W1 — Terminal anxiety barrier (assumption challenge):**
Course assumes non-technical users can overcome CLI fear in 1 session. Reality: 50% learners may have never opened a terminal. Session 1 allocates only 3 min for first terminal interaction before Activity 1. Learners who can't install/launch Claude Code will be blocked for entire course. *Mitigation: pre-course setup guide sent 2 days before; pair struggling learners with comfortable ones in breakout; facilitator troubleshooting covers install failures.*

**W2 — CLAUDE.md concept overload (assumption challenge):**
CLAUDE.md is introduced in Session 1, deepened in Session 2, and made central by Session 3. For users who struggle with file systems (don't know what a "folder" is in terminal context), CLAUDE.md as "project config" may be too abstract. The course assumes learners understand file/folder structure. *Mitigation: analogy-heavy teaching ("CLAUDE.md = ghi chú dán trên bàn làm việc, AI đọc mỗi lần đến"); facilitator guide includes intervention for file system confusion.*

**W3 — Accessibility: terminal output is visually demanding:**
Claude Code output appears in monospace terminal font. Learners with visual impairments, small laptop screens, or low-resolution displays will struggle to read terminal output on shared screen. No text scaling guidance provided. Unlike web-based chat with formatted output, CLI raw text is harder to parse. *Mitigation: facilitator guide recommends zooming terminal to 150%+; backup screenshots of key outputs; learner handout provides all examples in formatted markdown.*

**W4 — Tool dependency: Claude Code requires API key and npm:**
Unlike web chat (open browser, login), Claude Code requires: (1) Node.js installed, (2) npm install, (3) API key or Anthropic account. Corporate environments may block npm installs or restrict API access. More failure points than web-based alternatives. *Mitigation: pre-course IT coordination checklist; backup screenshots for all demos; pair-work so at least 1 per group has working install.*

**W5 — Cowork deployment assumes team autonomy (assumption challenge):**
LO10 asks learners to design team deployment plans, but junior staff may lack authority to install CLI tools on team machines or mandate CLAUDE.md standards. IT security policies may block Claude Code entirely. Course doesn't address organizational procurement or security review processes. *Mitigation: 30-day plan includes "stakeholder approval" step; facilitator troubleshooting addresses "IT won't approve" scenario; ROI calculation helps build business case.*

**W6 — Scaffolding gap between Session 3 and 4:**
Session 3 introduces CLAUDE.md design with templates. Session 4 jumps to "template factory" with minimal scaffold (checklist only). Some learners may not have practiced enough between sessions to design quality templates independently. Homework completion rate is unpredictable. *Mitigation: Session 4 Activity 5 starts with 3-min facilitator demo of one template; peer review in Activity 6 catches quality issues.*

**W7 — Vietnamese technical terminology inconsistency:**
Course mixes English technical terms (CLAUDE.md, slash commands, few-shot, chain-of-thought) with Vietnamese explanations. No standardized Vietnamese translation guide. Learners may confuse English jargon or use inconsistent terms when sharing with team. *Mitigation: learner handout section 1 defines all key terms; CLAUDE.md Builder interactive artifact shows terms in context.*

---

## 19-Criterion Scoring

| # | Criterion | Rating | Evidence | Flip Condition |
|---|-----------|--------|----------|---------------|
| 1 | Target learners clearly identified | **Pass** | Learner portrait: non-tech business users (HR, Marketing, Finance, Ops) transitioning from web AI to CLI. Primary/secondary groups defined. Attitudes profiled (50% CLI-curious, 30% power-users, 20% skeptics) | Would flip if diversity within "non-technical" not addressed — mitigated by scaffolding extensions |
| 2 | KSA gap analysis comprehensive | **Pass** | K: knows web chat, not CLI/CLAUDE.md/frameworks. S: can type web prompts, can't use terminal. A: 50% curious but afraid of terminal. Specific behavioral indicators and learning conditions documented | Would flip if skills assessment only covered knowledge without attitudes |
| 3 | Objectives are learner-centered | **Pass** | All 10 objectives: Action Verb + Standard + Condition. "Thực hiện ít nhất 3 tác vụ trên Claude Code CLI" not "understand Claude Code" | Would flip if any objective used "understand" or "know" |
| 4 | Objective levels match learner needs | **Pass** | Sessions 1-2: Level 2 (Apply) — appropriate for new CLI users. Sessions 3-5: Level 3 (Create/Evaluate) — progressive. Matches non-technical → competent progression | Would flip if Level 3 objectives appeared in Session 1 |
| 5 | Objectives measurable with standards | **Pass** | LO1: "ít nhất 3 tác vụ... so sánh kết quả với web". LO5: "accuracy ≥80%". LO9: "ít nhất 10 prompt đã test". Numeric standards throughout | Would flip if standards were vague ("improve CLI skills") |
| 6 | Content focused on essentials | **Pass** | Must/Should/Nice to Have matrix. Must Have = 8 items (CLI basics through cowork). Nice to Have deferred (MCP servers, hooks, advanced agent delegation). No content overload | Would flip if MCP servers or hooks were in Must Have for non-technical audience |
| 7 | WHY-WHAT-HOW-SO WHAT sequencing | **Pass** | Every session follows sequence. Buổi 1: WHY (web vs CLI comparison) → WHAT (4 advantages) → HOW (demo + activity) → SO WHAT (3 rules). Explicit in all timing tables | Would flip if Session 1 opened with CLAUDE.md syntax without WHY motivation |
| 8 | Delivery approach specified | **Pass** | Deductive for new concepts (top-down: principle → demo → practice). Inductive for Session 4-5 (bottom-up: build templates → derive patterns). Each block marked in lesson plan | Would flip if delivery approach column missing from timing tables |
| 9 | Supporting resources listed | **Pass** | Each timing block references: slides (numbered), activities (by file), tools (Claude Code terminal), worksheets, interactive HTML artifacts (decision tree, CLAUDE.md builder, quality scorer) | Would flip if facilitator couldn't locate materials referenced |
| 10 | Time allocation realistic | **Pass** | Depth calibration: 3-4 min/concept, max 4 concepts/15-min. Activity time = 1.5× concept time. Session totals verified with calibration checks | Would flip if concepts compressed to <2 min for non-technical CLI audience |
| 11 | Slide Master consistent | **Pass** | Design specs: Deep Purple & Emerald palette, 10-12 slides/session, 24pt min body, 32pt headers, 70/30 cool/warm ratio. Per-session .pptx files | Would flip if slides used inconsistent fonts or >15 slides per session |
| 12 | 4 slide design principles | **Pass** | KISS (key point only), Easy to Understand (web vs CLI visuals, analogy diagrams), Easy to Remember (bold rules, numbered takeaways), Dynamic (warm accent for CTAs) | Would flip if slides were text-heavy paragraphs |
| 13 | Visually rich slides | **Pass** | Comparison visuals (web vs CLI), framework diagrams, analogy illustrations, decision trees, workspace structure diagrams, interactive HTML artifacts supplement slides | Would flip if >3 consecutive text-only slides |
| 14 | Activities meet REAL criteria | **Pass** | All 8 activities have REAL check in file header. Activity 01: Relevant (real CLI tasks), Engaging (web vs CLI "aha"), Active (type commands), Learner-centered (own work tasks) | Would flip if any activity was passive (watch video) |
| 15 | Activity procedures complete | **Pass** | Step-by-step with timing. Facilitator micro-actions for every activity: roaming schedule (which rooms, when), intervention triggers, early finisher tasks, time-check announcements | Would flip if "During Activity" section missing |
| 16 | Activities support objectives | **Pass** | Act 01→LO1+LO2, Act 02→LO3+LO4, Act 03→LO5, Act 04→LO6, Act 05→LO7, Act 06→LO8, Act 07→LO9, Act 08→LO10. Every LO has activity | Would flip if any LO had no corresponding activity |
| 17 | Facilitator guide executable | **Pass** | Equal depth across all 5 sessions: timing table + speaker scripts + technical setup + ≥2 troubleshooting scenarios + engagement checkpoints. Sessions 1-2 guide ≈ Sessions 3-5 guide in depth | Would flip if later sessions were summaries |
| 18 | Handout standalone-usable | **Pass** | Organized by 8 TASKS (not by session). Table of contents by task. CLAUDE.md template, workspace structure, slash commands reference. Test: someone who missed course can use handout to set up Claude Code | Would flip if organized by "Buổi 1/2/3" |
| 19 | Assessment aligned with objectives | **Pass** | Quality rubric in Activity 06 (4 criteria × 5 points). Cowork workspace building (Activity 07) = portfolio assessment. 30-day plan (Activity 08) = application assessment. Interactive prompt quality scorer HTML | Would flip if assessment tested recall ("name 6 CO-STAR elements") |

---

## Summary

**Score: 19/19 Pass**

**Top 3 strengths:**
1. Terminal onboarding designed for non-technical users — analogy-heavy, demo-first, pair support strategy
2. CLAUDE.md as progressive concept: introduced Session 1 → deepened Session 2 → designed Session 3 → systemized Session 4-5
3. Three interactive HTML artifacts (decision tree, CLAUDE.md builder, quality scorer) extend learning beyond slides

**Top 3 risks (from adversarial audit):**
1. Terminal anxiety (W1) — pre-course setup critical; if learners can't install, course fails at minute 30
2. Tool dependency (W4) — corporate IT restrictions may block npm/Claude Code; backup plan essential
3. CLAUDE.md abstraction (W2) — file system concept may confuse non-technical; analogies must land

## Consistency Cross-Check (Phase 3.5)

| Check | Status | Notes |
|-------|--------|-------|
| Terminology consistent | ✅ | "Claude Code" (not "claude-code" or "CC"), "CLAUDE.md" (capitalized), RTT/CO-STAR consistent |
| File references resolve | ✅ | Activity 01-08 files exist, slides in 02-slides/, interactive artifacts in 08-interactive-artifacts/ |
| Timing matches | ✅ | Activity 01 = 15 min in lesson plan = 15 min in activity header. All activities cross-checked |
| Objective numbering identical | ✅ | LO1-LO10 consistent across overview, lesson plan, facilitator guide, activities, evaluation |
| Format compliance | ✅ | All materials .md. Slides .pptx only. Interactive artifacts .html. No .docx |

## Interactive Artifacts Inventory

| Artifact | Purpose | Used In |
|----------|---------|---------|
| `claude-code-decision-tree.html` | Framework selection (RTT/CO-STAR/CLAUDE.md) | Session 2 reference, Session 4 review |
| `claude-md-builder.html` | Generate CLAUDE.md with industry examples | Session 3 Activity 4, Session 5 workspace |
| `prompt-quality-scorer.html` | 4-criteria output evaluation tool | Session 4 Activity 6, post-course reference |
