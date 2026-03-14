# INSTRUCTOR START HERE
# AI Skills & Agent Design for Business Users — Vietnamese Zoom Course

Đây là điểm bắt đầu cho facilitator. Đọc file này trước mọi thứ khác.

---

## Tổng Quan Khóa Học

**Đối tượng:** Người đi làm không có nền tảng kỹ thuật — manager, marketer, giáo viên
**Định dạng:** 5 buổi × 2 giờ, Zoom, tiếng Việt
**Kết quả:** Học viên về nhà với SKILL.md tự viết chạy được trên Claude Code
**Sợi chỉ đỏ:** Contract-agent (đơn hàng Google Vietnam → hợp đồng) xuyên suốt cả 5 buổi
**Triết lý:** Đây KHÔNG phải khóa "prompt engineering." Kỹ thuật prompt được dệt vào tự nhiên qua quá trình thiết kế agent và skill — học viên nghĩ "tôi đang thiết kế AI workflow" chứ không phải "tôi đang học viết prompt."

---

## Thứ Tự Đọc Files

### Trước khi dạy lần đầu (đọc theo thứ tự này):

```
1. FILE NÀY (INSTRUCTOR-START-HERE.md)              ← Bạn đang đọc
2. 00-course-overview.md                             ← Tổng quan khóa học
3. 01-lesson-plan.md                                 ← Cấu trúc 5 buổi (chi tiết phút-phút)
4. 03-facilitator-guide-session-01.md thông qua 05   ← Chi tiết từng buổi
5. 04-learner-handout.md                             ← Handout học viên (tổ chức theo TASK)
```

### Trước mỗi buổi (đọc lại 30 phút trước):

```
- 03-facilitator-guide-session-0X.md    ← File hướng dẫn buổi đó
- Chạy test demo và contract-agent      ← KHÔNG bỏ bước này
```

---

## Cấu Trúc Thư Mục Khóa Học

```
courses/ai-skills-and-agent-design/
│
├── INSTRUCTOR-START-HERE.md                ← File này
├── 00-course-overview.md                   ← Tổng quan, target learners, goals
├── 01-lesson-plan.md                       ← Lesson plan 5 buổi
│
├── 02-slides/                              ← Slide markdown cho từng buổi
│   ├── slides-v2-session-01-*.md           ← Buổi 1: AI + Agent Đầu Tiên
│   ├── slides-v2-session-02-*.md           ← Buổi 2: Ủy Quyền Cho Agent
│   ├── slides-v2-session-03-*.md           ← Buổi 3: Context Engineering + Claude Code
│   ├── slides-v2-session-04-*.md           ← Buổi 4: Thiết Kế Skill
│   └── slides-v2-session-05-*.md           ← Buổi 5: Build, Test, Trình Bày
│
├── 03-facilitator-guide-session-01.md      ← Buổi 1: AI Nghĩ Như Thế Nào + Agent Đầu Tiên
├── 03-facilitator-guide-session-02.md      ← Buổi 2: Ủy Quyền Cho Agent
├── 03-facilitator-guide-session-03.md      ← Buổi 3: Context Engineering + Claude Code
├── 03-facilitator-guide-session-04.md      ← Buổi 4: Thiết Kế Skill + MCP
├── 03-facilitator-guide-session-05.md      ← Buổi 5: Build, Test, Trình Bày (Capstone)
│
├── 04-learner-handout.md                   ← Handout tra cứu (tổ chức theo task)
└── 05-activities/                          ← Bài tập chi tiết
    ├── activity-s01-brief-nhan-vien-moi.md
    ├── activity-s02-workflow-mapping-v2.md
    ├── activity-s03-chay-contract-agent-v2.md
    ├── activity-s03-viet-claude-md.md
    ├── activity-s04-thiet-ke-skill.md
    ├── activity-s05-build-test-present.md
    └── contract-agent-demo/                ← Demo xuyên suốt
```

---

## Cái Bạn Cần Chuẩn Bị Trước Khóa Học

### Tài khoản và công cụ (thiết lập trước ít nhất 1 tuần):

