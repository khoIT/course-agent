# Content Creation Rules

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You ALWAYS follow these principles: **YAGNI (You Aren't Gonna Need It) - KISS (Keep It Simple, Stupid) - DRY (Don't Repeat Yourself)**

## Plan-First Principle
- **Every course production MUST have a persistent plan on disk** in `./plans/{YYMMDD}-{HHMM}-{course-slug}/`
- Use the template at `plans/templates/course-design-template.md` for new courses
- Update phase file status and checkboxes as work progresses — this is the primary state persistence mechanism
- Never rely solely on TodoWrite for tracking course production progress

## Research & Fact-Checking
- **Use `WebSearch` tool** (Claude's default) for all subject matter research — do not skip this step
- Verify factual claims, statistics, and tool/platform references before including in any course material
- Use `WebSearch` during content generation, not only during the initial research phase
- Use browser tools (Claude in Chrome) for visual reference collection and complex page browsing
- Document research sources in the plan's `research/` directory

## General
- **File Naming**: Use kebab-case for file names with a meaningful name that describes the purpose of the file. Long file names are fine — they ensure LLMs can understand the purpose via Grep/Glob without reading contents.
  ```
  Examples:
    Good: session-02-handling-difficult-customers-roleplay.md
    Good: 05-activities/activity-03-empathy-mapping-exercise.md
    Bad:  s2-act.md (cryptic, no context for LLM tools)
    Bad:  session2.md (no description of content)
  ```
- **File Size Management**: Keep individual content files under 200 lines for optimal context management
  - Split large course materials into per-session or per-topic modules
  - Separate activities into individual files
  - Extract reusable templates into shared reference files
  - Keep facilitator notes separate from learner-facing content
- When looking for reference materials, use `WebSearch` tool first, then browse with Chrome tools for visual references.
- Use `canvas-design` skill for creating illustrations, infographics, and visual aids
- Use `pptx` skill for all slide deck creation and editing
- **All text-based course materials MUST be Markdown (.md)** — facilitator guides, handouts, activities, assessments. Never generate .docx files (unreliable rendering). Only slides use .pptx.
- Use `pdf` skill for PDF extraction and generation
- Use browser tools (Claude in Chrome) for:
  - Researching subject matter content online
  - Taking screenshots of reference designs, layouts, or visual examples
  - Capturing web content that can inspire course visuals
- **[IMPORTANT]** Follow the content standards and design guidelines in `./docs` during creation.
- **[IMPORTANT]** Do not just outline or mock course materials — always generate the real, complete content.

## Content Quality Guidelines
- Read and follow content standards and design guidelines in `./docs`
- **Ensure all course materials are factually accurate** — research and verify claims
- Prioritize learner engagement and clarity over academic completeness
- Apply the four slide design principles: Easy to Read (KISS), Easy to Understand, Easy to Remember, Dynamic
- Every activity must meet REAL criteria: Relevant, Engaging, Active, Learner-centered
- Use the `course-designer` skill's self-evaluation workflow after every major deliverable
- Use `design-critique` skill to review visual quality of slides and materials

## Subagent Usage in Content Creation
- **Content writing tasks** → delegate to `fullstack-developer` agent (framed as Content Developer)
- **Review tasks** → delegate to `code-reviewer` agent (framed as Content Reviewer)
- **Quality checks** → delegate to `tester` agent (framed as Quality Evaluator against 19-criterion checklist)
- **Research tasks** → delegate to `researcher` agent (framed as Subject Matter Researcher with WebSearch mandate)
- **Debugging content issues** → delegate to `debugger` agent (framed as Content Debugger for root cause analysis)
- **Visual design** → delegate to `ui-ux-designer` agent (framed as Visual Designer for slides, infographics)
- Always frame agent prompts in course design language — see `CLAUDE.md` → "Subagent Role Mapping"
- Include file ownership boundaries when spawning parallel content agents to avoid conflicts

<example title="Delegating content writing to fullstack-developer agent">
Prompt: "Write the facilitator guide for Session 2: Handling Difficult Customers.
Role: Content Developer. File ownership: courses/customer-service/03-facilitator-guide-session-02.md
Requirements: timing table, speaker scripts, ≥2 troubleshooting scenarios, transition cues.
Reference: courses/customer-service/01-lesson-plan.md (Session 2 section)
Methodology: .claude/skills/course-designer/references/methodology-development.md"
</example>

## Intentional Compaction (State Persistence)

All course production work MUST follow the Intentional Compaction Protocol defined in `.claude/rules/intentional-compaction.md`. Key rules for content creation:

- **Every course has a `progress.md`** in its plan directory — update it at every phase boundary
- **Write before large operations** — Before generating slides, guides, activities, or running evaluation, checkpoint current state to `progress.md`
- **Subagents must write** — Every delegated content creation agent updates `progress.md` before returning results. Include the Progress Write Mandate in all delegation prompts.
- **Rehydrate on resume** — When continuing work after a break or compaction, read `progress.md` → `plan.md` → active phase file before doing anything
- **Artifact trail is critical** — Always list files modified/created explicitly in `progress.md`. File tracking is the weakest dimension in auto-compaction summaries (2.2/5.0 quality).
- **Context budget awareness** — At 70%+ context utilization, write a mandatory checkpoint. At 80%+, delegate remaining work to subagents. See `intentional-compaction.md` for full thresholds.

## Pre-commit/Push Rules
- Run quality check (19-criterion evaluation) before finalizing deliverables
- Review all materials for consistency before pushing
- Keep commits focused on the actual content changes
- **DO NOT** commit and push any confidential information (such as dotenv files, API keys, credentials, etc.) to git repository!
- Create clean, professional commit messages without AI references. Use conventional commit format.

## Content Implementation
- Write clear, engaging, and pedagogically sound content
- Follow the ADDIE methodology established in `course-designer` skill
- Create materials according to the approved lesson plan
- Handle diverse learner needs (visual, auditory, kinesthetic)
- **DO NOT** create duplicate enhanced files — update existing files directly.

## Visual Aids & Illustrations
- Use `canvas-design` skill for creating custom illustrations, infographics, and poster visuals
- Use `algorithmic-art` skill for decorative backgrounds and abstract section dividers
- Use Mermaid diagrams for flowcharts, process flows, and concept maps
- Use browser screenshot tools to capture reference images and visual inspiration
- Use `/preview --diagram` for architecture and content flow visualization
- Use `/preview --slides` for step-by-step walkthroughs and presentations
- Use `/preview --ascii` for terminal-friendly diagrams
- **Plan context:** Active plan determined from `## Plan Context` in hook injection; visuals save to `{plan_dir}/visuals/`
- If no active plan, fallback to `plans/visuals/` directory
- For Mermaid diagrams, use `/mermaidjs-v11` skill for v11 syntax rules
- See `primary-workflow.md` → Step 6 for workflow integration
