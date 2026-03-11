# Kế hoạch bài giảng — Sử dụng Skills để khai thác sức mạnh LLM Agent

> 5 buổi × 60 phút | Online (Zoom/Teams) | Tiếng Việt
> Đối tượng: Người dùng phi kỹ thuật

---

## Buổi 1: Agent & Skill 101 — "Tại sao prompt đơn lẻ không đủ?"

**Mục tiêu:** Học viên giải thích được sự khác biệt giữa prompt đơn lẻ và LLM agent có skill. Xác định được công việc có thể giao cho agent.

| Thời gian | Nội dung | Cách dẫn dắt | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00-0:05 | **Mở đầu:** Giảng viên hỏi "Các bạn dùng AI để làm gì? Kết quả có nhất quán không?" | Quy nạp — khai thác trải nghiệm | Slide 1-2 |
| 0:05-0:15 | **WHY — Vấn đề của prompt đơn lẻ:** Demo trực tiếp: cùng 1 yêu cầu, prompt thường cho kết quả khác nhau mỗi lần. Agent + skill cho kết quả nhất quán. Analogy: prompt = hỏi đường người lạ, skill = GPS tích hợp. | Diễn dịch — từ vấn đề → giải pháp | Slide 3-7 |
| 0:15-0:25 | **WHAT — Ba khái niệm cốt lõi:** (1) Agent = AI có khả năng dùng tool, (2) Skill = "sổ tay chuyên gia" cho agent, (3) Tool = khả năng cụ thể (đọc file, tạo slide, browse web). Analogy: Agent = nhân viên mới, Skill = SOP, Tool = phần mềm công ty. | Diễn dịch — khái niệm → ví dụ | Slide 8-14 |
| 0:25-0:35 | **HOW — Demo live Cowork:** Mở Cowork, cho agent tạo 1 slide deck KHÔNG dùng skill (kết quả tệ) → dùng skill pptx (kết quả tốt). Học viên quan sát sự khác biệt. | Demo trực tiếp | Screen share |
| 0:35-0:50 | **Hoạt động 1 — "Công việc nào giao được cho Agent?":** Breakout rooms (3-4 người). Mỗi nhóm liệt kê 5 công việc lặp lại hàng ngày → phân loại: agent làm được / chưa làm được / cần skill riêng. Chia sẻ kết quả. | Thảo luận nhóm | Handout worksheet |
| 0:50-0:55 | **SO WHAT — Tổng kết:** 3 takeaways chính. Preview buổi 2. | Tổng hợp | Slide 15-16 |
| 0:55-1:00 | **Mini-quiz:** 3 câu trắc nghiệm nhanh (Mentimeter/chat) | Đánh giá nhanh | Quiz tool |

**Điểm nhấn:** Analogy "nhân viên mới + SOP + phần mềm" phải được nhắc lại xuyên suốt buổi 1-2.
**Câu hỏi thảo luận:** "Nếu bạn có 1 trợ lý biết đúng cách làm mọi quy trình của bạn, bạn sẽ giao gì cho họ đầu tiên?"

---

## Buổi 2: Sử dụng Skills có sẵn — "Biến AI thành trợ lý đa năng"

**Mục tiêu:** Học viên kích hoạt và sử dụng ít nhất 3 skills có sẵn. Lựa chọn đúng skill cho từng công việc.

| Thời gian | Nội dung | Cách dẫn dắt | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00-0:05 | **Ôn tập nhanh:** 1 câu hỏi "Agent, Skill, Tool là gì?" Chọn 1 học viên trả lời. | Kiểm tra kiến thức | Slide 1 |
| 0:05-0:12 | **WHY — Catalog skills như menu nhà hàng:** Bạn không cần biết nấu ăn để gọi món. Skill catalog = menu. Demo mở danh sách skills có sẵn. | Analogy | Slide 2-4 |
| 0:12-0:22 | **WHAT — 6 skills "sống còn":** (1) pptx, (2) docx, (3) pdf, (4) xlsx, (5) canvas-design, (6) web search. Mỗi skill: tên → khi nào dùng → ví dụ output. Format: flashcard visual. | Diễn dịch | Slide 5-11 |
| 0:22-0:27 | **Demo — Chuỗi skill trong Cowork:** Giảng viên demo: "Tạo báo cáo tuần" = pdf (đọc data) → xlsx (phân tích) → docx (viết báo cáo) → pptx (tạo slide tóm tắt). Chuỗi 4 skills chỉ với 1 prompt. | Demo trực tiếp | Screen share |
| 0:27-0:47 | **Hoạt động 2 — "Skill Relay Race":** 3 nhiệm vụ thực tế, mỗi nhiệm vụ dùng skill khác nhau. Học viên làm trên máy mình, theo hướng dẫn step-by-step. Nhiệm vụ: (A) Tạo slide 3 trang từ 1 đoạn text, (B) Tạo handout word từ ghi chú cuộc họp, (C) Phân tích file CSV đơn giản bằng xlsx skill. Giảng viên hỗ trợ qua chat/breakout. | Thực hành có hướng dẫn | Activity sheet |
| 0:47-0:52 | **Debrief:** Mỗi nhóm chia sẻ: skill nào dễ nhất? Khó nhất? Bất ngờ nhất? | Thảo luận | — |
| 0:52-0:57 | **SO WHAT — Skill Selection Framework:** Bảng quyết định: "Công việc → Output mong muốn → Skill phù hợp". Học viên điền cho 2 công việc của mình. | Áp dụng cá nhân | Handout |
| 0:57-1:00 | **Preview buổi 3:** "Khi skill có sẵn không đủ... bạn tự tạo." | Gây tò mò | Slide 12 |

