# Bài tập 2: Kết nối MCP tool

## Thông tin chung

- **Thời lượng:** 10 phút (1:00–1:10)
- **Session:** 4 — Context Engineering + Công cụ MCP
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Kết nối và kiểm tra 1 công cụ MCP (filesystem) trong Claude Code (Ref: S4-EO3)

---

## Chuẩn bị

**Giảng viên:**
- Demo MCP filesystem đã chạy ở Block A (0:30–0:35)
- Step-by-step guide trên slide hoặc handout
- Backup: nếu MCP lỗi, facilitator demo trên screen share

**Học viên:**
- Claude Code hoạt động (đã test ở Bài tập 1)
- Có ít nhất 1 file text/markdown trên máy để test đọc

---

## MCP là gì? (Nhắc lại)

**MCP (Model Context Protocol)** = ổ cắm điện chuẩn quốc tế cho AI.
- Cắm công cụ nào cũng chạy
- AI có thể đọc file, truy cập web, kết nối database
- Không cần copy-paste dữ liệu vào chat

---

## Hướng dẫn từng bước

### Bước 1 — Cấu hình MCP filesystem (4 phút)

Trong Claude Code, chạy lệnh:
```bash
# Thêm MCP filesystem server
claude mcp add filesystem -- npx -y @anthropic-ai/mcp-filesystem thu-muc-cua-ban
```

Thay `thu-muc-cua-ban` bằng đường dẫn thư mục bạn muốn AI truy cập.

**Ví dụ:**
- Windows: `claude mcp add filesystem -- npx -y @anthropic-ai/mcp-filesystem C:/Users/ten-ban/Documents`
- Mac: `claude mcp add filesystem -- npx -y @anthropic-ai/mcp-filesystem /Users/ten-ban/Documents`

### Bước 2 — Kiểm tra kết nối (3 phút)
Trong Claude Code, yêu cầu:
```
Hãy liệt kê các file trong thư mục tôi vừa kết nối.
```

Xác nhận: AI có liệt kê đúng file trong thư mục không?

### Bước 3 — Test đọc file (3 phút)
Yêu cầu Claude Code đọc 1 file cụ thể:
```
Đọc file [tên-file] và tóm tắt nội dung trong 3 câu.
```

Xác nhận: AI đọc đúng nội dung file, không bịa?

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Cấu hình MCP thành công | Lệnh chạy không lỗi | Gặp lỗi cài đặt |
| AI liệt kê được file | Danh sách file đúng | Lỗi hoặc không thấy file |
| AI đọc đúng nội dung file | Tóm tắt khớp nội dung thực | Bịa hoặc sai nội dung |

---

## Ghi chú giảng viên

- **Poll #3 ngay sau (1:10–1:15):** "MCP filesystem có hoạt động không?" — ưu tiên hỗ trợ nhóm lỗi
- **Lỗi thường gặp:**
  - `npx: command not found` → cần cài Node.js: https://nodejs.org
  - Permission denied → kiểm tra quyền truy cập thư mục
  - MCP timeout → thử restart Claude Code: thoát và mở lại
  - File không hiện → kiểm tra đường dẫn chính xác (dấu `/` không phải `\`)
- **Bảo mật:** Nhắc học viên: "Chỉ kết nối thư mục bạn muốn AI đọc. KHÔNG kết nối toàn bộ ổ cứng. KHÔNG kết nối thư mục có file mật."
- **Nếu >40% gặp lỗi:** Chuyển sang demo trên screen share, học viên ghi chú để tự cài sau
- **Kết nối contract-agent:** "Contract-agent đọc file đơn hàng trực tiếp — MCP chính là cơ chế cho phép điều đó"
