# Facilitator Guide — Sessions 3, 4 & 5

> Continuation of facilitator guide. Equal depth for every session.

---

## Buổi 3 — Kỹ thuật nâng cao: "Dạy AI bằng ví dụ" (60 min)

### Technical Setup (trước buổi 10 min)
- [ ] Mở ChatGPT/Claude — chuẩn bị tab cho few-shot demo (customer feedback classification)
- [ ] Chuẩn bị 10 dòng feedback khách hàng mẫu trong notepad (positive/negative/neutral)
- [ ] Tab riêng cho CoT demo: 3 vendor quote documents
- [ ] Slides loaded, test progressive reveal animations
- [ ] Breakout rooms: 3-4 người, same groups as Buổi 2 nếu có thể (đã quen nhau)
- [ ] Backup: nếu AI service down, screenshots của expected outputs

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Warm-up | "Trước khi bắt đầu — bạn đã thử RTT hay CO-STAR trong tuần chưa? Gõ vào chat task + kết quả." | Đọc 2-3 câu trả lời. Khen cụ thể: "Hay quá, bạn dùng RTT cho email — đó là đúng use case!" |
| 0:03–0:05 | WHY: ví dụ mẫu | "Đôi khi mô tả rõ vẫn chưa đủ. Giống dạy nhân viên mới: ngoài nói quy trình, bạn cho xem BÀI MẪU. AI cũng vậy — cho xem ví dụ, output chuẩn hơn 30-60%." | Analogy mạnh: nhân viên mới + bài mẫu. Nhấn mạnh con số 30-60% improvement. |
| 0:05–0:13 | WHAT 1: Few-shot | "Zero-shot = không ví dụ, AI tự suy. One-shot = 1 ví dụ. Few-shot = 2-3 ví dụ." [Slide: progression] "Demo: phân loại feedback khách hàng." [Zero-shot → mixed results. Add 2 examples → accuracy jumps] "Thấy chưa? Chỉ thêm 2 ví dụ, accuracy từ ~50% lên ~85%." | Demo LIVE: type zero-shot first, show messy output. Then add examples one by one — show improvement incrementally. Screen share cả prompt + output. |
| 0:13–0:15 | Chat interaction | "Nghĩ 1 task mà bạn muốn AI output đúng format — gõ vào chat. Ví dụ: 'phân loại email', 'extract số từ invoice', 'format báo cáo theo template'." | Collect responses. Pick 2-3 diverse ones: "Hay — phân loại email, extract invoice, format report — tất cả few-shot sẽ giúp!" |
| 0:15–0:30 | Activity 3: Dạy AI bằng ví dụ | "Worksheet có sẵn ví dụ 1 — bạn viết thêm ví dụ 2 và 3, rồi test. 15 min trong breakout." | **Facilitator micro-actions — see Activity 03 file.** Template fading: example 1 = complete, example 2 = partial (format given, content blank), example 3 = blank. |
| 0:30–0:33 | Transition + poll | "Few-shot dạy AI FORMAT. Nhưng nếu task cần AI SUY NGHĨ? Poll: bạn có task nào cần AI phân tích, so sánh, hay đánh giá không?" [poll: Yes/No/Not sure] | Read results: "X% có — Chain-of-Thought sẽ giúp." |
| 0:33–0:41 | WHAT 2: Chain-of-thought | "CoT = 'Hãy suy nghĩ từng bước.' Đơn giản vậy thôi. Nhưng hiệu quả lớn." [Demo: vendor comparison] "Prompt thường: 'So sánh 3 vendors.' → Output: bảng so sánh surface level." [CoT prompt: 'So sánh 3 vendors. Hãy phân tích từng bước: (1) giá, (2) chất lượng, (3) thời gian delivery, (4) risk. Sau đó recommend.'] "→ Output: analysis chi tiết từng yếu tố, rồi recommendation có lý do." | Side-by-side comparison trên screen. Highlight: CoT output dài hơn nhưng ACTIONABLE hơn — bạn có thể gửi cho sếp. |
| 0:41–0:53 | Activity 4: Step-by-step Analysis | "Scenario: 3 vendor quotes cho office supplies. Viết CoT prompt, chạy, compare với non-CoT. Breakout rooms, 12 min." | **See Activity 04 for facilitator micro-actions.** Cung cấp vendor quote data trong worksheet. |
| 0:53–0:57 | Debrief + decision tree | "When to use what?" [Build together] "Cần đúng format → Few-shot. Cần phân tích sâu → CoT. Cần cả hai → Few-shot + CoT combo." | Draw decision tree on shared whiteboard/screen. Save + share qua chat. |
| 0:57–1:00 | SO WHAT | "Few-shot = dạy format. CoT = dạy suy nghĩ. Combo = professional-grade output. Tuần này: thử few-shot cho 1 task lặp lại, CoT cho 1 task phân tích." | Homework specific: "Mang kết quả buổi sau — chúng ta sẽ build template library." |

