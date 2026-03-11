# Buổi 3: Tạo Skill đầu tiên — "Từ người dùng thành người tạo"

**Part of:** [Facilitator Guide Overview](00-facilitator-guide-overview.md)

---

## Chuẩn bị:
- Copy-paste template SKILL.md sẵn sàng (trong chat)
- Test live demo skill "email-summarizer" trước
- Chuẩn bị breakout rooms để học viên làm việc (có facilitator trong mỗi phòng nếu có đủ người)

---

## Speaker Notes:

**WHY (0:00-0:05):** "Skill pptx tạo slide tốt. Nhưng nó không biết template slide công ty bạn. Không biết brand colors bạn. Đó lý do bạn cần skill riêng cho công việc riêng."

**WHAT — Giải phẫu SKILL.md (0:05-0:15):** Vẽ 3 phần trên slide:

```
1. FRONTMATTER YAML (tên + chức năng)
   name: email-summarizer
   description: Đọc email dài, tóm tắt thành 3 dòng

2. BODY (hướng dẫn chi tiết cho agent)
   "Đọc email, xác định:
   - Vấn đề chính
   - Action items
   - Deadline"

3. REFERENCES (tài liệu tham khảo)
   /references
   ├── email-template.md
   └── company-style.md
```

Analogy: "YAML = tên + chức danh trên badge. Body = job description. References = training manual."

**Demo live (0:15-0:20):** Mở text editor, code ngay trước học viên:

```yaml
name: email-summarizer
description: Đọc email và tóm tắt thành 3 dòng chính yếu

---

# Hướng dẫn

Đọc email được cung cấp và trích xuất:

1. **Vấn đề chính** (nội dung chính email)
2. **Action items** (những việc cần làm)
3. **Deadline** (nếu có)

Viết tóm tắt dưới 50 từ.
```

"Đơn giản không? 10 dòng, deploy vào Cowork, test ngay!"

**Activity 3 (0:20-0:40):** "Build Your First Skill" — thực hành tự do

Steps:
1. Chọn tên skill (kebab-case, ví dụ: meeting-notes-to-todo)
2. Viết description (1-2 câu, "pushy" — khiến agent muốn dùng)
3. Viết body (hướng dẫn agent làm gì)
4. Test trong Cowork

Giảng viên vào breakout rooms: "Bạn chọn công việc nào? [Nghe] Oke, tên skill có thể là gì? [Gợi ý nếu cần] Description: hãy nói cho agent biết 'khi nào nên dùng mình'..."

**Show & Tell (0:40-0:50):** 3-4 người volunteer trình bày:

Mỗi người: "Skill mình là [tên]. Description: [đọc]. Body làm [gì]. Mình expect [kết quả gì]."

Giảng viên feedback:
- "Description của bạn có 'pushy' không? Hãy thêm: 'Khi bạn có [vấn đề], dùng skill này'."
- "Body có rõ ràng không? Agent hiểu phải làm gì không?"

**WHAT (bổ sung) — References folder (0:50-0:55):** Slide: "Nếu skill cần kiến thức sâu, đặt vào references/"

Ví dụ: Skill "viết email tiếng Anh chuẩn" → references/english-email-template.md → agent tự đọc.

**SO WHAT (0:55-1:00):** "Hôm nay bạn tạo chuyên gia AI đầu tiên. Nó biết quy trình, công cụ, đầu ra mong muốn của bạn — giống chuyên gia thực thụ. Buổi sau, chúng ta nâng cấp thành chuyên gia siêu việt."

**Lưu ý:** Template SKILL.md phải copy-paste dễ dàng (vào chat hoặc Google Docs). Mục tiêu: "zero friction" lần tạo đầu tiên.
