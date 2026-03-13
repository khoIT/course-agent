# Intentional Compaction Protocol

**Purpose:** Proactively write state to disk BEFORE auto-compaction hits, so agents can rehydrate from disk instead of relying on compressed in-memory summaries.

## Why This Matters

Claude Code's 200K context window is split into two zones:
- **Smart Zone (~40%):** System instructions, CLAUDE.md, MCP tools — high recall, always preserved
- **Working Zone (~60%):** Conversation turns, tool outputs, reasoning — subject to auto-compaction

When the Working Zone fills up, auto-compaction summarizes and discards content. **Critical state that only existed in-memory is lost.** Intentional compaction externalizes state to disk BEFORE this happens.

## progress.md — The Shared State File

Every course production plan directory MUST contain a `progress.md` file.

**Location:** `{plan_dir}/progress.md` (e.g., `plans/260314-customer-service-course-design/progress.md`)

### Format: Anchored Iterative Summary

```markdown
# Progress — {Course Name}

Last updated: {YYYY-MM-DD HH:MM} by {agent-role}

## Session Intent
Original goal: {preserved from first entry}

## Current Phase
Phase {N}: {name} — Status: {In Progress / Complete / Blocked}

## Files Modified
- {filepath}: {what changed}
- {filepath}: {what changed}

## Files Created
- {filepath}: {purpose}

## Decisions Made
- {decision}: {rationale}

## Key Findings
- {finding with source if applicable}

## Current State
{1-3 sentence summary of where things stand right now}

## Blockers / Risks
- {any blocking issues}

## Next Steps
1. {immediate next action}
2. {following action}
```

### Update Rules

1. **Merge, don't regenerate** — New entries merge INTO existing sections (append to Files Modified, update Current Phase, etc.)
2. **Keep concise** — Target <80 lines total. Sacrifice grammar for concision.
3. **Artifact trail is CRITICAL** — Files Modified/Created is the weakest compression dimension (2.2/5.0 quality). Be explicit about every file touched.

## When to Write progress.md

### Mandatory Write Points (Non-Negotiable)

| Trigger | Who Writes | What to Include |
|---------|-----------|-----------------|
| **Phase completion** | Lead agent | Phase status change, files created, key decisions |
| **Subagent task completion** | Subagent (before returning) | Files modified/created, findings, decisions made |
| **Before large operations** | Current agent | Current state snapshot (safety net before potential compaction) |
| **After research phase** | Researcher agent | Key findings, sources, recommendations |
| **After material generation** | Content developer | Files created, cross-references, consistency notes |
| **After quality evaluation** | Quality evaluator | Scores, issues found, recommendations |

### Recommended Write Points

| Trigger | Rationale |
|---------|-----------|
| Every 3-5 tool calls during content writing | Prevents loss of accumulated work context |
| After receiving user feedback | Captures direction changes |
| When switching between course materials | Checkpoint before context shift |

## Rehydration Protocol

When starting a new session OR after auto-compaction, agents MUST follow this sequence:

```
Step 1: Read {plan_dir}/progress.md     → Current state + what happened
Step 2: Read {plan_dir}/plan.md          → Overall plan + phase statuses
Step 3: Read active phase file(s)        → Detailed requirements for current work
Step 4: Resume from "Next Steps" in progress.md
```

**Rule:** NEVER start working without reading progress.md first. If it doesn't exist, create it immediately with initial state.

## Subagent Progress Protocol

When spawning subagents, the orchestrator MUST include in the delegation prompt:

```
Progress file: {plan_dir}/progress.md
MANDATORY: Before returning results, append your findings to progress.md using the Anchored Iterative Summary format.
Include: files modified/created, key decisions, findings, and recommended next steps.
```

Subagent writes follow the merge rule — append to existing sections, don't overwrite.

## Phase File TL;DR Requirement (Mandatory)

Every phase file (`phase-XX-*.md`) MUST begin with a `## TL;DR (50 tokens)` header immediately after the title. This enables cheap rehydration — agents can read just the TL;DR headers (~250 tokens for 5 phases) instead of loading full phase files (~5K+ tokens).

```markdown
# Phase 02: Learning Objectives

## TL;DR (50 tokens)
3 terminal objectives for junior CS agents (6-18mo). Focus: HEARD framework, emotional triggers, escalation protocol. Bloom's: Apply level. Assessment: role-play rubric.

## Full Content Below...
```

