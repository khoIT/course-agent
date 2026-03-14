# Lesson Plan v2: AI Skills & Agent Design for Business Users

## TL;DR (50 tokens)
5 sessions x 2h Zoom. DESIGN SHIFT: prompt kỹ thuật woven into agent design — không dạy prompt standalone. S1 AI+Agent đầu tiên. S2 Delegation Mastery. S3 Context Engineering+Claude Code. S4 Skill Design+MCP. S5 Capstone. Contract-agent throughline. Tool progression: Claude.ai → Cowork → Code.

## Status: Complete (v2 — Agent Design Architecture)

---

## Session Pacing Template (All Sessions)

```
 0:00–0:35  Block A — Concept + Demo (polls every 8-10 min, theory woven into exercises)
 0:35–0:40  Break 1 (stretch, camera off OK)
 0:40–1:15  Block B — Hands-on Practice (guided → independent)
 1:15–1:20  Break 2 (energy checkpoint)
 1:20–1:50  Block C — Apply to Your Work + Q&A
 1:50–2:00  Block D — Homework Preview + Wrap
```

**Nguyên tắc thiết kế toàn khóa:**
- Đây KHÔNG phải khóa "prompt engineering". Prompt techniques (RTF, few-shot, CoT, 6-component) được dệt vào tự nhiên như phần của agent delegation và skill design — không bao giờ dạy như chủ đề riêng.
- Học viên nghĩ "tôi đang thiết kế AI workflow" chứ không phải "tôi đang học viết prompt".
- Không có khối lecture thuần túy. Mỗi khái niệm 3-4 phút, ngay sau đó bài tập hoặc poll.
- Contract-agent là ví dụ xuyên suốt: đơn hàng → hợp đồng.
- Tool progression: Claude.ai (S1) → Claude Cowork (S2) → Claude Code (S3-S5).

**Contingency timing (nếu setup overrun):**
- Nếu setup Block B mất >10 phút: cắt 1 bài tập (giữ Foundation, bỏ Challenge tier), dời phần còn lại sang homework.
- Nếu >40% lớp gặp lỗi tool: chuyển sang follow-along mode (xem demo facilitator, viết trên text editor), không dừng nội dung.
- Nếu demo live fail: có video backup 2-3 phút (quay trước) + screenshot kết quả trên slide.

---

## Session 1: AI Nghĩ Như Thế Nào + Agent Đầu Tiên

**Terminal Objective:** Hiểu cách AI hoạt động, chạy agent đầu tiên trên Cowork, viết task brief hiệu quả sử dụng framework RTF + 6 thành phần (emerge naturally qua thực hành).

**Ví dụ chủ đạo:** Contract-agent — đọc đơn đặt hàng Google Vietnam → tạo nội dung cho hợp đồng dịch vụ.

**Mental model:** "Brilliant new employee" (Anthropic official) — AI giỏi nhưng mới vào công ty, thiếu context về cách bạn làm việc.

### Block A — Concept + Demo (0:00–0:35)

*Nguyên tắc: Mở bằng impact, không phải giới thiệu. Demo trước, giải thích sau. "Brilliant new employee" frame xuyên suốt.*

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:02 | **Mở đầu bằng live demo — KHÔNG giới thiệu.** Facilitator mở Claude Cowork, paste đơn hàng Google Vietnam (tên công ty, địa chỉ, MST, dịch vụ, giá, VAT, thời hạn). Gõ brief: "Đọc thông tin đơn hàng này và tạo bản nháp hợp đồng dịch vụ hoàn chỉnh." Agent chạy 20-30 giây. Mở output. *Không giải thích. Để lớp phản ứng.* | Live demo | Claude Cowork, đơn hàng mẫu (clipboard sẵn) |
| 0:02–0:04 | **Poll #1:** "Phản ứng đầu tiên của bạn?" (Ấn tượng / Không chắc chính xác / Muốn thử ngay / Đã biết rồi) | Poll | Zoom poll |
| 0:04–0:10 | **Giải thích ngược:** "AI vừa làm gì? Nó KHÔNG hiểu hợp đồng. Nó dự đoán từ tiếp theo." 3 khái niệm nền tảng: (1) **Máy dự đoán từ** — autocomplete điện thoại x tỷ lần, đã "đọc" hàng nghìn hợp đồng. (2) **Cửa sổ ngữ cảnh** — "AI nhớ cuộc trò chuyện, nhưng có giới hạn — như bộ nhớ RAM." (3) **Hallucination** — AI tự tin kể cả khi sai, vì nó dự đoán từ hợp lý, không kiểm tra sự thật. Phép so sánh Anthropic: *"Hãy nghĩ Claude là nhân viên mới xuất sắc — rất giỏi nhưng chưa biết quy trình công ty bạn."* | Mini-lecture + demo | Slide 1-3 |
| 0:10–0:12 | **Chat activity:** "Gõ vào Zoom chat: nếu AI là nhân viên mới, bạn sẽ giao việc gì đầu tiên?" Facilitator đọc 3 câu thú vị. | Chat | Zoom chat |
| 0:12–0:16 | **Hallucination demo — chứng minh ngay.** Hỏi Claude: "Trong đơn hàng vừa rồi, tổng giá trị hợp đồng sau thuế, phí shipping, và tiền phạt trễ hạn là bao nhiêu?" (Đơn hàng KHÔNG có phí shipping và phạt trễ hạn — AI sẽ bịa hoặc tính sai.) Phân tích: "Đây là lý do bạn cần biết chủ đề đủ để đánh giá AI." **Chiến lược tam giác hóa nguồn:** kiểm tra 2+ nguồn độc lập trước khi tin kết quả AI. | Demo + Discussion | Claude.ai |
| 0:16–0:18 | **Poll #2:** "Bạn sẽ kiểm tra kết quả AI trước khi dùng không?" (Luôn luôn / Thỉnh thoảng / Hiếm khi / Chưa nghĩ đến) | Poll | Zoom poll |
| 0:18–0:24 | **"Để brief nhân viên mới tốt, bạn cần gì?"** Facilitator hỏi: "Nếu bạn giao việc cho nhân viên mới: tạo hợp đồng từ đơn hàng — bạn sẽ nói gì?" Thu 3-4 ý kiến qua chat. Tổng hợp lên 3 yếu tố: Vai trò (bạn là ai?) + Tác vụ (làm gì cụ thể?) + Định dạng (kết quả trông thế nào?). "Đây chính xác là cách brief AI — RTF." Demo so sánh: prompt đơn giản (phút 0:00) vs. prompt RTF. Kết quả RTF cụ thể hơn rõ rệt. *RTF emerge từ logic delegation, không phải "mẹo prompt".* | Demo + Discussion | Claude.ai/Cowork, Slide 4-5 |
| 0:24–0:26 | **Poll #3:** "Kết quả prompt RTF có tốt hơn không?" (Tốt hơn nhiều / Tốt hơn chút / Giống nhau / Tệ hơn) | Poll | Zoom poll |
| 0:26–0:33 | **Mở rộng brief — thêm context cho nhân viên mới.** "Nhân viên mới sẽ làm tốt hơn nếu biết thêm: viết cho ai đọc (Giọng điệu), không được làm gì (Ràng buộc), ai sẽ dùng kết quả (Đối tượng)." → 6 thành phần tự nhiên = bộ công cụ brief đầy đủ. Demo ngay: prompt 6 thành phần cho tác vụ hợp đồng. Chạy, đọc kết quả. "6 thành phần = cách brief rõ ràng nhất. Không cần dùng hết mỗi lần — biết khi nào dùng cái nào." *Frame: "Bạn đang học cách giao việc cho AI, không phải học kỹ thuật prompt."* | Demo | Claude.ai/Cowork, Slide 6-8 |
| 0:33–0:35 | **Tóm tắt Block A.** "3 thứ: AI dự đoán từ (brilliant nhưng new) + luôn kiểm chứng + brief rõ = kết quả tốt hơn. Giờ bạn tự làm trên Cowork." | Wrap | — |

