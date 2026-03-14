# Progress — AI Skills & Agent Design for Business Users (v2)

Last updated: 2026-03-15 01:10 by orchestrator

## Session Intent
Create new version of prompt-engineering course with deeper content. Not improving v1 — fresh design with two-stage research, external best practices, latest Claude tools. Course renamed to "AI Skills & Agent Design" and moved to separate folder.

## Current Phase
Phase 5: Quality Evaluation — Status: Complete

## Files Created

### Research (Phase 1)
- plans/260314-1622-prompt-eng-v2/plan.md: overview plan
- plans/260314-1622-prompt-eng-v2/progress.md: this file
- plans/260314-1622-prompt-eng-v2/research/sme-report.md: frameworks, Claude tools, context engineering, agentic workflows (14 sources)
- plans/260314-1622-prompt-eng-v2/research/pedagogy-report.md: teaching strategies, activity patterns, online delivery, retention (12 sources)
- plans/260314-1622-prompt-eng-v2/research/benchmark-report.md: competitor courses, 5 agentic workflow examples, gaps

### Course Materials (Phase 3) — all in courses/ai-skills-and-agent-design/
- 00-course-overview.md: course overview, frameworks table, spaced practice plan
- 01-lesson-plan.md: 530-line detailed lesson plan, 5 sessions x 2h
- 02-slides/slides-v2-session-01..05.md: 5 slide decks (65 slides total, Mermaid diagrams)
- 03-facilitator-guide-session-01..05.md: 5 per-session guides (~185 lines each, equal depth verified)
- 04-learner-handout.md: task-organized quick reference (~240 lines)
- 05-activities/activity-s01-brief-nhan-vien-moi.md: S1 — first agent brief
- 05-activities/activity-s02-workflow-mapping-v2.md: S2 — workflow mapping + brief
- 05-activities/activity-s03-chay-contract-agent-v2.md: S3 — run contract-agent
- 05-activities/activity-s03-viet-claude-md.md: S3 — draft CLAUDE.md
- 05-activities/activity-s04-thiet-ke-skill.md: S4 — design SKILL.md + MCP
- 05-activities/activity-s05-build-test-present.md: S5 — capstone build/test/present
- 05-activities/contract-agent-demo/: shared demo folder (copied from v1)
- INSTRUCTOR-START-HERE.md: facilitator entry point

## Decisions Made
- New version, not v1 improvement (user confirmed)
- Course renamed from "prompt-engineering-for-business-users" to "ai-skills-and-agent-design"
- Separated into own folder (v1 untouched at courses/prompt-engineering-for-business-users/)
- DESIGN SHIFT: prompt techniques woven into agent design — never taught standalone
- "Brilliant new employee" mental model (Anthropic) as throughline frame
- Tool progression: Cowork from S1 → Code from S3
- Tiered activities (Foundation/Extension/Challenge) in every session
- Spaced Practice plan (Day 3/7/14/30) for post-training retention

## Key Findings
- [SME] Context engineering = dominant paradigm (Write/Select/Compress/Isolate)
- [SME] "Brilliant new employee" = best mental model for business users
- [SME] CLAUDE.md WHY-WHAT-HOW structure, <300 lines, progressive disclosure
- [Pedagogy] 60%+ hands-on, max 15 min lecture, retrieval practice at session starts
- [Pedagogy] Tiered activities solve mixed skill levels — same scenario, different depth
- [Benchmark] MASSIVE GAP: No competitor teaches agentic workflows/CLAUDE.md/skills
- [Benchmark] Only 4 evidence-based techniques: clear instructions, structured output, few-shot, CoT

## Current State
All v2 materials generated and separated into courses/ai-skills-and-agent-design/. Quality evaluation (19-criterion) in progress.

## Quality Evaluation Results

**19-Criterion Assessment:**
- **Pass (P):** 10/19 (52.6%) — Criteria 1, 3, 4, 6, 8, 9, 14, 15, 17, 18
- **Needs Improvement (NI):** 5/19 (26.3%) — Criteria 2, 5, 7, 10, 19
- **Not Addressed (NA):** 4/19 (21.1%) — Criteria 11, 12, 13 (slides not in repo), 16 (S3–S5 abbreviated)

**Critical Issues Found:**
1. **Accessibility (C19)** — No documented multi-modal alternatives for deaf/blind/low-bandwidth learners. Missing audio descriptions, caption strategy, font specs.
2. **Session 2–5 Objectives Measurability (C5)** — S1 objectives are precise ("Viết prompt 6 thành phần"); S2–S5 softer ("Chuyển đổi quy trình" undefined, "Viết CLAUDE.md tùy chỉnh" vague on success metrics).
3. **Session 3 Sequencing (C7)** — Jump from S2 abstract agent thinking to S3 "install Claude Code" lacks WHY bridge. Missing: "Why Claude Code? Because Cowork has limits."
4. **S3–S5 Troubleshooting (C16)** — S1 facilitator guide has 4 troubleshooting scenarios; S3–S5 guides have 0. Risk: facilitators unprepared for tool failures.
5. **Time Allocation Contingencies (C10)** — No fallback if setup (Claude.ai login, Claude Code install) overruns Block B.

**Strengths (Pass):**
- Learning objectives learner-centered (C3)
- Content prioritized by must-have/should-have/nice-to-have (C6)
- Delivery approach explicit with timing + scripts (C8)
- All supporting resources present (templates, handout, contract-agent demo) (C9)
- All activities have clear objectives + REAL criteria (C14, C15)
- Activity materials complete + self-explanatory (C17)
- Debriefs explicitly connect to content concepts (C18)

**Recommendation:** Fix critical 5 items before delivery. Total ETA: 3–4 hours.

**Files Written:**
- courses/prompt-engineering-for-business-users/07-evaluation-report.md: full 19-criterion report with flip conditions, fix recommendations, unresolved questions

## Next Steps
1. Fix 4 critical issues (accessibility, S2–S5 measurability, S3 sequencing, troubleshooting)
2. Decide on slides (currently NA — not in git repo, may be generated separately)
3. Verify Claude Code installation guide exists (requested in unresolved questions)
4. Final review post-fixes
