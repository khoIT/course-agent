# Lesson Plan — Prompt Engineering cho người dùng doanh nghiệp

> 5 buổi × 60 phút | Online (Zoom/Teams) | Tiếng Việt
> Depth calibration: Non-technical audience → 3-4 min/concept, max 4 concepts/15-min segment, interaction every 8 min

---

## Buổi 1 — Tư duy Prompt: "Tại sao AI không hiểu ý bạn?" (60 min)

**Objectives:** LO1 (phân tích prompt kém), LO2 (viết lại theo công thức)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Mở đầu:** Kể câu chuyện "email gửi sếp qua AI — sếp đọc không hiểu" | Storytelling (deductive) | Slide 1-2 |
| 0:03–0:05 | **WHY:** Thống kê: 80% người dùng nghĩ output đầu tiên là bản cuối — vấn đề thực sự | Lecture + poll | Slide 3 |
| 0:05–0:08 | **Poll:** "Bạn thường phải sửa output AI bao nhiêu lần?" (1/2-3/4+/bỏ cuộc) | Interactive poll | Zoom poll |
| 0:08–0:16 | **WHAT 1:** Anatomy — 4 thành phần prompt (Role + Context + Task + Format). Analogy: prompt = đơn đặt hàng, thiếu chi tiết = nhận sai món | Lecture + visual | Slide 4-6 |
| 0:16–0:18 | **Interaction check:** Chat prompt — "Gõ 1 nếu bạn thường quên gán Role, 2 nếu quên Context, 3 nếu quên Format" | Chat interaction | — |
| 0:18–0:28 | **HOW 1:** Before/After Demo — 3 cặp prompt kém→tốt (email, báo cáo, phân tích). Giảng viên demo live trên ChatGPT/Claude | Live demo | Slide 7-9, ChatGPT/Claude |
| 0:28–0:30 | **Transition:** "Bây giờ đến lượt bạn — hãy sửa prompt của chính mình" | Bridge | Slide 10 |
| 0:30–0:45 | **Activity 1:** "Prompt Makeover" — Học viên lấy prompt thật từ công việc, phân tích lỗi, viết lại theo công thức. Breakout rooms 3-4 người. | Group practice | Activity 01 worksheet |
| 0:45–0:52 | **Debrief:** 2-3 nhóm share kết quả. Giảng viên highlight patterns: lỗi phổ biến nhất | Plenary discussion | — |
| 0:52–0:57 | **SO WHAT:** 3 rules để nhớ — "Không Role = AI đoán mò", "Không Format = AI viết tự do", "Không Context = AI trả lời chung chung" | Summary + visual | Slide 11 |
| 0:57–1:00 | **Wrap-up:** Preview buổi 2, homework: thu thập 5 prompt mình hay dùng | Closing | Slide 12 |

**Depth calibration check:** 4 concepts (Role, Context, Task, Format) × 4 min/concept = 16 min lecture. Activity = 15 min. Total content fits 60-min session with margins.

---

## Buổi 2 — Framework RTT & CO-STAR: "Công thức cho mọi tác vụ" (60 min)

**Objectives:** LO3 (RTT cho routine tasks), LO4 (CO-STAR cho complex tasks)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Recap quiz:** 3 câu nhanh — "Prompt này thiếu gì?" (poll) | Quick quiz | Slide 1-2 |
| 0:03–0:05 | **WHY:** "Framework = công thức nấu ăn. Không cần sáng tạo mỗi lần — chỉ cần điền vào chỗ trống" | Analogy | Slide 3 |
| 0:05–0:13 | **WHAT 1:** RTT Framework (Role-Task-Tone). 3 components, khi nào dùng (routine tasks ~60-70% công việc). Demo: email trả lời khách hàng | Lecture + demo | Slide 4-6 |
| 0:13–0:15 | **Interaction check:** "Nghĩ 1 task routine bạn làm mỗi ngày — gõ vào chat" | Chat prompt | — |
| 0:15–0:27 | **HOW 1:** Guided practice — Giảng viên cùng học viên áp dụng RTT cho 3 tác vụ: (1) email response, (2) meeting summary, (3) data extraction. Template có sẵn, học viên điền | Guided practice | Activity 02 worksheet |
| 0:27–0:30 | **Transition:** "RTT đủ cho 70% công việc. Nhưng khi cần phân tích, báo cáo, chiến lược — cần framework mạnh hơn" | Bridge | Slide 7 |
| 0:30–0:38 | **WHAT 2:** CO-STAR Framework (Context-Objective-Style-Tone-Audience-Response). So sánh RTT vs CO-STAR side-by-side. Analogy: RTT = tin nhắn nhanh, CO-STAR = brief cho agency | Lecture + visual | Slide 8-10 |
| 0:38–0:40 | **Interaction check:** "Bạn nghĩ task nào cần CO-STAR thay vì RTT?" (breakout pairs, 2 min) | Pair discussion | — |
| 0:40–0:52 | **Activity 2:** "Framework Battle" — Mỗi nhóm nhận 1 business scenario, viết prompt bằng cả RTT và CO-STAR, so sánh output. Breakout rooms. | Group comparison | Activity 02 scenarios |
| 0:52–0:57 | **Debrief:** Share kết quả — khi nào RTT đủ, khi nào cần CO-STAR? Build decision rule | Plenary | Slide 11 |
| 0:57–1:00 | **SO WHAT + Wrap-up:** Decision rule: "Nếu task < 5 phút → RTT. Nếu task cần stakeholder review → CO-STAR" | Summary | Slide 12 |

