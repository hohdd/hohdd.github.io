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
collection: Blender # this for AMP related post
### category: dùng để group collection
category: Blender

### highlight_text
highlight_text: true
highlight_yellow: "đơn giản hóa, Đơn giản hóa, Đơn Giản Hóa"

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
        - Công cụ này xoay một dòng gồm các phần tử đã chọn tạo thành một vòng cung giữa con trỏ chuột và con trỏ 3D. Bạn có thể xoay góc uốn bằng nhiều góc quay có khả năng tạo thành hình xoắn ốc. <br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_transform_bend_example-usage.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
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
    - Mode: Edit Mode
    - Menu: Mesh ‣ Symmetrize
    - Usage: Công cụ Symmetrize là một cách nhanh chóng để tạo lưới đối xứng (*giống Mirror*). Đối xứng hoạt động bằng cách cắt lưới tại điểm xoay của đối tượng và phản chiếu hình học theo trục đã chỉ định và hợp nhất hai nửa lại với nhau (nếu chúng được kết nối). Ngoài ra, dữ liệu lưới được sao chép từ bên này sang bên kia: ví dụ: UV, thuộc tính màu sắc, trọng lượng đỉnh.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_symmetrize_example-2.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Snap to Symmetry
    - Mode: Edit Mode
    - Menu: Mesh ‣ Snap to Symmetry
    - Usage:
        - Công cụ Snap to Symmetry cho phép bạn đính các đỉnh lưới vào các đỉnh lân cận được phản chiếu của chúng.
        - Hữu ích khi xử lý các mắt lưới hầu hết là đối xứng nhưng có các đỉnh đã được di chuyển đủ để Blender không phát hiện ra chúng là được mirrored (ví dụ: khi tùy chọn X Mirror được bật). Điều này có thể xảy ra do vô tình khi chỉnh sửa mà không bật X Mirror. Đôi khi các mô hình được nhập từ các ứng dụng khác không đối xứng đến mức máy nhân bản cũng bị lỗi.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_snap-symmetry_after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Normals
    - Flip:
        - Mode: Edit Mode
        - Menu: Mesh ‣ Normals ‣ Flip
        - Usage: Điều này sẽ đảo ngược hướng Normals của tất cả các mặt được chọn.
    - Recalculate:
        - Mode: Edit Mode
        - Menu: *Mesh ‣ Normals ‣ Recalculate Outside* and *Mesh ‣ Normals ‣ Recalculate Inside*
        - Shortcut: **Shift-N**{:.w3-text-red} and **Shift-Ctrl-N**{:.w3-text-red}
        - Usage: Các công cụ này sẽ tính toán lại Normal của các mặt được chọn để chúng hướng ra ngoài (tương ứng vào bên trong) thể tích (volume) mà mặt đó thuộc về.
    - Set from Faces:
        - Mode: Edit Mode
        - Menu: Mesh ‣ Normals ‣ Set from Faces
        - usage: Đặt pháp tuyến tùy chỉnh (custom normals) ở các góc giống với pháp tuyến của khuôn mặt mà góc là một phần của nó.
    - Rotate:
        - Mode: Edit Mode
        - Menu: Mesh ‣ Normals ‣ Rotate
        - Shortcut: **R N**
        - Usage: Đây là một công cụ tương tác. Khi bạn di chuyển chuột xung quanh, các Normals đã chọn sẽ được xoay. Bạn cũng có thể gọi công cụ Rotate Normals bằng cách nhấn phím biến đổi Xoay R, sau đó là N.
    - Operator khác thuộc nhóm Normal:
        - Point to Target: Tất cả các Normals đã chọn được đặt để trỏ từ đỉnh của chúng tới mục tiêu (target).
        - Merge: Hợp nhất tất cả các pháp tuyến tại các đỉnh đã chọn, tạo một pháp tuyến trung bình cho tất cả các mặt.
        - Split: Chia các pháp tuyến ở tất cả các đỉnh đã chọn sao cho có các pháp tuyến riêng biệt cho mỗi mặt, hướng cùng hướng với các mặt đó.
        - Average: Tính trung bình tất cả các normals  trong mỗi hình quạt của các mặt giữa các sharp edges ở một đỉnh.
        - Copy Vectors: Nếu một pháp tuyến duy nhất được chọn, hãy sao chép nó vào bộ đệm vectơ nội bộ.
        - Paste Vectors: Thay thế các giá trị pháp tuyến đã chọn bằng giá trị pháp tuyến trong bộ đệm vectơ nội bộ.
        - Smooth Vectors: Điều chỉnh các pháp tuyến để đưa chúng đến gần hơn với các pháp tuyến đỉnh liền kề của chúng.
        - Reset Vectors: Đặt các pháp tuyến trở lại tính toán mặc định của các pháp tuyến.
        - Select by Face Strength: Ý tưởng là Công cụ sửa đổi normals có trọng số có thể được đặt để chú ý đến Face Strength như sau: Khi kết hợp các pháp tuyến gặp nhau tại một đỉnh, chỉ những Face có Face Strength mạnh nhất mới đóng góp vào giá trị cuối cùng.
        - Set Face Strength: Sử dụng menu con để chọn một trong các Weak, Medium, Strong. Sau đó, công cụ này thay đổi Face Strength của các bề mặt hiện được chọn.
