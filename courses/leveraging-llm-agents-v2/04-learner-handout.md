# Khóa học: Sử dụng Skills để khai thác sức mạnh LLM Agent

**Tài liệu học viên — Phiên bản V2**

5 buổi × 60 phút | Online | Tiếng Việt

**Dành cho:** Người dùng phi kỹ thuật muốn tự động hóa công việc bằng AI agents

---

## 1. Tổng quan khóa học

Khóa học này giúp bạn chuyển từ sử dụng ChatGPT một lần cho một công việc sang xây dựng AI Agents tự động với Skills được chuẩn bị sẵn.

### 5 buổi tại một cái nhìn

| Buổi | Chủ đề |
|------|--------|
| 1 | Agent & Skill 101 — Tại sao prompt đơn lẻ không đủ? |
| 2 | Sử dụng Skills có sẵn — Biến AI thành trợ lý đa năng |
| 3 | Tạo Skill đầu tiên — Từ người dùng thành người tạo |
| 4 | Skill nâng cao & Claude Code — Từ đơn giản đến chuyên nghiệp |
| 5 | Tối ưu & Chiến lược — Từ cá nhân đến tổ chức |

### 10 mục tiêu học tập

1. Giải thích sự khác biệt giữa prompt đơn lẻ và LLM agent
2. Xác định ít nhất 3 công việc lặp lại có thể giao cho agent
3. Kích hoạt và sử dụng 3+ skills có sẵn
4. Lựa chọn skill phù hợp cho từng công việc
5. Tạo file SKILL.md hoàn chỉnh
6. Tổ chức thư mục skill với cấu trúc chuẩn
7. Thiết kế skill phức tạp với references và multi-step workflow
8. So sánh Cowork vs Claude Code và chọn nền tảng phù hợp
9. Đánh giá chất lượng skill bằng rubric tương tác
10. Xây dựng kế hoạch triển khai skills cho team

---

## 2. Buổi 1: Agent & Skill 101

Khóa học bắt đầu bằng ba khái niệm cốt lõi để bạn hiểu vì sao prompt đơn lẻ không đủ cho công việc hàng ngày.

### Sơ đồ so sánh: Prompt đơn lẻ vs Agent + Skill

| Tiêu chí | Prompt đơn | Agent + Skill | Ví dụ |
|----------|-----------|---------------|-------|
| Nhất quán | Mỗi lần khác nhau | Luôn giống nhau | Skill tạo slide luôn theo format chuẩn |
| Tái sử dụng | Phải nhập lại mỗi lần | Lưu và dùng lại | Skill docx được tất cả dùng |
| Độ tin cậy | Cần kiểm tra từng lần | Được test một lần | Skill được verify trước |

### Ba khái niệm cốt lõi

**Agent = Nhân viên mới**

Một AI được trang bị những công cụ (tools) và hướng dẫn (skills) để làm công việc được giao. Agent không quên các công việc đã làm, có thể được giao nhiều tác vụ lặp lại.

**Skill = SOP (Standard Operating Procedure)**

Hướng dẫn chi tiết cho AI biết cách làm một công việc. Ví dụ: skill tạo slide, skill viết email, skill phân tích file CSV. Skill được lưu và dùng lại nhiều lần.

**Tool = Phần mềm**

Công cụ giúp agent làm việc. Ví dụ: tool tạo PowerPoint (pptx), tool tạo Word (docx), tool tìm kiếm web (search), tool vẽ hình (canvas).

### Mini-glossary

| Thuật ngữ | Nghĩa |
|-----------|-------|
| Prompt | Câu hỏi/yêu cầu bạn đặt cho AI |
| MCP (Model Context Protocol) | Giao thức để kết nối AI với các công cụ bên ngoài |
| Cowork | Nền tảng web để viết, lưu và chạy skills |
| Claude Code | CLI tool để quản lý skills cấp độ cao hơn |
| SKILL.md | File tài liệu markdown định nghĩa một skill |

---

## 3. Buổi 2: Sử dụng Skills có sẵn

Buổi này giới thiệu 6 skills sống còn mà bạn có thể dùng ngay để làm công việc hàng ngày.

