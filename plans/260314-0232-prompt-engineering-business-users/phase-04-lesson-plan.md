# Phase 04: Lesson Plan

## TL;DR (50 tokens)
5 sessions x 2h Zoom. REVISED: S1 merged AI+Prompt (interactive, no lecture blocks). S2 Agent Thinking. S3 Cowork+Claude Code hands-on. S4 Context Engineering+MCP. S5 Capstone SKILL.md. Contract-agent runs through all sessions. Pacing: 0-35 concept+demo / break / 40-75 hands-on / break / 80-110 apply / 110-120 wrap.

## Status: Complete (Revised — 5-session merged architecture)

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

**Nguyên tắc thiết kế Session 1 (và toàn khóa):** Không có khối lecture thuần túy. Mỗi khái niệm được giới thiệu trong vòng 3-4 phút, ngay lập tức theo sau bởi bài tập ngắn hoặc poll. Học viên thực hành trên Claude.ai từ phút đầu tiên.

---

## Session 1: AI + Prompt Mastery (Merged)

**Terminal Objective:** Viết prompt hoàn chỉnh 6 thành phần để trích xuất thông tin từ đơn đặt hàng khách hàng và tạo nội dung hợp đồng sơ bộ trên Claude.ai. *(Ref: phase-02, Session 1)*

**Ví dụ chủ đạo:** Contract-agent scenario — đọc thông tin đơn đặt hàng của Google Vietnam → tạo nội dung cho hợp đồng dịch vụ.

### Block A — Concept + Demo (0:00–0:35)

*Nguyên tắc: Lý thuyết LUÔN đến sau ví dụ. Demo trước, giải thích sau.*

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | **Mở đầu bằng live demo — không giới thiệu.** Facilitator mở Claude.ai, paste ngay đoạn thông tin đơn đặt hàng Google Vietnam (tên công ty, địa chỉ, dịch vụ, giá, VAT). Gõ prompt: "Đọc thông tin này và cho tôi biết các điểm chính cần có trong hợp đồng dịch vụ." Đọc kết quả cho lớp. *Không giải thích. Để lớp phản ứng.* | Live demo | Claude.ai, đơn hàng mẫu |
| 0:05–0:07 | **Poll #1:** "Phản ứng đầu tiên của bạn khi thấy demo vừa rồi?" (Ấn tượng / Không chắc chính xác không / Muốn thử ngay / Đã biết rồi) | Poll | Zoom poll |
| 0:07–0:12 | **Giải thích ngược:** "AI vừa làm gì? Nó dự đoán từ tiếp theo dựa trên văn bản huấn luyện khổng lồ." Giới thiệu 3 mô hình tư duy: (1) Máy dự đoán từ — AI hoàn thành câu như autocomplete điện thoại nhưng ở quy mô hàng tỷ tài liệu. (2) Dữ liệu huấn luyện — "AI đọc sách, không sống đời — nó biết hợp đồng vì đã đọc hàng nghìn hợp đồng." (3) Cửa sổ ngữ cảnh — "AI nhớ cuộc trò chuyện, nhưng có giới hạn — như bộ nhớ làm việc của người." | Lecture (mini) | Slide 1-3 |
| 0:12–0:14 | **Chat activity:** "Gõ vào chat Zoom: AI có thể làm được gì trong công việc của BẠN?" Facilitator đọc 3 câu trả lời. | Chat | Zoom chat |
| 0:14–0:18 | **Ảo giác AI (Hallucination) — demo ngay.** Hỏi Claude: "Trong đơn hàng vừa rồi, tổng giá trị hợp đồng là bao nhiêu sau thuế?" (đơn hàng mẫu không ghi tổng, AI sẽ tính hoặc bịa). Phân tích kết quả. "Đây là lý do kiểm chứng quan trọng — AI giỏi nhất khi bạn biết chủ đề đủ để đánh giá." Chiến lược tam giác hóa nguồn (source triangulation): kiểm tra 2+ nguồn độc lập. | Demo + Discussion | Claude.ai |
| 0:18–0:20 | **Poll #2:** "Bạn sẽ kiểm tra lại kết quả AI trước khi dùng không?" (Luôn luôn / Thỉnh thoảng / Hiếm khi / Chưa nghĩ đến) | Poll | Zoom poll |
| 0:20–0:25 | **Giới thiệu công thức prompt đầu tiên.** Vai trò + Tác vụ + Định dạng (Role + Task + Format). Demo ngay: Cùng yêu cầu đơn hàng Google Vietnam, viết prompt RTF: "Vai trò: chuyên gia pháp lý hợp đồng. Tác vụ: tóm tắt 5 điểm chính cần đưa vào hợp đồng dịch vụ dựa trên thông tin đơn hàng. Định dạng: danh sách bullet points, mỗi điểm 1 câu." So sánh trước/sau với prompt đơn giản ở phút 0:00. | Demo | Claude.ai, Slide 4-5 |
| 0:25–0:27 | **Poll #3:** "Kết quả prompt RTF có tốt hơn không?" (Tốt hơn nhiều / Tốt hơn chút / Giống nhau / Tệ hơn) | Poll | Zoom poll |
| 0:27–0:33 | **6 thành phần prompt** — mở rộng từ RTF. Giới thiệu thêm: Giọng điệu (Tone), Ràng buộc (Constraints), Đối tượng (Audience). Demo ngay: Viết prompt 6 thành phần cho tác vụ hợp đồng, chạy, đọc kết quả. "6 thành phần = bộ công cụ đầy đủ. Không cần dùng hết mỗi lần, nhưng biết khi nào dùng cái nào." | Demo | Claude.ai, Slide 6-8 |
| 0:33–0:35 | Tóm tắt Block A nhanh. "3 thứ bạn vừa học: AI dự đoán từ + cần kiểm chứng + prompt RTF tốt hơn prompt đơn. Giờ tự làm." | Wrap | — |

