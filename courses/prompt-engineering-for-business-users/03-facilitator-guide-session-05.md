# Hướng Dẫn Giảng Viên — Buổi 5: Xây Dựng Skill Của Riêng Bạn (Capstone)

> **Mục tiêu terminal:** Tạo và kiểm thử SKILL.md hoàn chỉnh, trình bày 3 phút trước lớp.
>
> **Công cụ:** Claude Code
> **Thời lượng:** 2 giờ (120 phút)
> **Nguyên tắc thiết kế:** Buổi capstone — học viên là trung tâm, facilitator là coach và MC. Tối thiểu 25 phút dành cho trình bày peer. Mọi người về nhà với 1 SKILL.md đã chạy được và nhận feedback từ ít nhất 2 người.

---

## Chuẩn Bị Kỹ Thuật (Trước Buổi 20 Phút)

- [ ] Claude Code cài sẵn, test hoạt động — sẵn sàng hỗ trợ học viên debug
- [ ] SKILL.md mẫu chuẩn bị sẵn — 1 ví dụ hoàn chỉnh lấy cảm hứng từ contract-agent (ví dụ: skill tóm tắt email khách hàng)
- [ ] Rubric trình bày 4 tiêu chí — share màn hình sẵn, không phải slide
- [ ] Zoom poll timer: 3 phút mỗi người trình bày — chuẩn bị timer visible
- [ ] Slide timeline 5 buổi — visual recap hành trình
- [ ] Poll "Skill hữu ích nhất" và "Skill sáng tạo nhất" pre-configured
- [ ] Nếu > 10 học viên: chuẩn bị cách nhận SKILL.md qua chat (paste text hoặc link Google Doc)
- [ ] 3 Zoom polls pre-configured (xem bên dưới)

**SKILL.md mẫu cho demo Block A (skill tóm tắt và phân loại email khách hàng):**
```markdown
## Mục tiêu
Skill này đọc email từ khách hàng, tóm tắt vấn đề chính, phân loại theo
loại yêu cầu, và soạn phản hồi ban đầu phù hợp.

## Ngữ cảnh
Email khách hàng của công ty dịch vụ IT, thường về: hỗ trợ kỹ thuật,
báo giá, khiếu nại, hoặc hỏi thông tin sản phẩm. Tone công ty: chuyên
nghiệp, thân thiện, solution-focused.

## Input
- File: email-khach-hang.txt (nội dung email cần xử lý)
- Có thể có: lịch sử email trước đó trong cùng thread

## Các bước thực hiện
1. Đọc toàn bộ email — xác định người gửi, chủ đề, vấn đề cốt lõi
2. Phân loại: Hỗ trợ kỹ thuật / Báo giá / Khiếu nại / Hỏi thông tin / Khác
3. Tóm tắt vấn đề trong 2–3 câu — súc tích, không mất thông tin quan trọng
4. Soạn phản hồi ban đầu: xác nhận đã nhận, nêu bước xử lý tiếp theo
5. Đánh dấu mức độ ưu tiên: Khẩn (< 4h) / Bình thường (< 24h) / Thấp (< 72h)
6. Xuất: email-summary-[ngay].md với đầy đủ 5 mục trên

## Ví dụ output mong muốn
```
Người gửi: Nguyễn Văn A — Công ty XYZ
Loại: Hỗ trợ kỹ thuật
Tóm tắt: Phần mềm không khởi động được sau khi cập nhật v2.3.1.
Lỗi báo: "License key expired". Đã thử restart, không giải quyết.
Phản hồi đề xuất: Kính gửi anh A, chúng tôi đã nhận được yêu cầu...
Ưu tiên: Khẩn — cần xử lý trong 4 giờ
```

## Ràng buộc
- Không đoán thông tin không có trong email
- Không hứa thời gian cụ thể nếu không biết chắc
- Phản hồi ban đầu không quá 100 từ
- Tiếng Việt trong output, trừ thuật ngữ kỹ thuật
```

