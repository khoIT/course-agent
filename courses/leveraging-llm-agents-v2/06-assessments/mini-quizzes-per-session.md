# Mini-Quizzes: Từng buổi

Sử dụng các câu hỏi này để kiểm tra sự hiểu biết của từng buổi. Mỗi buổi có 3 câu MCQ.

---

## Buổi 1: Agent & Skill 101

### Câu 1: Agent khác Prompt đơn lẻ ở điểm nào?

**A)** Prompt đơn lẻ nhớ công việc đã làm, agent không nhớ
**B)** Agent có thể tái sử dụng hướng dẫn, prompt đơn lẻ phải nhập lại mỗi lần
**C)** Prompt đơn lẻ chính xác hơn, agent hay sai
**D)** Agent chỉ hoạt động online, prompt offline

**Đáp án đúng: B**
*Giải thích: Agent lưu skills và có thể tái sử dụng, trong khi prompt đơn lẻ bạn phải gõ lại mỗi lần.*

---

### Câu 2: Skill giống khái niệm nào nhất?

**A)** Email
**B)** SOP (Standard Operating Procedure)
**C)** Spreadsheet
**D)** Meeting

**Đáp án đúng: B**
*Giải thích: Skill là hướng dẫn chi tiết cách làm công việc, giống như SOP trong công ty.*

---

### Câu 3: Công việc nào phù hợp nhất để giao cho Agent?

**A)** Công việc cần sáng tạo, không có quy tắc rõ ràng
**B)** Công việc lặp lại, có SOP rõ ràng, output dự đoán được
**C)** Công việc yêu cầu đưa ra quyết định chiến lược cao cấp
**D)** Công việc liên quan đến bảo mật tài chính cấp cao

**Đáp án đúng: B**
*Giải thích: Agent hoạt động tốt nhất với công việc có quy trình rõ ràng và đầu ra có thể dự đoán.*

---

## Buổi 2: Sử dụng Skills có sẵn

### Câu 1: Bạn muốn tạo slide thuyết trình. Skill nào bạn dùng?

**A)** docx skill
**B)** xlsx skill
**C)** pptx skill
**D)** canvas-design skill

**Đáp án đúng: C**
*Giải thích: pptx skill tạo file PowerPoint, phù hợp cho slide.*

---

### Câu 2: Bạn cần tóm tắt dữ liệu từ một file PDF. Điều nào là đúng?

**A)** Dùng pptx skill rồi xuất PDF
**B)** Dùng pdf skill để chiết xuất thông tin từ file PDF
**C)** Dùng xlsx skill để chuyển PDF thành bảng tính
**D)** Dùng WebSearch skill để tìm kiếm thông tin online

**Đáp án đúng: B**
*Giải thích: pdf skill được thiết kế để chiết xuất và phân tích nội dung từ file PDF.*

---

### Câu 3: Khi nào bạn sử dụng WebSearch skill?

**A)** Để tạo biểu đồ từ dữ liệu
**B)** Để tìm kiếm thông tin trên internet
**C)** Để chuyển đổi file Word thành PDF
**D)** Để thiết kế infographic

**Đáp án đúng: B**
*Giải thích: WebSearch skill giúp bạn tìm kiếm và lấy thông tin từ internet.*

---

## Buổi 3: Tạo Skill đầu tiên

### Câu 1: Cấu trúc SKILL.md có bao nhiêu phần chính?

**A)** 1 phần (chỉ có body)
**B)** 2 phần (YAML và body)
**C)** 3 phần (YAML frontmatter, body, và references folder)
**D)** 5 phần

**Đáp án đúng: C**
*Giải thích: SKILL.md có YAML metadata ở đầu, phần mô tả chi tiết (body), và thư mục references cho tài liệu bổ sung.*

---

### Câu 2: Description của skill nên viết theo cách nào?

**A)** Dài và lập luận đầy đủ
**B)** "When user says X, do Y" — rõ ràng điều kiện kích hoạt
**C)** Chỉ liệt kê từ khóa
**D)** Viết như một đoạn trong sách hướng dẫn

**Đáp án đúng: B**
*Giải thích: Description nên theo định dạng "When user says X, do Y" để agent dễ hiểu khi kích hoạt skill.*

