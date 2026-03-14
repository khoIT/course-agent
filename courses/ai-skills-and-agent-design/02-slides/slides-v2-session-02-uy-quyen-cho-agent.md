# Session 2: Uy Quyen Cho Agent (Agent Delegation Mastery)

---
## Slide 1: Retrieval Warm-up

**KHONG mo ghi chu. Go vao chat:**

> "3 thu ban nho tu buoi truoc?"

*(Retrieval practice -- keo ra tu tri nho, khong doc lai)*

"Ai da tao Brief Library 5 brief?" -> Reactions

**Speaker Notes:** Doc 3 cau, bo sung neu thieu. Retrieval practice (Dr. Agarwal): keo thong tin ra tu tri nho hieu qua hon doc lai. 5 phut.

---
## Slide 2: Poll #1 -- Thoi quen dung AI

**ZOOM POLL:**

"Khi dung AI, ban thuong gui bao nhieu tin nhan cho 1 tac vu?"

- A. 1
- B. 2-5
- C. 6-10
- D. >10

**Speaker Notes:** Da so chon B/C. "Hom nay ban se thay cach giam xuong con 1 -- nhung 1 brief tot hon 10 tin nhan."

---
## Slide 3: Demo So Sanh -- Chat vs Agent

| | Chat (Claude.ai) | Agent (Cowork) |
|---|---|---|
| Cach lam | 5 tin nhan qua lai | 1 brief, agent tu chay |
| Thoi gian | ~8 phut | ~2 phut |
| Mental load | Ban dieu phoi tung buoc | Ban review ket qua |
| Ket qua | Phai ghep nhieu phan | File output hoan chinh |

```
CHAT:  Ban -> AI -> Ban -> AI -> Ban -> AI -> Ket qua
AGENT: Ban -> [Brief] -> AI tu lap ke hoach -> tu thuc thi -> Ket qua
```

**Speaker Notes:** Demo LIVE cung tac vu hop dong. Cach 1: chat tren Claude.ai, 5 tin nhan, 8 phut. Cach 2: brief 4 phan gui Cowork, agent tu chay, 2 phut. "Chat = nhan tin tung dong cho nhan vien. Agent = giao brief du an va de ho tu quan ly."

---
## Slide 4: Poll #2 -- Ban muon dung cach nao?

**ZOOM POLL:**

"Ban muon dung cach nao?"

- A. Chat tung buoc
- B. Agent tu dong
- C. Tuy tinh huong

**Speaker Notes:** Da so chon C -- dung! "Vay lam sao biet khi nao dung cach nao? 3-Question Framework."

---
## Slide 5: 3-Question Delegation Framework

Truoc moi task, hoi 3 cau:

```
+------------------------------------------+
| 1. "DONE" trong nhu the nao?             |
|    Mo ta ket qua cuoi cung ro rang       |
+------------------------------------------+
          |
+------------------------------------------+
| 2. Claude KHONG the suy ra dieu gi?      |
|    Cung cap context thieu                 |
|    (phong cach, quy chuan, so lieu)       |
+------------------------------------------+
          |
+------------------------------------------+
| 3. Rang buoc gi?                          |
|    Gioi han thoi gian, format, pham vi   |
+------------------------------------------+
```

**Speaker Notes:** Cowork official pattern. Demo: ap dung 3 cau vao brief contract-agent. "3 cau nay = cach chuyen tu 'toi muon AI lam gi do' thanh 'toi biet chinh xac AI can gi de lam tot.'"

---
## Slide 6: Ma Tran Quyet Dinh -- Chat / Agent / Khong AI

| Tieu chi | Chat phu hop | Agent phu hop | Khong phu hop AI |
|----------|-------------|---------------|-----------------|
| Loai | Sang tao, 1 lan, kham pha | Lap lai, nhieu buoc, can file | Quyet dinh nhay cam |
| Vi du | Brain-storm y tuong | Tao hop dong tu don hang | Danh gia nhan vien |
| Tan suat | Ad-hoc | Hang tuan/ngay | -- |
| Output | Text trong chat | File hoan chinh | -- |

**Speaker Notes:** "Chat = brainstorm voi dong nghiep. Agent = giao du an cho team. Khong AI = viec can phan doan cua nguoi." Hoi chat: "Tac vu nao trong cong viec ban lap lai moi tuan, mat >30 phut, va co nhieu buoc?" Chon 2-3, ap dung ma tran.

---
## Slide 7: Task Brief 4 Phan -- Brief Chuyen Nghiep