**Facilitator Notes — Block A:**
- Demo mở đầu (0:00) dùng Cowork, KHÔNG phải Claude.ai — để học viên thấy agent output ngay từ đầu, không phải chat. Chuẩn bị đơn hàng clipboard sẵn.
- Đơn hàng mẫu: Google Vietnam — Công ty TNHH Google Vietnam, 9 Đinh Tiên Hoàng TP.HCM, MST 028476564, Ông Khá Văn Bảnh – GĐ, Dịch vụ: Làm mobile 10tr + Design nhà 5tr, VAT 8%, 10 ngày.
- "Brilliant new employee" mental model PHẢI được giới thiệu ở phút 4-10 và dùng xuyên suốt khóa học. Mọi kỹ thuật prompt đều frame lại thành "cách brief nhân viên mới rõ hơn".
- Poll #1 đo baseline. Nếu >50% "Đã biết rồi" → tăng pace, bỏ bớt giải thích cơ bản.
- Khi demo hallucination: dùng ví dụ kinh doanh an toàn (phí shipping bịa, phạt trễ hạn bịa). KHÔNG dùng ví dụ chính trị/tôn giáo.
- FAQ: "AI có lấy dữ liệu cá nhân?" → "Claude không lưu để huấn luyện. Nhưng không nhập thông tin mật công ty."
- FAQ: "Có cần đủ 6 thành phần?" → "Không. RTF là nền. Thêm dần khi brief cần rõ hơn."

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:45 | **Setup Claude Cowork.** Chia sẻ màn hình, hướng dẫn đăng nhập từng bước. Tạo project mới. Giải quyết lỗi qua chat. Paste đơn hàng mẫu vào project. | Setup | Claude Cowork, slide hướng dẫn |
| 0:45–0:58 | **Bài tập 1: Brief cho contract agent trên Cowork.** Dùng đơn hàng Google Vietnam (handout có sẵn). **Nhiệm vụ A (5 phút):** Viết brief RTF gửi cho Cowork — vai trò: chuyên gia hợp đồng, tác vụ: trích xuất 5 điểm chính cho hợp đồng, định dạng: bullet points. Gửi brief, đọc output. **Nhiệm vụ B (6 phút):** Mở rộng brief thêm 3 thành phần (giọng điệu: chuyên nghiệp, ràng buộc: theo luật VN < 200 từ, đối tượng: GĐ sẽ ký). Gửi lại. So sánh A vs B. **Nhiệm vụ C — nếu xong sớm (2 phút):** Thêm ví dụ mẫu output (few-shot) vào brief — "Đây là mẫu cách trình bày 1 điều khoản trong hợp đồng: [ví dụ]." Chạy lại, so sánh. *Few-shot emerge tự nhiên: "cho nhân viên mới xem mẫu trước khi làm."* | Individual practice | Cowork, handout đơn hàng + template brief |
| 0:58–1:02 | **Chat share:** "Paste 1 dòng kết quả AI tốt nhất của bạn vào Zoom chat." Facilitator chọn 3 ví dụ, bình luận: brief nào dẫn đến kết quả tốt, vì sao. | Chat activity | Zoom chat |
| 1:02–1:10 | **Bài tập 2: Brief nâng cao — thêm suy luận.** Dùng brief Nhiệm vụ B. Thêm dòng: "Trước khi tạo hợp đồng, hãy liệt kê 3 rủi ro pháp lý tiềm ẩn từ thông tin đơn hàng này và giải thích cách xử lý." Gửi cho Cowork. So sánh: kết quả có sâu hơn không? *Chain-of-thought emerge: "yêu cầu nhân viên suy nghĩ trước khi hành động."* | Individual practice | Cowork |
| 1:10–1:15 | **Poll #4:** "Brief nâng cao (có yêu cầu suy luận) có cải thiện kết quả?" (Có, rõ rệt / Có, chút / Không đổi / Khó so sánh) → Thảo luận nhanh: khi nào nên yêu cầu AI suy nghĩ trước. | Poll + Discussion | Zoom poll |

**Facilitator Notes — Block B:**
- Học viên dùng Cowork (không phải Claude.ai) — agent mode ngay từ đầu. Nếu chưa có account Cowork, cho dùng Claude.ai tạm.
- Bài tập 1 có 3 nhiệm vụ tiered: Foundation (A) → Extension (B) → Challenge (C/few-shot). Cho phép pace khác nhau.
- Khi few-shot emerge (Nhiệm vụ C): frame là "cho nhân viên mới xem mẫu" — KHÔNG gọi là "kỹ thuật few-shot prompting".
- Khi chain-of-thought emerge (Bài tập 2): frame là "yêu cầu suy nghĩ trước khi hành động" — KHÔNG gọi là "chain-of-thought prompting".
- 3 brief mẫu dự phòng nếu học viên bí:
  - Manager: "Vai trò: trợ lý GĐ. Tác vụ: soạn báo cáo tuần từ 5 email cập nhật. Định dạng: 5 bullets, <200 từ."
  - Marketer: "Vai trò: chuyên gia content. Tác vụ: viết 3 tiêu đề quảng cáo cho sản phẩm X. Định dạng: mỗi tiêu đề <10 từ, kèm giải thích 1 câu."
  - Teacher: "Vai trò: giáo viên Toán lớp 9. Tác vụ: ra 5 bài tập phương trình bậc hai. Định dạng: mức độ tăng dần, có đáp án."

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:35 | **Bài tập 3: Tác vụ công việc thực tế — Tiered.** Chuyển từ hợp đồng sang tác vụ cá nhân. Chọn 1 việc phải làm trong tuần này. **Foundation:** Viết brief RTF, gửi Cowork, đánh giá output. **Extension:** Brief 6 thành phần + 1 ví dụ mẫu. **Challenge:** Brief 6 thành phần + yêu cầu suy luận + 2 ví dụ mẫu đa dạng. Đánh giá kết quả theo 3 tiêu chí: (1) Đúng nội dung? (2) Đúng định dạng? (3) Dùng được ngay? | Individual practice (tiered) | Cowork |
| 1:35–1:45 | **Showcase:** 3 người tình nguyện chia sẻ màn hình — trình bày brief + kết quả. Lớp phản hồi 1 câu: "Brief này thiếu gì để nhân viên mới hiểu rõ hơn?" Facilitator bình luận. | Presentation + Feedback | Screen share |
| 1:45–1:50 | **Q&A mở.** Thu câu hỏi qua chat, trả lời 2-3 câu. Ưu tiên: "Brief dài bao nhiêu là đủ? Khi nào cần ví dụ mẫu? AI có an toàn?" | Q&A | Zoom chat |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (20-25 phút):** Tạo "Brief Library" cá nhân: 5 brief cho 5 tác vụ thường xuyên. Mỗi brief dùng ít nhất RTF + 1 thành phần thêm (giọng điệu HOẶC ràng buộc HOẶC ví dụ mẫu). 1 trong 5 brief phải liên quan xử lý tài liệu (đọc báo cáo, phân tích email, v.v.). Chạy mỗi brief trên Cowork, ghi kết quả. Mang đến Session 2. | Homework brief | Slide cuối, template |
| 1:55–2:00 | **Tóm tắt 3 takeaway:** (1) AI = nhân viên mới xuất sắc — brief rõ = kết quả tốt. (2) Luôn kiểm chứng — AI tự tin kể cả khi sai. (3) Brief có cấu trúc (RTF+) tốt hơn gấp nhiều lần brief chung chung. **Preview Session 2:** "Hôm nay bạn giao 1 brief mỗi lần. Buổi tới: bạn sẽ thiết kế workflow — AI tự lập kế hoạch, phân chia, thực hiện nhiều bước — như giao dự án cho team, không phải giao việc lẻ." | Wrap | Slide tổng kết |

