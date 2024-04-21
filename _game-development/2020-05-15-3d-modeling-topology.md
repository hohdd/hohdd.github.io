---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "3D Modeling Topology"
description: "3D Modeling Topology"

### HUMAN
header: "3D Modeling Topology"
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
collection: Bổ trợ kiến thức # this for AMP related post
### category: dùng để group collection
category: Bổ trợ kiến thức

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## Topology (cấu trúc liên kết)

Trong mô hình 3D, thuật ngữ cấu trúc liên kết đề cập đến cấu trúc và phân bố cạnh của mô hình 3D. Hai mô hình trông giống nhau khi được hiển thị có thể có cấu trúc liên kết rất khác nhau.

Cấu trúc liên kết ảnh hưởng đến nhiều khía cạnh của mô hình hóa và kết xuất 3D, bao gồm:
- Điểm nổi bật phản ứng thế nào với mô hình
- Thật dễ dàng để chỉnh sửa hình dạng của mô hình
- Việc áp dụng hoặc chỉnh sửa bản đồ thật dễ dàng. Các tia UV chưa được bao bọc sẽ dễ quản lý hơn với cấu trúc liên kết quad.
- Thật dễ dàng để lắp đặt và tạo hoạt ảnh cho mô hình. Cấu trúc liên kết bốn giúp việc lắp đặt và tạo hoạt ảnh dễ dàng hơn nhiều.

## Reference
- [Hard Surface Cheat Sheets by JS Mussi](https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/106766/themes/2153408233/downloads/530013a-07a-0e84-176e-0a41fbbafe6_Hard_Surface_Cheat_Sheets.pdf){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Turbosquid Training](https://resources.turbosquid.com/training/){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Pinterest Mesh Topology - Hard Surface Essentials](https://www.pinterest.com/josephcotter/mesh-topology/){:.external.hvr-forward rel="nofollow" target="_blank"}

*TODO...*