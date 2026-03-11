# Course Design Plan Template

> Use this template when creating a new course. Copy the entire `plans/templates/course-design/` folder structure.

## plan.md Template

```markdown
---
title: "Course Design — {Course Title}"
description: "{One-sentence course description}"
status: pending  # pending | in-progress | completed
priority: P1
effort: {estimated hours}
tags: [course-design, {topic tags}]
created: {YYYY-MM-DD}
---

# Course Design Plan — {Course Title}

## Overview
{Brief description of what this course accomplishes, who it's for, and why it matters.}

## Target Learner Summary
- {Primary audience description}
- {Prior knowledge level}
- {Learning style preferences}
- {Delivery format and constraints}

## Discovery Interview Parameters
- **Learners:** {target audience}
- **Outcome:** {use / create / both}
- **Duration:** {sessions × duration}
- **Delivery:** {in-person / virtual / hybrid}
- **Language:** {language}
- **Deliverables:** {full package / slides only / etc.}

## Phases

| # | Phase | Status | Output | Link |
|---|-------|--------|--------|------|
| 1 | Discovery & Analysis | ☐ Pending | Learner portrait (KSA) | [phase-01](./phase-01-discovery-and-analysis.md) |
| 2 | Learning Objectives | ☐ Pending | Objectives per session | [phase-02](./phase-02-learning-objectives.md) |
| 3 | Content Structure | ☐ Pending | Priority matrix + sequencing | [phase-03](./phase-03-content-structure.md) |
| 4 | Lesson Plan | ☐ Pending | Minute-by-minute plan | [phase-04](./phase-04-lesson-plan.md) |
| 5 | Slide Development | ☐ Pending | Slide deck (.pptx) | [phase-05](./phase-05-slide-development.md) |
| 6 | Activity Design | ☐ Pending | Activities with worksheets | [phase-06](./phase-06-activity-design.md) |
| 7 | Materials Production | ☐ Pending | Guide + handout + assessments | [phase-07](./phase-07-materials-production.md) |
| 8 | Quality Evaluation | ☐ Pending | 19-criterion evaluation | [phase-08](./phase-08-quality-evaluation.md) |

## Key Dependencies
- `course-designer` skill for ADDIE methodology
- `pptx` skill for slide generation
- 19-criterion evaluation checklist

## Course Output Location
`courses/{course-slug}/`
```

---

## Phase File Templates

### Phase 1: Discovery & Analysis
```markdown
# Phase 1: Discovery & Analysis
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** —

## Overview
Conduct discovery interview. Build learner portrait with KSA profiling.

## Research Tasks
- [ ] Web search: existing courses/training on {topic}
- [ ] Web search: best practices for teaching {topic} to {audience}
- [ ] Review uploaded source materials (if any)
- [ ] Capture visual references for slide design inspiration

## Discovery Interview Rounds
- Round 1: Who are the learners? What's the desired outcome?
- Round 2: Prior knowledge level? Delivery format?
- Round 3: Specific constraints? Language? Deliverables?

## Output
- Learner Portrait (KSA + learning styles + conditions)
- Target file: `courses/{slug}/00-course-overview.md`

## Todo
- [ ] Conduct discovery interview
- [ ] Research subject matter online (web search)
- [ ] Build KSA profile
- [ ] Identify learning styles
- [ ] Document learning conditions
- [ ] Get user confirmation on learner portrait

## Success Criteria
- Criteria 1: Target learners clearly identified
- Criteria 2: KSA profile comprehensive
```

### Phase 2: Learning Objectives
```markdown
# Phase 2: Learning Objectives
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** Phase 1

## Overview
Design learning objectives using Bloom's 3-level taxonomy.

## Objective Formula
Action Verb + Standard/Criteria + Condition

## Bloom's Levels for This Course
- Level 1 (Understand): {which sessions}
- Level 2 (Apply): {which sessions}
- Level 3 (Create/Evaluate): {which sessions}

## Output
- Objectives list in `courses/{slug}/00-course-overview.md`

## Todo
- [ ] Draft objectives per session
- [ ] Map to Bloom's levels
- [ ] Verify alignment with KSA gaps
- [ ] Get user confirmation

## Success Criteria
- Criteria 3: All objectives learner-centered
- Criteria 4: Types/levels match learner needs
- Criteria 5: Measurable with clear standards
```

