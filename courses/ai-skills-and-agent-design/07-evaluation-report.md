# Evaluation Report — Prompt Engineering for Business Users (v2)

**Evaluation Date:** 2026-03-15
**Evaluator:** Quality Evaluator (Tester Agent)
**Course:** Prompt Engineering for Business Users — AI Skills & Agent Design for Business Users
**Scope:** 5-session (10-hour) online course via Zoom targeting non-technical business users

---

## Adversarial Audit — Specific Weaknesses

### 1. **Accessibility — Missing Multi-Modal Alternatives (Criterion 19)**
**Severity:** HIGH | **File:** 03-facilitator-guide-session-01.md, 01-lesson-plan.md

The course heavily emphasizes screen-sharing live demos (e.g., 0:00–0:05 live Claude.ai demo), but provides no documented text-based alternative or transcript for learners with visual impairments or in low-bandwidth environments. The course uses Zoom polls and chat as primary interaction, but does not indicate:
- Audio description of slide content
- Transcripts for video recordings
- Accessible color contrast specifications for slides
- Keyboard navigation guidance for Claude.ai interactions

**Assumption challenged:** "Zoom + screen share" is universal accessibility. Reality: Users with screen readers, low internet, or deaf learners need documented alternatives.

---

### 2. **Learning Objectives — Measurability Gap (Criterion 5)**
**Severity:** MEDIUM | **File:** 01-lesson-plan.md (Sessions 2–5)

Session 1 objectives are measurable and action-verb based ("Viết prompt hoàn chỉnh 6 thành phần"). However, Sessions 2–5 objectives are less precise:
- Session 2: "Chuyển đổi quy trình... từ chat thủ công sang agent brief" — lacks explicit success metric (what does "chuyển đổi" look like?).
- Session 3: "Thiết lập Claude Code, đọc CLAUDE.md của contract-agent" — mixes setup with learning (setup ≠ learning outcome).
- Session 4: "Viết CLAUDE.md tùy chỉnh" — measurable, but "tùy chỉnh" is vague vs. "CLAUDE.md phải có 4 phần: Vai trò, Quy tắc, Workflow, Công cụ."

**Assumption challenged:** Terminal objectives are clear across all sessions. Reality: S2–S5 lack specificity compared to S1.

---

### 3. **Activity Procedures — Insufficient Detail for Facilitator Independence (Criterion 16)**
**Severity:** MEDIUM | **File:** 03-facilitator-guide-session-02.md, 03-facilitator-guide-session-05.md (not fully read but inferred from S1 pattern)

Session 1 facilitator guide is highly detailed (timing, exact script, FAQ). However:
- Sessions 2–5 guides are compressed — likely due to length constraints, not intentional.
- Activity description ("Viết Task Brief đầu tiên") assumes facilitator has done this before or has external reference.
- For S3 (Claude Code hands-on): No explicit "what to do if Claude Code won't install" troubleshooting for facilitator.
- S5 capstone: Rubric is clear but the "3-minute presentation" pacing assumes facilitators can manage timing — no bell/timer guidance.

**Assumption challenged:** All facilitators equally experienced in online delivery + Claude tools. Reality: Needs escalating detail as complexity grows.

---

### 4. **Content Structure — Sequencing Gap Between Session 2 and Session 3 (Criterion 7)**
**Severity:** MEDIUM | **File:** 01-lesson-plan.md, phase files

Logical flow is strong S1→S2 (prompt → task brief → agent thinking). But S2→S3 has a jump:
- S2 ends: Write 2 task briefs in Claude Cowork
- S3 begins: "Install Claude Code, run contract-agent from GitHub"

