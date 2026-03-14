# Bài tập 2: Few-shot + Chain-of-thought

## Thông tin chung

- **Thời lượng:** 8 phút (1:02–1:10)
- **Session:** 1 — AI + Prompt Mastery
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Áp dụng few-shot (2 ví dụ mẫu) và chain-of-thought để tăng chất lượng đầu ra (Ref: S1-EO3)

---

## Chuẩn bị

**Giảng viên:**
- Ví dụ few-shot và chain-of-thought chuẩn bị sẵn trên slide
- Kết quả Nhiệm vụ B từ Bài tập 1 vẫn mở trên Claude.ai

**Học viên:**
- Đã hoàn thành Bài tập 1 (prompt 6 thành phần cho kịch bản hợp đồng)
- Claude.ai vẫn mở với conversation từ Bài tập 1

---

## Hướng dẫn từng bước

### Bước 1 — Mở lại prompt Nhiệm vụ B (1 phút)
- Quay lại prompt 6 thành phần đã viết ở Bài tập 1
- Tạo conversation mới hoặc tiếp tục conversation cũ

### Bước 2 — Thêm Few-shot: 2 ví dụ mẫu (3 phút)
Thêm vào cuối prompt, trước đơn hàng:

```
Dưới đây là 2 ví dụ cách trình bày "Mô tả dịch vụ" trong hợp đồng:

Ví dụ 1:
"Điều 1: Bên B cung cấp dịch vụ thiết kế website gồm 5 trang,
responsive trên mobile, bàn giao trong 14 ngày làm việc.
Giá trị: 8.000.000 VND (chưa bao gồm VAT 8%)."

Ví dụ 2:
"Điều 2: Bên B thực hiện dịch vụ tư vấn chiến lược marketing
online trong 30 ngày, bao gồm 3 buổi họp trực tiếp và 1 báo cáo
tổng kết. Giá trị: 12.000.000 VND (đã bao gồm VAT 8%)."
```

### Bước 3 — Thêm Chain-of-thought (2 phút)
Thêm dòng này vào cuối prompt:

```
Hãy giải thích lý do cho mỗi quyết định định dạng của bạn
trước khi đưa ra kết quả cuối cùng.
```

### Bước 4 — Chạy và so sánh (2 phút)
- Gửi prompt hoàn chỉnh (6 thành phần + few-shot + chain-of-thought)
- So sánh với kết quả Nhiệm vụ B ban đầu (không có few-shot)
- Ghi nhận: định dạng có giống ví dụ mẫu hơn không? AI có giải thích logic không?

---

## Mẫu prompt hoàn chỉnh

```
Vai trò: Chuyên gia pháp lý hợp đồng dịch vụ IT tại Việt Nam.
Giọng điệu: Chuyên nghiệp, rõ ràng.
Tác vụ: Tạo phần "Mô tả dịch vụ" cho hợp đồng dựa trên đơn hàng dưới đây.
Định dạng: Văn phong pháp lý, đánh số điều khoản.
Ràng buộc: Theo luật hợp đồng Việt Nam, dưới 200 từ.
Đối tượng: Giám đốc hai bên sẽ ký hợp đồng.

Dưới đây là 2 ví dụ cách trình bày:
[ví dụ 1]
[ví dụ 2]

Hãy giải thích lý do cho mỗi quyết định định dạng trước khi đưa ra
kết quả cuối cùng.

Thông tin đơn hàng:
[paste đơn hàng mẫu Google Vietnam]
```

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Thêm ít nhất 2 ví dụ mẫu (few-shot) | Có 2 ví dụ cụ thể, đúng ngữ cảnh | Không có ví dụ hoặc ví dụ không liên quan |
| Có yêu cầu chain-of-thought | AI giải thích logic trước kết quả | Không yêu cầu giải thích |
| Nhận ra sự cải thiện | Nêu ít nhất 1 điểm tốt hơn so với prompt B | Không so sánh được |

---

## Ghi chú giảng viên

- **Kết nối contract-agent:** "Few-shot chính là cách contract-agent học theo mẫu hợp đồng template — nó đọc mẫu trước khi viết"
- **Lỗi thường gặp:** Ví dụ mẫu quá dài → nhắc: "Ví dụ ngắn 2-3 câu là đủ"
- **Nếu hết thời gian:** Bỏ bước so sánh, chỉ cần chạy prompt có few-shot
- **Câu hỏi thường gặp:** "Luôn cần few-shot không?" → "Không. Dùng khi muốn AI theo đúng định dạng/phong cách cụ thể"
- **Poll #4 sau bài tập:** Chuẩn bị Zoom poll: "Few-shot có cải thiện kết quả không?" (Có, rõ rệt / Có, chút / Không đổi / Khó so sánh)