**Content Snippet — Script mở đầu Session 1:**

> "Xin chào! Không slide giới thiệu. Tôi muốn cho bạn thấy 1 thứ ngay."
>
> [Mở Cowork, paste đơn hàng Google Vietnam]
>
> "Đây là thông tin đơn hàng từ khách hàng. Tôi sẽ nhờ AI tạo hợp đồng."
>
> [Gõ brief ngắn, gửi, đợi 20-30 giây]
>
> "Xong. Đây là bản nháp hợp đồng." [Mở output, đọc 2-3 điều khoản]
>
> "30 giây. Thường thì việc này mất 30 phút. Trong 2 giờ tới, bạn sẽ biết cách làm điều này — và quan trọng hơn: biết khi nào KHÔNG nên tin kết quả. Tên tôi là [tên], và cam kết: kết thúc buổi hôm nay, bạn sẽ hoàn thành ít nhất 1 việc THẬT bằng AI. Không xem demo — việc thật của bạn."

---

## Session 2: Ủy Quyền Cho Agent (Agent Delegation Mastery)

**Terminal Objective:** Phân biệt chat vs agent qua demo so sánh, viết task brief 4 phần đủ rõ để Cowork agent thực thi không cần hỏi thêm, phân loại 5 tác vụ thực tế thành Chat/Agent/Không AI.

**Ví dụ chủ đạo:** Cùng 1 tác vụ hợp đồng — chat (5 tin nhắn qua lại) vs. agent (1 brief, tự chạy). Sub-agent orchestration demo (50 meeting transcripts).

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | **Retrieval warm-up:** "KHÔNG mở ghi chú. Gõ vào chat: 3 thứ bạn nhớ từ buổi trước." (Retrieval practice — kéo ra từ trí nhớ, không đọc lại.) Facilitator đọc 3 câu, bổ sung nếu thiếu. "Ai đã tạo Brief Library 5 brief?" → Reactions. | Warm-up + Retrieval | Zoom chat |
| 0:05–0:07 | **Poll #1:** "Khi dùng AI, bạn thường gửi bao nhiêu tin nhắn cho 1 tác vụ?" (1 / 2-5 / 6-10 / >10) | Poll | Zoom poll |
| 0:07–0:20 | **Demo so sánh — cùng tác vụ, 2 cách hoàn toàn khác nhau.** Tác vụ: tạo hợp đồng từ đơn hàng Google Vietnam. **Cách 1 — Chat (live, ~5 phút):** Facilitator demo trên Claude.ai: gửi đơn hàng → AI hỏi lại → trả lời → yêu cầu format → sửa VAT → copy kết quả vào Word → format lại. 5 tin nhắn, ~8 phút thực tế. **Cách 2 — Agent brief (live, ~2 phút):** Đọc task brief chuẩn bị sẵn (4 phần: mục tiêu + bối cảnh + các bước + tiêu chí thành công). Gửi 1 lần cho Cowork. Agent tự lập kế hoạch → thực thi → tạo file output. *So sánh: thời gian, chất lượng, mental load.* **Framing:** "Chat = nhắn tin từng dòng cho nhân viên. Agent = giao brief dự án và để họ tự quản lý." | Live demo | Claude.ai + Cowork, brief mẫu trên slide |
| 0:20–0:22 | **Poll #2:** "Bạn muốn dùng cách nào?" (Chat từng bước / Agent tự động / Tùy tình huống) | Poll | Zoom poll |
| 0:22–0:28 | **3-Question Delegation Framework** (Cowork official pattern): Trước mỗi task, hỏi 3 câu: **(1) "Done" trông như thế nào?** — mô tả kết quả cuối cùng rõ ràng. **(2) Claude không thể suy ra điều gì?** — cung cấp context thiếu (phong cách, quy chuẩn, số liệu). **(3) Ràng buộc gì?** — giới hạn thời gian, format, phạm vi. Demo: áp dụng 3 câu vào brief contract-agent. **Decision matrix:** Khi nào Chat (sáng tạo, 1 lần, khám phá) vs. Agent (lặp lại, nhiều bước, cần file) vs. Không phù hợp AI (quyết định nhạy cảm, dữ liệu mật). | Lecture + Demo | Slide 1-6, ma trận quyết định |
| 0:28–0:31 | **Task brief 4 phần — cấu trúc brief chuyên nghiệp.** (1) Mục tiêu: AI tạo ra gì? (2) Bối cảnh: thông tin AI cần biết (file, quy tắc, phong cách). (3) Các bước: ít nhất 3 bước theo thứ tự. (4) Tiêu chí thành công: "Kết quả đạt chuẩn trông thế nào?" Demo: brief mẫu contract-agent 4 phần trên slide. *Frame: "6 thành phần prompt từ S1 → mở rộng thành 4-part brief cho agent. Cùng tư duy, quy mô lớn hơn."* | Lecture | Slide 7-8 |
| 0:31–0:33 | **Sub-agent orchestration — sneak peek.** "Nếu bạn có 50 bản ghi cuộc họp cần tóm tắt — gửi 1 brief, Cowork tự chia 50 file cho nhiều sub-agent chạy song song, tổng hợp lại. 4 phút thay vì 30 phút." Demo nhanh (video hoặc screenshot nếu không live). | Demo/Video | Video demo hoặc slide minh họa |
| 0:33–0:35 | **Chat activity:** "Tác vụ nào trong công việc bạn lặp lại mỗi tuần, mất >30 phút, và có nhiều bước?" → Zoom chat. Facilitator chọn 2-3, áp dụng ma trận. | Chat | Zoom chat |

**Facilitator Notes — Block A:**
- Demo so sánh Chat vs Agent là khoảnh khắc chuyển giao tâm lý quan trọng nhất khóa. Chuẩn bị video backup nếu Cowork gặp lỗi live.
- Cowork folder architecture giới thiệu nhẹ: "thoughts/ideas/todo/outputs/done/references/CLAUDE.md — như tổ chức folder dự án." Không đi sâu, chỉ show.
- Nhiều học viên sẽ lo "mất kiểm soát" → nhấn mạnh: "Bạn duyệt kế hoạch trước khi agent thực thi. Bạn vẫn là sếp."
- Brief mẫu 4 phần chuẩn bị sẵn trên slide, show song song với demo.
- 3-Question Framework cần lặp lại nhiều lần — đây là framework chính cho agent delegation.

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:48 | **Bài tập 1: Viết Task Brief đầu tiên trên Cowork.** Dùng kịch bản hợp đồng HOẶC tác vụ từ Brief Library homework. Áp dụng 3-Question Framework: (1) Done = gì? (2) Context thiếu gì? (3) Ràng buộc gì? → Viết brief 4 phần. Gửi cho Cowork. Đọc output. | Individual practice | Cowork, template brief 4 phần (handout) |
| 0:48–0:52 | **Chat share:** "Đánh giá kết quả agent 1-5 sao + 1 câu nhận xét ngắn." Facilitator chọn 3 (1 cao điểm, 1 thấp điểm, 1 trung bình), hỏi brief khác nhau thế nào. | Chat activity | Zoom chat |
| 0:52–0:57 | **Poll #3:** "Phần nào của task brief khó viết nhất?" (Mục tiêu / Bối cảnh / Các bước / Tiêu chí thành công) → Thảo luận: tại sao "Tiêu chí thành công" thường khó nhất — vì chúng ta ít khi define done cho chính mình. | Poll + Discussion | Zoom poll |
| 0:57–1:07 | **Bài tập 2: Refine brief — Iteration loop.** Đọc output từ Bài tập 1. Xác định 2 điểm chưa đạt tiêu chí. Sửa brief: thêm bối cảnh thiếu, cụ thể hóa bước, thắt chặt tiêu chí. Gửi lại. So sánh before/after. *Iteration emerge tự nhiên: "Nhân viên mới lần đầu chưa hoàn hảo — bạn phản hồi, họ cải thiện."* | Individual practice | Cowork |
| 1:07–1:10 | **Structured output demo nhanh.** Facilitator show: thêm vào brief "Output phải có bảng so sánh 3 cột: Điều khoản | Nội dung | Lý do." → Agent tạo bảng đúng format. "Khi brief rõ format, AI tuân theo 95% trường hợp." *Structured output emerge: "nói rõ bạn muốn nhận kết quả kiểu gì."* | Demo | Cowork |
| 1:10–1:15 | **Poll #4:** "Brief v2 (sau iteration) có tốt hơn brief v1 không?" (Tốt hơn nhiều / Tốt hơn chút / Giống / Tệ hơn) → "Iteration là kỹ năng quan trọng nhất — mọi AI workflow đều cải thiện qua refine." | Poll | Zoom poll |

