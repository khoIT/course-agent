# Interactive Artifacts - Khóa học Leveraging LLM Agents V2

4 công cụ tương tác (HTML/React) hỗ trợ quá trình học tập các buổi 2-5 của khóa học.

---

## 📁 Danh sách Artifacts

### 1. **Skill Selector Decision Tree** (Buổi 2)
- **File:** `skill-selector-decision-tree.html`
- **Dung lượng:** 13 KB
- **Mục đích:** Giúp học viên chọn skill (docx, pptx, xlsx, pdf, canvas-design, web-search) dựa trên loại nội dung muốn tạo
- **Tính năng:**
  - Tree-based decision flow (6 nhánh chính)
  - Breadcrumb trail để theo dõi đường đi
  - Endpoint cards hiển thị skill name, trigger phrase, ví dụ theo ngành (HR, Marketing, Finance, Ops)
  - Button "Quay lại" & "Bắt đầu lại"
  - Responsive design, smooth transitions

### 2. **SKILL.md Builder** (Buổi 3)
- **File:** `skillmd-builder.html`
- **Dung lượng:** 21 KB
- **Mục đích:** Hướng dẫn từng bước tạo file SKILL.md hoàn chỉnh
- **Tính năng:**
  - 4-bước scaffolded form (Chọn ngành → Tên skill → Description → Body)
  - Pre-loaded scenarios theo ngành (HR: jd-generator, Marketing: social-post-creator, Finance: expense-report-analyzer, Ops: sop-writer)
  - Real-time validation: Green check ✓, Yellow warning ⚠️, Red X ✗
  - Split-pane preview hiển thị SKILL.md đang xây dựng
  - Copy-to-clipboard button để export
  - Kebab-case validation cho skill name
  - Character counter với "pushy description" tips

### 3. **Platform Picker Decision Tree** (Buổi 4)
- **File:** `platform-picker-decision-tree.html`
- **Dung lượng:** 18 KB
- **Mục đích:** So sánh & giúp học viên chọn giữa Cowork vs Claude Code
- **Tính năng:**
  - 3-câu hỏi quyết định (code? files? team technical?)
  - Result cards hiển thị platform + 4 điểm mạnh + 5 use case
  - Bảng so sánh always-visible (6 tiêu chí)
  - "Khi nào chuyển sang nền tảng kia" guidance
  - Recommendation với context (teal cho Cowork, purple cho Claude Code)
  - "Thử lại" button để explore alternate paths

### 4. **Skill Quality Checker** (Buổi 5)
- **File:** `skill-quality-checker.html`
- **Dung lượng:** 18 KB
- **Mục đích:** Self-assessment rubric cho học viên đánh giá chất lượng skill riêng
- **Tính năng:**
  - 5 tiêu chí slider (1-5 scale):
    - Trigger Accuracy
    - Output Quality
    - Reusability
    - Maintainability
    - Scope
  - Per-criterion tips (color-coded: red/orange/yellow/green)
  - Overall score card (teal gradient, 5-point scale)
  - Radar chart hiển thị 5 dimensions
  - Auto-generated "Top 3 Actions" dựa trên lowest scores
  - Copy-to-clipboard button cho assessment summary
  - Tips section (6 hộp advisory)

---

## 🎨 Design Standards

- **Language:** Tiếng Việt 100% (proper diacritics: ă, â, đ, ê, ô, ơ, ư)
- **Color Scheme:**
  - Primary teal: `#0D9488` (bg: from-teal-600 to-teal-500)
  - Dark slate: `#1E293B` (slate-800/900)
  - Accent amber: `#F59E0B` (tips & warnings)
  - Success green: `#22c55e` (validation pass)
  - Alert red: `#ef4444` (validation fail)
- **Framework:** React 18 via CDN (no build required)
- **Styling:** Tailwind CSS 3.4 via CDN
- **Font:** Inter (system font stack fallback)
- **Responsive:** Works on desktop (primary) & tablet
- **UX:** Immediate feedback (<200ms), undo-friendly (buttons, not irreversible actions), progressive disclosure

---

## 🚀 Usage in Sessions

| Artifact | Session | Timing | Integration |
|----------|---------|--------|-------------|
| Skill Selector | Buổi 2 | 0:47-0:55 | GV share artifact, walk-through 2 examples cùng → học viên thử 2 của mình |
| SKILL.md Builder | Buổi 3 | 0:25-0:43 | Mở artifact, học viên chọn ngành → builder hướng dẫn từng field → export & test |
| Platform Picker | Buổi 4 | 0:45-0:52 | GV walk-through 1 ví dụ → học viên tự thử 3 scenarios |
| Quality Checker | Buổi 5 | 0:14-0:25 | Mỗi học viên dùng artifact đánh giá skill → pairs swap & so sánh |

---

## 📋 Technical Details

### Build & Deployment
- **All self-contained:** Each .html file is complete (no external JS/CSS except CDN)
- **No build step:** Open in browser, run immediately
- **No state persistence:** React state only (no localStorage)
- **No backend:** Pure frontend React components
- **Dependencies:**
  - React 18 (unpkg CDN)
  - Babel standalone (for JSX)
  - Tailwind CSS 3.4 (CDN)

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile (iOS Safari, Chrome Mobile) for tablet size

### Performance
- ~13-21 KB per file (after gzip ~5-8 KB)
- Instant load (no server latency)
- Smooth animations (CSS transitions, React state batching)
- <200ms response to user interaction

---

## 🔧 Customization

If you need to modify:
1. **Color scheme:** Search-replace Tailwind classes (e.g., `teal-600` → `blue-600`)
2. **Content:** Edit strings directly in `<script>` section (e.g., scenario names, tips)
3. **Questions/options:** Modify `questions`, `nodes`, `scenarios`, `criteria` objects in state
4. **Styling:** Adjust Tailwind classes or add `<style>` block for custom CSS

---

## ✅ Quality Checklist

- [x] All text in Vietnamese with proper diacritics
- [x] Professional teal color scheme throughout
- [x] Responsive design (desktop + tablet)
- [x] Self-contained HTML files (no external dependencies except CDN)
- [x] React state-based, no localStorage
- [x] Smooth animations & transitions
- [x] Immediate feedback on user interactions
- [x] Progressive disclosure (step-by-step form, tree decisions)
- [x] Accessibility-friendly (semantic HTML, clear labels, high contrast)
- [x] Each artifact aligns with lesson plan objectives

---

## 📝 File Locations

```
/courses/leveraging-llm-agents-v2/08-interactive-artifacts/
├── skill-selector-decision-tree.html          (13 KB)
├── skillmd-builder.html                        (21 KB)
├── platform-picker-decision-tree.html          (18 KB)
├── skill-quality-checker.html                  (18 KB)
└── README.md                                   (this file)
```

---

**Created:** 2026-03-12
**Language:** Vietnamese (Tiếng Việt)
**Target Audience:** Non-technical business users (HR, Marketing, Finance, Operations)
**Alignment:** Lesson Plan V2 (Buổi 2-5)
