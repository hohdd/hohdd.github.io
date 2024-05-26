---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "The Hard Surface 1% Strategy Blender"
description: "The Hard Surface 1% Strategy Blender"

### HUMAN
header: "The Hard Surface 1% Strategy Blender"
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
# highlight_text: true
# highlight_yellow: "The 1% Strategy Blender"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## The Hard Surface 1% Strategy Blender

{% comment %}
https://www.blenderbros.com/ dhnec / 1.....a@ /MyLibrary
{% endcomment %}
- **IMPORTANT**{:.w3-text-red}:
	- Chú ý **tỉ lệ** và **hướng**
	- Mode nào đang active (Object Mode, Edit mode)
	- Transform Orientaion nào đang được chọn? (định hướng biến hóa)
	- Transform Pivot Point nào đang được chọn?
	- Cách thực hiện:
		- Có thể đạt được yêu cầu như nhau qua Modifiers hoặc Tools (**bản chất**)
		- Biết được cách thực hiện với **cả phím tắt lẫn qua menu thông thường**
- Để nhìn rõ các cạnh hơn khi chỉnh sửa: ở dropdown menu shader (chỗ chọn MatCap) > tích chọn **Cavity**{:.w3-text-red} (*hiển thị khe hốc*)
- Shape Smooth một Cube nhìn sẽ không kinh khủng nếu smooth normal angle 30 độ... => **Shape Smooth by Angle**{:.w3-text-red} (*độ sắc nét của Edge dựa trên góc giữa các mặt lân cận*)
- **Scale theo 2 trục**{:.w3-text-red} *bỏ 1 trục* (**S -> shift-TRỤC BỎ**): hoặc là đến hình chiếu chứa 2 trục, hoặc S rồi *Shift-Z (scale theo XY bỏ Z)*
- **Alt-S**{:.w3-text-red} để **Scalse Along Normal** (*phải ở trong Edit Mode*)
- Muốn **boolean** (cắt một vật thể bằng một vật thể khác): *chọn vật thể DÙNG ĐỂ CẮT rồi giữ shift để chọn thêm VẬT THỂ BỊ CẮT* rồi **Ctrl-Shift-B**{:.w3-text-red} để chọn tùy chọn cắt (hoặc sử dụng luôn phím tắt **Ctrl -+*/**{:.w3-text-red}):
	- Auto Boolean sẽ cắt rồi xóa luôn vật thể DÙNG ĐỂ CẮT
	- **Brush Boolean** sẽ keep vật thể DÙNG ĐỂ CẮT để có thể modify > nên tạo một Collection mới "Cutter" rồi move vật thể DÙNG ĐỂ CẮT vào đó
- **Mirror Modifier**{:.w3-text-red} phụ thuộc vào *origin của vật thể DÙNG ĐỂ CẮT* > nếu mirror không như mong muốn **hãy để ý đến điểm Origin này > để điều chỉnh: RMB > Set Origin...**
- **Bevel Modifier**{:.w3-text-red}:
	- Nếu nhìn không như mong muốn > **shading (của Bevel) > Harden Normals** (khớp normal của các mặt mới với với các mặt kề bên cạnh)
	- Với những đường góc: có thể điều chỉnh "miếng vá" ở đây với các mẫu Sharp (sắc nhọn, mặc định), Patch (được làm vuông), Arc (vòng cung). **Geometry (của Bevel) > Miter Outer > Arc**
	- Áp dụng boolean cho vật thể khác (hợp nhất nhiều vật thể với nhau kèm theo Boolean Modifier. *BẢN CHẤT là áp dụng boolean Union cho 2 vật thể*{:.w3-yellow}): *chọn vật thể chưa có Modifier > Shift chọn vật thể có Modifier* > **Ctrl-Shift-B** (*hoặc N:Tool Bar > Edit > Brush Boolean.Union*)
		- Nếu nhìn không ổn thì có thể do thứ tự Modifier (**thứ tự rất quan trọng**), hãy sắp xếp Boolean xong rồi mới đến Bevel sau đó.
		- Tuy cùng là Boolean Modifier và chọn Object nhưng sử dụng Tool và Manual bằng một cách nào đó đang khác nhau
	- tùy chọn Geometry > Clamp Overlap để tránh Overlap nhưng góc vát bị loại bỏ => ưu tiên để lại góc vát (Bevel) nhưng sẽ có Overlap xảy ra > *để fix Overlap thì Modifier sẽ chọn* **Solver là Fast thay vì Exact**
- Boolean Modifier nếu object áp dụng Boolean đã có hình hài đầy đủ (nhưng vẫn phụ thuộc vào object khác, ví dụ: Union, Cutter) thì **có thể ẩn Object đã Union (H) và** **Cutters**{:.w3-yellow} **đi** (nhưng khi di chuyển sẽ phải kèm theo chúng hoặc sẽ cần Apply Modifer luôn)
	- Để di chuyển Object đã apply modifier kèm "phụ thuộc" của nó (object Union hoặc Cutters) > **Set Parent**{:.w3-text-red}: *parent cần chọn cuối cùng*{:.w3-yellow} > **Ctrl-P hoặc menu:Object > Parent**{:.w3-text-red} (*Alt-P để un-parent*). Tất nhiên nếu keep reference (collection) và khi điều chỉnh parent object sẽ tốn performance (giật)
	- Trường hợp muốn tách riêng object data (ví dụ 1 object bị slide thành 2 phần nhưng Blender vẫn đang sử dụng chung data) => vào Object Data > tạo bản sao (icon số lượng object dùng chung data, bên cạnh Fake User, để ý tên: chọn object sau khác tên để tách bản sao sẽ được 2 tên trùng với tên object)
	- **Lỗi surface** khi cả boolean object và toán tử đều "Shape Smooth by Angle" => *thay đổi của version 4.1 > chỉ Shape Smooth + sử dụng kèm 3 Modifiers (1.Bevel nhỏ, 2.Smooth by Angle, 3.Weighted Normal...)*{:.w3-yellow}
	- Có thể sử dụng Boolean cho object boolean (toán tử boolean)
	- "**Ăn cắp hình học**{:.w3-text-red}" có thể nhanh chóng tạo được object toán tử boolean. Hoặc tạo hình học cho 1 lớp vỏ, 1 miếng ốp với **Solidify**.
- Di chuyển một object lên bề mặt một object => **bật Snap Face + Align Rotation to Target**.
	- Để S/G/E theo hướng **XYZ local**{:.w3-yellow} (khi object bị nghiêng, không còn theo XYZ của world) thì **ZZ, XX, YY**{:.w3-yellow}
- **Auto Merge Vertices** ở góc trên cùng bên phải (4.1) trong option có thể cài đặt **Threshold**, chỉ gần chọn Edit.Vertice rồi G và nhả, nó sẽ so sánh threahold với khoảng cách từ vị trí thả đến các Vertice lân cận, nếu nhỏ hơn thì nó sẽ merge vào vị trí gần nhất. Hoặc **Merge.At Center** cũng có thể áp dụng cho các Vertices.
- **ĐỐI XỨNG XUYÊN TÂM**: Edit Mode > Mesh > Symmetrize để áp dụng mesh đối xứng (**lưu ý cần Apply Rotation trước**{:.w3-yellow}): Edit mode > select all (A) > Symmetrize và chọn trục và hướng đối xứng xuyên tâm
- **Method** của các **Modifier** ảnh hưởng (**phạm vi áp dụng**) tùy thuộc vào **Angle, Weight, Vertex Group**... (**chức năng Select** cũng có tùy chọn Select theo: Sharp Edges, Similar...)
- *Từng bước*{:.w3-yellow} xử lý overlap, *xem vấn đề nó nằm ở đâu*{:.w3-yellow} (duplicate egde/vertex? trùng line connect?), biết được nó do đâu mà có? để giải quyết (xóa bỏ duplicate, move line connect ra một vị trí khác, weight edge...)
- Blender Addon: [PowerSave](https://app.gumroad.com/d/0adc72e4b778ffdc3ae9a9d438dbecda){:.external.hvr-forward rel="nofollow" target="_blank"}, [Screencast Keys](https://github.com/nutti/Screencast-Keys){:.external.hvr-forward rel="nofollow" target="_blank"} ... (TODO: cần làm 1 page note về sử dụng các addon "Main Add-on"...)
- Sau khu Boolean xong bấm **Shift-2** để ẩn cả object boolean và collection cutter. (Shift-1: ẩn collection vị trí 1, Shift-2: ẩn collection vị trí 2...)
- **Rotate** (**R**) phụ thuộc vào **Tranform Pivot Point** đang là gì (*3D cursor, Individual Origins, Median Point...*)
- **Instances** (*Vertices, Faces, Collection*) là một cách nhanh chóng để thêm cùng một hình học (**same geometry**) vào một cảnh nhiều lần mà **không cần sao chép dữ liệu cơ bản**. *Menu: Add > Collection Instance*. Có thể chuyển một Instance thành Real ([Make Instances Real](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/apply.html#bpy-ops-object-duplicates-make-real){:.external.hvr-forward rel="nofollow" target="_blank"})
- Để tận dụng một Cutter (ví dụ Cắt trên + Cắt dưới), nếu Shift-D thì không ăn Boolean đang có sẵn > trước khi duplicate thì chuyển Edit Mode > Select All (A) > Shift-D > kéo đến vị trí khác cần cắt, việc này bản chất là duplicate Hình học của Object Cutter chứ không tạo một Object khác (sẽ không giữ được boolean)
- Mặc định *[**CTRL** sẽ kích hoạt **snaping**]*{:.w3-yellow} trong khi *transform (G:move, R:rotate, S:scale)* kể cả khi magnetic icon is disabled.
- **Mirror Modifier**: có thể hình dung *X = -x đến +x, X = -y đến +y, Z = -z đến +z*. *Cần Apply Rotation trước khi Mirror (giống Apply Scale trước khi Bevel)*{:.w3-yellow.w3-text-red}
- **Join (J)** *khác với* **Fill (F)**, đều có thể nối 2 Vertice nhưng **Join (J)** tạo "**kết nối**" (*connect mesh*). *Không nên để một "connect line" ở giữa 1 cạnh (Bevel có thể làm overlap mesh)*. **Fill (F)** cũng có thể sử dụng để **loại bỏ các cạnh trong một mặt phẳng**. **Scale '0'**{:.w3-yellow} để làm phẳng 1 hoặc nhiều mặt theo một Axis (*cần đảm bảo Pivot Point đang là Individual*)
- **Thao tác không dứt khoát** sẽ làm xuất hiện các Vertice, Faces, Edges **trùng lặp** khi E rồi hủy... (sử dụng Mesh Machine có thể nhanh chóng Clean Mesh và nhiều tiện ích khác... hoặc Fix Duplicate với **Merge (M) by Distance** (select all)...)
- **Ctrl-R** sẽ "không toàn vẹn" nếu các mặt có số đỉnh không đồng đều (*Edge không loop*) > sử dụng **Knife (K)** thay thế: **K** (*Knife*) -> **C** (*Cut through*) -> **A** (*Angle contrain:30 độ*)
- Khi "**ăn cắp hình học**" cần phải check **Normal Orientation** (*lỗi newbie thường găp*{:.w3-yellow}). Khi chức năng hoạt động không như mong đợi > **checklist**: *1.Kiểm tra Orientation, 2.Kiểm tra Wirefame (kiểm tra duplicate), 3.Kiểm tra transform (Scale...Origin...Pivot Points)*{:.w3-yellow} (**HINT**: *đã hỏi trên group discord...*)
- Fix **Duplicate** với **Merge (M)** *by Distance* (select all). Có thể xem kết quả ở thanh Status Bar. *Áp dụng để làm sạch lưới khi sang bước tiếp theo (Material, Rigging...)*{:.w3-yellow}
- Fix **Normal Orientation**: trong Edit Mode > Select All > **Alt-N (Normal)** > **Recaculate outside**{:.w3-yellow}...
- Khi **thêm Object** *phải ở chế độ* **Object Mode**
- *Làm sạch lưới*{:.w3-yellow}: **A (select all) > X (delete) > Litmited Dissolve** (hủy Đỉnh và Cạnh nhưng giới hạn bởi góc độ và hình học bao quanh, *cần kiểm tra cẩn thận vì nó có thể loại bỏ một số Cạnh không mong muốn...*)
- *Overlap là các mặt lưới trùng lên nhau*{:.w3-yellow} (ví dụ 2 Bevel bị chồng mép ngoài... hoặc là một cạnh Connect bị cố định vị trí khi Bevel...). **Bevel Modifier** có các tùy chọn "**Clamp Overlap**" và "**Loop Side**" để tự động tránh các lỗi này (*khi điều tra hoặc muốn full controll thì nên bỏ 2 tùy chọn này*).
- **Shift-B** để chọn *vùng Zoom-In*{:.w3-yellow.w3-text-red}
- Plan/Face có thể M at Center để **tạo điểm** > **Convert To Curve** > **Tạo độ dày** với *Properties.Geometry.Bevel.Round.Depth* > **Convert To Mesh**... > *Subdivide, Subdivision Modifier, Bevel tạo thêm Đỉnh, Proportional Editing, LoopTools.Relax...*{:.w3-yellow}
- Nối 2 mặt (vòng cạnh) bằng **Bridge Edge Loops** (*Segments*) hoặc **LoopTools.Bridge** (*Numbers of Cuts*). *Điều kiện là phải Join (Ctrl-J) 2 Object lại với nhau (nếu thuộc về 2 Object riêng biệt)*{:.w3-yellow}
- **Tạo nối chữ T**: 2 hình **trụ 6 cạnh** > Xóa mặt nằm ngang > chỉnh sao cho **vòng cạnh 2 mặt bằng nhau** > **Bridge** > Ctrl-1 (**Subdivision**) > Ctrl-R (Egde Loop) để scope vùng (giữ cạnh)
- [TRICK] tạo các **mặt đai ốc**: Chọn template (đỉnh cách đỉnh) > **Ctrl-Shift+Numpad(+) để thêm vùng chọn dựa trên pattern hiện tại > Ctrl-Shift-B (Bevel cho Vertices) > LoopTools.Circle > Extrude > Scale > Face Mode > Fill (F)**
- [TRICK] **Sử dụng Empty** (Cube) để **làm Parent** của một Object khác (Horn-Sừng), những gì áp dụng cho Parent ảnh hưởng đến Child có thể áp dụng với Empty Cube (ví dụ: Mirror, Transform) sẽ dễ dàng hơn với một nhóm phức tạp (Horn-Sừng)
- [Poly Haven](https://polyhaven.com/all){:.external.hvr-forward rel="nofollow" target="_blank"}: cung cấp Assets (HDRIs, Textures, Models) Free (CC0)... (nếu có điều kiện thì mua Add-on ủng hộ)
- Sử dụng [**Node Wrangler**](https://docs.blender.org/manual/en/4.1/addons/node/node_wrangler.html?utm_source=blender-4.1.0){:.external.hvr-forward rel="nofollow" target="_blank"} > **Ctrl-T** (*Add Texture Setup*) để Viewport Sharding **Material Preview** *giống hệt với*{:.w3-yellow} **Rendered** cho thuận tiện sửa Material giống với lúc Rendered (*Material Preview sẽ nhanh hơn Rendered*)
- **Material có thể Copy-Paste** trong menu Material (**Copy to Selected Object**...)
- **C** để chọn (*Circle Select*), **Shift-C** để loại bỏ, cuộn chuột giữa để tăng giảm bán kính Circle Select. Hữu ích khi select Đỉnh/Cạnh/Mặt
- Hình tam giác không thể **UỐN cong**! **Vấn đề Shading trên Surface** xảy ra khi Quads hoặc NGONS có **các đỉnh không nằm trên cùng một mặt phẳng**! *Scale '0'*{:.w3-yellow} có thể làm phẳng một Face nên có thể fix được vấn đề này...
- Fix lỗi Sharding "**butterfly**{:.w3-yellow}" (hình cánh bướm) khi *Mirror Modifier*: **1.Bỏ "Harden Normals"** trong Bevel, **2.chọn "Face Strength" là "Affected"** trong Bevel, **3.Thêm "Weighted Normals"** và tích **chọn "Face Influence"** rồi **tăng Weight lên 100**.

<div class="w3-card w3-leftbar w3-border-green w3-pale-green w3-panel">
	<ol>
		<li>Tạo boolean (quy trình làm việc không phá hủy)</li>
		<li>Boolean Cleanup (sau khi được Apply sẽ cần phải tìm geometry overlaps để clean)</li>
	</ol>
</div>
<div class="w3-card w3-leftbar w3-border-green w3-pale-green w3-panel">
	<ol>
		<li>Tạo toán tử boolean: object để Boolean (Obj toán tử)</li>
		<li>Thực hiện boolean: chuyển Object Mode chọn Obj toán tử > Shift chọn vật thể cần Boolean > <strong>Ctrl-Shift-B</strong> hoặc <strong>Ctrl -+*/</strong> </li>
		<li>Tổ chức collection và Parent: chọn Obj toán tử > <strong>M</strong>: để move tới collection "<strong>Cutters</strong>" > Shift chọn vật thể được Boolean (chọn cuối) > <strong>Ctrl-P</strong> chọn Parent (keep transform)</li>
	</ol>
</div>

- *How can we get clean shading when we run Booleans on curved surfaces?*{:.w3-yellow} Bí quyết là làm cho Boolean bị cô lập chặt chẽ đến mức hầu như không thể nhận thấy được các tạo tác tạo bóng (*dùng Edge Loops để cô lập*).
	- Sử dụng Bevel và Subdivision
	- Tạo 2 Egde loop để chặn đường sáng bên trên và bên dưới đường boolean
	- **Di chuyển/Hợp nhất** các đỉnh chồng chéo: Merge các điểm ở gần (**M > At Center**), kéo xa điểm gần trùng nhau sao cho miệng đường cong là các lưới Quads (trượt cạnh **G G**, trượt đỉnh **Shift-V**), Dissolve Edge **Ctrl-X**. *Phải cẩn thận để không di chuyển các đỉnh giữ độ cong đi quá xa!*{:.w3-yellow}

## Topology Handbook
### Topology Issues
- Why Quads Won't Solve Your Problems? điều này phải liên quan đến **CÁCH BẠN QUẢN LÝ TOPOLOGY** cho dù bạn đang sử dụng **N-GONS hay QUADS**. Ví dụ: Chỉ cần kéo một đỉnh (Shift-V) của một mặt hình trụ sẽ thấy mặc dù vẫn là Quad nhưng Sharding đã bị ảnh hưởng, nguyên nhân là vì đỉnh đó liên quan đến **Curvature** (độ cong), nếu đỉnh đó là mặt phẳng (ko cong) thì không bị ảnh hưởng.
- Curvature (độ cong, sự uốn cong): Đỉnh thuộc một mặt cong là một phần tạo nên mặt cong đó, Sharding sẽ bị ảnh hưởng nếu thay đổi vị trí Đỉnh đó.
- Dealing with Boolean and Bevels:
	- Cách làm thủ công và tốn thời gian là kéo các Vertex (giao nhau) trên bề mặt cong lại gần đường gấp boolean (vẫn giữ Edge), chặn Top-Bottom để cô lập vùng boolean
	- Loại bỏ hết các overlap khi bevel có thể sẽ mất thời gian => không dùng Bevel, lúc Render sẽ sử dụng INPUT Bevel (lúc này sẽ không bị ảnh hưởng overlap của geometry)
	- Sử dụng **Modifier Transfer Data** (*bề mặt phẳng tuyệt đối vì copy từ object khác... phù hợp khi xung quanh không có nhiều Mesh, mesh xung quanh đai ốc quá thưa...*)
	- Sử dụng **Quad Remesher** Blender Add-on
	- Sử dụng **Offset Cut** và **Boolean Cleanup** của **MACHIN3**
	- [**Sử dụng USD**](https://blendermarket.com/creators/machin3){:.external.hvr-forward rel="nofollow" target="_blank"}: 120$ = Meshmachine + Decalmachine + Machin3Tools + Curvemachine
- Lưu ý Blender 4.1
	- Shape Smooth: không tạo Sharp Edges
	- Shape Smooth by Angle: sẽ tạo Sharp Edges (khi chuyển Shape Flat không hết Sharp Edges), để xóa Sharp Edges vào chế độ edit mode với edge mode > clear Sharp
	- **Do vậy**{:.w3-yello}: *workflow sẽ là > chọn Shape Smooth > để "auto smooth":Add Modifier.Normals."Smooth by Angle" (nếu có Weighted Normal thì sẽ nằm ở cuối stack, KHÔNG BAO GIỜ APPLY WEIGHTED NORMAL)*{:.w3-text-red}
		- Nếu có **Weighted Normal** (để làm nổi gân cạnh...) thì cần có Bevel để keep nó
		- *Stack đúng là*{:.w3-yellow}: **Boolean > Bevel > Smooth by Angle > Weighted Normal**

### Shading and design considerations
- Avoid **tránh trước (dự đoán trước)**{:.w3-yellow.w3-text-red} việc Overlap issue khi move, boolean (cut, diffirence, union)...
- Bevel chọn số lượng segment (số mặt trên Bevel) sao cho nếu muốn giảm level poly thì sẽ không bị ảnh hưởng => **luôn chọn segment là SỐ CHẴN**{:.w3-yellow.w3-text-red} (nhìn ở status bar khi kéo Bevel).