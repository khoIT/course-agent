# Hoạt động 3: "Build Your First Skill"

**Loại hoạt động:** Thực hành tự do có hỗ trợ
**Thời gian:** 20 phút (0:20-0:40 trong buổi 3)
**Chuẩn bị:** Template SKILL.md + Cowork access + hướng dẫn từng bước

---

## Mục tiêu

Sau hoạt động này, học viên có thể:
- **Chọn** 1 tác vụ lặp lại từ danh sách buổi 1 để tạo skill
- **Viết** file SKILL.md hoàn chỉnh với frontmatter YAML và body instructions
- **Đặt tên** skill theo convention kebab-case
- **Viết description** "pushy" đủ để trigger agent đúng lúc
- **Deploy** skill vào Cowork và **test** nó hoạt động
- **Cảm nhận** được: "Tôi vừa tạo 1 chuyên gia AI!"

---

## Thời gian

**Tổng:** 20 phút
- Giới thiệu + demo (5 phút): Giáo viên demo live tạo 1 skill đơn giản
- Thực hành (12 phút): Mỗi học viên viết skill riêng
- Show & Tell (3 phút): 3-4 người chia sẻ skill mình tạo

---

## Chuẩn bị

**Cho giáo viên:**
1. Chuẩn bị **template SKILL.md** (dưới đây) để học viên copy-paste
2. Chuẩn bị máy của bạn để **demo live** tạo 1 skill đơn giản trong Cowork
3. Chuẩn bị **checklist "Skill đã hoàn chỉnh"** để học viên tự-check

**Cho học viên:**
- Mở sẵn **Cowork**
- Copy template SKILL.md vào text editor (VS Code, Notepad, Google Docs)
- Sẵn sàng chọn **1 tác vụ** từ danh sách Activity 1

**Tài liệu cần thiết:**
- Template SKILL.md (dưới đây)
- Checklist "Skill đã hoàn chỉnh?"
- Cowork instance

---

## Hướng dẫn từng bước

### Bước 1: Demo Live — Tạo skill "email-summarizer" (5 phút)

**Giáo viên share màn hình + giải thích:**

**Phần 1 — Chọn tên skill (1 phút):**

> "Tôi sẽ tạo 1 skill để tóm tắt email dài. Tôi gọi nó là... 'email-summarizer'. Đó là tên skill — luôn luôn **kebab-case** (chữ thường, dùng dấu `-` thay vì space). Không dùng CamelCase, không dùng underscore."

**Phần 2 — Mở template + điền frontmatter YAML (2 phút):**

Giáo viên mở file text và điền:

```yaml
---
name: email-summarizer
description: |
  Tóm tắt email dài thành 1 đoạn ngắn gọn 3-5 dòng.
  Dùng khi bạn nhận email dài và cần hiểu nhanh nội dung chính.
---
```

**Giáo viên nói:**

> "Phần này gọi là **frontmatter YAML**. Nó có 2 trường:
> - **name**: Tên skill, kebab-case
> - **description**: 2 dòng, viết **bằng đúng cách agent sẽ kích hoạt skill**. Khi bạn nói 'tóm tắt email', description này phải xuất hiện trong prompt."

**Phần 3 — Viết body instructions (2 phút):**

Giáo viên tiếp tục gõ:

```markdown
---
name: email-summarizer
description: |
  Tóm tắt email dài thành 1 đoạn ngắn gọn 3-5 dòng.
  Dùng khi bạn nhận email dài và cần hiểu nhanh nội dung chính.
---

# Hướng dẫn

Khi nhận email, bạn hãy:

1. **Đọc email từ đầu đến cuối** — hiểu context (ai gửi, gửi về cái gì)
2. **Xác định 3 ý chính** — main point + 2 supporting points
3. **Viết tóm tắt** — 3-5 dòng, dùng từ đơn giản, rõ ràng
4. **Output:** Tóm tắt + 1 câu khuyến nghị (reply hay forward?)

Ví dụ:
- Email dài từ: "Khách hàng X gửi email phàn nàn về sản phẩm Y..."
- Tóm tắt: "Khách hàng X không hài lòng về delivery time. Cần reply trong 24h. Khuyến nghị: gửi apology + discount voucher."
```

