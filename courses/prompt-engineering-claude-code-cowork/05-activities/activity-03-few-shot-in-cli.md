# Activity 03: Few-shot trong CLI

<!-- Buổi 3 | 15 phút | Individual → Pair | LO5 -->

## Tổng quan

| Mục | Chi tiết |
|-----|----------|
| **Buổi** | 3 — Kỹ thuật nâng cao: Dạy AI bằng ví dụ |
| **Thời lượng** | 15 phút (0:15–0:30) |
| **Hình thức** | Cá nhân 10 phút → Ghép đôi 5 phút |
| **Mục tiêu** | LO5: tạo few-shot prompt trong Claude Code đạt accuracy ≥80% |

## Kiểm tra REAL

- **R (Relevant):** 3 task (phân loại email, trích xuất dữ liệu, format bảng) là việc thực tế lặp lại hàng ngày
- **E (Engaging):** Technique fading tạo thách thức tăng dần — học viên tự hoàn thiện ví dụ
- **A (Active):** Tự viết examples, tự test, tự đo accuracy trong CLI
- **L (Learner-centered):** Chọn 1 trong 3 task gần nhất với công việc bản thân

## Tài liệu cần có

- Worksheet với template fading + dữ liệu mẫu (bên dưới) | Claude Code đang chạy

---

## 3 Task Options

| Task | Mô tả | Dữ liệu mẫu |
|------|-------|-------------|
| **A — Phân loại email** | Phân loại email thành: Khẩn cấp / Cần trả lời / Chỉ đọc | 6 email subject lines mẫu |
| **B — Trích xuất dữ liệu** | Trích xuất: tên, số tiền, ngày từ đoạn văn báo cáo | 4 đoạn văn mẫu |
| **C — Format bảng** | Chuyển danh sách text thô thành bảng Markdown có cột | 5 dòng dữ liệu thô |

---

## Hướng dẫn Giảng viên

### Setup (1 phút)

1. Giải thích fading: "Ví dụ 1 có sẵn. Ví dụ 2 chỉ có Input. Ví dụ 3 trống — tự viết cả hai."
2. "Chọn task gần công việc hàng ngày nhất. Giữ main room, không breakout."

### Roaming Schedule (14 phút)

| Phút | Hành động Giảng viên |
|------|----------------------|
| 0–3 | Quan sát chung — ai đang chọn task nào. Nhắc nhở học viên chưa bắt đầu |
| 3–6 | Đi từng người — kiểm tra ví dụ 2 có đúng format chưa (input → output) |
| 6–9 | Hỗ trợ học viên đang viết ví dụ 3, nhắc: "Ví dụ phải cùng cấu trúc với ví dụ 1" |
| 9–10 | Announce: "Bắt đầu ghép đôi — người bên cạnh hoặc người cùng ngành" |
| 10–14 | Quan sát cặp đôi — nghe họ so sánh accuracy, hỏi: "Bạn nào đạt trên 80%?" |

### Intervention Triggers

| Tình huống | Cách xử lý |
|------------|-----------|
| Học viên viết few-shot nhưng format ví dụ không nhất quán | Chỉ ra: "Input và output phải có cùng cấu trúc trong mỗi ví dụ — xem lại ví dụ 1" |
| Accuracy thấp dù có few-shot | Hỏi: "Ví dụ của bạn có đủ đa dạng không? Thử thêm 1 ví dụ edge case" |
| Học viên nhầm few-shot với zero-shot | Demo nhanh: xóa examples → chạy lại → so sánh output |
| Hết thời gian chưa test | Cho phép gõ `/clear` rồi test nhanh 2 cases để có số accuracy |

---

## Worksheet: Activity 03 — Few-shot trong CLI

**Tên:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_ | **Task chọn:** ☐ A — Phân loại email ☐ B — Trích xuất dữ liệu ☐ C — Format bảng

---

### Dữ liệu mẫu theo task

**Task A — Email subjects:** (1) "URGENT: Server sập, cần xử lý ngay" → Khẩn cấp | (2) "Mời họp team thứ Tư 10h" → Cần trả lời | (3) "FYI: Bản tin tháng 3" → Chỉ đọc | (4) "Cần phê duyệt ngân sách trước 17h" | (5) "Re: Kế hoạch Q2 — bạn nghĩ sao?" | (6) "Newsletter: Xu hướng ngành 3/2026"

**Task B — Trích xuất từ đoạn văn:** (1) "Ngày 10/03, anh Minh Tuấn thanh toán 15.500.000 VNĐ." | (2) "Chi phí tháng 2: 3.200.000 VNĐ, chị Lan Anh phụ trách." | (3) "HĐ 2024-087 ngày 05/03: 8.750.000 VNĐ từ ABC." | (4) "Ông Hoàng Đức đề xuất 22.000.000 VNĐ cho dự án T4."

**Task C — Dữ liệu thô → bảng:** `Nguyễn Văn A | Sale | HCM | 3 năm` / `Trần Thị B | Marketing | HN | 1 năm` / `Lê Minh C | Finance | HCM | 5 năm` / `Phạm Thu D | HR | ĐN | 2 năm` / `Hoàng Anh E | Ops | HCM | 4 năm`

---

### Template Few-shot (Fading)

**Ví dụ 1 — Có sẵn hoàn toàn** (đừng thay đổi):

```
Input: [dán dòng dữ liệu đầu tiên của task bạn chọn]
Output: [dán output mẫu tương ứng]
```

**Ví dụ 2 — Hoàn thiện phần Output** (Input đã có):

```
Input: [dán dòng dữ liệu thứ hai]
Output: ___________________________
```

**Ví dụ 3 — Tự viết cả Input lẫn Output:**

```
Input: ___________________________
Output: ___________________________
```

---

### Prompt hoàn chỉnh gõ vào Claude Code

```
Dưới đây là các ví dụ về cách tôi muốn bạn xử lý task:

[Dán Ví dụ 1]
[Dán Ví dụ 2]
[Dán Ví dụ 3]

Bây giờ hãy xử lý các mục sau theo đúng pattern trên:
[Dán dữ liệu test còn lại]
```

---

### Đo Accuracy

| Test case | Output AI | Đúng? |
|-----------|-----------|-------|
| Case 1 | | ☐ Có ☐ Không |
| Case 2 | | ☐ Có ☐ Không |
| Case 3 | | ☐ Có ☐ Không |

**Accuracy:** \_\_ / 3 = \_\_% | Đạt ≥80%? ☐ Có ☐ Chưa

**Nếu chưa đạt — cần điều chỉnh gì ở examples?** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

### Ghép đôi (Phút 10–15)

So sánh với người bên cạnh:
- Bạn chọn task gì? Accuracy bao nhiêu?
- Điểm khác nhau lớn nhất trong examples của hai người?
- **1 cải tiến bạn sẽ áp dụng:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

## Câu hỏi Debrief (Plenary — sau activity)

1. "Ai đạt accuracy ≥80%? Bạn đã làm gì để đạt được?"
2. "Ví dụ trong few-shot cần có đặc điểm gì để hiệu quả?"
3. "Task nào trong công việc hàng ngày bạn muốn áp dụng few-shot ngay?"