### 6 Skills flashcards

| Skill | Kích hoạt | Output mẫu | Khi nào dùng |
|-------|-----------|-----------|-------------|
| pptx | Gõ: "tạo slide" | File .pptx PowerPoint | Tạo slide, bài thuyết trình, báo cáo |
| docx | Gõ: "tạo document" | File .docx Word | Tạo JD, email, tài liệu, hướng dẫn |
| pdf | Gõ: "phân tích PDF" | Tóm tắt, dữ liệu từ PDF | Chiết xuất dữ liệu từ file PDF |
| xlsx | Gõ: "tạo bảng tính" | File .xlsx Excel | Tạo bảng dữ liệu, báo cáo tài chính |
| canvas-design | Gõ: "vẽ infographic" | Hình ảnh PNG, infographic | Tạo minh họa, poster, sơ đồ |
| WebSearch | Gõ: "tìm kiếm" | Kết quả tìm kiếm, link | Tìm kiếm thông tin, nghiên cứu |

### Cây quyết định chọn Skill (dạng text)

**Câu hỏi 1: Bạn cần tạo gì?**
- Slide/Bài thuyết trình → pptx skill
- Document/Văn bản → docx skill
- Bảng dữ liệu/số liệu → xlsx skill
- Hình ảnh/Minh họa → canvas-design skill

**Câu hỏi 2: Bạn cần dữ liệu từ đâu?**
- Từ file PDF → pdf skill
- Từ internet → WebSearch skill
- Từ dữ liệu có sẵn → xlsx hoặc docx

---

## 4. Buổi 3: Tạo Skill đầu tiên

Buổi này bạn sẽ tạo skill riêng của mình từ đầu. Một skill là một file SKILL.md với 3 phần: metadata YAML, mô tả, và tài liệu tham khảo.

### Cấu trúc SKILL.md (Phân tích chi tiết)

Hãy xem một file SKILL.md giống như hồ sơ của một nhân viên:
- YAML frontmatter (đầu file) — Tên, mô tả, metadata
- Body — Hướng dẫn chi tiết từng bước
- References folder — Tài liệu học thêm, template, ví dụ

### Template SKILL.md sẵn sàng sao chép

```yaml
---
name: your-skill-name
description: "What should I do when user says X? Answer: do this specific task."
license: Proprietary
---

# Your Skill Title

A 1-2 sentence overview of what this skill does.

## When to use this skill

- Situation 1: User action that triggers this skill
- Situation 2: Another scenario
- NOT suitable for: Cases that don't fit

## How to use

1. Step 1: Do this first
2. Step 2: Then do this
3. Step 3: Verify the result

## Example

User input: "Create a [specific request]"
Expected output: [Describe what the result should look like]
```

### Checklist trước khi triển khai Skill

- [ ] Tên skill rõ ràng và miêu tả đúng những gì nó làm?
- [ ] Description viết theo định dạng: "When user says X, do Y"?
- [ ] Hướng dẫn (body) có ít nhất 3 bước rõ ràng?
- [ ] Đã test skill trên 2-3 ví dụ thực tế?

---

## 5. Buổi 4: Skill nâng cao & Claude Code

Buổi này giúp bạn nâng cấp skill từ đơn giản (10 dòng) lên phức tạp (multi-step workflow, tài liệu chi tiết).

### 3 kỹ thuật nâng cao

**1. References folder — Thư viện kiến thức**

Khi skill cần nhiều tài liệu, tạo thư mục references/ với các file riêng. Ví dụ: skill viết email → references/email-template.md, references/brand-voice.md.

**2. Progressive disclosure — Chia nhỏ thông tin**

SKILL.md ngắn và dễ hiểu (200-300 từ), references nặng chi tiết (1000+ từ). Agent hoặc người đọc chọn mức độ sâu họ cần.

**3. Multi-step workflow — Quy trình nhiều bước**

Skill phức tạp có 5-10 bước, có điểm kiểm tra, và feedback tại mỗi bước. Ví dụ: skill tạo báo cáo = collect data → format → review → export.

### So sánh Cowork vs Claude Code

