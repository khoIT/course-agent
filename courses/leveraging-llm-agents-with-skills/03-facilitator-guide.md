# Hướng dẫn Giảng viên — Sử dụng Skills để khai thác sức mạnh LLM Agent

> 5 buổi × 60 phút | Online (Zoom/Teams) | Tiếng Việt
> **Mục tiêu chính:** 30% lý thuyết / 70% thực hành | Chuyển modality mỗi 10-15 phút

---

## Buổi 1: Agent & Skill 101 — "Tại sao prompt đơn lẻ không đủ?"

**Chuẩn bị:**
- Test Cowork login trước 5 phút (để demo không bị delay)
- Chuẩn bị breakout rooms cho Activity 1 (3-4 người/phòng)
- Mentimeter quiz link sẵn sàng

**Cách dẫn dắt (Speaker Notes):**

**Mở đầu (0:00-0:05):** "Mọi người đã dùng AI từ bao giờ? [Chờ phản hồi] Bạn nào nhận thấy: yêu cầu giống nhau nhưng output lần này khác lần kia? [Gọi tên]. Đó chính là vấn đề chúng ta giải quyết hôm nay."

**WHY (0:05-0:15):** Demo trực tiếp: Mở Cowork, yêu cầu "Tạo slide giới thiệu" → chạy 2 lần → chỉ ra sự khác biệt. "Bạn thấy không? Mỗi lần output khác. Agent mà có GPS (tức skill) sẽ luôn đi đúng đường."

**Analogy (ghim lại):**
- **Prompt thường** = hỏi đường người lạ (sai lầm, không nhất quán)
- **Skill** = GPS tích hợp (chính xác, lặp lại được)

**WHAT (0:15-0:25):** Vẽ trên slide 3 khái niệm:
- Agent = "Nhân viên mới vào" (biết dùng tool nhưng chưa biết quy trình)
- Skill = "SOP/Sổ tay" (bảng hướng dẫn chi tiết)
- Tool = "Phần mềm công ty" (Word, Excel, Photoshop...)

**Nói:** "Agent + Skill + Tool = nhân viên hiệu suất cao. Hôm nay, bạn sẽ học cách tạo 'SOP' cho Agent."

**HOW (0:25-0:35):** Demo Cowork:
1. Tạo 1 slide KHÔNG dùng skill (2-3 phút) → output tạm
2. Kích hoạt pptx skill → cùng yêu cầu → output chuyên nghiệp
3. "Thấy chưa? Skill = quy trình rõ ràng."

**Activity 1 (0:35-0:50):** Gửi vào chat link breakout room + worksheet.

Nội dung activity: **"Công việc nào giao được cho Agent?"**
- 3-4 người/phòng
- 5 phút: liệt kê 5 công việc lặp lại hàng ngày
- 5 phút: phân loại (Agent làm được / chưa / cần skill riêng)
- Chia sẻ lại

Khi vào phòng: "Hôm nay bạn là quản lý HR. 5 công việc lặp lại mỗi ngày là gì? [Chờ] Cái nào agent sẽ làm được đúng lần đầu, lần thứ 100?"

**SO WHAT (0:50-0:55):** Tổng kết 3 takeaway:
1. Agent làm việc nhất quán khi có skill
2. Skill = quy trình tường minh
3. Bạn có thể thiết kế skill riêng cho công việc mình

**Quiz (0:55-1:00):** Mở Mentimeter:
1. "Agent là gì? A) Chatbot. B) AI biết dùng tool. C) Phần mềm."
2. "Skill = ? A) Kỹ năng. B) Quy trình rõ ràng. C) Cả hai."
3. "Công việc nào bạn sẽ giao cho agent? [Open-ended]"

**Lưu ý:** Nếu lỗi login Cowork → chuẩn bị screenshot offline. Nếu học viên chậm → gợi ý từ từ, không nói thẳng câu trả lời.

---

## Buổi 2: Sử dụng Skills có sẵn — "Biến AI thành trợ lý đa năng"

**Chuẩn bị:**
- Chuẩn bị câu hỏi ôn tập buổi 1 (gọi 1 người trả lời)
- Test Skill Relay Race tasks trước (Task A, B, C)
- Chuẩn bị link resources cho các skill (pptx, docx, xlsx, pdf, canvas-design, web search)