**Rubric trình bày 4 tiêu chí (share màn hình khi cần):**
```
1. Vấn đề giải quyết rõ ràng? (1–5)
   5 = Tôi hiểu ngay skill làm gì và tại sao cần thiết
   1 = Không rõ skill giải quyết vấn đề gì

2. Skill chạy được không lỗi? (1–5)
   5 = Demo live thành công, output hiện ra trước lớp
   1 = Không chạy được hoặc không demo

3. Kết quả dùng được ngay? (1–5)
   5 = Output có thể dùng ngay, không cần sửa lớn
   1 = Output cần sửa nhiều hoặc không đúng yêu cầu

4. Trình bày mạch lạc trong 3 phút? (1–5)
   5 = Rõ ràng, đúng thứ tự: vấn đề → demo → kết quả
   1 = Khó theo dõi hoặc vượt quá 3 phút
```

---

## Zoom Polls (Cấu Hình Sẵn)

**Poll #1** (phút 0:05–0:08):
> "SKILL.md bản nháp của bạn đang ở giai đoạn nào?"
> - Chưa có — bắt đầu hôm nay
> - Có bản nháp 1–3 bước — cần hoàn thiện
> - Có đầy đủ 6 phần — cần test
> - Đã test xong — sẵn sàng trình bày!

**Poll #2** (phút 0:55–1:00):
> "Bạn đang ở giai đoạn nào? (Checkpoint)"
> - Đang viết SKILL.md
> - Đang test — chờ kết quả
> - Đang sửa sau khi test
> - Xong rồi — sẵn sàng trình bày!

**Poll cuối — Vote** (phút 1:45–1:50):
> "Bình chọn: Skill hữu ích nhất cho công việc hàng ngày?"
> [Danh sách tên skill của từng học viên — điền ngay trước khi launch]

---

## Bảng Thời Gian Chi Tiết

### Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Recap toàn khóa — visual timeline** | Chiếu slide timeline 5 buổi. *"5 buổi. Một hành trình. Nhìn lại xem bạn đã đi được bao xa:"* *"Buổi 1: bạn chưa biết AI là gì — hôm nay bạn viết prompt 6 thành phần và so sánh kết quả."* *"Buổi 2: bạn lần đầu gửi task brief và thấy agent tự chạy."* *"Buổi 3: bạn chạy contract-agent thật trên máy mình — tạo ra file hợp đồng thật."* *"Buổi 4: bạn viết CLAUDE.md riêng và kết nối AI với file của mình."* *"Buổi 5 — hôm nay: bạn về nhà với 1 skill tự viết, tự test, tự trình bày."* | Pause sau mỗi câu. Để học viên cảm nhận hành trình. Không rush. |
| 0:05–0:08 | **Poll #1 — Checkpoint** | Launch Poll #1. Đọc kết quả ngay. Điều chỉnh: Nếu >40% "Chưa có" → Block B bắt đầu với template hướng dẫn và facilitator walk-through. Nếu >50% "Đã test xong" → rút ngắn workshop, tăng thời gian trình bày. | Điều chỉnh pace ngay từ đây dựa trên kết quả. |
| 0:08–0:18 | **SKILL.md anatomy — từ contract-agent đến skill của bạn** | *"SKILL.md là phiên bản nâng cao của CLAUDE.md — dành riêng cho 1 quy trình cụ thể."* Chiếu SKILL.md mẫu (email skill). So sánh song song với template trống. Giải thích 6 phần: **(1) Mục tiêu:** *"Skill này làm gì cho ai? 1–2 câu, cụ thể."* **(2) Ngữ cảnh:** *"AI cần biết gì về môi trường làm việc của bạn? Ngành, công ty, tone, khách hàng."* **(3) Input:** *"Nhận dữ liệu gì? Từ file nào? Định dạng gì?"* **(4) Các bước thực hiện:** *"Thứ tự rõ ràng — AI biết làm gì trước, làm gì sau, kiểm tra gì."* **(5) Ví dụ output:** *"Mẫu kết quả bạn muốn — AI học từ ví dụ tốt hơn từ mô tả."* **(6) Ràng buộc:** *"AI không được làm gì? Giới hạn quan trọng?"* Demo nhanh: chạy SKILL.md mẫu trên Claude Code, show output. | Slide 1–8. Dừng sau phần (5) để hỏi: "Ai đã có ví dụ output cho SKILL.md của mình rồi?" |
| 0:18–0:25 | **Workflow Decomposition — cách phân tích quy trình** | *"Bước khó nhất khi viết SKILL.md: phân tích quy trình hiện tại thành các bước AI làm được."* 4 bước Workflow Decomposition: **(1)** Liệt kê tất cả bước của quy trình hiện tại — kể cả bước thủ công nhỏ nhất. **(2)** Với mỗi bước: xác định input là gì, output là gì. **(3)** Đánh dấu bước AI làm được: xử lý văn bản, tính toán, tổng hợp, định dạng, phân loại. **(4)** Loại bỏ bước AI chưa làm được: phán quyết phức tạp cần kinh nghiệm, quan hệ người với người, quyết định có yếu tố chính trị. Demo nhanh với ví dụ "soạn báo cáo phân tích đối thủ": liệt kê bước → đánh dấu AI làm được → viết thành SKILL.md. | Slide 9–11. Đây là kỹ năng tổng quát nhất học viên mang về — không chỉ áp dụng cho AI. |
| 0:25–0:30 | **3 lỗi thường gặp khi viết SKILL.md** | *"Trước khi bắt đầu, tôi muốn bạn tránh 3 lỗi phổ biến nhất:"* **(1) Quá chung chung:** *"Mục tiêu 'giúp công việc tốt hơn' — AI không biết làm gì. Fix: thêm ví dụ output cụ thể vào phần (5)."* **(2) Quá chi tiết — micro-manage từng câu:** *"Nếu bạn viết từng câu AI phải nói, AI mất đi sự linh hoạt. Fix: viết nguyên tắc, không viết script."* **(3) Thiếu tiêu chí chất lượng:** *"AI không biết 'đủ tốt' là gì. Fix: trong Ràng buộc, thêm 1–2 tiêu chí đo được: 'output không quá 200 từ', 'tất cả số liệu phải từ input, không tự tạo'."* | Slide 12–13. Ngắn gọn — 5 phút đủ. |
| 0:30–0:35 | **Rubric trình bày** | *"Trước khi vào workshop, tôi muốn bạn biết bạn sẽ được đánh giá thế nào — để bạn chuẩn bị đúng."* Chiếu rubric 4 tiêu chí. Đọc và giải thích từng tiêu chí. *"Cấu trúc bài trình bày 3 phút: 30 giây vấn đề, 90 giây demo live, 60 giây kết quả. Luyện trước ở nhà nếu bạn chưa quen."* *"Rubric này cũng là hướng dẫn để bạn cho feedback cho người khác — sau mỗi bài trình bày, bạn sẽ cho điểm 4 tiêu chí này."* | Slide 14–15. Chia sẻ rubric file qua chat để học viên có trong tay khi nghe bài trình bày của người khác. |
| 0:35–0:40 | **Break 1** | *"5 phút nghỉ — và cũng là thời gian mở SKILL.md bản nháp, chuẩn bị cho 35 phút workshop."* | |

---