**Facilitator Notes — Block B:**
- Bài tập 2 (iteration) là bài tập quan trọng nhất Session 2 — xây muscle memory cho refine loop.
- Nếu học viên không biết cải thiện gì: gợi ý "Thêm 1 ví dụ output mong muốn vào brief" hoặc "Cụ thể hóa tiêu chí: thay 'viết tốt' thành 'dưới 500 từ, có heading cho mỗi điều khoản'."
- Structured output demo: 3 phút, facilitator làm live, không phải bài tập riêng.

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:37 | **Bài tập 3: Workflow Mapping.** **Bước 1 (3 phút):** Liệt kê 5 tác vụ lặp lại hàng tuần. **Bước 2 (3 phút):** Phân loại mỗi tác vụ: Chat phù hợp / Agent phù hợp / Không phù hợp AI (dùng decision matrix từ Block A). **Bước 3 (5 phút):** Chọn 1 tác vụ "Agent phù hợp" → áp dụng 3-Question Framework → viết brief 4 phần hoàn chỉnh. **Bước 4 (4 phút):** Gửi brief cho Cowork, đánh giá kết quả. **Bước 5 (2 phút):** Ghi lại: trước đây mất bao phút thủ công? Agent mất bao phút? | Individual | Worksheet workflow mapping |
| 1:37–1:45 | **Showcase:** 3 người trình bày workflow mapping + brief. Lớp góp ý theo 1 câu hỏi: "Brief này đủ rõ để agent thực thi không cần hỏi lại không?" → Yes/No + 1 cải thiện. | Presentation + Feedback | Screen share |
| 1:45–1:50 | **Q&A.** Ưu tiên: "Agent có an toàn không? Chi phí Cowork? Agent có giới hạn gì? Khi nào KHÔNG nên dùng agent?" | Q&A | — |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (25 phút):** Chạy 2 tác vụ thực tế trên Cowork (chọn từ workflow mapping). Cho mỗi tác vụ, ghi: (1) Brief gửi. (2) Kết quả nhận. (3) Iteration: sửa brief 1 lần, so sánh v1 vs v2. (4) Thời gian tiết kiệm so với làm thủ công. Mang đến Session 3. | Homework | Slide cuối |
| 1:55–2:00 | **Tóm tắt:** "Agent = ủy quyền thông minh. 3-Question Framework trước mỗi task. Brief 4 phần = brief chuyên nghiệp." **Preview Session 3:** "Buổi tới: bạn sẽ hiểu TẠI SAO contract-agent hoạt động tốt — context engineering, cách thông tin chảy qua AI — và cài Claude Code để chạy agent THỰC SỰ trên máy mình." | Wrap | — |

**Content Snippet — Script chuyển Session 1 → 2:**

> "Hôm nay bạn đã brief AI như brief nhân viên mới. Nhưng thử nghĩ: tạo hợp đồng hoàn chỉnh cần bao nhiêu bước? Đọc đơn hàng, trích xuất thông tin, tính VAT, định dạng theo mẫu, kiểm tra lỗi... Nếu dùng chat, bạn phải 5-6 tin nhắn hướng dẫn từng bước.
>
> Buổi tới: cùng tác vụ đó — 1 brief, agent tự lập kế hoạch, tự thực hiện, file hợp đồng ra thẳng. Đó là sự khác biệt giữa nhắn tin cho nhân viên vs. giao brief dự án."

---

## Session 3: Context Engineering + Claude Code

**Terminal Objective:** Cài Claude Code thành công, chạy contract-agent tạo file hợp đồng output, viết CLAUDE.md 4 phần (WHY-WHAT-HOW + ví dụ) cho 1 tác vụ cá nhân và chứng minh output có/không có CLAUDE.md khác nhau.

**Cầu nối từ S2:** "Cowork agent mạnh — nhưng mỗi lần phải brief lại. Nếu bạn brief 1 lần và AI nhớ mãi? Đó là CLAUDE.md. Session này: từ brief 1 việc → thiết kế sổ tay cho AI làm MỌI việc."

**Ví dụ chủ đạo:** Dissect contract-agent's CLAUDE.md as case study → chạy agent thực trên máy → phác thảo CLAUDE.md cho workflow cá nhân.

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | **Retrieval warm-up:** "Không mở ghi chú. Gõ chat: 3-Question Framework của buổi trước gồm những câu gì?" (Retrieval practice.) 1 người chia sẻ brief + kết quả Cowork từ homework. | Warm-up + Retrieval | Zoom chat |
| 0:05–0:07 | **Poll #1:** "Bạn đã cài Claude Code chưa?" (Cài rồi, test ok / Cài rồi, chưa test / Chưa cài / Không biết cách) → Facilitator điều chỉnh pace Block B. | Poll | Zoom poll |
| 0:07–0:17 | **Context Engineering — "thiết kế cách thông tin chảy qua AI."** Phép so sánh mở đầu: "Bạn brief nhân viên mới 1 tác vụ → xong. Nhưng nếu bạn muốn họ làm TỐT MỌI tác vụ, bạn cần gì? SỔ TAY NHÂN VIÊN. Context engineering = thiết kế sổ tay đó." 4 chiến lược: **(1) Write** — lưu thông tin quan trọng vào file (CLAUDE.md, memory files). **(2) Select** — chọn đúng thông tin cần cho mỗi task. **(3) Compress** — tóm tắt, không nhồi nhét. **(4) Isolate** — chia task phức tạp cho nhiều agent. **Smart Zone concept:** "Focused 300 tokens > unfocused 113K tokens." Demo: Claude Code chạy KHÔNG có CLAUDE.md → kết quả generic. Chạy CÓ CLAUDE.md → kết quả đúng phong cách. "CLAUDE.md nằm trong Smart Zone — AI đọc đầu tiên, nhớ suốt phiên." | Lecture + Demo | Slide 1-6, Claude Code terminal |
| 0:17–0:19 | **Chat activity:** "Nếu viết 'sổ tay nhân viên' cho AI trong công việc của bạn, 3 quy tắc quan trọng nhất là gì?" → Chat. Facilitator tổng hợp. | Chat | Zoom chat |
| 0:19–0:28 | **CLAUDE.md anatomy — dissect contract-agent case study.** Cùng lớp mở CLAUDE.md contract-agent (show trên màn hình, phóng to font). Nhận diện cấu trúc WHY-WHAT-HOW (HumanLayer): **WHY** — mục đích: tại sao agent này tồn tại (tạo hợp đồng từ đơn hàng). **WHAT** — phạm vi: làm gì (đọc order, fill template), KHÔNG làm gì (không ký, không sửa giá). **HOW** — workflow: bước 1 đọc file, bước 2 trích xuất, bước 3 fill template, bước 4 kiểm tra. "Đây chính xác là những gì bạn sẽ tự viết." **3 anti-patterns** (HumanLayer): đừng auto-generate, đừng biến AI thành linter, giữ <300 dòng. | Discussion + Lecture | CLAUDE.md contract-agent (trên màn hình), Slide 7-9 |
| 0:28–0:30 | **Poll #2:** "Viết CLAUDE.md cho công việc bạn, phần nào quan trọng nhất?" (WHY / WHAT / HOW / Cả 3 như nhau) | Poll | Zoom poll |
| 0:30–0:35 | **Demo: Chạy contract-agent thực trên Claude Code.** Facilitator mở terminal, cd vào thư mục contract-agent. Chạy Claude Code, cung cấp file đơn hàng (`prompt.md`). Claude Code đọc CLAUDE.md → đọc template → tạo file hợp đồng output. Mở file output cho lớp thấy. "Đây là điều bạn sẽ tự làm trong Block B." | Live demo | Terminal, Claude Code, contract-agent files |

