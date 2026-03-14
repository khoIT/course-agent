# Buổi 5: Xây dựng Skill của riêng bạn (Capstone)

---
## Slide 1: Recap toàn khóa -- Hành trình 5 buổi

**Timeline:**

```
Buổi 1          Buổi 2          Buổi 3          Buổi 4          Buổi 5
Prompt          Agent           Automation       Context         YOUR SKILL
Mastery         Thinking        Thực tế          Engineering     (Capstone)
  |               |               |               |               |
Claude.ai    -> Cowork       -> Claude Code   -> CLAUDE.md    -> SKILL.md
                                                  + MCP
```

> "5 buổi, 1 hành trình: từ viết prompt -> thiết kế môi trường -> xây skill riêng. Hôm nay bạn về nhà với 1 skill tự viết."

**Ghi chú giảng viên:** Dùng slide visual timeline. Nhấn mạnh sự tiến bộ: "Buổi 1 bạn viết 1 prompt. Hôm nay bạn xây cả 1 hệ thống." 5 phút.

---
## Slide 2: Poll #1 -- Trạng thái SKILL.md

**ZOOM POLL:**

"SKILL.md bản nháp của bạn có bao nhiêu bước?"

- A. 1--3 bước
- B. 4--6 bước
- C. 7--10 bước
- D. Chưa có bản nháp

**Ghi chú giảng viên:** Nếu nhiều D -> dành thêm thời gian workshop. Nếu đa số B/C -> tập trung vào test & iterate.

---
## Slide 3: SKILL.md -- 6 phần cốt lõi

| # | Phần | Câu hỏi chính | Ví dụ contract-agent |
|---|------|---------------|---------------------|
| 1 | **Mục tiêu** | Skill này làm gì? | Tạo hợp đồng từ đơn đặt hàng |
| 2 | **Ngữ cảnh** | AI cần biết gì trước? | Luật hợp đồng VN, template công ty |
| 3 | **Input** | Nhận dữ liệu gì, từ đâu? | File prompt.md (thông tin khách hàng) |
| 4 | **Các bước** | Thứ tự thực hiện? | 1. Đọc 2. Tính 3. Viết 4. Kiểm tra |
| 5 | **Ví dụ** | Output mong muốn trông thế nào? | [Mẫu hợp đồng hoàn chỉnh] |
| 6 | **Ràng buộc** | Không làm gì? Giới hạn gì? | Không bịa điều khoản, <500 từ |

**Ghi chú giảng viên:** So sánh song song: contract-agent SKILL.md vs. template trống trên màn hình. 10 phút.

---
## Slide 4: Demo -- Chạy SKILL.md mẫu

**Demo trên Claude Code:**

```
> claude "Chạy skill tạo hợp đồng với đơn hàng mới"
```

**AI thực hiện:**
1. Đọc SKILL.md -> hiểu mục tiêu và quy trình
2. Đọc input (đơn hàng mới)
3. Thực thi từng bước theo SKILL.md
4. Tạo output theo ví dụ mẫu
5. Kiểm tra theo ràng buộc

-> Mở kết quả cho lớp xem

**Ghi chú giảng viên:** Dùng SKILL.md mẫu đã chuẩn bị sẵn. Cho lớp thấy AI đọc SKILL.md như đọc hướng dẫn công việc.

---
## Slide 5: Workflow Decomposition -- 4 bước phân tích quy trình

**Cách biến quy trình công việc thành SKILL.md:**

**Bước 1:** Liệt kê TẤT CẢ các bước hiện tại (kể cả thủ công)
**Bước 2:** Xác định input/output cho mỗi bước
**Bước 3:** Đánh dấu bước AI làm được:
- Xử lý văn bản, tổng hợp, định dạng, dịch thuật
**Bước 4:** Loại bỏ bước AI CHƯA làm được:
- Phán quyết phức tạp, quan hệ người, quyết định chính sách

[Hình minh họa: flowchart với bước xanh (AI) và bước đỏ (người)]

**Ghi chú giảng viên:** Demo nhanh với ví dụ "soạn báo cáo phân tích đối thủ." 7 phút.

---
## Slide 6: Ví dụ -- Phân tích "Báo cáo đối thủ"

