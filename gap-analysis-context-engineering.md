# Gap Analysis: Context Engineering Framework vs Current .claude Workflow

**Date:** 2026-03-14
**Source:** Dex Horthy's talk (transcript) + web research on RPI, Ralph Loop, 12-Factor Agents
**Scope:** All files in `.claude/rules/`, `.claude/skills/`, and `CLAUDE.md`

---

## Dex Horthy's Framework — Key Principles (Extracted)

Think of the context window like a whiteboard in a meeting room. The **Smart Zone** (~40%) is the permanent header — always visible, always readable. The **Dumb Zone** (40–80%+) is the area that gets erased and rewritten as the meeting goes on. Horthy's entire framework is about never writing anything important on the erasable part without a backup on paper (disk).

| # | Principle | One-Liner |
|---|-----------|-----------|
| 1 | **Smart Zone / Dumb Zone** | Performance degrades past ~40% context utilization. Keep working content lean. |
| 2 | **RPI (Research → Plan → Implement)** | Each phase gets a fresh context window. Compress output into markdown artifacts between phases. |
| 3 | **Frequent Intentional Compaction** | Don't wait for auto-compaction. Proactively write state to disk at intervals, not just boundaries. |
| 4 | **Sub-agents = Context Isolation** | Sub-agents exist to control context, not to anthropomorphize roles. Fork → compress → return. |
| 5 | **Compression of Truth vs Intent** | Research compresses *truth* (evidence). Plans compress *intent* (decisions). Don't mix them. |
| 6 | **Mental Alignment** | Humans review plans (not just code/content). Plans are the leverage point for catching errors. |
| 7 | **Trajectory Management** | Bad turns accumulate. If context shows repeated failures, start fresh rather than correcting in-place. |
| 8 | **Progressive Disclosure** | Don't load everything into CLAUDE.md. Layer context: root summary → skill files → deep references. |
| 9 | **On-Demand Compressed Context** | Generate truthful snapshots from code/files at task time, rather than maintaining static docs that go stale. |
| 10 | **Ralph Loop** | For large tasks: fresh context per iteration, durable state on disk, completion via external criteria. |

---

## Audit Results

### What We Do Well

| Principle | Rating | Evidence |
|-----------|--------|----------|
| Smart Zone / Dumb Zone awareness | ★★★★★ | `intentional-compaction.md` explicitly references the 40/60 split. Context budget thresholds (70/80/90%) are calibrated correctly. `context-engineering` skill has runtime awareness hooks. |
| Intentional Compaction | ★★★★☆ | progress.md mandatory at phase boundaries + before large ops + subagent returns. Anchored Iterative Summary format. Merge-not-regenerate rule. Explicit "artifact trail is weakest dimension (2.2/5.0)" awareness. |
| Sub-agents for Context Isolation | ★★★★★ | 11-role mapping with functional boundaries (not anthropomorphized). File ownership enforced. Delegation template includes 8 mandatory context items. Sequential chaining with compaction checkpoints between agents. |
| On-Disk State Persistence | ★★★★☆ | Plan directory structure with phase files, research/, reports/. progress.md as rehydration anchor. Rehydration protocol (progress → plan → phase → resume). |

### What We Partially Cover

| Principle | Rating | What Exists | What's Missing |
|-----------|--------|-------------|----------------|
| **RPI Workflow** | ★★★☆☆ | 3-phase flow exists (Research → Design → Develop → Evaluate). WebSearch mandatory for research. | **No fresh context per phase.** Phases run in same session. No explicit "compress research into artifact, start new context for planning." No feedback loops from implement → plan revision. |
| **Mental Alignment** | ★★☆☆☆ | Phase 1 has user confirmation for learner portrait. Quick/Standard mode toggle. | **No plan approval gate before material generation.** User doesn't review lesson plan before slides are built. Evaluation (19-criterion) is internal — user sees results but doesn't participate in the audit. |
| **Trajectory Management** | ★★☆☆☆ | Step 6 (Revision & Debugging) catches issues reactively. | **Only triggers on user-reported issues.** No continuous assumption validation. No "abort and pivot" fast-path. Quality gate is summative (end), not formative (ongoing). |
| **Progressive Disclosure** | ★★★☆☆ | CLAUDE.md references skills on-demand. Skill files say "don't load all references upfront." | **No conditional loading protocol.** No metadata tags ([PHASE: 2], [SIZE: small]). No explicit rule: "load § Tool Selection only when spawning a skill." |
| **Compression of Truth vs Intent** | ★★☆☆☆ | progress.md captures decisions (intent) and findings (truth) in separate sections. | **No evidence trail for research.** "Key Findings" doesn't distinguish sourced facts from design decisions. Later agents can't weight evidence quality. |

