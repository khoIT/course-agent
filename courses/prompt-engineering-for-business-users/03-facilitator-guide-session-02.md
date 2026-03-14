# Hướng Dẫn Giảng Viên — Buổi 2: Tư Duy Agent (Agent Thinking)

> **Mục tiêu terminal:** Chuyển đổi quy trình tạo hợp đồng từ chat thủ công sang agent brief hoàn chỉnh, chứng minh sự khác biệt hiệu quả.
>
> **Công cụ:** Claude.ai → Claude Cowork (giới thiệu)
> **Thời lượng:** 2 giờ (120 phút)
> **Nguyên tắc thiết kế:** Demo so sánh là khoảnh khắc chuyển giao tâm lý quan trọng nhất. Học viên phải tự viết task brief và chạy trên Cowork trước khi buổi kết thúc.

---

## Chuẩn Bị Kỹ Thuật (Trước Buổi 15 Phút)

- [ ] Mở Claude.ai (tab 1) — chuẩn bị đơn hàng Google Vietnam sẵn trong notepad
- [ ] Mở Claude Cowork (tab 2) — đăng nhập, tạo project mới, có task brief mẫu sẵn
- [ ] Brief mẫu contract task chuẩn bị sẵn (xem bên dưới) — copy vào clipboard
- [ ] Video backup demo Cowork (2–3 phút) nếu Cowork lỗi live
- [ ] Slide so sánh chat vs. agent side-by-side
- [ ] Worksheet "Workflow Mapping" đã gửi cho học viên
- [ ] 4 Zoom poll pre-configured (xem bên dưới)

**Brief mẫu contract task (cho demo Block A):**
```
Mục tiêu: Tạo nội dung hợp đồng dịch vụ hoàn chỉnh từ thông tin đơn đặt hàng.

Bối cảnh: Đây là đơn đặt hàng của công ty TNHH Google Vietnam cho 2 dịch vụ:
(1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND. VAT 8%.
Thời gian thực hiện: 10 ngày từ ngày ký. Đại diện: Ông Khá Văn Bảnh – Giám Đốc.

Các bước thực hiện:
1. Trích xuất thông tin bên mua: tên, địa chỉ, MST, người đại diện
2. Tính toán: giá từng dịch vụ, VAT, tổng giá trị hợp đồng
3. Soạn các điều khoản: mô tả dịch vụ, thời gian, thanh toán, bảo hành
4. Định dạng theo cấu trúc hợp đồng dịch vụ chuẩn Việt Nam
5. Kiểm tra: thông tin có đầy đủ và nhất quán không?

Tiêu chí thành công: Hợp đồng có đủ 6 phần chuẩn, số liệu chính xác,
định dạng văn bản pháp lý, dùng được ngay mà không cần sửa lớn.
```

---

## Zoom Polls (Cấu Hình Sẵn)

**Poll #1** (phút 0:05–0:08):
> "Khi dùng ChatGPT/Claude, bạn thường gửi bao nhiêu tin nhắn cho 1 tác vụ?"
> - 1 tin nhắn — tôi chỉ hỏi 1 lần
> - 2–5 tin nhắn — qua lại một chút
> - 6–10 tin nhắn — nhiều vòng chỉnh sửa
> - Hơn 10 — rất nhiều qua lại

**Poll #2** (phút 0:20–0:22):
> "Sau khi thấy demo, bạn muốn dùng cách nào cho công việc hàng ngày?"
> - Chat từng bước — kiểm soát tốt hơn
> - Agent tự động — tiết kiệm thời gian hơn
> - Tùy tình huống — cần cả hai

**Poll #3** (phút 1:07–1:15):
> "Phần nào của task brief khó viết nhất?"
> - Mục tiêu — không biết diễn đạt rõ
> - Bối cảnh — không biết AI cần thông tin gì
> - Các bước — không biết chia nhỏ thế nào
> - Tiêu chí thành công — không biết "đủ tốt" là gì

**Poll #4** (phút cuối Block C — tùy chọn):
> "Agent có an toàn để dùng với dữ liệu công việc không?"
> - Có — tôi hiểu rủi ro và cách quản lý
> - Cần biết thêm — chưa chắc
> - Không — lo ngại bảo mật

