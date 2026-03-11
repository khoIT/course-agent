# Hoạt động 6: "30-Day Skill Adoption Plan"

**Loại hoạt động:** Workshop nhóm + Trình bày
**Thời gian:** 15 phút (0:35-0:50 trong buổi 5)
**Chuẩn bị:** Nhóm theo phòng ban + plan template + trình chiếu

---

## Mục tiêu

Sau hoạt động này, học viên có thể:
- **Xác định** 3 use case ưu tiên cho team/phòng ban mình
- **Viết brief** cho mỗi skill cần tạo (mô tả, tác vụ, owner, timeline)
- **Phân công** ai tạo skill nào (ownership)
- **Xây dựng kế hoạch 30 ngày** cụ thể với milestone (Week 1, 2, 3, 4)
- **Trình bày** kế hoạch cho class (elevator pitch)
- **Chuyển từ cá nhân → tổ chức:** Từ "Tôi có 1 skill" → "Team tôi có skill library"

---

## Thời gian

**Tổng:** 15 phút
- Giới thiệu + chia nhóm: 2 phút
- Workshop nhóm (workshop): 9 phút (lấp kế hoạch)
- Trình bày (3 nhóm × 1 phút): 3 phút

---

## Chuẩn bị

**Cho giáo viên:**
1. **Chia nhóm theo phòng ban / team:** HR, Marketing, Finance, Operations, v.v.
   - Nếu học viên từ nhiều phòng ban khác nhau, ghép theo tính chất công việc (ví dụ: tất cả admin + ops nhóm lại)
2. **In hoặc share link plan template**
3. **Chuẩn bị timer 9 phút**
4. **Chuẩn bị 1 laptop + projector** để các nhóm trình bày

**Cho học viên:**
- Ngồi nhóm theo phòng ban được chia
- Mở sẵn **30-Day Adoption Plan Template** (dưới)
- Sẵn sàng brainstorm 3 use case

**Tài liệu cần thiết:**
- 30-Day Adoption Plan Template (dưới)
- Use Case Brainstorm Card (optional)
- Presentation slide template (nếu muốn formal)

---

## Hướng dẫn từng bước

### Bước 1: Giới thiệu + Chia nhóm (2 phút)

**Giáo viên nói:**

> "Đây là hoạt động cuối khóa học. Mục tiêu: **từ cá nhân → tổ chức**.
>
> 5 buổi qua, mỗi bạn tạo **1-2 skills** riêng. Bây giờ câu hỏi là: **'Khi nào team/phòng ban tôi sẽ dùng skills?'**
>
> Mỗi nhóm — **theo phòng ban của bạn** — sẽ lên **kế hoạch 30 ngày** để triển khai skills vào công việc hàng ngày.
>
> Output: 1 **30-Day Plan** cụ thể với ownership, timeline, milestone. Rồi mỗi nhóm sẽ trình bày **1 phút** elevator pitch."

**Chia nhóm:**

Giáo viên gọi tên: "HR team: bạn A, B, C ngồi chung. Marketing: D, E, F ngồi chung..."

---

### Bước 2: Workshop Nhóm (9 phút)

**Mỗi nhóm làm theo 4 bước:**

---

#### **BƯỚC 2.1: Brainstorm 3 use case ưu tiên (2 phút)**

**Giáo viên hướng dẫn:**

> "Mỗi nhóm: Xác định **3 công việc lặp lại** trong phòng ban mình mà skill có thể **tiết kiệm thời gian + tác động lớn**.
>
> Không phải tất cả công việc — chỉ **TOP 3 ưu tiên**. Ưu tiên theo: (1) Tần suất lặp lại (2) Effort hiện tại, (3) Impact nếu automation."

**Ví dụ use case:**

**HR:**
1. Tóm tắt CV ứng viên + scoring → agent làm trong 5 phút (thay vì 20 phút manual)
2. Viết offer letter từ template + compensation data → skill automation
3. Tổng hợp leave request + update calendar → data entry automation

**Marketing:**
1. Tạo campaign brief từ brief từ client → skill `marketing-brief-generator`
2. Tóm tắt competitor report → skill `competitor-summary`
3. Schedule social post từ content calendar → skill `social-scheduler`

**Finance:**
1. Tóm tắt hóa đơn + flagging anomalies → skill `invoice-analyzer`
2. Monthly closing report từ GL entries → skill `closing-report-generator`
3. Budget forecast từ historical data → skill `budget-forecast`

**Học viên ghi vào Plan Template:**
```
Use Case 1: [Công việc]
Use Case 2: [Công việc]
Use Case 3: [Công việc]
```

---

#### **BƯỚC 2.2: Viết brief cho mỗi skill (3 phút)**

