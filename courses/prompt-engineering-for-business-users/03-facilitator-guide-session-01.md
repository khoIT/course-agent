# Hướng Dẫn Giảng Viên — Buổi 1: AI + Prompt Mastery

> **Mục tiêu terminal:** Học viên viết prompt hoàn chỉnh 6 thành phần để trích xuất thông tin từ đơn đặt hàng Google Vietnam và tạo nội dung hợp đồng sơ bộ trên Claude.ai.
>
> **Công cụ:** Claude.ai
> **Thời lượng:** 2 giờ (120 phút)
> **Nguyên tắc thiết kế:** Demo trước, giải thích sau. Không có khối lecture thuần túy. Học viên thực hành từ phút đầu tiên.

---

## Chuẩn Bị Kỹ Thuật (Trước Buổi 15 Phút)

- [ ] Mở Claude.ai, đăng nhập bằng tài khoản demo — **KHÔNG** dùng tài khoản cá nhân trước lớp
- [ ] Copy sẵn thông tin đơn hàng Google Vietnam vào clipboard:
  ```
  Công ty: TNHH Google Vietnam
  Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
  MST: 028476564
  Đại diện: Ông Khá Văn Bảnh – Giám Đốc
  Dịch vụ: (1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND
  VAT: 8%
  Thời gian: 10 ngày từ ngày ký hợp đồng
  ```
- [ ] Chuẩn bị sẵn 4 Zoom poll (xem bên dưới) — pre-configure trước buổi
- [ ] Test share screen: độ phân giải đủ đọc text trên Claude.ai từ xa
- [ ] Handout đơn hàng mẫu + template 6 thành phần đã gửi cho học viên
- [ ] Kế hoạch dự phòng: nếu Claude.ai lỗi → dùng ảnh chụp màn hình kết quả đã chuẩn bị

---

## Zoom Polls (Cấu Hình Sẵn)

**Poll #1** (phút 0:05–0:07):
> "Phản ứng đầu tiên của bạn khi thấy demo vừa rồi?"
> - Ấn tượng, muốn thử ngay
> - Không chắc kết quả chính xác không
> - Muốn thử ngay nhưng lo bảo mật
> - Đã biết rồi, không mới

**Poll #2** (phút 0:18–0:20):
> "Bạn sẽ kiểm tra lại kết quả AI trước khi dùng không?"
> - Luôn luôn — không tin AI
> - Thỉnh thoảng — tùy tác vụ
> - Hiếm khi — AI thường đúng
> - Chưa nghĩ đến vấn đề này

**Poll #3** (phút 0:25–0:27):
> "Kết quả prompt RTF có tốt hơn prompt đơn giản không?"
> - Tốt hơn nhiều — rõ ràng hơn hẳn
> - Tốt hơn chút — khó thấy ngay
> - Giống nhau
> - Tệ hơn — quá rườm rà

**Poll #4** (phút 1:10–1:15):
> "Few-shot (ví dụ mẫu) có cải thiện kết quả không?"
> - Có, rõ rệt — output tốt hơn nhiều
> - Có, nhưng chỉ cải thiện chút
> - Không đổi
> - Khó so sánh

---

## Bảng Thời Gian Chi Tiết

### Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Live demo khai mạc** | Mở Claude.ai ngay — không chào hỏi, không giới thiệu tên. Paste thông tin đơn hàng Google Vietnam. Gõ: *"Đọc thông tin này và cho tôi biết các điểm chính cần có trong hợp đồng dịch vụ."* Đọc to kết quả. Im lặng 5 giây. | Khoảnh khắc "wow" quan trọng nhất. Chuẩn bị clipboard sẵn. Không giải thích trước khi demo. |
| 0:05–0:07 | **Poll #1** | "Trước khi tôi nói bất cứ điều gì, mời bạn cho tôi biết cảm nhận đầu tiên sau khi thấy demo vừa rồi." → Launch Poll #1. Đọc kết quả to. | Nếu >50% "Không chắc chính xác" → nhấn phần kiểm chứng sớm hơn kế hoạch. |
| 0:07–0:12 | **Giải thích ngược** | *"Vừa rồi AI làm gì? Nó không thực sự hiểu hợp đồng. Nó dự đoán từ tiếp theo dựa trên hàng tỷ tài liệu đã đọc. Hãy nghĩ như thế này:"* Giới thiệu 3 mô hình tư duy bằng slide: (1) **Máy dự đoán từ (word prediction machine):** "Như autocomplete điện thoại, nhưng quy mô hàng tỷ tài liệu." (2) **Dữ liệu huấn luyện (training data):** "AI đọc sách, không sống đời. Nó biết hợp đồng vì đọc hàng nghìn hợp đồng." (3) **Cửa sổ ngữ cảnh (context window):** "AI nhớ cuộc trò chuyện, nhưng có giới hạn — như bộ nhớ làm việc." | Dùng slide 1–3. Pace chậm — đây là nền tảng tư duy cả khóa. |
| 0:12–0:14 | **Chat activity** | *"Bây giờ tôi muốn biết về công việc của bạn. Gõ vào chat Zoom một câu: AI có thể làm gì trong công việc của BẠN?"* Chờ 30 giây. Đọc 3 câu trả lời. Bình luận ngắn mỗi câu. | Thu thập insight về context lớp. Dùng ví dụ học viên đưa ra trong các block sau. |
| 0:14–0:18 | **Demo ảo giác AI (hallucination)** | *"Một vấn đề quan trọng cần biết ngay từ đầu."* Hỏi Claude (trong cùng conversation): *"Trong đơn hàng vừa rồi, tổng giá trị hợp đồng sau thuế là bao nhiêu?"* → Đọc kết quả. Chỉ ra: đơn hàng không ghi tổng, AI đã tính hoặc bịa. *"Đây gọi là ảo giác — hallucination. AI tự tin nhưng có thể sai. Chiến lược tam giác hóa nguồn (source triangulation): kiểm tra ít nhất 2 nguồn độc lập trước khi dùng kết quả quan trọng."* | Dùng ví dụ hợp đồng/kinh doanh — an toàn, không nhạy cảm. KHÔNG dùng chủ đề chính trị, tôn giáo. |
| 0:18–0:20 | **Poll #2** | "Sau khi thấy ảo giác AI, bạn có kế hoạch kiểm chứng kết quả không?" → Launch Poll #2. | Bình thường hóa việc kiểm chứng: "Đây không phải bất tin AI — đây là thói quen chuyên nghiệp." |
| 0:20–0:25 | **Prompt RTF** | *"Bây giờ tôi sẽ cho bạn thấy cách viết prompt tốt hơn."* Mở conversation mới trên Claude.ai. Viết prompt RTF trực tiếp: *"Vai trò: chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam. Tác vụ: tóm tắt 5 điểm chính cần đưa vào hợp đồng dịch vụ dựa trên thông tin đơn hàng này. Định dạng: danh sách bullet points, mỗi điểm 1 câu rõ ràng."* Paste đơn hàng. Chạy. So sánh với kết quả phút 0:00. | Slide 4–5. Gõ prompt THẬT CHẬM để học viên theo dõi từng thành phần. |
| 0:25–0:27 | **Poll #3** | "Kết quả prompt RTF — Vai trò + Tác vụ + Định dạng — có tốt hơn không?" → Launch Poll #3. | Dù kết quả thế nào, dùng để dẫn vào 6 thành phần. |
| 0:27–0:33 | **6 thành phần prompt** | *"RTF là bộ công cụ cơ bản. Hôm nay chúng ta sẽ mở rộng lên 6 thành phần đầy đủ."* Giới thiệu thêm 3 thành phần: **Giọng điệu (Tone)**, **Ràng buộc (Constraints)**, **Đối tượng (Audience)**. Demo ngay với đơn hàng Google Vietnam — thêm vào prompt vừa viết: *"Giọng điệu: chuyên nghiệp, rõ ràng, theo phong cách pháp lý Việt Nam. Ràng buộc: không quá 150 từ, phù hợp luật thương mại Việt Nam. Đối tượng: hai bên ký hợp đồng — giám đốc bên mua và bên cung cấp dịch vụ."* Chạy. Đọc kết quả. | Slide 6–8. Nhấn mạnh: "6 thành phần = bộ công cụ đầy đủ. Không cần dùng hết mỗi lần. Bắt đầu với RTF, thêm dần khi cần." |
| 0:33–0:35 | **Tóm tắt Block A** | *"3 thứ bạn vừa học trong 35 phút: Một — AI dự đoán từ, không phải thần thánh, phải kiểm chứng. Hai — Prompt RTF tốt hơn prompt đơn giản. Ba — 6 thành phần cho phép bạn kiểm soát chính xác hơn. Bây giờ bạn sẽ tự làm."* | Nhanh, không dừng lâu. Chuẩn bị tinh thần cho Break 1. |
| 0:35–0:40 | **Break 1** | *"5 phút nghỉ — camera tắt được, đứng dậy, vận động. Lúc quay lại bạn sẽ tự viết prompt trên Claude.ai."* | Dùng thời gian chuẩn bị handout và kiểm tra setup Claude.ai cho Block B. |