| Tiêu chí | Cowork | Claude Code |
|----------|--------|-------------|
| Dễ sử dụng | Giao diện web, không cần install | CLI, cần dòng lệnh cơ bản |
| Độ phức tạp | Skill đơn-trung bình (10-50 dòng) | Skill phức tạp (50+ dòng, code) |
| Chia sẻ | Dễ, copy-paste trong web | Cần git hoặc package upload |
| Quản lý | Lịch sử thay đổi tự động | Git version control |
| Tốt nhất cho | Đội team, người dùng phi kỹ thuật | Nhà phát triển, quy trình tự động |

### Checklist nâng cấp Skill

- [ ] Tạo thư mục references/ với ít nhất 2 file tài liệu chuyên sâu?
- [ ] SKILL.md rút gọn (≤300 từ), chi tiết ở references?
- [ ] Quy trình có 5+ bước với điểm kiểm tra?
- [ ] Đã kiểm tra skill trên 5 ví dụ khác nhau?

---

## 6. Buổi 5: Tối ưu & Chiến lược

Buổi cuối tập trung vào đánh giá chất lượng skill và xây dựng kế hoạch triển khai cho team.

### 5 tiêu chí chất lượng Skill

| Tiêu chí | Mô tả |
|----------|-------|
| Trigger accuracy | Skill kích hoạt đúng khi cần, không kích hoạt khi không cần |
| Output quality | Kết quả đúng format, không lỗi, sạch sẽ |
| Reusability | Dùng lại được cho nhiều tình huống khác nhau |
| Maintainability | Dễ sửa, cập nhật mà không phá vỡ gì |
| Scope clarity | Rõ ràng cái gì skill LÀM và cái gì KHÔNG làm |

### Template 30-Day Skill Adoption Plan

| Mục | Chi tiết |
|-----|---------|
| Skill 1 | Tên & mục đích / Phòng ban / Người chịu trách nhiệm / Ngày triển khai |
| Skill 2 | Tên & mục đích / Phòng ban / Người chịu trách nhiệm / Ngày triển khai |
| Skill 3 | Tên & mục đích / Phòng ban / Người chịu trách nhiệm / Ngày triển khai |

---

## 7. Phụ lục

### Từ điển đầy đủ

| Thuật ngữ | Nghĩa |
|-----------|-------|
| Agent | AI được trang bị công cụ và hướng dẫn để tự động hóa công việc |
| Skill | Hướng dẫn chi tiết cách làm một công việc cụ thể |
| Tool | Phần mềm giúp agent thực hiện tác vụ (pptx, docx, PDF, canvas) |
| Prompt | Câu hỏi hoặc yêu cầu bạn đặt cho AI |
| MCP (Model Context Protocol) | Giao thức kết nối AI với các công cụ bên ngoài |
| Cowork | Nền tảng web để tạo, lưu và chạy skills |
| Claude Code | CLI tool cấp nâng cao để quản lý skills phức tạp |
| SKILL.md | File markdown định nghĩa một skill (metadata + hướng dẫn) |
| References folder | Thư mục chứa tài liệu chi tiết, template, ví dụ |
| Progressive disclosure | Kỹ thuật chia nhỏ thông tin: SKILL.md ngắn, references chi tiết |
| Multi-step workflow | Skill phức tạp có 5-10 bước với điểm kiểm tra |
| Trigger | Điều kiện/câu nói khiến skill kích hoạt |
| Output | Kết quả mà skill tạo ra (file, text, data) |
| SOP (Standard Operating Procedure) | Quy trình tiêu chuẩn để làm một công việc |
| Adoption plan | Kế hoạch triển khai skill cho team trong 30 ngày |

### Tài nguyên và liên kết hữu ích

- **Cowork Platform:** Truy cập web để tạo skills
- **Claude Code Documentation:** Hướng dẫn cấp nâng cao
- **Community Examples:** Xem ví dụ skills từ cộng đồng
- **Skill Template Repository:** Các template sẵn sàng sao chép
- **Support Forum:** Đặt câu hỏi, chia sẻ ý tưởng với thành viên khác

---

**Chúc bạn học tập thành công!**
