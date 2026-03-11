const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Claude Cowork Course';
pres.title = 'Sử dụng Skills để khai thác sức mạnh LLM Agent (V2)';
pres.subject = 'Professional LLM Agent Training in Vietnamese';

// Color palette: Teal Trust theme
const colors = {
  teal: "0D9488",
  teal_light: "14B8A6",
  teal_lighter: "5EEAD4",
  navy: "1E293B",
  navy_dark: "0F172A",
  amber: "F59E0B",
  white: "FFFFFF",
  gray_light: "F8FAFC",
  gray_medium: "94A3B8",
  gray_dark: "475569"
};

// Helper function for creating consistent slide backgrounds
function createSlideWithBackground(pres, bgColor = colors.white) {
  let slide = pres.addSlide();
  slide.background = { color: bgColor };
  return slide;
}

// Title slide
let titleSlide = createSlideWithBackground(pres, colors.navy_dark);
titleSlide.addText("Sử dụng Skills", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 54, bold: true, color: colors.amber, align: "center",
  fontFace: "Calibri"
});
titleSlide.addText("để khai thác sức mạnh LLM Agent", {
  x: 0.5, y: 2.4, w: 9, h: 0.6,
  fontSize: 40, color: colors.teal_lighter, align: "center",
  fontFace: "Calibri"
});
titleSlide.addText("Phiên bản V2: Infographic & Hands-on", {
  x: 0.5, y: 3.3, w: 9, h: 0.4,
  fontSize: 20, color: colors.gray_medium, align: "center",
  fontFace: "Calibri", italic: true
});
titleSlide.addText("5 buổi × 60 phút | Tiếng Việt | Online", {
  x: 0.5, y: 4.8, w: 9, h: 0.3,
  fontSize: 14, color: colors.gray_medium, align: "center"
});

// ===== BUỔI 1: AGENT & SKILL 101 =====
// Session divider
let session1Divider = createSlideWithBackground(pres, colors.teal);
session1Divider.addText("BUỔI 1", {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session1Divider.addText("Agent & Skill 101", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 36, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session1Divider.addText("Tại sao prompt đơn lẻ không đủ?", {
  x: 0.5, y: 3.1, w: 9, h: 0.4,
  fontSize: 20, color: colors.gray_light, align: "center", italic: true
});

// Slide 1: WHY - HR Pain Point
let slide1 = createSlideWithBackground(pres, colors.white);
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 3.33, h: 5.625,
  fill: { color: colors.teal_light }
});
slide1.addText("HR", {
  x: 0.3, y: 0.4, w: 2.73, h: 0.5,
  fontSize: 32, bold: true, color: colors.white,
  fontFace: "Calibri"
});
slide1.addText("👤", {
  x: 0.3, y: 1.1, w: 2.73, h: 1.5,
  fontSize: 64, align: "center"
});
slide1.addText("Sàng lọc CV thủ công", {
  x: 0.3, y: 2.7, w: 2.73, h: 1.2,
  fontSize: 14, color: colors.white, align: "center",
  fontFace: "Calibri", bold: true
});
slide1.addText("100 CV/tuần, lặp lại cùng câu hỏi", {
  x: 0.3, y: 3.9, w: 2.73, h: 1,
  fontSize: 11, color: colors.gray_light, align: "center"
});

// Slide 2: WHY - Marketing Pain Point
let slide2 = createSlideWithBackground(pres, colors.white);
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 3.33, h: 5.625,
  fill: { color: colors.amber }
});
slide2.addText("Marketing", {
  x: 0.3, y: 0.4, w: 2.73, h: 0.5,
  fontSize: 28, bold: true, color: colors.white,
  fontFace: "Calibri"
});
slide2.addText("📝", {
  x: 0.3, y: 1.1, w: 2.73, h: 1.5,
  fontSize: 64, align: "center"
});
slide2.addText("Viết social post lặp lại", {
  x: 0.3, y: 2.7, w: 2.73, h: 1.2,
  fontSize: 14, color: colors.white, align: "center",
  fontFace: "Calibri", bold: true
});
slide2.addText("Mỗi post khác nhau, không nhất quán", {
  x: 0.3, y: 3.9, w: 2.73, h: 1,
  fontSize: 11, color: colors.gray_light, align: "center"
});

// Slide 3: WHY - Finance Pain Point
let slide3 = createSlideWithBackground(pres, colors.white);
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 3.33, h: 5.625,
  fill: { color: colors.navy }
});
slide3.addText("Finance", {
  x: 0.3, y: 0.4, w: 2.73, h: 0.5,
  fontSize: 28, bold: true, color: colors.white,
  fontFace: "Calibri"
});
slide3.addText("💰", {
  x: 0.3, y: 1.1, w: 2.73, h: 1.5,
  fontSize: 64, align: "center"
});
slide3.addText("Nhập hóa đơn thủ công", {
  x: 0.3, y: 2.7, w: 2.73, h: 1.2,
  fontSize: 14, color: colors.white, align: "center",
  fontFace: "Calibri", bold: true
});
slide3.addText("1000 hóa đơn/tháng, dễ sai sót", {
  x: 0.3, y: 3.9, w: 2.73, h: 1,
  fontSize: 11, color: colors.gray_light, align: "center"
});

// Slide 4: WHY - Operations Pain Point
let slide4 = createSlideWithBackground(pres, colors.white);
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 3.33, h: 5.625,
  fill: { color: colors.teal_lighter }
});
slide4.addText("Operations", {
  x: 0.3, y: 0.4, w: 2.73, h: 0.5,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Calibri"
});
slide4.addText("⚙️", {
  x: 0.3, y: 1.1, w: 2.73, h: 1.5,
  fontSize: 64, align: "center"
});
slide4.addText("SOP lỗi thời", {
  x: 0.3, y: 2.7, w: 2.73, h: 1.2,
  fontSize: 14, color: colors.white, align: "center",
  fontFace: "Calibri", bold: true
});
slide4.addText("Tài liệu 2021, quy trình thay đổi hàng tuần", {
  x: 0.3, y: 3.9, w: 2.73, h: 1,
  fontSize: 11, color: colors.gray_light, align: "center"
});

// Slide 5: Bạn thấy mình ở đâu?
let slide5 = createSlideWithBackground(pres, colors.gray_light);
slide5.addText("Bạn thấy mình ở đâu?", {
  x: 0.5, y: 0.4, w: 9, h: 0.5,
  fontSize: 36, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 2, h: 1.2,
  fill: { color: colors.teal_light }
});
slide5.addText("Lặp lại công việc", {
  x: 0.5, y: 1.5, w: 2, h: 0.6,
  fontSize: 12, bold: true, color: colors.white, align: "center", valign: "middle"
});

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 2.8, y: 1.2, w: 2, h: 1.2,
  fill: { color: colors.amber }
});
slide5.addText("Không nhất quán", {
  x: 2.8, y: 1.5, w: 2, h: 0.6,
  fontSize: 12, bold: true, color: colors.white, align: "center", valign: "middle"
});

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 5.1, y: 1.2, w: 2, h: 1.2,
  fill: { color: colors.navy }
});
slide5.addText("Dễ sai sót", {
  x: 5.1, y: 1.5, w: 2, h: 0.6,
  fontSize: 12, bold: true, color: colors.white, align: "center", valign: "middle"
});

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 7.4, y: 1.2, w: 2, h: 1.2,
  fill: { color: colors.teal_lighter }
});
slide5.addText("SOP cũ", {
  x: 7.4, y: 1.5, w: 2, h: 0.6,
  fontSize: 12, bold: true, color: colors.white, align: "center", valign: "middle"
});

