# Activity 01: First CLI Prompt

<!-- Buổi 1 | 15 phút | Group Practice | LO1, LO2 -->

## Tổng quan

| Mục | Chi tiết |
|-----|----------|
| **Buổi** | 1 — Từ Web Chat đến CLI Power |
| **Thời lượng** | 15 phút (0:30–0:45) |
| **Hình thức** | Breakout rooms 3–4 người |
| **Mục tiêu** | LO1: thực hiện 3 tác vụ trên Claude Code; LO2: viết prompt R+C+T+F trong CLI |

## Kiểm tra REAL

- **R (Relevant):** 3 task đều là việc thực tế của học viên (email, hỏi đáp, so sánh output)
- **E (Engaging):** Khoảnh khắc "aha" khi thấy CLI output tốt hơn web mà không cần copy-paste
- **A (Active):** Gõ lệnh thực sự trong terminal, không chỉ xem demo
- **L (Learner-centered):** Học viên chọn task gần với công việc hàng ngày

## Tài liệu cần có

- Claude Code đã cài sẵn | Worksheet (bên dưới) qua chat Zoom | Slide 10

---

## Hướng dẫn Giảng viên

### Setup (2 phút — trước khi mở breakout)

1. Chia sẻ worksheet qua chat Zoom
2. Nhắc: "Ai chưa mở được terminal — gõ T vào chat ngay bây giờ"
3. Mở breakout rooms — assign 3–4 người/phòng

### Roaming Schedule (13 phút — trong breakout)

| Phút | Hành động Giảng viên |
|------|----------------------|
| 0–3 | Vào Room 1 — quan sát Bước 1. Kiểm tra mọi người đã mở được terminal chưa |
| 3–6 | Chuyển Room 2 — hỏi "Bước 2 đang tới đâu rồi?", demo lại R+C+T+F nếu cần |
| 6–9 | Chuyển Room 3 — hỗ trợ Bước 3 (so sánh output) |
| 9–11 | Quay Room 1 — kiểm tra early finishers, giao task mở rộng |
| 11–13 | Announce cả phòng: "Còn 2 phút — hoàn thành Bước 4 (ghi key learning)" |

### Intervention Triggers

| Tình huống | Cách xử lý |
|------------|-----------|
| Học viên không mở được terminal | Hỏi OS (Mac/Win/Linux) → hướng dẫn riêng: Mac: `Terminal`, Win: `cmd` hoặc `PowerShell`, rồi gõ `claude` |
| Học viên nói "web dễ hơn" | Đặt câu hỏi: "Output web bạn có structured như vậy không? Bạn có cần copy-paste sang file không?" — để chính họ tự nhận ra |
| Cả nhóm bị kẹt ở Bước 2 | Demo nhanh 30 giây: gõ `Role: [X]. Context: [Y]. Task: [Z]. Format: [W].` trong terminal |
| Không có kết quả khác biệt (web vs CLI) | Gợi ý: "Thử hỏi Claude Code 'đọc file này và tóm tắt' — web không làm được vậy" |

### Early Finisher Task

> "Thử gõ `/help` trong Claude Code — bạn thấy gì? Ghi lại 2 slash command bạn muốn dùng."

---

## Worksheet: Activity 01 — First CLI Prompt

**Tên học viên:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_ | **Phòng ban:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

### Bước 1 — Prompt đơn giản (3 phút)

Mở terminal → gõ `claude` → hỏi 1 câu liên quan đến công việc của bạn.

> Ví dụ: *"Viết email thông báo họp team vào 9h sáng thứ Hai."*

**Prompt bạn đã gõ:**
```
[Ghi lại prompt ở đây]
```

**Nhận xét output (1 câu):** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

### Bước 2 — Prompt có cấu trúc R+C+T+F (5 phút)

Viết lại prompt theo công thức:

| Thành phần | Bạn điền |
|-----------|----------|
| **Role** (AI đóng vai gì?) | |
| **Context** (bối cảnh cụ thể) | |
| **Task** (yêu cầu chính xác) | |
| **Format** (dạng output muốn nhận) | |

**Prompt hoàn chỉnh gõ vào Claude Code:**
```
[Dán prompt đã gõ]
```

---

### Bước 3 — Test + So sánh (4 phút)

Mở web chat (Claude.ai hoặc ChatGPT), gõ **cùng prompt** từ Bước 2.

| Tiêu chí | Claude Code CLI | Web Chat |
|----------|----------------|----------|
| Output có đúng format không? | ☐ Có ☐ Không | ☐ Có ☐ Không |
| Cần copy-paste sang file không? | ☐ Có ☐ Không | ☐ Có ☐ Không |
| Output sẵn sàng dùng ngay? | ☐ Có ☐ Không | ☐ Có ☐ Không |
| Điểm tổng (1–5) | \_\_ / 5 | \_\_ / 5 |

---

### Bước 4 — Key Learning (3 phút)

**Điểm CLI vượt trội nhất so với web chat:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**1 task công việc bạn muốn dùng Claude Code ngay tuần này:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

## Câu hỏi Debrief (Plenary — 0:45–0:52)

1. "Nhóm nào thấy CLI output tốt hơn web — tốt hơn ở điểm cụ thể nào?"
2. "Ai gặp khó khăn mở terminal? Giải quyết thế nào?"
3. "R+C+T+F thay đổi output của bạn như thế nào so với prompt đơn giản?"
