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


### Challenge 2

#### Mục tiêu
- Hiểu được group các phần nhỏ GameObject bằng một Empty Object.
- Hiểu được Pivot (điểm quay ở 0.0.0) và Center (điểm quay ở giữa GameObject) khi ở chế độ Rotate (phím tắt Z)
- Hiểu được phím tắt để snap (Ctrl + Shift + di chuyển)
- Hiểu được phím tắt để bắt dính các góc cạnh (V = Vecter)
- Khi sửa Position: x=0 và z=0 sẽ đưa Rocket về trung tâm của Launchpad (vì Launchpad ở Position 0.0.0)

#### Setup
- Tạo một tên Rocket

### Challenge 3

#### Mục tiêu
- Hiểu Meshes (lưới thể tích và lưới đa giác), Mesh Renderer (render vật thể dựa vào Mesh). Định dạng file, va chạm, nội suy, bề mặt, ánh sáng phản chiếu...
- Hiểu Box Collider (là khung màu xanh thể hiện danh giới phần va chạm); Compound Collider (kết hợp va chạm, ma trận va chạm...)
- Hiểu Physic Material (được sử dụng để điều chỉnh ma sát và các hiệu ứng nảy của các đối tượng va chạm. Assets > Create > Physic Material). Ma sát (tĩnh và động). Bounciness (độ nảy)...
- Hiểu Rigidbody (nhận lực và mô-men xoắn để làm cho các vật thể chuyển động giống thực tế), đây là một trong rất nhiều loại Physics Component (hành vi vật lý thuyết phục, thực tế)
- Biết thêm Script Component, hàm Start() được call 1 lần khi start game, hàm Update() được call ở mọi frame (FPS)
- Hiểu "cross platform input" (virtual input layer): Nó cho phép người chơi thay đổi các phím. Nó cho phép bạn triển khai trên thiết bị di động một cách dễ dàng
- Biết câu lệnh debug: Print("Update")
- Biết các xem thông số "Stats" khi ở Play mode (Audio, Graphics, Frame Per Second...)
- Biết sự khác nhau giữa GetKey và GetKeyDown, khi xử lý Input nên dùng Input.GetAxis và Input.GetButton vì nó cho phép người dùng cấu hình phím.

#### Setup
- Thêm Rigbody cho Rocket

### Challenge 4

#### Mục tiêu
- Sử dụng GetComponent để lấy component Rigidbody khi start game, sử dụng Vector3.up shorthan
- Điều chỉnh màu chế độ play mode: Edit > Reference > Color > General:Playmode tint
- Biết chỗ xem và cấu hình các phím tắt (Shift+Space)
- Biết quy tắc thuận tay (hiểu X, Y, Z
	- X: trục ngang: trái là +, phải là -
	- Y: trục đứng: trên là +, dưới là -
	- Z: trục vuông góc màn hình: đi vào là +, đi ra (phía mình) là -
- Phân biệt Rotate (xoay) và Force (đẩy)
	- X: tâm xoay là X, đẩy theo hướng X (tùy + hay -)
	- Y: tâm xoay là Y, đẩy theo hướng Y (tùy + hay -)
	- Z: tâm xoay là Z, đẩy theo hướng Z (tùy + hay -)
- Xử lý lỗi không autocomplete khi viết Script, nguyên nhân chưa có .Net Framework 4.6.1, lỗi cài đặt do đang pending restart.

#### Setup
- Viết Script để thêm lực đẩy (Force) cho Rocket