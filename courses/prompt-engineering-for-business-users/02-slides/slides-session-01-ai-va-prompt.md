# Buổi 1: AI + Prompt Mastery

---
## Slide 1: [Không có tiêu đề -- Mở đầu bằng Demo]

[Màn hình: Claude.ai đã mở sẵn, facilitator paste đơn hàng Google Vietnam]

**Trên màn hình:**
- Thông tin đơn đặt hàng: TNHH Google Vietnam, 9 Đinh Tiên Hoàng, TP.HCM
- Dịch vụ: Làm mobile (10 triệu), Design nhà (5 triệu), VAT 8%

**Ghi chú giảng viên:** Không giới thiệu. Paste thông tin, gõ prompt đơn giản: "Đọc thông tin này và cho tôi biết các điểm chính cần có trong hợp đồng dịch vụ." Đọc kết quả. Để lớp phản ứng 10 giây trước khi nói tiếp.

---
## Slide 2: Poll #1 -- Phản ứng đầu tiên

**ZOOM POLL:**

"Phản ứng đầu tiên của bạn khi thấy demo vừa rồi?"

- A. Ấn tượng
- B. Không chắc chính xác không
- C. Muốn thử ngay
- D. Đã biết rồi

**Ghi chú giảng viên:** Đọc kết quả nhanh. Nếu >50% chọn B -> nhấn mạnh phần kiểm chứng ở slide 5. Chuyển tiếp: "Vậy AI vừa làm gì? Hãy cùng tìm hiểu."

---
## Slide 3: AI hoạt động thế nào? -- 3 Mô hình tư duy

**1. Máy dự đoán từ (Word Prediction Machine)**
- AI hoàn thành câu giống autocomplete điện thoại -- nhưng ở quy mô hàng tỷ tài liệu

**2. Dữ liệu huấn luyện (Training Data)**
- "AI đọc sách, không sống đời" -- nó biết hợp đồng vì đã đọc hàng nghìn hợp đồng

**3. Cửa sổ ngữ cảnh (Context Window)**
- AI nhớ cuộc trò chuyện, nhưng có giới hạn -- như bộ nhớ làm việc của người

**Ghi chú giảng viên:** Mỗi điểm giải thích 1-2 phút, dùng ngôn ngữ đời thường. Câu hỏi thường gặp: "AI có hiểu không?" -> "Không hiểu như người, nhưng dự đoán rất giỏi."

---
## Slide 4: Chat Activity

**Gõ vào chat Zoom:**

> "AI có thể làm được gì trong công việc của BẠN?"

*(30 giây -- facilitator đọc 3 câu trả lời)*

**Ghi chú giảng viên:** Chọn 1 câu từ manager, 1 từ marketer, 1 từ teacher nếu có thể. Kết nối: "Tất cả những việc này đều có thể làm tốt hơn với prompt tốt hơn."

---
## Slide 5: Ảo giác AI (Hallucination) -- Cẩn thận!

**Demo trực tiếp:** Hỏi Claude về đơn hàng vừa rồi:
> "Tổng giá trị hợp đồng là bao nhiêu sau thuế?"
> (Đơn hàng KHÔNG ghi tổng -- AI sẽ tính hoặc bịa)

**Bài học:**
- AI giỏi nhất khi bạn biết chủ đề đủ để đánh giá
- **Chiến lược tam giác hóa nguồn:** kiểm tra 2+ nguồn độc lập

[Hình minh họa: tam giác với 3 đỉnh: AI output / Tài liệu gốc / Kiến thức chuyên môn]

**Ghi chú giảng viên:** Không dùng ví dụ nhạy cảm. Kết quả hợp đồng/kinh doanh là an toàn. Nhấn mạnh: "AI bịa rất tự tin -- nên LUÔN kiểm tra số liệu."

---
## Slide 6: Poll #2 -- Thói quen kiểm chứng

**ZOOM POLL:**

"Bạn sẽ kiểm tra lại kết quả AI trước khi dùng không?"

- A. Luôn luôn
- B. Thỉnh thoảng
- C. Hiếm khi
- D. Chưa nghĩ đến

