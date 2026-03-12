# Activity 07: Build Your Cowork Workspace

> **Buổi:** 5 | **Thời gian:** 18 phút | **Hình thức:** Individual Workshop | **LO:** LO9

## Tổng quan
Học viên tổ chức tất cả prompts và CLAUDE.md từ buổi 1–4 thành một cowork workspace có cấu trúc chuẩn: ≥10 prompts phân loại theo category, naming convention nhất quán, shared CLAUDE.md, và testing notes.

## REAL Criteria Check
- **R**elevant: Dùng chính các prompts đã tạo trong khóa học — không phải bài tập lý thuyết ✓
- **E**ngaging: Kết thúc buổi có sản phẩm hoàn chỉnh mang về dùng ngay ✓
- **A**ctive: Di chuyển files + viết CLAUDE.md + test 1 prompt từ workspace mới ✓
- **L**earner-centered: Cấu trúc workspace phù hợp ngành và workflow riêng ✓

## Materials Needed
- Tất cả prompts đã tạo từ buổi 1–4 (ít nhất 6–8 prompts)
- Terminal + Claude Code
- Text editor

## Procedure

### Setup (2 phút)
1. "Mở terminal trong folder làm việc của bạn."
2. "Liệt kê tất cả prompt files đã có: `ls -la` hoặc xem trong Explorer."
3. "Mục tiêu: cuối 18 phút bạn có 1 workspace folder với ≥10 prompts có cấu trúc."

### During Activity — Facilitator Micro-Actions (16 phút)

**Roaming schedule:**
- 0:00–0:03: Kiểm tra ai đã có đủ prompts từ buổi trước. Ai thiếu → "Tạo thêm 2–3 prompt nhanh từ task thực tế — chỉ cần draft."
- 0:03–0:07: Folder structure phase — nhiều người không biết tổ chức thế nào. Refer đến workspace template dưới đây.
- 0:07–0:12: CLAUDE.md consolidation — phần khó nhất. "CLAUDE.md mới gộp tất cả rules từ các buổi + path đến prompt library."
- 0:12–0:16: Test phase — chạy 1 prompt từ workspace mới qua Claude Code để xác nhận setup đúng.
- 0:16–0:18: Checklist review — "Đếm prompts: đủ 10 chưa?"

**Câu nói khi bị stuck:**
- "Không biết phân loại thế nào?" → "Nhìn vào prompts: email thì vào `email/`, báo cáo thì vào `report/`, phân tích thì vào `analysis/`."
- "CLAUDE.md cũ và mới xung đột?" → "Dùng CLAUDE.md mới — copy những rules quan trọng từ cái cũ vào."
- "Claude Code không đọc được template?" → "Kiểm tra path trong CLAUDE.md: phải là relative path từ folder chạy claude."

**Early finisher:**
- "Xong rồi? Thêm `README.md` vào workspace — 5–10 dòng hướng dẫn cho đồng nghiệp."

**Time-check announcements:**
- 0:05: "Folder structure xong chưa? Nếu chưa — tạo 3 folders: `email/`, `report/`, `other/` là đủ."
- 0:10: "CLAUDE.md đã update chưa? Đây là bước không được bỏ qua."
- 0:16: "2 phút — test 1 prompt. Chỉ cần 1 cái chạy được là xác nhận setup đúng."

## Workspace Structure Template

```
cowork-workspace/
├── CLAUDE.md                    ← Shared config cho cả team
├── README.md                    ← Hướng dẫn dùng workspace (optional)
├── prompts/
│   ├── email/
│   │   ├── customer-response-rtt-v1.md
│   │   ├── internal-update-costar-v1.md
│   │   └── complaint-handling-rtt-v1.md
│   ├── report/
│   │   ├── weekly-summary-costar-v1.md
│   │   └── monthly-analysis-cot-v1.md
│   ├── analysis/
│   │   ├── data-summary-fewshot-v1.md
│   │   └── feedback-classify-fewshot-v1.md
│   └── [category-riêng-của-bạn]/
│       └── ...
└── testing-notes/
    └── test-log.md              ← Ghi kết quả test theo ngày
```

**Naming convention:** `[task-ngắn]-[framework]-v[version].md`
- Ví dụ: `customer-complaint-rtt-v2.md`, `q4-report-costar-v1.md`

**CLAUDE.md mẫu cho workspace:**
```markdown
# [Tên Team/Phòng ban] Cowork Workspace

## Project Context
[Mô tả team, ngành, loại công việc chính — 2–3 câu]

## Prompt Library
Tất cả prompt templates trong `./prompts/` — tổ chức theo category.
Naming: [task]-[framework]-v[version].md

## Output Rules
- Ngôn ngữ: Tiếng Việt (trừ khi có yêu cầu khác)
- Tone mặc định: Professional, clear, actionable
- Format mặc định: Markdown với headers rõ ràng

## Team Guidelines
[Bất kỳ rules nào team muốn AI tuân theo]
```

## Checklist Hoàn Thành Workspace

**Cấu trúc:**
- ☐ Folder `prompts/` với ít nhất 2 sub-categories
- ☐ ≥10 prompt files (từ buổi 1–4 + mới tạo thêm nếu cần)
- ☐ Naming convention nhất quán (`[task]-[framework]-v[version].md`)

**CLAUDE.md:**
- ☐ Project context mô tả đúng team/ngành
- ☐ Reference đến `./prompts/` folder
- ☐ Output rules (ngôn ngữ, tone, format mặc định)

**Testing:**
- ☐ Chạy `claude` từ workspace folder
- ☐ Test ít nhất 1 prompt — output đúng như mong đợi
- ☐ Testing notes ghi lại kết quả

## Debrief Questions
1. Bao nhiêu người đạt ≥10 prompts? Category nào có nhiều nhất?
2. Phần nào mất nhiều thời gian nhất: folder structure, CLAUDE.md, hay test?
3. Workspace này deploy cho team — cần thêm gì?
