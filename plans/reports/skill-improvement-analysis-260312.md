# Course-Designer Skill Improvement Analysis

**Date:** 2026-03-12
**Analyst:** Course Content Architect
**Scope:** Analyze `course-designer/SKILL.md` + 6 reference files against V2 course outputs to identify gaps that cause shallow or ineffective content generation.

---

## Executive Summary

The current skill produces structurally sound courses (16/19 Pass on V2 evaluation). However, reviewing actual V2 outputs reveals **7 systematic gaps** where the skill's instructions are too abstract, leading agents to generate content that is correct in shape but thin in substance. The facilitator guide, for example, covers only Session 1 in full detail — Sessions 2-5 get one-line summaries. Activity files have good procedures but miss facilitation nuance. The lesson plan is excellent in structure but the handout reads like a condensed version of the lesson plan rather than a standalone learner resource.

These aren't bugs — they're the predictable result of instructions that say *what* to include but not *how deep to go* or *what good looks like* at each depth level.

---

## Finding 1: Facilitator Guide Drops Off After Session 1

**Priority: HIGH**

### Evidence
`03-facilitator-guide.md` — Session 1 gets a full timing table, speaker scripts, technical notes, and 3 troubleshooting scenarios (lines 63-103). Sessions 2-5 each get exactly 4 lines: objective, emphasis point, and a separator. That's a 25:1 detail ratio between Session 1 and later sessions.

### Root Cause
The skill says:
> "Facilitator Guide (.md): Speaker notes, transitions, timing. Not a script."

This tells the agent *what categories* to include but not that **every session needs equal depth**. The agent front-loads effort on Session 1 (first encountered) and compresses the rest to save tokens.

### Proposed Skill Change
Add to `methodology-development.md` or SKILL.md Phase 3:

```
Facilitator Guide depth rule: Every session MUST have its own timing table,
speaker script suggestions for opening + key transitions, at least 2
troubleshooting scenarios, and technical setup notes. If the guide covers
N sessions, each session section should be roughly equal in length (±20%).
A facilitator guide where Session 1 is detailed but later sessions are
one-liners is a FAIL on Criterion 16 (Detailed Activity Procedures).
```

### Impact
Fixes the most visible quality gap. Instructors currently can't teach Sessions 2-5 from the facilitator guide alone — they have to cross-reference the lesson plan and activity files, which defeats the guide's purpose.

---

## Finding 2: Activities Lack Facilitator Micro-Actions

**Priority: HIGH**

### Evidence
`session-01-agent-task-identifier.md` has good structure (timing, worksheet, debrief questions). But the facilitator instructions are at the macro level: "Chia nhóm (1 phút) → Giải thích (2 phút) → Làm việc nhóm (10 phút)."

Missing: What does the facilitator DO during the 10-minute group work? When should they visit breakout rooms? What should they listen for? What's the 5-minute warning signal? What if a group finishes early or gets stuck?

`session-03-skillmd-creation-workshop.md` is better (has navigator/guide roles, validation steps) but still misses facilitator roaming guidance.

### Root Cause
The skill's REAL criteria (Relevant, Engaging, Active, Learner-centered) and the evaluation criteria (14-18) focus on activity design quality but don't specify **facilitator behavior during activities**. The methodology reference says "Step-by-step instructions, clear facilitator and learner actions at each step" but doesn't elaborate on what "facilitator actions during independent work time" means.

### Proposed Skill Change
Add a "Facilitator Micro-Actions" template to `methodology-development.md` Section 5.2:

```
Every activity procedure must include a "During Activity" section specifying:
- Facilitator roaming schedule (which breakout rooms, when)
- What to listen/watch for (common misconceptions, off-track signals)
- Intervention triggers ("If group hasn't started after 2 min, prompt with...")
- Early finisher instructions ("If done early, try the extension challenge...")
- Time-check announcements ("At 5 min remaining, say: ...")
```

### Impact
Transforms activities from "worksheets with timing" into truly facilitable experiences. Critical for instructors who are new to the material.

---

## Finding 3: Learner Handout Mirrors Lesson Plan Instead of Standing Alone

**Priority: MEDIUM-HIGH**

### Evidence
`04-learner-handout.md` follows the session structure (Session 1 → Session 2 → ... → Session 5) and includes key concepts, comparison tables, and a SKILL.md template. However, it reads like a condensed lesson plan rather than a **post-course reference tool**.

A standalone handout should be organized by **task** ("How do I create a skill?" "How do I choose the right platform?"), not by **session** ("What we covered in Session 3"). Learners don't think "I need Session 3 content" — they think "I need to create a SKILL.md right now."

### Root Cause
The skill says:
> "Learner Handout (.md): Standalone-usable post-course reference."

The word "standalone-usable" is there, but the skill doesn't explain *what makes a handout standalone* versus a session summary. Agents default to the session-by-session structure because that's how the lesson plan is organized.

