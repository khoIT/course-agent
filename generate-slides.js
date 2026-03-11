const pptxgen = require("pptxgenjs");

// Initialize presentation
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Course Team';
pres.title = 'Sử dụng Skills để khai thác sức mạnh LLM Agent';

// Color palette - Teal Trust theme
const COLORS = {
  primary: "028090",      // Teal
  secondary: "00A896",    // Seafoam
  accent: "02C39A",       // Mint
  text: "1E293B",         // Dark slate
  lightBg: "F8FFFE",      // Light bg
  white: "FFFFFF",
  darkSlate: "1E293B",
  lightGray: "E2E8F0",
  mediumGray: "94A3B8"
};

const FONTS = {
  header: "Trebuchet MS",
  body: "Calibri"
};

// Helper function: Create title + content slide layout
function createContentSlide(pres, title, content) {
  const slide = pres.addSlide();
  slide.background = { color: COLORS.lightBg };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: COLORS.primary }
  });

  slide.addText(title, {
    x: 0.3, y: 0.15, w: 9.4, h: 0.5,
    fontSize: 32, bold: true, color: COLORS.white,
    fontFace: FONTS.header, align: "left", valign: "middle"
  });

  // Left accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.8, w: 0.08, h: 4.825,
    fill: { color: COLORS.secondary }
  });

  return slide;
}

// Helper: Add visual element placeholder with colored circle
function addIconPlaceholder(slide, x, y, color, label) {
  slide.addShape(pres.shapes.OVAL, {
    x, y, w: 0.6, h: 0.6,
    fill: { color: color }
  });
  slide.addText(label, {
    x: x + 0.7, y, w: 2.5, h: 0.6,
    fontSize: 13, color: COLORS.text, fontFace: FONTS.body,
    valign: "middle"
  });
}

// ========================
// SESSION 1: Agent & Skill 101
// ========================

// Slide 1: Title slide
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.primary };

  // Large accent shape
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: -1, w: 5, h: 7.625,
    fill: { color: COLORS.secondary, transparency: 20 }
  });

  slide.addText("Sử dụng Skills để", {
    x: 0.5, y: 1.5, w: 6, h: 1,
    fontSize: 44, bold: true, color: COLORS.white,
    fontFace: FONTS.header
  });

  slide.addText("khai thác sức mạnh LLM Agent", {
    x: 0.5, y: 2.5, w: 6, h: 1,
    fontSize: 44, bold: true, color: COLORS.accent,
    fontFace: FONTS.header
  });

  slide.addText("Buổi 1: Agent & Skill 101", {
    x: 0.5, y: 3.8, w: 6, h: 0.6,
    fontSize: 24, color: COLORS.white,
    fontFace: FONTS.body
  });

  slide.addText("Tại sao prompt đơn lẻ không đủ?", {
    x: 0.5, y: 4.5, w: 6, h: 0.5,
    fontSize: 18, color: COLORS.accent, italic: true,
    fontFace: FONTS.body
  });
}

// Slide 2: Opening question
{
  const slide = createContentSlide(pres, "Hôm nay, bạn dùng AI để làm gì?", "");

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: COLORS.white },
    line: { color: COLORS.lightGray, width: 2 }
  });

  slide.addText([
    { text: "Kết quả có nhất quán không?", options: { fontSize: 20, bold: true, breakLine: true } },
    { text: "\n", options: { breakLine: true } },
    { text: "Cùng 1 yêu cầu, lần này kết quả khác lần kia?", options: { fontSize: 16 } }
  ], {
    x: 0.8, y: 1.5, w: 3.7, h: 3.2,
    color: COLORS.text, fontFace: FONTS.body, valign: "top"
  });

  // Right side - visual representation
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 1.8,
    fill: { color: COLORS.accent, transparency: 30 }
  });
  slide.addText("❓ Câu hỏi để suy ngẫm", {
    x: 5.5, y: 1.4, w: 3.7, h: 1.5,
    fontSize: 16, bold: true, color: COLORS.text, fontFace: FONTS.body
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 3.2, w: 4.3, h: 1.8,
    fill: { color: COLORS.secondary, transparency: 30 }
  });
  slide.addText("💡 Preview: Agent có skill là câu trả lời", {
    x: 5.5, y: 3.4, w: 3.7, h: 1.5,
    fontSize: 16, bold: true, color: COLORS.text, fontFace: FONTS.body
  });
}

// Slide 3-4: WHY - Problem with single prompts
{
  const slide = createContentSlide(pres, "Vấn đề của Prompt đơn lẻ", "");

  const problems = [
    { num: 1, title: "Kết quả không nhất quán", desc: "Cùng 1 prompt → kết quả khác mỗi lần" },
    { num: 2, title: "Không nhớ quy trình", desc: "Agent không biết quy trình cụ thể của bạn" },
    { num: 3, title: "Không tái sử dụng", desc: "Phải gõ lại prompt mỗi lần" }
  ];

  let yPos = 1.2;
  problems.forEach((p) => {
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos, w: 0.5, h: 0.5,
      fill: { color: COLORS.primary }
    });
    slide.addText(String(p.num), {
      x: 0.5, y: yPos, w: 0.5, h: 0.5,
      fontSize: 20, bold: true, color: COLORS.white,
      align: "center", valign: "middle"
    });

    // Content
    slide.addText(p.title, {
      x: 1.2, y: yPos, w: 3, h: 0.25,
      fontSize: 16, bold: true, color: COLORS.text, fontFace: FONTS.header
    });
    slide.addText(p.desc, {
      x: 1.2, y: yPos + 0.3, w: 3, h: 0.35,
      fontSize: 13, color: COLORS.mediumGray, fontFace: FONTS.body
    });

    // Right visual
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5, y: yPos - 0.1, w: 4.5, h: 0.6,
      fill: { color: COLORS.lightGray }
    });
    slide.addText(p.desc, {
      x: 5.2, y: yPos, w: 4.1, h: 0.4,
      fontSize: 12, italic: true, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle"
    });

    yPos += 1.1;
  });

  // Bottom tagline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 8.8, h: 0.8,
    fill: { color: COLORS.accent, transparency: 20 }
  });
  slide.addText("Analogy: Hỏi đường người lạ vs GPS tích hợp", {
    x: 0.7, y: 4.6, w: 8.4, h: 0.6,
    fontSize: 14, bold: true, color: COLORS.text, fontFace: FONTS.body,
    valign: "middle"
  });
}

