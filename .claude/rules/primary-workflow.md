# Primary Workflow

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT**: Ensure token efficiency while maintaining high quality.
**IMPORTANT**: Follow the Intentional Compaction Protocol (`.claude/rules/intentional-compaction.md`) for all course production.

#### -1. Rehydration (MANDATORY — Every Session Start / Post-Compaction)

When starting a new session, resuming after context compaction, or continuing interrupted work:

```
Step 1: Read {plan_dir}/progress.md     → Current state, what happened, what's next
Step 2: Read {plan_dir}/plan.md          → Overall plan, phase statuses
Step 3: Read active phase file(s)        → Requirements for current work
Step 4: Resume from "Next Steps" in progress.md — do NOT restart from scratch
```

**Rule:** NEVER start working on a course without reading progress.md first. If progress.md doesn't exist yet, create it immediately after plan creation (Step 0.7 below).

#### 0. Plan Creation (MANDATORY — Before Any Course Work)
**Every course MUST begin with a persistent plan on disk.** This ensures state survives context compaction and session boundaries.

1. **Create plan directory**: `plans/{YYMMDD}-{HHMM}-{course-slug}/` (e.g., `plans/260311-1505-customer-service-course-design/`)
2. **Use template**: Copy structure from `plans/templates/course-design-template.md` — adapt for the specific course
3. **Create plan.md**: Overview with YAML frontmatter (status, priority, tags), phase table, target learner summary
   ```yaml
   # Example plan.md frontmatter + phase table:
   ---
   status: in-progress
   priority: high
   course: customer-service-excellence
   target-learners: frontline support staff (6mo–2yr experience)
   ---
   | Phase | Status | File |
   |-------|--------|------|
   | Discovery & Analysis | Complete | phase-01-discovery-and-analysis.md |
   | Learning Objectives | In Progress | phase-02-learning-objectives.md |
   | Content Structure | Not Started | phase-03-content-structure.md |
   ```
4. **Create 8 phase files**: `phase-01-discovery-and-analysis.md` through `phase-08-quality-evaluation.md`
   - Each phase file has: Status, Overview, Key Insights, Requirements, Todo checkboxes, Success Criteria
5. **Update phase status as work progresses**: After completing each ADDIE phase, update the phase file's status field and check off todo items
6. **Plan is the single source of truth**: Any new session or context window reads plan files to resume exactly where work left off
7. **Create progress.md**: Initialize `{plan_dir}/progress.md` with Session Intent, Current Phase, and Next Steps. This is the **rehydration anchor** — without it, post-compaction recovery degrades significantly.

**Rule:** Never rely solely on TodoWrite for course production state. TodoWrite is session-scoped; plan files persist on disk.
**Rule:** Write to progress.md at EVERY phase boundary and before any large operation. See `intentional-compaction.md` for full protocol.

#### 1. Research & Discovery — Parallel Research Fork (Web Search MANDATORY)
**Primary agents:** Multiple `researcher` agents (spawned in parallel), `Explore` (Content Scout)

Research is the **compression of truth**. Spawn parallel subagents, each with a focused lens and fresh context. Each returns a compressed report — not their full research journey. The orchestrator never loads raw research into its own context.

**1a. Spawn 3-5 Parallel Researchers** (adapt roles to topic):

| Researcher Role | Focus | Output |
|-----------------|-------|--------|
| **Subject Matter Expert** | Core content, key concepts, common misconceptions, real-world examples | `research/sme-report.md` |
| **Pedagogy Researcher** | Best teaching strategies for this topic + audience, activity frameworks | `research/pedagogy-report.md` |
| **Audience Analyst** | Learner pain points, skill gaps, motivations, prior knowledge | `research/audience-report.md` |
| **Benchmark Scout** | Existing courses on this topic, what works/fails, competitive landscape | `research/benchmark-report.md` |
| **Constraint Mapper** | Time, format, tools, facilitator skills, venue, group size implications | `research/constraints-report.md` |

Not every course needs all 5. Scale to complexity: simple courses may need 2-3 researchers, complex topics benefit from 4-5.

**1b. Researcher Subagent Rules:**
- Each researcher gets a **fresh context window** — no cross-contamination between research streams
- Each MUST use `WebSearch` tool for subject matter discovery
- Each writes its compressed findings to `{plan_dir}/research/{role}-report.md`
- Each updates `{plan_dir}/progress.md` before returning (Progress Write Mandate)
- Reports must include: findings (with sources), confidence level, and recommendations
- Target report size: **500-1500 tokens** — compress truth, not dump raw notes
- Use browser tools (Claude in Chrome) only for visual references and complex page browsing
- **Use uploaded materials**: Extract content from PDFs, documents, and reference files provided by user

