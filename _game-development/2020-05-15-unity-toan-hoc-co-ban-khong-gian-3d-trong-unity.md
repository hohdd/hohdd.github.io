---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Toán học cơ bản liên quan đến không gian 3 chiều trong Unity Engine
description: Toán học cơ bản liên quan đến không gian 3 chiều trong Unity Engine

### HUMAN
header: Toán học cơ bản liên quan đến không gian 3 chiều trong Unity Engine
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
collection: "Chủ đề" # this for AMP related post
### category: dùng để group collection
category: "Chủ đề"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

### Toán học cơ bản liên quan đến không gian 3 chiều trong Unity Engine

Trong Unity Engine, tất cả các đối tượng trong game đều được định vị trong không gian 3 chiều. Để có thể thao tác với các đối tượng này một cách chính xác, chúng ta cần hiểu các khái niệm toán học cơ bản liên quan đến không gian 3 chiều, bao gồm:
- **Tọa độ**: Tọa độ của một điểm trong không gian 3 chiều được biểu diễn bởi một bộ ba số (x, y, z). Ví dụ, tọa độ của điểm (1, 2, 3) có nghĩa là điểm này nằm trên trục x với giá trị 1, trên trục y với giá trị 2 và trên trục z với giá trị 3.
- **Vector**: Véctơ là một đối tượng có hướng và độ dài. Véctơ có thể được sử dụng để biểu diễn chuyển động, vận tốc, lực,...

### Các phép toán về véctơ

![TEXT](https://verbalearn.org/wp-content/uploads/2022/09/vecto-trong-khong-gian.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Có một số phép toán cơ bản thường được sử dụng khi làm việc với véctơ trong Unity Engine, bao gồm:
- Thêm: **Cộng hai véctơ** cho nhau sẽ tạo ra một véctơ mới có hướng và độ dài là tổng của hai véctơ ban đầu.
- Trừ: **Trừ hai véctơ** cho nhau sẽ tạo ra một véctơ mới có hướng và độ dài là hiệu của hai véctơ ban đầu.
- Nhân: **Nhân một véctơ với một số** sẽ tạo ra một véctơ mới có hướng và độ dài là tích của véctơ ban đầu với số đó.
- Phân: **Chia một véctơ cho một số** sẽ tạo ra một véctơ mới có hướng và độ dài là thương của véctơ ban đầu với số đó.
- Tích vô hướng: **Tích vô hướng của hai véctơ** là một **số thực biểu thị góc** giữa hai véctơ đó.
- Tích chéo: **Tích chéo của hai véctơ** là một véctơ mới có hướng vuông góc với hai véctơ ban đầu.
- Phép **nhân vector với ma trận**: Phép nhân vector với ma trận là một phép toán được sử dụng để biến đổi vị trí hoặc hướng của một véctơ.
- Phép **nhân** vô hướng của **ma trận với véctơ**: Phép nhân vô hướng của ma trận với véctơ là một phép toán được sử dụng để biến đổi giá trị của một véctơ.

Tham khảo thêm:
- [Toán lớp 11](https://ttgdnn-gdtxquan11.edu.vn/toan-lop-11-ly-thuyet-va-7-dang-bai-tap-chon-loc-moi-nhat-2023.html){:.hvr-forward rel="nofollow" target="_blank"}
- [Bài Giảng Đại Số Tuyến Tính](https://www.slideshare.net/mashmallow967/bi-ging-i-s-tuyn-tnh-h-thng-long){:.hvr-forward rel="nofollow" target="_blank"}
- [Đồ họa trong không gian ba chiều](https://123docz.net/document/628965-do-hoa-trong-khong-gian-ba-chieu.htm){:.hvr-forward rel="nofollow" target="_blank"}

### Ứng dụng của các phép toán về véctơ trong Unity Engine

Các phép toán về véctơ được sử dụng trong nhiều trường hợp khác nhau trong Unity Engine, bao gồm:
- **Di chuyển đối tượng**: Để di chuyển một đối tượng trong không gian 3 chiều, chúng ta có thể sử dụng phép cộng để cộng một véctơ chuyển động vào vị trí hiện tại của đối tượng. Ví dụ, nếu chúng ta muốn di chuyển một đối tượng sang phải 10 đơn vị, chúng ta có thể sử dụng đoạn code sau:<br>
    ```csharp
    // Tạo một véctơ chuyển động
    Vector3 movement = new Vector3(10, 0, 0);
    // Di chuyển đối tượng
    gameObject.transform.position += movement;
    ```
- **Tạo hiệu ứng vật lý**: Các phép toán về véctơ được sử dụng để mô phỏng các hiệu ứng vật lý trong game, chẳng hạn như *lực, vận tốc và chuyển động*. Ví dụ, để tạo hiệu ứng một quả bóng rơi xuống đất, chúng ta có thể sử dụng đoạn code sau:<br>
    ```csharp
    // Tạo một quả bóng
    GameObject ball = new GameObject();
    // Tạo một lực trọng trường
    Vector3 gravity = new Vector3(0, -9.81, 0); // lực trọng trường hướng xuống dưới với độ lớn là 9,81 m/s^2
    // Tạo một chuyển động cho quả bóng
    ball.GetComponent<Rigidbody>().AddForce(gravity);
    ```
- **Tạo hình ảnh**: Các phép toán về véctơ được sử dụng để tạo ra các hiệu ứng hình ảnh trong game, chẳng hạn như ánh sáng và bóng đổ. Ví dụ, để tạo hiệu ứng một ánh sáng chiếu từ một điểm cố định, chúng ta có thể sử dụng đoạn code sau:<br>
    ```csharp
    // Tạo một ánh sáng
    Light light = new Light();
    // Xác định vị trí của ánh sáng
    light.transform.position = new Vector3(0, 0, 10);
    // Xác định hướng của ánh sáng
    light.direction = new Vector3(0, -1, 0);
    ```



