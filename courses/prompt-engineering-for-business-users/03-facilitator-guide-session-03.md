# Hướng Dẫn Giảng Viên — Buổi 3: Áp Dụng — Cowork + Claude Code

> **Mục tiêu terminal:** Thiết lập Claude Code, đọc hiểu CLAUDE.md của contract-agent, và chạy automation tạo hợp đồng thực tế.
>
> **Công cụ:** Claude Cowork + Claude Code
> **Thời lượng:** 2 giờ (120 phút)
> **Nguyên tắc thiết kế:** Buổi thực hành nặng nhất. Học viên phải tự chạy contract-agent trên máy mình và tạo ra file hợp đồng thật. Facilitator đóng vai coach, không phải presenter.

---

## Chuẩn Bị Kỹ Thuật (Trước Buổi 20 Phút)

- [ ] **Test contract-agent trước trên máy facilitator** — chạy đầy đủ, xác nhận output đúng
- [ ] Thư mục contract-agent zip đã upload lên link chia sẻ (Google Drive / link download)
- [ ] Mở terminal — Claude Code đã cài, đã test `claude` command hoạt động
- [ ] Mở CLAUDE.md của contract-agent — phóng to font size 150% cho học viên đọc qua Zoom
- [ ] File `prompt.md` (đơn hàng Google Vietnam) sẵn trong thư mục contract-agent
- [ ] Slide CLAUDE.md anatomy đã load
- [ ] Hướng dẫn cài Claude Code từng bước (PDF/slide) — gửi trước cho học viên 3 ngày
- [ ] 3 Zoom polls pre-configured (xem bên dưới)
- [ ] Dự phòng: nếu học viên không cài được Claude Code → họ xem demo và làm bài tập viết CLAUDE.md trên docs

**Nội dung CLAUDE.md contract-agent cần hiển thị rõ (4 phần):**
```
## Vai trò
Bạn là agent tạo hợp đồng dịch vụ chuyên nghiệp. Đọc thông tin đơn đặt hàng
từ file prompt.md và tạo nội dung hợp đồng đầy đủ theo template.

## Quy tắc
- Chỉ dùng thông tin có trong file đầu vào — không tự bịa số liệu
- Không yêu cầu thông tin bổ sung nếu dữ liệu đã đủ
- Tính toán VAT và tổng giá trị chính xác
- Định dạng theo luật hợp đồng dịch vụ Việt Nam

## Workflow
1. Đọc file prompt.md — trích xuất thông tin bên mua, dịch vụ, giá
2. Tính toán: VAT 8%, tổng giá trị, lịch thanh toán
3. Điền vào các phần hợp đồng: mô tả dịch vụ, điều khoản, chữ ký
4. Kiểm tra: thông tin nhất quán, số liệu đúng
5. Xuất ra file hop-dong-[ten-cty].md

## Công cụ
- Đọc: prompt.md (đơn đặt hàng đầu vào)
- Tham chiếu: Mau-hop-dong.docx (template cấu trúc)
- Tạo ra: hop-dong-[ten-cty].md (hợp đồng hoàn chỉnh)
```

---

## Zoom Polls (Cấu Hình Sẵn)

**Poll #1** (phút 0:05–0:08):
> "Bạn đã cài Claude Code chưa?"
> - Rồi và đã test được — lệnh `claude` chạy OK
> - Rồi nhưng chưa test — chưa biết có hoạt động không
> - Chưa cài — cần hỗ trợ
> - Không biết cách cài

**Poll #2** (phút 0:30–0:35):
> "Nếu viết CLAUDE.md cho công việc của bạn, phần nào quan trọng nhất?"
> - Vai trò — AI cần biết đóng vai gì
> - Quy tắc — AI cần biết không được làm gì
> - Workflow — AI cần có thứ tự thực hiện rõ
> - Công cụ — AI cần biết đọc/tạo file nào

**Poll #3** (phút 1:05–1:10):
> "Kết quả hợp đồng từ contract-agent đánh giá thế nào?"
> - Dùng được ngay, không cần sửa
> - Dùng được sau khi sửa nhỏ (< 5 phút)
> - Cần sửa nhiều (> 15 phút)
> - Lỗi, không chạy được

---

## Bảng Thời Gian Chi Tiết

### Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Recap buổi 2** | *"Chào mọi người! Ai đã chạy 2 tác vụ trên Cowork rồi? React thumbs up."* Đếm. Gọi 1 người: *"Bạn [tên], brief bạn gửi là gì? Kết quả thế nào? Tiết kiệm bao nhiêu phút?"* Nhận xét nhanh. *"Hôm nay chúng ta tăng lên một cấp — không chỉ dùng brief trên Cowork, mà chạy automation thật trên máy tính."* | Nếu ít người làm homework → "Không sao — hôm nay bạn sẽ có kết quả cụ thể để so sánh." |
| 0:05–0:08 | **Poll #1 — Setup check** | Launch Poll #1. Đọc kết quả ngay. Điều chỉnh kế hoạch Block B: Nếu >60% "Chưa cài" → dành 15 phút đầu Block B cho setup, rút ngắn Bài tập 2. Nếu >70% "Đã cài và test" → Block B bắt đầu bằng Bài tập 1 ngay. | Poll này là pivot point thực sự — không bỏ qua. |
| 0:08–0:20 | **Demo: Contract-agent hoạt động thế nào** | Chia sẻ màn hình — mở terminal. *"Tôi sẽ cho bạn thấy contract-agent làm việc. Chú ý: tôi không làm gì cả sau khi chạy lệnh — agent tự đọc file, tự lập kế hoạch, tự tạo output."* Mở CLAUDE.md: *"Đây là file hướng dẫn AI — giống sổ tay nhân viên. AI đọc file này trước khi bắt đầu bất cứ việc gì."* Trong terminal, di chuyển vào thư mục contract-agent. Chạy Claude Code. Khi agent kết thúc: mở file output `hop-dong-google-vietnam.md`. Đọc to phần Mô tả dịch vụ. *"File này được tạo từ đơn hàng. Không copy-paste, không chat qua lại — 1 lần chạy."* | Test kỹ trước. Phóng to terminal và file output 150%. Không giải thích trong khi agent đang chạy — im lặng tạo drama tốt. |
| 0:20–0:22 | **Chat activity** | *"30 giây — nhìn vào CLAUDE.md tôi vừa show, bạn thấy AI được hướng dẫn làm những gì? Gõ vào chat."* Chờ 30 giây. Đọc nhanh 3–4 câu trả lời. | Thu thập understanding của học viên về CLAUDE.md trước khi giải thích chính thức. |
| 0:22–0:30 | **CLAUDE.md anatomy — đọc hiểu** | *"Cùng nhau đọc CLAUDE.md — tôi muốn bạn nhận ra 4 phần."* Chiếu CLAUDE.md phóng to. Đi qua từng phần: **Vai trò:** *"AI đóng vai gì? Cụ thể, không mơ hồ — 'agent tạo hợp đồng chuyên nghiệp', không phải 'AI giúp đỡ'."* **Quy tắc:** *"AI KHÔNG làm gì? Ràng buộc rõ ràng ngăn AI tự bịa số liệu hay làm thêm những thứ không yêu cầu."* **Workflow:** *"Thứ tự các bước — AI biết đọc file trước, tính toán sau, rồi mới viết. Không đoán mò thứ tự."* **Công cụ:** *"Đọc file nào, tạo file nào — AI biết tìm input ở đâu và đặt output ở đâu."* *"Đây chính xác là những gì bạn sẽ tự viết cho công việc mình trong Block C."* | Phóng to từng phần khi giải thích. Dùng highlight hoặc annotation tool nếu có. |
| 0:30–0:35 | **Poll #2 + Thảo luận** | Launch Poll #2: "Phần nào quan trọng nhất khi viết CLAUDE.md?" Đọc kết quả. *"Thực ra tất cả 4 phần đều quan trọng — nhưng thứ tự ưu tiên khi bắt đầu: Vai trò trước (AI biết mình là ai), Workflow sau (AI biết làm gì). Quy tắc và Công cụ thêm vào khi bạn thấy AI làm sai hoặc làm thiếu."* | 3–4 phút thảo luận. Không kéo dài — cần vào Block B đúng giờ. |
| 0:35–0:40 | **Break 1** | *"5 phút nghỉ. Khi quay lại: nếu bạn đã cài Claude Code, bạn sẽ chạy contract-agent. Nếu chưa, bạn sẽ cài ngay trong Block B."* | Chuẩn bị link download contract-agent folder để share ngay đầu Block B. |

---

### Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:53 | **Setup Claude Code** | Chia sẻ màn hình — mở terminal. *"Ai chưa cài Claude Code, làm theo tôi bước này."* Hướng dẫn từng bước: (1) Mở terminal (Mac: Spotlight → Terminal; Windows: PowerShell). (2) Chạy lệnh cài đặt. (3) Chạy `claude --version` để xác nhận. (4) Chạy lệnh đầu tiên: `claude "xin chào"` — xác nhận AI trả lời. *"Ai đã xác nhận Claude Code hoạt động? React thumbs up."* Xử lý lỗi qua chat: trợ giảng hỗ trợ cá nhân. | Không chờ 100% học viên setup xong. Khi 70% ok → chuyển sang Bài tập 1. Học viên chưa xong → xem theo và tự cài sau. |
| 0:53–1:05 | **Bài tập 1: Chạy contract-agent** | *"Share link download thư mục contract-agent."* [Paste link vào chat] *"Download về, giải nén, mở terminal trong thư mục đó."* Hướng dẫn chạy: di chuyển vào thư mục → chạy Claude Code. *"Agent sẽ đọc CLAUDE.md, đọc file đơn hàng, tạo hợp đồng. Không làm gì — để agent tự làm."* Khi xong: *"Mở file output. Đánh giá theo 3 tiêu chí: (1) Thông tin chính xác? (2) Định dạng đúng mẫu template? (3) Dùng được ngay không cần sửa lớn?"* Hành động trong 12 phút: Phút 3: "Ai đang gặp lỗi? Gõ vào chat mô tả lỗi." Phút 7: "Ai đã mở file output rồi? Đang đánh giá gì?" Phút 11: "1 phút nữa — ai chưa có output thì screenshot lỗi để tôi xem." | Lỗi phổ biến nhất: sai đường dẫn thư mục. Nhắc: terminal phải đang ở TRONG thư mục contract-agent. |
| 1:05–1:10 | **Poll #3** | Launch Poll #3: "Kết quả hợp đồng đánh giá thế nào?" Đọc kết quả. *"Nhóm 'Lỗi, không chạy được' — tôi cần thấy lỗi của bạn. Paste lỗi vào chat."* Xử lý nhanh 2–3 lỗi phổ biến. Nhóm "Dùng được ngay" → *"Xuất sắc — sang Bài tập 2 đi."* | Ưu tiên hỗ trợ nhóm lỗi — đây là blocker thực sự. |
| 1:10–1:15 | **Bài tập 2: Thử đổi đơn hàng** | *"Mở file prompt.md — đơn hàng đầu vào. Sửa 1–2 thông tin: ví dụ thêm dịch vụ thứ ba, hoặc đổi giá. Lưu file. Chạy lại contract-agent. Kiểm tra: output có cập nhật đúng thông tin mới không?"* | Bài tập nhỏ nhưng quan trọng — chứng minh agent đọc input thật sự, không hardcode. |
| 1:15–1:20 | **Break 2** | *"5 phút nghỉ. Block C: bạn sẽ bắt đầu phác thảo CLAUDE.md cho quy trình công việc của chính mình."* | |

---

### Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:35 | **Bài tập 3: Phác thảo CLAUDE.md cá nhân** | *"Dùng template 4 phần — CLAUDE.md cho 1 tác vụ lặp lại của bạn. Không cần hoàn chỉnh — bản nháp thô. Tác vụ gợi ý: soạn báo cáo tuần, phân tích email khách hàng, tổng hợp feedback, tạo agenda cuộc họp."* Template 4 phần (trên slide/handout): **[Vai trò]** AI là chuyên gia gì trong công việc này? **[Quy tắc]** AI không được tự làm gì? Giới hạn quan trọng? **[Workflow]** 3–5 bước theo thứ tự. **[Công cụ]** Đọc file gì? Tạo file gì? Hành động facilitator: đi "vòng quanh" qua chat: *"Bạn đang viết CLAUDE.md cho tác vụ gì? Đang gặp khó ở phần nào?"* | Phần Workflow thường khó nhất — học viên không quen decompose quy trình thành bước. Gợi ý: "Bạn thường làm gì đầu tiên khi nhận tác vụ này? Làm gì tiếp theo?" |
| 1:35–1:45 | **Showcase** | *"2–3 người chia sẻ bản nháp CLAUDE.md."* Lớp góp ý theo 1 câu: *"Workflow này đủ rõ chưa? Còn thiếu gì để agent tự chạy không cần hỏi lại?"* Facilitator nhận xét cụ thể: *"Vai trò rất tốt — cụ thể và actionable. Workflow cần thêm: bước kiểm tra output trước khi xuất file — bước đó rất quan trọng để agent biết dừng lại review."* | Feedback phải cụ thể và constructive. Không chỉ "tốt" hay "cần cải thiện" — phải nói CÁI GÌ tốt, CÁI GÌ cần cải thiện. |
| 1:45–1:50 | **Q&A** | Thu câu hỏi qua chat. Ưu tiên: *"Làm sao để AI đọc file của mình? → Dùng filesystem MCP — chúng ta sẽ cài buổi sau. Hôm nay thực hành viết CLAUDE.md trước."* *"Hỗ trợ loại file nào? → .md, .txt tốt nhất. .docx, .pdf cần tool bổ sung."* *"Bảo mật khi AI đọc file máy? → Claude Code chạy local — file không upload lên server trừ nội dung bạn paste vào prompt."* | |

