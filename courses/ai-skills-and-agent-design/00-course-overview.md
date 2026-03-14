# AI Skills & Agent Design for Business Users

## Tổng quan khóa học

Khóa học 10 giờ (5 buổi x 2 giờ, qua Zoom) hướng dẫn người dùng không chuyên kỹ thuật cách thiết kế AI agent và skill để tự động hóa công việc hàng ngày. Từ hiểu cách AI suy nghĩ đến xây dựng skill tái sử dụng, học viên sẽ đi từ "người hỏi AI" thành "người thiết kế AI workflow."

**Triết lý thiết kế:** Đây KHÔNG phải khóa "prompt engineering." Kỹ thuật giao tiếp với AI (RTF, few-shot, chain-of-thought) được dệt vào tự nhiên qua quá trình thiết kế agent và skill. Học viên nghĩ "tôi đang thiết kế quy trình AI" chứ không phải "tôi đang học viết prompt."

**Mental model xuyên suốt:** "Brilliant new employee" (Anthropic) — AI giống nhân viên mới xuất sắc nhưng chưa biết quy trình công ty bạn. Mọi kỹ thuật đều là cách "brief nhân viên mới rõ hơn."

**Ví dụ xuyên suốt:** Contract-agent — quy trình tự động đọc đơn đặt hàng khách hàng (Google Vietnam) và tạo hợp đồng dịch vụ. Ví dụ này xuất hiện trong cả 5 buổi, từ agent brief đầu tiên (Buổi 1) đến skill tự động hoàn chỉnh (Buổi 5).

**Hình thức:** Online qua Zoom, tương tác cao (poll mỗi 8-10 phút, chat activity, tiered exercises). Không sử dụng breakout rooms.

---

## Đối tượng học viên

| Nhóm | Mô tả | Nhu cầu chính |
|------|--------|---------------|
| **Quản lý** (Managers) | Quản lý dự án, trưởng phòng, giám đốc bộ phận | Tự động hóa báo cáo, phân tích dữ liệu, soạn email, lập kế hoạch |
| **Marketing** | Chuyên viên marketing, content creator, digital marketer | Viết nội dung, phân tích đối thủ, tạo chiến dịch, xử lý dữ liệu khách hàng |
| **Giáo viên** (Teachers) | Giáo viên phổ thông, giảng viên đại học, người đào tạo | Ra đề thi, soạn bài giảng, tạo tài liệu học tập, đánh giá học sinh |

**Yêu cầu chung:** Không cần kiến thức lập trình. Biết sử dụng máy tính cơ bản và trình duyệt web.

---

## Cấu trúc 5 buổi học

| Buổi | Chủ đề | Công cụ | Kết quả đạt được |
|------|--------|---------|-------------------|
| 1 | **AI Nghĩ Như Thế Nào + Agent Đầu Tiên** | Claude Cowork | Hiểu cách AI hoạt động, chạy agent brief đầu tiên, tạo nội dung hợp đồng |
| 2 | **Ủy Quyền Cho Agent** (Delegation Mastery) | Claude Cowork | Phân biệt chat vs agent, viết task brief 4 phần, áp dụng 3-Question Framework |
| 3 | **Context Engineering + Claude Code** | Claude Code | Cài Claude Code, chạy contract-agent thực tế, viết CLAUDE.md cá nhân |
| 4 | **Thiết Kế Skill + MCP** | Claude Code | Viết SKILL.md cho workflow cá nhân, kết nối MCP tool, hiểu context engineering |
| 5 | **Build, Test, Trình Bày** (Capstone) | Claude Code | Hoàn thiện SKILL.md, test + iterate, trình bày 3 phút trước lớp |

**Chuỗi công cụ tiến dần:** Claude Cowork (agent, dễ dùng) → Claude Code (terminal, mạnh nhất).

**Nhịp độ mỗi buổi:**
- 0:00–0:35 Concept + Demo (poll mỗi 8–10 phút, lý thuyết dệt vào bài tập)
- 0:35–0:40 Nghỉ giải lao
- 0:40–1:15 Thực hành có hướng dẫn (tiered: Foundation/Extension/Challenge)
- 1:15–1:20 Nghỉ giải lao
- 1:20–1:50 Áp dụng vào công việc thực tế + Q&A
- 1:50–2:00 Bài tập về nhà + Tổng kết

---

## Contract-agent: Ví dụ xuyên suốt

Contract-agent là quy trình AI tự động:
1. **Input:** File đơn đặt hàng (thông tin khách hàng, dịch vụ, giá, VAT)
2. **Xử lý:** AI đọc đơn hàng, áp dụng template hợp đồng, điền thông tin
3. **Output:** File hợp đồng dịch vụ hoàn chỉnh, sẵn sàng ký

**Vai trò trong từng buổi:**
- **Buổi 1:** Demo live — agent tạo hợp đồng trong 30 giây → giải thích ngược
- **Buổi 2:** So sánh chat (5 tin nhắn) vs agent brief (1 lần gửi) cho cùng tác vụ
- **Buổi 3:** Học viên tự chạy contract-agent trên máy mình bằng Claude Code
- **Buổi 4:** Phân tích CLAUDE.md của contract-agent = case study context engineering
- **Buổi 5:** Lấy cảm hứng từ cấu trúc contract-agent để xây skill cá nhân

