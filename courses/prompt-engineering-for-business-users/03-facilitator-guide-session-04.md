# Hướng Dẫn Giảng Viên — Buổi 4: Context Engineering + Công Cụ MCP

> **Mục tiêu terminal:** Soạn CLAUDE.md tùy chỉnh cho lĩnh vực công việc cá nhân và kết nối ít nhất 1 công cụ MCP trong Claude Code.
>
> **Công cụ:** Claude Code
> **Thời lượng:** 2 giờ (120 phút)
> **Nguyên tắc thiết kế:** Bước nhảy lớn nhất về tư duy — từ "viết prompt" sang "thiết kế môi trường". Dùng nhiều phép so sánh. Contract-agent's CLAUDE.md là case study trung tâm. Học viên phải có CLAUDE.md hoạt động và MCP kết nối thành công trước khi buổi kết thúc.

---

## Chuẩn Bị Kỹ Thuật (Trước Buổi 20 Phút)

- [ ] Claude Code cài sẵn và test — `claude` command hoạt động
- [ ] Demo CLAUDE.md không có: chuẩn bị tác vụ chạy không có CLAUDE.md (kết quả chung chung)
- [ ] Demo CLAUDE.md có: cùng tác vụ chạy với CLAUDE.md contract-agent (kết quả chính xác)
- [ ] Filesystem MCP: đã cài và test trên máy facilitator — biết cách fix lỗi thường gặp
- [ ] Hướng dẫn cài MCP từng bước (PDF/slide) — chuẩn bị sẵn để share link
- [ ] Template CLAUDE.md 4 phần và template SKILL.md 6 phần — gửi cho học viên trước buổi
- [ ] CLAUDE.md contract-agent mở sẵn để show case study
- [ ] 3 Zoom polls pre-configured (xem bên dưới)
- [ ] Slide RPI pattern, Smart Zone explanation

**Tác vụ demo "không có CLAUDE.md":**
```
Tác vụ: "Tóm tắt email này và đề xuất phản hồi."
Kết quả không có CLAUDE.md: tóm tắt chung chung, phản hồi generic, không theo
phong cách công ty, không biết người nhận là ai, không biết tone phù hợp.
```

**Tác vụ demo "có CLAUDE.md":**
```
Cùng tác vụ với CLAUDE.md:
Vai trò: Trợ lý email chuyên nghiệp cho [phòng ban], công ty [X].
Quy tắc: Phản hồi luôn theo tone chuyên nghiệp lịch sự, không vượt quá 150 từ.
Workflow: 1. Tóm tắt nội dung chính email. 2. Xác định loại yêu cầu.
3. Soạn phản hồi phù hợp. 4. Gợi ý bước tiếp theo nếu cần.
→ Kết quả: có cấu trúc, đúng tone, actionable ngay.
```

---

## Zoom Polls (Cấu Hình Sẵn)

**Poll #1** (phút 0:05–0:08):
> "CLAUDE.md bản nháp của bạn hiện có bao nhiêu phần?"
> - Chưa có — chưa làm homework
> - 1–2 phần — mới bắt đầu
> - 3–4 phần — gần hoàn chỉnh
> - Đầy đủ 4+ phần — đã test được

**Poll #2** (phút 0:55–1:00):
> "Kết quả có CLAUDE.md tốt hơn không có bao nhiêu?"
> - Giống nhau — không thấy khác biệt
> - Tốt hơn chút — cải thiện nhỏ
> - Tốt hơn nhiều — rõ rệt
> - Khác hoàn toàn — như 2 AI khác nhau

**Poll #3** (phút 1:10–1:15):
> "MCP filesystem có hoạt động không?"
> - Có, đọc được file bình thường
> - Có nhưng partial — chỉ đọc được 1 số file
> - Không — gặp lỗi (gõ lỗi vào chat)
> - Chưa thử xong

---

## Bảng Thời Gian Chi Tiết

### Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Recap buổi 3** | *"Chào mọi người! Homework buổi 3: ai đã hoàn thiện CLAUDE.md và test với tác vụ thực tế? React thumbs up."* Đếm. Gọi 3 người chia sẻ nhanh: *"AI có hoạt động khác khi có CLAUDE.md không? Khác như thế nào? 1 câu thôi."* Ghi nhanh 3 câu trả lời lên shared screen. *"3 trải nghiệm khác nhau — và đó chính xác là nội dung buổi hôm nay: tại sao CLAUDE.md tạo ra sự khác biệt đó."* | Nếu ít người làm homework → "Không sao. Hôm nay bạn sẽ hoàn thiện và test ngay trong buổi." |
| 0:05–0:08 | **Poll #1** | Launch Poll #1. Đọc kết quả. *"Nhóm 'Chưa có' — không sao, Block B sẽ bắt đầu từ bản nháp buổi 3. Nhóm 'Đầy đủ 4 phần' — hôm nay bạn sẽ nâng lên mức nâng cao."* | Điều chỉnh pace Block B dựa trên kết quả poll. |
| 0:08–0:20 | **Context Engineering là gì — demo + khái niệm** | *"Context Engineering — kỹ thuật ngữ cảnh. Tên nghe phức tạp nhưng ý tưởng đơn giản."* Phép so sánh: *"Bạn có thể nhờ nhân viên mới làm việc theo 2 cách: Cách 1: Ra lệnh từng câu mỗi lần họ cần làm gì. Cách 2: Đưa sổ tay hướng dẫn 1 lần — sau đó họ tự biết làm theo chuẩn của công ty. CLAUDE.md chính là sổ tay đó."* Demo trực tiếp: (1) Chạy tác vụ email KHÔNG có CLAUDE.md. Show kết quả — chung chung. (2) Đặt CLAUDE.md vào thư mục. Chạy cùng tác vụ. Show kết quả — có cấu trúc, đúng tone. *"Cùng 1 tác vụ. Cùng 1 AI. Khác nhau hoàn toàn vì môi trường khác nhau."* Giới thiệu **Smart Zone**: *"AI giữ CLAUDE.md trong vùng nhớ quan trọng nhất — luôn có hiệu lực từ đầu đến cuối, không bị quên như prompt thông thường."* **RPI pattern (Read-Plan-Implement)**: *"AI đọc context → lập kế hoạch → thực thi. CLAUDE.md đảm bảo bước Read luôn có đủ thông tin."* | Slide 1–6. Demo là phần quan trọng nhất Block A. Không giải thích lý thuyết nhiều — show kết quả trước. |
| 0:20–0:22 | **Chat activity** | *"Nếu viết sổ tay cho AI trong công việc của bạn, 3 quy tắc quan trọng nhất là gì? Gõ vào chat — bất kỳ quy tắc nào bạn nghĩ đến."* Chờ 30 giây. Đọc và tổng hợp: *"Tôi thấy 3 nhóm quy tắc: quy tắc về format output, quy tắc về tone, và quy tắc về những gì AI không được tự làm. Đây chính xác là nội dung phần Quy tắc trong CLAUDE.md."* | Dùng câu trả lời của học viên để validate cấu trúc CLAUDE.md, không phải để giảng lý thuyết. |
| 0:22–0:30 | **Case study: CLAUDE.md contract-agent** | *"Hãy đọc lại CLAUDE.md contract-agent với mắt nhìn mới — không phải 'file hướng dẫn' mà là 'thiết kế môi trường'."* Chiếu CLAUDE.md contract-agent. Phân tích từng phần: *"Vai trò: cụ thể — 'agent tạo hợp đồng chuyên nghiệp'. AI biết ngay mình là ai. Quy tắc: 'không tự bịa số liệu' — ngăn hallucination trước khi nó xảy ra. Workflow: thứ tự đọc → tính → viết → kiểm tra — AI không cần đoán bước tiếp theo. Công cụ: biết đọc file nào, tạo file nào — không hỏi lại."* So sánh với CLAUDE.md chung chung (chỉ có Vai trò và 1 quy tắc) → output kém hơn rõ rệt. *"Contract-agent hoạt động tốt vì CLAUDE.md được thiết kế kỹ, không phải vì AI thông minh hơn."* | Slide CLAUDE.md anatomy. Đây là case study trung tâm — dành đủ 8 phút. |
| 0:30–0:35 | **MCP là gì — demo nhanh** | *"MCP — Model Context Protocol. Tên kỹ thuật, nhưng ý tưởng đơn giản."* Phép so sánh: *"MCP giống ổ cắm điện chuẩn quốc tế — cắm công cụ nào cũng chạy. Filesystem MCP = AI cắm vào ổ đọc file máy tính của bạn. Web search MCP = AI cắm vào ổ tìm kiếm internet."* Demo nhanh filesystem MCP: yêu cầu AI đọc 1 file `.md` từ máy mà không copy-paste. *"AI tự đọc file — không cần bạn paste nội dung vào. Đây là cách kết nối AI với dữ liệu thực của bạn."* | Slide MCP diagram. Demo phải hoạt động — test kỹ trước. Không giải thích kỹ thuật MCP — chỉ show kết quả. |
| 0:35–0:40 | **Break 1** | *"5 phút nghỉ. Block B: bạn sẽ hoàn thiện CLAUDE.md và kết nối MCP. Chuẩn bị sẵn bản nháp CLAUDE.md từ buổi 3."* | |

