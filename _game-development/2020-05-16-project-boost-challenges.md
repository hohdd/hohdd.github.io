---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Project Boost - Challenges
description: Project Boost - Challenges

### HUMAN
header: Project Boost - Challenges
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: false # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Project_Boost # this for AMP related post
### category: dùng để group collection
category: Project_Boost

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-16 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

### Challenge 1

#### Mục tiêu

- Hiểu được các Tools để thay đổi các giá trị X (dài), Y (rộng/cao), Z (dầy)
	- Hand (Q) -> điều khiển góc nhìn của Screen (dùng chuột trái để move screen, giữ Alt để quay screen)
	- Move (W) -> điều chỉnh vị trí (position) của GameObject. Thay đổi dài (X), rộng/cao (Y), dầy (Z)
	- Rotate (E) -> điều chỉnh góc quay (rotation) của GameObject. Quay theo các trục X, Y, Z, hoặc quay cả 3 cùng lúc.
	- Scale (R) -> điều chỉnh kích thước của GameObject (X:dài, Y:rộng/cao, Z:dầy)
- Hiểu được Position tính từ tâm giữa của GameObject, nghĩa là bề mặt [1,0,1] nằm cắt ngang chính giữa GameObject.
- Hiểu được Directional Light: cường độ và màu sắc phụ thuộc vào hướng ánh sáng giống như các thời điểm mặt trời trong ngày, nó không phụ thuộc vào vị trí của nguồn sáng này.
- Control được Screen:
	- Chọn (W) GameObject nhà nhấn F để frame nó vào giữa màn hình (kéo Screen đi chỗ khác trước khi nhấn F để đưa GameObject về trung tâm)
	- Sử dụng chế độ bay (fly) để nhìn tổng thể: giữ chuột phải + ASWS (điều hướng) + EQ (lên xuống) + Shifft để tăng tốc
	- Kết hợp: F > Q > Alt + mouse left

#### Setup
- Tạo Launchpad ở vị trí trung tâm với kích thước 2,1,2
- Tạo Terrian sao cho bề mặt trên nằm ở vị trí Y=0, với kích thước: 100,30,30
- Tạo material cho Terrian
- Điều chỉnh hướng của ánh sáng thích hợp và kéo nó ra chỗ khác (ko phụ thuộc vị trí)
- Điều chỉnh camera ở vị trí thích hợp (kéo,quay...)
- Everything in hierachy is "prefabbed"
