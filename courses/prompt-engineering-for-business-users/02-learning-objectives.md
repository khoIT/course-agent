# Phase 02: Learning Objectives

## TL;DR (50 tokens)
15 objectives across 5 REVISED sessions. S1: merged AI+Prompt Mastery (Claude.ai). S2: Agent Thinking (Cowork intro). S3: Cowork+Claude Code hands-on. S4: Context Engineering+MCP. S5: SKILL.md capstone. Contract-agent woven through S1+S3. Bloom's Apply+. Vietnamese-first.

## Status: Complete (Revised — 5-session merged architecture)

---

## Session 1: AI + Prompt Mastery (Merged)

**Theme:** Nền tảng AI + Kỹ năng Prompt — sống động, nhiều ví dụ thực tế, chiến thắng nhanh, khung 6 thành phần, few-shot, chain-of-thought. Lý thuyết được lồng ghép vào bài tập, không có khối lecture riêng.

**Tool:** Claude.ai

**Terminal Objective:**
> Viết một prompt hoàn chỉnh 6 thành phần để trích xuất thông tin từ đơn đặt hàng khách hàng thực tế và tạo ra nội dung hợp đồng sơ bộ trên Claude.ai, đạt kết quả có thể sử dụng ngay không cần chỉnh sửa lớn.

*(Write a complete 6-component prompt to extract information from a real customer order and generate draft contract content on Claude.ai, producing output usable without major edits.)*

**Enabling Objectives:**

1. Giải thích cách LLM hoạt động bằng 3 mô hình tư duy — máy dự đoán từ (word prediction machine), dữ liệu huấn luyện (training data), cửa sổ ngữ cảnh (context window) — sử dụng ngôn ngữ phi kỹ thuật trong khi đang thực hành với Claude.ai.
   *(Explain how LLMs work using 3 mental models in non-technical language, while actively practicing with Claude.ai.)*
   - Bloom's: Understand | Verb: Explain

2. Soạn prompt ban đầu theo công thức Vai trò + Tác vụ + Định dạng, chạy trên Claude.ai, và đánh giá kết quả bằng cách so sánh với ít nhất 1 tiêu chí đo lường được (độ chính xác, độ ngắn gọn, hoặc tính sử dụng được ngay).
   *(Draft an initial prompt using Role + Task + Format, run it on Claude.ai, and evaluate output against at least 1 measurable criterion.)*
   - Bloom's: Apply | Verb: Draft + Evaluate

3. Viết và cải thiện prompt hoàn chỉnh sử dụng đầy đủ 6 thành phần (Vai trò, Giọng điệu, Tác vụ, Định dạng, Ràng buộc, Đối tượng), áp dụng few-shot (2 ví dụ mẫu) và chain-of-thought (yêu cầu AI giải thích từng bước) để tăng chất lượng đầu ra — sử dụng kịch bản hợp đồng khách hàng hoặc tác vụ công việc cá nhân.
   *(Write and refine a complete 6-component prompt using few-shot (2 examples) and chain-of-thought to improve output quality — applied to the contract scenario or a personal work task.)*
   - Bloom's: Apply | Verb: Write + Refine

---

## Session 2: Tư duy Agent (Agent Thinking)

**Theme:** Tại sao agent > chat, cách viết task brief, tư duy ủy quyền. Giới thiệu Claude Cowork.

**Tool:** Claude.ai → Claude Cowork (giới thiệu)

**Terminal Objective:**
> Chuyển đổi một quy trình công việc 3+ bước (ví dụ: tạo hợp đồng từ đơn đặt hàng) từ cách làm chat thủ công sang brief agent hoàn chỉnh, chứng minh được sự khác biệt về hiệu quả qua demo trực tiếp hoặc phân tích trước/sau.

*(Convert a 3+ step workflow — e.g., generating a contract from a customer order — from manual chat to a complete agent brief, demonstrating the efficiency difference through live demo or before/after analysis.)*

**Enabling Objectives:**

1. So sánh 3 điểm khác biệt cốt lõi giữa AI dạng chat (từng câu hỏi) và AI dạng agent (lập kế hoạch + thực thi tự động), sử dụng ví dụ tác vụ hợp đồng: "chat = 5 tin nhắn qua lại" vs. "agent = 1 brief, tự chạy".
   *(Compare 3 core differences between chat-AI and agent-AI using the contract task example: "chat = 5 back-and-forth messages" vs. "agent = 1 brief, auto-executes".)*
   - Bloom's: Analyze | Verb: Compare

2. Viết một task brief (bản mô tả công việc) cho AI agent gồm đầy đủ 4 phần: mục tiêu, bối cảnh, các bước thực hiện, và tiêu chí thành công — đạt tiêu chuẩn đủ rõ để agent có thể thực thi mà không cần làm rõ thêm.
   *(Write a task brief for an AI agent with all 4 parts: goal, context, steps, success criteria — meeting the standard of clarity where the agent can execute without further clarification.)*
   - Bloom's: Create | Verb: Write/Design

