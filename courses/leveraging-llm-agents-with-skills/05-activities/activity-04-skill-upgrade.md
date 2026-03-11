# Hoạt động 4: "Skill Upgrade"

**Loại hoạt động:** Thực hành + Peer Review
**Thời gian:** 13 phút (0:22-0:35 trong buổi 4)
**Chuẩn bị:** Skill từ buổi 3 + upgrade checklist + pair assignments

---

## Mục tiêu

Sau hoạt động này, học viên có thể:
- **Nâng cấp skill đơn giản** (từ buổi 3) thành skill phức tạp hơn
- **Tạo folder `references/`** để chứa kiến thức chuyên sâu
- **Áp dụng progressive disclosure:** SKILL.md ngắn → references nặng
- **Implement multi-step workflow:** hướng dẫn agent qua nhiều bước tuần tự
- **Review lẫn nhau:** Đánh giá skill của bạn bè theo upgrade checklist
- **Nhận feedback peer** để cải tiến

---

## Thời gian

**Tổng:** 13 phút
- Giới thiệu + demo skill "course-designer" (3 phút)
- Nâng cấp skill (7 phút): Mỗi người sửa skill buổi 3 theo checklist
- Peer review (3 phút): Pair đánh giá lẫn nhau

---

## Chuẩn bị

**Cho giáo viên:**
1. Chuẩn bị **course-designer skill** để demo (hoặc một skill phức tạp có sẵn)
2. Chuẩn bị **pair assignment:** Ghép cặp học viên (A với B, C với D, ...)
3. Chuẩn bị **upgrade checklist** (dưới đây)

**Cho học viên:**
- Lấy **skill từ buổi 3** (SKILL.md file)
- Sẵn sàng làm peer reviewer cho partner
- Mở **upgrade checklist**

**Tài liệu cần thiết:**
- Upgrade Checklist
- Peer Review Form
- Pair assignments (print hoặc share trước)

---

## Hướng dẫn từng bước

### Bước 1: Demo — Giải phẫu skill "course-designer" (3 phút)

**Giáo viên share màn hình:**

> "Buổi 3 các bạn tạo skill đơn giản — chỉ có SKILL.md. Hôm nay chúng ta nâng cấp.
>
> Tôi sẽ show cách **course-designer skill** — skill tôi dùng để tạo **chính khóa học này**. Nó complex hơn skill của bạn rất nhiều."

**Phần 1 — Hiển thị file structure (1 phút):**

```
course-designer/
├── SKILL.md          ← Ngắn gọn (50 dòng)
├── references/
│   ├── course-design-methodology.md
│   ├── evaluation-criteria.md
│   └── addie-workflow-checklist.md
└── assets/
    └── templates/
        ├── lesson-plan-template.md
        └── activity-template.md
```

**Giáo viên nói:**

> "Nhìn thấy không? SKILL.md **ngắn thôi** — không quá 50 dòng. Nhưng phía dưới có folder `references/` — chứa tài liệu chuyên sâu mà agent **đọc khi cần**. Đây gọi là **'progressive disclosure'** — bạn không phải đọc hết ngay, chỉ đọc khi relevance."

**Phần 2 — Mở SKILL.md vs references (1 phút):**

Giáo viên mở 2 file:
- SKILL.md: Ngắn, chỉ 1-2 trang
- references/methodology.md: Dài, chi tiết, có 30+ trang

> "SKILL.md nói: 'Design khóa học theo ADDIE — đọc `references/course-design-methodology.md` để hiểu chi tiết.' Agent sẽ tự đọc references/ khi cần. Thế là SKILL.md vừa ngắn vừa mạnh."

**Phần 3 — Multi-step workflow (1 phút):**

Giáo viên chỉ body của course-designer:

> "SKILL.md body có 10 bước — từ Analysis → Design → Development → Evaluation. Mỗi bước agent qua 1 sub-task. **Không phải tất cả cùng 1 lúc — tuần tự từng bước.** Đây gọi là **multi-step workflow**."

---

### Bước 2: Nâng cấp skill (7 phút)

**Giáo viên chia task:**

> "Bây giờ bạn sẽ nâng cấp skill buổi 3 của mình. Mục tiêu: thêm **references/** folder + **progressive disclosure** + có thể thêm **multi-step workflow** nếu tác vụ của bạn phức tạp đủ.
>
> Mỗi bạn có **7 phút**. Follow checklist này."

---