**Facilitator Notes — Block A:**
- Demo đầu tiên (0:00) là khoảnh khắc "wow" quan trọng nhất. Chuẩn bị đơn hàng mẫu sẵn trong clipboard, không để học viên chờ.
- Đơn hàng mẫu dùng cho demo: thông tin Google Vietnam từ prompt.md của contract-agent (tên công ty, địa chỉ, MST, dịch vụ, giá, VAT, thời gian).
- Poll #1 dùng để đo baseline và mood. Nếu >50% "Không chắc chính xác không" → nhấn mạnh kiểm chứng sớm hơn.
- Khi demo hallucination: KHÔNG dùng ví dụ nhạy cảm (chính trị, tôn giáo). Ví dụ hợp đồng/kinh doanh là an toàn.
- Câu hỏi thường gặp: "AI có lấy dữ liệu cá nhân không?" → "Claude không lưu cuộc trò chuyện để huấn luyện. Nhưng không nhập thông tin mật công ty."
- Câu hỏi thường gặp: "Có cần đủ 6 thành phần mỗi lần không?" → "Không. Bắt đầu với 3 (RTF), thêm dần khi cần."

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:45 | Hướng dẫn đăng nhập Claude.ai. Chia sẻ màn hình, từng bước. Giải quyết lỗi qua chat. Học viên paste đơn hàng mẫu vào Claude.ai để sẵn sàng. | Setup | Slide setup, Claude.ai |
| 0:45–0:58 | **Bài tập 1: Prompt cho kịch bản hợp đồng.** Dùng đơn hàng Google Vietnam mẫu (phát handout có sẵn thông tin). Nhiệm vụ A: Viết prompt RTF để trích xuất thông tin quan trọng cho hợp đồng. Nhiệm vụ B: Viết prompt 6 thành phần để AI tạo phần "Mô tả dịch vụ" cho hợp đồng (giá, VAT, thời gian). Chạy cả 2 trên Claude.ai. So sánh kết quả. | Individual practice | Handout: đơn hàng mẫu + template 6 thành phần |
| 0:58–1:02 | **Chat share:** "Paste 1 dòng từ kết quả AI bạn thấy tốt nhất vào chat Zoom." Facilitator chọn 3 ví dụ tốt, bình luận điểm mạnh/cải thiện. | Chat activity | Zoom chat |
| 1:02–1:10 | **Bài tập 2: Few-shot + Chain-of-thought.** Mở prompt Nhiệm vụ B vừa viết. Thêm 2 ví dụ mẫu (few-shot) về cách trình bày mô tả dịch vụ trong hợp đồng. Thêm dòng "Hãy giải thích lý do mỗi quyết định định dạng" (chain-of-thought). Chạy lại. So sánh với kết quả trước. | Individual practice | Claude.ai |
| 1:10–1:15 | **Poll #4:** "Few-shot có cải thiện kết quả không?" (Có, rõ rệt / Có, chút / Không đổi / Khó so sánh) → Thảo luận nhanh. | Poll + Discussion | Zoom poll |

**Facilitator Notes — Block B:**
- Đơn hàng mẫu trong handout: dùng thông tin Google Vietnam từ contract-agent (đã được đơn giản hóa, không phải dữ liệu thật).
- Nếu học viên gặp lỗi đăng nhập: có TA/trợ giảng hỗ trợ qua chat, hoặc học viên xem facilitator thực hành.
- Bài tập 1 có 2 nhiệm vụ: cho phép học viên chọn pace. Nếu còn thời gian → làm thêm với tác vụ công việc cá nhân.
- 3 prompt mẫu dự phòng nếu học viên bí ý tưởng:
  - Manager: "Vai trò: trợ lý giám đốc. Tác vụ: soạn email báo cáo tuần. Định dạng: 5 bullet points, <200 từ."
  - Marketer: "Vai trò: chuyên gia marketing. Tác vụ: viết 3 tiêu đề quảng cáo cho sản phẩm X. Định dạng: mỗi tiêu đề <10 từ."
  - Teacher: "Vai trò: giáo viên Toán lớp 9. Tác vụ: ra 5 bài tập phương trình bậc hai. Định dạng: mức độ tăng dần."

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:35 | **Bài tập 3: Tác vụ công việc thực tế của bạn.** Chuyển từ kịch bản hợp đồng sang tác vụ cá nhân. Chọn 1 việc phải làm trong tuần này. Viết prompt 6 thành phần. Chạy. Đánh giá kết quả theo 3 tiêu chí: (1) Đúng nội dung? (2) Đúng định dạng? (3) Dùng được ngay không cần sửa lớn? | Individual practice | Claude.ai |
| 1:35–1:45 | **Showcase:** 3 người tình nguyện chia sẻ màn hình — trình bày prompt + kết quả. Lớp nhận xét: "Prompt này thiếu thành phần gì?" Facilitator bình luận điểm mạnh/cải thiện. | Presentation + Feedback | Screen share |
| 1:45–1:50 | Q&A mở. Ưu tiên: "Khi nào dùng few-shot? Khi nào dùng chain-of-thought? Prompt dài bao nhiêu là tối ưu?" Thu câu hỏi qua chat, trả lời 2-3 câu. | Q&A | Zoom chat |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (20-25 phút):** Tạo "Prompt Library" cá nhân: 5 prompt cho 5 tác vụ thường xuyên, mỗi prompt dùng ít nhất 4/6 thành phần. Lưu vào file/ghi chú. 1 trong 5 prompt phải liên quan đến việc đọc/xử lý tài liệu (như kịch bản hợp đồng). Mang đến Session 2. | Homework brief | Slide cuối, template |
| 1:55–2:00 | Tóm tắt 3 takeaway: (1) AI dự đoán từ — đừng tin mù quáng. (2) Prompt tốt = cụ thể + có cấu trúc. (3) 6 thành phần = bộ công cụ, dùng khi cần. Preview Session 2: "Cùng tác vụ hợp đồng đó — chat mất 5 tin nhắn, agent làm trong 1 brief. Hôm sau bạn sẽ thấy tại sao." | Wrap | Slide tổng kết |

