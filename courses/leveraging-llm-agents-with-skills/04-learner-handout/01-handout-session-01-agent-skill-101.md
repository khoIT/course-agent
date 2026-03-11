# Session 1: Agent & Skill 101 — Tại sao prompt đơn lẻ không đủ?

**Part of:** [Course Overview](00-handout-overview-and-objectives.md)

---

## PHẦN 2: KHÁI NIỆM CỐT LÕI

### Agent vs Prompt đơn lẻ — Phép Loại So Sánh

**Prompt đơn lẻ** = Hỏi đường một người lạ
- "Đi từ đây đến Hà Nội như thế nào?"
- Cách trả lời phụ thuộc vào người bạn hỏi, lúc bạn hỏi, tâm trạng họ
- Cùng câu hỏi, lần sau nhận được hướng dẫn khác
- Không nhớ ngữ cảnh công việc của bạn

**Agent có Skill** = GPS được lập trình cho công việc của bạn
- "Tạo báo cáo tuần theo format công ty tôi"
- Luôn làm đúng cách, lặp lại được, không thay đổi
- Biết quy trình cụ thể của bạn (ngữ cảnh)
- Có thể xử lý 100 task cùng lúc, không mệt, không sai

---

### Ba Khái Niệm Cốt Lõi

```
┌─────────────────────────────────────────────────────────┐
│                 AGENT ← reads → SKILL                   │
│                  ↓                ↓                      │
│              uses TOOLS      (references,               │
│              (pptx, docx,    instructions)              │
│               pdf, xlsx,                                │
│               canvas, web)                              │
│                  ↓                ↓                      │
│              ┌─────────────────────┐                    │
│              │  PRODUCES OUTPUT    │                    │
│              │ (slide, doc, chart, │                    │
│              │    analysis, etc)   │                    │
│              └─────────────────────┘                    │
└─────────────────────────────────────────────────────────┘
```

**Ví dụ từng khái niệm:**

#### 1. Agent (Nhân viên mới)
Agent là một LLM (Large Language Model) — ví dụ như Claude — được đưa vào vị trí "nhân viên" của bạn.
- **Đặc điểm:** Thông minh, có thể đọc, viết, phân tích, nhưng ban đầu chưa biết quy trình của công ty
- **Ví dụ:** "Claude, bạn là một nhân viên mới trong phòng Marketing. Hôm nay công việc của bạn là gì?"

#### 2. Skill (Sổ Tay Thủ Tục - SOP)
Skill là một "sổ tay" hướng dẫn agent cách làm công việc **của công ty BẠN**, không phải cách làm chung chung trên internet.
- **Nội dung:** Chi tiết quy trình, template, rule, tiêu chí chất lượng
- **Ví dụ:** Skill "viết-báo-cáo-tuần" hướng dẫn: "Báo cáo phải có 3 phần: Tóm tắt (100 từ), Kết quả (bullets), Kế hoạch tuần sau (bullets). Dùng font Times New Roman, kích thước 11, căn lề Justify."

#### 3. Tool (Phần mềm công ty)
Tool là công cụ cụ thể mà agent sử dụng để thực hiện công việc.
- **Ví dụ:** Để viết báo cáo, agent dùng tool `docx` (tạo file Word). Để tạo slide, dùng tool `pptx` (tạo Powerpoint). Để phân tích dữ liệu, dùng tool `xlsx` (tạo/phân tích Excel).

**Liên hệ toàn bộ:**
- Agent đọc Skill → Agent hiểu quy trình → Agent sử dụng Tools → Agent tạo Output chính xác

---

### Phân Biệt Rõ Ràng

| Khái niệm | Là gì? | Ví dụ | Được lập trình bởi |
|-----------|--------|-------|-------------------|
| **Agent** | LLM được đưa vào vị trí "nhân viên" | Claude, GPT-4, Gemini | OpenAI, Anthropic, Google |
| **Skill** | Sổ tay hướng dẫn chi tiết cho agent | "viết-email-chuẩn-công-ty", "tạo-slide-pitch" | **BẠN** hoặc team bạn |
| **Tool** | Phần mềm/khả năng agent sử dụng | pptx, docx, pdf, xlsx, canvas-design, web search | Cowork, Claude Code |

---

**Next:** [Session 2: Sử dụng Skills có sẵn](02-handout-session-02-using-existing-skills.md)
