# 📑 SOP: HỆ THỐNG TÌNH BÁO NỘI DUNG & SẢN XUẤT ĐA KÊNH BẰNG AI
> **Phiên bản:** 2.1 (Pure Workflow & Data-Driven Engine)  
> **Mục đích:** Quy trình chuẩn hóa từ việc quét dữ liệu xu hướng toàn mạng đến xuất bản kịch bản đa định dạng (Video ngắn, Video dài, Bài viết, Carousel) hoàn toàn dựa trên số liệu thực tế.  
> **Đối tượng áp dụng:** Bất kỳ Content Creator, Marketer, Agency hoặc Doanh nghiệp nào muốn sản xuất nội dung viral và chuyển đổi cao.

---

## 🎯 3 NGUYÊN TẮC VÀNG VẬN HÀNH

1. **Không đoán mò — Dữ liệu dẫn đường (Data-First):** Không bao giờ ngồi nghĩ kịch bản khi chưa có số liệu thực chứng từ thị trường (lượt xem, vận tốc tăng trưởng, tranh cãi của khán giả).
2. **An toàn tài khoản tuyệt đối (Safe by Design):** Chỉ sử dụng các cổng dữ liệu công khai (Open Endpoints / Platform Insights), không can thiệp sâu vào tài khoản cá nhân để tránh nguy cơ checkpoint hay khóa nick.
3. **Tổng hợp & Tái định hình góc nhìn (Synthesis, Not Lazy Remix):** Không sao chép nguyên văn, mà lấy số liệu và nỗi đau của thị trường để nhào nặn lại thành góc nhìn thực chiến, độc bản của tác giả.

---

## 🔄 QUY TRÌNH 3 GIAI ĐOẠN KHÉP KÍN

```
[BƯỚC 1: RADAR QUÉT XU HƯỚNG & BỘ LỌC ĐỘT BIẾN]
  ├── Quét đa nền tảng (Hệ sinh thái 16 kênh: YouTube, Reddit, X, RedNote, TikTok, Bilibili, LinkedIn, GitHub...)
  ├── Đo lường: Chủ đề có đang TĂNG SỰ CHÚ Ý không? (Breakout vs Fading)
  └── Mổ xẻ: "Kênh bé ăn view to" (Multiplier) & Đối thủ Copy hay Remix?
            │
            ▼ (Người dùng chọn ra 2 - 3 chủ đề tiềm năng nhất)
[BƯỚC 2: X-RAY ĐÀO SÂU TÂM LÝ KHÁN GIẢ]
  ├── Cào bình luận: Bóc tách Nỗi đau, Thắc mắc, Tranh cãi nảy lửa
  └── Dữ liệu cứng: Độ tuổi & Sở thích (Meta Insights / TikTok Creative Center / Audience Data)
            │
            ▼ (Người dùng chốt 1 chủ đề duy nhất để sản xuất)
[BƯỚC 3: XUẤT THÀNH PHẨM THEO ĐỊNH DẠNG YÊU CẦU]
  ├── Lựa chọn 1: Kịch bản Video Ngắn (Shorts / Reels / TikTok - 45-60s)
  ├── Lựa chọn 2: Kịch bản Video Dài (YouTube - 8-10 phút)
  ├── Lựa chọn 3: Bài viết phân tích sâu (Facebook / LinkedIn)
  └── Lựa chọn 4: Chuỗi ảnh trượt Carousel (Slide 1 đến Slide 6-8)
            │
            └── Tiêu chuẩn đầu ra bắt buộc: Kèm Hook 3s + Caption & Hashtag chuẩn SEO & AEO
```

---

### GIAI ĐOẠN 1: RADAR QUÉT XU HƯỚNG & BỘ LỌC ĐỘT BIẾN