---

### Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Giao bài về nhà** | *"Bài về nhà 25 phút: Hoàn thiện CLAUDE.md cá nhân — điền đủ 4 phần. Test với 1 tác vụ thực tế trong Claude Code — dùng CLAUDE.md bạn vừa viết. Ghi lại: kết quả có CLAUDE.md khác với không có CLAUDE.md thế nào? Bonus: bắt đầu phác thảo SKILL.md — liệt kê input, output, các bước cho 1 quy trình. Mang đến buổi sau."* | Gửi template CLAUDE.md và template SKILL.md qua chat. SKILL.md là bài tập mới — giải thích ngắn: "SKILL.md = phiên bản nâng cao của CLAUDE.md, có thêm ví dụ output và tiêu chí chất lượng." |
| 1:55–2:00 | **Tóm tắt và Preview** | *"3 điều hôm nay: Một — CLAUDE.md là sổ tay hướng dẫn AI, không phải prompt. Hai — 4 phần cốt lõi: Vai trò, Quy tắc, Workflow, Công cụ. Ba — Contract-agent là ví dụ thực tế của CLAUDE.md làm việc."* *"Buổi tới: hiểu tại sao contract-agent hoạt động tốt — đó là context engineering. Và bạn sẽ kết nối AI với file thật trên máy bằng MCP tool — không cần copy-paste nữa. Hẹn gặp lại!"* | |

---

## Troubleshooting Scenarios

**Kịch bản 1: Claude Code không cài được (lỗi permission, PATH, hoặc OS)**
- *Dấu hiệu:* Lỗi khi chạy lệnh cài đặt, `claude` command not found
- *Xử lý:* Không dừng cả lớp để fix. *"Bạn theo dõi demo trước — sau buổi tôi gửi hướng dẫn troubleshoot 1-1."* Học viên không cài được vẫn làm được Bài tập 3 (viết CLAUDE.md trên text editor). Gửi link office hours hoặc hướng dẫn fix sau buổi học.

**Kịch bản 2: Contract-agent chạy nhưng output sai (số liệu sai, VAT tính sai)**
- *Dấu hiệu:* File output tạo ra nhưng tổng giá sai hoặc thiếu thông tin
- *Xử lý:* Biến thành teachable moment: *"Đây chính xác là lý do CLAUDE.md có phần Quy tắc — quy tắc 'không tự bịa số liệu' và 'tính toán chính xác'. Hãy đọc lại CLAUDE.md — quy tắc đó có đủ rõ chưa? Nếu AI vẫn tính sai, CLAUDE.md cần thêm ví dụ tính toán cụ thể."*

**Kịch bản 3: Học viên không biết tác vụ nào để viết CLAUDE.md**
- *Dấu hiệu:* "Tôi không biết viết CLAUDE.md về gì"
- *Xử lý:* *"Nhìn lại Workflow Mapping từ buổi 2. Tác vụ nào bạn đã đánh dấu 'Agent phù hợp'? Dùng tác vụ đó. Nếu chưa có — tác vụ đơn giản nhất: soạn email phản hồi khách hàng. Mọi người đều có tác vụ này."*

**Kịch bản 4: Quá nhiều học viên gặp lỗi cùng lúc trong Block B**
- *Dấu hiệu:* > 30% báo lỗi, chat ngập lỗi
- *Xử lý:* Tạm dừng bài tập cá nhân. *"Tôi thấy nhiều người gặp cùng 1 lỗi — để tôi fix chung."* Screen share để demo cách fix. Lỗi phổ biến nhất: (1) Sai thư mục — fix bằng `cd` đúng path. (2) File prompt.md bị sửa sai format — show cách check. (3) Claude Code timeout — chạy lại.

---

## Technical Notes — Zoom

- **Font size terminal:** 18–20pt trong terminal, 150% zoom Claude.ai — đọc được qua Zoom share screen
- **Annotation:** Dùng Zoom annotation để highlight từng phần CLAUDE.md khi giải thích
- **Thư mục contract-agent:** Upload lên Google Drive / Dropbox — share link trực tiếp trong Zoom chat (không qua email để tránh delay)
- **Trợ giảng:** Ưu tiên hỗ trợ cài đặt Claude Code trong chat — facilitator không nên dừng demo
- **Nếu 40%+ không cài được Claude Code:** Chuyển Block B sang "follow along" mode — học viên xem demo, ghi note, tự test sau. Vẫn làm Block C (viết CLAUDE.md) độc lập.
- **Ghi lại buổi học:** Đặc biệt quan trọng cho buổi 3 vì có nhiều bước kỹ thuật — học viên cần xem lại
