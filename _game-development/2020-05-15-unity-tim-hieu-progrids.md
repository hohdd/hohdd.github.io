---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu ProGrids
description: Tìm hiểu ProGrids

### HUMAN
header: Tìm hiểu ProGrids
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
collection: Investigate # this for AMP related post
### category: dùng để group collection
category: Investigate

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Packages > ProGrids

Tính năng **Grid Snapping** giúp các đối tượng được căn chỉnh và cách đều nhau. Đây là một phần quan trọng của mọi quy trình thiết kế cấp độ.

## Interacting with Pro​Grids

### The Interface

![TEXT](https://docs.unity3d.com/Packages/com.unity.progrids@3.0/manual/images/interface.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- A: **Snap Settings**. Đặt kích thước tăng dần của lưới.
- B: **Grid Visibility**. Chuyển đổi giữa việc hiển thị hoặc ẩn đường lưới trong chế độ *Scene view*. Cái này chỉ ảnh hưởng việc Hiển thị, chức năng Snapping vẫn hoạt động bình thường.
- C: **Snapping Enabled**. Bật hoặc tắt gắn đối tượng vào lưới. Đảm bảo **Gizmo handle** được đặt thành **Pivot**. Khi bạn sử dụng tính năng **snapping** với vị trí "*Center*" *nó có thể tạo ra hành vi không mong muốn*.
- D: **Push to Grid**. Đưa tất cả các đối tượng đã chọn vào lưới. Điều này hữu ích khi bạn bật tính năng snapping vào lưới để điều chỉnh *các đối tượng mà bạn đã tạo trước đó*.
- E: **Follow Grid**. Khóa lưới phối cảnh (**perspective grid**) tại chỗ. khóa sẽ xác định xem Grid có di chuyển cùng với đối tượng hay không.
- F: **Set Grid Planes**. Bạn có thể chọn hiển thị lưới cho một trục (X, Y, Z) hoặc cả ba trục cùng một lúc (Lưới phối cảnh). Các nút này chỉ khả dụng khi Chế độ xem cảnh được đặt ở chế độ phối cảnh (**perspective**).
- G: **Angle Visibility**. Chuyển đổi khả năng hiển thị của hướng dẫn góc. Nút này chỉ khả dụng khi Chế độ xem cảnh được đặt ở chế độ **orthographic**. (Ví dụ: bạn có thể thấy **hai đường chéo** xuất hiện ngoài các đường ngang và dọc của ProGrids.)

{% msg info MẸO: Nếu bạn tắt <strong>Follow Grid</strong>, bạn có thể "di chuyển" lưới X, Y hoặc Z dọc theo trục của nó bằng cách sử dụng phím tắt <strong>dấu ngoặc ([ ])</strong>. %}