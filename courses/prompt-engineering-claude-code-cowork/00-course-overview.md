# Khóa học: Prompt Engineering với Claude Code & Cowork

> Viết prompt hiệu quả trong Claude Code không chỉ là gõ câu hỏi — đó là thiết kế hệ thống cộng tác với AI. Khóa học này biến bạn từ "chat rồi hy vọng" thành "ra lệnh chính xác qua terminal, nhận kết quả chuyên nghiệp."

---

## Chân dung học viên (Learner Portrait)

### Đối tượng mục tiêu
- **Nhóm chính:** Người dùng doanh nghiệp (HR, Marketing, Finance, Operations) muốn chuyển từ AI web-based sang Claude Code CLI để tăng hiệu suất công việc
- **Nhóm phụ:** Team leads muốn triển khai Claude Code + cowork workflow cho team

### Trạng thái hiện tại (KSA)
- **Kiến thức (K):** Đã dùng ChatGPT/Claude web để hỏi đáp, viết email, brainstorm. CHƯA biết: Claude Code là CLI tool, CLAUDE.md cấu hình dự án, slash commands, skills system, MCP servers, agent delegation. Nghĩ AI chỉ hoạt động qua giao diện web.
- **Kỹ năng (S):** Gõ prompt trên web interface. CHƯA biết: mở terminal, chạy `claude` command, viết CLAUDE.md, dùng slash commands, delegate task cho subagent, thiết lập cowork workflow với đồng nghiệp.
- **Thái độ (A):** 50% tò mò nhưng sợ terminal ("CLI là dành cho developer"). 30% hào hứng muốn power-user workflow. 20% hoài nghi ("web chat đủ rồi, cần gì terminal?"). Tất cả cần thấy ROI rõ ràng trong 10 phút đầu.

### Bối cảnh học tập
- **Phong cách học:** Visual (so sánh web vs CLI) + Kinesthetic (thực hành ngay trên Claude Code)
- **Thời lượng:** 5 buổi × 60 phút (tổng 5 giờ)
- **Hình thức:** Online qua Zoom/Teams — chia sẻ màn hình terminal, breakout rooms
- **Động lực:** Muốn tự động hóa tác vụ lặp lại, cộng tác AI hiệu quả hơn, tạo ấn tượng với output chuyên nghiệp

### Hệ quả cho thiết kế
- **Web vs CLI comparison:** Mỗi concept mở đầu bằng demo cùng task trên web vs Claude Code — thấy lợi thế CLI ngay
- **Terminal-friendly:** Hướng dẫn step-by-step mở terminal, gõ lệnh, không giả định kiến thức CLI
- **Immediate practice:** Sau mỗi 8 phút giảng, thực hành trên Claude Code (poll, chat prompt, breakout)
- **Industry scenarios:** Mỗi feature áp dụng cho 4 ngành: HR, Marketing, Finance, Operations
- **Scaffolding:** Buổi 1-2 copy-paste command → Buổi 3 template có sẵn → Buổi 4-5 tự thiết kế workflow

---

## Mục tiêu khóa học (Learning Objectives)

### Buổi 1 — Từ Web Chat đến CLI Power: "Tại sao Claude Code?"
1. **Thực hiện** ít nhất 3 tác vụ công việc trên Claude Code CLI, so sánh kết quả với web chat, xác định lợi thế cụ thể *(Level 2)*
2. **Viết** prompt theo công thức Role + Context + Task + Format trực tiếp trong Claude Code terminal *(Level 2)*

### Buổi 2 — Framework trong Claude Code: "Prompt có cấu trúc, output có chất lượng"
3. **Áp dụng** framework RTT qua Claude Code cho ít nhất 3 tác vụ routine, đạt kết quả chính xác ngay lần đầu *(Level 2)*
4. **Sử dụng** framework CO-STAR kết hợp CLAUDE.md project context cho tác vụ phức tạp *(Level 2)*

### Buổi 3 — Kỹ thuật nâng cao trong Claude Code: "Dạy AI bằng ví dụ & slash commands"
5. **Tạo** prompt few-shot trong Claude Code cho tác vụ phân loại/trích xuất, đạt accuracy ≥80% *(Level 2)*
6. **Thiết kế** CLAUDE.md file chứa project instructions + few-shot examples để Claude Code tự động áp dụng context *(Level 3)*

### Buổi 4 — Cowork Workflow: "Từ chat đơn lẻ đến hệ thống cộng tác"
7. **Xây dựng** bộ prompt template + CLAUDE.md config cho 3 tác vụ lặp lại, có slash commands tích hợp *(Level 3)*
8. **Đánh giá** chất lượng output bằng rubric và iterate trong cùng Claude Code session đến khi đạt chuẩn *(Level 3)*

### Buổi 5 — Hệ thống hóa & Triển khai Team: "Từ cá nhân đến cowork"
9. **Tạo** cowork workspace có tổ chức: CLAUDE.md, prompt library, skills config, với ít nhất 10 prompt đã test *(Level 3)*
10. **Thiết kế** kế hoạch triển khai Claude Code cowork cho team: onboarding guide, shared CLAUDE.md, workflow standards *(Level 3)*

---

## Phân loại nội dung (Content Priority)

### CẦN CÓ (Must Have)
- Claude Code basics: install, launch, basic interaction trong terminal
- Prompt anatomy trong CLI context: Role + Context + Task + Format
- Web vs CLI comparison (mỗi buổi ≥2 cặp so sánh)
- Framework RTT & CO-STAR áp dụng trong Claude Code
- CLAUDE.md: project-level instructions để Claude Code hiểu context tự động
- Few-shot prompting trong Claude Code sessions
- Iteration mindset: prompt → evaluate → refine trong cùng session
- Cowork basics: shared CLAUDE.md, team workflow patterns

### NÊN CÓ (Should Have)
- Slash commands: /help, /clear, /compact, /model
- Chain-of-thought cho tác vụ phân tích phức tạp
- Output format control trong CLI (markdown, code blocks, tables)
- Prompt debugging trong Claude Code: khi output sai, điều chỉnh thế nào
- Session management: /clear vs tiếp tục context

### CÓ CŨNG TỐT (Nice to Have)
- Skills system overview
- MCP servers (conceptual understanding)
- Agent/subagent delegation patterns
- Hooks system cho automation
- Multi-session project workflows

---

## Cấu trúc 5 buổi với Scaffolding

| Buổi | Chủ đề | Scaffolding Level | Industry Focus | Concepts | Depth |
|------|--------|-------------------|----------------|----------|-------|
| 1 | Web → CLI Power | Full walkthrough (I Do → We Do) | All 4: web vs CLI demos | 4 concepts × 4 min = 16 min lecture | 30:70 theory:practice |
| 2 | RTT & CO-STAR + CLAUDE.md | Guided template (We Do → You Do) | Ngành-specific RTT tasks | 3 concepts × 4 min = 12 min lecture | 25:75 |
| 3 | Few-shot & CLAUDE.md Design | Partial template (You Do guided) | Data tasks per industry | 3 concepts × 4 min = 12 min lecture | 20:80 |
| 4 | Cowork Workflow | Minimal scaffold (You Do) | Deep-dive own department | 2 concepts × 4 min = 8 min lecture | 15:85 |
| 5 | Hệ thống hóa + Team Deploy | Independent (create + evaluate) | Team deployment plan | 2 concepts × 3 min = 6 min lecture | 10:90 |