### Troubleshooting Scenarios

**Scenario 1: Few-shot examples don't improve output noticeably**
- *Trigger:* Learner says "tôi thêm ví dụ nhưng output vẫn giống"
- *Response:* "Check 2 thứ: (1) ví dụ có diverse enough không? Nếu cả 3 ví dụ giống nhau, AI không học pattern. (2) Format ví dụ có match output mong muốn không? Ví dụ phải SHOW đúng format bạn muốn." Demo on screen nếu cần.

**Scenario 2: Chain-of-thought output quá dài**
- *Trigger:* "AI viết quá nhiều, tôi chỉ cần kết luận"
- *Response:* "Thêm ở cuối prompt: 'Sau khi phân tích, tóm tắt recommendation trong 3 bullet points.' CoT cho phân tích nội bộ, format instruction cho output cuối." Demo cách combine CoT + format.

**Scenario 3: Learners struggle with example quality**
- *Trigger:* Examples trong worksheet quá generic hoặc off-topic
- *Response:* "Ví dụ tốt phải CỤ THỂ từ công việc thật. Thay vì 'email tốt', dùng email thật bạn đã viết. AI học từ patterns — patterns cần realistic." Suggest: paste real email (remove sensitive info) as example.

### Engagement Checkpoints
- **0:08** (after demo): "Ai đã từng thấy AI output sai format? Gõ Yes/No" — gauge relevance
- **0:22** (mid-activity): Roam rooms — nếu groups haven't tested yet: "Test trước khi perfect — paste vào ChatGPT/Claude ngay, xem kết quả"
- **0:38** (after CoT): "Raise hand nếu bạn thấy CoT output tốt hơn rõ rệt" — validate concept landed
- **0:50** (during activity 4): Check rooms — nếu groups finished early: "Extension: thử CoT + few-shot combo — cho ví dụ vendor analysis mẫu trước, rồi ask step-by-step"

---

## Buổi 4 — Prompt cho tác vụ chuyên ngành (60 min)