Hệ thống triển khai quét đồng thời trên **hệ sinh thái 16 kênh dữ liệu** được chia thành 5 nhóm chuyên biệt:
* **🎬 Nhóm Video & Visual động:** YouTube, TikTok / Douyin, Bilibili.
* **💬 Nhóm Tranh luận & Trào lưu nóng:** Reddit, X (Twitter), Facebook Groups, Threads.
* **🎨 Nhóm Infographic, Carousel & Thị trường Á Đông:** Xiaohongshu (RedNote / 小红书), Instagram.
* **💼 Nhóm Chuyên môn sâu, Tech & Việc làm:** LinkedIn, GitHub Trending, V2EX.
* **🎙️ Nhóm Âm thanh & Báo chí:** Podcasts (Xiaoyuzhou / Spotify), RSS Feeds, Web News toàn cầu.

#### 🔐 BẢNG MỨC ĐỘ TRUY CẬP & YÊU CẦU ĐĂNG NHẬP (CHANNEL ACCESS MATRIX)

| Cấp độ truy cập | Nền tảng hỗ trợ | Môi trường chạy | Yêu cầu đăng nhập |
| :---: | :--- | :---: | :---: |
| 🟢 **MỨC 1: Tự do 100%** | YouTube, Bilibili, GitHub, RSS Feeds, V2EX, Web News | Chạy ngầm trong Terminal (CLI / API) | ❌ Không cần tài khoản |
| 🟡 **MỨC 2: Cần Browser** | Reddit, TikTok (Web) | Cần mở trình duyệt Chrome | ❌ Không bắt buộc tài khoản |
| 🔴 **MỨC 3: Cần Phiên Đăng nhập** | RedNote (Xiaohongshu), X (Twitter), Facebook, Instagram, LinkedIn | Mở Chrome đã đăng nhập sẵn tài khoản |  Cần đăng nhập 1 lần trên Chrome |

*💡 Cơ chế cảnh báo tự động: Khi quét vào các kênh Mức 3, nếu phát hiện phiên đăng nhập hết hạn, hệ thống sẽ tự động bật thông báo hướng dẫn người dùng mở Chrome đăng nhập lại.*

Người dùng cung cấp **Từ khóa / Chủ đề**, hệ thống quét và trả về báo cáo theo bảng 8 cột chuẩn:

| Cột thông tin | Ý nghĩa & Tiêu chuẩn đánh giá |
| :--- | :--- |
| **1. Từ khóa** | Cụm từ tìm kiếm cốt lõi của chủ đề. |
| **2. Tiêu đề (Kèm Link)** | Tiêu đề bài viết / video thực tế đang có lượng tương tác tốt kèm link kiểm chứng. |
| **3. Lượt view / Tương tác** | Số lượt xem, upvote hoặc likes thực tế đạt được. |
| **4. Mức độ tăng sự chú ý (24h - 48h)** | **🚀 BÙNG NỔ:** View/thảo luận tăng >50% trong 24h - 48h qua (Sóng đang lên, làm ngay).<br>**📈 TĂNG ĐỀU:** Tăng trưởng ổn định, bền vững (Nội dung trường tồn).<br>**📉 THOÁI TRÀO:** Tổng view cao nhưng 48h qua đứng im (Trend đã nguội, nên bỏ qua). |
| **5. Kênh bé ăn view to? (Multiplier)** | Hệ số: $\frac{\text{View video}}{\text{Sub kênh}}$. Nếu đạt **>5X - 20X** ➔ Thuật toán đang cực kỳ khát nội dung này, cơ hội cắn đề xuất rất cao. |
| **6. Đối thủ Copy hay Remix?** | • **Copy 100%:** Họ chỉ dịch thô từ nước ngoài ➔ Cơ hội làm bản thực tế sâu hơn để đè bẹp đối thủ.<br>• **Remix:** Họ đã bẻ lái góc nhìn mới ➔ Học công thức bẻ lái của họ. |
| **7. Tiềm năng** | Đánh giá Đại dương xanh (ít đối thủ) hay Đại dương đỏ (quá đông người làm). |
| **8. Định dạng đề xuất** | Video ngắn, Video dài, Bài viết hay Carousel. |

> **Hành động:** Người dùng lướt bảng số liệu và chọn ra **2 đến 3 chủ đề** có tiềm năng cao nhất.

---

### GIAI ĐOẠN 2: X-RAY ĐÀO SÂU TÂM LÝ KHÁN GIẢ

