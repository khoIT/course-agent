# Hướng dẫn Giảng viên — Buổi 3, 4 & 5
# Prompt Engineering với Claude Code & Cowork

> Đối tượng: HR, Marketing, Finance, Ops (không có nền kỹ thuật)
> Format: Online 60 min/buổi | Tiếng Việt

---

## Buổi 3 — Kỹ thuật nâng cao: Dạy AI bằng ví dụ & Slash Commands (60 min)

**Mục tiêu:** LO5 (few-shot trong Claude Code), LO6 (thiết kế CLAUDE.md với examples)

### Setup kỹ thuật (trước 10 min)
- [ ] Mở terminal, chạy `claude` — xác nhận kết nối
- [ ] Chuẩn bị file `feedback-samples.txt`: 10 dòng feedback khách hàng (positive/negative/neutral)
- [ ] Soạn sẵn CLAUDE.md mẫu HR (email templates + classification examples) — chưa mở
- [ ] Slide loaded, test animation. Backup: screenshot outputs nếu API down
- [ ] Breakout rooms: giữ nhóm buổi 2 (đã quen)

### Bảng Timing

| Thời gian | Hoạt động | Script giảng viên | Micro-action |
|-----------|-----------|-------------------|--------------|
| 0:00–0:03 | Warm-up | "Tuần qua ai đã thử RTT hoặc CO-STAR trong Claude Code? Paste prompt vào chat — dù tốt hay chưa tốt đều được. Tôi đọc trong 60 giây." | Đọc 2 câu trả lời. Khen cụ thể: "Bạn dùng CO-STAR cho weekly report — đúng use case! Buổi này sẽ nâng lên level mới." |
| 0:03–0:05 | WHY | "Có lúc mô tả rõ ràng mà AI vẫn ra format sai. Vì sao? Giống dạy nhân viên mới: ngoài giải thích quy trình, bạn cần CHO XEM bài mẫu. AI cũng vậy. Cho 2-3 ví dụ → accuracy tăng 30–60%." | Nhấn con số 30–60%. Analogy nhân viên mới — không kỹ thuật, dễ hiểu. |
| 0:05–0:13 | WHAT 1: Few-shot | "Zero-shot = không ví dụ. Few-shot = 2-3 ví dụ trước câu hỏi." [Gõ trong terminal:] `Phân loại feedback sau: "Giao hàng chậm quá!" → ?` → show messy output. [Thêm 2 examples:] `Ví dụ: "Sản phẩm tuyệt vời" → Positive. "Không hài lòng về giá" → Negative. Phân loại: "Giao hàng chậm quá!" → ?` → Negative. "Thấy chưa — chỉ 2 dòng ví dụ, AI hiểu pattern ngay." | Demo LIVE từng bước. Sau zero-shot hỏi: "Kết quả này đủ để dùng chưa?" (chờ chat). Sau few-shot: "Khác gì?" Highlight sự thay đổi rõ ràng. |
| 0:13–0:15 | Check-in | "Task nào bạn muốn AI output đúng format? Gõ 1 ví dụ vào chat. Ví dụ: phân loại email, extract số từ hóa đơn, format báo cáo." | Đọc 3 responses. "Hay — đây là use case perfect cho few-shot. Cùng thực hành ngay." |
| 0:15–0:30 | Activity 3: Few-shot trong CLI | "Worksheet Activity 03 — ví dụ 1 đã có sẵn hoàn chỉnh. Bạn viết ví dụ 2 và 3, rồi paste vào terminal. 15 min breakout." | **Vào room mỗi 4 min.** 0:19: "Đã test chưa? Paste trước khi hoàn thiện — xem output, rồi sửa." 0:24: "Ai thấy output cải thiện? Gõ vào chat con số: bao nhiêu % tốt hơn theo cảm nhận." Nếu ai chưa bắt đầu: "Mở terminal → paste ví dụ 1 của worksheet trước, test thử." |
| 0:30–0:33 | Transition + /clear | "Few-shot dạy AI FORMAT. Nhưng few-shot chỉ sống trong 1 session. Bạn đóng terminal — mất hết." [Demo:] Gõ `/clear` → terminal reset. "Đây là lúc CLAUDE.md phát huy. Và trước khi đó — giới thiệu các slash commands." | Dừng 5 giây sau khi gõ `/clear` cho learners thấy terminal reset hoàn toàn. "Tác dụng của /clear là gì theo bạn?" (chat nhanh). |
| 0:33–0:41 | WHAT 2: CLAUDE.md + Slash Commands | "4 slash commands cần nhớ: `/help` = xem commands. `/clear` = reset context. `/compact` = tóm tắt hội thoại dài, tiết kiệm token. `/model` = chuyển model." [Demo CLAUDE.md HR:] Mở file đã soạn. Show cấu trúc: `## Project` → `## Examples` (few-shot templates) → `## Output Rules`. Chạy `claude` → AI tự nhớ examples. "Few-shot trong prompt = nhớ 1 session. Few-shot trong CLAUDE.md = nhớ mãi." | Highlight `/compact` — hay dùng khi hội thoại dài. "Khi nào dùng /compact vs /clear? /compact = giữ context nhưng gọn hơn. /clear = bắt đầu lại hoàn toàn." |
| 0:41–0:53 | Activity 4: Design Your CLAUDE.md | "Mỗi người thiết kế CLAUDE.md cho phòng ban mình. 3 phần bắt buộc: (1) Project description, (2) ≥2 few-shot examples từ công việc thật, (3) Output rules. 12 min — làm cá nhân, test trong Claude Code." | **0:46:** "Đã có Project description chưa? Đó là nền tảng." **0:50:** "Examples: lấy từ công việc thật — email thật, report thật (xóa thông tin nhạy cảm). AI học từ pattern thực, không phải ví dụ generic." **0:52:** Nhắc: "Test ngay: chạy `claude`, hỏi task liên quan — CLAUDE.md có hoạt động không?" |
| 0:53–0:57 | Debrief | "Ai test xong? CLAUDE.md hoạt động như mong đợi không?" [Chờ 3 responses] "Đây là key insight: Few-shot trong prompt = bộ nhớ ngắn hạn. CLAUDE.md = bộ nhớ dài hạn. Dùng cả hai cho best results." | Vẽ trên screen: Short-term (prompt few-shot) ←→ Long-term (CLAUDE.md). |
| 0:57–1:00 | SO WHAT | "3 tools bạn vừa học: Few-shot = dạy format. CLAUDE.md = dạy context. Slash commands = quản lý session. Homework: hoàn thiện CLAUDE.md phòng ban, mang lại buổi 4 — chúng ta sẽ build template system trên nền đó." | Preview cụ thể: "Buổi 4 = từ CLAUDE.md → cowork templates. Ai đã có CLAUDE.md tốt sẽ xong Activity 5 trong 10 min." |