// Slide 5: Analogy - Random person vs GPS
{
  const slide = createContentSlide(pres, "Analogy: Hỏi đường vs GPS", "");

  // Left column - hỏi đường
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.5, h: 3.8,
    fill: { color: COLORS.lightGray, transparency: 20 },
    line: { color: COLORS.primary, width: 2 }
  });

  slide.addText("❓ Hỏi đường người lạ", {
    x: 0.7, y: 1.3, w: 4.1, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const randomText = "• Mỗi người hướng dẫn khác nhau\n• Có thể quên bước\n• Phải hỏi lại nếu quên\n• Không nhất quán";
  slide.addText(randomText, {
    x: 0.8, y: 1.9, w: 4, h: 3,
    fontSize: 13, color: COLORS.text, fontFace: FONTS.body, valign: "top"
  });

  // Right column - GPS
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.2, w: 4.5, h: 3.8,
    fill: { color: COLORS.accent, transparency: 20 },
    line: { color: COLORS.secondary, width: 2 }
  });

  slide.addText("🎯 GPS Tích hợp", {
    x: 5.5, y: 1.3, w: 4.1, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.secondary, fontFace: FONTS.header
  });

  const gpsText = "✓ Luôn chỉ đúng đường\n✓ Không bỏ qua bước\n✓ Chỉ cần gõ điểm đến\n✓ Kết quả luôn nhất quán";
  slide.addText(gpsText, {
    x: 5.5, y: 1.9, w: 4, h: 3,
    fontSize: 13, color: COLORS.text, fontFace: FONTS.body, valign: "top"
  });
}

// Slide 6: WHAT - Three core concepts
{
  const slide = createContentSlide(pres, "Ba Khái Niệm Cốt Lõi", "");

  const concepts = [
    {
      label: "[I]",
      title: "Agent",
      desc: "AI dùng tools",
      color: COLORS.primary
    },
    {
      label: "[B]",
      title: "Skill",
      desc: "Sổ tay chuyên gia",
      color: COLORS.secondary
    },
    {
      label: "[T]",
      title: "Tool",
      desc: "Khả năng cụ thể",
      color: COLORS.accent
    }
  ];

  concepts.forEach((c, i) => {
    const xPos = 0.5 + i * 3.2;

    // Background box first
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.2, w: 3.2, h: 3,
      fill: { color: c.color, transparency: 85 },
      line: { color: c.color, width: 2 }
    });

    // Icon circle with letter
    slide.addShape(pres.shapes.OVAL, {
      x: xPos + 1.15, y: 1.4, w: 0.9, h: 0.9,
      fill: { color: c.color }
    });
    slide.addText(c.label, {
      x: xPos + 1.15, y: 1.4, w: 0.9, h: 0.9,
      fontSize: 28, align: "center", valign: "middle", color: COLORS.white,
      bold: true
    });

    // Title
    slide.addText(c.title, {
      x: xPos + 0.1, y: 2.45, w: 3, h: 0.35,
      fontSize: 18, bold: true, color: c.color, fontFace: FONTS.header,
      align: "center"
    });

    // Description
    slide.addText(c.desc, {
      x: xPos + 0.2, y: 2.9, w: 2.8, h: 1,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body,
      align: "center", valign: "top"
    });
  });
}

// Slide 7-8: Analogy - Employee + SOP + Software
{
  const slide = createContentSlide(pres, "Analogy: Nhân viên mới + SOP + Phần mềm", "");

  const analogy = [
    { comp: "Nhân viên mới", concept: "Agent", color: COLORS.primary },
    { comp: "SOP (Standard Operating Procedure)", concept: "Skill", color: COLORS.secondary },
    { comp: "Phần mềm công ty (Office, CRM...)", concept: "Tool", color: COLORS.accent }
  ];

  let yPos = 1.3;
  analogy.forEach((a) => {
    // Left - analogy
    slide.addText(a.comp, {
      x: 0.5, y: yPos, w: 3.5, h: 0.45,
      fontSize: 16, bold: true, color: COLORS.text, fontFace: FONTS.header
    });

    // Arrow
    slide.addText("=", {
      x: 4.2, y: yPos, w: 0.4, h: 0.45,
      fontSize: 20, color: a.color, bold: true, align: "center"
    });

    // Right - concept
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.8, y: yPos, w: 4.7, h: 0.45,
      fill: { color: a.color, transparency: 30 }
    });
    slide.addText(a.concept, {
      x: 5, y: yPos, w: 4.3, h: 0.45,
      fontSize: 16, bold: true, color: a.color, fontFace: FONTS.header,
      valign: "middle"
    });

    yPos += 0.8;
  });

  // Example flow
  slide.addText("Ví dụ: Viết Email", {
    x: 0.5, y: 3.7, w: 9, h: 0.35,
    fontSize: 16, bold: true, color: COLORS.text, fontFace: FONTS.header
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 1,
    fill: { color: COLORS.secondary, transparency: 20 },
    line: { color: COLORS.secondary, width: 2 }
  });

  const flow = "Nhân viên mới (Agent) + SOP email (Skill) + Outlook (Tool) = Email chuyên nghiệp";
  slide.addText(flow, {
    x: 0.7, y: 4.2, w: 8.6, h: 0.8,
    fontSize: 13, bold: true, color: COLORS.text, fontFace: FONTS.body,
    valign: "middle"
  });
}