Mỗi use case → 1 skill brief.

**Skill Brief Template (fill in for each use case):**

```
SKILL BRIEF #1: [Use Case Name]

📋 Tác vụ:
[Mô tả công việc — what does agent do?]

🎯 Input:
[Cái gì bạn gửi cho agent? CSV, email, file, text?]

✨ Output:
[Cái gì bạn nhận lại? Format, length?]

⏱️ Time saved:
[Bao nhiêu phút hiện tại → Bao nhiêu phút với skill?]

👤 Owner (Ai sẽ tạo skill?):
[Tên người]

📅 Target completion:
[Week X]
```

**Ví dụ đầy đủ (HR — Use Case 1):**

```
SKILL BRIEF #1: CV Summary & Scoring

📋 Tác vụ:
Tóm tắt CV ứng viên + auto-score theo scoring guide công ty.
Được dùng khi HR nhận CV mới để quick assess.

🎯 Input:
CV file (.pdf hoặc .docx)

✨ Output:
1-page summary:
- Candidate name + key experience
- Score (1-10) theo 5 criteria
- Red flags (if any)
- Recommendation: Interview / Reject / Hold

⏱️ Time saved:
Manual review: 20 phút/CV → Với skill: 3 phút

👤 Owner (Ai sẽ tạo skill?):
Quỳnh (HR Lead)

📅 Target completion:
Week 1 (3/17 - 3/21)
```

**Nhóm ghi 3 skill brief vào plan template.**

---

#### **BƯỚC 2.3: Phân công ownership + timeline (2 phút)**

Nhóm quyết định:
1. **Ai tạo skill nào?** (Owner for each skill)
2. **Thứ tự?** (Week 1, 2, 3, 4)
3. **Ai test/QA?**

**Timeline framework:**

```
WEEK 1 (3/17-3/21): Skill #1 creation + testing
WEEK 2 (3/24-3/28): Skill #2 creation + training team on Skill #1
WEEK 3 (3/31-4/4):  Skill #3 creation + expand Skill #1 usage
WEEK 4 (4/7-4/11):  All 3 skills live + feedback collection
```

**Ownership matrix:**

```
| Skill | Owner | QA | Target Date | Status |
|-------|-------|-----|-------------|--------|
| CV Summary | Quỳnh | Linh | Week 1 | — |
| Offer Letter | Linh | Quỳnh | Week 2 | — |
| Leave Tracker | Hân | Quỳnh | Week 3 | — |
```

---

#### **BƯỚC 2.4: Milestone + Success metrics (2 phút)**

Nhóm xác định:
- **What is success?** (Khi nào coi là thành công?)
- **How to measure?** (Measure sao?)

**Ví dụ milestone + metrics:**

```
MILESTONE 1 (Week 1 kết thúc):
✓ Skill #1 created + tested
✓ Demo cho 3 HR staff
✓ Feedback collected

MILESTONE 2 (Week 2 kết thúc):
✓ Skill #1 used cho 5 CVs (team tự dùng)
✓ Skill #2 created + tested
✓ 80% team members can trigger Skill #1

MILESTONE 3 (Week 3 kết thúc):
✓ Skill #1 + #2 fully adopted
✓ Skill #3 created + tested
✓ Estimated time saved: 30 hours/month (target: 15 hours)

MILESTONE 4 (Week 4 kết thúc):
✓ All 3 skills live + team trained
✓ Feedback: Satisfaction score ≥ 4/5
✓ Roadmap for next quarter (more skills?)
```

---

### Bước 3: Trình bày (3 phút)

**Giáo viên chọn 3 nhóm** (hoặc tất cả nếu thời gian, mỗi nhóm 30-45 giây):

> "Ai muốn trình bày kế hoạch 30 ngày của nhóm mình? Chỉ cần 1 phút — 3 use cases + timeline."

**Format elevator pitch:**

```
"Nhóm [phòng ban] có 3 use cases:
1. [Use case A] — Owner: [tên], Week [X]
2. [Use case B] — Owner: [tên], Week [Y]
3. [Use case C] — Owner: [tên], Week [Z]

Estimated impact: [X hours saved per month]
Kick-off: [Date]
"
```

**Ví dụ pitch (HR):**

```
"Nhóm HR có 3 use cases:
1. CV Summary & Scoring — Owner: Quỳnh, Week 1
2. Offer Letter Generator — Owner: Linh, Week 2
3. Leave Request Tracker — Owner: Hân, Week 3

Estimated impact: 40 hours saved per month
Kick-off: March 17, 2026
"
```

**Giáo viên feedback nhanh mỗi nhóm:**
- "Cơn cấp đấy! Timeline clear, ownership rõ, impact measurable."
- Nếu nào rõ: "Thêm 1 success metric — khi nào coi là 'success'?"