slide5.addText("✅ GOOD NEWS:", {
  x: 0.5, y: 2.8, w: 9, h: 0.4,
  fontSize: 20, bold: true, color: colors.teal,
  fontFace: "Calibri"
});
slide5.addText("LLM Agent có thể giải quyết tất cả", {
  x: 0.5, y: 3.3, w: 9, h: 0.4,
  fontSize: 18, color: colors.navy,
  fontFace: "Calibri"
});

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4, w: 9, h: 1.2,
  fill: { color: colors.teal }, transparency: 15
});
slide5.addText("Nhưng cần SKILL — mập mờ lý thuyết không đủ", {
  x: 0.7, y: 4.2, w: 8.6, h: 0.8,
  fontSize: 16, color: colors.navy, align: "center", valign: "middle", italic: true,
  fontFace: "Calibri"
});

// Slide 6: WHAT - Agent là gì? (Khái niệm 1)
let slide6 = createSlideWithBackground(pres, colors.white);
// Left side: Infographic
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4, h: 2,
  fill: { color: colors.teal_light }
});
slide6.addText("🧑‍💼", {
  x: 0.5, y: 0.6, w: 4, h: 1.4,
  fontSize: 80, align: "center"
});
slide6.addText("Nhân viên mới", {
  x: 0.7, y: 1.9, w: 3.6, h: 0.4,
  fontSize: 16, bold: true, color: colors.white, align: "center"
});

// Right side: Definition
slide6.addText("Agent là gì?", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy,
  fontFace: "Calibri"
});
slide6.addText("Một chương trình AI có thể:", {
  x: 5, y: 0.9, w: 4.5, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide6.addText([
  { text: "Nhận công việc từ bạn", options: { bullet: true, breakLine: true } },
  { text: "Hiểu từng bước cần làm", options: { bullet: true, breakLine: true } },
  { text: "Thực hiện công việc", options: { bullet: true, breakLine: true } },
  { text: "Trả kết quả nhất quán", options: { bullet: true } }
], {
  x: 5, y: 1.3, w: 4.5, h: 1.8,
  fontSize: 11, color: colors.gray_dark
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3, w: 9, h: 0.08,
  fill: { color: colors.teal }
});

slide6.addText("Giống như: Nhân viên mới trong công ty", {
  x: 0.5, y: 3.3, w: 9, h: 0.3,
  fontSize: 12, color: colors.gray_medium, italic: true
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4, w: 4.4, h: 1.2,
  fill: { color: colors.gray_light }
});
slide6.addText("Không có hướng dẫn", {
  x: 0.6, y: 4.1, w: 4.2, h: 0.3,
  fontSize: 11, bold: true, color: colors.navy
});
slide6.addText("Làm công việc khác mỗi lần, không nhất quán", {
  x: 0.6, y: 4.4, w: 4.2, h: 0.7,
  fontSize: 10, color: colors.gray_dark
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 5.1, y: 4, w: 4.4, h: 1.2,
  fill: { color: colors.teal_light }
});
slide6.addText("Có SOP rõ ràng", {
  x: 5.2, y: 4.1, w: 4.2, h: 0.3,
  fontSize: 11, bold: true, color: colors.white
});
slide6.addText("Làm công việc nhất quán, chính xác, nhanh", {
  x: 5.2, y: 4.4, w: 4.2, h: 0.7,
  fontSize: 10, color: colors.white
});

// Slide 7: WHAT - Skill là gì? (Khái niệm 2)
let slide7 = createSlideWithBackground(pres, colors.white);
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4, h: 2,
  fill: { color: colors.amber }
});
slide7.addText("📋", {
  x: 0.5, y: 0.6, w: 4, h: 1.4,
  fontSize: 80, align: "center"
});
slide7.addText("SOP", {
  x: 0.7, y: 1.9, w: 3.6, h: 0.4,
  fontSize: 16, bold: true, color: colors.white, align: "center"
});

slide7.addText("Skill là gì?", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy,
  fontFace: "Calibri"
});
slide7.addText("Hướng dẫn chi tiết về:", {
  x: 5, y: 0.9, w: 4.5, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide7.addText([
  { text: "Công việc cần làm là gì", options: { bullet: true, breakLine: true } },
  { text: "Các bước từng bước", options: { bullet: true, breakLine: true } },
  { text: "Tài liệu tham khảo", options: { bullet: true, breakLine: true } },
  { text: "Kết quả mong đợi", options: { bullet: true } }
], {
  x: 5, y: 1.3, w: 4.5, h: 1.8,
  fontSize: 11, color: colors.gray_dark
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3, w: 9, h: 0.08,
  fill: { color: colors.amber }
});

slide7.addText("Giống như: Standard Operating Procedure (SOP)", {
  x: 0.5, y: 3.3, w: 9, h: 0.3,
  fontSize: 12, color: colors.gray_medium, italic: true
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4, w: 4.4, h: 1.2,
  fill: { color: colors.gray_light }
});
slide7.addText("Không có SOP", {
  x: 0.6, y: 4.1, w: 4.2, h: 0.3,
  fontSize: 11, bold: true, color: colors.navy
});
slide7.addText("Agent bị bối rối, không biết làm gì", {
  x: 0.6, y: 4.4, w: 4.2, h: 0.7,
  fontSize: 10, color: colors.gray_dark
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 5.1, y: 4, w: 4.4, h: 1.2,
  fill: { color: colors.amber }
});
slide7.addText("Có SOP rõ ràng", {
  x: 5.2, y: 4.1, w: 4.2, h: 0.3,
  fontSize: 11, bold: true, color: colors.white
});
slide7.addText("Agent biết chính xác cần làm gì, khi nào, thế nào", {
  x: 5.2, y: 4.4, w: 4.2, h: 0.7,
  fontSize: 10, color: colors.white
});

// Slide 8: WHAT - Tool là gì? (Khái niệm 3)
let slide8 = createSlideWithBackground(pres, colors.white);
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4, h: 2,
  fill: { color: colors.navy }
});
slide8.addText("🛠️", {
  x: 0.5, y: 0.6, w: 4, h: 1.4,
  fontSize: 80, align: "center"
});
slide8.addText("Phần mềm", {
  x: 0.7, y: 1.9, w: 3.6, h: 0.4,
  fontSize: 16, bold: true, color: colors.white, align: "center"
});

