# Bài tập S1: Brief Cho "Nhân Viên Mới" — Viết Brief AI Đầu Tiên

## Mục tiêu
Viết brief AI sử dụng RTF + 6 thành phần, so sánh kết quả trước/sau, trải nghiệm few-shot và chain-of-thought qua thực hành.

## Thời gian
35 phút tổng (3 nhiệm vụ tiered + 1 bài tập nâng cao)

## Tài liệu cần có
- Claude Cowork (hoặc Claude.ai backup)
- Đơn hàng mẫu Google Vietnam (có sẵn trong handout)
- Template brief RTF (handout Mục 2)

---

## Bước thực hiện

### Nhiệm vụ A — Foundation: Brief RTF (5 phút)

Dùng đơn hàng Google Vietnam. Viết brief 3 thành phần gửi Cowork:

```
Vai trò: Chuyên gia hợp đồng dịch vụ
Tác vụ: Trích xuất 5 điểm chính cần đưa vào hợp đồng từ đơn hàng sau
Định dạng: Bullet points, mỗi điểm 1 câu ngắn gọn

[Paste đơn hàng Google Vietnam]
```

Gửi brief, đọc output. Ghi lại: output có đủ thông tin không?

### Nhiệm vụ B — Extension: Brief 6 thành phần (6 phút)

Mở rộng brief Nhiệm vụ A, thêm 3 thành phần:
- **Giọng điệu:** chuyên nghiệp, rõ ràng
- **Ràng buộc:** theo luật thương mại VN, dưới 200 từ
- **Đối tượng:** GĐ hai bên sẽ ký hợp đồng

Gửi lại Cowork. **So sánh output A vs B** — kết quả có cụ thể hơn không?

### Nhiệm vụ C — Challenge: Thêm ví dụ mẫu (2 phút, nếu xong sớm)

Thêm vào brief B một ví dụ output mong muốn:

```
Ví dụ cách trình bày 1 điều khoản:
"Bên A cung cấp dịch vụ Phát triển ứng dụng di động với giá trị
10.000.000 đồng, thực hiện trong 10 ngày kể từ ngày ký hợp đồng."
```

Chạy lại. So sánh: AI có tuân theo format mẫu không?

### Bài tập 2 — Brief nâng cao: Yêu cầu suy luận (8 phút)

Dùng brief Nhiệm vụ B. Thêm dòng:

> "Trước khi tạo hợp đồng, hãy liệt kê 3 rủi ro pháp lý tiềm ẩn từ thông tin đơn hàng này và giải thích cách xử lý."

Gửi Cowork. So sánh: kết quả có sâu hơn không?

---

## Đơn hàng mẫu Google Vietnam

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

## During Activity — Facilitator micro-actions

| Thời điểm | Hành động |
|-----------|-----------|
| Phút 1-2 | Đi vòng chat: "Ai gặp khó?" Ưu tiên lỗi đăng nhập Cowork |
| Phút 3-5 | Đọc 2-3 brief từ chat, bình luận: "Brief này rõ vì có ___" |
| Phút 6-8 | Hỏi: "Ai thấy kết quả B tốt hơn A?" → nhanh 1 câu vì sao |
| Phút 10+ | Người xong sớm → chuyển Nhiệm vụ C hoặc Bài tập 2 |
| Intervention | Nếu ai bí: đưa 1 trong 3 brief mẫu dự phòng (Manager/Marketer/Teacher) |

**3 brief mẫu dự phòng:**
- Manager: "Vai trò: trợ lý GĐ. Tác vụ: soạn báo cáo tuần từ 5 email. Định dạng: 5 bullets, <200 từ."
- Marketer: "Vai trò: chuyên gia content. Tác vụ: viết 3 tiêu đề quảng cáo cho sản phẩm X. Định dạng: <10 từ mỗi tiêu đề."
- Teacher: "Vai trò: giáo viên Toán lớp 9. Tác vụ: ra 5 bài tập phương trình bậc hai. Định dạng: mức độ tăng dần, có đáp án."

---

## Tiêu chí thành công

- [ ] Viết được brief RTF (3 thành phần) và gửi thành công
- [ ] So sánh output trước/sau khi thêm thành phần — nhận ra sự khác biệt
- [ ] (Extension) Brief 6 thành phần cho output cụ thể hơn
- [ ] (Challenge) Thêm ví dụ mẫu HOẶC yêu cầu suy luận → kết quả sâu hơn