---

## Tài liệu cần thiết

### 30-Day Adoption Plan Template

```markdown
# 30-DAY SKILL ADOPTION PLAN

**Phòng ban:** _______________
**Nhóm lãnh đạo:** _______________
**Ngày kickoff:** _______________

---

## PART 1: 3 ƯU TIÊN USE CASE

### Use Case #1: [Tên]
- **Tác vụ:** [Mô tả]
- **Owner:** [Tên]
- **Time saved:** [X phút → Y phút]
- **Target date:** Week ___

### Use Case #2: [Tên]
- **Tác vụ:** [Mô tả]
- **Owner:** [Tên]
- **Time saved:** [X phút → Y phút]
- **Target date:** Week ___

### Use Case #3: [Tên]
- **Tác vụ:** [Mô tả]
- **Owner:** [Tên]
- **Time saved:** [X phút → Y phút]
- **Target date:** Week ___

---

## PART 2: OWNERSHIP MATRIX

| Skill | Owner | QA/Reviewer | Target Date | Status |
|-------|-------|-------------|-------------|--------|
| [Skill 1] | [Tên] | [Tên] | Week __ | — |
| [Skill 2] | [Tên] | [Tên] | Week __ | — |
| [Skill 3] | [Tên] | [Tên] | Week __ | — |

---

## PART 3: 4-WEEK TIMELINE

### WEEK 1 (Dates: ___ to ___)
**Focus:** Skill #1 creation + team prep

**Milestones:**
- [ ] Skill #1 design (brief ready)
- [ ] Skill #1 created + tested
- [ ] Demo to team (3-5 people)
- [ ] Feedback collected

**Owners:** [Tên]

---

### WEEK 2 (Dates: ___ to ___)
**Focus:** Skill #1 adoption + Skill #2 creation

**Milestones:**
- [ ] Skill #1 used on 5+ live tasks
- [ ] Skill #2 created + tested
- [ ] Team adoption rate: 50%+

**Owners:** [Tên]

---

### WEEK 3 (Dates: ___ to ___)
**Focus:** Skill #2 adoption + Skill #3 creation

**Milestones:**
- [ ] Skill #1 + #2 adoption: 80%+
- [ ] Skill #3 created + tested
- [ ] Time saved tracking active

**Owners:** [Tên]

---

### WEEK 4 (Dates: ___ to ___)
**Focus:** All skills live + feedback + roadmap

**Milestones:**
- [ ] All 3 skills production-ready
- [ ] Team trained on all 3
- [ ] Satisfaction survey: ≥ 4/5
- [ ] Retrospective: What worked? What to improve?
- [ ] Roadmap: Next 3 skills for Q2?

**Owners:** [Tên]

---

## PART 4: SUCCESS METRICS

**How to measure impact:**

| Metric | Baseline | Target (Day 30) | Owner |
|--------|----------|-----------------|-------|
| Time saved (hours/month) | ___ | ___ | [Tên] |
| Team adoption rate (%) | 0% | 80% | [Tên] |
| Satisfaction score (1-5) | N/A | ≥ 4 | [Tên] |
| Skills in production | 0 | 3 | [Tên] |
| Feedback items addressed | 0 | 80% | [Tên] |

---

## PART 5: RISKS & MITIGATION

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| [Risk 1] | High/Mid/Low | High/Mid/Low | [Action] |
| [Risk 2] | High/Mid/Low | High/Mid/Low | [Action] |

---

## PART 6: RESOURCES NEEDED

- [ ] Tool access (Cowork, Claude Code, etc.)
- [ ] Training time (hours per person)
- [ ] Approval from: [Manager/Stakeholder]
- [ ] Data access / testing environment

---

## PART 7: SIGN-OFF

**Plan approved by:**

- Team leader: _________________ (Date: ___)
- Department head: ____________ (Date: ___)

---

## APPENDIX: SKILL BRIEFS (Detailed)

### SKILL BRIEF #1: [Skill Name]

**📋 Tác vụ:**
[What does agent do?]

**🎯 Input:**
[Format, example]

**✨ Output:**
[Format, example]

**⏱️ Impact:**
[Before: X min, After: Y min, Saved: Z min]

**📚 Reference:**
[Link to SKILL.md if exists]

---

[Repeat for Skill #2, #3]
```

---

### Skill Brief Card (Optional handout)

```
┌─────────────────────────────────────────────┐
│  SKILL BRIEF CARD                           │
│                                             │
│  Skill: _____________________              │
│  Owner: _____________________              │
│                                             │
│  📋 Tác vụ:                                 │
│  _________________________________         │
│                                             │
│  ⏱️ Time saved:                             │
│  ___ phút → ___ phút (save: ___ phút)      │
│                                             │
│  📅 Target: Week ____                       │
│                                             │
│  ✓ Completed: ☐ Yes ☐ No                   │
└─────────────────────────────────────────────┘
```

