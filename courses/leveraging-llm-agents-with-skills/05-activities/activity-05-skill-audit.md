# Hoạt động 5: "Skill Audit"

**Loại hoạt động:** Peer Review + Self-Assessment
**Thời gian:** 10 phút (0:15-0:25 trong buổi 5)
**Chuẩn bị:** Skill từ buổi 4 + 5-criterion checklist + pair assignments

---

## Mục tiêu

Sau hoạt động này, học viên có thể:
- **Đánh giá** chất lượng skill của chính mình bằng 5-criterion checklist
- **So sánh** tự đánh giá (self-assessment) vs đánh giá của bạn (peer assessment)
- **Xác định** điểm yếu cần cải tiến
- **Phát triển kỹ năng meta-cognitive:** tự nhận thức về chất lượng công việc
- **Hiểu được:** Skill tốt không phải "perfect" — là **trigger đúng, output tốt, tái sử dụng được**

---

## Thời gian

**Tổng:** 10 phút
- Giới thiệu 5-criterion checklist: 2 phút
- Tự đánh giá skill (3 phút): Mỗi người check danh sách của mình
- Cross-evaluation (3 phút): Swap partner, đánh giá chéo
- So sánh + Debrief (2 phút): Nhận xét sự khác biệt self vs peer

---

## Chuẩn bị

**Cho giáo viên:**
1. Chuẩn bị **5-criterion checklist** (dưới đây)
2. Chuẩn bị **pair assignment** (ghép cặp học viên như buổi 4, hoặc swap)
3. Chuẩn bị slide/handout giải thích 5 tiêu chí

**Cho học viên:**
- Lấy **upgraded skill từ buổi 4** (SKILL.md + references/)
- Sẵn sàng **swap skill với partner**
- Mở **5-criterion checklist** để check

**Tài liệu cần thiết:**
- 5-Criterion Quality Checklist (dưới đây)
- Self-Assessment Form
- Cross-Evaluation Form

---

## Hướng dẫn từng bước

### Bước 1: Giới thiệu 5 tiêu chí (2 phút)

**Giáo viên nói:**

> "Bây giờ chúng ta sẽ **đánh giá chất lượng skill**. Không phải bằng cách 'tôi thích / không thích' — mà bằng **5 tiêu chí cụ thể**.
>
> 5 tiêu chí này là những đặc điểm của **skill tốt**. Hãy nhớ: skill không cần perfect — nhưng phải đạt 5 tiêu chí này."

**Giáo viên giải thích từng tiêu chí:**

---

#### **Tiêu chí 1: Trigger Accuracy (Độ chính xác trigger)**

**Định nghĩa:** Description của skill **đủ rõ** để agent kích hoạt nó **đúng lúc**, không nhầm với skill khác.

**Ví dụ tốt:**
- "Viết báo cáo tiến độ dự án hàng tuần từ task list" ✓
  → Rõ ràng, khi nào dùng, output là gì

**Ví dụ tệ:**
- "Process task data" ✗
  → Chung chung, agent không biết là báo cáo hay gì

**Cách check:**
- Đọc description, bạn có hiểu ngay: khi nào dùng skill, output là gì?
- Có khả năng agent confusion với skill khác không?

---

#### **Tiêu chí 2: Output Quality (Chất lượng output)**

**Định nghĩa:** Khi skill được kích hoạt, **output có đạt expectations** không? Có usable, polished, sẵn sàng dùng không?

**Ví dụ tốt:**
- Input: Task list 10 task
- Output: 1-page report, 5 section, risks highlighted, ready to send ✓

**Ví dụ tệ:**
- Input: Task list
- Output: Rough notes, không format, cần edit lại 30% ✗

**Cách check:**
- Test skill với input thực tế
- Output có format đúng không? (pptx, docx, xlsx nếu yêu cầu)
- Output có detail đúng không?
- Bạn có thể dùng output ngay, hay cần sửa nhiều?

---

#### **Tiêu chí 3: Reusability (Tái sử dụng được)**

**Định nghĩa:** Skill có **reusable cho nhiều tình huống** không? Hay chỉ tính toán cho 1 trường hợp cụ thể?

**Ví dụ tốt:**
- Skill "project-status-report" dùng được cho mọi project: A, B, C, ... ✓

**Ví dụ tệ:**
- Skill hardcode: "Viết báo cáo cho Project X" — chỉ dùng được cho Project X ✗

