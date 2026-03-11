# Templates & References

**Part of:** [Course Overview](00-handout-overview-and-objectives.md)

---

## PHẦN 9: RESOURCES & FAQ

### File SKILL.md Example — Full Working Skill

**File: course-designer/SKILL.md** (Real skill từ khóa học này)

```markdown
---
name: course-designer
description: Thiết kế khóa học từ 0 → khảo sát học viên → viết mục tiêu → cấu trúc content → tạo hoạt động. Dùng khi bạn có khóa học mới cần design.
keywords: course, design, learning-objectives, ADDIE, lesson-plan
---

# Course Designer — Thiết Kế Khóa Học

## Mục đích
Bạn sẽ thiết kế một khóa học hoàn chỉnh theo ADDIE methodology (Analyze → Design → Develop → Implement → Evaluate).

## Workflow

### Bước 1: Phân tích (Analyze)
- **Input:** Mô tả khóa học (chủ đề, đối tượng, thời lượng)
- **Task:**
  - Ai là học viên? (job, experience, pain point)
  - Họ cần học cái gì?
  - Ràng buộc gì? (thời gian, budget, platform)
- **Output:** Learner portrait document

Xem `references/learner-analysis.md` để chi tiết.

### Bước 2: Thiết kế (Design)
- **Input:** Learner portrait
- **Task:**
  - Viết 8-12 learning objectives (Bloom's taxonomy)
  - Chọn content architecture (modules, sessions)
  - Plan hoạt động cho từng session
- **Output:** Learning objectives + content outline
- **Reference:** `references/learning-objectives-template.md`

### Bước 3: Phát triển (Develop)
- **Input:** Learning objectives + content outline
- **Task:**
  - Viết lesson plan chi tiết (buổi 1-5)
  - Tạo slides, handout, hoạt động
  - Viết facilitator guide
- **Output:** Lesson plan + slide deck + handout
- **Reference:** `references/lesson-plan-template.md`

### Bước 4: Thực thi (Implement)
- **Input:** Materials từ Bước 3
- **Task:** (Ngoài scope)
- **Output:** Course được deliver

### Bước 5: Đánh giá (Evaluate)
- **Input:** Feedback từ learners
- **Task:**
  - Evaluate content quality
  - Evaluate engagement & learning outcomes
  - Identify improvements
- **Output:** Evaluation report + action items
- **Reference:** `references/evaluation-criteria.md` (18 criteria checklist)

## Tiêu chí chất lượng
✓ Learning objectives aligned với learner needs
✓ Content sequenced logically (simple → complex)
✓ Activities are REAL (Relevant, Engaging, Active, Learner-centered)
✓ Passes 18-criterion evaluation checklist

## Ví dụ

**Input:**
```
Course topic: "Email Writing for Business"
Duration: 2 hours
Audience: Office workers who write emails daily
Goal: Improve email clarity & professionalism
```

**Output (từng phase):**

**Phase 1 — Learner Portrait:**
- Age: 25-45
- Job: Admin, HR, Sales, Marketing
- Current: Write email instinctively, sometimes get confused feedback
- Need: Email formula, tone guide, quick checklist

**Phase 2 — Learning Objectives:**
1. Understand 5 email types & when to use
2. Apply PREP formula (Purpose → Reason → Explanation → Purpose/Action)
3. Evaluate own email for clarity using checklist

**Phase 3 — Lesson Plan:**
- Session 1 (30min): Intro + Email Types
- Session 2 (30min): PREP Formula + Examples
- Session 3 (60min): Workshop + Email Audit
- Materials: Slides + Email template + Checklist handout

## Tips
- Always start with learner analysis — don't assume
- Objectives should be measurable (e.g., "Write email" NOT "Understand email")
- Activities > lecture (70% hands-on, 30% instruction)
- Test materials with real learners before finalize

---

## References
- `references/course-design-methodology.md` — Full ADDIE guide
- `references/learner-analysis.md` — Learner portrait template
- `references/learning-objectives-template.md` — Bloom's taxonomy guide
- `references/lesson-plan-template.md` — Lesson plan structure
- `references/evaluation-criteria.md` — 18-criterion checklist
```

