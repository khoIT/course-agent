# Khóa học: Sử dụng Skills để khai thác sức mạnh LLM Agent (V2)

> Phiên bản nâng cấp: Infographic chuyên nghiệp, công cụ tương tác HTML, scaffolding từng bước, và tình huống thực tế theo ngành.

---

## Chân dung học viên (Learner Portrait)

### Đối tượng mục tiêu
- **Nhóm chính:** Người dùng phi kỹ thuật (business users) — nhân viên văn phòng, quản lý, chuyên viên marketing, HR, finance, operations muốn tận dụng AI agents để tự động hóa công việc
- **Nhóm phụ:** Người dùng đã quen prompt nhưng chưa biết cách hệ thống hóa bằng Skills

### Trạng thái hiện tại (KSA)
- **Kiến thức (K):** Đã dùng ChatGPT/Claude để chat, hỏi đáp cơ bản. Chưa hiểu "agent", "skill", "MCP tool". Chưa phân biệt prompt đơn lẻ vs. workflow hệ thống.
- **Kỹ năng (S):** Biết gõ prompt và nhận output. Chưa biết cấu trúc SKILL.md, tổ chức thư mục references, kích hoạt skill, hoặc kết nối tools trong workflow.
- **Thái độ (A):** Hào hứng với AI nhưng bối rối trước thuật ngữ kỹ thuật. Lo ngại "tạo skill" nghe như lập trình. Cần thấy lợi ích thực tế (WIIFM) ngay.

### Bối cảnh học tập
- **Phong cách học:** Visual (demo, infographic, screenshot) + Kinesthetic (làm theo, hands-on)
- **Thời lượng:** 5 buổi × 1 giờ (tổng 5 giờ)
- **Hình thức:** Online qua Zoom/Teams — chia sẻ màn hình, breakout rooms
- **Động lực:** Muốn làm việc nhanh hơn, bớt lặp lại. Mất hứng nếu quá nhiều lý thuyết.

### Hệ quả cho thiết kế (V2 Enhancements)
- **Scaffolding:** Mỗi hoạt động dùng mô hình "I Do → We Do → You Do" — giảng viên làm mẫu → làm cùng → học viên tự làm
- **Template fading:** Buổi 1-2 = template đầy đủ, Buổi 3 = template một phần, Buổi 4-5 = template trống + checklist
- **Industry scenarios:** Tình huống cụ thể theo 4 ngành (HR, Marketing, Finance, Operations) thay vì ví dụ chung
- **Interactive artifacts:** Công cụ HTML tương tác cho thực hành trực tiếp trong trình duyệt
- **Engagement rhythm:** Mỗi 8 phút = chuyển hoạt động hoặc kiểm tra nhanh (poll/chat/breakout)

---

## Mục tiêu khóa học (Learning Objectives)

### Buổi 1 — Agent & Skill 101: "Tại sao prompt đơn lẻ không đủ?"
1. **Giải thích** sự khác biệt giữa prompt đơn lẻ và LLM agent có skill, sử dụng ít nhất 2 ví dụ từ ngành mình *(Level 1)*
2. **Xác định** ít nhất 3 công việc lặp lại trong công việc hàng ngày có thể giao cho agent, phân loại theo mức độ phù hợp *(Level 2)*

### Buổi 2 — Sử dụng Skills có sẵn: "Biến AI thành trợ lý đa năng"
3. **Kích hoạt** và sử dụng ít nhất 3 skills có sẵn trong Cowork để hoàn thành tác vụ thực tế theo ngành mình *(Level 2)*
4. **Lựa chọn** skill phù hợp cho từng loại công việc dựa trên decision tree tương tác *(Level 2)*

### Buổi 3 — Tạo Skill đầu tiên: "Từ người dùng thành người tạo"
5. **Tạo** file SKILL.md hoàn chỉnh bằng interactive Skill Builder, với frontmatter YAML và nội dung hướng dẫn *(Level 2)*
6. **Tổ chức** thư mục skill với references/ và cấu trúc chuẩn *(Level 2)*

### Buổi 4 — Skill nâng cao & Claude Code: "Từ đơn giản đến chuyên nghiệp"
7. **Thiết kế** skill phức tạp có references, multi-step workflow, và progressive disclosure *(Level 3)*
8. **So sánh** Cowork vs Claude Code bằng decision tree tương tác và chọn nền tảng phù hợp *(Level 3)*

### Buổi 5 — Tối ưu, Chia sẻ & Chiến lược: "Từ cá nhân đến tổ chức"
9. **Đánh giá** chất lượng skill dựa trên rubric tương tác (trigger accuracy, output quality, reusability) *(Level 3)*
10. **Xây dựng** kế hoạch triển khai skills cho team với ít nhất 3 use case cụ thể theo ngành *(Level 3)*

---

## Phân loại nội dung (Content Priority)

### CẦN CÓ (Must Have)
- Khái niệm Agent vs Prompt đơn lẻ (analogy "nhân viên mới + SOP + phần mềm")
- Demo sử dụng skill có sẵn trong Cowork (pptx, docx, pdf, xlsx)
- Cấu trúc SKILL.md: frontmatter YAML + body
- Hands-on: tạo skill đơn giản từ đầu (scaffolded với interactive builder)
- Template SKILL.md chuẩn (fading từ đầy đủ → trống)
- So sánh Cowork vs Claude Code (interactive decision tree)
- Tình huống thực tế theo ngành (HR, Marketing, Finance, Ops)

### NÊN CÓ (Should Have)
- References folder và progressive disclosure
- Multi-step workflows trong skill
- Cách viết description "pushy" để trigger chính xác
- Tips debug khi skill không hoạt động đúng
- Industry-specific skill examples cho từng phòng ban

### CÓ CŨNG TỐT (Nice to Have)
- MCP tools và connector ecosystem
- Skill composition (skill gọi skill)
- Plugin packaging và distribution
- Team skill library management

---

## Interactive Artifacts (V2 Exclusive)

| # | Artifact | Loại | Dùng tại | Mục đích |
|---|----------|------|----------|----------|
| 1 | Skill Selector | Decision Tree (React) | Buổi 2 | Chọn skill phù hợp cho công việc |
| 2 | SKILL.md Builder | Fill-in-the-blank (React) | Buổi 3 | Tạo SKILL.md có hướng dẫn từng bước |
| 3 | Platform Picker | Decision Tree (React) | Buổi 4 | Cowork vs Claude Code decision |
| 4 | Skill Quality Checker | Self-Assessment (React) | Buổi 5 | Đánh giá chất lượng skill |

---

## Cấu trúc 5 buổi với Scaffolding

| Buổi | Chủ đề | Scaffolding Level | Industry Focus | Interactive |
|------|--------|-------------------|----------------|-------------|
| 1 | Agent & Skill 101 | Full guide (I Do → We Do) | All 4 ngành: pain points | — |
| 2 | Dùng Skills có sẵn | Guided template (We Do → You Do) | Ngành-specific tasks | Skill Selector |
| 3 | Tạo Skill đầu tiên | Partial template (You Do guided) | Choose-your-industry | SKILL.md Builder |
| 4 | Skill nâng cao & Claude Code | Minimal scaffold (You Do) | Advanced use cases | Platform Picker |
| 5 | Tối ưu & Chiến lược | Independent (create + evaluate) | Team deployment plan | Quality Checker |
