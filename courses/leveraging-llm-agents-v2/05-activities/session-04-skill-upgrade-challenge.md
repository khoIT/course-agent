# Hoạt động 4: Nâng cấp Skill

**Buổi:** 4 | **Thời lượng:** 13 phút | **Loại:** Enhancement Activity | **Scaffolding:** Minimal (Checklist only)

---

## Thông tin tổ chức

**Mục tiêu học tập:**
- Thiết kế skill phức tạp có references, multi-step workflow, progressive disclosure
- Nâng cấp skill buổi 3 từ đơn giản → chuyên nghiệp

**Hình thức:**
- Pairs (2 người) từ buổi 3 (nếu có thể)
- Lấy skill buổi 3, nâng cấp theo checklist
- Peer review: swap skill, đánh giá chéo
- Không hướng dẫn step-by-step (minimal scaffold)

**Tài liệu cần chuẩn bị:**
- Skill buổi 3 của học viên
- Upgrade checklist (dưới đây)
- Reference folder template
- Timer Zoom

---

## Thời gian biểu

| Thời gian | Nội dung | Chi tiết |
|-----------|---------|---------|
| 0:00-0:01 | **Intro Checklist** | GV giải thích 4 upgrade criteria. |
| 0:01-0:09 | **Individual Upgrade (You Do)** | Pairs nâng cấp skill dùng checklist. |
| 0:09-0:13 | **Peer Review + Share** | Swap skill, review, give praise + suggestion. |

---

## Upgrade Checklist

Lấy SKILL.md buổi 3, nâng cấp theo 4 tiêu chí:

### ☐ Item 1: Thêm references/ Folder

**Criteria:** Skill có thư mục `references/` với ít nhất 1 file kiến thức chuyên sâu.

**Ví dụ:**
- HR (jd-generator): `references/jd-best-practices.md` — tips tuyển dụng, keyword chuẩn
- Marketing (social-post-creator): `references/brand-voice-guidelines.md` — brand voice style guide
- Finance (expense-analyzer): `references/policy-compliance.md` — expense policy cụ thể
- Operations (sop-writer): `references/sop-template.md` — SOP format chuẩn

**Hành động:**
1. Tạo folder `references/` bên cạnh SKILL.md
2. Tạo ≥1 file .md với kiến thức liên quan
3. Trong SKILL.md body, thêm reference: "Xem thêm: references/filename.md"

---

### ☐ Item 2: Progressive Disclosure

**Criteria:** Tách nội dung dài trong body → references (agent có thể điều tra sâu hơn).

**Ví dụ:**
- **Trước:** SKILL.md body = 50 dòng (mọi hướng dẫn chi tiết)
- **Sau:** SKILL.md body = 20 dòng (hướng dẫn cơ bản) + body ghi "Xem references/advanced.md để biết template cụ thể"

**Hành động:**
1. Xác định những phần dài/chi tiết trong body
2. Di chuyển → references/ file mới
3. Trong body, thêm pointer: "Để chi tiết: xem references/advanced-templates.md"

---

### ☐ Item 3: Multi-step Workflow

**Criteria:** Skill có ≥2 bước (sequential steps) trong hướng dẫn.

**Ví dụ:**
- Trước: "Tạo JD" (1 bước lớn)
- Sau:
  - Step 1: Phân tích job requirements từ hiring manager
  - Step 2: Tạo JD draft
  - Step 3: Thêm benefit/culture fit
  - Step 4: Format & review checklist

**Hành động:**
1. Đặt lại SKILL.md body với `## Step 1: ...`, `## Step 2: ...`
2. Mỗi step có input/output rõ ràng
3. Hint: "Agent sẽ xử lý từng step, không tất cả 1 lúc"

---

### ☐ Item 4: Kiểm tra Trigger

**Criteria:** Sau khi nâng cấp, description vẫn trigger chính xác (học viên có thể nhận diện khi cần skill).

**Hành động:**
1. Đọc lại description (từ buổi 3)
2. Test: "Nếu gặp công việc XYZ, description này có trigger không?"
3. Nếu không → refine description để trigger rõ hơn

**Ví dụ fix:**
- Trước: "Tạo Job Description chuyên nghiệp"
- Sau: "Tạo Job Description theo chuẩn công ty từ mô tả vị trí. Bao gồm: Responsibilities, Requirements (skills + years), Benefits, Culture fit. Format: ready-to-publish."

---

## Example Upgrade (Reference Only)

### Skill Buổi 3: email-summarizer (Đơn giản)

```markdown
# email-summarizer

description: Tóm tắt email dài thành 3-5 dòng. Gõ email, nhận summary ngay.

## Body

Bạn là trợ lý tóm tắt email.

Nhận input: email content

Tác vụ: Tóm tắt 3-5 dòng. Giữ main idea, loại bỏ chi tiết.

Output format:
- 1 dòng: Subject/main idea
- 2-4 dòng: Điểm chính
- Tone: concise, professional
```

### Skill Buổi 4: email-summarizer (Nâng Cấp)

```markdown
# email-summarizer

description: Tóm tắt email thành action items, priority, timetable. Nhận email, xuất structured analysis sẵn dùng.

## Body

Bạn là trợ lý email expert. Tóm tắt email công ty thành action items + timeline.

### Step 1: Phân Tích Email
- Main idea?
- Urgency level? (Asap / This week / Backlog)
- Stakeholders involved?

### Step 2: Tóm Tắt Nội Dung
- Giữ: main points, dates, names
- Loại: greeting, small talk, signature

### Step 3: Extract Action Items
- Có action item nào không?
- Owner + deadline?
- Format: bullet list, owner, due date

### Step 4: Output Format
```
SUMMARY:
[3-5 dòng]

URGENCY: [Asap / This week / Backlog]

ACTION ITEMS:
- [ ] [Task] - Owner: [Name], Due: [Date]
- [ ] ...

STAKEHOLDERS: [Names]
```

Xem thêm: `references/email-templates.md` — ví dụ email phức tạp & cách xử lý.
```

**Thay đổi:**
- ✅ Item 1: Thêm `references/email-templates.md`
- ✅ Item 2: Body rút gọn, pointer tới references
- ✅ Item 3: 4 steps rõ ràng (phân tích → tóm tắt → extract → output)
- ✅ Item 4: Description nói "action items + priority" → trigger rõ hơn

---

## Peer Review Process (4 phút)

**Sau khi nâng cấp:**

1. **Pair A + Pair B:** Swap skill files
2. **Review checklist:** Pair B check 4 criteria của Pair A
3. **Feedback format:**
   - 1 điểm tốt: "Bạn làm tốt ở [criterion], vì [reason]"
   - 1 gợi ý: "Nếu mình là bạn, tôi sẽ [suggestion]"
4. **Share insights:** "Skill nào upgrade tốt nhất? Tại sao?"

**Hàng động:**
- Navigator (author) nghe feedback
- Guide (reviewer) chỉ dẫn peer review
- Nếu còn thời gian: author refine based on feedback

---

## Takeaway

- **Nâng cấp = thêm kiến thức, tách logic, rõ workflow.**
- **Multi-step + references = skill từ "đơn giản" → "chuyên gia".**
- **Buổi 5: đánh giá chất lượng skill + kế hoạch triển khai cho team.**