---

### Quick Reference — Các Lệnh Hay Dùng

#### Trong Cowork:

```
"Dùng skill pptx: [mô tả công việc]"
"Dùng skill docx: [mô tả công việc]"
"Dùng skill xlsx: [mô tả công việc]"
"Dùng skill pdf: [mô tả công việc]"
"Dùng skill canvas-design: [mô tả công việc]"
"Dùng skill web search: [mô tả công việc]"
```

#### Tạo Skill:

```
"Tạo folder 'my-email-skill'. Viết file SKILL.md:
- name: email-summarizer
- description: [...]
- Viết body theo template"

"Nâng cấp skill 'my-email-skill'. Thêm folder 'references/' chứa:
- email-templates/
- company-tone-guide.md"
```

---

### FAQ — Câu Hỏi Thường Gặp

**Q: Skill của tôi không hoạt động. Làm sao debug?**

A: Kiểm tra:
1. Description có rõ không? (Agent có hiểu khi nào dùng?)
2. Quy trình có step-by-step không? (Hay quá vắn tắt?)
3. Output format có match description không?
4. Có ví dụ input/output không? (Agent biết mục tiêu là gì?)

Thường issue là: Description quá mập mờ, hoặc quy trình quá vắn tắt.

---

**Q: Mình nên tạo bao nhiêu skills?**

A: Không có con số magic, nhưng:
- **Tháng 1:** 1-3 skills (learn rồi hành động)
- **Tháng 2-3:** 3-5 skills (confidence tăng)
- **Tháng 4+:** Scale to team (team adoption plan)

Chất lượng > Số lượng. Một skill tốt dùng 100 lần > 10 skills tệ dùng 1 lần.

---

**Q: Skill của tôi quá phức tạp. Làm sao đơn giản hóa?**

A: Dùng **Progressive Disclosure:**
- SKILL.md: Viết short, simple, pushy description
- Body: Hướng dẫn cơ bản (3-5 bước)
- References/: Tài liệu chi tiết (agent chỉ đọc khi cần)

---

**Q: Cowork hay Claude Code?**

A: **Cowork** nếu:
- Sử dụng skills có sẵn (pptx, docx, pdf...)
- Quy trình <= 5 bước
- Kết quả là file
- Lần đầu dùng

**Claude Code** nếu:
- Cần custom tools
- Quy trình phức tạp (>6 bước, logic rẽ nhánh)
- Cần Python/bash
- Team cần git version control

---

**Q: Tôi là business user, có cần học code không?**

A: **Không** để dùng Cowork hoặc tạo simple skills.

**Có lợi** nếu:
- Muốn advanced skills (multi-step, custom tools)
- Dùng Claude Code
- Là tech-savvy business user

Nhưng khóa này focus: **0 code required** cho Cowork skills.

---

**Q: Làm sao chia sẻ skill với team?**

A:
- **Cowork:** Share link skill qua Cowork workspace
- **Claude Code:** Push SKILL.md → git repo, team pull & use

Cả 2 cách: Lúc share, attach documentation clear + ví dụ.

---

**Q: Skill của tôi có cần version control không?**

A:
- **Solo:** Không bắt buộc
- **Team (2+ người):** Nên dùng git (track ai change cái gì, dễ rollback)
- **Enterprise:** Bắt buộc (compliance, audit trail)

Nếu dùng Cowork: Cowork quản lý. Nếu dùng Claude Code: Dùng git.

---

## PHẦN 10: KẾT THÚC

### Bạn Vừa Hoàn Thành Khóa Học

Bạn đã đi từ "prompt là gì?" đến "tôi có thể tạo AI assistant cho công việc của tôi".