| Phan | Muc dich | Vi du (contract-agent) |
|------|----------|----------------------|
| **Muc tieu** | AI tao ra gi? | Hop dong dich vu tu don hang |
| **Boi canh** | Thong tin AI can biet | File don hang, luat VN, mau hop dong |
| **Cac buoc** | It nhat 3 buoc theo thu tu | 1. Doc don hang 2. Trich xuat 3. Fill template 4. Kiem tra |
| **Tieu chi thanh cong** | "Dat chuan" trong the nao? | Day du dieu khoan, dung so lieu, <2 trang |

> "6 thanh phan prompt tu S1 -> mo rong thanh 4-part brief cho agent. Cung tu duy, quy mo lon hon."

**Speaker Notes:** Brief mau contract-agent 4 phan show tren slide. Frame: "S1 ban brief 1 task. S2 ban brief 1 project."

---
## Slide 8: Bai Tap 1 -- Viet Task Brief Dau Tien (8 phut)

**Tren Cowork:**

1. Ap dung 3-Question Framework:
   - Done = gi?
   - Context thieu gi?
   - Rang buoc gi?
2. Viet brief 4 phan
3. Gui cho Cowork
4. Doc output, danh gia

**Speaker Notes:** Dung kich ban hop dong HOAC tac vu tu Brief Library homework. Template brief 4 phan co trong handout. Chat share sau: "Danh gia ket qua agent 1-5 sao + 1 cau nhan xet ngan."

---
## Slide 9: Poll #3 -- Phan nao kho nhat?

**ZOOM POLL:**

"Phan nao cua task brief kho viet nhat?"

- A. Muc tieu
- B. Boi canh
- C. Cac buoc
- D. Tieu chi thanh cong

**Speaker Notes:** "Tieu chi thanh cong" thuong kho nhat -- vi chung ta it khi define done cho chinh minh. Thao luan 2 phut.

---
## Slide 10: Bai Tap 2 -- Iteration Loop (10 phut)

**Refine brief -- "Nhan vien moi lan dau chua hoan hao"**

1. Doc output tu Bai tap 1
2. Xac dinh 2 diem chua dat tieu chi
3. Sua brief: them boi canh thieu, cu the hoa buoc, that chat tieu chi
4. Gui lai Cowork
5. So sanh before/after

**Demo nhanh -- Structured Output:**
> Them vao brief: "Output phai co bang so sanh 3 cot: Dieu khoan | Noi dung | Ly do."
> Agent tao bang dung format. "Khi brief ro format, AI tuan theo 95%."

**Speaker Notes:** Bai tap quan trong nhat S2. Iteration = muscle memory. Goi y neu hoc vien khong biet cai thien gi: "Them 1 vi du output mong muon" hoac "Cu the hoa tieu chi: thay 'viet tot' thanh 'duoi 500 tu, co heading'."

---
## Slide 11: Bai Tap 3 -- Workflow Mapping (17 phut)

**5 buoc:**

| Buoc | Thoi gian | Lam gi |
|------|-----------|--------|
| 1 | 3 phut | Liet ke 5 tac vu lap lai hang tuan |
| 2 | 3 phut | Phan loai: Chat / Agent / Khong AI |
| 3 | 5 phut | Chon 1 "Agent phu hop" -> viet brief 4 phan |
| 4 | 4 phut | Gui brief cho Cowork, danh gia |
| 5 | 2 phut | Ghi: truoc mat bao phut? Agent mat bao phut? |

**Speaker Notes:** 3 nguoi trinh bay workflow mapping + brief. Lop gop y: "Brief nay du ro de agent thuc thi khong can hoi lai khong?" Yes/No + 1 cai thien.

---
## Slide 12: 3 Takeaway + Homework

**3 dieu mang ve:**
1. Agent = uy quyen thong minh -- khong phai "tu dong hoa"
2. 3-Question Framework truoc moi task
3. Brief 4 phan = brief chuyen nghiep

**Bai tap ve nha (25 phut):**
- Chay 2 tac vu thuc te tren Cowork (tu workflow mapping)
- Ghi: brief, ket qua, iteration v1 vs v2, thoi gian tiet kiem
- Mang den Session 3

**Preview Session 3:** "Buoi toi: ban se hieu TAI SAO contract-agent hoat dong tot -- context engineering, cach thong tin chay qua AI -- va cai Claude Code de chay agent THUC SU tren may minh."

**Speaker Notes:** Nhan manh: "Hom nay ban da chuyen tu 'nhan tin cho AI' sang 'giao du an cho AI'. Buoi toi: thiet ke MOI TRUONG de AI lam tot moi task."
