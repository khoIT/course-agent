# Orchestration Protocol

## Agent Role Mapping (Dev → Course Design)

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
6. **Research Tools Mandate**: Instruct agents to use `WebSearch` for source discovery AND browser tools (`get_page_text`) or `WebFetch` for reading full content from top sources
7. **Role Context**: Tell the agent its course design role (e.g., "You are acting as a Content Reviewer — evaluate this material for pedagogical quality")
8. **Progress Write Mandate**: `"MANDATORY: Before returning results, update {plan_dir}/progress.md — append to Files Modified/Created, Decisions Made, Key Findings, and update Current State and Next Steps. Merge into existing sections, don't overwrite."`
9. **Research Passthrough** (content developers only): When a content developer writes about a specific technique or framework discovered in research, include the relevant section of the research report in the agent prompt — not a compressed summary. Cite: `research/sme-report.md § Section Name`.
10. **Parallel Progress Isolation**: When spawning 3+ agents that all write to progress.md, use sequential progress writes (not parallel) OR have each agent write to `{plan_dir}/progress-{agent-role}.md` and merge after all complete. Parallel appends to a single file cause duplicate headers and data loss.

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

**Rule:** Researcher agents use `WebSearch` for source discovery and browser tools (`get_page_text`, `WebFetch`) for reading full content. Browser tools are the PRIMARY reading tool, not supplementary.

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

#### Parallel Research Fork (Two-Stage RPI Pattern)

The highest-leverage parallel pattern, now with two stages for depth. Each researcher operates in a **fresh context window** (Smart Zone).

**Why two stages?** Stage 1 (Scout) finds the best sources fast via WebSearch. Stage 2 (Deep Dive) reads those sources in full via browser tools. This prevents the common failure mode: researchers summarizing search snippets instead of extracting real knowledge from authoritative sources.

**Standard researcher roles for course design:**

| Role | Prompt Focus | File Ownership |
|------|-------------|----------------|
| Subject Matter Expert | "Research core content for [topic]. Key concepts, common misconceptions, real-world examples." | `research/sme-report.md` |
| Pedagogy Researcher | "Research best teaching strategies for [topic] with [audience]. Activity frameworks with evidence." | `research/pedagogy-report.md` |
| Audience Analyst | "Research [audience type] learner characteristics. Pain points, skill gaps, motivations, prior knowledge." | `research/audience-report.md` |
| Benchmark Scout | "Find existing courses/training on [topic]. What works, what fails, gaps in market." | `research/benchmark-report.md` |
| Constraint Mapper | "Analyze delivery constraints: [duration], [format], [group size], [tools]. Feasibility implications." | `research/constraints-report.md` |

**Spawn template (adapt to specific course):**
```
Spawn 3-5 researcher agents in parallel. Each agent gets:
- Role: {role from table above}
- Focus: {specific prompt tailored to this course's topic and audience}
- Work context: {work_context_path}
- Active plan: {plan_dir}
- File ownership: {plan_dir}/research/{role}-report.md

TWO-STAGE RESEARCH PROTOCOL:
Stage 1 — Scout: Use WebSearch to find 5-10 high-quality sources. Rank by relevance.
Stage 2 — Deep Dive: For your top 3-5 sources, use browser tools (get_page_text) or WebFetch
  to read the FULL content. Extract:
  - Named frameworks, models, techniques (with full descriptions)
  - Step-by-step procedures and implementation patterns
  - Real examples, case studies, data points
  - Common mistakes and contrarian views

REPORT RULES:
- Write detailed, structured findings — do NOT compress to bullet points
- Preserve depth: if a source describes a 5-step technique, include all 5 steps
- Include direct quotes (with attribution) for key insights
- Target report size: 2000-5000 tokens — richness over brevity
- Cite every finding with source URL and section
- Confidence level (High/Medium/Low) for each major finding

Progress Write Mandate: Before returning, update {plan_dir}/progress.md with your key findings and sources.
```

**After all researchers return:**
1. Orchestrator reads full reports (with 1M context, ~15-25K tokens for all reports is affordable)
2. Synthesizes into phase files, preserving key frameworks and techniques
3. Research reports stay on disk — implementation agents can pull specific sections on-demand
4. See `primary-workflow.md` → Step 1.5 for the synthesis protocol

#### On-Demand Context Scout

Before spawning the parallel research fork, run a lightweight context scout to find reusable patterns in existing course materials. This produces on-demand compressed context that is always current.

**When to use:** Before every new course's Phase 1 research fork — unless this is the first course in the repo.

**How it works:**
1. Spawn a single `Explore` agent (Content Scout):
   ```
   Scan courses/ for existing course materials. For each course found:
   - List deliverable files (slides, guides, handouts, activities)
   - Note content patterns (session structure, activity types, timing conventions)
   - Identify reusable templates or frameworks
   Output: compressed summary (< 500 tokens) of what exists and what patterns to follow.
   File ownership: {plan_dir}/research/context-scout-report.md
   ```
2. Feed the scout report into the parallel research fork — researchers can reference existing patterns
3. Scout report stays in research/ as reference for implementation agents

The context scout is NOT a substitute for the parallel research fork. It's a quick pre-scan that makes researchers more efficient by giving them existing context to build on.

---

## Agent Teams (Optional)

For multi-session parallel collaboration, activate the `/team` skill.
Not part of the default orchestration workflow. See `.claude/skills/team/SKILL.md` for templates, decision criteria, and spawn instructions.