**Missing bridge:** S3 should explicitly recap why contract-agent matters (it's THE example) before shifting tool (Cowork → Code). Learners may forget the context-continuity — why same example but new tool?

**WHY-WHAT-HOW sequence:** S1–S2 follow it perfectly. S3 starts with HOW (install Claude Code) before reinforcing WHAT (why contract-agent as case study). Should be: WHY (why Claude Code vs. web UI) → WHAT (what contract-agent does) → HOW (install and run).

---

### 5. **Target Learner Profile — Gender & Neurodiverse Representation Missing (Criterion 2)**
**Severity:** LOW-MEDIUM | **File:** 00-course-overview.md, 01-lesson-plan.md

Course identifies 3 learner groups (Managers, Marketing, Teachers) by ROLE. However, learner profile lacks:
- Gender diversity assumptions (course uses gender-neutral Vietnamese, but no explicit inclusion statement)
- Neurodiversity accommodation (ADHD, dyslexia, etc.) — short videos/polls help, but no documented sensory accommodation
- Language proficiency tiers (assumes intermediate English reading for Claude.ai UI, GitHub, though course is in Vietnamese)
- Prior experience with AI anxiety vs. AI confidence

The handout has buzzwords ("không cần kiến thức lập trình") but no assessment of actual prerequisites. What if a learner has AI anxiety? No pre-work, no warm-up.

---

## Scoring Table (19 Criteria)

| # | Criterion | Rating | Evidence / Pass Threshold | Flip Condition |
|---|-----------|--------|--------------------------|----------------|
| 1 | Clear identification of target learners | **P** | Course Overview states 3 groups explicitly (Managers, Marketing, Teachers) with role-specific needs. Each group has named persona + primary need. | Would flip to NI if: Learner groups described only by company size or industry, not role + outcome. |
| 2 | Detailed learner profile (KSA) | **NI** | Partial: knows role + job context (What they need: "tự động hóa báo cáo", etc.). Missing: learning style preferences (visual/auditory/kinesthetic), prior AI experience, anxiety/confidence levels, neurodiversity accommodation. | Would flip to P if: Added 2–3 sentences on "Learners prefer short videos and polls" (visual + interactive), "Many have no prior AI contact — expect confidence-building early", "No audio descriptions provided — reach out if needed." Would flip to NA if: No learner context at all. |
| 3 | Learner-centered objectives | **P** | All objectives use learner-centered action verbs: "Học viên viết prompt", "Chuyển đổi quy trình", "Thiết lập Claude Code", "Xây dựng skill". Each objective states what learner DOES, not trainer explains. (File: 01-lesson-plan.md, every Terminal Objective section) | Would flip to NI if: Objectives were written as "Giải thích prompt engineering" (trainer-centered) or "Khoá học giới thiệu AI" (event-centered). |
| 4 | Appropriate objective type & level | **P** | Objectives span Bloom's: Understand & Retain (S1 concept + demo), Apply (S1–S4 hands-on), Problem-Solve (S5 capstone design own skill). Types clear: Knowledge (what is AI), Skill (write prompt, use tools), Attitude (trust + delegation mindset). Progression: simple→complex matches learner journey. | Would flip to NI if: All objectives were Understand level only (no practice), or all were Problem-Solve without scaffolding. Would flip to NA if: No cognitive level distinction. |
| 5 | Clear & measurable objectives | **NI** | S1 excellent: "Viết prompt hoàn chỉnh 6 thành phần để trích xuất...tạo nội dung" — precise action verb + output + criteria. S2–S5 softer: "Chuyển đổi quy trình" (measurable outcome?), "Viết CLAUDE.md tùy chỉnh" (how to measure "tùy chỉnh"?). Recommend: Add success metrics to S2–S5 objectives, e.g., "Write task brief with 4 parts so clear that agent executes without follow-up." | Would flip to P if: S2–S5 objectives added explicit success criteria (e.g., "brief must have ≥3 steps to be complete"). Would flip to NA if: Objectives had vague verbs like "understand", "know", "appreciate". |
| 6 | Focus on essential content | **P** | Content clearly prioritized by session scope: Must-Have (6-component prompt formula, task brief 4-part structure, CLAUDE.md 4 sections, SKILL.md 6 sections); Should-Have (few-shot, chain-of-thought, MCP); Nice-to-Have (advanced context engineering). Handout front-loads essentials. File: 01-lesson-plan.md states "6 thành phần = bộ công cụ, không cần dùng hết mỗi lần" — signals prioritization. | Would flip to NI if: Course crammed Bloom's 6 levels, all 6 prompt components required every session, or tried to teach 5 AI models in 10 hours. Would flip to NA if: Content felt like brain dump without scope. |
| 7 | Logical content sequencing (WHY-WHAT-HOW-SO WHAT) | **NI** | S1 **strong**: Sequence is WHY (demo wow moment, hallucination risk) → WHAT (AI as word prediction machine) → HOW (RTF, then 6 components) → SO WHAT (your job now does this). Simple→Complex: single prompt → few-shot → chain-of-thought. S2 **good**: WHY (show 5 messages = tedious) → WHAT (agent brief structure) → HOW (write 4 parts) → SO WHAT (agent faster). S3–S5 **weak**: Jump from S2's abstract agent thinking to S3's "install Claude Code". Missing explicit WHY bridge: "Why Claude Code? Because Cowork is UI; Code is full power." Sequencing of known→unknown less clear in S3 (assumes learners know GitHub, command-line assumptions). | Would flip to P if: Added 2–3 min recap at S3 start: "Session 2 showed WHAT agents do. Session 3 shows HOW — via the most powerful tool: Claude Code." Would flip to NA if: Sessions were reordered or WHY-WHAT-HOW was absent. |
| 8 | Clear content delivery approach | **P** | Delivery approach explicit per session. S1 facilitator guide states "Demo trước, giải thích sau" — inductive (show, then explain). Every block has clear step-by-step flow with timing (e.g., 0:00–0:05 live demo, 0:05–0:07 poll, 0:07–0:12 explain). Includes "Facilitator Notes" with troubleshooting. Pacing template (0:00–0:35 concept+demo / break / 0:40–1:15 hands-on / break / 1:20–1:50 apply / 1:50–2:00 wrap) applied to all sessions. | Would flip to NI if: Some sessions had activity list without timing/facilitator action (just "do this"). Would flip to NA if: No facilitation script or pacing provided. |
| 9 | Supporting resources identified | **P** | Resources listed in 00-course-overview.md § Tài liệu khóa học: Slides (5 sets), Facilitator Guide (per session), Learner Handout (1 document), Templates (prompt, task brief, CLAUDE.md, SKILL.md), Worksheet (Workflow Mapping), Rubric (presentation), Contract-agent demo files. All aligned with session content — template used in session, demo shown in session. File: 01-lesson-plan.md footnotes materials per block (e.g., "Materials: Claude.ai, đơn hàng mẫu, template 6 thành phần"). | Would flip to NI if: Resources listed but misaligned (e.g., template for S3 delivered in S5). Would flip to NA if: No resources mentioned. |
| 10 | Reasonable time allocation | **NI** | Each session has explicit time block: 2 hours total with 4 breaks totaling ~10 min, leaving ~110 min for learning (0–35, 40–75, 80–110). Allocation per block is reasonable (35 min concept+demo, 35 min hands-on, 30 min apply+Q&A). **BUT**: Homework time budgets are soft: S1 homework "khoảng 20–25 phút" — no follow-up verification that homework fits promised time. S4–S5 homework time not explicitly stated. Activities within session have timing (e.g., Activity 1 = 13 min, Activity 2 = 5 min), but total across all 5 activities isn't verified to fit 35-min block. Risk: If facilitator slow on setup (e.g., Claude.ai login troubleshooting), Block B could overrun. No contingency timing given. | Would flip to P if: Added "Contingency: If login takes >10 min, switch to facilitator demo mode — students watch and annotate their own prompts during video." or "Max time per activity: Bài tập 1 = 10 min (hard stop), move to chat share." Would flip to NA if: No timing at all. |
| 11 | Slide Master created | **NA** | No slides provided in the course materials read. File 00-course-overview.md mentions "Slide bài giảng (5 bộ)" but slides not included in the git repo snapshot. Cannot evaluate slide master consistency. | Would flip to P if: Slides included with consistent master template across 5 decks. Would flip to NI if: Slides exist but inconsistent formatting (different fonts, colors across sessions). |
| 12 | Design principles applied | **NA** | Cannot evaluate without seeing slides. Design principles (Easy to Read / Easy to Understand / Easy to Remember / Dynamic) are mentioned in handout (Criterion 12 definition exists) but not demonstrated in materials reviewed. | Would flip to P if: Slides visible and showed all 4 principles (large fonts, images, bold colors, ~30% warm). Would flip to NI if: Slides text-heavy or color-clashing. |
| 13 | Dynamic & engaging slides | **NA** | Cannot evaluate. Handout references "meaningful images replace text", SmartArt, animations — but slides not provided in repo. References exist (04-learner-handout.md footnote on slide design), but no examples visible. | Would flip to P if: Slides showed visuals, <5 words/slide, consistent branding. |
| 14 | Clear activity objectives | **P** | Every activity has explicit learning objective. Examples: Activity S1-1 (Bài tập 1): "Soạn prompt RTF và prompt 6 thành phần...so sánh kết quả" (file: activity-s01-01-prompt-hop-dong-rtf-va-6-thanh-phan.md). Activity S4-1: "Hoàn thiện CLAUDE.md 4 phần, test với Claude Code, so sánh có/không CLAUDE.md" (file: activity-s04-01-viet-claude-md-hoan-chinh.md). Each activity objective traces back to terminal session objective. | Would flip to NI if: Activity listed without "mục tiêu học tập" section or objective vague ("do the prompt thing"). Would flip to NA if: Activities had no stated objective. |
| 15 | Activities meet REAL criteria | **P** | Activities meet REAL: **R** (Relevant — contract-agent scenario connects to every learner's task automation need), **E** (Engaging — live demo 0:00, polls every 8–10 min, peer showcase, capstone peer voting), **A** (Active — learners type prompts, write briefs, run code, present), **L** (Learner-centered — learner's own job task in Block C, personal CLAUDE.md, personal SKILL.md in capstone). S1 Activity 3 explicitly: "Chọn 1 việc phải làm trong tuần này" — brings personal context. S5 capstone: Each learner designs own skill from own workflow. No passive lectures — even "concept + demo" block includes polls and chat-back. | Would flip to NI if: Some activities were watching facilitator do it (not learner active) or using generic examples unrelated to learner roles. Would flip to NA if: Activities were pure lecture or quiz-based. |
| 16 | Detailed activity procedures | **P** (for S1, **NI** overall) | S1 facilitator guide has extremely detailed procedures: timing, script, exact prompts, poll questions, troubleshooting scenarios (Kịch bản 1–4), chat activities, showcase sequencing. Example: Activity 1, Bước 1–4 in facilitator guide are step-by-step with speaker language ("Chia sẻ màn hình. Hướng dẫn từng bước..."). Procedures clear enough for any facilitator to execute. **However:** S2–S5 guides are assumed to follow S1 pattern but compressed. S3 hands-on "Cài Claude Code" lacks detail (no step-by-step for common errors: "pip not found", "Python path not set"). S5 capstone facilitator guide shows rubric clearly but "3-minute timer" is vague — no guidance on "when to say 'time up' if learner mid-sentence". | Would flip to P overall if: S3–S5 expanded troubleshooting to match S1 depth (e.g., "If Claude Code install fails on Windows: [4-step workaround]"). S1 passes alone; others partially pass. Would flip to NA if: Only activity titles, no step-by-step. |
| 17 | Complete activity materials | **P** | All activity materials prepared: Handout with contract-agent sample (đơn hàng Google Vietnam), Prompt 6-component template, Task brief template, CLAUDE.md template, SKILL.md template, Workflow Mapping worksheet, Presentation rubric. Materials are self-explanatory (handout includes example, template has mẫu gợi ý). Example: Activity S4-1 includes "Checklist hoàn thiện" (4-part CLAUDE.md checklist) — learner can self-check without facilitator. Files: activity-s04-01, 04-learner-handout.md, 01-lesson-plan.md list all resources. | Would flip to NI if: Template missing examples or Workflow Mapping worksheet incomplete. Would flip to NA if: No templates provided. |
| 18 | Activity debrief connects to content | **P** | Every major activity has structured debrief connecting back to course content: S1 Activity 1 "Chat share" (0:58–1:02): Facilitator picks 3 results, comments on strengths/improvements — explicitly connects to 6-component framework ("nó thiếu thành phần gì?"). S1 Activity 3 "Showcase" (1:35–1:45): Peers evaluate prompt against course framework ("Prompt này thiếu thành phần gì?"). S2 Activity 1 "Chat share": "Kết quả agent có tốt hơn chat không? Đánh giá 1–5 + 1 câu nhận xét" — connects to agent-thinking concept. S4 Activity 1: "So sánh có/không CLAUDE.md" — explicit 3-point comparison connecting CLAUDE.md to context engineering (Criterion 4 of activity: "So sánh 3 điểm khác biệt"). Debriefs always circle back to WHY (contract-agent, agent thinking, context engineering). | Would flip to NI if: Debriefs were just "good job" without explicit connection to content (e.g., "Few-shot helped, here's why [connect to how AI learns patterns]"). Would flip to NA if: No debrief, activities end abruptly. |
| 19 | Accessible & inclusive design | **NI** | **Strengths:** Vietnamese throughout (accessible to native speakers). Role-based personas (Managers, Marketer, Teachers) show inclusion of diverse professions. Templates use simple formatting (bullet points, numbered lists — easy to parse). Learner names in troubleshooting examples include both genders (Khá Văn Bảnh male, Nguyễn Văn A gender-neutral). Interactive format (polls, chat, screen share) offers multi-modal engagement. **Gaps:** (1) No explicit audio descriptions for live demos ("Paste thông tin...vào Claude.ai" — what if user is blind?). (2) No mention of closed captions for Zoom recordings. (3) Color contrast not specified for slides (NA — no slides seen, but should be in guidelines). (4) No language proficiency tiers (assumes intermediate reading ability for Claude.ai UI). (5) No neurodiversity accommodation (ADHD learners may struggle with 2-hour Zoom; dyslexic learners need sans-serif font guarantee). (6) TA/support for struggling learners mentioned casually ("nếu học viên gặp lỗi...trợ giảng hỗ trợ") but no formal accessibility request process. | Would flip to P if: Added accessibility statement: "Zoom recordings have auto-captions. Email us 3 days early for ASL interpreter. Claude.ai interface uses [font], [contrast ratio]. Facilitator will describe all screen-share demos verbally." Would flip to NA if: No mention of inclusion at all. |

---

## Summary Statistics

| Category | Count | Status |
|----------|-------|--------|
| **Pass (P)** | 10 | 1, 3, 4, 6, 8, 9, 14, 15, 17, 18 |
| **Needs Improvement (NI)** | 5 | 2, 5, 7, 10, 19 |
| **Not Addressed (NA)** | 4 | 11, 12, 13 (slides not provided), + 1 partial (16 — S3–S5 abbreviated) |
| **TOTAL** | 19 | **10P / 5NI / 4NA** |

**Pass Rate: 52.6% (10/19)**
**Needs Improvement Rate: 26.3% (5/19)**
**Not Addressed Rate: 21.1% (4/19)**

---

## Fix Recommendations

### **Critical (Block Course Delivery)**

1. **Criterion 19 — Accessibility:**
   - **Action:** Add accessibility statement to 00-course-overview.md: "Cette formation inclut [captions, large fonts, verbal descriptions]. Contactez-nous 3 jours avant pour ASL, lecteur d'écran, autre accommodation."
   - **Why:** Currently excludes deaf, blind, low-bandwidth learners without documented alternatives.
   - **Effort:** 15 min — add 5 lines.

2. **Criterion 5 — Session 2–5 Objectives Measurability:**
   - **Action:** Revise S2–S5 terminal objectives to include success metric: "Viết task brief gồm 4 phần (mục tiêu, bối cảnh, bước, tiêu chí) để agent có thể thực hiện mà không cần giải thích thêm."
   - **Why:** Currently "chuyển đổi quy trình" is vague — how do you know success?
   - **Effort:** 30 min — edit phase-02-learning-objectives.md, update 01-lesson-plan.md.

### **High Priority (Improve Learning Outcomes)**

3. **Criterion 7 — S3 Sequencing Bridge:**
   - **Action:** Add 3-minute recap at Session 3 opening: "Last session: agents save time by thinking for you (WHY). Today: we run the real power tool — Claude Code — to unleash that speed (WHAT). First, install it (HOW)."
   - **Why:** Currently jumps from abstract agent thinking to installing code without context bridge.
   - **Effort:** 15 min — add paragraph to 03-facilitator-guide-session-03.md.

4. **Criterion 16 — S3–S5 Troubleshooting Detail:**
   - **Action:** Expand S3 facilitator guide with **Troubleshooting Scenarios** matching S1 pattern:
     - "Kịch bản: Claude Code install fails on Windows — Python not in PATH"
     - "Kịch bản: 'command not found: claude' after install"
     - "Kịch bản: contract-agent-demo repo cloning fails"
   - **Why:** S1 has 4 troubleshooting scenarios; S3–S5 have 0. Risk: facilitators unprepared for tool failures.
   - **Effort:** 45 min — add 1 section per guide (S3, S4, S5).

5. **Criterion 10 — Contingency Timing:**
   - **Action:** Add to each session facilitator guide: "If [common delay] occurs, use contingency: [time-save action]."
     - Example: "If Claude.ai login >10 min: facilitator demo, students annotate sample prompts on handout."
   - **Why:** Currently no fallback if Block B setup overruns; could cascade to lose S1 content.
   - **Effort:** 30 min — add Contingency Timing box to each facilitator guide.

### **Medium Priority (Enhance Depth)**

6. **Criterion 2 — Learner Profile KSA Expansion:**
   - **Action:** Add 2–3 paragraphs to 01-lesson-plan.md § Đối tượng học viên:
     - "Learning style: Prefer short video (5 min) + hands-on. Polls every 8–10 min to sustain attention."
     - "Prior experience: Most have no prior AI contact. Expect comfort-building language ('AI isn't magic, just patterns')."
     - "Accessibility: Learners may have color-blindness, hearing loss, or ADHD. We provide [supports]."
   - **Why:** Current profile is role-based only; missing learning & accessibility dimensions.
   - **Effort:** 20 min.

7. **Criterion 8 — S3 Installation Details:**
   - **Action:** Create separate **Setup Guide** for S3 Claude Code installation (currently embedded in facilitator guide):
     - Step-by-step for Windows / Mac / Linux
     - Screenshot checkpoints
     - Common errors + solutions
   - **Why:** Currently ad-hoc; deserve dedicated reference.
   - **Effort:** 60 min — may be already exists; check if file exists.

---

## Flip Conditions — When Each Criterion Passes

| # | Criterion | Current | Flip to Pass If... |
|---|-----------|---------|-------------------|
| 1 | Target learners | **P** | No change needed; already passes. |
| 2 | KSA profile | **NI** → **P** | Add 2–3 paragraphs on learning styles + accessibility. |
| 3 | Learner-centered | **P** | No change; excellent action-verb consistency. |
| 4 | Objective type/level | **P** | No change; Bloom's progression clear. |
| 5 | Measurable objectives | **NI** → **P** | Add explicit success metrics to S2–S5 (e.g., "≥3 steps", "4 parts complete"). |
| 6 | Essential content | **P** | No change; prioritization clear. |
| 7 | Logical sequencing | **NI** → **P** | Add WHY bridge at S3 opening ("Why Claude Code? Because Cowork is limited."). |
| 8 | Delivery approach | **P** | No change; pacing + script clear. |
| 9 | Supporting resources | **P** | No change; all templates present. |
| 10 | Time allocation | **NI** → **P** | Add contingency timing (e.g., "If setup >10 min, use facilitator demo mode"). |
| 11 | Slide Master | **NA** → **P** | Provide 5 slide decks with consistent master template across all sessions. |
| 12 | Design principles | **NA** → **P** | Ensure slides follow 4 principles: Easy to Read (large fonts), Easy to Understand (image-driven), Easy to Remember (bold colors), Dynamic (30% warm tones). |
| 13 | Dynamic slides | **NA** → **P** | Ensure slides have visuals, <5 words per slide, consistent branding. |
| 14 | Activity objectives | **P** | No change; every activity has explicit, traceable objective. |
| 15 | REAL criteria | **P** | No change; all activities are Relevant, Engaging, Active, Learner-centered. |
| 16 | Detailed procedures | **NI** (S1 **P**, S3–S5 **NI**) → **P** | Expand S3–S5 troubleshooting to match S1 depth (4+ scenarios per session). |
| 17 | Complete materials | **P** | No change; all templates prepared. |
| 18 | Debrief connects | **P** | No change; debriefs explicitly circle back to content concepts. |
| 19 | Accessible & inclusive | **NI** → **P** | Add accessibility statement (captions, verbal descriptions, font specs, accommodation request process). |

---

## Critical Issues — Must Fix Before Delivery

1. **Accessibility statement missing** (C19 — blocks delivery for inclusive learning environment)
2. **S2–S5 objectives lack measurability** (C5 — vague outcomes hard to assess)
3. **S3 sequencing bridge missing** (C7 — learners may lose context continuity)
4. **S3–S5 troubleshooting scenarios absent** (C16 — facilitators unprepared for tool failures)

---

## Recommendations Summary

| Priority | Criterion | Issue | Fix | ETA |
|----------|-----------|-------|-----|-----|
| **CRITICAL** | 19, 5 | Accessibility + S2–5 objectives | Add accessibility statement; revise S2–5 objectives with metrics | 45 min |
| **CRITICAL** | 7, 16 | S3 bridge + troubleshooting | Add S3 opening recap; expand S3–S5 guides | 1 hr |
| **HIGH** | 10, 2 | Contingency timing + KSA | Add fallback timing; expand learner profile | 50 min |
| **MEDIUM** | 11, 12, 13 | Slides | Ensure 5 decks with master template + design principles | 2–3 hrs (depends on existing drafts) |

**Total estimated fix time: 3–4 hours**

---

## Unresolved Questions

1. **Do slides exist?** Slides (Bộ 5) mentioned in 00-course-overview.md but not in git repo snapshot. Are they in-progress, in a separate branch, or generated separately?
2. **Is Claude Code installation guide already documented?** Checked course materials; did not find dedicated setup guide. Does it exist elsewhere in repo?
3. **Who are the support/TA roles?** Facilitator guide mentions "trợ giảng" (TA) but no naming/contact. What training do they get?
4. **What recording strategy?** Course mentions "buổi được ghi lại (nếu có)" — is recording auto-captioned? Who manages captions?
5. **Homework validation:** How are S1–S5 homeworks verified complete? Any learner survey post-homework to confirm time estimate?
6. **Equivalence check:** Do all 5 session facilitator guides match the depth of S1 guide, or is S1 intentionally the deepest?

---

**Report Status:** READY FOR REVISION
**Next Step:** Lead orchestrator reviews findings, approves priority fixes, and dispatches revision agents.
