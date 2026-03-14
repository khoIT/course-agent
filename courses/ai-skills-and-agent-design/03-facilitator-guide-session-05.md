# Hướng Dẫn Giảng Viên v2 — Session 5: Build, Test, Trình Bày (Capstone)

> **Terminal Objective:** Hoàn thiện SKILL.md, test + iterate đến khi stable, trình bày 3 phút trước lớp với live demo.
>
> **Công cụ:** Claude Code + MCP filesystem
> **Thời lượng:** 2 giờ (120 phút)
> **Mental model:** "Tài sản AI tái sử dụng — không phải chat 1 lần bỏ"

---

## Pre-Session Checklist (Trước 15 Phút)

- [ ] Claude Code hoạt động, test `claude` command
- [ ] 2 SKILL.md mẫu (tốt vs kém) chuẩn bị sẵn cho demo so sánh
- [ ] Slide timeline 5 buổi (visual recap toàn khóa)
- [ ] Presentation rubric 4 tiêu chí trên handout/slide
- [ ] Slide advanced patterns (multi-skill, sub-agent) — optional
- [ ] Spaced Practice schedule (Day 3/7/14/30) trên slide
- [ ] Tài liệu bổ sung links (CLAUDE.md template, SKILL.md template, contract-agent repo)
- [ ] 4 Zoom polls pre-configured
- [ ] Timer 3 phút hiển thị cho presentations
- [ ] Dự phòng: nếu demo live lỗi → học viên describe workflow + show SKILL.md text

---

## Zoom Polls

**Poll #1** (0:05): "SKILL.md bản nháp có bao nhiêu bước?" — 1-3 / 4-6 / 7-10 / Chưa có

**Poll #2** (0:55): "Bạn ở đâu?" — Đang viết / Đang test / Đang sửa sau test / Xong, chuẩn bị trình bày!

**Poll #3** (1:45): "Skill hữu ích nhất?" — [Tên skill 1] / [Tên skill 2] / [Tên skill 3] / [Tên skill 4] (cập nhật live)

**Poll #4** (1:58): "Sau khóa học, tự tin dùng AI agent mức nào?" — 1 / 2 / 3 / 4 / 5

---

## Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:05 | **Recap toàn khóa — visual timeline** | *"5 buổi, 1 hành trình: S1 (AI + brief) → S2 (agent delegation) → S3 (context engineering + Code) → S4 (skill design + MCP) → S5 (build your own). Hôm nay bạn về nhà với 1 skill TỰ VIẾT — tài sản AI tái sử dụng."* | Slide timeline. Tạo sense of journey. |
| 0:05–0:08 | **Poll #1** | Launch poll. Nhóm "Chưa có" → hỗ trợ ưu tiên Block B. *"4-6 bước là sweet spot. Nếu chưa có — Block B là thời gian cuối."* | Phân nhóm hỗ trợ. |
| 0:08–0:18 | **SKILL.md review — best practices final** | So sánh 2 SKILL.md: **Kém** (3 dòng chung chung, thiếu ví dụ, thiếu constraints) vs **Tốt** (6 phần đầy đủ, ví dụ cụ thể, tiêu chí rõ). Lớp nhận diện 3 khác biệt. **Test & Iterate loop:** Run → evaluate → identify gap → refine → run again. Demo live: chạy skill mẫu → output thiếu 1 phần → sửa SKILL.md thêm constraint → chạy lại → output đầy đủ. *"Iterate là kỹ năng cốt lõi."* | Slide 1-6. 2 file mẫu chuẩn bị trước. |
| 0:18–0:25 | **Advanced patterns (tùy chọn)** | (1) **Multi-skill stacking:** nhiều skill cùng lúc → pipeline. (2) **Sub-agent within skill:** 1 skill gọi sub-agent cho 50 file song song. (3) **CLAUDE.md + SKILL.md ecosystem:** CLAUDE.md = quy tắc chung, SKILL.md = quy trình cụ thể → AI chọn skill phù hợp. *"Nấc tiếp — không cần làm ngay, biết nó tồn tại."* | Slide 7-9. Nếu thời gian eo hẹp → CẮT phần này. |
| 0:25–0:30 | **Presentation rubric — 4 tiêu chí** | (1) **Vấn đề:** Ai gặp vấn đề gì? Mất bao lâu trước đây? (2) **Demo:** Skill chạy, không lỗi, output hiện. (3) **Kết quả:** Output dùng được? Tiết kiệm bao phút? (4) **Trình bày:** Mạch lạc, đúng 3 phút, tự tin. Cấu trúc: **30s** vấn đề → **90s** demo → **60s** kết quả. | Slide 10-12. Rubric handout share chat. |
| 0:30–0:35 | **Workshop prep** | *"Block B = thời gian cuối hoàn thiện + test. Mục tiêu: SKILL.md chạy được + biết nói gì 3 phút. Câu hỏi gì?"* | Transition nhanh → Break 1. |

