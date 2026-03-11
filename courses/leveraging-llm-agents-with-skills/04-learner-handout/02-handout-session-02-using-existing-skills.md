# Session 2: Sử dụng Skills có sẵn — Biến AI thành trợ lý đa năng

**Part of:** [Course Overview](00-handout-overview-and-objectives.md)

---

## PHẦN 3: HƯỚNG DẪN SỬ DỤNG 6 SKILLS CÓ SẴN

### Quy Trình Lựa Chọn Skill

```
Bạn có công việc
       ↓
Bạn muốn output kiểu gì?
       ├─→ Slide / Presentation  →  pptx
       ├─→ Word Document / Letter  →  docx
       ├─→ PDF / Final Report  →  pdf
       ├─→ Excel / Data Analysis  →  xlsx
       ├─→ Diagram / Infographic  →  canvas-design
       └─→ Information từ web  →  web search
```

---

### Bảng 6 Skills Cốt Lõi

| # | Tên Skill | Khi Nào Dùng? | Output | Ví dụ Prompt Kích Hoạt |
|---|-----------|---------------|--------|------------------------|
| 1 | **pptx** | Muốn tạo slide, presentation, pitch deck | File PowerPoint (.pptx) | "Dùng skill pptx: Tạo slide pitch về sản phẩm mới. Slide 1: Tiêu đề. Slide 2-3: 3 lợi ích chính. Slide 4: Pricing." |
| 2 | **docx** | Muốn viết document, báo cáo, email, contract | File Word (.docx) | "Dùng skill docx: Viết email xin phép và lập kế hoạch công việc tuần này cho quản lý, tone chuyên nghiệp, 200 từ." |
| 3 | **pdf** | Muốn trích xuất dữ liệu từ PDF hoặc tạo PDF | File PDF hoặc dữ liệu được trích | "Dùng skill pdf: Đọc file báo cáo tài chính Q1 và tóm tắt 5 metric chính." |
| 4 | **xlsx** | Muốn tạo spreadsheet, phân tích dữ liệu, tính toán | File Excel (.xlsx) | "Dùng skill xlsx: Tạo bảng phân tích chi phí dự án. Cột: Hạng mục, Budget, Actual, Variance %. Công thức tính Variance tự động." |
| 5 | **canvas-design** | Muốn vẽ diagram, infographic, poster, hình ảnh | Hình ảnh (PNG, SVG) | "Dùng skill canvas-design: Vẽ biểu đồ quy trình onboarding nhân viên. 5 bước, icon đơn giản, màu xanh và trắng." |
| 6 | **web search** | Muốn tìm kiếm thông tin từ internet | Thông tin/dữ liệu từ web | "Dùng skill web search: Tìm 5 best practices mới nhất về marketing email vào 2025." |

---

### Ví Dụ Chuỗi Skills (Skill Chaining)

**Tình huống:** Bạn muốn tạo "Báo cáo Hiệu Suất Marketing Tuần" hoàn chỉnh

**Workflow:**
1. **pdf skill** → Đọc file "analytics-data.pdf" (dữ liệu từ Google Analytics)
2. **xlsx skill** → Phân tích dữ liệu, tính toán conversion rate, ROI
3. **docx skill** → Viết báo cáo: Tóm tắt + bảng dữ liệu
4. **pptx skill** → Tạo slide summary để chia sẻ với lãnh đạo
5. **canvas-design skill** → Vẽ biểu đồ trend trực quan

**Một prompt duy nhất có thể kích hoạt 5 skills liên tiếp!**

---

### Skill Selection Framework

Dùng bảng này để chọn skill cho công việc của bạn:

| Công việc | Output mong muốn | Skill tốt nhất | Tại sao? |
|-----------|------------------|----------------|----------|
| Tạo slide pitch cho khách | PowerPoint | pptx | Tạo file presentation chuyên nghiệp |
| Viết email đề nghị hợp tác | Email formatted | docx | Tạo document có định dạng |
| Trích xuất dữ liệu từ báo cáo | Thông tin structured | pdf | Đọc và trích xuất từ PDF |
| Phân tích bán hàng tháng | Bảng tính, công thức | xlsx | Tạo bảng và tính toán |
| Vẽ sơ đồ quy trình | Diagram trực quan | canvas-design | Vẽ hình ảnh đẹp |
| Tìm thông tin xu hướng market | Web content | web search | Tìm trên internet |

---

**Next:** [Session 3: Tạo Skill đầu tiên](03-handout-session-03-creating-first-skill.md)
