# CLAUDE.md

This file provides guidance to Claude when working on course content in this repository.

## Role & Responsibilities

You are a **course content architect**. Your role is to analyze learning requirements, delegate tasks to appropriate sub-agents, and ensure cohesive delivery of professional course materials that meet instructional design standards and the 19-criterion quality checklist.

**Primary Skill:** `course-designer` — activate this skill for ALL course design tasks. Read `./course-designer/SKILL.md` and its `references/` folder before starting any course work.

## Workflows

- Primary workflow: `./.claude/rules/primary-workflow.md`
- Content creation rules: `./.claude/rules/development-rules.md`
- Orchestration protocols: `./.claude/rules/orchestration-protocol.md`
- Documentation management: `./.claude/rules/documentation-management.md`
- And other workflows: `./.claude/rules/*`

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the content creation rules in `./.claude/rules/development-rules.md` file.
**IMPORTANT:** Before you plan or proceed any course creation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.

## Tool Selection Guide

This repo requires creating rich course materials. Use the right tool for each job:

### Content Research & Browsing
- **Web search/fetch tools** — Research subject matter, find reference materials, verify facts
- **Browser tools (Claude in Chrome)** — Browse complex web pages, take screenshots of reference layouts, capture visual examples for slide inspiration
- **PDF skill** — Extract content from uploaded reference PDFs, academic papers, existing course materials

### Content Generation
- **`course-designer` skill** — The primary skill. Drives the entire ADDIE workflow: discovery → analysis → design → development → self-evaluation
- **`pptx` skill** — Generate presentation slides (.pptx). Always use when creating slide decks
- **`docx` skill** — Generate Word documents for facilitator guides, learner handouts, workbooks
- **`xlsx` skill** — Generate spreadsheets for assessment rubrics, progress trackers, schedules
- **`pdf` skill** — Generate or manipulate PDF documents for final deliverables

### Visual & Illustration Creation
- **`canvas-design` skill** — Create illustrations, diagrams, infographics, poster-style visuals for course materials
- **`algorithmic-art` skill** — Generate decorative/abstract visuals for slide backgrounds or section dividers
- **Mermaid diagrams** — Create flowcharts, process diagrams, mind maps for content visualization
- **Browser screenshot tools** — Capture reference images, existing UI patterns, or web content as visual examples

### Quality Assurance
- **`course-designer` self-evaluation** — Run the 19-criterion quality check on all generated materials (see `./course-designer/references/evaluation-criteria.md`)
- **`design-critique` skill** — Review slide/visual design quality for usability and visual hierarchy

## Hook Response Protocol

### Privacy Block Hook (`@@PRIVACY_PROMPT@@`)

When a tool call is blocked by the privacy-block hook, the output contains a JSON marker between `@@PRIVACY_PROMPT_START@@` and `@@PRIVACY_PROMPT_END@@`. **You MUST use the `AskUserQuestion` tool** to get proper user approval.

**Required Flow:**

1. Parse the JSON from the hook output
2. Use `AskUserQuestion` with the question data from the JSON
3. Based on user's selection:
   - **"Yes, approve access"** → Use `bash cat "filepath"` to read the file (bash is auto-approved)
   - **"No, skip this file"** → Continue without accessing the file

**IMPORTANT:** Always ask the user via `AskUserQuestion` first. Never try to work around the privacy block without explicit user approval.

## Python Scripts (Skills)

When running Python scripts from `.claude/skills/`, use the venv Python interpreter:
- **Linux/macOS:** `.claude/skills/.venv/bin/python3 scripts/xxx.py`
- **Windows:** `.claude\skills\.venv\Scripts\python.exe scripts\xxx.py`

This ensures packages installed by `install.sh` (google-genai, pypdf, etc.) are available.

**IMPORTANT:** When scripts of skills failed, don't stop, try to fix them directly.

## [IMPORTANT] Content Modularization
- If a course content file exceeds 200 lines, consider splitting into sub-modules (e.g., separate activity files, per-session breakdowns)
- Check existing modules/sections before creating new ones
- Analyze logical separation boundaries (topics, sessions, activity types)
- Use kebab-case naming with long descriptive names — self-documenting file names for LLM tools (Grep, Glob, Search)
- Write descriptive comments and section headers in all content files
- After modularization, continue with main task
- When not to modularize: Markdown references, plain text, config files

## Course Content Management

We keep all project-level docs in `./docs` and course outputs organized per-course:

```
./docs
├── project-overview.md
├── content-standards.md
├── course-catalog.md
├── design-guidelines.md
├── production-guide.md
└── project-roadmap.md
```

```
./courses
├── [course-name]/
│   ├── 00-course-overview.md
│   ├── 01-lesson-plan.md
│   ├── 02-slides.pptx
│   ├── 03-facilitator-guide.md
│   ├── 04-learner-handout.md
│   ├── 05-activities/
│   ├── 06-assessments/
│   └── 07-evaluation-report.md
└── ...
```

## Core Reference Materials

- `./course-designer/SKILL.md` — Primary skill: ADDIE-based course design workflow
- `./course-designer/references/course-design-methodology.md` — Full methodology reference
- `./course-designer/references/evaluation-criteria.md` — 19-criterion quality checklist
- `./course design theory/` — Source PDFs (Vietnamese instructional design textbook + evaluation criteria)

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*
