# Progress — Course Design v2 RPI Gap Fixes

Last updated: 2026-03-14 01:57 by orchestrator

## Session Intent
Close 6 remaining gaps between course-designer workflow and Dex's RPI context engineering principles. Pack before/after snapshots for comparison.

## Current Phase
Phase 1: Editing v2 files — Status: Complete

## Files Modified
- `plans/260314-0146-course-design-v2-rpi-gaps/course-designer-v2/CLAUDE.md`: Gap 1 (Progressive Disclosure block after Workflows list) + Gap 3 (context-first paragraph + 4-column subagent table replacing 3-column)
- `plans/260314-0146-course-design-v2-rpi-gaps/course-designer-v2/skills/course-designer/SKILL.md`: Gap 4 (Phase 0.5 Context Scout section before Phase 1) + Gap 7 (content snippets step 5 in Phase 2 + snippet reference in Phase 3 Facilitator Guide)
- `plans/260314-0146-course-design-v2-rpi-gaps/course-designer-v2/rules/intentional-compaction.md`: Gap 5 — replaced budget table with 5-zone table anchored at 40% Smart Zone; added "The 40% Rule" note; added "Trajectory Smell Checklist" section (Gap 6) with 5 smell patterns + 2 rules
- `plans/260314-0146-course-design-v2-rpi-gaps/course-designer-v2/rules/orchestration-protocol.md`: Gap 3 — added "Why subagents exist" framing (context isolation) before role table; Gap 4 — added "On-Demand Context Scout" section before Agent Teams
- `plans/260314-0146-course-design-v2-rpi-gaps/course-designer-v2/rules/primary-workflow.md`: Gap 5 — added [CONTEXT] markers after Step 1 and Step 2 [COMPACTION] markers with 40% threshold guidance
- `plans/260314-0146-course-design-v2-rpi-gaps/course-designer-v2/rules/development-rules.md`: Gap 7 — added "Content Snippets in Phase Files" section; updated context budget awareness bullet to 40% threshold

## Files Created
- `plans/260314-0146-course-design-v2-rpi-gaps/plan.md`: implementation plan
- `plans/260314-0146-course-design-v2-rpi-gaps/progress.md`: this file
- `.claude/skills/course-image-gen/SKILL.md`: DALL-E 3 image generation skill
- `.claude/skills/course-image-gen/scripts/generate.py`: generation script (single + batch via manifest)

## Decisions Made
- Dropped Gap 2 (complexity triage) — user wants full RPI for every course
- Snapshot strategy: before/ and after/ folders for diffing
- 6 files to edit in dependency order
- development-rules.md budget bullet updated to match new 40% threshold (consistency fix)

## Current State
All 6 v2 files edited and cross-checked. All 6 gaps confirmed present via grep verification. Implementation complete.

## Verification Results
- Gap 1 (Progressive Disclosure): ✅ CLAUDE.md
- Gap 3 (Context-first subagents): ✅ CLAUDE.md + orchestration-protocol.md
- Gap 4 (Context Scout): ✅ SKILL.md + orchestration-protocol.md
- Gap 5 (40% Smart Zone): ✅ intentional-compaction.md + primary-workflow.md
- Gap 6 (Trajectory Smells): ✅ intentional-compaction.md
- Gap 7 (Content Snippets): ✅ development-rules.md + SKILL.md

## Additional: course-image-gen Skill
- New skill created at `.claude/skills/course-image-gen/` (DALL-E 3)
- Wired into v2 SKILL.md Phase 3 as "Illustrations" step
- Wired into v2 CLAUDE.md Tool Selection Guide
- Supports: single image, batch via manifest, 5 style presets (professional, flat, watercolor, sketch, infographic)
- Requires: `OPENAI_API_KEY` in .env hierarchy

## Next Steps
1. User: set OPENAI_API_KEY in `.claude/skills/course-image-gen/.env` (rotate compromised key first!)
2. User review of v2 files
3. When ready: copy `course-designer-v2/` contents over `.claude/` and `CLAUDE.md` to activate
