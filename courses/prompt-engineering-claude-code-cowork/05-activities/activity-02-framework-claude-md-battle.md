# Activity 02: Framework + CLAUDE.md Battle

<!-- Buổi 2 | 12 phút | Group Comparison | LO3, LO4 -->

## Tổng quan

| Mục | Chi tiết |
|-----|----------|
| **Buổi** | 2 — Framework trong Claude Code |
| **Thời lượng** | 12 phút (0:40–0:52) |
| **Hình thức** | Breakout rooms 3–4 người, mỗi nhóm 1 scenario ngành |
| **Mục tiêu** | LO3: RTT trong Claude Code; LO4: CO-STAR + CLAUDE.md kết hợp |

## Kiểm tra REAL

- **R (Relevant):** 4 scenario sát với công việc thực tế của từng ngành (HR/Marketing/Finance/Ops)
- **E (Engaging):** So sánh trực tiếp 3 outputs trong cùng terminal session — thấy rõ sự khác biệt
- **A (Active):** Nhóm tự viết prompt, tự tạo CLAUDE.md, tự chạy lệnh
- **L (Learner-centered):** Mỗi nhóm được giao scenario đúng ngành của họ

## Tài liệu cần có

- Worksheet so sánh (bên dưới) — chia sẻ qua chat trước breakout
- 4 scenario cards (phân công theo ngành trước khi vào phòng)
- Claude Code đang chạy trên máy học viên

---

## 4 Business Scenarios

### Scenario A — HR
> Phòng HR cần soạn **thông báo tuyển dụng** cho vị trí Chuyên viên Kế toán. Yêu cầu: chuyên nghiệp, ngắn gọn, có mô tả vị trí + yêu cầu + phúc lợi. Định dạng: văn bản chạy trong email nội bộ.

### Scenario B — Marketing
> Team Marketing cần viết **caption LinkedIn** ra mắt sản phẩm mới (phần mềm quản lý kho). Yêu cầu: tone hào hứng nhưng professional, có call-to-action, dưới 200 từ.

### Scenario C — Finance
> Phòng Tài chính cần **tóm tắt báo cáo chi phí quý** cho ban lãnh đạo. Yêu cầu: highlight 3 điểm bất thường, so sánh vs quý trước, đề xuất hành động. Format: bullet points.

### Scenario D — Operations
> Phòng Vận hành cần soạn **SOP ngắn** cho quy trình kiểm tra hàng nhập kho. Yêu cầu: 5–7 bước rõ ràng, có checklist, ngôn ngữ thực thi không mơ hồ.

---

## Hướng dẫn Giảng viên

### Setup (1 phút — trước breakout)

1. Assign scenario theo ngành: "Room 1 = HR, Room 2 = Marketing, Room 3 = Finance, Room 4 = Ops"
2. Nhắc cấu trúc 3 lần test: RTT → CO-STAR → CO-STAR + CLAUDE.md
3. Mở breakout rooms

### Roaming Schedule (11 phút)

| Phút | Hành động Giảng viên |
|------|----------------------|
| 0–2 | Vào Room 1 — quan sát nhóm viết RTT, nhắc đủ 3 thành phần Role-Task-Tone |
| 2–5 | Chuyển Room 2 — hỗ trợ CO-STAR nếu nhóm nhầm giữa Context vs Objective |
| 5–8 | Chuyển Room 3 — hướng dẫn tạo CLAUDE.md nếu nhóm chưa biết (`nano CLAUDE.md` hoặc tạo file text) |
| 8–10 | Chuyển Room 4 — kiểm tra bảng so sánh, nhắc điền điểm 1–5 |
| 10–11 | Announce: "Còn 1 phút — chọn output tốt nhất và ghi lý do" |

### Intervention Triggers

| Tình huống | Cách xử lý |
|------------|-----------|
| Nhóm không biết tạo CLAUDE.md | Demo nhanh: "Mở Notepad/nano, gõ 2 dòng context, lưu tên `CLAUDE.md`, chạy lại claude trong cùng folder" |
| Output RTT và CO-STAR giống nhau | Hỏi: "CO-STAR của bạn có Objective rõ ràng chưa? Style/Tone được chỉ định chưa?" |
| Nhóm chỉ compare 2 outputs, bỏ qua CLAUDE.md | Nhấn mạnh: "CLAUDE.md là điểm khác biệt lớn nhất — thử xem output thay đổi thế nào" |

---

## Worksheet: Activity 02 — Framework Battle

**Nhóm:** \_\_\_\_\_\_ | **Scenario:** ☐ HR ☐ Marketing ☐ Finance ☐ Ops

---

### Lần 1 — RTT Prompt

```
Role: [AI đóng vai gì]
Task: [Nhiệm vụ cụ thể từ scenario]
Tone: [Giọng điệu mong muốn]
```

### Lần 2 — CO-STAR Prompt

```
Context: [Bối cảnh scenario]
Objective: [Mục tiêu cụ thể]
Style: [Phong cách viết]
Tone: [Giọng điệu]
Audience: [Người đọc output]
Response format: [Định dạng output]
```

### Lần 3 — Tạo CLAUDE.md rồi chạy lại CO-STAR

**Nội dung CLAUDE.md bạn tạo** (2–4 dòng):
```
[Dán nội dung CLAUDE.md ở đây]
```

---

### Bảng So sánh Kết quả

Chấm điểm 1–5 cho từng tiêu chí:

| Tiêu chí | RTT | CO-STAR | CO-STAR + CLAUDE.md |
|----------|-----|---------|----------------------|
| Đúng yêu cầu scenario | | | |
| Tone phù hợp | | | |
| Format sẵn sàng dùng | | | |
| Không cần chỉnh sửa | | | |
| **Tổng** | /20 | /20 | /20 |

**Output tốt nhất:** ☐ RTT ☐ CO-STAR ☐ CO-STAR + CLAUDE.md

**Lý do (1 câu):** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

## Câu hỏi Debrief (Plenary — 0:52–0:57)

1. "Nhóm nào thấy CLAUDE.md thay đổi output rõ nhất — thay đổi ở đâu?"
2. "RTT hay CO-STAR phù hợp hơn với scenario của nhóm bạn? Tại sao?"
3. "Bạn sẽ đặt nội dung gì vào CLAUDE.md cho công việc hàng ngày?"
