# Session 4: Skill nâng cao & Claude Code — Từ đơn giản đến chuyên nghiệp

**Part of:** [Course Overview](00-handout-overview-and-objectives.md)

---

## PHẦN 5: NÂNG CẤP SKILL

### Khi nào nâng cấp?

Nâng cấp skill khi:
- ✓ Skill cơ bản không cover toàn bộ use case
- ✓ Cần agent tra cứu tài liệu bên ngoài (template, policy)
- ✓ Quy trình phức tạp (10+ bước hoặc quyết định logic)
- ✓ Agent cần "tiến hóa" dần (progressive disclosure)

Không cần nâng cấp khi:
- ✗ Skill đơn giản, 1-2 bước, output ổn định
- ✗ Chưa dùng skill này ở thực tế bao giờ

---

### Kỹ Thuật 1: References Folder — "Sổ tay kiến thức"

**Ý tưởng:** Skill.md ngắn & đơn giản, nhưng có link đến file chi tiết trong folder `references/`

**Cấu trúc:**
```
my-email-skill/
├── SKILL.md              ← Short & pushy
└── references/
    ├── company-email-policy.md    ← Chi tiết policy
    ├── email-templates/
    │   ├── approval-request.txt
    │   ├── project-update.txt
    │   └── apology-letter.txt
    └── tone-guide.md              ← Cách viết tone công ty
```

**Cách dùng trong SKILL.md:**
```markdown
## Tài liệu tham khảo
- **Email Policy:** Xem `references/company-email-policy.md`
- **Templates:** Dùng templates phù hợp từ `references/email-templates/`
- **Tone Guide:** Nếu không chắc tone, xem `references/tone-guide.md`
```

Agent sẽ tự động đọc những file này khi cần.

---

### Kỹ Thuật 2: Progressive Disclosure — "Giải thích từ từ"

**Ý tưởng:** SKILL.md giải thích ngắn gọn. References chứa chi tiết sâu. Agent chỉ đọc references khi user ask hoặc khi cần thiết.

**Ví dụ:**

**SKILL.md (ngắn, dễ hiểu):**
```markdown
---
name: course-designer
description: Thiết kế khóa học từ 0: phân tích học viên → viết mục tiêu → cấu trúc nội dung → tạo hoạt động. Dùng khi bạn có ý tưởng khóa học mới.
---

# Course Designer

Bạn sẽ thiết kế khóa học theo ADDIE methodology: Analyze → Design → Develop → Implement → Evaluate.

Xem `references/course-design-methodology.md` để hiểu chi tiết từng phase.
```

**references/course-design-methodology.md (dài, chi tiết):**
```markdown
# ADDIE Methodology — Hướng Dẫn Chi Tiết

## Phase 1: Analysis
### Learner Analysis
- Ai là học viên? (age, job, experience)
- Họ biết gì hiện tại?
- Họ cần học cái gì?
...
[200+ dòng chi tiết]
```

Agent đọc SKILL.md ngắn gọn, nhưng khi cần chi tiết, tự động kéo references.

---

### Kỹ Thuật 3: Multi-Step Workflow — "Quy trình 10 bước tự động"

**Ý tưởng:** SKILL.md hướng dẫn agent thực hiện 1 quy trình dài qua nhiều bước tuần tự, có checkpoint.

**Ví dụ: Skill "tao-slide-report"**

```markdown
# Tạo Slide Report — 10 Bước Tự Động

## Workflow

### Bước 1: Đọc dữ liệu
- User upload file CSV hoặc paste dữ liệu
- Agent: Parse dữ liệu, xác định metric chính (5-7 metrics)

### Bước 2: Phân tích dữ liệu
- Tính trend, growth rate, outliers
- Agent: Dùng xlsx skill nếu cần tính toán phức tạp
- **Checkpoint:** User confirm metrics có đúng không

### Bước 3: Viết script slide
- Agent viết script mỗi slide (3-4 dòng mỗi slide)
- Bao gồm: tiêu đề, 3 bullet points, insights

### Bước 4: Tạo slide
- Agent: Dùng pptx skill, tạo 8-10 slide
- Slide 1: Title
- Slide 2-7: Mỗi metric 1 slide + chart
- Slide 8: Key Insights
- Slide 9: Recommendations
- Slide 10: Next Steps

### Bước 5: Quality check
- Agent: Kiểm tra từng slide
  - Có typo không?
  - Chart có chính xác không?
  - Tone có thống nhất không?

### Bước 6: Output
- Tạo file pptx
- Gợi ý cải thiện (nếu có)
```

**Điểm mạnh:**
- Quy trình rõ ràng, không bỏ sót bước
- Agent có checkpoint để user confirm
- Kết hợp nhiều tools (xlsx + pptx)

---

### Ví Dụ: Trước & Sau Nâng Cấp

#### TRƯỚC (Simple Skill)
```markdown
---
name: email-summarizer
description: Tóm tắt email thành 3 bullet
---

## Mục đích
Tóm tắt email dài.

## Quy trình
1. Đọc email
2. Tóm tắt 3 điểm chính
3. List action items

## Output
- 3 bullet points
- Action items
```

