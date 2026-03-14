# Hướng Dẫn Giảng Viên v2 — Session 1: AI Nghĩ Như Thế Nào + Agent Đầu Tiên

> **Terminal Objective:** Hiểu cách AI hoạt động, chạy agent đầu tiên trên Cowork, viết task brief hiệu quả sử dụng framework RTF + 6 thành phần.
>
> **Công cụ:** Claude Cowork (chính), Claude.ai (backup)
> **Thời lượng:** 2 giờ (120 phút)
> **Mental model:** "Brilliant new employee" — AI giỏi nhưng mới vào công ty, thiếu context.

---

## Pre-Session Checklist (Trước 15 Phút)

- [ ] Mở Claude Cowork, tạo project mới, test gửi brief
- [ ] Copy đơn hàng Google Vietnam vào clipboard:
  ```
  Công ty: TNHH Google Vietnam | Địa chỉ: 9 Đinh Tiên Hoàng, TP.HCM
  MST: 028476564 | Đại diện: Ông Khá Văn Bảnh – GĐ
  Dịch vụ: (1) Làm mobile: 10tr VND; (2) Design nhà: 5tr VND
  VAT: 8% | Thời gian: 10 ngày từ ngày ký
  ```
- [ ] Chuẩn bị 4 Zoom polls (xem mục Polls)
- [ ] Test share screen: font 125-150%, chỉ share tab Cowork
- [ ] Handout đơn hàng + template 6 thành phần đã gửi học viên
- [ ] Backup: ảnh chụp kết quả mẫu nếu Cowork lỗi
- [ ] 3 brief mẫu dự phòng (Manager/Marketer/Teacher) trên slide

---

## Zoom Polls

**Poll #1** (0:02): "Phản ứng đầu tiên của bạn?" — Ấn tượng / Không chắc chính xác / Muốn thử ngay / Đã biết rồi

**Poll #2** (0:16): "Bạn sẽ kiểm tra kết quả AI trước khi dùng không?" — Luôn luôn / Thỉnh thoảng / Hiếm khi / Chưa nghĩ đến

**Poll #3** (0:24): "Kết quả prompt RTF có tốt hơn không?" — Tốt hơn nhiều / Tốt hơn chút / Giống nhau / Tệ hơn

**Poll #4** (1:10): "Brief nâng cao (yêu cầu suy luận) có cải thiện kết quả?" — Có, rõ rệt / Có, chút / Không đổi / Khó so sánh

---