---

### Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:55 | **Bài tập 1: Hoàn thiện CLAUDE.md** | *"Lấy bản nháp CLAUDE.md từ buổi 3. Hoàn thiện 4 phần đầy đủ. Lưu file. Chạy Claude Code với 1 tác vụ thực tế."* *"Quan trọng: chạy cùng tác vụ ĐÓ 2 lần — một lần không có CLAUDE.md, một lần có CLAUDE.md. Ghi lại 3 điểm khác biệt cụ thể."* Hành động facilitator: Phút 5: "Ai đang stuck ở phần Workflow? Gõ tên tác vụ bạn đang viết." Phút 10: "Ai đã chạy được lần đầu? Kết quả thế nào — 1 từ mô tả." Phút 14: "1 phút nữa — ai chưa chạy thì lưu file và chạy ngay." | Lỗi phổ biến: CLAUDE.md đặt sai thư mục. Nhắc: file phải ở TRONG thư mục mà Claude Code đang chạy (hoặc parent directory). |
| 0:55–1:00 | **Poll #2 + Thảo luận** | Launch Poll #2: "Kết quả có CLAUDE.md tốt hơn bao nhiêu?" Đọc kết quả. Hỏi 2–3 người kết quả "Khác hoàn toàn": *"Bạn [tên], CLAUDE.md của bạn có phần nào đặc biệt không? Chia sẻ nhanh."* Nếu ai "Giống nhau": *"CLAUDE.md của bạn có Workflow cụ thể chưa? Thử thêm ít nhất 3 bước theo thứ tự — thường đó là phần tạo ra khác biệt lớn nhất."* | Dùng kết quả poll để tạo cuộc thảo luận thực chất, không chỉ đọc số liệu. |
| 1:00–1:10 | **Bài tập 2: Kết nối MCP tool** | *"Bây giờ kết nối filesystem MCP — để AI đọc file thật từ máy bạn."* Chia sẻ màn hình hướng dẫn từng bước: (1) Cài filesystem MCP package. (2) Cấu hình trong Claude Code settings — chỉ định thư mục AI được phép đọc. (3) Test: yêu cầu Claude Code "Đọc file [tên file] trong thư mục [X] và tóm tắt nội dung." (4) Xác nhận AI nhận được nội dung đúng. *"Hướng dẫn từng bước tôi đã gửi trong chat — follow theo. Ai gặp lỗi gõ vào chat mô tả lỗi."* | Trợ giảng theo dõi chat để xử lý lỗi cài đặt cá nhân. Lỗi phổ biến: permission denied (Mac) → cần cấp quyền trong System Settings. |
| 1:10–1:15 | **Poll #3** | Launch Poll #3: "MCP filesystem có hoạt động không?" Đọc kết quả. Hỗ trợ nhóm "Gặp lỗi": *"Paste lỗi vào chat — tôi và trợ giảng xem."* Fix nhanh lỗi phổ biến trên screen share nếu cần. | Nếu >40% gặp lỗi → dành thêm 5 phút đầu Block C để fix thay vì bắt đầu Bài tập 3. |
| 1:15–1:20 | **Break 2** | *"5 phút nghỉ. Block C: nâng CLAUDE.md lên cấp nâng cao — thêm ví dụ output và bắt đầu phác thảo SKILL.md."* | |

