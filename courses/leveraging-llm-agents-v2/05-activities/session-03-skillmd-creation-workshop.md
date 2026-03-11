# Hoạt động 3: Xây dựng Skill đầu tiên

**Buổi:** 3 | **Thời lượng:** 18 phút | **Loại:** Build Activity | **Scaffolding:** Partial (Template với blanks)

---

## Thông tin tổ chức

**Mục tiêu học tập:**
- Tạo file SKILL.md hoàn chỉnh bằng interactive Skill Builder
- Tổ chức thư mục skill với cấu trúc chuẩn

**Hình thức:**
- Pairs (2 người) trong breakout rooms
- 1 người làm (navigator), 1 người hỗ trợ (guide)
- Dùng interactive SKILL.md Builder artifact
- Mỗi pair chọn 1 ngành, 1 scenario pre-loaded

**Tài liệu cần chuẩn bị:**
- SKILL.md Builder artifact (HTML interactive)
- 4 scenario templates (HR, Marketing, Finance, Operations)
- Hướng dẫn sử dụng Builder

---

## Thời gian biểu

| Thời gian | Nội dung | Chi tiết |
|-----------|---------|---------|
| 0:00-0:02 | **Intro Builder** | Giáo viên demo Builder 2 phút. |
| 0:02-0:12 | **Pair Activity (You Do)** | Pairs dùng Builder tạo skill. |
| 0:12-0:16 | **Show & Tell** | 3 pairs share skill của họ. GV feedback. |
| 0:16-0:18 | **Wrap-up** | Preview buổi 4. |

---

## Scenario Pre-loaded theo Ngành

### Ngành HR: Job Description Generator

**Skill Name (kebab-case):** `jd-generator`

**Mục đích:** Tạo Job Description theo format chuẩn công ty.

**Input:** Tên vị trí + mô tả sơ bộ

**Output:** JD formal (3-4 trang) gồm: Responsibilities, Requirements, Benefits

---

### Ngành Marketing: Social Post Creator

**Skill Name:** `social-post-creator`

**Mục đích:** Viết social media post theo brand voice công ty.

**Input:** Topic + platform (Facebook / Instagram / LinkedIn)

**Output:** Post ready-to-publish + hashtag suggestions

---

### Ngành Finance: Expense Report Analyzer

**Skill Name:** `expense-report-analyzer`

**Mục đích:** Phân tích báo cáo chi phí, phát hiện outlier, kiểm tra policy.

**Input:** CSV hoặc JSON dữ liệu chi phí

**Output:** Summary + flagged non-compliant items + recommendation

---

### Ngành Operations: SOP Writer

**Skill Name:** `sop-writer`

**Mục đích:** Viết Standard Operating Procedure từ mô tả quy trình.

**Input:** Process description (text hoặc bullet points)

**Output:** Structured SOP (step-by-step + ownership + approval workflow)

---

## Step-by-step: Sử dụng SKILL.md Builder

### Step 1: Mở Builder (1 phút)

- GV share link Builder artifact
- Học viên click vào artifact
- Builder hiển thị form tương tác

---

### Step 2: Chọn Ngành & Xem Scenario (1 phút)

**Trong Builder:**
- Dropdown: "Chọn ngành" → HR / Marketing / Finance / Operations
- Tự động load scenario pre-filled (ví dụ: "Tạo JD" cho HR)
- Displayed: Skill name, purpose, input/output examples

**Hàng động:**
- Navigator chọn ngành
- Guide chỉ dẫn từng field

---

### Step 3: Điền "name" (kebab-case) (1 phút)

**Field:** Name (kebab-case, ví dụ: `jd-generator`)

**Validation:**
- ✅ Xanh: Name hợp lệ (lowercase, hyphen, no spaces)
- 🔧 Vàng: Name không thích hợp (uppercase, space, special char)

**Action:** Điền theo scenario hoặc tùy chỉnh.

---

### Step 4: Viết Description (2 phút)

**Field:** Description (1-2 câu, "pushy")

**Ví dụ:**
- HR: "Tạo Job Description professional theo chuẩn công ty. Chỉ cần cho tên vị trí + mô tả sơ bộ, skill tạo JD formal với responsibilities, requirements, benefits."
- Marketing: "Viết social post sáng tạo theo brand voice. Gửi topic + platform, nhận post + hashtag ngay lập tức."

**Validation:**
- ✅ Xanh: Description đủ "pushy", trigger rõ
- 🔧 Vàng: Description quá generic hoặc quá dài

**Hint:** "Trigger words" = động từ, stakeholder (ví dụ: "Tạo", "Viết", "Phân tích")

---

### Step 5: Viết Body (4 phút)

**Field:** Body (hướng dẫn cho agent)

**Template có blank:**

```markdown
Bạn là chuyên gia [BLANK: chuyên môn].
Tác vụ: [BLANK: mô tả tác vụ]

Input bạn sẽ nhận: [BLANK: ví dụ input]

Hướng dẫn:
1. [BLANK: step 1]
2. [BLANK: step 2]
3. [BLANK: step 3]

Output format:
[BLANK: expected output]

Luôn:
- [BLANK: constraint 1]
- [BLANK: constraint 2]
```

**Navigator:** Điền từng blank

**Guide:** Hỏi "Điều này có đúng không?" / Giúp refine

**Validation:**
- ✅ Xanh: Body rõ ràng, agent hiểu
- 🔧 Vàng: Body quá ngắn hoặc quá dài

---

### Step 6: Xem Preview & Validate (2 phút)

**Preview panel bên phải:** Hiển thị SKILL.md rendered

**Validation Checklist:**
- ☐ Name hợp lệ (kebab-case)?
- ☐ Description "pushy" + trigger rõ?
- ☐ Body có hướng dẫn step-by-step?
- ☐ Output format rõ ràng?

**Hàng động:**
- Navigator check checklist
- Guide nói "Tất cả ✅? Export đi!"

---

### Step 7: Export & Test trong Cowork (2 phút)

**Export button:** "Download SKILL.md"

**Sau khi export:**
1. Mở Cowork
2. Tạo folder `my-skills/{skill-name}/`
3. Paste SKILL.md vào folder
4. Kích hoạt skill (nếu Cowork có UI để activate)
5. Test prompt nhỏ để xem agent hiểu đúng không

**Kết quả:** "Kích hoạt thành công!" hoặc feedback để cải thiện

---

## Show & Tell (4 phút)

**3 pairs tốt nhất chia sẻ:**

1. **Share:** Skill name + mục đích
2. **Demo:** 1 test prompt nhỏ → kết quả
3. **GV Feedback:**
   - "Description có trigger đúng không?"
   - "Body có rõ ràng để agent hiểu?"
   - "1 điều bạn nên cải thiện?"

---

## Pair Activity Guidance

**Navigator (người gõ):**
- Tập trung vào Builder form
- Điền từng field
- Hỏi Guide khi không chắc

**Guide (người hỗ trợ):**
- Đọc scenario pre-filled
- Giúp refine description/body
- Check validation checklist
- Hỏi "Điều này có đúng concept không?"

**Swap roles nếu muốn:** Sau khi hoàn thành 1 skill, có thể đổi vai trò để cả hai kinh nghiệm cách tạo.

---

## Takeaway

- **Tạo skill không khó — chỉ cần làm rõ: mục đích, input, output, hướng dẫn.**
- **Buổi 4: nâng cấp skill bằng references/ và multi-step workflow.**
