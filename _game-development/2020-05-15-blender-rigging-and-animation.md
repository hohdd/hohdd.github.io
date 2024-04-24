---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Blender Rigging và Animation"
description: "Blender Rigging và Animation"

### HUMAN
header: "Blender Rigging và Animation"
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
collection: Blender # this for AMP related post
### category: dùng để group collection
category: Blender

### highlight_text
highlight_text: true
highlight_yellow: "LMB, RMB"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Khởi động
- FK (Forward Kinematics):
	- FK là viết tắt của Forward Kinematics (động học chuyển tiếp).
	- Để hiểu dễ dàng, hãy tưởng tượng bạn đang xây dựng một con rô bốt hoặc một nhân vật hoạt hình.
	- FK giúp bạn xác định tư thế của từng khớp nối (ví dụ: cánh tay, chân) dựa trên tư thế của khớp cha (ví dụ: vai, hông).
	- Khi bạn di chuyển khớp cha, các khớp con sẽ tự động thay đổi theo.
	- Ví dụ: Nếu bạn đưa tay lên trước, cánh tay và ngón tay sẽ tự động di chuyển theo.
	- Trong Blender, bạn có thể áp dụng FK bằng cách:
		- Chọn khớp cha trong chuỗi khớp.
		- Điều chỉnh tư thế của khớp cha để tự động thay đổi tư thế của các khớp con.
- IK (Inverse Kinematics):
	- IK là viết tắt của Inverse Kinematics (động học ngược).
	- Đây là phần thú vị! IK giúp bạn điều khiển phần cuối của chuỗi khớp (ví dụ: ngón tay, chân) mà không cần xác định tư thế của từng khớp con.
	- Ví dụ: Nếu bạn muốn nhân vật nắm một cái gì đó, bạn chỉ cần kéo tay của nhân vật đến vị trí mong muốn. Thuật toán IK sẽ tự động tính toán tư thế của các khớp con để đạt được điểm đó.
	- Điều này giúp bạn tạo ra các hành động tự nhiên và linh hoạt hơn cho nhân vật của mình.
	- Trong Blender, bạn có thể áp dụng IK bằng cách:
		- Chọn khớp cuối của chuỗi khớp.
		- Trong bảng điều khiển Bone Constraints, chọn Inverse Kinematics và thiết lập các thông số như Target Bone, Pole Target, và độ dài chuỗi khớp.
		- Sử dụng các hình dạng tùy chỉnh (custom shapes) để kiểm soát tư thế với các widget lớn ở tay và chân.
		- Các đường thẳng bạn thấy là pole targets, chúng giúp kiểm soát vị trí của đầu gối hoặc khuỷu tay.

## Rigging
- Các bước để Rigging
	1. Reset Scale:
		- Trước khi Rigging cần Apply các Modifier và Apply (Ctrl-A: Object > Apply > Scale) các giá trị Scale trở thành "base" 1.
		- Tương tự khi thêm Armature sau khi Scale cho khớp Object thì cũng cần Apply Scale.
	2. Add Object xương (Armature). Để có nhiều Armature hơn thì enable Add-On "Rigging: Rigify" (Human, Animals...)
		- Đưa Armature vào vị trí với Object để làm Xương (căn chỉnh Armature và Human Object)
		- Edit Armature trong Edit Mode tương tự các Object thông thường, vì Xương có tính đối xứng nên trong Options Properties của Select > chọn X-Axis Mirror để chọn cả phần đối xứng để chỉnh sửa.
	3. Gắn object vào Armature (mục đích thử nghiệm, thực tế thì sẽ gắn Rig là các Control ở bước 4 vào Object):
		- Sau khi vị trí Armature và Object đã ok thì set parent cho Xương
		- Chọn đối tượng > Shift > chọn xương > Ctrl-P (set parent cho Xương) > có nhiều options...
	4. Tạo những điều khiển (control ) cho bộ xương.
		- Vào Data Properties của Armature > button "Generate Rig". Bước này sẽ tạo Rig Object trong Scene Collection
		- Có Rig rồi thì có thể xóa Armature đi.
		- Thực hiện bước 3 để gắn Rig vào Object Human (set parent)
		- Xử lý lỗi khi "Generate Rig":
			- Cannot connect chain (vị trí xương bị rời rạc): Thực hiện kết nối lại bằng các cách sau:
				- Đến Bone bị lỗi connect > Move bằng Cursor (Cursor to Select > Select to Cursor)
				- Hoặc sử dụng Vertex Snaping
				- tùy "Connected" (chọn Bone Properties > Relations > Connected) đảm bảo việc chuyển động liên quan đến nhiều xương.
	5. Sang chế độ Pose Mode (Ctrl-Tab) để tạo dáng với G (move) và R (rotate)
	6. Lưu ý: bản chất quá trình thêm Armature là để tạo Rig (Controls), các Controls này cần được set parrent vào Human Object
- Đối tượng bị ảnh hưởng bởi xương như thế nào?
	- Trong Object có Vertex Group (nhóm điểm): assign điểm vào Vertex Group (name, name group giống name của Object xương)
		- "Witb Automatic Weights" để Blender tự động gán Weight cho Vertex Group theo Rig sau đó sẽ điều chỉnh sau nếu cần.
		- chọn điểm rồi Assign thủ công
		- Weight Paint (vẽ bằng cọ): Đỏ thuộc về Current Group, Blue không thuộc. Khi paint nhớ kiểm tra các mặt xung quanh.

## Tài liệu tham khảo
- [CGDive (Blender Rigging Tuts)](https://www.youtube.com/@CGDive){:.external.hvr-forward rel="nofollow" target="_blank"}