// Slide 9: HOW - Demo preview
{
  const slide = createContentSlide(pres, "Demo Live: Cowork", "");

  const steps = [
    "1. Tạo slide deck KHÔNG dùng skill",
    "2. Kết quả: Tệ ❌",
    "3. Tạo slide deck CÓ dùng skill pptx",
    "4. Kết quả: Tốt ✓"
  ];

  let yPos = 1.3;
  steps.forEach((step, i) => {
    const isBad = step.includes("❌");
    const isGood = step.includes("✓");
    const color = isBad ? "#FF6B6B" : isGood ? "#51CF66" : COLORS.text;

    slide.addText(step, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 16, bold: i === 0 || i === 2, color: color,
      fontFace: FONTS.body
    });

    yPos += 0.8;
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1, y: 1.2, w: 8, h: 3.6,
    fill: { color: "none" },
    line: { color: COLORS.secondary, width: 2, dashType: "dash" }
  });

  // Bottom note
  slide.addText("👉 Bạn sẽ thấy sự khác biệt trên màn hình", {
    x: 0.5, y: 4.8, w: 9, h: 0.6,
    fontSize: 14, italic: true, color: COLORS.accent, fontFace: FONTS.body
  });
}

// Slide 10-12: Activity instructions
{
  const slide = createContentSlide(pres, "Hoạt động 1: Công việc nào giao được cho Agent?", "");

  slide.addText("Breakout rooms (3-4 người)", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const instructions = [
    "1. Liệt kê 5 công việc lặp lại hàng ngày của bạn",
    "2. Phân loại: Agent làm được / Chưa làm được / Cần skill riêng",
    "3. Chia sẻ kết quả với cả lớp"
  ];

  let yPos = 1.8;
  instructions.forEach((inst, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos + 0.08, w: 0.35, h: 0.35,
      fill: { color: COLORS.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: yPos + 0.08, w: 0.35, h: 0.35,
      fontSize: 14, bold: true, color: COLORS.white,
      align: "center", valign: "middle"
    });

    slide.addText(inst, {
      x: 1, y: yPos, w: 8.5, h: 0.5,
      fontSize: 14, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle"
    });

    yPos += 0.75;
  });

  // Timeline
  slide.addText("Thời gian: 15 phút", {
    x: 0.5, y: 4.2, w: 9, h: 0.4,
    fontSize: 13, color: COLORS.mediumGray, fontFace: FONTS.body, italic: true
  });
}

// Slide 13: Discussion question
{
  const slide = createContentSlide(pres, "Câu hỏi Thảo luận", "");

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: COLORS.accent, transparency: 15 },
    line: { color: COLORS.accent, width: 3 }
  });

  slide.addText('"Nếu bạn có 1 trợ lý biết đúng cách làm mọi quy trình của bạn,\nbạn sẽ giao gì cho họ đầu tiên?"', {
    x: 0.8, y: 1.5, w: 8.4, h: 3.2,
    fontSize: 20, italic: true, color: COLORS.text, fontFace: FONTS.body,
    align: "center", valign: "middle"
  });
}

// Slide 14: Summary
{
  const slide = createContentSlide(pres, "Tổng Kết Buổi 1", "");

  const takeaways = [
    "✓ Agent = Nhân viên mới",
    "✓ Skill = Sổ tay chuyên gia (SOP)",
    "✓ Tool = Phần mềm công ty"
  ];

  let yPos = 1.3;
  takeaways.forEach((t) => {
    slide.addText(t, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 16, bold: true, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1, y: 1.2, w: 8, h: 2.2,
    fill: { color: "none" },
    line: { color: COLORS.primary, width: 2 }
  });

  // Preview next
  slide.addText("👉 Buổi 2: Dùng Skills có sẵn", {
    x: 1, y: 3.7, w: 8, h: 0.5,
    fontSize: 16, bold: true, color: COLORS.accent, fontFace: FONTS.header
  });
}

// Slide 15: Mini-quiz
{
  const slide = createContentSlide(pres, "Mini-Quiz Nhanh", "");

  const quiz = [
    { q: "1. Agent là gì?", a: "a) Chương trình AI có khả năng dùng tools" },
    { q: "2. Skill là gì?", a: "a) Sổ tay chuyên gia cho agent" },
    { q: "3. Tool là gì?", a: "a) Khả năng cụ thể (đọc file, tạo slide...)" }
  ];

  let yPos = 1.3;
  quiz.forEach((item, i) => {
    slide.addText(item.q, {
      x: 0.5, y: yPos, w: 9, h: 0.4,
      fontSize: 15, bold: true, color: COLORS.primary, fontFace: FONTS.header
    });
    slide.addText(item.a, {
      x: 0.8, y: yPos + 0.45, w: 8.7, h: 0.35,
      fontSize: 13, color: COLORS.mediumGray, fontFace: FONTS.body
    });
    yPos += 1.1;
  });
}

// Slide 16: Closing
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.primary };

  slide.addText("Buổi 1 Hoàn Tất ✓", {
    x: 0.5, y: 2, w: 9, h: 0.8,
    fontSize: 44, bold: true, color: COLORS.white,
    fontFace: FONTS.header, align: "center"
  });

  slide.addText("Bạn đã hiểu: Agent, Skill, Tool", {
    x: 0.5, y: 2.9, w: 9, h: 0.5,
    fontSize: 18, color: COLORS.accent,
    fontFace: FONTS.body, align: "center"
  });
}

