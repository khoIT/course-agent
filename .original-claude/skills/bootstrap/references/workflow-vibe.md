# Vibe Coder Workflow (`--vibe`)

**Thinking level:** Ultrathink
**User gates:** Design approval only. Everything else runs automatically — no tech questions, no config decisions.
**Audience:** Non-technical users who want to describe an idea and get working code.

---

## Fixed Tech Stack (Do NOT ask the user about these — always use as-is)

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js (App Router) + React + Tailwind CSS |
| UI Components | Nexus UI (`kk:nexus-ui` skill) |
| Backend | Node.js (API Routes inside Next.js or standalone Express) |
| Database | MySQL |
| Deployment | Dokploy |

> **Rule:** Never suggest alternatives, never ask which framework, never ask about preferences. The stack is fixed.

---

## Step 1: Understand the Idea

Read the user's requirements carefully. If the idea is vague, make reasonable assumptions and proceed — do NOT ask clarifying questions unless the idea is completely incomprehensible.

Summarize the idea back to the user in 2-3 plain sentences (Vietnamese or English, match user's language):
> "Tôi hiểu bạn muốn làm [mô tả ngắn]. Tôi sẽ dùng Next.js + Nexus UI + MySQL để xây dựng app này cho bạn!"

Then proceed immediately.

---

## Step 2: Research

Spawn `researcher` subagents in parallel:
- Validate the idea and identify core features
- Identify potential challenges specific to this type of app
- Research best UX patterns for this type of product

Keep each report ≤ 150 lines. No user gate — proceed automatically.

---

## Step 3: Tech Stack (FIXED — skip selection, just document)

Write `./docs/tech-stack.md` with the fixed stack. Do not research alternatives.

```markdown
# Tech Stack

- **Frontend:** Next.js 14+ (App Router), React, Tailwind CSS
- **UI Library:** Nexus UI
- **Backend:** Node.js (Next.js API Routes)
- **Database:** MySQL
- **Deployment:** Dokploy
```

No user gate — proceed automatically.

---

## Step 4: Wireframe & Design

1. Use `ui-ux-designer` + `researcher` subagents in parallel:
   - Research style, trends, fonts (predict Google Fonts name, NOT just Inter/Poppins), colors, spacing, positions
   - Design must feel modern, clean, friendly — suitable for non-technical end users
   - Describe assets for `kk:ai-multimodal` skill generation
2. `ui-ux-designer` creates:
   - Design guidelines at `./docs/design-guidelines.md`
   - Wireframes in HTML at `./docs/wireframes/`
3. If no logo provided: generate with `kk:ai-multimodal` skill
4. Screenshot wireframes with `kk:chrome-devtools` → save to `./docs/wireframes/`

**Gate:** Show design to user and ask for approval. Repeat if rejected.

---

## Step 5: Planning

Activate **kk:plan** skill: `/kk:plan --auto <requirements>`

In the plan, ensure:
- Nexus UI components are used for all UI elements (buttons, forms, modals, tables, etc.)
- Activate `kk:nexus-ui` skill during implementation to add components
- MySQL schema is designed with sensible defaults
- Dokploy deployment config (`dokploy.yml` or equivalent) is included in the plan

No user gate — proceed to implementation.

---

## Step 6: Implementation → Final Report

Load `references/shared-phases.md` for remaining phases.

Activate **kk:cook** skill: `/kk:cook --auto <plan-path>`

**During implementation, mandatory steps:**
1. Run `kk:nexus-ui` skill to initialize Nexus UI and add required components
2. All UI must use Nexus UI components — do not install shadcn, MUI, or other UI libs
3. Include a basic `README.md` with setup instructions written for non-technical users (plain language, step by step)
4. Include Dokploy deployment config

---

## Communication Style for Vibe Mode

Throughout the entire process:
- **Use the user's language** (Vietnamese or English)
- **No tech jargon** — say "trang chủ" not "landing page component", "ô nhập liệu" not "input field"
- **Be encouraging** — celebrate each completed step
- **Short updates** — tell the user what's happening in 1-2 sentences max
- **Never ask about tech** — if in doubt, make a decision and move forward