---

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:35 | **Bài tập 3: CLAUDE.md nâng cao** | *"CLAUDE.md đã hoạt động — giờ nâng lên expert level. 3 nâng cấp:"* **(1) Ví dụ output mong muốn (few-shot trong CLAUDE.md):** Thêm phần "Ví dụ output" vào CLAUDE.md — 1–2 mẫu output bạn muốn AI tạo ra. *"AI học từ ví dụ tốt hơn từ mô tả chung."* **(2) Danh sách từ vựng chuyên ngành:** Thêm phần "Thuật ngữ" — các từ đặc thù ngành của bạn mà AI cần dùng đúng. **(3) 1 quy tắc 'không làm' quan trọng:** Điều gì tệ nhất AI có thể làm trong công việc của bạn? Viết thành quy tắc rõ ràng. Test lại với tác vụ phức tạp hơn sau khi thêm 3 nâng cấp. | Nâng cấp (1) và (3) thường tạo ra khác biệt lớn nhất. Ưu tiên hướng dẫn 2 cái đó nếu hết thời gian. |
| 1:35–1:45 | **Showcase** | *"2–3 người chia sẻ CLAUDE.md + kết quả test."* Lớp bình luận theo 1 câu hỏi: *"CLAUDE.md này có phần nào đặc biệt thông minh? Gõ vào chat."* Facilitator tổng hợp: *"Tôi thấy 3 pattern thông minh trong lớp hôm nay: [X], [Y], [Z] — đây là những best practice chúng ta sẽ mang vào buổi 5."* | Nhấn mạnh pattern có thể replicate, không chỉ khen cá nhân. |
| 1:45–1:50 | **Q&A** | Thu câu hỏi. Ưu tiên: *"MCP tool nào hữu ích nhất? → Filesystem cho đọc file nội bộ; web search cho research; database connector cho dữ liệu có cấu trúc. Bắt đầu với filesystem — đơn giản nhất và hữu ích nhất cho hầu hết công việc."* *"Bảo mật khi AI đọc file máy? → MCP chỉ đọc thư mục bạn chỉ định. Không đọc toàn máy. Chỉ định thư mục làm việc cụ thể, không phải thư mục root."* *"CLAUDE.md khác system prompt thế nào? → CLAUDE.md lưu trên máy, tự động load mỗi phiên. System prompt phải gõ lại mỗi lần. CLAUDE.md bền vững hơn."* | |

---

### Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Giao bài về nhà** | *"Bài về nhà 30 phút — nhiều hơn các buổi trước vì đây là nền tảng cho buổi cuối:"* *"Phần 1: Hoàn thiện CLAUDE.md nâng cao — thêm ví dụ output, danh sách thuật ngữ, ít nhất 1 quy tắc 'không làm'. Phần 2: Hoàn chỉnh bản nháp SKILL.md cho 1 quy trình — điền đủ 6 phần: Mục tiêu, Ngữ cảnh, Input, Các bước, Ví dụ, Ràng buộc. Lấy cảm hứng từ contract-agent: cùng cấu trúc đọc input → xử lý → tạo output, nhưng cho workflow của bạn."* *"Mang bản nháp SKILL.md đến buổi 5 — đó là nguyên liệu để trình bày."* | Gửi template SKILL.md 6 phần qua chat. Nhấn mạnh: SKILL.md là bài cuối kỳ — đầu tư thời gian làm kỹ sẽ có kết quả để tự hào trình bày. |
| 1:55–2:00 | **Tóm tắt và Preview** | *"Hôm nay: context engineering = thiết kế môi trường, không chỉ viết prompt. CLAUDE.md là sổ tay — AI đọc 1 lần, làm đúng mãi. MCP = cắm AI vào dữ liệu thật của bạn."* *"Buổi cuối: bạn sẽ xây SKILL.md riêng — giống contract-agent nhưng cho workflow của bạn — và trình bày 3 phút trước lớp. Chuẩn bị bản nháp kỹ — bạn sẽ muốn tự hào khi demo. Hẹn gặp lại!"* | |

