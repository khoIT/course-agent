# Bài tập 2: Thử đổi đơn hàng và chạy lại

## Thông tin chung

- **Thời lượng:** 5 phút (1:10–1:15)
- **Session:** 3 — Áp dụng: Cowork + Claude Code
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Hiểu cách thay đổi input ảnh hưởng đến output của agent (Ref: S3-EO3)

---

## Chuẩn bị

**Giảng viên:**
- 2-3 gợi ý thay đổi sẵn trên slide

**Học viên:**
- Đã hoàn thành Bài tập 1 (chạy contract-agent thành công)
- File `prompt.md` mở sẵn trong text editor

---

## Hướng dẫn từng bước

### Bước 1 — Mở file prompt.md (1 phút)
Mở file `prompt.md` trong thư mục contract-agent bằng text editor (VS Code, Notepad, v.v.)

### Bước 2 — Sửa 1-2 thông tin (2 phút)
Chọn **1 hoặc nhiều** thay đổi sau:

| Thay đổi | Sửa gì | Ví dụ |
|----------|--------|-------|
| Thêm dịch vụ mới | Thêm dòng dịch vụ thứ 3 | "(3) SEO website: 8 triệu VND" |
| Đổi giá | Thay giá dịch vụ hiện tại | "Làm mobile: 15 triệu VND" |
| Đổi thời gian | Thay thời gian thực hiện | "20 ngày từ ngày ký" |
| Đổi khách hàng | Thay tên công ty và đại diện | "TNHH FPT Software" |

Lưu file sau khi sửa.

### Bước 3 — Chạy lại Claude Code (1 phút)
```bash
# Trong Claude Code, yêu cầu lại:
Đọc file prompt.md (đã cập nhật) và tạo hợp đồng mới.
```

### Bước 4 — Kiểm tra (1 phút)
- Output có cập nhật đúng thông tin đã sửa không?
- Tính toán VAT có đúng với giá mới không?
- Có thông tin cũ còn sót lại không?

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Sửa thành công file prompt.md | File lưu được, thông tin mới rõ ràng | Không sửa hoặc format bị lỗi |
| Output phản ánh thay đổi | Hợp đồng mới có thông tin đã sửa | Vẫn hiện thông tin cũ |

---

## Ghi chú giảng viên

- **Bài tập ngắn — 5 phút.** Mục đích: chứng minh agent có thể tái sử dụng với input khác nhau
- **Điểm nhấn:** "Đây là sức mạnh của automation — cùng 1 quy trình, thay input, output tự thay đổi. Bạn không cần viết lại prompt mỗi lần."
- **Nếu học viên chưa xong Bài tập 1:** Bỏ qua Bài tập 2, tiếp tục hỗ trợ Bài tập 1
- **Kết nối contract-agent:** "Trong thực tế, contract-agent xử lý hàng chục đơn hàng khác nhau mỗi tuần — cùng 1 CLAUDE.md, chỉ đổi prompt.md"
