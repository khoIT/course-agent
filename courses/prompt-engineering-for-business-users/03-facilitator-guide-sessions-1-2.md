# Facilitator Guide — Sessions 1 & 2

> Hướng dẫn giảng viên chi tiết. Mỗi buổi có: timing table, speaker scripts, technical setup, troubleshooting, engagement checkpoints.

---

## Buổi 1 — Tư duy Prompt (60 min)

### Technical Setup (trước buổi 10 min)
- [ ] Mở Zoom/Teams, test share screen
- [ ] Mở ChatGPT HOẶC Claude trong tab riêng (dùng demo account, KHÔNG dùng account cá nhân)
- [ ] Chuẩn bị 3 cặp prompt before/after trong notepad (backup nếu live demo fail)
- [ ] Load slides, test animation
- [ ] Chuẩn bị Zoom poll: "Bạn thường phải sửa output AI bao nhiêu lần?" (1/2-3/4+/bỏ cuộc)
- [ ] Setup breakout rooms: 3-4 người/room, auto-assign

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Storytelling mở đầu | "Tuần trước, một đồng nghiệp nhờ AI viết email cho sếp. Email ra rất chuyên nghiệp — nhưng hoàn toàn sai context. Sếp reply: 'Em đang nói về dự án nào vậy?' Vấn đề không phải AI dở — vấn đề là prompt thiếu context." | Kể bằng giọng tự nhiên. Nếu có câu chuyện thật từ lớp trước, dùng câu chuyện đó. |
| 0:03–0:05 | WHY + thống kê | "Nghiên cứu cho thấy 80% người dùng nghĩ output đầu tiên là bản cuối. Nhưng professional prompt engineers luôn plan 2-3 lần iterate. Hôm nay chúng ta sẽ học cách viết prompt đúng từ lần đầu — và biết cách sửa khi cần." | Nhấn mạnh: iteration là NORMAL, không phải fail. |
| 0:05–0:08 | Poll tương tác | "Mời mọi người trả lời poll nhanh…" [launch poll] "Kết quả cho thấy [X]% các bạn phải sửa 2-3 lần — điều này rất phổ biến. Chúng ta sẽ giảm con số này xuống." | Đọc kết quả poll ngay. Comment cụ thể: "Nhóm 4+ lần — đừng lo, buổi này sẽ giúp nhiều nhất cho các bạn." |
| 0:08–0:16 | WHAT: 4 thành phần prompt | "Prompt tốt giống như đơn đặt hàng ở nhà hàng. Nếu bạn chỉ nói 'cho tôi đồ ăn' — bạn không biết sẽ nhận được gì. Nhưng nếu nói 'cho tôi phở bò, tái nạm, không hành, size lớn' — bạn nhận đúng món." [Slide: 4 components] "Role = bạn muốn AI đóng vai gì. Context = thông tin nền AI cần biết. Task = việc cụ thể cần làm. Format = output trông như thế nào." | Dừng ở mỗi component 2-3 giây. Hỏi: "Ai thường quên component nào?" Dùng ví dụ: email response không có Role → AI viết generic. |
| 0:16–0:18 | Chat interaction | "Gõ vào chat: 1 nếu bạn thường quên gán Role, 2 nếu quên Context, 3 nếu quên Format." | Đọc vài responses. "Ah, nhiều người quên Context — đây chính là lỗi #1 phổ biến nhất!" |
| 0:18–0:28 | Before/After demo | "Bây giờ tôi sẽ demo live. Đây là prompt KÉM cho email response…" [type bad prompt, show output] "Thấy chưa? Generic, không có tên khách, không có context vụ việc." [type good prompt] "Giờ so sánh…" | Demo 3 cặp: (1) email response, (2) weekly report, (3) data analysis. Nếu AI output bất ngờ — đừng panic, biến thành teachable moment: "Đây là ví dụ tại sao iterate quan trọng!" |
| 0:28–0:30 | Transition | "Bạn đã thấy trước/sau. Bây giờ đến lượt bạn — hãy mang prompt THẬT từ công việc ra sửa." | Nhấn mạnh: dùng prompt THẬT, không phải bịa. |
| 0:30–0:45 | Activity: Prompt Makeover | "Mở Activity 01 worksheet. Bước 1: paste prompt bạn hay dùng. Bước 2: đánh dấu thiếu component nào. Bước 3: viết lại. Bước 4: test trên ChatGPT/Claude. Các bạn có 15 phút trong breakout rooms." | **See Activity 01 for full facilitator micro-actions during this time.** |
| 0:45–0:52 | Debrief | "Nhóm nào muốn share? [2-3 groups] Tôi thấy pattern: hầu hết prompt thiếu [X] — đây là quick win lớn nhất." | Highlight PATTERNS, không chỉ individual results. Nếu không ai volunteer, gọi tên nhóm: "Nhóm 2 — prompt trước/sau như thế nào?" |
| 0:52–0:57 | SO WHAT: 3 rules | "3 điều nhớ về nhà: (1) Không Role = AI đoán mò. (2) Không Format = AI viết tự do. (3) Không Context = AI trả lời chung chung." | Dùng slide visual. Đọc chậm, nhấn từng rule. |
| 0:57–1:00 | Wrap-up | "Homework: thu thập 5 prompt bạn hay dùng trong tuần — chúng ta sẽ upgrade chúng buổi sau bằng framework RTT." | Gửi link recap + homework qua chat. |

