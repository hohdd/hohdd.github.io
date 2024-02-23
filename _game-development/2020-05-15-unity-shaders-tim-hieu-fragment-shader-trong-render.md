---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Shaders: Tìm hiểu Fragment shader trong Render"
description: "Shaders: Tìm hiểu Fragment shader trong Render"

### HUMAN
header: "Shaders: Tìm hiểu Fragment shader trong Render"
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
collection: Graphic # this for AMP related post
### category: dùng để group collection
category: Graphic

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Tìm hiểu Fragment shader trong Render

### Nội dung

Nội dung ở đây sẽ tập trung vào việc sử dụng các pixel shader viết bằng GLSL. Học cách tạo các hình, mẫu, ảnh bằng Toán học và làm chúng chuyển động bằng shader.

### Thông tin bên lề
- GLSL là gì? GLSL là viết tắt của OpenGL Shading Language, là một quy chuẩn để viết các shader. Có nhiều loại shader phụ thuộc vào phần cứng và hệ điều hành.
- Lịch sử: OpenGL > Vulkan (glNext); Apple có API Metal độc quyền của họ được giới thiệu vào 2014.
- Vulkan có thể so sánh với API Metal của Apple và Direct3D 12 của Microsoft và khó sử dụng hơn các API OpenGL và Direct3D 11 cấp cao hơn.
- Vulkan có nguồn gốc và được xây dựng dựa trên các thành phần API Mantle của AMD (được AMD tặng cho Khronos)
- Hiểu về lịch sử hình thành của OpenGL sẽ giúp ích trong việc vượt qua được một số rào cản kỳ lạ của nó [openglbook.com](https://openglbook.com/){:.hvr-float-shadow rel="nofollow" target="_blank"} > Ở thời điểm bắt đầu > Ống tia âm cực (CRT - Cathode Ray Tube) > Những tương tác đầu tiên > GUI > máy tính không còn đơn giản là thiết bị xử lý số mà còn có thể hiển thị các hình dạng hình học > 3D + AR > Nhỏ hơn, nhanh hơn, rẻ hơn (Bìa đục lỗ sơ khai > Đèn chân không GEN1 > Bóng bán dẫn GEN2 > Mạch tích hợp GEN3 > Bộ vi xử lý GEN4)...
- Thay đổi mô hình: CPU không theo kịp sự phát triển của GPU > Khi render CPU là một nút thắt  > Bộ đệm: chuyển từ bộ nhớ sang bộ nhớ của GPU sau khi khởi tạo và sẽ ở đó cho đến khi không còn cần thiết nữa.
- Vào năm 2000, Microsoft phát hành Direct3D 8.0, hỗ trợ một tính năng mới gọi là shader. Về cơ bản, Shader không gì khác hơn là những chương trình nhỏ chạy trực tiếp trên GPU, nhờ đó tận dụng được nhiều sức mạnh hơn của GPU và di chuyển nhiều chức năng ra khỏi CPU.
- The Software Pipeline (Đường ống phần mềm): Application layer > Abstraction layer > Device Driver > Hardware
- Render Thread: **bị mù** khi không thể biết được các thread khác đang làm gì + **mất trí nhớ** vì làm xong cái này là làm đến cái khác (vẽ xong 1 button > chuyển sang hiển thị 1 ảnh nào đó > chuyển sang hiển thị nội dung nào đó...)