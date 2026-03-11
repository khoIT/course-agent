# Hướng Dẫn Học Viên — Sử dụng Skills để khai thác sức mạnh LLM Agent

> Tài liệu tham khảo độc lập cho khóa học 5 buổi × 60 phút
> Dành cho người dùng phi kỹ thuật (business users)
> Tiếng Việt

---

## PHẦN 1: TỔNG QUAN KHÓA HỌC & MỤC TIÊU HỌC TẬP

### Khóa học gồm 5 buổi, mỗi buổi 1 giờ

#### Buổi 1: Agent & Skill 101 — Tại sao prompt đơn lẻ không đủ?
Bạn sẽ hiểu sự khác biệt cơ bản giữa hỏi ChatGPT một câu hỏi và sử dụng một **Agent có Skill**. Agent giống như một nhân viên thông minh được huấn luyện theo cách làm việc của công ty bạn. Kết quả nhất quán, lặp lại được, và không phụ thuộc vào tâm trạng hoặc cách diễn đạt của bạn hôm nay.

#### Buổi 2: Dùng Skills có sẵn — Biến AI thành trợ lý đa năng
Khám phá 6 skill cốt lõi (pptx, docx, pdf, xlsx, canvas-design, web search) và học cách kích hoạt chúng. Thực hành tạo slide, viết báo cáo, phân tích dữ liệu — tất cả chỉ bằng cách mô tả công việc bạn muốn agent làm.

#### Buổi 3: Tạo Skill đầu tiên — Từ người dùng thành người tạo
Học cấu trúc của file SKILL.md — bí kíp hướng dẫn agent làm công việc riêng của công ty bạn. Không cần code, chỉ cần viết rõ ràng. Bạn sẽ tạo ra skill đầu tiên của mình trong buổi này.

#### Buổi 4: Skill nâng cao & Claude Code — Từ đơn giản đến chuyên nghiệp
Nâng cấp skill với "sổ tay kiến thức" (references folder) để agent có thể tra cứu khi cần. Học về multi-step workflow — hướng dẫn agent thực hiện quy trình 10 bước tự động. Cũng so sánh hai nền tảng: Cowork (giao diện dễ dùng) vs Claude Code (mạnh mẽ hơn).

#### Buổi 5: Tối ưu, Chia sẻ & Chiến lược — Từ cá nhân đến tổ chức
Đánh giá chất lượng skill bằng checklist. Lập kế hoạch 30 ngày để triển khai skills cho team bạn. Từ đây, bạn không chỉ sử dụng AI mà còn xây dựng hệ thống AI cho cả phòng ban.

---

### Mục tiêu học tập chi tiết

Sau khóa học, bạn có thể:

| # | Mục tiêu | Buổi | Mức độ |
|---|----------|------|-------|
| 1 | Giải thích sự khác biệt giữa prompt đơn lẻ và LLM agent có skill, với 2+ ví dụ thực tế | 1 | Hiểu biết |
| 2 | Xác định 3+ loại công việc trong công việc hàng ngày có thể giao cho agent | 1 | Áp dụng |
| 3 | Kích hoạt và sử dụng 3+ skills có sẵn (pptx, docx, pdf, xlsx) để hoàn thành tác vụ | 2 | Áp dụng |
| 4 | Lựa chọn skill phù hợp cho từng loại công việc dựa trên task description | 2 | Áp dụng |
| 5 | Tạo file SKILL.md hoàn chỉnh theo template chuẩn | 3 | Áp dụng |
| 6 | Tổ chức thư mục skill với references/ và assets/ đúng cấu trúc | 3 | Áp dụng |
| 7 | Thiết kế skill phức tạp có references, multi-step workflow, và progressive disclosure | 4 | Tạo ra |
| 8 | So sánh cách skill hoạt động trong Cowork vs Claude Code, chọn nền tảng phù hợp | 4 | Đánh giá |
| 9 | Đánh giá chất lượng skill dựa trên 5 tiêu chí (trigger, quality, reusability, maintenance, scope) | 5 | Đánh giá |
| 10 | Xây dựng kế hoạch triển khai skills cho team/phòng ban với 3+ use case cụ thể | 5 | Tạo ra |