### Troubleshooting

**Scenario 1: Few-shot không cải thiện output**
- *Trigger:* "Tôi thêm ví dụ nhưng kết quả vẫn giống zero-shot"
- *Giải pháp:* "Kiểm tra 2 thứ: (1) Ví dụ có đa dạng không? 3 ví dụ cùng loại → AI không học được pattern phân biệt. (2) Format ví dụ có khớp output mong muốn không? Ví dụ phải SHOW đúng cái bạn cần thấy." Demo live trên terminal của họ nếu được.

**Scenario 2: Lỗi cú pháp CLAUDE.md — AI bỏ qua nội dung**
- *Trigger:* Chạy `claude` nhưng AI không áp dụng rules trong CLAUDE.md
- *Giải pháp:* "Kiểm tra: (1) File tên đúng `CLAUDE.md` chưa? Case-sensitive. (2) CLAUDE.md có nằm đúng folder bạn đang `cd` vào không? (3) Nội dung có rõ ràng không — AI cần instructions dạng bullet/heading, không phải đoạn văn dài." Gõ `/help` trong session để confirm file được load.

**Scenario 3: Nhầm lẫn slash commands (gõ sai, không có tác dụng)**
- *Trigger:* Học viên gõ `/clean` thay `/clear`, hay nhầm `/compact` với `/compress`
- *Giải pháp:* "Gõ `/help` trong terminal — list đầy đủ commands hiện ra. Bookmark 4 commands cần dùng: `/help`, `/clear`, `/compact`, `/model`. Còn lại chưa cần thiết ở giai đoạn này."