- Shading
    - Mode: Edit Mode
    - Menu: Mesh ‣ Shading
    - Usage: Khi lưới ở Chế độ chỉnh sửa, chỉ những mặt được chọn mới nhận được thuộc tính "smoothing". Bạn có thể đặt các mặt là phẳng (flat, loại bỏ thuộc tính “smoothing”) theo cách tương tự bằng cách chọn các cạnh và chọn Shade Flat từ Menu Face.
- Set Attribute
    - Mode: Edit Mode
    - Menu: Mesh ‣ Set Attribute
    - Usge:
        - Đặt giá trị của Thuộc tính hoạt động cho phần tử đã chọn. “Thuộc tính hoạt động” (Active attribute) ở đây có nghĩa là thuộc tính hiện được chọn trong danh sách Thuộc tính.
        - Các giá trị thuộc tính có thể được xem trong trình chỉnh sửa Bảng tính (Spreadsheet editor).
- Sort Elements
    - Mode: Edit Mode
    - Menu: Mesh ‣ Sort Elements…
    - Usge:
        - Công cụ này (có sẵn từ menu ngữ cảnh, menu Vertices, Edges và Faces) cho phép bạn sắp xếp lại các phần tử lưới đã chọn phù hợp, theo nhiều phương pháp khác nhau.
        - Lưu ý rằng khi được gọi từ menu ngữ cảnh, các loại phần tử bị ảnh hưởng giống như các chế độ chọn đang hoạt động.
