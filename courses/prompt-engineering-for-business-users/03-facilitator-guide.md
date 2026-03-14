# Hướng Dẫn Giảng Viên — Mục Lục

> **Khóa học:** Prompt Engineering for Business Users
> **Định dạng:** 5 buổi × 2 giờ, Zoom, tiếng Việt
> **Công cụ theo buổi:** Claude.ai (B1) → Cowork (B2) → Claude Code (B3–5)
> **Sợi chỉ đỏ:** Contract-agent (đơn hàng Google Vietnam → hợp đồng) xuyên suốt cả 5 buổi

---

## Cấu Trúc Tài Liệu

Mỗi buổi có file hướng dẫn riêng với độ sâu đồng đều:

| Buổi | Tên | File | Công cụ | Mục tiêu terminal |
|------|-----|------|---------|-------------------|
| 1 | AI + Prompt Mastery | [03-facilitator-guide-session-01.md](03-facilitator-guide-session-01.md) | Claude.ai | Viết prompt 6 thành phần cho kịch bản hợp đồng |
| 2 | Tư duy Agent | [03-facilitator-guide-session-02.md](03-facilitator-guide-session-02.md) | Claude.ai → Cowork | Chuyển quy trình hợp đồng từ chat sang agent brief |
| 3 | Cowork + Claude Code | [03-facilitator-guide-session-03.md](03-facilitator-guide-session-03.md) | Cowork + Claude Code | Cài Claude Code, chạy contract-agent thực tế |
| 4 | Context Engineering + MCP | [03-facilitator-guide-session-04.md](03-facilitator-guide-session-04.md) | Claude Code | Viết CLAUDE.md cá nhân, kết nối filesystem MCP |
| 5 | Build Your Skill (Capstone) | [03-facilitator-guide-session-05.md](03-facilitator-guide-session-05.md) | Claude Code | Tạo + test + trình bày SKILL.md hoàn chỉnh |

---

## Nội Dung Mỗi File Hướng Dẫn

Mỗi session file chứa đầy đủ:

- **Chuẩn bị kỹ thuật** — checklist trước buổi 15–20 phút
- **Zoom polls** — văn bản poll tiếng Việt sẵn sàng copy vào Zoom
- **Bảng thời gian chi tiết** — phút-by-phút, chia 4 block (A/B/Break/C/D)
- **Speaker scripts** — những gì facilitator nói, không phải bullet points
- **Demo instructions** — bước cụ thể: gõ gì, show gì, kết quả mong đợi
- **Facilitator micro-actions** — làm gì trong khi học viên thực hành
- **Troubleshooting scenarios** — ≥2 kịch bản sự cố + cách xử lý
- **Technical notes** — Zoom settings, backup plans, font size

---

## Contract-Agent — Sợi Chỉ Đỏ Xuyên Suốt

| Buổi | Vai trò contract-agent |
|------|----------------------|
| 1 | Demo prompt: paste đơn hàng Google Vietnam → Claude.ai tóm tắt điểm hợp đồng |
| 2 | Demo so sánh: chat 5 tin nhắn vs. agent brief 1 lần cho cùng tác vụ hợp đồng |
| 3 | Học viên tự chạy contract-agent — tạo file hợp đồng thật trên máy mình |
| 4 | CLAUDE.md contract-agent là case study context engineering chính |
| 5 | SKILL.md cá nhân lấy cảm hứng từ cấu trúc contract-agent |

**Thông tin đơn hàng mẫu (dùng xuyên suốt 5 buổi):**
```
Công ty: TNHH Google Vietnam
Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
MST: 028476564
Đại diện: Ông Khá Văn Bảnh – Giám Đốc
Dịch vụ: (1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND
VAT: 8%
Thời gian: 10 ngày từ ngày ký hợp đồng
```

---

## Homework Summary

| Buổi | Bài về nhà | Thời gian | Mang đến buổi sau |
|------|-----------|-----------|-------------------|
| 1 | Prompt Library 5 prompt (4+/6 thành phần, 1 liên quan tài liệu) | 20–25 phút | File Prompt Library |
| 2 | Chạy 2 tác vụ trên Cowork, ghi brief + kết quả + thời gian tiết kiệm | 25 phút | Brief + kết quả + so sánh |
| 3 | Hoàn thiện CLAUDE.md 4 phần + test + phác thảo SKILL.md | 25 phút | CLAUDE.md + bản nháp SKILL.md |
| 4 | CLAUDE.md nâng cao (ví dụ output + thuật ngữ + quy tắc "không làm") + SKILL.md 6 phần hoàn chỉnh | 30 phút | Bản nháp SKILL.md hoàn chỉnh |
| 5 | Không có — dùng SKILL.md đã tạo trong công việc tuần tới | — | — |

---

## Lưu Ý Quan Trọng Cho Facilitator

**Equal Depth Rule:** Mọi buổi đều có cùng độ sâu. Buổi 5 (capstone) cần nhiều chuẩn bị hơn, không ít hơn, vì facilitator chuyển vai từ presenter sang coach + MC.

**Gửi trước buổi học:**
- Trước B1: link Claude.ai, handout đơn hàng mẫu, template 6 thành phần
- Trước B2: link Claude Cowork, template task brief 4 phần
- Trước B3 (3 ngày): hướng dẫn cài Claude Code — học viên PHẢI cài trước
- Trước B4: hướng dẫn cài filesystem MCP, template CLAUDE.md, template SKILL.md
- Sau B5 (24h): recording, tài liệu tổng kết, link cộng đồng

**Backup plans:**
- Claude.ai lỗi → ảnh chụp màn hình kết quả mẫu trong slide
- Claude Cowork lỗi → video backup 2–3 phút đã quay sẵn
- Claude Code không cài được → follow-along mode, học viên xem demo và viết CLAUDE.md/SKILL.md trên text editor

---

## Files Liên Quan

- `01-lesson-plan.md` — lesson plan chi tiết (nguồn gốc của tài liệu này)
- `04-learner-handout.md` — handout học viên
- `05-activities/` — worksheet chi tiết cho từng bài tập
- `INSTRUCTOR-START-HERE.md` — điểm bắt đầu cho facilitator mới
