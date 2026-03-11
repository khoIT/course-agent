# Khóa học: Sử dụng Skills để khai thác sức mạnh LLM Agent

> Khóa học hướng dẫn người dùng phi kỹ thuật cách sử dụng và tạo Skills để biến LLM agents (Cowork & Claude Code) thành trợ lý đa năng cho mọi công việc.

---

## Chân dung học viên (Learner Portrait)

### Đối tượng mục tiêu
- **Nhóm chính:** Người dùng phi kỹ thuật (business users) — nhân viên văn phòng, quản lý, chuyên viên marketing, HR, operations... muốn tận dụng AI agents để tự động hóa công việc
- **Nhóm phụ:** Người dùng đã quen prompt nhưng chưa biết cách hệ thống hóa bằng Skills

### Trạng thái hiện tại (KSA)
- **Kiến thức (K):** Đã dùng ChatGPT/Claude để chat, hỏi đáp cơ bản. Một số biết viết prompt tốt nhưng chưa hiểu khái niệm "agent", "skill", "MCP tool". Chưa phân biệt được giữa prompt đơn lẻ vs. workflow có hệ thống.
- **Kỹ năng (S):** Biết gõ prompt và nhận output. Chưa biết cách: cấu trúc SKILL.md, tổ chức thư mục references, kích hoạt skill, hoặc kết nối nhiều tools trong một workflow. Chưa từng tạo file markdown có frontmatter YAML.
- **Thái độ (A):** Hào hứng với AI nhưng bối rối trước thuật ngữ kỹ thuật. Lo ngại "tạo skill" nghe như lập trình. Cần thấy ngay lợi ích thực tế (WIIFM) để duy trì động lực.

### Bối cảnh học tập
- **Phong cách học:** Chủ yếu Visual (thích demo, screenshot) + Kinesthetic (thích làm theo). Ít Auditory thuần túy.
- **Thời lượng:** 5 buổi × 1 giờ (tổng 5 giờ)
- **Hình thức:** Online qua Zoom/Teams — có chia sẻ màn hình, breakout rooms
- **Động lực:** Muốn làm việc nhanh hơn, bớt lặp lại, và "cool" khi dùng AI. Sẽ mất hứng nếu quá nhiều lý thuyết trước khi được thực hành.

### Hệ quả cho thiết kế
- **Nội dung:** Tập trung vào use case thực tế, ví dụ cụ thể từ Cowork (phi kỹ thuật) trước, Claude Code (có kỹ thuật hơn) sau. Tránh giải thích kiến trúc hệ thống — chỉ cần "đủ để dùng".
- **Hoạt động:** Mỗi buổi PHẢI có hands-on practice. Demo live → Làm theo → Tự tạo. Tỉ lệ lý thuyết:thực hành = 30:70.
- **Độ sâu:** Từ đơn giản đến phức tạp. Buổi 1-2 dùng skill có sẵn, Buổi 3-4 tạo skill, Buổi 5 nâng cao.

---

## Mục tiêu khóa học (Learning Objectives)

Sau khi hoàn thành khóa học, học viên có thể:

### Buổi 1 — Hiểu Agent & Skill là gì
1. **Giải thích** sự khác biệt giữa prompt đơn lẻ và LLM agent có skill, sử dụng ít nhất 2 ví dụ thực tế *(Level 1 — Understand)*
2. **Xác định** ít nhất 3 loại công việc trong công việc hàng ngày có thể giao cho LLM agent *(Level 2 — Apply)*

### Buổi 2 — Sử dụng Skills có sẵn
3. **Kích hoạt** và sử dụng ít nhất 3 skills có sẵn trong Cowork để hoàn thành các tác vụ thực tế (tạo file, phân tích dữ liệu, tạo slide) *(Level 2 — Apply)*
4. **Lựa chọn** skill phù hợp cho từng loại công việc dựa trên mô tả skill và context *(Level 2 — Apply)*

### Buổi 3 — Cấu trúc & Tạo Skill đầu tiên
5. **Tạo** một file SKILL.md hoàn chỉnh với frontmatter YAML và nội dung hướng dẫn, theo template chuẩn *(Level 2 — Apply)*
6. **Tổ chức** thư mục skill với references/ và assets/ phù hợp *(Level 2 — Apply)*

### Buổi 4 — Skill nâng cao & Claude Code
7. **Thiết kế** một skill phức tạp có sử dụng references, multi-step workflow, và progressive disclosure *(Level 3 — Create)*
8. **So sánh** cách skill hoạt động trong Cowork vs Claude Code và chọn nền tảng phù hợp cho từng use case *(Level 3 — Evaluate)*

### Buổi 5 — Tối ưu, Chia sẻ & Chiến lược
9. **Đánh giá** chất lượng skill dựa trên checklist (trigger accuracy, output quality, reusability) *(Level 3 — Evaluate)*
10. **Xây dựng** kế hoạch triển khai skills cho team/phòng ban với ít nhất 3 use case cụ thể *(Level 3 — Create)*

---

## Phân loại nội dung (Content Priority)

### CẦN CÓ (Must Have)
- Khái niệm Agent vs Prompt đơn lẻ (giải thích bằng analogy)
- Demo sử dụng skill có sẵn trong Cowork (pptx, docx, pdf, xlsx)
- Cấu trúc SKILL.md: frontmatter YAML + body
- Hands-on: tạo skill đơn giản từ đầu
- Template SKILL.md chuẩn để copy-paste
- So sánh Cowork vs Claude Code (bảng đối chiếu)

### NÊN CÓ (Should Have)
- References folder và progressive disclosure
- Multi-step workflows trong skill
- Cách viết description "pushy" để trigger chính xác
- Tips debug khi skill không hoạt động đúng
- Ví dụ skill thực tế cho từng phòng ban (HR, Marketing, Finance)

### CÓ CŨNG TỐT (Nice to Have)
- MCP tools và connector ecosystem
- Skill composition (skill gọi skill)
- Plugin packaging và distribution
- Team skill library management

---

## Cấu trúc nội dung 5 buổi

| Buổi | Chủ đề | WHY | WHAT | HOW | SO WHAT |
|------|--------|-----|------|-----|---------|
| 1 | Agent & Skill 101 | Tại sao prompt đơn lẻ không đủ? | Agent, Skill, Tool — giải thích bằng analogy | Demo: dùng Cowork skill vs prompt thường | Liệt kê công việc bạn có thể giao cho agent |
| 2 | Dùng Skills có sẵn | Bạn đang lặp lại công việc nào? | Catalog skills, cách kích hoạt, cách chọn skill | Thực hành: tạo slide, phân tích file, viết doc bằng skills | Workflow hàng ngày của bạn sẽ thay đổi thế nào? |
| 3 | Tạo Skill đầu tiên | Skill có sẵn không đủ cho công việc riêng | SKILL.md anatomy, YAML frontmatter, body structure | Thực hành: viết skill đơn giản cho 1 tác vụ lặp lại | Bạn vừa tạo "trợ lý chuyên gia" của riêng mình |
| 4 | Skill nâng cao & Claude Code | Skill đơn giản chưa đủ cho workflow phức tạp | References, multi-step, Cowork vs Claude Code | Thực hành: nâng cấp skill + thử Claude Code | Khi nào dùng Cowork, khi nào dùng Claude Code? |
| 5 | Tối ưu & Chiến lược | Skill tốt cần được đánh giá và chia sẻ | Quality checklist, sharing, team adoption | Workshop: đánh giá + lập kế hoạch triển khai | Kế hoạch 30 ngày cho team bạn |
