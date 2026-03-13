# Plan: Course Design v2 — RPI Gap Fixes

**Status:** not-started
**Priority:** high
**Type:** workflow improvement
**Predecessor:** `plans/260314-0114-rpi-context-engineering-workflow/`

## Goal

Close 6 remaining gaps between our course-designer workflow and Dex Horthy's RPI/context engineering principles. Changes packed into `course-design-v2/` snapshot folder for before/after comparison.

## Output Strategy

Create a self-contained `course-designer-v2/` folder mirroring the original structure. User can copy this to a separate project root as a drop-in replacement. Originals stay untouched.

```
plans/260314-0146-course-design-v2-rpi-gaps/
├── plan.md                              # this file
├── progress.md                          # state persistence
└── course-designer-v2/
    ├── CLAUDE.md                        # slimmed, progressive disclosure
    ├── rules/
    │   ├── primary-workflow.md          # updated thresholds
    │   ├── orchestration-protocol.md    # context-control framing
    │   ├── intentional-compaction.md    # 40% boundary, trajectory smells
    │   └── development-rules.md        # content snippet requirement
    └── skills/
        └── course-designer/
            └── SKILL.md                 # context scout, content snippets
```

To use: copy `course-designer-v2/` contents over the project's `.claude/` and root `CLAUDE.md`.

## Gap Summary (6 items — Gap 2 dropped per user)

| # | Gap | Core Issue | Fix Target |
|---|-----|-----------|------------|
| 1 | CLAUDE.md is a context hog | All rules load into Smart Zone upfront | CLAUDE.md |
| 3 | Subagents as roles, not context controllers | Anthropomorphized role mapping | CLAUDE.md, orchestration-protocol.md |
| 4 | No on-demand compressed context | Static docs, no dynamic context scouting | orchestration-protocol.md, SKILL.md |
| 5 | Smart Zone budget starts too late (60%) | Should start at 40% per Dex | intentional-compaction.md |
| 6 | No mid-phase trajectory correction | Only between-phase checks | intentional-compaction.md |
| 7 | Plans lack content snippets | Phase files = instructions only, no examples | development-rules.md, SKILL.md |

## Implementation Phases

### Phase 1: Create v2 Folder Structure
- Create `course-designer-v2/` with mirrored directory layout
- Copy originals as starting point, then apply edits

### Phase 2: Apply Edits (in dependency order)

**2a. `intentional-compaction.md`** (Gaps 5, 6)
- Lower context budget thresholds: 40% = Smart Zone boundary
- Add "trajectory smell" checklist for mid-phase correction
- Add mid-phase restart guidance ("when to abandon and recompact")

**2b. `orchestration-protocol.md`** (Gaps 3, 4)
- Reframe "Agent Role Mapping" section: lead with context control purpose, roles are secondary
- Add "Context Scout" step: on-demand pre-research scan of existing courses/ for reusable patterns
- Update delegation context template to emphasize compressed return format

**2c. `CLAUDE.md`** (Gaps 1, 3)
- Slim the "Subagent Role Mapping" table: add context-control rationale column
- Add note: "Rules files are conditionally loaded — don't read all rules upfront"
- Add progressive disclosure note for skills references

**2d. `course-designer/SKILL.md`** (Gaps 4, 7)
- Add "Context Scout" before Phase 1 research fork: scan existing courses for reusable patterns
- Add content snippet requirement to Phase 2 (lesson plan must include sample content fragments)
- Add example content snippet in Phase 3 template

**2e. `primary-workflow.md`** (Gap 5)
- Update context budget references to match new 40% threshold
- Add trajectory smell cross-reference

**2f. `development-rules.md`** (Gap 7)
- Add "Content Snippets in Phase Files" section: phase files should include example content, not just instructions

### Phase 3: Verify & Cross-Check
- Verify all cross-file references are consistent within v2/
- Diff summary in progress.md

## Success Criteria

- All 6 gaps addressed with specific, testable changes
- `before/` and `after/` folders enable clean diffing
- No regression in existing RPI workflow functionality
- Cross-file references remain consistent
- Total new content added < 200 lines across all files (KISS)

## Risk Assessment

- **Over-engineering CLAUDE.md slimming** — Don't remove content that's needed. Just add progressive disclosure hints, don't restructure everything.
- **Threshold change (40%)** — May be too aggressive for course design (longer than code tasks). Note: this is guidance, not a hard wall.