---

### Câu 3: References folder được dùng để làm gì?

**A)** Lưu trữ các bản sao của SKILL.md
**B)** Chứa các tài liệu bổ sung, template, ví dụ chuyên sâu
**C)** Lưu trữ hình ảnh của skill
**D)** Không cần thiết, có thể bỏ qua

**Đáp án đúng: B**
*Giải thích: References folder chứa tài liệu chi tiết và ví dụ giúp agent hiểu công việc sâu hơn.*

---

## Buổi 4: Skill nâng cao & Claude Code

### Câu 1: Sự khác biệt chính giữa Cowork và Claude Code là gì?

**A)** Cowork chỉ để xem, Claude Code để sửa
**B)** Cowork là web UI cho skill đơn giản, Claude Code là CLI cho skill phức tạp
**C)** Claude Code không yêu cầu kỹ năng kỹ thuật
**D)** Cowork xóa skill tự động, Claude Code lưu vĩnh viễn

**Đáp án đúng: B**
*Giải thích: Cowork là giao diện web dễ dùng, Claude Code là dòng lệnh cho developer quản lý skill phức tạp.*

---

### Câu 2: Kỹ thuật "Progressive disclosure" trong skill nâng cao có nghĩa là gì?

**A)** Tiết lộ skill cho nhiều người dùng từng chút một
**B)** Chia nhỏ thông tin: SKILL.md ngắn, chi tiết ở references
**C)** Skill được công khai trên internet
**D)** Dùng mã hóa để giấu thông tin

**Đáp án đúng: B**
*Giải thích: Progressive disclosure giúp người dùng bắt đầu với thông tin cơ bản ở SKILL.md, sau đó tìm chi tiết ở references nếu cần.*

---

### Câu 3: Multi-step workflow trong skill nâng cao có ít nhất mấy bước?

**A)** 2-3 bước
**B)** 5-10 bước với điểm kiểm tra
**C)** 20+ bước
**D)** Chỉ 1 bước

**Đáp án đúng: B**
*Giải thích: Multi-step workflow phức tạp hơn skill đơn giản, có 5-10 bước và điểm kiểm tra tại mỗi bước.*

---

## Buổi 5: Tối ưu & Chiến lược

### Câu 1: Tiêu chí "Trigger accuracy" có nghĩa là gì?

**A)** Skill luôn chạy nhanh
**B)** Skill kích hoạt đúng khi cần, không kích hoạt không cần
**C)** Tên skill đúng chính tả
**D)** Output có dấu câu đúng

**Đáp án đúng: B**
*Giải thích: Trigger accuracy là đảm bảo skill nhận diện đúng khi nào cần kích hoạt, không "hiểu lầm".*

---

### Câu 2: "Reusability" của skill là gì?

**A)** Skill có thể xóa và tạo lại
**B)** Dùng lại được cho nhiều tình huống khác nhau
**C)** Skill có thể chia sẻ với team
**D)** Skill hoạt động trên cả Cowork và Claude Code

**Đáp án đúng: B**
*Giải thích: Reusability có nghĩa skill được thiết kế để dùng cho nhiều tình huống, không chỉ một case cụ thể.*

---

### Câu 3: 30-Day Skill Adoption Plan nên bao gồm những gì?

**A)** Chỉ danh sách 3 skills cần triển khai
**B)** 3 use case ưu tiên, phòng ban, người chịu trách nhiệm, timeline, và feedback phases
**C)** Chỉ ngân sách chi phí
**D)** Chỉ mục tiêu doanh thu

**Đáp án đúng: B**
*Giải thích: Kế hoạch 30 ngày cần cụ thể: skill nào, ai dùng, ai quản lý, khi nào bắt đầu, và làm sao đánh giá thành công.*

---

# Đáp án tóm tắt

| Buổi | Q1 | Q2 | Q3 |
|------|----|----|-----|
| 1 | B | B | B |
| 2 | C | B | B |
| 3 | C | B | B |
| 4 | B | B | B |
| 5 | B | B | B |

**Hướng dẫn sử dụng:** Cung cấp mini-quiz này vào cuối mỗi buổi (5-10 phút cuối). Điểm pass là 2/3 (67%).
