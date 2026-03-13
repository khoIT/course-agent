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

#### 1. Research & Discovery (Web Search MANDATORY)
**Primary agents:** `researcher` (Subject Matter Researcher), `Explore` (Content Scout)

- **Use `WebSearch` tool** (Claude's default) for ALL subject matter research:
  - Research topic content, best practices, industry standards
  - Find reference courses, training frameworks, and pedagogical approaches
  - Verify factual claims and statistics before including in course materials
  - Search for real-world examples, case studies, and analogies relevant to the target audience
- **Use browser tools (Claude in Chrome)** for:
  - Browsing complex web pages that need visual inspection
  - Taking screenshots of exemplary slide designs, layouts, or infographics for inspiration
  - Capturing visual reference materials for slide and handout design
- **Use uploaded materials**: Extract content from PDFs, documents, and reference files provided by user
- Spawn multiple `researcher` agents in parallel for different research angles (content vs. pedagogy vs. visual references)
  ```
  Example: spawn 2 researcher agents in parallel:
  - Agent A: "Research effective role-play exercises for customer complaint handling.
    Find 3+ published frameworks with evidence of effectiveness. WebSearch mandatory."
  - Agent B: "Research common mistakes in customer service training programs.
    Find post-mortems or case studies showing what fails and why. WebSearch mandatory."
  ```
- Use `brainstormer` agent for creative ideation on activities and engagement strategies
- Report all research findings into the plan's `research/` directory and phase files
- **[IMPORTANT]** Always cite sources and verify accuracy of researched content
- **[COMPACTION]** After research completes, update `progress.md` with: key findings, sources, research gaps, recommended next steps.

#### 2. Course Content Creation
**Primary agents:** `planner` (Course Architect), `fullstack-developer` (Content Developer)

- Activate `course-designer` skill to drive the ADDIE workflow
- Use `planner` agent for objectives design, content structuring, and lesson plan creation
- Use `fullstack-developer` agent for writing actual course content (guides, handouts, activities)
- Follow the learner-centered methodology from `./course-designer/references/course-design-methodology.md`
- **Follow the plan**: Work through phases in order, updating phase file status as each completes
- **DO NOT** create duplicate enhanced files — update existing files directly.
- **[IMPORTANT]** After creating or modifying content files, review for accuracy and consistency.
- **[IMPORTANT]** Use `WebSearch` to fact-check key claims during content writing — not just during research phase.
- **[COMPACTION]** After completing each phase's content, update `progress.md` with: files created/modified, design decisions, current phase status.

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
