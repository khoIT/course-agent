# Activity 06: Quality Loop

> **Buổi:** 4 | **Thời gian:** 12 phút | **Hình thức:** Peer Review | **LO:** LO8

## Tổng quan
Học viên hoán đổi templates với người cùng KHÁC ngành. Test template của người khác trong Claude Code, đánh giá output bằng rubric 4 tiêu chí, viết feedback cụ thể, rồi iterate trong cùng session — chạy lại và so sánh.

## REAL Criteria Check
- **R**elevant: Nhận feedback từ góc nhìn outsider — phát hiện lỗi mà tác giả bỏ qua ✓
- **E**ngaging: Competitive dynamic — ai iterate được nhiều nhất? ✓
- **A**ctive: Test thật trên Claude Code + score + viết feedback + refine prompt ✓
- **L**earner-centered: Mỗi người nhận feedback cá nhân hóa cho template của mình ✓

## Materials Needed
- Claude Code (terminal mở, project folder)
- Template từ Activity 05
- Rubric worksheet (dưới đây)

## Procedure

### Setup (1 phút)
1. "Pair với người KHÁC ngành — không cùng ngành."
2. "Gửi link hoặc paste nội dung Template 1 của bạn cho partner qua chat Zoom."
3. "Partner sẽ test template của bạn, bạn test template của partner."

### During Activity — Facilitator Micro-Actions (11 phút)

**Roaming schedule:**
- 0:00–0:02: Đảm bảo mọi người đã pair và nhận được template. Nhắc: "Test đúng nguyên văn — không tự ý sửa khi test."
- 0:02–0:05: Kiểm tra ai đang score rubric. Nhắc điền số, không để trống.
- 0:05–0:08: Feedback phase — "Feedback phải CỤ THỂ: không nói 'output tệ', nói 'thiếu [FORMAT] — output ra paragraph nhưng cần table'."
- 0:08–0:10: Iteration phase — tác giả đọc feedback + refine + `/clear` + test lại. Đây là phần quan trọng nhất.
- 0:10–0:11: "Ai improve score sau khi iterate? Giơ tay — share nhanh."

**Câu nói khi bị stuck:**
- "Không biết điền rubric thế nào?" → "Đọc output: nếu bạn là người dùng output này, bạn có dùng được ngay không? Đó là Actionability."
- "Feedback quá chung chung?" → "Chỉ vào 1 câu cụ thể trong output và nói: 'câu này thiếu / sai / không rõ vì...'"
- "Không biết sửa gì trong prompt?" → "Nhìn tiêu chí thấp nhất trong rubric — sửa phần đó trong prompt trước."

**Early finisher:**
- "Xong rồi? Test Template 2 — cùng partner, cùng rubric."

**Time-check announcements:**
- 0:03: "Đã test xong và bắt đầu score chưa? Còn 8 phút."
- 0:07: "Feedback đã gửi cho partner chưa? Bắt đầu iterate ngay."
- 0:10: "1 phút — chạy test lần cuối, ghi lại score mới."

## Rubric Đánh Giá Output (score 1–5 mỗi tiêu chí)

**Template tôi đang test:** `_______________` (của: `_______________`)

| Tiêu chí | 1-2 (Kém) | 3 (OK) | 4-5 (Tốt) | Score |
|----------|-----------|--------|-----------|-------|
| **Accuracy** | Sai thông tin / bịa | Đúng nhưng thiếu | Chính xác, cụ thể | /5 |
| **Completeness** | Thiếu phần chính | Đủ ý, thiếu nuance | Đầy đủ, không thừa | /5 |
| **Tone** | Sai giọng hoàn toàn | Gần đúng | Đúng cho audience | /5 |
| **Actionability** | Không biết làm gì tiếp | Có hướng nhưng mờ | Rõ ai làm gì khi nào | /5 |
| **Tổng** | | | **Target: ≥ 16/20** | /20 |

### Feedback cho tác giả
**Điểm mạnh nhất của template:**
```
[Viết 1-2 câu cụ thể]
```

**Cần cải thiện (chỉ rõ phần nào trong prompt cần sửa):**
```
[Viết 1-2 câu cụ thể — trích dẫn phần prompt + đề xuất sửa]
```

## Iteration Loop

| | Lần test 1 | Sau khi iterate |
|---|-----------|----------------|
| Score | /20 | /20 |
| Thay đổi gì trong prompt? | — | |
| Lệnh reset: | — | `/clear` → test lại |

**Rule:** Chỉ thay đổi 1 thành phần mỗi lần iterate — biết chính xác cái gì tạo khác biệt.

## Debrief Questions
1. Ai cải thiện score sau khi iterate? Thay đổi gì?
2. Pattern nào xuất hiện nhiều nhất: lỗi Accuracy, Completeness, Tone, hay Actionability?
3. Nhận feedback từ người khác ngành — thấy điều gì bất ngờ?
