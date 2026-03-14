# Buổi 3: Cowork + Claude Code -- Chạy Automation Thực tế

---
## Slide 1: Warm-up -- Homework Debrief

**"Ai đã chạy 2 tác vụ trên Cowork rồi?"**
-> Zoom reactions (thumbs up)

1 người chia sẻ: brief + kết quả + thời gian tiết kiệm

**Ghi chú giảng viên:** Hỏi: "Tiết kiệm được bao nhiêu phút?" Con số cụ thể tạo động lực cho cả lớp. 5 phút.

---
## Slide 2: Poll #1 -- Trạng thái cài đặt

**ZOOM POLL:**

"Bạn đã cài Claude Code chưa?"

- A. Rồi và test được
- B. Rồi nhưng chưa test
- C. Chưa cài
- D. Không biết cài thế nào

**Ghi chú giảng viên:** Nếu >40% chọn C/D -> dành thêm 10 phút đầu Block B cho setup, rút ngắn bài tập 2. Chuẩn bị link hướng dẫn cài đặt trong chat.

---
## Slide 3: Demo -- Contract-agent hoạt động thế nào

**Facilitator mở terminal:**

1. Mở thư mục contract-agent
2. Mở file CLAUDE.md -> đọc cho lớp thấy nội dung
3. "Đây là file hướng dẫn AI -- giống sổ tay nhân viên"

[Hình minh họa: quy trình từ đơn hàng -> CLAUDE.md -> template -> hợp đồng output]

**Ghi chú giảng viên:** Phóng to font terminal. Đọc chậm CLAUDE.md. Nhấn mạnh: "File này NÓI CHO AI biết phải làm gì -- giống bạn hướng dẫn nhân viên mới."

---
## Slide 4: Demo -- Chạy contract-agent

**Lệnh chạy:**
```
claude "Đọc file prompt.md và tạo hợp đồng theo template"
```

**Kết quả:**
- Claude Code đọc CLAUDE.md (tự động)
- Đọc file đơn hàng (prompt.md)
- Đọc template hợp đồng (.docx)
- Tạo file hợp đồng output

-> Mở file output cho lớp xem

**Ghi chú giảng viên:** Chuẩn bị contract-agent đã test trước. Có video backup nếu live demo lỗi. Dành 12 phút cho toàn bộ demo.

---
## Slide 5: Chat Activity

**Gõ vào chat Zoom:**

> "Nhìn vào CLAUDE.md, bạn thấy AI được hướng dẫn làm những gì?"

*(30 giây -- facilitator đọc 3--4 câu trả lời)*

**Ghi chú giảng viên:** Mục tiêu: học viên nhận diện các phần chính của CLAUDE.md trước khi giảng viên giải thích chi tiết.

---
## Slide 6: CLAUDE.md -- Giải phẫu chi tiết

**4 phần của CLAUDE.md:**

| Phần | Ý nghĩa | Ví dụ từ contract-agent |
|------|---------|------------------------|
| **1. Vai trò** | AI đóng vai gì | "Chuyên viên soạn hợp đồng dịch vụ" |
| **2. Quy tắc** | Phải làm gì / không làm gì | "Không nhập thông tin mật công ty" |
| **3. Workflow** | Các bước theo thứ tự | "1. Đọc đơn hàng 2. Áp dụng template 3. Tạo output" |
| **4. Công cụ** | File nào dùng, file nào tạo | "Input: prompt.md. Output: hop-dong.md" |

> "Đây chính xác là những gì bạn sẽ tự viết cho công việc mình."

**Ghi chú giảng viên:** Dùng CLAUDE.md thật của contract-agent trên màn hình, highlight từng phần khi giải thích. 8 phút.

---
## Slide 7: Poll #2 -- Phần nào quan trọng nhất?

**ZOOM POLL:**

"Nếu viết CLAUDE.md cho công việc của bạn, phần nào quan trọng nhất?"

- A. Vai trò
- B. Quy tắc
- C. Workflow
- D. Công cụ

**Ghi chú giảng viên:** Không có đáp án sai. Thảo luận lý do. Thường C (Workflow) quan trọng nhất vì quyết định chất lượng output. 3 phút.

---
## Slide 8: Setup Claude Code -- Hướng dẫn từng bước

**Bước 1:** Mở Terminal (Windows: PowerShell / Mac: Terminal)
**Bước 2:** Chạy lệnh: `claude`
**Bước 3:** Xác nhận hoạt động: hỏi Claude Code 1 câu đơn giản

[Hình minh họa: screenshot terminal với mũi tên chỉ từng bước]

