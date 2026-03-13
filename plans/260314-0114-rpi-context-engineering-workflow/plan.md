# Plan: RPI Context Engineering Workflow

**Status:** completed
**Priority:** high
**Type:** workflow improvement (not course production)

## Goal

Implement Dex Horthy's Research → Plan → Implement (RPI) pattern into `.claude` workflow files. Core change: **research becomes parallel forked subagents that compress findings into artifacts; the plan becomes the compression-of-intent firewall between research noise and implementation clarity.**

## Key Design Decisions

1. **Parallel research fork, not sequential** — spawn 3-5 researchers simultaneously, each with fresh context + focused lens
2. **Plan = compression artifact** — plan.md synthesizes all research. Implementation agents get ONLY the plan, never raw research
3. **Plan approval gate** — user reviews plan before material generation starts
4. **Two-layer evidence** — plan carries decisions (intent); research/ keeps full reports (truth) as on-demand fallback
5. **Phase TL;DR headers** — every phase file gets a 50-token summary for cheap rehydration
6. **Compression priority matrix** — explicit rules for what to keep vs discard during compaction

## Files to Modify

| File | Change |
|------|--------|
| `.claude/rules/primary-workflow.md` | Rewrite Step 1 as parallel fork. Add Step 1.5 (compression). Add plan approval gate between Step 2→3. |
| `.claude/rules/orchestration-protocol.md` | Add parallel research spawn template with 5 researcher roles. |
| `.claude/skills/course-designer/SKILL.md` | Update Phase 1 (Analysis) to use fork pattern. Add approval gate after Phase 2. |
| `.claude/rules/intentional-compaction.md` | Add compression priority matrix. Add TL;DR header requirement. Add truth-vs-intent distinction in progress.md. |
| `.claude/rules/development-rules.md` | Add phase TL;DR requirement to phase file standards. |

## Implementation Order

1. `primary-workflow.md` — the backbone; everything else references it
2. `orchestration-protocol.md` — the parallel spawn template
3. `course-designer/SKILL.md` — skill-level integration
4. `intentional-compaction.md` — compression rules
5. `development-rules.md` — phase file standards
6. Cross-file consistency check

## Success Criteria

- Step 1 clearly describes parallel research fork with defined roles
- Step 1.5 exists as explicit research → plan compression step
- Hard gate between plan completion and material generation
- Compression matrix exists and is referenced from progress.md format
- All files cross-reference consistently (no orphaned instructions)
