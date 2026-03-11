# Mini-Quiz — Buổi 4: Skill nâng cao & Claude Code

> 3 câu trắc nghiệm | Kiểm tra kỹ thuật nâng cao và so sánh nền tảng
> Thời điểm: Cuối Buổi 4 hoặc đầu Buổi 5

---

## Câu 1: References & Progressive Disclosure

**Tại sao nên tách kiến thức chuyên sâu vào references/ thay vì để hết trong SKILL.md?**

- A. Vì SKILL.md không hỗ trợ văn bản dài
- B. Để agent chỉ đọc kiến thức khi CẦN, tiết kiệm context window ✅
- C. Vì references/ bắt buộc phải có
- D. Để file SKILL.md nhìn đẹp hơn

> **Đáp án: B** — Progressive disclosure: SKILL.md chứa workflow ngắn gọn, agent đọc references khi cần chi tiết. Tiết kiệm context window = agent xử lý hiệu quả hơn.

---

## Câu 2: Cowork vs Claude Code

**Trường hợp nào nên chọn Claude Code thay vì Cowork?**

- A. Tạo slide cho cuộc họp sáng mai
- B. Viết script Python tự động hóa xử lý 500 file CSV hàng ngày ✅
- C. Tóm tắt email dài thành 3 bullet points
- D. Tạo Word doc báo cáo tuần

> **Đáp án: B** — Claude Code mạnh ở: viết code, xử lý file system phức tạp, git integration. Tác vụ cần code/terminal → Claude Code. Tác vụ tạo tài liệu/trình bày → Cowork.

---

## Câu 3: Multi-step Workflow

**Skill "tạo báo cáo tài chính" cần 4 bước: đọc data → tính toán → viết nhận xét → format output. Cách thiết kế tốt nhất?**

- A. Viết cả 4 bước chi tiết trong SKILL.md
- B. SKILL.md chứa 4 bước tổng quan, tách "cách tính toán" và "template nhận xét" vào references/ ✅
- C. Tạo 4 file SKILL.md riêng biệt
- D. Chỉ viết bước 1, agent tự suy luận phần còn lại

> **Đáp án: B** — SKILL.md = workflow overview (ngắn), references = kiến thức chuyên sâu (dài). Agent đọc references khi cần, không phải load toàn bộ lên front.