**1c. Orchestrator reads only compressed reports:**
After all researchers return, orchestrator reads 3-5 short reports (~5K tokens total). Raw research stays on disk as fallback. This keeps the orchestrator in the **Smart Zone**.

- **[COMPACTION]** After all research completes, update `progress.md` with: summary of key findings across all reports, research gaps identified, recommended design direction.

#### 1.5. Research Compression → Plan (Compression of Intent)
**Primary agent:** `planner` (Course Architect) — or orchestrator directly for simpler courses

This is the **critical firewall** between research noise and implementation clarity. Compress all research findings into plan artifacts:

1. **Read all researcher reports** from `{plan_dir}/research/`
2. **Synthesize into phase files**: Populate `phase-01-discovery-and-analysis.md` through `phase-04-lesson-plan.md` with insights drawn from research reports
3. **Write TL;DR header** on each phase file (mandatory — see `intentional-compaction.md` § Compression Priority)
4. **Discard research from context** — from this point forward, implementation agents receive ONLY plan files + phase files, never raw research reports. Reports stay on disk as on-demand fallback.

**Rule:** The plan is the compression artifact. Everything upstream (research conversations, web search results, brainstorm threads) gets compressed into plan files. Implementation agents never see raw research.
**Rule:** If a phase file references a specific research finding, cite which report (`research/sme-report.md § Key Concepts`) so agents can pull it on-demand if needed.

- **[COMPACTION]** Update `progress.md` with: research-to-plan compression complete, phase files populated, design direction confirmed.

#### 2. Course Content Creation (Plan Approval Gate MANDATORY)
**Primary agents:** `planner` (Course Architect), `fullstack-developer` (Content Developer)

- Activate `course-designer` skill to drive the ADDIE workflow
- Use `planner` agent for objectives design, content structuring, and lesson plan creation
- Use `fullstack-developer` agent for writing actual course content (guides, handouts, activities)
- Follow the learner-centered methodology from `./course-designer/references/course-design-methodology.md`
- **Follow the plan**: Work through phases in order, updating phase file status as each completes
- **DO NOT** create duplicate enhanced files — update existing files directly.
- **[IMPORTANT]** After creating or modifying content files, review for accuracy and consistency.
- **[IMPORTANT]** Use `WebSearch` to fact-check key claims during content writing — not just during research phase.

**⛔ PLAN APPROVAL GATE — Before Material Generation:**

After Phase 2 (learning objectives + lesson plan) is complete but BEFORE Phase 3 (material generation) begins:
1. **Present to user**: Lesson plan summary, learning objectives, session structure, activity types
2. **Wait for explicit approval** — do NOT proceed to material generation without user confirmation
3. **If user requests changes**: Revise plan, re-present, and wait for approval again
4. This gate prevents the most expensive error: generating thousands of tokens of materials from a flawed plan

**Why this gate matters (Dex Horthy):** "A bad part of a plan could be a hundred bad lines of code." In course design terms: a flawed lesson plan produces flawed slides, a flawed facilitator guide, flawed activities, and a flawed handout — all of which must be regenerated.

- **[COMPACTION]** After completing each phase's content, update `progress.md` with: files created/modified, design decisions, current phase status.

#### 2.5. Trajectory Check (Between Major Phases)

After completing any major phase (1→2, 2→3, 3→4), before starting the next:
1. **Re-read learner portrait** (Phase 1 TL;DR)
2. **Ask:** "Are assumptions from Phase 1 still valid given what Phase N revealed?"
3. **If any assumption is falsified** → flag to user before proceeding
4. **If all valid** → continue to next phase
5. Update `progress.md` § Decisions Made with trajectory check result

This prevents Phase 1 assumptions from silently cascading through all materials.

#### 3. Material Generation
**Primary agents:** `fullstack-developer` (Content Developer), `ui-ux-designer` (Visual Designer)

- Based on the approved lesson plan, generate all required materials:
  - **Slides** → Use `pptx` skill. Follow the 4 design principles (KISS, Easy to Understand, Easy to Remember, Dynamic)
  - **Facilitator Guide** → Markdown (.md). Include speaker notes, timing, transition cues
  - **Learner Handout** → Markdown (.md). Standalone-usable summary + worksheets
  - **Activities** → Design using REAL criteria. Include complete step-by-step procedures and all materials
  - **Assessments** → Align with learning objectives. Include rubrics if applicable
  - **Illustrations** → Use `canvas-design` skill via `ui-ux-designer` agent for infographics, diagrams, poster visuals