### Block B — Build Time (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:55 | **Workshop: Hoàn thiện SKILL.md** | *"35 phút workshop. Mục tiêu: SKILL.md hoàn chỉnh và đã test được. Tôi sẽ đi vòng quanh qua chat để hỗ trợ."* Hành động facilitator — đi "vòng quanh" qua chat theo lịch: Phút 3: *"Bạn đang viết skill gì? Gặp vướng mắc gì? Gõ vào chat."* Phút 7: *"Ai đang stuck ở Workflow? Viết tên quy trình vào chat — tôi sẽ gợi ý bước phân tích."* Phút 12: *"Ai đã xong 6 phần và đang test? Kết quả lần đầu thế nào?"* Phút 14: *"Nhóm xong sớm: giúp hỏi người bên cạnh (qua chat) — 'Skill của bạn giải quyết vấn đề gì? 1 câu.'"* Nếu học viên xin screen share 1-1: dành tối đa 3 phút mỗi người — đủ để unblock, không đủ để làm thay. | Không làm thay học viên. Hỏi câu dẫn: "Bước đầu tiên trong quy trình này là gì?" thay vì đề xuất trực tiếp. |
| 0:55–1:00 | **Poll #2 — Checkpoint** | Launch Poll #2. Đọc kết quả. *"Nhóm 'Xong rồi — sẵn sàng trình bày': tuyệt vời! Hãy luyện bài 3 phút trong 5 phút này."* *"Nhóm 'Đang test': tiếp tục — dành 10 phút tới để test và sửa."* *"Nhóm 'Đang viết': focus vào 3 phần quan trọng nhất — Mục tiêu, Các bước, Ví dụ. 3 phần đó là core."* | Dùng kết quả để tái phân bổ thời gian còn lại của workshop. |
| 1:00–1:10 | **Test & Iterate** | *"Chạy SKILL.md trên Claude Code. Đánh giá kết quả theo 3 tiêu chí từ rubric: Vấn đề giải quyết rõ không? Skill chạy không lỗi? Kết quả dùng được ngay không?"* *"Sửa ít nhất 1 vòng — SKILL.md lần đầu chạy thường cần điều chỉnh. Đó là bình thường."* *"Ghi lại: bạn đã thay đổi gì từ v1 sang v2? Kết quả khác nhau thế nào? Đây là phần 'Kết quả' trong bài trình bày của bạn."* | Nhắc nhở: iterate là kỹ năng, không phải dấu hiệu SKILL.md kém. |
| 1:10–1:15 | **Peer Preview** | *"Một câu cuối trước khi trình bày: mô tả skill của bạn trong 1 câu theo format: 'Skill này giúp [ai] làm [gì] tốt hơn bằng cách [cách nào].' Paste vào chat."* Chờ 30 giây. Đọc 2–3 câu thú vị. Hỏi thêm: *"Skill [X] nghe hay — bạn có thể giải thích thêm 1 câu về vấn đề nó giải quyết không?"* | Preview này cũng là luyện tập mở đầu bài trình bày — 30 giây vấn đề. |
| 1:15–1:20 | **Break 2** | *"5 phút nghỉ — và cũng là thời gian cuối cùng để sửa SKILL.md nếu cần. Block C: trình bày. Chuẩn bị màn hình, chuẩn bị file SKILL.md, chuẩn bị Claude Code."* | |

---

### Block C — Presentations + Feedback (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:45 | **Trình bày Skill — 3 phút mỗi người** | *"Đây là phần chính của buổi cuối. Mỗi người 3 phút — tôi sẽ bấm giờ."* *"Cấu trúc bài trình bày:"* *"30 giây — Vấn đề: 'Trước đây, tôi mất ___ phút để ___. Mỗi tuần/tháng tôi làm việc này ___ lần.'"* *"90 giây — Demo: chạy skill trực tiếp trên màn hình. Mở file input, chạy Claude Code, mở file output. Không cần kết quả hoàn hảo — cần chạy được."* *"60 giây — Kết quả: 'Skill tạo ra ___, tốt hơn cách cũ ở chỗ ___. Nếu dùng hàng tuần, tôi tiết kiệm khoảng ___ phút.'"* Sau mỗi bài trình bày: *"Lớp cho feedback theo rubric — 4 tiêu chí, điểm 1–5. Gõ vào chat: [tiêu chí 1: X] [tiêu chí 2: Y] [tiêu chí 3: Z] [tiêu chí 4: W] + 1 điểm mạnh + 1 gợi ý cải thiện."* Facilitator bình luận nhanh: *"Điểm mạnh tôi thấy: [X]. Gợi ý tiếp theo để nâng skill: [Y]."* Nếu > 10 học viên: 8 người trình bày live (ưu tiên người xung phong trước). Còn lại paste link Google Doc chứa SKILL.md + output screenshot vào chat — lớp vote. | Bấm giờ nghiêm — 3 phút. Khi còn 30 giây: gõ "30 giây" vào chat hoặc dùng Zoom nonverbal. Facilitator không cắt giữa câu — đợi người kết thúc suy nghĩ hiện tại. |
| 1:45–1:50 | **Vote và Công Nhận** | Cấu hình poll vote "Skill hữu ích nhất" với tên từng skill vừa trình bày. Launch poll. *"Trong khi bạn vote, tôi muốn nhắc lại: mục tiêu không phải skill hoàn hảo — mục tiêu là skill CHẠY ĐƯỢC và giải quyết vấn đề THẬT. Cả lớp hôm nay đã đạt được điều đó."* Công bố kết quả. *"Skill hữu ích nhất: [tên]. [Người đó], bạn muốn nói gì với lớp?"* *"Skill sáng tạo nhất (facilitator chọn): [tên]. Lý do: [giải thích ngắn]."* | Không chỉ trao giải cho 1 người. Tìm ít nhất 2–3 điểm nổi bật khác nhau để nhiều người được công nhận. |

