# Hướng Dẫn Giảng Viên v2 — Session 2: Ủy Quyền Cho Agent (Agent Delegation Mastery)

> **Terminal Objective:** Phân biệt chat vs agent, viết task brief 4 phần hoàn chỉnh, thiết kế workflow mapping cho công việc thực tế.
>
> **Công cụ:** Claude.ai (demo chat) + Claude Cowork (agent)
> **Thời lượng:** 2 giờ (120 phút)
> **Mental model:** "Brief nhân viên mới 1 việc" → "Giao brief DỰ ÁN cho nhân viên mới"

---

## Pre-Session Checklist (Trước 15 Phút)

- [ ] Mở Claude.ai + Cowork trên 2 tab — cả hai đều đăng nhập sẵn
- [ ] Đơn hàng Google Vietnam trên clipboard (dùng lại từ S1)
- [ ] Task brief 4 phần chuẩn bị sẵn trên slide (mục tiêu / bối cảnh / các bước / tiêu chí)
- [ ] Decision matrix (Chat vs Agent vs No AI) trên slide
- [ ] Video backup demo Chat vs Agent (quay trước) — phòng Cowork lỗi live
- [ ] 4 Zoom polls pre-configured
- [ ] Worksheet workflow mapping (gửi link cho học viên đầu Block C)
- [ ] Template brief 4 phần trên handout — gửi trước qua email hoặc chat đầu buổi

---

## Zoom Polls

**Poll #1** (0:05): "Khi dùng AI, bạn thường gửi bao nhiêu tin nhắn cho 1 tác vụ?" — 1 / 2-5 / 6-10 / >10

**Poll #2** (0:20): "Bạn muốn dùng cách nào?" — Chat từng bước / Agent tự động / Tùy tình huống

**Poll #3** (0:52): "Phần nào của task brief khó viết nhất?" — Mục tiêu / Bối cảnh / Các bước / Tiêu chí thành công

**Poll #4** (1:10): "Brief v2 (sau iteration) có tốt hơn v1 không?" — Tốt hơn nhiều / Tốt hơn chút / Giống / Tệ hơn

---

## Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Retrieval warm-up** | *"KHÔNG mở ghi chú. Gõ vào chat: 3 thứ bạn nhớ từ buổi trước."* (Retrieval practice — kéo từ trí nhớ.) Đọc 3 câu, bổ sung nếu thiếu. *"Ai đã tạo Brief Library 5 brief?"* → Reactions. | Retrieval practice (Dr. Agarwal): kéo ra từ trí nhớ trước khi review. |
| 0:05–0:07 | **Poll #1** | Launch poll. *"Con số này sẽ thay đổi hôm nay."* | Đo baseline cách dùng AI hiện tại. |
| 0:07–0:20 | **Demo so sánh Chat vs Agent — cùng tác vụ** | **Cách 1 — Chat (~5 phút live):** Claude.ai: gửi đơn hàng → AI hỏi lại → trả lời → yêu cầu format → sửa VAT → copy vào Word. 5 tin nhắn, ~8 phút. **Cách 2 — Agent (~2 phút live):** Đọc task brief 4 phần (slide). Gửi 1 lần cho Cowork. Agent tự lập kế hoạch → thực thi → tạo file. *"Chat = nhắn tin từng dòng. Agent = giao brief dự án để họ tự quản lý."* | Khoảnh khắc chuyển giao tâm lý QUAN TRỌNG NHẤT khóa. Video backup nếu Cowork lỗi. |
| 0:20–0:22 | **Poll #2** | Launch poll. *"Câu trả lời đúng: 'Tùy tình huống.' Hôm nay bạn sẽ biết KHI NÀO chọn cái nào."* | |
| 0:22–0:28 | **3-Question Delegation Framework** | Trước mỗi task, hỏi 3 câu: **(1) "Done" trông thế nào?** (2) **Claude không suy ra được gì?** (3) **Ràng buộc gì?** Demo: áp dụng 3 câu vào brief contract-agent. **Decision matrix:** Chat (sáng tạo, 1 lần, khám phá) / Agent (lặp lại, nhiều bước, cần file) / Không AI (quyết định nhạy cảm, dữ liệu mật). | Slide 1-6. 3-Question Framework = framework chính S2, lặp lại nhiều lần. |
| 0:28–0:31 | **Task brief 4 phần** | (1) Mục tiêu: AI tạo ra gì? (2) Bối cảnh: thông tin AI cần. (3) Các bước: ít nhất 3 bước thứ tự. (4) Tiêu chí thành công: "đạt chuẩn trông thế nào?" *"6 thành phần S1 → mở rộng thành brief 4 phần. Cùng tư duy, quy mô lớn hơn."* | Slide 7-8. Show brief mẫu song song với demo. |
| 0:31–0:33 | **Sub-agent orchestration — sneak peek** | *"50 bản ghi cuộc họp cần tóm tắt — 1 brief, Cowork chia 50 file cho sub-agent chạy song song. 4 phút thay vì 30 phút."* Demo nhanh (video/screenshot). | Chỉ 2 phút — tạo anticipation, không đi sâu. |
| 0:33–0:35 | **Chat activity** | *"Tác vụ nào trong công việc bạn lặp lại mỗi tuần, mất >30 phút, có nhiều bước?"* → Chat. Chọn 2-3, áp dụng decision matrix. | Thu thập tác vụ thực tế cho Block C. |