---

## Session 2: Tư duy Agent (Agent Thinking)

**Terminal Objective:** Chuyển đổi quy trình tạo hợp đồng từ chat thủ công sang agent brief hoàn chỉnh, chứng minh sự khác biệt hiệu quả. *(Ref: phase-02, Session 2)*

**Ví dụ chủ đạo:** Cùng 1 tác vụ — tạo hợp đồng từ đơn đặt hàng — nhưng làm 2 cách: chat (5 tin nhắn qua lại) vs. agent (1 brief, tự chạy).

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | Recap Session 1. "Ai đã tạo Prompt Library 5 prompt rồi?" → Zoom reactions (thumbs up). 1 người chia sẻ prompt hay nhất. Facilitator nhận xét nhanh. | Warm-up | — |
| 0:05–0:08 | **Poll #1:** "Khi dùng ChatGPT/Claude, bạn thường gửi bao nhiêu tin nhắn cho 1 tác vụ?" (1 / 2-5 / 6-10 / >10) | Poll | Zoom poll |
| 0:08–0:20 | **Demo so sánh — cùng 1 tác vụ, 2 cách.** Tác vụ: tạo hợp đồng từ đơn đặt hàng Google Vietnam. **Cách 1 (Chat):** Facilitator demo live 5 tin nhắn qua lại trên Claude.ai — hỏi thông tin, hỏi định dạng, hỏi VAT, yêu cầu sửa... ~8 phút thực tế. **Cách 2 (Agent brief):** Đọc task brief đã chuẩn bị sẵn (mục tiêu + bối cảnh + bước + tiêu chí thành công) — 1 lần gửi, agent tự lập kế hoạch và thực thi. So sánh thời gian và chất lượng. | Live demo | Claude.ai, Claude Cowork, brief mẫu |
| 0:20–0:22 | **Poll #2:** "Bạn muốn dùng cách nào cho công việc hàng ngày?" (Chat từng bước / Agent tự động / Tùy tình huống) | Poll | Zoom poll |
| 0:22–0:30 | **Chat vs. Agent — 3 khác biệt cốt lõi.** (1) Chat = bạn ra lệnh từng bước; Agent = bạn giao mục tiêu, AI tự lập kế hoạch. (2) Chat = mỗi tin nhắn riêng lẻ; Agent = nhớ cả quy trình và trạng thái. (3) Chat = bạn copy-paste kết quả; Agent = tự tạo file, tự kiểm tra. Phép so sánh: "Chat = nhắn tin cho nhân viên từng dòng hướng dẫn. Agent = giao brief và để họ làm." | Lecture | Slide 1-6 |
| 0:30–0:33 | **Khi nào dùng agent?** Ma trận quyết định: Lặp lại + nhiều bước = Agent. Sáng tạo + 1 lần = Chat. 3 ví dụ: manager (lập kế hoạch dự án tuần), marketer (phân tích chiến dịch), teacher (tạo bộ đề thi). | Lecture | Slide 7-8 |
| 0:33–0:35 | **Chat activity:** "Tác vụ nào trong công việc của bạn lặp lại mỗi tuần và mất >30 phút?" → Zoom chat. Facilitator chọn 2-3 ví dụ. | Chat | Zoom chat |

**Facilitator Notes — Block A:**
- Demo so sánh là khoảnh khắc chuyển giao tâm lý quan trọng nhất khóa học. Chuẩn bị kỹ: có video backup nếu Cowork gặp lỗi live.
- Nhiều học viên sẽ lo "mất kiểm soát" khi thấy agent tự làm. Nhấn mạnh: "Bạn vẫn là người quyết định. Agent chỉ thực thi kế hoạch bạn duyệt."
- Brief mẫu cho contract task chuẩn bị sẵn trên slide để show song song với demo.

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:48 | **Hướng dẫn Claude Cowork.** Chia sẻ màn hình, demo giao diện. Cách tạo project, cách gửi brief. Hướng dẫn đăng nhập. Troubleshooting lỗi thường gặp. | Setup + Demo | Cowork, screen share |
| 0:48–1:02 | **Bài tập 1: Viết Task Brief đầu tiên.** Dùng kịch bản hợp đồng hoặc tác vụ cá nhân từ homework. Viết task brief gồm 4 phần: (1) Mục tiêu: AI cần tạo ra gì? (2) Bối cảnh: thông tin cần biết, file cần đọc. (3) Các bước thực hiện: ít nhất 3 bước theo thứ tự. (4) Tiêu chí thành công: kết quả đạt chuẩn trông như thế nào? Gửi brief cho Claude Cowork. | Individual practice | Cowork, handout template brief |
| 1:02–1:07 | **Chat share:** "Kết quả agent có tốt hơn chat không? Đánh giá 1-5 + 1 câu nhận xét." | Chat activity | Zoom chat |
| 1:07–1:15 | **Poll #3:** "Phần nào của task brief khó viết nhất?" (Mục tiêu / Bối cảnh / Các bước / Tiêu chí thành công) → Thảo luận: tại sao phần đó khó và cách cải thiện. | Poll + Discussion | Zoom poll |

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:35 | **Bài tập 2: Workflow Mapping.** Liệt kê 5 tác vụ lặp lại hàng tuần. Phân loại: Chat phù hợp / Agent phù hợp / Không phù hợp AI. Chọn 1 tác vụ "Agent phù hợp" → viết brief hoàn chỉnh 4 phần. | Individual | Worksheet workflow mapping |
| 1:35–1:45 | **Showcase:** 3 người trình bày workflow mapping + brief. Lớp góp ý theo 1 câu hỏi duy nhất: "Brief này đủ rõ để agent thực thi không cần giải thích thêm không?" → Yes/No + 1 cải thiện cụ thể. | Presentation + Feedback | Screen share |
| 1:45–1:50 | Q&A. Ưu tiên: "Agent có an toàn không? Chi phí? Giới hạn?" | Q&A | — |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (25 phút):** Chạy 2 tác vụ thực tế trên Claude Cowork. Ghi lại: (1) Brief đã gửi. (2) Kết quả nhận. (3) Điều chỉnh cần thiết. (4) So sánh với cách làm chat cũ: tiết kiệm bao nhiêu phút? Mang đến Session 3. | Homework | Slide cuối |
| 1:55–2:00 | Tóm tắt: "Agent = ủy quyền thông minh. Bạn là sếp, AI là nhân viên giỏi." Preview Session 3: "Buổi tới: chúng ta cài Claude Code và chạy THỰC SỰ contract agent — không phải demo, bạn tự chạy trên máy mình." | Wrap | — |