- Clean Up: Những công cụ này giúp làm sạch hình học suy biến (degenerate geometry) và điền vào các vùng còn thiếu của lưới.
    - Decimate Geometry: Công cụ Hình học Decimate cho phép bạn giảm số đỉnh/mặt của lưới với những thay đổi hình dạng tối thiểu.
    - Fill Holes:
        - Công cụ này có thể thực hiện một vùng lựa chọn lớn và phát hiện các lỗ trên lưới, điền chúng vào.
        - Điều này khác với toán tử tạo khuôn mặt (face creation operator) ở ba khía cạnh quan trọng:
            - Các lỗ được phát hiện nên không cần phải tìm và chọn thủ công các cạnh xung quanh lỗ.
            - Các lỗ có thể có giới hạn về số cạnh (vì vậy chỉ có tứ giác hoặc tris được điền vào chẳng hạn).
            - Dữ liệu lưới được sao chép từ hình học xung quanh (UV, Thuộc tính màu, nhiều độ phân giải, tất cả các lớp), vì việc tạo dữ liệu này theo cách thủ công rất tốn thời gian.
    - Make Planar Faces: Công cụ Make Planar Faces lặp đi lặp lại làm phẳng các bề mặt. Điều này có thể xảy ra với các mặt trên ba đỉnh và thông thường các mặt phải được giữ phẳng.
    - Split Non-Planar Faces: Công cụ này tránh các vùng hình học không rõ ràng bằng cách tách các mặt không phẳng khi chúng bị uốn cong vượt quá giới hạn nhất định.
    - Split Concave Faces: Công cụ này có thể được sử dụng để chuyển đổi bất kỳ Mặt lõm nào thành mặt lồi bằng cách chia mặt lõm thành hai hoặc nhiều mặt lồi.
    - Delete Loose: Công cụ này loại bỏ các đỉnh và cạnh bị ngắt kết nối (các mặt tùy chọn).
    - Degenerate Dissolve: Công cụ này thu gọn/loại bỏ hình học mà bạn thường không muốn (Các cạnh không có chiều dài, Các mặt không có vùng, Các góc mặt không có diện tích).
    - Merge by Distance: công cụ hữu ích để đơn giản hóa lưới bằng cách hợp nhất các đỉnh đã chọn gần nhau hơn một khoảng cách xác định. Một cách khác để đơn giản hóa lưới là sử dụng Công cụ *Decimate Modifier*.
- Deleting & Dissolving: Những công cụ này có thể được sử dụng để loại bỏ các thành phần (components).
    - Delete: Xóa các đỉnh, cạnh hoặc mặt đã chọn.
    - Dissolve: Các thao tác hòa tan cũng được truy cập từ menu xóa. Hòa tan sẽ loại bỏ hình học và điền vào hình học xung quanh. Thay vì loại bỏ hình học, có thể để lại những lỗ hổng mà bạn phải điền lại.
        - Dissolve Vertices: Loại bỏ đỉnh, hợp nhất tất cả các mặt xung quanh. Trong trường hợp có hai cạnh, hãy hợp nhất chúng thành một cạnh duy nhất.
        - Dissolve Edges: Loại bỏ các cạnh chia sẻ hai mặt (nối các mặt đó). Các tùy chọn cũng giống như đối với công cụ *Dissolve Vertices*.
        - Dissolve Faces: Hợp nhất các vùng bề mặt có chung cạnh thành một bề mặt duy nhất.
        - Dissolve (Context-Sensitive, shortcut "**Ctrl-X**{:.w3-text-red}"): Đây là một phím tắt tiện lợi có thể hòa tan dựa trên chế độ lựa chọn hiện tại (đỉnh, cạnh, mặt).
        - **Limited Dissolve**{:.w3-yellow}: Công cụ này có thể đơn giản hóa lưới của bạn bằng cách loại bỏ các đỉnh và cạnh ngăn cách các vùng phẳng.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_delete_limited-dissolve-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Collapse Edges & Faces:
        - Thu gọn từng cạnh và vùng mặt bị cô lập thành các đỉnh duy nhất, với sự hỗ trợ cho dữ liệu khuôn mặt như tia UV và màu đỉnh.
        - Điều này rất hữu ích khi lấy một vòng các cạnh và thu gọn nó lại, loại bỏ vòng mặt mà nó chạy qua.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_delete_collapse-before.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_delete_collapse-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Edge Loops: Edge Loop cho phép bạn xóa một vòng cạnh đã chọn nếu nó nằm giữa hai vòng cạnh khác. Điều này sẽ tạo ra một vòng lặp khuôn mặt trong đó có hai vòng lặp đã tồn tại trước đó.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_delete_edge-loop-before.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_mesh_delete_edge-loop-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Vertex Operators