---

## PHẦN 2: KHÁI NIỆM CỐT LÕI

### Agent vs Prompt đơn lẻ — Phép Loại So Sánh

**Prompt đơn lẻ** = Hỏi đường một người lạ
- "Đi từ đây đến Hà Nội như thế nào?"
- Cách trả lời phụ thuộc vào người bạn hỏi, lúc bạn hỏi, tâm trạng họ
- Cùng câu hỏi, lần sau nhận được hướng dẫn khác
- Không nhớ ngữ cảnh công việc của bạn

**Agent có Skill** = GPS được lập trình cho công việc của bạn
- "Tạo báo cáo tuần theo format công ty tôi"
- Luôn làm đúng cách, lặp lại được, không thay đổi
- Biết quy trình cụ thể của bạn (ngữ cảnh)
- Có thể xử lý 100 task cùng lúc, không mệt, không sai

---

### Ba Khái Niệm Cốt Lõi

```
┌─────────────────────────────────────────────────────────┐
│                 AGENT ← reads → SKILL                   │
│                  ↓                ↓                      │
│              uses TOOLS      (references,               │
│              (pptx, docx,    instructions)              │
│               pdf, xlsx,                                │
│               canvas, web)                              │
│                  ↓                ↓                      │
│              ┌─────────────────────┐                    │
│              │  PRODUCES OUTPUT    │                    │
│              │ (slide, doc, chart, │                    │
│              │    analysis, etc)   │                    │
│              └─────────────────────┘                    │
└─────────────────────────────────────────────────────────┘
```

**Ví dụ từng khái niệm:**

#### 1. Agent (Nhân viên mới)
Agent là một LLM (Large Language Model) — ví dụ như Claude — được đưa vào vị trí "nhân viên" của bạn.
- **Đặc điểm:** Thông minh, có thể đọc, viết, phân tích, nhưng ban đầu chưa biết quy trình của công ty
- **Ví dụ:** "Claude, bạn là một nhân viên mới trong phòng Marketing. Hôm nay công việc của bạn là gì?"

#### 2. Skill (Sổ Tay Thủ Tục - SOP)
Skill là một "sổ tay" hướng dẫn agent cách làm công việc **của công ty BẠN**, không phải cách làm chung chung trên internet.
- **Nội dung:** Chi tiết quy trình, template, rule, tiêu chí chất lượng
- **Ví dụ:** Skill "viết-báo-cáo-tuần" hướng dẫn: "Báo cáo phải có 3 phần: Tóm tắt (100 từ), Kết quả (bullets), Kế hoạch tuần sau (bullets). Dùng font Times New Roman, kích thước 11, căn lề Justify."

#### 3. Tool (Phần mềm công ty)
Tool là công cụ cụ thể mà agent sử dụng để thực hiện công việc.
- **Ví dụ:** Để viết báo cáo, agent dùng tool `docx` (tạo file Word). Để tạo slide, dùng tool `pptx` (tạo Powerpoint). Để phân tích dữ liệu, dùng tool `xlsx` (tạo/phân tích Excel).

**Liên hệ toàn bộ:**
- Agent đọc Skill → Agent hiểu quy trình → Agent sử dụng Tools → Agent tạo Output chính xác

---

### Phân Biệt Rõ Ràng

| Khái niệm | Là gì? | Ví dụ | Được lập trình bởi |
|-----------|--------|-------|-------------------|
| **Agent** | LLM được đưa vào vị trí "nhân viên" | Claude, GPT-4, Gemini | OpenAI, Anthropic, Google |
| **Skill** | Sổ tay hướng dẫn chi tiết cho agent | "viết-email-chuẩn-công-ty", "tạo-slide-pitch" | **BẠN** hoặc team bạn |
| **Tool** | Phần mềm/khả năng agent sử dụng | pptx, docx, pdf, xlsx, canvas-design, web search | Cowork, Claude Code |

