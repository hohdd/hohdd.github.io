---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Blender Modeling Operators"
description: "Blender Modeling Operators"

### HUMAN
header: "Blender Modeling Operators"
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
## [Operators (Editing)](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/index.html){:.external.hvr-forward rel="nofollow" target="_blank"}
- Accessing Mesh Operators:
    - **Ctrl-F**{:.w3-yellow}: hiển thị menu Toán tử **F**aces
    - **Ctrl-E**{:.w3-yellow}: hiển thị menu toán tử **E**dge
    - **Ctrl-V**{:.w3-yellow}: hiển thị menu toán tử **V**ertex

### Mesh Operators
- Transform:
    - Move, Rotate, Scale:
        - Mode: Edit Mode
        - Tool: Toolbar ‣ Move, Rotate, Scale
        - Menu: **Mesh** ‣ Transform ‣ Move, Rotate, Scale
        - Shortcut: **G, R, S**{:.w3-text-red}
    - To Sphere:
        - Mode: *Object* and *Edit Modes*
        - Menu: **Mesh** ‣ Transform ‣ To Sphere
        - Shortcut: **Shift-Alt-S**{:.w3-text-red}
        - Phép biến đổi To Sphere sẽ tạo ra các kết quả khác nhau tùy thuộc vào số lượng và cách sắp xếp các phần tử đã được chọn.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_to-sphere_other-spherical.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Shear:
        - Mode: Object and Edit Mode
        - Tool: Toolbar ‣ Shear
        - Menu: **Object/Mesh/Curve/Surface** ‣ Transform ‣ Shear
        - Shortcut: **Shift-Ctrl-Alt-S**{:.w3-text-red}
        - Độ lớn của biến đổi Shear được áp dụng cho các phần tử đã chọn tỷ lệ thuận với khoảng cách từ trục hoành. tức là nó càng xa trục thì chuyển động càng lớn.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_shear_mesh.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Bend (bẻ cong):
        - Mode: Object and Edit Modes
        - Menu: **Object/Mesh/Curve/Surface** ‣ Transform ‣ Bend
        - Shortcut: **Shift-W**{:.w3-text-red}
        - Công cụ này xoay một dòng gồm các phần tử đã chọn tạo thành một vòng cung giữa con trỏ chuột và con trỏ 3D. Bạn có thể xoay góc uốn bằng nhiều góc quay có khả năng tạo thành hình xoắn ốc. <br><![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_bend_example-usage.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}>
    - Push/Pull:
        - Mode: Object and Edit Modes
        - Tool: Toolbar ‣ Shrink/Flatten ‣ Push/Pull
        - Menu: **Object/Mesh** ‣ Transform ‣ Push/Pull
        - Usage: Đẩy/Kéo sẽ di chuyển các phần tử đã chọn (đối tượng, đỉnh, cạnh hoặc mặt) lại gần nhau hơn (Đẩy) hoặc xa hơn (Kéo). Cụ thể, mỗi phần tử được di chuyển về phía hoặc ra xa tâm một khoảng cách như nhau. Khoảng cách này được điều khiển bằng cách di chuyển chuột lên (Push) hoặc xuống (Pull), nhập số hoặc thông qua điều khiển thanh trượt.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_push-pull_vertices.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Warp (làm cong):
        - Mode: Edit Modes
        - Menu: Object/Mesh/Curve/Surface ‣ Transform ‣ Warp
        - Usage: Phép biến đổi Warp lấy các phần tử đã chọn và làm cong chúng xung quanh con trỏ 3D theo một góc nhất định. Lưu ý rằng phép biến đổi này luôn phụ thuộc vào vị trí của con trỏ 3D. Điểm Pivot không được tính đến. Kết quả của quá trình chuyển đổi Warp cũng phụ thuộc vào chế độ xem.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_warp_view-4.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Randomize:
        - Mode: Edit Mode
        - Menu: Mesh ‣ Transform ‣ Randomize
        - Công cụ Randomize trong Chế độ chỉnh sửa cho phép bạn dịch chuyển các đỉnh của lưới dọc theo đường pháp tuyến (normal) của chúng.
    - Shrink Fatten (giảm béo):
        - Mode: Edit Mode
        - Tool: Toolbar ‣ Shrink/Fatten
        - Menu: Mesh ‣ Transform ‣ Shrink Fatten
        - Shortcut: **Alt-S**{:.w3-text-red}
        - Công cụ này di chuyển các đỉnh/cạnh/mặt đã chọn dọc theo pháp tuyến của chính chúng (vuông góc với mặt), mà trên “mắt lưới thông thường tiêu chuẩn”, sẽ co lại/vỗ béo chúng.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_shrink-fatten_inflate-positive.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_shrink-fatten_inflate-negative.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Skin Resize:
        - Mode: Edit Mode
        - Menu: Mesh ‣ Transform ‣ Skin Resize
        - Shortcut: **Ctrl-A**{:.w3-text-red}
        - Công cụ này được sử dụng để đặt bán kính da (**skin radius**) trên mỗi đỉnh khi sử dụng **Skin Modifier**.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_skin_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Mirror:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Mirror
    - Shortcut: **Ctrl-M**{:.w3-text-red}
    - Usage: Công cụ Mirror phản chiếu vùng chọn trên một trục đã chọn.