---

### Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:45 | **Hướng dẫn đăng nhập Claude.ai** | Chia sẻ màn hình. Hướng dẫn từng bước: mở claude.ai → đăng nhập (Google hoặc email) → tạo conversation mới. *"Ai chưa vào được? Gõ 'help' vào chat Zoom — trợ giảng sẽ hỗ trợ ngay."* Khi đa số đã vào: *"Bây giờ paste thông tin đơn hàng từ handout vào conversation. Chưa gửi, chỉ paste thôi."* | Không rush. Học viên cần thành công ở bước này mới tự tin làm bài tập. |
| 0:45–0:58 | **Bài tập 1: Hai prompt cho kịch bản hợp đồng** | *"Bạn có 13 phút để làm 2 nhiệm vụ."* **Nhiệm vụ A:** Viết prompt RTF (3 thành phần: Vai trò, Tác vụ, Định dạng) để trích xuất thông tin quan trọng từ đơn hàng Google Vietnam. Chạy trên Claude.ai. **Nhiệm vụ B:** Viết prompt 6 thành phần để AI tạo phần "Mô tả dịch vụ" cho hợp đồng (giá, VAT, thời gian). Chạy và so sánh kết quả A vs B. *"Dùng handout template 6 thành phần — điền vào chỗ trống. Không cần hoàn hảo, cần chạy được."* | Đi "vòng quanh" qua Zoom chat mỗi 3 phút: "Ai đang ở Nhiệm vụ A? Ai đã sang B?" Không can thiệp trừ khi bị kẹt hẳn. |
| 0:58–1:02 | **Chat share** | *"Paste 1 dòng từ kết quả AI mà bạn thấy tốt nhất vào chat Zoom — chỉ 1 dòng thôi."* Chờ 30 giây. Chọn 3 ví dụ tốt. Bình luận cụ thể: *"Kết quả này tốt vì nó có [X]. Còn cải thiện được ở [Y]."* | Chọn kết quả đa dạng: 1 rất tốt, 1 tốt vừa, 1 có thể cải thiện — để show spectrum. |
| 1:02–1:10 | **Bài tập 2: Few-shot + Chain-of-thought** | *"Mở prompt Nhiệm vụ B vừa viết. Chúng ta sẽ nâng cấp nó."* Hướng dẫn thêm **few-shot (ví dụ mẫu):** Thêm 2 ví dụ mẫu về cách trình bày mô tả dịch vụ trong hợp đồng trước phần yêu cầu chính. *"Ví dụ: 'Mẫu mô tả dịch vụ 1: [example 1]. Mẫu mô tả dịch vụ 2: [example 2]. Bây giờ viết mô tả cho dịch vụ trong đơn hàng này.'"* Sau đó thêm **chain-of-thought (chuỗi suy luận):** Thêm câu *"Hãy giải thích lý do mỗi quyết định định dạng của bạn."* Chạy lại. So sánh với kết quả cũ. | Gợi ý ví dụ mẫu nếu học viên không biết bắt đầu từ đâu — show mẫu trên slide. |
| 1:10–1:15 | **Poll #4 + Thảo luận** | Launch Poll #4: "Few-shot có cải thiện kết quả không?" Đọc kết quả. *"Nếu bạn thấy cải thiện rõ — đó là vì AI học được pattern format từ ví dụ của bạn. Nếu chưa thấy rõ — thường là ví dụ chưa đủ cụ thể hoặc chưa khác nhau đủ."* | 2–3 câu thảo luận, không kéo dài. Chuẩn bị Break 2. |
| 1:15–1:20 | **Break 2** | *"5 phút nữa — đứng lên, vận động. Lúc quay lại bạn sẽ áp dụng vào tác vụ thật của bạn."* | Energy check: quan sát mood lớp. Nếu energized → giữ nguyên kế hoạch. Nếu mệt → rút ngắn showcase xuống 2 người thay vì 3. |

