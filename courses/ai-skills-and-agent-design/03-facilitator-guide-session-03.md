# Hướng Dẫn Giảng Viên v2 — Session 3: Context Engineering + Claude Code

> **Terminal Objective:** Cài Claude Code thành công, chạy contract-agent tạo file hợp đồng output, viết CLAUDE.md 4 phần cho 1 tác vụ cá nhân và chứng minh output có/không có CLAUDE.md khác nhau.
>
> **Cầu nối từ S2:** Mở đầu buổi bằng: "Buổi trước bạn viết brief 1 lần cho 1 việc. Nhưng tuần sau cùng việc đó, lại brief lại. Nếu bạn brief 1 lần và AI nhớ mãi? Đó là CLAUDE.md — sổ tay nhân viên, viết 1 lần dùng mọi phiên."
>
> **Công cụ:** Claude Code (chính), Claude Cowork (backup)
> **Thời lượng:** 2 giờ (120 phút)
> **Mental model:** "Brief 1 việc" → "Thiết kế sổ tay nhân viên để AI làm tốt MỌI việc"

---

## Pre-Session Checklist (Trước 20 Phút)

- [ ] Test contract-agent trên máy facilitator — chạy đầy đủ, output đúng
- [ ] Contract-agent folder đã zip, upload lên Google Drive/OneDrive — test link download
- [ ] Claude Code đã cài, `claude` command hoạt động
- [ ] Mở terminal — font 18-20pt, zoom 150%
- [ ] CLAUDE.md contract-agent mở sẵn — phóng to để đọc qua Zoom
- [ ] File `prompt.md` (đơn hàng Google Vietnam) trong thư mục contract-agent
- [ ] Hướng dẫn cài Claude Code (PDF/slide) — đã gửi trước 3 ngày
- [ ] 4 Zoom polls pre-configured
- [ ] Template CLAUDE.md WHY-WHAT-HOW trên handout/slide
- [ ] Dự phòng: nếu Code lỗi → học viên xem demo, làm bài viết CLAUDE.md trên Google Docs

---

## Zoom Polls

**Poll #1** (0:05): "Bạn đã cài Claude Code chưa?" — Cài rồi, test ok / Cài rồi, chưa test / Chưa cài / Không biết cách

**Poll #2** (0:28): "Viết CLAUDE.md, phần nào quan trọng nhất?" — WHY / WHAT / HOW / Cả 3 như nhau

**Poll #3** (1:05): "Kết quả contract-agent?" — Dùng ngay được / Sửa nhỏ / Sửa nhiều / Lỗi không chạy

**Poll #4** (1:35): "CLAUDE.md bản nháp có đủ rõ để agent tự chạy?" — Đủ rõ / Cần thêm context / Cần thêm workflow / Chưa biết

---

## Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Retrieval warm-up** | *"Không mở ghi chú. Gõ chat: 3-Question Framework gồm những câu gì?"* (Retrieval practice.) 1 người chia sẻ brief + kết quả Cowork từ homework. | Kéo từ trí nhớ — không nhìn notes. |
| 0:05–0:07 | **Poll #1 — Setup check** | Launch poll. Đọc kết quả. **Pivot point:** >40% chưa cài → dành 15 phút setup Block B, rút Bài tập 2. >70% đã cài → Block B bắt đầu Bài tập 1 ngay. | Poll này quyết định pace Block B. |
| 0:07–0:17 | **Context Engineering — 4 chiến lược** | Phép so sánh: *"Brief 1 tác vụ → xong. Nhưng muốn AI làm TỐT MỌI tác vụ? Cần SỔ TAY NHÂN VIÊN."* **(1) Write** — lưu thông tin vào file (CLAUDE.md, memory). **(2) Select** — chọn đúng thông tin cho mỗi task. **(3) Compress** — tóm tắt, không nhồi nhét. **(4) Isolate** — chia task phức tạp cho nhiều agent. **Smart Zone:** *"300 từ rõ ràng > 113.000 từ lộn xộn. Checklist 1 trang tốt hơn 200 trang policy."* Demo: Claude Code KHÔNG có CLAUDE.md → generic. CÓ CLAUDE.md → đúng phong cách. | Slide 1-6. Bước nhảy tư duy LỚN NHẤT: từ "brief 1 task" → "thiết kế môi trường AI". |
| 0:17–0:19 | **Chat activity** | *"Nếu viết 'sổ tay nhân viên' cho AI, 3 quy tắc quan trọng nhất là gì?"* → Chat. Tổng hợp. | Thu thập trước khi giải thích anatomy. |
| 0:19–0:28 | **CLAUDE.md anatomy — dissect contract-agent** | Mở CLAUDE.md contract-agent (font lớn). Nhận diện WHY-WHAT-HOW: **WHY** — mục đích: tạo hợp đồng từ đơn hàng. **WHAT** — phạm vi: làm gì (đọc order, fill template), KHÔNG làm gì (không ký, không sửa giá). **HOW** — workflow: bước 1→2→3→4→5. *"Đây chính xác là những gì bạn sẽ tự viết."* **3 anti-patterns:** đừng auto-generate, đừng biến AI thành linter, giữ <300 dòng. | Phóng to từng phần. Dùng annotation highlight. |
| 0:28–0:30 | **Poll #2** | Launch poll. *"Cả 3 quan trọng — nhưng bắt đầu WHY (mục đích rõ), rồi HOW (workflow cụ thể). WHAT bổ sung khi thấy AI làm sai hoặc quá."* | |
| 0:30–0:35 | **Demo: Chạy contract-agent trên Claude Code** | Terminal: cd vào thư mục contract-agent. Chạy Claude Code. Agent đọc CLAUDE.md → đọc template → tạo file output. Mở file cho lớp thấy. *"Đây là điều bạn sẽ tự làm trong Block B."* | Test kỹ trước. Im lặng khi agent chạy — tạo drama. |

