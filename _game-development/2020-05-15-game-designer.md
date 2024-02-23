---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Game Designer"
description: "Game Designer"

### HUMAN
header: "Game Designer"
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400
text2speech: false # có bật chức năng Text-To-Speech hay không?

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Nghề phát triển game # this for AMP related post
### category: dùng để group collection
category: Nghề phát triển game

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## 1) Game Designer là gì? là ai?
- 3 yếu tố: Rule, Challenge, Goal
- Xu hướng mới, biến mọi thứ trở thành game hóa (Gamification: là một chiến lược tích hợp các yếu tố chơi game mang tính giải trí và hấp dẫn vào các bối cảnh không phải trò chơi để tăng cường mức độ tương tác và thúc đẩy các hành vi nhất định.)
- Công việc:
    + Viết Game Design Document trong từng giai đoạn sản xuất và bảo trình
    + Thiết kế và góp phần xây dựng các bản mẫu thô
    + Thiết kế các hệ thống cốt lõi
    + Cập nhật và tinh chỉnh các tính năng trong giai đoạn vận hành và khai thác
- Một team thiết kế game
    + Gameplay Designer
        - Kỹ năng đặc biệt: Gameplay, Game Mechanic
        - Thuộc tính yêu cầu:
            + Hiểu biết sâu sắc các thể loại Game
            + Game Logic
            + Game Sense
            + Đầu óc logic và tổng hợp thông tin tốt
        - Đồng đội tốt: Game Devs
    + UX Designer
        - Kỹ năng đặc biệt: Giao diện người dùng, trải nghiệm người chơi
        - Thuộc tính yêu cầu:
            + Tâm lý người chơi
            + Cập nhật xu hướng thiết kế
            + Cần có cảm quan tốt về màu sắc, bố cục, hiệu ứng và diễn hoạt
        - Đồng đội tốt: Game Artist, Game Animator
    + Level Designer
        - Kỹ năng đặc biệt: thiết kế màn chơi, trải nghiệm người dùng
        - Thuộc tính yêu cầu:
            + Truyền đạt niềm vui và thử thách thông qua các màn chơi
            + Nắm bắt điểm rơi tâm lý người chơi
            + Cần người có tính tỉ mỉ, nắm bắt tâm lý tốt và khả năng tổng hợp
        - Đồng đội tốt: Game Artist, Game Animator, Enviroment Modeler
    + Scripting Designer
        - Kỹ năng đặc biệt: xây dựng các thiết kế thô, thực hiện các bản demo tính năng
        - Thuộc tính yêu cầu:
            + Hiểu biết các ngôn ngữ kịch bản (game engine?)
            + Cầu nối giữa Game Design Team và Devs
            + Xây dựng những hệ thống truyền đạt mong muốn của team Game Design
        - Đồng đội tốt: Gameplay Designer, UX Designer
    + System Designer
        - Kỹ năng đặc biệt: thiết kế các hệ thống cốt lõi, coreloop, Gameflow, Metagame...
        - Thuộc tính yêu cầu:
            + Bề dày kinh nghiệm và hiểu biết thiết kế các hệ thống game tổng quát
            + Sử dụng nguồn dữ liệu người dùng để phát triển Game System
            + Thiết kế các hệ thống xương sống (hệ thống tool, sự kiện, vận hành)
        - Đồng đội tốt: System Devs
    + Operation Designer
        - Kỹ năng đặc biệt:
            + Thiết kế các tính năng phục vụ vận hành
            + Phân tích số liệu
            + Cân bằng giữa doanh thu và sự hài lòng của người chơi
        - Thuộc tính yêu cầu:
            + Phân tích, cải thiện số liệu và hành vi phản ứng của người chơi
            + Duy trì và phát triển sức khỏe cho một sản phẩm game.
        - Đồng đội tốt: System Designer, Marketer (Marketing)
			
## 2) Game Designer & Quy trình làm việc
- Preparation > Pitching
    + Nghiên cứu và khảo sát thị trường: game trên top, trending trên các MXH...
    + Suy nghĩ về ý tưởng
    + Đưa ra bản thiết kế và phác thảo sơ bộ
- Pitching > Fail > Preparation > Pass > Game Design Document 01
    + Trình bày bản phác thảo
    + Các USP (Unique Selling Point) của game là gì? (tại sao user phải tải và ở lại trong game của bạn?)
    + Thị trường mục tiêu? thị trường dựa trên người dùng (Văn phòng, sinh viên...) thị trường dựa trên quốc gia... phải xác định được thị trường vì hành vi users và chi trả ở các thị trường là khác nhau.
    + Trả lời các câu hỏi chất vấn.
    + Ước lượng sơ bộ về khả năng thực thi dựa trên kinh nghiệm vốn có của team
- Game Design Document 01 (cho Prototyping) > Prototyping
    + Tập trung viết về Gameplay và các USP trong đó
    + Nêu rõ ràng và chi tiết các đặc điểm cần làm nổi bật USP
