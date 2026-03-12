// Generate all 5 session slide decks for "Prompt Engineering với Claude Code & Cowork"
// Palette: Purple #B165FB, Dark #181B24, Emerald #40695B, White #FFFFFF
const pptxgen = require('pptxgenjs');
const path = require('path');

const COLORS = { purple: 'B165FB', dark: '181B24', emerald: '40695B', white: 'FFFFFF', lightGray: 'F0F0F4', midGray: '8E8EA0' };
const FONT = 'Arial';
const OUT = path.resolve(__dirname, '..');

function addTitleSlide(pptx, title, subtitle) {
  const s = pptx.addSlide();
  s.background = { color: COLORS.dark };
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: COLORS.purple } });
  s.addText(title, { x: 0.8, y: 1.5, w: 8.4, h: 1.5, fontSize: 36, fontFace: FONT, color: COLORS.white, bold: true });
  s.addText(subtitle, { x: 0.8, y: 3.2, w: 8.4, h: 0.8, fontSize: 18, fontFace: FONT, color: COLORS.purple });
  s.addText('Prompt Engineering với Claude Code & Cowork', { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 11, fontFace: FONT, color: COLORS.midGray });
}

function addContentSlide(pptx, heading, bullets, opts = {}) {
  const s = pptx.addSlide();
  s.background = { color: opts.dark ? COLORS.dark : COLORS.white };
  const textColor = opts.dark ? COLORS.white : COLORS.dark;
  // Top bar
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: COLORS.purple } });
  // Heading
  s.addText(heading, { x: 0.8, y: 0.4, w: 8.4, h: 0.7, fontSize: 28, fontFace: FONT, color: COLORS.purple, bold: true });
  // Bullets
  const rows = bullets.map(b => ({ text: b, options: { fontSize: 18, fontFace: FONT, color: textColor, bullet: true, breakLine: true } }));
  s.addText(rows, { x: 0.8, y: 1.3, w: 8.4, h: 3.5, valign: 'top', lineSpacingMultiple: 1.5 });
  // Footer
  s.addText(opts.footer || '', { x: 0.8, y: 5.0, w: 8.4, h: 0.3, fontSize: 10, fontFace: FONT, color: COLORS.midGray });
  return s;
}

function addTwoColSlide(pptx, heading, leftItems, rightItems, opts = {}) {
  const s = pptx.addSlide();
  s.background = { color: COLORS.white };
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: COLORS.purple } });
  s.addText(heading, { x: 0.8, y: 0.4, w: 8.4, h: 0.7, fontSize: 28, fontFace: FONT, color: COLORS.purple, bold: true });
  // Left col
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.3, w: 4.2, h: 3.3, fill: { color: COLORS.lightGray }, rectRadius: 0.15 });
  s.addText(opts.leftTitle || '', { x: 0.7, y: 1.4, w: 3.8, h: 0.5, fontSize: 16, fontFace: FONT, color: COLORS.emerald, bold: true });
  const lRows = leftItems.map(b => ({ text: b, options: { fontSize: 15, fontFace: FONT, color: COLORS.dark, bullet: true, breakLine: true } }));
  s.addText(lRows, { x: 0.7, y: 1.9, w: 3.8, h: 2.5, valign: 'top', lineSpacingMultiple: 1.4 });
  // Right col
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.3, w: 4.2, h: 3.3, fill: { color: COLORS.dark }, rectRadius: 0.15 });
  s.addText(opts.rightTitle || '', { x: 5.5, y: 1.4, w: 3.8, h: 0.5, fontSize: 16, fontFace: FONT, color: COLORS.purple, bold: true });
  const rRows = rightItems.map(b => ({ text: b, options: { fontSize: 15, fontFace: FONT, color: COLORS.white, bullet: true, breakLine: true } }));
  s.addText(rRows, { x: 5.5, y: 1.9, w: 3.8, h: 2.5, valign: 'top', lineSpacingMultiple: 1.4 });
  return s;
}

