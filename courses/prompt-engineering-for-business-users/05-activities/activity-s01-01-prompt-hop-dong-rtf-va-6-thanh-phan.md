# Bài tập 1: Prompt cho kịch bản hợp đồng

## Thông tin chung

- **Thời lượng:** 13 phút (0:45–0:58)
- **Session:** 1 — AI + Prompt Mastery
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Soạn prompt RTF và prompt 6 thành phần, chạy trên Claude.ai, so sánh kết quả (Ref: S1-EO2, S1-EO3)

---

## Chuẩn bị

**Giảng viên:**
- Claude.ai mở sẵn trên trình duyệt
- Đơn hàng mẫu Google Vietnam copy sẵn trong clipboard
- 3 prompt dự phòng cho học viên bí ý tưởng (xem phần Ghi chú)

**Học viên:**
- Đã đăng nhập Claude.ai (setup ở phút 0:40–0:45)
- Đã paste đơn hàng mẫu vào conversation mới

---

## Thông tin đơn hàng mẫu (Contract-agent scenario)

```
Công ty: TNHH Google Vietnam
Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
MST: 028476564
Đại diện: Ông Khá Văn Bảnh – Giám Đốc
Dịch vụ: (1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND
VAT: 8%
Thời gian thực hiện: 10 ngày từ ngày ký hợp đồng
```

---

## Hướng dẫn từng bước

### Bước 1 — Đọc đơn hàng (2 phút)
- Đọc kỹ thông tin đơn hàng mẫu ở trên
- Mở Claude.ai, tạo conversation mới
- Paste đơn hàng mẫu vào conversation để sẵn sàng

### Bước 2 — Nhiệm vụ A: Prompt RTF (4 phút)
Viết prompt 3 thành phần: **Vai trò + Tác vụ + Định dạng (Role + Task + Format)**

**Mẫu gợi ý:**
```
Vai trò: Bạn là chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam.

Tác vụ: Đọc thông tin đơn đặt hàng sau và liệt kê 5 điểm chính
cần đưa vào hợp đồng dịch vụ.

Định dạng: Danh sách bullet points, mỗi điểm 1 câu ngắn gọn.

[Paste đơn hàng mẫu ở đây]
```

- Paste thông tin đơn hàng vào cuối prompt
- Gửi cho Claude.ai, đọc kết quả

### Bước 3 — Nhiệm vụ B: Prompt 6 thành phần (5 phút)
Mở rộng prompt RTF, thêm 3 thành phần:

| Thành phần | Nội dung gợi ý |
|------------|----------------|
| Vai trò (Role) | Chuyên gia pháp lý hợp đồng dịch vụ IT tại Việt Nam |
| Tác vụ (Task) | Tạo phần "Mô tả dịch vụ" cho hợp đồng dựa trên đơn hàng |
| Định dạng (Format) | Văn phong pháp lý, đánh số điều khoản |
| **Giọng điệu (Tone)** | Chuyên nghiệp, rõ ràng, ngắn gọn |
| **Ràng buộc (Constraints)** | Theo luật hợp đồng Việt Nam, dưới 200 từ |
| **Đối tượng (Audience)** | Giám đốc hai bên sẽ ký hợp đồng |

- Chạy lại trên Claude.ai
- So sánh kết quả A và B

### Bước 4 — So sánh (2 phút)
Trả lời 2 câu hỏi:
1. Kết quả nào đầy đủ hơn?
2. Kết quả nào phù hợp hơn để đưa vào hợp đồng thật?

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Prompt RTF có đủ 3 thành phần | Có Vai trò + Tác vụ + Định dạng rõ ràng | Thiếu 1+ thành phần hoặc mơ hồ |
| Prompt 6 thành phần đầy đủ | Có thêm Giọng điệu, Ràng buộc, Đối tượng | Chỉ copy RTF, không thêm gì |
| So sánh có nhận xét cụ thể | Nêu được ít nhất 1 điểm khác biệt | Chỉ nói "tốt hơn" không giải thích |

---

## Ghi chú giảng viên

- **Thời gian:** Nếu học viên xong sớm → cho thử với tác vụ công việc cá nhân
- **Học viên bí ý tưởng — 3 prompt dự phòng:**
  - Manager: "Vai trò: trợ lý giám đốc. Tác vụ: soạn email báo cáo tuần. Định dạng: 5 bullet, <200 từ."
  - Marketer: "Vai trò: chuyên gia marketing. Tác vụ: viết 3 tiêu đề quảng cáo sản phẩm X. Định dạng: <10 từ/tiêu đề."
  - Teacher: "Vai trò: giáo viên Toán lớp 9. Tác vụ: ra 5 bài tập phương trình bậc hai. Định dạng: mức độ tăng dần."
- **Lỗi thường gặp:** Học viên viết prompt quá ngắn ("viết hợp đồng cho tôi") → nhắc nhìn lại 6 thành phần
- **Kết nối contract-agent:** Nhấn mạnh: "Đơn hàng này chính là input mà contract-agent sẽ xử lý tự động ở Session 3"