### Troubleshooting Scenarios

**Scenario 1: Live demo fails (AI gives unexpected output)**
- *Trigger:* Output không match mong đợi
- *Response:* "Perfect — đây là ví dụ thực tế tại sao iteration quan trọng! Hãy phân tích: prompt thiếu gì khiến AI hiểu sai?" Biến fail thành teachable moment. KHÔNG restart — dùng bad output làm teaching material.

**Scenario 2: Learners say "I don't use AI at work"**
- *Trigger:* 1-2 người nói không dùng AI
- *Response:* "Không sao — bạn có thể dùng ví dụ này: hãy tưởng tượng bạn cần viết email xin lỗi khách hàng. Prompt thế nào?" Cho ví dụ universal task. Pair them with an active user in breakout.

**Scenario 3: Breakout rooms too quiet**
- *Trigger:* Roaming thấy room im lặng > 2 min
- *Response:* "Tôi thấy các bạn chưa start — thử bắt đầu từ prompt gần nhất trong chat history. Paste vào worksheet và đánh dấu thiếu component nào." Cung cấp specific first step.

### Engagement Checkpoints
- **0:08** (after poll): Nếu < 50% respond poll → nhắc lại, cho thêm 30 giây
- **0:18** (after chat interaction): Nếu < 5 chat messages → "Ai chưa gõ — hãy thử, tôi muốn xem pattern của lớp mình"
- **0:35** (during activity): Roam breakout rooms — nếu > 50% nhóm chưa bắt đầu step 3, announce thêm 3 min
- **0:52** (debrief): Nếu không ai share → gọi tên nhóm, hoặc share observation từ roaming: "Khi tôi vào room 3, tôi thấy [X] — rất hay"

---

## Buổi 2 — Framework RTT & CO-STAR (60 min)

### Technical Setup (trước buổi 10 min)
- [ ] Slides loaded, test animations cho framework reveal
- [ ] ChatGPT/Claude ready với 2 tabs (1 cho RTT demo, 1 cho CO-STAR demo)
- [ ] Chuẩn bị 4 business scenarios in notepad (backup cho Activity 2)
- [ ] Breakout rooms configured: 3-4 người, random assign
- [ ] Zoom poll ready: "Recap — prompt tốt cần mấy component?" (2/3/4/5)

### Timing Table