**Script mở đầu Session 2:**

> *"Chào mọi người! Không mở ghi chú. Gõ vào chat ngay: 3 thứ bạn nhớ từ buổi trước."*
> [Đợi 30s, đọc 3 câu]
> *"Tốt. Hôm nay câu hỏi khác: Tại sao bạn phải gửi 5 tin nhắn cho AI khi chỉ cần gửi 1?"*

**Transition Block A → Break 1:**

> *"5 phút nghỉ. Khi quay lại: bạn tự viết task brief đầu tiên trên Cowork."*

---

## Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:48 | **Bài tập 1: Viết Task Brief đầu tiên** | Dùng hợp đồng HOẶC tác vụ từ Brief Library. Áp dụng 3-Question Framework: (1) Done = gì? (2) Context thiếu gì? (3) Ràng buộc? → Viết brief 4 phần. Gửi Cowork. Đọc output. | Template brief 4 phần (handout). |
| 0:48–0:52 | **Chat share** | *"Đánh giá kết quả agent 1-5 sao + 1 câu nhận xét."* Chọn 3 (cao/thấp/trung), hỏi brief khác nhau thế nào. | |
| 0:52–0:57 | **Poll #3 + Discussion** | Launch poll. *"Tại sao 'Tiêu chí thành công' khó nhất? Vì chúng ta ít khi define done cho chính mình."* | Insight quan trọng — dẫn vào iteration. |
| 0:57–1:07 | **Bài tập 2: Iteration loop — refine brief** | Đọc output Bài tập 1. Xác định 2 điểm chưa đạt tiêu chí. Sửa brief: thêm context, cụ thể hóa bước, thắt tiêu chí. Gửi lại. So sánh before/after. *"Nhân viên mới lần đầu chưa hoàn hảo — phản hồi, họ cải thiện."* | BÀI TẬP QUAN TRỌNG NHẤT S2 — xây muscle memory iteration. |
| 1:07–1:10 | **Structured output demo nhanh** | Facilitator live: thêm *"Output phải có bảng 3 cột: Điều khoản | Nội dung | Lý do."* → Agent tạo bảng đúng format. *"Brief rõ format → AI tuân theo 95%."* | 3 phút, facilitator làm live, không phải bài tập. |
| 1:10–1:15 | **Poll #4** | *"Iteration là kỹ năng quan trọng nhất — mọi AI workflow cải thiện qua refine."* | |

