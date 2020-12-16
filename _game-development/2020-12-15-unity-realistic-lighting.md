---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Realistic lighting
description: Realistic lighting

### HUMAN
header: Realistic lighting
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
collection: Unity # this for AMP related post
### category: dùng để group collection
category: Unity

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-16 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

### Challenge 1

#### Setup & Mục tiêu
- Một số tool làm 3D content: Autodesk 3DS Max, Autodesk Maya, Foundry Modo, Maxon Cinema 4D, SideFX Houdini, Blender
- Color Spaces (không gian màu, HỆ MÀU,  là một công cụ nhận biết khả năng màu sắc của 1 thiết bị (có bao nhiêu vùng sáng/tối, độ bão hòa màu và bao nhiêu vùng màu...)
- Lý thuyết màu sắc: Màu sắc trừu tượng (dải màu mà con người có thể cảm nhận luôn lớn hơn), Màu ấm so với màu lạnh, 
- Primay (yellow, red, blue) > Secondary (orange, green, purple) > Tertiary (citron, russet, buf) > Quaternary (plum, olive, sage)
- Hệ màu Munsell: 1.trục giữa - độ đen 10 mức (0:đen-dưới, 10: trắng-trên, 5:xám); 2. Mặt cắt ngang (màu sắc cơ bản ~ Quanternary); 3. độ lớn vòng tròn - sắc độ (bên trong nhạt nhất, đậm nhất ngoài cùng)
- Hệ màu đối sánh Pantone (PMS): Màu của năm...; Hệ màu CMYK; Hệ màu RGB; Hệ màu tự nhiên (Natural Color System - NCS)
- Các số L * a * b * cho phép thể hiện màu sắc chính xác nhất theo cách độc lập với thiết bị.

#### Reference
- [Using Basic Color Theory in Landscape and Garden Design](https://www.thespruce.com/color-theory-in-landscape-design-2132147){:.hvr-forward rel="nofollow" target="_blank"}
- [Các chiều của màu sắc](http://www.huevaluechroma.com/){:.hvr-forward rel="nofollow" target="_blank"}
- [7 Tips For Better Lighting in Unity](https://medium.com/@EightyLevel/7-tips-for-better-lighting-in-unity-686694892ece){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 2

#### Setup & Mục tiêu
- Global illumination (GI: chiếu sáng toàn cầu), hay Indirect illumination (chiếu sáng gián tiếp), là một nhóm các thuật toán được sử dụng trong đồ họa máy tính 3D nhằm bổ sung ánh sáng chân thực hơn cho cảnh 3D.
- Nếu các trục X,Y,Z của GO nhìn xiên xẹo và khi Rotation xong không thấy vòng tròn Gizmos trở về vị trí cũ thì tức là đang để chế độ "Global" Rotation.
- Quá trình "Back-face culling" (xử lý mặt sau) xác định xem một đa giác của đối tượng đồ họa có hiển thị hay không. làm cho việc kết xuất các đối tượng nhanh hơn và hiệu quả hơn bằng cách giảm số lượng đa giác để chương trình vẽ.
- Kỹ thuật "Clipping" (cắt) xác định xem đa giác có nằm trong trường nhìn của máy ảnh hay không (chọn lọc các Rendering trong một khu vực xác định - là vùng nhìn của Camera).
- Kỹ thuật "Z-culling" còn gọi là "Occlusion Culling" (xử lý tắc) tương tự "Clipping", nó cố gắng bỏ qua việc vẽ các đa giác bị che bởi các đa giác có thể nhìn thấy khác.
- Render pipelines: Culling (xử lý) > Rendering (kết xuất/tổng hợp hình ảnh) > Post-processing (Xử lý hậu kỳ). Chọn "Render pipelines" khi bắt đầu, sự khác nhau về hiệu suất và phù hợp với các trò chơi, ứng dụng và nền tảng khác nhau.
- Lights (Inspector): hiển thị các thuộc tính khác nhau trong Light Inspector tùy thuộc vào Render pipelines mà Dự án đang sử dụng.
- Light settings
	- Types: Point lights, Spot lights, Directional lights, Area lights
	- Range: Xác định quãng đường ánh sáng phát ra từ tâm của vật thể truyền đi (Point and Spot lights only).
	- Spot Angle: Xác định góc (tính bằng độ) tại đáy của hình nón của "Spot light".
	- Mode: chế độ sáng gồm Realtime, Baked, Mixed. Mỗi loại đều có những lợi ích và hạn chế riêng (VD: hiệu suất, khả năng can thiệp và thay đổi trong Script...)
		- Realtime: tính toán và cập nhật ánh sáng cho mọi khung hình trong Runtime.
		- Baked: tính toán trước độ chiếu sáng (tạo trước lightmap) và không đưa chúng vào bất kỳ tính toán chiếu sáng nào ở Runtime.
		- Mixed: thực hiện trước một số tính toán và một số tính toán trong Runtime.
	- Intensity: cường độ sáng. Giá trị mặc định cho Directional light là 0,5. Giá trị mặc định cho Point, Spot, Area light là 1.
	- Indirect Multiplier: cường độ của ánh sáng gián tiếp. Nếu thấp hơn 1, ánh sáng bị dội lại sẽ mờ. Giá trị cao hơn 1 làm cho ánh sáng bật lại sáng hơn.
- Shadows
	- Shadow Type: Hard Shadows, Soft Shadows, or no shadows at all.
- Additional settings
	- Cookie: để tạo bóng hoặc chiếu sáng theo khuôn mẫu bằng cách sử dụng "Texture mask"
	- Draw Halo: tạo vầng sáng hào quang xung quanh nguồn sáng (thêm "Halo" component có tác dụng tương tự và có thể chọn được cả màu)
	- Flare: tương tự "Lens Flare" component, tạo một Lens Flare trong Assets với Flare Texture để dùng.
	- Render Mode (lighting): ảnh hưởng đến độ trung thực và hiệu suất của ánh sáng. Gồm các chế độ: Auto, Important, Not Important
	- Culling Mask: Sử dụng tùy chọn này để loại trừ có chọn lọc các nhóm đối tượng khỏi bị ảnh hưởng bởi Ánh sáng.

#### Reference
- [Lighting tips for mobile game](https://blogs.unity3d.com/es/2020/06/15/lighting-tips-for-mobile-game-development/){:.hvr-forward rel="nofollow" target="_blank"}
- [Tips to get 60 fps on low-end phones](https://unity.com/how-to/advanced/optimize-lighting-mobile-games){:.hvr-forward rel="nofollow" target="_blank"}