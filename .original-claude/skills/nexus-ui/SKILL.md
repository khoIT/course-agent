---
name: kk:nexus-ui
description: "Add Nexus UI components to the project. Use when the user wants to add UI components, browse available components, or set up Nexus UI. Handles init, list, and add commands automatically. Friendly for non-technical users."
argument-hint: "[component name or description of what you need]"
license: MIT
version: 1.1.0
---

# Nexus UI

Install and manage Nexus UI components in the current project.

## How This Skill Works

You are a friendly UI assistant helping users (including non-technical vibe coders) add beautiful UI components to their project. Guide them step by step — no jargon, just clear actions.

## Step 1: Check Prerequisites & Initialization

### 1a. Check .npmrc

Before doing anything, check if `.npmrc` exists in the project root and contains `@vng-home:registry`:

```
@vng-home:registry=https://gitlab.gt.vng.vn/api/v4/packages/npm/
//gitlab.gt.vng.vn/:_authToken=<deploy-token>
nexus-ui-token=<personal-access-token>
```

If `.npmrc` is missing or incomplete, tell the user:
> "Bạn cần tạo file `.npmrc` ở thư mục gốc project trước. Bạn cần 2 loại token từ GitLab:
> - **Deploy token** (dạng `gldt-xxx`) — dùng cho `_authToken`
> - **Personal access token** (dạng `glpat-xxx`) — dùng cho `nexus-ui-token`
>
> Nếu chưa có, hỏi team lead để xin token. Bạn cũng cần bật VPN để kết nối được."

### 1b. Check Initialization

Check if Nexus UI is already initialized:
- Look for `nexus-ui-config.json` in the project root, or `@vng-home/nexus-ui` in `package.json` dependencies.

If **not initialized**, tell the user:
> "Tôi sẽ chạy lệnh khởi tạo Nexus UI. Quá trình sẽ hỏi bạn 3 câu — trả lời theo hướng dẫn bên dưới:"
>
> **Câu 1 — Select theme:** Dùng phím ↑↓ để chọn theme, rồi Enter:
> - `nexus` — xanh dương `#155dfc` (mặc định / trung tính)
> - `fpna` — cam `#f54900` (FPNA brand)
> - `hra` — đỏ `#e7000b` (HRA brand)
>
> **Câu 2 — Installation path:** Nhập đường dẫn thư mục chứa components (hoặc Enter để dùng mặc định `src/components`).
>
> **Câu 3 — Enable local development mode?** Nhập **`n`** rồi Enter.

Then run:
```bash
npx nexus-ui init
```

After it finishes, the following files will be created:

| File | Purpose |
|---|---|
| `nexus-ui-config.json` | Theme & install path config |
| `src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `src/globals.css` | Theme CSS import + Tailwind directives |
| `src/styles/<theme>-theme.css` | CSS variables for chosen theme |
| `tailwind.config.js` | Updated with `withOpacity()` helper |

Tell the user:
> "Nexus UI đã được khởi tạo! Giờ chúng ta có thể thêm component."

## Step 2: Understand What the User Wants

If the user gave a specific component name (e.g., `button`, `card`) → go to Step 4 directly.

If the user described what they need in natural language (e.g., "tôi muốn một cái nút đẹp", "cần popup thông báo") → go to Step 3.

If the user gave no argument or said something vague → go to Step 3 and show the component list.

## Step 3: Show Available Components

**Do not run `npx nexus-ui list`** — use the list below directly (v0.1.19):

```
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb,
button, calendar, card, checkbox, code, collapsible, combobox, command,
context-menu, data-table, date-picker, dialog, drawer, dropdown-menu,
file-uploader, hover-card, input, kbd, label, navigation-menu, pagination,
popover, progress, radio-group, select, separator, sheet, skeleton, spinner,
switch, table, tabs, textarea, toast, tooltip, typography
```

> **Note:** `tooltip` has a known bug in v0.1.19 (missing sub-modules). Recommend skipping it for now.

Present this list in a friendly, readable format. Ask the user:
> "Bạn muốn thêm component nào? Bạn có thể gõ tên hoặc mô tả bằng tiếng Việt cũng được — tôi sẽ hiểu!"

**Map Vietnamese descriptions to component names:**
- "nút bấm / button" → `button`
- "popup / hộp thoại / modal" → `dialog`
- "thanh điều hướng" → `navigation-menu`
- "thẻ hiển thị thông tin" → `card`
- "ô nhập liệu" → `input`
- "bảng dữ liệu" → `table` hoặc `data-table`
- "thanh loading / chờ" → `skeleton` hoặc `spinner`
- "thông báo" → `toast` hoặc `alert`
- "menu thả xuống" → `dropdown-menu` hoặc `select`
- "tab chuyển trang" → `tabs`
- "huy hiệu / nhãn" → `badge`
- "thanh tiến trình" → `progress`
- "avatar / ảnh đại diện" → `avatar`
- "phân cách" → `separator`

## Step 4: Install the Component

Install one or multiple components in **a single command**:

```bash
# Single component
npx nexus-ui add button

# Multiple components at once
npx nexus-ui add button card badge tabs
```

Components install to `src/components/<name>/<name>.tsx` by default.

After the command completes:

1. Tell the user where the files were added
2. Show a **quick usage example** with the correct import path:

```tsx
// Button
import { Button } from '@/components/button/button'
<Button variant="default">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Badge
import { Badge } from '@/components/badge/badge'
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Draft</Badge>

// Card
import { Card, CardHeader, CardTitle, CardContent } from '@/components/card/card'

// Tabs
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/tabs/tabs'

// Table
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/table/table'

// Avatar
import { Avatar, AvatarFallback } from '@/components/avatar/avatar'
```

3. Ask if they want to add more:
> "Bạn có muốn thêm component nào khác không?"

### Peer Dependencies

Some components require Radix UI primitives. If the CLI warns about missing peer deps, install them manually:

```bash
pnpm add @radix-ui/react-tabs @radix-ui/react-progress @radix-ui/react-select
# (replace with the specific package name mentioned in the warning)
```

## Error Handling

| Error | Cause | Fix |
|---|---|---|
| `404 Project not found` | VPN off hoặc token hết hạn | Bật VPN + kiểm tra token trong `.npmrc` |
| `403 insufficient_scope` | Dùng sai loại token | Dùng **deploy token** (`gldt-`) cho `_authToken`, không dùng personal token |
| Component not found | Tên sai | Xem lại danh sách component ở Step 3 |
| Theme not applying | Static import còn trong `globals.css` | Kiểm tra `globals.css` có `@import` đúng theme chưa |
| Tooltip broken | Bug v0.1.19 | Bỏ qua, dùng component khác thay thế |
| Missing peer dependency | Radix UI thiếu | `pnpm add @radix-ui/react-<name>` |

Explain errors in simple terms — no jargon.

## Tone & Language

- **Always respond in the same language the user used** (Vietnamese or English)
- Be encouraging, never condescending
- Avoid technical terms unless explaining them
- Short sentences, clear actions
