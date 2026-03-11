# Orchestration Protocol

## Delegation Context (MANDATORY)

When spawning subagents via Task tool, **ALWAYS** include in prompt:

1. **Work Context Path**: The git root of the PRIMARY files being worked on
2. **Reports Path**: `{work_context}/plans/reports/` for that project
3. **Plans Path**: `{work_context}/plans/` for that project
4. **Active Plan Path**: The specific plan directory for the current course (e.g., `{work_context}/plans/260311-leveraging-llm-agents-course-design/`)
5. **Course Designer Skill**: Reference `{work_context}/course-designer/SKILL.md` for methodology
6. **Web Search Mandate**: Instruct agents to use `WebSearch` tool for subject matter research and fact verification

**Example:**
```
Task prompt: "Research best practices for onboarding course design.
Work context: /path/to/course-repo
Reports: /path/to/course-repo/plans/reports/
Plans: /path/to/course-repo/plans/
Active plan: /path/to/course-repo/plans/260312-onboarding-course-design/
Skill: /path/to/course-repo/course-designer/SKILL.md
Research: Use WebSearch tool for all subject matter research and fact verification."
```

**Rule:** If CWD differs from work context (editing files in different project), use the **work context paths**, not CWD paths.

**Rule:** Every course production task MUST reference an active plan directory. If no plan exists yet, create one first using `plans/templates/course-design-template.md`.

**Rule:** Researcher agents MUST use `WebSearch` tool for subject matter discovery. Browser tools are supplementary for visual references only.

---

#### Sequential Chaining
Chain subagents when tasks have dependencies or require outputs from previous steps:
- **Research → Analysis → Design → Development → Evaluation**: Use for full course creation (ADDIE flow)
- **Discovery → Objectives → Content Outline → Lesson Plan**: Use for course planning phase
- **Slides → Activities → Handouts → Facilitator Guide**: Use for material production phase
- Each agent completes fully before the next begins
- Pass context and outputs between agents in the chain

#### Parallel Execution
Spawn multiple subagents simultaneously for independent tasks:
- **Subject Matter Research + Visual Reference Collection**: Different researchers on content vs. design
- **Slides + Handouts + Activity Materials**: When lesson plan is finalized and sections are independent
- **Multiple Course Modules**: Different agents working on isolated sessions/modules
- **Careful Coordination**: Ensure consistent terminology, branding, and style across parallel work
- **Merge Strategy**: Plan integration points and quality review before combining outputs

---

## Agent Teams (Optional)

For multi-session parallel collaboration, activate the `/team` skill.
Not part of the default orchestration workflow. See `.claude/skills/team/SKILL.md` for templates, decision criteria, and spawn instructions.