Sau khi chọn 2 - 3 chủ đề, hệ thống cào sâu vào dữ liệu bình luận và báo cáo nhân khẩu học của các chủ đề đó:

| Tiêu chí phân tích | Phương pháp thu thập dữ liệu an toàn | Giá trị mang lại cho kịch bản |
| :--- | :--- | :--- |
| **Insight cốt lõi** | Trích xuất từ thông điệp trung tâm của bài viết/video gốc. | Xác định thông điệp đắt giá nhất cần truyền tải. |
| **Nỗi đau & Thắc mắc lớn nhất** | Cào 50 - 200 bình luận hàng đầu của đối thủ. | Tìm ra những câu hỏi mà đối thủ chưa trả lời được để mình trả lời trong bài. |
| **Tranh cãi nảy lửa** | Lọc các bình luận phản biện, bất đồng quan điểm. | Lấy làm chất liệu cho câu Hook mở đầu hoặc góc nhìn phản biện độc lạ. |
| **Độ tuổi & Giới tính** | Lấy từ TikTok Creative Center & Meta Ad Library (Dữ liệu nền tảng mở). | Điều chỉnh ngôn từ (Gen Z, dân văn phòng hay người kinh doanh lớn tuổi). |
| **Bản đồ Sở thích đi kèm** | Phân tích từ các chủ đề liên quan (Related Interests). | Chọn hình ảnh B-roll và ví dụ minh họa gần gũi với người xem. |

> **Hành động:** Người dùng **chốt 1 chủ đề duy nhất** và chọn định dạng muốn xuất bản.

---

### GIAI ĐOẠN 3: XUẤT THÀNH PHẨM (CHUẨN SEO + AEO)

Hệ thống xuất bản hoàn chỉnh theo đúng định dạng được yêu cầu, luôn đảm bảo **3 cấu phần bắt buộc**:

#### 1. Bộ 3 Biến thể Hook giữ chân 3 giây đầu (A/B Testing)
* **Hook Gây sốc / Phản trực giác:** Đập vỡ định kiến thông thường ngay từ giây đầu tiên.
* **Hook Nỗi đau & Tiền bạc:** Đánh thẳng vào sự mất mát, lãng phí thời gian hoặc cơ hội kiếm tiền.
* **Hook Câu chuyện tò mò:** Dẫn dắt bằng một bí mật, nghịch lý hoặc case study kỳ lạ.

#### 2. Kịch bản chi tiết theo định dạng lựa chọn

##### 🌟 TÙY CHỌN ĐỘT PHÁ: "1-to-4 Multi-Angle Matrix" (Ma trận 4 góc nhìn)
Khi chốt 1 chủ đề, hệ thống có thể tự động bẻ lái thành **4 kịch bản đối lập** cho 4 tệp tâm lý khán giả:
1. **Góc Thực chiến (Actionable / How-to):** Hướng dẫn từng bước làm ngay trong 5 phút.
2. **Góc Phản biện (Contrarian / Debunking):** "Tại sao 90% mọi người đang hiểu sai về [X]?" (Gây bão tranh cãi).
3. **Góc Câu chuyện (Storytelling / Case Study):** Kể chuyện nhân vật lội ngược dòng thực tế.
4. **Góc Cảnh báo rủi ro (Fear & Red Flags):** "3 cái bẫy chết người khi tự làm [X]".

##### CÁC ĐỊNH DẠNG ĐƠN LẺ:
* **Nếu chọn Video Ngắn (Shorts/Reels/TikTok):** Bảng 4 cột chuẩn sản xuất: `Mốc thời gian (0-3s, 3-15s...)` | `Thị giác & Góc quay (Visual)` | `Lời thoại chi tiết (Voice)` | `Hiệu ứng âm thanh (Sound design)`.
* **Nếu chọn Video Dài (YouTube):** Dàn ý chi tiết từng mốc thời gian kèm số liệu dẫn chứng và case study minh họa.
* **Nếu chọn Bài Post (Facebook/LinkedIn):** Cấu trúc chuẩn: Hook $\rightarrow$ Nỗi đau thị trường $\rightarrow$ Giải pháp 3 bước $\rightarrow$ Lời kêu gọi hành động (CTA).
* **Nếu chọn Carousel (Slide ảnh trượt):** Tự động bóc tách từ Slide 1 đến Slide 6-8 và có thể xuất thẳng thành ảnh PNG chuẩn 4:5 qua bộ công cụ render đi kèm trong thư mục `scripts/render_carousel.js`.

