# Bài tập 3: Tác vụ công việc thực tế của bạn

## Thông tin chung

- **Thời lượng:** 15 phút (1:20–1:35)
- **Session:** 1 — AI + Prompt Mastery
- **Block:** C — Apply to Your Work
- **Mục tiêu học tập:** Áp dụng 6 thành phần prompt vào tác vụ công việc cá nhân, đánh giá kết quả (Ref: S1-Terminal, S1-EO3)

---

## Chuẩn bị

**Giảng viên:**
- Slide hiển thị 3 tiêu chí đánh giá
- 3 ví dụ tác vụ cho từng nhóm đối tượng (manager, marketer, teacher)

**Học viên:**
- Đã hoàn thành Bài tập 1 và 2 (thành thạo 6 thành phần + few-shot)
- Claude.ai mở sẵn

---

## Hướng dẫn từng bước

### Bước 1 — Chọn tác vụ cá nhân (2 phút)
Nghĩ về **1 việc bạn phải làm trong tuần này**. Ví dụ:
- Soạn email báo cáo cho sếp
- Viết mô tả sản phẩm cho website
- Tạo bài kiểm tra cho học sinh
- Tóm tắt biên bản họp
- Soạn nội dung bài đăng social media

### Bước 2 — Viết prompt 6 thành phần (5 phút)

Điền vào template:

```
1. Vai trò: _______________________________________________
2. Tác vụ: _______________________________________________
3. Định dạng: ____________________________________________
4. Giọng điệu: ___________________________________________
5. Ràng buộc: ____________________________________________
6. Đối tượng: ____________________________________________

[Thông tin/dữ liệu liên quan nếu có]
```

**Mẹo:** Không cần dùng đủ 6 — nhưng thử dùng ít nhất 4 thành phần.

### Bước 3 — Chạy và đánh giá (5 phút)
Gửi prompt cho Claude.ai. Đánh giá kết quả theo **3 tiêu chí:**

| # | Câu hỏi đánh giá | Đạt (✓) | Chưa đạt (✗) |
|---|-------------------|---------|---------------|
| 1 | Đúng nội dung? (thông tin chính xác, không bịa) | | |
| 2 | Đúng định dạng? (đúng kiểu văn bản yêu cầu) | | |
| 3 | Dùng được ngay không cần sửa lớn? | | |

### Bước 4 — Cải thiện nếu cần (3 phút)
- Nếu chưa đạt 1+ tiêu chí → sửa prompt, thêm thành phần thiếu
- Nếu đạt cả 3 → thử thêm few-shot hoặc chain-of-thought

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Chọn tác vụ thực tế (không phải ví dụ mẫu) | Tác vụ từ công việc hàng ngày | Copy lại ví dụ hợp đồng |
| Prompt có ≥4 thành phần | Có 4+ thành phần rõ ràng | Chỉ có 1-2 thành phần |
| Đánh giá kết quả theo 3 tiêu chí | Trả lời cụ thể 3 câu hỏi | Chỉ nói "tốt" hoặc "chưa tốt" |

---

## Ghi chú giảng viên

- **Đây là bài tập quan trọng nhất Session 1** — lần đầu học viên áp dụng vào công việc thật
- **Showcase sau bài tập (1:35–1:45):** Chọn 3 người tình nguyện chia sẻ màn hình. Hỏi lớp: "Prompt này thiếu thành phần gì?" Cách nhận xét: khen điểm mạnh trước, gợi ý cải thiện sau
- **Nếu học viên không nghĩ ra tác vụ:** Gợi ý theo vai trò:
  - Manager: "Tóm tắt 5 email quan trọng nhất tuần này thành 1 báo cáo"
  - Marketer: "Viết 3 phiên bản caption Instagram cho sản phẩm mới"
  - Teacher: "Tạo rubric chấm bài thuyết trình cho học sinh lớp 11"
- **Kết nối contract-agent:** "Tác vụ bạn vừa làm bằng prompt — Session 3 chúng ta sẽ biến nó thành automation chạy tự động"
- **Quản lý thời gian:** Nếu thiếu thời gian, bỏ Bước 4 (cải thiện). Showcase vẫn phải diễn ra.