**During Activity — Hành động facilitator:**
- Phút 42: *"Ai đang viết brief? Ai đã gửi cho Cowork?"*
- Phút 45: *"Ai đã đọc output? Đánh giá 1-5 sao trong đầu."*
- Phút 59: *"Đọc output Bài tập 1. Tìm 2 điểm chưa đạt. Sửa brief ngay."*
- Phút 1:03: *"Đã gửi brief v2 chưa? So sánh v1 vs v2 — cụ thể cải thiện ở đâu?"*
- Nếu học viên không biết cải thiện gì: *"Thêm 1 ví dụ output mong muốn"* hoặc *"Cụ thể hóa tiêu chí: thay 'viết tốt' thành 'dưới 500 từ, có heading mỗi điều khoản'."*

**Early Finisher Tasks:** Viết brief thứ 2 cho tác vụ khác từ Brief Library. Hoặc thử thêm structured output format vào brief.

---

## Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:37 | **Bài tập 3: Workflow Mapping — 5 bước** | **B1 (3 phút):** Liệt kê 5 tác vụ lặp lại hàng tuần. **B2 (3 phút):** Phân loại: Chat / Agent / Không AI (decision matrix). **B3 (5 phút):** Chọn 1 "Agent phù hợp" → 3-Question → brief 4 phần. **B4 (4 phút):** Gửi Cowork, đánh giá. **B5 (2 phút):** Ghi: trước bao phút thủ công? Agent bao phút? | Worksheet workflow mapping share link đầu Block C. |
| 1:37–1:45 | **Showcase: 3 người** | Trình bày workflow mapping + brief. Lớp: *"Brief này đủ rõ để agent thực thi không cần hỏi lại?"* → Yes/No + 1 cải thiện. | Feedback cụ thể — không chỉ "tốt". |
| 1:45–1:50 | **Q&A** | Ưu tiên: "Agent an toàn không?" / "Chi phí Cowork?" / "Agent giới hạn gì?" / "Khi nào KHÔNG nên dùng agent?" | |

**Script chuyển Block B → C:**

> *"Bạn vừa brief agent cho kịch bản hợp đồng. Bây giờ: nhìn lại CÔNG VIỆC THẬT. Tác vụ nào bạn lặp lại mỗi tuần? Tác vụ nào mất nhiều thời gian nhất? Tác vụ nào có nhiều bước? Workflow Mapping giúp bạn quyết định: cái nào giao cho agent, cái nào giữ lại."*

---

## Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Homework (25 phút)** | Chạy 2 tác vụ thực tế trên Cowork (từ workflow mapping). Mỗi tác vụ ghi: (1) Brief gửi. (2) Kết quả. (3) Iteration v1→v2. (4) Thời gian tiết kiệm. Mang đến S3. | |
| 1:55–2:00 | **3 takeaway + Preview S3** | (1) Agent = ủy quyền thông minh. (2) 3-Question Framework trước mỗi task. (3) Brief 4 phần = brief chuyên nghiệp. *"Buổi tới: TẠI SAO contract-agent hoạt động tốt — context engineering, cách thông tin chảy qua AI — và cài Claude Code để chạy agent THỰC SỰ trên máy."* | |

**Script chuyển S2 → S3:**

> *"Hôm nay bạn brief agent qua Cowork. Nhưng tại sao contract-agent biết đọc đơn hàng, biết tính VAT, biết format hợp đồng? Vì ai đó đã viết CLAUDE.md — sổ tay hướng dẫn AI. Buổi tới: bạn sẽ mở sổ tay đó, hiểu cấu trúc, và bắt đầu viết cho chính mình."*

---

## Troubleshooting (5 Kịch Bản)

