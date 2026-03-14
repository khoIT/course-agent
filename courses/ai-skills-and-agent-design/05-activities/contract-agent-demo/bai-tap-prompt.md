# Bài Tập Thực Hành — Contract Agent

Sau khi đã chạy thử agent với đơn hàng mẫu (Google Vietnam), hãy thực hiện các bài tập dưới đây.

---

## Bài 1: Thay đổi thông tin khách hàng

**Mục tiêu:** Hiểu cách `prompt.md` điều khiển đầu ra của agent.

**Việc cần làm:**
1. Mở file `prompt.md`
2. Thay thế thông tin Google Vietnam bằng một công ty thực tế (hoặc công ty giả định) của bạn:
   - Tên công ty
   - Địa chỉ
   - Mã số thuế
   - Tên và chức vụ người đại diện
3. Chạy lại Claude Code (`claude`)
4. So sánh hợp đồng mới với hợp đồng cũ

**Câu hỏi suy ngẫm:**
- AI có điền đúng thông tin mới không?
- Có phần nào AI điền sai hoặc thiếu không?
- Điều gì xảy ra nếu thông tin trong `prompt.md` không rõ ràng?

---

## Bài 2: Thêm dịch vụ mới

**Mục tiêu:** Khám phá giới hạn và khả năng của agent khi xử lý dữ liệu phức tạp hơn.

**Việc cần làm:**
1. Mở file `prompt.md`
2. Thêm ít nhất 2 dịch vụ mới, ví dụ:
   ```
   Thiết kế logo: giá 3 triệu vnd
   Chụp ảnh sản phẩm: giá 8 triệu vnd
   Giảm giá 10% cho đơn hàng trên 20 triệu
   ```
3. Thay đổi mức VAT (thử 10% thay vì 8%)
4. Chạy lại Claude Code
5. Kiểm tra xem agent có tính đúng tổng tiền và áp dụng đúng chiết khấu không

**Câu hỏi suy ngẫm:**
- Agent xử lý chiết khấu như thế nào?
- Nếu có điều kiện phức tạp (ví dụ: "giảm 10% nếu thanh toán trước"), agent có hiểu không?
- Prompt rõ ràng hay mơ hồ ảnh hưởng thế nào đến kết quả?

---

## Bài 3: Tạo SKILL.md cho quy trình này

**Mục tiêu:** Biến quy trình tạo hợp đồng thành một "kỹ năng" tái sử dụng — chuẩn bị cho Buổi 5.

**Bối cảnh:**
SKILL.md là file mô tả một quy trình làm việc để AI có thể thực hiện lại nhiều lần, với nhiều khách hàng khác nhau — mà không cần giải thích lại từ đầu.

**Việc cần làm:**
1. Mở file `mau-skill.md` trong thư mục này
2. Điền vào template dựa trên những gì bạn đã học từ Bài 1 và Bài 2
3. Trả lời các câu hỏi trong template:
   - Skill này làm gì?
   - Cần đầu vào gì? (thông tin gì từ khách hàng?)
   - Các bước thực hiện là gì?
   - Đầu ra trông như thế nào?
   - Có ràng buộc gì không? (ví dụ: chỉ dùng cho hợp đồng dịch vụ, không dùng cho hợp đồng mua bán)
4. Lưu file với tên `SKILL.md` trong thư mục dự án của bạn
5. Thử dùng SKILL.md này với một đơn hàng khách hàng hoàn toàn mới

**Mẹo:** Một SKILL.md tốt phải đủ rõ để người khác (hoặc AI) đọc lần đầu và biết ngay phải làm gì — không cần hỏi thêm.

---

## Tổng kết

Sau 3 bài tập, bạn đã trải nghiệm:

| Khái niệm | Ví dụ thực tế |
|-----------|---------------|
| **Prompt = Đầu vào** | `prompt.md` điều khiển nội dung hợp đồng |
| **CLAUDE.md = Hướng dẫn agent** | Định nghĩa vai trò và quy trình xử lý |
| **SKILL.md = Tái sử dụng** | Đóng gói quy trình để dùng lại nhiều lần |

Đây chính là nền tảng của **Context Engineering** — chủ đề của Buổi 4.