---

## Bảng Thời Gian Chi Tiết

### Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Recap buổi 1** | *"Chào mọi người! Trước khi bắt đầu, ai đã hoàn thành Prompt Library 5 prompt rồi? Giơ tay hoặc react thumbs up."* Đếm phản ứng. Gọi 1 người: *"Bạn [tên], prompt hay nhất trong library là prompt nào? Đọc cho lớp nghe."* Nhận xét nhanh 30 giây. *"Tuyệt — buổi hôm nay sẽ làm những prompt đó mạnh hơn 10 lần."* | Nếu ít người làm homework → không chê, hỏi tại sao: "Phần nào khó nhất?" Dùng câu trả lời để frame buổi học. |
| 0:05–0:08 | **Poll #1** | *"Câu hỏi đầu tiên — thành thật nhé."* Launch Poll #1. Đọc kết quả: *"Phần lớn mọi người gửi 2–5 tin nhắn. Hôm nay tôi sẽ cho bạn thấy tại sao 5 tin nhắn là quá nhiều — và cách làm cùng tác vụ đó trong 1 lần."* | Kết quả poll thiết lập pain point. Không cần comment nhiều. |
| 0:08–0:20 | **Demo so sánh — cùng 1 tác vụ, 2 cách** | *"Cùng 1 tác vụ: tạo hợp đồng từ đơn đặt hàng Google Vietnam. Tôi sẽ làm 2 cách — hãy bấm giờ."* **Cách 1 — Chat (tab Claude.ai):** Tin nhắn 1: "Đọc thông tin đơn hàng này." Paste đơn hàng. Tin nhắn 2: "Tạo phần mô tả dịch vụ." Tin nhắn 3: "Tính tổng sau VAT." Tin nhắn 4: "Viết điều khoản thanh toán 50% trước, 50% sau." Tin nhắn 5: "Định dạng lại theo format hợp đồng." Comment: *"5 tin nhắn. Mỗi lần tôi phải nghĩ bước tiếp theo, chờ, copy kết quả."* **Cách 2 — Agent brief (tab Claude Cowork):** Paste brief mẫu đã chuẩn bị. Gửi 1 lần. *"1 brief. Agent đọc bối cảnh, lập kế hoạch, thực thi từng bước, tự kiểm tra."* Đọc kết quả. So sánh thời gian thực tế. | Demo quan trọng nhất khóa học. Chuẩn bị kỹ: brief mẫu trong clipboard, đơn hàng sẵn. Có video backup nếu Cowork lỗi. Ghi thời gian thực trên màn hình. |
| 0:20–0:22 | **Poll #2** | *"Sau khi thấy 2 cách, bạn muốn dùng cách nào?"* Launch Poll #2. Đọc kết quả. *"Câu trả lời 'Tùy tình huống' thực ra là đúng nhất — và đó chính xác là điều chúng ta học hôm nay: khi nào dùng chat, khi nào dùng agent."* | Không áp đặt "agent tốt hơn chat". Nhấn mạnh sự phù hợp theo tình huống. |
| 0:22–0:30 | **3 khác biệt cốt lõi: Chat vs. Agent** | *"Để quyết định dùng cái nào, bạn cần hiểu 3 điểm khác biệt cơ bản."* Slide 1–6: **Khác biệt 1:** *"Chat = bạn ra lệnh từng bước. Agent = bạn giao mục tiêu, AI tự lập kế hoạch."* **Khác biệt 2:** *"Chat = mỗi tin nhắn là một cuộc trò chuyện nhỏ. Agent = nhớ cả quy trình và trạng thái từ đầu đến cuối."* **Khác biệt 3:** *"Chat = bạn copy-paste kết quả thủ công. Agent = tự tạo file, tự kiểm tra, tự báo cáo lỗi."* Phép so sánh: *"Chat giống nhắn tin cho nhân viên từng dòng hướng dẫn. Agent giống giao brief và để họ tự làm — bạn chỉ review kết quả cuối."* | Slide 1–6. Dừng sau mỗi khác biệt, hỏi: "Câu hỏi gì không?" Đây là nền tảng cho toàn bộ Block B. |
| 0:30–0:33 | **Ma trận quyết định** | *"Câu hỏi thực tế: khi nào dùng agent?"* Slide 7–8: Vẽ ma trận 2x2: Lặp lại + nhiều bước → **Agent**. Sáng tạo + 1 lần → **Chat**. 3 ví dụ: Manager lập kế hoạch dự án tuần (Agent), Marketer viết caption 1 lần (Chat), Teacher tạo cả bộ đề thi (Agent). | Học viên sẽ dùng ma trận này cho bài tập Block C. |
| 0:33–0:35 | **Chat activity** | *"Một câu hỏi cụ thể: Tác vụ nào trong công việc của bạn lặp lại mỗi tuần và mất hơn 30 phút? Gõ vào chat."* Chờ 30 giây. Chọn 2–3 ví dụ: *"Báo cáo tuần — Agent phù hợp vì lặp lại và nhiều bước. Email follow-up khách hàng — cũng Agent. Presentation cho sếp — tùy, nhưng thường Agent."* | Thu thập ví dụ thực tế cho Block C. Đây cũng là cách check engagement. |
| 0:35–0:40 | **Break 1** | *"5 phút nghỉ. Lúc quay lại bạn sẽ tự viết task brief đầu tiên và chạy trên Claude Cowork."* | Chuẩn bị demo giao diện Cowork cho Block B. |

