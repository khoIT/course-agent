# Hướng Dẫn Giảng Viên v2 — Session 4: Thiết Kế Skill Đầu Tiên (Skill Design)

> **Terminal Objective:** Phân tích workflow thành skill, viết SKILL.md 6 phần, kết nối MCP filesystem tool.
>
> **Công cụ:** Claude Code + MCP filesystem
> **Thời lượng:** 2 giờ (120 phút)
> **Mental model:** "Sổ tay nhân viên" (CLAUDE.md) → "Quy trình chuyên biệt tái sử dụng" (SKILL.md)

---

## Pre-Session Checklist (Trước 15 Phút)

- [ ] Claude Code hoạt động, test `claude` command
- [ ] SKILL.md contract-agent mở sẵn — phóng to font 150%
- [ ] CLAUDE.md contract-agent mở sẵn (để so sánh song song)
- [ ] MCP filesystem đã kết nối trên máy facilitator — test đọc file
- [ ] 3 ví dụ agentic workflow trên slide (HR Onboarding, Expense Audit, Content Writing)
- [ ] Template SKILL.md 6 phần trên handout
- [ ] Step-by-step MCP filesystem guide trên slide
- [ ] 2 SKILL.md mẫu (tốt vs kém) chuẩn bị sẵn cho demo
- [ ] 4 Zoom polls pre-configured
- [ ] Dự phòng: nếu MCP lỗi → test SKILL.md bằng paste input thủ công

---

## Zoom Polls

**Poll #1** (0:05): "CLAUDE.md của bạn có bao nhiêu phần?" — Chưa có / 1-2 / 3 WHY-WHAT-HOW / Đầy đủ + ví dụ

**Poll #2** (0:55): "Bạn đang ở đâu?" — Đang viết / Viết xong, chuẩn bị test / Test rồi, đang sửa / Gặp khó, cần giúp

**Poll #3** (1:08): "MCP filesystem hoạt động?" — Có, đọc file ok / Có nhưng partial / Lỗi / Chưa thử

**Poll #4** (1:35): "SKILL.md v3 (sau iterate) tốt hơn v1 bao nhiêu?" — Tốt hơn nhiều / Tốt hơn chút / Giống / Chưa so sánh được

---

## Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Retrieval warm-up** | *"Gõ chat: 4 chiến lược context engineering là gì?"* (Write/Select/Compress/Isolate.) Homework debrief: *"AI có khác khi có CLAUDE.md?"* → 2-3 người chia sẻ so sánh CÓ/KHÔNG. | Retrieval practice trước khi review. |
| 0:05–0:07 | **Poll #1** | Launch poll. *"Nhóm 'Chưa có' — hôm nay bạn sẽ có cả SKILL.md, nâng cao hơn CLAUDE.md."* | Đo homework completion. |
| 0:07–0:18 | **SKILL.md anatomy — từ CLAUDE.md → Skill** | *"CLAUDE.md = sổ tay chung. SKILL.md = quy trình chuyên biệt cho 1 loại tác vụ cụ thể."* So sánh song song: CLAUDE.md (chung) vs SKILL.md (cụ thể cho hợp đồng). **6 phần:** (1) **Purpose** — giải quyết vấn đề gì? (2) **Context** — AI cần biết gì trước? (3) **Input** — nhận dữ liệu gì, từ đâu? (4) **Steps** — các bước thứ tự rõ ràng. (5) **Examples** — mẫu output (few-shot cấp skill). (6) **Constraints** — không làm gì, giới hạn, tiêu chí. Demo: chạy SKILL.md trên Claude Code, show output. | Slide 1-8. Frame: "Steps = CoT cấp hệ thống. Examples = few-shot cấp skill. Constraints = structured output." |
| 0:18–0:25 | **Workflow Decomposition — 4 bước** | (1) Liệt kê TẤT CẢ bước quy trình hiện tại. (2) Xác định input/output mỗi bước. (3) Đánh dấu bước AI làm được. (4) Loại bỏ bước AI CHƯA làm được. Demo: "soạn báo cáo phân tích đối thủ" → 6 bước → 4 AI → 2 con người. | Slide 9-11. Workflow decomposition = kỹ năng mới S4. |
| 0:25–0:30 | **3 ví dụ agentic workflow** | **(1) HR Onboarding:** job desc + handbook → personalized welcome guide. **(2) Expense Audit:** receipts + policy → audit report. **(3) Content Writing:** brief + outline → polished draft + SEO. *"3 workflow khác nhau, cùng cấu trúc SKILL.md: input → steps → output + constraints."* | Slide 12-14. Chọn ví dụ relevant: HR→managers, Expense→finance, Content→marketers. |
| 0:30–0:33 | **3 lỗi thường gặp SKILL.md** | (1) **Quá chung chung** — thiếu ví dụ ("viết báo cáo" vs "viết báo cáo 3 phần: tóm tắt 2 câu, phân tích 5 bullets, đề xuất 3 hành động"). (2) **Quá cứng nhắc** — micro-manage từng chữ. (3) **Thiếu tiêu chí** — AI không biết "đủ tốt" = gì. | Slide 15-16. |
| 0:33–0:35 | **MCP = "ổ cắm điện chuẩn quốc tế"** | *"Laptop nào cũng cắm được. MCP: tool nào cũng kết nối AI."* Demo: filesystem MCP → Claude Code đọc file .md trực tiếp, không copy-paste. | 2 phút — đủ thấy value. Chi tiết Block B. |