// ========================
// SESSION 2: Using Existing Skills
// ========================

// Slide 1 (S2): Title
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.secondary };

  slide.addText("Buổi 2: Dùng Skills có sẵn", {
    x: 0.5, y: 1.8, w: 9, h: 1,
    fontSize: 44, bold: true, color: COLORS.white,
    fontFace: FONTS.header
  });

  slide.addText("Biến AI thành trợ lý đa năng", {
    x: 0.5, y: 2.9, w: 9, h: 0.6,
    fontSize: 24, color: COLORS.accent,
    fontFace: FONTS.body
  });
}

// Slide 2 (S2): Review + WHY
{
  const slide = createContentSlide(pres, "Ôn Tập Nhanh", "");

  slide.addText("Agent, Skill, Tool là gì?", {
    x: 1, y: 1.3, w: 8, h: 0.5,
    fontSize: 18, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1, y: 1.9, w: 8, h: 0.08,
    fill: { color: COLORS.secondary }
  });

  const hint = "💡 Gợi ý: Nhân viên mới + SOP + Phần mềm";
  slide.addText(hint, {
    x: 1, y: 2.2, w: 8, h: 1,
    fontSize: 16, italic: true, color: COLORS.text, fontFace: FONTS.body
  });
}

// Slide 3 (S2): Skill Catalog Analogy
{
  const slide = createContentSlide(pres, "WHY: Catalog Skills như Menu Nhà Hàng", "");

  // Left: Menu analogy
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.5, h: 3.8,
    fill: { color: COLORS.lightGray, transparency: 20 },
    line: { color: COLORS.primary, width: 2 }
  });

  slide.addText("🍽️ Nhà Hàng", {
    x: 0.7, y: 1.3, w: 4.1, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const menuText = "• Bạn không cần nấu ăn\n• Chỉ gọi món\n• Đầu bếp xử lý";
  slide.addText(menuText, {
    x: 0.8, y: 1.9, w: 4, h: 2.5,
    fontSize: 13, color: COLORS.text, fontFace: FONTS.body
  });

  // Right: Skills catalog
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.2, w: 4.5, h: 3.8,
    fill: { color: COLORS.accent, transparency: 20 },
    line: { color: COLORS.secondary, width: 2 }
  });

  slide.addText("🎯 Skill Catalog", {
    x: 5.5, y: 1.3, w: 4.1, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.secondary, fontFace: FONTS.header
  });

  const skillText = "• Bạn không cần code\n• Chỉ gọi skill\n• Agent xử lý";
  slide.addText(skillText, {
    x: 5.5, y: 1.9, w: 4, h: 2.5,
    fontSize: 13, color: COLORS.text, fontFace: FONTS.body
  });
}

// Slide 4-11: 6 Core Skills flashcards
{
  const skills = [
    { icon: "📊", name: "pptx", desc: "Tạo slide", when: "Cần trình bày" },
    { icon: "📄", name: "docx", desc: "Tạo document", when: "Cần viết báo cáo, handout" },
    { icon: "📑", name: "pdf", desc: "Xử lý PDF", when: "Cần đọc/chuyển file" },
    { icon: "📈", name: "xlsx", desc: "Tạo bảng tính", when: "Cần phân tích dữ liệu" },
    { icon: "🎨", name: "canvas-design", desc: "Vẽ hình", when: "Cần infographic, poster" },
    { icon: "🔍", name: "web-search", desc: "Tìm kiếm web", when: "Cần thông tin từ internet" }
  ];

  skills.forEach((s, i) => {
    const slide = createContentSlide(pres, `Skill ${i + 1}: ${s.name}`, "");

    // Icon area
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: 1.2, w: 2.5, h: 2.5,
      fill: { color: COLORS.primary, transparency: 10 }
    });
    slide.addText(s.icon, {
      x: 0.5, y: 1.2, w: 2.5, h: 2.5,
      fontSize: 80, align: "center", valign: "middle"
    });

    // Info
    slide.addText(s.name.toUpperCase(), {
      x: 3.3, y: 1.3, w: 6.2, h: 0.5,
      fontSize: 24, bold: true, color: COLORS.primary, fontFace: FONTS.header
    });

    slide.addText(`Dùng để: ${s.desc}`, {
      x: 3.3, y: 1.9, w: 6.2, h: 0.5,
      fontSize: 14, color: COLORS.text, fontFace: FONTS.body
    });

    slide.addText(`Khi nào: ${s.when}`, {
      x: 3.3, y: 2.5, w: 6.2, h: 1,
      fontSize: 14, color: COLORS.mediumGray, fontFace: FONTS.body, italic: true
    });

    // Visual element
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 4, w: 9, h: 1.2,
      fill: { color: COLORS.accent, transparency: 30 }
    });
    slide.addText(`Kết quả: File ${s.name} hoàn thiện`, {
      x: 0.8, y: 4.1, w: 8.4, h: 1,
      fontSize: 14, bold: true, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle"
    });
  });
}