**Script mở đầu Session 5:**

> *"Buổi cuối! Nhìn lại: S1 bạn gõ prompt đầu tiên. S2 bạn giao brief cho agent. S3 bạn viết CLAUDE.md. S4 bạn thiết kế SKILL.md. Hôm nay: bạn hoàn thiện, test, và TRÌNH BÀY skill trước lớp — live demo. Khi bạn rời khỏi đây, bạn có 1 tài sản AI — không phải chat 1 lần bỏ, mà quy trình chạy 100 lần."*

**Transition Block A → Break 1:**

> *"5 phút nghỉ. Khi quay lại: 35 phút build time — thời gian cuối hoàn thiện SKILL.md. Sau đó: trình bày."*

---

## Block B — Build Time (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:55 | **Workshop: Hoàn thiện SKILL.md** | Dựa trên homework. Facilitator "đi vòng quanh" chat: *"Đang viết skill gì? Gặp khó ở đâu?"* Hỗ trợ 1-1 screen share nếu cần. Gợi ý stuck: quay lại 4-step Workflow Decomposition S4. | Peer mentoring: "Xong" giúp "Đang viết". |
| 0:55–1:00 | **Poll #2 — Checkpoint** | Launch poll. *"Nhóm 'Xong' — giúp người bên cạnh. Nhóm 'Đang viết' — 10 phút nữa, focus Steps + Examples."* | Peer mentoring activate. |
| 1:00–1:10 | **Test & Iterate** | Chạy SKILL.md trên Claude Code với 2 input khác nhau. Đánh giá output theo tiêu chí chất lượng. Sửa ít nhất 1 vòng. Ghi: before/after — cụ thể sửa gì → kết quả tốt hơn. | Iterate = skill cốt lõi được lặp lại S2→S4→S5. |
| 1:10–1:15 | **Peer Preview** | Chat: *"Mô tả skill 1 câu: 'Skill này giúp [ai] làm [gì] tốt hơn bằng cách [cách nào].'"* Chọn 2-3, hỏi: *"Demo sẽ trông thế nào?"* | Warm-up cho presentations. |

**During Activity — Hành động facilitator:**
- Phút 42: *"Ai đang hoàn thiện Steps? Ai đang viết Examples?"*
- Phút 47: *"Ai gặp khó? Gõ 'help + mô tả vấn đề' vào chat."*
- Phút 52: *"5 phút nữa trước checkpoint. Focus phần chưa xong."*
- Phút 1:02: *"Test! Chạy SKILL.md. Output có đúng tiêu chí không?"*
- Phút 1:07: *"Sửa 1 điểm trong SKILL.md. Chạy lại. So sánh."*
- Hỗ trợ 1-1 qua chat hoặc screen share cho người stuck nghiêm trọng

**Early Finisher Tasks:** Test với input thứ 3 (edge case) → viết presentation script 3 phút → hoặc thử multi-skill stacking nếu có 2 skill.

---

## Block C — Presentations + Feedback (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:45 | **Trình bày Skill — 3 phút mỗi người** | Cấu trúc bắt buộc: **(1) 30s Vấn đề:** *"Trước đây, tôi mất ___ phút để ___."* **(2) 90s Demo:** chạy skill live screen share. **(3) 60s Kết quả:** *"Skill tạo ___, tiết kiệm ___ phút, chất lượng ___."* Sau mỗi bài: 2 người phản hồi theo rubric + facilitator bình luận. **Nếu >10 người:** 7-8 live, còn lại paste SKILL.md chat + mô tả 2 câu. | Timer 3 phút hiển thị. Target: 7-8 bài. |
| 1:45–1:50 | **Vote + Recognition** | Zoom poll: "Skill hữu ích nhất" + "Skill sáng tạo nhất." Công bố + lý do. *"Skill được vote = validated bởi đồng nghiệp."* | Cập nhật poll options live dựa trên presentations. |

