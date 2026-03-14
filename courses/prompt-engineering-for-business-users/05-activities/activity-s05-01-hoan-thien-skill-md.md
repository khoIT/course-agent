# Bài tập 1: Hoàn thiện SKILL.md (Workshop)

## Thông tin chung

- **Thời lượng:** 15 phút (0:40–0:55)
- **Session:** 5 — Xây dựng Skill của riêng bạn (Capstone)
- **Block:** B — Build Time
- **Mục tiêu học tập:** Viết SKILL.md hoàn chỉnh 6 phần cho 1 quy trình công việc cá nhân (Ref: S5-Terminal, S5-EO2)

---

## Chuẩn bị

**Giảng viên:**
- SKILL.md anatomy đã giảng ở Block A (0:08–0:18)
- Workflow decomposition 4 bước đã demo (0:18–0:25)
- 3 lỗi thường gặp đã cảnh báo (0:25–0:30)
- Đi "vòng quanh" qua Zoom chat hỗ trợ 1-1

**Học viên:**
- Bản nháp SKILL.md từ homework Session 4
- Claude Code hoạt động
- CLAUDE.md cá nhân đã hoàn thiện (Session 4)

---

## Template SKILL.md (6 phần)

```markdown
# SKILL.md — [Tên skill của bạn]

## 1. Mục tiêu
Skill này giúp [ai?] làm [gì?] bằng cách [cách nào?].
Kết quả cuối cùng: [output cụ thể].

## 2. Ngữ cảnh
AI cần biết trước khi bắt đầu:
- Lĩnh vực: [ngành/chuyên môn]
- Đối tượng đọc output: [ai?]
- Phong cách: [chuyên nghiệp/thân thiện/ngắn gọn]

## 3. Input
- File đầu vào: [tên file, định dạng]
- Dữ liệu cần có: [liệt kê thông tin cần thiết]
- Nguồn: [file trên máy / paste trực tiếp / MCP]

## 4. Các bước thực hiện
1. Đọc [input gì]
2. Phân tích/trích xuất [thông tin gì]
3. Xử lý [cách nào]
4. Tạo [output gì]
5. Kiểm tra [tiêu chí gì]

## 5. Ví dụ
Input mẫu:
[paste 1 ví dụ input ngắn]

Output mong muốn:
[paste 1 ví dụ output tương ứng]

## 6. Ràng buộc
- LUÔN: [quy tắc phải tuân thủ]
- KHÔNG BAO GIỜ: [quy tắc cấm]
- Giới hạn: [độ dài, ngôn ngữ, format]
```

---

## Hướng dẫn từng bước

### Bước 1 — Mở bản nháp homework (2 phút)
- Mở SKILL.md bản nháp từ homework Session 4
- Xác định phần nào đã có, phần nào thiếu
- Mở `contract-agent-demo/mau-skill.md` để tham chiếu

### Bước 2 — Hoàn thiện 6 phần (10 phút)

**Checklist — đánh dấu khi xong:**

| # | Phần | Câu hỏi kiểm tra | ✓ |
|---|------|-------------------|---|
| 1 | Mục tiêu | Rõ ràng AI tạo ra cái gì? | |
| 2 | Ngữ cảnh | AI biết đủ nền tảng chưa? | |
| 3 | Input | Liệt kê đủ file/dữ liệu đầu vào? | |
| 4 | Các bước | ≥3 bước, có thứ tự logic? | |
| 5 | Ví dụ | Có ít nhất 1 cặp input → output? | |
| 6 | Ràng buộc | Có quy tắc LUÔN và KHÔNG? | |

### Bước 3 — Self-check trước khi test (3 phút)
Trả lời 3 câu hỏi:
1. "Nếu đưa SKILL.md cho người khác, họ có chạy được không cần hỏi thêm?"
2. "Ví dụ output có đủ cụ thể để AI biết 'đúng' trông như thế nào?"
3. "Ràng buộc có ngăn được lỗi nghiêm trọng nhất?"

---

## Ví dụ SKILL.md (tham khảo — lấy cảm hứng từ contract-agent)

```markdown
# SKILL.md — Tạo báo cáo phân tích đối thủ cạnh tranh
## 1. Mục tiêu
Giúp marketing manager tạo báo cáo phân tích đối thủ. Kết quả: file 2-3 trang.
## 2. Ngữ cảnh
Marketing B2B công nghệ VN. Đối tượng: Ban GĐ. Phong cách: chuyên nghiệp, ngắn gọn.
## 3. Input
File: doi-thu-data.md (tên, sản phẩm, giá, thị phần, điểm mạnh/yếu)
## 4. Các bước
1. Đọc doi-thu-data.md → 2. Phân loại trực tiếp/gián tiếp → 3. So sánh 5 tiêu chí
→ 4. Xếp hạng đe dọa → 5. Đề xuất 3 chiến lược → 6. Tạo bao-cao-doi-thu.md
## 5. Ví dụ
Input: "Đối thủ A: SaaS CRM, 5tr/th, 30% thị phần, mạnh UX"
Output: "| A | Trực tiếp | 5tr/th | 30% | CAO | → Cạnh tranh bằng tích hợp + tiếng Việt"
## 6. Ràng buộc
LUÔN: trích nguồn, viết tiếng Việt. KHÔNG: bịa số liệu. Giới hạn: <1500 từ.
```

---

## Tiêu chí đánh giá

| Tiêu chí | Đạt | Chưa đạt |
|----------|-----|----------|
| Đủ 6 phần | Tất cả 6 phần có nội dung cụ thể | Thiếu 1+ phần |
| Ví dụ input → output | Có cặp ví dụ cụ thể, thực tế | Không có ví dụ hoặc quá chung |
| Self-check 3/3 | Trả lời "Có" cả 3 câu | 1+ câu "Không" chưa sửa |

---

## Ghi chú giảng viên

- **Poll #2 checkpoint (0:55–1:00):** "Bạn đang ở giai đoạn nào?" — điều chỉnh: nhóm "Xong" giúp nhóm "Đang viết"
- **Đi vòng quanh qua Zoom chat:** "Bạn đang viết skill gì? Gặp vướng mắc gì?" — hỗ trợ 1-1 qua screen share nếu cần
- **Lỗi thường gặp:**
  - Quá chung chung (thiếu ví dụ) → hỏi: "Output đúng trông như thế nào? Paste 1 mẫu vào"
  - Quá chi tiết (micro-manage) → hỏi: "Bạn có cần AI hỏi lại bước này không? Nếu không, để AI tự quyết"
  - Thiếu tiêu chí chất lượng → hỏi: "Bạn đánh giá output 'tốt' vs. 'tệ' dựa vào gì?"
- **Kết nối contract-agent:** "Contract-agent SKILL.md cũng có đúng 6 phần này — bạn đang xây cùng cấu trúc cho workflow riêng"