### What's Missing Entirely

| Principle | Impact | Description |
|-----------|--------|-------------|
| **On-Demand Compressed Context** | HIGH | No mechanism to request "summarize Phase 2 in 50 tokens." Rehydration loads full phase files, consuming 30–40% of new context. No summary layers or TL;DR headers on phase files. |
| **Explicit Phase Context Resets** | HIGH | RPI's core insight: each phase starts fresh. Our workflow runs all phases in one session. Compaction happens *accidentally* (auto), not *intentionally* (new context per phase). |
| **Formal Plan Approval Gates** | HIGH | No checkpoint between "lesson plan designed" and "materials generated." User can't catch a bad plan before thousands of tokens are spent producing content from it. |
| **Compression Strategy Matrix** | MEDIUM | No rules for *which* content to compress vs preserve. Learner portrait? Always keep. Completed slide raw output? Disposable. No priority guidance. |
| **Continuous Trajectory Monitoring** | MEDIUM | No "between phases, check: are we still aligned with learner portrait?" No assumption tracking. No falsification signals. |
| **Subagent Overflow Protocol** | MEDIUM | If subagent hits 80% context mid-task, no mechanism to split work, hand off, or signal orchestrator. |
| **Degradation Recovery** | LOW | No protocol for "rehydration found incomplete artifact trail — what now?" Assumes progress.md is always sufficient. |
| **Token Cost Estimation** | LOW | No pre-flight estimates. Designer doesn't know "4 sessions × detailed guide = ~120K tokens to produce." |

---

## Action Plan

### TIER 1 — High Impact (Recommended First)

#### 1.1 Add Phase Context Reset Protocol
**Files:** `primary-workflow.md`, `orchestration-protocol.md`

Between major ADDIE phases, mandate a "compress and reset" step — the core of RPI that we're missing.

**Mechanism:** After Phase 1 (Research/Analysis) completes, the orchestrator:
1. Writes research findings as a compressed markdown artifact (not full conversation)
2. Updates progress.md
3. Spawns Phase 2 as a **new subagent** with fresh context, loading only: progress.md + compressed research + plan.md + active phase file
4. Repeat at Phase 2 → 3 and Phase 3 → 4 boundaries

**Analogy:** Like handing off a relay baton — the next runner gets a clean start with only the baton (compressed state), not the fatigue of the previous leg.

**Why:** This is the single highest-impact change. Currently all phases share one degrading context window. Splitting them keeps each phase in the Smart Zone.

#### 1.2 Add Mandatory Plan Approval Gate
**Files:** `primary-workflow.md`, `course-designer/SKILL.md`

Insert a hard stop between Phase 2 (Design) and Phase 3 (Development):
- Present lesson plan + learning objectives to user
- Wait for explicit approval before generating any materials
- If user requests changes, revise plan before proceeding

**Why:** Horthy's central insight — "a bad line of research could be a hundred bad lines of code." A bad lesson plan could be thousands of tokens of wasted materials.

#### 1.3 Add Phase Summary Headers (On-Demand Compression)
**Files:** `documentation-management.md` (phase file template)

Every phase file gets a mandatory `## TL;DR (50 tokens)` section at the top:
```markdown
## TL;DR
Target: 15 junior CS agents, 2hr workshop. 3 objectives: empathy mapping, de-escalation scripts, feedback loops. Role-play heavy. Vietnamese facilitator guide.
```

Rehydrating agents read TL;DR first. Only load full phase file if needed.

**Why:** Reduces rehydration cost from "read 200 lines" to "read 2 lines." Keeps post-compaction agents in the Smart Zone.

### TIER 2 — Medium Impact

#### 2.1 Distinguish Truth vs Intent in progress.md
**Files:** `intentional-compaction.md`

Split "Key Findings" into two sections:
```markdown
## Verified Facts (Truth — with evidence)
- Active learning ↑ retention 30% (Source: Bloom 1984, confirmed WebSearch)
- Target learners avg 8mo tenure (Source: user brief, Phase 1)

## Design Decisions (Intent — with rationale)
- Chose role-play over lecture: learner portrait shows kinesthetic preference
- 3 objectives not 5: 2hr constraint makes 5 unrealistic (rejected: see Phase 2 notes)
```

**Why:** Later agents can weight evidence. If a finding is wrong, they know which decisions it affected. If a decision is questioned, they can trace the evidence chain.