function addHighlightSlide(pptx, heading, items) {
  const s = pptx.addSlide();
  s.background = { color: COLORS.dark };
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: COLORS.emerald } });
  s.addText(heading, { x: 0.8, y: 0.5, w: 8.4, h: 0.7, fontSize: 28, fontFace: FONT, color: COLORS.emerald, bold: true });
  items.forEach((item, i) => {
    const y = 1.5 + i * 1.0;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y, w: 8.4, h: 0.8, fill: { color: '252438' }, rectRadius: 0.1 });
    s.addText(`${i + 1}`, { x: 0.9, y: y + 0.05, w: 0.7, h: 0.7, fontSize: 22, fontFace: FONT, color: COLORS.purple, bold: true, align: 'center', valign: 'middle' });
    s.addText(item, { x: 1.7, y: y + 0.05, w: 7.3, h: 0.7, fontSize: 18, fontFace: FONT, color: COLORS.white, valign: 'middle' });
  });
}

// ======================== SESSION 1 ========================
function session1() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Course Designer';
  pptx.title = 'Session 1 — Từ Web Chat đến CLI Power';

  addTitleSlide(pptx, 'Buổi 1: Từ Web Chat\nđến CLI Power', '"Tại sao Claude Code?"');

  addContentSlide(pptx, 'Agenda', ['Tại sao cần chuyển từ web sang CLI?', '4 lợi thế của Claude Code', 'Live demo: Web vs CLI', 'Thực hành: First CLI Prompt']);

  addTwoColSlide(pptx, 'Web Chat vs Claude Code', ['Gõ prompt trên trình duyệt', 'Copy output → paste vào Word', 'Format lại thủ công', 'Mỗi lần phải gõ lại context', '5 bước = 10 phút/task'], ['Gõ 1 lệnh trong terminal', 'Output ra trực tiếp file', 'Format sẵn theo yêu cầu', 'CLAUDE.md = AI nhớ context', '1 bước = 2 phút/task'], { leftTitle: '❌ Web Chat (5 bước)', rightTitle: '✅ Claude Code (1 bước)' });

  addContentSlide(pptx, '📊 Poll: Bạn dùng AI tool nào?', ['ChatGPT web', 'Claude web', 'Gemini', 'Chưa dùng CLI bao giờ'], { footer: 'Vote ngay trên Zoom poll!' });

  addHighlightSlide(pptx, '4 Lợi thế Claude Code', ['Đọc file trực tiếp — không cần copy-paste vào chat', 'Viết file trực tiếp — output ra đúng file bạn muốn', 'CLAUDE.md — AI nhớ context dự án mỗi lần chạy', 'Chạy lệnh hệ thống — tích hợp với workflow']);

  addTwoColSlide(pptx, 'Analogy', ['Bạn GỌI ĐIỆN cho trợ lý', 'Phải mô tả lại mọi thứ', 'Trợ lý không thấy màn hình', 'Mỗi cuộc gọi bắt đầu từ đầu'], ['Trợ lý NGỒI CẠNH bàn bạn', 'Thấy file, thấy project', 'Nhớ rules bạn đã setup', 'Tiếp tục từ chỗ dừng'], { leftTitle: '📞 Web Chat', rightTitle: '🖥️ Claude Code' });

  addContentSlide(pptx, 'Demo 1: Viết Email', ['Web: Copy context → paste → gõ prompt → copy output → paste vào email', 'Claude Code: Gõ 1 prompt với Role + Context + Task + Format', '→ Output structured, ready to send'], { footer: 'Live demo trên Claude Code' });

  addContentSlide(pptx, 'Demo 2: Đọc File + Tóm tắt', ['"Đọc file data.txt và tóm tắt 5 điểm chính"', 'Claude Code đọc file trực tiếp từ folder', 'Không cần mở file → copy → paste vào chat', '→ Tiết kiệm 5 phút mỗi lần'], { footer: 'Live demo trên Claude Code' });

  addContentSlide(pptx, 'Demo 3: Prompt có cấu trúc', ['Role: Chuyên viên Marketing senior', 'Context: Company XYZ, sản phẩm mới, target SME', 'Task: Viết 3 email templates cho campaign launch', 'Format: Subject line + body 150 words + CTA'], { footer: 'So sánh output: prompt đơn vs prompt có R+C+T+F' });

  addContentSlide(pptx, '🎯 Activity: First CLI Prompt', ['Mở terminal → gõ claude', 'Task 1: Hỏi Claude Code 1 câu đơn giản', 'Task 2: Viết prompt Role + Context + Task + Format', 'Task 3: So sánh output với web chat'], { footer: '15 phút | Breakout rooms 3-4 người', dark: true });

  addHighlightSlide(pptx, '3 Điều Nhớ Về Nhà', ['Claude Code đọc file = không cần copy-paste context', 'CLAUDE.md = AI nhớ project rules, không cần nhắc lại', 'Terminal = playground — gõ sai không sao, thử lại!']);

  addContentSlide(pptx, 'Homework & Preview', ['Dùng Claude Code cho 3 task trong tuần', 'Ghi lại prompt đã dùng + output', 'Buổi 2: Framework RTT & CO-STAR + CLAUDE.md'], { dark: true, footer: 'Hẹn gặp buổi sau!' });

  return pptx.writeFile({ fileName: path.join(OUT, 'session-01-web-to-cli.pptx') });
}

