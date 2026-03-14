# Bài tập 1: Viết Task Brief đầu tiên

## Thông tin chung

- **Thời lượng:** 14 phút (0:48–1:02)
- **Session:** 2 — Tư duy Agent (Agent Thinking)
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Viết task brief 4 phần cho AI agent, đạt tiêu chuẩn agent thực thi không cần giải thích thêm (Ref: S2-EO2)

---

## Chuẩn bị

**Giảng viên:**
- Claude Cowork đã hướng dẫn setup (0:40–0:48)
- Brief mẫu cho kịch bản hợp đồng hiển thị trên slide
- Backup: nếu Cowork lỗi, học viên viết brief trên Google Docs/notepad

**Học viên:**
- Đã đăng nhập Claude Cowork
- Có Prompt Library từ homework Session 1 (hoặc tác vụ cá nhân)
- Contract-agent scenario: đơn hàng Google Vietnam (từ Session 1)

---

## Template Task Brief (4 phần)

```
## 1. Mục tiêu (Goal)
AI cần tạo ra gì? Kết quả cuối cùng là gì?
→ Ví dụ: "Tạo file hợp đồng dịch vụ hoàn chỉnh từ thông tin đơn hàng"

## 2. Bối cảnh (Context)
Thông tin AI cần biết trước khi bắt đầu:
→ Ví dụ: "Đơn hàng từ Google Vietnam, 2 dịch vụ, tổng 15tr + VAT 8%"

## 3. Các bước thực hiện (Steps)
Ít nhất 3 bước theo thứ tự:
→ Ví dụ:
   1. Đọc thông tin đơn hàng
   2. Trích xuất: tên công ty, dịch vụ, giá, VAT, thời gian
   3. Tạo hợp đồng theo mẫu pháp lý Việt Nam
   4. Kiểm tra tính toán VAT chính xác

## 4. Tiêu chí thành công (Success Criteria)
Kết quả đạt chuẩn trông như thế nào?
→ Ví dụ:
   - Tất cả thông tin từ đơn hàng có trong hợp đồng
   - Tính toán VAT đúng (15tr × 8% = 1.2tr)
   - Văn phong pháp lý, không dùng ngôn ngữ casual
```

---

## Hướng dẫn từng bước

### Bước 1 — Chọn tác vụ (2 phút)
Chọn **1 trong 2** tùy chọn:
- **Tùy chọn A:** Kịch bản hợp đồng (contract-agent) — dùng đơn hàng Google Vietnam
- **Tùy chọn B:** Tác vụ cá nhân từ Prompt Library homework Session 1

### Bước 2 — Viết brief 4 phần (7 phút)
Dùng template ở trên. Điền đầy đủ 4 phần. Lưu ý:
- **Mục tiêu:** 1-2 câu, cụ thể, đo lường được
- **Bối cảnh:** Liệt kê DỮ LIỆU cần thiết, không phải kiến thức chung
- **Các bước:** Ít nhất 3 bước, có thứ tự logic
- **Tiêu chí:** Ít nhất 2 tiêu chí kiểm tra được (đúng/sai)

### Bước 3 — Gửi brief cho Claude Cowork (3 phút)
- Tạo project mới trên Cowork
- Paste brief vào
- Gửi và đợi kết quả

### Bước 4 — Đánh giá kết quả (2 phút)
Tự hỏi: "Kết quả agent có tốt hơn cách chat từng tin nhắn không?"

---

## Brief mẫu hoàn chỉnh (Contract-agent scenario)

```
## Mục tiêu
Tạo phần "Mô tả dịch vụ" và "Điều khoản thanh toán" cho hợp đồng
dịch vụ giữa công ty tôi và Google Vietnam.

## Bối cảnh
Đơn hàng từ TNHH Google Vietnam:
- Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM | MST: 028476564
- Đại diện: Ông Khá Văn Bảnh – Giám Đốc
- Dịch vụ: (1) Làm mobile: 10tr; (2) Design nhà: 5tr
- VAT: 8% | Thời gian: 10 ngày từ ký HĐ

## Các bước
1. Đọc thông tin đơn hàng, xác nhận đầy đủ thông tin
2. Viết phần "Mô tả dịch vụ" theo văn phong pháp lý
3. Tính toán VAT và viết phần "Điều khoản thanh toán"
4. Kiểm tra lại tất cả số liệu

## Tiêu chí thành công
- Thông tin khớp 100% với đơn hàng
- Tính toán: 15tr + 8% VAT = 16.2tr (đúng)
- Văn phong pháp lý phù hợp luật Việt Nam
- Dưới 300 từ mỗi phần
```

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Brief có đủ 4 phần | Có Mục tiêu + Bối cảnh + Bước + Tiêu chí | Thiếu 1+ phần |
| Mục tiêu cụ thể | "Tạo hợp đồng từ đơn hàng" (rõ) | "Giúp tôi" (mơ hồ) |
| Có ≥3 bước thực hiện | 3+ bước theo thứ tự logic | 1-2 bước hoặc không có thứ tự |
| Tiêu chí kiểm tra được | "VAT đúng", "dưới 300 từ" | "Kết quả tốt" (không đo được) |

---

## Ghi chú giảng viên

- **Chat share sau bài tập (1:02–1:07):** "Kết quả agent có tốt hơn chat không? Đánh giá 1-5 + 1 câu nhận xét"
- **Poll #3 (1:07–1:15):** "Phần nào của task brief khó viết nhất?" — thường là "Tiêu chí thành công" vì học viên chưa quen đo lường kết quả AI
- **Lỗi thường gặp:**
  - Mục tiêu quá chung: "Viết cho tôi cái gì đó" → hỏi "AI tạo ra FILE gì? Bao dài?"
  - Thiếu bối cảnh: quên paste dữ liệu đầu vào → nhắc "Agent không đọc được suy nghĩ bạn"
  - Các bước thiếu thứ tự: → nhắc "Nếu nhân viên mới đọc brief này, họ biết làm bước nào trước?"
- **Kết nối contract-agent:** "Brief này chính xác là thứ contract-agent nhận — cùng cấu trúc 4 phần"
- **Nếu Cowork gặp lỗi:** Học viên viết brief trên notepad, facilitator demo chạy 1-2 brief tiêu biểu