slide8.addText("Tool là gì?", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy,
  fontFace: "Calibri"
});
slide8.addText("Phần mềm mà agent sử dụng để:", {
  x: 5, y: 0.9, w: 4.5, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide8.addText([
  { text: "Tạo tài liệu", options: { bullet: true, breakLine: true } },
  { text: "Phân tích dữ liệu", options: { bullet: true, breakLine: true } },
  { text: "Tìm kiếm thông tin", options: { bullet: true, breakLine: true } },
  { text: "Làm công việc cụ thể", options: { bullet: true } }
], {
  x: 5, y: 1.3, w: 4.5, h: 1.8,
  fontSize: 11, color: colors.gray_dark
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3, w: 9, h: 0.08,
  fill: { color: colors.navy }
});

slide8.addText("Giống như: Word, Excel, PowerPoint, Photoshop...", {
  x: 0.5, y: 3.3, w: 9, h: 0.3,
  fontSize: 12, color: colors.gray_medium, italic: true
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4, w: 4.4, h: 1.2,
  fill: { color: colors.gray_light }
});
slide8.addText("Không có tool", {
  x: 0.6, y: 4.1, w: 4.2, h: 0.3,
  fontSize: 11, bold: true, color: colors.navy
});
slide8.addText("Agent tay không, không thể làm gì", {
  x: 0.6, y: 4.4, w: 4.2, h: 0.7,
  fontSize: 10, color: colors.gray_dark
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 5.1, y: 4, w: 4.4, h: 1.2,
  fill: { color: colors.navy }
});
slide8.addText("Có tool phù hợp", {
  x: 5.2, y: 4.1, w: 4.2, h: 0.3,
  fontSize: 11, bold: true, color: colors.white
});
slide8.addText("Agent sử dụng được, tạo ra kết quả chất lượng cao", {
  x: 5.2, y: 4.4, w: 4.2, h: 0.7,
  fontSize: 10, color: colors.white
});

// Slide 9: 3 thành phần kết hợp
let slide9 = createSlideWithBackground(pres, colors.gray_light);
slide9.addText("3 thành phần kết hợp = Agent hiệu quả", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

// Three columns with icons and text
slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.2, w: 2.8, h: 3.8,
  fill: { color: colors.teal_light }
});
slide9.addText("🧑‍💼", {
  x: 0.8, y: 1.4, w: 2.8, h: 1,
  fontSize: 56, align: "center"
});
slide9.addText("Agent", {
  x: 0.8, y: 2.4, w: 2.8, h: 0.3,
  fontSize: 16, bold: true, color: colors.white, align: "center"
});
slide9.addText("Nhân viên AI", {
  x: 0.9, y: 2.8, w: 2.6, h: 1.1,
  fontSize: 12, color: colors.white, align: "center"
});

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 3.6, y: 1.2, w: 2.8, h: 3.8,
  fill: { color: colors.amber }
});
slide9.addText("📋", {
  x: 3.6, y: 1.4, w: 2.8, h: 1,
  fontSize: 56, align: "center"
});
slide9.addText("Skill", {
  x: 3.6, y: 2.4, w: 2.8, h: 0.3,
  fontSize: 16, bold: true, color: colors.white, align: "center"
});
slide9.addText("Hướng dẫn chi tiết", {
  x: 3.7, y: 2.8, w: 2.6, h: 1.1,
  fontSize: 12, color: colors.white, align: "center"
});

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 6.4, y: 1.2, w: 2.8, h: 3.8,
  fill: { color: colors.navy }
});
slide9.addText("🛠️", {
  x: 6.4, y: 1.4, w: 2.8, h: 1,
  fontSize: 56, align: "center"
});
slide9.addText("Tool", {
  x: 6.4, y: 2.4, w: 2.8, h: 0.3,
  fontSize: 16, bold: true, color: colors.white, align: "center"
});
slide9.addText("Phần mềm để thực hiện", {
  x: 6.5, y: 2.8, w: 2.6, h: 1.1,
  fontSize: 12, color: colors.white, align: "center"
});

// Slide 10: So sánh Prompt đơn vs Agent+Skill
let slide10 = createSlideWithBackground(pres, colors.white);
slide10.addText("Prompt đơn lẻ vs Agent + Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

// Left column: Prompt
slide10.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.5, h: 4,
  fill: { color: colors.gray_light }
});
slide10.addText("❌ Prompt đơn lẻ", {
  x: 0.7, y: 1.2, w: 4.1, h: 0.3,
  fontSize: 16, bold: true, color: colors.navy
});
slide10.addText([
  { text: "Mỗi lần khác nhau", options: { bullet: true, breakLine: true } },
  { text: "Không nhất quán", options: { bullet: true, breakLine: true } },
  { text: "Tốn thời gian viết", options: { bullet: true, breakLine: true } },
  { text: "Dễ sai sót", options: { bullet: true, breakLine: true } },
  { text: "Không thể tái sử dụng", options: { bullet: true } }
], {
  x: 0.7, y: 1.7, w: 4.1, h: 2.9,
  fontSize: 11, color: colors.gray_dark
});

// Right column: Agent+Skill
slide10.addShape(pres.shapes.RECTANGLE, {
  x: 5, y: 1, w: 4.5, h: 4,
  fill: { color: colors.teal_light }
});
slide10.addText("✅ Agent + Skill", {
  x: 5.2, y: 1.2, w: 4.1, h: 0.3,
  fontSize: 16, bold: true, color: colors.white
});
slide10.addText([
  { text: "Mỗi lần như nhau", options: { bullet: true, breakLine: true } },
  { text: "Nhất quán & chính xác", options: { bullet: true, breakLine: true } },
  { text: "Tiết kiệm thời gian", options: { bullet: true, breakLine: true } },
  { text: "Ít lỗi", options: { bullet: true, breakLine: true } },
  { text: "Tái sử dụng được", options: { bullet: true } }
], {
  x: 5.2, y: 1.7, w: 4.1, h: 2.9,
  fontSize: 11, color: colors.white
});