**Script mở đầu Session 3:**

> *"Chào! Ai đã chạy 2 tác vụ trên Cowork? React thumbs up."*
> [Đếm] *"Tốt. Hôm nay câu hỏi khác: TẠI SAO contract-agent biết đọc đơn hàng, biết tính VAT, biết format hợp đồng? Vì ai đó đã viết SỔ TAY HƯỚNG DẪN cho nó. Và hôm nay bạn sẽ viết sổ tay đó cho công việc của chính mình."*

**Script giải thích Context Engineering:**

> *"Buổi 1 bạn brief 1 việc. Buổi 2 bạn brief 1 workflow. Bây giờ: làm sao AI hiểu CÁCH BẠN LÀM VIỆC — mọi task?*
> *Context engineering = thiết kế cách thông tin chảy qua AI.*
> *Nhân viên mới vào công ty. Ngày đầu brief 1 việc. Ngày 2 brief khác. Sau 1 tháng, họ có sổ tay — biết quy trình, phong cách, giới hạn. CLAUDE.md = sổ tay đó.*
> *Và bí mật quan trọng: 300 từ rõ ràng > 113.000 từ lộn xộn."*

**Transition Block A → Break 1:**

> *"5 phút nghỉ. Khi quay lại: nếu đã cài Code → chạy contract-agent. Chưa cài → cài ngay trong Block B."*

---

## Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:53 | **Setup Claude Code + chạy contract-agent** | Hướng dẫn từng bước: mở terminal → `claude` → xác nhận → download contract-agent folder (share link chat) → cd vào → test `claude "Bạn là ai?"`. Giải quyết lỗi chat + TA 1-1. | Khi 70% ok → chuyển Bài tập 1. Chưa xong → xem theo. |
| 0:53–1:05 | **Bài tập 1: Chạy contract-agent** | Chạy với file đơn hàng mẫu. Đợi output (1-2 phút). Mở file hợp đồng. Đánh giá: (1) Thông tin chính xác? (2) Format đúng template? (3) Dùng ngay được? **Early finishers:** Đọc CLAUDE.md, nhận diện phần nào dẫn đến output tốt/chưa tốt. | Lỗi phổ biến: sai đường dẫn thư mục. Nhắc: terminal PHẢI ở TRONG folder contract-agent. |
| 1:05–1:08 | **Poll #3** | Launch poll. Nhóm "Lỗi" → *"Paste lỗi vào chat."* Xử lý nhanh 2-3 lỗi phổ biến. Nhóm "Dùng ngay" → *"Sang Bài tập 2."* | Ưu tiên hỗ trợ nhóm lỗi — blocker thực sự. |
| 1:08–1:15 | **Bài tập 2: Đổi đơn hàng, chạy lại** | Sửa file đơn hàng: thêm dịch vụ (VD: "Tư vấn SEO: 8tr"), đổi tên khách. Chạy lại. Kiểm tra output cập nhật đúng. *"Agent xử lý input khác nhau giống nhau — vì CLAUDE.md hướng dẫn QUY TRÌNH, không phải từng case."* | Chứng minh agent đọc input thật, không hardcode. |