## Block A — Concept + Demo (0:00–0:35)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:00–0:02 | **Live demo — KHÔNG giới thiệu** | Mở Cowork ngay. Paste đơn hàng. Gõ: *"Đọc thông tin đơn hàng này và tạo bản nháp hợp đồng dịch vụ hoàn chỉnh."* Agent chạy 20-30s. Mở output. *Im lặng. Để lớp phản ứng.* | Dùng Cowork (agent mode), KHÔNG phải Claude.ai chat. Clipboard sẵn. |
| 0:02–0:04 | **Poll #1** | *"Trước khi tôi nói gì, cho tôi biết phản ứng đầu tiên."* Launch poll. Đọc kết quả. | Nếu >50% "Đã biết rồi" → tăng pace, bỏ bớt giải thích cơ bản. |
| 0:04–0:10 | **Giải thích ngược: 3 khái niệm** | *"AI vừa làm gì? Nó KHÔNG hiểu hợp đồng."* (1) **Máy dự đoán từ** — autocomplete x tỷ lần. (2) **Cửa sổ ngữ cảnh** — "bộ nhớ RAM có giới hạn." (3) **Hallucination** — AI tự tin kể cả khi sai. Giới thiệu mental model: *"Hãy nghĩ Claude là nhân viên mới xuất sắc — rất giỏi nhưng chưa biết quy trình công ty bạn."* | Slide 1-3. "Brilliant new employee" PHẢI xuất hiện ở đây — frame xuyên suốt khóa. |
| 0:10–0:12 | **Chat activity** | *"Gõ vào chat: nếu AI là nhân viên mới, bạn sẽ giao việc gì đầu tiên?"* Đọc 3 câu thú vị. | Thu thập context lớp — dùng lại ví dụ học viên ở block sau. |
| 0:12–0:16 | **Hallucination demo** | Hỏi Claude: *"Tổng giá trị hợp đồng sau thuế, phí shipping, và tiền phạt trễ hạn là bao nhiêu?"* (Đơn hàng KHÔNG có shipping/phạt → AI sẽ bịa.) *"Đây là lý do bạn cần biết đủ để đánh giá AI."* Giới thiệu **tam giác hóa nguồn:** kiểm tra 2+ nguồn độc lập. | Ví dụ kinh doanh an toàn. KHÔNG dùng chính trị/tôn giáo. |
| 0:16–0:18 | **Poll #2** | Launch poll kiểm chứng. *"Đây không phải bất tin — đây là thói quen chuyên nghiệp."* | |
| 0:18–0:24 | **RTF emerge từ delegation** | *"Nếu bạn giao việc cho nhân viên mới — bạn sẽ nói gì?"* Thu 3-4 ý kiến chat. Tổng hợp: Vai trò + Tác vụ + Định dạng = RTF. Demo so sánh: prompt đơn giản (phút 0:00) vs. prompt RTF. *"RTF emerge từ logic giao việc, không phải mẹo prompt."* | Slide 4-5. Frame: "cách brief nhân viên mới", KHÔNG phải "kỹ thuật prompt". |
| 0:24–0:26 | **Poll #3** | Launch poll so sánh RTF. | |
| 0:26–0:33 | **6 thành phần — mở rộng brief** | *"Nhân viên mới làm tốt hơn nếu biết thêm: viết cho ai (Giọng điệu), không được làm gì (Ràng buộc), ai dùng kết quả (Đối tượng)."* Demo: prompt 6 thành phần cho hợp đồng. *"Không cần dùng hết mỗi lần — biết khi nào dùng cái nào."* | Slide 6-8. Frame: "bộ công cụ brief", KHÔNG phải "6 techniques". |
| 0:33–0:35 | **Tóm tắt Block A** | *"3 thứ: AI dự đoán từ + luôn kiểm chứng + brief rõ = kết quả tốt. Giờ bạn tự làm trên Cowork."* | Nhanh, không dừng lâu. |

**Script mở đầu Session 1:**

> "Xin chào! Không slide giới thiệu. Tôi muốn cho bạn thấy 1 thứ ngay."
> [Mở Cowork, paste đơn hàng] "Đây là đơn hàng từ khách hàng. Tôi sẽ nhờ AI tạo hợp đồng."
> [Gõ brief, gửi, đợi 20-30s] "Xong. Đây là bản nháp hợp đồng." [Đọc 2-3 điều khoản]
> "30 giây. Thường thì 30 phút. Trong 2 giờ tới, bạn sẽ biết cách làm điều này — và biết khi nào KHÔNG nên tin kết quả."

---

## Block B — Hands-on Practice (0:40–1:15)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 0:40–0:45 | **Setup Cowork** | Chia sẻ màn hình, hướng dẫn đăng nhập từng bước. Tạo project. Paste đơn hàng. *"Ai chưa vào được? Gõ 'help' chat."* | Nếu chưa có Cowork account → Claude.ai tạm. |
| 0:45–0:58 | **Bài tập 1: Brief contract agent — Tiered** | **Nhiệm vụ A (5 phút):** Brief RTF — vai trò: chuyên gia hợp đồng, tác vụ: trích xuất 5 điểm chính, định dạng: bullet points. Gửi, đọc output. **Nhiệm vụ B (6 phút):** Mở rộng +3 thành phần (giọng điệu chuyên nghiệp, ràng buộc <200 từ theo luật VN, đối tượng GĐ ký). So sánh A vs B. **Nhiệm vụ C — early finishers (2 phút):** Thêm ví dụ mẫu output (few-shot). *"Cho nhân viên mới xem mẫu trước khi làm."* | Đi "vòng quanh" chat mỗi 3 phút: "Ai đang ở A? Ai sang B?" Few-shot = "xem mẫu", KHÔNG gọi "kỹ thuật few-shot". |
| 0:58–1:02 | **Chat share** | *"Paste 1 dòng kết quả AI tốt nhất vào chat."* Chọn 3, bình luận: brief nào → kết quả tốt, vì sao. | Chọn spectrum: 1 rất tốt, 1 trung bình, 1 cần cải thiện. |
| 1:02–1:10 | **Bài tập 2: Brief nâng cao — suy luận** | Dùng brief B. Thêm: *"Trước khi tạo hợp đồng, liệt kê 3 rủi ro pháp lý tiềm ẩn và cách xử lý."* So sánh: kết quả sâu hơn? *"Yêu cầu nhân viên suy nghĩ trước khi hành động."* | Chain-of-thought = "suy nghĩ trước", KHÔNG gọi "CoT". |
| 1:10–1:15 | **Poll #4 + Discussion** | Launch poll. *"Khi nào nên yêu cầu AI suy nghĩ trước? Khi tác vụ cần phân tích, không chỉ tạo nội dung."* | 2-3 câu thảo luận, không kéo dài. |

