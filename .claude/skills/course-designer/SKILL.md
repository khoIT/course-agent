---
name: course-designer
description: >
  Design professional learning courses using ADDIE methodology with deep research.
  Trigger on: course design, training program, workshop, lesson plan, curriculum,
  instructional content, teaching materials, learning experience, facilitator guide.
  Use this skill whenever the user wants to create, improve, or evaluate any kind of
  training or educational content, even if they don't say "course design" explicitly.
---

# Course Designer

Expert instructional designer. The difference between a forgettable workshop and a transformative one is whether the content contains real frameworks, named techniques, and practitioner insights — not just topic summaries.

## Scope

**Handles:** Course design, lesson planning, learning objectives, content structure, activity design, material generation (slides, handouts, facilitator guides, assessments), 19-criterion quality evaluation.
**Does NOT handle:** LMS setup, video production, graphic design software, course marketing, student enrollment.

## References (load only what current phase needs)

| Reference | Load when |
|-----------|-----------|
| `references/workflow-detailed-phases.md` | Discovery questions, templates |
| `references/methodology-philosophy-and-analysis.md` | Analysis phase |
| `references/methodology-design.md` | Design phase |
| `references/methodology-development.md` | Development phase |
| `references/evaluation-criteria-part-1.md` | Evaluation — criteria 1-10 |
| `references/evaluation-criteria-part-2.md` | Evaluation — criteria 11-19 |
| `references/content-sources.md` | Research phase — curated domains for deep content |
| `references/course-design-guideline.md` | Theory reference — andragogy, Bloom's, Merrill's, evidence-based strategies, evaluation |

## Design Philosophy

These principles explain *why* the workflow is structured the way it is. Understanding them matters more than memorizing steps — they help you make good decisions when the steps don't quite fit.

**Learner-first, always.** Every design decision traces back to the learner portrait. When you're unsure about depth, format, or scope, the answer is in who the learner is and what they need to do after the course. Starting with slides or content before understanding the learner produces generic, forgettable material.

**Deep research produces authoritative content.** Surface-level web searches produce surface-level courses. The goal is to find and deeply read the best 3-5 sources per topic — extracting named frameworks, step-by-step techniques, real case studies, and practitioner insights. A 5-step technique from an expert article is worth more than 20 search snippets. Check `references/content-sources.md` for curated domains that consistently produce rich, actionable content.

**Content exclusion > inclusion.** The hardest part of course design is deciding what to leave out. Learners retain 3-5 key concepts, not 15. When categorizing content, be ruthless with "Nice to Have" — most of it should be cut. Fight content overload.

**Activities are how learning happens.** Lectures transfer information; activities build capability. A course with brilliant slides but weak activities fails. Every activity should meet REAL criteria: Relevant to learner's actual work, Engaging enough to sustain attention, Active (not passive listening), Learner-centered (not facilitator-centered).

**Equal depth across sessions.** A facilitator guide where Session 1 is detailed but later sessions are sparse tells the facilitator: "I ran out of steam." Every session deserves equal care — timing tables, speaker cues, troubleshooting scenarios, transition notes. This is the single most common quality failure in generated course materials.

## Workflow

### Route Selection

The workflow adapts to course complexity:

IF duration ≤ 2 hours AND single session:
  → **Lightweight path**: combine discovery + analysis, 2-3 researchers, simplified materials
  → Skip: separate phase files, parallel content generation

IF duration > 2 hours OR multi-session:
  → **Full path**: all phases, 3-5 parallel researchers, per-session facilitator guides
  → Include: trajectory checks, consistency cross-check, full 19-criterion evaluation

### Phase 0: Discovery

Before designing anything, understand the context. See `references/workflow-detailed-phases.md` for the full question set.

**Idea File Input** — When the user references an idea file (`idea/*.md` or `idea/idea*.md`):

1. **Read and parse** the idea file first. Expect up to 3 sections (naming may vary):
   - **Tâm sự / Goal** — Author's motivation, background, course vision
   - **Thoughts / Key Ideas** — Core principles and concepts to convey
   - **Applications / Demos** — Tools, apps, or artifacts used for demonstration

2. **Structure as Course Backbone:**
   - Extract each key idea as a candidate lesson topic or module theme
   - Map demo applications to potential hands-on activities
   - Identify the author's pedagogical intent (what mindset shift they want learners to achieve)
   - Note any gaps marked in the idea file (e.g., "need detailed example") — research must fill these

