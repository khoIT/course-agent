# Facilitator Guide — Sessions 1 & 2: Prompt Engineering với Claude Code & Cowork

> Hướng dẫn giảng viên chi tiết. Đối tượng: HR, Marketing, Finance, Ops — non-technical.
> Mỗi buổi: timing table + speaker scripts + technical setup + troubleshooting + engagement checkpoints.

---

## Buổi 1 — Từ Web Chat đến CLI Power: "Tại sao Claude Code?" (60 min)

**Objectives:** LO1 (thực hiện tác vụ trên Claude Code), LO2 (viết prompt theo công thức trong CLI)

### Technical Setup (trước buổi 15 min)

- [ ] Mở terminal/PowerShell, chạy thử `claude --version` — xác nhận hoạt động
- [ ] Chuẩn bị demo account Claude Code (KHÔNG dùng account cá nhân)
- [ ] Chuẩn bị 3 live demos trong notepad: (1) viết email, (2) đọc file + tóm tắt, (3) prompt có Role+Context+Task+Format
- [ ] Backup screenshots nếu Claude Code không available (chụp trước output 3 task trên)
- [ ] Load Zoom poll: "Bạn dùng AI tool nào? ChatGPT web / Claude web / Gemini / Chưa dùng CLI"
- [ ] Breakout rooms: 3–4 người/room, auto-assign

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Storytelling mở đầu | "Bạn mở ChatGPT, viết prompt, đọc output... rồi copy, mở Word, paste, format lại. AI xong rồi — nhưng bạn còn 10 phút nữa để dọn dẹp. Nếu tôi nói có cách AI viết thẳng vào file của bạn, đọc data trong folder, output có structure sẵn — và bạn chỉ cần 1 dòng?" | Kể tự nhiên, giọng nhẹ nhàng. Dừng sau câu hỏi để tạo tension. |
| 0:03–0:05 | WHY: So sánh workflow | "Web chat = 5 bước: gõ prompt → đọc output → copy → mở app → paste → format. Claude Code = 1 bước: gõ lệnh → output ra đúng file." [Demo nhanh: chạy `claude` trong terminal, gõ 1 câu, xem output] | Dùng ví dụ cụ thể: "email này ra trực tiếp trong folder của bạn." Nếu demo lỗi → chuyển ngay sang backup screenshot, không giải thích dài. |
| 0:05–0:08 | Poll | "Mời mọi người vote poll nhanh..." [launch poll] "Interesting! Hầu hết chúng ta dùng web. Buổi hôm nay tôi muốn cho các bạn thấy tại sao CLI là bước tiếp theo." | Đọc kết quả ngay. Comment cụ thể: "Bạn nào chưa dùng CLI — đừng lo, chúng ta sẽ mở terminal lần đầu tiên cùng nhau hôm nay." |
| 0:08–0:16 | WHAT: 4 lợi thế Claude Code | "Claude Code là AI tool chạy trong terminal. Khác web ở 4 điểm." [Slide: 4 lợi thế] "(1) Đọc file trực tiếp — không cần copy-paste vào chat. (2) Viết file trực tiếp — output ra đúng file bạn muốn. (3) CLAUDE.md = AI nhớ context dự án của bạn mỗi lần chạy. (4) Chạy lệnh hệ thống khi cần." [Analogy slide] "Web chat = gọi điện thoại cho trợ lý. Claude Code = trợ lý ngồi ngay cạnh bàn làm việc — thấy file của bạn, biết project của bạn." | Dừng ở mỗi lợi thế 2–3 giây. Hỏi confirm: "Ai trong lớp từng phải copy-paste nhiều lần giữa ChatGPT và Word?" |
| 0:16–0:18 | Chat interaction | "Gõ vào chat: 1 nếu bạn từng copy output AI vào file khác, 2 nếu phải format lại output, 3 nếu cả hai — và tốn ít nhất 5 phút mỗi lần." | Đọc kết quả. "Đây chính xác là pain point Claude Code giải quyết." |
| 0:18–0:28 | HOW: Live Demo 3 tác vụ | [Demo 1 — Email] "Tôi gõ: `claude` rồi Enter. Claude Code mở ra. Giờ tôi viết prompt: 'Vai trò: Chuyên viên marketing. Task: Viết email xin lịch họp với đối tác. Format: tiêu đề + 3 đoạn ngắn.'" [show output ngay trong terminal] [Demo 2 — File summary] "Tôi có file data.txt. Gõ: 'Đọc file data.txt và tóm tắt 5 điểm chính.' — Claude Code đọc file trực tiếp, không cần copy." [Demo 3 — Structured prompt] "Prompt có Role + Context + Task + Format — so sánh output với prompt đơn." | Nói to từng keystroke: "Tôi đang gõ claude, nhấn Enter..." Đừng giải thích syntax — làm cho tự nhiên. Nếu output hay → "Đây là lý do tôi dùng Claude Code mỗi ngày." Nếu output lạ → "Thú vị — hãy xem tại sao nó hiểu vậy." |
| 0:28–0:30 | Transition | "Bây giờ đến lượt các bạn. Mở terminal — hoặc nhờ người bên cạnh — và chúng ta sẽ cùng gõ lệnh đầu tiên." | Nhấn mạnh: "Terminal trông đáng sợ nhưng chỉ cần biết 1 lệnh: `claude`." |
| 0:30–0:45 | Activity 1: "First CLI Prompt" | "Mở Activity 01 worksheet. 3 task cần làm: (1) Hỏi Claude Code 1 câu đơn giản bằng tiếng Việt. (2) Viết prompt có Role + Context + Task + Format. (3) Compare: thấy gì khác với web?" [Send to breakout rooms] | Roam rooms sau 3 min. Nếu ai chưa mở được terminal: "Nhờ 1 người trong nhóm share màn hình — quan sát trước, làm sau." |
| 0:45–0:52 | Debrief | "Nhóm nào share được không? [2–3 nhóm] Ai thấy output task 2 tốt hơn task 1? Ở điểm nào?" | Highlight patterns: "Nhóm dùng Format output tốt hơn nhiều — đây là key." Nếu không ai volunteer → "Nhóm 2 — lúc nãy tôi thấy output rất đẹp, chia sẻ cho lớp được không?" |
| 0:52–0:57 | SO WHAT: 3 rules | "(1) Claude Code đọc file = không cần copy-paste context. (2) CLAUDE.md = AI nhớ project rules, bạn không cần nhắc lại. (3) Terminal = playground — gõ sai không sao, chỉ thử lại." | Đọc chậm, nhấn từng rule. Dùng slide visual. Rule 3 quan trọng nhất cho non-technical — nhấn mạnh: không có lệnh nào phá máy. |
| 0:57–1:00 | Wrap-up | "Homework: dùng Claude Code cho 3 task trong tuần. Ghi lại prompt đã dùng + output. Buổi 2 chúng ta sẽ dùng framework RTT và CO-STAR để nâng cấp các prompt đó." | Gửi link recap + homework guide qua chat. |