// Slide 11: Takeaways Buổi 1
let slide11 = createSlideWithBackground(pres, colors.white);
slide11.addText("SO WHAT: 3 Takeaways", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 0.08,
  fill: { color: colors.teal }
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 2.8, h: 3.5,
  fill: { color: colors.white },
  line: { color: colors.teal, width: 2 }
});
slide11.addText("1️⃣", {
  x: 0.5, y: 1.5, w: 2.8, h: 0.8,
  fontSize: 40, align: "center"
});
slide11.addText("Agent = Nhân viên", {
  x: 0.7, y: 2.3, w: 2.4, h: 0.3,
  fontSize: 13, bold: true, color: colors.navy, align: "center"
});
slide11.addText("Tự động hóa công việc lặp lại", {
  x: 0.7, y: 2.8, w: 2.4, h: 1,
  fontSize: 11, color: colors.gray_dark, align: "center"
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 3.6, y: 1.3, w: 2.8, h: 3.5,
  fill: { color: colors.white },
  line: { color: colors.amber, width: 2 }
});
slide11.addText("2️⃣", {
  x: 3.6, y: 1.5, w: 2.8, h: 0.8,
  fontSize: 40, align: "center"
});
slide11.addText("Skill = SOP", {
  x: 3.8, y: 2.3, w: 2.4, h: 0.3,
  fontSize: 13, bold: true, color: colors.navy, align: "center"
});
slide11.addText("Hướng dẫn chi tiết từng bước", {
  x: 3.8, y: 2.8, w: 2.4, h: 1,
  fontSize: 11, color: colors.gray_dark, align: "center"
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 6.7, y: 1.3, w: 2.8, h: 3.5,
  fill: { color: colors.white },
  line: { color: colors.navy, width: 2 }
});
slide11.addText("3️⃣", {
  x: 6.7, y: 1.5, w: 2.8, h: 0.8,
  fontSize: 40, align: "center"
});
slide11.addText("Tool = Phần mềm", {
  x: 6.9, y: 2.3, w: 2.4, h: 0.3,
  fontSize: 13, bold: true, color: colors.navy, align: "center"
});
slide11.addText("Thực hiện các tác vụ cụ thể", {
  x: 6.9, y: 2.8, w: 2.4, h: 1,
  fontSize: 11, color: colors.gray_dark, align: "center"
});

// ===== BUỔI 2: USING BUILT-IN SKILLS =====
// Session divider
let session2Divider = createSlideWithBackground(pres, colors.amber);
session2Divider.addText("BUỔI 2", {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session2Divider.addText("Sử dụng Skills có sẵn", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 36, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session2Divider.addText("Biến AI thành trợ lý đa năng", {
  x: 0.5, y: 3.1, w: 9, h: 0.4,
  fontSize: 20, color: colors.white, align: "center", italic: true
});

// Slide 12: Skill Catalog - pptx
let slide12 = createSlideWithBackground(pres, colors.white);
slide12.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4.3, h: 2,
  fill: { color: colors.navy }
});
slide12.addText("📊", {
  x: 0.5, y: 0.6, w: 4.3, h: 1.4,
  fontSize: 64, align: "center"
});

slide12.addText("PPTX Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy, align: "left",
  fontFace: "Calibri"
});

slide12.addText("Trigger: Tạo slide, thiết kế bài thuyết trình", {
  x: 5.2, y: 0.9, w: 4.3, h: 0.3,
  fontSize: 11, color: colors.teal, bold: true
});

slide12.addText([
  { text: "Tạo slide chuyên nghiệp", options: { bullet: true, breakLine: true } },
  { text: "Infographic đẹp mắt", options: { bullet: true, breakLine: true } },
  { text: "Chia sẻ trên Zoom", options: { bullet: true } }
], {
  x: 5.2, y: 1.3, w: 4.3, h: 1.5,
  fontSize: 10, color: colors.gray_dark
});

// Slide 13: Skill Catalog - docx
let slide13 = createSlideWithBackground(pres, colors.white);
slide13.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4.3, h: 2,
  fill: { color: colors.teal_light }
});
slide13.addText("📄", {
  x: 0.5, y: 0.6, w: 4.3, h: 1.4,
  fontSize: 64, align: "center"
});

slide13.addText("DOCX Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy, align: "left",
  fontFace: "Calibri"
});

slide13.addText("Trigger: Tạo tài liệu, báo cáo, hướng dẫn", {
  x: 5.2, y: 0.9, w: 4.3, h: 0.3,
  fontSize: 11, color: colors.teal, bold: true
});

slide13.addText([
  { text: "Viết báo cáo chuyên nghiệp", options: { bullet: true, breakLine: true } },
  { text: "Tạo hướng dẫn, SOP", options: { bullet: true, breakLine: true } },
  { text: "Định dạng tự động", options: { bullet: true } }
], {
  x: 5.2, y: 1.3, w: 4.3, h: 1.5,
  fontSize: 10, color: colors.gray_dark
});

// Slide 14: Skill Catalog - pdf
let slide14 = createSlideWithBackground(pres, colors.white);
slide14.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4.3, h: 2,
  fill: { color: colors.amber }
});
slide14.addText("🔍", {
  x: 0.5, y: 0.6, w: 4.3, h: 1.4,
  fontSize: 64, align: "center"
});

slide14.addText("PDF Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy, align: "left",
  fontFace: "Calibri"
});

slide14.addText("Trigger: Trích xuất, phân tích tài liệu PDF", {
  x: 5.2, y: 0.9, w: 4.3, h: 0.3,
  fontSize: 11, color: colors.teal, bold: true
});

slide14.addText([
  { text: "Trích văn bản từ PDF", options: { bullet: true, breakLine: true } },
  { text: "Tóm tắt tài liệu", options: { bullet: true, breakLine: true } },
  { text: "Tìm thông tin cụ thể", options: { bullet: true } }
], {
  x: 5.2, y: 1.3, w: 4.3, h: 1.5,
  fontSize: 10, color: colors.gray_dark
});

// Slide 15: Skill Catalog - xlsx
let slide15 = createSlideWithBackground(pres, colors.white);
slide15.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4.3, h: 2,
  fill: { color: colors.teal }
});
slide15.addText("📈", {
  x: 0.5, y: 0.6, w: 4.3, h: 1.4,
  fontSize: 64, align: "center"
});

slide15.addText("XLSX Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy, align: "left",
  fontFace: "Calibri"
});

slide15.addText("Trigger: Phân tích dữ liệu, tạo bảng tính", {
  x: 5.2, y: 0.9, w: 4.3, h: 0.3,
  fontSize: 11, color: colors.teal, bold: true
});

slide15.addText([
  { text: "Phân tích dữ liệu lớn", options: { bullet: true, breakLine: true } },
  { text: "Tạo báo cáo tự động", options: { bullet: true, breakLine: true } },
  { text: "So sánh, tìm xu hướng", options: { bullet: true } }
], {
  x: 5.2, y: 1.3, w: 4.3, h: 1.5,
  fontSize: 10, color: colors.gray_dark
});

// Slide 16: Skill Catalog - canvas-design
let slide16 = createSlideWithBackground(pres, colors.white);
slide16.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4.3, h: 2,
  fill: { color: colors.gray_dark }
});
slide16.addText("🎨", {
  x: 0.5, y: 0.6, w: 4.3, h: 1.4,
  fontSize: 64, align: "center"
});

slide16.addText("Canvas-Design Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy, align: "left",
  fontFace: "Calibri"
});

slide16.addText("Trigger: Tạo infographic, poster, đồ họa", {
  x: 5.2, y: 0.9, w: 4.3, h: 0.3,
  fontSize: 11, color: colors.teal, bold: true
});

slide16.addText([
  { text: "Vẽ infographic đẹp", options: { bullet: true, breakLine: true } },
  { text: "Tạo poster, banner", options: { bullet: true, breakLine: true } },
  { text: "Thiết kế icon, logo", options: { bullet: true } }
], {
  x: 5.2, y: 1.3, w: 4.3, h: 1.5,
  fontSize: 10, color: colors.gray_dark
});