**Cách check:**
- Nếu bạn dùng skill lần 2, lần 3 với dữ liệu khác, nó có hoạt động không?
- Skill có động hoạt (flexible) hay cứng nhắc (rigid)?
- Có cần sửa SKILL.md khi dùng cho input khác không?

---

#### **Tiêu chí 4: Maintainability (Dễ bảo trì)**

**Định nghĩa:** Nếu bạn **quay lại skill 3 tháng sau**, bạn có thể **dễ dàng cập nhật hoặc fix** không?

**Ví dụ tốt:**
- SKILL.md clear, references rõ ràng, dễ hiểu nếu quay lại ✓

**Ví dụ tệ:**
- SKILL.md confusing, không có comment, reference files lộn xộn ✗

**Cách check:**
- Đọc SKILL.md của skill khác (không phải của bạn) — có hiểu cách hoạt động không?
- Nếu cần thêm feature (ví dụ: thêm 1 bước mới), bạn có thể sửa dễ không?
- Structure folder có hợp lý không? (SKILL.md + references/ có rõ ràng không?)

---

#### **Tiêu chí 5: Scope (Phạm vi — không quá rộng, không quá hẹp)**

**Định nghĩa:** Skill giải quyết **1 công việc focused**, không "ý tưởng lớn quá mà làm không nổi" hoặc "quá hẹp quá chi tiết".

**Ví dụ tốt:**
- "Viết báo cáo tiến độ hàng tuần" → focused, not too broad, not too narrow ✓

**Ví dụ tệ (quá rộng):**
- "Quản lý toàn bộ dự án" ✗ (quá to, skill không xử lý được)

**Ví dụ tệ (quá hẹp):**
- "Viết từ 'Hoàn thành' trong tiếng Anh" ✗ (quá chi tiết, chỉ 1 phần nhỏ của công việc)

**Cách check:**
- Skill này giải quyết 1 công việc hoàn chỉnh (end-to-end) không? Hay chỉ 1 phần?
- Scope có quá lớn (agent không làm nổi) không?
- Scope có quá nhỏ (không đáng tạo skill) không?

---

### Bước 2: Tự đánh giá skill của chính mình (3 phút)

**Giáo viên nói:**

> "Bây giờ bạn sẽ **đánh giá skill của chính mình** — không ai ngoài. Objective: bạn nhận thức được điểm mạnh và điểm yếu.
>
> Dùng checklist dưới đây. Mỗi tiêu chí, check: Tốt / Cần cải tiến / Tệ."

**Flow:**

1. Lấy **skill upgraded từ buổi 4** (SKILL.md + references/)
2. Mở **self-assessment form** (dưới đây)
3. Dùng **5 tiêu chí** để check từng cái:

---

#### **Self-Assessment Form (Học viên điền)**

```
SELF-ASSESSMENT FORM

Họ tên: _______________
Skill: _______________
Ngày đánh giá: _______________

---

## Tiêu chí 1: Trigger Accuracy

Description có đủ rõ để agent kích hoạt đúng không?
- [ ] Tốt (Rõ ràng, khi nào dùng, output là gì)
- [ ] Cần cải tiến (Hơi chung chung)
- [ ] Tệ (Confusing, agent có thể nhầm)

Tự nhận xét: ________________________

---

## Tiêu chí 2: Output Quality

Output của skill có đạt expectations không?
- [ ] Tốt (Polished, usable, ready to go)
- [ ] Cần cải tiến (70% tốt, cần sửa 1-2 chỗ)
- [ ] Tệ (Rough, cần sửa nhiều)

Test evidence: Input: _____ → Output: _____
Tự nhận xét: ________________________

---

## Tiêu chí 3: Reusability

Skill có reusable cho nhiều situations không?
- [ ] Tốt (Dynamic, dùng được cho nhiều inputs)
- [ ] Cần cải tiến (Dùng được nhưng hơi rigid)
- [ ] Tệ (Chỉ dùng được cho 1 case cụ thể)

Tự nhận xét: ________________________

---

## Tiêu chí 4: Maintainability

Nếu quay lại 3 tháng sau, dễ dàng update không?
- [ ] Tốt (Clear, well-structured, dễ modify)
- [ ] Cần cải tiến (Có thể hiểu nhưng không obvious)
- [ ] Tệ (Confusing, khó modify)

Tự nhận xét: ________________________

---

## Tiêu chí 5: Scope

Phạm vi có vừa (không quá rộng, không quá hẹp)?
- [ ] Tốt (1 công việc focused, end-to-end)
- [ ] Cần cải tiến (Hơi rộng hoặc hơi hẹp)
- [ ] Tệ (Quá to hoặc quá nhỏ)

Tự nhận xét: ________________________

---

## Tổng cộng

Số "Tốt" _____ / 5
Số "Cần cải tiến" _____ / 5
Số "Tệ" _____ / 5

Điểm mạnh tổng thể:
_________________________

Điểm yếu tổng thể:
_________________________

Hành động cải tiến:
_________________________
```