**Speaker Notes:**

**Ôn tập (0:00-0:05):** Gọi 1 người: "Bạn hãy nhắc lại: Agent, Skill, Tool là gì?" Nếu chính xác → "Tuyệt vời!" Nếu sai → "Gần rồi, để mình bổ sung..."

**WHY (0:05-0:12):** Analogy mới: "Bạn vào nhà hàng, menu có 10 món. Bạn không cần biết nấu ăn → gọi món → ăn. Skill catalog = menu. Agent = bữc ăn của bạn."

**WHAT (0:12-0:22):** Flashcard 6 skills (trên slide):
1. **pptx** → "Khi: tạo slide. Output: deck chuyên nghiệp"
2. **docx** → "Khi: viết báo cáo, memo. Output: định dạng chuẩn công ty"
3. **pdf** → "Khi: đọc/trích xuất PDF. Output: dữ liệu sạch"
4. **xlsx** → "Khi: phân tích data. Output: biểu đồ, bảng pivot"
5. **canvas-design** → "Khi: tạo infographic. Output: hình ảnh chuyên nghiệp"
6. **web search** → "Khi: tìm info mới. Output: data up-to-date"

**Demo chuỗi skill (0:22-0:27):** "Tạo báo cáo tuần cho boss" — demo quy trình:
1. PDF: đọc dữ liệu raw từ report được gửi
2. XLSX: phân tích, tổng hợp con số
3. DOCX: viết báo cáo theo template công ty
4. PPTX: tạo slide tóm tắt cho họp quản lý

**Nói:** "Một prompt, bốn skill, 20 phút hoàn thành. Nếu làm tay → 2 tiếng!"

**Skill Relay Race (0:27-0:47):** Activity tự do có hỗ trợ

Task A (PPTX): "Đọc đoạn text này, tạo slide 3 trang"
Task B (DOCX): "Dựa vào ghi chú cuộc họp này, tạo handout word"
Task C (XLSX): "Phân tích bảng CSV này, tìm insight chính"

Giảng viên: "Hãy chọn task mình thích. Bao giờ xong, repo công việc vào chat để mình xem."

Khi có người hoàn thành → "Tuyệt! Đội bạn nhanh nhất. [Tên person], cảm giác như thế nào? Dễ hay khó?" → Nhấn mạnh không cần kỹ năng kỹ thuật.

**Debrief (0:47-0:52):** Đi vòng breakout rooms hoặc chat:
- Skill nào dễ nhất?
- Khó nhất?
- Bất ngờ nhất?

**SO WHAT (0:52-0:57):** Bảng quyết định trên slide:
```
Công việc → Output mong muốn → Skill
Viết báo cáo → Định dạng, hình ảnh → docx + pptx
Phân tích data → Biểu đồ, bảng → xlsx
...
```

Giao nhiệm vụ: "Điền cho 2 công việc của bạn trong tuần này."

**Preview (0:57-1:00):** "Buổi 3, khi skill có sẵn không đủ... bạn sẽ tự tạo. Hôm nay bạn là 'người dùng skill'. Buổi sau, bạn sẽ thành 'người tạo skill'."

**Lưu ý:** Skill Relay Race là "độc quyền" buổi 2. Nó cho phép học viên hands-on ngay, thấy sự khác biệt trước/sau.

---

## Buổi 3: Tạo Skill đầu tiên — "Từ người dùng thành người tạo"

**Chuẩn bị:**
- Copy-paste template SKILL.md sẵn sàng (trong chat)
- Test live demo skill "email-summarizer" trước
- Chuẩn bị breakout rooms để học viên làm việc (có facilitator trong mỗi phòng nếu có đủ người)

**Speaker Notes:**

**WHY (0:00-0:05):** "Skill pptx tạo slide tốt. Nhưng nó không biết template slide công ty bạn. Không biết brand colors bạn. Đó lý do bạn cần skill riêng cho công việc riêng."

**WHAT — Giải phẫu SKILL.md (0:05-0:15):** Vẽ 3 phần trên slide:

```
1. FRONTMATTER YAML (tên + chức năng)
   name: email-summarizer
   description: Đọc email dài, tóm tắt thành 3 dòng

2. BODY (hướng dẫn chi tiết cho agent)
   "Đọc email, xác định:
   - Vấn đề chính
   - Action items
   - Deadline"

3. REFERENCES (tài liệu tham khảo)
   /references
   ├── email-template.md
   └── company-style.md
```