**Script mở đầu Session 4:**

> *"Chào! Gõ chat ngay: 4 chiến lược context engineering?"*
> [Đợi 30s] *"Write, Select, Compress, Isolate. Hôm nay bạn sẽ dùng tất cả — viết SKILL.md = quy trình AI tái sử dụng. CLAUDE.md nói AI LÀ AI. SKILL.md nói AI LÀM GÌ CỤ THỂ."*

**Transition Block A → Break 1:**

> *"5 phút nghỉ. Khi quay lại: bạn viết SKILL.md cho workflow cá nhân — rồi kết nối MCP để AI đọc file thật."*

---

## Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:55 | **Bài tập 1: Viết SKILL.md — 5 bước** | Dùng tác vụ từ homework S3. **B1 (3 phút):** Workflow Decomposition — liệt kê bước, đánh dấu AI làm được. **B2 (4 phút):** Viết Purpose + Context + Input. **B3 (4 phút):** Viết Steps (ít nhất 4 bước). **B4 (2 phút):** Viết 1 Example output (few-shot). **B5 (2 phút):** Viết Constraints + tiêu chí chất lượng. | Template SKILL.md (handout). |
| 0:55–1:00 | **Poll #2 — Checkpoint** | Launch poll. Nhóm "Gặp khó" → facilitator hỗ trợ trước. Nhóm "Xong" giúp "Đang viết" (peer mentoring). | Phân nhóm hỗ trợ. |
| 1:00–1:08 | **Bài tập 2: Kết nối MCP + Test** | (1) Kết nối filesystem MCP (step-by-step slide). (2) Chạy SKILL.md — cho AI đọc file input qua MCP. (3) Đánh giá output theo tiêu chí trong SKILL.md. *Nếu MCP lỗi: paste input thủ công, vẫn test.* | Step-by-step MCP guide. |
| 1:08–1:12 | **Poll #3** | Launch poll. Nhóm "Lỗi" → facilitator hỗ trợ cụ thể. | |
| 1:12–1:15 | **Chat share** | *"Mô tả SKILL.md 1 câu: 'Skill này giúp [ai] làm [gì] bằng cách [cách nào].'"* Chọn 2-3 câu thú vị. | |