### Engagement Checkpoints
- **0:12** (sau demo few-shot): "Ai thấy sự khác biệt rõ ràng? Gõ +1 vào chat." Nếu ít phản hồi → re-demo chậm hơn, highlight cụ thể từng dòng.
- **0:24** (giữa Activity 3): Kiểm tra room — nếu ai chưa paste vào terminal: "Test trước khi perfect. Paste ngay, xem output, rồi sửa." Không cho ngồi viết mà không test.
- **0:40** (sau CLAUDE.md demo): "Raise hand ảo nếu bạn thấy đây là thứ bạn sẽ dùng từ tuần sau." Nếu < 50%: "Ai chưa raise hand — task nào bạn lặp lại nhất? Đó chính là nơi CLAUDE.md giúp được."
- **0:52** (cuối Activity 4): "Ai đã test CLAUDE.md thành công? Paste 1 câu kết quả vào chat."

---

## Buổi 4 — Cowork Workflow: Template System & Quality Loop (60 min)

**Mục tiêu:** LO7 (template + CLAUDE.md config), LO8 (quality evaluation + iteration)

### Setup kỹ thuật (trước 10 min)
- [ ] Terminal mở, CLAUDE.md demo đã loaded
- [ ] File `weekly-report-template.md` sẵn sàng: prompt có [BIẾN] highlighted
- [ ] 2 sample outputs (1 good: score 18/20, 1 poor: score 9/20) cho quality demo
- [ ] Breakout rooms: NHÓM THEO NGÀNH (HR cùng nhau, Marketing cùng nhau)
- [ ] Pair plan cho Activity 6: cross-industry pairs (HR ↔ Marketing, Finance ↔ Ops)
- [ ] Rubric slide ready với 4 tiêu chí

### Bảng Timing