**Giáo viên nói thêm:**

> "Body là **instructions cho agent**. Bạn viết rõ ràng từng bước. Không viết academic, viết pragmatic — agent cần biết **chính xác làm gì**."

**Kết thúc demo:**

> "Done! Đó là 1 skill hoàn chỉnh. 5 phút, 20 dòng code. Nó không phức tạp. Bạn KHÔNG cần biết Python hay JavaScript."

---

### Bước 2: Học viên thực hành (12 phút)

**Giáo viên nói:**

> "Bây giờ bạn sẽ tạo skill riêng. Mỗi bạn có **12 phút**. Follow 4 bước:
>
> 1. **Chọn tác vụ** từ danh sách Activity 1 (công việc lặp lại)
> 2. **Copy template** SKILL.md tôi vừa gửi
> 3. **Điền:** name, description, body instructions
> 4. **Test trong Cowork:** Deploy skill → Gõ prompt kích hoạt → Check output
>
> Tôi sẽ đi vòng từng người check xem bạn đang làm gì. Nếu bị stuck, hãy raise hand."

**Học viên làm từng bước:**

---

#### **BƯỚC 2.1: Chọn tác vụ (1 phút)**

Mỗi học viên nhìn lại danh sách Activity 1 — chọn **1 công việc lặp lại** mà họ muốn tạo skill.

**Ví dụ:**
- Viết báo cáo tiến độ dự án
- Tóm tắt cuộc họp
- Tạo email follow-up với khách hàng
- Phân tích CSV bán hàng
- Tạo checklist project

**Ghi vào worksheet:** Tác vụ chọn: _________________

---

#### **BƯỚC 2.2: Copy template SKILL.md (1 phút)**

Học viên copy template dưới đây vào text editor hoặc Google Doc:

```yaml
---
name: [REPLACE-WITH-KEBAB-CASE-NAME]
description: |
  [REPLACE: 1-2 dòng mô tả. Viết bằng ngôn ngữ bình thường, không kỹ thuật.
  Bạn hãy viết: "Khi nào dùng?" và "Output là gì?"]
---

# Hướng dẫn

[REPLACE: Viết các bước cụ thể. Không quá 10 bước, không quá 5 dòng/bước.]

## Ví dụ

[REPLACE: Input thực tế → Output thực tế]
```

---

#### **BƯỚC 2.3: Điền template (7 phút)**

Học viên điền **3 phần:**

**Phần A — Chọn tên (1 phút):**

Quyết định tên skill theo convention **kebab-case**:
- ✓ good: `project-status-report`, `customer-email-template`, `csv-sales-analyzer`
- ✗ bad: `ProjectStatusReport`, `customer_email_template`, `Report Generator`

**Phần B — Viết description (2 phút):**

Viết 2 dòng mô tả **"pushy"** (đủ để agent kích hoạt đúng):

**Nguyên tắc:**
- Dòng 1: "Cái gì + khi nào dùng"
- Dòng 2: "Output/lợi ích"
- Viết bằng ngôn ngữ người bình thường, **không kỹ thuật**
- Tránh jargon: không viết "execute script" hay "NLP preprocessing"

**Ví dụ tốt:**
```
Viết báo cáo tiến độ dự án hàng tuần từ task list.
Dùng khi bạn cần tóm tắt tiến độ nhanh cho manager.
```

**Ví dụ tệ:**
```
Initialize project analytics pipeline via aggregated status inputs.
```

**Phần C — Viết body instructions (4 phút):**

Viết **4-7 bước** cho agent. Mỗi bước:
- **Rõ ràng:** Agent hiểu chính xác làm gì
- **Tuần tự:** Bước 1 → 2 → 3
- **Pragmatic:** Tập trung vào OUTPUT, không lý thuyết

**Template cho body:**

```markdown
# Hướng dẫn

1. **[Action]:** [Chi tiết cụ thể]
2. **[Action]:** [Chi tiết cụ thể]
...
```

**Ví dụ hoàn chỉnh:**