**During Activity — Hành động facilitator:**
- Phút 46: *"Ai đang viết brief? Ai đã gửi rồi?"*
- Phút 50: *"Ai đã sang Nhiệm vụ B? Nếu stuck ở A — dùng brief mẫu trên slide."*
- Phút 55: *"Ai xong B rồi? Thử Nhiệm vụ C — thêm ví dụ mẫu."*
- 3 brief mẫu dự phòng nếu bí: Manager (báo cáo tuần), Marketer (tiêu đề quảng cáo), Teacher (bài tập Toán)

**Early Finisher Tasks:** Nhiệm vụ C (few-shot) → hoặc thử brief cho tác vụ khác từ công việc cá nhân.

---

## Block C — Apply to Your Work + Q&A (1:20–1:50)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:20–1:35 | **Bài tập 3: Tác vụ thực tế — Tiered** | Chọn 1 việc tuần này. **Foundation:** Brief RTF, đánh giá output. **Extension:** Brief 6 thành phần + 1 ví dụ mẫu. **Challenge:** 6 thành phần + suy luận + 2 ví dụ. Đánh giá: (1) Đúng nội dung? (2) Đúng format? (3) Dùng được ngay? | Bài tập quan trọng nhất — kết nối kỹ năng với thực tế. Để học viên vật lộn trước khi can thiệp. |
| 1:35–1:45 | **Showcase: 3 tình nguyện viên** | Chia sẻ màn hình — brief + kết quả. Lớp phản hồi chat: *"Brief này thiếu gì để nhân viên mới hiểu rõ hơn?"* Facilitator bình luận điểm mạnh trước, cải thiện sau. | Chọn trước 1-2 người có kết quả tốt từ Block B. |
| 1:45–1:50 | **Q&A** | Thu câu hỏi chat. Ưu tiên: "Brief dài bao nhiêu là đủ?" / "Khi nào cần ví dụ mẫu?" / "AI có an toàn?" | Câu chưa trả lời → ghi lại, đầu buổi sau. |

**Script chuyển Block B → C:**

> *"Bạn vừa brief AI cho kịch bản hợp đồng. Bây giờ thử với VIỆC THẬT — việc bạn phải làm tuần này. Mở lịch. Tìm deadline gần nhất. Brief AI cho việc đó."*

---

## Block D — Homework + Wrap (1:50–2:00)

| Thời gian | Hoạt động | Script / Hành động | Lưu ý |
|-----------|-----------|-------------------|-------|
| 1:50–1:55 | **Homework (20-25 phút)** | Tạo "Brief Library" cá nhân: 5 brief cho 5 tác vụ thường xuyên. Mỗi brief: RTF + ít nhất 1 thành phần thêm. 1/5 brief liên quan xử lý tài liệu. Chạy trên Cowork, ghi kết quả. Mang đến S2. | Gửi template qua chat ngay. |
| 1:55–2:00 | **3 takeaway + Preview S2** | (1) AI = nhân viên mới xuất sắc — brief rõ = kết quả tốt. (2) Luôn kiểm chứng — AI tự tin kể cả khi sai. (3) Brief có cấu trúc (RTF+) tốt hơn gấp nhiều lần. *"Hôm nay bạn giao 1 brief. Buổi tới: bạn thiết kế workflow — AI tự lập kế hoạch, tự thực hiện nhiều bước."* | Kết thúc đúng giờ. |

**Script chuyển S1 → S2:**