---

## PHẦN 3: HƯỚNG DẪN SỬ DỤNG 6 SKILLS CÓ SẴN

### Quy Trình Lựa Chọn Skill

```
Bạn có công việc
       ↓
Bạn muốn output kiểu gì?
       ├─→ Slide / Presentation  →  pptx
       ├─→ Word Document / Letter  →  docx
       ├─→ PDF / Final Report  →  pdf
       ├─→ Excel / Data Analysis  →  xlsx
       ├─→ Diagram / Infographic  →  canvas-design
       └─→ Information từ web  →  web search
```

### Bảng 6 Skills Cốt Lõi

| # | Tên Skill | Khi Nào Dùng? | Output | Ví dụ Prompt Kích Hoạt |
|---|-----------|---------------|--------|------------------------|
| 1 | **pptx** | Muốn tạo slide, presentation, pitch deck | File PowerPoint (.pptx) | "Dùng skill pptx: Tạo slide pitch về sản phẩm mới. Slide 1: Tiêu đề. Slide 2-3: 3 lợi ích chính. Slide 4: Pricing." |
| 2 | **docx** | Muốn viết document, báo cáo, email, contract | File Word (.docx) | "Dùng skill docx: Viết email xin phép và lập kế hoạch công việc tuần này cho quản lý, tone chuyên nghiệp, 200 từ." |
| 3 | **pdf** | Muốn trích xuất dữ liệu từ PDF hoặc tạo PDF | File PDF hoặc dữ liệu được trích | "Dùng skill pdf: Đọc file báo cáo tài chính Q1 và tóm tắt 5 metric chính." |
| 4 | **xlsx** | Muốn tạo spreadsheet, phân tích dữ liệu, tính toán | File Excel (.xlsx) | "Dùng skill xlsx: Tạo bảng phân tích chi phí dự án. Cột: Hạng mục, Budget, Actual, Variance %. Công thức tính Variance tự động." |
| 5 | **canvas-design** | Muốn vẽ diagram, infographic, poster, hình ảnh | Hình ảnh (PNG, SVG) | "Dùng skill canvas-design: Vẽ biểu đồ quy trình onboarding nhân viên. 5 bước, icon đơn giản, màu xanh và trắng." |
| 6 | **web search** | Muốn tìm kiếm thông tin từ internet | Thông tin/dữ liệu từ web | "Dùng skill web search: Tìm 5 best practices mới nhất về marketing email vào 2025." |

---

### Ví Dụ Chuỗi Skills (Skill Chaining)

**Tình huống:** Bạn muốn tạo "Báo cáo Hiệu Suất Marketing Tuần" hoàn chỉnh

**Workflow:**
1. **pdf skill** → Đọc file "analytics-data.pdf" (dữ liệu từ Google Analytics)
2. **xlsx skill** → Phân tích dữ liệu, tính toán conversion rate, ROI
3. **docx skill** → Viết báo cáo: Tóm tắt + bảng dữ liệu
4. **pptx skill** → Tạo slide summary để chia sẻ với lãnh đạo
5. **canvas-design skill** → Vẽ biểu đồ trend trực quan

**Một prompt duy nhất có thể kích hoạt 5 skills liên tiếp!**

---

### Skill Selection Framework

Dùng bảng này để chọn skill cho công việc của bạn:

| Công việc | Output mong muốn | Skill tốt nhất | Tại sao? |
|-----------|------------------|----------------|----------|
| Tạo slide pitch cho khách | PowerPoint | pptx | Tạo file presentation chuyên nghiệp |
| Viết email đề nghị hợp tác | Email formatted | docx | Tạo document có định dạng |
| Trích xuất dữ liệu từ báo cáo | Thông tin structured | pdf | Đọc và trích xuất từ PDF |
| Phân tích bán hàng tháng | Bảng tính, công thức | xlsx | Tạo bảng và tính toán |
| Vẽ sơ đồ quy trình | Diagram trực quan | canvas-design | Vẽ hình ảnh đẹp |
| Tìm thông tin xu hướng market | Web content | web search | Tìm trên internet |

