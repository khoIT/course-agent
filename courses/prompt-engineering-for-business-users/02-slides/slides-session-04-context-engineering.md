# Buổi 4: Context Engineering + Công cụ MCP

---
## Slide 1: Warm-up -- CLAUDE.md có hiệu quả không?

**"AI có hoạt động khác khi có CLAUDE.md không?"**
-> 3 người chia sẻ nhanh (1 phút mỗi người)

**Ghi chú giảng viên:** Hỏi cụ thể: "Khác ở điểm nào? Output chính xác hơn? Đúng phong cách hơn? Ít phải sửa hơn?" 5 phút.

---
## Slide 2: Poll #1 -- Trạng thái CLAUDE.md

**ZOOM POLL:**

"CLAUDE.md của bạn hiện có bao nhiêu phần?"

- A. Chưa có
- B. 1--2 phần
- C. 3--4 phần
- D. Đầy đủ 4+ phần

**Ghi chú giảng viên:** Nếu nhiều A/B -> dành thêm thời gian ở Block B cho viết. Nếu đa số C/D -> tập trung vào nâng cao.

---
## Slide 3: Context Engineering là gì?

**Phép so sánh:**

| Cách 1: Ra lệnh từng câu | Cách 2: Đưa sổ tay hướng dẫn |
|---------------------------|-------------------------------|
| "Soạn email." "Dùng giọng chuyên nghiệp." "Thêm số liệu." "Sửa lại ngắn hơn." | Sổ tay: vai trò, phong cách, quy tắc -> AI tự biết |
| = Chat (mỗi lần nhắc lại) | = CLAUDE.md (viết 1 lần, dùng mãi) |

> **Context Engineering = thiết kế môi trường làm việc cho AI, không chỉ viết prompt.**

**Ghi chú giảng viên:** "Buổi 1 bạn học viết prompt. Buổi 4 bạn học thiết kế MÔI TRƯỜNG. Đây là bước nhảy lớn nhất."

---
## Slide 4: Demo -- Có vs. Không có CLAUDE.md

**Demo trực tiếp trên Claude Code:**

**Không có CLAUDE.md:**
```
> claude "Soạn báo cáo tuần cho dự án X"
-> Kết quả: chung chung, thiếu ngữ cảnh, sai phong cách
```

**Có CLAUDE.md:**
```
> claude "Soạn báo cáo tuần cho dự án X"
-> Kết quả: đúng phong cách, đúng định dạng, dùng được ngay
```

[Hình minh họa: 2 cột so sánh output side-by-side]

**Ghi chú giảng viên:** Chuẩn bị 2 thư mục: 1 có CLAUDE.md, 1 không. Demo cùng prompt, so sánh kết quả.

---
## Slide 5: Smart Zone -- AI nhớ gì?

**Bộ nhớ AI có 2 vùng:**

```
+----------------------------------+
| SMART ZONE (~40%)                |
| CLAUDE.md, system instructions   |
| -> Luôn có hiệu lực             |
| -> Recall cao                    |
+----------------------------------+
| WORKING ZONE (~60%)             |
| Cuộc trò chuyện, tool output    |
| -> Có thể bị nén/mất           |
| -> Dùng xong quên               |
+----------------------------------+
```

> **CLAUDE.md nằm trong Smart Zone** -- AI giữ nó trong vùng nhớ quan trọng nhất, luôn có hiệu lực.

**Ghi chú giảng viên:** Phép so sánh: "Smart Zone = kiến thức lâu dài (tên bạn, nghề nghiệp). Working Zone = bộ nhớ làm việc (số điện thoại vừa nghe)."

---
## Slide 6: RPI Pattern -- AI đọc -> lập kế hoạch -> thực thi

**Read-Plan-Implement:**

1. **Read (Đọc):** AI đọc CLAUDE.md + file input
2. **Plan (Lập kế hoạch):** AI tự xác định các bước cần làm
3. **Implement (Thực thi):** AI thực hiện từng bước theo kế hoạch

[Hình minh họa: 3 bước nối tiếp nhau với mũi tên: Đọc -> Lập kế hoạch -> Thực thi]

> Contract-agent dùng đúng pattern này: đọc đơn hàng -> lên kế hoạch hợp đồng -> tạo file output.

**Ghi chú giảng viên:** Liên kết với Buổi 3: "Nhớ contract-agent chạy như thế nào không? Đó chính là RPI."

---
## Slide 7: Chat Activity

**Gõ vào chat Zoom:**

> "Nếu viết sổ tay cho AI trong công việc của bạn, 3 quy tắc quan trọng nhất là gì?"

*(30 giây -- facilitator tổng hợp theo chủ đề)*

**Ghi chú giảng viên:** Nhóm câu trả lời: quy tắc về phong cách, quy tắc về nội dung, quy tắc về giới hạn. "Tất cả những quy tắc này đều đi vào CLAUDE.md."

---
## Slide 8: Case Study -- CLAUDE.md của contract-agent

**Cùng phân tích tại sao contract-agent viết CLAUDE.md tốt:**

| Tiêu chí | Contract-agent làm đúng | Ví dụ |
|-----------|------------------------|-------|
| Vai trò cụ thể | Không mơ hồ | "Chuyên viên soạn hợp đồng dịch vụ" (không phải "trợ lý") |
| Quy tắc rõ | Có "không làm" | "Không nhập thông tin mật công ty" |
| Workflow có thứ tự | Đánh số rõ ràng | "1. Đọc 2. Tính 3. Viết 4. Kiểm tra" |
| Công cụ liệt kê | Input/Output rõ | "Input: prompt.md. Output: hop-dong.md" |