**Nếu gặp lỗi:**
- "command not found" -> cần cài Node.js trước
- "authentication error" -> đăng nhập lại
- Hỗ trợ qua chat Zoom hoặc TA

**Ghi chú giảng viên:** Chia sẻ màn hình, làm cùng lớp. Dành 13 phút cho setup. TA theo dõi chat để hỗ trợ lỗi.

---
## Slide 9: Bài tập 1 -- Chạy contract-agent (12 phút)

**Bước thực hiện:**
1. Download thư mục contract-agent (link trong chat)
2. Mở terminal trong thư mục đó
3. Chạy với file đơn hàng mẫu
4. Đợi output
5. Mở file hợp đồng kết quả

**Đánh giá theo 3 tiêu chí:**
- Thông tin chính xác?
- Định dạng đúng mẫu template?
- Dùng được ngay không cần sửa lớn?

**Ghi chú giảng viên:** Facilitator share link download qua chat Zoom. Dự phòng: có sẵn file zip trên Google Drive.

---
## Slide 10: Poll #3 -- Kết quả contract-agent

**ZOOM POLL:**

"Kết quả hợp đồng từ contract-agent đánh giá thế nào?"

- A. Dùng được ngay
- B. Cần sửa nhỏ
- C. Cần sửa nhiều
- D. Lỗi, không chạy được

**Ghi chú giảng viên:** Ưu tiên hỗ trợ nhóm D. Nếu nhiều B -> tốt, thảo luận "sửa nhỏ gì?" Nếu nhiều A -> "Thấy sức mạnh của CLAUDE.md chưa?"

---
## Slide 11: Bài tập 2 -- Thay đổi đơn hàng (5 phút)

**Thử đổi thông tin trong file đơn hàng:**
- Ví dụ: Thêm dịch vụ mới (SEO: 8 triệu)
- Hoặc: Đổi tên công ty, đổi giá

-> Chạy lại contract-agent
-> Kiểm tra: output có cập nhật đúng không?

**Ghi chú giảng viên:** Bài tập nhanh, mục tiêu: học viên thấy agent đọc lại input và tạo output mới tự động.

---
## Slide 12: Bài tập 3 -- Phác thảo CLAUDE.md cá nhân (15 phút)

**Dùng template 4 phần -- Điền cho 1 tác vụ lặp lại của bạn:**

```
# CLAUDE.md -- [Tên tác vụ của bạn]

## Vai trò
Bạn là [___] chuyên về [___].

## Quy tắc
- LUÔN: [___]
- KHÔNG BAO GIỜ: [___]

## Workflow
1. Đọc [___]
2. [___]
3. Tạo [___]

## Công cụ
- Input: [___]
- Output: [___]
```

> Không cần hoàn chỉnh -- bản nháp đầu tiên. Sẽ hoàn thiện ở Buổi 4.

**Ghi chú giảng viên:** Đưa template qua chat. Gợi ý: soạn báo cáo tuần, phân tích email khách hàng, tạo kế hoạch bài giảng.

---
## Slide 13: Showcase -- Chia sẻ CLAUDE.md bản nháp

**2--3 người chia sẻ:**
- Đọc CLAUDE.md bản nháp
- Lớp góp ý: "Workflow này đủ rõ chưa? Còn thiếu gì?"

**Ghi chú giảng viên:** 3 phút/người. Khen phần tốt, gợi ý 1 cải thiện cụ thể. Ví dụ: "Phần quy tắc cần thêm 'không bịa số liệu'."

---
## Slide 14: 3 Takeaway hôm nay

1. **CLAUDE.md = sổ tay nhân viên** -- hướng dẫn AI 1 lần, dùng mãi
2. **Contract-agent chạy thật** -- bạn vừa tự chạy automation đầu tiên
3. **4 phần CLAUDE.md:** Vai trò + Quy tắc + Workflow + Công cụ

---
## Slide 15: Bài tập về nhà (25 phút)

1. **Hoàn thiện CLAUDE.md** cá nhân (4 phần đầy đủ)
2. **Test** với 1 tác vụ thực tế trong Claude Code
3. **Ghi lại:** kết quả có/không có CLAUDE.md khác thế nào
4. **Phác thảo SKILL.md:** liệt kê input, output, các bước cho 1 quy trình

-> Mang CLAUDE.md + bản nháp SKILL.md đến Buổi 4

**Preview Buổi 4:**
> "Buổi tới: hiểu TẠI SAO contract-agent hoạt động tốt -- context engineering, Smart Zone, và kết nối thêm công cụ MCP để AI đọc file trực tiếp từ máy bạn."