| Thời gian | Hoạt động | Script giảng viên | Micro-action |
|-----------|-----------|-------------------|--------------|
| 0:00–0:03 | Warm-up | "Share CLAUDE.md hoặc few-shot prompt hay nhất từ homework — paste vào chat. Kể cả chưa hoàn thiện cũng được." | Đọc 2 examples. Khen specific: "CLAUDE.md của bạn có Output Rules rõ — đó là điểm quan trọng!" Nếu ít ai làm homework: "Không sao — Activity hôm nay build từ đầu luôn." |
| 0:03–0:07 | WHY + demo | "1 prompt tốt = 1 task. 1 CLAUDE.md tốt = 100 tasks. Nhưng 1 cowork SYSTEM = cả team làm AI hiệu quả mà không cần mỗi người tự reinvent." [Demo:] Gõ prompt generic → output generic. Gọi CLAUDE.md có template context → output đúng format, đúng tone, đúng thuật ngữ phòng ban. "Chênh lệch là đây: 30 giây viết prompt vs 2 phút setup — nhưng template dùng được 100 lần." | Side-by-side output trên screen. Điểm rõ: "Output 2 dùng đúng tên bộ phận, đúng format công ty — không cần hướng dẫn lại." |
| 0:07–0:08 | Chat check | "Workflow nào trong ngành bạn lặp lại hàng tuần? Gõ 1 ví dụ." | Collect: "weekly report", "meeting minutes", "campaign brief" — dùng ngay trong phần tiếp theo. |
| 0:08–0:16 | WHAT 1: Template system | "Template = prompt framework + context + [BIẾN]. BIẾN = phần thay đổi mỗi lần dùng." [Demo weekly report template:] `Role: Finance analyst tại [TÊN CÔNG TY]. Context: [DÁN DATA]. Task: Tóm tắt thành executive summary theo format [TÊN TEMPLATE]. Format: bullet points, max 5 điểm.` "Dấu ngoặc vuông = BIẾN. Mỗi tuần chỉ thay [DÁN DATA] và [TÊN TEMPLATE] — còn lại cố định." [Demo: lưu template.md vào project folder → `claude` đọc file: `Đọc file weekly-report-template.md và điền biến với data sau: ...`] | Highlight [BIẾN] trên screen bằng màu khác. "Template tốt = viết 1 lần, dùng 50 lần. Nhân viên mới vào team cũng dùng được ngay." |
| 0:16–0:18 | Pair share | "2 min breakout pairs: nghĩ 1 task lặp lại hàng tuần bạn muốn template hóa. Kể cho nhau nghe." | Đếm nghiêm: "30 giây nữa quay lại main room." Sau khi về: "Ai muốn share task mình chọn?" |
| 0:18–0:35 | Activity 5: Template Factory | "17 min để tạo 3 prompt templates cho công việc thực tế. Không template có sẵn lần này — bạn tự build từ frameworks đã học. Checklist: ☐ Role? ☐ Context cụ thể ngành? ☐ Task rõ? ☐ Format? ☐ [BIẾN] đánh dấu? Lưu vào project folder. Test với `claude`." [Breakout rooms theo ngành] | **0:22:** "Bạn đã có template đầu tiên chưa? Target 3. Ai xong 2 rồi? Gõ số vào chat." **0:28:** "Còn 7 min — focus: có [BIẾN] rõ ràng chưa? Test ít nhất 1 template trong terminal." **0:33:** "Wrap up — chọn template mạnh nhất, chuẩn bị cho Activity 6." |
| 0:35–0:43 | WHAT 2: Quality rubric | "Template xong — nhưng output tốt nghĩa là gì? 4 tiêu chí, 1–5 điểm mỗi tiêu chí." [Slide:] **Accuracy** (thông tin đúng), **Completeness** (đủ chi tiết), **Tone** (giọng phù hợp audience), **Actionability** (người đọc biết làm gì tiếp). [Demo đánh giá output kém:] "Output này: Accuracy 4, Completeness 2, Tone 4, Actionability 1. Tổng 11/20. Vấn đề? Người đọc không biết bước tiếp theo." [Demo iterate:] Sửa prompt → `/clear` → test lại. Score mới: 16/20. | "Actionability thường bị bỏ qua nhất. Hỏi: 'Nếu sếp đọc xong, họ biết làm gì ngay không? Nếu không — thêm Next Steps vào prompt.'" |
| 0:43–0:55 | Activity 6: Quality Loop | "Cross-pair: hoán đổi template với người ngành khác. Họ test template của bạn → score theo rubric → viết feedback → bạn iterate trong terminal → so sánh score trước/sau. 12 min." [Breakout rooms cross-industry] | **0:47:** "Score đã xong chưa? Viết feedback cụ thể: 'Actionability: 2/5 vì thiếu next steps' — không phải 'cần cải thiện'." **0:51:** "Người nhận feedback: sửa prompt, `/clear`, test lại. So sánh score." **Nếu ai kháng cự feedback:* "Peer review = đánh giá OUTPUT, không đánh giá bạn. Câu hỏi: 'Nếu nhận email này từ AI, bạn gửi cho sếp ngay không?'" |
| 0:55–0:58 | Debrief | "Pattern từ peer review là gì? Chat nhanh — 1 từ hoặc 1 câu." [Đọc responses] "Common pattern: context chuyên ngành cần explicit hơn bạn nghĩ. Người ngoài ngành không hiểu — AI cũng không hiểu." | "Kết luận: nếu peer không hiểu template → AI cũng không hiểu → thêm context." |
| 0:58–1:00 | SO WHAT | "Template + CLAUDE.md + Rubric = Cowork system. Bạn vừa tạo hệ thống quality control cho AI. Homework: đánh giá 1 output thật từ Claude Code bằng rubric 4 tiêu chí — mang score lại buổi 5." | Preview: "Buổi 5 = organize everything + deploy cho team. Ai có ≥5 templates và CLAUDE.md tốt sẽ xong Activity 7 trong 10 min." |