**Điểm nhấn:** Sau buổi này học viên PHẢI tự tin gõ prompt kích hoạt skill và thấy kết quả.
**Câu hỏi thảo luận:** "Trong tuần này, công việc nào bạn sẽ thử dùng skill thay vì làm tay?"

---

## Buổi 3: Tạo Skill đầu tiên — "Từ người dùng thành người tạo"

**Mục tiêu:** Học viên tạo được file SKILL.md hoàn chỉnh. Tổ chức thư mục skill đúng cấu trúc.

| Thời gian | Nội dung | Cách dẫn dắt | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00-0:05 | **WHY — "Skill có sẵn không biết quy trình của BẠN":** Ví dụ: skill docx tạo doc tốt, nhưng không biết template báo cáo của công ty bạn. Bạn cần skill riêng. | Quy nạp — từ pain point | Slide 1-3 |
| 0:05-0:15 | **WHAT — Giải phẫu SKILL.md:** 3 phần: (1) Frontmatter YAML (name + description), (2) Body (hướng dẫn chi tiết), (3) References (tài liệu tham khảo). Analogy: YAML = tên + chức danh trên badge, Body = bản mô tả công việc, References = tài liệu training. | Diễn dịch — phân tích từng phần | Slide 4-10 |
| 0:15-0:20 | **Demo — Tạo skill "email-summarizer":** Giảng viên live-code SKILL.md đơn giản: name, description, body 10 dòng. Deploy vào Cowork, test ngay. | Demo trực tiếp | Screen share |
| 0:20-0:40 | **Hoạt động 3 — "Build Your First Skill":** Mỗi học viên chọn 1 tác vụ lặp lại từ danh sách buổi 1. Viết SKILL.md theo template. Steps: (1) Chọn tên skill (kebab-case), (2) Viết description (1-2 câu, "pushy"), (3) Viết body (hướng dẫn agent làm gì), (4) Test trong Cowork. Giảng viên walk around breakout rooms hỗ trợ. | Thực hành tự do có hỗ trợ | Template SKILL.md |
| 0:40-0:50 | **Show & Tell:** 3-4 học viên chia sẻ skill mình tạo. Giảng viên feedback: description đủ "pushy" chưa? Body có rõ ràng không? | Trình bày + phản hồi | — |
| 0:50-0:55 | **WHAT (bổ sung) — Thư mục references/:** Khi skill cần kiến thức chuyên sâu → đặt file trong references/. Ví dụ: skill viết email chuẩn công ty → references/email-template.md. | Diễn dịch | Slide 11-13 |
| 0:55-1:00 | **SO WHAT + Preview:** "Bạn vừa tạo chuyên gia AI đầu tiên. Buổi sau: nâng cấp thành chuyên gia thực thụ." | Tổng kết | Slide 14 |

**Điểm nhấn:** Template SKILL.md phải sẵn sàng copy-paste. Giảm ma sát tối đa cho lần tạo đầu tiên.
**Câu hỏi thảo luận:** "Skill của bạn sẽ tiết kiệm bao nhiêu phút mỗi lần sử dụng?"

---

## Buổi 4: Skill nâng cao & Claude Code — "Từ đơn giản đến chuyên nghiệp"

**Mục tiêu:** Thiết kế skill phức tạp với references và multi-step workflow. So sánh Cowork vs Claude Code.