// Slide 12: Skill Chain Demo
{
  const slide = createContentSlide(pres, "Demo: Chuỗi Skills trong Cowork", "");

  slide.addText("Tạo báo cáo tuần = 4 skills liên tiếp", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const chain = [
    "1. PDF → Đọc dữ liệu tuần",
    "2. XLSX → Phân tích số liệu",
    "3. DOCX → Viết báo cáo",
    "4. PPTX → Tạo slide tóm tắt"
  ];

  let yPos = 1.9;
  chain.forEach((step, i) => {
    // Arrow
    if (i > 0) {
      slide.addText("↓", {
        x: 4.5, y: yPos - 0.35, w: 1, h: 0.35,
        fontSize: 20, color: COLORS.secondary, align: "center", bold: true
      });
    }

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1, y: yPos, w: 8, h: 0.5,
      fill: { color: COLORS.secondary, transparency: 30 }
    });
    slide.addText(step, {
      x: 1.3, y: yPos, w: 7.4, h: 0.5,
      fontSize: 14, bold: true, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle"
    });

    yPos += 0.8;
  });

  // Result
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1, y: 4.5, w: 8, h: 0.7,
    fill: { color: COLORS.accent, transparency: 20 }
  });
  slide.addText("✓ Báo cáo hoàn thiện chỉ với 1 prompt!", {
    x: 1.3, y: 4.55, w: 7.4, h: 0.6,
    fontSize: 14, bold: true, color: COLORS.text, fontFace: FONTS.body,
    valign: "middle"
  });
}

// ========================
// SESSION 3-5: Shorter content structure (will continue...)
// ========================

// SESSION 3: Creating First Skill
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.accent };

  slide.addText("Buổi 3: Tạo Skill Đầu Tiên", {
    x: 0.5, y: 1.8, w: 9, h: 1,
    fontSize: 44, bold: true, color: COLORS.white,
    fontFace: FONTS.header
  });

  slide.addText("Từ người dùng thành người tạo", {
    x: 0.5, y: 2.9, w: 9, h: 0.6,
    fontSize: 24, color: COLORS.white, fontFace: FONTS.body
  });
}

// Session 3 - Slide 2
{
  const slide = createContentSlide(pres, "WHY: Skill có sẵn không đủ", "");

  slide.addText("Ví dụ:", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 9, h: 3,
    fill: { color: COLORS.lightGray, transparency: 20 },
    line: { color: COLORS.primary, width: 2 }
  });

  const example = "Skill docx tạo document tốt,\nNhưng không biết template báo cáo của công ty bạn.\n\nBạn cần skill riêng!";
  slide.addText(example, {
    x: 0.8, y: 1.9, w: 8.4, h: 2.6,
    fontSize: 15, color: COLORS.text, fontFace: FONTS.body
  });
}

// Session 3 - Slide 3: SKILL.md anatomy
{
  const slide = createContentSlide(pres, "WHAT: Giải Phẫu SKILL.md", "");

  const parts = [
    { num: 1, name: "Frontmatter YAML", desc: "name + description" },
    { num: 2, name: "Body", desc: "Hướng dẫn chi tiết" },
    { num: 3, name: "References", desc: "Tài liệu tham khảo" }
  ];

  let yPos = 1.3;
  parts.forEach((p) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 0.5, h: 0.5,
      fill: { color: COLORS.primary }
    });
    slide.addText(String(p.num), {
      x: 0.5, y: yPos, w: 0.5, h: 0.5,
      fontSize: 20, bold: true, color: COLORS.white,
      align: "center", valign: "middle"
    });

    slide.addText(p.name, {
      x: 1.2, y: yPos, w: 3, h: 0.25,
      fontSize: 15, bold: true, color: COLORS.text, fontFace: FONTS.header
    });
    slide.addText(p.desc, {
      x: 1.2, y: yPos + 0.3, w: 3, h: 0.25,
      fontSize: 13, color: COLORS.mediumGray, fontFace: FONTS.body
    });

    // Example box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5, y: yPos, w: 4.5, h: 0.55,
      fill: { color: COLORS.accent, transparency: 30 }
    });

    const exampleMap = {
      "Frontmatter YAML": "name: email-summarizer",
      "Body": "1. Bạn sẽ viết hướng dẫn chi tiết",
      "References": "Template email, quy tắc công ty"
    };

    slide.addText(exampleMap[p.name], {
      x: 5.2, y: yPos, w: 4.1, h: 0.55,
      fontSize: 11, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle", italic: true
    });

    yPos += 0.85;
  });
}

// Session 3 - Slides 4-9: More content slides
{
  const slide = createContentSlide(pres, "Demo: Tạo Skill 'email-summarizer'", "");

  const code = "---\nname: email-summarizer\ndescription: Tóm tắt email dài\n---\n\n# Email Summarizer\nCầu trúc: Đọc email → Trích xuất điểm chính → Tóm tắt dưới 100 từ";

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.5,
    fill: { color: "#F5F5F5" },
    line: { color: COLORS.primary, width: 1 }
  });

  slide.addText(code, {
    x: 0.7, y: 1.4, w: 8.6, h: 3.1,
    fontSize: 11, fontFace: "Calibri", color: COLORS.darkSlate,
    valign: "top"
  });
}