| Công cụ | Dùng cho | Ghi chú |
|---------|---------|---------|
| Claude.ai | Buổi 1 (backup) | Tài khoản demo — dùng nếu Cowork gặp sự cố |
| Claude Cowork | Buổi 1–2 | Agent-first approach — dùng từ buổi đầu tiên |
| Claude Code | Buổi 3–5 | Cài trên máy facilitator + gửi hướng dẫn học viên cài trước B3 |
| Filesystem MCP | Buổi 4 | Cài và test trên máy facilitator trước B4 |
| Zoom | Tất cả | Cấu hình polls trước mỗi buổi (4 polls/buổi) |

### Contract-agent (thiết lập trước Buổi 3):

- Clone/download thư mục `05-activities/contract-agent-demo/`
- Chạy test với file đơn hàng mẫu — xác nhận output đúng
- Tạo ZIP để share cho học viên (không kèm file output)
- Upload lên Google Drive / tạo link download

### Tài liệu gửi cho học viên:

| Gửi khi | Tài liệu |
|---------|---------|
| Trước B1 (3 ngày) | Link Claude Cowork, handout đơn hàng mẫu |
| Trước B2 (1 ngày) | Template task brief 4 phần, worksheet workflow mapping |
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
- "Brilliant new employee" mental model xuyên suốt — mọi kỹ thuật frame thành "cách brief nhân viên mới"
- Poll mỗi 8–10 phút để check engagement
- Tiered activities: Foundation (theo template) / Extension (tự áp dụng) / Challenge (nâng cao)

---

## Khi Có Sự Cố Kỹ Thuật

| Sự cố | Phản ứng |
|-------|---------|
| Cowork lỗi | Chuyển sang Claude.ai — cùng task, khác giao diện |
| Claude Code không cài | Follow-along mode — xem demo, viết CLAUDE.md trên text editor |
| MCP lỗi | Copy-paste thủ công nội dung file |
| AI cho kết quả bất ngờ | KHÔNG restart — biến thành teachable moment |
| Zoom mất kết nối | Slide có QR code backup — học viên truy cập tài liệu offline |

**Câu thần chú:** *"Hoàn hảo — đây là ví dụ thực tế tại sao [concept vừa học] quan trọng."*

---

## Câu Hỏi Thường Gặp

**"AI có lấy dữ liệu công ty không?"**
→ Claude không lưu conversation để train (gói trả phí). Nguyên tắc: không nhập thông tin mật — dùng dữ liệu mẫu.

**"Agent có bao giờ làm sai không?"**
→ Có. Vì vậy tiêu chí thành công trong task brief quan trọng — bạn review output trước khi dùng.

**"CLAUDE.md khác system prompt thế nào?"**
→ CLAUDE.md lưu trên máy, tự load mỗi phiên. System prompt phải gõ lại mỗi lần.

**"Tôi cần biết lập trình không?"**
→ Không. Claude Code dùng tiếng Việt bình thường. Bạn giao việc, AI viết code.

---

## Chỉ Số Thành Công Mỗi Buổi

| Buổi | Chỉ số tối thiểu |
|------|-----------------|
| 1 | ≥70% chạy agent brief đầu tiên trên Cowork và nhận output |
| 2 | ≥70% gửi task brief 4 phần và đánh giá output vs chat |
| 3 | ≥60% chạy được contract-agent trên Claude Code, có file hợp đồng |
| 4 | ≥70% có CLAUDE.md hoạt động + MCP kết nối được + SKILL.md draft |
| 5 | 100% có SKILL.md ≥4 phần; ≥80% đã test chạy được; ≥60% trình bày |

---

## Khác Biệt So Với Phiên Bản 1 (prompt-engineering-for-business-users)

| Dimension | v1 | v2 (khóa này) |
|-----------|----|----|
| Framing | "Prompt engineering tips" | Agent design + skill building |
| Mental model | Generic | "Brilliant new employee" (Anthropic) |
| Tool từ buổi 1 | Claude.ai (chat) | Claude Cowork (agent) |
| CLAUDE.md | 4-part template | WHY-WHAT-HOW + anti-patterns + instruction budget |
| Prompt teaching | Standalone session | Woven into agent/skill design |
| Activities | Linear | Tiered (Foundation/Extension/Challenge) |
| Post-training | None | Spaced Practice Day 3/7/14/30 |
