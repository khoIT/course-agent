# Lesson Plan — Prompt Engineering với Claude Code & Cowork

> 5 buổi × 60 phút | Online (Zoom/Teams) | Tiếng Việt
> Depth calibration: Non-technical audience → 3-4 min/concept, max 4 concepts/15-min segment, interaction every 8 min

---

## Buổi 1 — Từ Web Chat đến CLI Power: "Tại sao Claude Code?" (60 min)

**Objectives:** LO1 (thực hiện tác vụ trên Claude Code), LO2 (viết prompt theo công thức trong CLI)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Mở đầu:** "Bạn mở ChatGPT, gõ prompt, copy output, paste vào Word, format lại... Nếu tôi nói có cách AI viết thẳng vào file, đọc data, tự format — và bạn chỉ cần 1 dòng lệnh?" | Storytelling (deductive) | Slide 1-2 |
| 0:03–0:05 | **WHY:** So sánh workflow: Web (5 bước copy-paste) vs Claude Code (1 lệnh, output trực tiếp). Demo nhanh 30 giây | Lecture + live demo | Slide 3 |
| 0:05–0:08 | **Poll:** "Bạn dùng AI tool nào? ChatGPT/Claude web/Gemini/Chưa dùng CLI" | Interactive poll | Zoom poll |
| 0:08–0:16 | **WHAT 1:** Claude Code là gì — CLI tool chạy trong terminal. 4 lợi thế: (1) đọc file trực tiếp, (2) viết file trực tiếp, (3) nhớ context dự án qua CLAUDE.md, (4) chạy lệnh hệ thống. Analogy: web chat = gọi điện thoại, Claude Code = có trợ lý ngồi cạnh bàn làm việc | Lecture + visual | Slide 4-6 |
| 0:16–0:18 | **Interaction check:** Chat — "Gõ 1 nếu bạn từng copy output AI vào file khác, 2 nếu phải format lại output, 3 nếu cả hai" | Chat interaction | — |
| 0:18–0:28 | **HOW 1:** Live Demo — Mở terminal, chạy `claude`. Demo 3 tác vụ: (1) viết email — so sánh web vs CLI, (2) đọc file + tóm tắt, (3) prompt có Role+Context+Task+Format trong CLI. Highlight: không cần copy-paste, output structured | Live demo | Slide 7-9, Claude Code |
| 0:28–0:30 | **Transition:** "Bây giờ đến lượt bạn — mở terminal và thử Claude Code" | Bridge | Slide 10 |
| 0:30–0:45 | **Activity 1:** "First CLI Prompt" — Học viên mở Claude Code, thực hiện 3 task: (1) hỏi đơn giản, (2) prompt có Role+Context+Task+Format, (3) so sánh output với web. Breakout rooms 3-4 người | Group practice | Activity 01 worksheet |
| 0:45–0:52 | **Debrief:** 2-3 nhóm share. Giảng viên highlight: "Ai thấy CLI output tốt hơn? Ở điểm nào?" | Plenary discussion | — |
| 0:52–0:57 | **SO WHAT:** 3 rules: "Claude Code đọc file = không cần copy-paste context", "CLAUDE.md = AI nhớ project rules", "Terminal = playground, đừng sợ gõ sai" | Summary + visual | Slide 11 |
| 0:57–1:00 | **Wrap-up:** Preview buổi 2 (frameworks), homework: dùng Claude Code cho 3 task trong tuần, ghi lại prompt + output | Closing | Slide 12 |

**Depth calibration:** 4 concepts (CLI basics, file access, CLAUDE.md intro, prompt formula) × 4 min = 16 min lecture. Activity = 15 min. Fits 60-min session.

---

## Buổi 2 — Framework trong Claude Code: "Prompt có cấu trúc, output có chất lượng" (60 min)

