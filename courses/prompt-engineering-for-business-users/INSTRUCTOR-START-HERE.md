# INSTRUCTOR START HERE
# Prompt Engineering for Business Users — Vietnamese Zoom Course

Đây là điểm bắt đầu cho facilitator. Đọc file này trước mọi thứ khác.

---

## Tổng Quan Khóa Học

**Đối tượng:** Người đi làm không có nền tảng kỹ thuật — manager, marketer, giáo viên
**Định dạng:** 5 buổi × 2 giờ, Zoom, tiếng Việt
**Kết quả:** Học viên về nhà với SKILL.md tự viết chạy được trên Claude Code
**Sợi chỉ đỏ:** Contract-agent (đơn hàng Google Vietnam → hợp đồng) xuyên suốt cả 5 buổi

---

## Thứ Tự Đọc Files

### Trước khi dạy lần đầu (đọc theo thứ tự này):

```
1. FILE NÀY (INSTRUCTOR-START-HERE.md)              ← Bạn đang đọc
2. 00-course-overview.md                             ← Tổng quan khóa học
3. 01-lesson-plan.md                                 ← Cấu trúc 5 buổi
4. 03-facilitator-guide.md                           ← Mục lục hướng dẫn giảng viên
5. 03-facilitator-guide-session-01.md thông qua 05   ← Chi tiết từng buổi
6. 04-learner-handout.md                             ← Handout học viên
```

### Trước mỗi buổi (đọc lại 30 phút trước):

```
- 03-facilitator-guide-session-0X.md    ← File hướng dẫn buổi đó
- Chạy test demo và contract-agent      ← KHÔNG bỏ bước này
```

---

## Cấu Trúc Thư Mục Khóa Học

```
courses/prompt-engineering-for-business-users/
│
├── INSTRUCTOR-START-HERE.md                ← File này
├── 00-course-overview.md                   ← Tổng quan, target learners, goals
├── 01-lesson-plan.md                       ← Lesson plan 5 buổi
│
├── 03-facilitator-guide.md                 ← Index + tổng hợp 5 buổi
├── 03-facilitator-guide-session-01.md      ← Buổi 1: AI + Prompt Mastery
├── 03-facilitator-guide-session-02.md      ← Buổi 2: Tư duy Agent
├── 03-facilitator-guide-session-03.md      ← Buổi 3: Cowork + Claude Code
├── 03-facilitator-guide-session-04.md      ← Buổi 4: Context Engineering + MCP
├── 03-facilitator-guide-session-05.md      ← Buổi 5: Build Your Skill (Capstone)
│
├── 04-learner-handout.md                   ← Handout học viên
├── 05-activities/                          ← Worksheet chi tiết cho từng bài tập
├── 06-assessments/                         ← Đánh giá và rubric
└── 07-evaluation-report.md                 ← Báo cáo đánh giá chất lượng
```

**Lưu ý:** Các file `03-facilitator-guide-sessions-1-2.md` và `03-facilitator-guide-sessions-3-4-5.md` là phiên bản cũ — KHÔNG dùng. Dùng 5 file session riêng biệt ở trên.

---

## Cái Bạn Cần Chuẩn Bị Trước Khóa Học

### Tài khoản và công cụ (thiết lập trước ít nhất 1 tuần):

| Công cụ | Dùng cho | Ghi chú |
|---------|---------|---------|
| Claude.ai | Buổi 1–2 | Tài khoản demo riêng — không dùng tài khoản cá nhân |
| Claude Cowork | Buổi 2–3 | Đăng ký gói phù hợp cho học viên |
| Claude Code | Buổi 3–5 | Cài trên máy facilitator + gửi hướng dẫn học viên cài trước B3 |
| Filesystem MCP | Buổi 4 | Cài và test trên máy facilitator trước B4 |
| Zoom | Tất cả | Cấu hình polls trước mỗi buổi |

### Contract-agent (thiết lập trước Buổi 3):