3. Xác định ít nhất 3 tác vụ trong công việc hàng ngày phù hợp để ủy quyền cho AI agent, phân loại theo mức độ phức tạp (đơn giản / trung bình / phức tạp), và giải thích lý do mỗi tác vụ phù hợp hơn với agent so với chat.
   *(Identify at least 3 daily work tasks suitable for agent delegation, categorized by complexity, and justify why each is better suited to agent than chat.)*
   - Bloom's: Evaluate | Verb: Identify + Justify

---

## Session 3: Áp dụng — Cowork + Claude Code

**Theme:** Hands-on setup, CLAUDE.md thực tế, chạy automation đầu tiên. Học viên thực sự chạy contract agent.

**Tool:** Claude Cowork + Claude Code

**Terminal Objective:**
> Thiết lập Claude Code, đọc hiểu CLAUDE.md của contract-agent, và chạy thành công một lệnh automation thực tế tạo ra output có thể sử dụng ngay (ví dụ: hợp đồng từ file đơn đặt hàng) trong môi trường Claude Code có hướng dẫn.

*(Set up Claude Code, read and understand the contract-agent's CLAUDE.md, and successfully run a real automation command producing usable output — e.g., a contract from an order file — within a guided Claude Code environment.)*

**Enabling Objectives:**

1. Cài đặt và khởi động Claude Code thành công theo hướng dẫn từng bước, xác nhận môi trường hoạt động bằng cách chạy lệnh đầu tiên trên terminal.
   *(Install and launch Claude Code following step-by-step guidance, confirming the environment works by running a first command in the terminal.)*
   - Bloom's: Apply | Verb: Install + Confirm

2. Đọc và giải thích CLAUDE.md của contract-agent — nhận diện 4 thành phần (Vai trò, Quy tắc, Workflow, Công cụ), giải thích cách file này hướng dẫn AI đọc file đơn đặt hàng và tạo ra hợp đồng.
   *(Read and explain the contract-agent's CLAUDE.md — identify its 4 components, explain how the file instructs AI to read the order file and produce a contract.)*
   - Bloom's: Understand | Verb: Explain

3. Chạy contract agent trên Claude Code với đơn đặt hàng mẫu, đánh giá kết quả hợp đồng đầu ra theo ít nhất 3 tiêu chí (thông tin chính xác, định dạng đúng, dùng được ngay), và ghi lại 1 điều chỉnh cần thiết.
   *(Run the contract agent in Claude Code with a sample order, evaluate the output contract against at least 3 criteria — accuracy, format, usability — and document 1 required adjustment.)*
   - Bloom's: Evaluate | Verb: Run + Evaluate

---

## Session 4: Context Engineering + Công cụ MCP

**Theme:** Smart Zone, mẫu RPI (Read-Plan-Implement), kết nối MCP tools để mở rộng khả năng Claude Code.

**Tool:** Claude Code

**Terminal Objective:**
> Soạn nội dung CLAUDE.md tùy chỉnh cho lĩnh vực công việc cá nhân và kết nối ít nhất 1 công cụ MCP (ví dụ: filesystem, web search) trong Claude Code theo hướng dẫn, tạo ra môi trường làm việc AI được cá nhân hóa và xác nhận hoạt động đúng.

*(Draft a custom CLAUDE.md for one's personal work domain and connect at least 1 MCP tool in Claude Code following guidance, creating a personalized AI work environment and confirming it works correctly.)*

**Enabling Objectives:**

1. Giải thích khái niệm context engineering (kỹ thuật ngữ cảnh) — vai trò của CLAUDE.md, Smart Zone, và mẫu RPI (Read-Plan-Implement) — sử dụng phép so sánh "sổ tay hướng dẫn nhân viên mới" và ví dụ từ contract-agent.
   *(Explain context engineering — the role of CLAUDE.md, Smart Zone, and RPI pattern — using the "new employee handbook" analogy and contract-agent example.)*
   - Bloom's: Understand | Verb: Explain

2. Soạn CLAUDE.md cá nhân gồm ít nhất 4 phần (Vai trò, Quy tắc, Phong cách, Ràng buộc) phù hợp với lĩnh vực công việc của mình, test với 1 tác vụ thực tế và so sánh kết quả có/không có CLAUDE.md.
   *(Draft a personal CLAUDE.md with at least 4 sections, test it with a real task, and compare results with/without CLAUDE.md.)*
   - Bloom's: Create | Verb: Draft + Compare

3. Kết nối và kiểm tra 1 công cụ MCP (filesystem hoặc web search) trong Claude Code theo hướng dẫn từng bước, xác nhận AI có thể truy cập công cụ bằng cách hoàn thành 1 tác vụ yêu cầu công cụ đó.
   *(Connect and test 1 MCP tool in Claude Code following step-by-step guidance, confirming AI can use the tool by completing a task that requires it.)*
   - Bloom's: Apply | Verb: Connect + Test

---

## Session 5: Xây dựng Skill của riêng bạn (Build Your Own Skill — Capstone)

**Theme:** Capstone: viết SKILL.md, kiểm thử, trình bày trước lớp. Lấy cảm hứng từ contract-agent nhưng cho quy trình công việc cá nhân.

**Tool:** Claude Code

**Terminal Objective:**
> Tạo và kiểm thử một SKILL.md hoàn chỉnh cho quy trình công việc cá nhân lấy cảm hứng từ contract-agent, chứng minh Claude Code có thể thực thi skill đó và tạo ra output đạt tiêu chuẩn sử dụng được, trình bày kết quả trong 3 phút trước lớp.

*(Create and test a complete SKILL.md for a personal workflow inspired by the contract-agent, demonstrate that Claude Code can execute the skill and produce usable output, and present results in 3 minutes to the class.)*

**Enabling Objectives:**

1. Phân tích quy trình công việc cá nhân thành các bước có thể tự động hóa, xác định input/output/tiêu chí chất lượng cho mỗi bước — sử dụng cấu trúc tương tự contract-agent (đọc file input → xử lý → tạo output).
   *(Analyze a personal workflow into automatable steps, identifying input/output/quality criteria for each — using the contract-agent structure as reference: read input file → process → generate output.)*
   - Bloom's: Analyze | Verb: Analyze/Decompose

2. Viết SKILL.md hoàn chỉnh theo cấu trúc chuẩn 6 phần (Mục tiêu, Ngữ cảnh, Input, Các bước thực hiện, Ví dụ, Ràng buộc) cho 1 quy trình công việc cụ thể, đảm bảo agent có thể thực thi mà không cần giải thích thêm.
   *(Write a complete SKILL.md following the 6-section standard structure for 1 specific workflow, ensuring the agent can execute without additional explanation.)*
   - Bloom's: Create | Verb: Write/Produce

3. Trình bày skill trước lớp trong 3 phút — giải thích vấn đề giải quyết, demo chạy skill trực tiếp, và kết quả thực tế — nhận phản hồi từ ít nhất 2 người học khác theo rubric chuẩn.
   *(Present skill to class in 3 minutes — explain problem solved, live-demo running the skill, and show real results — receiving structured feedback from at least 2 peers.)*
   - Bloom's: Evaluate | Verb: Present/Defend

---

## Objectives Alignment Matrix

| Session | Theme | Terminal Level | Enabling Levels | Tool | Contract-Agent Touch |
|---------|-------|----------------|-----------------|------|---------------------|
| 1 | AI + Prompt Mastery | Apply | Understand, Apply, Apply | Claude.ai | Kịch bản trích xuất đơn hàng → nội dung hợp đồng |
| 2 | Agent Thinking | Create | Analyze, Create, Evaluate | Claude.ai → Cowork | Demo: chat 5 tin nhắn vs. agent 1 brief cho tác vụ hợp đồng |
| 3 | Cowork + Claude Code | Evaluate | Apply, Understand, Evaluate | Cowork + Claude Code | Chạy contract-agent thực tế |
| 4 | Context Engineering + MCP | Create | Understand, Create, Apply | Claude Code | CLAUDE.md của contract-agent là mẫu tham chiếu |
| 5 | Build Your Skill (Capstone) | Evaluate | Analyze, Create, Evaluate | Claude Code | SKILL.md lấy cảm hứng từ contract-agent |

**Progression:** S1-2 xây nền Apply (prompting + agent thinking). S3 chuyển đổi từ lý thuyết sang thực hành thực sự (chạy tool thật). S4-5 leo thang lên Create/Evaluate (cá nhân hóa + capstone). Tool chain: web UI → Cowork → Claude Code.

---

## Design Notes

- **Contract-agent là sợi chỉ đỏ** — không phải ví dụ bổ sung mà là ví dụ chủ đạo xuyên suốt 5 session
- **Session 1 không có lecture block riêng** — lý thuyết lồng ghép vào bài tập (inductive approach)
- **Terminal verbs luôn Apply hoặc cao hơn** — không có "hiểu" hay "biết" ở cấp terminal
- **Enabling objectives dùng Understand** chỉ khi có chỉ số đo lường kèm theo (3 mô hình, 4 thành phần, v.v.)
- **Vietnamese-first** — thuật ngữ Anh trong ngoặc chỉ lần đầu xuất hiện
- **Điều kiện công cụ rõ ràng** — mỗi objective nêu tool cụ thể (Claude.ai, Cowork, Claude Code)
- **Tiêu chuẩn đo lường được** — số phút, số thành phần, số tiêu chí, số người phản hồi