**During Activity — Hành động facilitator:**
- Phút 42: *"Bắt đầu B1: liệt kê TẤT CẢ bước quy trình hiện tại."*
- Phút 45: *"Đánh dấu bước AI làm được. Bước nào CẦN con người?"*
- Phút 49: *"Ai đang viết Steps? Ít nhất 4 bước, thứ tự rõ ràng."*
- Phút 53: *"Ai cần ví dụ? Nhìn contract-agent SKILL.md làm mẫu."*
- Phút 1:02: *"MCP filesystem: ai đã kết nối? Ai cần hỗ trợ?"*
- Nếu stuck ở Steps: *"Bạn làm gì đầu tiên khi nhận tác vụ này? Tiếp theo? Cuối cùng?"*

**Early Finisher Tasks:** Viết Example thứ 2 (input/output khác) → hoặc thêm edge case vào Constraints → hoặc test SKILL.md với input thứ 2.

---

## Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:35 | **Bài tập 3: SKILL.md nâng cao — iterate** | (1) Chạy SKILL.md lần 2 với input khác. (2) Đánh giá: output consistent? Tiêu chí đạt? (3) Sửa: thêm ví dụ 2, cụ thể constraints, edge case. (4) Chạy lần 3, so sánh v1 vs v3. *"Skill tốt = skill đã qua 3+ vòng iterate."* | Iteration = kỹ năng cốt lõi — lặp lại từ S2. |
| 1:35–1:45 | **Showcase: 2-3 người** | Chia sẻ SKILL.md + output. Lớp: *"Phần nào đặc biệt hiệu quả? Thiếu gì?"* Facilitator nhận xét cụ thể. | |
| 1:45–1:50 | **Q&A** | Ưu tiên: "MCP tool nào hữu ích?" / "Bảo mật khi AI đọc file?" / "Bao nhiêu bước tối ưu?" | |

**Script chuyển Block B → C:**

> *"Bạn đã viết SKILL.md v1 và test. Bây giờ: iterate. Skill tốt KHÔNG BAO GIỜ hoàn hảo lần đầu. Chạy lại với input khác, tìm lỗ hổng, sửa, chạy lại. 3 vòng minimum."*

---

## Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Homework (30 phút)** | (1) Hoàn thiện SKILL.md 6 phần (ít nhất 2 ví dụ output). (2) Test 2 input khác nhau — confirm consistent. (3) Iterate 1+ lần. (4) Chuẩn bị trình bày 3 phút: Vấn đề → Demo → Kết quả. Mang SKILL.md hoàn chỉnh đến S5. | Template SKILL.md gửi chat. |
| 1:55–2:00 | **3 takeaway + Preview S5** | (1) SKILL.md = quy trình tái sử dụng, không phải chat 1 lần. (2) 6 phần: Purpose/Context/Input/Steps/Examples/Constraints. (3) Iterate ≥3 vòng = skill stable. *"Buổi cuối: hoàn thiện, test chuyên sâu, trình bày 3 phút trước lớp. Skill tốt nhất được vote!"* | |

**Script chuyển S4 → S5:**

> *"Bạn đã thiết kế SKILL.md — quy trình AI tái sử dụng. Buổi cuối: bạn hoàn thiện, test đến khi stable, và trình bày 3 phút trước lớp — live demo trên máy. Skill tốt nhất sẽ được đồng nghiệp vote. Chuẩn bị demo chạy trơn tru!"*

---

## Troubleshooting (5 Kịch Bản)

**1. MCP filesystem không kết nối được**
- *Xử lý:* Không dừng lớp. *"Paste input thủ công vào Claude Code — SKILL.md vẫn hoạt động. MCP chỉ là cách thuận tiện hơn."* Gửi troubleshoot guide sau buổi.

**2. SKILL.md chạy nhưng output không match ví dụ (Examples)**
- *Xử lý:* *"Examples cần CỤ THỂ hơn. Thay vì 'viết báo cáo ngắn gọn', show MẪU báo cáo thật: heading, 3 bullets, kết luận 1 câu. AI cần thấy FORMAT, không chỉ mô tả."*