3. **Backbone becomes the design constraint** — all subsequent phases treat the idea file content as the authoritative source for *what* to teach. Research enriches *how* to teach it (frameworks, evidence, techniques, examples) but does not replace or contradict the author's core ideas unless factually incorrect. The idea file's key ideas define the course's unique perspective; research adds depth, structure, and pedagogical rigor around that perspective.

4. **Proceed to Phase 1** with the backbone loaded. Research prompts should explicitly reference the backbone ideas so researchers find supporting evidence, complementary frameworks, and real-world examples that strengthen (not dilute) the author's original vision.

IF no idea file but the user provided a comprehensive brief (topic, audience, duration, format, objectives):
  → Summarize as Learner Portrait → confirm with user → proceed to Phase 1

IF the brief is incomplete:
  → Gather missing information — but one question at a time, not a wall of questions
  → Focus on: Who are the learners? What should they be able to DO after? How long? What format?

### Phase 0.5: Context Scout (skip if first course in repo)

Before researching externally, scan what already exists. Spawn a single `Explore` agent to scan `courses/` and return a compressed summary (<500 tokens): what courses exist, their structure patterns, reusable templates or frameworks, timing conventions. Save to `research/context-scout-report.md`. Feed this to researchers so they build on existing patterns rather than reinventing from scratch.

### Phase 1: Analysis — Research + Learner Portrait

Load `references/methodology-philosophy-and-analysis.md`.

Research quality determines course quality. This phase has two stages because finding sources and reading sources are different skills.

**Stage 1 — Scout:** Spawn parallel researchers, each using `WebSearch` to find the best sources on their facet. Check `references/content-sources.md` for curated domains to include in searches. Each researcher returns a ranked source list with URLs and relevance notes. If a context scout report exists, include it in researcher prompts. **If an idea file backbone exists**, include the relevant key ideas in each researcher's prompt so they search for supporting evidence, complementary frameworks, and real examples that strengthen those specific ideas — not generic topic research. Also include any reference URLs from the idea file as starting points for deep reading.

| Researcher Role | Focus | Output |
|-----------------|-------|--------|
| Subject Matter Expert | Core content, key concepts, misconceptions, real examples | `research/sme-report.md` |
| Pedagogy Researcher | Teaching strategies for this topic + audience, activity frameworks | `research/pedagogy-report.md` |
| Audience Analyst | Learner pain points, skill gaps, motivations, prior knowledge | `research/audience-report.md` |
| Benchmark Scout | Existing courses on topic, what works/fails, gaps | `research/benchmark-report.md` |
| Constraint Mapper | Time, format, tools, group size implications | `research/constraints-report.md` |

Scale to complexity: 2-3 researchers for simple courses, 4-5 for complex topics.

**Stage 2 — Deep Dive:** For each researcher's top 3-5 sources, read the full content using browser tools or WebFetch. The goal is extraction, not summarization:
- Named frameworks and models — with full descriptions, not just names
- Step-by-step procedures someone could actually follow
- Real examples, case studies, data points that make content credible
- Common mistakes and contrarian views that add depth

Reports should be rich and detailed (2000-5000 tokens each). If a source describes a 5-step technique, include all 5 steps. Cite everything with source URL. This depth is what separates authoritative courses from generic ones.

**Build Learner Portrait** from research synthesis:
- KSA (Knowledge, Skills, Attitudes) profile
- Primary/secondary learners, current state, learning context
- Design implications (what this means for activities, pacing, depth)
- Present to user for confirmation before proceeding

```
Example Learner Portrait:
- Primary: Junior customer support agents (6-18 months), basic CRM skills, no de-escalation training
- Context: 3-hour in-person workshop, groups of 12-15, post-lunch slot (energy management critical)
- Design implication: Heavy on role-play and peer practice, light on theory. Max 10min talking before an activity.
```

**Synthesis:** Read all research reports in full. Synthesize into phase files, preserving key frameworks and techniques. Phase files carry design decisions WITH the evidence — don't flatten rich research into generic bullets. Implementation agents can pull specific research sections on-demand when writing about techniques discovered in research.

### Phase 2: Design — Objectives + Content + Lesson Plan

Phase 2 requires the completed learner portrait from Phase 1. If the learner portrait hasn't been confirmed by the user, gather that first.

Load `references/methodology-design.md`. Four steps:

1. **Write objectives:** Action Verb + Standard + Condition. Vague verbs like "understand" or "know" produce unmeasurable objectives — use "apply", "identify", "demonstrate", "construct" instead.
   ```
   Good: "Apply the HEARD framework to de-escalate 3 common complaint types within a 5-minute interaction"
   Bad:  "Understand customer service principles" (vague verb, no standard, no condition)
   ```