**During Presentations — Hành động facilitator:**
- Giữ timer nghiêm — 3 phút/người. Nhắc nhẹ ở 2:30
- Sau mỗi bài: *"Ai có feedback? Dùng rubric: Vấn đề rõ? Demo chạy? Kết quả dùng được? Trình bày mạch lạc?"*
- Bình luận facilitator: 1 điểm mạnh cụ thể + 1 gợi ý cải thiện
- Nếu demo lỗi: *"Không sao — describe workflow, show SKILL.md text. Lỗi demo = cơ hội iterate thêm."*
- Ghi chú skill hay để mention trong wrap-up

**Script mở đầu Presentations:**

> *"Bắt đầu trình bày! Nhắc lại: 30 giây vấn đề — 90 giây demo live — 60 giây kết quả. Timer 3 phút. Ai xung phong đầu tiên?"*

**Script nếu không ai xung phong:**

> *"Tôi sẽ gọi tên. [Tên], bạn viết skill gì? Mời bạn share screen."*

---

## Block D — Course Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **5 takeaway — 1 câu mỗi cái** | (1) AI = nhân viên mới xuất sắc — brief rõ, kiểm chứng luôn. (2) Agent > Chat cho tác vụ lặp lại — 3-Question Framework. (3) Context engineering = thiết kế cách AI hiểu công việc 1 lần, dùng mãi — CLAUDE.md. (4) SKILL.md = tài sản tái sử dụng — không phải chat 1 lần bỏ. (5) Iterate = kỹ năng cốt lõi — mọi workflow cải thiện qua refine. | Slide tổng kết. |
| 1:55–1:57 | **Spaced Practice plan** | Ngày 3: Chạy skill với tác vụ thực tế. Ngày 7: Sửa SKILL.md dựa trên tuần đầu. Ngày 14: Viết SKILL.md thứ 2. Ngày 30: Review cả 2, optimize. *"4 mốc để kỹ năng thành thói quen."* | Slide. |
| 1:57–1:58 | **Tài liệu bổ sung** | Share links chat: CLAUDE.md template, SKILL.md template, contract-agent repo, cộng đồng hỗ trợ (nếu có). | Paste links chat trước khi close. |
| 1:58–2:00 | **Poll #4 + Kết thúc** | Launch poll: "Tự tin dùng AI agent mức nào? 1-5." Đọc kết quả. *"Cảm ơn mọi người. Bạn rời đây với 1 skill TỰ VIẾT, 1 CLAUDE.md, và 5 brief. Đó là tài sản AI — dùng ngay mai, dùng tháng sau, dùng năm sau. Hẹn gặp lại!"* | Kết thúc đúng giờ. |

**Script 5 takeaway:**

> *"5 điều mang về:*
> *Một — AI là nhân viên mới xuất sắc. Giỏi, nhưng cần brief rõ, và bạn LUÔN kiểm chứng.*
> *Hai — Agent tốt hơn chat cho tác vụ lặp lại. 3 câu hỏi: Done trông thế nào? Context gì thiếu? Ràng buộc gì?*
> *Ba — Context engineering không phải 'prompt tips'. Thiết kế cách AI hiểu công việc bạn — 1 lần viết, dùng mãi. CLAUDE.md = sổ tay nhân viên.*
> *Bốn — SKILL.md là tài sản. Chat xong bỏ. Skill viết 1 lần, chạy 100 lần.*
> *Năm — Iterate. Mọi skill, mọi brief — đều cải thiện qua 3+ vòng. Lần đầu không bao giờ hoàn hảo."*

---

## Troubleshooting (5 Kịch Bản)

**1. Học viên chưa có SKILL.md khi đến S5**
- *Xử lý:* Block B = 35 phút build. *"Dùng contract-agent SKILL.md làm template. Thay Purpose, Input, Steps cho tác vụ bạn. 15 phút viết, 10 phút test."* Cho template pre-filled trên slide.