// ======================== SESSION 2 ========================
function session2() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Session 2 — Framework trong Claude Code';

  addTitleSlide(pptx, 'Buổi 2: Framework\ntrong Claude Code', '"Prompt có cấu trúc, output có chất lượng"');

  addContentSlide(pptx, 'Recap Quiz', ['Lệnh nào mở Claude Code? → claude', 'CLAUDE.md dùng để? → Lưu project instructions', 'Prompt tốt cần mấy thành phần? → 4 (R+C+T+F)'], { footer: 'Vote trên Zoom poll!' });

  addContentSlide(pptx, 'WHY: Framework = Công thức nấu ăn', ['Không cần sáng tạo mỗi lần — điền vào chỗ trống', 'Trong Claude Code: Framework + CLAUDE.md = AI tự biết context', 'Bạn chỉ cần gõ task → output ổn định, chuyên nghiệp']);

  addHighlightSlide(pptx, 'RTT — Role, Task, Tone', ['Role: Bạn đóng vai gì?', 'Task: Việc cần làm cụ thể', 'Tone: Giọng điệu (formal/casual/empathetic)']);

  addContentSlide(pptx, 'Demo: RTT trong Claude Code', ['Role: Chuyên viên CS senior', 'Task: Viết email phản hồi complaint [paste complaint]', 'Tone: Chuyên nghiệp, empathetic, solution-focused', '→ Gõ trực tiếp trong Claude Code terminal'], { footer: 'RTT đủ cho 70% task routine!' });

  addHighlightSlide(pptx, 'CO-STAR — 6 Yếu tố', ['Context: Bối cảnh cụ thể, data, constraints', 'Objective: Mục đích — output DÙNG để làm gì?', 'Style: Viết như báo cáo? email? presentation?', 'Tone: Formal / casual / confident / cautious', 'Audience: Ai sẽ ĐỌC output này?', 'Response: Format output mong muốn']);

  addTwoColSlide(pptx, 'RTT vs CO-STAR', ['3 thành phần: Role, Task, Tone', 'Nhanh — 30 giây gõ xong', 'Đủ cho email, summary, data check', 'Tin nhắn nhanh'], ['6 thành phần: C-O-S-T-A-R', 'Chi tiết — 2 phút setup', 'Cho analysis, report, strategy', 'Brief cho agency'], { leftTitle: '⚡ RTT (70% tasks)', rightTitle: '🎯 CO-STAR (30% tasks)' });

  addContentSlide(pptx, 'CLAUDE.md: Siêu năng lực', ['File CLAUDE.md trong project folder', 'Claude Code tự động đọc mỗi lần chạy', 'Lưu: company info, style guide, terminology', 'Framework + CLAUDE.md = không cần gõ context lại!'], { dark: true, footer: 'Viết 1 lần, dùng mãi' });

  addContentSlide(pptx, 'Demo: Tạo CLAUDE.md cho Marketing', ['# CLAUDE.md', '## Project: Content Marketing — SaaS B2B', '## Rules: Tone friendly, CTA rõ ràng, SEO keywords', '## Terms: CTR, CAC, MQL, CMS'], { footer: 'Claude Code đọc file này → output chuẩn tone, đúng context' });

  addContentSlide(pptx, '🎯 Activity: Framework + CLAUDE.md Battle', ['Mỗi nhóm nhận 1 business scenario', 'Viết prompt RTT → chạy → ghi output', 'Viết prompt CO-STAR → chạy → ghi output', 'Tạo CLAUDE.md đơn giản → chạy lại → so sánh'], { footer: '12 phút | Breakout rooms', dark: true });

  addHighlightSlide(pptx, 'Decision Rule', ['Task < 5 phút → RTT', 'Task cần stakeholder review → CO-STAR', 'Task lặp lại mỗi tuần → RTT + CLAUDE.md']);

  addContentSlide(pptx, 'Wrap-up & Homework', ['Tuần này: RTT cho 3 tasks, CO-STAR cho 1 task quan trọng', 'Bonus: Tạo CLAUDE.md cho 1 project thật', 'Buổi 3: Few-shot prompting + Slash commands'], { dark: true });

  return pptx.writeFile({ fileName: path.join(OUT, 'session-02-frameworks.pptx') });
}

