# Bài tập 2: Test & Iterate

## Thông tin chung

- **Thời lượng:** 10 phút (1:00–1:10)
- **Session:** 5 — Xây dựng Skill của riêng bạn (Capstone)
- **Block:** B — Build Time
- **Mục tiêu học tập:** Chạy SKILL.md trên Claude Code, đánh giá kết quả, sửa ít nhất 1 vòng (Ref: S5-Terminal, S5-EO1)

---

## Chuẩn bị

**Giảng viên:**
- Rubric 3 tiêu chí hiển thị trên slide
- Sẵn sàng hỗ trợ debug qua screen share

**Học viên:**
- SKILL.md hoàn chỉnh từ Bài tập 1
- Claude Code hoạt động, CLAUDE.md đã có trong thư mục
- File input cho skill (nếu cần)

---

## Hướng dẫn từng bước

### Bước 1 — Chạy SKILL.md lần 1 (4 phút)

```bash
# Trong Claude Code, yêu cầu chạy skill
Đọc file SKILL.md và thực hiện theo hướng dẫn trong đó.
Input: [chỉ file input hoặc paste dữ liệu]
```

Đợi kết quả. Lưu output lần 1.

### Bước 2 — Đánh giá theo 3 tiêu chí (2 phút)

| # | Tiêu chí (từ rubric trình bày) | Điểm (1-5) | Ghi chú |
|---|-------------------------------|------------|---------|
| 1 | Vấn đề giải quyết rõ ràng? | /5 | |
| 2 | Skill chạy được không lỗi? | /5 | |
| 3 | Kết quả dùng được ngay? | /5 | |

### Bước 3 — Sửa SKILL.md (3 phút)
Dựa trên đánh giá, sửa **ít nhất 1 điểm:**

| Vấn đề | Sửa ở đâu trong SKILL.md |
|--------|--------------------------|
| Output sai format | Cập nhật phần 5 (Ví dụ) — thêm mẫu cụ thể hơn |
| Thiếu thông tin | Cập nhật phần 3 (Input) — liệt kê đầy đủ hơn |
| Bước không rõ | Cập nhật phần 4 (Các bước) — chia nhỏ bước lớn |
| AI bịa nội dung | Cập nhật phần 6 (Ràng buộc) — thêm KHÔNG BAO GIỜ |

### Bước 4 — Chạy lại lần 2 (1 phút)
```bash
# Chạy lại với SKILL.md đã sửa
Đọc SKILL.md (đã cập nhật) và thực hiện lại.
```

Ghi lại: lần 2 tốt hơn lần 1 ở điểm nào?

---

## Bảng so sánh trước/sau

| Tiêu chí | Lần 1 | Lần 2 (sau sửa) |
|----------|-------|-----------------|
| Format output | | |
| Độ chính xác | | |
| Dùng được ngay? | | |
| Điểm tổng /15 | | |

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Chạy SKILL.md ít nhất 1 lần | Claude Code tạo output | Không chạy được |
| Đánh giá 3 tiêu chí | Điền đủ bảng đánh giá | Không đánh giá |
| Sửa ít nhất 1 vòng | SKILL.md có thay đổi sau lần 1 | Giữ nguyên dù có lỗi |

---

## Ghi chú giảng viên

- **Peer preview sau bài tập (1:10–1:15):** Chat: "Mô tả skill trong 1 câu: 'Skill này giúp [ai] làm [gì] tốt hơn bằng cách [cách nào].'"
- **Iteration là kỹ năng chính.** Nhấn mạnh: "Không ai viết SKILL.md hoàn hảo lần đầu. Vòng lặp test → sửa → test lại là quy trình bình thường."
- **Nếu SKILL.md không chạy được:**
  - Kiểm tra: CLAUDE.md và SKILL.md cùng thư mục?
  - Kiểm tra: file input có tồn tại?
  - Backup: facilitator chạy hộ 1-2 skill tiêu biểu trên screen share
- **Kết nối contract-agent:** "Contract-agent cũng trải qua nhiều vòng sửa — phiên bản đầu tiên luôn chưa hoàn hảo"
- **Chuẩn bị trình bày:** Nhắc: "Block C bắt đầu sau break — chuẩn bị 3 phút: (1) vấn đề, (2) demo, (3) kết quả"