#### **Substep 2.1 — Tạo folder `references/` (1 phút)**

Học viên tạo folder structure:

```
[skill-name]/
├── SKILL.md
└── references/
    └── [reference-file-name].md
```

**Ví dụ:**

Nếu skill là "project-status-report", structure sẽ là:

```
project-status-report/
├── SKILL.md
└── references/
    └── status-report-template.md
```

---

#### **Substep 2.2 — Tách kiến thức chuyên sâu vào `references/` (3 phút)**

Học viên **lấy phần chi tiết từ SKILL.md body → tách ra file riêng trong references/**.

**Ví dụ:**

**Trước (SKILL.md — dài 20 dòng):**
```yaml
---
name: project-status-report
description: |
  Viết báo cáo tiến độ dự án hàng tuần.
  Format theo template công ty: 5 section, focus vào risks.
---

# Hướng dẫn

1. Đọc task list
2. Phân loại: Hoàn thành / Đang làm / Chưa bắt đầu
3. Viết tóm tắt mỗi category — format:
   - Section 1: Executive Summary (1 paragraph)
   - Section 2: Completed Tasks (bullet)
   - Section 3: In Progress (bullet + % done)
   - Section 4: Blockers/Risks (bullet + severity)
   - Section 5: Next Steps (bullet)
4. Output: .docx file ready to send

## Ví dụ
[...]
```

**Sau (SKILL.md — ngắn 15 dòng):**
```yaml
---
name: project-status-report
description: |
  Viết báo cáo tiến độ dự án hàng tuần.
  Format theo template công ty: 5 section, focus vào risks.
---

# Hướng dẫn

1. Đọc task list
2. Phân loại: Hoàn thành / Đang làm / Chưa bắt đầu
3. Viết tóm tắt theo template — xem `references/status-report-template.md`
4. Output: .docx file

## Ví dụ
Xem `references/example-report.md`
```

**File `references/status-report-template.md`:**
```markdown
# Template: Project Status Report

## Section 1: Executive Summary
[1 paragraph tóm tắt toàn bộ báo cáo]

## Section 2: Completed Tasks ✅
- Task A (completed, quality: high)
- Task B (completed, minor bug found)

## Section 3: In Progress ⏳
- Task C: 70% done, blocked by [blocker]
- Task D: 50% done, on track

## Section 4: Blockers & Risks ⚠️
- Blocker: [mô tả] — Impact: [high/medium/low] — ETA fix: [date]
- Risk: [mô tả] — Mitigation: [action]

## Section 5: Next Steps 👉
- Week X+1: Focus on [priority]
- Need approval: [decision required]
- Risks to monitor: [list]

---

**Notes:**
- Tone: Professional, concise
- Length: Max 1 page
- Severity levels: [Critical = 🔴 / High = 🟠 / Medium = 🟡]
```

---

#### **Substep 2.3 — Cập nhật SKILL.md (2 phút)**

Học viên sửa SKILL.md:
- Ngắn gọn lại (hướng dẫn từng bước — không chi tiết, khoảng 10-12 dòng)
- Thêm link đến references/ trong body (ví dụ: "xem `references/status-report-template.md`")
- Nếu thích, thêm multi-step workflow (chia thành Phase 1, 2, 3)

**Ví dụ SKILL.md upgraded:**

```yaml
---
name: project-status-report
description: |
  Viết báo cáo tiến độ dự án hàng tuần.
  Template chuẩn 5 section, auto-detect risks từ task list.
---

# Hướng dẫn

**Phase 1: Analyze**
1. Đọc task list đầu vào
2. Phân loại: Hoàn thành / Đang làm / Chưa bắt đầu

**Phase 2: Generate**
3. Viết từng section theo template — xem `references/status-report-template.md`
4. Highlight blockers/risks (severity level + ETA)

**Phase 3: Output**
5. Format: .docx, professional, ready to send

## Tài liệu tham khảo
- `references/status-report-template.md` — template đầy đủ
- `references/example-report.md` — báo cáo mẫu thực tế

## Ví dụ
Input: 12 tasks, 3 in progress, 1 blocker
Output: 1-page .docx report, 5 sections, risks highlighted
```

---

#### **Substep 2.4 — Test lại (1 phút)**

Học viên gõ prompt test lại skill nâng cấp trong Cowork:

```
Hãy sử dụng skill project-status-report để viết báo cáo từ task list này.

[paste task list]
```

**Check:** Output có tốt hơn lần trước không? Có follow template không?

---

### Bước 3: Peer Review (3 phút)

**Giáo viên chia pair:**

> "Bạn sẽ trao đổi skill với bạn cạnh ngồi. Bạn A sẽ review skill của B, B review skill của A. Bạn có **2 phút** để review."

**Flow:**

1. **A gửi skill nâng cấp cho B** (file SKILL.md + references/)
2. **B mở file, check theo checklist dưới:**

---

#### **Peer Review Checklist:**

Reviewer check mỗi tiêu chí, đánh giá:
- ✓ Hoàn toàn (Complete)
- ⚠️ Cần cải tiến (Needs improvement)
- ✗ Chưa có (Missing)

**Tiêu chí:**

| Tiêu chí | Hoàn toàn ✓ | Cần cải tiến ⚠️ | Chưa có ✗ | Ghi chú |
|----------|-----------|------------------|-----------|---------|
| **Tên skill:** kebab-case | | | | |
| **Description:** 2 dòng, pushy | | | | |
| **SKILL.md:** Ngắn gọn (10-15 dòng) | | | | |
| **Folder references/:** Có tối thiểu 1 file | | | | |
| **Progressive disclosure:** Body đơn giản, chi tiết ở references/ | | | | |
| **Multi-step workflow:** Chia Phase/Step rõ ràng (nếu applicable) | | | | |
| **Test:** Deployed + test output tốt | | | | |

**Feedback template cho reviewer:**

```
Skill [tên]: [tóm tắt 1 dòng về tác vụ]

✓ Điểm mạnh:
- [Ví dụ: "Description rất pushy, tôi hiểu ngay khi dùng skill"]
- [Ví dụ: "References folder rất chi tiết, agent sẽ dùng được"]

⚠️ Cần cải tiến:
- [Ví dụ: "Body có thể chia Phase rõ hơn (Analysis / Generate / Output)"]
- [Ví dụ: "References template có thể thêm ví dụ cụ thể"]

✨ Suggestion:
[1-2 ý tưởng để nâng cấp thêm]

Đánh giá tổng thể: [Excellent / Good / Fair / Needs work]
```

3. **B gửi feedback về cho A** (dùng form trên)

4. **Swap lại:** A review skill của B

---

## Tài liệu cần thiết

### Upgrade Checklist

```
# UPGRADE CHECKLIST: Nâng cấp Skill

**Họ tên:** ________________________
**Skill name:** ____________________
**Partner (peer reviewer):** __________

---

## Bước 1: Tạo folder references/

- [ ] Tạo thư mục: `[skill-name]/references/`
- [ ] Tạo file tham khảo: `references/[reference-name].md`

Tên file references (ít nhất 1):
1. _________________________________
2. _________________________________

---

## Bước 2: Tách kiến thức chuyên sâu

- [ ] Di chuyển chi tiết từ SKILL.md body → references/
- [ ] SKILL.md bây giờ < 20 dòng (trước đó > 20 dòng?)
- [ ] References file(s) có chi tiết đầy đủ

Content ở references (ví dụ):
_________________________________

---

## Bước 3: Áp dụng progressive disclosure

- [ ] SKILL.md body: ngắn gọn, hướng dẫn từng bước (không chi tiết)
- [ ] SKILL.md có reference link: "xem `references/xxx.md`"
- [ ] Agent sẽ đọc references khi cần (không phải đọc hết ngay)

---

## Bước 4: Thêm multi-step workflow (optional)

- [ ] Body chia Phase: Phase 1 / Phase 2 / Phase 3
  (hoặc Step 1 / Step 2 / ...)
- [ ] Mỗi Phase/Step là sub-workflow rõ ràng

Phases/Steps của skill:
1. ________________________________
2. ________________________________
3. ________________________________

---

## Bước 5: Test lại

- [ ] Deploy nâng cấp skill vào Cowork
- [ ] Test prompt kích hoạt skill
- [ ] Output tốt / tốt hơn lần trước?

Output feedback:
_________________________________

---

## Peer Review Result

**Partner review:** [Excellent / Good / Fair / Needs work]

**Feedback từ partner:**

✓ Strengths:
_________________________________

⚠️ To improve:
_________________________________

✨ Suggestions:
_________________________________

---

## Action Items (lần tới)

- [ ] Sửa: [gì?]
- [ ] Thêm: [gì?]
- [ ] Test lại: [khi nào?]
```

---

### Peer Review Form

```
# PEER REVIEW FORM

**Reviewer:** ___________________
**Skill reviewed:** ______________
**Date:** ___________________

---

## Checklist

| Tiêu chí | ✓ | ⚠️ | ✗ | Ghi chú |
|----------|---|----|----|----------|
| Tên: kebab-case | | | | |
| Description: 2 dòng, pushy | | | | |
| SKILL.md: Ngắn gọn | | | | |
| Folder references/: Có | | | | |
| Progressive disclosure: Rõ ràng | | | | |
| Multi-step workflow: Rõ ràng | | | | |
| Test: Output tốt | | | | |

---

## Feedback Chi Tiết

**Điểm mạnh (Strengths):**
1. ___________________________
2. ___________________________

**Cần cải tiến (Areas for improvement):**
1. ___________________________
2. ___________________________

**Gợi ý (Suggestions):**
___________________________

**Đánh giá tổng thể:**
⭐⭐⭐⭐⭐ (5 stars) / ⭐⭐⭐⭐ (4) / ⭐⭐⭐ (3)

---

## Signature

Reviewer: ____________________ (Date: ____)
Skill owner: __________________ (Received feedback: ____)
```

---

## Debrief / Kết nối nội dung

**Sau peer review, giáo viên tóm tắt:**

> "Skill từ buổi 3 của bạn vừa được **nâng cấp** từ đơn giản → complex. Bạn thêm:
>
> 1. **References folder** — tài liệu chuyên sâu agent đọc khi cần (không bắt buộc)
> 2. **Progressive disclosure** — SKILL.md ngắn, chi tiết ở reference (dễ đọc)
> 3. **Multi-step workflow** — từng phase tuần tự (agent không confused)
>
> Đây chính là cách **enterprise skills** hoạt động. Bạn làm **chính xác như course-designer skill** mà chúng ta demo lúc nãy.
>
> Peer feedback của bạn không phải để 'chỉ trích' — là để bạn thấy: **bạn vừa tạo thứ có mệnh giá.**"

**Câu hỏi nối tiếp:**

> "Sau buổi 5, khi team bạn có 5-10 skills như này, điều gì sẽ thay đổi trong cách làm việc? Bạn sẽ tiết kiệm bao nhiêu giờ/tuần?"

---

## Lưu ý dành cho giáo viên

1. **Demo course-designer là "meta moment":** Nhấn mạnh: "Skill tạo khóa học này là ví dụ. Nó phức tạp, nhưng **cấu trúc giống hệt skill của bạn** — SKILL.md + references + workflow."

2. **Pair assignment:** Ghép thông minh — không cần technical skill bằng nhau, nhưng nên mix: business user + slightly technical hoặc balanced pairs.

3. **Peer review là learning:** Không phải marking test. Feedback **constructive**: "Điểm mạnh + Cần cải tiến + Gợi ý." Trainer model positive feedback.

4. **Progressive disclosure là concept chính:** Nhắc lại multiple times:
   - "Bạn không cần đọc SKILL.md dài 30 trang. Ngắn thôi — khi cần thêm chi tiết, đọc references."
   - Analogy: "Như cookbook — cover page ngắn (công thức), khi cần kỹ thuật, mở appendix."

5. **Multi-step workflow:** Nếu skill là simple task (1-2 bước), không cần chia Phase. Nhưng nếu complex (5+ bước), nên chia — dễ agent follow.

6. **Time check:** Nếu ai không xong full nâng cấp trong 7 phút, hướng "upload draft, tiếp tục ngoài giờ, show kết quả buổi 5."

---

## Success Criteria

Hoạt động thành công khi:
- ✓ Tối thiểu **70%** học viên tạo folder `references/` với ít nhất 1 file
- ✓ Tối thiểu **80%** SKILL.md được rút gọn (dưới 20 dòng, chi tiết ở references)
- ✓ **100%** peer review được hoàn thành (A review B, B review A)
- ✓ Feedback peer **constructive** (có điểm mạnh + cần cải tiến)
- ✓ Học viên hiểu **progressive disclosure** vs **multi-step workflow** (có thể giải thích nếu hỏi)
- ✓ Mỗi skill nâng cấp đã test lại → output tốt hơn hoặc tương đương buổi 3
- ✓ Kết thúc buổi, học viên có **upgraded skill** + **peer feedback** để tiếp tục cải tiến
