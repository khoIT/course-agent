# Đánh giá cuối khóa — Sử dụng Skills để khai thác sức mạnh LLM Agent

> **Hình thức:** Google Form hoặc Quiz tool | **Thời gian:** 5 phút cuối Buổi 5
> **Mục đích:** Đánh giá tổng hợp kiến thức và khả năng áp dụng qua 5 buổi

---

## Phần A: Kiến thức cốt lõi (5 câu trắc nghiệm)

### Câu 1
**Agent, Skill, và Tool khác nhau ở điểm nào?**
- A. Agent = phần mềm, Skill = plugin, Tool = add-on
- B. Agent = AI biết dùng tool, Skill = hướng dẫn quy trình, Tool = khả năng cụ thể ✅
- C. Tất cả đều giống nhau, chỉ khác tên gọi
- D. Agent = người dùng, Skill = AI, Tool = máy tính

### Câu 2
**Phần nào của SKILL.md quyết định khi nào agent sẽ tự kích hoạt skill?**
- A. Body
- B. References folder
- C. Frontmatter YAML — description ✅
- D. Tên file

### Câu 3
**"Progressive disclosure" nghĩa là gì trong thiết kế skill?**
- A. Hiển thị tất cả thông tin ngay từ đầu
- B. Agent chỉ đọc thêm kiến thức chi tiết khi cần thiết ✅
- C. Ẩn skill khỏi người dùng
- D. Tự động xóa thông tin cũ

### Câu 4
**Khi nào nên dùng Claude Code thay vì Cowork?**
- A. Khi cần tạo slide đẹp
- B. Khi cần giao diện kéo thả
- C. Khi cần viết code, thao tác terminal, hoặc dùng git ✅
- D. Khi mới bắt đầu học AI

### Câu 5
**Tiêu chí nào KHÔNG nằm trong Skill Quality Checklist?**
- A. Trigger accuracy
- B. Output quality
- C. Tốc độ xử lý ✅
- D. Reusability

---

## Phần B: Tình huống áp dụng (3 câu)

### Câu 6
**Tình huống: Team marketing cần tạo báo cáo campaign hàng tuần, luôn cùng format, cùng KPI. Họ đang copy-paste template Word mỗi tuần. Giải pháp tốt nhất?**
- A. Tiếp tục copy-paste, thêm macro Word
- B. Tạo skill "weekly-campaign-report" với template trong references/, agent tự điền data ✅
- C. Thuê thêm nhân viên
- D. Dùng prompt đơn lẻ mỗi tuần, viết chi tiết hơn

### Câu 7
**Tình huống: Bạn tạo skill nhưng nó trigger sai — kích hoạt khi không cần. Sửa phần nào?**
- A. Xóa toàn bộ skill và tạo lại
- B. Viết lại description trong frontmatter cho cụ thể và chính xác hơn ✅
- C. Đổi tên file SKILL.md
- D. Thêm nhiều references hơn

### Câu 8
**Tình huống: Skill "customer-email" của bạn tạo email tốt nhưng đồng nghiệp dùng thì kết quả khác hẳn. Nguyên nhân KHÔNG THỂ là?**
- A. Body thiếu hướng dẫn chi tiết
- B. Thiếu template email trong references/
- C. Agent của đồng nghiệp dùng model AI khác ✅
- D. Description không đủ rõ ràng

---

## Phần C: Tự đánh giá (không tính điểm)

> Đánh giá mức độ tự tin từ 1 (chưa tự tin) đến 5 (rất tự tin):

| # | Kỹ năng | 1 | 2 | 3 | 4 | 5 |
|---|---------|---|---|---|---|---|
| 1 | Giải thích Agent/Skill/Tool cho đồng nghiệp | ○ | ○ | ○ | ○ | ○ |
| 2 | Sử dụng skills có sẵn (pptx, docx, xlsx...) | ○ | ○ | ○ | ○ | ○ |
| 3 | Tạo SKILL.md đơn giản từ đầu | ○ | ○ | ○ | ○ | ○ |
| 4 | Thiết kế skill nâng cao (references, multi-step) | ○ | ○ | ○ | ○ | ○ |
| 5 | Chọn Cowork vs Claude Code phù hợp | ○ | ○ | ○ | ○ | ○ |
| 6 | Đánh giá chất lượng skill theo checklist | ○ | ○ | ○ | ○ | ○ |
| 7 | Lập kế hoạch triển khai skill cho team | ○ | ○ | ○ | ○ | ○ |

---

## Thang điểm

| Mức | Điểm (Phần A+B) | Đánh giá |
|-----|-----------------|----------|
| Xuất sắc | 7-8/8 | Sẵn sàng tạo và chia sẻ skill cho team |
| Đạt | 5-6/8 | Nắm vững kiến thức, cần thực hành thêm |
| Cần bổ sung | <5/8 | Nên xem lại tài liệu handout và thử lại các hoạt động |