**Ghi chú giảng viên:** Mục tiêu: 100% chọn A sau khóa học. Nếu nhiều người chọn C/D -> "Đó là lý do chúng ta cần công thức prompt tốt hơn -- giảm rủi ro bịa."

---
## Slide 7: Công thức Prompt đầu tiên -- RTF

| Thành phần | Ý nghĩa | Ví dụ |
|-----------|---------|-------|
| **R** -- Vai trò (Role) | AI đóng vai gì | "Chuyên gia pháp lý hợp đồng" |
| **T** -- Tác vụ (Task) | AI cần làm gì | "Tóm tắt 5 điểm chính cho hợp đồng" |
| **F** -- Định dạng (Format) | Kết quả trình bày thế nào | "Danh sách bullet points, mỗi điểm 1 câu" |

**Demo ngay:** Viết prompt RTF cho cùng đơn hàng Google Vietnam -> Chạy -> So sánh với prompt đơn giản ở slide 1

**Ghi chú giảng viên:** Mở Claude.ai, gõ prompt RTF live. Đọc kết quả và so sánh trực tiếp: "Thấy sự khác biệt chưa?"

---
## Slide 8: Poll #3 -- So sánh kết quả

**ZOOM POLL:**

"Kết quả prompt RTF có tốt hơn không?"

- A. Tốt hơn nhiều
- B. Tốt hơn chút
- C. Giống nhau
- D. Tệ hơn

**Ghi chú giảng viên:** Thường 70%+ chọn A. Nếu có người chọn D -> hỏi cụ thể, có thể prompt bị lỗi -> cơ hội coaching.

---
## Slide 9: 6 Thành phần Prompt -- Bộ công cụ đầy đủ

| # | Thành phần | Viết tắt | Mô tả |
|---|-----------|----------|--------|
| 1 | **Vai trò** (Role) | R | AI đóng vai chuyên gia nào |
| 2 | **Giọng điệu** (Tone) | T | Phong cách: chuyên nghiệp, thân thiện, ngắn gọn |
| 3 | **Tác vụ** (Task) | T | Nhiệm vụ cụ thể cần hoàn thành |
| 4 | **Định dạng** (Format) | F | Cấu trúc output: bảng, bullet, đoạn văn |
| 5 | **Ràng buộc** (Constraints) | C | Giới hạn: độ dài, luật áp dụng, từ vựng |
| 6 | **Đối tượng** (Audience) | A | Ai sẽ đọc kết quả |

> "Không cần dùng hết 6 mỗi lần. Bắt đầu với 3 (RTF), thêm dần khi cần."

**Ghi chú giảng viên:** Demo ngay: viết prompt 6 thành phần cho tác vụ hợp đồng. Chạy trên Claude.ai. So sánh với RTF.

---
## Slide 10: Demo -- Prompt 6 thành phần cho hợp đồng

**Prompt mẫu:**
```
Vai trò: Chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam.
Giọng điệu: Chuyên nghiệp, rõ ràng, ngắn gọn.
Tác vụ: Dựa trên thông tin đơn đặt hàng, viết phần "Mô tả dịch vụ"
cho hợp đồng (giá, VAT, thời gian thực hiện).
Định dạng: 3-4 câu văn phong pháp lý, đánh số điều khoản.
Ràng buộc: Theo luật hợp đồng Việt Nam, dưới 200 từ.
Đối tượng: Giám đốc hai bên sẽ ký hợp đồng.

[Paste thông tin đơn hàng Google Vietnam]
```

**Ghi chú giảng viên:** Gõ live, không copy-paste. Để lớp thấy quá trình tư duy khi viết prompt.

---
## Slide 11: Hướng dẫn thực hành -- Đăng nhập Claude.ai

**Bước thực hiện:**
1. Mở trình duyệt -> claude.ai
2. Đăng nhập (hoặc tạo tài khoản mới)
3. Bấm "New conversation"
4. Paste thông tin đơn hàng mẫu (có trong handout)

[Hình minh họa: screenshot giao diện Claude.ai với mũi tên chỉ các bước]

