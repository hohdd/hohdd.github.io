---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Blender - Modifiers"
description: "Blender - Modifiers"

### HUMAN
header: "Blender - Modifiers"
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
## Modifiers

- Công cụ Modifiers là các thao tác tự động ảnh hưởng đến hình dạng của đối tượng theo cách không phá hủy.
- Với công cụ Modifiers, bạn có thể tự động thực hiện nhiều hiệu ứng mà nếu thực hiện thủ công sẽ quá tẻ nhạt (chẳng hạn như các bề mặt phân chia) và không ảnh hưởng đến hình dạng cơ sở của đối tượng.
- Chúng hoạt động bằng cách thay đổi cách display và render một đối tượng chứ không phải hình học mà bạn có thể chỉnh sửa trực tiếp. Bạn có thể thêm một số công cụ Modifiers vào một đối tượng để tạo {% tooltip **Modifier Stack** [Trong Modifier Stack, thứ tự áp dụng công cụ sửa đổi có ảnh hưởng đến kết quả. Modifiers được tính từ trên xuống dưới trong Stack.] %} và **Apply** công cụ sửa đổi nếu bạn muốn thực hiện các thay đổi của nó vĩnh viễn.
- Có nhiều *built-in modifiers* nhưng Blender cũng cho phép người dùng tạo công cụ sửa đổi của riêng họ thông qua {% tooltip **Geometry Nodes** [Geometry Nodes là một hệ thống để sửa đổi hình dạng của một đối tượng bằng các hoạt động dựa trên Node. Nó có thể được truy cập bằng cách thêm Geometry Nodes Modifier.] %}.

## Built-In Modifiers

### Edit
- Data Transfer Modifier
- Mesh Cache Modifier
- Mesh Sequence Cache Modifier
- Normal Edit Modifier
- UV Project Modifier
- UV Warp Modifier
- Vertex Weight Edit Modifier
- Vertex Weight Mix Modifier
- Vertex Weight Proximity Modifier
- Weighted Normal Modifier

### Generate
- **Array Modifier**
    - Array Modifier sẽ tạo ra các bản sao của Object dựa vào Factor X/Y/Z, Object Offset...
    - Công cụ sửa đổi này có thể hữu ích khi kết hợp với các lưới có thể điều chỉnh được để phát triển nhanh các cảnh lớn. Nó cũng hữu ích để tạo các hình dạng lặp đi lặp lại phức tạp.
    - Nhiều công cụ sửa đổi mảng có thể hoạt động cho một đối tượng cùng một lúc (ví dụ: để tạo các cấu trúc ba chiều phức tạp).<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_array_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Factor X/Y/Z: Thêm dịch chuyển bằng kích thước hộp giới hạn của đối tượng dọc theo mỗi trục, nhân với hệ số tỷ lệ, vào phần bù. Có thể chỉ định các hệ số tỷ lệ X, Y và Z.
        - Object Offset: Thêm một phép biến đổi được lấy từ một đối tượng (so với đối tượng hiện tại) vào phần bù. Cách tốt nhất là sử dụng *một đối tượng trống (empty object) ở giữa hoặc gần đối tượng ban đầu*. Ví dụ. bằng cách xoay chỗ trống này, một vòng tròn hoặc chuỗi xoắn của các vật thể có thể được tạo ra.
        - Merge: Nếu được bật, các đỉnh trong mỗi bản sao sẽ được hợp nhất với các đỉnh trong bản sao tiếp theo nằm trong Khoảng cách nhất định. First and Last Copies > các đỉnh trong bản sao đầu tiên sẽ được hợp nhất với các đỉnh trong bản sao cuối cùng nếu chúng nằm trong phạm vi Khoảng cách. Điều này rất hữu ích cho các đối tượng hình tròn.
    - Hints: Offset Calculation, Fractal (*Object Offset kèm theo mức độ Scale của Empty Object*)
