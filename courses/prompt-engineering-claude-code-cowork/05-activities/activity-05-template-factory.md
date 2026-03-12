# Activity 05: Template Factory

> **Buổi:** 4 | **Thời gian:** 17 phút | **Hình thức:** Individual Workshop | **LO:** LO7

## Tổng quan
Học viên tạo 3 prompt templates cho công việc lặp lại, lưu vào project folder, cấu hình CLAUDE.md để tham chiếu, và test trực tiếp trên Claude Code.

## REAL Criteria Check
- **R**elevant: Templates dựa trên công việc thực tế của học viên — không phải ví dụ giả ✓
- **E**ngaging: Tạo ra sản phẩm thật (templates dùng được ngay sau khóa học) ✓
- **A**ctive: Viết code/markdown + chạy Claude Code + kiểm tra output ✓
- **L**earner-centered: Mỗi người chọn task riêng phù hợp ngành mình ✓

## Materials Needed
- Claude Code đã cài sẵn (terminal mở)
- Text editor hoặc VS Code
- Project folder từ các buổi trước

## Procedure

### Setup (2 phút)
1. "Mở terminal, chạy `claude` trong project folder của bạn."
2. "Mở text editor — chúng ta sẽ tạo 3 files template + cập nhật CLAUDE.md."
3. "Nhớ lại 3 task lặp lại nhất trong tuần của bạn — đó là 3 templates cần tạo."

### During Activity — Facilitator Micro-Actions (15 phút)

**Roaming schedule:**
- 0:00–0:03: Kiểm tra học viên có project folder và terminal mở chưa. Nhắc: "Không cần hoàn hảo — tạo draft trước, refine sau."
- 0:03–0:07: Đi vòng quan sát: ai đang gặp khó với cấu trúc template? Nhắc checklist.
- 0:07–0:11: Kiểm tra CLAUDE.md — nhiều người quên bước này. "CLAUDE.md đã reference template folder chưa?"
- 0:11–0:14: Test phase — ai chưa chạy Claude Code với template thật? Thúc đẩy.
- 0:14–0:15: Wrap up — "Lưu file, commit nếu dùng git."

**Câu nói khi học viên bị stuck:**
- "Không biết task nào?" → "Task nào bạn làm nhiều nhất tuần này? Đó là template đầu tiên."
- "Không biết viết CLAUDE.md thế nào?" → "Thêm 1 dòng: `## Prompt Templates: Xem thư mục ./prompts/`"
- "Template chạy ra output lạ" → "Dùng `/clear` rồi test lại — hoặc kiểm tra [BRACKETS] đã điền chưa?"

**Early finisher:**
- "Xong rồi? Thêm `## Testing Log` vào mỗi template — ghi date + accuracy estimate."

**Time-check announcements:**
- 0:05: "Đã xong template đầu tiên chưa? Focus vào 1 template trước."
- 0:10: "Còn 7 phút — ưu tiên CLAUDE.md và test 1 template."
- 0:14: "1 phút — lưu file. Test sau được, quan trọng là có structure."

## Checklist Tạo Template (không có scaffold — tự làm)

### Template của tôi

**Template 1:** `_______________`
- ☐ Role defined? (AI đóng vai gì?)
- ☐ Context specific to industry? (có tên phòng ban / ngành cụ thể?)
- ☐ Task clear? (1 hành động cụ thể, không phải nhiều task)
- ☐ Format specified? (bullet / table / email / paragraph?)
- ☐ Variables marked with [BRACKETS]? (ít nhất 2 biến)
- ☐ Saved in project folder? (`./prompts/[tên-template].md`)
- ☐ CLAUDE.md updated? (có dòng reference đến template folder)

**Template 2:** `_______________`
- ☐ Role / ☐ Context / ☐ Task / ☐ Format / ☐ [BRACKETS] / ☐ Saved / ☐ CLAUDE.md

**Template 3:** `_______________`
- ☐ Role / ☐ Context / ☐ Task / ☐ Format / ☐ [BRACKETS] / ☐ Saved / ☐ CLAUDE.md

### Test Results
| Template | Chạy Claude Code? | Output OK? | Ghi chú |
|----------|------------------|-----------|---------|
| Template 1 | ☐ Yes / ☐ No | ☐ Yes / ☐ No | |
| Template 2 | ☐ Yes / ☐ No | ☐ Yes / ☐ No | |
| Template 3 | ☐ Yes / ☐ No | ☐ Yes / ☐ No | |

## Debrief (1 phút — chuyển sang Activity 06)
- "Ai tạo được 3 templates? Giơ tay."
- "Template khó nhất là gì — task, format, hay CLAUDE.md?"
- "Bây giờ chúng ta sẽ test templates của NHAU."
