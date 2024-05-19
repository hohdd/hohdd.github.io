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
- Boolean Modifier nếu object áp dụng Boolean đã có hình hài đầy đủ (nhưng vẫn phụ thuộc vào object khác, ví dụ: Union, Cutter) thì **có thể ẩn Object đã Union (H) và Cutters đi** (nhưng khi di chuyển sẽ phải kèm theo chúng hoặc sẽ cần Apply Modifer luôn)
	- Để di chuyển Object đã apply modifier kèm "phụ thuộc" của nó (object Union hoặc Cutters) > **Set Parent**{:.w3-text-red}: parent cần chọn cuối cùng > **Ctrl-P hoặc menu:Object > Parent**{:.w3-text-red} (*Alt-P để un-parent*). Tất nhiên nếu keep reference (collection) và khi điều chỉnh parent object sẽ tốn performance (giật)
	- Trường hợp muốn tách riêng object data (ví dụ 1 object bị slide thành 2 phần nhưng Blender vẫn đang sử dụng chung data) => vào Object Data > tạo bản sao (icon số lượng object dùng chung data, bên cạnh Fake User, để ý tên: chọn object sau khác tên để tách bản sao sẽ được 2 tên trùng với tên object)
	- **Lỗi surface** khi cả boolean object và toán tử đều "Shape Smooth by Angle" => giải quyết bằng cách flip normal của object toán tử boolean! => ko ổn, bị đảo normal, khi sửa lại thì vẫn bị => sẽ không làm Smooth object dùng để cắt, *khi Apply Modifier sẽ Smooth kết quả sau cũng được! (kết quả thế nào thì sau khi apply đều có thể toggle Smooth để fix!)*{:.w3-yellow}
	- Có thể sử dụng Boolean cho object boolean (toán tử boolean)
	- "**Ăn cắp hình học**{:.w3-text-red}" có thể nhanh chóng tạo được object toán tử boolean.
- Di chuyển một object lên bề mặt một object => **bật Snap Face + Align Rotation to Target**.
	- Để S/G/E theo hướng XYZ local (khi object bị nghiêng, không còn theo XYZ của world) thì **ZZ, XX, YY**{:.w3-yellow}
- **Auto Merge Vertices** ở góc trên cùng bên phải (4.1) trong option có thể cài đặt **Threshold**, chỉ gần chọn Edit.Vertice rồi G và nhả, nó sẽ so sánh threahold với khoảng cách từ vị trí thả đến các Vertice lân cận, nếu nhỏ hơn thì nó sẽ merge vào vị trí gần nhất. Hoặc **Merge.At Center** cũng có thể áp dụng cho các Vertices.
- **ĐỐI XỨNG XUYÊN TÂM**: Edit Mode > Mesh > Symmetrize để áp dụng mesh đối xứng (**lưu ý cần Apply Rotation trước**): Edit mode > select all (A) > Symmetrize và chọn trục và hướng đối xứng xuyên tâm
- **Method** của các **Modifier** ảnh hưởng (**phạm vi áp dụng**) tùy thuộc vào **Angle, Weight, Vertex Group**... (**chức năng Select** cũng có tùy chọn Select theo: Sharp Edges, Similar...)
- Từng bước xử lý overlap, xem vấn đề nó nằm ở đâu (duplicate egde/vertex? trùng line connect?), biết được nó do đâu mà có? để giải quyết (xóa bỏ duplicate, move line connect ra một vị trí khác, weight edge...)

<div class="w3-card w3-leftbar w3-border-green w3-pale-green w3-panel">
	<ol>
		<li>Tạo boolean (quy trình làm việc không phá hủy)</li>
		<li>Boolean Cleanup (sau khi được Apply sẽ cần phải tìm geometry overlaps để clean)</li>
	</ol>
	<ol>
		<li>Tạo toán tử boolean: object để Boolean (Obj toán tử)</li>
		<li>Thực hiện boolean: chuyển Object Mode chọn Obj toán tử > Shift chọn vật thể cần Boolean > <strong>Ctrl-Shift-B</strong> hoặc <strong>Ctrl -+*/</strong> </li>
		<li>Tổ chức collection và Parent: chọn Obj toán tử > <strong>M</strong>: để move tới collection "<strong>Cutters</strong>" > Shift chọn vật thể được Boolean (chọn cuối) > <strong>Ctrl-P</strong> chọn Parent (keep transform)</li>
	</ol>
</div>

- *How can we get clean shading when we run Booleans on curved surfaces?*{:.w3-yellow} Bí quyết là làm cho Boolean bị cô lập chặt chẽ đến mức hầu như không thể nhận thấy được các tạo tác tạo bóng.
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
	- Sử dụng **Modifier Transfer Data** (*giải pháp cuối cùng khi xung quanh không có nhiều Mesh...*)
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
- Avoid tránh Overlap issue khi move, boolean (cut, diffirence, union)...
- Bevel chọn số lượng segment (số mặt trên Bevel) sao cho nếu muốn giảm level poly thì sẽ không bị ảnh hưởng => luôn chọn segment là SỐ CHẴN (nhìn ở status bar khi kéo Bevel).