- **Bevel Modifier**
    - Công cụ sửa đổi góc xiên sẽ vát các cạnh của lưới mà nó được áp dụng, với một số điều khiển về cách thức và vị trí góc xiên được áp dụng cho lưới.
    - Nó là một giải pháp thay thế không phá hủy (nếu ko Apply) cho Thao tác góc xiên trong Chế độ chỉnh sửa.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_bevel_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Affect:
            - Vertices: Chỉ những vùng gần đỉnh được vát, các cạnh không thay đổi.
            - Edges: Vát các cạnh, tạo giao điểm ở các đỉnh.
        - Width Type (Width, Depth, Offset): Xác định cách diễn giải Chiều rộng để xác định mức độ góc xiên.
        - Limit Method (None, Angle, Weight, Vertex Group): Được sử dụng để kiểm soát vị trí một góc xiên được áp dụng cho lưới. VD: với None > Không có giới hạn, tất cả các cạnh sẽ được vát.
- **Boolean Modifier**
    - Công cụ sửa đổi này cần một đối tượng lưới thứ hai hoặc tập hợp các đối tượng lưới làm mục tiêu (toán hạng thứ hai) của thao tác. *Warning*: Chỉ các lưới Manifold được đảm bảo mang lại kết quả phù hợp, các trường hợp khác (đặc biệt là các lưới “mở”, Không đa tạp nhưng không có bất kỳ giao điểm tự nào) có thể gây ra các trục trặc và tạo tác kỳ lạ trong một số trường hợp.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_booleans_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Operation:
            - Intersect: Mọi thứ bên trong cả lưới mục tiêu và lưới đã sửa đổi đều được giữ lại (*phần giao nhau*).
            - Union: Lưới hoặc bộ sưu tập mục tiêu được thêm vào lưới đã sửa đổi, loại bỏ bất kỳ mặt bên trong nào (*phần Hợp loại bỏ phần giao nhau*).
            - Difference: Lưới mục tiêu hoặc tập hợp các mắt lưới được trừ khỏi lưới đã sửa đổi (*Đục lỗ*).
        - Operand Type: Chọn loại toán hạng (target). Mục tiêu là một đối tượng lưới hoặc một bộ sưu tập, khi mục tiêu là một tập hợp và Bộ giải nhanh thì thao tác Intersect không được phép.
        - Solver (Fast, Exact): Thuật toán dùng để tính toán các giao điểm Boolean.
- *Build Modifier*{:.w3-gray}
- **Decimate Modifier**
    - Công cụ sửa đổi Decimate cho phép bạn giảm số đỉnh/mặt của lưới với những thay đổi hình dạng tối thiểu.
    - Điều này thường không được sử dụng trên các mắt lưới được tạo ra bằng cách mô hình hóa một cách cẩn thận. Nhưng nếu lưới là kết quả của quá trình tạo mô hình phức tạp, điêu khắc (sculpting) và/hoặc áp dụng các công cụ sửa đổi Bề mặt phân khu/Đa phân giải, thì lưới Decimate có thể được sử dụng để giảm số lượng đa giác nhằm tăng hiệu suất hoặc đơn giản là loại bỏ các đỉnh và cạnh không cần thiết.
    - Không giống như phần lớn các công cụ sửa đổi hiện có, công cụ sửa đổi này không cho phép bạn trực quan hóa các thay đổi của mình trong Chế độ chỉnh sửa (*hãy chuyển sang real-time render để xem*).<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_decimate_panel-collapse.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Collapse (Ratio): Hợp nhất các đỉnh lại với nhau dần dần, có tính đến hình dạng của lưới.
        - Un-Subdivide (Iterations): Nó có thể được coi là sự đảo ngược của chia nhỏ. Nó cố gắng loại bỏ các cạnh là kết quả của thao tác chia nhỏ.
        - Planar (Angle Limit): Nó làm giảm chi tiết trên các hình thức bao gồm các bề mặt chủ yếu là phẳng.
- *Edge Split Modifier*{:.w3-gray}
    - *Công cụ sửa đổi này được giữ lại chủ yếu vì lý do lịch sử/tương thích. Giờ đây, mọi thứ nó có thể làm trong việc tạo bóng và hơn thế nữa đều có thể đạt được bằng cách sử dụng các quy tắc tùy chỉnh.*{:.w3-gray}