#### 2.2 Add Continuous Trajectory Check
**Files:** `primary-workflow.md`

After each phase completion, before starting next phase:
```markdown
#### Trajectory Check (Between Phases)
1. Re-read learner portrait (Phase 1 TL;DR)
2. Ask: "Are assumptions from Phase 1 still valid given what Phase N revealed?"
3. If any assumption is falsified → flag to user before proceeding
4. If all valid → continue to next phase
```

**Why:** Catches drift early. Without this, bad Phase 1 assumptions cascade through all materials unchallenged until the 19-criterion evaluation at the very end.

#### 2.3 Add Compression Strategy Matrix
**Files:** `intentional-compaction.md`

```markdown
## Compression Priority (What to Keep vs Discard)

| Content | Priority | Compress? | Rationale |
|---------|----------|-----------|-----------|
| Learner portrait | CRITICAL | Never | Foundation for all design decisions |
| Learning objectives | CRITICAL | Never | Thread through all materials |
| Lesson plan structure | HIGH | Summarize | Keep session flow + timing |
| Research findings | HIGH | Bullets + sources | Lose prose, keep evidence |
| Activity procedures | MEDIUM | Reference by filename | Can reload from disk |
| Slide content | LOW | Discard | Regenerable from lesson plan |
| Build/generation logs | DISPOSABLE | Discard always | Pure noise |
```

**Why:** Without this, agents compress everything equally — losing critical learner context while preserving disposable build logs.

#### 2.4 Strengthen Compaction Frequency
**Files:** `intentional-compaction.md`

Change "every 3-5 tool calls" from *recommended* to *mandatory*:
```markdown
### Hard Checkpoint Rule
After every 4th tool call OR before any file write operation, update progress.md § Files Modified and § Current State. No exceptions.
```

**Why:** Artifact trail (2.2/5.0 quality) is the weakest link. Hard enforcement ensures no file changes go unrecorded.

### TIER 3 — Lower Priority

#### 3.1 Subagent Overflow Protocol
**Files:** `orchestration-protocol.md`

If subagent approaches 80% context:
1. Write checkpoint to progress.md with `## Handoff State`
2. Return partial results to orchestrator
3. Orchestrator spawns continuation agent with checkpoint

#### 3.2 Conditional Loading Metadata
**Files:** Phase file headers, reference file headers

Add YAML frontmatter to all reference files:
```yaml
---
phase: [2, 3]
size: medium  # small (<1K tokens), medium (1-5K), large (5K+)
prereq: phase-01-complete
---
```

Agents check metadata before loading full file.

#### 3.3 Token Cost Awareness in Phase 2
**Files:** `course-designer/SKILL.md`

Add to Phase 2 (Design):
> "When designing course structure, consider token budget: each session with full facilitator guide + activities + handout costs ~30-50K tokens to produce. A 4-session course may require 3-4 subagent context windows."

---

## Summary

**Our strongest areas:** State persistence (progress.md), agent isolation (11-role mapping), context zone awareness (40/60 thresholds).

**Our biggest gap:** We don't reset context between phases. All ADDIE phases share one degrading window. This is the opposite of RPI's core principle — each phase should start fresh with compressed artifacts from the previous phase.

**Highest-leverage single change:** Phase Context Resets (Tier 1.1). If we implement only one thing, this is it. It transforms our workflow from "one long session that degrades" to "a chain of focused sessions that each operate in the Smart Zone."

**Second highest:** Plan Approval Gate (Tier 1.2). Catches design errors before they multiply into material errors. Horthy: "a bad part of a plan could be a hundred bad lines of code."

---

## Unresolved Questions

1. **Phase resets vs session continuity:** If we split phases into separate subagent sessions, do we lose the orchestrator's accumulated understanding? How much context does the orchestrator itself need to maintain?

2. **Compaction frequency sweet spot:** "Every 4 tool calls" is a guess. Should we measure actual artifact trail quality at different frequencies to calibrate?

3. **User fatigue with approval gates:** Adding gates at Phase 1 → 2, Phase 2 → 3, and Phase 3 → 4 means 3 mandatory pauses. Is that too many for a user who wants fast turnaround?

4. **Auto-generated vs human context:** Recent research (InfoQ, March 2026) shows LLM-generated context files *degrade* performance by -3%. Does our progress.md (LLM-written) fall into this trap? Should we enforce human review of progress.md?

5. **Ralph Loop applicability:** Ralph Loop works well for mechanical tasks (refactors, migrations). Course design is more creative/judgmental. Does fresh-context-per-iteration work for creative tasks, or does it lose the "creative thread"?