---

### Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:48 | **Hướng dẫn Claude Cowork** | Chia sẻ màn hình — tab Claude Cowork. *"Đây là giao diện Cowork. Khác với Claude.ai chat thông thường ở chỗ: bạn tạo project — project lưu context. Trong project, bạn tạo task với brief. Agent đọc brief và thực thi."* Demo từng bước: tạo project → tạo task → paste brief → gửi. Hướng dẫn học viên đăng nhập: *"Mở link Cowork tôi đã gửi. Ai chưa vào được gõ 'help' vào chat."* | Không giải thích quá nhiều tính năng Cowork. Chỉ đủ để họ làm bài tập. |
| 0:48–1:02 | **Bài tập 1: Task Brief đầu tiên** | *"Bạn có 14 phút để viết và chạy task brief đầu tiên. Dùng kịch bản hợp đồng hoặc tác vụ cá nhân từ homework."* 4 phần bắt buộc: **(1) Mục tiêu:** AI cần tạo ra gì? **(2) Bối cảnh:** AI cần biết thông tin gì, đọc file nào? **(3) Các bước thực hiện:** ít nhất 3 bước theo thứ tự cụ thể. **(4) Tiêu chí thành công:** kết quả đạt chuẩn trông như thế nào?* *"Dùng handout template brief — điền vào 4 ô. Khi xong paste vào Cowork và gửi."* Hành động của facilitator trong 14 phút: Phút 3: "Ai đang ở phần nào? Ai chưa bắt đầu phần Bối cảnh?" Phút 7: "Mục tiêu 10 người xong rồi — chuyển sang Các bước." Phút 12: "Còn 2 phút — ai chưa gửi brief thì gửi bản nháp trước, chỉnh sau." | Lỗi thường gặp: Mục tiêu quá chung ("làm hợp đồng") → nhắc: "Mục tiêu phải đủ cụ thể để AI không cần hỏi lại." |
| 1:02–1:07 | **Chat share** | *"Kết quả agent của bạn như thế nào? Đánh giá 1–5 điểm và 1 câu nhận xét. Gõ vào chat."* Đọc 3–4 response. Bình luận: *"Điểm 4 — 'bối cảnh đủ nên AI không bịa số liệu' — đúng. Đây chính là lý do phần Bối cảnh quan trọng."* | So sánh kết quả đa dạng: brief đầy đủ vs. brief sơ sài → thấy rõ tầm quan trọng của từng phần. |
| 1:07–1:15 | **Poll #3 + Thảo luận** | Launch Poll #3: "Phần nào khó viết nhất?" Đọc kết quả. Thảo luận theo kết quả: Nếu "Mục tiêu" win: *"Mục tiêu khó vì thường chúng ta biết mình muốn gì nhưng khó diễn đạt chính xác. Mẹo: viết 'AI cần tạo ra [danh từ cụ thể] cho [ai] để [mục đích gì]'."* Nếu "Tiêu chí thành công" win: *"Khó vì chúng ta thường không tự đặt chuẩn cho bản thân. Mẹo: nghĩ 'nếu tôi nhận kết quả này từ nhân viên, tôi có chấp nhận ngay không? Nếu không, còn thiếu gì?'"* | 5–6 phút thảo luận thực chất. Không vội sang Break. |
| 1:15–1:20 | **Break 2** | *"5 phút nghỉ. Lúc quay lại bạn sẽ mapping workflow và viết brief cho tác vụ thực tế của mình."* | Nhắc: chuẩn bị sẵn worksheet Workflow Mapping cho Block C. |