**Rule:** TL;DR is written AFTER phase content is complete — it compresses the final state, not a placeholder.
**Rule:** Update TL;DR whenever phase content changes significantly.

## Compression Priority Matrix

When compacting state (writing progress.md, delegating to subagents, or preparing context for implementation agents), prioritize information retention in this order:

| Priority | Category | Examples | Compress To |
|----------|----------|----------|-------------|
| **CRITICAL** | Learner portrait, learning objectives, approval decisions | KSA profile, terminal objectives, user sign-offs | Keep verbatim in progress.md |
| **HIGH** | Lesson plan structure, activity designs, key research findings | Session flow, timing, activity procedures, cited evidence | Compress to structured summary |
| **MEDIUM** | Content drafts, facilitator notes, assessment rubrics | Guide text, handout content, scoring criteria | Reference by filepath only |
| **LOW** | Research journey, brainstorm threads, alternative approaches | Discarded ideas, search queries, exploration paths | Omit — stays in research/ as fallback |
| **DISPOSABLE** | Raw tool output, build logs, intermediate calculations | WebSearch results, file listings, token counts | Never persist |

**Two types of compression:**
- **Compression of Truth** (research → reports): Compress evidence with sources. Used in `research/*.md` files. Researchers write these.
- **Compression of Intent** (reports → plan): Compress decisions with rationale. Used in phase files + progress.md. Planner/orchestrator writes these.

**Rule:** Never mix truth and intent in the same artifact. Research reports carry truth (findings + sources). Phase files carry intent (decisions + rationale). progress.md carries current state (what happened + what's next).

## Context Budget Awareness

**The 40% Rule (Dex Horthy):** LLM output quality degrades as context fills. Around 40% utilization, diminishing returns begin — especially for complex creative tasks like course design. Below 40% is the **Smart Zone** where the model produces its best work. Structure your workflow to stay in the Smart Zone: delegate context-expensive operations (research, file scanning, material generation) to subagents with fresh context windows.

| Context Utilization | Zone | Action |
|--------------------|------|--------|
| < 40% | **Smart Zone** | Work freely. Write progress.md at phase boundaries. |
| 40-60% | **Caution Zone** | Prefer delegating to subagents over doing work in-context. Write progress.md checkpoint. Evaluate complexity of remaining work. |
| 60-70% | **Dumb Zone Entry** | **Mandatory progress.md write.** Delegate ALL remaining work to subagents. Do not start new complex reasoning tasks. |
| 70-80% | **Dumb Zone** | Write progress.md immediately. Wrap up current micro-task only. Everything else → subagent. |
| > 80% | **Emergency** | Emergency write to progress.md. Stop all work. Let compaction happen. Rehydrate after. |

## Trajectory Smell Checklist

Mid-phase signs that the current approach isn't working and you should compact + restart:

| Smell | What It Looks Like | Action |
|-------|-------------------|--------|
| **Correction spiral** | User has corrected the same issue 2+ times in this context window | Stop. Write progress.md with what's failing and why. Start fresh context with explicit "do NOT do X" guidance. |
| **Scope creep accumulation** | Original task was "write facilitator guide" but you're now debugging slide formatting | Checkpoint progress.md. Return to the task scope. Defer tangential work to a separate session. |
| **Research re-reading** | You're re-reading files you already read earlier in this context | You've lost track. Compact: write what you learned to progress.md, start fresh. |
| **Diminishing edit quality** | Edits are getting less precise — adding filler, repeating patterns, losing voice consistency | You're in the Dumb Zone. Checkpoint and delegate remaining work to a subagent with fresh context. |
| **Contradictory decisions** | You made a design decision earlier that conflicts with what you're doing now | Stop. Review progress.md § Decisions Made. Resolve the contradiction explicitly before continuing. |

**Rule:** When 2+ smells are present simultaneously, mandatory compaction. Write progress.md, start a new context window, and rehydrate from disk.

**Rule:** Never "yell at the model" — if correcting the same issue repeatedly, the trajectory is poisoned. A fresh context with clear anti-instructions ("do NOT do X because Y") works better than escalating corrections in a polluted context.

## Anti-Patterns

- ❌ Relying solely on TodoWrite (session-scoped, lost on compaction)
- ❌ Keeping all state in conversation memory only
- ❌ Writing progress.md only at the very end
- ❌ Regenerating progress.md from scratch instead of merging
- ❌ Subagents returning results without updating progress.md
- ❌ Starting work after compaction without reading progress.md first