---

## PHẦN 4: TEMPLATE SKILL.MD — SAO CHÉP & DÙNG NGAY

### Cấu Trúc SKILL.md

File SKILL.md gồm 2 phần chính:

1. **Frontmatter YAML** — Metadata (tên, mô tả, tag)
2. **Body** — Hướng dẫn chi tiết cho agent

### Template Chuẩn (Copy-Paste Ready)

```markdown
---
name: email-summarizer
description: Tóm tắt email dài thành 3 bullet points chính, giữ lại action items và deadline. Dùng khi bạn muốn nhanh chóng hiểu nội dung email mà không đọc toàn bộ.
keywords: email, summarize, action-item, quick-read
---

# Email Summarizer — Tóm Tắt Email Nhanh

## Mục đích
Bạn sẽ tóm tắt email dài (>300 từ) thành format dễ đọc, capture được 3 điểm chính và action items.

## Quy trình

### Bước 1: Đọc email
- Đọc toàn bộ email mà user cung cấp
- Xác định tone (formal, casual, urgent?)
- Ghi nhận người gửi, ngành, context

### Bước 2: Trích xuất 3 điểm chính
- Điểm 1: Thông tin quan trọng nhất
- Điểm 2: Thông tin hỗ trợ / context
- Điểm 3: Chi tiết hoặc follow-up info
- **Tiêu chí:** Mỗi điểm < 1 dòng, dùng danh từ + động từ, bỏ tính từ thừa

### Bước 3: Xác định action items
- Những việc user cần làm?
- Deadline nếu có?
- Người chịu trách nhiệm?
- Định dạng: Bullet list, mỗi item bắt đầu bằng "→"

### Bước 4: Output
- **Format:**
  ```
  📧 Email Summary

  **3 Điểm Chính:**
  - [Điểm 1]
  - [Điểm 2]
  - [Điểm 3]

  **Action Items:**
  → [Action 1] | Deadline: [nếu có]
  → [Action 2] | Deadline: [nếu có]

  **Tone:** [formal|casual|urgent]
  ```

## Tiêu chí chất lượng
- Tóm tắt < 1/3 độ dài email gốc ✓
- Action items rõ ràng, có thể execute ngay ✓
- Không mất thông tin quan trọng ✓
- Dễ scan bằng mắt (< 30 giây đọc xong) ✓

## Ví dụ

**Input email (dài):**
> Hi [Name],
> I hope this message finds you well. I'm writing to inform you about the upcoming product launch scheduled for next month. We've been working on this project for the past 6 months, and the team is excited to finally share it with you. As part of the launch, we need your help with marketing materials. Could you please prepare a press release and social media posts? We'd like to have these ready by March 31st. Also, we'll need approvals from the finance team before we can proceed with the budget allocation. Please confirm your availability for a meeting this Friday at 2 PM to discuss next steps. Let me know if you have any questions.

**Output (dùng skill này):**
```
📧 Email Summary

**3 Điểm Chính:**
- Product launch next month, 6-month project finalizing
- Marketing materials needed: press release + social posts
- Finance approval required for budget allocation

**Action Items:**
→ Prepare press release + social media posts | Deadline: March 31
→ Confirm availability for Friday 2 PM meeting | Deadline: This Friday
→ Coordinate with finance team for budget approval

**Tone:** formal
```

## Tips
- Nếu email có attachment, hỏi "Bạn muốn tôi đọc attachment không?"
- Nếu email quá ngắn (< 100 từ), output ngay, không tóm tắt thêm
- Nếu email dính vào chuỗi conversation, tóm tắt toàn bộ thread hoặc chỉ email mới nhất?

```

