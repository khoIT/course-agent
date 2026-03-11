# Hoạt động 5: Đánh giá chất lượng Skill

**Buổi:** 5 | **Thời lượng:** 11 phút | **Loại:** Evaluation Activity | **Scaffolding:** Independent

---

## Thông tin tổ chức

**Mục tiêu học tập:**
- Đánh giá chất lượng skill của chính mình dựa trên 5 tiêu chí
- So sánh tự đánh giá vs. đánh giá chéo
- Xác định hướng cải thiện tiếp theo

**Hình thức:**
- Cá nhân + peer review
- Dùng interactive Quality Checker artifact
- Không template cụ thể — học viên tự điều hướng

**Tài liệu cần chuẩn bị:**
- Skill đã nâng cấp từ buổi 4
- Interactive Quality Checker artifact (HTML)
- 5 tiêu chí đánh giá (dưới đây)

---

## Thời gian biểu

| Thời gian | Nội dung | Chi tiết |
|-----------|---------|---------|
| 0:00-0:04 | **Tự đánh giá (You Do)** | Học viên mở Quality Checker, đánh giá skill của mình. |
| 0:04-0:07 | **Peer Review (Chéo)** | Swap: học viên khác đánh giá skill của bạn. |
| 0:07-0:11 | **Reflection + Debrief** | So sánh 2 kết quả, trả lời reflection prompts. |

---

## 5 Tiêu chí Đánh giá Skill

### 1. Trigger Accuracy — Mô tả rõ ràng?

**Câu hỏi:** Description có nói rõ "bạn dùng skill khi nào"?

**Thang đo:**
- 1 = Quá generic ("tạo document")
- 3 = Bình thường ("tạo Job Description")
- 5 = Cực rõ ("tạo JD theo chuẩn công ty với Responsibilities + Requirements")

**Red flag:**
- ❌ Description quá dài (>3 câu)
- ❌ Không có ví dụ input/output
- ❌ Dùng jargon không ai hiểu

---

### 2. Output Quality — Kết quả đúng format?

**Câu hỏi:** Khi agent chạy skill, output có khớp với format mong đợi không?

**Thang đo:**
- 1 = Output lộn xộn, khó dùng
- 3 = Output gần đúng nhưng một vài thiếu sót
- 5 = Output rõ ràng, format đúng, dùng được ngay

**Red flag:**
- ❌ Output bị thiếu thông tin
- ❌ Format không nhất quán
- ❌ Không dễ copy-paste vào công việc

---

### 3. Reusability — Dùng lại được nhiều lần?

**Câu hỏi:** Skill này có thể dùng cho nhiều scenario khác không?

**Thang đo:**
- 1 = Quá cụ thể (chỉ 1 tác vụ)
- 3 = Dùng được 3-4 scenario
- 5 = Dùng được cho nhiều scenario với input khác nhau

**Red flag:**
- ❌ Hardcode công ty cụ thể
- ❌ Chỉ work cho 1 use case
- ❌ Quá dài, khó customize

---

### 4. Maintainability — Dễ sửa/update?

**Câu hỏi:** 1 tháng sau, bạn hoặc team khác có dễ hiểu + sửa skill không?

**Thang đo:**
- 1 = Khó hiểu, chẳng biết sửa chỗ nào
- 3 = Bình thường, cần diễn giải
- 5 = Rõ ràng, có comment, dễ sửa

**Red flag:**
- ❌ Không có comment giải thích
- ❌ References folder lộn xộn
- ❌ Inconsistent naming

---

### 5. Scope — Phạm vi hợp lý?

**Câu hỏi:** Skill làm được nhiều thứ quá (scope quá rộng) hay quá ít (scope quá hẹp)?

**Thang đo:**
- 1 = Quá rộng (bao gồm quá nhiều responsibility)
- 3 = Bình thường (1-2 main responsibility)
- 5 = Cân bằng (1 tác vụ rõ ràng, input/output rõ)

**Red flag:**
- ❌ Skill cố gắng làm nhiều thứ (JD + email + cover letter)
- ❌ Hoặc quá đơn giản ("tạo text")

---

## Interactive Quality Checker Artifact

**Cách dùng:**

1. **Mở artifact:** GV share link
2. **Đánh giá từng tiêu chí:** Kéo slider 1-5
   - Slider xuất phát: 3 (bình thường)
   - Kéo sang trái: 1-2 (yếu), sang phải: 4-5 (tốt)
3. **Xem kết quả:**
   - Radar chart: 5 tiêu chí trên cùng 1 biểu đồ
   - Score tổng: (sum / 25) × 100%
   - Thông báo: "Excellent" (>80%), "Good" (60-80%), "Needs Work" (<60%)
4. **Gợi ý cải thiện:** Artifact sinh recommendation cho tiêu chí nào dưới 3

**Ví dụ output:**
```
YOUR SKILL ASSESSMENT

jd-generator

Trigger Accuracy: 4/5 ⭐
Output Quality: 5/5 ⭐⭐
Reusability: 3/5 ⭐
Maintainability: 4/5 ⭐⭐
Scope: 5/5 ⭐⭐

TOTAL: 84/100 (EXCELLENT)

RECOMMENDATIONS:
- Reusability 3/5: Thêm ví dụ input khác (VP khác, level khác).

NEXT STEPS:
1. Expand references/ với job market data.
2. Test skill với 3 scenarios khác.
```

---

## Peer Review Flow (3 phút)

**Sau tự đánh giá:**

1. **Swap:** Học viên A cho Học viên B xem skill file + self-assessment kết quả
2. **Review:** Học viên B dùng Quality Checker đánh giá lại (không nhìn assessment cũ)
3. **So sánh:**
   - Tự đánh giá A: 84/100 (Reusability 3)
   - Đánh giá chéo B: 78/100 (Reusability 2)
   - Sự khác biệt: B thấy scope cụ thể hơn A kỳ vọng → need more flexibility
4. **Thảo luận 30 giây:** "Vì sao chúng ta đánh giá khác nhau?"

---

## Reflection Prompts (4 phút)

**Mỗi học viên trả lời 3 câu (có thể mental, không cần viết):**

1. **"Tiêu chí nào skill mình mạnh nhất? Tại sao?"**
   - Tìm strength (ví dụ: Output Quality 5/5)
   - Hiểu điểm mạnh để maintain

2. **"Tiêu chí nào cần cải thiện trước tiên?"**
   - Tìm 1 weakness (<3)
   - Ưu tiên fix (ví dụ: Reusability → thêm scenarios)

3. **"Bạn sẽ thay đổi gì trong tuần tới?"**
   - 1 hành động cụ thể (ví dụ: "Thêm 2 references file", "Test skill với 3 input khác")
   - Commit to action

---

## Debrief & Share Insights (2 phút)

**Toàn nhóm (nếu có thời gian):**

1. **"Ai có skill đạt Excellent (>80%)?"** → applause
2. **"Tiêu chí nào khó nhất để đạt cao?"** → Reusability? Scope?
3. **"Insight nào từ peer review?"** → "Khi người khác đánh giá, insight gì?"

---

## Takeaway

- **Quality self-assessment = bước đầu continuous improvement.**
- **Peer review = giúp bạn thấy blind spots.**
- **Hoạt động cuối (adoption plan) = đưa skill vào sử dụng thực.**