- Extrude Vertices (**E**{:.w3-text-red}): Đùn các đỉnh thành các đỉnh riêng lẻ.
- *Extrude to Cursor or Add*{:.w3-yellow} (shortcut **Ctrl-RMB:Right-Mouse-Button**{:.w3-text-red}): đặt các đỉnh mới tại vị trí con trỏ chuột. *Nếu bạn có hai đỉnh được chọn sẽ tạo ra một mặt phẳng*.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_tools_extrude-cursor_quad.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Bevel Vertices (**Shift-Ctrl-B**{:.w3-text-red}): Công cụ Bevel làm tròn các cạnh hoặc góc của lưới tại điểm của các đỉnh được chọn.
- New Edge/Face from Vertices (**F**{:.w3-text-red}): Đây là một công cụ phân biệt ngữ cảnh, tạo ra hình học bằng cách điền vào vùng chọn. Khi chỉ có hai đỉnh được chọn, nó sẽ tạo ra một cạnh, nếu không nó sẽ tạo ra các mặt.
- Connect Vertex Path (**J**{:.w3-text-red}): Công cụ này kết nối các đỉnh theo thứ tự chúng được chọn, tách các mặt giữa chúng. Khi chỉ có hai đỉnh được chọn, một vết cắt sẽ được thực hiện trên các mặt không được chọn, *hơi giống với công cụ Knife*; nhưng điều này chỉ giới hạn ở các vết cắt thẳng trên các mặt được kết nối.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_vertex_connect-vertex-path_multi-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Connect Vertex Pairs: Toán tử này kết nối các đỉnh đã chọn bằng cách tạo các cạnh giữa chúng và tách mặt. Nó có thể được sử dụng trên nhiều khuôn mặt cùng một lúc. Sự khác biệt chính giữa toán tử này và *Connect Vertex Path* là toán tử này bỏ qua thứ tự lựa chọn và kết nối tất cả các đỉnh đã chọn có chung một mặt.
- *Rip Vertices*{:.w3-yellow} (**V**{:.w3-text-red}): Rip tạo ra một “lỗ” trong lưới (Rip kết hợp **M**{:.w3-text-red}erge) bằng cách tạo một bản sao của các đỉnh và cạnh đã chọn, vẫn được liên kết với các đỉnh không được chọn lân cận, sao cho các cạnh mới là đường viền của các mặt ở một bên và các cạnh cũ, đường viền của những khuôn mặt ở phía bên kia của vết rách.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_vertex_rip-vertices_after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Rip Vertices and Fill (**Alt-V**{:.w3-text-red}): Rip fill hoạt động tương tự như công cụ Rip ở trên, nhưng thay vì để lại một lỗ, nó sẽ lấp đầy khoảng trống bằng hình học.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_vertex_rip-vertices-fill_result.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Rip Vertices and Extend (**Alt-D**{:.w3-text-red}): Công cụ này lấy bất kỳ số lượng đỉnh được chọn nào và kéo chúng dọc theo cạnh gần nhất với chuột. Khi mở rộng một vòng lặp cạnh, nó sẽ mở rộng các đỉnh ở điểm cuối của vòng lặp. Hoạt động này tương tự như công cụ Extrude nhưng nó tạo ra một n-gon. Nó giúp dễ dàng thêm chi tiết vào các cạnh hiện có.
- *Slide Vertices*{:.w3-yellow} (**Shift-V**{:.w3-text-red}):
    - Vertex Slide sẽ biến đổi một đỉnh dọc theo một trong các cạnh liền kề của nó. Sử dụng Shift-V để kích hoạt công cụ.
    - Đỉnh được chọn gần nhất với con trỏ chuột sẽ là đỉnh điều khiển. Di chuyển chuột dọc theo hướng của cạnh mong muốn để xác định vị trí đỉnh. Sau đó nhấn **LMB (Left Mouse Button)** để xác nhận chuyển đổi.
