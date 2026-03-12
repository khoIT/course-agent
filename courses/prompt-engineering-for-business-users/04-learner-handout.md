# Prompt Engineering — Quick Reference Job Aid

> Tổ chức theo TÁC VỤ, không theo buổi học. Dùng như tài liệu tra cứu nhanh khi viết prompt.

---

## Mục lục theo tác vụ

1. [Viết prompt cơ bản cho bất kỳ task nào](#1-viết-prompt-cơ-bản)
2. [Chọn framework phù hợp (RTT vs CO-STAR)](#2-chọn-framework)
3. [Dạy AI bằng ví dụ (Few-shot)](#3-few-shot-prompting)
4. [Yêu cầu AI phân tích từng bước (Chain-of-Thought)](#4-chain-of-thought)
5. [Tạo prompt template tái sử dụng](#5-tạo-template)
6. [Đánh giá chất lượng output](#6-đánh-giá-output)
7. [Sửa prompt khi output sai](#7-debug-prompt)
8. [Tổ chức prompt library cho team](#8-prompt-library)

---

## 1. Viết prompt cơ bản

**Khi nào dùng:** Bất kỳ khi nào bạn cần AI tạo output — email, báo cáo, phân tích, brainstorm.

**Công thức:** Role + Context + Task + Format

| Thành phần | Giải thích | Ví dụ |
|------------|-----------|-------|
| **Role** | AI đóng vai gì? | "Bạn là chuyên viên Marketing senior với 5 năm kinh nghiệm B2B SaaS" |
| **Context** | Thông tin nền AI cần biết | "Company XYZ vừa launch sản phẩm mới, target SME, budget marketing 50M VND/tháng" |
| **Task** | Việc cụ thể cần làm | "Viết 3 email templates cho campaign launch" |
| **Format** | Output trông thế nào | "Mỗi email: subject line + body 150 words + CTA. Format markdown table" |

**Ví dụ hoàn chỉnh:**
```
Role: Bạn là chuyên viên HR senior tại công ty tech 200 người.
Context: Nhân viên Nguyễn Văn A (team Marketing, 2 năm) xin nghỉ phép 2 tuần
liên tiếp trong high season (tháng 12). Policy cho phép nhưng cần manager approval.
Task: Viết email phản hồi professional — approve nhưng lưu ý handover tasks.
Format: Email ngắn (< 100 words), tone warm but professional, include next steps.
```

---

## 2. Chọn framework

**Decision rule nhanh:**

```
Task cần < 5 phút?  ──Yes──► RTT (Role-Task-Tone)
         │
         No
         │
Task cần stakeholder review?  ──Yes──► CO-STAR
         │
         No
         │
Task lặp lại mỗi tuần?  ──Yes──► RTT + Template
         │
         No
         │
         └──► Bắt đầu RTT, upgrade CO-STAR nếu output chưa đủ
```

**RTT — cho 70% task routine:**
```
Role: [vai trò]
Task: [việc cần làm]
Tone: [giọng điệu: formal/casual/technical/empathetic]
```

**CO-STAR — cho 30% task quan trọng:**
```
Context: [bối cảnh cụ thể, data, constraints]
Objective: [mục đích rõ ràng — AI output sẽ DÙNG để làm gì?]
Style: [viết như báo cáo? email? presentation?]
Tone: [formal/casual/confident/cautious]
Audience: [ai sẽ ĐỌC output này?]
Response: [format: bullet points? table? paragraph? max words?]
```

---

## 3. Few-shot prompting

**Khi nào dùng:** Cần AI output đúng FORMAT cụ thể — phân loại, extract data, format theo template.

**Cách dùng:** Cung cấp 2-3 ví dụ mẫu trước task thật.

**Template:**
```
Task: [mô tả task]

Ví dụ 1:
Input: [input mẫu 1]
Output: [output mong muốn 1]

Ví dụ 2:
Input: [input mẫu 2]
Output: [output mong muốn 2]

Bây giờ hãy làm:
Input: [input thật]
Output:
```

**Tips:**
- 2-3 ví dụ đủ (thêm nữa ít cải thiện)
- Ví dụ phải DIVERSE — đừng cho 3 ví dụ giống nhau
- Format ví dụ = format output mong muốn

---

## 4. Chain-of-Thought

**Khi nào dùng:** Task cần PHÂN TÍCH — so sánh, đánh giá, ra quyết định, troubleshoot.

**Cách đơn giản nhất:** Thêm "Hãy suy nghĩ từng bước" vào cuối prompt.

**Cách chi tiết hơn:** Specify các bước phân tích:
```
[Task description]

Hãy phân tích theo các bước sau:
1. Liệt kê các yếu tố cần xem xét
2. Đánh giá từng yếu tố (ưu/nhược)
3. So sánh side-by-side
4. Đưa ra recommendation kèm reasoning

Sau khi phân tích, tóm tắt recommendation trong 3 bullet points.
```

**Khi nào KHÔNG cần:** Task đơn giản, đã biết format, chỉ cần AI generate content → RTT đủ.

---

## 5. Tạo template

**Khi nào dùng:** Task lặp lại — weekly report, email response, data extraction.

**Cấu trúc template:**
```
# Template: [tên task] — [framework]
# Version: v1 | Last tested: [date] | Accuracy: [%]

Role: [role cố định cho task này]
Context: [context cố định + [BIẾN thay đổi mỗi lần]]
Task: [task cố định + [BIẾN]]
Format: [format cố định]

## Variable slots:
- [BIẾN 1]: mô tả
- [BIẾN 2]: mô tả
```

**Checklist tạo template:**
- [ ] Role defined (cố định cho task type)
- [ ] Context có industry-specific terms
- [ ] Variables rõ ràng (dùng [BRACKETS])
- [ ] Format specified (output trông thế nào)
- [ ] Tested ≥3 lần với data khác nhau
- [ ] Accuracy/quality ghi chú

---

## 6. Đánh giá output

**Rubric 4 tiêu chí (score 1-5 mỗi tiêu chí):**

| Tiêu chí | 1-2 (Kém) | 3 (OK) | 4-5 (Tốt) |
|----------|-----------|--------|-----------|
| **Accuracy** | Thông tin sai hoặc bịa | Đúng nhưng thiếu chi tiết | Chính xác, có data cụ thể |
| **Completeness** | Thiếu phần quan trọng | Đủ ý chính, thiếu nuance | Đầy đủ, không thừa không thiếu |
| **Tone** | Sai giọng hoàn toàn | Gần đúng nhưng chưa consistent | Đúng giọng cho audience |
| **Actionability** | Người đọc không biết next step | Có hướng nhưng mơ hồ | Rõ ràng: ai làm gì, khi nào |

**Target:** Total ≥ 16/20. Nếu < 16 → iterate prompt.

---

## 7. Debug prompt

**Khi output sai, check theo thứ tự:**

1. **Context thiếu?** → Thêm bối cảnh cụ thể (company, department, situation)
2. **Role sai?** → Thay đổi expertise level hoặc perspective
3. **Format chưa rõ?** → Specify: "trả lời bằng markdown table, 3 cột, max 200 words"
4. **Task quá rộng?** → Chia nhỏ: thay "viết marketing plan" → "viết 3 key messages cho campaign X, target audience Y"
5. **Thiếu ví dụ?** → Thêm 2-3 examples (few-shot)
6. **Cần reasoning?** → Thêm "hãy suy nghĩ từng bước" (CoT)

**Rule of thumb:** Mỗi lần iterate, chỉ thay đổi 1 thứ → biết chính xác gì tạo khác biệt.

---

## 8. Prompt library

**Cấu trúc folder:**
```
prompt-library/
├── email/
│   ├── customer-response-rtt-v2.md
│   ├── internal-update-costar-v1.md
│   └── complaint-handling-rtt-v1.md
├── report/
│   ├── weekly-summary-costar-v3.md
│   └── quarterly-analysis-cot-v1.md
├── data/
│   ├── invoice-extraction-fewshot-v1.md
│   └── feedback-classification-fewshot-v2.md
└── README.md (index + usage guide)
```

**Naming convention:** `[task]-[framework]-v[version].md`

**Testing log (mỗi template cần):**
- Last tested: [date]
- Test data: [what was used]
- Accuracy: [%]
- Known limitations: [what it can't do]
- Owner: [who maintains this]

**Team deployment checklist:**
- [ ] Identify 2-3 champions
- [ ] Pick 3 pilot tasks (high-frequency, low-risk)
- [ ] 2-week pilot with data collection
- [ ] Feedback session + iterate
- [ ] Expand to full team
- [ ] Monthly review + update prompts