**2. Demo live lỗi khi trình bày**
- *Xử lý:* *"Không sao — describe workflow. Show SKILL.md text. Giải thích input gì, output gì, các bước. Lỗi demo = iterate thêm."* Không trừ điểm demo — đánh giá theo rubric tổng thể.

**3. Quá nhiều người muốn trình bày (>10 người)**
- *Xử lý:* 7-8 live (ưu tiên người xung phong + diverse skill types). Còn lại: paste SKILL.md + mô tả 2 câu vào chat. Facilitator bình luận nhanh 2-3 cái.

**4. Quá ít người muốn trình bày (<4 người)**
- *Xử lý:* Gọi tên trực tiếp: *"[Tên], bạn viết skill gì? Mời share screen."* Hoặc chuyển format: facilitator hỏi, học viên trả lời — interview style thay vì presentation.

**5. Thời gian trình bày vượt quá (>3 phút/người)**
- *Xử lý:* Timer nghiêm. Nhắc nhẹ 2:30. Ở 3:00: *"Cảm ơn! 1 câu kết luận cuối?"* Giữ pace — tốt hơn cắt ngắn còn hơn bỏ người cuối.

---

## FAQ Dự Kiến (5 Câu)

**Q1: "Sau khóa học, nên bắt đầu từ đâu?"**
A: Ngày 3: chạy skill đã viết với tác vụ thật. Ngày 7: sửa SKILL.md. Ngày 14: viết skill thứ 2. 4 mốc = thói quen. Đừng cố viết 10 skill cùng lúc.

**Q2: "Có cộng đồng hỗ trợ sau khóa không?"**
A: [Tùy setup — Slack/Teams group, office hours, hoặc email facilitator]. Share link cuối buổi.

**Q3: "Nên chia sẻ SKILL.md với team thế nào?"**
A: Đặt trong shared folder (Google Drive/OneDrive). Đồng nghiệp clone folder, chạy Claude Code trong đó. SKILL.md portable — chạy được trên máy bất kỳ.

**Q4: "AI có thể tự viết SKILL.md cho tôi không?"**
A: Có thể draft — nhưng BẠN phải review. Anti-pattern: đừng auto-generate. SKILL.md tốt nhất khi người viết HIỂU workflow. AI hỗ trợ draft, bạn iterate.

**Q5: "Khi nào nên viết SKILL.md mới vs sửa cái cũ?"**
A: Cùng loại tác vụ → sửa cái cũ (thêm edge case, ví dụ). Tác vụ khác hoàn toàn → viết mới. Rule of thumb: nếu input/output format giống → sửa. Khác → mới.

---

## Energy Management — Session 5

- **S5 = buổi cuối** — mix năng lượng: hào hứng hoàn thành + lo lắng trình bày
- Block A: recap visual timeline → cảm giác "journey complete" — energy boost
- Block B (build time): working session, không lecture → năng lượng ổn định. Peer mentoring tạo social energy
- **Presentations (Block C) = peak energy** — mỗi người trình bày = adrenaline. Clapping/reactions sau mỗi bài
- Vote + Recognition → positive energy đỉnh điểm
- Block D: kết thúc bằng takeaway + spaced practice → sense of closure + forward momentum
- Nếu lớp mệt trước presentations → *"Đứng dậy 30 giây. Vận động. Sẵn sàng cho trình bày!"*
- KHÔNG kéo dài sau 2:00 — kết thúc đúng giờ = professional

---

## Technical Notes — Zoom

- **Timer:** Hiển thị timer 3 phút trên screen khi presentations (Zoom timer hoặc online timer share screen)
- **Reactions:** Khuyến khích dùng Zoom reactions (clap, thumbs up) sau mỗi bài trình bày
- **Poll #3 (vote):** Cập nhật poll options SAU khi presentations xong — dùng tên skill thật
- **Share screen:** Học viên share screen khi trình bày. Facilitator share slide khi giải thích rubric/recap
- **Recording:** Ghi lại presentations (nếu học viên đồng ý) — tài liệu reference sau khóa
- **Links cuối buổi:** Paste tất cả links tài liệu bổ sung vào chat TRƯỚC khi close meeting
- **Trợ giảng:** Ghi chú tên skill + key points mỗi bài trình bày → facilitator dùng khi tổng kết