// ======================== SESSION 3 ========================
function session3() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Session 3 — Kỹ thuật nâng cao';

  addTitleSlide(pptx, 'Buổi 3: Dạy AI bằng ví dụ\n& Slash Commands', '"Few-shot + CLAUDE.md = Professional workflow"');

  addContentSlide(pptx, 'WHY: Mô tả không đủ — cần CHO XEM', ['Giống dạy nhân viên mới: nói quy trình + cho xem BÀI MẪU', 'AI cũng vậy — cho ví dụ, output chuẩn hơn 30-60%', 'Trong Claude Code: lưu ví dụ trong CLAUDE.md → AI nhớ mãi']);

  addHighlightSlide(pptx, 'Few-shot: Zero → 1 → Few', ['Zero-shot: Không ví dụ — AI tự suy (~50% accuracy)', '1-shot: 1 ví dụ — accuracy tăng lên ~70%', 'Few-shot: 2-3 ví dụ — accuracy 85%+']);

  addContentSlide(pptx, 'Demo: Phân loại Feedback', ['"Sản phẩm tốt nhưng giao chậm" → Logistics | Mixed | Medium', '"Nhân viên rất nhiệt tình" → Service | Positive | Low', 'Bây giờ phân loại: "App hay crash khi thanh toán"', '→ Few-shot: AI học pattern từ ví dụ!'], { footer: 'Accuracy từ ~50% lên ~85% chỉ với 2 ví dụ' });

  addContentSlide(pptx, 'Few-shot Template', ['Task: [mô tả]', 'Ví dụ 1: Input → Output mong muốn', 'Ví dụ 2: Input → Output mong muốn', 'Bây giờ làm: [input thật] → Output:'], { footer: '2-3 ví dụ đủ. Ví dụ phải DIVERSE.' });

  addContentSlide(pptx, '🎯 Activity 3: Few-shot trong CLI', ['Tạo few-shot prompt cho task thực', 'Ví dụ 1: có sẵn (template)', 'Ví dụ 2: partial (format given, content blank)', 'Ví dụ 3: blank (tự viết hoàn toàn)'], { footer: '15 phút | Test trên Claude Code', dark: true });

  addHighlightSlide(pptx, 'Slash Commands', ['/help — Xem tất cả commands', '/clear — Xóa context, bắt đầu mới', '/compact — Tóm tắt context dài']);

  addContentSlide(pptx, 'CLAUDE.md Nâng cao', ['Lưu few-shot examples vào CLAUDE.md', 'Lưu output format rules', 'Lưu industry terminology', '→ Claude Code áp dụng TỰ ĐỘNG mỗi session'], { dark: true });

  addContentSlide(pptx, 'Demo: CLAUDE.md cho Phòng HR', ['## Examples: Phân loại ứng viên', '## Rules: Dùng "ứng viên" không dùng "candidate"', '## Format: Mọi email kết thúc bằng "Trân trọng"', '→ Mọi output của Claude Code đều tuân thủ!'], { footer: 'CLAUDE.md = bộ nhớ dài hạn cho AI' });

  addContentSlide(pptx, '🎯 Activity 4: Design Your CLAUDE.md', ['Thiết kế CLAUDE.md cho phòng ban mình', 'Project description + few-shot examples', 'Output rules + key terminology', 'Test bằng Claude Code trong project folder'], { footer: '12 phút | Group practice', dark: true });

  addTwoColSlide(pptx, 'Few-shot vs CLAUDE.md', ['Bộ nhớ NGẮN hạn', 'Gõ mỗi lần trong prompt', 'Tốt cho task 1 lần', 'Dạy FORMAT cho 1 task'], ['Bộ nhớ DÀI hạn', 'Lưu 1 lần, áp dụng mãi', 'Tốt cho task lặp lại', 'Dạy CONTEXT cho mọi task'], { leftTitle: '⚡ Few-shot', rightTitle: '📄 CLAUDE.md' });

  addContentSlide(pptx, 'Homework', ['Thử few-shot cho 1 task format-heavy', 'Tạo/cập nhật CLAUDE.md cho 1 project thật', 'Buổi 4: Template system + Quality evaluation'], { dark: true });

  return pptx.writeFile({ fileName: path.join(OUT, 'session-03-advanced-techniques.pptx') });
}

