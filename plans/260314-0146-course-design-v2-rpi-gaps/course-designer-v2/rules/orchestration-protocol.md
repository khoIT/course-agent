# Orchestration Protocol

## Agent Role Mapping (Dev → Course Design)

**Why subagents exist:** Subagents are primarily for **controlling context**, not for playing roles. Each subagent gets a fresh context window — it does the expensive work (reading files, searching, reasoning) in isolation and returns a compressed result. This keeps the orchestrator's context clean and in the Smart Zone. The role labels below (Researcher, Content Developer, etc.) are convenient shorthand for the TYPE of work, but the real value is the context isolation.

Software development agents are repurposed for course content production. See `CLAUDE.md` → "Subagent Role Mapping" for the full table. Key mappings for orchestration:

| ADDIE Phase | Primary Agent | Support Agents |
|---|---|---|
| Discovery & Analysis | `researcher` | `brainstormer`, `Explore` |
| Learning Objectives | `planner` | `researcher` |
| Content Structure | `planner` | `brainstormer` |
| Lesson Plan | `planner` + `fullstack-developer` | `researcher` |
| Content Development | `fullstack-developer` | `ui-ux-designer`, `researcher` |
| Activities & Assessments | `fullstack-developer` | `brainstormer` |
| Quality Evaluation | `tester` + `code-reviewer` | `debugger` |
| Documentation | `docs-manager` | `project-manager` |

**Framing rule:** Always frame prompts in course design language, not software terms. The agent's capabilities (research, structured writing, review, testing against criteria) transfer naturally.

## Delegation Context (MANDATORY)

When spawning subagents via Task tool, **ALWAYS** include in prompt:

1. **Work Context Path**: The git root of the PRIMARY files being worked on
2. **Reports Path**: `{work_context}/plans/reports/` for that project
3. **Plans Path**: `{work_context}/plans/` for that project
4. **Active Plan Path**: The specific plan directory for the current course (e.g., `{work_context}/plans/260311-leveraging-llm-agents-course-design/`)
5. **Course Designer Skill**: Reference `{work_context}/.claude/skills/course-designer/SKILL.md` for methodology
6. **Web Search Mandate**: Instruct agents to use `WebSearch` tool for subject matter research and fact verification
7. **Role Context**: Tell the agent its course design role (e.g., "You are acting as a Content Reviewer — evaluate this material for pedagogical quality")
8. **Progress Write Mandate**: `"MANDATORY: Before returning results, update {plan_dir}/progress.md — append to Files Modified/Created, Decisions Made, Key Findings, and update Current State and Next Steps. Merge into existing sections, don't overwrite."`

**Example — researcher as Subject Matter Researcher:**
```
Task prompt: "Research best practices for onboarding course design.
Role: Subject Matter Researcher (researcher agent repurposed for course design)
Work context: /path/to/course-repo
Reports: /path/to/course-repo/plans/reports/
Plans: /path/to/course-repo/plans/
Active plan: /path/to/course-repo/plans/260312-onboarding-course-design/
Skill: /path/to/course-repo/.claude/skills/course-designer/SKILL.md
Research: Use WebSearch tool for all subject matter research and fact verification.
Progress: MANDATORY — before returning, update plans/260312-onboarding-course-design/progress.md with findings, sources, and recommended next steps."
```

**Example — tester as Quality Evaluator:**
```
Task prompt: "Evaluate the lesson plan and facilitator guide against the 19-criterion checklist.
Role: Quality Evaluator (tester agent repurposed for course design)
Evaluation criteria: /path/to/course-repo/.claude/skills/course-designer/references/evaluation-criteria.md
Files to evaluate: courses/onboarding/01-lesson-plan.md, courses/onboarding/03-facilitator-guide.md
Rate each criterion: Pass / Needs Improvement / Not Addressed. Flag specific issues with file:line references."
```

**Example — code-reviewer as Content Reviewer:**
```
Task prompt: "Review all Session 2 materials for factual accuracy, consistency with learning objectives, and pedagogical soundness.
Role: Content Reviewer (code-reviewer agent repurposed for course design)
Review scope: courses/onboarding/session-02-*
Check against: Active plan objectives in plans/260312-onboarding-course-design/phase-02-learning-objectives.md
Output: List issues by severity (critical/major/minor) with specific fix recommendations."
```

**Rule:** If CWD differs from work context (editing files in different project), use the **work context paths**, not CWD paths.

**Rule:** Every course production task MUST reference an active plan directory. If no plan exists yet, create one first using `plans/templates/course-design-template.md`.

**Rule:** Researcher agents MUST use `WebSearch` tool for subject matter discovery. Browser tools are supplementary for visual references only.

**Rule:** Every subagent MUST update `{plan_dir}/progress.md` before returning results. This is the intentional compaction mechanism — it ensures the orchestrator can rehydrate state after auto-compaction. See `.claude/rules/intentional-compaction.md` for the full protocol.

---

