# Bài tập 1: Viết CLAUDE.md hoàn chỉnh

## Thông tin chung

- **Thời lượng:** 15 phút (0:40–0:55)
- **Session:** 4 — Context Engineering + Công cụ MCP
- **Block:** B — Hands-on Practice
- **Mục tiêu học tập:** Hoàn thiện CLAUDE.md 4 phần, test với Claude Code, so sánh có/không có CLAUDE.md (Ref: S4-EO2)

---

## Chuẩn bị

**Giảng viên:**
- Demo có/không có CLAUDE.md đã chạy ở Block A (0:08–0:20)
- Contract-agent CLAUDE.md hiển thị trên slide làm tham chiếu

**Học viên:**
- Bản nháp CLAUDE.md từ homework Session 3
- Claude Code cài và hoạt động
- Text editor mở sẵn

---

## Hướng dẫn từng bước

### Bước 1 — Mở bản nháp homework (2 phút)
- Mở file CLAUDE.md bản nháp từ Session 3
- Kiểm tra 4 phần: Vai trò, Quy tắc, Workflow, Công cụ
- Xác định phần nào cần bổ sung

### Bước 2 — Hoàn thiện 4 phần (8 phút)

**Checklist hoàn thiện:**

| Phần | Câu hỏi kiểm tra | ✓ |
|------|-------------------|---|
| Vai trò | Có chuyên môn cụ thể? Có phong cách viết? | |
| Quy tắc | Có ≥2 LUÔN và ≥2 KHÔNG? | |
| Workflow | Có ≥3 bước theo thứ tự? Có input → output rõ? | |
| Công cụ | Liệt kê file input/output/template? | |

**Mẹo hoàn thiện:**
- **Vai trò:** Thêm 1 câu về đối tượng: "Viết cho [ai đọc]"
- **Quy tắc:** Thêm 1 quy tắc về ngôn ngữ: "LUÔN viết bằng tiếng Việt"
- **Workflow:** Thêm bước kiểm tra cuối: "Kiểm tra lại [tiêu chí cụ thể]"
- **Công cụ:** Ghi rõ đường dẫn file nếu có

### Bước 3 — Lưu và test với Claude Code (3 phút)
```bash
# Lưu CLAUDE.md vào thư mục làm việc
# Mở Claude Code trong thư mục đó
cd thu-muc-cua-ban
claude

# Yêu cầu AI thực hiện 1 tác vụ thực tế
# Ví dụ: "Soạn báo cáo tuần từ dữ liệu trong file data.md"
```

### Bước 4 — So sánh có/không CLAUDE.md (2 phút)
Ghi lại **3 điểm khác biệt cụ thể:**

| # | Tiêu chí | Không có CLAUDE.md | Có CLAUDE.md |
|---|----------|-------------------|--------------|
| 1 | Phong cách viết | | |
| 2 | Độ chính xác nội dung | | |
| 3 | Cần sửa bao nhiêu? | | |

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| CLAUDE.md có đủ 4 phần hoàn chỉnh | Mỗi phần ≥2 dòng nội dung cụ thể | Phần trống hoặc chỉ placeholder |
| Test trên Claude Code | Chạy được 1 tác vụ với CLAUDE.md | Không test hoặc lỗi |
| So sánh 3 điểm khác biệt | Ghi cụ thể 3 điểm | Chỉ nói "tốt hơn" |

---

## Ghi chú giảng viên

- **Poll #2 ngay sau (0:55–1:00):** "Kết quả có CLAUDE.md tốt hơn bao nhiêu?" — kỳ vọng >60% chọn "Tốt hơn nhiều" hoặc "Khác hoàn toàn"
- **Nếu học viên chưa có bản nháp homework:** Cho dùng template trống + 10 phút thay vì 8 phút ở Bước 2
- **Lỗi thường gặp:**
  - CLAUDE.md quá dài (>50 dòng cho bản đầu tiên) → nhắc: "Bắt đầu ngắn gọn, thêm dần"
  - Quy tắc mâu thuẫn nhau → kiểm tra: "LUÔN viết dài" vs. "dưới 200 từ"
- **Kết nối contract-agent:** "Contract-agent CLAUDE.md chỉ ~25 dòng nhưng rất hiệu quả. Ngắn gọn + cụ thể > dài + chung chung"
- **Context engineering insight:** "CLAUDE.md nằm trong Smart Zone — AI đọc nó ĐẦU TIÊN mỗi lần, như sổ tay nhân viên luôn để trên bàn"