Analogy: "YAML = tên + chức danh trên badge. Body = job description. References = training manual."

**Demo live (0:15-0:20):** Mở text editor, code ngay trước học viên:

```yaml
name: email-summarizer
description: Đọc email và tóm tắt thành 3 dòng chính yếu

---

# Hướng dẫn

Đọc email được cung cấp và trích xuất:

1. **Vấn đề chính** (nội dung chính email)
2. **Action items** (những việc cần làm)
3. **Deadline** (nếu có)

Viết tóm tắt dưới 50 từ.
```

"Đơn giản không? 10 dòng, deploy vào Cowork, test ngay!"

**Activity 3 (0:20-0:40):** "Build Your First Skill" — thực hành tự do

Steps:
1. Chọn tên skill (kebab-case, ví dụ: meeting-notes-to-todo)
2. Viết description (1-2 câu, "pushy" — khiến agent muốn dùng)
3. Viết body (hướng dẫn agent làm gì)
4. Test trong Cowork

Giảng viên vào breakout rooms: "Bạn chọn công việc nào? [Nghe] Oke, tên skill có thể là gì? [Gợi ý nếu cần] Description: hãy nói cho agent biết 'khi nào nên dùng mình'..."

**Show & Tell (0:40-0:50):** 3-4 người volunteer trình bày:

Mỗi người: "Skill mình là [tên]. Description: [đọc]. Body làm [gì]. Mình expect [kết quả gì]."

Giảng viên feedback:
- "Description của bạn có 'pushy' không? Hãy thêm: 'Khi bạn có [vấn đề], dùng skill này'."
- "Body có rõ ràng không? Agent hiểu phải làm gì không?"

**WHAT (bổ sung) — References folder (0:50-0:55):** Slide: "Nếu skill cần kiến thức sâu, đặt vào references/"

Ví dụ: Skill "viết email tiếng Anh chuẩn" → references/english-email-template.md → agent tự đọc.

**SO WHAT (0:55-1:00):** "Hôm nay bạn tạo chuyên gia AI đầu tiên. Nó biết quy trình, công cụ, đầu ra mong muốn của bạn — giống chuyên gia thực thụ. Buổi sau, chúng ta nâng cấp thành chuyên gia siêu việt."

**Lưu ý:** Template SKILL.md phải copy-paste dễ dàng (vào chat hoặc Google Docs). Mục tiêu: "zero friction" lần tạo đầu tiên.

---

## Buổi 4: Skill nâng cao & Claude Code — "Từ đơn giản đến chuyên nghiệp"

**Chuẩn bị:**
- Mở sẵn course-designer skill (từ codebase khóa học này) để demo
- Chuẩn bị bảng so sánh Cowork vs Claude Code
- Test Claude Code terminal (nếu có người follow theo)

**Speaker Notes:**

**WHY (0:00-0:05):** "Skill buổi 3 của bạn có 20 dòng, vừa vặn. Nhưng nếu agent cần xử lý 100 trang tài liệu? Hoặc quy trình 10 bước? Body 20 dòng không đủ."

**WHAT — 3 kỹ thuật nâng cao (0:05-0:15):**

1. **References folder:** "Agent sẽ tự đọc file trong references/ khi cần. Bạn không cần ghi hết vào SKILL.md."

2. **Progressive disclosure:** "SKILL.md dưới 30 dòng. Kiến thức sâu → references/. Học viên mới → đọc SKILL.md. Chuyên gia → đọc references/."

3. **Multi-step workflow:** "Skill hướng dẫn agent qua từng bước: bước 1 → bước 2 → bước 3. Agent tự nhớ context qua các bước."

**Demo course-designer skill (0:15-0:22):** Mở file explorer → chỉ ra:
- course-designer/SKILL.md (10 dòng, nói agent cần làm cái gì)
- course-designer/references/ → mở:
  - course-design-methodology.md (50 dòng, chi tiết quy trình)
  - evaluation-criteria.md (bảng 18 tiêu chí)

"Thế này, skill SKILL.md ngắn gọn. Nhưng agent có thể đọc methodology + criteria để làm việc chuyên sâu. Đó là 'meta moment': khóa học này được tạo bằng chính skill này!"