### Technical Setup (trước buổi 10 min)
- [ ] Mở ChatGPT/Claude — 2 tabs (1 cho template demo, 1 cho quality eval demo)
- [ ] Template demo prepared: weekly report prompt template with variable slots highlighted
- [ ] Quality rubric slide ready (Accuracy, Completeness, Tone, Actionability)
- [ ] 2 sample outputs (1 good, 1 poor) cho quality eval demo
- [ ] Breakout rooms: NHÓM THEO NGÀNH (HR together, Marketing together, etc.) — khác với random assign trước
- [ ] Peer review pairing plan: cross-industry pairs cho Activity 6

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Community warm-up | "Share prompt tốt nhất bạn viết tuần này — paste vào chat." | Đọc 2-3 examples. Khen specific technique: "Ồ bạn dùng few-shot cho invoice extraction — very smart!" |
| 0:03–0:07 | WHY + demo | "Prompt chung = output chung. Watch this." [Demo: generic HR prompt → generic output. Then: HR prompt with company policy context, specific format, department terminology → precise output] "Chênh lệch là ở CONTEXT chuyên ngành." | 2 side-by-side outputs on screen. Point to specific differences: "Thấy chưa? Output 2 dùng đúng tên phòng ban, đúng format company, đúng tone." |
| 0:07–0:08 | Chat interaction | "Ngành bạn có thuật ngữ/quy trình riêng nào mà AI thường hiểu sai? Gõ 1 ví dụ." | Collect: "KPI review cycle", "P&L reconciliation", "content calendar" — use these in next section. |
| 0:08–0:16 | WHAT 1: Prompt template anatomy | "Template = framework + industry context + [biến]. Biến = phần thay đổi mỗi lần dùng." [Demo: weekly report template] "Role: Finance analyst tại [company]. Context: [paste context]. Task: Tóm tắt [numbers] thành executive summary format [company template]. [Brackets] = biến bạn điền mỗi tuần." | Highlight [brackets] clearly on screen. "Template tốt = viết 1 lần, dùng 50 lần." |
| 0:16–0:18 | Pair share | "Quay sang breakout pairs (2 min): nghĩ 1 task lặp lại hàng tuần bạn muốn template hóa." | 2 min strict. "30 giây nữa quay lại." |
| 0:18–0:35 | Activity 5: Template Factory | "Bạn có 17 min để tạo 3 prompt templates. Dùng checklist trong worksheet — không template có sẵn lần này, bạn tự build từ frameworks đã học." [Send to breakout rooms, same industry groups] | **See Activity 05 for facilitator micro-actions.** Minimal scaffold — checklist only: ☐ Role defined? ☐ Context specific to my industry? ☐ Task clear? ☐ Format specified? ☐ Variables marked with [brackets]? |
| 0:35–0:43 | WHAT 2: Quality rubric | "Template xong — nhưng sao biết output tốt? 4 tiêu chí." [Slide] "Accuracy: thông tin đúng không? Completeness: đủ chi tiết chưa? Tone: giọng phù hợp audience? Actionability: người đọc biết phải làm gì tiếp?" [Demo: đánh giá 2 outputs — 1 good, 1 poor] | Score mỗi criteria 1-5 on screen. "Output A: Accuracy 4, Completeness 3, Tone 5, Actionability 2 — problem? Người đọc không biết next step." |
| 0:43–0:55 | Activity 6: Quality Check | "Cross-pair: hoán đổi templates với người khác ngành. Test template của bạn → đánh giá output bằng rubric → viết feedback → iterate." [Breakout rooms, cross-industry pairs] | **See Activity 06 for facilitator micro-actions.** Cross-industry intentional — fresh eyes catch unclear context/jargon. |
| 0:55–0:58 | Debrief | "What did peer review reveal? Common feedback?" [Quick share] "Pattern: context chuyên ngành cần explicit hơn bạn nghĩ — người ngoài ngành không hiểu." | Connect to lesson: "Nếu peer không hiểu, AI cũng không hiểu." |
| 0:58–1:00 | SO WHAT | "Template + Rubric = Quality system. Bạn vừa tạo hệ thống kiểm soát chất lượng cho AI output." | Preview: "Buổi cuối: organize everything + deploy cho team." |

### Troubleshooting Scenarios

**Scenario 1: Learners can't identify 3 repeatable tasks**
- *Trigger:* Someone stuck at "tôi không biết task nào lặp lại"
- *Response:* "Mở lịch tuần trước. Tìm meetings → mỗi meeting cần gì? Agenda, minutes, follow-up email. Đó là 3 templates." Prompt with concrete calendar review.

**Scenario 2: Peer review feels awkward (critique resistance)**
- *Trigger:* Feedback too gentle ("hay lắm, không cần sửa") or avoided
- *Response:* "Peer review không phải đánh giá BẠN — đánh giá OUTPUT. Hỏi: 'Nếu bạn nhận email này từ AI, bạn có gửi cho sếp ngay không? Nếu không, thiếu gì?'" Reframe as quality check, not personal critique.