**1. Demo Chat vs Agent không rõ khác biệt (kết quả giống nhau)**
- *Xử lý:* Nhấn vào thời gian + mental load: *"Kết quả có thể tương tự — nhưng chat mất 5 tin nhắn, agent mất 1 brief. Khi bạn làm 10 task/ngày, sự khác biệt là 50 tin nhắn vs 10 brief."*

**2. Cowork tải chậm hoặc lỗi giữa bài tập**
- *Xử lý:* Chuyển Claude.ai tạm. Brief 4 phần vẫn paste được vào chat. *"Tư duy brief 4 phần không thay đổi — tool nào cũng áp dụng."*

**3. Học viên viết brief quá ngắn (1-2 câu)**
- *Xử lý:* *"Dùng 3-Question Framework: Done trông thế nào? Context gì thiếu? Ràng buộc gì? Mỗi câu trả lời = 1 phần brief."*

**4. Học viên phân loại sai Chat vs Agent (giao task sáng tạo cho agent)**
- *Xử lý:* *"Agent tốt cho tác vụ có đầu ra rõ ràng. Brainstorming, khám phá ý tưởng → chat tốt hơn vì bạn muốn tương tác qua lại."*

**5. Học viên không thấy cải thiện sau iteration (v2 không tốt hơn v1)**
- *Xử lý:* *"Iteration không chỉ là sửa từ — sửa CẤU TRÚC brief. Thêm bước cụ thể? Thêm ví dụ output? Thêm ràng buộc? Thay đổi 1 trong 4 phần, không chỉ chỉnh chữ."*

---

## FAQ Dự Kiến (5 Câu)

**Q1: "Agent có tự động gửi email/thực hiện hành động không?"**
A: Không — agent tạo output, BẠN quyết định dùng. Agent không tự gửi email, không tự truy cập hệ thống. Bạn vẫn là sếp.

**Q2: "Brief 4 phần có dài quá không? Mất thời gian viết?"**
A: Lần đầu mất 5-10 phút. Nhưng brief đó tái sử dụng cho mỗi tác vụ tương tự. Viết 1 lần, dùng 100 lần.

**Q3: "Chi phí Cowork thế nào?"**
A: Cowork có gói miễn phí giới hạn. Gói Pro có token nhiều hơn. Check pricing mới nhất trên trang Cowork.

**Q4: "Agent có xử lý được file Excel/PDF không?"**
A: Cowork đọc được nhiều loại file. PDF text-based tốt. Excel chuyển CSV tốt hơn. File scan/ảnh cần OCR trước.

**Q5: "Có thể chạy agent cho nhiều file cùng lúc không?"**
A: Có — sub-agent orchestration. Cowork chia task cho nhiều agent song song. Demo ở phút 0:31 là ví dụ.

---

## Energy Management — Session 2

- **S2 = buổi "chuyển giao tư duy"** — từ chat → agent. Cần nhiều demo trực quan
- Block A mở bằng retrieval (kéo năng lượng từ S1) — không phải lecture mới
- Demo Chat vs Agent (0:07-0:20) là khoảnh khắc high-energy — giữ pace nhanh, không giải thích dài
- Block B: iteration loop (0:57-1:07) có thể gây frustration — normalize: *"Brief lần đầu chưa bao giờ hoàn hảo. Đó là bình thường."*
- Break 2 (1:15): *"Đứng dậy, vận động. Lúc quay lại: Workflow Mapping cho việc THẬT."*
- Nếu lớp mệt sau Block B → rút showcase xuống 2 người

---

## Technical Notes — Zoom

- **2 tab mở sẵn:** Claude.ai (chat demo) + Cowork (agent demo) — chuyển qua lại khi so sánh
- **Font:** 125-150% trên cả 2 tab
- **Share screen:** Share cả 2 tab lần lượt — chỉ tab đang dùng
- **Video backup:** Nếu Cowork lỗi live → play video đã quay trước, narrate theo
- **Trợ giảng:** Hỗ trợ chat + theo dõi poll kết quả + ghi lại câu hỏi chưa trả lời
