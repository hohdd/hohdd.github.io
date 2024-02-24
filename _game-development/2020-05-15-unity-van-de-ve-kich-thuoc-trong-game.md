---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Vấn đề kích thước trong game
description: Vấn đề kích thước trong game

### HUMAN
header: Vấn đề kích thước trong game
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

## Vấn đề kích thước trong game

Kích thước của ảnh sử dụng làm hình nền cho khung nhìn camera **phụ thuộc vào độ phân giải** mà bạn muốn hỗ trợ cho game của bạn. Bạn có thể chọn một độ phân giải phổ biến như **1920x1080, 1280x720, hoặc 800x600**, hoặc bạn có thể tạo một độ phân giải tùy chỉnh theo ý của bạn. Bạn cũng cần chú ý đến tỉ lệ kích thước của độ phân giải, ví dụ như **16:9, 4:3, hoặc 1:1**, để đảm bảo rằng ảnh của bạn không bị méo mó hay cắt xén khi hiển thị trên các màn hình khác nhau [(discussions.unity.com)](https://discussions.unity.com/t/how-to-get-a-background-image-to-fill-the-screen-and-retain-aspect-ratio/192301){:.hvr-forward.external rel="nofollow" target="_blank"}.

Cách lựa chọn kích thước và tỉ lệ của các phần trong game là một vấn đề phức tạp. Bạn cần phải xem xét nhiều yếu tố như: **mục tiêu đối tượng, thể loại game, nền tảng phát hành, thiết kế đồ họa, hiệu năng, và nhiều hơn nữa**. Tuy nhiên, có một số nguyên tắc chung có thể tham khảo:

•  Sử dụng Canvas Scaler để điều chỉnh kích thước và tỉ lệ của các thành phần UI theo độ phân giải và tỉ lệ kích thước màn hình [docs.unity3d.com](https://docs.unity3d.com/2022.1/Documentation/Manual/UIB-styling-ui-backgrounds.html){:.hvr-forward.external rel="nofollow" target="_blank"}. Bạn có thể chọn một trong ba chế độ: **Constant Pixel Size, Scale With Screen Size, hoặc Constant Physical Size** [docs.unity3d.com](https://docs.unity3d.com/2022.1/Documentation/Manual/UIB-styling-ui-backgrounds.html){:.hvr-forward.external rel="nofollow" target="_blank"}.

•  Sử dụng Aspect Ratio Fitter để bảo toàn tỉ lệ kích thước của một thành phần UI khi kích thước của nó thay đổi [forum.unity.com](https://forum.unity.com/threads/how-to-lock-ui-to-a-certain-aspect-ratio.1217637/){:.hvr-forward.external rel="nofollow" target="_blank"}. Bạn có thể chọn một trong hai chế độ: **Envelope Parent** hoặc **Fit In Parent** [forum.unity.com](https://forum.unity.com/threads/how-to-lock-ui-to-a-certain-aspect-ratio.1217637/){:.hvr-forward.external rel="nofollow" target="_blank"}.

•  Sử dụng **Sprite Packer** để tối ưu hóa kích thước và hiệu năng của các ảnh Sprite trong game [stackoverflow](https://stackoverflow.com/questions/53390730/unity-scaling-for-all-aspect-ratios-for-all-android-mobile-devices){:.hvr-forward.external rel="nofollow" target="_blank"}. Bạn có thể sử dụng các tùy chọn như: **Padding, Pivot, Pixels Per Unit, Mesh Type, hoặc Compression** [stackoverflow](https://stackoverflow.com/questions/53390730/unity-scaling-for-all-aspect-ratios-for-all-android-mobile-devices){:.hvr-forward.external rel="nofollow" target="_blank"}.

•  Sử dụng **Texture Importer** để điều chỉnh kích thước và chất lượng của các ảnh Texture trong game. Bạn có thể sử dụng các tùy chọn như: Texture Type, Max Size, Compression, Filter Mode, hoặc Mip Maps.

## Scale

Để scale 1 và xem sự tương đồng giữa các phần...