---

## Session 3: Áp dụng — Cowork + Claude Code

**Terminal Objective:** Thiết lập Claude Code, đọc CLAUDE.md của contract-agent, và chạy automation tạo hợp đồng thực tế. *(Ref: phase-02, Session 3)*

**Ví dụ chủ đạo:** Học viên tự chạy contract-agent trên máy mình — đọc file đơn đặt hàng, tạo file hợp đồng output.

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | Recap Session 2. "Ai đã chạy 2 tác vụ trên Cowork rồi?" → Reactions. 1 người chia sẻ brief và kết quả. | Warm-up | — |
| 0:05–0:08 | **Poll #1:** "Bạn đã cài Claude Code chưa?" (Rồi và test được / Rồi nhưng chưa test / Chưa / Không biết cài thế nào) → Facilitator điều chỉnh pace Block B. | Poll | Zoom poll |
| 0:08–0:20 | **Demo: Contract-agent hoạt động thế nào.** Facilitator mở terminal, chạy Claude Code trong thư mục contract-agent. Mở CLAUDE.md để lớp thấy nội dung. "Đây là file hướng dẫn AI — giống sổ tay nhân viên." Chạy lệnh: cung cấp file `prompt.md` (đơn hàng Google Vietnam), Claude Code đọc CLAUDE.md, đọc template `.docx`, tạo file hợp đồng output. Mở file output cho lớp xem. | Live demo | Terminal, Claude Code, contract-agent files |
| 0:20–0:22 | **Chat activity:** "Nhìn vào CLAUDE.md, bạn thấy AI được hướng dẫn làm những gì?" → Zoom chat, 30 giây. | Chat | Zoom chat |
| 0:22–0:30 | **CLAUDE.md anatomy — đọc hiểu.** Cùng lớp đọc CLAUDE.md của contract-agent. Nhận diện 4 phần: (1) Vai trò — AI đóng vai gì. (2) Quy tắc — AI phải làm gì, không làm gì. (3) Workflow — các bước theo thứ tự. (4) Công cụ — AI dùng file nào, tạo file nào. "Đây chính xác là những gì bạn sẽ tự viết cho công việc mình." | Lecture + Discussion | CLAUDE.md contract-agent, Slide |
| 0:30–0:35 | **Poll #2:** "Nếu viết CLAUDE.md cho công việc của bạn, phần nào quan trọng nhất?" (Vai trò / Quy tắc / Workflow / Công cụ) → Thảo luận lý do. | Poll + Discussion | Zoom poll |