---

### Cách Điền Vào Template Cho Skill Của Mình

**Bước 1:** Thay `email-summarizer` bằng tên skill của bạn (kebab-case)
- ✓ Good: `tao-bao-cao-tuan`, `viet-email-hang-ngay`, `phan-tich-sales`
- ✗ Bad: `TaoBC`, `viết_email`, `phan.tich`

**Bước 2:** Viết description (1-2 câu, "pushy" — nói rõ khi dùng)
- ✓ "Tóm tắt email dài thành 3 bullet points. Dùng khi muốn nhanh chóng hiểu nội dung."
- ✗ "Giúp bạn với email."

**Bước 3:** Viết keywords (tag, separated by comma)
- Ví dụ: `email, summarize, action-item, quick-read`

**Bước 4:** Viết Body theo 4 phần
1. **Mục đích** — Tại sao skill này tồn tại?
2. **Quy trình** — Agent làm gì? Bước nào?
3. **Tiêu chí chất lượng** — Output phải thỏa tiêu chí nào?
4. **Ví dụ** — Một ví dụ input/output thực tế

---

### Lưu Ý Khi Viết SKILL.md

| Sai | Đúng | Lý Do |
|-----|------|-------|
| Mô tả quá chung: "Giúp viết email" | "Viết email xin phép, theo format công ty, tone chuyên nghiệp, < 150 từ" | Rõ ràng giúp agent trigger chính xác |
| Bước = 1 câu dài | Mỗi bước = 1-2 câu ngắn, có sub-steps | Agent dễ follow từng bước |
| Không có ví dụ | Kèm ví dụ input & output cụ thể | Agent biết kỳ vọng output là gì |
| Vocabulary toàn tiếng Anh | Dùng tiếng Việt agent hiểu (công ty bạn) | Agent context sâu hơn |

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

## PHẦN 7: SKILL QUALITY CHECKLIST

### 5 Tiêu Chí Đánh Giá

#### 1. Trigger Accuracy — Description kích hoạt đúng lúc?

**Tiêu chí:** Skill được kích hoạt khi nào? Description có rõ không?

**Self-assessment:**
- [ ] Description có 1-2 câu, rõ purpose và khi nào dùng
- [ ] Description sử dụng từ khóa (keyword) mà user thường nói
- [ ] Skill không bị confuse với skill khác

**Ví dụ:**
- ✓ Good: "Tóm tắt email dài thành 3 bullet. **Dùng khi muốn nhanh chóng hiểu nội dung.**"
- ✗ Bad: "Email tool"

---

#### 2. Output Quality — Kết quả có đạt tiêu chí không?

**Tiêu chí:** Output có đúng format, đủ nội dung, không có lỗi không?

**Self-assessment:**
- [ ] Output format match description (slide, doc, table...)
- [ ] Output độ dài phù hợp (không quá ngắn, không quá dài)
- [ ] Không có typo, grammar error
- [ ] Content chính xác, không hallucination
- [ ] Output dễ sử dụng ngay (không cần edit nhiều)

**Test:** Dùng skill 3 lần khác nhau, 3 lần kết quả có consistent không?

---

#### 3. Reusability — Người khác dùng được không?

**Tiêu chí:** SKILL.md đủ rõ cho bất kỳ người nào đọc + dùng?

**Self-assessment:**
- [ ] Instruction rõ ràng, không dùng jargon nội bộ
- [ ] Có ví dụ input/output cụ thể
- [ ] Không assume user biết cái gì cụ thể
- [ ] Dễ adapt cho các loại data khác nhau
- [ ] References folder (nếu có) có comment giải thích

**Test:** Cho đồng nghiệp đọc SKILL.md, có hiểu ngay không?

---

#### 4. Maintainability — Dễ cập nhật không?

**Tiêu chí:** Khi cần thay đổi skill, có dễ update không?

