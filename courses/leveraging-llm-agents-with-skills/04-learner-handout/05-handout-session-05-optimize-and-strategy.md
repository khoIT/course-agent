# Session 5: Tối ưu, Chia sẻ & Chiến lược — Từ cá nhân đến tổ chức

**Part of:** [Course Overview](00-handout-overview-and-objectives.md)

---

## PHẦN 7: SKILL QUALITY CHECKLIST

### 5 Tiêu Chí Đánh Giá

#### 1. Trigger Accuracy — Description kích hoạt đúng lúc?

**Tiêu chí:** Skill được kích hoạt khi nào? Description có rõ không?

**Self-assessment:**
- [ ] Description có 1-2 câu, rõ purpose và khi nào dùng
- [ ] Description sử dụng từ khóa (keyword) mà user thường nói
- [ ] Skill không bị confuse với skill khác

**Ví dụ:**
- ✓ Good: "Tóm tắt email dài thành 3 bullet. **Dùng khi muốn nhanh chóng hiểu nội dung.**"
- ✗ Bad: "Email tool"

---

#### 2. Output Quality — Kết quả có đạt tiêu chí không?

**Tiêu chí:** Output có đúng format, đủ nội dung, không có lỗi không?

**Self-assessment:**
- [ ] Output format match description (slide, doc, table...)
- [ ] Output độ dài phù hợp (không quá ngắn, không quá dài)
- [ ] Không có typo, grammar error
- [ ] Content chính xác, không hallucination
- [ ] Output dễ sử dụng ngay (không cần edit nhiều)

**Test:** Dùng skill 3 lần khác nhau, 3 lần kết quả có consistent không?

---

#### 3. Reusability — Người khác dùng được không?

**Tiêu chí:** SKILL.md đủ rõ cho bất kỳ người nào đọc + dùng?

**Self-assessment:**
- [ ] Instruction rõ ràng, không dùng jargon nội bộ
- [ ] Có ví dụ input/output cụ thể
- [ ] Không assume user biết cái gì cụ thể
- [ ] Dễ adapt cho các loại data khác nhau
- [ ] References folder (nếu có) có comment giải thích

**Test:** Cho đồng nghiệp đọc SKILL.md, có hiểu ngay không?

---

#### 4. Maintainability — Dễ cập nhật không?

**Tiêu chí:** Khi cần thay đổi skill, có dễ update không?

**Self-assessment:**
- [ ] SKILL.md được tổ chức clear (header, section)
- [ ] Nếu có references/, từng file có purpose riêng
- [ ] Naming files rõ ràng (references/email-template.md không phải references/v2.md)
- [ ] Nếu update 1 phần, không ảnh hưởng phần khác
- [ ] Có version control (git) track được ai change cái gì

**Test:** Update 1 instruction, có break cái khác không?

---

#### 5. Scope — Không quá rộng, không quá hẹp?

**Tiêu chí:** Scope skill có balance không?

**Self-assessment:**
- [ ] Skill focus vào 1 task, không cover mọi thứ
- [ ] Nhưng cũng không quá hẹp (chỉ cover 1 very specific case)
- [ ] Nếu quá rộng → split thành 2+ skills
- [ ] Nếu quá hẹp → merge vào skill khác hoặc expand phạm vi

**Ví dụ scope:**
- ✗ Quá rộng: "email-management" (cover tất cả email task)
  - → Split: email-summarizer, email-draft, email-classifier
- ✗ Quá hẹp: "email-summarizer-for-HR-emails-only"
  - → Expand: "email-summarizer" (work cho tất cả email types)
- ✓ Just right: "email-summarizer" (tóm tắt email, general purpose)

---

### Self-Evaluation Template

Dùng template này để tự đánh giá skill của bạn:

```markdown
# Skill Quality Self-Evaluation

**Skill name:** [tên skill của bạn]
**Evaluated on:** [ngày]

## Scores

| Tiêu chí | Score | Evidence | Cần cải thiện? |
|----------|-------|----------|---------------|
| 1. Trigger Accuracy | ☐ Pass ☐ NI ☐ NA | Description: "[copy description]" | |
| 2. Output Quality | ☐ Pass ☐ NI ☐ NA | Test 3x, result [consistent/inconsistent] | |
| 3. Reusability | ☐ Pass ☐ NI ☐ NA | Peer reviewed by: [name] | |
| 4. Maintainability | ☐ Pass ☐ NI ☐ NA | File structure: [describe] | |
| 5. Scope | ☐ Pass ☐ NI ☐ NA | Scope: [too broad / just right / too narrow] | |

**Summary:**
- ✓ Passes: [bao nhiêu tiêu chí]
- ⚠️ Needs Improvement: [bao nhiêu tiêu chí]
- ❌ Not Addressed: [bao nhiêu tiêu chí]

**Action items để improve:**
1. [cái gì cần fix đầu tiên]
2. [cái gì cần fix thứ hai]

**Ready to share?** ☐ Yes ☐ No (explain why)
```

---