**Objectives:** LO3 (RTT trong Claude Code), LO4 (CO-STAR + CLAUDE.md)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Recap quiz:** 3 câu nhanh — "Lệnh nào mở Claude Code?" / "CLAUDE.md dùng để?" / "Prompt tốt cần mấy thành phần?" | Quick quiz | Slide 1-2 |
| 0:03–0:05 | **WHY:** "Framework = công thức. Trong Claude Code, framework + CLAUDE.md = AI tự động biết context, bạn chỉ cần gõ task." | Analogy | Slide 3 |
| 0:05–0:13 | **WHAT 1:** RTT trong Claude Code — gõ trực tiếp Role-Task-Tone trong terminal. Demo: email trả lời khách hàng. So sánh: prompt không framework vs có RTT | Lecture + demo | Slide 4-6 |
| 0:13–0:15 | **Interaction:** "Nghĩ 1 task routine — gõ vào chat" | Chat prompt | — |
| 0:15–0:27 | **HOW 1:** Guided practice — 3 tác vụ RTT trong Claude Code: (1) giảng viên demo, (2) cùng làm, (3) tự làm. Template có sẵn cho task 1-2 | Guided practice | Activity 02 worksheet |
| 0:27–0:30 | **Transition:** "RTT đủ cho 70% việc. Nhưng khi cần phân tích sâu — cần CO-STAR. Và trong Claude Code, bạn có thêm siêu năng lực: CLAUDE.md" | Bridge | Slide 7 |
| 0:30–0:38 | **WHAT 2:** CO-STAR + CLAUDE.md — Viết CO-STAR prompt, LƯU vào CLAUDE.md để Claude Code tự áp dụng context mỗi lần chạy. Demo: tạo CLAUDE.md cho project marketing | Lecture + live demo | Slide 8-10 |
| 0:38–0:40 | **Interaction:** Pair discussion — "Task nào cần CO-STAR? CLAUDE.md giúp gì?" (2 min) | Pair | — |
| 0:40–0:52 | **Activity 2:** "Framework + CLAUDE.md Battle" — Mỗi nhóm: (1) viết RTT prompt chạy trong Claude Code, (2) viết CO-STAR prompt, (3) tạo CLAUDE.md đơn giản, test lại — so sánh 3 outputs | Group comparison | Activity 02 scenarios |
| 0:52–0:57 | **Debrief:** "CLAUDE.md = superpower. Prompt framework + project context = output chuyên nghiệp mà không cần gõ lại context mỗi lần" | Plenary | Slide 11 |
| 0:57–1:00 | **SO WHAT:** Decision rule: "RTT cho task nhanh. CO-STAR cho task quan trọng. CLAUDE.md cho task lặp lại — viết 1 lần, dùng mãi" | Summary | Slide 12 |

**Depth calibration:** 3 concepts (RTT in CLI, CO-STAR, CLAUDE.md) × 4 min = 12 min lecture. Two activities = 24 min. Fits with room.

---

## Buổi 3 — Kỹ thuật nâng cao: "Dạy AI bằng ví dụ & Slash Commands" (60 min)

**Objectives:** LO5 (few-shot trong Claude Code), LO6 (thiết kế CLAUDE.md với examples)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Warm-up:** "Bạn đã thử RTT/CO-STAR trong Claude Code tuần qua chưa? Share kết quả" | Recall | Slide 1 |
| 0:03–0:05 | **WHY:** "Đôi khi mô tả không đủ — cần CHO XEM ví dụ. Trong Claude Code, bạn có thể lưu ví dụ mẫu ngay trong CLAUDE.md — AI nhớ mãi" | Analogy | Slide 2-3 |
| 0:05–0:13 | **WHAT 1:** Few-shot trong Claude Code — Demo: phân loại feedback (zero-shot → few-shot, accuracy tăng 30-60%). Bonus: dùng /clear để reset context, test lại | Lecture + live demo | Slide 4-6, Claude Code |
| 0:13–0:15 | **Interaction:** "Task nào bạn muốn AI output đúng format?" (chat) | Chat | — |
| 0:15–0:30 | **Activity 3:** "Few-shot trong CLI" — Tạo few-shot prompt cho task thực. Template fading: ví dụ 1 có sẵn, 2-3 tự viết. Test trong Claude Code | Individual → pair | Activity 03 worksheet |
| 0:30–0:33 | **Transition + poll:** "Few-shot dạy format. Nhưng nếu muốn AI NHỚ examples MÃI? → CLAUDE.md + slash commands" | Bridge | Slide 7 |
| 0:33–0:41 | **WHAT 2:** CLAUDE.md nâng cao — Lưu few-shot examples + project rules + output format vào CLAUDE.md. Demo: tạo CLAUDE.md cho phòng HR chứa email templates + classification examples. Giới thiệu slash commands: /help, /clear, /compact | Lecture + demo | Slide 8-10 |
| 0:41–0:53 | **Activity 4:** "Design Your CLAUDE.md" — Mỗi người thiết kế CLAUDE.md cho phòng ban mình: project description, few-shot examples, output rules. Test bằng Claude Code | Group practice | Activity 04 worksheet |
| 0:53–0:57 | **Debrief:** "CLAUDE.md = bộ nhớ dài hạn. Few-shot trong prompt = bộ nhớ ngắn hạn. Dùng cả hai cho best results" | Plenary | Slide 11 |
| 0:57–1:00 | **SO WHAT:** "Few-shot = dạy format. CLAUDE.md = dạy context. Slash commands = quản lý session. 3 tools = professional workflow" | Summary | Slide 12 |

**Depth calibration:** 3 concepts (few-shot, CLAUDE.md design, slash commands) × 4 min = 12 min. Two activities = 27 min. Interaction every 8 min ✓

---

## Buổi 4 — Cowork Workflow: "Từ chat đơn lẻ đến hệ thống cộng tác" (60 min)

