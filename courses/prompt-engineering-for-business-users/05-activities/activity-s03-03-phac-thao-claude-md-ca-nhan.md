# Bài tập 3: Phác thảo CLAUDE.md cá nhân

## Thông tin chung

- **Thời lượng:** 15 phút (1:20–1:35)
- **Session:** 3 — Áp dụng: Cowork + Claude Code
- **Block:** C — Apply to Your Work
- **Mục tiêu học tập:** Đọc hiểu cấu trúc CLAUDE.md, viết bản nháp 4 phần cho tác vụ cá nhân (Ref: S3-EO2, S4-EO2)

---

## Chuẩn bị

**Giảng viên:**
- CLAUDE.md của contract-agent hiển thị trên slide (đã phân tích ở Block A)
- Template CLAUDE.md 4 phần trên slide hoặc handout

**Học viên:**
- Đã đọc CLAUDE.md của contract-agent ở Block A (0:22–0:30)
- Biết 4 thành phần: Vai trò, Quy tắc, Workflow, Công cụ
- Text editor mở sẵn (VS Code, Notepad, Google Docs)

---

## Template CLAUDE.md (4 phần)

```markdown
# CLAUDE.md — [Tên tác vụ của bạn]

## Vai trò
Bạn là [mô tả vai trò AI đóng trong công việc này].
Chuyên môn: [lĩnh vực cụ thể].
Phong cách: [cách AI giao tiếp/viết].

## Quy tắc
- LUÔN: [điều AI phải làm]
- LUÔN: [điều AI phải làm]
- KHÔNG BAO GIỜ: [điều AI không được làm]
- KHÔNG BAO GIỜ: [điều AI không được làm]

## Workflow
1. Đọc [input gì?]
2. [Bước xử lý 1]
3. [Bước xử lý 2]
4. Tạo [output gì?]

## Công cụ
- Input: [file/dữ liệu AI cần đọc]
- Output: [file/kết quả AI tạo ra]
- Tham chiếu: [file mẫu, template, v.v.]
```

---

## Hướng dẫn từng bước

### Bước 1 — Chọn tác vụ lặp lại (2 phút)
Chọn **1 tác vụ bạn làm mỗi tuần** và mất ≥15 phút. Ví dụ:
- Soạn báo cáo tuần từ dữ liệu bán hàng
- Phân tích email khách hàng và tóm tắt action items
- Tạo giáo án bài giảng từ sách giáo khoa
- Viết bản tin nội bộ từ thông tin phòng ban
- Soạn đề xuất dự án từ yêu cầu khách hàng

### Bước 2 — Điền Vai trò + Quy tắc (5 phút)
**Vai trò** — trả lời 3 câu hỏi:
1. AI đóng vai gì? (trợ lý, chuyên gia, biên tập viên...)
2. Chuyên môn lĩnh vực gì? (marketing, giáo dục, pháp lý...)
3. Phong cách viết? (chuyên nghiệp, thân thiện, ngắn gọn...)

**Quy tắc** — liệt kê ít nhất 2 LUÔN và 2 KHÔNG:
- LUÔN: viết bằng tiếng Việt, trích dẫn nguồn, giữ dưới X từ
- KHÔNG: bịa số liệu, dùng ngôn ngữ casual, tiết lộ thông tin mật

### Bước 3 — Điền Workflow + Công cụ (5 phút)
**Workflow** — liệt kê 3-5 bước theo thứ tự:
1. AI đọc gì đầu tiên?
2. AI xử lý/phân tích gì?
3. AI tạo ra output gì?

**Công cụ** — AI cần file nào, tạo file nào?

### Bước 4 — Xem lại bản nháp (3 phút)
Tự hỏi: "Nếu đưa CLAUDE.md này cho AI mà không giải thích thêm, AI có biết phải làm gì không?"
- Nếu CÓ → bản nháp tốt
- Nếu KHÔNG → thêm chi tiết vào phần thiếu

---

## Ví dụ CLAUDE.md hoàn chỉnh (tham khảo contract-agent)

```markdown
# CLAUDE.md — Tạo hợp đồng dịch vụ

## Vai trò
Bạn là chuyên viên soạn hợp đồng dịch vụ truyền thông.
Chuyên môn: hợp đồng dịch vụ B2B tại Việt Nam.
Phong cách: văn phong pháp lý, chính xác, ngắn gọn.

## Quy tắc
- LUÔN: đọc đầy đủ thông tin đơn hàng trước khi viết
- LUÔN: tính toán VAT chính xác
- KHÔNG BAO GIỜ: bịa thông tin không có trong đơn hàng
- KHÔNG BAO GIỜ: thay đổi mẫu hợp đồng cơ bản

## Workflow
1. Đọc file prompt.md (đơn hàng khách hàng)
2. Trích xuất: tên, MST, dịch vụ, giá, VAT, thời gian
3. Điền thông tin vào mẫu hợp đồng
4. Tính tổng giá trị (giá + VAT)
5. Tạo file hợp đồng output

## Công cụ
- Input: prompt.md (đơn hàng)
- Output: file hợp đồng hoàn chỉnh
- Template: Mau-hop-dong-dich-vu-truyen-thong.docx
```

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Có đủ 4 phần (Vai trò, Quy tắc, Workflow, Công cụ) | 4 phần đều có nội dung | Thiếu 1+ phần |
| Vai trò cụ thể | "Trợ lý soạn báo cáo marketing" | "Trợ lý AI" (quá chung) |
| Workflow có ≥3 bước | Bước rõ ràng, có thứ tự | 1-2 bước hoặc không rõ thứ tự |
| Bản nháp tự giải thích | Người khác đọc hiểu được | Cần giải thích thêm |

---

## Ghi chú giảng viên

- **Showcase (1:35–1:45):** 2-3 người chia sẻ bản nháp. Lớp góp ý: "Workflow này đủ rõ chưa? Còn thiếu gì?"
- **Đây là bản nháp — không cần hoàn chỉnh.** Homework Session 3 sẽ hoàn thiện
- **Lỗi thường gặp:**
  - Quy tắc quá chung ("viết tốt") → hỏi: "Tốt là gì cụ thể? Dưới bao nhiêu từ? Bằng ngôn ngữ gì?"
  - Workflow thiếu input/output → hỏi: "AI đọc file gì đầu tiên? Tạo ra file gì cuối cùng?"
- **Kết nối contract-agent:** "So sánh CLAUDE.md của bạn với contract-agent — cùng cấu trúc 4 phần, chỉ khác nội dung"
- **Homework:** Hoàn thiện CLAUDE.md + test với Claude Code + bắt đầu phác thảo SKILL.md