**Facilitator Notes — Block A:**
- Context Engineering là bước nhảy tư duy lớn nhất: từ "viết brief cho 1 task" → "thiết kế môi trường để AI làm tốt MỌI task". Dùng nhiều phép so sánh.
- Poll #1 quyết định pace Block B: nếu >40% chưa cài → dành 15 phút setup, rút Bài tập 2.
- "Focused 300 tokens > 113K unfocused" — giải thích đơn giản: "Nếu bạn đưa nhân viên mới 200 trang sổ tay vs. 1 trang checklist rõ ràng — cái nào họ theo tốt hơn?"
- CLAUDE.md contract-agent cần được show trên màn hình font lớn — học viên Zoom cần đọc được.
- Few-shot woven in: "Phần ví dụ output trong CLAUDE.md = cho nhân viên mới xem mẫu trước khi làm — chính xác kỹ thuật few-shot, nhưng bạn đã biết cách này từ Session 1."
- CoT woven in: "Phần workflow trong CLAUDE.md = yêu cầu nhân viên suy nghĩ theo trình tự — chain-of-thought nhưng ở cấp độ hệ thống."

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:53 | **Setup Claude Code + chạy contract-agent.** Hướng dẫn từng bước: mở terminal → `claude` → xác nhận hoạt động → download thư mục contract-agent (facilitator share link) → cd vào folder → chạy 1 lệnh đơn giản test ("Hỏi Claude Code: Bạn là ai?"). Giải quyết lỗi qua chat + TA hỗ trợ 1-1. | Guided setup | Terminal, step-by-step guide (slide), contract-agent zip |
| 0:53–1:05 | **Bài tập 1: Chạy contract-agent.** Mở terminal trong thư mục contract-agent. Chạy với file đơn hàng mẫu. Đợi output (1-2 phút). Mở file hợp đồng kết quả. Đánh giá: (1) Thông tin chính xác? (2) Format đúng template? (3) Dùng được ngay? Nếu xong sớm: đọc CLAUDE.md, nhận diện phần nào dẫn đến output tốt/chưa tốt. | Individual practice | Terminal, contract-agent files |
| 1:05–1:08 | **Poll #3:** "Kết quả contract-agent?" (Dùng ngay được / Sửa nhỏ / Sửa nhiều / Lỗi không chạy) → Facilitator ưu tiên hỗ trợ nhóm "Lỗi". | Poll | Zoom poll |
| 1:08–1:15 | **Bài tập 2: Đổi đơn hàng, chạy lại.** Sửa file đơn hàng: thêm dịch vụ mới (VD: "Tư vấn SEO: 8 triệu"), đổi tên khách hàng. Chạy lại. Kiểm tra output cập nhật đúng không. "Contract-agent xử lý input khác nhau đều giống nhau — vì CLAUDE.md hướng dẫn QUY TRÌNH, không phải từng case." | Individual practice | Terminal, file đơn hàng sửa |

**Facilitator Notes — Block B:**
- Setup Claude Code là rủi ro lớn nhất — gửi hướng dẫn cài đặt email trước 3 ngày. Có TA sẵn sàng hỗ trợ.
- Nếu học viên không cài được Code → cho xem facilitator demo, vẫn làm bài tập viết CLAUDE.md trên Google Docs.
- Contract-agent folder cần zip sẵn, share qua link download nhanh (Google Drive/OneDrive). Test link trước buổi.

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:37 | **Bài tập 3: Phác thảo CLAUDE.md cá nhân.** Dùng template WHY-WHAT-HOW (4 phần). **Bước 1 (3 phút):** Chọn 1 tác vụ lặp lại (từ workflow mapping S2). Viết WHY: "Agent này tồn tại để ___." **Bước 2 (4 phút):** Viết WHAT: liệt kê 3 việc AI làm, 2 việc KHÔNG làm. **Bước 3 (5 phút):** Viết HOW: 4-5 bước workflow theo thứ tự. **Bước 4 (3 phút):** Thêm 1 ví dụ output mong muốn (few-shot). **Bước 5 (2 phút):** Lưu thành CLAUDE.md. Test với Claude Code (hoặc ghi trên docs nếu chưa cài Code). | Individual | Template CLAUDE.md (handout), Claude Code |
| 1:37–1:45 | **Showcase:** 2-3 người chia sẻ bản nháp CLAUDE.md. Lớp góp ý: "Workflow này đủ rõ để AI tự làm chưa? Thiếu context gì?" | Presentation | Screen share |
| 1:45–1:50 | **Q&A.** Ưu tiên: "Làm sao AI đọc file máy? Hỗ trợ file gì? Bảo mật khi AI đọc file cá nhân?" | Q&A | — |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (25 phút):** (1) Hoàn thiện CLAUDE.md (WHY-WHAT-HOW đầy đủ, thêm ví dụ output). (2) Test với Claude Code: chạy tác vụ CÓ CLAUDE.md vs. KHÔNG CÓ, ghi 3 khác biệt. (3) Bắt đầu liệt kê input → output → các bước cho 1 quy trình sẽ trở thành SKILL.md (Session 4). Mang đến Session 4. | Homework | Template CLAUDE.md, template SKILL.md sơ bộ |
| 1:55–2:00 | **Preview Session 4:** "Bạn vừa viết CLAUDE.md — sổ tay cho AI. Buổi tới: bạn sẽ nâng cấp thành SKILL.md — quy trình tái sử dụng như contract-agent. Và kết nối MCP tool để AI đọc file trực tiếp từ máy — không cần copy-paste." | Wrap | — |

**Content Snippet — Script giải thích Context Engineering:**

> "Buổi 1 bạn học brief AI cho 1 việc. Buổi 2 bạn brief cho 1 workflow. Bây giờ câu hỏi khác: làm sao để AI hiểu CÁCH BẠN LÀM VIỆC — không chỉ 1 task, mà mọi task?
>
> Đó là context engineering — thiết kế cách thông tin chảy qua AI.
>
> Nghĩ thế này: nhân viên mới vào công ty. Ngày đầu bạn brief 1 việc. Ngày thứ 2 brief việc khác. Nhưng sau 1 tháng, họ có sổ tay hướng dẫn — biết quy trình, biết phong cách, biết giới hạn. CLAUDE.md = sổ tay đó.
>
> Và đây là bí mật quan trọng: 300 từ hướng dẫn rõ ràng hiệu quả HƠN 113.000 từ lộn xộn. Sổ tay 1 trang checklist rõ ràng tốt hơn 200 trang policy không ai đọc."