> **CLAUDE.md tổng quát** (như sổ tay công ty) vs. **SKILL.md chuyên biệt** (như hướng dẫn 1 quy trình cụ thể)

**Ghi chú giảng viên:** Mở CLAUDE.md thật trên màn hình, phóng to font. Hỏi lớp: "Phần nào bạn muốn áp dụng cho CLAUDE.md của mình?" 8 phút.

---
## Slide 9: MCP là gì?

**Model Context Protocol -- Ổ cắm điện chuẩn quốc tế**

[Hình minh họa: ổ cắm với các thiết bị: filesystem, web search, database, API]

> "MCP = ổ cắm điện chuẩn. Cắm công cụ nào cũng chạy."

**Ví dụ:**
- **Filesystem MCP:** AI đọc file từ máy bạn (không cần copy-paste)
- **Web Search MCP:** AI tìm kiếm internet khi cần
- **Database MCP:** AI truy vấn cơ sở dữ liệu

**Ghi chú giảng viên:** Demo nhanh: kết nối filesystem MCP, yêu cầu Claude Code đọc 1 file .md từ máy. "Thấy không? Không cần copy-paste nữa." 5 phút.

---
## Slide 10: Bài tập 1 -- Viết CLAUDE.md hoàn chỉnh (15 phút)

**Dùng bản nháp từ homework Buổi 3:**

1. Hoàn thiện 4 phần (Vai trò, Quy tắc, Workflow, Công cụ)
2. Lưu file CLAUDE.md trong thư mục làm việc
3. Chạy Claude Code với 1 tác vụ thực tế
4. So sánh: có vs. không có CLAUDE.md
5. **Ghi lại 3 điểm khác biệt cụ thể**

**Ghi chú giảng viên:** Đi "vòng quanh" qua chat: "Bạn đang viết CLAUDE.md cho tác vụ gì? Gặp vướng mắc gì?"

---
## Slide 11: Poll #2 -- Kết quả có CLAUDE.md

**ZOOM POLL:**

"Kết quả có CLAUDE.md tốt hơn bao nhiêu?"

- A. Giống nhau
- B. Tốt hơn chút
- C. Tốt hơn nhiều
- D. Khác hoàn toàn

**Ghi chú giảng viên:** Hỏi ai chọn D: "Bạn viết CLAUDE.md như thế nào mà kết quả khác hoàn toàn?" -> Chia sẻ bí quyết cho lớp.

---
## Slide 12: Bài tập 2 -- Kết nối MCP Tool (10 phút)

**Hướng dẫn từng bước:**

1. Mở file cấu hình Claude Code
2. Thêm filesystem MCP tool
3. Khởi động lại Claude Code
4. Test: yêu cầu Claude Code đọc 1 file từ máy

**Xác nhận thành công:**
> "Claude, đọc file [tên-file] trên máy tôi và tóm tắt nội dung."

[Hình minh họa: screenshot cấu hình MCP với mũi tên chỉ vị trí thêm]

**Ghi chú giảng viên:** Có step-by-step guide chi tiết trong handout. TA hỗ trợ qua chat. Nếu ai không cài được -> xem demo facilitator.

---
## Slide 13: Poll #3 -- MCP hoạt động không?

**ZOOM POLL:**

"MCP filesystem có hoạt động không?"

- A. Có, đọc được file
- B. Có nhưng partial
- C. Không, gặp lỗi

**Ghi chú giảng viên:** Hỗ trợ nhóm C. Lỗi phổ biến: path sai, quyền file, cần restart Claude Code.

---
## Slide 14: Bài tập 3 -- CLAUDE.md nâng cao (15 phút)

**Thêm 3 yếu tố nâng cao vào CLAUDE.md:**

1. **Ví dụ output mong muốn** (few-shot trong CLAUDE.md):
   ```
   ## Ví dụ output
   Khi được hỏi soạn email báo cáo, output trông như thế này:
   [dán ví dụ thực tế]
   ```

2. **Từ vựng chuyên ngành:**
   ```
   ## Thuật ngữ
   - KPI = chỉ số hiệu suất (không dùng "chỉ tiêu")
   - Sprint = chu kỳ phát triển 2 tuần
   ```

3. **Quy tắc "không làm" quan trọng:**
   ```
   ## Không được
   - Không bịa số liệu khi không có dữ liệu
   - Không dùng giọng suồng sã
   ```

-> Test lại với tác vụ phức tạp hơn

**Ghi chú giảng viên:** Đây là bước nâng cao quan trọng. Ví dụ output là kỹ thuật mạnh nhất.

---
## Slide 15: 3 Takeaway hôm nay

1. **Context Engineering > Prompt Engineering** -- thiết kế môi trường, không chỉ viết câu hỏi
2. **Smart Zone** = CLAUDE.md luôn có hiệu lực, Working Zone có thể bị nén
3. **MCP** = mở rộng khả năng AI bằng cách kết nối công cụ bên ngoài

---
## Slide 16: Bài tập về nhà (30 phút)

1. **Hoàn thiện CLAUDE.md** -- đưa ví dụ output mong muốn vào
2. **Hoàn thành bản nháp SKILL.md** cho 1 quy trình:
   - Mục tiêu, ngữ cảnh, input, các bước, ví dụ, ràng buộc
   - Lấy cảm hứng từ contract-agent nhưng cho workflow cá nhân

-> Mang bản nháp SKILL.md đến Buổi 5

**Preview Buổi 5:**
> "Buổi cuối: bạn sẽ xây dựng SKILL.md riêng -- giống contract-agent nhưng cho công việc của bạn -- và trình bày trước lớp. Chuẩn bị bản nháp!"
