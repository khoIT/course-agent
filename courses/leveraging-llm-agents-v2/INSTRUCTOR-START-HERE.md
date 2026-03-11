# Hướng dẫn nhanh cho Giảng viên

> Đọc file này trước khi bắt đầu. Nó giải thích mỗi file dùng để làm gì và thứ tự sử dụng.

---

## Bước 1: Nắm tổng quan khóa học

| Đọc file | Mục đích |
|----------|----------|
| `00-course-overview.md` | Chân dung học viên, 10 mục tiêu, cấu trúc 5 buổi. **Đọc đầu tiên** để hiểu toàn bộ khóa. |

---

## Bước 2: Chuẩn bị trước mỗi buổi

| Đọc file | Mục đích |
|----------|----------|
| `01-lesson-plan.md` | Kịch bản chi tiết từng phút cho cả 5 buổi. Mở file này khi dạy — đây là "bản đồ" của bạn. |
| `03-facilitator-guide.md` | Script gợi ý, cách xử lý tình huống, checklist chuẩn bị kỹ thuật, glossary. Đọc trước buổi đầu tiên. |

---

## Bước 3: Phát tài liệu cho học viên

| Gửi file | Khi nào | Mục đích |
|----------|---------|----------|
| `04-learner-handout.md` | Trước buổi 1 | Tài liệu tham khảo cho học viên. Dùng standalone — không cần slides. |

---

## Bước 4: Mở interactive artifacts trong buổi dạy

Mở các file HTML này trong trình duyệt và screen-share qua Zoom/Teams:

| File | Dùng tại | Cách dùng |
|------|----------|-----------|
| `08-interactive-artifacts/skill-selector-decision-tree.html` | Buổi 2 | Screen-share → học viên chọn branch → thảo luận nhóm |
| `08-interactive-artifacts/skillmd-builder.html` | Buổi 3 | Screen-share hoặc gửi link → học viên điền từng ô → export SKILL.md |
| `08-interactive-artifacts/platform-picker-decision-tree.html` | Buổi 4 | Screen-share → so sánh Cowork vs Claude Code theo nhu cầu |
| `08-interactive-artifacts/skill-quality-checker.html` | Buổi 5 | Gửi link → học viên tự đánh giá skill → xem radar chart |

**Cách mở:** Double-click file HTML hoặc kéo vào trình duyệt. Không cần server.

---

## Bước 5: In/gửi worksheets cho từng buổi

Mỗi buổi có 1 activity worksheet. Gửi link hoặc screen-share trước khi vào breakout room:

| File | Buổi | Hoạt động | Thời gian |
|------|------|-----------|-----------|
| `05-activities/session-01-agent-task-identifier.md` | 1 | Xác định tác vụ giao cho Agent | 15 phút |
| `05-activities/session-02-skill-relay-race.md` | 2 | Skill Relay Race (3 tracks: HR/MKT/FIN) | 22 phút |
| `05-activities/session-03-skillmd-creation-workshop.md` | 3 | Tạo SKILL.md bằng Builder | 18 phút |
| `05-activities/session-04-skill-upgrade-challenge.md` | 4 | Nâng cấp skill + peer review | 13 phút |
| `05-activities/session-05-quality-assessment.md` | 5 | Đánh giá chất lượng skill | 11 phút |
| `05-activities/session-05-adoption-plan-workshop.md` | 5 | Lập kế hoạch 30 ngày | 17 phút |

---

## Bước 6: Dùng quizzes để kiểm tra

| File | Khi nào | Mục đích |
|------|---------|----------|
| `06-assessments/mini-quizzes-per-session.md` | Cuối mỗi buổi (5 phút) | 3 câu MCQ/buổi — kiểm tra hiểu biết nhanh |
| `06-assessments/end-of-course-assessment.md` | Sau buổi 5 | 10 câu (6 MCQ + 4 tự luận) — đánh giá tổng kết |
| `06-assessments/course-evaluation-survey.md` | Sau buổi 5 | 10 Likert + 3 câu mở — thu feedback về khóa học |

---

## Bước 7: Slides

| File | Mục đích |
|------|----------|
| `02-slides.pptx` | 43 slides cho cả 5 buổi. Mở bằng PowerPoint/Google Slides. |

---

## Tóm tắt: Bản đồ toàn bộ file

```
leveraging-llm-agents-v2/
│
├── INSTRUCTOR-START-HERE.md      ← BẠN ĐANG Ở ĐÂY
│
├── 00-course-overview.md         ← Đọc đầu tiên (tổng quan + mục tiêu)
├── 01-lesson-plan.md             ← Mở khi dạy (kịch bản từng phút)
├── 02-slides.pptx                ← Chiếu khi dạy
├── 03-facilitator-guide.md       ← Đọc trước buổi 1 (script + troubleshoot)
├── 04-learner-handout.md         ← Gửi cho học viên trước buổi 1
│
├── 05-activities/                ← Worksheets cho breakout rooms
│   ├── session-01-*.md
│   ├── session-02-*.md
│   ├── session-03-*.md
│   ├── session-04-*.md
│   └── session-05-*.md (×2)
│
├── 06-assessments/               ← Quizzes + đánh giá + survey
│   ├── mini-quizzes-per-session.md
│   ├── end-of-course-assessment.md
│   └── course-evaluation-survey.md
│
├── 07-evaluation-report.md       ← Báo cáo chất lượng (cho admin, không cho học viên)
│
└── 08-interactive-artifacts/     ← 4 công cụ HTML tương tác
    ├── skill-selector-decision-tree.html    (Buổi 2)
    ├── skillmd-builder.html                 (Buổi 3)
    ├── platform-picker-decision-tree.html   (Buổi 4)
    └── skill-quality-checker.html           (Buổi 5)
```

---

## Checklist nhanh trước khi bắt đầu dạy

- [ ] Đã đọc `00-course-overview.md`
- [ ] Đã đọc `03-facilitator-guide.md`
- [ ] Đã đọc `01-lesson-plan.md` cho buổi sắp dạy
- [ ] Đã test 4 file HTML trong trình duyệt
- [ ] Đã mở `02-slides.pptx` và xem qua
- [ ] Đã gửi `04-learner-handout.md` cho học viên
- [ ] Đã setup Zoom/Teams room + breakout rooms
- [ ] Đã chuẩn bị polls/quizzes từ `06-assessments/mini-quizzes-per-session.md`