---

## Debrief / Kết nối nội dung

**Sau khi các nhóm trình bày, giáo viên tóm tắt:**

> "Bạn vừa tạo **kế hoạch hành động cụ thể**. Không phải 'chúng ta sẽ dùng AI' — mà **'trong 4 tuần, Quỳnh sẽ tạo skill CV scoring, Linh sẽ tạo skill offer letter, Hân sẽ tạo skill leave tracker. Chúng tôi sẽ tiết kiệm 40 giờ/tháng.'**
>
> Đây là **sự khác biệt giữa learning + doing**. Bạn không chỉ 'biết' — bạn có **hành động**."

**Kết thúc khóa học:**

> "5 buổi này, bạn đã đi qua **5 cấp độ:**
>
> **Buổi 1:** Hiểu — Agent vs Skill là gì?
> **Buổi 2:** Dùng — Kích hoạt skill có sẵn
> **Buổi 3:** Tạo — Viết SKILL.md đầu tiên
> **Buổi 4:** Nâng cao — Tạo skill enterprise-grade
> **Buổi 5:** Chiến lược — Triển khai cho team
>
> Bạn bắt đầu từ **'Tôi không biết gì về skill'** → Bây giờ **'Tôi tạo được skill, review được skill, lên kế hoạch triển khai skill cho team'**.
>
> **Đó là transformation.** Chúc mừng!"

**Next step:**

> "Tuần tới, bạn sẽ **follow 30-day plan**. Nếu gặp khó khăn — prompt không work, skill bug, team adoption slow — hãy quay lại các tài liệu khóa học, hoặc gửi câu hỏi [email/Slack/forum].
>
> Tôi sẽ follow progress của các nhóm. 30 ngày sau, chúng ta sẽ **retrospective** — chia sẻ success stories + lessons learned."

---

## Lưu ý dành cho giáo viên

1. **Chia nhóm theo phòng ban rất quan trọng:** Nếu chia random, bạn sẽ có "mixed team" (HR + Marketing + IT) — khó lên kế hoạch practical. Khuyến cáo: group by real org structure.

2. **Brainstorm fase:** Nếu nhóm stuck, gợi ý:
   - "Hôm nay bạn làm công việc gì lặp lại? Công việc nào tốn thời gian? Công việc nào dễ nhầm lẫn (cần checklist)?"
   - Gợi ý use case từ ví dụ trên.

3. **Owner assignment:** Khuyến cáo assign cho **người tích cực nhất** — có khả năng finish. Không nên assign "task nặng" cho người chưa tạo skill buổi 3.

4. **Success metrics là critical:** Skill không thể success nếu không có "measure sao". Force nhóm định rõ metric — time saved, adoption rate, satisfaction score, v.v.

5. **Risk mitigation:** Ask: "Điều gì có thể đi sai? Tương ứng 30 ngày có thực hiện được không? Risk nào?" → Prepare mitigation từ trước.

6. **Presentation:** Nếu 3 nhóm trình bày hết, nên để **mỗi nhóm 45-60 giây**. Giáo viên **facilitate Q&A:**
   - "Marketing team, HR hỏi: nếu CV skill của bạn ready trước, HR có thể borrow được không?" (foster cross-team collaboration idea)

7. **Archive plans:** Ghi các kế hoạch (photo + doc) — sẽ cần để follow-up buổi 6 (retrospective sau 30 ngày).

---

## Success Criteria

Hoạt động thành công khi:
- ✓ **Mỗi nhóm** hoàn thành **30-Day Plan** đầy đủ (part 1-7)
- ✓ **Mỗi use case** có: tác vụ rõ, owner gán, timeline định, metric đo
- ✓ **Ownership rõ ràng:** Ai tạo skill nào, khi nào, test ai
- ✓ **Timeline realistic:** 4 tuần để tạo 3 skills (mỗi skill ~5-7 ngày) — achievable
- ✓ **Success metrics cụ thể:** Time saved (hours/month), adoption rate (%), satisfaction (score)
- ✓ **Risk mitigation:** Ít nhất 2 risks identified + mitigations planned
- ✓ **Presentation:** Mỗi nhóm trình bày 1 phút elevator pitch rõ ràng
- ✓ **Engagement:** Nhóm tự generate ideas (không chỉ copy ví dụ), excited về kế hoạch
- ✓ Kết thúc khóa: **100% học viên** có **1 cụ thể next action** cho team của mình (không vague, concrete)