**Depth calibration check:** 3 concepts (RTT, CO-STAR, decision rule) × 4 min = 12 min lecture. Two activities = 24 min. Fits with room to spare.

---

## Buổi 3 — Kỹ thuật nâng cao: "Dạy AI bằng ví dụ" (60 min)

**Objectives:** LO5 (few-shot prompting), LO6 (chain-of-thought)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Warm-up:** "Output AI chưa đúng format — bạn sẽ sửa prompt thế nào?" (chat) | Recall | Slide 1 |
| 0:03–0:05 | **WHY:** "Đôi khi mô tả không đủ — bạn cần CHO XEM ví dụ. Giống dạy nhân viên mới: nói quy trình + cho xem bài mẫu" | Analogy | Slide 2-3 |
| 0:05–0:13 | **WHAT 1:** Few-shot prompting — zero-shot vs 1-shot vs 3-shot. Demo: phân loại feedback khách hàng (accuracy cải thiện 30-60% với ví dụ) | Lecture + live demo | Slide 4-6, Claude |
| 0:13–0:15 | **Interaction:** "Nghĩ 1 task mà bạn muốn AI output đúng format — gõ vào chat" | Chat | — |
| 0:15–0:30 | **Activity 3:** "Dạy AI bằng ví dụ" — Mỗi người tạo few-shot prompt cho 1 task thực (phân loại email, extract data từ report, format bảng). Template một phần — ví dụ 1 có sẵn, ví dụ 2-3 tự viết | Individual → pair review | Activity 03 worksheet |
| 0:30–0:33 | **Transition + Interaction:** Quick poll — "Few-shot giúp format. Nhưng nếu task cần AI SUY NGHĨ từng bước thì sao?" | Bridge | Slide 7 |
| 0:33–0:41 | **WHAT 2:** Chain-of-thought — Khi nào dùng ("hãy suy nghĩ từng bước"), demo so sánh: prompt thường vs. CoT cho tác vụ phân tích vendor quotes | Lecture + demo | Slide 8-10 |
| 0:41–0:53 | **Activity 4:** "Step-by-step Analysis" — Business scenario: so sánh 3 vendor proposals. Viết CoT prompt, test, compare output với non-CoT. Breakout rooms. | Group practice | Activity 04 scenario |
| 0:53–0:57 | **Debrief:** When to use few-shot vs CoT vs both. Decision tree | Plenary | Slide 11 |
| 0:57–1:00 | **SO WHAT:** "Few-shot = dạy format. CoT = dạy suy nghĩ. Dùng cả hai cho tác vụ phức tạp" | Summary | Slide 12 |

**Depth calibration check:** 3 concepts (few-shot, zero/1/3-shot progression, CoT) × 4 min = 12 min lecture. Two hands-on activities = 27 min. Virtual interaction every 8 min ✓

---

## Buổi 4 — Prompt cho tác vụ chuyên ngành: "Từ chung chung đến chuyên gia" (60 min)

