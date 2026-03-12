# Claude Code & Cowork — Tài Liệu Tra Cứu Nhanh

> Tổ chức theo TÁC VỤ, không theo buổi học. Dùng độc lập — không cần tham dự khóa học.

---

## Mục lục

1. [Bắt đầu với Claude Code](#1-bắt-đầu-với-claude-code)
2. [Viết prompt cơ bản trong CLI](#2-viết-prompt-cơ-bản-trong-cli)
3. [Chọn framework phù hợp](#3-chọn-framework)
4. [Few-shot prompting trong Claude Code](#4-few-shot-prompting)
5. [Thiết kế CLAUDE.md](#5-thiết-kế-claudemd)
6. [Tạo prompt template tái sử dụng](#6-tạo-prompt-template)
7. [Đánh giá chất lượng output](#7-đánh-giá-output)
8. [Tổ chức cowork workspace cho team](#8-cowork-workspace)

---

## 1. Bắt đầu với Claude Code

**Khi nào dùng:** Lần đầu cài đặt hoặc khi cần tra lệnh cơ bản.

**Cài đặt:**
```bash
npm install -g @anthropic-ai/claude-code   # Cài một lần
claude                                      # Mở Claude Code
```

**Lệnh thường dùng:**
| Lệnh | Tác dụng |
|------|---------|
| `claude` | Mở Claude Code trong thư mục hiện tại |
| `/help` | Xem tất cả slash commands |
| `/clear` | Xóa context, bắt đầu session mới |
| `/compact` | Tóm tắt context dài để tiết kiệm tokens |
| `Ctrl+C` | Thoát Claude Code |

**Tips:** Chạy `claude` từ đúng project folder — CLAUDE.md trong folder đó sẽ được tự động đọc.

---

## 2. Viết prompt cơ bản trong CLI

**Khi nào dùng:** Bất kỳ task nào — email, báo cáo, phân tích, tóm tắt.

**Công thức:** `Role + Context + Task + Format`

```
Role: Bạn là [chuyên môn cụ thể].
Context: [Bối cảnh, dữ liệu, constraints cần biết].
Task: [1 hành động cụ thể cần làm].
Format: [Output trông thế nào: bullet/table/email/paragraph, max words].
```

**Ví dụ:**
```
Role: Bạn là chuyên viên HR senior tại công ty tech 200 nhân viên.
Context: Nhân viên [TÊN] xin nghỉ phép 2 tuần liên tiếp tháng 12 (high season).
Policy cho phép nhưng cần manager approval và handover plan.
Task: Viết email phản hồi — approve kèm yêu cầu handover tasks.
Format: Email < 100 words, tone warm but professional, có next steps rõ ràng.
```

**Lợi thế CLI so với web chat:** Claude Code đọc file trực tiếp — thêm `Đọc file report.csv và tóm tắt` thay vì copy-paste nội dung.

---

## 3. Chọn framework

**Khi nào dùng:** Khi không chắc nên dùng RTT hay CO-STAR.

```
Task xong trong < 5 phút?  ──Yes──► RTT
        │No
Task cần stakeholder review?  ──Yes──► CO-STAR
        │No
Task lặp lại hàng tuần?  ──Yes──► RTT + Template (xem mục 6)
        │No
        └──► Bắt đầu RTT, nâng lên CO-STAR nếu output chưa đủ
```

**RTT — 70% task routine:**
```
Role: [vai trò]
Task: [việc cần làm]
Tone: [formal / casual / technical / empathetic]
```

**CO-STAR — 30% task quan trọng:**
```
Context:   [bối cảnh + data + constraints]
Objective: [output này dùng để làm gì?]
Style:     [báo cáo / email / presentation?]
Tone:      [formal / casual / confident]
Audience:  [ai sẽ đọc output?]
Response:  [format + độ dài tối đa]
```

---

## 4. Few-shot prompting

**Khi nào dùng:** Cần AI output đúng FORMAT — phân loại, extract data, điền template.

**Template:**
```
Task: [mô tả task]

Ví dụ 1:
Input: [input mẫu]
Output: [output mong muốn]

Ví dụ 2:
Input: [input mẫu khác]
Output: [output mong muốn]

Bây giờ hãy làm:
Input: [input thật]
Output:
```

**Tips:** 2–3 ví dụ là đủ. Ví dụ phải đa dạng — đừng cho 3 ví dụ giống nhau. Lưu few-shot examples vào CLAUDE.md để dùng lại mỗi session.

---

## 5. Thiết kế CLAUDE.md

**Khi nào dùng:** Khi có project lặp lại hoặc muốn AI nhớ context lâu dài.

**CLAUDE.md là gì:** File đặt trong project folder — Claude Code tự đọc mỗi lần khởi động. Không cần nhắc lại context mỗi session.

**Template CLAUDE.md:**
```markdown
# [Tên Project / Team]

## Project Context
[Mô tả team, ngành, loại công việc — 2–3 câu ngắn gọn]

## Output Rules
- Ngôn ngữ: Tiếng Việt
- Tone: [professional / friendly / technical]
- Format mặc định: [markdown / plain text / table]

## Prompt Templates
Xem thư mục `./prompts/` — tổ chức theo category.

## Few-shot Examples
[Dán 2–3 ví dụ input/output cho task phổ biến nhất]

## Team Guidelines
[Rules đặc thù: "Không đề xuất giải pháp tốn > 10M VND", "Luôn cite nguồn"]
```

**Vị trí lưu:** Đặt CLAUDE.md ở root của project folder. Chạy `claude` từ folder đó.

---

## 6. Tạo prompt template

**Khi nào dùng:** Task lặp lại — weekly report, email response, data extraction.

**Cấu trúc file template:**
```markdown
# Template: [Tên task] — [Framework]
# Version: v1 | Tested: [date] | Accuracy: [%]

Role: [role cố định]
Context: [context cố định] — [BIẾN_1: mô tả] — [BIẾN_2: mô tả]
Task: [task cố định với [BIẾN] chèn vào]
Format: [format cố định]

## Variables:
- [BIẾN_1]: ví dụ: tên khách hàng, tên sản phẩm
- [BIẾN_2]: ví dụ: ngày, số liệu cụ thể
```

**Checklist trước khi lưu:**
- ☐ Role cụ thể cho task type này
- ☐ Context có industry-specific terms
- ☐ Variables dùng [BRACKETS] rõ ràng
- ☐ Format chỉ rõ output trông thế nào
- ☐ Test ≥ 3 lần với data khác nhau

**Naming:** `[task]-[framework]-v[version].md` — ví dụ: `weekly-report-costar-v2.md`

---

## 7. Đánh giá chất lượng output

**Khi nào dùng:** Sau mỗi output quan trọng — trước khi gửi hoặc dùng.

**Rubric 4 tiêu chí (1–5 mỗi tiêu chí, target tổng ≥ 16/20):**

| Tiêu chí | 1–2 (Kém) | 3 (OK) | 4–5 (Tốt) |
|----------|-----------|--------|-----------|
| **Accuracy** | Sai / bịa thông tin | Đúng nhưng thiếu | Chính xác, có data cụ thể |
| **Completeness** | Thiếu phần chính | Đủ ý, thiếu nuance | Đầy đủ, không thừa thiếu |
| **Tone** | Sai giọng hoàn toàn | Gần đúng | Đúng cho audience |
| **Actionability** | Không biết next step | Có hướng nhưng mờ | Rõ ai làm gì, khi nào |

**Khi score < 16 — iterate theo thứ tự:**
1. Context thiếu? → Thêm bối cảnh cụ thể
2. Format chưa rõ? → Specify: "table 3 cột, max 200 words"
3. Task quá rộng? → Chia nhỏ thành 1 hành động
4. Thiếu ví dụ? → Thêm few-shot (xem mục 4)

**Rule:** Dùng `/clear` giữa các lần test để tránh context cũ ảnh hưởng kết quả.

---

## 8. Cowork workspace cho team

**Khi nào dùng:** Khi muốn deploy Claude Code cho cả team.

**Cấu trúc workspace:**
```
cowork-workspace/
├── CLAUDE.md              ← Shared config cho cả team
├── README.md              ← Hướng dẫn onboarding (5–10 dòng)
└── prompts/
    ├── email/
    ├── report/
    ├── analysis/
    └── [category-team]/
```

**Kế hoạch triển khai 30 ngày:**

| Tuần | Việc cần làm |
|------|-------------|
| **Week 1** | Cài Claude Code cho 2–3 champions. Chọn 3 pilot tasks (high-frequency, low-risk). |
| **Week 2** | Pilot với shared CLAUDE.md. Thu thập data: giờ tiết kiệm / task. |
| **Week 3** | Feedback session. Refine prompts. Mở rộng CLAUDE.md từ learnings. |
| **Week 4** | Onboard toàn team. Đo ROI. Quyết định expand hay adjust. |

**Xử lý resistance phổ biến:**
- *"Terminal khó quá"* → Champion demo live 10 phút + cheat sheet lệnh cơ bản
- *"Web chat đã đủ rồi"* → So sánh live: cùng 1 task, đếm số bước web vs CLI
- *"Không có thời gian học"* → Bắt đầu với 1 task lặp lại nhất — 30 phút setup, tiết kiệm mãi

**Slash commands reference nhanh:**
```
/help      Xem commands
/clear     Reset session (dùng giữa các test)
/compact   Tóm tắt context dài
```