---

### Bước 3: Cross-Evaluation (3 phút)

**Giáo viên nói:**

> "Bây giờ bạn sẽ **swap skill với partner**. Partner sẽ đánh giá skill của bạn **từ góc độ bên ngoài** — đánh giá khách quan hơn self.
>
> Bạn có **3 phút** để đánh giá. Dùng cùng **5 tiêu chí**."

**Flow:**

1. **Swap:** A gửi SKILL.md + references/ cho B, B gửi cho A
2. **B đánh giá skill của A** dùng **Cross-Evaluation Form** (dưới)
3. **Tương tự A đánh giá skill của B**
4. **Swap form lại:** A nhận feedback của B

---

#### **Cross-Evaluation Form (Peer điền)**

```
CROSS-EVALUATION FORM

Evaluator: _______________
Skill reviewed: _______________
Skill creator: _______________
Date: _______________

---

## Tiêu chí 1: Trigger Accuracy

- [ ] Tốt
- [ ] Cần cải tiến
- [ ] Tệ

Feedback: ____________________________

---

## Tiêu chí 2: Output Quality

- [ ] Tốt
- [ ] Cần cải tiến
- [ ] Tệ

Feedback: ____________________________

---

## Tiêu chí 3: Reusability

- [ ] Tốt
- [ ] Cần cải tiến
- [ ] Tệ

Feedback: ____________________________

---

## Tiêu chí 4: Maintainability

- [ ] Tốt
- [ ] Cần cải tiến
- [ ] Tệ

Feedback: ____________________________

---

## Tiêu chí 5: Scope

- [ ] Tốt
- [ ] Cần cải tiến
- [ ] Tệ

Feedback: ____________________________

---

## Tổng đánh giá

Điểm mạnh:
_________________________

Cần cải tiến:
_________________________

Gợi ý:
_________________________

Đánh giá tổng thể:
⭐⭐⭐⭐⭐ / ⭐⭐⭐⭐ / ⭐⭐⭐

---

Evaluator signature: _______________ (Date: ____)
```

---

### Bước 4: So sánh Self vs Peer (2 phút)

**Giáo viên hỏi (pick 2-3 người):**

1. **"Đánh giá của bạn vs partner có giống không? Khác ở chỗ nào?"**

   **Dự kiến trả lời:**
   - "Mình đánh giá output quality là 'Tốt', nhưng partner nói 'Cần cải tiến'. Partner thấy format không match expectation."
   - "Mình rating Trigger accuracy là khó, partner nói rõ. Sự khác biệt: mình quá strict, partner objective hơn."

2. **"Có feedback nào từ partner bất ngờ không?"**

   **Dự kiến:**
   - "Bất ngờ là partner thấy reusability tốt — mình nghĩ rigid hơn."
   - "Partner suggest thêm constraint về scope."

3. **"Mình sẽ cải tiến điểm nào sau workshop này?"**

   **Dự kiến:**
   - "Trigger accuracy — sẽ viết rõ hơn description."
   - "Output quality — thêm example trong references."

---

## Tài liệu cần thiết

### 5-Criterion Quality Checklist (Poster/Handout)

