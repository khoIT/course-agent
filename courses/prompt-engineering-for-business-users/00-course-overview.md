# Khóa học: Prompt Engineering cho người dùng doanh nghiệp

> Viết prompt hiệu quả không phải kỹ năng IT — đó là kỹ năng giao tiếp. Khóa học này biến bạn từ "hỏi rồi hy vọng" thành "ra lệnh chính xác, nhận kết quả chuẩn."

---

## Chân dung học viên (Learner Portrait)

### Đối tượng mục tiêu
- **Nhóm chính:** Người dùng phi kỹ thuật (business users) — nhân viên văn phòng, quản lý, chuyên viên HR, Marketing, Finance, Operations đang dùng ChatGPT/Claude hàng ngày nhưng kết quả không ổn định
- **Nhóm phụ:** Team leads muốn chuẩn hóa cách team sử dụng AI

### Trạng thái hiện tại (KSA)
- **Kiến thức (K):** Biết ChatGPT/Claude là gì, đã dùng để hỏi đáp, viết email, brainstorm. CHƯA biết: prompt có cấu trúc, framework, few-shot, chain-of-thought. Nghĩ "AI hiểu ý mình" mà không cần hướng dẫn chi tiết.
- **Kỹ năng (S):** Gõ câu hỏi tự nhiên và nhận output. CHƯA biết: cách gán vai trò, cung cấp context, định dạng output, dùng ví dụ mẫu, chia nhỏ tác vụ phức tạp, hoặc iterate khi kết quả chưa đúng.
- **Thái độ (A):** 60% hào hứng nhưng thất vọng vì kết quả không đều. 30% hoài nghi "AI chỉ cho ra bài chung chung." 10% power users muốn nâng cấp. Tất cả đều mất kiên nhẫn nếu không thấy kết quả cải thiện rõ rệt trong buổi đầu.

### Bối cảnh học tập
- **Phong cách học:** Visual (so sánh trước/sau) + Kinesthetic (thực hành ngay trên ChatGPT/Claude)
- **Thời lượng:** 5 buổi × 60 phút (tổng 5 giờ)
- **Hình thức:** Online qua Zoom/Teams — chia sẻ màn hình, breakout rooms
- **Động lực:** Muốn tiết kiệm thời gian, giảm viết lại, và tạo ấn tượng với output chuyên nghiệp

### Hệ quả cho thiết kế
- **Before/After pattern:** Mỗi concept mở đầu bằng so sánh prompt kém vs. prompt tốt — cho thấy chênh lệch ngay
- **Immediate practice:** Sau mỗi 8 phút giảng, có hoạt động thực hành (poll, chat prompt, breakout)
- **Industry scenarios:** Mỗi framework áp dụng cho 4 ngành: HR, Marketing, Finance, Operations
- **Scaffolding:** Buổi 1-2 dùng template đầy đủ → Buổi 3 template một phần → Buổi 4-5 tự viết
- **Content depth:** ~3-4 min/concept (non-technical audience), max 4 concepts/15-min segment

---

## Mục tiêu khóa học (Learning Objectives)

### Buổi 1 — Tư duy Prompt: "Tại sao AI không hiểu ý bạn?"
1. **Phân tích** ít nhất 3 prompt kém từ công việc hàng ngày và xác định lỗi cụ thể (vague context, no format, no role) *(Level 2)*
2. **Viết lại** các prompt đó theo công thức Role + Context + Task + Format, đạt output cải thiện rõ rệt *(Level 2)*

### Buổi 2 — Framework RTT & CO-STAR: "Công thức cho mọi tác vụ"
3. **Áp dụng** framework RTT (Role-Task-Tone) cho ít nhất 3 tác vụ routine theo ngành mình, đạt kết quả chính xác ngay lần đầu *(Level 2)*
4. **Sử dụng** framework CO-STAR (Context-Objective-Style-Tone-Audience-Response) cho tác vụ phức tạp hơn, so sánh kết quả với prompt không có framework *(Level 2)*

### Buổi 3 — Kỹ thuật nâng cao: "Dạy AI bằng ví dụ"
5. **Tạo** prompt few-shot với 2-3 ví dụ mẫu cho tác vụ phân loại hoặc trích xuất dữ liệu, đạt accuracy ≥80% *(Level 2)*
6. **Thiết kế** chain-of-thought prompt cho tác vụ phân tích phức tạp (so sánh, đánh giá, ra quyết định) *(Level 3)*

### Buổi 4 — Prompt cho tác vụ chuyên ngành: "Từ chung chung đến chuyên gia"
7. **Xây dựng** bộ prompt template cho 3 tác vụ lặp lại trong công việc cụ thể của mình *(Level 3)*
8. **Đánh giá** chất lượng output bằng rubric (accuracy, completeness, tone, actionability) và iterate đến khi đạt chuẩn *(Level 3)*

### Buổi 5 — Hệ thống hóa & Chia sẻ: "Từ cá nhân đến team"
9. **Tạo** prompt library cá nhân có tổ chức theo danh mục tác vụ, với ít nhất 10 prompt đã test *(Level 3)*
10. **Thiết kế** kế hoạch triển khai prompt standards cho team gồm: naming convention, testing process, sharing workflow *(Level 3)*

---

## Phân loại nội dung (Content Priority)

### CẦN CÓ (Must Have)
- Anatomy of a good prompt: Role + Context + Task + Format
- Before/After demo so sánh prompt kém vs. prompt tốt (mỗi buổi ≥3 cặp)
- Framework RTT cho tác vụ đơn giản (~60-70% công việc routine)
- Framework CO-STAR cho tác vụ phức tạp (phân tích, báo cáo, chiến lược)
- Few-shot prompting: cách dùng ví dụ mẫu để "dạy" AI
- Tình huống thực tế theo 4 ngành (HR, Marketing, Finance, Ops)
- Iteration mindset: prompt → evaluate → refine → repeat

### NÊN CÓ (Should Have)
- Chain-of-thought cho tác vụ phân tích phức tạp
- Output format specifications (markdown table, JSON, bullet points)
- Negative prompting ("Đừng làm X" — khi nào dùng, khi nào tránh)
- Prompt debugging: khi output sai, check gì trước?
- Temperature/creativity settings (conceptual understanding)

### CÓ CŨNG TỐT (Nice to Have)
- System prompts và custom instructions
- Multi-turn conversation strategies
- Prompt chaining (output A → input B)
- AI tool comparison (ChatGPT vs Claude vs Gemini strengths)

---

## Cấu trúc 5 buổi với Scaffolding

| Buổi | Chủ đề | Scaffolding Level | Industry Focus | Concepts | Depth |
|------|--------|-------------------|----------------|----------|-------|
| 1 | Tư duy Prompt | Full template (I Do → We Do) | All 4: bad prompt examples | 4 concepts × 4 min = 16 min lecture | 30:70 theory:practice |
| 2 | RTT & CO-STAR | Guided template (We Do → You Do) | Ngành-specific RTT tasks | 3 concepts × 4 min = 12 min lecture | 25:75 |
| 3 | Few-shot & CoT | Partial template (You Do guided) | Data tasks per industry | 3 concepts × 4 min = 12 min lecture | 20:80 |
| 4 | Prompt chuyên ngành | Minimal scaffold (You Do) | Deep-dive own department | 2 concepts × 4 min = 8 min lecture | 15:85 |
| 5 | Hệ thống hóa | Independent (create + evaluate) | Team deployment plan | 2 concepts × 3 min = 6 min lecture | 10:90 |