### Troubleshooting Scenarios

**Scenario 1: Claude Code không cài được / terminal lỗi**
- *Trigger:* Learner báo lỗi khi chạy `claude` hoặc không tìm thấy terminal
- *Response:* "Không sao — hãy pair với người bên cạnh và quan sát trong breakout. Sau buổi tôi sẽ gửi hướng dẫn cài từng bước. Việc quan trọng hôm nay là hiểu WHY và thấy demo." Đừng dừng class để fix 1 người — hẹn support riêng sau.

**Scenario 2: Learner nói "terminal quá khó, web đủ rồi"**
- *Trigger:* Resistance khi thấy terminal
- *Response:* "Hiểu được — web đang work tốt. Tôi chỉ muốn bạn thấy 1 điều: [demo lại demo 2 — đọc file]. Với web, bạn làm bước này thế nào?" Để learner tự nhận ra pain point. Đừng argue — let the demo speak.

**Scenario 3: Breakout rooms im lặng**
- *Trigger:* Roam thấy nhóm chưa start sau 2 min
- *Response:* "Bắt đầu từ task 1 — chỉ cần gõ: `claude`, Enter, rồi hỏi 'Hôm nay thời tiết TP.HCM thế nào?' Đơn giản vậy thôi. Ai muốn thử trước?" Cung cấp bước đầu tiên cụ thể, không phải instruction chung.

### Engagement Checkpoints

- **0:05** (sau poll): Nếu < 50% respond → cho thêm 30 giây, nhắc: "Poll vẫn đang mở"
- **0:17** (sau chat): Nếu < 5 messages → "Ai chưa gõ — thử đi, không cần đúng, tôi muốn thấy pattern của lớp"
- **0:38** (giữa activity): Roam rooms — nếu > 50% chưa làm task 2, announce: "Tập trung task 2 thôi, task 3 optional"
- **0:50** (debrief): Nếu không ai share → share observation từ roaming: "Khi tôi vào room 3, thấy output task 2 khác hẳn task 1 — nhóm đó có thể kể tại sao không?"