```markdown
# Hướng dẫn

Khi viết báo cáo tiến độ, bạn hãy:

1. **Đọc task list:** Lấy tất cả task từ input
2. **Phân loại:** Hoàn thành / Đang làm / Chưa bắt đầu
3. **Viết tóm tắt:** Mỗi category 2-3 dòng, highlight risks/blockers
4. **Format:** Heading rõ, bullet points, số hóa progress (3/10 done)
5. **Tone:** Chuyên nghiệp, ngắn gọn, focus vào next steps

## Ví dụ

Input: Task list Excel (15 task)
Output:
---
WEEKLY STATUS — Week 3/2026

✅ Completed (4):
- Design mockup v1 (approved by PM)
- Customer interview round 1 (5 interviewees)

⏳ In Progress (8):
- Development sprint (70% done, 1 bug blocking)
- Marketing collateral (waiting for design team)

⚠️ Risks:
- Development bug may slip deadline by 2 days
- Need budget approval for freelancer design (pending CFO)

Next: Code review on Friday, push to staging Monday.
```

---

#### **BƯỚC 2.4: Deploy & Test trong Cowork (3 phút)**

Học viên làm:

1. **Lưu file SKILL.md** trong máy (hoặc copy vào text editor của Cowork)
2. **Mở Cowork** → Drag-and-drop file SKILL.md hoặc tạo new skill
3. **Gõ prompt kích hoạt:**
   ```
   Hãy sử dụng skill [skill-name] để [tác vụ cụ thể của tôi].

   Input: [data/context]
   Output mong muốn: [format/requirements]
   ```
4. **Chạy prompt** → Xem output
5. **Check:** Output có đúng format + tôi có hài lòng không?

**Nếu output không tốt:** Sửa description hoặc body, test lại

---

### Bước 3: Show & Tell (3 phút)

**Giáo viên gọi 3-4 học viên:**

> "Ai muốn chia sẻ skill mình vừa tạo? Nói tên skill + tác vụ nó giải quyết."

**Với mỗi skill, giáo viên feedback:**

1. **Description có "pushy" không?** Có giúp agent kích hoạt đúng lúc không?
2. **Body có rõ ràng không?** Agent có hiểu từng bước không?
3. **Test output có tốt không?** Output match mong muốn?

**Feedback template:**

> "Skill [tên] của bạn tốt. Tôi thích description: '[quote]' — rất rõ. Body bước 3 có thể chi tiết thêm: thay vì 'viết tóm tắt' → viết rõ 'viết tóm tắt dưới 50 từ, highlight risks, tone professional'."

---

## Tài liệu cần thiết

### Template SKILL.md (copy-paste)

```yaml
---
name: [SKILL-NAME-kebab-case]
description: |
  [LINE 1: Tác vụ + khi nào dùng]
  [LINE 2: Output/kết quả]
---

# Hướng dẫn

[STEP 1: Action + chi tiết]

[STEP 2: Action + chi tiết]

[STEP 3: Action + chi tiết]

[... thêm bước nếu cần, max 7 bước]

## Ví dụ

Input: [Cái gì bạn gửi cho agent]

Output: [Cái gì agent trả về cho bạn]
```

---

### Worksheet: "Build Your First Skill"

```
# WORKSHEET: Build Your First Skill
## Hoạt động 3 — Buổi 3

**Họ tên:** _______________________________

---

## BƯỚC 1: Chọn tác vụ

Tác vụ lặp lại bạn chọn:
___________________________________________

Tại sao bạn chọn tác vụ này?
___________________________________________

---

## BƯỚC 2: Điền template

**Tên skill (kebab-case):**
___________________________________________

**Description (2 dòng):**
___________________________________________

___________________________________________

**Body (4-7 bước):** [Viết trực tiếp vào file SKILL.md]

---

## BƯỚC 3: Deploy & Test

**Deployed vào Cowork?** YES / NO

**Gõ prompt kích hoạt?** YES / NO

**Output tốt không? Cần sửa không?** YES / NO / CÓ CẦN SỬA

Nếu cần sửa, sửa phần nào?
___________________________________________

---

## Skill đã hoàn chỉnh?

- [ ] Tên skill: kebab-case ✓
- [ ] Description: 2 dòng, pushy ✓
- [ ] Body: 4-7 bước, rõ ràng ✓
- [ ] Test trong Cowork: output tốt ✓
- [ ] Sẵn sàng chia sẻ trong plenary ✓

---

## Feedback từ giáo viên

[Giáo viên điền sau khi review]

___________________________________________
```