- Smooth Vertices: Công cụ này làm mịn các đỉnh đã chọn bằng cách lấy trung bình các góc giữa các mặt.
- Laplacian Smooth: Laplacian Smooth sử dụng thuật toán làm mịn thay thế để bảo toàn tốt hơn các chi tiết lớn hơn và theo cách này là hình dạng tổng thể của lưới. Laplacian Smooth tồn tại dưới dạng hoạt động lưới và như một công cụ sửa đổi không phá hủy. Đừng nhầm công cụ này với các tùy chọn tạo bóng mượt, chúng không hoạt động giống nhau! Công cụ này tự sửa đổi lưới để giảm độ sắc nét của nó, trong khi Set Smooth chỉ kiểm soát cách bóng của lưới, tạo ảo giác về sự mềm mại nhưng không sửa đổi lưới chút nào.
- Blend from Shape: Pha trộn hình dạng từ một {% tooltip *shape key* [Các phím hình dạng được sử dụng để biến đổi các đối tượng thành các hình dạng mới cho hoạt ảnh. Theo thuật ngữ khác, các phím hình có thể được gọi là “mục tiêu biến hình” hoặc “pha trộn các hình dạng”.] %}.
- Propagate to Shapes: Áp dụng các vị trí đỉnh đã chọn cho tất cả các {% tooltip *shape key* [Các phím hình dạng được sử dụng để biến đổi các đối tượng thành các hình dạng mới cho hoạt ảnh. Theo thuật ngữ khác, các phím hình có thể được gọi là “mục tiêu biến hình” hoặc “pha trộn các hình dạng”.] %} khác.
- Vertex Groups: ...TODO
- Hooks (**Ctrl-H**{:.w3-text-red}): Thêm *Hook Modifier* (sử dụng đối tượng trống mới hoặc đối tượng được chọn hiện tại) được liên kết với vùng chọn. Lưu ý rằng ngay cả khi nó xuất hiện trong menu lịch sử, hành động này không thể được hoàn tác trong Chế độ chỉnh sửa – vì nó liên quan đến các đối tượng khác…
- Make Vertex Parent (**Ctrl-P**{:.w3-text-red}): Tạo Vertex cha mẹ...

### Edge Operators
- Extrude Edges (**E**{:.w3-text-red}): Đùn các cạnh thành các cạnh riêng lẻ.
- Bevel Edges (**Ctrl-B**{:.w3-text-red}): Công cụ Bevel cho phép bạn tạo các góc vát hoặc bo tròn trên hình học. Góc xiên là một hiệu ứng làm phẳng các cạnh và góc.
- Bridge Edge Loops: Bridge Edge Loops kết nối nhiều vòng cạnh với các mặt.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_edge_bridge-edge-loops_multi-before.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_edge_bridge-edge-loops_multi-after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Screw: Công cụ Vít kết hợp một Xoay lặp đi lặp lại với một translation để tạo ra một vật thể giống như vít hoặc hình xoắn ốc.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_edge_screw_example-spring.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Subdivide: Việc chia nhỏ sẽ chia các cạnh và mặt đã chọn bằng cách cắt chúng làm đôi hoặc nhiều hơn, thêm các đỉnh mới và chia nhỏ tương ứng các mặt có liên quan. Nó thêm độ phân giải cho lưới bằng cách chia các mặt hoặc cạnh thành các đơn vị nhỏ hơn.
- Subdivide Edge-Ring: Lấy một vòng cạnh và chia nhỏ bằng các tùy chọn nội suy.
- Un-Subdivide: Chức năng hủy chia nhỏ ngược lại với *subdivide* bằng cách cố gắng loại bỏ các cạnh là kết quả của thao tác chia nhỏ. Nếu việc chỉnh sửa bổ sung được thực hiện sau thao tác chia nhỏ, kết quả không mong muốn có thể xảy ra.
- Rotate Edge:
    - Xoay một cạnh theo chiều kim đồng hồ (**CW**: **C**lock**W**ise) hoặc ngược chiều kim đồng hồ (**CCW**: **C**ounter**C**lock**W**ise) sẽ quay một cạnh giữa hai mặt xung quanh các đỉnh của chúng.
    - Điều này rất hữu ích cho việc tái cấu trúc cấu trúc liên kết của lưới.