---

## Session 4: Thiết Kế Skill Đầu Tiên (Skill Design)

**Terminal Objective:** Phân tích 1 workflow cá nhân thành ≥4 bước tự động hóa, viết SKILL.md 6 phần chạy được trên Claude Code, kết nối MCP filesystem tool đọc file từ máy không cần copy-paste.

**Ví dụ chủ đạo:** SKILL.md anatomy từ contract-agent. 3 ví dụ agentic workflow thực tế. MCP = "ổ cắm điện chuẩn quốc tế."

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | **Retrieval warm-up:** "Gõ chat: 4 chiến lược context engineering là gì?" (Write/Select/Compress/Isolate — retrieval practice). Homework debrief: "AI có khác khi có CLAUDE.md không?" → 2-3 người chia sẻ kết quả so sánh CÓ/KHÔNG CLAUDE.md. | Warm-up + Retrieval | Zoom chat |
| 0:05–0:07 | **Poll #1:** "CLAUDE.md của bạn có bao nhiêu phần?" (Chưa có / 1-2 / 3 WHY-WHAT-HOW / Đầy đủ + ví dụ) | Poll | Zoom poll |
| 0:07–0:18 | **SKILL.md anatomy — từ CLAUDE.md → Skill.** "CLAUDE.md = sổ tay chung. SKILL.md = quy trình chuyên biệt cho 1 loại tác vụ cụ thể." So sánh song song: contract-agent's CLAUDE.md (chung) vs. SKILL.md (cụ thể cho tạo hợp đồng). **6 phần SKILL.md:** (1) **Purpose** — skill này giải quyết vấn đề gì? (2) **Context** — AI cần biết gì trước khi bắt đầu? (3) **Input** — nhận dữ liệu gì, từ đâu? (file, text, clipboard). (4) **Steps** — các bước thực hiện theo thứ tự rõ ràng. (5) **Examples** — mẫu output mong muốn (few-shot ở cấp skill). (6) **Constraints** — không làm gì, giới hạn, tiêu chí chất lượng. Demo: chạy contract-agent SKILL.md trên Claude Code, show output. | Lecture + Demo | Slide 1-8, Claude Code, SKILL.md contract-agent |
| 0:18–0:25 | **Workflow Decomposition — 4 bước phân tích.** (1) Liệt kê TẤT CẢ bước quy trình hiện tại (kể cả thủ công). (2) Xác định input/output mỗi bước. (3) Đánh dấu bước AI làm được (xử lý văn bản, tổng hợp, format, so sánh). (4) Loại bỏ bước AI CHƯA làm được (phán quyết phức tạp, quyết định nhạy cảm, quan hệ con người). Demo nhanh: "soạn báo cáo phân tích đối thủ" — liệt kê 6 bước → 4 bước AI làm → 2 bước con người quyết. | Lecture + Demo | Slide 9-11 |
| 0:25–0:30 | **3 ví dụ agentic workflow thực tế** (ngoài contract-agent): **(1) HR Onboarding Welcome Guide:** job desc + handbook → personalized welcome guide. Input: PDF. Steps: trích xuất, cross-ref, drafts. Output: Welcome Guide + email. **(2) Expense Audit Agent:** receipts + policy → audit report + approvals. Input: expense reports. Steps: đọc policy, check từng expense, flag violations. Output: audit report. **(3) Content Writing Workflow:** brief + outline → polished draft + SEO. Input: content brief. Steps: review outline, suggest headlines, critique draft, research claims. Output: draft + gap analysis. "3 workflow khác nhau, cùng cấu trúc SKILL.md: input → steps → output + constraints." | Lecture | Slide 12-14, workflow diagrams |
| 0:30–0:33 | **3 lỗi thường gặp SKILL.md:** (1) Quá chung chung — thiếu ví dụ output cụ thể ("viết báo cáo" vs. "viết báo cáo có 3 phần: tóm tắt 2 câu, phân tích 5 bullets, đề xuất 3 hành động"). (2) Quá cứng nhắc — micro-manage từng câu chữ, AI không linh hoạt. (3) Thiếu tiêu chí chất lượng — AI không biết "đủ tốt" = gì. Cách khắc phục cho mỗi lỗi. | Lecture | Slide 15-16 |
| 0:33–0:35 | **MCP = "ổ cắm điện chuẩn quốc tế."** "Giống ổ cắm universal: laptop nào cũng cắm được. MCP: tool nào cũng kết nối được với AI." Demo nhanh: kết nối filesystem MCP → yêu cầu Claude Code đọc file đơn hàng `.md` trực tiếp từ máy, không copy-paste. | Demo | Claude Code, filesystem MCP |

**Facilitator Notes — Block A:**
- Session 4 chuyển từ "dùng AI" sang "thiết kế AI" — tâm lý empowerment. Nhấn mạnh: "Bạn đang trở thành người thiết kế AI workflow."
- 3 ví dụ workflow cần relevant với audience: HR → managers, Expense → finance/admin, Content → marketers/teachers. Đọc nhẹ để họ thấy mình.
- MCP demo chỉ 2 phút — đủ thấy value. Chi tiết kết nối trong Block B.
- Prompt knowledge woven: "SKILL.md Steps = chain-of-thought ở cấp hệ thống. Examples = few-shot ở cấp skill. Constraints = structured output rules. Bạn đã biết tất cả từ Session 1 — giờ áp dụng ở quy mô lớn hơn."

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:55 | **Bài tập 1: Viết SKILL.md cho workflow cá nhân.** Dùng tác vụ đã chọn từ homework S3. **Bước 1 (3 phút):** Workflow Decomposition — liệt kê tất cả bước hiện tại, đánh dấu bước AI làm được. **Bước 2 (4 phút):** Viết Purpose + Context + Input. **Bước 3 (4 phút):** Viết Steps (ít nhất 4 bước). **Bước 4 (2 phút):** Viết 1 Example output (few-shot). **Bước 5 (2 phút):** Viết Constraints + tiêu chí chất lượng. | Individual practice | Template SKILL.md (handout), Claude Code |
| 0:55–1:00 | **Poll #2 — Checkpoint:** "Bạn đang ở đâu?" (Đang viết / Viết xong, chuẩn bị test / Test rồi, đang sửa / Gặp khó, cần giúp) → Facilitator hỗ trợ nhóm "Gặp khó". | Poll | Zoom poll |
| 1:00–1:08 | **Bài tập 2: Kết nối MCP + Test SKILL.md.** (1) Kết nối filesystem MCP (hướng dẫn từng bước trên slide). (2) Chạy SKILL.md với Claude Code — cho AI đọc file input từ máy qua MCP (không copy-paste). (3) Đánh giá output theo tiêu chí chất lượng đã viết trong SKILL.md. *Nếu không kết nối được MCP: vẫn test SKILL.md bằng cách paste input thủ công.* | Guided practice | Step-by-step MCP guide, Claude Code |
| 1:08–1:12 | **Poll #3:** "MCP filesystem hoạt động không?" (Có, đọc file ok / Có nhưng partial / Lỗi / Chưa thử) → Facilitator hỗ trợ. | Poll | Zoom poll |
| 1:12–1:15 | **Chat share:** "Mô tả SKILL.md của bạn trong 1 câu: 'Skill này giúp [ai] làm [gì] bằng cách [cách nào].'" Facilitator chọn 2-3 câu thú vị. | Chat | Zoom chat |

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:35 | **Bài tập 3: SKILL.md nâng cao — iterate.** (1) Chạy SKILL.md lần 2 với input khác (file hoặc text khác). (2) Đánh giá: output có consistent không? Tiêu chí chất lượng đạt chưa? (3) Sửa SKILL.md: thêm ví dụ thứ 2, cụ thể hóa constraints, thêm edge case handling. (4) Chạy lần 3, so sánh v1 vs v3. "Skill tốt = skill đã qua 3+ vòng iterate." | Individual | Claude Code |
| 1:35–1:45 | **Showcase:** 2-3 người chia sẻ SKILL.md + output. Lớp bình luận: "SKILL.md này có phần nào đặc biệt hiệu quả? Thiếu gì?" | Presentation | Screen share |
| 1:45–1:50 | **Q&A.** Ưu tiên: "MCP tool nào hữu ích? Bảo mật khi AI đọc file? SKILL.md bao nhiêu bước là tối ưu?" | Q&A | — |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (30 phút):** (1) Hoàn thiện SKILL.md (đầy đủ 6 phần, ít nhất 2 ví dụ output). (2) Test với 2 input khác nhau — xác nhận skill hoạt động consistent. (3) Iterate ít nhất 1 lần nữa dựa trên test. (4) Chuẩn bị trình bày 3 phút: Vấn đề → Demo → Kết quả. Mang SKILL.md hoàn chỉnh đến Session 5. | Homework | Template SKILL.md |
| 1:55–2:00 | **Preview Session 5:** "Buổi cuối: bạn sẽ hoàn thiện SKILL.md, test chuyên sâu, và trình bày 3 phút trước lớp — demo live trên máy. Skill tốt nhất sẽ được vote. Chuẩn bị demo chạy trơn tru!" | Wrap | — |