---

### Block D — Course Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **5 Takeaway — 1 câu mỗi cái** | *"5 điều bạn mang về từ khóa học này — mỗi cái 1 câu:"* *"Một: AI là máy dự đoán từ — không phải thần thánh. Luôn kiểm chứng kết quả quan trọng."* *"Hai: Prompt tốt = cụ thể + có cấu trúc. 6 thành phần cho bạn kiểm soát hoàn toàn."* *"Ba: Agent tốt hơn chat cho tác vụ lặp lại nhiều bước — giao mục tiêu, không giao từng lệnh."* *"Bốn: Context engineering = dạy AI hiểu công việc của bạn 1 lần, dùng mãi. CLAUDE.md là sổ tay không bao giờ quên."* *"Năm: SKILL.md là tài sản tái sử dụng — không phải chat một lần bỏ. Skill bạn vừa tạo hôm nay sẽ chạy lần thứ 100 tốt như lần đầu."* | Đọc chậm, tự nhiên. Không slide — nói thẳng. Pause nhỏ giữa mỗi điểm. |
| 1:55–1:58 | **Next Steps** | *"Skill bạn vừa tạo hôm nay — dùng ngay tuần tới. Không chờ hoàn hảo hơn. Chạy thật, ghi lại kết quả thật."* *"Sau 2 tuần, nhìn lại: skill tiết kiệm bao nhiêu thời gian? Kết quả có đủ tốt không? Điều chỉnh SKILL.md dựa trên kết quả thực tế — không phải dựa trên lý thuyết."* *"Tài liệu bổ sung và link cộng đồng hỗ trợ — tôi gửi trong chat ngay sau buổi này."* | Gửi link tài liệu + cộng đồng trong chat. |
| 1:58–2:00 | **Poll cuối + Lời kết** | *"Poll cuối khóa: sau 5 buổi, bạn tự tin dùng AI trong công việc ở mức nào? 1 là không tự tin, 5 là rất tự tin."* Launch poll. Đọc kết quả. *"[Đọc kết quả] — so với ngày đầu tiên, khi phần lớn các bạn chưa biết prompt là gì. Đây là kết quả của 10 giờ học thực hành."* *"Cảm ơn mọi người — không phải vì đã tham dự, mà vì đã thực sự làm việc. Mỗi prompt, mỗi brief, mỗi CLAUDE.md, mỗi SKILL.md bạn viết là 1 lần học thật. Hẹn gặp lại!"* | Kết thúc đúng giờ. Không overrun — tôn trọng thời gian học viên. |

---

## Troubleshooting Scenarios