**Facilitator Notes — Block A:**
- Poll #1 quan trọng: nếu >40% chưa cài → dành thêm 10 phút đầu Block B cho setup, rút ngắn bài tập 2.
- Contract-agent cần được cài sẵn và test trước buổi học (không demo trực tiếp nếu chưa test).
- Khi show CLAUDE.md, phóng to font cho học viên đọc được qua Zoom.
- Đơn hàng mẫu dùng file `prompt.md` thực từ contract-agent repo (thông tin Google Vietnam).

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:53 | **Setup Claude Code.** Hướng dẫn từng bước: mở terminal → chạy `claude` → xác nhận hoạt động. Dành thời gian cho học viên chạy lệnh đầu tiên: hỏi Claude Code 1 câu đơn giản qua terminal. Giải quyết lỗi cài đặt qua chat. | Guided setup | Step-by-step guide, screen share |
| 0:53–1:05 | **Bài tập 1: Chạy contract-agent.** Copy thư mục contract-agent mẫu (facilitator share link download). Mở trong terminal. Chạy với file đơn hàng mẫu. Đợi output. Mở file hợp đồng kết quả. Đánh giá theo 3 tiêu chí: (1) Thông tin chính xác? (2) Định dạng đúng mẫu template? (3) Dùng được ngay không cần sửa lớn? | Individual practice | Terminal, contract-agent folder, đơn hàng mẫu |
| 1:05–1:10 | **Poll #3:** "Kết quả hợp đồng từ contract-agent đánh giá thế nào?" (Dùng được ngay / Cần sửa nhỏ / Cần sửa nhiều / Lỗi, không chạy được) → Facilitator ưu tiên hỗ trợ nhóm "Lỗi". | Poll | Zoom poll |
| 1:10–1:15 | **Bài tập 2: Thử đổi đơn hàng.** Sửa 1-2 thông tin trong file đơn hàng (ví dụ: thêm dịch vụ mới, đổi giá). Chạy lại contract-agent. Kiểm tra output có cập nhật đúng không. | Individual practice | Terminal, file đơn hàng |

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:35 | **Bài tập 3: Phác thảo CLAUDE.md cá nhân.** Dùng template 4-phần. Điền vai trò, quy tắc cơ bản, 3 bước workflow cho 1 tác vụ lặp lại của bạn (ví dụ: soạn báo cáo tuần, phân tích email khách hàng). Không cần hoàn chỉnh — bản nháp. | Individual | Template CLAUDE.md, Claude Code |
| 1:35–1:45 | **Showcase:** 2-3 người chia sẻ bản nháp CLAUDE.md. Lớp góp ý: "Workflow này đủ rõ chưa? Còn thiếu gì?" | Presentation | Screen share |
| 1:45–1:50 | Q&A. Ưu tiên: "Làm sao để AI đọc file của mình? Hỗ trợ loại file nào? Bảo mật dữ liệu?" | Q&A | — |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (25 phút):** Hoàn thiện CLAUDE.md cá nhân (4 phần đầy đủ). Test với 1 tác vụ thực tế trong Claude Code. Ghi lại: kết quả có/không có CLAUDE.md khác thế nào. Bắt đầu phác thảo SKILL.md: liệt kê input, output, các bước cho 1 quy trình. Mang đến Session 4. | Homework | Template CLAUDE.md, template SKILL.md |
| 1:55–2:00 | Preview Session 4: "Buổi tới: hiểu tại sao contract-agent hoạt động tốt — context engineering, Smart Zone, và kết nối thêm công cụ MCP để AI đọc file trực tiếp từ máy bạn." | Wrap | — |

---

## Session 4: Context Engineering + Công cụ MCP

**Terminal Objective:** Viết CLAUDE.md tùy chỉnh và kết nối 1 công cụ MCP trong Claude Code. *(Ref: phase-02, Session 4)*

**Ví dụ chủ đạo:** Khám phá CLAUDE.md của contract-agent như case study về context engineering tốt. Kết nối filesystem MCP để AI đọc file .docx từ máy.

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | Recap Session 3. Homework debrief: "AI có hoạt động khác khi có CLAUDE.md không?" → 3 người chia sẻ nhanh. | Warm-up | — |
| 0:05–0:08 | **Poll #1:** "CLAUDE.md của bạn hiện có bao nhiêu phần?" (Chưa có / 1-2 / 3-4 / Đầy đủ 4+) | Poll | Zoom poll |
| 0:08–0:20 | **Context Engineering là gì?** Phép so sánh: "Bạn có thể nhờ nhân viên mới làm việc theo 2 cách: (1) Ra lệnh từng câu mỗi lần. (2) Đưa sổ tay hướng dẫn 1 lần, sau đó họ tự biết làm. CLAUDE.md = sổ tay đó." Demo: Claude Code chạy không có CLAUDE.md → kết quả chung chung. Chạy có CLAUDE.md → kết quả đúng phong cách. Giới thiệu Smart Zone: "AI giữ CLAUDE.md trong vùng nhớ quan trọng nhất — luôn có hiệu lực." RPI pattern (Read-Plan-Implement): AI đọc context → lập kế hoạch → thực thi. | Lecture + Demo | Slide 1-6, Claude Code |
| 0:20–0:22 | **Chat activity:** "Nếu viết sổ tay cho AI trong công việc của bạn, 3 quy tắc quan trọng nhất là gì?" → Zoom chat. Facilitator tổng hợp theo chủ đề. | Chat | Zoom chat |
| 0:22–0:30 | **Khám phá CLAUDE.md contract-agent như case study.** Cùng lớp phân tích: tại sao contract-agent viết CLAUDE.md theo cách này? Vai trò cụ thể (không mơ hồ), quy tắc rõ (không nhập thông tin mật), workflow có thứ tự, công cụ được liệt kê. So sánh CLAUDE.md tổng quát vs. SKILL.md chuyên biệt. | Discussion | CLAUDE.md contract-agent, Slide |
| 0:30–0:35 | **MCP là gì?** Phép so sánh: "MCP = ổ cắm điện chuẩn quốc tế. Cắm công cụ nào cũng chạy." Demo nhanh: kết nối filesystem MCP tool, yêu cầu AI đọc file đơn hàng `.md` trực tiếp từ máy mà không cần copy-paste. | Demo | Claude Code, filesystem MCP |

**Facilitator Notes — Block A:**
- Session 4 là bước nhảy lớn nhất về tư duy: từ "viết prompt" → "thiết kế môi trường". Dùng nhiều phép so sánh.
- Claude Code phải được cài sẵn trên máy học viên TRƯỚC buổi học (gửi hướng dẫn qua email trước 3 ngày).
- Nếu học viên không cài được Claude Code → cho xem demo qua screen share facilitator, vẫn làm bài tập viết CLAUDE.md trên giấy/docs.
- Câu hỏi thường gặp: "CLAUDE.md khác system prompt thế nào?" → "CLAUDE.md lưu trên máy, tự động load. System prompt phải gõ lại mỗi lần."