### Troubleshooting

**Scenario 1: Không nhận ra task nào để template hóa**
- *Trigger:* "Tôi không biết task nào lặp lại"
- *Giải pháp:* "Mở lịch tuần trước. Meetings nào → mỗi meeting cần gì? Agenda, minutes, follow-up email = 3 templates. Hoặc: Mỗi thứ Hai bạn làm gì đầu tiên? Đó thường là task lặp lại nhất." Demo mở calendar live nếu cần.

**Scenario 2: Kháng cự peer review ("hay lắm không cần sửa")**
- *Trigger:* Feedback quá nhẹ, không actionable
- *Giải pháp:* Reframe: "Không phải đánh giá bạn — đánh giá template. Hỏi 1 câu cụ thể: 'Nếu bạn nhận output này, bạn có gửi thẳng cho sếp không? Nếu không — thiếu gì?'" Buộc người review trả lời câu đó.

**Scenario 3: Template quá generic (chưa có context ngành)**
- *Trigger:* Template trông giống RTT prompt từ buổi 1-2, không có gì mới
- *Giải pháp:* "Template này khác gì prompt thường? Nếu giống nhau — thêm 3 thứ: (1) tên phòng ban, (2) quy trình cụ thể công ty, (3) thuật ngữ ngành." Demo trực tiếp trên template của họ: "HR Department → 'HR phòng Talent Acquisition, quy trình onboarding 5 bước của công ty.'"

### Engagement Checkpoints
- **0:06** (sau WHY demo): "Ai thấy 2 output khác nhau rõ ràng? Gõ +1." Nếu < 5 responses: re-demo chậm hơn, hỏi "Khác nhau ở điểm nào?"
- **0:22** (giữa Template Factory): Announce: "Trung bình lớp đang có X templates. Target 3 trước khi ra khỏi room." (Ước lượng từ những gì thấy)
- **0:40** (trước peer review): "Nhắc rubric: 4 tiêu chí, 1–5 điểm mỗi tiêu chí. Viết số cụ thể, không phải nhận xét chung."
- **0:51** (giữa Quality Loop): "Ai đã iterate và thấy score tăng? Gõ score trước/sau vào chat."

---

## Buổi 5 — Hệ thống hóa & Triển khai Team (60 min)

**Mục tiêu:** LO9 (cowork workspace), LO10 (team deployment plan)

### Setup kỹ thuật (trước 10 min)
- [ ] Terminal với workspace demo đã organize (folder structure chuẩn)
- [ ] Slide deployment framework: Champions → Pilot → Expand
- [ ] Breakout rooms: NHÓM THEO NGÀNH (consistent với buổi 4)
- [ ] Timer visible cho workshop activities
- [ ] Poll ready: "Team bạn có bao nhiêu người sẵn sàng dùng Claude Code?" (1–3 / 4–10 / 10+)
- [ ] Activity 08 canvas (30-Day Plan) distributed trước

### Bảng Timing

