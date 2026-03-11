# Bài đánh giá cuối khóa

**Hướng dẫn:** Bài thi này gồm 10 câu hỏi, mỗi câu giá trị 1 điểm. Điểm pass: 7/10 trở lên (70%).

**Thời gian:** 30-45 phút
**Dạng:** 6 MCQ + 4 Short-answer
**Ngôn ngữ:** Tiếng Việt

---

## Phần A: Trắc nghiệm (6 câu × 1 điểm = 6 điểm)

### Câu 1 (Buổi 1): Tại sao prompt đơn lẻ không đủ cho công việc lặp lại?

**A)** Vì ChatGPT không hiểu tiếng Việt
**B)** Vì bạn phải nhập lại prompt mỗi lần, kết quả có thể khác nhau, không nhất quán
**C)** Vì prompt luôn sai
**D)** Vì agent rẻ hơn prompt

**Đáp án đúng: B** (1 điểm)

---

### Câu 2 (Buổi 1): Analogy nào KHÔNG mô tả đúng Agent, Skill, Tool?

**A)** Agent = nhân viên mới, Skill = SOP, Tool = phần mềm
**B)** Agent = boss, Skill = nhân viên, Tool = bút giấy
**C)** Agent = GPS, Skill = bản đồ, Tool = xe ô tô
**D)** Agent = học sinh, Skill = bài học, Tool = sách vở

**Đáp án đúng: B** (1 điểm)
*Giải thích: "Boss" không phải là Agent. Agent là "nhân viên mới", không phải quản lý.*

---

### Câu 3 (Buổi 2): Bạn muốn tạo báo cáo tuần (có slide + bảng dữ liệu). Cách nào phù hợp nhất?

**A)** Dùng pptx skill để tạo slide, xong
**B)** Dùng xlsx skill để tạo bảng tính, xong
**C)** Dùng pptx skill + xlsx skill + docx skill lần lượt (skill relay)
**D)** Dùng chỉ WebSearch skill

**Đáp án đúng: C** (1 điểm)
*Giải thích: Báo cáo hoàn chỉnh cần kết hợp nhiều skills cho output đa dạng.*

---

### Câu 4 (Buổi 3): Phần nào của SKILL.md là bắt buộc?

**A)** Chỉ YAML frontmatter
**B)** Chỉ body (phần mô tả)
**C)** YAML + body. References là tùy chọn
**D)** Chỉ tên skill

**Đáp án đúng: C** (1 điểm)
*Giải thích: YAML và body là bắt buộc, references chỉ dùng khi skill phức tạp.*

---

### Câu 5 (Buổi 4): Khi nào bạn nên nâng cấp skill từ đơn giản lên phức tạp?

**A)** Luôn nâng cấp ngay từ đầu
**B)** Khi skill đơn giản không đủ cho quy trình 5+ bước hoặc cần tài liệu sâu
**C)** Không bao giờ nâng cấp
**D)** Chỉ nâng cấp nếu có lập trình viên

**Đáp án đúng: B** (1 điểm)
*Giải thích: Nâng cấp khi skill cần multi-step workflow hoặc references folder.*

---

### Câu 6 (Buổi 5): Tiêu chí "Maintainability" của skill có nghĩa là gì?

**A)** Skill không bao giờ thay đổi
**B)** Dễ sửa, cập nhật mà không làm hỏng phần khác
**C)** Skill chỉ dành cho 1 người
**D)** Skill chạy trên mọi nền tảng

**Đáp án đúng: B** (1 điểm)
*Giải thích: Maintainability là khả năng bảo trì, sửa đổi skill mà không gây lỗi.*

---

## Phần B: Câu hỏi ngắn (4 câu × 1 điểm = 4 điểm)

### Câu 7 (Buổi 2-3): Hãy liệt kê 3 skills có sẵn mà bạn sẽ dùng trong công việc của mình và giải thích tại sao.

**Format trả lời:**
```
1. Skill: [tên] | Lý do: [mô tả công việc + cách dùng]
2. Skill: [tên] | Lý do: [mô tả công việc + cách dùng]
3. Skill: [tên] | Lý do: [mô tả công việc + cách dùng]
```

**Rubric (1 điểm):**
- ✓ Chọn đúng 3 skills phù hợp
- ✓ Giải thích rõ tại sao mỗi skill phù hợp với công việc
- ✓ Mô tả cụ thể use case (vd: "docx skill để tạo JD theo template công ty")