- Spawn parallel `fullstack-developer` agents for independent materials (slides, handouts, activities) with distinct file ownership
- For each material, ensure it traces back to the learner portrait and learning objectives.
- **Use `WebSearch`** when generating content that references specific tools, platforms, or techniques — verify current accuracy.
- **[COMPACTION]** After each material type is generated (slides, guides, handouts, activities), update `progress.md` with: files created, cross-references, consistency notes.

#### 4. Quality Evaluation
**Primary agents:** `tester` (Quality Evaluator), `code-reviewer` (Content Reviewer)

- Spawn `tester` agent to run the **19-criterion self-evaluation** from `./course-designer/references/evaluation-criteria.md`
- Spawn `code-reviewer` agent in parallel to review content for accuracy, consistency, and pedagogical soundness
- Rate each criterion: Pass / Needs Improvement / Not Addressed
  ```
  Example 19-criterion evaluation output:
  | # | Criterion           | Rating | Evidence                                                    |
  |---|---------------------|--------|-------------------------------------------------------------|
  | 1 | Learner-centered    | Pass   | Learner portrait drives all activity choices (see phase-01) |
  | 5 | Activity engagement | NI     | Session 3 activity is lecture-only, no hands-on practice    |
  | 12| Assessment alignment| NA     | No assessment created yet for Module 2 objectives           |

  Weaknesses (listed before scoring):
  1. Session 3 relies on passive listening — violates REAL criteria (Active)
  2. Assumes all learners have prior CRM experience — mixed-group risk
  3. Facilitator guide Session 4 has 2 lines vs. Session 1's full page — unequal depth
  ```
- For any criterion rated NI or NA, revise the materials and re-evaluate
- Use `design-critique` skill to review visual quality of slides and visuals
- **DO NOT** skip evaluation just to mark tasks complete.
- **IMPORTANT:** Always fix quality issues following evaluation recommendations. Only finalize when all 19 criteria pass.
- **Update plan**: Mark `phase-08-quality-evaluation.md` with results and final status.
- **[COMPACTION]** After evaluation, update `progress.md` with: evaluation scores, issues found, fix actions taken/pending.

#### 5. Integration & Consistency
**Primary agents:** `project-manager` (Production Manager), `docs-manager` (Documentation Manager)

- Always follow the plan — the plan.md + phase files are the authoritative reference
- Ensure seamless consistency across all course materials (slides match handouts match facilitator guide)
- Verify learning objectives thread through all materials
- Maintain consistent branding, terminology, and visual style
- Delegate to `docs-manager` agent to update docs in `./docs` directory if any.
- Use `project-manager` agent for progress tracking and status reporting across phases
- **Update plan**: Set plan.md status to `completed` when all phases pass evaluation.
- **[COMPACTION]** Final `progress.md` update: mark status=completed, list all deliverables, note any post-delivery considerations.

#### 6. Revision & Debugging
**Primary agents:** `debugger` (Content Debugger), `researcher` (fact-checking)

- When a user reports issues with course materials (factual errors, unclear content, missing activities):
  - Use `debugger` agent to diagnose content gaps, sequencing issues, or activity mismatches
  - Identify root cause (content gap, sequencing issue, activity mismatch)
  - Spawn `researcher` agent with `WebSearch` to verify corrected content is factually accurate
  - Implement the fix in the actual material files via `fullstack-developer` agent
  - Re-run the 19-criterion evaluation via `tester` agent on affected materials
  - If evaluation reveals new issues, fix them and repeat from **Step 4**

#### 7. Visual Explanations
When explaining complex course structures, ADDIE workflow, or content architecture:
- **When to use:** User asks "explain", "how does X work", "visualize", or topic has 3+ interacting components
- Use `/preview --explain <topic>` to generate visual explanation with ASCII + Mermaid
- Use `/preview --diagram <topic>` for course architecture and content flow diagrams
- Use `/preview --slides <topic>` for step-by-step walkthroughs
- Use `/preview --ascii <topic>` for terminal-friendly output only
- **Plan context:** Visuals save to plan folder from `## Plan Context` hook injection; if none, uses `plans/visuals/`
- See `development-rules.md` → "Visual Aids & Illustrations" section for additional guidance