**Objectives:** LO7 (prompt template + CLAUDE.md config), LO8 (quality evaluation + iteration)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Warm-up:** "Share CLAUDE.md hoặc prompt tốt nhất tuần này" (chat) | Community share | Slide 1 |
| 0:03–0:07 | **WHY:** "1 prompt tốt = 1 task. 1 CLAUDE.md tốt = 100 tasks. 1 cowork system = cả team dùng AI hiệu quả." Demo: generic prompt vs prompt từ project có CLAUDE.md đầy đủ | Lecture + demo | Slide 2-4 |
| 0:07–0:08 | **Interaction:** "Ngành bạn có workflow nào lặp lại mỗi tuần mà AI giúp được?" (chat) | Chat | — |
| 0:08–0:16 | **WHAT 1:** Cowork template system — Tạo prompt templates có [BIẾN], lưu trong project folder. Claude Code đọc templates + CLAUDE.md = output chuẩn mỗi lần. Demo: weekly report template | Lecture + demo | Slide 5-7 |
| 0:16–0:18 | **Interaction:** Pair — "1 task lặp lại bạn muốn template hóa" (2 min) | Pair | — |
| 0:18–0:35 | **Activity 5:** "Template Factory" — Tạo 3 prompt templates cho công việc. Lưu vào project folder. Config CLAUDE.md. Test trên Claude Code. Minimal scaffold — checklist only | Individual workshop | Activity 05 checklist |
| 0:35–0:43 | **WHAT 2:** Quality rubric + iteration trong Claude Code — 4 tiêu chí (Accuracy, Completeness, Tone, Actionability). Demo: evaluate output → refine prompt → /clear → test lại trong cùng session | Lecture + demo | Slide 8-10 |
| 0:43–0:55 | **Activity 6:** "Quality Loop" — Hoán đổi templates. Test template người khác → đánh giá bằng rubric → feedback → iterate trong Claude Code session | Peer review | Activity 06 rubric |
| 0:55–0:58 | **Debrief:** Patterns from quality checks | Plenary | — |
| 0:58–1:00 | **SO WHAT:** "Template + CLAUDE.md + Rubric = Cowork system. Bạn vừa tạo hệ thống AI workflow chuyên nghiệp" | Summary | Slide 11-12 |

**Depth calibration:** 2 concepts (template system, quality rubric) × 4 min = 8 min lecture. Two workshops = 29 min. Theory:practice = 15:85 ✓

---

## Buổi 5 — Hệ thống hóa & Triển khai Team: "Từ cá nhân đến cowork" (60 min)

**Objectives:** LO9 (cowork workspace), LO10 (team deployment plan)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Warm-up:** "Bạn đã dùng Claude Code workflow nào trong tuần? Kết quả?" (chat) | Community share | Slide 1 |
| 0:03–0:06 | **WHY:** "1 người dùng Claude Code tốt = tiết kiệm 2 giờ/ngày. 10 người = 20 giờ. Nhưng cần hệ thống: shared CLAUDE.md, prompt library, workflow chuẩn" | Lecture | Slide 2-3 |
| 0:06–0:12 | **WHAT 1:** Cowork workspace structure — Folder structure, naming convention, shared CLAUDE.md (team rules + project context), prompt library tổ chức theo task type. Demo: workspace thực tế | Lecture + demo | Slide 4-6 |
| 0:12–0:14 | **Poll:** "Team bạn có bao nhiêu người sẵn sàng dùng Claude Code?" (1-3/4-10/10+) | Poll | — |
| 0:14–0:32 | **Activity 7:** "Build Your Cowork Workspace" — Organize tất cả prompts + CLAUDE.md configs từ buổi 1-4 thành workspace chuẩn. ≥10 prompts, categories, naming, shared CLAUDE.md | Individual workshop | Activity 07 template |
| 0:32–0:35 | **Transition:** "Workspace cá nhân xong. Deploy cho team thế nào?" | Bridge | Slide 7 |
| 0:35–0:41 | **WHAT 2:** Team deployment — Onboarding guide cho Claude Code: install → first prompt → CLAUDE.md → cowork. Champions → Pilot → Expand. Blockers: "terminal khó", "web đủ rồi" → solutions | Lecture | Slide 8-10 |
| 0:41–0:53 | **Activity 8:** "30-Day Cowork Plan" — Nhóm 3-4 cùng ngành. Kế hoạch 30 ngày: Week 1 (install + champions), Week 2 (pilot 3 workflows), Week 3 (shared CLAUDE.md + feedback), Week 4 (expand + measure ROI) | Group workshop | Activity 08 canvas |
| 0:53–0:57 | **Gallery walk + vote:** 30-giây pitch mỗi nhóm. Vote plan khả thi nhất | Plenary | — |
| 0:57–1:00 | **Course Wrap-up:** Key takeaways, resources, community. "Bạn đã có hệ thống cowork hoàn chỉnh — bắt đầu từ tuần này" | Closing | Slide 11-12 |

**Depth calibration:** 2 concepts (workspace structure, deployment framework) × 3 min = 6 min. Two workshops = 30 min. Theory:practice = 10:90 ✓
