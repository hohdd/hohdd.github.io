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

{% msg warning Phím tắt <strong>"H"</strong> bị conflict với "Scence Visibility" > đổi <strong>Alt+H</strong> <i>là Toggle Visibility của GameObject</i>, "H" được dùng để Chuyển qua lại các chế độ chỉnh sửa Vertex, Edge và Face. (<strong>Edit > Shortcuts...</strong> để vào Shortcuts Manager) %}

| Key combination | Action
|:-|:-:|-:
| **G** | Chuyển đổi giữa chế độ chỉnh sửa Object và Element (hình học: Vertex, Edge và Face).
| **H** | Chuyển đổi giữa các chế độ Element (Vertex, Edge và Face).
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

## Tools vs. Actions

- **Tools**: Các công cụ cung cấp một môi trường phương thức nơi bạn có thể thực hiện các tác vụ phức tạp, chẳng hạn như tạo Meshe mới hoặc xác định các vết cắt chính xác trên Mesh hiện có.
- **Actions**: Hành động là những thay đổi ngay lập tức, chẳng hạn như chọn tất cả các mặt có một màu cụ thể hoặc tách một cạnh. Ngay khi bạn bắt đầu một hành động, ProBuilder sẽ thực hiện hành động đó. Ví dụ: *Grow Selection* là một hành động mà bạn bắt đầu từ menu, nút thanh công cụ hoặc phím tắt và nó sẽ kết thúc ngay lập tức.

Các **Actions** thường chỉ khả dụng ở các chế độ Chỉnh sửa (Edit modes) cụ thể, trong khi các **Tools** thường có sẵn ở tất cả các chế độ.

### Tools reference

#### Shape tool

Tạo một Mesh mới (***bắt đầu từ một hình dạng phổ biến***) với Shape component (**Probuilder Shape**) để xác định hình dạng nguyên thủy của Mesh (dựa trên các hình dạng nguyên thủy phổ biến, chẳng hạn như hình trụ *cylinders*, mái vòm *arches* và cầu thang *stairs*). Bạn xác định cùng một khung giới hạn cho tất cả các hình dạng gốc.

{% msg warning Có thể switch primitive shapes, tuy nhiên không khuyến khích vì phải reset hết các chỉnh sửa trên primitive shape cũ rồi Probuilder mới cho chuyển sang primitive shape khác! %}