### Block B — Hands-on Practice (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:55 | **Bài tập 1: Viết CLAUDE.md hoàn chỉnh.** Dùng bản nháp từ homework Session 3. Hoàn thiện 4 phần. Lưu file. Chạy Claude Code với 1 tác vụ thực tế. So sánh: có vs. không có CLAUDE.md. Ghi lại 3 điểm khác biệt cụ thể. | Individual practice | Template CLAUDE.md, Claude Code |
| 0:55–1:00 | **Poll #2:** "Kết quả có CLAUDE.md tốt hơn bao nhiêu?" (Giống nhau / Tốt hơn chút / Tốt hơn nhiều / Khác hoàn toàn) → Thảo luận: ai nhận được cải thiện lớn nhất? Họ viết CLAUDE.md như thế nào? | Poll + Discussion | Zoom poll |
| 1:00–1:10 | **Bài tập 2: Kết nối MCP tool.** Theo hướng dẫn từng bước: cài filesystem MCP → cấu hình → test. Yêu cầu Claude Code đọc 1 file từ máy (không copy-paste). Xác nhận AI nhận được nội dung đúng. | Guided practice | Step-by-step MCP guide |
| 1:10–1:15 | **Poll #3:** "MCP filesystem có hoạt động không?" (Có, đọc được file / Có nhưng partial / Không, gặp lỗi) → Facilitator hỗ trợ nhóm gặp lỗi. | Poll | Zoom poll |

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:35 | **Bài tập 3: CLAUDE.md nâng cao.** Thêm: (1) Ví dụ output mong muốn (few-shot trong CLAUDE.md). (2) Danh sách từ vựng chuyên ngành. (3) 1 quy tắc "không làm" quan trọng. Test lại với tác vụ phức tạp hơn. | Individual | Claude Code |
| 1:35–1:45 | **Showcase:** 2-3 người chia sẻ CLAUDE.md + kết quả test. Lớp bình luận: "CLAUDE.md này có phần nào đặc biệt thông minh?" | Presentation | Screen share |
| 1:45–1:50 | Q&A. Ưu tiên: "MCP tool nào hữu ích nhất? Bảo mật khi AI đọc file máy?" | Q&A | — |

### Block D — Homework + Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **Bài tập về nhà (30 phút):** Hoàn thiện CLAUDE.md (đưa ví dụ output vào). Hoàn thành bản nháp SKILL.md cho 1 quy trình: xác định đầy đủ input, output, các bước, tiêu chí chất lượng. Lấy cảm hứng từ contract-agent nhưng cho workflow cá nhân. Mang bản nháp SKILL.md đến Session 5. | Homework | Template SKILL.md |
| 1:55–2:00 | Preview Session 5: "Buổi cuối: bạn sẽ xây dựng SKILL.md riêng — giống contract-agent nhưng cho công việc của bạn — và trình bày trước lớp. Chuẩn bị bản nháp." | Wrap | — |

---

## Session 5: Xây dựng Skill của riêng bạn (Capstone)

**Terminal Objective:** Tạo và kiểm thử SKILL.md hoàn chỉnh, trình bày 3 phút trước lớp. *(Ref: phase-02, Session 5)*

**Ví dụ chủ đạo:** Học viên tạo SKILL.md riêng lấy cảm hứng từ contract-agent — cùng cấu trúc (đọc input → xử lý → tạo output) nhưng cho workflow cá nhân.

### Block A — Concept + Demo (0:00–0:35)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:00–0:05 | **Recap toàn khóa — visual timeline.** "5 buổi, 1 hành trình: S1 (prompt) → S2 (agent thinking) → S3 (chạy automation thật) → S4 (context engineering) → S5 (build your own). Hôm nay bạn về nhà với 1 skill tự viết." | Warm-up | Slide timeline |
| 0:05–0:08 | **Poll #1:** "SKILL.md bản nháp của bạn có bao nhiêu bước?" (1-3 / 4-6 / 7-10 / Chưa có) | Poll | Zoom poll |
| 0:08–0:18 | **SKILL.md anatomy — từ contract-agent đến skill của bạn.** So sánh song song: contract-agent SKILL.md (giả định) vs. template trống. 6 phần: (1) Mục tiêu: skill này làm gì. (2) Ngữ cảnh: AI cần biết gì trước khi bắt đầu. (3) Input: nhận dữ liệu gì, từ đâu. (4) Các bước thực hiện: thứ tự rõ ràng. (5) Ví dụ: mẫu output mong muốn (few-shot). (6) Ràng buộc: không làm gì, giới hạn gì. Demo: chạy SKILL.md mẫu trên Claude Code, cho thấy output. | Lecture + Demo | Slide 1-8, Claude Code |
| 0:18–0:25 | **Workflow Decomposition — cách phân tích quy trình.** 4 bước: (1) Liệt kê tất cả bước của quy trình hiện tại (kể cả thủ công). (2) Xác định input/output mỗi bước. (3) Đánh dấu bước AI làm được (xử lý văn bản, tổng hợp, định dạng). (4) Loại bỏ bước AI chưa làm được (phán quyết phức tạp, quan hệ người). Demo nhanh với ví dụ "soạn báo cáo phân tích đối thủ". | Lecture + Demo | Slide 9-11 |
| 0:25–0:30 | **3 lỗi thường gặp khi viết SKILL.md.** (1) Quá chung chung — thiếu ví dụ output cụ thể. (2) Quá chi tiết — micro-manage từng câu, AI không linh hoạt. (3) Thiếu tiêu chí chất lượng — AI không biết "đủ tốt" là gì. Cách khắc phục cho mỗi lỗi. | Lecture | Slide 12-13 |
| 0:30–0:35 | **Rubric trình bày — 4 tiêu chí.** (1) Vấn đề giải quyết rõ ràng? (2) Skill chạy được không lỗi? (3) Kết quả dùng được ngay? (4) Trình bày mạch lạc trong 3 phút? Giải thích thang điểm. "Đây là cơ sở để lớp phản hồi cho nhau." | Lecture | Slide 14-15 |