---

## Buổi 2 — Framework trong Claude Code: "Prompt có cấu trúc, output có chất lượng" (60 min)

**Objectives:** LO3 (RTT trong Claude Code), LO4 (CO-STAR + CLAUDE.md)

### Technical Setup (trước buổi 15 min)

- [ ] Claude Code sẵn sàng với 2 sessions chuẩn bị trước: (1) demo RTT — email response, (2) demo CO-STAR — marketing brief
- [ ] Tạo sẵn file `sample-CLAUDE.md` cho project marketing (nội dung mẫu: project description + tone rules)
- [ ] 4 business scenarios trong notepad (HR, Marketing, Finance, Ops) — backup cho Activity 2
- [ ] Breakout rooms configured: 3–4 người, random assign
- [ ] Recap quiz chuẩn bị trên Mentimeter hoặc Zoom poll: 3 câu nhanh

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Recap quiz | "3 câu nhanh! Câu 1: Lệnh nào mở Claude Code? Câu 2: CLAUDE.md dùng để làm gì? Câu 3: Prompt tốt cần mấy thành phần?" [show answers] | Nếu > 80% đúng → "Buổi 1 đã ngấm rồi!" Nếu < 50% → review nhanh 2 phút trước khi tiếp tục. Dùng câu trả lời sai làm bridge: "Đây là lý do buổi 2 có framework." |
| 0:03–0:05 | WHY: Framework analogy | "Framework = công thức. Bạn không cần sáng tạo lại mỗi lần — điền vào chỗ trống, output ổn định. Trong Claude Code, framework + CLAUDE.md = AI tự biết context, bạn chỉ cần gõ task." | Giữ analogy nhất quán xuyên suốt buổi: recipe → ingredients → dinner. |
| 0:05–0:13 | WHAT 1: RTT trong Claude Code | "RTT = Role, Task, Tone. Ba thứ. Đủ cho 70% công việc." [Demo trong Claude Code terminal] Gõ: `claude` → "Role: Chuyên viên CSKH senior. Task: Viết email phản hồi complaint này [paste complaint]. Tone: Chuyên nghiệp, thông cảm, solution-focused." [Show output] So sánh với prompt đơn: "Gửi email xin lỗi khách." | Nói to từng phần RTT khi gõ. So sánh output: "Thấy sự khác biệt? Role + Tone thay đổi toàn bộ giọng văn." |
| 0:13–0:15 | Chat interaction | "Nghĩ 1 task routine bạn làm mỗi ngày — gõ vào chat." | Đọc 3–4 examples. "Email response, report summary, checklist — tất cả RTT đủ! Hãy nhớ rule: task đơn giản → RTT." |
| 0:15–0:27 | HOW 1: Guided RTT practice | "Mở worksheet. Tôi sẽ làm task 1 cùng các bạn — email response — trong terminal. Task 2 tôi hướng dẫn, bạn gõ. Task 3 bạn tự viết." [I Do → We Do → You Do] | Template có sẵn cho task 1–2. Task 3 = trống. Roam rooms: "Ai stuck ở task 3 — bắt đầu từ Role. Bạn muốn AI đóng vai gì?" |
| 0:27–0:30 | Transition sang CO-STAR | "RTT nhanh, hiệu quả. Nhưng khi cần report cho sếp, brief cho stakeholders, hay phân tích phức tạp — cần thêm chi tiết. Enter: CO-STAR. Và trong Claude Code, bạn có thêm siêu năng lực: lưu CO-STAR context vào CLAUDE.md." | Bridge: "RTT = bữa ăn nhanh. CO-STAR = dinner party — cần chuẩn bị hơn, nhưng ấn tượng hơn." |
| 0:30–0:38 | WHAT 2: CO-STAR + CLAUDE.md | "CO-STAR = 6 yếu tố." [Reveal từng yếu tố] "Context, Objective, Style, Tone, Audience, Response." [Demo CO-STAR trong Claude Code] "Sau đó: tôi lưu context project vào CLAUDE.md." [Mở file `sample-CLAUDE.md`, show nội dung, chạy `claude` trong folder đó] "Giờ mỗi lần mở Claude Code trong folder này — AI đã biết project của bạn là gì." | Side-by-side: RTT output vs CO-STAR output cho CÙNG task marketing → CO-STAR rõ ràng hơn, audience-specific hơn. CLAUDE.md demo là key differentiator — nhấn mạnh: "Viết 1 lần, dùng mãi." |
| 0:38–0:40 | Pair discussion | "2 phút — quay sang người bên cạnh: task nào trong công việc bạn cần CO-STAR thay vì RTT? CLAUDE.md sẽ lưu gì cho project của bạn?" | Announce sau 90 giây: "30 giây nữa." Gọi 1–2 cặp share nhanh. |
| 0:40–0:52 | Activity 2: "Framework + CLAUDE.md Battle" | "Mỗi nhóm nhận 1 scenario. Bước 1: viết RTT prompt, chạy trong Claude Code. Bước 2: viết CO-STAR prompt, chạy lại. Bước 3: tạo CLAUDE.md đơn giản (3–5 dòng) cho project đó, chạy lần 3. So sánh 3 outputs." Scenarios: HR → JD viết, Marketing → campaign brief, Finance → quarterly summary, Ops → SOP draft. | Nhắc sau 8 min: "Nhóm nào chưa xong CO-STAR — skip CLAUDE.md, compare RTT vs CO-STAR thôi." Roam: kiểm tra CLAUDE.md format, nhắc syntax nếu cần. |
| 0:52–0:57 | Debrief | "Nhóm nào thấy RTT đủ? Nhóm nào cần CO-STAR? Pattern gì?" [Build decision rule cùng lớp trên shared screen] "CLAUDE.md đã thay đổi output như thế nào?" | Tổng kết bằng decision rule: "RTT cho task nhanh. CO-STAR cho task quan trọng. CLAUDE.md cho task lặp lại — viết 1 lần, dùng mãi." |
| 0:57–1:00 | SO WHAT + Wrap-up | "3 rule nhớ về nhà: RTT = 70% tasks. CO-STAR = 30% tasks quan trọng. CLAUDE.md = investment 1 lần, return mãi. Tuần này: tạo CLAUDE.md cho 1 project bạn đang làm. Buổi 3: few-shot — dạy AI bằng ví dụ." | Gửi recap + decision rule graphic + CLAUDE.md template mẫu qua chat. |