**Kịch bản 1: SKILL.md không chạy được trong lúc trình bày live**
- *Dấu hiệu:* Lỗi Claude Code khi demo, timeout, hoặc output trống
- *Xử lý cho người trình bày:* *"Không sao — lỗi kỹ thuật xảy ra với tất cả mọi người, kể cả developer chuyên nghiệp. Bạn có screenshot output từ lần test trước không? Show cho lớp."* Nếu không có screenshot: *"Đọc SKILL.md của bạn cho lớp nghe — chúng ta đánh giá thiết kế, không chỉ kết quả chạy."* Điều chỉnh tiêu chí 2 từ "chạy live" sang "có evidence đã chạy được".

**Kịch bản 2: Học viên không có gì để trình bày (SKILL.md chưa xong)**
- *Dấu hiệu:* Cuối Block B vẫn chưa có SKILL.md hoàn chỉnh
- *Xử lý:* *"Được — trình bày bản nháp. Show 6 phần của SKILL.md, kể cả phần chưa điền xong. Giải thích bạn đã nghĩ đến những gì. Feedback từ lớp sẽ giúp bạn hoàn thiện sau buổi học."* Không để học viên bỏ trình bày — partial work vẫn có giá trị.

**Kịch bản 3: Thời gian trình bày vượt quá 3 phút**
- *Dấu hiệu:* Người trình bày nói quá dài phần demo hoặc phần vấn đề
- *Xử lý:* Khi còn 30 giây: gõ "30 giây" vào chat hoặc bật unmute nhanh để nhắc nhẹ. Sau 3 phút: *"Cảm ơn bạn — thời gian đã hết. 1 câu cuối để kết thúc."* Không cho phép overtime vì ảnh hưởng người sau. Nhưng không cắt giữa demo — đợi demo tự nhiên kết thúc.

**Kịch bản 4: Lớp nhỏ — ít hơn 5 học viên trình bày**
- *Dấu hiệu:* Ít học viên, trình bày xong sớm hơn kế hoạch
- *Xử lý:* Dành thời gian thêm cho Q&A chuyên sâu sau mỗi bài. *"Vì lớp nhỏ, sau mỗi bài trình bày chúng ta sẽ có 3 phút feedback thay vì 1 phút."* Hoặc yêu cầu mỗi người trình bày lần 2 với cải thiện dựa trên feedback vừa nhận.

**Kịch bản 5: Feedback từ lớp quá nhẹ hoặc quá tiêu cực**
- *Dấu hiệu:* Học viên chỉ gõ "hay lắm" hoặc ngược lại chỉ trích kỹ thuật
- *Xử lý (feedback quá nhẹ):* *"Cảm ơn. Tôi muốn thêm: theo rubric tiêu chí 3 — kết quả dùng được ngay — bạn thấy cần thêm gì vào SKILL.md để output tốt hơn?"* *Xử lý (quá tiêu cực):* Nhắc rubric: *"Chúng ta feedback theo 4 tiêu chí — và luôn bắt đầu bằng điểm mạnh trước. Skill này làm gì tốt?"*

---

## Technical Notes — Zoom

- **Timer trình bày:** Dùng Zoom countdown timer hoặc điện thoại đặt ngay trước mặt — không tin vào ước lượng thời gian khi dẫn chương trình
- **Screen share khi trình bày:** Yêu cầu học viên chuẩn bị sẵn: terminal mở, SKILL.md mở, file input mở — chuyển đổi nhanh tránh mất thời gian
- **Poll vote "Skill hữu ích nhất":** Tạo poll với tên từng skill ngay trong Break 2 — khi biết ai sẽ trình bày. Không tạo trước vì danh sách thay đổi
- **Recording:** Ghi lại phần trình bày — học viên thường muốn xem lại demo của mình và của người khác
- **Nếu lớp đông (> 12 người):** Chia thành 2 nhóm parallel showcase trong breakout rooms, facilitator + trợ giảng mỗi người 1 nhóm, sau đó hợp lại vote chung
- **Gửi sau buổi học:** Recording, tài liệu tổng kết, link cộng đồng, template SKILL.md nâng cao — gửi trong vòng 24 giờ
