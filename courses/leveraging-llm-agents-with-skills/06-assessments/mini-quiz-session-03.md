# Mini-Quiz — Buổi 3: Tạo Skill đầu tiên

> 3 câu trắc nghiệm | Kiểm tra kiến thức cấu trúc SKILL.md
> Thời điểm: Cuối Buổi 3 hoặc đầu Buổi 4

---

## Câu 1: Cấu trúc SKILL.md

**File SKILL.md gồm 3 phần chính. Phần nào KHÔNG phải?**

- A. Frontmatter YAML (name + description)
- B. Body (hướng dẫn chi tiết cho agent)
- C. References (tài liệu tham khảo)
- D. Database (lưu kết quả trước đó) ✅

> **Đáp án: D** — SKILL.md gồm: Frontmatter YAML, Body, và References folder. Không có phần database — skill không lưu trữ dữ liệu.

---

## Câu 2: Description "pushy"

**Description nào sau đây sẽ trigger chính xác nhất?**

- A. "Một skill hữu ích cho công việc"
- B. "Tạo báo cáo tuần theo template chuẩn công ty, bao gồm KPI, highlights, và next steps" ✅
- C. "Skill này làm nhiều thứ"
- D. "Báo cáo"

> **Đáp án: B** — Description tốt phải cụ thể, mô tả rõ input/output/context. "Pushy" = agent biết CHÍNH XÁC khi nào nên kích hoạt skill này.

---

## Câu 3: Thực hành tạo skill

**Bạn muốn tạo skill giúp viết email chăm sóc khách hàng. Tên skill nào đúng convention?**

- A. EmailKhachHang
- B. customer-care-email ✅
- C. skill email khách hàng
- D. CUSTOMER_EMAIL

> **Đáp án: B** — Dùng kebab-case (chữ thường, nối bằng dấu gạch ngang). Tự mô tả mục đích, dễ tìm kiếm.