**Scenario 3: Templates too generic (didn't add industry context)**
- *Trigger:* Templates look like buổi 1-2 prompts without improvement
- *Response:* "Check: template này khác gì prompt thường? Nếu giống — thêm 3 thứ: (1) tên phòng ban, (2) quy trình cụ thể, (3) thuật ngữ ngành." Demo on their template live.

### Engagement Checkpoints
- **0:07** (after demo): Nếu ít chat responses about industry terms → prompt: "Ví dụ: Finance hay nói 'reconciliation', Marketing nói 'CTR' — ngành bạn thì sao?"
- **0:25** (mid Template Factory): Roam rooms — check template quality. If generic: intervene with industry-specific prompt.
- **0:40** (before peer review): "Nhắc: đánh giá output theo 4 tiêu chí, score 1-5 mỗi tiêu chí. Viết cụ thể: 'Accuracy: 3/5 vì thiếu [X]'"
- **0:50** (mid peer review): Check pairs — if finished early: "Iterate: sửa template dựa trên feedback, test lại, so sánh score cũ vs mới"

---

## Buổi 5 — Hệ thống hóa & Chia sẻ (60 min)

### Technical Setup (trước buổi 10 min)
- [ ] Mở mẫu prompt library structure (Google Sheets hoặc Notion template)
- [ ] Slides ready — adoption framework, 30-day plan canvas
- [ ] Breakout rooms: NHÓM THEO NGÀNH (consistent with Buổi 4)
- [ ] Timer visible on screen cho workshop activities
- [ ] Poll ready: "Team bạn có bao nhiêu người dùng AI?" (1-3/4-10/10+)
- [ ] Certificate/completion template ready (nếu áp dụng)

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Community share | "Tuần qua bạn đã dùng prompt nào? Kết quả? Gõ vào chat — even failures count!" | Celebrate both wins AND failures: "Bạn thử few-shot cho invoice nhưng accuracy chỉ 60% — hay! Bây giờ chúng ta biết cần thêm ví dụ specific hơn." |
| 0:03–0:06 | WHY: team scale | "1 người giỏi prompt = tiết kiệm 1 giờ/ngày. Team 10 người = 10 giờ. Nhưng 10 cách làm khác nhau = hỗn loạn. Cần SYSTEM." | Draw quick math on screen: 1 hr/day × 20 work days × 10 people = 200 hrs/month saved. "Đó là ROI bạn sẽ present cho manager." |
| 0:06–0:12 | WHAT 1: Library structure | "Library = folder structure + naming + versioning. Demo: ví dụ thực tế." [Show: categories by task type (email/, report/, analysis/), naming: task-framework-v1, testing notes: 'accuracy 85%, last tested 2026-03-10'] | Emphasize: NAMING matters. "email-rtt-v1" vs "my prompt 3" — người khác (và bạn sau 2 tuần) cần hiểu prompt này làm gì. |
| 0:12–0:14 | Poll | "Team bạn có bao nhiêu người dùng AI?" [1-3/4-10/10+] | Results frame buổi học: "60% có team 4-10 — perfect size for pilot program." |
| 0:14–0:32 | Activity 7: Build Your Library | "18 min để organize TẤT CẢ prompts từ buổi 1-4. Mục tiêu: ≥10 prompts, organized, named, tested. Dùng template trong worksheet." | **Facilitator micro-actions:** Roam rooms every 3 min. At 0:20 check: "Bạn đã có bao nhiêu prompts? Target 10." At 0:26: "Còn 6 min — focus naming và testing notes." At 0:30: "Wrap up — pick your best 3 for the next activity." Early finishers: "Write a 1-sentence description for each prompt — someone who's never seen it should understand what it does." |
| 0:32–0:35 | Transition | "Library cá nhân done. Câu hỏi: nếu bạn nghỉ phép, team dùng library được không? Nếu chưa — cần deployment plan." | Rhetorical question — but if someone says "yes" → "Tuyệt vời! Bạn sẽ giúp nhóm mình build plan." |
| 0:35–0:41 | WHAT 2: Team deployment | "3-phase adoption: Champions → Pilot → Expand." [Slide: framework] "Champions = 2-3 người hào hứng. Pilot = 3 tasks cụ thể, 2 tuần. Expand = share results, onboard more." [Address blockers:] "'Tôi không tin AI' → show before/after ROI. 'Prompt tôi khác' → standardize gradually, allow personal variations." | Real talk: "Đừng force adoption. Show value → people follow." Most common failure = mandating without proving ROI. |
| 0:41–0:53 | Activity 8: 30-Day Plan | "Nhóm 3-4 người cùng ngành. Design 30-day plan: Week 1 (identify champions + 3 pilot tasks), Week 2 (pilot + collect data), Week 3 (feedback + iterate prompts), Week 4 (expand + measure). Canvas worksheet provided." | **Facilitator micro-actions:** Visit each room once (3 min each). Listen for: realistic vs aspirational plans. If too ambitious: "Pick 3 tasks, not 10. Better to succeed small." If too vague: "Name specific tasks and people. 'Marketing team' → 'Lan (social media) + Minh (content)'." At 0:49: "3 min left — prepare 30-second pitch." Early finishers: "Add success metrics: how will you know the pilot worked? What numbers will you track?" |
| 0:53–0:57 | Gallery walk + vote | "Mỗi nhóm: 30 giây pitch plan. Vote: plan nào khả thi nhất? (poll)" | Time strictly: 30 sec/group. If 4 groups = 2 min pitches + 2 min voting. "Nhóm [winner] — what made your plan convincing?" |
| 0:57–1:00 | Course wrap-up | "5 buổi: từ 'hỏi rồi hy vọng' đến 'hệ thống chuyên nghiệp.' 3 takeaways: (1) Framework > freestyle. (2) Ví dụ > mô tả. (3) System > individual." [Share: resources, community link, next steps] | End on high note. "Bạn đã trang bị đủ để thay đổi cách team dùng AI. Hãy bắt đầu từ tuần này." |

### Troubleshooting Scenarios

**Scenario 1: Learner has very few prompts to organize (<5)**
- *Trigger:* Didn't do homework or didn't practice between sessions
- *Response:* "Không sao — hãy tạo ngay bây giờ. Mở công việc tuần sau: meetings nào? reports nào? Viết 5 RTT prompts nhanh cho 5 tasks đó." Provide quick-start: "Email [RTT] + Report [CO-STAR] + Data extract [few-shot] = 3 prompts trong 5 min."

**Scenario 2: 30-day plan too vague ("deploy cho team")**
- *Trigger:* Plan has no specific names, tasks, or metrics
- *Response:* "Plan cần 3 specifics: WHO (tên người), WHAT (tên task cụ thể), WHEN (tuần nào). Thay 'deploy cho team' thành 'Week 1: Lan + Minh test RTT prompt cho weekly report. Success = generate trong < 10 min, accuracy > 80%.'"

**Scenario 3: Skepticism about team adoption ("team tôi không dùng AI")**
- *Trigger:* Defeatist attitude about deployment
- *Response:* "Bắt đầu từ 1 person — BẠN. Khi sếp hỏi 'sao output nhanh vậy?', đó là moment bạn pitch. Show results, not technology." Reframe from push → pull strategy.

### Engagement Checkpoints
- **0:06** (after ROI math): "Bạn nghĩ 1 giờ/ngày realistic không? Gõ Yes/Optimistic/No" — gauge belief
- **0:20** (mid library build): Check library size — announce: "Average lớp đã có 7 prompts. Target 10!"
- **0:41** (start deployment plan): Energy check — if low energy for last activity, do 30-sec stretch
- **0:53** (before pitches): "Nhắc: 30 giây = 3 sentences max. WHO does WHAT by WHEN."