// ======================== SESSION 4 ========================
function session4() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Session 4 — Cowork Workflow';

  addTitleSlide(pptx, 'Buổi 4: Cowork Workflow', '"Từ chat đơn lẻ đến hệ thống cộng tác"');

  addHighlightSlide(pptx, 'WHY: Scaling AI Impact', ['1 prompt tốt = 1 task hoàn thành', '1 CLAUDE.md tốt = 100 tasks chuẩn', '1 cowork system = cả team dùng AI hiệu quả']);

  addContentSlide(pptx, 'Template Anatomy', ['Framework (RTT/CO-STAR) + Industry context + [BIẾN]', '[BIẾN] = phần thay đổi mỗi lần dùng', 'Lưu trong project folder → Claude Code đọc', 'Viết 1 lần, dùng 50 lần!']);

  addContentSlide(pptx, 'Demo: Weekly Report Template', ['Role: Finance analyst tại [COMPANY]', 'Context: [paste DATA tuần này]', 'Task: Tóm tắt thành executive summary', 'Format: [COMPANY_TEMPLATE] format', '[BRACKETS] = biến bạn điền mỗi tuần'], { footer: 'Template tốt = viết 1 lần, dùng 50 lần' });

  addContentSlide(pptx, 'Template Checklist', ['☐ Role defined (cố định cho task type)', '☐ Context có industry-specific terms', '☐ Variables rõ ràng [BRACKETS]', '☐ Format specified', '☐ Saved trong project folder', '☐ CLAUDE.md updated', '☐ Tested ≥3 lần']);

  addContentSlide(pptx, '🎯 Activity 5: Template Factory', ['Tạo 3 prompt templates cho công việc', 'Dùng checklist — không template có sẵn', 'Lưu vào project folder', 'Config CLAUDE.md + test trên Claude Code'], { footer: '17 phút | Individual workshop', dark: true });

  addHighlightSlide(pptx, 'Quality Rubric — 4 Tiêu chí', ['Accuracy: Thông tin đúng? Có bịa data không?', 'Completeness: Đủ chi tiết? Không thừa không thiếu?', 'Tone: Phù hợp audience? Consistent?', 'Actionability: Người đọc biết next step?']);

  addTwoColSlide(pptx, 'Demo: Good vs Poor Output', ['Accuracy: 4/5 ✓', 'Completeness: 4/5 ✓', 'Tone: 5/5 ✓', 'Actionability: 4/5 ✓', 'Total: 17/20 — Dùng được!'], ['Accuracy: 3/5', 'Completeness: 2/5', 'Tone: 4/5', 'Actionability: 2/5', 'Total: 11/20 — Cần iterate!'], { leftTitle: '✅ Output tốt', rightTitle: '❌ Output kém' });

  addContentSlide(pptx, 'Iteration Loop', ['Test prompt → Score output (rubric)', '→ Identify weakness → Refine prompt', '→ /clear → Retest', '→ Compare scores → Repeat until ≥16/20']);

  addContentSlide(pptx, '🎯 Activity 6: Quality Loop', ['Hoán đổi templates với peer (khác ngành)', 'Test template → Đánh giá bằng rubric', 'Viết feedback → Iterate trong Claude Code', 'So sánh score trước/sau'], { footer: '12 phút | Peer review', dark: true });

  addHighlightSlide(pptx, 'Kết quả buổi hôm nay', ['Template + CLAUDE.md = Output chuẩn mỗi lần', 'Rubric = Biết output tốt hay cần sửa', 'Iteration loop = Cải thiện liên tục']);

  addContentSlide(pptx, 'Homework', ['Test 3 templates với data thật', 'Score mỗi output bằng rubric', 'Buổi 5: Organize workspace + Deploy cho team'], { dark: true });

  return pptx.writeFile({ fileName: path.join(OUT, 'session-04-cowork-workflow.pptx') });
}