## PHẦN 8: KẾ HOẠCH HÀNH ĐỘNG CÁ NHÂN

### Mẫu "My Top 3 Skills to Create"

Sau khóa học, xác định 3 skills ưu tiên bạn sẽ tạo:

```markdown
# My Skill Adoption Plan

## 1️⃣ Skill Thứ Nhất

**Tên:** [tên skill]
**Lý do tạo:** [Công việc nào bạn làm lặp lại mỗi tuần?]
**Task description:** [Mô tả rõ cái mà skill này phải làm]
**Expected output:** [Output là gì?]
**Expected time saved:** [Tiết kiệm bao nhiêu phút/tuần?]
**Target audience:** [Ai dùng? Chỉ bạn hay cả team?]

**Timeline:**
- Week 1: Viết SKILL.md draft
- Week 2: Test + iterate
- Week 3: Deploy vào Cowork
- Week 4+: Dùng hàng ngày, collect feedback

---

## 2️⃣ Skill Thứ Hai

**Tên:** [tên skill]
**Lý do tạo:** [...]
[Lặp lại template trên]

---

## 3️⃣ Skill Thứ Ba

**Tên:** [tên skill]
**Lý do tạo:** [...]
[Lặp lại template trên]

---

## Dependencies & Blockers

- Skill 1 cần hoàn thành trước Skill 2? (Yes/No)
- Có điều gì block bạn không? (Cần học thêm? Cần data?)

## Success Metrics

- Sau 30 ngày, bạn sẽ:
  - ☐ Tạo được 3 skills
  - ☐ Dùng skills này >5 lần mỗi skill
  - ☐ Rút gọn được [X%] thời gian cho công việc
  - ☐ Chia sẻ skills cho ≥2 đồng nghiệp
```

---

### 30-Day Adoption Plan Template (Individual)

Lập kế hoạch 30 ngày áp dụng skills vào công việc thực tế:

```markdown
# 30-Day Skill Adoption Plan

**Name:** [tên bạn]
**Team/Department:** [phòng ban]
**Start date:** [ngày bắt đầu]

---

## Week 1: Learn & Design

**Goal:** Hiểu rõ 3 skills & thiết kế chi tiết

| Day | Task | Status |
|-----|------|--------|
| 1-2 | Review course materials, identify repetitive tasks | ☐ |
| 3 | Design Skill 1: Write description + plan structure | ☐ |
| 4 | Design Skill 2: Write description + plan structure | ☐ |
| 5 | Design Skill 3: Write description + plan structure | ☐ |

---

## Week 2: Build

**Goal:** Tạo 3 skills xong

| Day | Task | Status |
|-----|------|--------|
| 6-7 | Build Skill 1: Write SKILL.md + test | ☐ |
| 8-9 | Build Skill 2: Write SKILL.md + test | ☐ |
| 10 | Build Skill 3: Write SKILL.md + test | ☐ |

---

## Week 3: Deploy & Test

**Goal:** Dùng skills vào công việc hàng ngày

| Day | Task | Status |
|-----|------|--------|
| 11-14 | Use Skill 1 daily, collect feedback | ☐ |
| 15-17 | Use Skill 2 daily, iterate | ☐ |
| 18-19 | Use Skill 3 daily, refine | ☐ |

---

## Week 4: Scale & Share

**Goal:** Chia sẻ skills & plan team adoption

| Day | Task | Status |
|-----|------|--------|
| 20-21 | Document lessons learned | ☐ |
| 22-24 | Share 3 skills với ≥2 teammates, get feedback | ☐ |
| 25-28 | Refine based on feedback | ☐ |
| 29-30 | Plan next batch of skills (for next 30 days) | ☐ |

---

## Metrics to Track

- **Skill creation:** 3/3 skills completed? (timeline)
- **Skill usage:** Usage count per skill in Week 3-4
- **Time saved:** Estimated hours saved per week
- **Quality:** Self-evaluation score (pass all 5 criteria?)
- **Adoption:** # teammates who adopt your skills

---

## Reflection

**After 30 days:**
- ✓ What worked well? (Which skills are most useful?)
- ⚠️ What was hard? (Pain points during creation?)
- 🎯 Next priorities? (What 3 skills to create next?)
```

---

## PHẦN 9: BƯỚC TIẾP THEO

### 3 Bước Tiếp Theo

#### 1. Hành động trong 7 ngày
Tạo **1 skill đầu tiên** (đơn giản):
- Chọn 1 công việc lặp lại hàng tuần
- Viết SKILL.md theo template
- Test 3 lần
- Dùng trong công việc thực tế

#### 2. Mở rộng trong 30 ngày
Tạo **2-3 skills tiếp theo** dùng 30-day plan
- Week 1: Design
- Week 2: Build
- Week 3-4: Deploy & gather feedback

#### 3. Chia sẻ với team trong 90 ngày
- Lập skill library cho phòng ban
- Chia sẻ skills & document cách dùng
- Khích lệ teammates tạo skills riêng
- Build skill culture trong team

---

**Next:** [Templates & References](06-handout-templates-and-references.md)
