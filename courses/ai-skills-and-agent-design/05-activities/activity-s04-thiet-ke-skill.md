# Bài tập S4: Thiết Kế SKILL.md + Kết Nối MCP

## Mục tiêu
Phân tích workflow thành skill 6 phần, viết SKILL.md hoàn chỉnh, kết nối MCP filesystem, test với Claude Code.

## Thời gian
35 phút (BT1: 15 phút + BT2: 8 phút + BT3: 15 phút)

## Tài liệu cần có
- Template SKILL.md 6 phần (handout Mục 9)
- CLAUDE.md từ homework Session 3
- Claude Code đang chạy
- Hướng dẫn MCP filesystem (slide)

---

## Bước thực hiện

### Bài tập 1: Viết SKILL.md (15 phút, Block B: 0:40–0:55)

**Bước 1 — Workflow Decomposition (3 phút)**

Chọn tác vụ từ homework S3. Liệt kê TẤT CẢ bước hiện tại:

| Bước | Mất phút | AI làm được? | Input | Output |
|------|----------|:------------:|-------|--------|
| 1. ___ | ___ | Có/Không | ___ | ___ |
| 2. ___ | ___ | Có/Không | ___ | ___ |
| 3. ___ | ___ | Có/Không | ___ | ___ |

Đánh dấu bước AI làm được → đó là nội dung SKILL.md.

**Bước 2 — Viết Purpose + Context + Input (4 phút)**

```markdown
# SKILL: [Tên quy trình]

## 1. Purpose
Skill này [động từ: tạo/phân tích/tóm tắt] ___ từ ___, output là ___.

## 2. Context
- Loại công việc: [mô tả]
- Quy tắc áp dụng: [nếu có]

## 3. Input
- File: [tên, định dạng]
- Thông tin bắt buộc: [liệt kê]
```

**Bước 3 — Viết Steps (4 phút)**

Ít nhất 4 bước, cụ thể, theo thứ tự:
```markdown
## 4. Steps
1. Đọc [file input], trích xuất [thông tin cụ thể]
2. [Xử lý: phân tích / so sánh / tổng hợp]
3. Tạo output theo format [mô tả cụ thể]
4. Kiểm tra output theo [tiêu chí]
```

**Bước 4 — Viết Example output (2 phút)**
```markdown
## 5. Examples
[Paste 1 đoạn output mẫu thực tế — format + nội dung mong muốn]
```

**Bước 5 — Viết Constraints (2 phút)**
```markdown
## 6. Constraints
- KHÔNG [hành động bị cấm]
- KHÔNG [giới hạn]
- Tiêu chí chất lượng: [output đạt chuẩn khi ___]
```

---

### Bài tập 2: Kết nối MCP + Test (8 phút, Block B: 1:00–1:08)

**Foundation: Test SKILL.md bằng paste thủ công**

Mở Claude Code, paste nội dung SKILL.md, cung cấp input, đánh giá output.

**Extension: Kết nối MCP filesystem**

Bước 1 — Thêm MCP vào settings Claude Code:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:/Users/TenBan/Documents"]
    }
  }
}
```
(Thay đường dẫn thư mục thực tế của bạn)

Bước 2 — Khởi động lại Claude Code. Yêu cầu:
```
Đọc file [tên-file] trong thư mục và chạy skill theo SKILL.md.
```

Bước 3 — Đánh giá: AI đọc file từ máy thành công không?

**Challenge: Chạy với input khác**

Tạo 1 file input mới (nội dung khác). Chạy cùng SKILL.md. Output có consistent không?

---

### Bài tập 3: Iterate SKILL.md (15 phút, Block C: 1:20–1:35)

1. Chạy SKILL.md lần 2 với input khác
2. Đánh giá: output consistent? Tiêu chí chất lượng đạt?
3. Sửa SKILL.md: thêm ví dụ thứ 2, cụ thể hóa constraints, thêm edge case
4. Chạy lần 3, so sánh v1 vs v3
5. Ghi lại: sửa gì → kết quả cải thiện thế nào?

**Insight:** "Skill tốt = skill đã qua 3+ vòng iterate."

---

## During Activity — Facilitator micro-actions

| Thời điểm | Hành động |
|-----------|-----------|
| BT1 Phút 0-3 | "Ai liệt kê xong bảng bước?" → Gợi ý: "Mô tả việc bạn làm thủ công hàng ngày." |
| BT1 Phút 3-7 | Chat: "Purpose của bạn là gì? 1 câu." Đọc 2-3 ví dụ. |
| BT1 Phút 7-12 | Poll checkpoint: "Đang ở đâu?" Hỗ trợ nhóm "Gặp khó". |
| BT1 Phút 12-15 | "Ai có Constraints rồi?" → Nhấn mạnh: "Tiêu chí chất lượng = phần thường bị bỏ quên." |
| BT2 Phút 0-4 | Nếu MCP lỗi → "Vẫn test bằng paste thủ công, MCP là bonus." |
| BT2 Phút 4-8 | "MCP hoạt động không?" → Poll nhanh. Hỗ trợ lỗi. |
| BT3 | "Ai đang iterate lần mấy?" → Khuyến khích: "3 lần minimum." |
| Intervention | SKILL.md quá chung → "Thay 'phân tích dữ liệu' thành 'so sánh 3 cột: chỉ tiêu, thực tế, chênh lệch %'" |
| Xong sớm | Viết ví dụ output thứ 2, hoặc thêm edge case vào Constraints |

---

## 3 ví dụ SKILL.md tham khảo

**HR Onboarding:** Job desc + handbook → Welcome Guide cá nhân hóa cho nhân viên mới.
**Expense Audit:** Expense reports + policy → Audit report, flag vi phạm, gợi ý approve/reject.
**Content Workflow:** Content brief + outline → Draft hoàn chỉnh + SEO recommendations.

---

## Tiêu chí thành công

- [ ] SKILL.md có đủ 6 phần (Purpose/Context/Input/Steps/Examples/Constraints)
- [ ] Steps có ít nhất 4 bước cụ thể
- [ ] Có ít nhất 1 ví dụ output mẫu
- [ ] (Extension) Test thành công trên Claude Code
- [ ] (Extension) Kết nối MCP filesystem
- [ ] (Challenge) Iterate ít nhất 2 lần, ghi nhận cải thiện
