# Instructor Start Here — Prompt Engineering với Claude Code & Cowork

## Course Files & Usage Order

| # | File | Purpose | When to Use |
|---|------|---------|-------------|
| 1 | `00-course-overview.md` | Learner portrait, objectives, content structure | Read first — understand your audience |
| 2 | `01-lesson-plan.md` | Minute-by-minute timing for all 5 sessions | Your session roadmap — follow timing |
| 3 | `03-facilitator-guide-sessions-1-2.md` | Speaker scripts, troubleshooting, setup for Sessions 1-2 | Open during delivery |
| 4 | `03-facilitator-guide-sessions-3-4-5.md` | Same depth for Sessions 3-5 | Open during delivery |
| 5 | `04-learner-handout.md` | Task-based reference guide (by TASK, not session) | Share with learners before Session 1 |
| 6 | `05-activities/activity-01-first-cli-prompt.md` | Session 1: First Claude Code experience | During Session 1 |
| 7 | `05-activities/activity-02-framework-claude-md-battle.md` | Session 2: RTT vs CO-STAR vs CLAUDE.md | During Session 2 |
| 8 | `05-activities/activity-03-few-shot-in-cli.md` | Session 3: Few-shot prompting in CLI | During Session 3 |
| 9 | `05-activities/activity-04-design-your-claude-md.md` | Session 3: Design department CLAUDE.md | During Session 3 |
| 10 | `05-activities/activity-05-template-factory.md` | Session 4: Create prompt templates | During Session 4 |
| 11 | `05-activities/activity-06-quality-loop.md` | Session 4: Peer review + iteration loop | During Session 4 |
| 12 | `05-activities/activity-07-build-cowork-workspace.md` | Session 5: Organize cowork workspace | During Session 5 |
| 13 | `05-activities/activity-08-thirty-day-cowork-plan.md` | Session 5: Team deployment plan | During Session 5 |
| 14 | `02-slides/` | Slide decks (.pptx) per session | Screen share during delivery |
| 15 | `07-evaluation-report.md` | 19-criterion quality evaluation | For course maintainers |

## Key Design Decisions

- **Tool focus:** Claude Code CLI (not web-based ChatGPT/Claude) — learners interact via terminal
- **CLAUDE.md central:** Project-level AI instructions are a core concept from Session 2 onward
- **Scaffolding:** Copy-paste commands → guided templates → independent design across 5 sessions
- **Depth:** 3-4 min/concept for non-technical audience, interaction every 8 min
- **Handout:** Organized by TASK for post-course reference, not by session
- **Activities:** Every activity includes facilitator micro-actions (what to do during group work)
- **Cowork emphasis:** Sessions 4-5 focus on team collaboration patterns with shared CLAUDE.md

## Pre-Course Setup Requirements

### For Instructor
- [ ] Claude Code installed and tested on demo machine
- [ ] Sample CLAUDE.md files prepared for each industry (HR, Marketing, Finance, Ops)
- [ ] Backup screenshots of all demos (in case of service outage)
- [ ] Zoom/Teams configured with breakout rooms
- [ ] Slides loaded and tested

### For Learners (send 2 days before)
- [ ] Install Claude Code: `npm install -g @anthropic-ai/claude-code` (or company IT pre-install)
- [ ] Verify: open terminal, type `claude --version`
- [ ] Create a test project folder on desktop
- [ ] Bring 5 prompts you currently use at work (from ChatGPT/Claude web history)

## Adaptation Notes

This course is adapted from "Prompt Engineering cho người dùng doanh nghiệp" (web-based). Key changes:
- All demos and activities use Claude Code CLI instead of web interfaces
- CLAUDE.md project configuration is a new core concept (Sessions 2-5)
- Cowork collaboration workflow replaces individual prompt library (Sessions 4-5)
- Slash commands (/help, /clear, /compact) introduced in Session 3
- Terminal onboarding added to Session 1 (not assumed)