// Slide 17: Skill Catalog - Web Search
let slide17 = createSlideWithBackground(pres, colors.white);
slide17.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 0.5, w: 4.3, h: 2,
  fill: { color: colors.teal_lighter }
});
slide17.addText("🔎", {
  x: 0.5, y: 0.6, w: 4.3, h: 1.4,
  fontSize: 64, align: "center"
});

slide17.addText("Web Search Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy, align: "left",
  fontFace: "Calibri"
});

slide17.addText("Trigger: Tìm kiếm thông tin, dữ liệu mới nhất", {
  x: 5.2, y: 0.9, w: 4.3, h: 0.3,
  fontSize: 11, color: colors.teal, bold: true
});

slide17.addText([
  { text: "Tìm kiếm trên internet", options: { bullet: true, breakLine: true } },
  { text: "Xác thực thông tin mới", options: { bullet: true, breakLine: true } },
  { text: "Tìm ví dụ, case studies", options: { bullet: true } }
], {
  x: 5.2, y: 1.3, w: 4.3, h: 1.5,
  fontSize: 10, color: colors.gray_dark
});

// Slide 18: Buổi 2 Takeaways
let slide18 = createSlideWithBackground(pres, colors.gray_light);
slide18.addText("SO WHAT: Buổi 2 tiếp theo", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide18.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 0.08,
  fill: { color: colors.amber }
});

slide18.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.white },
  line: { color: colors.amber, width: 2 }
});
slide18.addText("6 Skills", {
  x: 0.7, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 16, bold: true, color: colors.navy
});
slide18.addText("pptx, docx, pdf, xlsx, canvas-design, web search", {
  x: 0.7, y: 2, w: 3.9, h: 1.5,
  fontSize: 11, color: colors.gray_dark, align: "left"
});
slide18.addText("Bạn sẽ:", {
  x: 0.7, y: 3.6, w: 3.9, h: 0.2,
  fontSize: 12, bold: true, color: colors.navy
});
slide18.addText("✓ Kích hoạt skill đúng lúc\n✓ Chọn skill hợp lý\n✓ Tự động hóa công việc", {
  x: 0.7, y: 3.9, w: 3.9, h: 1,
  fontSize: 10, color: colors.gray_dark
});

slide18.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.teal_light }
});
slide18.addText("Tiếp theo: Buổi 3", {
  x: 5.4, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 16, bold: true, color: colors.white
});
slide18.addText("Skill có sẵn không đủ? Hãy tạo skill riêng của bạn!", {
  x: 5.4, y: 2, w: 3.9, h: 1.5,
  fontSize: 11, color: colors.white, align: "left"
});
slide18.addText("Bạn sẽ học:", {
  x: 5.4, y: 3.6, w: 3.9, h: 0.2,
  fontSize: 12, bold: true, color: colors.white
});
slide18.addText("✓ Tạo SKILL.md\n✓ Tổ chức thư mục\n✓ Kiểm tra chất lượng", {
  x: 5.4, y: 3.9, w: 3.9, h: 1,
  fontSize: 10, color: colors.white
});

// ===== BUỔI 3: CREATING YOUR FIRST SKILL =====
// Session divider
let session3Divider = createSlideWithBackground(pres, colors.navy);
session3Divider.addText("BUỔI 3", {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session3Divider.addText("Tạo Skill đầu tiên", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 36, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session3Divider.addText("Từ người dùng thành người tạo", {
  x: 0.5, y: 3.1, w: 9, h: 0.4,
  fontSize: 20, color: colors.white, align: "center", italic: true
});

// Slide 19: WHY - Pain point
let slide19 = createSlideWithBackground(pres, colors.white);
slide19.addText("Tại sao cần skill riêng?", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide19.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 0.08,
  fill: { color: colors.navy }
});

slide19.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.gray_light }
});
slide19.addText("docx skill chung", {
  x: 0.7, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 14, bold: true, color: colors.navy
});
slide19.addText([
  { text: "Tạo được tài liệu", options: { bullet: true, breakLine: true } },
  { text: "Nhưng không biết template công ty", options: { bullet: true, breakLine: true } },
  { text: "Không theo brand voice", options: { bullet: true, breakLine: true } },
  { text: "Phải sửa lại nhiều lần", options: { bullet: true } }
], {
  x: 0.7, y: 2, w: 3.9, h: 2.8,
  fontSize: 11, color: colors.gray_dark
});

slide19.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.teal_light }
});
slide19.addText("email-summarizer skill riêng", {
  x: 5.4, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 14, bold: true, color: colors.white
});
slide19.addText([
  { text: "Tạo được tài liệu", options: { bullet: true, breakLine: true } },
  { text: "Theo template công ty", options: { bullet: true, breakLine: true } },
  { text: "Nhất quán brand voice", options: { bullet: true, breakLine: true } },
  { text: "Dùng ngay, không sửa", options: { bullet: true } }
], {
  x: 5.4, y: 2, w: 3.9, h: 2.8,
  fontSize: 11, color: colors.white
});

// Slide 20: SKILL.md anatomy - YAML
let slide20 = createSlideWithBackground(pres, colors.white);
slide20.addText("Giải phẫu SKILL.md: Phần 1 - YAML", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 26, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide20.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4, h: 1.8,
  fill: { color: colors.teal_light }
});
slide20.addText("🆔", {
  x: 0.5, y: 1.1, w: 4, h: 1,
  fontSize: 56, align: "center"
});
slide20.addText("Badge nhân viên", {
  x: 0.7, y: 2, w: 3.6, h: 0.4,
  fontSize: 14, bold: true, color: colors.white, align: "center"
});