| Thời gian | Hoạt động | Script giảng viên | Micro-action |
|-----------|-----------|-------------------|--------------|
| 0:00–0:06 | Warm-up + WHY | "5 buổi vừa qua: bạn đã học từng kỹ năng riêng lẻ. Hôm nay kết nối tất cả lại." [Chat:] "Bạn đã dùng Claude Code workflow nào trong tuần? Kết quả — kể cả thất bại cũng có giá trị." [Đọc 2-3 responses. Sau đó:] "1 người dùng Claude Code tốt tiết kiệm 2 giờ/ngày. Team 10 người = 20 giờ/tháng. Nhưng 10 cách làm khác nhau = hỗn loạn. Cần SYSTEM: shared CLAUDE.md, prompt library, workspace chuẩn." | Viết math trên screen: `2h × 20 ngày × 10 người = 400h/tháng`. "Đó là ROI bạn sẽ present cho manager." Nếu ai hỏi "400h/tháng realistic không?" → "Thực tế 30–50% = 120–200h. Vẫn là con số đáng trình bày." |
| 0:06–0:12 | WHAT 1: Workspace structure | "Cowork workspace = 4 thành phần." [Demo terminal:] `ls` trong workspace demo. Cấu trúc: `prompts/` (theo loại: email/, report/, analysis/), `CLAUDE.md` (shared team rules + project context), `templates/` (prompt templates với [BIẾN]), `outputs/` (version-controlled outputs). Naming: `email-rtt-v2.md`, không phải `my-prompt-3.md`. "Người mới vào team, AI 2 tuần sau — đều hiểu ngay." | Nhấn naming: "`email-rtt-v2.md` = task + framework + version. Dễ tìm, dễ update." Demo `ls prompts/email/` — thấy structure sạch. |
| 0:12–0:14 | Poll | "Team bạn có bao nhiêu người sẵn sàng dùng Claude Code?" [1–3 / 4–10 / 10+] | Dùng kết quả frame tiếp theo: "60% có team 4–10 — perfect size cho pilot program." |
| 0:14–0:32 | Activity 7: Build Your Workspace | "18 min để organize TẤT CẢ prompts + CLAUDE.md từ buổi 1–4 thành workspace chuẩn. Target: ≥10 prompts, organized, named, CLAUDE.md shared. Template trong Activity 07 worksheet." [Breakout rooms, làm cá nhân] | **0:18:** "Bao nhiêu prompts rồi? Gõ số vào chat." Announce average. **0:24:** "Còn 8 min — focus naming và CLAUDE.md shared. Đảm bảo tên file tự giải thích nội dung." **0:29:** "Wrap up: chọn 3 prompts mạnh nhất để giới thiệu trong Activity 8." Early finishers: "Viết 1 câu mô tả mỗi prompt — người chưa biết cũng hiểu dùng khi nào." |
| 0:32–0:35 | Transition | "Workspace cá nhân xong. Câu hỏi: nếu bạn nghỉ phép 2 tuần, đồng nghiệp dùng workspace của bạn được không? Nếu chưa → cần deployment plan." [Pause 3 giây] "Đó là mục tiêu 30 phút tiếp theo." | Câu hỏi rhetorical nhưng đợi phản ứng. Ai nói "được" → "Tuyệt vời, bạn chia sẻ bí quyết organize cho nhóm trong Activity 8." |
| 0:35–0:41 | WHAT 2: Team deployment | "3 giai đoạn triển khai: Champions → Pilot → Expand." [Slide:] Champions = 2-3 người hào hứng, setup workspace + workflows. Pilot = 3 tasks cụ thể, 2 tuần, đo kết quả. Expand = share results, onboard more. [Blockers thực tế:] 'Terminal khó dùng' → Guide install + first prompt (15 min onboarding). 'Web đủ rồi' → Show 1 task cụ thể mất 10 min trên web, 2 min trên Claude Code. Số liệu thực tế thuyết phục hơn lý thuyết." | "Đừng force adoption. Show value → người tự theo. Sai lầm phổ biến nhất = bắt buộc dùng mà không chứng minh được ROI." |
| 0:41–0:53 | Activity 8: 30-Day Cowork Plan | "Nhóm 3–4 người cùng ngành. 12 min build kế hoạch 30 ngày: Week 1 (install + champions + 3 pilot tasks), Week 2 (pilot + data), Week 3 (shared CLAUDE.md + feedback), Week 4 (expand + measure ROI). Canvas worksheet có sẵn." | **0:44:** "Week 1 phải có: tên cụ thể (không phải 'team'), task cụ thể (không phải 'AI tasks')." **0:49:** "Còn 4 min — chuẩn bị pitch 30 giây: WHO does WHAT by WHEN, success = ?." Nếu quá ambitious: "Pick 3 tasks, not 10. 1 win nhỏ thuyết phục hơn 10 kế hoạch thất bại." Nếu quá vague: "Thay 'marketing team' bằng tên người cụ thể." |
| 0:53–0:57 | Gallery walk + vote | "Mỗi nhóm: 30 giây pitch. Vote: plan nào khả thi nhất? [Poll]" | Đếm nghiêm 30 giây/nhóm. Sau vote: "Nhóm [winner] — điều gì làm plan của bạn thuyết phục?" |
| 0:57–1:00 | Course wrap-up | "5 buổi: từ 'hỏi rồi hy vọng' đến 'cowork system chuyên nghiệp.' 3 takeaways: (1) Framework > freestyle. (2) Ví dụ > mô tả. (3) System > cá nhân." [Share resources + community] "Bạn đã có đủ công cụ. Tuần này: deploy cho 1 người đầu tiên. 30 ngày sau: team bạn làm việc khác đi." | Kết thúc cao điểm. Không nói "I hope" — nói "bạn đã có". Certificate nếu có. |