---

## Troubleshooting Scenarios

**Kịch bản 1: CLAUDE.md không có tác dụng — kết quả giống như không có**
- *Dấu hiệu:* Học viên test có/không có CLAUDE.md nhưng output giống nhau
- *Xử lý:* Kiểm tra 3 nguyên nhân theo thứ tự: (1) CLAUDE.md đặt đúng thư mục chưa? Claude Code tìm CLAUDE.md trong thư mục hiện tại và parent directories. (2) CLAUDE.md có đủ cụ thể chưa? Vai trò chung chung = tác dụng nhỏ. Workflow cụ thể = tác dụng lớn. (3) Tác vụ test có phù hợp với nội dung CLAUDE.md không? Nếu CLAUDE.md về hợp đồng nhưng test tác vụ email → ít tác dụng.

**Kịch bản 2: MCP filesystem lỗi permission trên macOS**
- *Dấu hiệu:* Lỗi "permission denied" hoặc "access denied" khi AI cố đọc file
- *Xử lý:* *"Trên Mac, cần cấp quyền Full Disk Access cho terminal: System Settings → Privacy & Security → Full Disk Access → thêm Terminal/iTerm."* Demo nhanh nếu có Mac để show. Nếu mất quá nhiều thời gian: *"Fix sau buổi học — tôi sẽ gửi hướng dẫn chi tiết. Bạn vẫn làm được Bài tập 3 mà không cần MCP."*

**Kịch bản 3: Học viên confused — CLAUDE.md vs. SKILL.md khác nhau thế nào?**
- *Dấu hiệu:* Câu hỏi "Tôi đã có CLAUDE.md rồi, SKILL.md là gì khác?"
- *Xử lý:* *"CLAUDE.md = quy tắc chung cho AI trong project của bạn. Giống nội quy công ty — áp dụng mọi lúc. SKILL.md = hướng dẫn cho 1 tác vụ cụ thể. Giống SOP (quy trình chuẩn) cho 1 việc — có ví dụ output, có tiêu chí chất lượng. Bạn có thể có 1 CLAUDE.md và nhiều SKILL.md cho các tác vụ khác nhau."*

**Kịch bản 4: Học viên không biết workflow nào để viết SKILL.md**
- *Dấu hiệu:* "Tôi không biết SKILL.md về gì"
- *Xử lý:* *"Nhìn lại Workflow Mapping buổi 2. Tác vụ bạn đã đánh dấu 'Agent phù hợp' — đó là candidate tốt nhất cho SKILL.md. Nếu chưa có: tác vụ nào bạn làm đi làm lại mà muốn AI làm thay? Đó là tác vụ của SKILL.md."*

---

## Technical Notes — Zoom

- **Demo CLAUDE.md before/after:** Chuẩn bị 2 thư mục riêng biệt — 1 không có CLAUDE.md, 1 có CLAUDE.md — để chuyển đổi demo nhanh
- **Hướng dẫn MCP:** Share PDF hướng dẫn cài MCP trong chat ngay đầu Block B — học viên làm theo song song khi facilitator demo
- **Font terminal và file editor:** Tối thiểu 18pt, zoom 150% khi share screen
- **MCP cài đặt thời gian:** Cài MCP có thể mất 5–10 phút tùy máy — không chờ tất cả xong mới tiếp tục
- **Backup nếu MCP fail hoàn toàn:** Học viên copy-paste thủ công nội dung file vào Claude Code — vẫn học được context engineering, bỏ qua phần tự động đọc file
- **Ghi lại buổi học:** Quan trọng — nhiều bước cấu hình kỹ thuật, học viên cần xem lại