slide20.addShape(pres.shapes.RECTANGLE, {
  x: 4.8, y: 1, w: 4.7, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.teal_light, width: 2 }
});
slide20.addText("YAML: Thông tin cơ bản", {
  x: 5, y: 1.15, w: 4.3, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide20.addText("name: email-summarizer\ndescription: Tóm tắt email dài\n---", {
  x: 5, y: 1.55, w: 4.3, h: 0.9,
  fontSize: 9, color: colors.gray_dark, fontFace: "Courier New"
});

slide20.addText("✓ Tên skill rõ ràng\n✓ Mô tả trigger (khiến AI dùng skill)", {
  x: 0.5, y: 3.2, w: 9, h: 0.8,
  fontSize: 11, color: colors.navy, bold: true
});

// Slide 21: SKILL.md anatomy - Body
let slide21 = createSlideWithBackground(pres, colors.white);
slide21.addText("Giải phẫu SKILL.md: Phần 2 - Body", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 26, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4, h: 1.8,
  fill: { color: colors.amber }
});
slide21.addText("📋", {
  x: 0.5, y: 1.1, w: 4, h: 1,
  fontSize: 56, align: "center"
});
slide21.addText("Mô tả công việc", {
  x: 0.7, y: 2, w: 3.6, h: 0.4,
  fontSize: 14, bold: true, color: colors.white, align: "center"
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 4.8, y: 1, w: 4.7, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.amber, width: 2 }
});
slide21.addText("Body: Hướng dẫn chi tiết", {
  x: 5, y: 1.15, w: 4.3, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide21.addText("## Bước 1: Nhận email\n## Bước 2: Trích nội dung\n## Bước 3: Tóm tắt theo format", {
  x: 5, y: 1.55, w: 4.3, h: 0.9,
  fontSize: 9, color: colors.gray_dark, fontFace: "Courier New"
});

slide21.addText("✓ Các bước từng bước\n✓ Ví dụ cụ thể\n✓ Output mong đợi", {
  x: 0.5, y: 3.2, w: 9, h: 0.8,
  fontSize: 11, color: colors.navy, bold: true
});

// Slide 22: SKILL.md anatomy - References
let slide22 = createSlideWithBackground(pres, colors.white);
slide22.addText("Giải phẫu SKILL.md: Phần 3 - References", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 26, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide22.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4, h: 1.8,
  fill: { color: colors.navy }
});
slide22.addText("📚", {
  x: 0.5, y: 1.1, w: 4, h: 1,
  fontSize: 56, align: "center"
});
slide22.addText("Tài liệu training", {
  x: 0.7, y: 2, w: 3.6, h: 0.4,
  fontSize: 14, bold: true, color: colors.white, align: "center"
});

slide22.addShape(pres.shapes.RECTANGLE, {
  x: 4.8, y: 1, w: 4.7, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.navy, width: 2 }
});
slide22.addText("References/: Thư mục tài liệu", {
  x: 5, y: 1.15, w: 4.3, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide22.addText("references/\n  email-template.md\n  brand-voice.md", {
  x: 5, y: 1.55, w: 4.3, h: 0.9,
  fontSize: 9, color: colors.gray_dark, fontFace: "Courier New"
});

slide22.addText("✓ Template cần dùng\n✓ Tài liệu tham khảo\n✓ Ví dụ chi tiết", {
  x: 0.5, y: 3.2, w: 9, h: 0.8,
  fontSize: 11, color: colors.navy, bold: true
});

// Slide 23: Tạo skill đầu tiên - Demo
let slide23 = createSlideWithBackground(pres, colors.gray_light);
slide23.addText("I DO: Tạo skill 'email-summarizer'", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 26, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide23.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 3.8,
  fill: { color: colors.white },
  line: { color: colors.gray_dark, width: 1 }
});

slide23.addText("Step 1: Mở SKILL.md Builder\nStep 2: Chọn ngành (HR/Marketing/...)\nStep 3: Điền name, description\nStep 4: Viết body (hướng dẫn)\nStep 5: Thêm references/ nếu cần\nStep 6: Test trong Cowork", {
  x: 0.8, y: 1.3, w: 8.4, h: 3.4,
  fontSize: 11, color: colors.navy, fontFace: "Courier New"
});

// Slide 24: Buổi 3 Takeaway
let slide24 = createSlideWithBackground(pres, colors.white);
slide24.addText("SO WHAT: Buổi 3 tiếp theo", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide24.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 0.08,
  fill: { color: colors.navy }
});

slide24.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.navy }
});
slide24.addText("🎓", {
  x: 0.7, y: 1.7, w: 3.9, h: 0.8,
  fontSize: 48, align: "center"
});
slide24.addText("Bạn vừa tạo chuyên gia AI đầu tiên", {
  x: 0.7, y: 2.6, w: 3.9, h: 1,
  fontSize: 12, bold: true, color: colors.white, align: "center"
});
slide24.addText("Skill tự động, nhất quán, chính xác", {
  x: 0.7, y: 3.7, w: 3.9, h: 0.3,
  fontSize: 11, color: colors.gray_light, align: "center"
});

slide24.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.teal_light }
});
slide24.addText("Tiếp theo", {
  x: 5.4, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 16, bold: true, color: colors.white
});
slide24.addText("Skill đơn giản → Skill nâng cao", {
  x: 5.4, y: 2, w: 3.9, h: 0.4,
  fontSize: 13, color: colors.white, align: "center"
});
slide24.addText("• Multi-step workflow\n• References folder\n• Progressive disclosure", {
  x: 5.4, y: 2.6, w: 3.9, h: 1.3,
  fontSize: 10, color: colors.white
});

// ===== BUỔI 4: ADVANCED SKILLS & CLAUDE CODE =====
// Session divider
let session4Divider = createSlideWithBackground(pres, colors.teal_light);
session4Divider.addText("BUỔI 4", {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session4Divider.addText("Skill nâng cao & Claude Code", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 36, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session4Divider.addText("Từ đơn giản đến chuyên nghiệp", {
  x: 0.5, y: 3.1, w: 9, h: 0.4,
  fontSize: 20, color: colors.white, align: "center", italic: true
});

// Slide 25: Advanced technique 1 - References folder
let slide25 = createSlideWithBackground(pres, colors.white);
slide25.addText("Kỹ thuật 1: Thư viện kiến thức (References)", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide25.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.teal_light }
});
slide25.addText("📚", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide25.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.teal_light, width: 2 }
});
slide25.addText("Khi cần kiến thức chuyên sâu", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide25.addText("→ Tạo thư mục references/\n→ Giữ SKILL.md ngắn\n→ Chứa tài liệu nặng trong references", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark, fontFace: "Courier New"
});

slide25.addText("Ưu điểm:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 12, bold: true, color: colors.navy
});
slide25.addText("✓ SKILL.md gọn, dễ đọc\n✓ Tài liệu tách biệt, dễ update\n✓ Agent có kiến thức đầy đủ", {
  x: 0.5, y: 3.5, w: 9, h: 1,
  fontSize: 11, color: colors.gray_dark
});

