# Session 3: Tạo Skill đầu tiên — Từ người dùng thành người tạo

**Part of:** [Course Overview](00-handout-overview-and-objectives.md)

---

## PHẦN 4: TEMPLATE SKILL.MD — SAO CHÉP & DÙNG NGAY

### Cấu Trúc SKILL.md

File SKILL.md gồm 2 phần chính:

1. **Frontmatter YAML** — Metadata (tên, mô tả, tag)
2. **Body** — Hướng dẫn chi tiết cho agent

---

### Template Chuẩn (Copy-Paste Ready)

```markdown
---
name: email-summarizer
description: Tóm tắt email dài thành 3 bullet points chính, giữ lại action items và deadline. Dùng khi bạn muốn nhanh chóng hiểu nội dung email mà không đọc toàn bộ.
keywords: email, summarize, action-item, quick-read
---

# Email Summarizer — Tóm Tắt Email Nhanh

## Mục đích
Bạn sẽ tóm tắt email dài (>300 từ) thành format dễ đọc, capture được 3 điểm chính và action items.

## Quy trình

### Bước 1: Đọc email
- Đọc toàn bộ email mà user cung cấp
- Xác định tone (formal, casual, urgent?)
- Ghi nhận người gửi, ngành, context

### Bước 2: Trích xuất 3 điểm chính
- Điểm 1: Thông tin quan trọng nhất
- Điểm 2: Thông tin hỗ trợ / context
- Điểm 3: Chi tiết hoặc follow-up info
- **Tiêu chí:** Mỗi điểm < 1 dòng, dùng danh từ + động từ, bỏ tính từ thừa

### Bước 3: Xác định action items
- Những việc user cần làm?
- Deadline nếu có?
- Người chịu trách nhiệm?
- Định dạng: Bullet list, mỗi item bắt đầu bằng "→"

### Bước 4: Output
- **Format:**
  ```
  📧 Email Summary

  **3 Điểm Chính:**
  - [Điểm 1]
  - [Điểm 2]
  - [Điểm 3]

  **Action Items:**
  → [Action 1] | Deadline: [nếu có]
  → [Action 2] | Deadline: [nếu có]

  **Tone:** [formal|casual|urgent]
  ```

## Tiêu chí chất lượng
- Tóm tắt < 1/3 độ dài email gốc ✓
- Action items rõ ràng, có thể execute ngay ✓
- Không mất thông tin quan trọng ✓
- Dễ scan bằng mắt (< 30 giây đọc xong) ✓

## Ví dụ

**Input email (dài):**
> Hi [Name],
> I hope this message finds you well. I'm writing to inform you about the upcoming product launch scheduled for next month. We've been working on this project for the past 6 months, and the team is excited to finally share it with you. As part of the launch, we need your help with marketing materials. Could you please prepare a press release and social media posts? We'd like to have these ready by March 31st. Also, we'll need approvals from the finance team before we can proceed with the budget allocation. Please confirm your availability for a meeting this Friday at 2 PM to discuss next steps. Let me know if you have any questions.

**Output (dùng skill này):**
```
📧 Email Summary

**3 Điểm Chính:**
- Product launch next month, 6-month project finalizing
- Marketing materials needed: press release + social posts
- Finance approval required for budget allocation

**Action Items:**
→ Prepare press release + social media posts | Deadline: March 31
→ Confirm availability for Friday 2 PM meeting | Deadline: This Friday
→ Coordinate with finance team for budget approval

**Tone:** formal
```

## Tips
- Nếu email có attachment, hỏi "Bạn muốn tôi đọc attachment không?"
- Nếu email quá ngắn (< 100 từ), output ngay, không tóm tắt thêm
- Nếu email dính vào chuỗi conversation, tóm tắt toàn bộ thread hoặc chỉ email mới nhất?
```

---

### Cách Điền Vào Template Cho Skill Của Mình

**Bước 1:** Thay `email-summarizer` bằng tên skill của bạn (kebab-case)
- ✓ Good: `tao-bao-cao-tuan`, `viet-email-hang-ngay`, `phan-tich-sales`
- ✗ Bad: `TaoBC`, `viết_email`, `phan.tich`

**Bước 2:** Viết description (1-2 câu, "pushy" — nói rõ khi dùng)
- ✓ "Tóm tắt email dài thành 3 bullet points. Dùng khi muốn nhanh chóng hiểu nội dung."
- ✗ "Giúp bạn với email."

**Bước 3:** Viết keywords (tag, separated by comma)
- Ví dụ: `email, summarize, action-item, quick-read`

**Bước 4:** Viết Body theo 4 phần
1. **Mục đích** — Tại sao skill này tồn tại?
2. **Quy trình** — Agent làm gì? Bước nào?
3. **Tiêu chí chất lượng** — Output phải thỏa tiêu chí nào?
4. **Ví dụ** — Một ví dụ input/output thực tế

---

### Lưu Ý Khi Viết SKILL.md

| Sai | Đúng | Lý Do |
|-----|------|-------|
| Mô tả quá chung: "Giúp viết email" | "Viết email xin phép, theo format công ty, tone chuyên nghiệp, < 150 từ" | Rõ ràng giúp agent trigger chính xác |
| Bước = 1 câu dài | Mỗi bước = 1-2 câu ngắn, có sub-steps | Agent dễ follow từng bước |
| Không có ví dụ | Kèm ví dụ input & output cụ thể | Agent biết kỳ vọng output là gì |
| Vocabulary toàn tiếng Anh | Dùng tiếng Việt agent hiểu (công ty bạn) | Agent context sâu hơn |

---

**Next:** [Session 4: Skill nâng cao & Claude Code](04-handout-session-04-advanced-skills-claude-code.md)
