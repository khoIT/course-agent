# Activity 04: Design Your CLAUDE.md

<!-- Buổi 3 | 12 phút | Group Practice | LO6 -->

## Tổng quan

| Mục | Chi tiết |
|-----|----------|
| **Buổi** | 3 — Kỹ thuật nâng cao: CLAUDE.md nâng cao |
| **Thời lượng** | 12 phút (0:41–0:53) |
| **Hình thức** | Cá nhân thiết kế, nhóm review cuối |
| **Mục tiêu** | LO6: thiết kế CLAUDE.md với project instructions + few-shot examples |

## Kiểm tra REAL

- **R (Relevant):** Học viên thiết kế cho phòng ban thực tế của chính họ
- **E (Engaging):** Khoảnh khắc "aha" khi Claude Code tự áp dụng context mà không cần nhắc lại
- **A (Active):** Tạo file thực sự, chạy thực sự trong terminal
- **L (Learner-centered):** Mỗi người tự chọn nội dung phù hợp công việc hàng ngày của mình

## Tài liệu cần có

- Worksheet + CLAUDE.md template + Sample HR (bên dưới) | Claude Code đang chạy trong project folder

---

## Hướng dẫn Giảng viên

### Setup (1 phút)

1. "Tạo folder theo phòng ban: `mkdir hr-workspace && cd hr-workspace`"
2. "Tạo CLAUDE.md: Notepad hoặc `nano CLAUDE.md`. Sample HR ở worksheet — tham khảo, không copy."

### Roaming Schedule (11 phút)

| Phút | Hành động Giảng viên |
|------|----------------------|
| 0–2 | Quan sát chung — ai đã tạo được folder chưa, ai đang bí nội dung section nào |
| 2–5 | Đi từng người — kiểm tra phần "Few-shot Examples": format có nhất quán không? |
| 5–8 | Hỗ trợ phần test: nhắc gõ `claude` trong đúng folder chứa CLAUDE.md |
| 8–10 | Announce: "Còn 2 phút — test ít nhất 1 prompt và ghi kết quả vào worksheet" |
| 10–11 | Ghép nhóm 2–3 người cùng ngành: "So sánh CLAUDE.md của nhau — ai có section hay nhất?" |

### Intervention Triggers

| Tình huống | Cách xử lý |
|------------|-----------|
| Học viên không biết viết gì vào CLAUDE.md | Hỏi 3 câu: "Bạn làm gì hàng ngày? Output thường ở dạng gì? Từ nào hay bị AI dùng sai?" — từ đó điền vào template |
| CLAUDE.md quá dài (>30 dòng) | Nhắc: "CLAUDE.md nên ngắn gọn — AI đọc toàn bộ mỗi lần. Chọn 3–5 rule quan trọng nhất" |
| Claude Code không đọc CLAUDE.md | Kiểm tra: học viên có đang chạy `claude` trong đúng folder chứa file không? |
| Không thấy sự khác biệt sau khi có CLAUDE.md | Demo: chạy `/clear` → prompt lại → so sánh với kết quả trước khi có CLAUDE.md |

---

## Worksheet: Activity 04 — Design Your CLAUDE.md

**Tên:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_ | **Phòng ban:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

### Bước 1 — Điền vào CLAUDE.md Template (6 phút)

Sao chép template này, điền nội dung thực tế của phòng ban bạn:

```markdown
# [Tên phòng ban] — Claude Code Workspace

## Project Description
[1–2 câu mô tả phòng ban làm gì, AI hỗ trợ việc gì trong đây]

## Output Rules
- Ngôn ngữ: [Tiếng Việt / English / song ngữ]
- Định dạng mặc định: [bullet points / bảng / văn xuôi / email format]
- Tone: [formal / thân thiện / kỹ thuật]
- [Quy tắc riêng của phòng ban — ví dụ: "Luôn có TL;DR ở đầu"]

## Key Terminology
- [Thuật ngữ 1]: [nghĩa trong context phòng ban]
- [Thuật ngữ 2]: [nghĩa trong context phòng ban]

## Few-shot Examples
### Ví dụ 1
Input: [Task mẫu phổ biến nhất của phòng ban]
Output: [Output mong muốn — format, độ dài, cấu trúc]

### Ví dụ 2
Input: [Task mẫu thứ hai]
Output: [Output mong muốn]
```

---

### Bước 2 — Tạo file và Test (4 phút)

1. Tạo folder: `mkdir ten-phong-ban-workspace`
2. Vào folder: `cd ten-phong-ban-workspace`
3. Tạo CLAUDE.md: dán nội dung từ Bước 1 vào file
4. Chạy Claude Code: `claude`
5. Gõ 1 prompt bình thường — quan sát Claude có tự áp dụng rules không

**Prompt bạn đã test:**
```
[Ghi lại prompt]
```

**Claude có tự áp dụng Output Rules không?** ☐ Có ☐ Một phần ☐ Chưa

**Điều chỉnh cần làm (nếu có):** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

### Bước 3 — Peer Review (2 phút)

Đổi worksheet với người cùng nhóm. Đánh giá CLAUDE.md của họ:

| Tiêu chí | ☐ Có | ☐ Thiếu |
|----------|------|---------|
| Project description rõ ràng | | |
| Output rules cụ thể (không chung chung) | | |
| Few-shot examples đúng format | | |
| Ngắn gọn, dễ đọc (≤20 dòng) | | |

**1 gợi ý cải thiện cho người kia:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

## Sample CLAUDE.md — Phòng HR (Reference)

> Dùng làm tham khảo — không copy nguyên. Điều chỉnh cho đúng phòng ban bạn.

```markdown
# HR Department — Claude Code Workspace
## Project Description
Phòng Nhân sự công ty ABC. Claude hỗ trợ viết thông báo nội bộ, phân loại CV, tóm tắt phỏng vấn.
## Output Rules
- Tiếng Việt, văn phong công sở; tiêu đề in đậm; có mục Hành động ở cuối
- Không dùng từ tiếng Anh nếu có từ Việt tương đương
## Key Terminology
- "CBNV": Cán bộ nhân viên | "BLĐ": Ban lãnh đạo | "Ứng viên": người đang tuyển dụng
## Few-shot Examples
Input: Thông báo nghỉ lễ 30/4–1/5, nghỉ 4 ngày liên tục
Output: **THÔNG BÁO NGHỈ LỄ 30/4–1/5** / Kính gửi CBNV, nghỉ từ chiều 29/4 đến hết 3/5, đi làm lại 4/5. CBNV làm thêm vui lòng đăng ký với quản lý. / Trân trọng, Phòng NS
Input: Tóm tắt CV ứng viên Kế toán tổng hợp
Output: **[Tên]** | X năm KN | Điểm mạnh: [...] | Lưu ý PV: [...] | Đề xuất: Mời/Chờ/Không phù hợp
```

---

## Câu hỏi Debrief (Plenary — 0:53–0:57)

1. "Ai thấy Claude tự áp dụng rules mà không cần nhắc — rules đó là gì?"
2. "Phần nào trong CLAUDE.md khó viết nhất? Tại sao?"
3. "CLAUDE.md = bộ nhớ dài hạn. Few-shot trong prompt = bộ nhớ ngắn hạn. Bạn sẽ dùng cái nào cho task nào?"