| Bước | Mô tả | AI? | Input -> Output |
|------|--------|-----|----------------|
| 1 | Thu thập thông tin đối thủ | AI | URLs -> dữ liệu thô |
| 2 | Tóm tắt điểm mạnh/yếu | AI | dữ liệu thô -> bảng so sánh |
| 3 | Đề xuất chiến lược | AI + Người | bảng -> 3 đề xuất |
| 4 | Quyết định chiến lược | Người | đề xuất -> quyết định |
| 5 | Soạn báo cáo trình bày | AI | quyết định -> slide/doc |

> Bước 1-2-5: tự động hóa hoàn toàn. Bước 3: AI hỗ trợ. Bước 4: luôn là người.

**Ghi chú giảng viên:** "Không phải tất cả bước đều AI được. Bước 4 -- quyết định chiến lược -- luôn là BẠN."

---
## Slide 7: 3 lỗi thường gặp khi viết SKILL.md

| Lỗi | Biểu hiện | Cách khắc phục |
|-----|-----------|----------------|
| **1. Quá chung chung** | "Tạo báo cáo" (thiếu chi tiết) | Thêm ví dụ output cụ thể (few-shot) |
| **2. Quá chi tiết** | Micro-manage từng câu, AI không linh hoạt | Chỉ định KẾT QUẢ, không chỉ định CÁCH |
| **3. Thiếu tiêu chí** | AI không biết "đủ tốt" là gì | Thêm ràng buộc: độ dài, format, checklist |

> "Goldilocks zone: đủ rõ để AI hiểu, đủ linh hoạt để AI sáng tạo."

**Ghi chú giảng viên:** Cho ví dụ cụ thể mỗi lỗi. Hỏi: "SKILL.md bản nháp của bạn mắc lỗi nào?"

---
## Slide 8: Rubric trình bày -- 4 tiêu chí

| Tiêu chí | Mô tả | Thang điểm |
|----------|--------|------------|
| **1. Vấn đề rõ ràng** | Giải thích được: trước đây mất bao lâu, tác vụ gì | 1--5 |
| **2. Skill chạy được** | Demo trực tiếp không lỗi, AI thực thi đúng quy trình | 1--5 |
| **3. Kết quả dùng được** | Output có thể dùng ngay hoặc sửa nhỏ | 1--5 |
| **4. Trình bày mạch lạc** | 3 phút, cấu trúc rõ, tự tin | 1--5 |

> "Đây là cơ sở để lớp phản hồi cho nhau -- không phải chấm điểm, mà là góp ý cải thiện."

**Ghi chú giảng viên:** Phát rubric (có trong handout). Giải thích: mỗi bài trình bày sẽ có 2 người phản hồi theo rubric này.

---
## Slide 9: Workshop -- Hoàn thiện SKILL.md (15 phút)

**Dựa trên bản nháp homework:**

1. Kiểm tra đủ 6 phần (mục tiêu, ngữ cảnh, input, bước, ví dụ, ràng buộc)
2. Viết ít nhất 1 ví dụ output cụ thể
3. Thêm ràng buộc rõ ràng
4. Lưu file SKILL.md

**Facilitator hỗ trợ qua chat Zoom:**
> "Bạn đang viết skill gì? Gặp vướng mắc gì?"

**Ghi chú giảng viên:** Đi "vòng quanh" qua chat. Nếu ai bí -> gợi ý dựa trên nghề nghiệp. Manager: skill lập kế hoạch. Marketer: skill phân tích đối thủ. Teacher: skill tạo đề thi.

---
## Slide 10: Poll #2 -- Checkpoint

**ZOOM POLL:**

"Bạn đang ở giai đoạn nào?"

- A. Đang viết SKILL.md
- B. Đang test trên Claude Code
- C. Đang sửa sau test
- D. Xong, chuẩn bị trình bày!

**Ghi chú giảng viên:** Nhóm D giúp nhóm A nếu có thể. Điều chỉnh thời gian: nếu đa số A -> thêm 5 phút workshop, rút ngắn số bài trình bày.

---
## Slide 11: Test & Iterate (10 phút)

**Chạy SKILL.md trên Claude Code:**

1. Chạy skill với input thực tế
2. Đánh giá kết quả theo 3 tiêu chí rubric:
   - Chạy được không lỗi?
   - Kết quả dùng được?
   - Đúng quy trình?
3. **Sửa ít nhất 1 vòng** -- ghi lại: trước/sau sửa khác thế nào