```
Buổi 1: Hiểu Agent & Skill
    ↓
Buổi 2: Dùng Skills có sẵn
    ↓
Buổi 3: Tạo Skill đầu tiên
    ↓
Buổi 4: Nâng cấp Skill & chọn Platform
    ↓
Buổi 5: Tối ưu & Lập Kế Hoạch Triển Khai
    ↓
🎯 BẠN CÓ SKILLS, NGƯỜI KHÁC CÓ THỂ DÙNG
```

---

### Cheat Sheet — Print & Dán

Lưu lại 1 trang này gần máy tính:

```markdown
# QUICK REFERENCE — Sử Dụng Skills

## Kích hoạt Skills trong Cowork:
"Dùng skill [tên-skill]: [mô tả công việc]"

## Template SKILL.md:
---
name: [tên-skill]
description: [Làm cái gì? Dùng khi nào? (1-2 câu)]
keywords: [tag1, tag2, tag3]
---

## Quy Trình (3-6 phần):
- **Mục đích:** Tại sao skill này tồn tại?
- **Quy trình:** Agent làm gì? (step-by-step)
- **Tiêu chí:** Output phải thỏa cái gì?
- **Ví dụ:** Input → Output cụ thể

## 5 Tiêu Chí Đánh Giá:
1. Trigger Accuracy — Description rõ không?
2. Output Quality — Kết quả có đạt không?
3. Reusability — Người khác dùng được không?
4. Maintainability — Dễ update không?
5. Scope — Không quá rộng/hẹp?

## Cowork vs Claude Code:
- COWORK: GUI, skills có sẵn, phi kỹ thuật
- CLAUDE CODE: Terminal, custom tools, developers
```

---

### Kênh Hỗ Trợ Sau Khóa

- **Q&A Forum:** [Link if available]
- **Slack Channel:** #llm-agents-with-skills
- **Office Hours:** Hàng tuần (schedule TBA)
- **Documentation:** [Link to wiki/docs]

---

### Lời Chúc Mừng

Bạn đã hoàn thành khóa học **"Sử dụng Skills để khai thác sức mạnh LLM Agent"**.

Từ đây, bạn không chỉ là **người dùng** AI mà còn là **nhà thiết kế** AI assistant cho công việc riêng.

**Điều này có nghĩa:**
- Bạn tiết kiệm **giờ làm việc** mỗi tuần
- Bạn tạo **giá trị** cho team bằng cách chia sẻ skills
- Bạn xây dựng **kỹ năng tương lai** — AI design thinking

Hãy bắt đầu hành động hôm nay. **Chọn 1 công việc, viết 1 skill, thay đổi cách bạn làm việc.**

---

### File & Folder Structure Reference

```
my-email-skill/
├── SKILL.md              ← Main file (copy-paste vào Cowork)
├── README.md             ← (Optional) Documentation for users
└── references/           ← (Optional) Chi tiết docs for agent
    ├── email-policy.md
    ├── tone-guide.md
    └── templates/
        ├── approval-request.txt
        └── project-update.txt
```

---

### File Naming Convention

| Item | Format | Example |
|------|--------|---------|
| Skill folder | `kebab-case-descriptive` | `email-summarizer`, `slide-generator` |
| SKILL.md | `SKILL.md` (always UPPERCASE) | `SKILL.md` |
| References | `kebab-case.md` | `email-policy.md`, `tone-guide.md` |
| Templates | `kebab-case-context.txt` | `approval-request-template.txt` |

---

### Keyword Tag Examples

Use relevant keywords để giúp user tìm skill:

| Category | Keywords |
|----------|----------|
| **Email** | email, summarize, draft, compose, response |
| **Document** | document, report, write, proposal, letter |
| **Data** | data, analysis, spreadsheet, calculation, metrics |
| **Design** | design, slide, presentation, infographic, diagram |
| **General** | workflow, automation, template, format, structure |

---

**Tài liệu này là tham khảo độc lập. Sử dụng nó bất cứ lúc nào bạn cần.**

**Happy skill building!**