- Prototyping > Fail > Game Design Document 01 > Pass > Prototyping testing
    + Game Designer xác nhận được đúng USP về Gameplay mà mình muốn truyền tải (game rule, control,...)
    + Trình bày các góp ý và bổ sung nếu có.
- Prototyping testing (quan trọng) > Fail > Prototyping > Pass > Game Design Document 02
    + Theo dõi các chỉ số về Gameplay
    + Theo dõi các chỉ số về khả năng giữ chân người chơi trong ngày đầu tiên (D1)
    + Khả năng phù hợp với thị trường (marketabilty), đặc biệt là CPI và IPM.
- Game Design Document 02 (cho MVP) > MVP
    + Tập trung mô tả để cải thiện trải nghiệm trong Ingame
    + Bổ sung các chắc năng thể hiện chiều sâu của nội dung nhưng giới hạn trong giai đoạn ngắn hạn (Progressing, Upgrade,...)
- MVP (Minimum Viable Product) > MVP Testing
    + Phiên bản tinh gọn nhưng chứa đựng đầy đủ những trải nghiệm ban đầu bạn muốn mang đến người chơi
    + Lên kế hoạch chi tiết và kiểm soát những phút đầu tiên trong game của users.
    + cần lựa chọn những chức năng theo những tiêu chí hợp lý nhất
- MVP Testing > Fail > MVP > Pass > Game Design Document 03
    + Tập trung theo dõi các chỉ số giữa chân người chơi trong ngày đầu tiên và các định mức cao hơn (D1, D3, D7)
    + Theo dõi các chỉ số chuyển đổi các đề mục mang lại doanh thu (IAP, Ads...)
    + Cần tracking kỹ càng ngay từ lúc cài đặt game
    + Nếu MVP cho phản hồi như mong muốn thì chuyển qua bước tiếp theo, không thì cần dựa vào chỉ số trả về để quay lại bước MVP để cải tiến để đạt được những mục tiêu rõ ràng.
    + Để đạt được những mục tiêu thì cần đề ra những tiêu chí cụ thể, hướng đến số liệu chứ không theo cảm tính.
- Game Design Document 03 (cho Official Release) > Brainstorming & Meeintg > Official Release
    + Cập nhật các tính năng dựa vào các dữ liệu đã được trả về
    + Tập trung vào chiều sâu và các tính năng dài hạn cho users
- Official Release
    + Được xem là phiên bản nâng cấp của MVP
    + Phiên bản đầy đủ các tính năng mong muốn, các tính năng này được lên kế hoạch để game hoạt động trong một thời gian nhất định
    + Được cài đặt hoàn tất các mô hình kinh doanh chủ lực (đã dự định để khai thác USP của game) như Shop, Gacha, Lucky wheel...
- Data Analysis > GDD Live-Ops
    + Chưa được tối ưu doanh thu nên cần được cập nhật và tracking để điều chỉnh. Cần tỉnh táo trong giai đoạn này để đưa ra các điều chỉnh.
    + Cập nhật và Tracking kỹ lưỡng các dữ liệu cần thiết
    + Theo dõi các chỉ số vận hành trên tập người dùng lớn
    + Đưa ra các điều chỉnh phù hợp đến khi phiên bản đi vào ổn định
- Live-Ops > Tracking & Analysis
    + Cập nhật các tính năng chăm sóc người chơi
    + Bổ sung các tính năng gắn kết cộng đồng (events, competitions...)
    + Đưa ra các điều chỉnh và khai thác game hợp lý dựa trên dữ liệu có được
		
## 3) Kinh nghiệm
- Học thêm chỉ là để bổ trợ, để giao tiếp với các bộ phận khác, vẫn nên để người có chuyên môn quyết định, không nên "đá chén cơm của người khác".
- Mỗi hành động và quyết định phải phục vụ một mục đích và kết quả phải đo lường được (phải có hệ thống đo lường).
- Mọi sản phẩm game đều có kết cấu cơ bản (gameloop...)
- Clone là cách học tập nhanh nhất (shadowing tiếng anh...)
- Khi tiết kế Level cần đặt ra những mục tiêu nhất định mà level cần đạt được, level cần tuân thủ theo mục đích đó.
- Đồ thị độ khó đi lên theo hình ziczac để kiểm soát cảm xúc chơi của users. Một số level để khai thác tiền...
	
## 4) Sai lầm hay mắc phải
- Không lầm tưởng là chỉ trình bày ý tưởng là có tiền... cần phải có bản vẽ, tính sức bền vật liệu, tính toán đủ thứ...để người xây dựng có thể xây
- Về cách thức làm việc, game designer cũng chỉ là thành viên, ko phải làm sếp, đừng nghĩ quyền hạn mình cao hơn... cần KHIÊM TỐN và TEAM WORK...
- Không nên suy nghĩ rằng team cần thực hiện tất cả những gì mình thiết kế ra. Cần phải có hệ thống đo đạc đánh giá chứ không dựa trên cảm tính. Thiết kế của mình có thể làm game đi xuống nếu không cẩn thận.