> "Iterate = cải thiện liên tục. SKILL.md tốt nhất không phải bản đầu tiên."

**Ghi chú giảng viên:** Khuyến khích sửa cụ thể: thêm ví dụ, sửa bước, thêm ràng buộc.

---
## Slide 12: Peer Preview

**Gõ vào chat Zoom:**

> "Mô tả skill của bạn trong 1 câu: 'Skill này giúp [ai] làm [gì] tốt hơn bằng cách [cách nào].'"

Ví dụ: "Skill này giúp quản lý dự án soạn báo cáo tuần tốt hơn bằng cách tự động tổng hợp tiến độ từ file meeting notes."

**Ghi chú giảng viên:** Chọn 2--3 câu thú vị, hỏi thêm. Tạo hứng thú cho phần trình bày sắp tới. 5 phút.

---
## Slide 13: Trình bày Skill -- Cấu trúc 3 phút

**Cấu trúc cố định:**

| Thời gian | Nội dung |
|-----------|----------|
| **30 giây** | **Vấn đề:** "Trước đây, tôi mất ___ phút để ___." |
| **90 giây** | **Demo:** Chạy skill trực tiếp trên màn hình |
| **60 giây** | **Kết quả:** "Skill tạo ra ___, tốt hơn thế này: ___." |

**Sau mỗi bài:** 2 người phản hồi theo rubric 4 tiêu chí

> Nếu >10 người: 8 trình bày live, còn lại paste SKILL.md vào chat.

**Ghi chú giảng viên:** Giữ nghiêm 3 phút. Dùng timer trên Zoom. Phản hồi 1 phút/người: "Điểm tốt + 1 gợi ý cải thiện." 25 phút cho toàn bộ phần trình bày.

---
## Slide 14: Vote -- Skill hay nhất

**ZOOM POLL:**

"Skill hữu ích nhất?"
- [Tên người A]
- [Tên người B]
- ...

"Skill sáng tạo nhất?"
- [Tên người A]
- [Tên người B]
- ...

**Ghi chú giảng viên:** Chuẩn bị poll với tên người trình bày. Công bố kết quả + khen cụ thể tại sao skill đó hữu ích/sáng tạo. 5 phút.

---
## Slide 15: 5 Takeaway toàn khóa

| # | Takeaway | Buổi |
|---|----------|------|
| 1 | **AI là máy dự đoán từ** -- không phải thần thánh, luôn kiểm chứng | 1 |
| 2 | **Prompt tốt = cụ thể + có cấu trúc** (6 thành phần) | 1 |
| 3 | **Agent > Chat** cho tác vụ lặp lại nhiều bước | 2 |
| 4 | **Context engineering** = dạy AI hiểu công việc của bạn 1 lần, dùng mãi | 4 |
| 5 | **SKILL.md = tài sản tái sử dụng**, không phải chat một lần bỏ | 5 |

> "5 câu này là tất cả những gì bạn cần nhớ."

**Ghi chú giảng viên:** Đọc chậm, 1 câu mỗi lần. Để lớp thấm.

---
## Slide 16: Tiếp theo -- Sau khóa học

**Bạn đã có:**
- Prompt Library (5+ prompt)
- CLAUDE.md cá nhân
- SKILL.md hoàn chỉnh
- Kinh nghiệm chạy Claude Code

**Tiếp theo:**
- Dùng skill đã tạo trong công việc tuần tới
- Tinh chỉnh SKILL.md dựa trên kết quả thực tế
- Thử tạo skill thứ 2 cho quy trình khác
- Tham gia cộng đồng hỗ trợ (nếu có)

**Ghi chú giảng viên:** Chia sẻ link tài liệu bổ sung nếu có. 3 phút.

---
## Slide 17: Poll cuối -- Tự tin sử dụng AI

**ZOOM POLL:**

"Sau khóa học, bạn tự tin dùng AI trong công việc ở mức nào?"

- 1 -- Chưa tự tin
- 2 -- Hơi tự tin
- 3 -- Tự tin vừa
- 4 -- Khá tự tin
- 5 -- Rất tự tin

**Ghi chú giảng viên:** Đọc kết quả. So sánh với Buổi 1 (nếu có baseline). "Từ mức X lên mức Y -- đó là tiến bộ thực sự." Cảm ơn + kết thúc.