### Block B — Build Time (0:40–1:15)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 0:40–0:55 | **Workshop: Hoàn thiện SKILL.md.** Dựa trên bản nháp homework. Facilitator đi "vòng quanh" qua Zoom chat: "Bạn đang viết skill gì? Gặp vướng mắc gì?" Hỗ trợ 1-1 qua screen share nếu cần. | Individual workshop | Claude Code, template SKILL.md |
| 0:55–1:00 | **Poll #2 — Checkpoint:** "Bạn đang ở giai đoạn nào?" (Đang viết SKILL.md / Đang test / Đang sửa sau test / Xong, chuẩn bị trình bày!) → Facilitator điều chỉnh: nhóm "Xong" giúp nhóm "Đang viết". | Poll | Zoom poll |
| 1:00–1:10 | **Test & Iterate.** Chạy SKILL.md trên Claude Code. Đánh giá kết quả theo 3 tiêu chí từ rubric. Sửa ít nhất 1 vòng. Ghi lại: trước/sau sửa khác nhau thế nào. | Individual practice | Claude Code |
| 1:10–1:15 | **Peer Preview.** Chat: "Mô tả skill của bạn trong 1 câu: 'Skill này giúp [ai] làm [gì] tốt hơn bằng cách [cách nào].'" Facilitator chọn 2-3 câu thú vị để hỏi thêm. | Chat activity | Zoom chat |

### Block C — Presentations + Feedback (1:20–1:50)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:20–1:45 | **Trình bày Skill — 3 phút mỗi người.** Cấu trúc cố định: (1) 30 giây — Vấn đề: "Trước đây, tôi mất ___ phút để ___." (2) 90 giây — Demo: chạy skill trực tiếp trên màn hình. (3) 60 giây — Kết quả: "Skill tạo ra ___, tốt hơn thế này: ___." Sau mỗi bài: 2 người phản hồi theo rubric 4 tiêu chí + facilitator bình luận. Nếu >10 người: 8 người trình bày live, còn lại paste link/text SKILL.md vào chat. | Presentations | Screen share, rubric handout |
| 1:45–1:50 | **Vote:** Zoom poll — "Skill hữu ích nhất" + "Skill sáng tạo nhất". Công bố kết quả + lý do ngắn. | Poll + Recognition | Zoom poll |

### Block D — Course Wrap (1:50–2:00)

| Time | Activity | Type | Materials |
|------|----------|------|-----------|
| 1:50–1:55 | **5 takeaway — 1 câu mỗi cái:** (1) AI là máy dự đoán từ — không phải thần thánh, luôn kiểm chứng. (2) Prompt tốt = cụ thể + có cấu trúc (6 thành phần). (3) Agent > Chat cho tác vụ lặp lại nhiều bước. (4) Context engineering = dạy AI hiểu công việc của bạn 1 lần, dùng mãi. (5) SKILL.md = tài sản tái sử dụng, không phải chat một lần bỏ. | Lecture | Slide tổng kết |
| 1:55–1:58 | **Next Steps.** Tài liệu bổ sung, cộng đồng hỗ trợ (nếu có). "Skill bạn vừa tạo hôm nay — dùng ngay tuần tới và tinh chỉnh dựa trên kết quả thực tế." | Info | Slide |
| 1:58–2:00 | **Poll cuối:** "Sau khóa học, bạn tự tin dùng AI trong công việc ở mức nào?" (1-5). Cảm ơn + kết thúc. | Poll + Wrap | Zoom poll |

---

## Content Snippets (Required Templates)

### Sample Vietnamese Opening Script — Session 1

> "Xin chào mọi người! Thay vì bắt đầu bằng slide giới thiệu, tôi muốn làm thẳng một thứ luôn. Bạn có thấy thông tin này không?" [Facilitator paste thông tin đơn đặt hàng Google Vietnam lên màn hình — tên công ty, địa chỉ, dịch vụ, giá, VAT.]
>
> "Bây giờ tôi sẽ hỏi Claude một câu rất đơn giản..." [Gõ prompt, đợi kết quả 20-30 giây.]
>
> "Và đây là kết quả." [Đọc output — các điểm chính cần có trong hợp đồng.]
>
> "Tôi vừa tiết kiệm khoảng 10-15 phút. Trong 2 giờ tiếp theo, bạn sẽ biết cách làm điều này — và làm tốt hơn nữa. Tên tôi là [tên], và cam kết của tôi: kết thúc buổi hôm nay, mỗi người sẽ hoàn thành ít nhất 1 việc thật bằng AI. Không phải xem demo. Việc thật của bạn. Sẵn sàng chưa?"

### Sample Activity Procedure — Session 1, Bài tập 1: Prompt cho kịch bản hợp đồng

**Mục tiêu:** Viết 2 prompt (RTF và 6 thành phần) cho kịch bản hợp đồng Google Vietnam. So sánh kết quả.

**Thời gian:** 13 phút (0:45–0:58)

**Tài liệu cần có:** Handout đơn hàng mẫu Google Vietnam + Template 6 thành phần

**Thông tin đơn hàng mẫu (trên handout):**
```
Công ty: TNHH Google Vietnam
Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
MST: 028476564
Đại diện: Ông Khá Văn Bảnh – Giám Đốc
Dịch vụ: (1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND
VAT: 8%
Thời gian thực hiện: 10 ngày từ ngày ký hợp đồng
```

**Bước thực hiện:**

1. (2 phút) Đọc thông tin đơn hàng mẫu. Mở Claude.ai, tạo conversation mới.