### Troubleshooting

**Scenario 1: Ít prompt để organize (< 5 prompts)**
- *Trigger:* Không làm homework, không practice giữa các buổi
- *Giải pháp:* "Không sao — tạo ngay bây giờ. Mở lịch tuần sau: meetings nào? reports nào? Viết 5 RTT prompts trong 5 min: Email + Report + Meeting minutes + Data extract + Summary = 5 prompts cơ bản." Nếu cả nhóm thiếu: extend Activity 7 thêm 5 min, cắt transition.

**Scenario 2: Kế hoạch triển khai quá mơ hồ**
- *Trigger:* Plan viết "deploy cho team", không có tên người, không có metric
- *Giải pháp:* "Plan cần 3 specifics: WHO (tên người), WHAT (task cụ thể), WHEN (tuần nào). Đổi 'deploy cho team' thành: 'Tuần 1: Lan + Minh test RTT prompt cho weekly report. Success = tạo ra trong < 10 min, accuracy > 80% theo rubric.'" Demo rewrite live.

**Scenario 3: Hoài nghi về triển khai CLI cho team**
- *Trigger:* "Team tôi không dùng AI" hoặc "terminal quá khó"
- *Giải pháp:* "Bắt đầu từ 1 người — BẠN. Khi sếp hỏi 'sao output nhanh vậy?', đó là lúc pitch. Show kết quả, không phải công nghệ. Và nếu team ngại terminal: Claude Code có thể cài trong 5 min, first prompt trong 10 min — thấp hơn threshold bạn nghĩ." Chia sẻ onboarding checklist 3 bước.

### Engagement Checkpoints
- **0:05** (sau ROI math): "1-2 giờ/ngày realistic không? Gõ: Realistic / Optimistic / Skeptical." Nếu > 40% Skeptical: "Fair. Bắt đầu với 30 phút/ngày — đó cũng đủ để thuyết phục manager."
- **0:20** (giữa Activity 7): Announce prompt count: "Nhóm có nhiều nhất X prompts — target 10 trước khi kết thúc activity."
- **0:42** (đầu Activity 8): Energy check — nếu thấp sau 40 min làm việc: "30-second stretch break. Sau đó: kế hoạch quan trọng nhất hôm nay."
- **0:52** (trước gallery walk): "Nhắc: pitch = 3 câu. WHO + WHAT + WHEN. Không cần giải thích lý thuyết."