| Thời gian | Hoạt động | Speaker Script / Key Phrases | Lưu ý |
|-----------|-----------|------------------------------|-------|
| 0:00–0:03 | Recap quiz | "Quick quiz! [show 3 prompts] Prompt này thiếu gì? Vote A/B/C." | Dùng prompts thật hoặc từ homework submissions. Nếu > 80% đúng → "Tuyệt vời, buổi 1 đã ngấm!" Nếu < 50% → review nhanh 2 min. |
| 0:03–0:05 | WHY: Framework analogy | "Framework = công thức nấu ăn. Bạn không cần sáng tạo lại mỗi lần — điền vào chỗ trống, output ổn định. Hôm nay: 2 công thức — 1 nhanh cho việc đơn giản, 1 chi tiết cho việc phức tạp." | Giữ analogy nhất quán: nấu ăn → recipe → ingredients. |
| 0:05–0:13 | WHAT 1: RTT Framework | "RTT = Role, Task, Tone. Ba thứ. Đủ cho 60-70% công việc hàng ngày." [Slide: RTT breakdown] "Role: 'Bạn là chuyên viên CS senior'. Task: 'Viết email phản hồi complaint này [paste complaint]'. Tone: 'Chuyên nghiệp, empathetic, solution-focused'." [Live demo on ChatGPT/Claude] | Nhấn mạnh: RTT là default framework. Hầu hết tasks chỉ cần RTT. CO-STAR là upgrade khi RTT chưa đủ. |
| 0:13–0:15 | Chat interaction | "Nghĩ 1 task routine bạn làm mỗi ngày — gõ vào chat." | Đọc 3-4 examples. "Email response, report summary, data check — tất cả RTT đủ!" |
| 0:15–0:27 | HOW 1: Guided RTT practice | "Mở worksheet. Tôi sẽ làm task 1 cùng các bạn [email response]. Task 2 tôi hướng dẫn, bạn viết. Task 3 bạn tự làm." [I Do → We Do → You Do] | Template CÓ SẴN cho task 1-2. Task 3 = template trống. Roam rooms: "Ai stuck ở task 3? Bắt đầu từ Role — bạn muốn AI đóng vai gì?" |
| 0:27–0:30 | Transition | "RTT nhanh, hiệu quả. Nhưng khi task cần phân tích, viết report dài, hay trình bày cho stakeholders — cần thêm chi tiết. Enter: CO-STAR." | Bridge smoothly: RTT = quick meal, CO-STAR = dinner party. |
| 0:30–0:38 | WHAT 2: CO-STAR Framework | "CO-STAR = 6 yếu tố." [Reveal one by one] "Context: bối cảnh cụ thể. Objective: mục đích rõ ràng. Style: viết như báo cáo? như email? Tone: formal? casual? Audience: ai đọc output? Response: format output mong muốn." [Demo: marketing brief using CO-STAR] | Side-by-side comparison slide: RTT prompt vs CO-STAR prompt cho CÙNG task → thấy CO-STAR output chi tiết hơn. |
| 0:38–0:40 | Pair discussion | "Quay sang người bên cạnh (breakout đôi, 2 min): nghĩ 1 task cần CO-STAR thay vì RTT. Tại sao?" | Keep pairs to 2 min. Announce: "30 giây nữa quay lại." |
| 0:40–0:52 | Activity 2: Framework Battle | "Mỗi nhóm nhận 1 scenario. Viết prompt bằng RTT, chạy. Rồi viết bằng CO-STAR, chạy. So sánh output — framework nào tốt hơn cho case này?" | **See Activity 02 for full facilitator micro-actions.** Scenarios: (1) HR: viết job description, (2) Marketing: chiến dịch launch, (3) Finance: phân tích quarterly report, (4) Ops: SOP documentation. |
| 0:52–0:57 | Debrief | "Kết quả: nhóm nào thấy RTT đủ? Nhóm nào thấy CO-STAR tốt hơn? [show hands] Pattern: tasks cần phân tích hoặc audience-specific → CO-STAR wins." | Build decision rule TOGETHER: draw on shared screen. "Nếu task < 5 phút → RTT. Nếu cần stakeholder review → CO-STAR." |
| 0:57–1:00 | SO WHAT + Wrap-up | "Rule of thumb: RTT cho 70% tasks, CO-STAR cho 30% quan trọng. Tuần này: thử RTT cho 3 tasks routine, CO-STAR cho 1 task quan trọng. Buổi 3 — kỹ thuật dạy AI bằng ví dụ." | Gửi recap + decision rule graphic qua chat. |

### Troubleshooting Scenarios

**Scenario 1: Learners confused between RTT and CO-STAR**
- *Trigger:* Questions like "khi nào dùng cái nào?"
- *Response:* Draw simple decision tree on screen: "Task đơn giản, cần nhanh → RTT. Task cần phân tích, nhiều stakeholders, output dài → CO-STAR. Nếu không chắc → bắt đầu RTT, nếu output chưa đủ → upgrade lên CO-STAR."

**Scenario 2: Activity takes longer than expected**
- *Trigger:* At 0:48, most groups still comparing outputs
- *Response:* "Thay vì so sánh cả 2, hãy focus: output nào bạn thực sự sẽ dùng? Ghi lý do." Cut debrief to 3 min, ask 1 group only.

**Scenario 3: CO-STAR feels overwhelming**
- *Trigger:* Learners say "quá nhiều yếu tố"
- *Response:* "Bạn không cần dùng tất cả 6 mỗi lần. Start with Context + Objective — 2 yếu tố quan trọng nhất. Add thêm khi cần. CO-STAR là menu, không phải bắt buộc gọi full set."

### Engagement Checkpoints
- **0:03** (recap quiz): Nếu < 60% correct → mini-review 2 min trước khi proceed
- **0:13** (after RTT): Scan chat responses — nếu ít response, prompt: "Mọi người có thấy RTT đơn giản không? Gõ 👍 hoặc 🤔"
- **0:30** (transition): Energy check — nếu thấy mệt, stand-up stretch 30 giây trước CO-STAR
- **0:45** (mid-activity): Roam rooms — nếu nhóm stuck, provide specific hint: "Thử copy RTT prompt trước, rồi ADD thêm 3 yếu tố còn lại để thành CO-STAR"