- Duplicate:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Duplicate
    - Shortcut: **Shift-D**{:.w3-text-red}
    - Usage: Công cụ này chỉ đơn giản là sao chép các phần tử đã chọn mà không tạo bất kỳ kết nối nào.
- Extrude:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Extrude
    - Shortcut: **Alt-E**{:.w3-text-red} (nhiều tùy chọn để Extrude, trong đó có **Spin**{:.w3-yellow}...)
    - Usage: Các toán tử được hiển thị trong menu này phụ thuộc vào phần nào của lưới hiện được chọn. Nhiều toán tử cũng có sẵn trong các menu Vertex, Edge, Face.
- Merge:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Merge, Context Menu ‣ Merge
    - Shortcut: **M**{:.w3-text-red}
    - Usage: Công cụ này cho phép bạn hợp nhất tất cả các đỉnh đã chọn thành một đỉnh duy nhất. Bạn có thể chọn vị trí của đỉnh còn lại trong menu công cụ này bật lên trước khi thực hiện: At Center, At Cursor, Collapse, At First, At Last.
- Split:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Split
    - Shortcut: **Alt-M**{:.w3-text-red}
    - Usage: Split (tách) sẽ hiện menu để có tùy chọn Tách
        - Selection: Tách (ngắt kết nối) vùng chọn khỏi phần còn lại của lưới. Cạnh viền của bất kỳ phần tử nào không được chọn sẽ được nhân đôi.
        - Faces by Edges (Mặt theo Cạnh): Faces by Edges tương tự như **Rip tool**. Khi hai hoặc nhiều cạnh trong chạm vào nhau hoặc một cạnh viền được chọn, một lỗ sẽ được tạo và các cạnh được chọn sẽ được nhân đôi để tạo thành đường viền của lỗ.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_split_edges-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
        - Faces & Edges by Vertices (Mặt và Cạnh theo Đỉnh): Thao tác này có chức năng tương tự như tách thủ công tất cả các mặt và cạnh khỏi một đỉnh.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_split_faces-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Separate:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Separate
    - Shortcut: **P**{:.w3-text-red}
    - Usage: Đến một lúc nào đó, bạn sẽ cần phải cắt các phần ra khỏi lưới để tách rời. Để tách một đối tượng, các đỉnh (hoặc các mặt) phải được chọn rồi tách ra, mặc dù có một số cách khác nhau để thực hiện việc này.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_separate_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
        - Selection: Tách các phần tử được chọn.
        - By Material: Tách các mảnh dựa trên vật liệu được gán cho các mặt khác nhau.
        - By Loose Parts: Tạo một đối tượng cho mỗi đoạn độc lập (đã ngắt kết nối) của lưới ban đầu.