// Slide 26: Advanced technique 2 - Progressive disclosure
let slide26 = createSlideWithBackground(pres, colors.white);
slide26.addText("Kỹ thuật 2: Progressive Disclosure", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide26.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.amber }
});
slide26.addText("📈", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide26.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.amber, width: 2 }
});
slide26.addText("Bắt đầu từ cơ bản, nâng cao dần", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide26.addText("Level 1: SKILL.md chỉ cơ bản\nLevel 2: references/ chi tiết\nLevel 3: Multi-step workflow", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide26.addText("Ưu điểm:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 12, bold: true, color: colors.navy
});
slide26.addText("✓ Dễ bắt đầu, không quá phức tạp\n✓ Có thể nâng cấp sau\n✓ Team có thể học từng bước", {
  x: 0.5, y: 3.5, w: 9, h: 1,
  fontSize: 11, color: colors.gray_dark
});

// Slide 27: Advanced technique 3 - Multi-step workflow
let slide27 = createSlideWithBackground(pres, colors.white);
slide27.addText("Kỹ thuật 3: Multi-step Workflow", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide27.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.navy }
});
slide27.addText("⚙️", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide27.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.navy, width: 2 }
});
slide27.addText("Quy trình gồm nhiều công cụ", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide27.addText("Step 1 → pdf skill\nStep 2 → xlsx skill\nStep 3 → docx skill", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide27.addText("Ưu điểm:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 12, bold: true, color: colors.navy
});
slide27.addText("✓ Quy trình phức tạp được tự động hóa\n✓ Kết quả nhất quán, chính xác\n✓ Dễ bảo trì, update từng step", {
  x: 0.5, y: 3.5, w: 9, h: 1,
  fontSize: 11, color: colors.gray_dark
});

// Slide 28: Cowork vs Claude Code
let slide28 = createSlideWithBackground(pres, colors.gray_light);
slide28.addText("Cowork vs Claude Code", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide28.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 4.3, h: 3.8,
  fill: { color: colors.white },
  line: { color: colors.teal_light, width: 2 }
});
slide28.addText("Cowork", {
  x: 0.7, y: 1.3, w: 3.9, h: 0.3,
  fontSize: 14, bold: true, color: colors.navy
});
slide28.addText([
  { text: "Giao diện web", options: { bullet: true, breakLine: true } },
  { text: "Dễ sử dụng", options: { bullet: true, breakLine: true } },
  { text: "Skill đơn giản", options: { bullet: true, breakLine: true } },
  { text: "Nhân viên phi kỹ thuật", options: { bullet: true } }
], {
  x: 0.7, y: 1.8, w: 3.9, h: 2.8,
  fontSize: 10, color: colors.gray_dark
});

slide28.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.1, w: 4.3, h: 3.8,
  fill: { color: colors.navy }
});
slide28.addText("Claude Code", {
  x: 5.4, y: 1.3, w: 3.9, h: 0.3,
  fontSize: 14, bold: true, color: colors.white
});
slide28.addText([
  { text: "CLI & code editor", options: { bullet: true, breakLine: true } },
  { text: "Mạnh mẽ, linh hoạt", options: { bullet: true, breakLine: true } },
  { text: "Skill phức tạp, codebase lớn", options: { bullet: true, breakLine: true } },
  { text: "Developer", options: { bullet: true } }
], {
  x: 5.4, y: 1.8, w: 3.9, h: 2.8,
  fontSize: 10, color: colors.white
});

// Slide 29: Buổi 4 Takeaway
let slide29 = createSlideWithBackground(pres, colors.white);
slide29.addText("SO WHAT: Buổi 4 tiếp theo", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide29.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 0.08,
  fill: { color: colors.teal_lighter }
});

slide29.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.teal_lighter }
});
slide29.addText("Skill nâng cao", {
  x: 0.7, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 14, bold: true, color: colors.white
});
slide29.addText("3 kỹ thuật:\n✓ References folder\n✓ Progressive disclosure\n✓ Multi-step workflow", {
  x: 0.7, y: 2, w: 3.9, h: 2.5,
  fontSize: 11, color: colors.white
});

slide29.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.white },
  line: { color: colors.teal_lighter, width: 2 }
});
slide29.addText("Buổi 5", {
  x: 5.4, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 14, bold: true, color: colors.navy
});
slide29.addText("Skill chất lượng ≠ Skill hoàn hảo\n\nBạn sẽ:\n✓ Đánh giá chất lượng skill\n✓ Chia sẻ với team\n✓ Lập kế hoạch triển khai", {
  x: 5.4, y: 2, w: 3.9, h: 2.5,
  fontSize: 11, color: colors.gray_dark
});

// ===== BUỔI 5: OPTIMIZE, SHARE & STRATEGY =====
// Session divider
let session5Divider = createSlideWithBackground(pres, colors.teal);
session5Divider.addText("BUỔI 5", {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session5Divider.addText("Tối ưu, Chia sẻ & Chiến lược", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 36, color: colors.white, align: "center",
  fontFace: "Calibri"
});
session5Divider.addText("Từ cá nhân đến tổ chức", {
  x: 0.5, y: 3.1, w: 9, h: 0.4,
  fontSize: 20, color: colors.white, align: "center", italic: true
});

// Slide 30: 5 quality criteria - Trigger accuracy
let slide30 = createSlideWithBackground(pres, colors.white);
slide30.addText("Tiêu chí 1: Trigger Accuracy", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide30.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.teal }
});
slide30.addText("🎯", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide30.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.teal, width: 2 }
});
slide30.addText("AI biết khi nào dùng skill", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide30.addText("Description rõ ràng\n→ AI hiểu công việc\n→ Dùng skill đúng lúc", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide30.addText("Ví dụ xấu:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 11, bold: true, color: colors.gray_dark
});
slide30.addText("\"Tạo tài liệu\" ← Quá chung chung", {
  x: 0.5, y: 3.5, w: 9, h: 0.4,
  fontSize: 10, color: colors.red, fontFace: "Courier New"
});

slide30.addText("Ví dụ tốt:", {
  x: 0.5, y: 4.1, w: 9, h: 0.2,
  fontSize: 11, bold: true, color: colors.navy
});
slide30.addText("\"Tạo JD cho vị trí mới theo template công ty\" ← Cụ thể, pushy", {
  x: 0.5, y: 4.4, w: 9, h: 0.4,
  fontSize: 10, color: colors.teal, fontFace: "Courier New"
});

// Slide 31: Tiêu chí 2 - Output quality
let slide31 = createSlideWithBackground(pres, colors.white);
slide31.addText("Tiêu chí 2: Output Quality", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide31.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.amber }
});
slide31.addText("⭐", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide31.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.amber, width: 2 }
});
slide31.addText("Output có chất lượng cao", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide31.addText("✓ Chính xác\n✓ Đầy đủ\n✓ Theo format cần\n✓ Dùng được ngay", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide31.addText("Test:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 11, bold: true, color: colors.navy
});
slide31.addText("Chạy skill 5 lần → Output giống nhau = PASS", {
  x: 0.5, y: 3.5, w: 9, h: 0.4,
  fontSize: 10, color: colors.teal
});

// Slide 32: Tiêu chí 3 - Reusability
let slide32 = createSlideWithBackground(pres, colors.white);
slide32.addText("Tiêu chí 3: Reusability", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide32.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.teal_lighter }
});
slide32.addText("♻️", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide32.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.teal_lighter, width: 2 }
});
slide32.addText("Dùng được nhiều lần", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide32.addText("Không thay đổi dễ dàng\n→ Tương ứng với quy trình\n→ Setup dễ", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide32.addText("Tránh:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 11, bold: true, color: colors.gray_dark
});
slide32.addText("Skill quá cụ thể (chỉ cho 1 người, 1 công việc)", {
  x: 0.5, y: 3.5, w: 9, h: 0.4,
  fontSize: 10, color: colors.gray_dark
});

// Slide 33: Tiêu chí 4 - Maintainability
let slide33 = createSlideWithBackground(pres, colors.white);
slide33.addText("Tiêu chí 4: Maintainability", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide33.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.navy }
});
slide33.addText("🔧", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide33.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.navy, width: 2 }
});
slide33.addText("Dễ bảo trì, update", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide33.addText("SKILL.md rõ ràng\n→ Dễ hiểu\n→ Dễ sửa sau", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide33.addText("Checklist:", {
  x: 0.5, y: 3.2, w: 9, h: 0.2,
  fontSize: 11, bold: true, color: colors.navy
});
slide33.addText("✓ Tên skill rõ ràng\n✓ Description là 1 câu\n✓ Body có nhận xét\n✓ References tổ chức đúng", {
  x: 0.5, y: 3.5, w: 9, h: 1,
  fontSize: 10, color: colors.gray_dark
});

// Slide 34: Tiêu chí 5 - Scope
let slide34 = createSlideWithBackground(pres, colors.white);
slide34.addText("Tiêu chí 5: Scope", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 24, bold: true, color: colors.navy,
  fontFace: "Calibri"
});

slide34.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.gray_dark }
});
slide34.addText("📏", {
  x: 0.5, y: 1.1, w: 4.3, h: 1,
  fontSize: 56, align: "center"
});