**Self-assessment:**
- [ ] SKILL.md được tổ chức clear (header, section)
- [ ] Nếu có references/, từng file có purpose riêng
- [ ] Naming files rõ ràng (references/email-template.md không phải references/v2.md)
- [ ] Nếu update 1 phần, không ảnh hưởng phần khác
- [ ] Có version control (git) track được ai change cái gì

**Test:** Update 1 instruction, có break cái khác không?

---

#### 5. Scope — Không quá rộng, không quá hẹp?

**Tiêu chí:** Scope skill có balance không?

**Self-assessment:**
- [ ] Skill focus vào 1 task, không cover mọi thứ
- [ ] Nhưng cũng không quá hẹp (chỉ cover 1 very specific case)
- [ ] Nếu quá rộng → split thành 2+ skills
- [ ] Nếu quá hẹp → merge vào skill khác hoặc expand phạm vi

**Ví dụ scope:**
- ✗ Quá rộng: "email-management" (cover tất cả email task)
  - → Split: email-summarizer, email-draft, email-classifier
- ✗ Quá hẹp: "email-summarizer-for-HR-emails-only"
  - → Expand: "email-summarizer" (work cho tất cả email types)
- ✓ Just right: "email-summarizer" (tóm tắt email, general purpose)

---

### Self-Evaluation Template

Dùng template này để tự đánh giá skill của bạn:

```markdown
# Skill Quality Self-Evaluation

**Skill name:** [tên skill của bạn]
**Evaluated on:** [ngày]

## Scores

| Tiêu chí | Score | Evidence | Cần cải thiện? |
|----------|-------|----------|---------------|
| 1. Trigger Accuracy | ☐ Pass ☐ NI ☐ NA | Description: "[copy description]" | |
| 2. Output Quality | ☐ Pass ☐ NI ☐ NA | Test 3x, result [consistent/inconsistent] | |
| 3. Reusability | ☐ Pass ☐ NI ☐ NA | Peer reviewed by: [name] | |
| 4. Maintainability | ☐ Pass ☐ NI ☐ NA | File structure: [describe] | |
| 5. Scope | ☐ Pass ☐ NI ☐ NA | Scope: [too broad / just right / too narrow] | |

**Summary:**
- ✓ Passes: [bao nhiêu tiêu chí]
- ⚠️ Needs Improvement: [bao nhiêu tiêu chí]
- ❌ Not Addressed: [bao nhiêu tiêu chí]

**Action items để improve:**
1. [cái gì cần fix đầu tiên]
2. [cái gì cần fix thứ hai]

**Ready to share?** ☐ Yes ☐ No (explain why)
```

---

## PHẦN 8: KẾ HOẠCH HÀNH ĐỘNG CÁ NHÂN

### Mẫu "My Top 3 Skills to Create"

Sau khóa học, xác định 3 skills ưu tiên bạn sẽ tạo:

```markdown
# My Skill Adoption Plan

## 1️⃣ Skill Thứ Nhất

**Tên:** [tên skill]
**Lý do tạo:** [Công việc nào bạn làm lặp lại mỗi tuần?]
**Task description:** [Mô tả rõ cái mà skill này phải làm]
**Expected output:** [Output là gì?]
**Expected time saved:** [Tiết kiệm bao nhiêu phút/tuần?]
**Target audience:** [Ai dùng? Chỉ bạn hay cả team?]

**Timeline:**
- Week 1: Viết SKILL.md draft
- Week 2: Test + iterate
- Week 3: Deploy vào Cowork
- Week 4+: Dùng hàng ngày, collect feedback

---

## 2️⃣ Skill Thứ Hai

**Tên:** [tên skill]
**Lý do tạo:** [...]
[Lặp lại template trên]

---

## 3️⃣ Skill Thứ Ba

**Tên:** [tên skill]
**Lý do tạo:** [...]
[Lặp lại template trên]

---

## Dependencies & Blockers

- Skill 1 cần hoàn thành trước Skill 2? (Yes/No)
- Có điều gì block bạn không? (Cần học thêm? Cần data?)

## Success Metrics

- Sau 30 ngày, bạn sẽ:
  - ☐ Tạo được 3 skills
  - ☐ Dùng skills này >5 lần mỗi skill
  - ☐ Rút gọn được [X%] thời gian cho công việc
  - ☐ Chia sẻ skills cho ≥2 đồng nghiệp
```