#### SAU (Advanced Skill)
```markdown
---
name: email-summarizer-pro
description: Tóm tắt email + xác định priority + suggest response. Dùng khi muốn xử lý email hàng loạt nhanh.
---

## Mục đích
Tóm tắt email, phân loại priority, và gợi ý response.

## References
- `references/priority-matrix.md` — Cách xác định priority
- `references/response-templates/` — Template response cho từng loại email
- `references/company-tone.md` — Tone chuẩn công ty

## Workflow

### Bước 1: Phân loại email
- Loại gì? (notification, request, urgent, FYI?)
- Người gửi? (internal, customer, vendor?)

### Bước 2: Tóm tắt & priority
- Tóm tắt 3 điểm (xem `references/priority-matrix.md`)
- Gán priority: 🔴 Urgent | 🟡 High | 🟢 Normal | ⚪ FYI

### Bước 3: Xác định action
- Có action cần làm không?
- Deadline?
- Phó thác cho ai?

### Bước 4: Gợi ý response
- Dùng template từ `references/response-templates/`
- Điều chỉnh tone theo `references/company-tone.md`
- Output: Draft response (user review trước send)

## Output
```
📧 Email Summary — [Priority Tag]

Từ: [Người gửi]
Loại: [Email type]

**3 Điểm Chính:**
- ...

**Action Items:**
→ ...

**Draft Response** (review & edit trước send):
> ...
```
```

**So sánh:**
- **Simple:** 3 bước, 20 dòng, output cơ bản
- **Advanced:** 4 bước, 60 dòng, 3 references, output chi tiết + draft response

---

## PHẦN 6: COWORK VS CLAUDE CODE

### Bảng So Sánh

| Tiêu chí | Cowork | Claude Code |
|----------|--------|------------|
| **Giao diện** | GUI (Graphical User Interface) — kéo thả, button | Terminal/Command line — gõ lệnh |
| **Đối tượng** | Business users, phi kỹ thuật | Developers, engineer, technical users |
| **Cài đặt** | Web-based, không cần cài gì | Cần install Claude Code CLI |
| **Skill storage** | Lưu trong Cowork workspace | Lưu local folder hoặc git repo |
| **Version control** | Không có git | Full git integration (commit, push, pull) |
| **Tools/Skills** | Skill library Cowork (pptx, docx, pdf, xlsx, canvas-design, web search) | Custom tools, Python scripts, bash commands |
| **File system** | Cowork quản lý file | Toàn quyền truy cập local file system |
| **Speed** | Medium | Fast (local execution) |
| **Complexity** | Đơn giản → Trung bình | Trung bình → Phức tạp |
| **Learning curve** | 1-2 buổi | 1-2 tuần |
| **Team collab** | Chia sẻ skill qua link | Git repo collaboration |
| **Debugging** | UI feedback | Console logs, full error messages |
| **Code writing** | Không cần code | Có thể viết Python, bash, etc. |

---

### Decision Flowchart — Chọn Nền Tảng

```
Bạn muốn làm gì?
│
├─→ Tạo slide, doc, phân tích dữ liệu cơ bản?
│   └─→ **COWORK** ✓ (đơn giản, đủ rồi)
│
├─→ Quy trình phức tạp, cần tích hợp nhiều tool?
│   └─→ **TÙY THUỘC**: Cowork nếu skills có sẵn đủ
│        hoặc Claude Code nếu cần custom tool
│
├─→ Cần git version control, deploy code?
│   └─→ **CLAUDE CODE** ✓ (bắt buộc)
│
├─→ Cần chạy Python script, bash command?
│   └─→ **CLAUDE CODE** ✓ (Cowork không hỗ trợ)
│
├─→ Team 10+ người, cần centralized skill library?
│   └─→ **CLAUDE CODE** ✓ (git repo dễ chia sẻ)
│
└─→ Lần đầu dùng, không biết code?
    └─→ **COWORK** ✓ (easier onboarding)
```

---

### Khi Nào Dùng Cowork?

- ✓ Skill dùng tools có sẵn (pptx, docx, pdf, xlsx, canvas-design, web search)
- ✓ Quy trình <= 5-6 bước
- ✓ Kết quả là file (slide, doc, image)
- ✓ Team nhỏ (1-5 người)
- ✓ Không cần version control phức tạp
- ✓ Bạn là business user, không code

**Ví dụ ideal:** "Mỗi thứ 2, tạo báo cáo tuần bằng Cowork. 5 phút setup, 1 phút chạy."

---

### Khi Nào Dùng Claude Code?

- ✓ Cần custom tools (không có sẵn)
- ✓ Quy trình phức tạp (>6 bước, logic rẽ nhánh)
- ✓ Cần script (Python, bash, JavaScript)
- ✓ Cần git version control
- ✓ Team lớn, cần centralized repo
- ✓ Bạn (hoặc team) có coding background

**Ví dụ ideal:** "Build internal tool để parse 1000 CSV files, transform, load vào database. Cần 50 dòng Python."

---

### Demo: Cùng 1 Skill, 2 Nền Tảng

**Skill: "tao-slide-quarterly-report"**

**Cowork:**
```
👤 Me: Dùng skill tao-slide-quarterly-report. File data: Q1-revenue.csv
🤖 Agent: [Kéo file, preview dữ liệu] → [Tạo slide] → [Download Q1-report.pptx]
⏱️ Time: 2 phút
```

**Claude Code:**
```
$ claude run skill:tao-slide-quarterly-report data/Q1-revenue.csv output/
🤖 Agent: [Parse CSV, validate] → [Analyze metrics] → [Generate pptx] → [Commit to git]
Generated: Q1-report.pptx
Committed: feat: Q1 quarterly report slides
⏱️ Time: 1 phút (faster, local execution)
📝 Version: git history, rollback if needed
```

**Kết quả:**
- Cowork: Output slide, lưu ở Cowork workspace
- Claude Code: Output slide, lưu local + git history

---

**Next:** [Session 5: Tối ưu & Triển khai](05-handout-session-05-optimize-and-strategy.md)
