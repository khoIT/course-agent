# Bài tập 1: Chạy contract-agent

## Thông tin chung

- **Thời lượng:** 12 phút (0:53–1:05)
- **Session:** 3 — Áp dụng: Cowork + Claude Code
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Chạy contract-agent trên Claude Code với đơn hàng mẫu, đánh giá kết quả theo 3 tiêu chí (Ref: S3-Terminal, S3-EO3)

---

## Chuẩn bị

**Giảng viên:**
- Contract-agent folder đã zip và share link download trước buổi học
- Claude Code hoạt động trên máy facilitator (đã test)
- Backup: video recording chạy contract-agent (phòng lỗi live)

**Học viên:**
- Claude Code đã cài và chạy lệnh đầu tiên thành công (setup ở 0:40–0:53)
- Đã download contract-agent folder từ link facilitator
- Terminal mở sẵn

---

## Cấu trúc thư mục contract-agent

```
contract-agent-demo/
├── CLAUDE.md          ← Hướng dẫn AI (đã đọc ở Block A)
├── prompt.md          ← Đơn hàng Google Vietnam (input)
├── bai-tap-prompt.md  ← Bài tập thêm
├── mau-skill.md       ← Template SKILL.md cho Session 5
└── Mau-hop-dong-dich-vu-truyen-thong.docx  ← Template hợp đồng
```

---

## Hướng dẫn từng bước

### Bước 1 — Mở thư mục contract-agent (2 phút)
```bash
# Di chuyển đến thư mục contract-agent đã download
cd đường-dẫn/contract-agent-demo

# Kiểm tra file có đầy đủ
ls
```
Xác nhận thấy: `CLAUDE.md`, `prompt.md`, `Mau-hop-dong-dich-vu-truyen-thong.docx`

### Bước 2 — Chạy Claude Code (2 phút)
```bash
# Khởi động Claude Code trong thư mục
claude
```
Claude Code sẽ tự động đọc `CLAUDE.md` — đây là file hướng dẫn AI.

### Bước 3 — Yêu cầu tạo hợp đồng (5 phút)
Gõ lệnh trong Claude Code:
```
Đọc file prompt.md và tạo hợp đồng dịch vụ theo hướng dẫn trong CLAUDE.md.
Sử dụng template Mau-hop-dong-dich-vu-truyen-thong.docx làm mẫu.
```

Đợi Claude Code:
1. Đọc `CLAUDE.md` (hướng dẫn)
2. Đọc `prompt.md` (đơn hàng Google Vietnam)
3. Đọc template `.docx` (mẫu hợp đồng)
4. Tạo file hợp đồng output

### Bước 4 — Đánh giá kết quả (3 phút)
Mở file hợp đồng output. Đánh giá theo **3 tiêu chí:**

| # | Tiêu chí | Đạt (✓) | Chưa đạt (✗) | Ghi chú |
|---|----------|---------|---------------|---------|
| 1 | Thông tin chính xác? (tên, địa chỉ, MST, dịch vụ, giá) | | | |
| 2 | Định dạng đúng mẫu template? (điều khoản, số thứ tự) | | | |
| 3 | Dùng được ngay không cần sửa lớn? | | | |

---

## Thông tin đơn hàng mẫu (trong prompt.md)

```
Công ty: TNHH Google Vietnam
Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
MST: 028476564
Đại diện: Ông Khá Văn Bảnh – Giám Đốc
Dịch vụ: (1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND
VAT: 8%
Thời gian thực hiện: 10 ngày từ ngày ký hợp đồng
```

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Chạy Claude Code thành công | Claude Code đọc file và tạo output | Lỗi cài đặt hoặc không chạy được |
| Kết quả hợp đồng có nội dung | File output có thông tin từ đơn hàng | File trống hoặc sai hoàn toàn |
| Đánh giá 3 tiêu chí | Điền đủ 3 dòng trong bảng đánh giá | Không đánh giá hoặc chỉ nói "OK" |

---

## Ghi chú giảng viên

- **Poll #3 ngay sau bài tập (1:05–1:10):** "Kết quả hợp đồng đánh giá thế nào?" — ưu tiên hỗ trợ nhóm "Lỗi, không chạy được"
- **Lỗi thường gặp và cách xử lý:**
  - `claude: command not found` → kiểm tra cài đặt: `npm install -g @anthropic-ai/claude-code`
  - Claude Code không đọc CLAUDE.md → kiểm tra đang đúng thư mục: `pwd`
  - Output bằng tiếng Anh → thêm "Viết bằng tiếng Việt" vào yêu cầu
  - File docx không đọc được → Claude Code cần quyền truy cập file
- **Backup plan:** Nếu >40% lớp gặp lỗi → facilitator demo trên screen share, học viên theo dõi và ghi chú
- **Kết nối:** "Bạn vừa chạy ĐÚNG quy trình mà contract-agent thực hiện hàng ngày — đọc input, xử lý, tạo output. Session 4 bạn sẽ tự viết CLAUDE.md cho workflow của mình."
- **Thời gian:** Nếu học viên xong sớm → chuyển sang Bài tập 2 (đổi đơn hàng)