| Thời gian | Nội dung | Cách dẫn dắt | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00-0:05 | **WHY — Giới hạn của skill đơn giản:** Skill buổi 3 chỉ có body. Khi cần agent xử lý 100 trang tài liệu hoặc quy trình 10 bước → cần nâng cấp. | Quy nạp — từ giới hạn | Slide 1-2 |
| 0:05-0:15 | **WHAT — 3 kỹ thuật nâng cao:** (1) References folder: chứa kiến thức chuyên sâu agent đọc khi cần, (2) Progressive disclosure: SKILL.md ngắn → references nặng, (3) Multi-step workflow: skill hướng dẫn agent qua nhiều bước tuần tự. | Diễn dịch với ví dụ | Slide 3-9 |
| 0:15-0:22 | **Demo — Skill "course-designer":** Mở skill course-designer (chính skill ta đang dùng để tạo khóa học này). Chỉ ra: SKILL.md → references/methodology.md → references/evaluation-criteria.md. Agent đọc từng file khi cần. | Demo thực tế | Screen share |
| 0:22-0:35 | **Hoạt động 4 — "Skill Upgrade":** Học viên lấy skill buổi 3, nâng cấp: thêm references/ folder, tách kiến thức chuyên sâu vào file riêng, thêm multi-step workflow. Pairs: 2 người review lẫn nhau. | Thực hành + peer review | Upgrade checklist |
| 0:35-0:45 | **WHAT — Cowork vs Claude Code:** Bảng so sánh: Cowork (giao diện đồ họa, kéo thả file, phi kỹ thuật, giới hạn tool ít) vs Claude Code (terminal, mạnh hơn, tạo code, git integration, cần biết command line). Demo nhanh Claude Code: cùng 1 skill chạy trong cả 2 nền tảng. | So sánh trực tiếp | Slide 10-14 |
| 0:45-0:52 | **Decision framework:** Flowchart: "Công việc của bạn → Cần code? → Cần git? → Cần file system? → Cowork or Claude Code?" | Áp dụng | Handout flowchart |
| 0:52-0:57 | **SO WHAT:** Review skill đã nâng cấp. 2 học viên chia sẻ. | Trình bày | — |
| 0:57-1:00 | **Bài tập về nhà:** Dùng skill nâng cấp trong công việc thực tế tuần này. Ghi nhận kết quả. | Giao việc | — |

**Điểm nhấn:** Demo course-designer skill là "meta moment" — agent tạo khóa học chính bằng skill.
**Câu hỏi thảo luận:** "Nếu team bạn có 1 skill library, 3 skills đầu tiên sẽ là gì?"

---

## Buổi 5: Tối ưu, Chia sẻ & Chiến lược — "Từ cá nhân đến tổ chức"

**Mục tiêu:** Đánh giá chất lượng skill theo checklist. Xây dựng kế hoạch triển khai cho team.

| Thời gian | Nội dung | Cách dẫn dắt | Tài liệu |
|-----------|----------|-------------|----------|
| 0:00-0:05 | **Chia sẻ kết quả bài tập:** 2-3 học viên kể kinh nghiệm dùng skill trong tuần. Thành công? Khó khăn? | Quy nạp — từ kinh nghiệm | — |
| 0:05-0:15 | **WHAT — Skill Quality Checklist:** 5 tiêu chí: (1) Trigger accuracy — description có kích hoạt đúng lúc? (2) Output quality — kết quả có đạt? (3) Reusability — người khác dùng được không? (4) Maintainability — dễ cập nhật? (5) Scope — không quá rộng, không quá hẹp? Demo: đánh giá 1 skill tốt vs 1 skill tệ. | Diễn dịch + demo | Slide 1-7, Checklist |
| 0:15-0:25 | **Hoạt động 5 — "Skill Audit":** Mỗi học viên dùng checklist đánh giá skill mình tạo. Pairs: swap skill, đánh giá của bạn. So sánh tự đánh giá vs đánh giá chéo. | Thực hành + peer review | Audit worksheet |
| 0:25-0:35 | **WHAT — Chia sẻ & Quản lý skill:** (1) Cách đóng gói skill cho team (folder structure), (2) Naming conventions, (3) Version control basics (ai cập nhật? khi nào?), (4) Skill catalog cho phòng ban. | Diễn dịch | Slide 8-12 |
| 0:35-0:50 | **Hoạt động 6 — "30-Day Skill Adoption Plan":** Workshop nhóm (theo phòng ban/team). Mỗi nhóm: (1) Xác định 3 use case ưu tiên, (2) Viết brief cho mỗi skill cần tạo, (3) Phân công ai tạo skill nào, (4) Timeline 30 ngày. Trình bày kế hoạch. | Workshop nhóm | Plan template |
| 0:50-0:55 | **SO WHAT — Tổng kết khóa học:** 5 buổi = 5 cấp độ: Hiểu → Dùng → Tạo → Nâng cao → Triển khai. Nhắc lại analogy: từ "hỏi đường" đến "vẽ bản đồ cho cả team". | Tổng kết | Slide 13-14 |
| 0:55-1:00 | **Đánh giá cuối khóa + Q&A:** Survey nhanh (Google Form). Kênh hỗ trợ sau khóa học. | Đánh giá | Survey link |

**Điểm nhấn:** Buổi 5 phải kết thúc bằng ACTION PLAN cụ thể — không chỉ "biết" mà "sẽ làm".
**Câu hỏi thảo luận:** "3 tháng từ giờ, team bạn sẽ sử dụng skills khác như thế nào so với hôm nay?"
