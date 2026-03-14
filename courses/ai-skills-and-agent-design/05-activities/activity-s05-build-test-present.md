# Bài tập S5: Build, Test, Iterate + Trình Bày Skill

## Mục tiêu
Hoàn thiện SKILL.md qua iterate, test với nhiều input, trình bày 3 phút trước lớp với live demo.

## Thời gian
55 phút tổng (Workshop: 15 phút + Test: 10 phút + Trình bày: 25 phút + Vote: 5 phút)

## Tài liệu cần có
- SKILL.md từ homework Session 4
- Claude Code đang chạy
- File input để test (ít nhất 2 file khác nhau)
- Rubric trình bày 4 tiêu chí (bên dưới)

---

## Bước thực hiện

### Phần 1: Workshop — Hoàn thiện SKILL.md (15 phút, Block B: 0:40–0:55)

**Foundation — Hoàn thiện 6 phần:**
- Kiểm tra SKILL.md đủ: Purpose, Context, Input, Steps, Examples, Constraints
- Bổ sung phần còn thiếu
- Nếu chưa có SKILL.md: quay lại 4-step Workflow Decomposition (handout Mục 9)

**Extension — Nâng chất lượng:**
- Thêm ví dụ output thứ 2 (diverse example)
- Cụ thể hóa Constraints: thay "viết tốt" thành "dưới 500 từ, có heading mỗi phần"
- Thêm edge case: "Nếu thiếu thông tin X, dừng lại và báo"

**Challenge — Advanced patterns:**
- Thêm phần "Quality Check" trong Steps: bước cuối = AI tự kiểm tra output
- Thử multi-input: SKILL.md xử lý 2 file cùng lúc

### Phần 2: Test & Iterate (10 phút, Block B: 1:00–1:10)

**Vòng 1 — Test với input gốc (3 phút):**
- Chạy SKILL.md trên Claude Code
- Đánh giá output theo Constraints đã viết
- Ghi 1 điểm chưa đạt

**Vòng 2 — Sửa + test với input khác (4 phút):**
- Sửa SKILL.md dựa trên kết quả vòng 1
- Chạy lại với input khác (file khác, nội dung khác)
- Output có consistent không?

**Vòng 3 — So sánh before/after (3 phút):**
- Cụ thể sửa gì trong SKILL.md → kết quả tốt hơn thế nào?
- Ghi lại 1 câu: "Thay đổi quan trọng nhất: ___"

---

### Phần 3: Trình bày Skill (25 phút, Block C: 1:20–1:45)

**Cấu trúc bắt buộc — 3 phút mỗi người:**

| Phần | Thời gian | Nội dung |
|------|-----------|----------|
| **Vấn đề** | 30 giây | "Trước đây, tôi mất ___ phút để ___." |
| **Demo** | 90 giây | Chạy skill live trên màn hình. Show input → output. |
| **Kết quả** | 60 giây | "Skill tạo ra ___, tiết kiệm ___ phút, chất lượng ___." |

**Sau mỗi bài:** 2 người phản hồi theo rubric + facilitator bình luận (1 phút).

**Nếu >10 người:** 7-8 trình bày live, còn lại paste SKILL.md + mô tả 2 câu vào chat.

### Phần 4: Vote (5 phút, Block C: 1:45–1:50)

Zoom poll:
- "Skill hữu ích nhất" (practical value)
- "Skill sáng tạo nhất" (creative application)

Công bố + lý do. "Skill được vote = validated bởi đồng nghiệp."

---

## Rubric trình bày — 4 tiêu chí

| # | Tiêu chí | 1 điểm | 2 điểm | 3 điểm |
|---|----------|--------|--------|--------|
| 1 | **Vấn đề** | Mơ hồ, không rõ ai gặp | Rõ vấn đề nhưng thiếu con số | Rõ: ai, mất bao lâu, tần suất |
| 2 | **Demo** | Lỗi hoặc không chạy | Chạy nhưng output chưa tốt | Chạy trơn tru, output dùng được |
| 3 | **Kết quả** | Không đánh giá | Có đánh giá nhưng chung | Cụ thể: phút tiết kiệm, chất lượng so sánh |
| 4 | **Trình bày** | Quá 4 phút hoặc đọc | Đúng giờ nhưng chưa mạch lạc | Đúng 3 phút, tự tin, mạch lạc |

---

## During Activity — Facilitator micro-actions

| Thời điểm | Hành động |
|-----------|-----------|
| Workshop Phút 0-5 | "Skill gì?" chat → Đọc 2-3 tên. "Ai chưa có SKILL.md?" → Hỗ trợ ưu tiên. |
| Workshop Phút 5-10 | Poll checkpoint: "Đang viết / Đang test / Xong, chuẩn bị demo?" |
| Workshop Phút 10-15 | "Xong" giúp "Đang viết" (peer mentoring). Facilitator hỗ trợ nhóm test lỗi. |
| Test | "Iterate mấy lần rồi?" → Khuyến khích tối thiểu 2 lần. |
| Trình bày | Timer hiển thị. Nhắc: "30s vấn đề → 90s demo → 60s kết quả." |
| Demo lỗi | "Không sao, mô tả output bạn mong đợi thay vì live demo." |
| Vote | Đọc kết quả, hỏi: "Tại sao bạn vote skill này?" → 1-2 người chia sẻ. |
| Xong sớm | Viết ví dụ thứ 3 cho SKILL.md, hoặc mentor người khác |

---

## Tiêu chí thành công

- [ ] SKILL.md hoàn chỉnh 6 phần, ít nhất 2 ví dụ output
- [ ] Test với 2 input khác nhau — output consistent
- [ ] Iterate ít nhất 2 lần, ghi nhận cải thiện cụ thể
- [ ] Trình bày 3 phút: vấn đề → demo → kết quả
- [ ] (Extension) Demo live chạy trơn tru
- [ ] (Challenge) Nhận phản hồi từ lớp, ghi 1 cải thiện tiếp theo