---

## Session 5: Build, Test, Trình Bày (Capstone)

**Terminal Objective:** Hoàn thiện SKILL.md qua ≥2 vòng test+iterate (chứng minh trước/sau khác biệt), trình bày 3 phút trước lớp với live demo chạy thành công, đạt ≥3/4 tiêu chí rubric.

**Ví dụ chủ đạo:** Mỗi học viên xây SKILL.md riêng — cùng cấu trúc contract-agent (input → process → output) cho workflow cá nhân.

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | **Recap toàn khóa — visual timeline.** "5 buổi, 1 hành trình: S1 (AI + brief đầu tiên) → S2 (agent delegation) → S3 (context engineering + Code) → S4 (skill design + MCP) → S5 (build your own). Hôm nay bạn về nhà với 1 skill TỰ VIẾT — tài sản AI tái sử dụng, không phải chat 1 lần bỏ." | Warm-up | Slide timeline |
| 0:05–0:08 | **Poll #1:** "SKILL.md bản nháp có bao nhiêu bước?" (1-3 / 4-6 / 7-10 / Chưa có) → Facilitator phân nhóm: "Chưa có" cần hỗ trợ ưu tiên trong Block B. | Poll | Zoom poll |
| 0:08–0:18 | **SKILL.md review — best practices final.** So sánh 2 SKILL.md: 1 tốt (cụ thể, có ví dụ, có tiêu chí) vs. 1 kém (chung chung, thiếu ví dụ, thiếu constraints). Lớp nhận diện 3 khác biệt. **Test & Iterate loop:** Run SKILL.md → evaluate output against criteria → identify gap → refine SKILL.md → run again. Demo: facilitator chạy skill mẫu, output thiếu 1 phần → sửa SKILL.md thêm constraint → chạy lại → output đầy đủ. "Iterate là kỹ năng cốt lõi — skill chưa bao giờ hoàn hảo lần đầu." | Lecture + Demo | Slide 1-6, Claude Code, 2 SKILL.md mẫu (tốt vs kém) |
| 0:18–0:25 | **Advanced patterns (tùy chọn).** (1) **Multi-skill stacking:** Claude Code load nhiều skill cùng lúc — VD: SKILL.md "phân tích đối thủ" + SKILL.md "viết báo cáo" → pipeline. (2) **Sub-agent within skill:** 1 skill gọi sub-agent cho subtask phức tạp (50 file cần xử lý song song). (3) **CLAUDE.md + SKILL.md ecosystem:** CLAUDE.md = quy tắc chung, SKILL.md = quy trình cụ thể → AI chọn skill phù hợp. "Đây là nấc tiếp — bạn không cần làm ngay, nhưng biết nó tồn tại." | Lecture | Slide 7-9 |
| 0:25–0:30 | **Presentation rubric — 4 tiêu chí.** (1) **Vấn đề:** Rõ ràng ai gặp vấn đề gì, mất bao lâu trước đây? (2) **Demo:** Skill chạy được, không lỗi, output hiện trên màn hình. (3) **Kết quả:** Output dùng được ngay? Tiết kiệm bao phút? (4) **Trình bày:** Mạch lạc, đúng 3 phút, tự tin. Giải thích thang điểm. Cấu trúc trình bày bắt buộc: 30s vấn đề → 90s demo → 60s kết quả. | Lecture | Slide 10-12, rubric handout |
| 0:30–0:35 | **Workshop prep.** "15 phút tới — Block B — là thời gian cuối hoàn thiện + test. Bạn cần ở trạng thái: SKILL.md chạy được + biết mình sẽ nói gì 3 phút. Câu hỏi gì trước khi bắt đầu?" | Transition | — |

**Facilitator Notes — Block A:**
- SKILL.md so sánh tốt/kém: chuẩn bị 2 file mẫu trước. "Kém" = 3 dòng chung chung. "Tốt" = 6 phần đầy đủ, có ví dụ, có tiêu chí.
- Advanced patterns (multi-skill, sub-agent) chỉ giới thiệu 5-7 phút — inspiration, không bắt buộc. Nếu thời gian eo hẹp, cắt phần này.
- Rubric phát bằng handout HOẶC share qua chat link — học viên cần nhìn khi đánh giá bài trình bày.

### Block B — Build Time (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:55 | **Workshop: Hoàn thiện SKILL.md.** Dựa trên homework. Facilitator "đi vòng quanh" qua Zoom chat: "Bạn đang viết skill gì? Gặp khó ở đâu?" Hỗ trợ 1-1 qua screen share nếu cần. Gợi ý cho người stuck: quay lại 4-step Workflow Decomposition từ S4. | Individual workshop | Claude Code, SKILL.md từ homework |
| 0:55–1:00 | **Poll #2 — Checkpoint:** "Bạn ở đâu?" (Đang viết / Đang test / Đang sửa sau test / Xong, chuẩn bị trình bày!) → "Xong" giúp "Đang viết" (peer mentoring). | Poll | Zoom poll |
| 1:00–1:10 | **Test & Iterate.** Chạy SKILL.md trên Claude Code với 2 input khác nhau. Đánh giá output theo tiêu chí chất lượng (đã viết trong SKILL.md). Sửa ít nhất 1 vòng. Ghi lại: before/after — cụ thể sửa gì trong SKILL.md dẫn đến kết quả tốt hơn. | Individual practice | Claude Code |
| 1:10–1:15 | **Peer Preview.** Chat: "Mô tả skill 1 câu: 'Skill này giúp [ai] làm [gì] tốt hơn bằng cách [cách nào].'" Facilitator chọn 2-3, hỏi thêm: "Demo sẽ trông thế nào?" | Chat activity | Zoom chat |