// ======================== SESSION 5 ========================
function session5() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Session 5 — Từ cá nhân đến cowork';

  addTitleSlide(pptx, 'Buổi 5: Từ cá nhân\nđến Cowork', '"Hệ thống hóa & Triển khai Team"');

  addContentSlide(pptx, 'WHY: ROI của hệ thống', ['1 người = tiết kiệm 2 giờ/ngày', '10 người = 20 giờ/ngày = 400 giờ/tháng', 'Nhưng 10 cách làm khác nhau = hỗn loạn', '→ Cần SYSTEM: shared CLAUDE.md + prompt library']);

  addContentSlide(pptx, 'Cowork Workspace Structure', ['prompt-library/', '  ├── email/ (customer-response-rtt-v2.md)', '  ├── report/ (weekly-summary-costar-v3.md)', '  └── data/ (invoice-extraction-fewshot-v1.md)', 'CLAUDE.md (shared team rules)', 'README.md (index + usage guide)']);

  addContentSlide(pptx, 'Naming Convention', ['[task]-[framework]-v[version].md', 'customer-response-rtt-v2.md', 'quarterly-analysis-cot-v1.md', '→ Ai đọc tên cũng hiểu prompt này làm gì'], { footer: '"email-rtt-v1" vs "my prompt 3" — rõ ràng hơn nhiều' });

  addContentSlide(pptx, 'Shared CLAUDE.md', ['Team rules: tone, style guide, terminology', 'Project context: company info, department processes', 'Output format: company templates, email signatures', '→ Mọi người dùng Claude Code đều nhận output chuẩn'], { dark: true });

  addContentSlide(pptx, '🎯 Activity 7: Build Your Workspace', ['Organize TẤT CẢ prompts từ buổi 1-4', 'Target: ≥10 prompts, organized, named', 'Tạo shared CLAUDE.md cho team', 'Testing notes cho mỗi template'], { footer: '18 phút | Individual workshop', dark: true });

  addHighlightSlide(pptx, 'Team Deployment: 3 Phases', ['Champions: 2-3 người hào hứng → pilot first', 'Pilot: 3 tasks cụ thể × 2 tuần → collect data', 'Expand: Share results → onboard more → measure ROI']);

  addContentSlide(pptx, 'Onboarding Guide', ['Week 1: Install Claude Code + gõ lệnh đầu tiên', 'Week 2: RTT cho 3 tasks routine', 'Week 3: Tạo CLAUDE.md cho team', 'Week 4: Shared workspace + measure results']);

  addTwoColSlide(pptx, 'Blockers & Solutions', ['"Terminal quá khó"', '"Web chat đủ rồi"', '"Team tôi không dùng AI"', '"IT không cho cài"'], ['Pair buddy system + cheat sheet', 'Demo ROI: 2 giờ/ngày saved', 'Bắt đầu từ BẠN → show results', 'Business case + ROI numbers'], { leftTitle: '❌ Blocker', rightTitle: '✅ Solution' });

  addContentSlide(pptx, '🎯 Activity 8: 30-Day Cowork Plan', ['Nhóm 3-4 cùng ngành', 'Week 1: Champions + 3 pilot tasks', 'Week 2: Pilot + shared CLAUDE.md', 'Week 3: Feedback + iterate', 'Week 4: Expand + measure ROI'], { footer: '12 phút | Group workshop → 30-sec pitch', dark: true });

  addHighlightSlide(pptx, '3 Key Takeaways', ['Framework > Freestyle — cấu trúc tạo output ổn định', 'Ví dụ > Mô tả — few-shot + CLAUDE.md = accuracy tối đa', 'System > Individual — cowork workspace = team thành công']);

  addContentSlide(pptx, 'Cảm ơn! 🎉', ['Bạn đã đi từ "chat rồi hy vọng" → "hệ thống chuyên nghiệp"', 'Resources: Handout + Interactive tools + Workspace template', 'Community: [link group]', 'Hãy bắt đầu từ tuần này — 1 prompt, 1 CLAUDE.md, 1 task'], { dark: true, footer: 'Prompt Engineering với Claude Code & Cowork' });

  return pptx.writeFile({ fileName: path.join(OUT, 'session-05-team-deployment.pptx') });
}

// ======================== RUN ALL ========================
async function main() {
  console.log('Generating Session 1...');
  await session1();
  console.log('Generating Session 2...');
  await session2();
  console.log('Generating Session 3...');
  await session3();
  console.log('Generating Session 4...');
  await session4();
  console.log('Generating Session 5...');
  await session5();
  console.log('All 5 presentations generated!');
}

main().catch(console.error);