---

### Checklist: "Skill đã hoàn chỉnh?"

Học viên tự-check trước khi gọi giáo viên:

- [ ] **Tên:** Kebab-case (chữ thường, dấu `-`)
- [ ] **Description:** 2 dòng, viết bằng ngôn ngữ bình thường (không kỹ thuật)
- [ ] **Body:** 4-7 bước, mỗi bước có action + chi tiết
- [ ] **Ví dụ:** Có input + output cụ thể
- [ ] **Test:** Deploy vào Cowork + gõ prompt + output đúng
- [ ] **Output:** Match lý tưởng của bạn (không quá tệ, có thể sửa lần sau)

---

## Debrief / Kết nối nội dung

**Sau Show & Tell, giáo viên tóm tắt:**

> "Các bạn vừa làm cái mà lập trình viên gọi là 'định nghĩa hàm' — nhưng bạn làm bằng **ngôn ngữ bình thường, không code**. Mỗi skill là 1 'chuyên gia' có sẵn trong máy của bạn.
>
> Điều đặc biệt: skill bạn tạo hôm nay có thể **lặp lại được**. Lần thứ 2 bạn cần làm công việc đó, bạn không phải viết lại hướng dẫn — bạn chỉ cần gọi skill. **Tiết kiệm thời gian, nhất quán kết quả.**
>
> Buổi 4 sắp tới, chúng ta sẽ **nâng cấp skill** này — thêm folder `references/`, thêm workflow phức tạp. Nhưng kiến thức cốt lõi bạn vừa học hôm nay là **nền tảng.**"

**Câu hỏi gây tò mò:**

> "Trong team bạn, nếu mỗi người tạo 1 skill cho công việc của mình, bạn sẽ có bao nhiêu skills? 10? 50? Và team có thể **chia sẻ library những skills đó**. Buổi 5 chúng ta sẽ nói về điều này."

---

## Lưu ý dành cho giáo viên

1. **Demo phải live:** Không slide, không video. Live-code ngay trên giáo viên từng bước. Đây là "moment of truth" — học viên thấy "oh, thế là đơn giản nhé!"

2. **Support walk-around:** Đi từng người, hỏi:
   - "Tác vụ bạn chọn là gì?"
   - "Description của bạn viết thế nào? Có 'pushy' không?"
   - "Bước 1 của body là gì?"

   Nếu ai stuck, guide 1-2 bước nhỏ, không phải làm hộ.

3. **Celebrate small wins:** Khi ai deploy thành công, hãy tuyên bố to: "Bạn X vừa tạo skill [name] — tuyệt vời!" Tạo môi trường tích cực.

4. **Output không cần perfect:** Nếu output 70% tốt, đó là thành công. Buổi 4 sẽ cải tiến. Mục tiêu buổi 3 là: **"Tôi tạo được skill"**, không phải **"Tôi tạo skill hoàn hảo"**.

5. **Template chia sẻ:** Gửi template SKILL.md vào chat trước buổi 3, cho phép download hoặc link Google Doc để copy dễ.

6. **Timeout:** Nếu ai deadline vẫn chưa xong, cho thêm 2-3 phút hoặc hướng lưu draft, tiếp tục buổi 4.

---

## Success Criteria

Hoạt động thành công khi:
- ✓ Tối thiểu **80%** học viên hoàn thành file SKILL.md đủ (frontmatter + body)
- ✓ Tối thiểu **70%** learn viên deploy và test skill trong Cowork
- ✓ Tất cả skill có: **tên rõ + description 2 dòng + body 4-7 bước + ví dụ**
- ✓ Feedback Show & Tell cho thấy học viên **hiểu cấu trúc SKILL.md** (tên, description, body là gì)
- ✓ Kết thúc buổi, mỗi học viên có **1 skill cá nhân** đã deploy
- ✓ Học viên cảm thấy: **"Tôi vừa tạo thứ gì đó có thể dùng lại được"** (engagement ✓)