2. (4 phút) **Nhiệm vụ A — Prompt RTF:**
   Viết prompt 3 thành phần: Vai trò + Tác vụ + Định dạng. Gợi ý:
   - Vai trò: "Bạn là chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam."
   - Tác vụ: "Đọc thông tin đơn đặt hàng sau và liệt kê 5 điểm chính cần đưa vào hợp đồng dịch vụ."
   - Định dạng: "Danh sách bullet points, mỗi điểm 1 câu ngắn gọn."
   Paste thông tin đơn hàng vào cuối prompt. Chạy trên Claude.ai.

3. (5 phút) **Nhiệm vụ B — Prompt 6 thành phần:**
   Mở rộng prompt A thêm: Giọng điệu (chuyên nghiệp, rõ ràng), Ràng buộc (theo luật hợp đồng Việt Nam, dưới 200 từ), Đối tượng (giám đốc của bên dịch vụ sẽ ký). Chạy lại trên Claude.ai.

4. (2 phút) So sánh kết quả A và B: Kết quả nào đầy đủ hơn? Phù hợp hơn để đưa vào hợp đồng thật?

**Facilitator nói khi kết thúc:** "Giơ tay nếu kết quả 6 thành phần rõ ràng hơn rõ rệt." → Thường 80%+ giơ tay. "Đó chính xác là lý do chúng ta học 6 thành phần."

### Sample Transition Script — Session 1 sang Session 2

> "Hôm nay bạn đã học cách viết prompt tốt cho Claude. Nhưng tôi muốn kể cho bạn nghe điều này: để tạo xong hợp đồng cho Google Vietnam, tôi phải làm gì tiếp theo? Tôi phải gửi thêm tin nhắn hỏi định dạng. Rồi hỏi cách tính VAT. Rồi copy kết quả vào Word. Rồi format lại. Tổng cộng 5-6 tin nhắn và 15 phút.
>
> Buổi tới, tôi sẽ cho bạn thấy cùng tác vụ đó — 1 brief, agent tự làm, file hợp đồng ra thẳng — không cần qua lại. Đó là sự khác biệt giữa chat và agent. Hẹn gặp lại!"

### Sample Assessment Question

**Câu hỏi (Session 1 — kiểm tra cuối buổi qua Zoom poll):**

"Bạn cần AI soạn phần 'Điều khoản thanh toán' cho hợp đồng dịch vụ với Google Vietnam (tổng 15 triệu + VAT 8%, thanh toán 50% trước, 50% sau 10 ngày). Prompt nào tốt hơn?"

A) "Viết điều khoản thanh toán cho hợp đồng"

B) "Vai trò: chuyên gia hợp đồng dịch vụ IT tại Việt Nam. Tác vụ: viết điều khoản thanh toán cho hợp đồng dịch vụ thiết kế và lập trình với giá trị 15 triệu VND + VAT 8% (tổng 16.2 triệu), thanh toán 2 đợt: 50% khi ký, 50% sau 10 ngày hoàn thành. Định dạng: văn phong pháp lý, 3-4 câu rõ ràng. Ràng buộc: phù hợp luật thương mại Việt Nam. Đối tượng: hai bên ký hợp đồng sẽ đọc."

→ Đáp án đúng: B. Giải thích: Prompt B cung cấp đầy đủ số liệu cụ thể, điều kiện thanh toán, và ràng buộc pháp lý — AI không cần đoán, không thể tạo ra thông tin sai.

---

## Homework Summary

| Session | Homework | Duration | Bring to Next |
|---------|----------|----------|---------------|
| 1 | Prompt Library: 5 prompt cho 5 tác vụ thường xuyên, mỗi prompt 4+/6 thành phần. 1 prompt phải liên quan xử lý tài liệu. | 20-25 min | File Prompt Library |
| 2 | Chạy 2 tác vụ thực tế trên Claude Cowork. Ghi: brief gửi, kết quả, điều chỉnh, thời gian tiết kiệm. | 25 min | Brief + kết quả + so sánh |
| 3 | Hoàn thiện CLAUDE.md (4 phần). Test với 1 tác vụ thực tế. Phác thảo SKILL.md (input, output, các bước). | 25 min | CLAUDE.md + bản nháp SKILL.md |
| 4 | Hoàn thiện CLAUDE.md (thêm ví dụ output). Hoàn chỉnh bản nháp SKILL.md (đầy đủ 6 phần). | 30 min | Bản nháp SKILL.md hoàn chỉnh |
| 5 | (Không có — khóa học kết thúc. Khuyến khích: dùng skill đã tạo trong công việc tuần tới và ghi lại kết quả.) | — | — |

---

## Materials Checklist

| Material | Sessions Used | Status |
|----------|---------------|--------|
| Slide deck (per session) | 1-5 | Not started |
| Đơn hàng mẫu Google Vietnam (handout) | 1-3 | Not started |
| Claude.ai accounts (learners) | 1-2 | Pre-session setup |
| Claude Cowork access | 2-3 | Pre-session setup |
| Claude Code installed | 3-5 | Pre-session email (3 ngày trước S3) |
| Template 6 thành phần prompt | 1 | Not started |
| Contract-agent folder (zip, shareable) | 3 | Chuẩn bị với đơn hàng mẫu |
| Workflow mapping worksheet | 2 | Not started |
| Template task brief (4 phần) | 2 | Not started |
| Template CLAUDE.md (4 phần) | 3-4 | Not started |
| Template SKILL.md (6 phần) | 4-5 | Not started |
| Step-by-step MCP guide | 4 | Not started |
| Presentation rubric (4 tiêu chí) | 5 | Not started |
| Zoom polls (pre-configured, 4+ per session) | 1-5 | Not started |