*Điểm:*
- 1 điểm: Tất cả 3 skills đúng + lý do rõ ràng
- 0.5 điểm: 2 skills đúng hoặc lý do chung chung
- 0 điểm: Lựa chọn sai hoặc không có lý do

---

### Câu 8 (Buổi 3): Tạo SKILL.md để giải quyết một công việc lặp lại trong phòng ban của bạn.

**Yêu cầu:**
- Có YAML frontmatter (tên, mô tả theo "When X, do Y")
- Body có 3-5 bước rõ ràng
- Ít nhất 1 ví dụ (input + expected output)

**Rubric (1 điểm):**

| Tiêu chí | Đạt | Không đạt |
|----------|-----|-----------|
| YAML đầy đủ (name, description) | ✓ | ✗ |
| Description theo "When X, do Y" | ✓ | ✗ |
| Body có 3-5 bước | ✓ | ✗ |
| Có ví dụ input/output | ✓ | ✗ |

*Điểm:*
- 1 điểm: Tất cả 4 tiêu chí ✓
- 0.5 điểm: 2-3 tiêu chí ✓
- 0 điểm: <2 tiêu chí ✓

---

### Câu 9 (Buổi 4): So sánh skill của bạn (từ Câu 8) với mục tiêu nâng cấp. Bạn sẽ thêm gì vào?

**Hướng dẫn:**
- Nó có cần tài liệu bổ sung (references) không? Cái gì?
- Nó có thể có multi-step workflow không? Thêm bao nhiêu bước?
- Nó có thể dùng lại cho các tình huống khác không? Nếu có, ví dụ?

**Rubric (1 điểm):**

| Mục | Đạt | Không đạt |
|-----|-----|-----------|
| Xác định được references cần thêm | ✓ | ✗ |
| Mô tả được workflow mở rộng | ✓ | ✗ |
| Lý giải reusability | ✓ | ✗ |

*Điểm:*
- 1 điểm: Trả lời cụ thể 2-3 hạng mục
- 0.5 điểm: Trả lời chỉ 1 hạng mục
- 0 điểm: Không có câu trả lời rõ ràng

---

### Câu 10 (Buổi 5): Xây dựng 30-Day Skill Adoption Plan cho 3 skills bạn muốn triển khai trong team.

**Yêu cầu tối thiểu:**

```
Skill 1: [Tên]
- Mục đích: [Công việc giải quyết]
- Phòng ban: [Team nào dùng]
- Người chịu trách nhiệm: [Ai đứng đầu]
- Tuần 1 (ngày X-Y): [Nội dung training/setup]
- Tuần 2-3 (ngày X-Y): [Test thực tế, thu feedback]
- Tuần 4 (ngày X-Y): [Đánh giá, quy trình hóa]
- KPI thành công: [Chỉ số gì để đo thành công]

[Lặp lại cho Skill 2 và Skill 3]
```

**Rubric (1 điểm):**

| Tiêu chí | Đạt | Không đạt |
|----------|-----|-----------|
| Chọn 3 skills phù hợp, có mục đích rõ | ✓ | ✗ |
| Định rõ phòng ban + người chịu trách nhiệm | ✓ | ✗ |
| Timeline 4 tuần với cột mốc cụ thể | ✓ | ✗ |
| Có KPI/chỉ số đo thành công | ✓ | ✗ |

*Điểm:*
- 1 điểm: Tất cả 4 tiêu chí rõ ràng + realistisch
- 0.5 điểm: 2-3 tiêu chí ✓, timeline chung chung
- 0 điểm: <2 tiêu chí ✓

---

## Hướng dẫn chấm điểm

**Tổng điểm:** 10 điểm (6 MCQ + 4 Short-answer)
**Điểm pass:** 7 điểm (70%)
**Điểm fail:** <7 điểm

### Qui định chấm Short-answer

- **Dùng rubric cụ thể** cho mỗi câu
- **Cho phần điểm** (0.5, 0.75) nếu trả lời một phần
- **Lưu ý:** Chấp nhận nếu câu trả lời có logic rõ, dù công việc cụ thể khác nhau
- **Đánh giá lại** Câu 8-10 nếu không chắc, hoặc gọi học viên giải thích thêm

### Sau khi chấm

- **Pass:** Cứ học tiếp, hỗ trợ áp dụng skills trong công việc thực tế
- **Fail:** Cung cấp feedback cụ thể, cho phép làm lại trong 1 tuần

---

## Tham khảo thêm

- Learner handout: Bài đánh giá tham khảo khái niệm từ 5 buổi
- Mini-quizzes: Để luyện tập trước bài thi
- Lesson plan: Timeline và target objectives