### Phase 3: Content Structure
```markdown
# Phase 3: Content Structure
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** Phase 2

## Overview
Select, prioritize, and sequence content with WHY-WHAT-HOW-SO WHAT.

## Research Tasks
- [ ] Web search: core concepts of {topic} for {audience level}
- [ ] Web search: common misconceptions about {topic}
- [ ] Identify real-world examples and case studies

## Content Priority
| Category | Items |
|----------|-------|
| Must Have | {list} |
| Should Have | {list} |
| Nice to Have | {list} |

## Output
- Content structure in `courses/{slug}/00-course-overview.md`

## Todo
- [ ] Categorize topics: Must/Should/Nice to Have
- [ ] Map WHY-WHAT-HOW-SO WHAT per session
- [ ] Sequence: simple→complex
- [ ] Verify no content overload

## Success Criteria
- Criteria 6: Content focused on essentials
- Criteria 7: Logical WHY-WHAT-HOW-SO WHAT sequencing
```

### Phase 4: Lesson Plan
```markdown
# Phase 4: Lesson Plan
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** Phase 3

## Overview
Build minute-by-minute lesson plan with delivery approaches and resources.

## Output
- `courses/{slug}/01-lesson-plan.md`

## Todo
- [ ] Design timing table per session (5-min granularity)
- [ ] Specify delivery approach per content block (inductive/deductive)
- [ ] Identify resources per block (slides, handouts, tools)
- [ ] Add discussion questions
- [ ] Verify theory:practice ratio

## Success Criteria
- Criteria 8: Clear delivery approach per section
- Criteria 9: All supporting resources listed
- Criteria 10: Time allocation realistic
```

### Phase 5: Slide Development
```markdown
# Phase 5: Slide Development
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** Phase 4

## Research Tasks
- [ ] Web search: slide design best practices for {topic} presentations
- [ ] Browse visual references for layout inspiration

## Design Decisions
- Color palette: {palette name and hex codes}
- Font: {header font} + {body font}
- Layout strategy: {dark/light sandwich, etc.}

## Output
- `courses/{slug}/02-slides.pptx`

## Todo
- [ ] Define color palette and fonts
- [ ] Generate slides per session using pptx skill
- [ ] Visual QA: convert to images, inspect
- [ ] Fix issues and re-verify

## Success Criteria
- Criteria 11: Slide Master consistent
- Criteria 12: 4 design principles applied (KISS, Understand, Remember, Dynamic)
- Criteria 13: Visually rich, no text-only slides
```

### Phase 6: Activity Design
```markdown
# Phase 6: Activity Design
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** Phase 4

## Research Tasks
- [ ] Web search: effective {topic} learning activities for {audience}
- [ ] Web search: online/virtual activity formats that work

## Activities Planned
| # | Activity | Type | Duration | Session |
|---|----------|------|----------|---------|
| 1 | {name} | {type} | {min} | {#} |

## Output
- `courses/{slug}/05-activities/activity-01-*.md` through `activity-{N}-*.md`

## Todo
- [ ] Design activity objectives linked to course objectives
- [ ] Write step-by-step procedures with timing
- [ ] Create worksheets and templates
- [ ] Add debrief connecting back to content
- [ ] Verify REAL criteria per activity

## Success Criteria
- Criteria 14-18: All activity criteria pass
```

### Phase 7: Materials Production
```markdown
# Phase 7: Materials Production
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** Phases 4, 5, 6

## Output
- Facilitator Guide: `courses/{slug}/03-facilitator-guide/`
- Learner Handout: `courses/{slug}/04-learner-handout/`
- Assessments: `courses/{slug}/06-assessments/`

## Todo
- [ ] Generate facilitator guide (per-session modules)
- [ ] Generate learner handout (standalone-usable)
- [ ] Create mini-quizzes per session
- [ ] Create end-of-course assessment
- [ ] Modularize files exceeding 200 lines
- [ ] Verify consistency across all materials

## Success Criteria
- All materials trace back to objectives
- Facilitator guide executable by any facilitator
- Handout usable as standalone reference
```

### Phase 8: Quality Evaluation
```markdown
# Phase 8: Quality Evaluation
**Status:** ☐ Pending | **Priority:** P1 | **Depends on:** All phases

## Overview
Run 19-criterion self-evaluation. Fix any NI/NA criteria. Repeat until 18/18 Pass.

## Todo
- [ ] Evaluate all 18 criteria with evidence
- [ ] Write evaluation report
- [ ] Fix any NI/NA criteria
- [ ] Re-evaluate after fixes
- [ ] Final verification: all 18 Pass

## Output
- `courses/{slug}/07-evaluation-report.md`

## Success Criteria
- 18/18 criteria rated Pass
- All materials consistent across deliverables
- No unresolved quality issues
```
