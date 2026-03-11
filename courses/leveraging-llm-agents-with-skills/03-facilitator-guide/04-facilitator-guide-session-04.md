# Buổi 4: Skill nâng cao & Claude Code — "Từ đơn giản đến chuyên nghiệp"

**Part of:** [Facilitator Guide Overview](00-facilitator-guide-overview.md)

---

## Chuẩn bị:
- Mở sẵn course-designer skill (từ codebase khóa học này) để demo
- Chuẩn bị bảng so sánh Cowork vs Claude Code
- Test Claude Code terminal (nếu có người follow theo)

---

## Speaker Notes:

**WHY (0:00-0:05):** "Skill buổi 3 của bạn có 20 dòng, vừa vặn. Nhưng nếu agent cần xử lý 100 trang tài liệu? Hoặc quy trình 10 bước? Body 20 dòng không đủ."

**WHAT — 3 kỹ thuật nâng cao (0:05-0:15):**

1. **References folder:** "Agent sẽ tự đọc file trong references/ khi cần. Bạn không cần ghi hết vào SKILL.md."

2. **Progressive disclosure:** "SKILL.md dưới 30 dòng. Kiến thức sâu → references/. Học viên mới → đọc SKILL.md. Chuyên gia → đọc references/."

3. **Multi-step workflow:** "Skill hướng dẫn agent qua từng bước: bước 1 → bước 2 → bước 3. Agent tự nhớ context qua các bước."

**Demo course-designer skill (0:15-0:22):** Mở file explorer → chỉ ra:
- course-designer/SKILL.md (10 dòng, nói agent cần làm cái gì)
- course-designer/references/ → mở:
  - course-design-methodology.md (50 dòng, chi tiết quy trình)
  - evaluation-criteria.md (bảng 18 tiêu chí)

"Thế này, skill SKILL.md ngắn gọn. Nhưng agent có thể đọc methodology + criteria để làm việc chuyên sâu. Đó là 'meta moment': khóa học này được tạo bằng chính skill này!"

**Activity 4 (0:22-0:35):** "Skill Upgrade" — Pairs

Mỗi cặp:
1. Lấy skill từ buổi 3
2. Nâng cấp: thêm references/, tách kiến thức chuyên sâu vào file riêng
3. Thêm multi-step workflow
4. Peer review: bạn review của tôi, tôi review của bạn

Giảng viên hỗ trợ: "References/ có cần file nào? [Hỏi] Oke, hãy tạo references/[tên].md. Dòng 1-10: định nghĩa. Dòng 11-20: ví dụ..."

**WHAT — Cowork vs Claude Code (0:35-0:45):** Bảng trên slide:

| Tiêu chí | Cowork | Claude Code |
|----------|--------|------------|
| Giao diện | Đồ họa (drag-drop) | Terminal/CLI |
| Kỹ năng cần | Không (phi kỹ thuật) | Biết CLI, git |
| Tool có sẵn | 10 skill | Unlimited (custom code) |
| Giới hạn | Nhẹ, nhanh | Mạnh, linh hoạt |
| Deploy | Click "Activate" | Git push |

Demo: cùng 1 skill chạy trong Cowork → chạy trong Claude Code. Kết quả giống nhau.

**Decision Framework (0:45-0:52):** Flowchart trên slide:

```
Công việc của bạn
  ↓
Cần code custom? → Có → Cần git? → Có → Claude Code
                         ↓ Không → Cowork
     ↓ Không
   Cowork
```

Giao bài tập: "Hãy quyết định: 3 công việc của bạn → Cowork or Claude Code?"

**SO WHAT (0:52-0:57):** 2-3 người chia sẻ skill upgraded + quyết định platform. Giảng viên feedback ngắn.

**Bài tập về nhà (0:57-1:00):** "Dùng skill nâng cao trong công việc thực tế tuần này. Ghi nhận: dễ hay khó? Kết quả có tốt? Mang vào buổi 5."

**Lưu ý:** "Meta moment" (skill tạo khóa học) là điểm nhấn. Nó cho thấy: "Bạn vừa học cách dùng công cụ mà những người chuyên nghiệp dùng."