### Block C — Presentations + Feedback (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:45 | **Trình bày Skill — 3 phút mỗi người.** Cấu trúc bắt buộc: **(1) 30 giây — Vấn đề:** "Trước đây, tôi mất ___ phút để ___." **(2) 90 giây — Demo:** chạy skill live trên màn hình. **(3) 60 giây — Kết quả:** "Skill tạo ra ___, tiết kiệm ___ phút, chất lượng ___." Sau mỗi bài: 2 người phản hồi theo rubric + facilitator bình luận. Nếu >10 người: 8 trình bày live, còn lại paste SKILL.md vào chat + mô tả 2 câu. *Target: 7-8 bài trình bày.* | Presentations | Screen share, rubric |
| 1:45–1:50 | **Vote:** Zoom poll — "Skill hữu ích nhất" + "Skill sáng tạo nhất." Công bố + lý do. "Skill được vote = đã validated bởi đồng nghiệp." | Poll + Recognition | Zoom poll |

### Block D — Course Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **5 takeaway — 1 câu mỗi cái:** (1) AI = nhân viên mới xuất sắc — brief rõ, kiểm chứng luôn. (2) Agent > Chat cho tác vụ lặp lại nhiều bước — 3-Question Framework. (3) Context engineering = thiết kế cách AI hiểu công việc bạn 1 lần, dùng mãi — CLAUDE.md. (4) SKILL.md = tài sản tái sử dụng — không phải chat 1 lần bỏ. (5) Iterate là kỹ năng cốt lõi — mọi AI workflow cải thiện qua refine. | Lecture | Slide tổng kết |
| 1:55–1:57 | **Spaced Practice plan — duy trì sau khóa học.** Ngày 3: Chạy skill đã tạo với tác vụ thực tế. Ngày 7: Sửa SKILL.md dựa trên kết quả tuần đầu. Ngày 14: Viết SKILL.md thứ 2 cho workflow khác. Ngày 30: Review cả 2 skill, optimize. "4 mốc để kỹ năng thành thói quen." | Info | Slide |
| 1:57–1:58 | **Tài liệu bổ sung:** Link CLAUDE.md template, SKILL.md template, contract-agent repo, cộng đồng hỗ trợ (nếu có). | Info | Slide + chat links |
| 1:58–2:00 | **Poll cuối:** "Sau khóa học, bạn tự tin dùng AI agent trong công việc ở mức nào?" (1-5). Cảm ơn + kết thúc. | Poll + Wrap | Zoom poll |

**Content Snippet — Script 5 takeaway:**

> "5 điều mang về:
>
> Một — AI là nhân viên mới xuất sắc. Giỏi, nhưng cần brief rõ, và bạn LUÔN kiểm chứng kết quả.
>
> Hai — Agent tốt hơn chat cho tác vụ lặp lại. 3 câu hỏi trước mỗi task: Done trông thế nào? Context gì thiếu? Ràng buộc gì?
>
> Ba — Context engineering không phải 'prompt tips'. Đó là thiết kế cách AI hiểu công việc bạn — 1 lần viết, dùng mãi. CLAUDE.md = sổ tay nhân viên.
>
> Bốn — SKILL.md là tài sản. Chat xong bỏ. Skill viết 1 lần, chạy 100 lần.
>
> Năm — Iterate. Mọi skill, mọi brief, mọi workflow — đều cải thiện qua 3+ vòng refine. Lần đầu không bao giờ hoàn hảo."

---

## Homework Summary

| Session | Homework | Duration | Bring to Next |
|---------|----------|----------|---------------|
| 1 | Brief Library: 5 brief cho 5 tác vụ thường xuyên (RTF + ít nhất 1 thành phần thêm). 1 brief liên quan xử lý tài liệu. Chạy trên Cowork. | 20-25 min | File Brief Library + kết quả |
| 2 | 2 tác vụ thực tế trên Cowork. Ghi: brief, kết quả, iteration v1→v2, thời gian tiết kiệm. | 25 min | Brief + kết quả + so sánh |
| 3 | Hoàn thiện CLAUDE.md (WHY-WHAT-HOW + ví dụ). Test CÓ/KHÔNG CLAUDE.md, ghi 3 khác biệt. Liệt kê bước cho SKILL.md. | 25 min | CLAUDE.md + bản nháp SKILL.md sơ bộ |
| 4 | Hoàn thiện SKILL.md 6 phần (2 ví dụ output). Test 2 input khác nhau. Iterate 1+ lần. Chuẩn bị trình bày 3 phút. | 30 min | SKILL.md hoàn chỉnh + demo ready |
| 5 | (Không có BT.) Spaced Practice: Ngày 3 — chạy skill thực tế. Ngày 7 — sửa SKILL.md. Ngày 14 — viết skill thứ 2. Ngày 30 — review + optimize. | — | — |

---

## Materials Checklist

| Material | Sessions | Status |
|----------|----------|--------|
| Slide deck (per session) | 1-5 | Not started |
| Đơn hàng mẫu Google Vietnam (handout) | 1-3 | Not started |
| Claude.ai accounts (learners) | 1 (backup) | Pre-session setup |
| Claude Cowork access | 1-3 | Pre-session setup |
| Claude Code installed | 3-5 | Pre-session email (3 ngày trước S3) |
| Template brief RTF + 6 thành phần | 1 | Not started |
| Template task brief 4 phần | 2 | Not started |
| Decision matrix (Chat vs Agent vs No AI) | 2 | Not started |
| Workflow mapping worksheet | 2 | Not started |
| Contract-agent folder (zip, shareable) | 3 | Chuẩn bị + test trước buổi |
| Template CLAUDE.md (WHY-WHAT-HOW) | 3-4 | Not started |
| Template SKILL.md (6 phần) | 4-5 | Not started |
| Step-by-step MCP filesystem guide | 4 | Not started |
| SKILL.md mẫu tốt vs kém (so sánh) | 5 | Not started |
| Presentation rubric (4 tiêu chí) | 5 | Not started |
| Zoom polls (pre-configured, 4+ per session) | 1-5 | Not started |
| Video backup: Chat vs Agent demo | 2 | Quay trước buổi |
| Spaced Practice schedule (Day 3/7/14/30) | 5 | Not started |

---

## Prompt Knowledge Woven Throughout (Reference — NOT taught explicitly)

| Technique | Where It Emerges | How It's Framed |
|-----------|-----------------|-----------------|
| RTF (Role-Task-Format) | S1 Block A: 0:18-0:24 | "Để brief nhân viên mới tốt, cần: Vai trò + Tác vụ + Định dạng" |
| 6-component prompt | S1 Block A: 0:26-0:33 | "Mở rộng brief — thêm context cho nhân viên mới hiểu rõ hơn" |
| Few-shot | S1 Block B: Nhiệm vụ C | "Cho nhân viên mới xem mẫu trước khi làm" |
| Chain-of-thought | S1 Block B: Bài tập 2 | "Yêu cầu nhân viên suy nghĩ trước khi hành động" |
| Structured output | S2 Block B: demo nhanh | "Nói rõ bạn muốn nhận kết quả kiểu gì" |
| Context engineering | S3 Block A: toàn bộ | "Thiết kế cách thông tin chảy qua AI — sổ tay nhân viên" |
| Few-shot (system level) | S3 Block C: CLAUDE.md ví dụ | "Ví dụ output trong CLAUDE.md = few-shot ở cấp hệ thống" |
| CoT (system level) | S3 Block A: CLAUDE.md workflow | "Workflow steps = chain-of-thought ở cấp hệ thống" |
| Constraints | S4 Block A: SKILL.md phần 6 | "Giới hạn + tiêu chí chất lượng = cách kiểm soát output" |
| Progressive disclosure | S4: CLAUDE.md → SKILL.md | "Không nhồi hết vào 1 file — chia theo mục đích" |