- Clone/download thư mục contract-agent
- Chạy test với file đơn hàng mẫu — xác nhận output đúng
- Tạo ZIP để share cho học viên (không kèm file output)
- Upload lên Google Drive / tạo link download

### Tài liệu gửi cho học viên:

| Gửi khi | Tài liệu |
|---------|---------|
| Trước B1 (3 ngày) | Link Claude.ai, handout đơn hàng mẫu, template 6 thành phần |
| Trước B2 (1 ngày) | Link Claude Cowork, template task brief 4 phần |
| Trước B3 (3 ngày) | **Hướng dẫn cài Claude Code** — học viên cần thời gian |
| Trước B4 (1 ngày) | Hướng dẫn cài MCP, template CLAUDE.md, template SKILL.md |
| Sau B5 (24h) | Recording, tài liệu tổng kết, link cộng đồng |

---

## Pacing Template — 4 Block Mỗi Buổi

```
0:00–0:35  Block A — Concept + Demo
0:35–0:40  Break 1
0:40–1:15  Block B — Hands-on Practice
1:15–1:20  Break 2
1:20–1:50  Block C — Apply to Your Work + Q&A
1:50–2:00  Block D — Homework + Wrap
```

**Nguyên tắc không thay đổi:**
- Demo trước, giải thích sau
- Không có lecture block > 5 phút
- Học viên thực hành từ phút đầu tiên
- Poll mỗi 8–10 phút để check engagement

---

## Khi Có Sự Cố Kỹ Thuật

| Sự cố | Phản ứng |
|-------|---------|
| Claude.ai lỗi | Show ảnh chụp màn hình kết quả mẫu trong slide |
| Cowork lỗi | Phát video backup 2–3 phút (quay trước) |
| Claude Code không cài | Follow-along mode — xem demo, viết CLAUDE.md trên text editor |
| MCP lỗi | Copy-paste thủ công nội dung file |
| AI cho kết quả bất ngờ | KHÔNG restart — biến thành teachable moment |

**Câu thần chú:** *"Hoàn hảo — đây là ví dụ thực tế tại sao [concept vừa học] quan trọng."*

---

## Câu Hỏi Thường Gặp

**"AI có lấy dữ liệu công ty không?"**
→ Claude không lưu conversation để train (gói trả phí). Nguyên tắc: không nhập thông tin mật — dùng dữ liệu mẫu.

**"Có cần đủ 6 thành phần mỗi lần không?"**
→ Không. Bắt đầu với 3 (Vai trò + Tác vụ + Định dạng), thêm dần khi cần.

**"Agent có bao giờ làm sai không?"**
→ Có. Vì vậy tiêu chí thành công trong task brief quan trọng — bạn review output trước khi dùng.

**"CLAUDE.md khác system prompt thế nào?"**
→ CLAUDE.md lưu trên máy, tự load mỗi phiên. System prompt phải gõ lại mỗi lần.

---

## Chỉ Số Thành Công Mỗi Buổi

| Buổi | Chỉ số tối thiểu |
|------|-----------------|
| 1 | ≥70% chạy được prompt 6 thành phần trong buổi |
| 2 | ≥70% gửi task brief và nhận output từ Cowork |
| 3 | ≥60% chạy được contract-agent, có file hợp đồng output |
| 4 | ≥70% có CLAUDE.md hoạt động và MCP kết nối được |
| 5 | 100% có SKILL.md ≥4 phần; ≥80% đã test chạy được |

---

## Key Design Decisions

- **Scaffolding:** Demo contract-agent (B1) → chạy contract-agent (B3) → build skill riêng (B5)
- **Depth:** 3–4 phút/concept cho người không có nền tảng kỹ thuật, tương tác mỗi 8 phút
- **Handout:** Xem `04-learner-handout.md` — tổ chức theo TASK để dùng sau khóa học
- **Activities:** Mỗi bài tập có facilitator micro-actions — làm gì trong khi học viên thực hành
- **Language:** Tiếng Việt hoàn toàn, thuật ngữ Anh trong ngoặc lần đầu xuất hiện