### Proposed Skill Change
Add to SKILL.md Phase 3 or `methodology-development.md`:

```
Learner Handout design principle: Organize by TASK, not by SESSION.
After the course, learners won't remember "Session 3 covered X" — they'll
want "How do I do X?" Structure the handout as a quick-reference guide:
- Table of contents organized by task/action
- Each section: What → Why → Step-by-step → Common mistakes → Where to go deeper
- Include all templates, checklists, and decision trees inline (not by reference)
- Test: Can someone who missed the course use this handout to complete the key tasks?
```

### Impact
Converts the handout from a "nice course summary" into a genuinely useful job aid that extends learning beyond the classroom.

---

## Finding 4: Evaluation Report Uses 18 Criteria (Not 19) and Lacks Adversarial Rigor

**Priority: MEDIUM**

### Evidence
`07-evaluation-report.md` scores 16/18 Pass — but the skill was updated to 19 criteria (added Criterion 19: Accessibility & Inclusion). The evaluation report was generated before this update and doesn't assess accessibility at all. More concerning: the "Weaknesses Audit" section (which should precede scoring per the skill's adversarial protocol) is buried at the bottom as "Điểm Yếu" — after the scores, not before.

The adversarial audit found only 3 weaknesses, all relatively mild (color palette, sample data, adoption plan examples). The report doesn't probe harder questions like: "Would a learner with limited Vietnamese reading speed keep up with the 8-minute engagement rhythm?" or "Are the interactive HTML artifacts accessible to screen readers?"

### Root Cause
The skill says:
> "List ≥3 specific weaknesses first (adversarial audit)"

But "≥3" sets a low bar. The skill doesn't define what "adversarial" means concretely. Agents satisfy the letter (3 weaknesses) but not the spirit (genuine devil's advocacy).

### Proposed Skill Change
Strengthen the adversarial audit in SKILL.md Phase 4:

```
Adversarial Audit Protocol:
1. BEFORE scoring any criterion, write ≥5 weaknesses (not 3)
2. At least 2 weaknesses must challenge ASSUMPTIONS, not just execution
   (e.g., "The scaffolding assumes all learners start at the same level —
   what about mixed groups?")
3. At least 1 weakness must address ACCESSIBILITY for diverse learners
4. Weaknesses section MUST appear BEFORE the scoring table — this is the
   order of operations, not optional
5. For each Pass rating, state what would cause it to flip to NI
   (stress-test the evidence)
```

### Impact
Prevents "rubber-stamp" evaluations where 16/18 Pass looks good on paper but masks genuine weaknesses that only surface during delivery.

---

## Finding 5: No Guidance on Content Depth Calibration

**Priority: MEDIUM**

### Evidence
The V2 lesson plan is detailed and well-structured. But how does the agent decide that "3 khái niệm cốt lõi" needs "Mỗi khái niệm = 1 infographic slide + 1 ví dụ thực tế, Analogy xuyên suốt" (3 × 3min)? That calibration came from the human designer's instinct, not from the skill's instructions.

The skill references Bloom's levels and the WHY-WHAT-HOW-SO WHAT framework but doesn't say: "For a 60-minute session with non-technical learners, a WHAT section explaining 3 concepts should spend roughly 3 minutes per concept using inductive delivery." There's no depth-per-time guidance.

### Root Cause
The skill trusts the agent to calibrate depth based on context. This works when the orchestrating agent has strong instructional design intuition (as in V2). But when a subagent is delegated "generate activities for Session 3," it doesn't have that context and may over-explain or under-explain.

### Proposed Skill Change
Add a "Content Depth Calibration" section to `methodology-design.md`:

```
Content Depth Calibration Guide:
- For each content chunk, estimate: concepts × minutes-per-concept = section time
- Non-technical learners: ~3-4 min per new concept (with analogy + visual)
- Technical learners: ~2 min per concept (definition + example)
- Mixed groups: ~3 min per concept (visual + discussion prompt)
- Rule of thumb: If a WHAT section has >4 new concepts, split into 2 segments
  with a checkpoint between them
- Every explanation should include: 1 analogy/metaphor, 1 visual/infographic,
  1 concrete example from the learner's industry
- For virtual delivery: No lecture segment >8 minutes without an interaction point
```

### Impact
Makes the skill usable by delegated subagents who don't have the orchestrator's full context. Produces more consistent depth across different course topics.

---

## Finding 6: Slide Development Instructions Are Too Abstract

**Priority: MEDIUM**

### Evidence
The 4 slide design principles (KISS, Easy to Understand, Easy to Remember, Dynamic) are well-stated but lack **concrete specifications**. The V2 evaluation flagged that slides were "hơi thiên về cool tone" — but the skill's warm/cool ratio guidance ("Warm colors ≈ 30% of slide") is in the methodology reference, not prominently in the SKILL.md workflow.