- Join:
    - Mode: Object Mode
    - Menu: Object ‣ Join
    - Shortcut: **Ctrl-J**
    - Usage: hợp nhất tất cả các đối tượng đã chọn vào đối tượng Hoạt động được chọn cuối cùng. Tất cả dữ liệu đối tượng được liên kết với đối tượng đang hoạt động (phải được chọn). Tất cả các đối tượng phải cùng loại: lưới, đường cong, bề mặt hoặc phần ứng. Nếu một số đường cong được nối với nhau, mỗi đường cong sẽ giữ kiểu con của nó (NURBS hoặc Bézier).
    - Note:
        - Dữ liệu đối tượng có nhiều thuộc tính có thể được xử lý khi Join.
        - Vật liệu, nhóm đỉnh, lớp UV và Vertex sẽ được hợp nhất.
        - Các Modifiers, constraints, nhóm và mối quan hệ cha mẹ bị bỏ qua khi tham gia và sẽ không được áp dụng cho đối tượng đang hoạt động.
- Bisect:
    - Mode: Edit Mode
    - Tool: Toolbar ‣ Knife ‣ Bisect
    - Menu: Mesh ‣ Bisect
    - Usage:
        - Công cụ Bisect là một cách nhanh chóng để cắt lưới làm đôi dọc theo một mặt phẳng tùy chỉnh.
        - Clear Inner sẽ bỏ phần dưới. Clear Outer sẽ bỏ phần trên.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_bisect_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Knife Project:
    - Mode: Edit Mode
    - Menu: Mesh ‣ Knife Project
    - Usage:
        - Phép chiếu dao là một công cụ không tương tác, trong đó bạn có thể sử dụng các đối tượng để cookie-cut thành một hoặc nhiều mắt lưới thay vì vẽ đường bằng tay.
        - Đường viền của các đối tượng đã chọn không ở Chế độ chỉnh sửa được sử dụng để cắt các mắt lưới dọc theo trục xem của các đối tượng ở Chế độ chỉnh sửa. Sau đó, hình học thu được bên trong đường viền của dao cắt sẽ được chọn. Các đường viền có thể là khung dây hoặc các cạnh ranh giới (tức là các cạnh không được kết nối của lưới), cũng như các đối tượng Đường cong.
        - Hãy nhớ rằng Knife Project hoạt động theo quan điểm của chế độ xem hiện tại. Để có kết quả tốt nhất, hãy đảm bảo xoay chế độ xem của bạn đến chính xác vị trí bạn yêu cầu trước khi sử dụng công cụ này. Các chế độ xem chính tả như Right, Front và Top thường được sử dụng để có kết quả dễ dự đoán hơn.
        - Nếu muốn chiếu cắt xuyên vật thể thì chọn "**Cut Through**"<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_knife-project_text-after.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Knife Topology Tool
    - Mode: Edit Mode
    - Tool: Toolbar ‣ Knife
    - Menu: Mesh ‣ Knife Topology Tool
    - Shortcut: **K**{:.w3-text-red}
    - Usage: Công cụ Knife có thể được sử dụng để chia nhỏ (cắt) hình học một cách tương tác bằng cách vẽ các đường hoặc vòng khép kín để tạo lỗ.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_tools_knife_line-active.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Convex Hull
    - Mode: Edit Mode
    - Menu: Mesh ‣ Convex Hull
    - Usage: Toán tử Convex Hull lấy một đám mây điểm làm đầu vào và xuất ra một bao lồi (convex hull) bao quanh các đỉnh đó. Nếu đầu vào chứa các cạnh hoặc mặt nằm trên bao lồi thì chúng cũng có thể được sử dụng trong đầu ra. Toán tử này cũng có thể được sử dụng như một công cụ cầu nối.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_convex-hull_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Symmetrize
    - TODO: [link](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/symmetrize.html){:.external.hvr-forward rel="nofollow" target="_blank"}

### Face Operators
### UV Operators