---

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:35 | **Bài tập 3: Tác vụ công việc thực tế** | *"Bây giờ chuyển từ kịch bản hợp đồng sang việc thật của bạn. Chọn 1 việc bạn phải làm trong tuần này — báo cáo, email, phân tích, bất cứ thứ gì. Viết prompt 6 thành phần. Chạy. Đánh giá theo 3 tiêu chí: Đúng nội dung không? Đúng định dạng không? Dùng được ngay không cần sửa lớn?"* 3 prompt gợi ý nếu học viên không biết chọn tác vụ gì: Manager: *"Vai trò: trợ lý giám đốc. Tác vụ: soạn email báo cáo tuần cho sếp. Định dạng: 5 bullet points, dưới 200 từ."* Marketer: *"Vai trò: chuyên gia marketing. Tác vụ: viết 3 tiêu đề quảng cáo cho sản phẩm [X]. Định dạng: mỗi tiêu đề dưới 10 từ."* Giáo viên: *"Vai trò: giáo viên Toán lớp 9. Tác vụ: ra 5 bài tập phương trình bậc hai. Định dạng: mức độ tăng dần từ dễ đến khó."* | Đây là bài tập quan trọng nhất — học viên kết nối kỹ năng mới với thực tế. Không can thiệp quá sớm — để họ vật lộn một chút. |
| 1:35–1:45 | **Showcase** | *"Tôi cần 3 tình nguyện viên chia sẻ màn hình — trình bày prompt và kết quả. Ai xung phong?"* Sau mỗi bài: *"Lớp cho biết: prompt này thiếu thành phần gì? Gõ vào chat."* Facilitator bình luận điểm mạnh trước, cải thiện sau: *"Điểm mạnh: [X]. Có thể nâng lên bằng cách: [Y]."* | Chọn trước 1-2 người bạn đã thấy kết quả tốt trong Block B. Nếu không có tình nguyện → gọi tên người bạn biết tự tin. |
| 1:45–1:50 | **Q&A** | Thu câu hỏi qua chat. Ưu tiên 3 câu hỏi phổ biến nhất: *"Khi nào dùng few-shot? → Khi bạn muốn output đúng định dạng nhất định. Khi nào dùng chain-of-thought? → Khi task cần phân tích hoặc suy luận. Prompt dài bao nhiêu là tối ưu? → Không có con số tuyệt đối, nhưng mỗi thành phần phải có lý do tồn tại."* | Không cần trả lời tất cả. Câu hỏi chưa trả lời → ghi lên slide và hứa trả lời đầu buổi sau. |

---

### Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Giao bài về nhà** | *"Bài về nhà buổi này — khoảng 20–25 phút — là xây 'Thư viện Prompt' cá nhân: 5 prompt cho 5 tác vụ bạn làm thường xuyên nhất. Mỗi prompt phải dùng ít nhất 4 trong 6 thành phần. Và quan trọng: ít nhất 1 trong 5 prompt phải liên quan đến đọc hoặc xử lý tài liệu — như kịch bản hợp đồng hôm nay. Lưu vào file hoặc ghi chú. Mang đến buổi sau."* | Cụ thể: 5 prompt, 4/6 thành phần, 1 prompt về tài liệu. Gửi template qua chat ngay sau buổi học. |
| 1:55–2:00 | **Tóm tắt và Preview** | *"3 điều bạn mang về hôm nay: Một — AI dự đoán từ, không phải thần thánh — luôn kiểm chứng kết quả quan trọng. Hai — Prompt tốt = cụ thể + có cấu trúc. Ba — 6 thành phần là bộ công cụ, không phải bắt buộc dùng hết. Buổi tới: cùng tác vụ hợp đồng Google Vietnam đó — nhưng thay vì 5 tin nhắn qua lại, agent làm trong 1 brief. Bạn sẽ thấy tại sao agent khác chat. Hẹn gặp lại!"* | Kết thúc đúng giờ. Gửi link recap + template qua chat trước khi close meeting. |

---

## Troubleshooting Scenarios

**Kịch bản 1: Demo khai mạc cho kết quả bất ngờ (AI hallucinate hoặc output kém)**
- *Dấu hiệu:* Output không match kỳ vọng, hoặc AI hiểu sai câu hỏi
- *Xử lý:* KHÔNG panic, KHÔNG restart. Biến thành teachable moment: *"Hoàn hảo — đây chính là lý do chúng ta học hôm nay. Prompt đơn giản cho kết quả không kiểm soát. Hãy phân tích: AI đã hiểu sai điểm nào? Tại sao?"* Dùng output xấu để minh họa tầm quan trọng của cấu trúc prompt.

**Kịch bản 2: Học viên lo ngại bảo mật dữ liệu**
- *Dấu hiệu:* Câu hỏi "AI có lấy dữ liệu công ty không?", "Thông tin hợp đồng có bị lưu không?"
- *Xử lý:* *"Câu hỏi quan trọng. Claude không lưu cuộc trò chuyện để huấn luyện theo mặc định khi dùng gói trả phí. Tuy nhiên, nguyên tắc vàng: không nhập thông tin mật công ty — tên khách hàng thật, số hợp đồng thật, dữ liệu tài chính thật. Dùng thông tin mẫu hoặc ẩn danh hóa. Đơn hàng trong handout hôm nay là mẫu — không phải dữ liệu thật."*

**Kịch bản 3: Học viên không biết chọn tác vụ thật ở Block C**
- *Dấu hiệu:* Hỏi "Tôi làm tác vụ gì?" hoặc chọn tác vụ quá chung chung
- *Xử lý:* *"Mở lịch tuần này. Tìm meeting hoặc deadline gần nhất. Chuẩn bị gì cho cuộc họp đó? Email gửi ai? Báo cáo cho ai? Đó là tác vụ của bạn."* Gợi ý cụ thể theo nghề: Manager → agenda họp, Marketer → caption mạng xã hội, Teacher → câu hỏi kiểm tra.

**Kịch bản 4: Claude.ai bị chặn hoặc không truy cập được**
- *Dấu hiệu:* Nhiều học viên báo lỗi đăng nhập hoặc mạng chặn
- *Xử lý:* Chuyển sang chế độ "follow along" — học viên xem facilitator thao tác, tự ghi note prompt của mình, test sau buổi học ở nhà. Gửi link recording và hướng dẫn tự thực hành sau.

---

## Technical Notes — Zoom

- **Font size khi share screen:** Phóng Claude.ai lên 125–150% để học viên đọc được qua Zoom
- **Share màn hình:** Chỉ share tab Claude.ai, không share toàn màn hình (tránh hiển thị thông tin cá nhân)
- **Ghi âm:** Nhắc học viên buổi được ghi lại (nếu có) để họ không cần ghi chú vội
- **Kế hoạch B nếu AI chậm:** Có ảnh chụp màn hình kết quả mẫu sẵn trong slide để show ngay thay vì chờ
- **Trợ giảng (nếu có):** Phụ trách chat — đọc câu hỏi, hỗ trợ kỹ thuật, tổng hợp kết quả poll
