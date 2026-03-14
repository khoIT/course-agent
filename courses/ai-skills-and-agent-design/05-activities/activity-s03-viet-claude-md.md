# Bài tập S3: Phác Thảo CLAUDE.md Cá Nhân

## Mục tiêu
Viết bản nháp CLAUDE.md đầu tiên cho workflow cá nhân theo cấu trúc WHY-WHAT-HOW, bao gồm ví dụ output (few-shot cấp hệ thống).

## Thời gian
17 phút (Block C: 1:20–1:37)

## Tài liệu cần có
- Template CLAUDE.md WHY-WHAT-HOW (handout Mục 8)
- Workflow mapping từ Session 2 (tác vụ đã chọn)
- Claude Code hoặc Google Docs (nếu chưa cài Code)

---

## Bước thực hiện

### Bước 1 — Chọn tác vụ + Viết WHY (3 phút)

Chọn 1 tác vụ lặp lại từ workflow mapping Session 2.

Viết phần WHY:
```markdown
## WHY — Mục đích
Agent này tồn tại để ___.
```

**Ví dụ:**
- "Agent này tồn tại để tóm tắt biên bản họp thành 5 action items rõ ràng."
- "Agent này tồn tại để tạo báo cáo tiến độ tuần từ các email cập nhật dự án."

### Bước 2 — Viết WHAT (4 phút)

Liệt kê 3 việc AI **LÀM** và 2 việc AI **KHÔNG LÀM**:

```markdown
## WHAT — Phạm vi
**Làm:**
- [Việc cụ thể 1]
- [Việc cụ thể 2]
- [Việc cụ thể 3]

**KHÔNG làm:**
- [Giới hạn 1 — VD: không tự gửi email]
- [Giới hạn 2 — VD: không thay đổi số liệu tài chính]
```

**Mẹo:** Phần "KHÔNG làm" quan trọng hơn — giúp AI tránh lỗi phổ biến.

### Bước 3 — Viết HOW (5 phút)

Viết 4-5 bước workflow theo thứ tự:

```markdown
## HOW — Quy trình
1. Đọc [file/thông tin đầu vào]
2. Trích xuất [thông tin cần thiết]
3. [Xử lý / phân tích / tổng hợp]
4. Tạo output theo format [mô tả]
5. Kiểm tra [tiêu chí chất lượng]
```

### Bước 4 — Thêm ví dụ output (3 phút)

```markdown
## Ví dụ output
[Paste 1 đoạn output mẫu — format + nội dung bạn mong muốn]
```

**Frame:** "Cho nhân viên mới xem mẫu — chính xác kỹ thuật few-shot nhưng ở cấp hệ thống."

### Bước 5 — Lưu + Test (2 phút)

- **Có Claude Code:** Lưu thành `CLAUDE.md` trong thư mục làm việc. Chạy `claude` và test 1 tác vụ.
- **Chưa cài Code:** Lưu trên Google Docs. Sẽ test trong homework.

---

## During Activity — Facilitator micro-actions

| Thời điểm | Hành động |
|-----------|-----------|
| Phút 0-3 | "Ai đã chọn tác vụ?" → Reactions. Gợi ý cho ai chưa chọn: "Tác vụ nào mất >30 phút mỗi tuần?" |
| Phút 3-7 | Chat: "Paste phần WHAT (chỉ 2 dòng KHÔNG làm) vào chat." Đọc 2 ví dụ. |
| Phút 7-12 | "Phần HOW khó nhất — ai cần gợi ý?" Gợi ý: "Mô tả chính xác bạn làm thủ công thế nào, rồi chuyển thành bước cho AI." |
| Phút 12-15 | "Ai đã thêm ví dụ output?" → Nhấn mạnh: "Ví dụ là phần tăng chất lượng nhiều nhất." |
| Intervention | Nếu viết quá chung: "Thay 'viết báo cáo' thành 'viết báo cáo 5 bullets, mỗi bullet có: task + status + blocker'." |
| Xong sớm | Test CLAUDE.md với Claude Code ngay. Hoặc viết thêm 1 ví dụ output thứ 2. |

---

## Tiêu chí thành công

- [ ] CLAUDE.md có đủ 3 phần: WHY, WHAT, HOW
- [ ] WHAT có ít nhất 2 điều KHÔNG làm (giới hạn rõ ràng)
- [ ] HOW có ít nhất 4 bước theo thứ tự
- [ ] (Extension) Có ví dụ output mẫu
- [ ] (Challenge) Test được với Claude Code, so sánh CÓ/KHÔNG CLAUDE.md