More importantly, there's no guidance on:
- How many slides per session (V2 produced ~8-9 per 60-min session — is that right?)
- Slide-to-time ratio (is 1 slide per 7 minutes optimal for this audience?)
- What content goes on slides vs. spoken (the "iceberg principle")
- Font size minimums for virtual delivery (readability on shared screens)

### Root Cause
The skill defers to the `pptx` skill for slide creation, so it only provides design philosophy. But the `pptx` skill doesn't know instructional design — it knows PowerPoint mechanics. The gap between "design principle" and "slide spec" falls between the two skills.

### Proposed Skill Change
Add a "Slide Specification" section to `methodology-development.md`:

```
Slide Specifications for Course Materials:
- Target: 1 slide per 5-7 minutes of instruction (fewer = more discussion time)
- For 60-min sessions: 8-12 slides typical (excluding title/closing)
- Content rule: Slide shows the KEY POINT. Everything else is spoken.
  If you can remove text from a slide and the facilitator can still teach
  from it, the slide is good. If removing text makes the slide unusable,
  it has too much text.
- Virtual delivery: Minimum 24pt body text, 32pt headers (smaller is unreadable
  on shared screens)
- Color: 70% cool background, 30% warm for focal points. Every CTA slide
  uses warm accent color.
- Animation: Use only for progressive disclosure (reveal bullet by bullet).
  Never for decoration.
- Accessibility: Alt-text guidance for every image. No meaning by color alone.
```

### Impact
Bridges the gap between instructional design philosophy and technical slide production. Reduces the "cool tone only" problem that V2's evaluation flagged.

---

## Finding 7: No Explicit Consistency Cross-Check Protocol

**Priority: LOW-MEDIUM**

### Evidence
V2's materials are generally consistent, but there are small mismatches:
- The evaluation report references "facilitator guide (.docx)" — but the file was converted to .md
- The facilitator guide's Session 2 says "Skill Relay Race activity + Skill Selector decision tree" but doesn't specify the exact artifact file names
- Activity files reference "SKILL.md Builder artifact (HTML interactive)" without linking to the actual path in `08-interactive-artifacts/`

These are minor but accumulate into instructor confusion (which is exactly what prompted the INSTRUCTOR-START-HERE.md creation).

### Root Cause
The skill doesn't have a post-production consistency check. The 19-criterion evaluation assesses quality of individual components but not **cross-material consistency** (do file references match? do terminology choices align across materials?).

### Proposed Skill Change
Add a "Consistency Cross-Check" step after Phase 3 (Development) and before Phase 4 (Evaluation):

```
Post-Production Consistency Audit (run before evaluation):
1. Terminology: Same term for same concept across ALL files
   (e.g., don't call it "SKILL.md Builder" in one file and
   "Interactive Builder" in another)
2. File references: Every material reference (artifact name, file path,
   resource link) must resolve to an actual file in the course folder
3. Timing: Activity durations in lesson plan must match activity file headers
4. Objectives: Learning objective numbering/wording must be identical
   across course overview, lesson plan, facilitator guide, and assessments
5. Format compliance: No .docx references if the mandate is .md only
```

### Impact
Eliminates the class of errors that prompted the instructor's "I don't know where to start" feedback. Small investment, high trust-building return.

---

## Priority Matrix

| # | Finding | Priority | Effort | Impact on Output Quality |
|---|---------|----------|--------|-------------------------|
| 1 | Facilitator guide drops off | HIGH | Medium | Major — currently unusable for Sessions 2-5 |
| 2 | Activities lack facilitator micro-actions | HIGH | Medium | Major — facilitators can't run activities confidently |
| 3 | Handout mirrors lesson plan | MEDIUM-HIGH | Low | Moderate — handout not useful as job aid post-course |
| 4 | Evaluation lacks adversarial rigor | MEDIUM | Low | Moderate — prevents rubber-stamp evaluations |
| 5 | No depth calibration guidance | MEDIUM | Medium | Moderate — improves delegated agent consistency |
| 6 | Slide specs too abstract | MEDIUM | Low | Moderate — fixes recurring color/density issues |
| 7 | No consistency cross-check | LOW-MEDIUM | Low | Low-Moderate — eliminates reference mismatches |

---

## Recommended Implementation Order

1. **Quick wins (Findings 3, 4, 6, 7):** Low effort, can be added to SKILL.md and reference files in one pass
2. **Core improvements (Findings 1, 2):** Require expanding `methodology-development.md` with new templates
3. **Structural addition (Finding 5):** New section in `methodology-design.md` — benefits all future courses

---

## Unresolved Questions

1. Should the consistency cross-check (Finding 7) be a separate phase in the ADDIE workflow, or embedded within Phase 4 evaluation?
2. The depth calibration guide (Finding 5) uses rough heuristics. Should we create different calibration profiles for different delivery modes (in-person vs. virtual vs. self-paced)?
3. Finding 1 (facilitator guide depth) — should the guide be split into per-session files to enforce equal treatment, or kept as one file with a stronger template?