**Activity 4 (0:22-0:35):** "Skill Upgrade" — Pairs

Mỗi cặp:
1. Lấy skill từ buổi 3
2. Nâng cấp: thêm references/, tách kiến thức chuyên sâu vào file riêng
3. Thêm multi-step workflow
4. Peer review: bạn review của tôi, tôi review của bạn

Giảng viên hỗ trợ: "References/ có cần file nào? [Hỏi] Oke, hãy tạo references/[tên].md. Dòng 1-10: định nghĩa. Dòng 11-20: ví dụ..."

**WHAT — Cowork vs Claude Code (0:35-0:45):** Bảng trên slide:

| Tiêu chí | Cowork | Claude Code |
|----------|--------|------------|
| Giao diện | Đồ họa (drag-drop) | Terminal/CLI |
| Kỹ năng cần | Không (phi kỹ thuật) | Biết CLI, git |
| Tool có sẵn | 10 skill | Unlimited (custom code) |
| Giới hạn | Nhẹ, nhanh | Mạnh, linh hoạt |
| Deploy | Click "Activate" | Git push |

Demo: cùng 1 skill chạy trong Cowork → chạy trong Claude Code. Kết quả giống nhau.

**Decision Framework (0:45-0:52):** Flowchart trên slide:

```
Công việc của bạn
  ↓
Cần code custom? → Có → Cần git? → Có → Claude Code
                         ↓ Không → Cowork
     ↓ Không
   Cowork
```

Giao bài tập: "Hãy quyết định: 3 công việc của bạn → Cowork or Claude Code?"

**SO WHAT (0:52-0:57):** 2-3 người chia sẻ skill upgraded + quyết định platform. Giảng viên feedback ngắn.

**Bài tập về nhà (0:57-1:00):** "Dùng skill nâng cao trong công việc thực tế tuần này. Ghi nhận: dễ hay khó? Kết quả có tốt? Mang vào buổi 5."

**Lưu ý:** "Meta moment" (skill tạo khóa học) là điểm nhấn. Nó cho thấy: "Bạn vừa học cách dùng công cụ mà những người chuyên nghiệp dùng."

---

## Buổi 5: Tối ưu, Chia sẻ & Chiến lược — "Từ cá nhân đến tổ chức"

**Chuẩn bị:**
- Chuẩn bị audit worksheet (5 tiêu chí × kolom đánh giá)
- Chuẩn bị plan template (3 use case + timeline + phân công)
- Google Form survey link sẵn sàng

**Speaker Notes:**

**Share kết quả (0:00-0:05):** "Buổi trước bạn dùng skill thực tế. 2-3 bạn kể chuyện? [Gọi tên] Bạn? Kết quả thế nào? Dễ hay khó?"

Giảng viên: "Nếu dễ → 'Vậy là bạn đã thành thạo rồi!' | Nếu khó → 'Đó lý do buổi hôm nay: làm sao để skill tốt hơn.'"

**WHAT — Skill Quality Checklist (0:05-0:15):** 5 tiêu chí trên slide:

1. **Trigger accuracy** (Description có kích hoạt đúng lúc không?)
   - Xấu: "Skill tạo file"
   - Tốt: "Khi bạn cần tóm tắt email dài thành 3 dòng..."

2. **Output quality** (Kết quả có đạt yêu cầu không?)
   - Xấu: Output sơ sài, thiếu chi tiết
   - Tốt: Output chuyên nghiệp, có thể gửi boss

3. **Reusability** (Người khác dùng được không?)
   - Xấu: "Skill quá riêng, chỉ mình mình dùng được"
   - Tốt: "Bất cứ ai cũng có thể kích hoạt skill này"

4. **Maintainability** (Dễ cập nhật không?)
   - Xấu: References lộn xộn, khó edit
   - Tốt: Cấu trúc rõ ràng, easy to update

5. **Scope** (Scope có phù hợp không?)
   - Xấu: Quá rộng ("tạo mọi loại báo cáo") hoặc quá hẹp ("tóm tắt email HR")
   - Tốt: "Tóm tắt email thành action items"

Demo: Đánh giá 1 skill tốt (course-designer) → bao nhiêu điểm? Nếu tất cả pass → "Đó skill chuyên nghiệp." Đánh giá 1 skill tệ → "Dễ thấy điểm yếu ở đâu."