```
# 5 TIÊU CHÍ ĐÁNH GIÁ SKILL

## 1️⃣ Trigger Accuracy (Độ chính xác trigger)
Description đủ rõ để agent kích hoạt đúng lúc?
- ✓ Rõ ràng → Agent kích hoạt đúng
- ⚠️ Hơi chung chung → Agent có thể nhầm
- ✗ Confusing → Agent nhầm skill

---

## 2️⃣ Output Quality (Chất lượng output)
Output có đạt expectations?
- ✓ Polished, usable, ready to go ngay
- ⚠️ 70% tốt, cần sửa 1-2 chỗ
- ✗ Rough, cần sửa nhiều

---

## 3️⃣ Reusability (Tái sử dụng được)
Dùng được cho nhiều situations?
- ✓ Dynamic, dùng được cho nhiều inputs
- ⚠️ Dùng được nhưng hơi rigid
- ✗ Chỉ dùng được 1 case cụ thể

---

## 4️⃣ Maintainability (Dễ bảo trì)
3 tháng sau quay lại, dễ update?
- ✓ Clear, well-structured, dễ modify
- ⚠️ Có thể hiểu nhưng không obvious
- ✗ Confusing, khó modify

---

## 5️⃣ Scope (Phạm vi)
Vừa không? (không quá rộng, không quá hẹp)
- ✓ 1 công việc focused, end-to-end
- ⚠️ Hơi rộng hoặc hơi hẹp
- ✗ Quá to hoặc quá nhỏ

---

## Skill tốt = Đạt ít nhất 3/5 tiêu chí là "Tốt"
(Không cần perfect — balanced là được)
```

---

## Debrief / Kết nối nội dung

**Sau so sánh, giáo viên tóm tắt:**

> "Các bạn vừa **tự đánh giá + nhận đánh giá từ bạn**. Khác biệt giữa tự đánh giá vs peer đánh giá là bình thường — **bạn thấy rõ hơn yếu điểm của mình khi người khác nhìn**.
>
> Skill của bạn không cần **perfect 5/5**. **Đạt 3/5 là tốt rồi** — focus vào trigger accuracy + output quality + reusability. 2 cái còn lại (maintainability + scope) sẽ improve dần khi bạn dùng lâu.
>
> **Điều quan trọng: bạn nhận thức được** — và biết cải tiến. Đó là mindset của master."

**Kết nối với buổi 6 (buổi cuối):**

> "Buổi tới — **30-Day Skill Adoption Plan** — bạn sẽ lên kế hoạch **đưa skill vào team bạn**. Và bây giờ bạn có **5 tiêu chí** để kiểm tra mỗi skill trước khi chia sẻ với team. Bạn thành **quality gatekeeper** rồi."

---

## Lưu ý dành cho giáo viên

1. **5-criterion không phải "rubric" strict:** Đây là **guideline flexible**. Skill không cần 5/5 "Tốt". Mục tiêu là **awareness** — bạn hiểu skill của bạn ở level nào.

2. **Self vs Peer difference là learning:** Nếu ai khác nhau lớn (tự đánh giá "Tốt", peer "Tệ"), đó là **valuable insight**. Khuyến khích discussion: "Tại sao khác?" không phải "Ai đúng?"

3. **Tone supportive:** Không phải audit = "check xem ai fail". Là **self-awareness + peer feedback** để improve.

4. **Time:** Nếu 3 phút tự đánh giá không đủ, tối đa 4 phút. Cross-evaluation cắt xuống 2 phút nếu cần.

5. **Display results:** Nếu có whiteboard, ghi lên số học viên đạt tốt mỗi tiêu chí — tạo visual. Ví dụ:
   ```
   Trigger Accuracy: 12/16 ✓ Tốt
   Output Quality: 14/16 ✓ Tốt
   Reusability: 10/16 ⚠️ Cần cải tiến
   Maintainability: 13/16 ✓ Tốt
   Scope: 11/16 ⚠️ Cần cải tiến
   ```

6. **Positive framing:** "Reusability chưa tốt" → "Reusability là điểm để cải tiến trong 30 ngày tới" (forward-looking).

---

## Success Criteria

Hoạt động thành công khi:
- ✓ **100%** học viên hoàn thành self-assessment (điền 5 tiêu chí)
- ✓ **100%** peer exchange + cross-evaluation hoàn thành
- ✓ Có **sự khác biệt** giữa self vs peer (tối thiểu 1 tiêu chí khác rating)
- ✓ Feedback peer **constructive** (không phải chỉ trích, có gợi ý cải tiến)
- ✓ Học viên có thể **giải thích 5 tiêu chí** nếu hỏi (không chỉ điền form)
- ✓ Kết thúc hoạt động, mỗi học viên có **self-awareness:** "Skill mình ở level nào, cần cải tiến điểm nào"
- ✓ Transition smooth sang buổi 6: Skill audit là **prerequisite** để lên 30-day plan (quality check trước khi share với team)