- *Geometry Nodes Modifier*{:.w3-gray}
- Mask Modifier
- **Mesh to Volume Modifier**
    - Công cụ sửa đổi này chỉ khả dụng cho {% tooltip **Volume Object** [là các thùng chứa được sử dụng để thể hiện các tệp OpenVDB trong Blender. OpenVDB là một thư viện và định dạng tệp để tương tác và lưu trữ dữ liệu thể tích. Các tệp OpenVDB có thể được tạo bởi phần mềm khác như Houdini hoặc từ bộ đệm mô phỏng chất lỏng của Blender.] %}.
    - Công cụ sửa đổi Mesh to Volume sử dụng lưới để tạo lưới Volume mới. Tất cả các lưới Volume hiện có trước đó trên Volume Object đều bị loại bỏ. Vì vậy, công cụ sửa đổi này thường được thêm vào một Empty Volume Object. Lưới Volume mới được gọi là “mật độ” (**density**).
    - [Xem thêm ở đây](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/mesh_to_volume.html){:.external.hvr-forward rel="nofollow" target="_blank"}<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_mesh-to-volume_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Mirror Modifier**
    - Công cụ sửa đổi Mirror phản chiếu một lưới dọc theo các trục X, Y và/hoặc Z cục bộ của nó, trên Nguồn gốc đối tượng. Nó cũng có thể sử dụng một đối tượng khác làm tâm gương, sau đó sử dụng trục cục bộ của đối tượng đó thay vì trục của chính nó.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_mirror_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Axis: Trục X, Y, Z dọc theo gương, tức là trục vuông góc với mặt phẳng gương đối xứng. Bạn có thể chọn nhiều hơn một trong các trục này.
        - Bisect: Nếu lưới đã có sẵn ở cả hai mặt của mặt phẳng gương, nó sẽ bị cắt bởi mặt phẳng đó và chỉ một mặt (theo mặc định là mặt “dương”) được giữ lại để thực hiện quá trình phản chiếu.
        - Flip: Khi Bisect được bật trên một trục, bạn có thể sử dụng cài đặt này để chuyển đổi mặt được giữ và phản chiếu (tức là khi tính năng này được bật, mặt “âm” sẽ được giữ nguyên, thay vì mặt “dương”).
        - Mirror Object: chọn một đối tượng (thường là empty object), vị trí và góc quay sẽ được sử dụng để xác định các mặt phẳng gương. Bạn có thể tạo hoạt ảnh cho nó để di chuyển trục gương.
        - **Hints**:
            - Nhiều nhiệm vụ mô hình hóa liên quan đến việc tạo ra các đối tượng có tính đối xứng. Công cụ sửa đổi này cung cấp một cách đơn giản và hiệu quả để thực hiện việc này, với tính năng cập nhật bản sao theo thời gian thực khi bạn chỉnh sửa nó. Sau khi mô hình hóa hoàn tất, bạn có thể *nhấp vào Áp dụng để tạo phiên bản thực của lưới* hoặc giữ nguyên để chỉnh sửa trong tương lai.
            - Để áp dụng công cụ sửa đổi Mirror, thông thường phải di chuyển điểm gốc của đối tượng lên cạnh hoặc mặt sẽ là trục để phản chiếu. Một cách khác là sử dụng *empty object* làm Đối tượng phản chiếu để bạn di chuyển đến đúng vị trí.
- *Multiresolution Modifier*{:.w3-gray}
- **Remesh Modifier**
    - Công cụ sửa đổi Remesh là một công cụ để tạo cấu trúc liên kết lưới mới. Đầu ra tuân theo độ cong bề mặt của đầu vào, nhưng cấu trúc liên kết của nó chỉ chứa các hình tứ giác.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_remesh_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_remesh_example-blocks-depth-3.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Mode: Có ba chế độ cơ bản có sẵn trong công cụ sửa đổi Remesh. Cấu trúc liên kết đầu ra gần như giống hệt nhau giữa ba chế độ, điều thay đổi là làm mịn.
            - Blocks: Các Block giống Minecraft, không có sự làm mịn nào cả.
            - Smooth: Tạo ra một bề mặt nhẵn.
            - Sharp: Tương tự như Smooth nhưng vẫn giữ được các cạnh và góc sắc nét.
            - Voxel: Sử dụng OpenVDB để tạo lưới đa dạng mới từ hình dạng hiện tại trong khi cố gắng duy trì khối lượng ban đầu của lưới.
        - Smooth Shading: Các mặt đầu ra có bóng mịn thay vì bóng phẳng. Bóng mịn/phẳng của các mặt đầu vào không được giữ nguyên.