![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/shape-tool.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
{% msg info Để xuất hiện panel <strong>Edit Shape</strong> trong ScenceView (<i class="w3-red">không cần thiết vì có thể sửa Shape Properties ngay trong Inspector</i>) phải click vào Edit Shape trong <strong>Inspector</strong>, sau đó có thể chọn hiển thị là <i>Panel hoặc Expand</i>. Snapping giúp đặt kích thước (bounds) chính xác hơn, ProBuilder sử dụng <strong>auto-snapping</strong> của Unity Editor. <i>Lưu ý: Tính năng <strong>auto-snapping</strong> chỉ khả dụng khi <strong>gizmo handle</strong> được đặt thành Toàn cầu (Global) trong bất kỳ phiên bản Unity nào.</i> %}

**Pivot**: Chọn xem bạn muốn ProBuilder tạo tay cầm xoay (pivot) của Lưới (Mesh) ở Góc đầu tiên (**First Corner**) của hộp giới hạn của hình dạng hay ở Trung tâm (**Center**) của nó. "*Góc đầu tiên*" là **nơi bạn nhấp vào lần đầu tiên** trong chế độ xem Cảnh để xác định hộp giới hạn. *Lưu ý: Thuộc tính này chỉ khả dụng khi bạn tạo hình.*

#### Poly Shape tool

Tạo một Mesh mới (***bắt đầu với hình dạng 2D và đẩy lên 3D***) với Poly Shape component (**Poly Shape**).

Vẽ 2D với các điểm (**điểm kiểm soát**), khi Enter, Probuilder sẽ nối điểm đầu với điểm cuối tạo thành hình 2D hoàn chỉnh làm nền, sau đó bạn sẽ kéo lên để xác định độ cao của khối 3D.<br>
Để chỉnh sửa Poly Shape vừa tạo xong thì click Edit Poly Share ở Inspector. Ở chế độ Edit, bạn có thể thay đổi vị trí các đỉnh (điểm kiểm soát của 2D), thêm đỉnh bằng cách Click và Kéo ở trên một cạnh (của 2D), tất nhiên bạn cũng có thể thay đổi độ cao của khối 3D khi đang Edit.<br>
![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/Experimental_PolyShapeInspector.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

{% msg warning <strong>Lưu ý</strong>: sau khi tạo Poly Shape có thể sử dụng các Tools và Actions khác để thao tác với Poly Shape, <strong>nếu bạn vô tình</strong> click vào Edit Poly Shape ở Inspector <strong>thì toàn bộ chỉnh sửa sẽ bị reset</strong>, lúc đó <strong>Ctrl+Z</strong> để hoàn tác. %}

{% msg info Bật hoặc tắt tùy chọn <strong>Flip Normals</strong> để chuyển đổi <i>xem Camera hiển thị bên trong hay bên ngoài của Lưới</i>. %}

#### Cut tool

Sử dụng công cụ Cut (***chỉ available trong Element Mode***) để **chia nhỏ các mặt Lưới** một cách chính xác. Để cắt một hình trên Lưới, bạn kích hoạt công cụ Cắt, cho phép bạn **xác định hình dạng cắt bằng các điểm**.

{% msg info Snapping là quan trọng khi làm việc với Cut Tool.<br>Trên các Cạnh, điểm Snap là màu vàng.<br>Trên Face, điểm Snap là màu Xanh lá cây. %}

{% msg danger ProBuilder hiển thị các cạnh màu đỏ dưới dạng cảnh báo trực quan nếu các điểm của bạn tạo ra một cạnh hoặc bề mặt không hợp lệ. Khi điều này xảy ra, hãy hoàn tác việc thêm từng điểm cho đến khi tất cả các cạnh trở lại màu xanh lam. %}

Khi bạn tạo một bề mặt mới, công cụ Cut sẽ tạo ra các cạnh bổ sung để tăng cường hình học. Tránh hợp nhất các mặt xung quanh để loại bỏ các cạnh thừa, vì điều này có thể dẫn đến các mặt bị thoái hóa và hình học bị hỏng.<br>![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/cut-tool-nomerge.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Action reference

**Lưu ý**: Tùy thuộc vào Chế độ chỉnh sửa (Edit Mode) mà Action có available hay không.

{% msg warning "Normals" là pháp tuyến face, hướng của Axis Z (Blue) sẽ vuông góc với Face, sẽ nhìn thấy Face nếu hướng DƯƠNG đi ra ngoài (so với Camera), ngược lại sẽ TRONG SUỐT. Plane Object là biểu hiện đơn giản của việc này. %}

{% msg info Giữ Ctrl khi Drag (kéo) hoặc Extrude (đùn) để Snapping %}

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Edge_Bevel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Bevel (Edge) Góc xiên
- **Edit Mode**: Edges
- **Công dụng**: chia (các) cạnh đã chọn thành hai cạnh, với một mặt mới ở giữa.
- **Note**: Chỉnh sửa Distance (option của Bevel) trước khi thực hiện action.
- **Phím tắt**: N/A (Tools > ProBuilder > Geometry > Bevel Edges)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Edge_Bevel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Bevel (Face) Góc xiên
- **Edit Mode**: Faces
- **Công dụng**: thực hiện **hành động Bevel Edge** trên tất cả các cạnh của (các) mặt được chọn.
- **Note**: Chỉnh sửa Distance (option của Bevel) trước khi thực hiện action.
- **Phím tắt**: N/A (Tools > ProBuilder > Geometry > Bevel Edges)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Edge_Bridge.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Bridge Edges (Edge)
- **Edit Mode**: Edges (phải chọn 2 Cạnh)
- **Công dụng**: tạo ra một **bề mặt mới** giữa hai cạnh được chọn.
- **Note**: Theo mặc định, hành động này chỉ có thể kết nối hai cạnh mở (nghĩa là không có mặt nào ở mặt mở hoặc mặt tự do).
- **Phím tắt**: Alt/Opt+B (Tools > ProBuilder > Geometry > Bridge Edges)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/CenterPivot.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Center Pivot (Object)
- **Edit Mode**: Object
- **Công dụng**: di chuyển điểm xoay (Pivot) của Lưới đến giữa đường viền của đối tượng.
- **Note**: Nếu bạn có nhiều đối tượng được chọn, tất cả các đối tượng sẽ tự áp dụng riêng cho nó.
- **Phím tắt**: N/A (Tools > ProBuilder > Object > Center Pivot)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Vert_Collapse.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Collapse Vertices (Vertex)
- **Edit Mode**: Vertex (đỉnh, điểm) Thu gọn các đỉnh
- **Công dụng**: thu gọn tất cả các đỉnh được chọn về một điểm duy nhất, bất kể khoảng cách.
- **Note**: ProBuilder sử dụng tùy chọn **Collapse To First** để quyết định thu gọn các đỉnh về **điểm trung tâm** hay đến **đỉnh được chọn đầu tiên**. (mặc định **Collapse To First** không được chọn, nghĩa là sẽ thu gọn về **điểm TRUNG TÂM**)
- **Phím tắt**: Alt/Opt+C (Tools > ProBuilder > Geometry > Collapse Vertices)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Face_ConformNormals.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Conform Normals (Faces) Pháp tuyến Phù hợp
- **Edit Mode**: Faces
- **Công dụng**: đặt tất cả các normals (pháp tuyến face, gizmo shows) trên (các) mặt được chọn theo cùng một hướng tương đối (dựa trên hướng **đông hơn** của các mặt được chọn).
- **Note**: Trục Z (Blue) hướng ra ngoài thì sẽ thất mặt (**giống Plane**), ngược lại sẽ TRONG SUỐT, nếu muốn chọn thì phải ra phía sau.
- **Phím tắt**: N/A (Tools > ProBuilder > Geometry > Conform Face Normals)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Object_ConformNormals.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Conform Normals (Objects) Pháp tuyến Phù hợp
- **Edit Mode**: Objects
- **Công dụng**: đặt tất cả các **face normals** trên đối tượng được chọn theo cùng một hướng tương đối (dựa hướng **đông hơn** của tất cả các mặt tạo thành Object).
- **Note**: Trục Z (Blue) hướng ra ngoài thì sẽ thất mặt (**giống Plane**), ngược lại sẽ TRONG SUỐT, nếu muốn chọn thì phải ra phía sau.
- **Phím tắt**: N/A (Tools > ProBuilder > Geometry > Conform Face Normals)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Edge_Connect.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Connect Edges (Edges) Kết nối các cạnh
- **Edit Mode**: Edges
- **Công dụng**: chèn **một hoặc nhiều cạnh** để **kết nối tâm** của mỗi cạnh được chọn.
- **Note**: Probuilder sẽ TẠO MỚI 1 (nếu có 2 trung điểm) hoặc nhiều Cạnh (nhiều trung điểm), 1:Tạo trung điểm > 2:Nối các trung điểm
- **Phím tắt**: Alt/Opt+E (Tools > ProBuilder > Selection > Smart Connect)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Edge_Connect.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Connect Vertices (Vertices) Kết nối các đỉnh
- **Edit Mode**: Vertices
- **Công dụng**: tạo ra một **cạnh mới** kết nối các đỉnh đã chọn.
- **Note**: Probuilder sẽ tạo thêm các Cạnh mới và Đỉnh mới để "Neo/Chằng" các đỉnh bạn đã chọn một cách phù hợp mà vẫn đảm bảo hình học hợp lệ.
- **Phím tắt**: Alt/Opt+E (Tools > ProBuilder > Selection > Smart Connect)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Face_Delete.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Delete Faces (Faces) Xóa Face
- **Edit Mode**: Faces
- **Công dụng**: Xóa Faces đang được chọn
- **Note**: Bản chất là **Delete Faces** sẽ thay thế các mặt đang được chọn.
- **Phím tắt**: **Backspace** *trên Win* hoặc **Delete** *trên macOS* (Tools > ProBuilder > Geometry > Delete Faces)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Face_Detach.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Detach Faces (Faces) Tách Face
- **Edit Mode**: Faces
- **Công dụng**: tách (các) mặt đã chọn khỏi phần còn lại của Lưới.
- **Note**: Các mặt được Detach sẽ **tạo thành một GameObject mới** tách biệt với Object cũ (Mặc định, nếu muốn là Sub-Mesh thay vì GameObject thì thay đổi *Detach Face Options*). Tất nhiên các mặt trên Object cũ sẽ trở thành **Delete Faces**
- **Phím tắt**: N/A (Tools > ProBuilder > Geometry > Detach Faces)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Face_Duplicate.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Duplicate Faces (Faces) Nhân bản Face
- **Edit Mode**: Faces
- **Công dụng**: sao chép từng Face đã chọn và tạo Lưới mới. (*giống Detach Faces nhưng không delete Faces*)
- **Note**: tùy thuộc vào tùy chọn mặc định, Lưới mới sẽ là GameObject mới (default) hoặc Sub-Mesh.
- **Phím tắt**: N/A (Tools > ProBuilder > Geometry > Duplicate Faces)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Object_Export.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Export (Object) Xuất sang các định dạng khác
- **Edit Mode**: Object
- **Công dụng**: xuất (các) đối tượng ProBuilder đã chọn sang tệp Mô hình 3D.
- **Note**: Các tùy chọn có sẵn tùy thuộc vào định dạng bạn chọn để Export: Copy Textures, Right Handed, Quads...
- **Phím tắt**: N/A (Tools > ProBuilder > Export > *Export format*)

#### ![TEXT](https://docs.unity3d.com/Packages/com.unity.probuilder@5.1/manual/images/icons/Edge_Extrude.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} Extrude Edges (Edges) Đùn cạnh
- **Edit Mode**: Edges
- **Công dụng**: đẩy một cạnh mới ra khỏi mỗi cạnh được chọn, được kết nối bằng một mặt mới cho mỗi cạnh. Hành động này chỉ hoạt động trên các cạnh mở (nghĩa là một cạnh không có mặt được kết nối ở một bên). Tuy nhiên, bạn có thể ghi đè hạn chế này bằng tùy chọn Allow non-manifold actions.
- **Note**: Hãy chọn các Cạnh sao cho Hướng Đùn nên vuông góc "tương đối" với các Cạnh. **Giữ Shift và Đùn theo hướng Axis**.
- **Phím tắt**: Ctrl/Cmd+E (Tools > ProBuilder > Geometry > Extrude)

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO

#### ![TEXT](URL){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} AAAAAAAAAAAA
- **Edit Mode**: AAA
- **Công dụng**: BBB
- **Note**: CCC
- **Phím tắt**: TODO