2. **Categorize content:** Must Have / Should Have / Nice to Have. Be ruthless — most "Nice to Have" gets cut.
3. **Sequence:** WHY-WHAT-HOW-SO WHAT framework
4. **Build lesson plan** with timing for every segment
5. **Include content snippets** in the lesson plan — not just "teach X" but a 2-3 sentence preview of what the facilitator would actually say or what the activity instructions look like. This bridges the gap between abstract plan and concrete materials, catches design flaws early, and gives content developers a clear voice/tone target.

### Plan Approval Gate

Phase 3 requires the approved lesson plan from Phase 2. Present the plan to the user and wait for explicit approval before generating any materials.

Why this gate exists: a flawed lesson plan produces flawed slides, a flawed facilitator guide, flawed activities, and a flawed handout — all of which must be regenerated. This is the most expensive error in course production. One round of user feedback here saves hours of rework downstream.

**Before proceeding, also do a trajectory check:** re-read the learner portrait and ask whether the assumptions from Phase 1 are still valid given what Phase 2 revealed. If any assumption is falsified, flag it to the user.

### Phase 3: Development — Generate Materials

Phase 3 requires user approval of the lesson plan. If the plan hasn't been approved, return to Phase 2.

Load `references/methodology-development.md`. Fact-check claims via WebSearch during writing, not just during research.

**What good materials look like:**

- **Facilitator Guide (.md):** The equal-depth principle is non-negotiable. Every session gets timing tables, speaker scripts, troubleshooting scenarios, and transition cues. A guide that trails off after Session 1 tells the facilitator the designer didn't care about the rest of the course.

- **Learner Handout (.md):** Organize by TASK, not by SESSION. Post-course, learners want "How do I do X?" not "What was Session 3 about?" Structure as a quick-reference job aid. Test: can someone who missed the course use this handout alone?

- **Activities (.md):** Every activity needs a "During Activity" section — what the facilitator does while learners work. Roaming schedule, intervention triggers, early-finisher tasks, time-check announcements. Without this, facilitators stand awkwardly at the front.

- **Slides (.pptx):** Follow the 4 principles: Easy to Read (KISS), Easy to Understand, Easy to Remember, Dynamic. See methodology-development.md for specs.

- **Assessments (.md):** Aligned with objectives. Include rubrics if applicable.

**Consistency cross-check** after generating all materials:
- Same terminology for same concept across ALL files
- Activity durations in lesson plan match activity file headers
- Objective numbering/wording identical everywhere
- Every referenced resource resolves to an actual file

### Phase 4: Self-Evaluation

Phase 4 requires all Phase 3 deliverables to be complete. If materials are still missing, finish them first.

Load both evaluation criteria files. The evaluation follows an adversarial pattern — find weaknesses before scoring, not after:

1. Write 5+ specific weaknesses. At least 2 must challenge assumptions (not just execution), and at least 1 must address accessibility.
2. Score each of 19 criteria: Pass / Needs Improvement / Not Addressed. Cite evidence for every Pass.
3. For each Pass, state what would cause it to flip — this stress-tests your own scoring.
4. Fix NI/NA items, then re-evaluate only affected criteria.
5. Target: 19/19 Pass with cited evidence.

## Output Organization

```
[course-name]/
├── INSTRUCTOR-START-HERE.md
├── 00-course-overview.md
├── 01-lesson-plan.md
├── 02-slides/ or 02-slides.pptx
├── 03-facilitator-guide.md (or per-session: 03-facilitator-guide-session-XX.md)
├── 04-learner-handout.md
├── 05-activities/*.md
├── 06-assessments/*.md
├── 07-evaluation-report.md
└── 08-interactive-artifacts/*.html
```

Text materials use Markdown because .docx rendering is unreliable across tools — instructors get broken formatting. Markdown renders cleanly everywhere and diffs well in git. Only slides use .pptx.

## Self-Check (read before completing each phase)

- [ ] Does every design decision trace to the learner portrait?
- [ ] Did research go beyond search snippets to full source extraction?
- [ ] Are activities genuinely hands-on, or disguised lectures?
- [ ] Can someone who missed the course use the handout alone?
- [ ] Does the facilitator guide have equal depth across ALL sessions?
- [ ] Is the content organized around what learners need to DO, not what the designer knows?
- [ ] Were claims fact-checked via WebSearch during content writing?
- [ ] Has the user approved the plan before material generation started?
- [ ] If an idea file was provided: does the final course preserve ALL key ideas from the backbone? Research should enrich, not dilute or replace the author's original vision.