---

### 30-Day Adoption Plan Template (Individual)

Lập kế hoạch 30 ngày áp dụng skills vào công việc thực tế:

```markdown
# 30-Day Skill Adoption Plan

**Name:** [tên bạn]
**Team/Department:** [phòng ban]
**Start date:** [ngày bắt đầu]

---

## Week 1: Learn & Design

**Goal:** Hiểu rõ 3 skills & thiết kế chi tiết

| Day | Task | Status |
|-----|------|--------|
| 1-2 | Review course materials, identify repetitive tasks | ☐ |
| 3 | Design Skill 1: Write description + plan structure | ☐ |
| 4 | Design Skill 2: Write description + plan structure | ☐ |
| 5 | Design Skill 3: Write description + plan structure | ☐ |

---

## Week 2: Build

**Goal:** Tạo 3 skills xong

| Day | Task | Status |
|-----|------|--------|
| 6-7 | Build Skill 1: Write SKILL.md + test | ☐ |
| 8-9 | Build Skill 2: Write SKILL.md + test | ☐ |
| 10 | Build Skill 3: Write SKILL.md + test | ☐ |

---

## Week 3: Deploy & Test

**Goal:** Dùng skills vào công việc hàng ngày

| Day | Task | Status |
|-----|------|--------|
| 11-14 | Use Skill 1 daily, collect feedback | ☐ |
| 15-17 | Use Skill 2 daily, iterate | ☐ |
| 18-19 | Use Skill 3 daily, refine | ☐ |

---

## Week 4: Scale & Share

**Goal:** Chia sẻ skills & plan team adoption

| Day | Task | Status |
|-----|------|--------|
| 20-21 | Document lessons learned | ☐ |
| 22-24 | Share 3 skills với ≥2 teammates, get feedback | ☐ |
| 25-28 | Refine based on feedback | ☐ |
| 29-30 | Plan next batch of skills (for next 30 days) | ☐ |

---

## Metrics to Track

- **Skill creation:** 3/3 skills completed? (timeline)
- **Skill usage:** Usage count per skill in Week 3-4
- **Time saved:** Estimated hours saved per week
- **Quality:** Self-evaluation score (pass all 5 criteria?)
- **Adoption:** # teammates who adopt your skills

---

## Reflection

**After 30 days:**
- ✓ What worked well? (Which skills are most useful?)
- ⚠️ What was hard? (Pain points during creation?)
- 🎯 Next priorities? (What 3 skills to create next?)
```

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

## PHẦN 10: KẾT THÚC & BƯỚC TIẾP THEO

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

### 3 Bước Tiếp Theo

#### 1. Hành động trong 7 ngày
Tạo **1 skill đầu tiên** (đơn giản):
- Chọn 1 công việc lặp lại hàng tuần
- Viết SKILL.md theo template
- Test 3 lần
- Dùng trong công việc thực tế

#### 2. Mở rộng trong 30 ngày
Tạo **2-3 skills tiếp theo** dùng 30-day plan
- Week 1: Design
- Week 2: Build
- Week 3-4: Deploy & gather feedback

#### 3. Chia sẻ với team trong 90 ngày
- Lập skill library cho phòng ban
- Chia sẻ skills & document cách dùng
- Khích lệ teammates tạo skills riêng
- Build skill culture trong team

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

## PHỤ LỤC: THAM CHIẾU NHANH

### Folder Structure — Cấu Trúc Thư Mục

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

**Happy skill building!** 🚀