**Objectives:** LO7 (prompt template library), LO8 (quality evaluation + iteration)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Warm-up:** "Share prompt tốt nhất bạn viết tuần này" (chat) | Community share | Slide 1 |
| 0:03–0:07 | **WHY:** "Prompt chung = output chung. Prompt có context chuyên ngành = output chuyên gia." Demo: prompt HR chung vs. prompt HR có company policy context | Lecture + demo | Slide 2-4 |
| 0:07–0:08 | **Interaction:** "Ngành của bạn có thuật ngữ/quy trình riêng nào mà AI thường hiểu sai?" (chat) | Chat | — |
| 0:08–0:16 | **WHAT 1:** Prompt template anatomy — reusable template = framework + industry context + variable slots. Demo: tạo template cho "weekly report" task | Lecture + demo | Slide 5-7 |
| 0:16–0:18 | **Interaction:** Pair share — "1 task lặp lại hàng tuần bạn muốn template hóa" (2 min) | Pair | — |
| 0:18–0:35 | **Activity 5:** "Template Factory" — Mỗi người tạo 3 prompt templates cho 3 tác vụ lặp lại trong công việc. Dùng framework đã học (RTT hoặc CO-STAR). Minimal scaffold — checklist only, không template có sẵn. | Individual workshop | Activity 05 checklist |
| 0:35–0:43 | **WHAT 2:** Output quality rubric — 4 tiêu chí: Accuracy, Completeness, Tone, Actionability. Demo: đánh giá 2 output cùng task, 1 tốt 1 kém | Lecture + demo | Slide 8-10 |
| 0:43–0:55 | **Activity 6:** "Quality Check" — Hoán đổi templates giữa các học viên. Test template của bạn cùng nhóm → đánh giá output bằng rubric → feedback → iterate. | Peer review | Activity 06 rubric |
| 0:55–0:58 | **Debrief:** Patterns from quality checks — common issues and fixes | Plenary | — |
| 0:58–1:00 | **SO WHAT:** "Template + Rubric = Prompt system. Bạn vừa tạo hệ thống kiểm soát chất lượng AI output" | Summary | Slide 11-12 |

**Depth calibration check:** 2 concepts (template anatomy, quality rubric) × 4 min = 8 min lecture. Two workshops = 29 min. Theory:practice = 15:85 ✓

---

## Buổi 5 — Hệ thống hóa & Chia sẻ: "Từ cá nhân đến team" (60 min)

**Objectives:** LO9 (prompt library), LO10 (team deployment plan)

| Thời gian | Nội dung | Phương pháp | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00–0:03 | **Warm-up:** "Bạn đã dùng prompt nào từ khóa học trong tuần qua? Kết quả?" (chat) | Community share | Slide 1 |
| 0:03–0:06 | **WHY:** "1 người biết prompt tốt = tiết kiệm 1 giờ/ngày. 10 người = tiết kiệm 10 giờ. Nhưng cần hệ thống, không phải 10 cách làm khác nhau." | Lecture | Slide 2-3 |
| 0:06–0:12 | **WHAT 1:** Prompt library structure — Naming convention, categories (by task type + department), versioning, testing log. Demo: ví dụ library thực tế | Lecture + demo | Slide 4-6 |
| 0:12–0:14 | **Interaction:** "Team bạn có bao nhiêu người dùng AI? 1-3/4-10/10+" (poll) | Poll | — |
| 0:14–0:32 | **Activity 7:** "Build Your Library" — Mỗi người tổ chức tất cả prompts đã tạo trong khóa học thành library có cấu trúc. Tối thiểu 10 prompts, có categories, naming, testing notes. | Individual workshop | Activity 07 template |
| 0:32–0:35 | **Transition:** "Library cá nhân xong. Bây giờ — làm sao deploy cho team?" | Bridge | Slide 7 |
| 0:35–0:41 | **WHAT 2:** Team deployment — Adoption framework: champions → pilot → expand. Common blockers: "tôi không tin AI", "prompt của tôi khác." Solutions: show ROI, standardize gradually | Lecture | Slide 8-10 |
| 0:41–0:53 | **Activity 8:** "30-Day Plan" — Nhóm 3-4 người cùng ngành. Thiết kế kế hoạch 30 ngày triển khai prompt standards cho team: Week 1 (champions), Week 2 (pilot 3 tasks), Week 3 (feedback + iterate), Week 4 (expand). | Group workshop | Activity 08 canvas |
| 0:53–0:57 | **Debrief + Gallery Walk:** Mỗi nhóm share kế hoạch 30 giây. Vote plan khả thi nhất | Plenary | — |
| 0:57–1:00 | **Course Wrap-up:** Key takeaways, resources, community channel, next steps | Closing | Slide 11-12 |

**Depth calibration check:** 2 concepts (library structure, deployment framework) × 3 min = 6 min lecture. Two workshops = 30 min. Theory:practice = 10:90 ✓