#### 3. Bộ Caption & Hashtags chuẩn SEO + AEO
* **Chuẩn SEO (Search Engine Optimization):** Chứa các từ khóa tìm kiếm phổ biến để video/bài viết leo top tìm kiếm trên TikTok, YouTube, Facebook, Google.
* **Chuẩn AEO (AI Engine Optimization):** Cấu trúc câu rõ ràng dạng thực thể (Entities), câu trả lời trực diện để các bộ máy tìm kiếm AI (Perplexity, ChatGPT Search, TikTok AI) dễ dàng bóc tách, trích dẫn và đẩy vào nguồn tham khảo ưu tiên.

---

## 📈 HỆ THỐNG ĐO LƯỜNG HIỆU QUẢ SAU XUẤT BẢN

| Nhóm mục tiêu | Chỉ số đo lường chính | Ngưỡng đạt chuẩn (Benchmark) | Ý nghĩa hành động |
| :--- | :--- | :---: | :--- |
| **Thuật toán phân phối** | • Tỷ lệ giữ chân 3 giây đầu *(Hook Rate)*<br>• Thời lượng xem trung bình *(APV)* | **> 60%**<br>**> 65%** | Nếu Hook < 50% ➔ Đổi câu mở đầu.<br>Nếu APV > 65% ➔ Thuật toán sẽ tự động đẩy view. |
| **Chuyển đổi & Uy tín** | • Số comment theo từ khóa CTA<br>• Lượt Lưu lại *(Saves)*<br>• Tin nhắn hỏi tư vấn / dịch vụ | **> 20 - 50+ comment**<br>Gấp 5-10 lần lượt like<br>Có tin nhắn định kỳ | Đây là lượng **khách hàng tiềm năng thật (Leads)**. Lượt Save chứng minh giá trị chuyên môn cao. |
| **Thiện cảm & Tăng trưởng** | • Lượt bấm xem Trang cá nhân *(Profile visits)*<br>• Tỷ lệ chuyển đổi thành Follower mới | Tăng trưởng ổn định | Khán giả tò mò về tác giả và bắt đầu theo dõi kênh dài hạn. |

---
*Quy trình hoạt động độc lập và hoàn toàn tổng quát — người dùng chỉ cần đưa từ khóa của bất kỳ ngành nghề nào vào Giai đoạn 1 là hệ thống sẽ tự động vận hành.*

---

## 🚀 HƯỚNG DẪN SỬ DỤNG CHO NGƯỜI ĐƯỢC CHIA SẺ

### 🔹 Cách 1: Sử dụng ngay với ChatGPT / Claude / Gemini (Không cần cài đặt công cụ)
1. Bấm nút **Copy raw text** toàn bộ nội dung file này.
2. Dán vào cuộc trò chuyện mới với AI kèm câu lệnh:
   > *"Hãy đóng vai Hệ thống Tình báo Nội dung theo đúng quy trình trong file này. Tôi muốn bắt đầu từ Giai đoạn 1 với chủ đề / từ khóa: [Điền từ khóa của bạn]"*
3. AI sẽ tự động kích hoạt vai trò 3 phòng ban và dẫn dắt bạn qua từng giai đoạn để ra kịch bản hoàn chỉnh.

### 🔹 Cách 2: Cho Tech Builder & Developer (Tự động hóa cào dữ liệu qua CLI)
* Clone repo này về máy:
  ```bash
  git clone https://github.com/kaiduide79-coder/content-intelligence-engine.git
  ```
* Tích hợp cùng các công cụ cào tự động (`OpenCLI`, `Agent-Reach`) để cấp quyền cho AI tự động quét số liệu thời gian thực từ YouTube, Reddit, X và RedNote.