**Ghi chú giảng viên:** Chia sẻ màn hình, làm từng bước chậm. TA hỗ trợ qua chat nếu ai gặp lỗi. Dành 5 phút cho bước này.

---
## Slide 12: Bài tập 1 -- Prompt cho kịch bản hợp đồng (13 phút)

**Nhiệm vụ A (4 phút):** Viết prompt RTF
- Trích xuất 5 điểm chính cho hợp đồng từ đơn hàng mẫu
- Chạy trên Claude.ai

**Nhiệm vụ B (5 phút):** Viết prompt 6 thành phần
- Tạo phần "Mô tả dịch vụ" cho hợp đồng
- Thêm: giọng điệu + ràng buộc + đối tượng
- Chạy trên Claude.ai

**So sánh (2 phút):** Kết quả A vs. B -- cái nào đầy đủ hơn?

> Dùng đơn hàng mẫu trong handout. Nếu xong sớm -> thử với tác vụ công việc cá nhân.

**Ghi chú giảng viên:** 3 prompt backup nếu học viên bí: manager (email báo cáo), marketer (tiêu đề quảng cáo), teacher (bài tập Toán).

---
## Slide 13: Bài tập 2 -- Few-shot + Chain-of-thought (8 phút)

**Few-shot (Cho ví dụ mẫu):**
- Mở lại prompt Nhiệm vụ B
- Thêm 2 ví dụ mẫu cách trình bày mô tả dịch vụ trong hợp đồng

**Chain-of-thought (Yêu cầu giải thích):**
- Thêm dòng: "Hãy giải thích lý do mỗi quyết định định dạng"
- Chạy lại -> So sánh trước/sau

[Hình minh họa: 2 cột so sánh output trước/sau khi thêm few-shot]

**Ghi chú giảng viên:** Đây là kỹ thuật nâng cao nhất Session 1. Nếu học viên chưa quen -> hướng dẫn từng bước.

---
## Slide 14: Poll #4 -- Đánh giá few-shot

**ZOOM POLL:**

"Few-shot có cải thiện kết quả không?"

- A. Có, rõ rệt
- B. Có, chút
- C. Không đổi
- D. Khó so sánh

**Ghi chú giảng viên:** Thảo luận nhanh: "Ai chọn A -- kết quả khác thế nào? Ai chọn D -- khó ở chỗ nào?" 2 phút.

---
## Slide 15: Bài tập 3 -- Tác vụ công việc thực tế (15 phút)

**Chuyển từ kịch bản hợp đồng sang công việc CỦA BẠN:**

1. Chọn 1 việc phải làm trong tuần này
2. Viết prompt 6 thành phần
3. Chạy trên Claude.ai
4. Đánh giá theo 3 tiêu chí:
   - Đúng nội dung?
   - Đúng định dạng?
   - Dùng được ngay không cần sửa lớn?

**Sau đó:** 3 người tình nguyện chia sẻ màn hình (3 phút mỗi người)

**Ghi chú giảng viên:** Khuyến khích đa dạng: 1 manager, 1 marketer, 1 teacher. Hỏi lớp: "Prompt này thiếu thành phần gì?"

---
## Slide 16: 3 Takeaway hôm nay

1. **AI dự đoán từ** -- đừng tin mù quáng, luôn kiểm chứng
2. **Prompt tốt = cụ thể + có cấu trúc** -- 6 thành phần là bộ công cụ
3. **Thực hành quan trọng hơn lý thuyết** -- bạn vừa hoàn thành ít nhất 3 prompt thật

---
## Slide 17: Bài tập về nhà (20--25 phút)

**Tạo "Prompt Library" cá nhân:**
- 5 prompt cho 5 tác vụ thường xuyên của bạn
- Mỗi prompt dùng ít nhất 4/6 thành phần
- 1 trong 5 prompt phải liên quan đến xử lý tài liệu (như kịch bản hợp đồng)
- Lưu vào file/ghi chú -> Mang đến Buổi 2

**Preview Buổi 2:**
> "Cùng tác vụ hợp đồng đó -- chat mất 5 tin nhắn, agent làm trong 1 brief. Hôm sau bạn sẽ thấy tại sao."
