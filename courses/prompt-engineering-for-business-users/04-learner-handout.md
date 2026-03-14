# Prompt Engineering for Business Users — Tài Liệu Tra Cứu Nhanh

> **Cách dùng tài liệu này:** Tổ chức theo TÁC VỤ, không theo buổi học.
> Khi cần làm gì, tra mục tương ứng và áp dụng ngay.
> Thuật ngữ tiếng Anh giải thích ở [Bảng thuật ngữ](#7-bảng-thuật-ngữ).

---

## Mục lục

1. [Viết prompt hiệu quả](#1-viết-prompt-hiệu-quả)
   - Khung 6 thành phần
   - Phân tích TRACI
   - Few-shot prompting
   - Chain-of-thought
   - 3 mẫu prompt sẵn dùng
2. [Kiểm chứng kết quả AI](#2-kiểm-chứng-kết-quả-ai)
   - Checklist tam giác hóa nguồn
   - Nhận biết ảo giác AI
3. [Ủy quyền cho AI Agent](#3-ủy-quyền-cho-ai-agent)
   - Mẫu task brief
   - Ma trận Chat vs. Agent
   - Claude Cowork vs. Claude Code
4. [Thiết lập Claude Code](#4-thiết-lập-claude-code)
   - Hướng dẫn cài đặt từng bước
   - Mẫu CLAUDE.md kèm ví dụ
   - Kết nối công cụ MCP
5. [Tạo Skill cho công việc](#5-tạo-skill-cho-công-việc)
   - Mẫu SKILL.md
   - Bảng phân tích quy trình
   - Checklist chất lượng
6. [Ví dụ thực tế: Contract-Agent](#6-ví-dụ-thực-tế-contract-agent)
7. [Bảng thuật ngữ](#7-bảng-thuật-ngữ)

---

## 1. Viết prompt hiệu quả

### Khung 6 thành phần

Mỗi prompt tốt có thể dùng từ 3 đến 6 thành phần. Bắt đầu với 3 thành phần cốt lõi (Vai trò + Tác vụ + Định dạng), thêm dần khi cần.

| # | Thành phần | Câu hỏi cần trả lời | Ví dụ |
|---|------------|---------------------|-------|
| 1 | **Vai trò** (Role) | AI đóng vai ai? | "Bạn là chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam." |
| 2 | **Tác vụ** (Task) | AI cần làm gì cụ thể? | "Liệt kê 5 điểm chính cần đưa vào hợp đồng dịch vụ." |
| 3 | **Định dạng** (Format) | Output trông như thế nào? | "Danh sách bullet points, mỗi điểm 1 câu ngắn gọn." |
| 4 | **Giọng điệu** (Tone) | Văn phong như thế nào? | "Chuyên nghiệp, rõ ràng, phù hợp văn bản pháp lý." |
| 5 | **Ràng buộc** (Constraints) | Giới hạn gì? Không làm gì? | "Theo luật thương mại Việt Nam. Dưới 200 từ." |
| 6 | **Đối tượng** (Audience) | Ai sẽ đọc output? | "Giám đốc của cả hai bên sẽ ký hợp đồng." |

**Ví dụ prompt 6 thành phần — kịch bản hợp đồng:**

```
Vai trò: Bạn là chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam.
Tác vụ: Đọc thông tin đơn đặt hàng sau và viết phần "Mô tả dịch vụ"
        cho hợp đồng, bao gồm: tên dịch vụ, giá, VAT, thời gian thực hiện.
Định dạng: 3-4 câu văn pháp lý, theo cấu trúc điều khoản hợp đồng.
Giọng điệu: Chính xác, rõ ràng, văn phong pháp lý chính thức.
Ràng buộc: Phù hợp Luật Thương mại Việt Nam 2005. Không thêm thông tin
            không có trong đơn hàng. Dưới 150 từ.
Đối tượng: Hai bên ký hợp đồng, trong đó có người không chuyên pháp lý.

[Paste thông tin đơn đặt hàng vào đây]
```

---

### Phân tích TRACI

Dùng TRACI để **phân tích** yêu cầu trước khi viết prompt. Đặt câu hỏi theo 5 chiều:

| Chiều | Câu hỏi | Ứng dụng cho hợp đồng |
|-------|---------|----------------------|
| **T**ask (Tác vụ) | AI cần tạo ra output loại gì? | Tạo phần mô tả dịch vụ |
| **R**ole (Vai trò) | AI cần có chuyên môn gì để làm đúng? | Chuyên gia pháp lý hợp đồng |
| **A**udience (Đối tượng) | Ai đọc output? Trình độ của họ? | Giám đốc hai bên ký hợp đồng |
| **C**ontext (Bối cảnh) | Thông tin nào AI cần biết trước? | Thông tin đơn đặt hàng Google Vietnam |
| **I**nstructions (Hướng dẫn) | Giới hạn và yêu cầu đặc biệt? | Theo luật VN, <150 từ, không thêm thông tin |

**Khi nào dùng TRACI:** Trước khi viết prompt phức tạp — điền vào bảng TRACI, rồi chuyển thành 6 thành phần.

---

### Few-shot prompting

**Khi nào dùng:** AI cần output đúng định dạng cụ thể mà khó mô tả bằng lời.

**Cách dùng:** Cho AI xem 2 ví dụ mẫu (input → output) trước khi đưa input thật.

**Mẫu few-shot:**
```
Tác vụ: Viết điều khoản thanh toán cho hợp đồng dịch vụ.

Ví dụ 1:
Input: Tổng giá trị: 10 triệu VND. Thanh toán: 50% khi ký, 50% khi nghiệm thu.
Output: "Bên B thanh toán cho Bên A tổng giá trị hợp đồng là 10.000.000 đồng
(Mười triệu đồng) theo hai đợt: Đợt 1 — 5.000.000 đồng ngay khi ký hợp đồng;
Đợt 2 — 5.000.000 đồng trong vòng 5 ngày làm việc sau khi nghiệm thu dịch vụ."

Ví dụ 2:
Input: Tổng giá trị: 16.2 triệu VND (đã gồm VAT 8%). Thanh toán toàn bộ trước khi bắt đầu.
Output: "Bên B thanh toán cho Bên A toàn bộ giá trị hợp đồng là 16.200.000 đồng
(Mười sáu triệu hai trăm nghìn đồng, đã bao gồm thuế GTGT 8%) trước ngày bắt đầu
thực hiện dịch vụ. Việc thanh toán là điều kiện tiên quyết để hợp đồng có hiệu lực."

Bây giờ hãy viết:
Input: Tổng giá trị: 15 triệu VND + VAT 8% (= 16.2 triệu). Thanh toán 30% khi ký,
       70% sau 10 ngày hoàn thành.
Output:
```

---

### Chain-of-thought

**Khi nào dùng:** Task cần phân tích, so sánh, hoặc lý luận nhiều bước.

**Cách đơn giản nhất:** Thêm "Hãy giải thích lý do từng quyết định" vào cuối prompt.

**Mẫu chain-of-thought:**
```
[Mô tả task như bình thường]

Trước khi đưa ra kết quả, hãy:
1. Liệt kê các yếu tố bạn đang xem xét
2. Phân tích từng yếu tố
3. Đưa ra kết quả cuối cùng
4. Giải thích tại sao đây là lựa chọn tốt nhất

Ứng dụng vào hợp đồng: "Sau khi đọc đơn hàng, hãy giải thích từng điều khoản
bạn chọn đưa vào hợp đồng và lý do tại sao điều khoản đó cần thiết."
```

---

### 3 mẫu prompt sẵn dùng

Sao chép và thay thế phần trong `[ngoặc vuông]`:

**Mẫu 1 — Quản lý (Manager):**
```
Vai trò: Bạn là trợ lý giám đốc chuyên nghiệp.
Tác vụ: Soạn email báo cáo tiến độ tuần cho [tên dự án].
        Tóm tắt: (1) hoàn thành tuần này, (2) kế hoạch tuần tới, (3) vướng mắc cần hỗ trợ.
Định dạng: 5 bullet points, mỗi điểm không quá 2 câu. Tổng email dưới 200 từ.
Giọng điệu: Chuyên nghiệp, ngắn gọn, đi thẳng vào vấn đề.
Đối tượng: Giám đốc bận — không thích đọc dài.
Bối cảnh: [Paste ghi chú công việc tuần này vào đây]
```

**Mẫu 2 — Tiếp thị (Marketer):**
```
Vai trò: Bạn là chuyên gia marketing B2B tại thị trường Việt Nam.
Tác vụ: Viết 3 tiêu đề quảng cáo cho [tên sản phẩm/dịch vụ].
        Mỗi tiêu đề nhắm vào 1 nỗi đau khác nhau của khách hàng.
Định dạng: Mỗi tiêu đề không quá 10 từ, kèm 1 câu giải thích nỗi đau được nhắm tới.
Ràng buộc: Không dùng từ "tốt nhất", "số 1", hoặc so sánh trực tiếp với đối thủ.
Đối tượng: [Mô tả khách hàng mục tiêu: vị trí, ngành, vấn đề chính]
```

**Mẫu 3 — Giáo viên (Teacher):**
```
Vai trò: Bạn là giáo viên [môn học] có kinh nghiệm dạy lớp [khối/cấp].
Tác vụ: Thiết kế 5 bài tập về [chủ đề] cho học sinh [trình độ].
         Mỗi bài tập cần có: câu hỏi rõ ràng, gợi ý hướng giải, đáp án tham khảo.
Định dạng: Danh sách đánh số, mức độ tăng dần từ dễ đến khó.
Ràng buộc: Bài tập phải phù hợp thực tế học sinh Việt Nam.
           Không yêu cầu tra cứu internet.
```

---

## 2. Kiểm chứng kết quả AI

> **Nguyên tắc vàng:** AI giỏi nhất khi bạn biết đủ về chủ đề để đánh giá kết quả.
> Không kiểm chứng = rủi ro dùng thông tin sai.

### Checklist tam giác hóa nguồn (Source Triangulation)

Trước khi dùng thông tin từ AI cho quyết định quan trọng:

- [ ] Kiểm tra thông tin qua ít nhất **2 nguồn độc lập** (không phải 2 AI khác nhau)
- [ ] Với số liệu: tìm nguồn gốc dữ liệu gốc (báo cáo chính phủ, nghiên cứu, văn bản pháp lý)
- [ ] Với quy trình/thủ tục: xác nhận với chuyên gia ngành hoặc văn bản chính thức
- [ ] Với thông tin thời sự: kiểm tra ngày tháng — AI có thể không biết sự kiện gần đây
- [ ] Với thông tin về công ty/cá nhân cụ thể: xác nhận trực tiếp với nguồn đó

### Nhận biết ảo giác AI (Hallucination)

AI có thể **bịa thông tin nghe có vẻ đúng** — đặc biệt với số liệu, tên người, ngày tháng, địa chỉ.

**Dấu hiệu nguy hiểm — kiểm chứng ngay khi thấy:**

| Dấu hiệu | Ví dụ | Cách kiểm chứng |
|----------|-------|-----------------|
| Số liệu cụ thể không có nguồn | "Doanh thu của X là 5 tỷ năm 2023" | Tìm báo cáo tài chính chính thức |
| Tên người + chức danh cụ thể | "Ông A, CEO của công ty B" | Xác nhận trên website công ty |
| Địa chỉ, số điện thoại | "Địa chỉ: 123 Nguyễn Văn Linh" | Tra cứu bản đồ hoặc gọi xác nhận |
| Điều khoản pháp lý | "Theo Điều 15, Nghị định 34/2022" | Tra văn bản gốc trên Thư viện Pháp luật |
| Thông tin bạn cung cấp nhưng AI "suy ra thêm" | Đơn hàng không ghi tổng nhưng AI tự tính | Hỏi lại: "Thông tin này có trong đơn hàng không?" |

**Cách test nhanh — "Thử hỏi cái không có trong dữ liệu":**

Nếu bạn muốn biết AI có bịa không: hỏi về thông tin bạn biết là KHÔNG có trong tài liệu bạn cung cấp. Nếu AI trả lời tự tin → đó là ảo giác. Ví dụ: cung cấp đơn hàng không có số điện thoại, rồi hỏi "Số điện thoại của khách hàng là gì?" — AI không nên trả lời cụ thể.

---

## 3. Ủy quyền cho AI Agent

> **Sự khác biệt cốt lõi:**
> **Chat** = bạn ra lệnh từng bước, AI thực thi từng câu
> **Agent** = bạn giao mục tiêu, AI tự lập kế hoạch và thực thi

### Mẫu Task Brief — 4 phần

Dùng template này để giao việc cho AI Agent (Claude Cowork hoặc Claude Code):

```markdown
## Task Brief: [Tên tác vụ]

### 1. Mục tiêu
AI cần tạo ra sản phẩm gì? (Cụ thể, đo lường được)
Ví dụ: "Tạo file hợp đồng dịch vụ đầy đủ dựa trên thông tin đơn đặt hàng."

### 2. Bối cảnh
Thông tin AI cần biết trước khi bắt đầu:
- [Loại tài liệu/file cần đọc]
- [Quy tắc đặc biệt của công ty/ngành]
- [Thông tin nền quan trọng]

### 3. Các bước thực hiện
1. [Bước 1 — cụ thể, có thứ tự]
2. [Bước 2]
3. [Bước 3]
(Ít nhất 3 bước)

### 4. Tiêu chí thành công
Kết quả đạt chuẩn khi:
- [ ] [Tiêu chí 1 — có thể kiểm tra được]
- [ ] [Tiêu chí 2]
- [ ] [Tiêu chí 3]
```

**Ví dụ đã điền — kịch bản contract-agent:**

```markdown
## Task Brief: Tạo hợp đồng dịch vụ từ đơn đặt hàng

### 1. Mục tiêu
Đọc file đơn đặt hàng (prompt.md), tạo file hợp đồng dịch vụ hoàn chỉnh
theo mẫu template sẵn có, sẵn sàng ký mà không cần chỉnh sửa lớn.

### 2. Bối cảnh
- File đơn hàng: prompt.md (thông tin khách hàng, dịch vụ, giá, VAT)
- Template hợp đồng: Mau-hop-dong.docx
- Quy tắc: VAT 8%, tính theo luật thương mại VN, hai bên ký tên từng trang

### 3. Các bước thực hiện
1. Đọc prompt.md, trích xuất: tên công ty, địa chỉ, MST, đại diện, dịch vụ, giá, thời gian
2. Mở Mau-hop-dong.docx, điền thông tin vào từng trường tương ứng
3. Tính tổng giá trị: giá gốc + VAT 8%
4. Kiểm tra: tất cả trường đã điền, không có [BLANK] còn lại
5. Lưu file output: hop-dong-[tên-công-ty]-[ngày].docx

### 4. Tiêu chí thành công
- [ ] Thông tin công ty đúng với đơn hàng (tên, địa chỉ, MST)
- [ ] Giá trị hợp đồng tính đúng (bao gồm VAT 8%)
- [ ] Thời gian thực hiện ghi rõ ràng
- [ ] Không còn placeholder [BLANK] trong file
- [ ] File mở được và đọc được trên Word
```

---

### Ma trận Chat vs. Agent

| Tình huống | Dùng Chat | Dùng Agent |
|------------|-----------|------------|
| Cần kết quả ngay, 1 lần | ✓ | |
| Tác vụ sáng tạo (brainstorm, viết lách) | ✓ | |
| Cần qua lại nhiều lần để tinh chỉnh | ✓ | |
| Tác vụ lặp lại hàng tuần/tháng | | ✓ |
| Nhiều bước, cần nhớ trạng thái | | ✓ |
| Cần đọc/tạo nhiều file | | ✓ |
| Quy trình có bước phê duyệt rõ ràng | | ✓ |
| Thời gian xử lý > 5 phút | | ✓ |

**Quy tắc đơn giản:** Nếu bạn phải làm lại quy trình này nhiều hơn 3 lần — dùng Agent và viết brief.

---

### Claude Cowork vs. Claude Code

| | **Claude Cowork** | **Claude Code** |
|---|-------------------|-----------------|
| **Phù hợp cho** | Tác vụ theo dự án, quản lý nhiều file | Automation, chạy script, tích hợp hệ thống |
| **Giao diện** | Web UI (trình duyệt) | Terminal (dòng lệnh) |
| **Cần cài đặt** | Không — đăng nhập và dùng | Có — xem [Mục 4](#4-thiết-lập-claude-code) |
| **Phù hợp cho ai** | Tất cả người dùng | Người dùng thoải mái với terminal |
| **Ví dụ tác vụ** | Phân tích tài liệu, soạn báo cáo, nghiên cứu | Tạo file tự động, xử lý dữ liệu hàng loạt |
| **Dùng SKILL.md** | Không | Có — AI đọc SKILL.md trước khi thực thi |

---

## 4. Thiết lập Claude Code

### Hướng dẫn cài đặt từng bước

**Yêu cầu:** Máy tính có kết nối internet. Không cần biết lập trình.

**Bước 1 — Cài Node.js (nếu chưa có):**
1. Truy cập: https://nodejs.org
2. Tải bản "LTS" (phiên bản ổn định)
3. Chạy file cài đặt, chấp nhận mặc định
4. Kiểm tra: mở Terminal/Command Prompt, gõ `node --version` → thấy số phiên bản = thành công

**Bước 2 — Cài Claude Code:**
```
Mở Terminal/Command Prompt, gõ lệnh sau:
npm install -g @anthropic-ai/claude-code
```
Đợi cài đặt xong (1-3 phút).

**Bước 3 — Đăng nhập:**
```
claude
```
Lần đầu chạy: Claude Code sẽ mở trình duyệt để đăng nhập tài khoản Anthropic.
Đăng nhập xong → quay lại terminal → gõ câu hỏi đầu tiên để test.

**Bước 4 — Kiểm tra hoạt động:**
```
claude "Xin chào, bạn có thể giúp tôi gì?"
```
Nếu AI trả lời → Claude Code đã hoạt động.

**Xử lý lỗi thường gặp:**

| Lỗi | Nguyên nhân | Giải pháp |
|-----|-------------|-----------|
| `command not found: npm` | Chưa cài Node.js | Cài Node.js ở Bước 1 |
| `command not found: claude` | Cài chưa thành công | Chạy lại lệnh cài ở Bước 2 |
| Mở trình duyệt nhưng lỗi đăng nhập | Chưa có tài khoản Anthropic | Tạo tài khoản tại claude.ai |
| Kết nối chậm | Mạng yếu | Dùng mạng khác hoặc thử lại |

---

### Mẫu CLAUDE.md kèm ví dụ

**CLAUDE.md là gì:** File văn bản đặt trong thư mục làm việc. Claude Code tự đọc file này mỗi khi khởi động — giống như "sổ tay hướng dẫn" cho AI về công việc của bạn.

**Tại sao cần CLAUDE.md:** Không có CLAUDE.md → AI cho kết quả chung chung. Có CLAUDE.md → AI hiểu ngữ cảnh công việc của bạn ngay từ đầu, không cần giải thích lại mỗi lần.

**Tạo file CLAUDE.md:**
1. Mở thư mục làm việc trong File Explorer
2. Tạo file mới tên: `CLAUDE.md`
3. Mở bằng Notepad hoặc bất kỳ trình soạn thảo văn bản nào
4. Paste template bên dưới và điền thông tin của bạn

**Mẫu CLAUDE.md — 4 phần cốt lõi:**

```markdown
# [Tên công việc/dự án]

## Vai trò của AI
Bạn là [mô tả vai trò cụ thể] hỗ trợ tôi với [loại công việc chính].

Ví dụ đã điền:
"Bạn là trợ lý pháp lý chuyên soạn hợp đồng dịch vụ tại Việt Nam,
hỗ trợ tôi đọc đơn đặt hàng và tạo hợp đồng theo mẫu chuẩn."

## Quy tắc
- [Quy tắc 1 — điều PHẢI làm]
- [Quy tắc 2 — điều KHÔNG làm]
- [Quy tắc 3]

Ví dụ đã điền:
- Luôn kiểm tra thông tin từ file đơn hàng trước khi điền vào hợp đồng
- Không tự thêm thông tin không có trong file đầu vào
- Tính VAT 8% cho tất cả dịch vụ
- Dùng văn phong pháp lý, theo Luật Thương mại Việt Nam 2005

## Quy trình làm việc
1. [Bước 1]
2. [Bước 2]
3. [Bước 3]

Ví dụ đã điền:
1. Đọc file đầu vào (prompt.md hoặc file người dùng cung cấp)
2. Trích xuất thông tin: tên công ty, địa chỉ, MST, dịch vụ, giá
3. Mở template hợp đồng (Mau-hop-dong.docx)
4. Điền thông tin vào template
5. Kiểm tra: không còn ô trống, giá tính đúng
6. Tạo file output: hop-dong-[tên-công-ty]-[ngày].docx

## Từ vựng chuyên ngành
- [Thuật ngữ]: [Giải thích cách dùng]

Ví dụ đã điền:
- MST: Mã số thuế — điền vào trường "Mã số thuế" trong hợp đồng
- Bên A: Bên cung cấp dịch vụ (là công ty tôi)
- Bên B: Khách hàng (thông tin từ đơn đặt hàng)
- Nghiệm thu: Bàn giao dịch vụ — ghi rõ tiêu chí nghiệm thu
```

**Mẹo viết CLAUDE.md hiệu quả:**
- Phần Quy tắc: viết điều KHÔNG được làm — AI sẽ tránh những lỗi thường gặp
- Thêm 1-2 ví dụ output mong muốn (giống few-shot) vào cuối file
- Test: chạy Claude Code sau khi thêm CLAUDE.md, so sánh kết quả trước/sau

---

### Kết nối công cụ MCP

**MCP (Model Context Protocol) là gì:** Chuẩn kết nối cho phép Claude Code dùng thêm công cụ ngoài — đọc file từ máy tính, tìm kiếm web, kết nối phần mềm khác. Giống như "cắm thêm thiết bị USB" cho AI.

**Kết nối MCP Filesystem (cho phép AI đọc file từ máy):**

**Bước 1 — Mở cài đặt Claude Code:**
```
claude settings
```
Hoặc tìm file `~/.claude/settings.json` (macOS/Linux) hoặc `%APPDATA%\claude\settings.json` (Windows).

**Bước 2 — Thêm filesystem MCP:**
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/đường/dẫn/thư/mục/bạn/muốn/AI/đọc"
      ]
    }
  }
}
```
Thay `/đường/dẫn/thư/mục/bạn/muốn/AI/đọc` bằng đường dẫn thư mục thực tế.
Ví dụ Windows: `C:/Users/TênBạn/Documents/HopDong`

**Bước 3 — Khởi động lại và test:**
```
claude "Đọc file prompt.md trong thư mục và cho tôi biết tên công ty là gì"
```
Nếu AI đọc được file → MCP đã kết nối thành công.

**Các MCP tool hữu ích khác:**

| Tool | Tác dụng | Khi nào dùng |
|------|---------|--------------|
| `filesystem` | Đọc/ghi file từ máy | Khi AI cần xử lý file có sẵn |
| `web-search` | Tìm kiếm internet | Khi AI cần thông tin cập nhật |
| `brave-search` | Tìm kiếm với Brave | Thay thế web-search |

---

## 5. Tạo Skill cho công việc

**Skill là gì:** Một bộ hướng dẫn chi tiết (lưu trong file SKILL.md) mô tả một quy trình cụ thể — giúp AI thực hiện quy trình đó một cách nhất quán, mỗi lần đều cho kết quả chất lượng.

**Khác biệt CLAUDE.md vs. SKILL.md:**
- **CLAUDE.md** = ngữ cảnh chung cho toàn bộ công việc của bạn (vai trò, quy tắc tổng quát)
- **SKILL.md** = hướng dẫn chi tiết cho một quy trình cụ thể (input → xử lý → output cụ thể)

---

### Mẫu SKILL.md — 6 phần

```markdown
# SKILL: [Tên quy trình]

## 1. Mục tiêu
Skill này làm gì? Output là gì?
Ví dụ: "Tạo hợp đồng dịch vụ từ file đơn đặt hàng, sẵn sàng ký."

## 2. Ngữ cảnh
Thông tin AI cần biết trước khi bắt đầu:
- Loại doanh nghiệp: [ví dụ: công ty dịch vụ IT tại Việt Nam]
- Quy định áp dụng: [ví dụ: Luật Thương mại VN, VAT 8%]
- Template/mẫu dùng: [tên file template]

## 3. Input — Dữ liệu đầu vào
- File cần đọc: [tên file, định dạng]
- Thông tin bắt buộc phải có: [liệt kê]
- Thông tin tùy chọn: [liệt kê]

## 4. Các bước thực hiện
1. [Bước 1 — hành động cụ thể]
2. [Bước 2]
3. [Bước 3]
...

## 5. Ví dụ output mong muốn
[Paste 1-2 đoạn output mẫu để AI biết định dạng đúng]

## 6. Ràng buộc — Không được làm
- [Ràng buộc 1]
- [Ràng buộc 2]
- [Ràng buộc 3]
```

**Ví dụ SKILL.md đã điền — contract workflow (xem đầy đủ ở [Mục 6](#6-ví-dụ-thực-tế-contract-agent)):**

```markdown
# SKILL: Tạo hợp đồng dịch vụ từ đơn đặt hàng

## 1. Mục tiêu
Đọc file đơn đặt hàng → điền vào template hợp đồng → tạo file Word
sẵn sàng ký. Không cần chỉnh sửa thủ công sau khi chạy.

## 2. Ngữ cảnh
- Công ty cung cấp dịch vụ IT tại Việt Nam (Bên A)
- Áp dụng: Luật Thương mại VN 2005, VAT 8%
- Template: Mau-hop-dong.docx (có sẵn trong thư mục)

## 3. Input
- File bắt buộc: prompt.md
- Thông tin bắt buộc: tên công ty, địa chỉ, MST, tên đại diện, dịch vụ, giá, thời gian
- Thông tin tùy chọn: ghi chú đặc biệt từ khách hàng

[...tiếp tục các phần còn lại]
```

---

### Bảng phân tích quy trình

Dùng bảng này để phân tích quy trình của bạn trước khi viết SKILL.md:

| Bước hiện tại | Mất bao lâu? | AI làm được? | Input cần | Output tạo ra |
|---------------|-------------|--------------|-----------|---------------|
| [Bước 1] | [x phút] | Có / Không | [file/thông tin] | [kết quả] |
| [Bước 2] | [x phút] | Có / Không | [file/thông tin] | [kết quả] |
| [Bước 3] | [x phút] | Có / Không | [file/thông tin] | [kết quả] |

**Ví dụ đã điền — quy trình tạo hợp đồng:**

| Bước hiện tại | Mất bao lâu? | AI làm được? | Input cần | Output tạo ra |
|---------------|-------------|--------------|-----------|---------------|
| Đọc đơn hàng, ghi chú thông tin | 5 phút | Có | prompt.md | Danh sách thông tin |
| Mở template Word, điền từng trường | 10 phút | Có | Thông tin + template | File hợp đồng nháp |
| Tính tổng giá + VAT | 3 phút | Có | Giá gốc + VAT rate | Số tiền cuối |
| Kiểm tra lại, in | 5 phút | Một phần | File nháp | File hoàn chỉnh |
| **Tổng** | **23 phút** | → Skill giảm còn ~2 phút | | |

**Quy tắc:** AI làm tốt bước xử lý văn bản, tính toán đơn giản, điền thông tin theo mẫu. AI chưa làm được: phán quyết phức tạp, quan hệ con người, quyết định sáng tạo không có tiêu chí rõ ràng.

---

### Checklist chất lượng Skill

Trước khi dùng Skill trong công việc thực tế:

**Về nội dung SKILL.md:**
- [ ] Mục tiêu rõ ràng: đọc xong biết skill làm gì
- [ ] Input được liệt kê đầy đủ, AI biết cần file/thông tin gì
- [ ] Các bước có thứ tự, cụ thể (không mơ hồ như "xử lý thông tin")
- [ ] Có ít nhất 1 ví dụ output mẫu
- [ ] Ràng buộc nêu rõ điều KHÔNG được làm

**Về kết quả test:**
- [ ] Chạy với dữ liệu mẫu → output đúng format
- [ ] Chạy với dữ liệu thật lần 1 → kết quả dùng được
- [ ] Sửa ít nhất 1 lần dựa trên kết quả thực tế
- [ ] Output không cần chỉnh sửa thủ công lớn

**Dấu hiệu SKILL.md cần cải thiện:**
- AI hỏi lại nhiều câu → thiếu bối cảnh hoặc input chưa rõ
- Kết quả mỗi lần chạy khác nhau → thiếu tiêu chí cụ thể
- Phải sửa nhiều sau mỗi lần chạy → thiếu ví dụ output hoặc ràng buộc

---

## 6. Ví dụ thực tế: Contract-Agent

Contract-agent là ví dụ xuyên suốt khóa học: đọc file đơn đặt hàng → tạo hợp đồng dịch vụ hoàn chỉnh. Dưới đây là 3 artifact chính bạn có thể tham khảo và tái sử dụng.

### 6.1 — Prompt trích xuất thông tin (Mục 1)

Dùng khi: muốn dùng Claude.ai (web) để đọc đơn hàng và liệt kê thông tin cần thiết.

```
Vai trò: Bạn là chuyên gia pháp lý hợp đồng dịch vụ tại Việt Nam.
Tác vụ: Đọc thông tin đơn đặt hàng sau và liệt kê đầy đủ các thông tin
        cần điền vào hợp đồng dịch vụ: tên công ty, địa chỉ, MST, tên
        đại diện, chức vụ, danh sách dịch vụ với giá từng loại, VAT,
        tổng giá trị (đã gồm VAT), và thời gian thực hiện.
Định dạng: Bảng 2 cột (Thông tin | Giá trị), mỗi hàng 1 trường.
           Sau bảng: ghi rõ tổng giá = [giá gốc] + VAT 8% = [tổng].
Ràng buộc: Chỉ dùng thông tin có trong đơn hàng. Nếu thiếu trường nào,
           ghi "Chưa có trong đơn hàng" vào cột Giá trị.
Đối tượng: Nhân viên hành chính sẽ dùng bảng này để điền vào hợp đồng.

---
[Thông tin đơn đặt hàng:]
Công ty: TNHH Google Vietnam
Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
MST: 028476564
Đại diện: Ông Khá Văn Bảnh – Giám Đốc
Dịch vụ: (1) Làm mobile: 10 triệu VND; (2) Design nhà: 5 triệu VND
VAT: 8%
Thời gian thực hiện: 10 ngày từ ngày ký hợp đồng
```

---

### 6.2 — Task Brief tự động hóa hợp đồng (Mục 3)

Dùng khi: muốn giao cho AI Agent (Claude Cowork hoặc Claude Code) tự động tạo hợp đồng.

```markdown
## Task Brief: Tự động tạo hợp đồng dịch vụ

### 1. Mục tiêu
Đọc file đơn đặt hàng (prompt.md), điền thông tin vào template hợp đồng,
tạo file Word sẵn sàng ký. Không cần chỉnh sửa thủ công sau khi hoàn thành.

### 2. Bối cảnh
- File đơn hàng: prompt.md (trong cùng thư mục)
- Template hợp đồng: Mau-hop-dong.docx (trong cùng thư mục)
- Quy định: VAT 8%, Luật Thương mại VN 2005
- Bên A (chúng tôi): [Tên công ty bạn — điền vào đây]
- Bên B (khách hàng): thông tin từ prompt.md

### 3. Các bước thực hiện
1. Đọc prompt.md, trích xuất tất cả thông tin khách hàng và dịch vụ
2. Tính tổng giá trị: cộng tất cả dịch vụ, tính VAT 8%, ra tổng cuối
3. Mở Mau-hop-dong.docx, điền thông tin vào từng trường
4. Kiểm tra: không còn ô trống hoặc placeholder [BLANK]
5. Lưu file: hop-dong-[tên-công-ty-khách-hàng]-[ngày-hôm-nay].docx

### 4. Tiêu chí thành công
- [ ] Tên công ty, địa chỉ, MST đúng với đơn hàng
- [ ] Danh sách dịch vụ và giá đúng và đầy đủ
- [ ] Tổng giá trị tính đúng (bao gồm VAT 8%)
- [ ] Thời gian thực hiện ghi rõ ràng
- [ ] File Word mở được, không lỗi định dạng
```

---

### 6.3 — SKILL.md cho quy trình hợp đồng (Mục 5)

Dùng khi: muốn Claude Code tự động chạy quy trình này mỗi lần có đơn hàng mới.

```markdown
# SKILL: Tạo hợp đồng dịch vụ từ đơn đặt hàng

## 1. Mục tiêu
Nhận file đơn đặt hàng → tạo file hợp đồng dịch vụ hoàn chỉnh, đúng mẫu,
sẵn sàng ký. Tổng thời gian: dưới 2 phút, không cần can thiệp thủ công.

## 2. Ngữ cảnh
- Chúng tôi là công ty dịch vụ IT tại Việt Nam
- Bên A trong hợp đồng: thông tin cố định trong template
- Bên B: khách hàng — thông tin từ file đơn đặt hàng
- Áp dụng: Luật Thương mại VN 2005, thuế GTGT (VAT) 8%
- Template hợp đồng: Mau-hop-dong.docx (trong thư mục này)

## 3. Input
**File bắt buộc:** prompt.md
**Thông tin bắt buộc trong file:**
- Tên công ty khách hàng
- Địa chỉ
- Mã số thuế (MST)
- Tên và chức vụ người đại diện
- Danh sách dịch vụ và giá từng loại
- % VAT
- Thời gian thực hiện
**Nếu thiếu bất kỳ trường bắt buộc nào:** dừng lại, báo cho người dùng biết trường nào đang thiếu.

## 4. Các bước thực hiện
1. Đọc toàn bộ prompt.md
2. Trích xuất và lưu tạm: tên, địa chỉ, MST, đại diện, dịch vụ[], giá[], VAT, thời gian
3. Tính toán: tổng_gốc = sum(giá[]), VAT_tiền = tổng_gốc × 8%, tổng_cuối = tổng_gốc + VAT_tiền
4. Mở Mau-hop-dong.docx
5. Điền từng trường: [CÔNG_TY_B] → tên, [ĐỊA_CHỈ_B] → địa chỉ, v.v.
6. Với danh sách dịch vụ: tạo bảng trong hợp đồng, mỗi dịch vụ 1 hàng
7. Kiểm tra toàn bộ: tìm kiếm "[" trong file — nếu còn → điền thiếu → lỗi
8. Lưu file: hop-dong-[tên-công-ty-viết-liền-không-dấu]-[YYYYMMDD].docx
9. Báo cáo: "Đã tạo: [tên file]. Tổng hợp đồng: [tổng_cuối] VND."

## 5. Ví dụ output mong muốn
Phần mô tả dịch vụ trong hợp đồng:

"Bên A cung cấp cho Bên B các dịch vụ sau:
1. Phát triển ứng dụng di động (Mobile App): 10.000.000 đồng
2. Thiết kế nội thất (Interior Design): 5.000.000 đồng
Tổng giá trị dịch vụ (chưa VAT): 15.000.000 đồng
Thuế GTGT (8%): 1.200.000 đồng
Tổng giá trị hợp đồng (đã gồm VAT): 16.200.000 đồng
(Mười sáu triệu hai trăm nghìn đồng chẵn)"

## 6. Ràng buộc
- KHÔNG tự thêm thông tin không có trong prompt.md
- KHÔNG tự đoán hoặc suy ra thông tin thiếu
- KHÔNG thay đổi tên và địa chỉ Bên A (thông tin cố định trong template)
- KHÔNG xử lý file nếu thiếu bất kỳ trường bắt buộc nào — yêu cầu người dùng bổ sung
- Tên file output: dùng tên công ty không dấu, viết liền (ví dụ: GoogleVietnam không phải google_vietnam)
```

---

## 7. Bảng thuật ngữ

| Thuật ngữ tiếng Anh | Cách gọi trong khóa học | Giải thích bằng ví dụ |
|---------------------|------------------------|----------------------|
| **LLM** (Large Language Model) | Mô hình ngôn ngữ lớn | Não AI — được huấn luyện trên hàng tỷ trang văn bản. Claude và ChatGPT đều là LLM. |
| **Prompt** | Lời nhắc, câu lệnh | Thứ bạn gõ vào AI. Prompt tốt = AI hiểu đúng, làm đúng. |
| **Context window** | Cửa sổ ngữ cảnh | Giới hạn lượng thông tin AI nhớ trong một cuộc hội thoại — giống RAM máy tính. |
| **Hallucination** | Ảo giác AI | Khi AI tự bịa thông tin nghe có vẻ đúng nhưng sai sự thật. Luôn kiểm chứng. |
| **Few-shot prompting** | Học từ ví dụ | Cung cấp 2-3 ví dụ mẫu cho AI trước khi giao task thật — AI bắt chước format. |
| **Chain-of-thought** | Suy luận từng bước | Yêu cầu AI giải thích lý do từng quyết định — cải thiện độ chính xác với task phức tạp. |
| **Agent** | AI tác nhân tự động | AI hoạt động tự lập: tự lập kế hoạch, tự thực thi nhiều bước, tự tạo kết quả. |
| **Task brief** | Bản mô tả công việc | Tài liệu 4 phần (mục tiêu, bối cảnh, bước, tiêu chí) giao cho AI Agent. |
| **Claude Code** | Claude Code | Phiên bản Claude chạy qua dòng lệnh — tự động hóa quy trình, đọc/tạo file. |
| **Claude Cowork** | Claude Cowork | Giao diện web của Claude cho dự án — quản lý file, hội thoại dài. |
| **CLAUDE.md** | Sổ tay hướng dẫn AI | File văn bản AI đọc khi khởi động — chứa vai trò, quy tắc, quy trình của bạn. |
| **SKILL.md** | Hướng dẫn kỹ năng | File mô tả chi tiết một quy trình cụ thể để AI thực hiện nhất quán. |
| **MCP** (Model Context Protocol) | Giao thức kết nối công cụ | Chuẩn cho phép Claude Code dùng thêm công cụ: đọc file, tìm web, kết nối phần mềm. |
| **Context engineering** | Kỹ thuật ngữ cảnh | Thiết kế thông tin cung cấp cho AI (qua CLAUDE.md, SKILL.md) để AI hoạt động đúng ý. |
| **Smart Zone** | Vùng nhớ quan trọng | Phần bộ nhớ AI ưu tiên giữ lại — CLAUDE.md luôn nằm trong Smart Zone, không bị quên. |
| **RPI pattern** | Mẫu Đọc-Lập kế hoạch-Thực thi | Cách Claude Code xử lý task: Read (đọc context) → Plan (lập kế hoạch) → Implement (thực thi). |
| **Source triangulation** | Tam giác hóa nguồn | Kiểm tra thông tin từ 2+ nguồn độc lập trước khi tin và sử dụng. |
| **Terminal** | Cửa sổ dòng lệnh | Chương trình gõ lệnh trực tiếp vào máy tính — dùng để chạy Claude Code. |

---

*Tài liệu này thuộc khóa học "Prompt Engineering for Business Users" — phiên bản tiếng Việt.*
*Cập nhật lần cuối: 2026-03-14*
