# Contract Agent Demo — Tạo Hợp Đồng Tự Động

## Đây là gì?

Đây là một ví dụ thực tế về **AI Agent** — một chương trình AI có thể tự động tạo hợp đồng dịch vụ từ thông tin đơn hàng của khách hàng.

Trong ví dụ này, AI sẽ:
1. Đọc thông tin đơn hàng từ file `prompt.md` (khách hàng Google Vietnam)
2. Dùng mẫu hợp đồng từ file `Mau-hop-dong-dich-vu-truyen-thong.docx`
3. Tự động điền thông tin và tạo ra hợp đồng hoàn chỉnh

---

## Cách sử dụng

### Bước 1: Mở Claude Code
Mở terminal, điều hướng vào thư mục này:
```
cd contract-agent-demo
```

### Bước 2: Chạy agent
Gõ lệnh:
```
claude
```

Claude Code sẽ tự động đọc file `CLAUDE.md` và biết phải làm gì — không cần gõ thêm hướng dẫn nào.

### Bước 3: Xem kết quả
Claude sẽ tạo ra một file hợp đồng hoàn chỉnh bằng tiếng Việt dựa trên thông tin trong `prompt.md`.

---

## Các file trong thư mục

| File | Mô tả |
|------|-------|
| `CLAUDE.md` | Hướng dẫn cho AI — định nghĩa vai trò và nhiệm vụ của agent |
| `prompt.md` | Thông tin đơn hàng của khách hàng (đầu vào) |
| `Mau-hop-dong-dich-vu-truyen-thong.docx` | Mẫu hợp đồng gốc (AI sẽ dùng file này) |
| `bai-tap-prompt.md` | Bài tập thực hành — thay đổi và mở rộng ví dụ này |
| `mau-skill.md` | Template SKILL.md để tự động hóa quy trình (Buổi 5) |

---

## Ghi chú cho học viên

- File `prompt.md` chứa thông tin đơn hàng **mẫu** — bạn có thể chỉnh sửa thoải mái
- Hợp đồng được tạo ra là **ví dụ** — không phải văn bản pháp lý thực tế
- Sau khi chạy thử, hãy làm các bài tập trong `bai-tap-prompt.md`
