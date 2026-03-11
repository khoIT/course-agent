# Primary Workflow

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT**: Ensure token efficiency while maintaining high quality.

#### 0. Plan Creation (MANDATORY — Before Any Course Work)
**Every course MUST begin with a persistent plan on disk.** This ensures state survives context compaction and session boundaries.

1. **Create plan directory**: `plans/{YYMMDD}-{HHMM}-{course-slug}/` (e.g., `plans/260311-1505-customer-service-course-design/`)
2. **Use template**: Copy structure from `plans/templates/course-design-template.md` — adapt for the specific course
3. **Create plan.md**: Overview with YAML frontmatter (status, priority, tags), phase table, target learner summary
4. **Create 8 phase files**: `phase-01-discovery-and-analysis.md` through `phase-08-quality-evaluation.md`
   - Each phase file has: Status, Overview, Key Insights, Requirements, Todo checkboxes, Success Criteria
5. **Update phase status as work progresses**: After completing each ADDIE phase, update the phase file's status field and check off todo items
6. **Plan is the single source of truth**: Any new session or context window reads plan files to resume exactly where work left off

**Rule:** Never rely solely on TodoWrite for course production state. TodoWrite is session-scoped; plan files persist on disk.

#### 1. Research & Discovery (Web Search MANDATORY)
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
- When in planning phase, use multiple `researcher` agents in parallel to cover different research angles
- Report all research findings into the plan's `research/` directory and phase files
- **[IMPORTANT]** Always cite sources and verify accuracy of researched content

#### 2. Course Content Creation
- Activate `course-designer` skill to drive the ADDIE workflow
- Follow the learner-centered methodology from `./course-designer/references/course-design-methodology.md`
- **Follow the plan**: Work through phases in order, updating phase file status as each completes
- **DO NOT** create duplicate enhanced files — update existing files directly.
- **[IMPORTANT]** After creating or modifying content files, review for accuracy and consistency.
- **[IMPORTANT]** Use `WebSearch` to fact-check key claims during content writing — not just during research phase.

#### 3. Material Generation
- Based on the approved lesson plan, generate all required materials:
  - **Slides** → Use `pptx` skill. Follow the 4 design principles (KISS, Easy to Understand, Easy to Remember, Dynamic)
  - **Facilitator Guide** → Markdown (.md). Include speaker notes, timing, transition cues
  - **Learner Handout** → Markdown (.md). Standalone-usable summary + worksheets
  - **Activities** → Design using REAL criteria. Include complete step-by-step procedures and all materials
  - **Assessments** → Align with learning objectives. Include rubrics if applicable
  - **Illustrations** → Use `canvas-design` skill for infographics, diagrams, poster visuals
- For each material, ensure it traces back to the learner portrait and learning objectives.
- **Use `WebSearch`** when generating content that references specific tools, platforms, or techniques — verify current accuracy.

#### 4. Quality Evaluation
- After generating materials, run the **19-criterion self-evaluation** from `./course-designer/references/evaluation-criteria.md`
- Rate each criterion: Pass / Needs Improvement / Not Addressed
- For any criterion rated NI or NA, revise the materials and re-evaluate
- Use `design-critique` skill to review visual quality of slides and visuals
- **DO NOT** skip evaluation just to mark tasks complete.
- **IMPORTANT:** Always fix quality issues following evaluation recommendations. Only finalize when all 19 criteria pass.
- **Update plan**: Mark `phase-08-quality-evaluation.md` with results and final status.

#### 5. Integration & Consistency
- Always follow the plan — the plan.md + phase files are the authoritative reference
- Ensure seamless consistency across all course materials (slides match handouts match facilitator guide)
- Verify learning objectives thread through all materials
- Maintain consistent branding, terminology, and visual style
- Delegate to `docs-manager` agent to update docs in `./docs` directory if any.
- **Update plan**: Set plan.md status to `completed` when all phases pass evaluation.

#### 6. Revision & Debugging
- When a user reports issues with course materials (factual errors, unclear content, missing activities):
  - Review the specific materials against the lesson plan and objectives
  - Identify root cause (content gap, sequencing issue, activity mismatch)
  - **Use `WebSearch`** to verify corrected content is factually accurate
  - Implement the fix in the actual material files
  - Re-run the 19-criterion evaluation on affected materials
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