slide34.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1, w: 4.3, h: 1.8,
  fill: { color: colors.white },
  line: { color: colors.gray_dark, width: 2 }
});
slide34.addText("Phạm vi công việc rõ ràng", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide34.addText("Không quá rộng\n→ Không quá hẹp\n→ Vừa vặn", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.9,
  fontSize: 10, color: colors.gray_dark
});

slide34.addText("Xấu: Quá rộng / Quá hẹp", {
  x: 0.5, y: 3.2, w: 4.5, h: 0.2,
  fontSize: 10, bold: true, color: colors.gray_dark
});
slide34.addText("✗ \"Tạo tài liệu\"\n✗ \"Tạo JD cho va ngoại HR\"", {
  x: 0.5, y: 3.5, w: 4.5, h: 0.6,
  fontSize: 9, color: colors.gray_dark
});

slide34.addText("Tốt: Vừa vặn", {
  x: 5.2, y: 3.2, w: 4.3, h: 0.2,
  fontSize: 10, bold: true, color: colors.navy
});
slide34.addText("✓ \"Tạo JD mới theo template công ty\"", {
  x: 5.2, y: 3.5, w: 4.3, h: 0.6,
  fontSize: 9, color: colors.teal
});

// Slide 35: Sharing & Management
let slide35 = createSlideWithBackground(pres, colors.white);
slide35.addText("Chia sẻ & Quản lý Skill", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

slide35.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 0.08,
  fill: { color: colors.teal }
});

slide35.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.gray_light },
  line: { color: colors.teal, width: 1 }
});
slide35.addText("Naming Convention", {
  x: 0.7, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide35.addText("kebab-case\nVD: email-summarizer\n    jd-creator\n    expense-analyzer", {
  x: 0.7, y: 2, w: 3.9, h: 2,
  fontSize: 10, color: colors.gray_dark, fontFace: "Courier New"
});

slide35.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.3, h: 3.8,
  fill: { color: colors.gray_light },
  line: { color: colors.teal, width: 1 }
});
slide35.addText("Version Control", {
  x: 5.4, y: 1.5, w: 3.9, h: 0.3,
  fontSize: 12, bold: true, color: colors.navy
});
slide35.addText("Git để theo dõi thay đổi\n→ Mỗi update = 1 commit\n→ Dễ rollback nếu có lỗi", {
  x: 5.4, y: 2, w: 3.9, h: 2,
  fontSize: 10, color: colors.gray_dark
});

// Slide 36: 5 levels journey
let slide36 = createSlideWithBackground(pres, colors.white);
slide36.addText("5 BUỔI = 5 CẤP ĐỘ", {
  x: 0.5, y: 0.4, w: 9, h: 0.4,
  fontSize: 28, bold: true, color: colors.navy, align: "center",
  fontFace: "Calibri"
});

// 5 levels
let levels = [
  { num: "1️⃣", title: "Hiểu", desc: "Agent & Skill là gì", color: colors.teal },
  { num: "2️⃣", title: "Dùng", desc: "Kích hoạt 6 skills", color: colors.amber },
  { num: "3️⃣", title: "Tạo", desc: "SKILL.md đầu tiên", color: colors.navy },
  { num: "4️⃣", title: "Nâng cao", desc: "References & Workflow", color: colors.teal_lighter },
  { num: "5️⃣", title: "Chiến lược", desc: "Triển khai team", color: colors.gray_dark }
];

levels.forEach((level, idx) => {
  const x = 0.5 + (idx * 1.9);
  const w = 1.8;

  slide36.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.1, w: w, h: 1,
    fill: { color: level.color }
  });
  slide36.addText(level.num, {
    x: x, y: 1.2, w: w, h: 0.6,
    fontSize: 28, color: colors.white, align: "center"
  });

  slide36.addText(level.title, {
    x: x, y: 2.2, w: w, h: 0.3,
    fontSize: 12, bold: true, color: colors.navy, align: "center"
  });

  slide36.addText(level.desc, {
    x: x, y: 2.6, w: w, h: 0.7,
    fontSize: 9, color: colors.gray_dark, align: "center"
  });

  if (idx < 4) {
    slide36.addShape(pres.shapes.LINE, {
      x: x + w + 0.05, y: 1.6, w: 0.15, h: 0,
      line: { color: colors.gray_medium, width: 2 }
    });
    slide36.addText("→", {
      x: x + w + 0.05, y: 1.4, w: 0.15, h: 0.4,
      fontSize: 16, color: colors.gray_medium, align: "center"
    });
  }
});

slide36.addText("Từ hỏi đường → vẽ bản đồ cho cả team", {
  x: 0.5, y: 4.3, w: 9, h: 0.4,
  fontSize: 16, color: colors.teal, align: "center", italic: true, bold: true
});

// Slide 37: Final slide - Closing
let slide37 = createSlideWithBackground(pres, colors.navy_dark);
slide37.addText("Cảm ơn bạn!", {
  x: 0.5, y: 1.8, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.amber, align: "center",
  fontFace: "Calibri"
});

slide37.addText("5 buổi = 5 cấp độ = 1 chuyên gia AI", {
  x: 0.5, y: 2.6, w: 9, h: 0.4,
  fontSize: 20, color: colors.teal_lighter, align: "center", italic: true
});

slide37.addText("Bắt đầu hôm nay. Nâng cấp mỗi ngày.", {
  x: 0.5, y: 3.3, w: 9, h: 0.3,
  fontSize: 16, color: colors.white, align: "center"
});

slide37.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 4.2, w: 7, h: 0.08,
  fill: { color: colors.amber }
});

slide37.addText("Kênh hỗ trợ sau khóa học: Slack #ai-agents", {
  x: 0.5, y: 4.5, w: 9, h: 0.3,
  fontSize: 14, color: colors.gray_light, align: "center"
});

// Write the presentation
pres.writeFile({ fileName: "/sessions/adoring-brave-johnson/mnt/claude-cowork-course/courses/leveraging-llm-agents-v2/02-slides.pptx" });

console.log("Presentation created successfully!");