**3. Học viên viết Steps quá ít (1-2 bước)**
- *Xử lý:* *"Quay lại Workflow Decomposition. Bước 1 thật sự chỉ 1 hành động? Hay nó gồm: đọc file → trích xuất key info → tổng hợp? Chia nhỏ hơn."*

**4. Học viên không phân biệt được CLAUDE.md vs SKILL.md**
- *Xử lý:* *"CLAUDE.md = ai bạn là, quy tắc chung. SKILL.md = LÀM GÌ cụ thể, input nào, output nào, bước nào. Nhân viên mới: CLAUDE.md = onboarding handbook. SKILL.md = SOP cho 1 loại task."*

**5. Claude Code timeout khi chạy SKILL.md phức tạp**
- *Xử lý:* *"SKILL.md quá nhiều bước? Compress: gộp bước liên quan. Hoặc Isolate: chia thành 2 skill nhỏ hơn. 4-6 bước là sweet spot."*

---

## FAQ Dự Kiến (5 Câu)

**Q1: "SKILL.md bao nhiêu bước là tối ưu?"**
A: 4-6 bước. Ít hơn → AI đoán mò. Nhiều hơn 8 → quá cứng nhắc. Mỗi bước = 1 hành động rõ ràng.

**Q2: "MCP tool nào nên kết nối ngoài filesystem?"**
A: Filesystem là nền tảng. Nâng cao: browser (đọc web), GitHub, Google Drive. Nhưng filesystem đủ cho 80% use case.

**Q3: "Có thể share SKILL.md cho đồng nghiệp dùng không?"**
A: Có — đó chính xác là mục đích. SKILL.md = tài sản team. 1 người viết, cả team dùng. Đặt trong shared folder, ai cũng chạy được.

**Q4: "SKILL.md có thể gọi SKILL.md khác không?"**
A: Có — multi-skill stacking. VD: SKILL "phân tích đối thủ" + SKILL "viết báo cáo" = pipeline. Giới thiệu thêm S5.

**Q5: "Khi nào viết SKILL.md vs khi nào dùng brief 1 lần?"**
A: Nếu tác vụ lặp lại ≥3 lần/tháng VÀ có input/output rõ ràng → SKILL.md. Tác vụ 1 lần, sáng tạo, khám phá → brief hoặc chat.

---

## Energy Management — Session 4

- **S4 = chuyển từ "dùng AI" sang "thiết kế AI"** — empowerment cao, nhưng cognitive load nặng
- Block A: SKILL.md anatomy engaging vì so sánh cụ thể (CLAUDE.md vs SKILL.md)
- Block B: Workflow Decomposition + viết SKILL.md — nhiều bước. Chia nhỏ timing, checkpoint poll giữa bài
- MCP setup (1:00-1:08) có rủi ro frustration kỹ thuật — giữ fallback (paste thủ công) luôn sẵn
- Break 2 (1:15): *"Phần kỹ thuật xong. Block C: iterate — sáng tạo, không setup."*
- Block C: iterate 3 vòng — productive struggle. Normalize: *"Skill lần đầu LUÔN cần sửa. Đó là quy trình, không phải thất bại."*
- Nếu thời gian eo hẹp → cắt MCP setup, giữ SKILL.md viết + test thủ công

---

## Technical Notes — Zoom

- **Split screen:** CLAUDE.md vs SKILL.md song song khi giải thích anatomy
- **Font:** Terminal 18-20pt, slide 150%
- **MCP guide:** Step-by-step trên slide — mỗi bước 1 slide, ảnh chụp màn hình
- **Trợ giảng:** Hỗ trợ MCP setup chat — facilitator không dừng flow
- **Nếu MCP lỗi toàn lớp:** Bỏ MCP, focus SKILL.md viết + test thủ công. MCP = homework
- **Share screen:** Khi demo 3 workflow examples → dùng workflow diagram slide, không chỉ text
