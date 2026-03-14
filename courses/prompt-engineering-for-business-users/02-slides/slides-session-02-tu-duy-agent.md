# Buổi 2: Tư duy Agent (Agent Thinking)

---
## Slide 1: Warm-up -- Prompt Library của bạn

**"Ai đã tạo Prompt Library 5 prompt rồi?"**
-> Zoom reactions (thumbs up)

1 người chia sẻ prompt hay nhất -> Facilitator nhận xét nhanh

**Ghi chú giảng viên:** Khen cụ thể: "Prompt này dùng 5/6 thành phần, đặc biệt phần ràng buộc rất rõ." Dành 5 phút.

---
## Slide 2: Poll #1 -- Thói quen chat

**ZOOM POLL:**

"Khi dùng ChatGPT/Claude, bạn thường gửi bao nhiêu tin nhắn cho 1 tác vụ?"

- A. 1 tin nhắn
- B. 2--5 tin nhắn
- C. 6--10 tin nhắn
- D. Hơn 10 tin nhắn

**Ghi chú giảng viên:** Đa số sẽ chọn B hoặc C. Dẫn dắt: "Vậy mỗi tác vụ bạn phải qua lại 5 lần. Có cách nào làm 1 lần duy nhất không? Xem demo."

---
## Slide 3: Demo -- Cùng 1 tác vụ, 2 cách

**Tác vụ:** Tạo hợp đồng từ đơn đặt hàng Google Vietnam

**Cách 1: Chat (5 tin nhắn)**
1. "Đọc thông tin đơn hàng này"
2. "Tóm tắt các điểm chính cho hợp đồng"
3. "Viết phần mô tả dịch vụ theo định dạng pháp lý"
4. "Thêm điều khoản VAT 8%"
5. "Sửa lại cho phù hợp luật Việt Nam"
-> ~8 phút thực tế

[Hình minh họa: 5 mũi tên qua lại giữa người và AI]

**Ghi chú giảng viên:** Demo live trên Claude.ai. Để lớp thấy sự bất tiện của qua lại nhiều lần.

---
## Slide 4: Demo -- Cách 2: Agent Brief

**Cách 2: Agent (1 brief)**
```
Mục tiêu: Tạo phần "Mô tả dịch vụ" cho hợp đồng
từ đơn đặt hàng Google Vietnam.

Bối cảnh: Đơn hàng gồm 2 dịch vụ (mobile + design),
tổng 15 triệu + VAT 8%. Hợp đồng theo luật VN.

Các bước:
1. Đọc thông tin đơn hàng
2. Tính tổng giá trị (bao gồm VAT)
3. Viết mô tả dịch vụ theo mẫu pháp lý

Tiêu chí thành công:
- Thông tin chính xác 100%
- Văn phong pháp lý
- Dưới 200 từ
```
-> 1 lần gửi, agent tự hoàn thành

[Hình minh họa: 1 mũi tên thẳng từ brief đến kết quả]

**Ghi chú giảng viên:** Đọc brief trên slide, sau đó chạy trên Claude Cowork. So sánh thời gian và chất lượng.

---
## Slide 5: Poll #2 -- Bạn chọn cách nào?

**ZOOM POLL:**

"Bạn muốn dùng cách nào cho công việc hàng ngày?"

- A. Chat từng bước
- B. Agent tự động
- C. Tùy tình huống

**Ghi chú giảng viên:** C là đáp án đúng nhất. Dẫn dắt: "Đúng rồi -- tùy tình huống. Vậy KHI NÀO dùng agent?"

---
## Slide 6: Chat vs. Agent -- 3 Khác biệt cốt lõi

| | Chat | Agent |
|---|------|-------|
| **Cách ra lệnh** | Bạn hướng dẫn từng bước | Bạn giao mục tiêu, AI tự lập kế hoạch |
| **Bộ nhớ** | Mỗi tin nhắn riêng lẻ | Nhớ cả quy trình và trạng thái |
| **Kết quả** | Bạn copy-paste thủ công | AI tự tạo file, tự kiểm tra |

> **Phép so sánh:** "Chat = nhắn tin cho nhân viên từng dòng hướng dẫn. Agent = giao brief và để họ làm."

**Ghi chú giảng viên:** Nhấn mạnh: "Bạn vẫn là người quyết định. Agent chỉ thực thi kế hoạch bạn duyệt."

---
## Slide 7: Khi nào dùng Agent?

**Ma trận quyết định:**

|  | Một lần | Lặp lại |
|---|---------|---------|
| **1--2 bước** | Chat | Chat hoặc Agent |
| **3+ bước** | Chat hoặc Agent | **Agent** |

**3 ví dụ thực tế:**
- **Manager:** Lập kế hoạch dự án tuần (lặp lại + nhiều bước = Agent)
- **Marketer:** Phân tích chiến dịch theo mẫu chuẩn (lặp lại = Agent)
- **Teacher:** Tạo bộ đề thi 5 phần theo rubric (nhiều bước = Agent)