- **Screw Modifier**
    - Sử dụng modifier này để tạo ốc vít, lò xo hoặc các cấu trúc hình vỏ sò (Vỏ biển, Đầu vít gỗ, Biên dạng đặc biệt, v.v.).
    - Nó lấy một profile object, một lưới hoặc một đường cong để tạo ra một hình dạng giống như hình xoắn ốc.
    - Cấu hình phải được căn chỉnh chính xác theo hướng chính của vật thể thay vì theo trục vít.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_screw_align.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_screw_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options: [xem thêm ở đây](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/screw.html){:.external.hvr-forward rel="nofollow" target="_blank"}
    - [Xem thêm về công cụ Screw](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/screw.html){:.external.hvr-forward rel="nofollow" target="_blank"} (Edit Mode > Menu > Edge ‣ Screw)<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_meshes_editing_edge_screw_example-shell.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Skin Modifier**
    - Công cụ sửa đổi Skin sử dụng các đỉnh và cạnh để tạo bề mặt có bề mặt, sử dụng bán kính trên mỗi đỉnh để xác định hình dạng tốt hơn. Đầu ra chủ yếu là hình tứ giác, mặc dù một số hình tam giác sẽ xuất hiện xung quanh các giao lộ.
    - Đó là một cách nhanh chóng để tạo ra các mắt lưới cơ sở để điêu khắc (sculpting) và/hoặc làm mịn các hình dạng hữu cơ với cấu trúc liên kết tùy ý.
    - [Options xem thêm ở đây](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/skin.html){:.external.hvr-forward rel="nofollow" target="_blank"}
    - Examples: tạo ống theo đường > scale và extrude các phần > áp dụng thêm Subdivision để làm mịn...<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_skin_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Solidify Modifier**
    - Công cụ sửa đổi Solidify lấy bề mặt của bất kỳ lưới nào và thêm độ sâu, độ dày cho nó.
    - [Xem thêm ở đây](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/solidify.html){:.external.hvr-forward rel="nofollow" target="_blank"}