### Troubleshooting Scenarios

**Scenario 1: Confused giữa RTT và CO-STAR**
- *Trigger:* "Khi nào dùng cái nào?" hoặc học viên dùng lẫn lộn
- *Response:* Vẽ decision tree ngay trên shared screen: "Task dưới 5 phút, cần nhanh → RTT. Task cần stakeholder review, audience-specific, output dài → CO-STAR. Nếu không chắc → bắt đầu RTT, nếu output chưa đủ → upgrade lên CO-STAR." Cho ví dụ ngay: "Email nhanh = RTT. Proposal cho sếp = CO-STAR."

**Scenario 2: CLAUDE.md không được Claude Code pick up**
- *Trigger:* Học viên tạo CLAUDE.md nhưng context không áp dụng khi chạy
- *Response:* "Kiểm tra 2 thứ: (1) File tên đúng là `CLAUDE.md` — viết hoa toàn bộ, không có lowercase. (2) Bạn đang chạy `claude` trong đúng folder chứa file đó chưa? Dùng lệnh `pwd` để kiểm tra vị trí hiện tại." Nếu vẫn lỗi — demo lại từ đầu trên shared screen.

**Scenario 3: CO-STAR cảm thấy overwhelming**
- *Trigger:* "Quá nhiều yếu tố", "Nhớ không nổi"
- *Response:* "Bạn không cần dùng cả 6 mỗi lần. Start với Context + Objective — 2 yếu tố quan trọng nhất. Add Style và Audience khi cần output audience-specific. CO-STAR là menu — không phải bắt buộc order full set." Cho template đơn giản: chỉ CO = 2 dòng.

### Engagement Checkpoints

- **0:03** (recap quiz): Nếu < 60% correct → mini-review 2 min, đừng bỏ qua
- **0:14** (chat interaction): Scan chat — nếu ít response, prompt: "Mọi người thấy RTT đơn giản không? Gõ 1 nếu rõ, 2 nếu cần thêm ví dụ"
- **0:30** (transition): Energy check — nếu lớp thấy mệt, stretch 30 giây trước CO-STAR
- **0:47** (giữa activity): Roam rooms — nếu nhóm stuck ở CLAUDE.md, gợi ý: "Viết 3 dòng: tên project, tone muốn dùng, 1 rule output. Xong."