**During Activity — Hành động facilitator:**
- Phút 42: *"Ai đang download folder? Ai đã cd vào rồi?"*
- Phút 48: *"Ai đã chạy claude command? Thấy gì trên terminal?"*
- Phút 55: *"Ai đã mở file output? Đang đánh giá gì?"*
- Phút 1:00: *"1 phút nữa — screenshot lỗi nếu chưa chạy được."*
- Phút 1:10: *"Đã sửa đơn hàng chưa? Thêm 1 dịch vụ mới. Chạy lại."*

**Early Finisher Tasks:** Đọc CLAUDE.md chi tiết → ghi 3 phần quan trọng nhất → hoặc thử sửa 1 rule trong CLAUDE.md, chạy lại xem output thay đổi.

---

## Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:37 | **Bài tập 3: Phác thảo CLAUDE.md cá nhân — 5 bước** | Dùng template WHY-WHAT-HOW. **B1 (3 phút):** Chọn tác vụ lặp lại (từ workflow mapping S2). Viết WHY: "Agent này tồn tại để ___." **B2 (4 phút):** Viết WHAT: 3 việc AI làm, 2 việc KHÔNG làm. **B3 (5 phút):** Viết HOW: 4-5 bước workflow thứ tự. **B4 (3 phút):** Thêm 1 ví dụ output (few-shot). **B5 (2 phút):** Lưu CLAUDE.md. Test với Code (hoặc docs nếu chưa cài). | Phần HOW (workflow) khó nhất — gợi ý: "Làm gì đầu tiên? Tiếp theo? Bước cuối?" |
| 1:37–1:45 | **Showcase: 2-3 người** | Chia sẻ bản nháp CLAUDE.md. Lớp: *"Workflow đủ rõ để AI tự làm chưa? Thiếu context gì?"* Facilitator nhận xét cụ thể: điểm mạnh + 1 cải thiện. | Feedback phải cụ thể: CÁI GÌ tốt, CÁI GÌ thiếu. |
| 1:45–1:50 | **Q&A** | Ưu tiên: "AI đọc file máy thế nào?" → *"Filesystem MCP — cài buổi sau."* / "Hỗ trợ file gì?" → *".md, .txt tốt nhất."* / "Bảo mật?" → *"Claude Code chạy local."* | |

**Script chuyển Block B → C:**

> *"Bạn vừa chạy contract-agent — agent của NGƯỜI KHÁC. Bây giờ: viết CLAUDE.md cho agent của BẠN. Tác vụ nào bạn lặp lại mỗi tuần? Đó là agent đầu tiên của bạn."*

---

## Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Homework (25 phút)** | (1) Hoàn thiện CLAUDE.md (WHY-WHAT-HOW + ví dụ). (2) Test: chạy CÓ CLAUDE.md vs KHÔNG CÓ, ghi 3 khác biệt. (3) Liệt kê input→output→bước cho 1 quy trình → SKILL.md sơ bộ. Mang đến S4. | Gửi template CLAUDE.md + SKILL.md qua chat. |
| 1:55–2:00 | **3 takeaway + Preview S4** | (1) CLAUDE.md = sổ tay AI, không phải prompt. (2) WHY-WHAT-HOW = 3 phần cốt lõi. (3) Context engineering = thiết kế 1 lần, AI hiểu mãi. *"Buổi tới: SKILL.md — quy trình tái sử dụng. Và MCP tool để AI đọc file trực tiếp từ máy."* | |

**Script chuyển S3 → S4:**

> *"Bạn vừa viết CLAUDE.md — sổ tay cho AI. Nhưng sổ tay là hướng dẫn CHUNG. Nếu bạn muốn AI thực hiện 1 QUY TRÌNH CỤ THỂ — từ input → process → output — đó là SKILL.md. Buổi tới: bạn sẽ nâng cấp từ sổ tay → quy trình chuyên biệt."*

---

## Troubleshooting (5 Kịch Bản)

**1. Claude Code không cài được (lỗi permission, PATH, OS)**
- *Xử lý:* Không dừng lớp. *"Theo dõi demo trước — sau buổi tôi gửi troubleshoot 1-1."* Học viên vẫn làm Bài tập 3 (viết CLAUDE.md trên text editor).