- **Subdivision Surface Modifier**
    - Thường được gọi rút ngắn thành “Subdiv” được sử dụng để chia các mặt của lưới thành các mặt nhỏ hơn, mang lại vẻ mịn màng.
    - Nó cho phép bạn tạo các bề mặt nhẵn phức tạp trong khi mô hình hóa các mắt lưới đơn giản, có đỉnh thấp.
    - Nó tránh được nhu cầu lưu và duy trì lượng dữ liệu khổng lồ, đồng thời mang lại vẻ ngoài “hữu cơ” mượt mà cho đối tượng.
    - Giống như bất kỳ công cụ sửa đổi nào, thứ tự thực hiện (vị trí trong ngăn xếp công cụ sửa đổi) có ảnh hưởng quan trọng đến kết quả.
    - Hãy nhớ rằng đây là một hoạt động khác với thao tác đồng hành của nó, Smooth Shading.
    - Công cụ sửa đổi này sử dụng thư viện [OpenSubdiv của Disney Pixar](https://graphics.pixar.com/opensubdiv/docs/intro.html){:.external.hvr-forward rel="nofollow" target="_blank"} ([Graphics Technologies](https://graphics.pixar.com/){:.external.hvr-forward rel="nofollow" target="_blank"}) làm phụ trợ (backend).<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_subdivision-surface_panel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options:
        - Catmull-Clark: Tất cả các đỉnh trong Mesh  sẽ là điểm gốc, chia nhỏ và làm mịn các bề mặt để tạo ra một Mesh mới trông dễ chịu hơn.
        - Simple:
            - Chỉ chia nhỏ các bề mặt, điều này thường không mang lại bất kỳ sự làm mịn nào trừ khi bề mặt không đồng phẳng (giống như toán tử Subdivide trong Chế độ chỉnh sửa). Để khắc phục hiện tượng này đối với hình học không đồng phẳng, hãy tam giác hóa để đảm bảo tất cả hình học đều đồng phẳng.
            - Ví dụ, chế độ đơn giản có thể được sử dụng để **tăng độ phân giải lưới cơ sở**.
        - Levels Viewport, Render: Số lượng cấp độ phân chia được hiển thị trong Chế độ xem 3D hoặc kết xuất cuối cùng. Mức độ phân chia cao hơn dẫn đến nhiều đỉnh hơn, nghĩa là mức tiêu thụ bộ nhớ cao hơn (cả RAM hệ thống và bộ nhớ video để hiển thị).
        - Optimal Display: Khi hiển thị wireframe của đối tượng này, các dây của các cạnh được chia nhỏ mới sẽ bị bỏ qua (chỉ hiển thị các cạnh của hình học ban đầu).
- **Triangulate Modifier**
    - Chuyển đổi tất cả các mặt trong lưới (hình tứ giác và n-giác) thành các mặt hình tam giác.
    - Nó thực hiện chức năng tương tự như *công cụ Tam giác trong Chế độ chỉnh sửa (Face ‣ Triangulate Faces)*.
    - [Xem thêm ở đây](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/triangulate.html){:.external.hvr-forward rel="nofollow" target="_blank"}
- **Volume to Mesh Modifier**
    - Công cụ sửa đổi này là nghịch đảo của công cụ sửa đổi *Mesh to Volume*. Nó lấy một đối tượng khối hiện có và chuyển đổi một trong các lưới của nó thành lưới. Chỉ có thể chuyển đổi các lưới vô hướng (chẳng hạn như lưới mật độ).
    - [Xem thêm ở đây.](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/volume_to_mesh.html){:.external.hvr-forward rel="nofollow" target="_blank"}<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_volume-to-mesh_example.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Weld Modifier**
    - Công cụ sửa đổi Weld tìm kiếm các nhóm đỉnh trong một ngưỡng và hợp nhất chúng, thu gọn hình học xung quanh.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_weld_panel_connected.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Options
        - Mode: Phương pháp chọn đỉnh nào được hợp nhất.
            - All: Hợp nhất bao gồm tất cả hình học bao gồm cả các phần rời rạc.
            - Connected: Hợp nhất chỉ bao gồm hình học đính kèm, tức là công cụ sửa đổi sẽ không hợp nhất các phần rời rạc lại với nhau.
        - Distance: Khoảng cách tối đa mà các đỉnh phải có nhau mới có thể hợp nhất được.
        - Only Loose Edges (Connected Mode): Chỉ thu gọn các cạnh ngắn không liền kề với bất kỳ mặt nào. Điều này rất hữu ích chẳng hạn như để khâu các đường nối được sử dụng trong mô phỏng vải.
        - Vertex Group: Khi tùy chọn Nhóm Vertex được chọn, chỉ các đỉnh có trọng số trên 0 mới bị ảnh hưởng bởi công cụ sửa đổi.
- **Wireframe Modifier**
    - Công cụ sửa đổi Wireframe biến lưới thành khung dây bằng cách lặp qua các mặt của nó, thu thập tất cả các cạnh và biến các cạnh đó thành đa giác bốn cạnh.
    - Hãy nhận biết thực tế là lưới của bạn cần phải có các mặt để được đóng khung.
    - Bạn có thể xác định độ dày, vật liệu và một số thông số khác của khung dây được tạo một cách linh hoạt thông qua các tùy chọn sửa đổi đã cho.<br>![TEXT](https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_wireframe_example-weights.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - [Xem thêm ở đây.](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/wireframe.html){:.external.hvr-forward rel="nofollow" target="_blank"}

### Deform
- Armature Modifier
- Cast Modifier
- Curve Modifier
- Displace Modifier
- Hook Modifier
- Laplacian Deform Modifier
- Lattice Modifier
- Mesh Deform Modifier
- Shrinkwrap Modifier
- Simple Deform Modifier
- Smooth Modifier
- Smooth Corrective Modifier
- Smooth Laplacian Modifier
- Surface Deform Modifier
- Volume Displace Modifier
- Warp Modifier
- Wave Modifier

### Physics
- Cloth Modifier
- Collision Modifier
- Dynamic Paint Modifier
- Explode Modifier
- Fluid Modifier
- Ocean Modifier
- Particle Instance Modifier
- Particle System Modifier
- Soft Body Modifier