**Activity 5 — Skill Audit (0:15-0:25):** Pairs

Mỗi cặp:
1. Swap skill (tôi làm của bạn, bạn làm của tôi)
2. Dùng checklist, đánh giá trên worksheet
3. So sánh: tự đánh giá vs đánh giá chéo

Giảng viên vào breakout: "Tiêu chí nào khó? [Hỏi] Cách đánh giá 'output quality': bạn có thể chạy skill, xem output, có phù hợp không?"

**WHAT — Chia sẻ & Quản lý skill (0:25-0:35):** Slide:

- Cách đóng gói skill cho team: Folder rõ ràng (name + version + readme)
- Naming convention: kebab-case + descriptive
- Version control: ai cập nhật? khi nào?
- Skill catalog: danh sách skill + mô tả cho phòng ban

Ví dụ: Marketing team có 5 skills → tài liệu tổng hợp "Marketing Skill Library v1.0"

**Activity 6 — 30-Day Adoption Plan (0:35-0:50):** Workshop nhóm (theo phòng ban/team)

Mỗi nhóm (3-5 người):
1. Xác định 3 use case ưu tiên → "Nếu có skill này, team sẽ tiết kiệm bao nhiêu giờ?"
2. Viết brief cho mỗi skill: tên, description, output mong muốn
3. Phân công: ai tạo skill 1, ai tạo 2, ai tạo 3?
4. Timeline 30 ngày: Tuần 1 (tạo), Tuần 2-3 (test), Tuần 4 (deploy team)

Template trên slide. Giảng viên: "Hãy cụ thể. Ví dụ HR team: skill 1 = tóm tắt CV, skill 2 = tạo offer letter, skill 3 = tạo onboarding checklist."

Mỗi nhóm trình bày 3 phút kế hoạch.

**SO WHAT — Tổng kết (0:50-0:55):** Slide recap 5 buổi:

Buổi 1: Agent & Skill → **Hiểu**
Buổi 2: Dùng Skills → **Dùng**
Buổi 3: Tạo Skill → **Tạo**
Buổi 4: Nâng cao → **Nâng cao**
Buổi 5: Triển khai → **Triển khai**

Analogy cuối: "Từ 'hỏi đường người lạ' (prompt cơ bản) → 'vẽ bản đồ cho cả team' (skill library)."

**Đánh giá & Q&A (0:55-1:00):** Mở Google Form survey:
- Nội dung hiểu chưa?
- Demo có rõ không?
- Bạn sẽ dùng skill khi nào?
- Kênh hỗ trợ sau khóa học?

Nói: "Hôm nay bạn tốt nghiệp. Nhưng chưa kết thúc. Team bạn sẽ hỏi, bạn sẽ giúp tạo skill. Nếu cần, tôi vẫn hỗ trợ. [Email/Slack channel]."

**Lưu ý:** Activity 6 phải có ACTION PLAN cụ thể — không chỉ "biết" mà "sẽ làm 30 ngày tới". Đó là dấu ấu của khóa học thành công.

---

## Chung cho tất cả buổi

**Energy Management (Online):**
- 10-15 phút một thay đổi modality (demo → chat → activity → discuss)
- Mỗi 20-25 phút, hỏi 1 câu để học viên trả lời (giữ sự chú ý)
- Chat luôn sôi động: reaction, emoji, ghi nhận output nhanh

**Xử lý vấn đề:**
- **Học viên chậm:** Gợi ý từng bước nhỏ, không nói thẳng câu trả lời
- **Lỗi tech:** Chuẩn bị screenshot offline làm backup
- **Câu hỏi ngoài chủ đề:** Ghi nhận ("Câu hay! Mình note, nói sau break nếu được") → tiếp tục
- **Ai im lặng:** Gọi tên, hỏi "Bạn có theo dõi chứ?" → giúp catch up

**Lời khuyên lớn:** Mỗi buổi PHẢI kết thúc với 1 công việc cụ thể mà học viên sẽ làm trong tuần (không chỉ "biết" lý thuyết). Đó là công thức thành công cho online course.

---

**Tài liệu tham khảo:** Chi tiết timing và activity materials xem file `01-lesson-plan.md`.