// Session 3 - Slide 5: Activity
{
  const slide = createContentSlide(pres, "Hoạt động 3: Build Your First Skill", "");

  slide.addText("Mỗi bạn chọn 1 tác vụ lặp lại & viết SKILL.md", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 15, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const steps = [
    "1. Chọn tên skill (kebab-case)",
    "2. Viết description (pushy, 1-2 câu)",
    "3. Viết body (hướng dẫn)",
    "4. Test trong Cowork"
  ];

  let yPos = 1.8;
  steps.forEach((s) => {
    slide.addText(s, {
      x: 1, y: yPos, w: 8, h: 0.4,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.6;
  });

  slide.addText("Thời gian: 20 phút | Hỗ trợ: Breakout rooms", {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 12, italic: true, color: COLORS.mediumGray, fontFace: FONTS.body
  });
}

// Session 3 - Slide 6: Show & Tell
{
  const slide = createContentSlide(pres, "Show & Tell: Skill Của Bạn", "");

  slide.addText("3-4 người sẽ chia sẻ skill họ tạo", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 15, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const feedback = [
    "✓ Description có kích hoạt đúng lúc?",
    "✓ Body có rõ ràng không?",
    "✓ Agent hiểu được yêu cầu?"
  ];

  let yPos = 1.8;
  feedback.forEach((f) => {
    slide.addText(f, {
      x: 1, y: yPos, w: 8, h: 0.4,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.6;
  });
}

// Session 3 - Slide 7: References folder
{
  const slide = createContentSlide(pres, "WHAT: Thư mục References/", "");

  slide.addText("Khi skill cần kiến thức chuyên sâu → Dùng references/", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  slide.addText("Ví dụ:", {
    x: 0.5, y: 1.8, w: 9, h: 0.3,
    fontSize: 12, bold: true, color: COLORS.text, fontFace: FONTS.body
  });

  const structure = "skill-folder/\n├── SKILL.md (ngắn)\n└── references/\n    ├── email-template.md\n    ├── company-style.md\n    └── best-practices.md";

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.2, w: 8.4, h: 2.2,
    fill: { color: COLORS.lightGray, transparency: 30 }
  });

  slide.addText(structure, {
    x: 1, y: 2.4, w: 8, h: 1.8,
    fontSize: 11, fontFace: "Calibri", color: COLORS.text
  });
}

// Session 3 - Slide 8: Summary
{
  const slide = createContentSlide(pres, "Tổng Kết Buổi 3", "");

  const summary = [
    "✓ SKILL.md = Frontmatter YAML + Body + References",
    "✓ Description phải 'pushy' (kích hoạt đúng lúc)",
    "✓ References để agent có kiến thức chuyên sâu",
    "✓ Bạn vừa tạo 'chuyên gia AI' đầu tiên!"
  ];

  let yPos = 1.3;
  summary.forEach((s) => {
    slide.addText(s, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 14, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });
}

// ========================
// SESSION 4: Advanced Skills & Claude Code
// ========================

{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.secondary };

  slide.addText("Buổi 4: Skill Nâng Cao & Claude Code", {
    x: 0.5, y: 1.8, w: 9, h: 1,
    fontSize: 44, bold: true, color: COLORS.white,
    fontFace: FONTS.header
  });

  slide.addText("Từ đơn giản đến chuyên nghiệp", {
    x: 0.5, y: 2.9, w: 9, h: 0.6,
    fontSize: 24, color: COLORS.accent, fontFace: FONTS.body
  });
}

// Session 4 - Slide 2: WHY - Limitations
{
  const slide = createContentSlide(pres, "WHY: Giới Hạn của Skill Đơn Giản", "");

  slide.addText("Skill buổi 3 chỉ có body.", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: COLORS.text, fontFace: FONTS.body
  });

  slide.addText("Khi cần:", {
    x: 0.5, y: 1.7, w: 9, h: 0.3,
    fontSize: 13, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const needs = [
    "• Xử lý 100 trang tài liệu",
    "• Quy trình 10 bước tuần tự",
    "• Kiến thức chuyên sâu → Cần nâng cấp"
  ];

  let yPos = 2.1;
  needs.forEach((n) => {
    slide.addText(n, {
      x: 1, y: yPos, w: 8, h: 0.35,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.5;
  });
}

// Session 4 - Slide 3-4: WHAT - 3 Advanced Techniques
{
  const slide = createContentSlide(pres, "WHAT: 3 Kỹ Thuật Nâng Cao", "");

  const techniques = [
    {
      num: 1,
      name: "References Folder",
      desc: "Chứa kiến thức chuyên sâu agent đọc khi cần"
    },
    {
      num: 2,
      name: "Progressive Disclosure",
      desc: "SKILL.md ngắn → references nặng"
    },
    {
      num: 3,
      name: "Multi-step Workflow",
      desc: "Agent qua nhiều bước tuần tự"
    }
  ];

  let yPos = 1.3;
  techniques.forEach((t) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos - 0.05, w: 0.45, h: 0.45,
      fill: { color: COLORS.primary }
    });
    slide.addText(String(t.num), {
      x: 0.5, y: yPos - 0.05, w: 0.45, h: 0.45,
      fontSize: 16, bold: true, color: COLORS.white,
      align: "center", valign: "middle"
    });

    slide.addText(t.name, {
      x: 1.15, y: yPos - 0.05, w: 4, h: 0.25,
      fontSize: 14, bold: true, color: COLORS.text, fontFace: FONTS.header
    });
    slide.addText(t.desc, {
      x: 1.15, y: yPos + 0.25, w: 4, h: 0.35,
      fontSize: 12, color: COLORS.mediumGray, fontFace: FONTS.body
    });

    yPos += 0.95;
  });
}

// Session 4 - Slide 5: Course-designer skill demo
{
  const slide = createContentSlide(pres, "Demo: Skill 'course-designer'", "");

  slide.addText("Chính skill tạo khóa học này!", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 15, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const structure = "course-designer/\n├── SKILL.md (ngắn)\n└── references/\n    ├── methodology.md (ADDIE flow)\n    ├── evaluation-criteria.md\n    ├── templates/ (lesson plan template)\n    └── examples/";

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 1.7, w: 8.4, h: 2.8,
    fill: { color: COLORS.accent, transparency: 20 },
    line: { color: COLORS.secondary, width: 2 }
  });

  slide.addText(structure, {
    x: 1, y: 1.9, w: 8, h: 2.4,
    fontSize: 11, fontFace: "Calibri", color: COLORS.text
  });
}

// Session 4 - Slide 6: Skill Upgrade Activity
{
  const slide = createContentSlide(pres, "Hoạt động 4: Skill Upgrade", "");

  slide.addText("Lấy skill buổi 3 → Nâng cấp", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const steps = [
    "1. Thêm references/ folder",
    "2. Tách kiến thức vào file riêng",
    "3. Thêm multi-step workflow",
    "4. Pairs: Review lẫn nhau"
  ];

  let yPos = 1.8;
  steps.forEach((s) => {
    slide.addText(s, {
      x: 1, y: yPos, w: 8, h: 0.4,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.6;
  });
}

// Session 4 - Slide 7-8: Cowork vs Claude Code
{
  const slide = createContentSlide(pres, "WHAT: Cowork vs Claude Code", "");

  const comparison = [
    { feature: "Giao diện", cowork: "Đồ họa", code: "Terminal" },
    { feature: "Kỹ năng cần", cowork: "Không code", code: "Biết CLI" },
    { feature: "Tool", cowork: "Giới hạn", code: "Mạnh hơn" },
    { feature: "Integration", cowork: "Kéo thả", code: "Git, code" }
  ];

  let yPos = 1.3;
  comparison.forEach((c) => {
    slide.addText(c.feature, {
      x: 0.5, y: yPos, w: 2.5, h: 0.4,
      fontSize: 13, bold: true, color: COLORS.text, fontFace: FONTS.header
    });

    // Cowork
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3, y: yPos, w: 3.5, h: 0.4,
      fill: { color: COLORS.primary, transparency: 20 }
    });
    slide.addText(c.cowork, {
      x: 3.1, y: yPos, w: 3.3, h: 0.4,
      fontSize: 12, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle"
    });

    // Claude Code
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 6.6, y: yPos, w: 3, h: 0.4,
      fill: { color: COLORS.secondary, transparency: 20 }
    });
    slide.addText(c.code, {
      x: 6.7, y: yPos, w: 2.8, h: 0.4,
      fontSize: 12, color: COLORS.text, fontFace: FONTS.body,
      valign: "middle"
    });

    yPos += 0.6;
  });
}

// Session 4 - Slide 9: Decision framework
{
  const slide = createContentSlide(pres, "Decision Framework", "");

  slide.addText("Công việc của bạn", {
    x: 1, y: 1.2, w: 3, h: 0.4,
    fontSize: 13, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.2, y: 1.1, w: 5.3, h: 0.5,
    fill: { color: COLORS.secondary, transparency: 30 }
  });

  slide.addText("↓\nCần code?", {
    x: 4.3, y: 1.15, w: 5.1, h: 0.4,
    fontSize: 13, bold: true, color: COLORS.text, fontFace: FONTS.body,
    align: "center"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.2, y: 1.8, w: 5.3, h: 0.5,
    fill: { color: COLORS.accent, transparency: 30 }
  });

  slide.addText("↓\nCần git, file system?", {
    x: 4.3, y: 1.85, w: 5.1, h: 0.4,
    fontSize: 13, bold: true, color: COLORS.text, fontFace: FONTS.body,
    align: "center"
  });

  // Results
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.7, w: 4.2, h: 1.2,
    fill: { color: COLORS.primary, transparency: 20 }
  });
  slide.addText("➜ Cowork", {
    x: 1, y: 2.85, w: 3.8, h: 0.8,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header,
    valign: "middle", align: "center"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.7, w: 4.2, h: 1.2,
    fill: { color: COLORS.secondary, transparency: 20 }
  });
  slide.addText("➜ Claude Code", {
    x: 5.4, y: 2.85, w: 3.8, h: 0.8,
    fontSize: 16, bold: true, color: COLORS.secondary, fontFace: FONTS.header,
    valign: "middle", align: "center"
  });
}

// Session 4 - Slide 10-14: Summary & closing
{
  const slide = createContentSlide(pres, "Tổng Kết Buổi 4", "");

  const summary = [
    "✓ References folder = Kiến thức chuyên sâu",
    "✓ Progressive disclosure = SKILL.md ngắn",
    "✓ Cowork dễ, Claude Code mạnh hơn"
  ];

  let yPos = 1.3;
  summary.forEach((s) => {
    slide.addText(s, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 14, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });
}

// ========================
// SESSION 5: Optimize & Strategy
// ========================

{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.accent };

  slide.addText("Buổi 5: Tối Ưu, Chia Sẻ & Chiến Lược", {
    x: 0.5, y: 1.8, w: 9, h: 1,
    fontSize: 44, bold: true, color: COLORS.white,
    fontFace: FONTS.header
  });

  slide.addText("Từ cá nhân đến tổ chức", {
    x: 0.5, y: 2.9, w: 9, h: 0.6,
    fontSize: 24, color: COLORS.white, fontFace: FONTS.body
  });
}

// Session 5 - Slide 2: Success stories
{
  const slide = createContentSlide(pres, "Chia Sẻ Kết Quả Bài Tập", "");

  slide.addText("2-3 bạn sẽ kể kinh nghiệm dùng skill tuần qua", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const questions = [
    "❓ Thành công?",
    "❓ Khó khăn gì?",
    "❓ Sẽ thay đổi như thế nào?"
  ];

  let yPos = 1.9;
  questions.forEach((q) => {
    slide.addText(q, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });
}

// Session 5 - Slide 3-5: Quality Checklist
{
  const slide = createContentSlide(pres, "WHAT: Skill Quality Checklist", "");

  const criteria = [
    "1. Trigger Accuracy — Có kích hoạt đúng lúc?",
    "2. Output Quality — Kết quả có đạt?",
    "3. Reusability — Người khác dùng được?",
    "4. Maintainability — Dễ cập nhật?",
    "5. Scope — Không quá rộng/hẹp?"
  ];

  let yPos = 1.3;
  criteria.forEach((c) => {
    slide.addText(c, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });
}

// Session 5 - Slide 6: Skill Audit Activity
{
  const slide = createContentSlide(pres, "Hoạt động 5: Skill Audit", "");

  slide.addText("Đánh giá skill của bạn", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const steps = [
    "1. Dùng checklist đánh giá skill mình tạo",
    "2. Pairs: Swap skill, đánh giá của bạn",
    "3. So sánh tự đánh giá vs đánh giá chéo"
  ];

  let yPos = 1.8;
  steps.forEach((s) => {
    slide.addText(s, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });
}

// Session 5 - Slide 7: Sharing & Management
{
  const slide = createContentSlide(pres, "WHAT: Chia Sẻ & Quản Lý Skill", "");

  const topics = [
    "1. Đóng gói skill cho team (folder structure)",
    "2. Naming conventions",
    "3. Version control basics",
    "4. Skill catalog cho phòng ban"
  ];

  let yPos = 1.3;
  topics.forEach((t) => {
    slide.addText(t, {
      x: 1, y: yPos, w: 8, h: 0.45,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.7;
  });
}

// Session 5 - Slide 8-10: 30-Day Adoption Plan
{
  const slide = createContentSlide(pres, "Hoạt động 6: 30-Day Skill Adoption Plan", "");

  slide.addText("Workshop nhóm (theo phòng ban/team)", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const steps = [
    "1. Xác định 3 use case ưu tiên",
    "2. Viết brief cho mỗi skill cần tạo",
    "3. Phân công ai tạo skill nào",
    "4. Timeline 30 ngày"
  ];

  let yPos = 1.8;
  steps.forEach((s) => {
    slide.addText(s, {
      x: 1, y: yPos, w: 8, h: 0.4,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.65;
  });
}

// Session 5 - Slide 11: Course summary
{
  const slide = createContentSlide(pres, "Tổng Kết Khóa Học", "");

  slide.addText("5 buổi = 5 cấp độ", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const levels = [
    "Buổi 1: Hiểu Agent, Skill, Tool",
    "Buổi 2: Dùng Skills có sẵn",
    "Buổi 3: Tạo Skill đầu tiên",
    "Buổi 4: Skill nâng cao & Claude Code",
    "Buổi 5: Tối ưu & Triển khai"
  ];

  let yPos = 1.8;
  levels.forEach((l) => {
    slide.addText(l, {
      x: 1, y: yPos, w: 8, h: 0.4,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.6;
  });

  slide.addText("Từ 'hỏi đường' đến 'vẽ bản đồ cho team'", {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fontSize: 14, italic: true, bold: true, color: COLORS.secondary,
    fontFace: FONTS.body
  });
}

// Session 5 - Slide 12: Discussion
{
  const slide = createContentSlide(pres, "Câu Hỏi Thảo Luận", "");

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: COLORS.secondary, transparency: 15 },
    line: { color: COLORS.secondary, width: 3 }
  });

  slide.addText('"3 tháng từ giờ, team bạn sẽ sử dụng\nskills khác như thế nào so với hôm nay?"', {
    x: 0.8, y: 1.5, w: 8.4, h: 3.2,
    fontSize: 18, italic: true, color: COLORS.text, fontFace: FONTS.body,
    align: "center", valign: "middle"
  });
}

// Session 5 - Slide 13: Evaluation & support
{
  const slide = createContentSlide(pres, "Đánh Giá Cuối Khóa", "");

  slide.addText("Survey nhanh (Google Form)", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  slide.addText("Kênh hỗ trợ sau khóa học", {
    x: 0.5, y: 1.7, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: COLORS.primary, fontFace: FONTS.header
  });

  const channels = [
    "• Email: support@example.com",
    "• Slack: #skills-support",
    "• Monthly refresher sessions"
  ];

  let yPos = 2.2;
  channels.forEach((c) => {
    slide.addText(c, {
      x: 1, y: yPos, w: 8, h: 0.4,
      fontSize: 13, color: COLORS.text, fontFace: FONTS.body
    });
    yPos += 0.6;
  });
}

// Closing slide
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.primary };

  slide.addText("Cảm ơn!", {
    x: 0.5, y: 2, w: 9, h: 1,
    fontSize: 48, bold: true, color: COLORS.white,
    fontFace: FONTS.header, align: "center"
  });

  slide.addText("Bạn vừa hoàn thành khóa học 5 buổi", {
    x: 0.5, y: 3.1, w: 9, h: 0.5,
    fontSize: 18, color: COLORS.accent,
    fontFace: FONTS.body, align: "center"
  });

  slide.addText("Sử dụng Skills để khai thác sức mạnh LLM Agent", {
    x: 0.5, y: 3.6, w: 9, h: 0.5,
    fontSize: 16, color: COLORS.accent,
    fontFace: FONTS.body, align: "center", italic: true
  });
}

// Save presentation
pres.writeFile({ fileName: "courses/leveraging-llm-agents-with-skills/02-slides.pptx" });
console.log("✓ Presentation created successfully!");
console.log("File: courses/leveraging-llm-agents-with-skills/02-slides.pptx");