**Ghi chú giảng viên:** Hỏi lớp: "Tác vụ nào của bạn nằm ở ô 'Agent'?"

---
## Slide 8: Chat Activity

**Gõ vào chat Zoom:**

> "Tác vụ nào trong công việc của bạn lặp lại mỗi tuần và mất >30 phút?"

*(30 giây -- facilitator chọn 2--3 ví dụ, phân tích nhanh)*

**Ghi chú giảng viên:** Kết nối mỗi ví dụ với ma trận quyết định: "Tác vụ này lặp lại + nhiều bước -> hoàn hảo cho agent."

---
## Slide 9: Hướng dẫn Claude Cowork

**Bước thực hiện:**
1. Truy cập Claude Cowork
2. Tạo project mới
3. Gửi brief đầu tiên

[Hình minh họa: screenshot giao diện Cowork với mũi tên chỉ các bước]

**Ghi chú giảng viên:** Chia sẻ màn hình, demo giao diện. Troubleshooting: "Nếu không thấy nút Project -> refresh trang." 8 phút cho setup.

---
## Slide 10: Bài tập 1 -- Task Brief đầu tiên (14 phút)

**Viết brief gồm 4 phần:**

| Phần | Câu hỏi dẫn dắt |
|------|-----------------|
| **1. Mục tiêu** | AI cần tạo ra gì? |
| **2. Bối cảnh** | Thông tin cần biết, file cần đọc |
| **3. Các bước** | Ít nhất 3 bước theo thứ tự |
| **4. Tiêu chí thành công** | Kết quả đạt chuẩn trông như thế nào? |

**Chọn 1 trong 2:**
- Kịch bản hợp đồng Google Vietnam (dùng đơn hàng mẫu)
- Tác vụ cá nhân từ homework Prompt Library

-> Gửi brief cho Claude Cowork. Đánh giá kết quả.

**Ghi chú giảng viên:** Nhấn mạnh: "Brief tốt = agent không cần hỏi lại." Nếu kết quả tệ -> cơ hội phân tích brief thiếu gì.

---
## Slide 11: Poll #3 -- Phần nào khó nhất?

**ZOOM POLL:**

"Phần nào của task brief khó viết nhất?"

- A. Mục tiêu
- B. Bối cảnh
- C. Các bước thực hiện
- D. Tiêu chí thành công

**Ghi chú giảng viên:** Thường D (tiêu chí) là khó nhất. Giải thích: "Tiêu chí = bạn phải biết 'tốt' trông như thế nào TRƯỚC khi giao việc."

---
## Slide 12: Bài tập 2 -- Workflow Mapping (15 phút)

**Bước 1:** Liệt kê 5 tác vụ lặp lại hàng tuần

**Bước 2:** Phân loại mỗi tác vụ:

| Tác vụ | Chat | Agent | Không phù hợp AI |
|--------|------|-------|-------------------|
| Ví dụ: Soạn email báo cáo | | x | |
| Ví dụ: Tư vấn 1-1 với khách | | | x |
| 1. _________________ | | | |
| 2. _________________ | | | |
| ... | | | |

**Bước 3:** Chọn 1 tác vụ "Agent" -> Viết brief 4 phần hoàn chỉnh

**Ghi chú giảng viên:** Phát worksheet (có trong handout). Hỏi lớp: "Ai có tác vụ 'Không phù hợp AI'? Tại sao?" -> Thảo luận giới hạn AI.

---
## Slide 13: Showcase -- Trình bày Workflow + Brief

**3 người chia sẻ màn hình:**
- Trình bày workflow mapping
- Đọc brief đã viết

**Lớp đánh giá theo 1 câu hỏi:**
> "Brief này đủ rõ để agent thực thi không cần giải thích thêm không?"
- Yes/No + 1 cải thiện cụ thể

**Ghi chú giảng viên:** Giới hạn 3 phút/người. Khen trước, góp ý sau. Tập trung vào chất lượng brief, không phải kết quả AI.

---
## Slide 14: 3 Takeaway hôm nay

1. **Agent = ủy quyền thông minh** -- bạn là sếp, AI là nhân viên giỏi
2. **Brief 4 phần** = mục tiêu + bối cảnh + bước + tiêu chí
3. **Tùy tình huống:** Chat cho việc đơn giản, Agent cho việc lặp lại nhiều bước

---
## Slide 15: Bài tập về nhà (25 phút)

**Chạy 2 tác vụ thực tế trên Claude Cowork:**

Ghi lại cho mỗi tác vụ:
1. Brief đã gửi (copy nguyên văn)
2. Kết quả nhận được
3. Điều chỉnh cần thiết (nếu có)
4. So sánh: tiết kiệm bao nhiêu phút so với cách làm cũ?

-> Mang đến Buổi 3

**Preview Buổi 3:**
> "Buổi tới: chúng ta cài Claude Code và chạy THỰC SỰ contract agent -- không phải demo, bạn tự chạy trên máy mình."
