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

---

## Agent Teams (Optional)

For multi-session parallel collaboration, activate the `/team` skill.
Not part of the default orchestration workflow. See `.claude/skills/team/SKILL.md` for templates, decision criteria, and spawn instructions.
