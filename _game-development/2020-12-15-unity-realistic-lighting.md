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

### Challenge 3

#### Setup & Mục tiêu
- Global illumination (GI: chiếu sáng toàn cầu), hay Indirect illumination (chiếu sáng gián tiếp), là một nhóm các thuật toán được sử dụng trong đồ họa máy tính 3D nhằm bổ sung ánh sáng chân thực hơn cho cảnh 3D.
- Global illumination (Chiếu sáng toàn cầu) về mặt lý thuyết, phản xạ (Reflection), khúc xạ (Refractions) và bóng đổ (Shadows) đều là những ví dụ về chiếu sáng toàn cục. Tuy nhiên, trong thực tế, chỉ có mô phỏng của phản xạ xen kẽ khuếch tán (Diffuse reflection) hoặc tụ quang (Caustic) được gọi là chiếu sáng toàn cục.
	- Reflection (Phản xạ) trong đồ họa máy tính được sử dụng để mô phỏng các vật thể phản chiếu như gương và bề mặt sáng bóng.
		- Ray tracing (Dò tia) là một kỹ thuật Rendering để tạo ra một hình ảnh bằng cách truy tìm đường đi của ánh sáng dưới dạng các pixel trong mặt phẳng hình ảnh và mô phỏng các hiệu ứng khi nó gặp các đối tượng ảo. Kỹ thuật này có khả năng tạo ra độ chân thực hình ảnh cao, nhưng với chi phí tính toán lớn. Điều này làm cho việc dò tia phù hợp nhất cho các ứng dụng có thể chịu được thời gian kết xuất tương đối lâu. Nhìn chung kém phù hợp hơn với các ứng dụng thời gian thực như trò chơi điện tử , nơi tốc độ rất quan trọng trong việc hiển thị từng khung hình.
		- Path tracing (Theo dõi đường dẫn) là một dạng Dò tia có thể tạo ra bóng mờ, độ sâu trường ảnh (DOF), chuyển động mờ (Motion blur), tụ quang (Caustic), tắc nghẽn môi trường xung quanh (Ambient occlusion) và ánh sáng gián tiếp. Một số lượng lớn các tia phải được truy tìm để có được hình ảnh tham chiếu chất lượng cao mà không bị nhiễu.
		- Ray Casting (Đúc tia) về cơ bản, nó giống như Ray tracing (dò tia). Tia đơn giản là một đường thẳng trong không gian 3-D của mô hình máy ảnh. Hàng triệu tia có thể được tạo ra để hiển thị một khung hình duy nhất của một bộ phim hoạt hình. 
	- Các loại "Reflection": Polished (bóng như gương), Blurry (Mờ), Metallic (Kim loại), Glossy (hiển thị điểm nổi bật từ nguồn sáng, nhưng không hiển thị phản chiếu rõ ràng từ vật thể). Phản xạ sàn ướt...
	- Refraction (Khúc xạ): là sự thay đổi hướng của sóng truyền từ môi trường này sang môi trường khác hoặc từ sự thay đổi dần dần trong môi trường. Các lăng kính và thấu kính quang học sử dụng sự khúc xạ để chuyển hướng ánh sáng...
	- Diffuse reflection (Phản xạ khuếch tán) ánh sáng tán xạ khuếch tán tạo nên hình ảnh của vật thể trong mắt người quan sát, ánh sáng phát ra được quay trở lại theo mọi hướng, ánh sáng khuếch tán được tạo ra tại mỗi mặt phân cách, thay vì một tia phản xạ đơn lẻ.
	- Caustic (Tụ quang): Tụ quang do một ly nước tạo ra, Tụ quang tạo bởi bề mặt nước...Sự tập trung ánh sáng, đặc biệt là ánh sáng mặt trời, có thể gây cháy. Tụ quang là một đường cong hoặc bề mặt mà mỗi tia sáng tiếp xúc với nhau , xác định ranh giới của một đường bao tia là đường cong của ánh sáng tập trung.
