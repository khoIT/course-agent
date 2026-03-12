# Team Coordination Rules

> These rules only apply when operating as a teammate within an Agent Team.
> They have no effect on standard sessions or subagent workflows.

Rules for agents operating as teammates within an Agent Team.

## File Ownership (CRITICAL)

- Each teammate MUST own distinct files — no overlapping edits
- Define ownership via glob patterns in task descriptions: `File ownership: courses/onboarding/05-activities/*, courses/onboarding/02-slides.*`
- Lead resolves ownership conflicts by restructuring tasks or handling shared files directly
- Content Reviewer (`code-reviewer`) and Quality Evaluator (`tester`) READ course files but never edit them directly — they report findings
- Content Developer (`fullstack-developer`) agents MUST have non-overlapping file ownership when running in parallel
- If ownership violation detected: STOP and report to lead immediately

### Typical Team Composition for Course Production
- **Lead**: Orchestrator (you) — coordinates phases, resolves conflicts, owns plan files
- **Researcher** (`researcher` agent): Owns `research/` directory files
- **Content Developer A** (`fullstack-developer`): Owns specific sessions/modules (e.g., `session-01-*`, `session-02-*`)
- **Content Developer B** (`fullstack-developer`): Owns different sessions/modules (e.g., `session-03-*`, `session-04-*`)
- **Visual Designer** (`ui-ux-designer`): Owns slide decks, infographics, visual assets
- **Quality Evaluator** (`tester`): Read-only on all materials, owns evaluation reports
- **Content Reviewer** (`code-reviewer`): Read-only on all materials, owns review reports

```
Example ownership assignment:
- Content Developer A: `File ownership: courses/onboarding/05-activities/session-01-*, courses/onboarding/03-facilitator-guide-session-01.md`
- Content Developer B: `File ownership: courses/onboarding/05-activities/session-02-*, courses/onboarding/03-facilitator-guide-session-02.md`
- Visual Designer: `File ownership: courses/onboarding/02-slides.pptx, courses/onboarding/08-interactive-artifacts/*`
BAD: Two developers both own `courses/onboarding/03-facilitator-guide.md` (single file, guaranteed conflict)
```

## Git Safety

- Prefer git worktrees for production teams — each creator in own worktree eliminates conflicts
- Never force-push from a teammate session
- Commit frequently with descriptive messages
- Pull before push to catch merge conflicts early
- If working in a git worktree, commit/push to the worktree branch — not main or dev

## Communication Protocol

- Use `SendMessage(type: "message")` for peer DMs — always specify recipient by name
- Use `SendMessage(type: "broadcast")` ONLY for critical blocking issues affecting entire team
- Mark tasks completed via `TaskUpdate` BEFORE sending completion message to lead
- Include actionable findings in messages, not just "I'm done"
  ```
  Example peer message (Content Developer → Lead):
  "Session 2 facilitator guide complete. 3 activities with REAL criteria met.
  One concern: Activity 2 role-play needs 4 people minimum — should I add a 3-person variant?
  File: courses/onboarding/03-facilitator-guide-session-02.md"
  ```
- Never send structured JSON status messages — use plain text

## CK Stack Conventions

### Report Output
- Save reports to `{CK_REPORTS_PATH}` (injected via hook, fallback: `plans/reports/`)
- Naming: `{type}-{date}-{slug}.md` where type = your role (researcher, reviewer, evaluator)
- Sacrifice grammar for concision. List unresolved questions at end.

### Commit Messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `content:`, `chore:`
- No AI references in commit messages
- Keep commits focused on actual content changes

### Docs Sync (Production Teams Only)
- After completing course production tasks, lead MUST evaluate docs impact
- State explicitly: `Docs impact: [none|minor|major]`
- If impact: update `docs/` directory or note in completion message

## Task Claiming

- Claim lowest-ID unblocked task first (earlier tasks set up context for later ones)
- Check `TaskList` after completing each task for newly unblocked work
- Set task to `in_progress` before starting work
- If all tasks blocked, notify lead and offer to help unblock

## Plan Approval Flow

When `plan_mode_required` is set:
1. Research and plan your approach (read-only — no file edits)
2. Send plan via `ExitPlanMode` — this triggers approval request to lead
3. Wait for lead's `plan_approval_response`
4. If rejected: revise based on feedback, resubmit
5. If approved: proceed with content creation

## Conflict Resolution

- If two teammates need the same file: escalate to lead immediately
- If a teammate's plan is rejected twice: lead takes over that task
- If findings conflict between reviewers: lead synthesizes and documents disagreement
- If blocked by another teammate's incomplete work: message them directly first, escalate to lead if unresponsive

## Shutdown Protocol

- Approve shutdown requests unless mid-critical-operation
- Always mark current task as completed before approving shutdown
- If rejecting shutdown, explain why concisely
- Extract `requestId` from shutdown request JSON and pass to `shutdown_response`

## Idle State (Normal Behavior)

- Going idle after sending a message is NORMAL — not an error
- Idle means waiting for input, not disconnected
- Sending a message to an idle teammate wakes them up
- Do not treat idle notifications as completion signals — check task status instead

## Discovery

- Read team config at `~/.claude/teams/{team-name}/config.json` to discover teammates
- Always refer to teammates by NAME (not agent ID)
- Names are used for: `recipient` in SendMessage, task `owner` in TaskUpdate
