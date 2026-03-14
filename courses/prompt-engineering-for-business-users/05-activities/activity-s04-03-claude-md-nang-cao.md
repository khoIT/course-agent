# Bài tập 3: CLAUDE.md nâng cao

## Thông tin chung

- **Thời lượng:** 15 phút (1:20–1:35)
- **Session:** 4 — Context Engineering + Công cụ MCP
- **Block:** C — Apply to Your Work
- **Mục tiêu học tập:** Nâng cấp CLAUDE.md với ví dụ output, từ vựng chuyên ngành, quy tắc "không làm" (Ref: S4-Terminal, S4-EO2)

---

## Chuẩn bị

**Giảng viên:**
- CLAUDE.md contract-agent hiển thị để so sánh
- 3 ví dụ nâng cao trên slide

**Học viên:**
- CLAUDE.md hoàn chỉnh từ Bài tập 1 (đã test)
- Claude Code hoạt động
- MCP đã kết nối (nếu thành công ở Bài tập 2)

---

## 3 phần nâng cao cần thêm

### 1. Ví dụ output mong muốn (Few-shot trong CLAUDE.md)

Thêm vào cuối CLAUDE.md:

```markdown
## Ví dụ output
Dưới đây là mẫu kết quả tốt:

[paste 1 ví dụ output thực tế bạn muốn AI tạo ra]

Lưu ý: giữ đúng cấu trúc và giọng điệu như ví dụ.
```

**Tại sao quan trọng?** AI học theo mẫu. Ví dụ output = few-shot vĩnh viễn — không cần paste mỗi lần.

### 2. Danh sách từ vựng chuyên ngành

```markdown
## Thuật ngữ chuyên ngành
Luôn sử dụng đúng thuật ngữ sau:
- [thuật ngữ 1]: [định nghĩa/cách dùng]
- [thuật ngữ 2]: [định nghĩa/cách dùng]
- [thuật ngữ 3]: [định nghĩa/cách dùng]
```

**Ví dụ cho ngành marketing:**
```
- ROI: Tỷ suất lợi nhuận trên đầu tư (viết đầy đủ lần đầu)
- CTA: Call-to-action (lời kêu gọi hành động)
- KOL: Key Opinion Leader (người có ảnh hưởng)
```

### 3. Quy tắc "không làm" quan trọng

```markdown
## Cảnh báo
- KHÔNG BAO GIỜ: [1 quy tắc quan trọng nhất cho lĩnh vực của bạn]
```

**Ví dụ theo ngành:**
- Pháp lý: "KHÔNG BAO GIỜ bịa số điều luật hoặc trích dẫn pháp lý không tồn tại"
- Tài chính: "KHÔNG BAO GIỜ đưa ra con số lợi nhuận dự kiến mà không ghi nguồn dữ liệu"
- Giáo dục: "KHÔNG BAO GIỜ tạo câu hỏi trắc nghiệm có 2 đáp án đúng"
- Marketing: "KHÔNG BAO GIỜ dùng thống kê mà không trích nguồn cụ thể"

---

## Hướng dẫn từng bước

### Bước 1 — Thêm ví dụ output (5 phút)
- Tìm 1 output thực tế từ công việc (email, báo cáo, bài viết bạn đã viết)
- Copy vào phần `## Ví dụ output` trong CLAUDE.md
- Ghi chú: "Giữ đúng cấu trúc và giọng điệu"

### Bước 2 — Thêm thuật ngữ chuyên ngành (3 phút)
- Liệt kê 3-5 thuật ngữ AI thường dùng sai trong lĩnh vực bạn
- Ghi định nghĩa ngắn gọn

### Bước 3 — Thêm 1 quy tắc "không làm" (2 phút)
- Nghĩ: "Lỗi nghiêm trọng nhất AI có thể gây ra trong công việc tôi?"
- Viết thành quy tắc KHÔNG BAO GIỜ

### Bước 4 — Test lại với tác vụ phức tạp hơn (5 phút)
```bash
# Trong Claude Code, yêu cầu tác vụ khó hơn Bài tập 1
# Ví dụ: tác vụ cần nhiều bước, cần đúng thuật ngữ, cần đúng format
```

So sánh: AI có theo ví dụ output không? Có dùng đúng thuật ngữ không?

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Có ví dụ output trong CLAUDE.md | Ít nhất 1 ví dụ output thực | Không có hoặc ví dụ tổng quát |
| Có thuật ngữ chuyên ngành | 3+ thuật ngữ với định nghĩa | Không có thuật ngữ |
| Có quy tắc "không làm" | 1+ quy tắc cụ thể cho ngành | Không có hoặc quá chung |
| Test thành công | AI tạo output theo mẫu và dùng đúng thuật ngữ | Không test |

---

## Ghi chú giảng viên

- **Showcase (1:35–1:45):** 2-3 người chia sẻ CLAUDE.md nâng cao. Lớp bình luận: "CLAUDE.md này có phần nào đặc biệt thông minh?"
- **Insight chính:** "Ví dụ output = few-shot vĩnh viễn. Thay vì paste mẫu mỗi lần chat, bạn lưu 1 lần trong CLAUDE.md, AI tự tham chiếu mãi mãi."
- **Kết nối contract-agent:** "Contract-agent có template hợp đồng làm ví dụ — AI luôn theo đúng format. Bạn vừa làm điều tương tự cho workflow của mình."
- **Homework:** Hoàn thiện CLAUDE.md + hoàn chỉnh bản nháp SKILL.md 6 phần cho Session 5
- **Lỗi thường gặp:** Ví dụ output quá dài (>20 dòng) → nhắc: "1 ví dụ ngắn tốt hơn 3 ví dụ dài"