#### Sequential Chaining
Chain subagents when tasks have dependencies or require outputs from previous steps:
- **`researcher` → `planner` → `fullstack-developer` → `tester`**: Full ADDIE flow (research → design → develop → evaluate)
- **`researcher` → `planner` → `planner`**: Course planning phase (discovery → objectives → content outline → lesson plan)
- **`fullstack-developer` → `fullstack-developer` → `code-reviewer`**: Material production (slides → activities → handouts → review)
- Each agent completes fully before the next begins
- Pass context and outputs between agents in the chain
- **Compaction checkpoint**: Between chained agents, orchestrator reads `progress.md` to verify state consistency before spawning next agent

#### Parallel Execution
Spawn multiple subagents simultaneously for independent tasks:
- **`researcher` (content) + `researcher` (visual references)**: Different research angles
- **`fullstack-developer` (slides) + `fullstack-developer` (handouts) + `fullstack-developer` (activities)**: When lesson plan is finalized and sections are independent
- **Multiple `fullstack-developer` agents on different modules**: Isolated sessions/modules with distinct file ownership
- **`code-reviewer` + `tester`**: Parallel content review and quality evaluation
- **Careful Coordination**: Ensure consistent terminology, branding, and style across parallel work
- **Merge Strategy**: Plan integration points and quality review before combining outputs

#### Parallel Research Fork (RPI Pattern)

The highest-leverage parallel pattern. Spawn 3-5 `researcher` agents simultaneously at the start of every course, each investigating a different facet. Each operates in a **fresh context window** (Smart Zone), returns a compressed report, and the orchestrator synthesizes them into the plan.

**Why fork research?** Research is context-expensive (web search results, file reads, reasoning). If one agent does all research sequentially, it enters the Dumb Zone before planning even starts. Parallel researchers each stay lean.

**Standard researcher roles for course design:**

| Role | Prompt Focus | File Ownership |
|------|-------------|----------------|
| Subject Matter Expert | "Research core content for [topic]. Key concepts, common misconceptions, real-world examples. WebSearch mandatory." | `research/sme-report.md` |
| Pedagogy Researcher | "Research best teaching strategies for [topic] with [audience]. Activity frameworks with evidence. WebSearch mandatory." | `research/pedagogy-report.md` |
| Audience Analyst | "Research [audience type] learner characteristics. Pain points, skill gaps, motivations, prior knowledge. WebSearch mandatory." | `research/audience-report.md` |
| Benchmark Scout | "Find existing courses/training on [topic]. What works, what fails, gaps in market. WebSearch mandatory." | `research/benchmark-report.md` |
| Constraint Mapper | "Analyze delivery constraints: [duration], [format], [group size], [tools]. Feasibility implications." | `research/constraints-report.md` |

**Spawn template (adapt to specific course):**
```
Spawn 3-5 researcher agents in parallel. Each agent gets:
- Role: {role from table above}
- Focus: {specific prompt tailored to this course's topic and audience}
- Work context: {work_context_path}
- Active plan: {plan_dir}
- File ownership: {plan_dir}/research/{role}-report.md
- WebSearch: MANDATORY for all subject matter discovery
- Report format: Compressed findings (500-1500 tokens). Include: key findings with sources, confidence level (High/Medium/Low), recommendations for course design.
- Progress Write Mandate: Before returning, update {plan_dir}/progress.md with your key findings and sources.

DO NOT: dump raw search results. DO: synthesize and compress truth.
```

**After all researchers return:**
1. Orchestrator reads compressed reports (~5K tokens total)
2. Synthesizes into phase files (compression of intent)
3. Raw research stays on disk — implementation agents never load it
4. See `primary-workflow.md` → Step 1.5 for the compression protocol

---

## On-Demand Context Scout

Before spawning the parallel research fork, run a lightweight context scout to find reusable patterns in existing course materials. This produces on-demand compressed context that is always current (based on actual files, not stale documentation).

**When to use:** Before every new course's Phase 1 research fork — unless this is the first course in the repo.

**How it works:**
1. Spawn a single `Explore` agent (Content Scout) with this prompt:
   ```
   Scan courses/ for existing course materials. For each course found:
   - List deliverable files (slides, guides, handouts, activities)
   - Note content patterns (session structure, activity types, timing conventions)
   - Identify reusable templates or frameworks
   Output: compressed summary (< 500 tokens) of what exists and what patterns to follow.
   File ownership: {plan_dir}/research/context-scout-report.md
   ```
2. Feed the scout report into the parallel research fork — researchers can reference existing patterns instead of inventing from scratch
3. Scout report stays in research/ as reference — implementation agents can pull it on-demand

**Rule:** The context scout is NOT a substitute for the parallel research fork. It's a 30-second pre-scan that makes researchers more efficient by giving them existing context to build on.

---

## Agent Teams (Optional)

For multi-session parallel collaboration, activate the `/team` skill.
Not part of the default orchestration workflow. See `.claude/skills/team/SKILL.md` for templates, decision criteria, and spawn instructions.