- Shadow mapping (Shadow mapping or shadowing projection = Lập bản đồ bóng hoặc chiếu bóng): Shadows được tạo ra bằng cách kiểm tra xem một pixel có thể nhìn thấy từ nguồn sáng hay không, bằng cách so sánh pixel đó với z-buffer hoặc "depth image" của chế độ xem nguồn sáng, được lưu trữ dưới dạng kết cấu (Texture).
- Z-Buffering (bộ đệm độ sâu, độ xa) là quản lý tọa độ độ sâu hình ảnh trong đồ họa 3D. Có cấu trúc dữ liệu bên trong giống như một hình ảnh, cụ thể là một mảng 2d, với điểm khác biệt duy nhất là nó lưu trữ giá trị z cho mỗi pixel màn hình thay vì dữ liệu pixel.
- Z-fighting (also called "stitching" = đường khâu) xảy ra khi hai Object có khoảng cách giống nhau đến Camera, điều này sẽ khiến chúng có các giá trị giống nhau trong bộ đệm z, z-buffer không thể phân biệt chính xác cái nào xa hơn cái nào.
- Z-culling là loại bỏ pixel sớm dựa trên độ sâu, giúp tăng hiệu suất khi hiển thị các bề mặt ẩn là tốn kém. Làm cho nó có thể bỏ qua toàn bộ quá trình chiếu sáng và texturing một điểm ảnh đó sẽ không được nhìn thấy.
- Z-order: đề cập đến thứ tự của các đối tượng dọc theo trục Z. là thứ tự của các đối tượng hai chiều chồng lên nhau.
- Trong hình học tọa độ , X thường đề cập đến trục hoành (trái sang phải), Y đề cập đến trục tung (lên và xuống) và Z đề cập đến trục vuông góc với hai trục kia (tiến hoặc lùi).
- Texture mapping: là một phương pháp xác định thông tin chi tiết , kết cấu bề mặt hoặc màu sắc tần số cao trên đồ họa hoặc mô hình 3D do máy tính tạo ra.
	- Depth map (Bản đồ độ sâu): là một hình ảnh hoặc kênh hình ảnh chứa thông tin liên quan đến khoảng cách bề mặt của các đối tượng cảnh từ một điểm nhìn. Thuật ngữ này liên quan đến và có thể tương tự như "depth buffer, Z-buffer, Z-buffering and Z-depth".
	- Heightmap (or Heightfield - Bản đồ độ cao): là một hình ảnh mà mỗi pixel lưu trữ các giá trị, chẳng hạn như dữ liệu độ cao bề mặt , để hiển thị trong đồ họa máy tính 3D.
	- Bump mapping (Bản đồ lồi lõm): là một kỹ thuật ánh xạ kết cấu trong đồ họa máy tính để mô phỏng các vết lồi và nếp nhăn trên bề mặt của một vật thể.
	- Normal mapping (or Dot3 bump mapping = Bản đồ Pháp Tuyến): là công nghệ "texture mapping" được sử dụng để làm giả ánh sáng của các vết lồi và vết lõm - một cách triển khai của "Bump mapping". Nó được sử dụng để thêm chi tiết mà không cần sử dụng thêm đa giác.
		- Normal mapping thường được lưu trữ dưới dạng ảnh RGB thông thường trong đó các thành phần RGB tương ứng với tọa độ X, Y và Z tương ứng của vector Pháp tuyến của bề mặt.
	- Parallax mapping (Offset mapping or Virtual displacement mapping): Ánh xạ thị sai (còn được gọi là ánh xạ bù hoặc ánh xạ dịch chuyển ảo ) là sự cải tiến của kỹ thuật "Bump mapping" hoặc "Normal mapping" được áp dụng cho các kết cấu trong các ứng dụng kết xuất 3D như trò chơi điện tử.
	- Procedural texture (Kết cấu thủ tục): là một kết cấu được tạo ra bằng cách sử dụng mô tả toán học (tức là một thuật toán ) chứ không phải dữ liệu được lưu trữ trực tiếp. Ưu điểm của phương pháp này là chi phí lưu trữ thấp, độ phân giải texture không giới hạn và dễ dàng lập bản đồ texture. Những loại texture này thường được sử dụng để tạo texture cho các yếu tố tự nhiên như gỗ, đá cẩm thạch, đá granit, kim loại và các loại khác.
	- Displacement mapping (Ánh xạ dịch chuyển) là một kỹ thuật đồ họa máy tính thay thế trái ngược với Bump mapping, Normal mapping và Parallax mapping, sử dụng "Procedural texture" hoặc "Heightmap/Heightfield" để gây ra hiệu ứng trong đó vị trí hình học thực tế của các điểm trên bề mặt có kết cấu bị dịch chuyển.
	- Reflection mapping (or Environment mapping): là kỹ thuật Image-based lighting (IBL) để ước tính gần đúng sự xuất hiện của bề mặt phản chiếu bằng texture được tính toán trước.
		- Image-based lighting (Ánh sáng dựa trên hình ảnh): là một kỹ thuật Render 3D bao gồm việc ghi lại sự thể hiện đa hướng của thông tin ánh sáng trong thế giới thực dưới dạng hình ảnh. IBL thường sử dụng hình ảnh dải động cao (High-dynamic-range imaging) để có độ chân thực cao hơn, mặc dù điều này không phổ biến.
		- High-Dynamic-Range Imaging (HDRI) Hình ảnh dải động cao ( HDRI ) là một kỹ thuật được sử dụng trong hình ảnh và phim ảnh để tái tạo phạm vi độ sáng lớn hơn những gì có thể với hình ảnh kỹ thuật số hoặc kỹ thuật chụp ảnh tiêu chuẩn.
	- Specularity (Đặc điểm/Tia): là sự xuất hiện trực quan của các phản xạ đặc trưng (Specular reflection). Nó thường được sử dụng trong đồ họa máy tính thời gian thực (Real-time computer graphics) và theo dõi tia (Ray tracing).
		- Specular reflection or Regular reflection (phản xạ đặc trưng): Sự phản xạ dạng tia , hay sự phản xạ thường xuyên , là sự phản xạ giống như gương của các sóng , chẳng hạn như ánh sáng , từ một bề mặt.
	- Texture splatting (Tách hoạ tiết): là một phương pháp để kết hợp các Texture khác nhau. Nó hoạt động bằng cách áp dụng một alphamap (còn được gọi là "weightmap" hoặc "splat map") cho các cấp cao hơn, do đó tiết lộ các lớp bên dưới nơi alphamap trong suốt một phần hoặc hoàn toàn.
		- Blend modes (or mixing modes = Chế độ hòa trộn): được sử dụng để xác định cách hai lớp được hòa trộn với nhau (Multiply, Overlay...)
		- Transparency (Độ trong suốt)
		- Alpha compositing (kết hợp alpha): là quá trình kết hợp một hình ảnh với nền để tạo ra vẻ ngoài trong suốt một phần hoặc toàn bộ.
	- Vertex (Đỉnh): là một cấu trúc dữ liệu mô tả các thuộc tính nhất định, như vị trí của một điểm trong 2D hoặc 3D không gian, hoặc nhiều điểm trên một bề mặt.