---

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:35 | **Bài tập 2: Workflow Mapping** | *"Bài tập này giúp bạn tìm ra nơi agent tạo ra giá trị lớn nhất trong công việc của bạn."* Bước 1: Liệt kê 5 tác vụ lặp lại hàng tuần vào worksheet. Bước 2: Phân loại mỗi tác vụ vào 3 cột: **Chat phù hợp** / **Agent phù hợp** / **Chưa chắc / Không phù hợp AI**. Bước 3: Chọn 1 tác vụ "Agent phù hợp" → viết brief đầy đủ 4 phần cho tác vụ đó. *"Câu hỏi hướng dẫn khi phân loại: Tác vụ này có lặp lại mỗi tuần không? Có nhiều hơn 3 bước không? Output có cấu trúc rõ ràng không? Nếu cả 3 câu trả lời là Có → Agent phù hợp."* | Dành ít nhất 10 phút cho học viên làm độc lập. Không rush — Workflow Mapping là bài tập có giá trị nhất buổi này cho công việc dài hạn. |
| 1:35–1:45 | **Showcase** | *"Tôi cần 3 người trình bày workflow mapping và brief của mình."* Sau mỗi bài, lớp phản hồi theo 1 câu hỏi duy nhất: *"Brief này đủ rõ để agent thực thi không cần giải thích thêm không? Gõ Yes hoặc No + 1 điều cần thêm vào."* Facilitator nhận xét: *"Brief [tên] mạnh ở phần Bối cảnh — AI có đủ dữ liệu để bắt đầu ngay. Điều cần thêm: phần Tiêu chí cụ thể hơn ở [X]."* | Chọn 3 brief đa dạng: 1 rất tốt, 1 trung bình, 1 cần cải thiện — để cả lớp thấy spectrum và học từ nhau. |
| 1:45–1:50 | **Q&A** | Thu câu hỏi qua chat. Ưu tiên: *"Agent có an toàn không? → Agent chạy trong môi trường kiểm soát. Không gửi dữ liệu ra ngoài nếu không cấu hình. Dùng thông tin mẫu khi học."* *"Chi phí sử dụng Cowork? → [thông tin gói học của khóa]."* *"Agent có bao giờ làm sai không? → Có. Vì vậy tiêu chí thành công quan trọng — bạn review output trước khi dùng."* | Câu hỏi lo ngại "mất kiểm soát" rất phổ biến. Nhấn mạnh: "Bạn vẫn là người quyết định cuối cùng. Agent thực thi kế hoạch bạn viết ra." |

---

### Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Giao bài về nhà** | *"Bài về nhà khoảng 25 phút: chạy 2 tác vụ thực tế trên Claude Cowork. Ghi lại 4 thứ: Brief bạn đã gửi, Kết quả nhận được, Điều chỉnh cần thiết, So sánh với cách chat cũ: bạn tiết kiệm bao nhiêu phút? Mang đến buổi sau — chúng ta sẽ phân tích kết quả cùng nhau."* | Gửi template ghi chép qua chat. Nhấn mạnh: ghi lại thời gian tiết kiệm — con số này có giá trị khi thuyết phục sếp hoặc team. |
| 1:55–2:00 | **Tóm tắt và Preview** | *"Tóm tắt buổi hôm nay: Agent = ủy quyền thông minh. Bạn là sếp — giao mục tiêu rõ ràng. AI là nhân viên giỏi — tự lập kế hoạch và thực thi. Bạn vẫn review và phê duyệt kết quả cuối."* *"Buổi tới: chúng ta sẽ cài Claude Code và chạy THỰC SỰ contract agent — không phải xem demo, bạn tự chạy trên máy mình, tạo ra file hợp đồng thật. Cài Claude Code trước buổi — link hướng dẫn tôi gửi ngay sau đây. Hẹn gặp lại!"* | Gửi link hướng dẫn cài Claude Code ngay trong chat trước khi đóng meeting. Nhấn mạnh: cài trước, không cài live vì mất nhiều thời gian. |

---

## Troubleshooting Scenarios

**Kịch bản 1: Claude Cowork gặp lỗi khi demo live**
- *Dấu hiệu:* Trang Cowork không load, brief không gửi được, agent không phản hồi
- *Xử lý:* Chuyển ngay sang video backup (2–3 phút đã chuẩn bị sẵn). *"Mạng hơi không ổn định — tôi sẽ show kết quả từ phiên trước để tiết kiệm thời gian."* Sau demo video, hỏi: *"Câu hỏi về những gì bạn vừa thấy?"* Học viên vẫn làm bài tập bằng Claude.ai thông thường nếu Cowork không khả dụng — brief vẫn hữu ích dù chạy trên chat.

**Kịch bản 2: Học viên lo "mất kiểm soát" khi dùng agent**
- *Dấu hiệu:* "Tôi muốn tự kiểm soát từng bước" hoặc "Lỡ AI làm sai thì sao?"
- *Xử lý:* *"Hoàn toàn hợp lý. Hãy nghĩ thế này: khi bạn giao việc cho nhân viên, bạn không đứng cạnh họ từng phút. Bạn giao brief rõ ràng, đặt deadline, và review kết quả. Agent cũng vậy — bạn vẫn là người kiểm tra output trước khi dùng. Agent không tự gửi email hay ký hợp đồng thay bạn."*

**Kịch bản 3: Brief của học viên quá ngắn hoặc quá chung chung**
- *Dấu hiệu:* Brief chỉ 1–2 câu, thiếu Bối cảnh và Tiêu chí, agent hỏi lại nhiều
- *Xử lý:* *"Brief tốt = agent không cần hỏi lại. Kiểm tra: nếu một người mới không biết gì về tác vụ này đọc brief của bạn, họ có đủ thông tin để bắt đầu không? Nếu không — thiếu phần nào? Thêm vào đó."* Gợi ý cụ thể: thêm tên file, định dạng output, ví dụ mong muốn.

**Kịch bản 4: Học viên không nghĩ ra tác vụ phù hợp cho agent**
- *Dấu hiệu:* "Tôi không có tác vụ nào lặp lại" hoặc "Công việc tôi không phù hợp với AI"
- *Xử lý:* *"Hãy thử: trong 2 tuần vừa rồi, bạn soạn email nào nhiều hơn 1 lần? Bạn tạo báo cáo hoặc tóm tắt gì không? Bạn phải đọc và trích xuất thông tin từ tài liệu nào không? Hầu hết công việc văn phòng đều có ít nhất 3 tác vụ lặp lại mỗi tuần."*

---

## Technical Notes — Zoom

- **Hai tab song song:** Khi demo so sánh, share màn hình cả hai tab — dùng split screen hoặc chuyển tab nhanh
- **Bấm giờ thực tế:** Dùng đồng hồ Zoom hoặc timer trên điện thoại — show thời gian thực của từng cách
- **Backup video Cowork:** Quay sẵn 3 phút demo brief đầy đủ trước buổi học, lưu trong folder dễ tìm
- **Học viên cài Cowork trước:** Gửi link và hướng dẫn đăng nhập Cowork 1 ngày trước buổi học — tiết kiệm 10 phút setup
- **Trợ giảng:** Hỗ trợ học viên lỗi đăng nhập Cowork trong chat — facilitator không nên dừng demo để xử lý kỹ thuật cá nhân
