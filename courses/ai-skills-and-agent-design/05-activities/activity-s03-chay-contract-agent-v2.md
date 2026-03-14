# Bài tập S3: Chạy Contract-Agent + Đổi Đơn Hàng

## Mục tiêu
Chạy contract-agent trên Claude Code với đơn hàng mẫu, đánh giá kết quả, sau đó sửa đơn hàng và chạy lại để hiểu CLAUDE.md hướng dẫn QUY TRÌNH — không phải từng case.

## Thời gian
22 phút (Bài tập 1: 12 phút + Bài tập 2: 7 phút + Poll: 3 phút)

## Tài liệu cần có
- Claude Code đã cài và chạy thành công
- Thư mục contract-agent-demo (download từ link facilitator)
- Terminal mở sẵn

---

## Bước thực hiện

### Bài tập 1: Chạy contract-agent (12 phút)

**Bước 1 — Mở thư mục (2 phút)**
```bash
cd đường-dẫn/contract-agent-demo
ls
```
Xác nhận thấy: `CLAUDE.md`, `prompt.md`, `Mau-hop-dong-dich-vu-truyen-thong.docx`

**Bước 2 — Khởi động Claude Code (2 phút)**
```bash
claude
```
Claude Code tự đọc `CLAUDE.md` — file hướng dẫn AI.

**Bước 3 — Yêu cầu tạo hợp đồng (5 phút)**
```
Đọc file prompt.md và tạo hợp đồng dịch vụ theo hướng dẫn trong CLAUDE.md.
Sử dụng template Mau-hop-dong-dich-vu-truyen-thong.docx làm mẫu.
```
Đợi agent chạy (1-2 phút).

**Bước 4 — Đánh giá kết quả (3 phút)**

| # | Tiêu chí | Đạt? | Ghi chú |
|---|----------|:----:|---------|
| 1 | Thông tin chính xác? (tên, địa chỉ, MST, dịch vụ, giá) | | |
| 2 | Định dạng đúng mẫu template? | | |
| 3 | Dùng được ngay không cần sửa lớn? | | |

**Nếu xong sớm:** Mở CLAUDE.md, đọc kỹ. Nhận diện: phần nào dẫn đến output tốt? Phần nào thiếu?

---

### Bài tập 2: Đổi đơn hàng, chạy lại (7 phút)

**Bước 1 — Sửa file prompt.md** (2 phút)

Mở `prompt.md` bằng Notepad/VS Code. Sửa:
- Thêm dịch vụ mới: "Tư vấn SEO: 8 triệu VND"
- Đổi tên khách hàng: "Công ty TNHH ABC Technology"
- Đổi đại diện: "Bà Nguyễn Thị Minh — Phó GĐ"

**Bước 2 — Chạy lại Claude Code** (3 phút)
```
Đọc file prompt.md (đã cập nhật) và tạo hợp đồng mới.
```

**Bước 3 — So sánh** (2 phút)
- Output có cập nhật đúng tên công ty mới?
- Dịch vụ mới (SEO) có xuất hiện?
- Tổng VAT tính lại đúng không?

**Insight:** "Contract-agent xử lý input khác nhau đều cùng cách — vì CLAUDE.md hướng dẫn QUY TRÌNH, không phải từng case cụ thể."

---

## During Activity — Facilitator micro-actions

| Thời điểm | Hành động |
|-----------|-----------|
| Phút 0-2 | "Ai thấy file đầy đủ?" → Reactions. Hỗ trợ download nếu thiếu. |
| Phút 2-4 | Chia sẻ màn hình mẫu nếu nhiều người bí bước Claude Code |
| Phút 5-8 | "Ai thấy output rồi?" → Reactions. Ưu tiên hỗ trợ lỗi. |
| Phút 8-12 | Đọc 1-2 kết quả qua chat. "Output có dùng được ngay không?" |
| BT2: Phút 0-3 | "Ai đã sửa prompt.md?" → Gợi ý: "Thêm 1 dòng dịch vụ mới." |
| Intervention triggers | `claude: command not found` → hướng dẫn cài lại. Output tiếng Anh → thêm "Viết tiếng Việt". |
| Xong sớm | Đọc CLAUDE.md kỹ, ghi 2 điểm mạnh + 1 điểm cần cải thiện |

**Backup plan:** Nếu >40% lớp lỗi → facilitator demo screen share, học viên theo dõi và ghi chú đánh giá.

---

## Tiêu chí thành công

- [ ] Chạy Claude Code thành công, agent tạo file output
- [ ] Đánh giá kết quả theo 3 tiêu chí (điền bảng)
- [ ] (Extension) Sửa prompt.md và chạy lại thành công
- [ ] (Extension) Nhận ra output cập nhật đúng thông tin mới
- [ ] (Challenge) Nhận diện phần CLAUDE.md nào ảnh hưởng output