#### Reference
- [List of video games considered the best](https://en.wikipedia.org/wiki/List_of_video_games_considered_the_best){:.hvr-forward rel="nofollow" target="_blank"}
- [A series about controlling the movement of a character](https://catlikecoding.com/unity/tutorials/movement/){:.hvr-forward rel="nofollow" target="_blank"}
- [Glossary of computer graphics](https://en.wikipedia.org/wiki/Glossary_of_computer_graphics){:.hvr-forward rel="nofollow" target="_blank"}
- [Glossary of video game terms](https://en.wikipedia.org/wiki/Glossary_of_video_game_terms){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 4

#### Setup & Mục tiêu
- Cg (short for C for Graphics) and High-Level Shading Language (HLSL): là hai tên được đặt cho một "ngôn ngữ tô bóng" (Shading language) do Nvidia và Microsoft phát triển. Cg/HLSL dựa trên ngôn ngữ lập trình C và mặc dù chúng có chung cú pháp cốt lõi, một số tính năng của C đã được sửa đổi và các kiểu dữ liệu mới được thêm vào để làm cho Cg/HLSL phù hợp hơn cho việc lập trình các "Graphics processing unit".
- Graphics Processing Unit (GPU ~ xử lý đồ họa): là một mạch điện tử chuyên dụng được thiết kế để thao tác và thay đổi "memory" nhanh chóng nhằm đẩy nhanh quá trình tạo hình ảnh trong "frame bufer" được thiết kế để xuất ra thiết bị hiển thị
- Graphics pipeline: Một Graphics pipeline có thể được chia thành ba phần chính: Application, Geometry và Rasterization
	- Application: Bước này được thực thi bởi phần mềm trên bộ xử lý chính (CPU). Trong Game Engine hiện đại như Unity, lập trình viên hầu như chỉ xử lý bước Application và sử dụng ngôn ngữ cấp cao như C#, trái ngược với C hoặc C++. Scene với tất cả các nguyên thủy của nó, thường là hình tam giác, đường thẳng và điểm, sau đó được chuyển sang bước tiếp theo trong quy trình.
	- Geometry: Bước này (với Geometry pipeline), chịu trách nhiệm cho phần lớn các hoạt động với đa giác và các đỉnh của chúng (với Vertex pipeline), có thể được chia thành năm công việc sau. Nó phụ thuộc vào việc triển khai cụ thể cách các nhiệm vụ này được tổ chức như các bước đường ống song song thực tế.
		- PIPELINE: Object coordinates (Model & Camera transformation) > Camera coordinates > Lighting > Projection > Clipping coordinates > Clipping > Window-Viewport transformation > Device coordinates
	- Định nghĩa:
		- Hình tam giác là hình học nguyên thủy phổ biến nhất của đồ họa máy tính. Nó được xác định bởi ba đỉnh của nó và một vectơ pháp tuyến
		- vectơ pháp tuyến dùng để chỉ mặt trước của tam giác và là một vectơ vuông góc với bề mặt.
		- Hình tam giác có thể được cung cấp với một màu sắc hoặc một kết cấu (Texture được "dán" lên trên nó).
		- Hình tam giác luôn tồn tại trên một mặt phẳng , do đó chúng được ưu tiên hơn hình chữ nhật.
		- Hệ tọa độ thế giới: là hệ tọa độ trong đó thế giới ảo được tạo ra. Điều này cần đáp ứng một số điều kiện để toán học sau có thể dễ dàng áp dụng:
			- Tất cả các trục đều có tỷ lệ như nhau; Đơn vị của hệ tọa độ; Vector đơn vị của hệ thống có tương ứng trong thực tế với một mét...
			- Việc sử dụng hệ tọa độ thuận tay phải hay tay trái có thể được xác định bởi thư viện đồ họa sẽ được sử dụng.
			- Các Object chứa trong Scene thường có hệ tọa độ đối tượng của riêng chúng (còn gọi là "model coordinate" hoặc "local coordinate"). Để gán các Object này vào "world coordinate" hoặc "global coordinate" của toàn bộ Scene, tọa độ đối tượng được chuyển đổi bằng các phương pháp tịnh tiến (translation), quay (rotation ) hoặc chia tỷ lệ (scaling). Điều này được thực hiện bằng cách nhân các ma trận biến đổi tương ứng.
		- Camera Transformation: Ngoài các Object, Scene cũng xác định một Camera hoặc Viewer cho biết vị trí và hướng xem mà từ đó Scene sẽ được hiển thị.
			- Để đơn giản hóa phép chiếu và cắt sau này, cảnh được chuyển đổi sao cho máy ảnh ở điểm gốc, nhìn dọc theo trục Z.
			- Hệ tọa độ kết quả được gọi là hệ tọa độ máy ảnh (camera coordinate) và phép biến đổi được gọi là phép biến đổi máy ảnh (camera transformation) hoặc Phép biến đổi khung nhìn (View Transformation).
			- Ma trận chế độ xem thường được xác định từ vị trí máy ảnh, điểm mục tiêu (nơi máy ảnh nhìn) và "vectơ hướng lên" ("lên" từ điểm nhìn của người xem).
		- Projection (Phép chiếu): Để giới hạn số lượng đối tượng được hiển thị, hai mặt phẳng cắt bổ sung được sử dụng (near = Khoảng cách nhỏ nhất có thể nhìn thấy được; far = Khoảng cách xa nhất có thể nhìn thấy được)
			- Trong bước dựng hình thực tế, ma trận chiếu (projection matrix) * ma trận máy ảnh (camera matrix) * ma trận thế giới (world matrix) được tính toán và cuối cùng áp dụng cho từng điểm.
		- Lighting: Hệ số khuếch đại cho Texture được tính toán cho mỗi đỉnh (vertex) dựa trên nguồn sáng và đặc tính vật liệu liên quan đến tam giác tương ứng. Trong bước rasterization sau đó, các giá trị đỉnh của một tam giác được nội suy trên bề mặt của nó. Ánh sáng chung quanh (ambient light) được áp dụng cho tất cả các bề mặt.
		- Clipping: Về mặt lý thuyết, có thể thực hiện các phương pháp chọn lọc khác như xử lý mặt sau (backface culling), làm giảm số lượng nguyên thủy được xem xét, có thể được thực thi trong bất kỳ bước nào của đường ống đồ họa.
		- Window-Viewport transformation: Để xuất hình ảnh đến bất kỳ vùng đích (khung nhìn) nào của màn hình, phải áp dụng một phép biến đổi khác, phép chuyển đổi Cửa sổ-Chế độ xem (Window-Viewport transformation) phải được áp dụng.
			- Đây là một sự shift (thay đổi), tiếp theo là scaling. Tọa độ kết quả là tọa độ vùng nhớ của thiết bị đầu ra.
			- Viewport (khung nhìn) chứa 6 giá trị: chiều cao và chiều rộng của cửa sổ tính bằng pixel, góc trên bên trái của cửa sổ trong tọa độ cửa sổ (thường là 0, 0) và giá trị tối thiểu và tối đa cho Z (thường là 0 và 1).
	- Rasterisation: chỉ đơn giản là quá trình tính toán ánh xạ từ hình học cảnh (scene geometry) sang pixel và không quy định một cách cụ thể để tính toán màu sắc của các pixel đó. Màu cụ thể của mỗi pixel được chỉ định bằng cách "shading" (đổ bóng: trong các GPU hiện đại hoàn toàn có thể lập trình được ~ shading language).
		- Bước rasterisation là bước cuối cùng trước "fragment shader pipeline" (rằng tất cả primitives đã được rasterized). Trong bước này, các đoạn rời rạc được tạo ra từ các primitives liên tục.
		- Trong giai đoạn này các "grid points" được gọi là các "fragments". Mỗi fragments tương ứng với một pixel trong "frame buffer" và điều này tương ứng với một pixel của màn hình. Chúng có thể được tô màu (và có thể được chiếu sáng).
		- Để ngăn chặn việc người dùng thấy dấu hiệu dần dần của các primitives, bộ đệm kép diễn ra. Rasterisation được thực hiện trong một vùng bộ nhớ đặc biệt. Khi hình ảnh đã được Rasterisation hoàn toàn, nó sẽ được sao chép vào vùng hiển thị của bộ nhớ hình ảnh.
	- Inverse: Tất cả các ma trận được sử dụng đều là "Invertible matrix/nonsingular/nondegenerate/invertible" và do đó có thể đảo ngược.
		- Phép nghịch đảo được yêu cầu để tính toán lại tọa độ thế giới từ tọa độ màn hình - ví dụ: để xác định từ vị trí con trỏ chuột của đối tượng được nhấp. Tuy nhiên, vì màn hình và chuột chỉ có hai chiều nên thứ ba vẫn chưa rõ. Do đó, một tia được chiếu tại vị trí con trỏ vào thế giới và sau đó giao của tia này với các đa giác trong thế giới được xác định.

#### Reference
- [Graphics pipeline (hình học, tọa độ, camera, phép chiếu, ánh sáng, viewport...](https://en.wikipedia.org/wiki/Graphics_pipeline){:.hvr-forward rel="nofollow" target="_blank"}
- [Computer graphics: Concepts and principles](https://en.wikipedia.org/wiki/Computer_graphics#Concepts_and_principles){:.hvr-forward rel="nofollow" target="_blank"}
- [Transformation matrix](https://en.wikipedia.org/wiki/Transformation_matrix){:.hvr-forward rel="nofollow" target="_blank"}
- [Rotation matrix](https://en.wikipedia.org/wiki/Rotation_matrix){:.hvr-forward rel="nofollow" target="_blank"}
- [Đại số tuyến tính](https://en.wikipedia.org/wiki/Linear_algebra){:.hvr-forward rel="nofollow" target="_blank"}
- [Phép nhân ma trận](https://en.wikipedia.org/wiki/Matrix_multiplication){:.hvr-forward rel="nofollow" target="_blank"}
- [Dot product (tích vô hướng)](https://en.wikipedia.org/wiki/Dot_product){:.hvr-forward rel="nofollow" target="_blank"}

### Challenge 5

#### Setup & Mục tiêu
- Point light: Inverse-square law (Luật nghịch đảo bình phương) nói rằng một vật lý định lượng là tỉ lệ nghịch với bình phương của khoảng cách từ nguồn đó đại lượng vật lí. Nguyên nhân cơ bản của điều này có thể được hiểu là sự pha loãng hình học tương ứng với bức xạ nguồn điểm vào không gian ba chiều.
- Tại sao mọi bộ phim đều có màu cam và xanh dương: Có vẻ hợp lý rằng, bất kể nó có nguồn gốc từ lý thuyết màu sắc hay không, màu cam và xanh lam hiện đã đạt đến mức “quy ước”. Dù tốt hơn hay tệ hơn, hãy tô màu phim của bạn theo cách này khiến nó thực sự giống một bộ phim.
- Three-point lighting: Bằng cách sử dụng ba vị trí riêng biệt, nhiếp ảnh gia có thể chiếu sáng đối tượng của ảnh (chẳng hạn như một người) theo ý muốn, đồng thời kiểm soát (hoặc loại bỏ hoàn toàn) bóng đổ và bóng đổ do ánh sáng trực tiếp tạo ra.
	- Key light: là ánh sáng đầu tiên và thường quan trọng nhất. Mục đích của đèn chính là làm nổi bật hình thức và kích thước của đối tượng nhưng không bắt buộc (hiệu ứng "Hình bóng" đơn màu - Silhouette)
		- Key light có thể là "cứng" (tập trung) hoặc "mềm" (khuếch tán), và tùy thuộc vào thiết lập mong muốn có thể được đặt ở các góc khác nhau so (30-60 độ) với đối tượng và Camera (0 độ).
		- Ngoài góc ngang, Key light có thể được đặt cao hoặc thấp tạo ra các hiệu ứng khác nhau (kinh dị, hài...). Vị trí thẳng đứng phổ biến nhất là ở góc 30° (tức là hơi cao hơn đường mắt, mũi không được đổ bóng lên môi).
	- Fill light: có thể được sử dụng để giảm độ tương phản của cảnh.
		- Lighting ratio (Tỷ lệ chiếu sáng): là tỷ lệ giữa Key light (K) và Fill light (F), tùy thuộc vào tỷ lệ sẽ có được các mức tương phản khác nhau.
	- Backlight (rim, hair, or shoulder light) giúp tạo cho đối tượng một viền ánh sáng, giúp tách đối tượng khỏi hậu cảnh và làm nổi bật các đường viền.
- Four-point lighting (Chiếu sáng bốn điểm): Ánh sáng nền được đặt phía sau (các) chủ thể, trên cao hoặc thấp so với mặt đất. nó chiếu sáng các yếu tố hậu cảnh, chẳng hạn như tường hoặc phong cảnh ngoài trời. Kỹ thuật này có thể được sử dụng để loại bỏ bóng đổ bởi các yếu tố tiền cảnh lên hậu cảnh hoặc để thu hút nhiều sự chú ý hơn đến hậu cảnh.

#### Reference
- [Tại sao mọi bộ phim đều có màu cam và xanh dương](https://priceonomics.com/why-every-movie-looks-sort-of-orange-and-blue/){:.hvr-forward rel="nofollow" target="_blank"}
- [Three Point Lighting - Đại học Washington](https://courses.cs.washington.edu/courses/cse458/05au/reading/3point_lighting.pdf){:.hvr-forward rel="nofollow" target="_blank"}
- [Color Hex Color Codes](https://www.color-hex.com/){:.hvr-forward rel="nofollow" target="_blank"}
- [Understand what colors mean](https://www.canva.com/learn/choose-right-colors-brand/){:.hvr-forward rel="nofollow" target="_blank"}