---

## Frameworks chính trong khóa học

| Framework | Buổi | Mô tả |
|-----------|------|-------|
| "Brilliant New Employee" | 1–5 | Mental model: AI = nhân viên mới giỏi nhưng thiếu context công ty |
| RTF (Role-Task-Format) | 1 | Cách brief agent cơ bản — emerge từ logic delegation |
| 6 Thành phần brief | 1 | Mở rộng RTF: thêm Giọng điệu, Ràng buộc, Đối tượng |
| 3-Question Delegation | 2 | "Done" trông thế nào? Context? Constraints? |
| Context Engineering | 3–4 | Write / Select / Compress / Isolate context |
| WHY-WHAT-HOW | 3 | Cấu trúc CLAUDE.md: mục đích → nội dung → cách làm |
| SKILL.md 6 phần | 4–5 | Purpose, Context, Input, Steps, Examples, Constraints |

---

## Yêu cầu trước khóa học

| Yêu cầu | Chi tiết |
|----------|----------|
| **Tài khoản Claude Cowork** | Đăng ký trước Buổi 1. Facilitator gửi link và hướng dẫn. |
| **Kết nối internet** | Ổn định cho Zoom + Claude đồng thời. Khuyến nghị: wifi hoặc 4G mạnh. |
| **Máy tính** | Laptop hoặc desktop (không dùng điện thoại). Cần 2 cửa sổ cạnh nhau. |
| **Claude Code** (từ Buổi 3) | Cài đặt trước Buổi 3. Hướng dẫn chi tiết gửi qua email 3 ngày trước. |
| **Zoom** | Phiên bản mới nhất, có camera và microphone. |

**Không yêu cầu:** Kiến thức lập trình, kinh nghiệm AI, tiếng Anh (khóa học hoàn toàn bằng tiếng Việt).

### Accessibility (Tiếp cận)
- **Thị giác:** Slide dùng font ≥24pt, contrast ratio ≥4.5:1, không dùng màu sắc làm kênh thông tin duy nhất. Mọi diagram có text description.
- **Thính giác:** Zoom auto-caption bật mặc định. Facilitator nhắc lại câu hỏi từ chat trước khi trả lời. Recording có subtitle.
- **Vận động:** Mọi bài tập có thể hoàn thành chỉ bằng bàn phím. Không yêu cầu drag-and-drop.
- **Kết nối yếu:** Slide + handout phát trước qua email (offline access). Video backup cho demo live. Bài tập có thể làm offline trên text editor.
- **Pre-session survey:** Hỏi nhu cầu đặc biệt 1 tuần trước khóa học để chuẩn bị phương án hỗ trợ.

---

## Kết quả sau khóa học

Sau 5 buổi, học viên có thể:

1. **Giao việc cho AI agent** — viết task brief rõ ràng, phân biệt khi nào dùng chat vs agent, áp dụng 3-Question Delegation Framework.

2. **Thiết kế môi trường AI cá nhân** — viết CLAUDE.md theo cấu trúc WHY-WHAT-HOW, kết nối MCP tools, áp dụng context engineering (Write/Select/Compress/Isolate).

3. **Chạy automation thực tế** — thiết lập Claude Code, chạy agent tự động (contract-agent), đánh giá và điều chỉnh output.

4. **Xây dựng skill tái sử dụng** — phân tích workflow thành các bước tự động hóa, tạo SKILL.md 6 phần hoàn chỉnh, test và iterate.

5. **Đánh giá kết quả AI** — nhận biết hallucination, áp dụng source triangulation, hiểu giới hạn của AI để dùng hiệu quả.

---

## Tài liệu khóa học

| Tài liệu | Mô tả | Khi nào dùng |
|-----------|--------|---------------|
| **Slide bài giảng** (5 bộ) | Nội dung trình bày, 12–14 slide mỗi bộ, có Mermaid diagrams | Mỗi buổi học |
| **Tài liệu học viên** (Learner Handout) | Tra cứu theo TASK — templates, checklists, thuật ngữ | Phát trước Buổi 1 |
| **Hướng dẫn giảng viên** (5 file) | Kịch bản chi tiết, speaker scripts, troubleshooting, FAQ | Chỉ dành cho giảng viên |
| **Contract-agent demo** | CLAUDE.md, đơn hàng mẫu, template hợp đồng, bài tập | Buổi 1–5 |
| **Bài tập** (6 file) | Tiered activities (Foundation/Extension/Challenge) | Mỗi buổi |

---

## Spaced Practice — Sau khóa học

Để kiến thức không bị quên, khóa học thiết kế chương trình luyện tập giãn cách:

| Thời điểm | Thử thách |
|------------|-----------|
| Ngày 3 | Dùng task brief để giao 1 việc thực tế cho Cowork |
| Ngày 7 | Cải thiện CLAUDE.md dựa trên kết quả thực tế |
| Ngày 14 | Chạy SKILL.md với input mới, iterate 1 vòng |
| Ngày 30 | Chia sẻ kết quả với buddy — cái gì hoạt động, cái gì cần sửa |
