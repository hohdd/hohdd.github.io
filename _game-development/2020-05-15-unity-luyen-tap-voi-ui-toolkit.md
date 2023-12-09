---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity - Luyện tập UI Toolkit
description: Unity - Luyện tập UI Toolkit

### HUMAN
header: Unity - Luyện tập UI Toolkit
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
collection: Practice # this for AMP related post
### category: dùng để group collection
category: Practice

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Luyện tập 01

- Bạn hãy tạo một game đơn giản, trong đó người chơi có thể di chuyển một nhân vật trên màn hình bằng các phím mũi tên.
- Bạn hãy tạo một UI cho game của bạn, bao gồm các thành phần sau:
	+ Một thanh máu (Health Bar) để hiển thị máu của nhân vật. Thanh máu sẽ giảm dần khi nhân vật va chạm với các đối tượng nguy hiểm trên màn hình, và sẽ tăng lên khi nhân vật ăn các đối tượng có lợi. Khi thanh máu bằng không, game kết thúc.
	+ Một bộ đếm điểm (Score Counter) để hiển thị điểm số của người chơi. Điểm số sẽ tăng lên khi nhân vật ăn các đối tượng có lợi, và sẽ giảm xuống khi nhân vật va chạm với các đối tượng nguy hiểm. Điểm số cao nhất sẽ được lưu lại và hiển thị khi game kết thúc.
	+ Một nút tạm dừng (Pause Button) để người chơi có thể tạm dừng game. Khi nhấn nút tạm dừng, game sẽ dừng lại và hiển thị một menu với các tùy chọn như tiếp tục (Resume), chơi lại (Restart), hoặc thoát (Quit).
- Bạn hãy sử dụng UI Builder để thiết kế UI cho game của bạn.
- Bạn hãy sử dụng UXML và USS để định nghĩa UI cho game của bạn.
- Bạn hãy viết code C# để tương tác với UI và thêm các chức năng cho game của bạn.

TODO...