> *"Hôm nay bạn brief AI như brief nhân viên mới. Nhưng tạo hợp đồng cần bao nhiêu bước? Đọc đơn hàng, trích xuất, tính VAT, format theo mẫu, kiểm tra lỗi... Chat = 5-6 tin nhắn hướng dẫn từng bước. Buổi tới: cùng tác vụ — 1 brief, agent tự lập kế hoạch, tự thực hiện. Đó là agent delegation."*

---

## Troubleshooting (5 Kịch Bản)

**1. Demo mở đầu cho kết quả bất ngờ (AI hallucinate/output kém)**
- *Xử lý:* KHÔNG panic. Biến thành teachable moment: *"Hoàn hảo — đây chính xác là lý do chúng ta học hôm nay. Prompt đơn giản → kết quả không kiểm soát."*

**2. Học viên lo bảo mật dữ liệu**
- *Xử lý:* *"Claude không lưu để huấn luyện (gói trả phí). Nguyên tắc: không nhập thông tin mật công ty. Đơn hàng hôm nay là mẫu — không phải dữ liệu thật."*

**3. Cowork/Claude.ai bị chặn hoặc lỗi**
- *Xử lý:* Chuyển "follow along" — xem facilitator, ghi note prompt, test ở nhà. Gửi recording + hướng dẫn sau.

**4. Học viên không biết chọn tác vụ ở Block C**
- *Xử lý:* *"Mở lịch tuần. Deadline gần nhất? Chuẩn bị gì cho cuộc họp đó? Đó là tác vụ."* Gợi ý: Manager→agenda, Marketer→caption, Teacher→câu hỏi kiểm tra.

**5. Khoảng cách trình độ quá lớn (người xong nhanh, người stuck)**
- *Xử lý:* Tiered design đã có A/B/C. Nếu vẫn lệch: người xong → thử brief tác vụ cá nhân. Người stuck → dùng brief mẫu trên slide, sửa 1-2 chi tiết.

---

## FAQ Dự Kiến (5 Câu)

**Q1: "AI có lấy dữ liệu cá nhân không?"**
A: Claude không lưu để huấn luyện (gói Pro). Nhưng không nhập thông tin mật — tên khách hàng thật, số hợp đồng thật.

**Q2: "Có cần đủ 6 thành phần mỗi lần?"**
A: Không. RTF là nền. Thêm dần khi brief cần rõ hơn. Mỗi thành phần thêm phải có lý do tồn tại.

**Q3: "Prompt dài bao nhiêu là tốt?"**
A: Không có số tuyệt đối. 3-5 câu rõ ràng tốt hơn 1 trang lan man. Mỗi câu phải thêm thông tin mới.

**Q4: "AI bằng tiếng Việt có tốt bằng tiếng Anh không?"**
A: Claude hiểu tiếng Việt tốt. Một số thuật ngữ chuyên ngành có thể cần bổ sung ví dụ. Brief bằng ngôn ngữ bạn thoải mái nhất.

**Q5: "Tôi dùng ChatGPT, có khác gì không?"**
A: Nguyên tắc brief giống nhau. RTF + 6 thành phần áp dụng cho mọi LLM. Khóa này dùng Claude vì agent mode mạnh hơn cho workflow.

---

## Energy Management — Session 1

- **Session 1 = năng lượng cao nhất** — tận dụng sự tò mò ban đầu
- Demo mở đầu "wow moment" tạo momentum — giữ pace nhanh Block A
- Block B: modality shift mỗi ~13 phút (setup → bài tập 1 → chat share → bài tập 2)
- Break 2 (1:15): *"Đứng dậy, vận động. Lúc quay lại: việc THẬT của bạn."*
- Nếu lớp energized → giữ showcase 3 người. Nếu mệt → rút còn 2
- Kết thúc bằng preview S2 — tạo anticipation cho buổi tới

---

## Technical Notes — Zoom

- **Font:** Phóng Cowork 125-150% — học viên đọc được qua Zoom
- **Share screen:** Chỉ share tab Cowork/Claude.ai, không toàn màn hình
- **Trợ giảng:** Phụ trách chat — đọc câu hỏi, hỗ trợ kỹ thuật, tổng hợp poll
- **Ghi âm:** Nhắc học viên buổi được ghi lại (nếu có) để không cần ghi chú vội
- **Backup nếu AI chậm:** Ảnh chụp kết quả mẫu sẵn trên slide
