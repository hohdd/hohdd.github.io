---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu Probuilder
description: Tìm hiểu Probuilder

### HUMAN
header: Tìm hiểu Probuilder
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

## Packages > Probuilder

Mỗi button trên thanh toolbar đều có chú giải (tooltip) hiển thị bản tóm tắt ngắn gọn về cách sử dụng nó. Xem chú giải là một cách tuyệt vời để bắt đầu tìm hiểu về chức năng của ProBuilder.

## Tổng quan

### Xây dựng và chỉnh sửa các Mesh phức tạp

ProBuilder Meshes hoạt động giống như GameObject thông thường trong Unity. Bạn có thể áp dụng các giá trị Transform cho chúng và thêm các Component cho chúng. 
ProBuilder Meshes phản ứng với hệ thống vật lý và bạn có thể tạo hoạt ảnh (animation) cho chúng cũng như đính kèm tập lệnh vào để điều khiển chúng. Tuy nhiên, Unity Meshes tiêu chuẩn không giống với ProBuilder Meshes: bạn không thể chỉnh sửa chúng bằng các công cụ ProBuilder cho đến khi bạn chuyển đổi chúng ({% tooltip ProBuilderize [Công cụ ProBuilderize chuyển đổi (các) đối tượng đã chọn thành các đối tượng có thể chỉnh sửa ProBuilder.] %}) thành đối tượng ProBuilder.<br>
![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@4.0/manual/images/PBvsUnityMeshes.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Cách phổ biến nhất để xây dựng ProBuilder Mesh là tạo và chỉnh sửa nó hoàn toàn bằng các công cụ ProBuilder.

<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">Tips: Cách phân biệt một GameObject là <strong>Unity Mesh</strong> hay <strong>Probuilder Mesh</strong> là component <strong>Mesh Filter vs Probuilder MeshFilter</strong>.<br>Ngoài ra, khi chọn Object các lưới đen của Probuilder sẽ xuất hiện (Unity thì không) và tùy theo Selection Mode hiện tại mà có thể Nhấn hoặc Kéo (Click or Drag) phần tử (Element) của GameObject</div>

### Áp dụng Materials và Màu sắc của Vertex

Bạn có thể áp dụng bất kỳ Material nào cho ProBuilder Meshes bằng Material Palette, trên các mặt được chọn ở {% tooltip Element mode (chế độ Phần tử) [Sử dụng thanh công cụ Chế độ chỉnh sửa để chuyển đổi giữa bốn chế độ Chỉnh sửa ProBuilder: Object, Vertex, Edge, Face. (Các chế độ Vertex, Edge và Face còn được gọi chung là chế độ Phần tử)] %} hoặc trên toàn bộ đối tượng.<br>![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@4.0/manual/images/material-tools-palette.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Bạn cũng có thể áp dụng {% tooltip Vertex colors [Áp dụng màu đỉnh là một cách tuyệt vời để tô màu các cấp độ cho nguyên mẫu, bố cục nhóm, vùng, v.v. Bạn có thể áp dụng các màu đỉnh duy nhất cho các khuôn mặt hoặc đối tượng để dễ dàng xác định nơi chúng bắt đầu và kết thúc. Bạn cũng có thể áp dụng màu đỉnh cho các đỉnh và cạnh để tạo hiệu ứng hình ảnh.] %} cho Mesh trong khi vẫn đang xây dựng hình học (geometry). Điều này có thể giúp dễ dàng xác định các phần của Lưới phức tạp, chẳng hạn như sàn nhà hoặc cung cấp một chút màu sắc.<br>![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@4.0/manual/images/VertexColors_bymodes.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Editing UVs

ProBuilder cung cấp {% tooltip automatic UV unwrapping [Chế độ Auto UV cung cấp các công cụ sau để giúp bạn lập bản đồ kết cấu (texture mapping): Tiling & Alignment section, Transform tools, Special section, Texture Groups section, Reset UVs] %} và một {% tooltip manual UV editor [Chế độ Manual UV Mode cung cấp các công cụ sau để giúp bạn lập bản đồ kết cấu: Project UVs section, Selection section, Edit section] %} hoàn chỉnh.<br>![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@4.0/manual/images/UV_AutoActions.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Auto UV mode** cho phép bạn điều chỉnh những điều cơ bản như offset, tiling (xếp lớp) và rotation (xoay), trong khi ProBuilder tự động xử lý công việc UV phức tạp.
- **Manual UV mode** cho phép bạn kiểm soát hoàn toàn tia UV. Với quy trình làm việc này, bạn có thể bố trí bản đồ UV của mình một cách chính xác.

### Export sang các định dạng formats khác

Bạn cũng có thể xuất **ProBuilder Meshes** sang một số định dạng tệp, chẳng hạn như **{% tooltip .asset [Định dạng Unity Asset, chỉ có thể đọc được trong Unity] %}**, **{% tooltip .obj [Wavefront OBJ. Đây là một định dạng mô hình được hỗ trợ rộng rãi. Nó hỗ trợ nhiều nhóm Textures và Mesh] %}**, **{% tooltip .stl [Một định dạng được hỗ trợ rộng rãi, thường được sử dụng trong phần mềm CAD hoặc in 3D. Nó chỉ hỗ trợ hình học Tam giác (Triangle geometry)] %}** và **{% tooltip .ply [Stanford PLY. Nói chung được hỗ trợ và rất mở rộng. Nó hỗ trợ các màu tứ giác (quads) và đỉnh (vertex), nhưng không hỗ trợ multiple Materials] %}**. Tuy nhiên, ngay sau khi bạn chuyển đổi ProBuilder Mesh sang định dạng **.asset**, nó sẽ trở thành Unity GameObject thông thường và bạn cần {% tooltip ProBuilderize [Công cụ ProBuilderize chuyển đổi (các) đối tượng đã chọn thành các đối tượng có thể chỉnh sửa ProBuilder.] %} để chuyển đổi sang **ProBuilder Meshes** và tiếp tục chỉnh sửa.

## Edit modes (Object vs Element)

ProBuilder sử dụng chế độ Chỉnh sửa (**Edit modes**) để xác định nội dung bạn đang chọn và chỉnh sửa.<br>![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/ExampleImage_ObjectAndElementEditingModes.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Vertex**: (*Element*) là điểm mà hai hoặc nhiều góc gặp nhau (ví dụ: trên một hình lập phương, đó là điểm góc của mỗi hình lập phương).
- **Edge**: (*Element*) được tạo thành từ hai đỉnh (Vertex).
- **Face**: (*Element*) bao gồm ba Cạnh (Edge) trở lên.
- **Object**: (*Mesh*) là tổng của tất cả các phần này.
- **Element modes**: (*Vertices, Edges, and Faces*) cho phép bạn chọn và sửa đổi các thành phần riêng lẻ của hình học tạo nên một Mesh (**Object**) là Đỉnh, Cạnh và Mặt.

## Tools vs. Actions

- **Tools**: Các công cụ cung cấp một môi trường phương thức nơi bạn có thể thực hiện các tác vụ phức tạp, chẳng hạn như tạo Meshe mới hoặc xác định các vết cắt chính xác trên Mesh hiện có.
- **Actions**: Hành động là những thay đổi ngay lập tức, chẳng hạn như chọn tất cả các mặt có một màu cụ thể hoặc tách một cạnh. Ngay khi bạn bắt đầu một hành động, ProBuilder sẽ thực hiện hành động đó. Ví dụ: *Grow Selection* là một hành động mà bạn bắt đầu từ menu, nút thanh công cụ hoặc phím tắt và nó sẽ kết thúc ngay lập tức.

Các **Actions** thường chỉ khả dụng ở các chế độ Chỉnh sửa (Edit modes) cụ thể, trong khi các **Tools** thường có sẵn ở tất cả các chế độ.

### Tools reference

### Shape tool

Tạo một Mesh mới với Shape component để xác định hình dạng nguyên thủy của Mesh (dựa trên các hình dạng nguyên thủy phổ biến, chẳng hạn như hình trụ *cylinders*, mái vòm *arches* và cầu thang *stairs*). Bạn xác định cùng một khung giới hạn cho tất cả các hình dạng gốc.

{% msg warning Có thể switch primitive shapes, tuy nhiên không khuyến khích vì phải reset hết các chỉnh sửa trên primitive shape cũ rồi Probuilder mới cho chuyển sang primitive shape khác! %}

![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/shape-tool.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
{% msg info Để xuất hiện panel <strong>Edit Shape</strong> trong ScenceView phải click vào Edit Shape trong <strong>Inspector</strong>, sau đó có thể chọn hiển thị là <i>Panel hoặc Expand</i>. Snapping giúp đặt kích thước (bounds) chính xác hơn, ProBuilder sử dụng <strong>auto-snapping</strong> của Unity Editor. <i>Lưu ý: Tính năng <strong>auto-snapping</strong> chỉ khả dụng khi <strong>gizmo handle</strong> được đặt thành Toàn cầu (Global) trong bất kỳ phiên bản Unity nào.</i> %}

Trong **Shape Properties** có những lựa chọn quan trọng sau:
- **Pivot**: Chọn xem bạn muốn ProBuilder tạo tay cầm xoay (pivot) của Lưới (Mesh) ở Góc đầu tiên (**First Corner**) của hộp giới hạn của hình dạng hay ở Trung tâm (**Center**) của nó. "*Góc đầu tiên*" là **nơi bạn nhấp vào lần đầu tiên** trong chế độ xem Cảnh để xác định hộp giới hạn. *Lưu ý: Thuộc tính này chỉ khả dụng khi bạn tạo hình.*