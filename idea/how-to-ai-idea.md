# How to AI — Course Idea Input

## 1. Tâm sự / Goal

Tất cả những gì giới thiệu trong khóa học dựa trên nền tảng 20 năm code và làm việc, trong đó có 10 năm ở Mỹ, và các kỹ năng nền tảng như tư duy phản biện, tư duy hệ thống, khả năng đọc hiểu, phân tích và kết nối, sáng tạo. Mặc dù những bài học chỉ gói gọn thành những cái applicable nhất để mọi người có thể sử dụng ngay vào trong công việc hàng ngày, hy vọng chúng ta sẽ có cơ hội đào sâu phân tích để hiểu bản chất của AI là gì, chúng ta nên tư duy và tương tác với nó như thế nào, và tiếp tục phát triển ra sao trong những năm sắp tới.

---

## 2. Thoughts / Key Ideas

6 nguyên tắc cốt lõi muốn truyền đạt qua khóa học:

### 2.1. Mô tả rõ kết quả mong muốn, không mô tả cảm xúc

- BAD: "Design 1 cái banner đẹp"
- GOOD: "Banner nổi bật nút đăng ký, dùng màu cam, kích thước 1200x628 cho Facebook"
- BAD: "Tạo cho mình app học tiếng Anh"
- GOOD: "Tạo web app: user nhập câu tiếng Việt, hệ thống dịch sang tiếng Anh, cho nghe phát âm, rồi chấm điểm phát âm của user"
- Formula: (1) ai dùng, (2) họ làm gì, (3) họ nhận được gì

### 2.2. Delegate rõ ràng, không dump rồi cầu nguyện

- Ở công ty: Không quăng đống tài liệu cho nhân viên mới rồi nói "làm đi". Chia nhỏ, giao từng phần, kiểm tra từng bước.
- Với Claude Code: Không paste cả ý tưởng 2000 chữ rồi bảo "build cho mình". Mà chia thành: brainstorm trước → lên plan → chia task → implement từng task một.
- Nhiều người giao cho Claude một prompt dài 3 đoạn rồi thất vọng khi kết quả sai. Nhưng nếu cùng một khối lượng công việc đó mà giao cho nhân viên một lúc, kết quả cũng sẽ sai. Không phải vì người đó kém, mà vì khối lượng quá lớn để xử lý một lần.
- Action: Mỗi lần tương tác với Claude, chỉ yêu cầu MỘT việc. Xong việc đó, review, rồi mới sang việc tiếp.

### 2.3. Review trước khi duyệt, không nhắm mắt accept

- Ở công ty: Khi nhân viên gửi báo cáo, đọc rồi mới ký. Không ký mà không đọc.
- Với Claude Code: Khi Claude đề xuất PRD, plan, hay code — đọc và hỏi lại nếu chưa hiểu. "Chỗ này tại sao chọn cách này mà không chọn cách khác?" "Phần này có cần thiết không?"
- Đây là skill quan trọng nhất và cũng là chỗ nhiều người lười nhất. Claude đề xuất rất tự tin, nhưng tự tin không có nghĩa là đúng. Vai trò của bạn là người chốt quyết định, không phải người gật đầu.
- Action: Mỗi lần Claude đề xuất gì, hỏi ít nhất 1 câu "tại sao" trước khi đồng ý.

### 2.4. Mô tả vấn đề bằng triệu chứng, không tự chẩn đoán

- Ở công ty: Khi máy tính hỏng, gọi IT và nói "mình bật máy lên thì màn hình đen, có tiếng bíp 3 lần." Không nói "mainboard chắc cháy rồi" vì nếu đoán sai thì IT sẽ đi sai hướng.
- Với Claude Code: Khi gặp bug, không bảo "sửa function X". Mà mô tả "khi mình bấm nút submit, mình expect trang chuyển sang trang kết quả, nhưng nó reload lại trang cũ, console hiện lỗi này [paste error]."
- Mô tả triệu chứng thay vì tự chẩn đoán vì có thể bạn đoán sai nguyên nhân. Để Claude điều tra sẽ chính xác hơn.
- Action: Khi gặp lỗi, viết theo format: "khi [hành động], mình expect [A] nhưng thực tế [B]."

### 2.5. Học dần trong quá trình làm, không chờ "sẵn sàng"

- Ở công ty: Không đợi học hết Excel rồi mới bắt đầu làm report. Làm report, gặp chỗ không biết thì tra Google hoặc hỏi đồng nghiệp.
- Với Claude Code: Flowchart, schema database, API, deployment — không cần hiểu hết từ đầu. Bắt đầu làm, gặp khái niệm lạ thì hỏi Claude giải thích.
- "Học dần" không có nghĩa là "không cần effort". Vẫn cần đọc, cần hiểu, cần hỏi lại khi chưa rõ. Claude không phải nút magic, nó là một cộng sự giỏi. Để làm việc hiệu quả với cộng sự giỏi, bạn cũng cần bỏ công sức ra.
- Action: Mỗi khi Claude dùng một khái niệm bạn không hiểu, hỏi ngay: "giải thích [khái niệm] cho mình bằng ngôn ngữ đơn giản, kèm ví dụ."

### 2.6. Meta-thinking

- Nếu nhu cầu chỉ dừng ở phân tích dữ liệu: 1 prompt là xong.
- Vấn đề chỉ cần khác chút đi → big difference. Ví dụ:
  - Data từ 100MB thành 100GB
  - Tự động hóa
  - Xử lý thêm tác vụ gì đó đằng sau
- Chính trong quá trình tạo ra content khóa học này, đã đúc kết lại cả quá trình để sau này có thể tái sử dụng và đóng gói thành skill.

---

## 3. Applications Used for Demo

| # | Application | Description | Notes |
|---|-------------|-------------|-------|
| 1 | Contract-Agent | Agent xử lý hợp đồng | Existing demo |
| 2 | How to Co-work | Cách làm việc cùng AI | Existing demo |
| 3 | How to Claude Code | Hướng dẫn sử dụng Claude Code | Existing demo |
| 4 | Auto-Research | Tự động nghiên cứu dựa trên https://github.com/karpathy/autoresearch | **Need detailed example**: demo vibecoding autoresearch into a self-optimizing loop (e.g., game optimization problem on computer) |
| 5 | Context Engineering | Kỹ thuật tối ưu context cho AI | **Need concrete example**: compare clearly the result of prompts WITH vs WITHOUT context-engineering optimization — detailed and demoable artifact |

## 4. Reference Source
To be used for research similar content
-https://arealisticdreamer.com/5-mindset-va-2-workflow-dung-claude-code-hieu-qua