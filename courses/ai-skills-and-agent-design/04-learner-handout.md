# AI Skills & Agent Design — Tài Liệu Tra Cứu Nhanh

> **Cách dùng:** Tra theo TÁC VỤ bạn cần làm, không theo buổi học. Mở mục tương ứng, áp dụng ngay.

---

## Mục lục

1. [Mental Model: "Nhân viên mới xuất sắc"](#1-mental-model-nhân-viên-mới-xuất-sắc)
2. [Brief AI hiệu quả — RTF + 6 Thành phần](#2-brief-ai-hiệu-quả--rtf--6-thành-phần)
3. [3-Question Delegation Framework](#3-3-question-delegation-framework)
4. [Task Brief 4 phần](#4-task-brief-4-phần)
5. [Khi nào dùng Chat / Agent / Không AI](#5-khi-nào-dùng-chat--agent--không-ai)
6. [Context Engineering — Write/Select/Compress/Isolate](#6-context-engineering--writeselectcompressisolate)
7. [Smart Zone — 300 tokens tập trung > 113K lộn xộn](#7-smart-zone--300-tokens-tập-trung--113k-lộn-xộn)
8. [Template CLAUDE.md (WHY-WHAT-HOW)](#8-template-claudemd-why-what-how)
9. [Template SKILL.md (6 phần)](#9-template-skillmd-6-phần)
10. [Xử lý sự cố AI thường gặp](#10-xử-lý-sự-cố-ai-thường-gặp)
11. [Kế hoạch luyện tập sau khóa học](#11-kế-hoạch-luyện-tập-sau-khóa-học)
12. [Bảng thuật ngữ Việt–Anh](#12-bảng-thuật-ngữ-việt-anh)

---

## 1. Mental Model: "Nhân viên mới xuất sắc"

AI = nhân viên mới cực giỏi nhưng **chưa biết quy trình công ty bạn**. Hệ quả:

- **Brief rõ = kết quả tốt.** Nói rõ vai trò, tác vụ, format mong muốn.
- **Luôn kiểm chứng.** AI tự tin kể cả khi sai (hallucination). Kiểm tra 2+ nguồn độc lập.
- **Cho xem mẫu.** Nhân viên mới làm tốt hơn khi có ví dụ (= few-shot prompting).
- **Yêu cầu suy nghĩ trước.** "Phân tích rủi ro trước khi soạn hợp đồng" (= chain-of-thought).

---

## 2. Brief AI hiệu quả — RTF + 6 Thành phần

Bắt đầu với 3 thành phần cốt lõi (**RTF**), thêm dần khi cần:

| # | Thành phần | Câu hỏi | Ví dụ |
|---|------------|---------|-------|
| 1 | **Vai trò** (Role) | AI đóng vai ai? | "Chuyên gia pháp lý hợp đồng VN" |
| 2 | **Tác vụ** (Task) | Làm gì cụ thể? | "Liệt kê 5 điều khoản chính" |
| 3 | **Định dạng** (Format) | Output trông thế nào? | "Bullet points, mỗi điểm 1 câu" |
| 4 | Giọng điệu (Tone) | Văn phong? | "Chuyên nghiệp, ngắn gọn" |
| 5 | Ràng buộc (Constraints) | Không làm gì? Giới hạn? | "Theo luật VN, <200 từ" |
| 6 | Đối tượng (Audience) | Ai đọc output? | "GĐ hai bên sẽ ký" |

**Quy tắc:** Không cần đủ 6 mỗi lần. RTF là nền — thêm khi brief cần rõ hơn.

---

## 3. 3-Question Delegation Framework

Trước **mỗi** task giao cho AI Agent, trả lời 3 câu:

1. **"Done" trông như thế nào?** — Mô tả kết quả cuối cùng cụ thể.
2. **Claude không thể suy ra điều gì?** — Context thiếu: phong cách, quy chuẩn, số liệu nội bộ.
3. **Ràng buộc gì?** — Giới hạn thời gian, format, phạm vi, điều KHÔNG được làm.

---

## 4. Task Brief 4 phần

```markdown
## Task Brief: [Tên tác vụ]

### 1. Mục tiêu
AI cần tạo ra sản phẩm gì? (Cụ thể, đo lường được)

### 2. Bối cảnh
- File/thông tin AI cần đọc
- Quy tắc đặc biệt của công ty/ngành

### 3. Các bước thực hiện
1. [Bước 1 — cụ thể]
2. [Bước 2]
3. [Bước 3] (ít nhất 3 bước)

### 4. Tiêu chí thành công
- [ ] [Tiêu chí kiểm tra được]
- [ ] [Tiêu chí 2]
```

---

## 5. Khi nào dùng Chat / Agent / Không AI

| Tình huống | Chat | Agent | Không AI |
|------------|:----:|:-----:|:--------:|
| Brainstorm, viết sáng tạo 1 lần | V | | |
| Hỏi đáp nhanh, khám phá ý tưởng | V | | |
| Tác vụ lặp lại hàng tuần, nhiều bước | | V | |
| Cần đọc/tạo nhiều file | | V | |
| Quy trình có bước rõ ràng | | V | |
| Quyết định nhạy cảm (sa thải, pháp lý) | | | V |
| Dữ liệu mật công ty | | | V |

**Quy tắc:** Làm lại >3 lần → dùng Agent + brief. Làm 1 lần → Chat đủ.

---

## 6. Context Engineering — Write/Select/Compress/Isolate

"Thiết kế cách thông tin chảy qua AI" — sổ tay nhân viên, không phải tips prompt.

| Chiến lược | Nghĩa là | Ví dụ |
|------------|----------|-------|
| **Write** | Lưu thông tin quan trọng vào file | CLAUDE.md, memory files |
| **Select** | Chọn đúng thông tin cho mỗi task | Chỉ đưa file liên quan, không dump tất cả |
| **Compress** | Tóm tắt, không nhồi nhét | 1 trang checklist > 200 trang policy |
| **Isolate** | Chia task phức tạp cho nhiều agent | 50 file → 5 sub-agent x 10 file |

---

## 7. Smart Zone — 300 tokens tập trung > 113K lộn xộn

AI có "cửa sổ ngữ cảnh" (context window) giới hạn. CLAUDE.md nằm trong **Smart Zone** — phần AI đọc đầu tiên và nhớ suốt phiên.

**Hệ quả:** 300 từ hướng dẫn rõ ràng trong CLAUDE.md hiệu quả hơn 113.000 từ lộn xộn. Viết ngắn, viết rõ, viết có cấu trúc.

---

## 8. Template CLAUDE.md (WHY-WHAT-HOW)

Tạo file `CLAUDE.md` trong thư mục làm việc. Claude Code tự đọc khi khởi động.

```markdown
# [Tên dự án/công việc]

## WHY — Mục đích
Agent này tồn tại để ___.
Ví dụ: "Tạo hợp đồng dịch vụ từ đơn hàng khách hàng."

## WHAT — Phạm vi
**Làm:**
- [Việc 1]
- [Việc 2]
- [Việc 3]

**KHÔNG làm:**
- [Giới hạn 1]
- [Giới hạn 2]

## HOW — Quy trình
1. [Bước 1]
2. [Bước 2]
3. [Bước 3]
4. [Bước 4]

## Ví dụ output
[Paste 1 đoạn output mẫu để AI biết format đúng]
```

**Anti-patterns:** Đừng auto-generate CLAUDE.md. Đừng biến AI thành linter. Giữ <300 dòng.

---

## 9. Template SKILL.md (6 phần)

SKILL.md = quy trình chuyên biệt, tái sử dụng. Viết 1 lần, chạy 100 lần.

```markdown
# SKILL: [Tên quy trình]

## 1. Purpose — Mục tiêu
Skill này làm gì? Output cuối cùng là gì?

## 2. Context — Ngữ cảnh
- Loại doanh nghiệp, quy định áp dụng
- Template/mẫu dùng

## 3. Input — Dữ liệu đầu vào
- File cần đọc: [tên, định dạng]
- Thông tin bắt buộc: [liệt kê]

## 4. Steps — Các bước thực hiện
1. [Bước cụ thể]
2. [Bước cụ thể]
3. [Bước cụ thể]
4. [Bước cụ thể]

## 5. Examples — Ví dụ output
[1-2 đoạn output mẫu]

## 6. Constraints — Ràng buộc
- KHÔNG [giới hạn 1]
- KHÔNG [giới hạn 2]
- Tiêu chí chất lượng: [điều kiện "đủ tốt"]
```

---

## 10. Xử lý sự cố AI thường gặp

| Triệu chứng | Nguyên nhân | Cách sửa |
|-------------|-------------|----------|
| Kết quả quá chung chung | Brief thiếu context | Thêm vai trò + ràng buộc + ví dụ output |
| AI bịa thông tin (hallucination) | AI dự đoán, không kiểm tra sự thật | Hỏi thông tin không có trong dữ liệu → nếu AI trả lời tự tin = bịa. Kiểm chứng 2 nguồn. |
| Output sai format | Chưa mô tả format rõ | Thêm ví dụ output mẫu (few-shot) |
| Mỗi lần chạy ra kết quả khác | SKILL.md thiếu tiêu chí cụ thể | Thêm Constraints + ví dụ chi tiết |
| AI hỏi lại nhiều câu | Input chưa rõ, thiếu bối cảnh | Bổ sung phần Context trong brief |
| `claude: command not found` | Chưa cài Claude Code | `npm install -g @anthropic-ai/claude-code` |
| Claude Code không đọc CLAUDE.md | Sai thư mục | Kiểm tra `pwd`, đảm bảo CLAUDE.md ở thư mục hiện tại |

---

## 11. Kế hoạch luyện tập sau khóa học

| Mốc | Thử thách | Mục đích |
|-----|-----------|----------|
| **Ngày 3** | Chạy SKILL.md đã tạo với tác vụ thực tế | Áp dụng ngay, tránh quên |
| **Ngày 7** | Sửa SKILL.md dựa trên kết quả tuần đầu | Iteration = kỹ năng cốt lõi |
| **Ngày 14** | Viết SKILL.md thứ 2 cho workflow khác | Mở rộng phạm vi |
| **Ngày 30** | Review cả 2 skill, optimize, chia sẻ với đồng nghiệp | Biến kỹ năng → thói quen |

---

## 12. Bảng thuật ngữ Việt-Anh

| Tiếng Anh | Cách dùng trong khóa | Giải thích ngắn |
|-----------|----------------------|-----------------|
| LLM | Mô hình ngôn ngữ lớn | "Não AI" — dự đoán từ tiếp theo, đã đọc hàng tỷ trang |
| Prompt | Brief / câu lệnh | Thứ bạn gõ cho AI |
| Context window | Cửa sổ ngữ cảnh | "RAM" của AI — giới hạn lượng thông tin nhớ |
| Hallucination | Ảo giác AI | AI bịa thông tin nghe đúng nhưng sai |
| Few-shot | Cho xem ví dụ mẫu | Cho nhân viên mới xem mẫu trước khi làm |
| Chain-of-thought | Yêu cầu suy luận | Yêu cầu suy nghĩ trước khi hành động |
| Agent | AI tác nhân tự động | Giao brief dự án, AI tự lập kế hoạch + thực thi |
| Task brief | Bản mô tả công việc | 4 phần: mục tiêu, bối cảnh, bước, tiêu chí |
| CLAUDE.md | Sổ tay hướng dẫn AI | File AI đọc khi khởi động — vai trò, quy tắc, quy trình |
| SKILL.md | Hướng dẫn kỹ năng | Quy trình cụ thể tái sử dụng: input → steps → output |
| MCP | Giao thức kết nối | "Ổ cắm điện chuẩn" — AI dùng thêm tool (đọc file, search) |
| Context engineering | Thiết kế ngữ cảnh | Thiết kế cách thông tin chảy qua AI — sổ tay nhân viên |
| Smart Zone | Vùng nhớ ưu tiên | Phần bộ nhớ AI nhớ tốt nhất — CLAUDE.md nằm ở đây |
| Iterate | Lặp lại cải thiện | Chạy → đánh giá → sửa → chạy lại. Lần đầu không bao giờ hoàn hảo. |

---

*Khóa học "AI Skills & Agent Design for Business Users" — Phiên bản v2, 2026-03-14*