**2. Contract-agent chạy nhưng output sai (VAT sai, thiếu thông tin)**
- *Xử lý:* Teachable moment: *"Đây chính xác là lý do CLAUDE.md có Quy tắc. Quy tắc đó có đủ rõ chưa? Cần thêm ví dụ tính toán cụ thể."*

**3. >30% học viên gặp lỗi cùng lúc Block B**
- *Xử lý:* Tạm dừng. *"Nhiều người cùng lỗi — để tôi fix chung."* Screen share demo fix. Lỗi phổ biến: sai thư mục (cd), file sai format, Code timeout (chạy lại).

**4. Học viên không biết viết CLAUDE.md cho tác vụ nào**
- *Xử lý:* *"Nhìn Workflow Mapping từ S2. Tác vụ 'Agent phù hợp'? Dùng tác vụ đó. Chưa có → tác vụ đơn giản nhất: soạn email phản hồi khách hàng."*

**5. Claude Code chạy nhưng không đọc CLAUDE.md**
- *Xử lý:* Kiểm tra: file tên đúng `CLAUDE.md` (viết hoa)? File ở đúng root thư mục? Claude Code đang ở đúng directory? *"Claude Code tự động đọc CLAUDE.md nếu file nằm trong thư mục hiện tại."*

---

## FAQ Dự Kiến (5 Câu)

**Q1: "Làm sao AI đọc file trên máy tôi?"**
A: Claude Code chạy local trên máy — đọc file trực tiếp. Buổi sau kết nối MCP filesystem để đọc từ nhiều thư mục khác nhau.

**Q2: "Bảo mật khi AI đọc file cá nhân?"**
A: Claude Code chạy trên máy bạn. File không upload lên server trừ nội dung bạn gửi qua prompt. Không dùng file mật (hợp đồng thật, dữ liệu tài chính thật) khi học.

**Q3: "CLAUDE.md dài bao nhiêu là tối ưu?"**
A: <300 dòng. Focused 300 tokens > 113K unfocused. Checklist 1 trang rõ ràng tốt hơn 200 trang policy không ai đọc. Bắt đầu ngắn, thêm dần khi cần.

**Q4: "Có thể có nhiều CLAUDE.md cho nhiều tác vụ không?"**
A: Có — mỗi thư mục dự án có CLAUDE.md riêng. Claude Code đọc CLAUDE.md trong thư mục hiện tại. Nhiều agent = nhiều thư mục = nhiều CLAUDE.md.

**Q5: "CLAUDE.md khác gì prompt dài?"**
A: Prompt = 1 lần dùng, cho 1 task. CLAUDE.md = persistent, cho MỌI task trong thư mục đó. AI đọc CLAUDE.md TỰ ĐỘNG mỗi lần bắt đầu — không cần paste lại.

---

## Energy Management — Session 3

- **S3 = buổi kỹ thuật nặng nhất** — cài đặt + chạy code. Năng lượng có thể thấp do frustration kỹ thuật
- Block A: context engineering concept → high-level, engaging. Giữ energy trước khi vào setup
- Block B (setup): **rủi ro lớn nhất** — nhiều người gặp lỗi cùng lúc. TA hỗ trợ 1-1 qua chat. Không dừng lớp cho 1 người
- Khi 70% ok → tiến tới. 30% còn lại theo dõi + tự cài sau
- Break 2 (1:15): *"Phần khó nhất đã qua. Block C: bạn viết CLAUDE.md — sáng tạo, không code."*
- Block C (viết CLAUDE.md): quay về sáng tạo — năng lượng phục hồi. Không áp lực kỹ thuật
- Nếu setup chiếm quá nhiều thời gian → cắt Bài tập 2, giữ Bài tập 1 + 3

---

## Technical Notes — Zoom

- **Terminal font:** 18-20pt — đọc được qua Zoom share screen
- **Annotation:** Dùng Zoom annotation highlight từng phần CLAUDE.md khi giải thích
- **Contract-agent folder:** Upload Google Drive/Dropbox — share link chat (không email, tránh delay)
- **Trợ giảng:** ƯU TIÊN hỗ trợ cài Claude Code chat — facilitator không dừng demo
- **Nếu 40%+ không cài được Code:** Block B → "follow along" — xem demo, ghi note, tự test sau. Vẫn làm Block C (viết CLAUDE.md) độc lập
- **Ghi lại buổi:** ĐẶC BIỆT quan trọng S3 — nhiều bước kỹ thuật, học viên cần xem lại