- *Edge Slide*{:.w3-yellow} (**G, G**{:.w3-text-red}): Trượt một hoặc nhiều cạnh trên các mặt liền kề với một số hạn chế liên quan đến việc lựa chọn các cạnh (tức là lựa chọn phải xác định một vòng lặp hợp lệ).
- *Offset Edge Slide*{:.w3-yellow} (**Shift-Ctrl-R**{:.w3-text-red}): Thêm hai vòng cạnh ở hai bên của vòng đã chọn.
- *Loop Cut and Slide*{:.w3-yellow} (**Ctrl-R**{:.w3-text-red}): Loop Cut and Slide tách một vòng các mặt bằng cách chèn một vòng cạnh mới giao với cạnh đã chọn. Cuộn chuột giữa để thêm nhiều vòng cạnh hơn.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_edge_loopcut-slide_multicut.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- *Edge Data*{:.w3-yellow}: Các cạnh có thể có một số thuộc tính khác nhau ảnh hưởng đến cách một số công cụ khác tác động đến lưới.
    - Edge Crease (**Shift-E**{:.w3-text-red}): Thuộc tính cạnh này có giá trị trong khoảng từ (0,0 đến 1,0), được *Subdivision Surface Modifier* sử dụng để kiểm soát độ sắc nét (sharpness) của các cạnh trong lưới được chia nhỏ. Để xóa thì nhập -1 vào giá trị của Factor.
    - Edge Bevel Weight: Thuộc tính này được sử dụng bởi *Bevel Modifier* để kiểm soát cường độ góc xiên của các cạnh.
    - Mark Seam & Clear Seam: Đường nối (Seams) là một cách để tạo ra sự ngăn cách (separations), “islands”, trong [UV Mapping (bản đồ UV)](https://docs.blender.org/manual/en/latest/editors/uv/introduction.html){:.external.hvr-forward rel="nofollow" target="_blank"}.
    - Mark Sharp & Clear Sharp: Biểu thị (các) cạnh được chọn là “sắc nét”. Điều này ảnh hưởng đến việc hiển thị các *Normals* trông phẳng nếu *smooth shading* được bật cho bề mặt hoặc đối tượng kết nối.
    - Set Sharpness by Angle: Đặt thuộc tính cạnh sắc nét dựa trên góc giữa các mặt lân cận. Thuộc tính này được sử dụng bởi *Geometry Nodes*.

### Face Operators
- Extrude Faces (**E**{:.w3-text-red}): đùn các mặt.
- Extrude Faces Along Normals (**E**{:.w3-text-red}): Quá trình đùn và bù sẽ bị khóa để chỉ di chuyển dọc theo các *local normals* của lưới đã chọn.
- Extrude Individual Faces: Công cụ này cho phép bạn đùn một vùng chọn gồm nhiều khuôn mặt riêng lẻ thay vì một vùng.
- Inset Faces (**I**{:.w3-text-red}): Công cụ này lấy các mặt hiện được chọn và tạo một phần nhỏ của chúng với độ dày và độ sâu có thể điều chỉnh được.
- Poke Faces: Tách từng mặt được chọn thành một hình quạt tam giác, tạo một đỉnh trung tâm mới và các hình tam giác giữa các cạnh mặt ban đầu và đỉnh trung tâm mới. Offset có thể được sử dụng để tạo ra các đột biến hoặc chỗ lõm.
- Triangulate Faces (**Ctrl-T**{:.w3-text-red}): Công cụ này chuyển đổi từng mặt được chọn (cho dù đó là hình tứ giác hay n-giác) thành các mặt hình tam giác.
- Triangles to Quads (**Alt-J**{:.w3-text-red}): Công cụ này chuyển đổi các hình tam giác đã chọn thành hình tứ giác bằng cách lấy các hình tam giác liền kề và loại bỏ cạnh chung để tạo hình tứ giác, dựa trên ngưỡng (threshold).
- Solidify Faces: Việc này lấy một vùng chọn các mặt và làm cứng chúng bằng cách đùn chúng một cách đồng đều để tạo thể tích cho một bề mặt Non-manifold (Không đa dạng).<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_face_solidify-faces_after.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Wireframe: Công cụ Wireframe tạo khung dây từ các bề mặt bằng cách biến các cạnh thành các ống khung dây, tương tự như *Wireframe Modifier*.
- Fill (**Alt-F**{:.w3-text-red}): Tùy chọn Fill sẽ tạo các mặt hình tam giác từ bất kỳ nhóm cạnh hoặc đỉnh nào được chọn, miễn là chúng tạo thành một hoặc nhiều chu vi hoàn chỉnh.
- Grid Fill: Grid Fill sử dụng một cặp vòng cạnh được kết nối hoặc một vòng cạnh đơn, khép kín để điền vào lưới theo hình học xung quanh.
- Beautify Faces: Nó sắp xếp lại các *hình tam giác* đã chọn để có được những hình tam giác “cân bằng” hơn (tức là các hình tam giác mỏng và dài hơn).
- Intersect (Knife): Nó hơi giống công cụ Boolean, nhưng không tính toán hình học bên trong/bên ngoài. Các mặt được chia dọc theo các giao điểm, để lại các cạnh mới được chọn.
- Intersect (Boolean): Thực hiện các phép toán Boolean với phép chọn trên hình học không được chọn. Mặc dù *Boolean Modifier* hữu ích cho các chỉnh sửa không phá hủy, nhưng việc truy cập vào các thao tác này bằng một công cụ trong Chế độ chỉnh sửa có thể hữu ích để thực hiện chỉnh sửa nhanh chóng.
- Weld Edges into Faces: Một công cụ để phân chia các mặt được chọn bằng các cạnh dây rời. Công cụ này có thể được sử dụng theo cách tương tự như công cụ Knife, nhưng trước tiên, các cạnh được thiết lập thủ công.
- Shade Smooth & Flat: Sự xuất hiện của các cạnh lưới được xác định là đồng đều hoặc được xác định rõ ràng trong Chế độ xem 3D và kết xuất. Trong Chế độ chỉnh sửa, có thể chọn từng bề mặt để xác định bề mặt nào được làm mịn hoặc làm phẳng. Cả Shade Smooth và Flat đều có sẵn trong Chế độ đối tượng và hoạt động theo cách tương tự.
    - Shade Smooth: Sử dụng các pháp tuyến đỉnh được nội suy, các mặt lưới sẽ mờ ở các cạnh và trông mịn màng.
    - Shade Flat: Các đường normals của face được hiển thị đồng đều, do đó tất cả các cạnh của lưới đã chọn sẽ dễ dàng được nhìn thấy.
- Face Data: Giống như các Edge Data, Face cũng có Face Data để làm trọng số cho một số hành động.
    - Rotate Colors: Xoay màu của Thuộc tính Màu bên trong các mặt theo chiều kim đồng hồ hoặc ngược chiều kim đồng hồ.
    - Reverse Colors: Lật hướng màu của Thuộc tính Màu bên trong các bề mặt đã chọn.
    - Rotate UVs: Hướng của kết cấu UV được xác định bởi mỗi mặt, nếu hình ảnh bị lộn ngược hoặc nằm nghiêng, hãy sử dụng để xoay UV trên mỗi khuôn mặt theo góc 90 độ.
    - Reverse UVs: hiển thị hình ảnh UV bị đảo ngược trên mặt.
    - Flip Quad Tessellation: ...Lật Quad Tessellation
    - Mark Freestyle Face: ...Mark Freestyle Face
    - Clear Freestyle Face: ...Khuôn mặt tự do rõ ràng

### UV Operators

### Editing
#### Curve
#### Surfaces
#### Metaball
#### Text