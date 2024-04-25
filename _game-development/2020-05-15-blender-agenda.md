---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Blender Agenda"
description: "Blender Agenda"

### HUMAN
header: "Blender Agenda"
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
{% comment %}
## 20 giờ để học một thứ mới

20 giờ để học một thứ mới là một phương pháp hữu ích để nắm vững một kỹ năng hoặc kiến thức trong khoảng thời gian ngắn. Dưới đây là bốn bước quan trọng của lộ trình này:
1. Phân tích kỹ năng
	- Quyết định chính xác kỹ năng mà bạn muốn đạt được là gì khi hoàn thành.
	- Sau đó xem xét kỹ năng đó và chia nó thành nhiều phần nhỏ (Kỹ năng: là tập hợp của nhiều kỹ năng đòi hỏi nhiều thứ khác nhau, càng chia nhỏ chừng nào quyết định càng dễ chừng đó. Phần kỹ năng nào mới thật sự tốt cho tôi để làm được thứ tôi muốn?)
	- Luyện tập những thứ quan trọng trước bạn sẽ có thể cải thiện khả năng của bạn trong thời gian cần thiết ngắn nhất (Thực hành thông minh là điểm chính ở đây)
2. Học đủ để tự sửa sai
	- Tìm 3 hay 5 nguồn lực cho thứ mà bạn muốn học (Sách, Youtube, Udemy...). Lưu ý: không dùng những nguồn lực đó để trì hoãn việc luyện tập. Học vừa đủ để có thể thực hành và tự sửa sai hoặc điều chỉnh khi thực hành.
	- Hãy tập trung vào việc học đến khi bạn có thể tự chữa được những sai lầm của mình. Tự nhận ra mình đang mắc lỗi và sau đó thực hiện khác đi.
3. Hãy dẹp bỏ những trở ngại để luyện tập
	- Review phim (Facebook, Youtube...) thực sự sẽ cản trở bạn luyện tập.
4. Hãy luyện tập ít nhất 20 giờ
	- Rào cản lớn nhất để học những điều mới không phải là trí tuệ, không phải quy trình học cả đống mẹo nhỏ, rào cản lớn nhất là CẢM XÚC. Chúng ta sợ, sợ ngu ngốc...
	- Tránh rào cản tâm ký "hoàn toàn vô dụng và không biết gì hết", phải cam kết dù thế nào cũng sẽ luyện tập ít nhất 20 giờ.
	- Điều gì làm bạn vui? điều gì mà bạn thích? Hãy xông lên làm điều đó, chỉ cần 20h thôi!
{% endcomment %}

{% msg warning <h3 id="tldr"> <a class="anchor" href="#tldr" aria-hidden="true" spy-title="TLDR,"><span class="octicon octicon-link"></span></a>TLDR,</h3> Tóm tắt ngắn gọn các phím tắt và thao tác như bên dưới. (5') %}
- **Selection**:
	- Pick Shortest Path: **Ctrl-Shift-LMB**{:.w3-text-red} để chọn ĐỈNH-CẠNH-MẶT mà đường thẳng nối 2 ĐIỂM CLICK đi qua
	- Tăng giảm vùng chọn: **Ctrl + “-“**{:.w3-text-red} hoặc **Ctrl + “+”**{:.w3-text-red}
	- Chọn LOOP_Đỉnh-Cạnh-Mặt: **Alt + Click**{:.w3-text-red}
	- Select all: **A**{:.w3-text-red}. Select none: **Alt-A**{:.w3-text-red}
	- Invert selection: “**Ctrl-I**{:.w3-text-red}”
- **Mesh Flow**:
	- Đùn: **E**{:.w3-text-red}(x,y,z), Scale: **S**{:.w3-text-red}(x,y,z), Rotate: **R**{:.w3-text-red}(x,y,z), Grap: **G**{:.w3-text-red}(x,y,z), Inset: **I**{:.w3-text-red}, Bevel: **B**{:.w3-text-red}, Fill: **F**{:.w3-text-red}, Knife: **K**{:.w3-text-red}, Split: **At-M**{:.w3-text-red}, Merge: **M**{:.w3-text-red}
	- **Alt-E**{:.w3-text-red} để hiện thêm *nhiều tùy chọn **Extrude*** (Đùn), trong đó "Extrude Individual Faces" để Đùn từng Face riêng biệt dọc theo Normal của nó.
	- Slide Edges: **G G**{:.w3-text-red}, Slide Vertex: **Shift-V**{:.w3-text-red}, LoopCut: **Ctrl-R**{:.w3-text-red}, **Shift-Ctrl-R**{:.w3-text-red} (thêm 2 vòng cạnh 2 bên cạnh đã chọn), Clone: **Shift-D**{:.w3-text-red} hoặc **Alt+D** (**Linked**)
	- Đùn Vertex đến vị trí chuột phải: **Ctrl-RMB**
	- **Shift-Alt-S** To Sphere (*Mesh > Transform > To Sphere...*) để làm tròn edges đang chọn.
	- Rip Vertices: **V** (rạch lưới), Rip Vertices and Fill: **Alt-V**{:.w3-text-red} (rạch rồi nối luôn)
	- Triangulate Faces: **Ctrl-T**{:.w3-text-red} (chuyển mặt được chọn thành tam giác)
	- Triangles to Quads: **Alt-J**{:.w3-text-red} (chuyển mặt tam giác được chọn thành tứ giác)
	- Snapping (điểm Snap là vị trí con trỏ Chuột)
		- **Ctrl**{:.w3-text-red} khi Move sẽ kích hoạt Snap tạm thời	
- **Viewport**:
	- **Numpad**: **7**{:.w3-text-red}:Top, **9**{:.w3-text-red}:Bottom. **1**{:.w3-text-red}:Front, **3**{:.w3-text-red}:Right. **2-8-4-6**{:.w3-text-red} Trên-Dưới-Trái-Phải.
	- **Shading**:
		- **Shift-Z**{:.w3-text-red} toggle Solid vs Wireframe (Wireframe included X-Ray)
		- **Alt-Z**{:.w3-text-red} toggle X-Ray
		- **Z**{:.w3-text-red} để hiện Menu Tròn về Viewport Shading
- **Support**:
	- **Shift-RMB**{:.w3-text-red} để thay đổi vị trí Cursor
	- **Shift-C**{:.w3-text-red} để reset Cursor về (0,0,0)
	- **Shift-S**{:.w3-text-red} để hiện Menu Tròn về Cursor
	- **Shift-TAB**{:.w3-text-red} để hiện Menu Tròn về Chế độ tương tác với đối tượng
	- **.**{:.w3-text-red}(dot) để hiện Menu Tròn về ĐIỂM TỰA cho xoay/scale (**cần phân biệt với Origin Point**)
	- **Isolate**: **Shift-H**{:.w3-text-red} (Hide). Un-hide items: **Alt-H**{:.w3-text-red}
	- **Tools**:
		- Bend (bẻ cong): **Shift-W** (*xoay vòng cung giữa con trỏ chuột và con trỏ 3D*)
		- Solidify Faces: *đùn các mặt một cách đồng đều để tạo thể tích cho một bề mặt*.
		- Intersect (Boolean): *Thực hiện các phép toán Boolean* (giống Boolean Modifier nhưng sẽ phá hủy Geometry)
- **Optimize/Review**:
	- Kiểm tra Normal (*Mesh Edit Mode > then toggle Normal Options...*)
	- Kiểm tra trùng lặp vô tình (*bật auto merge nếu 2 Vertex có cùng location*)

### 3D Fox Character Modeling (20')

```
1:Front, Shift-D nhân đôi Box làm Đầu và Thân
Add Modifier SubD cho Box đầu với level 2
Ctrl-A để apply modifier
S-X để scale Box đầu rộng ra một chút vì SubD đã bị thu lại
Tab sang Edit Mode, chọn đỉnh cao nhất
O để bật Proportional Editing Object, nắn chỉnh để thêm kích thước cho đầu cân đối
Tab về Object Mode rồi SubD với level 2 tiếp
Click chuột phải chọn Shape Smooth (vẫn chưa Apply Modifier)

Chọn Box phần Thân và Scale nhỏ xuống 1 chút so với Đầu
Add Modifier cho Box Thân với level 2 và Ctrl-A để apply
Tab sang Edit Mode và kéo đỉnh cao nhất của Thân lên giống hình quả trứng
G để kéo phần Thân lên nối với phần Đầu
Add tiếp Modifier cho Thân (level 2) và cũng Shape Smooth cho nó. (vẫn chưa Apply Modifier)

Alt-Z để bật X-Ray rồi chọn xóa nửa bên trái của Thân
Tab về Object Mode và add Modifier Mirror, kéo Mirror lên trên SubD
Trong Mirror tick chọn "Clipping" để Ngăn chặn các đỉnh đi qua gương trong quá trình biến đổi.
Trong SubD chọn "On Cage" để Điều chỉnh Cage (cái Lồng/khung chỉnh sửa) thành kết quả sửa đổi.

Chọn Vertex xóa để chuẩn bị kéo Chân (3:Right, X delete Vertex)
Alt-LMB để chọn vòng gốc Chân
tắt Proportional Editing Object và Mesh > Transform > To Sphere (Shift-Alt-F) để làm tròn Edge Loop gốc Chân
bật Proportional Editing Object để nắn chỉnh Edge Loop cho háng nhỏ lại và góc vát bé đi
E để đùn xuống một đoạn hông > LMB để dừng đùn > E tiếp tạo đùi (khi bắt đầu E sẽ tạo 1 Edge Loop phân cách) > LMB dùng đùn phần Đùi
E tiếp tạo phần ống đồng (khi bắt đầu E sẽ tạo 1 Edge Loop phân cách) > LMB dừng đùn ống đồng
E nhưng không đùn để tạo Edge Loop > S để scale vào trong (thu lưới) > LMB + M để Merge At Center

Chọn Vertex xóa để chuẩn bị kéo Tay (3:Right, X delete Vertex)
Cũng thực hiện Alt-LMB để chọn vòng Tay rồi Mesh > Transform > To Sphere (Shift-Alt-F) để làm tròn Edge Loop gốc Tay
S để Scale Gốc tay nhỏ lại 1 chút cho tỉ lệ với kích cỡ của Chân
E đùn cánh tay, cẳng tay, bàn tay, vừa đùn vừa xoay vừa scale để cân chỉnh.
Merge phần kết thúc ở At Center

Điều chỉnh Mesh cho cân đối, nếu làm tốt thì bề mặt body sẽ mượt mà không gấp khúc.
- phối hợp cả 2 hình chiếu để điều chỉnh
- Nếu là điểm chung (của 2 hình chiếu) thì chọn 1 Vertex để kéo, còn không thì phải bật X-Ray để chọn cả mặt bên kia của hình chiếu hiện tại.
- điều chỉnh cả một Edge Loop (Alt-LMB), 1 cặp Vertex (Alt-Z bật X-Ray) hoặc cả một đoạn vùng chọn (Ctrl_+ để tăng vùng chọn)
- R để quay, G để move, Scale để kéo dãn.
- Khi kéo lưới phải biết lưới sẽ xô đẩy như thế nào để kết hợp Loop Edge và di chuyển cả một vùng mặt...
- Khi kéo lưới hãy chọn MatCap thật bóng để xem lưới ảnh hưởng thế nào đến reflection ánh sáng.

Tương tự phần đầu, xóa nửa đầu bên trái để chỉnh sửa Mirror (add Modifier Mirror, kéo Mirror lên trên SubD)
Trong Mirror tick chọn "Clipping" để Ngăn chặn các đỉnh đi qua gương trong quá trình biến đổi.
Trong SubD chọn "On Cage" để Điều chỉnh Cage (cái Lồng/khung chỉnh sửa) thành kết quả sửa đổi.
Nếu có lỗi ở trục Mirror thì tăng Merge Distance ở Mirror lên!!!

Chọn vùng mặt (mũi, mồm) để tách (Seperate "P") Face ra (Shift-D)
Sau khi Seperate by Selection thì Tab chuyển Object Mode để chọn Object vừa tách (vùng mặt)
Add Modifier Solidify để làm dày (tạo volume), kéo Solidify lên trên SubD và dưới Mirror (cần Mirror > Solidify > SubD cuối cùng)
Chọn thickness thích hợp (tầm -0.11m)
Tab để Edit Mode > A để chọn tất cả > G để di chuyển cho sát bề mặt Đầu, S để Scale nhỏ lại chút, tăng Level subD lên một chút (level 3)
Nắm chỉnh lại cho vừa mắt. rồi Tab sang Object Mode, chọn tất cả và G-Z để kéo toàn bộ nhân vật lên sao cho (0,0,0) ở giữa đáy 2 bàn chân.

Xử lý đến phần tai nằm trên Đầu, chọn Vertex để xóa và tạo Edge Loop gốc Tai.
Alt-LMB chọn Loop Edge gốc tai > E rồi S để scale nhỏ lại vì gốc tai sẽ bé hơn mắt lưới chung. Mục đích E nhưng ko đùn để tạo lưới trước khi Scale.
Mesh > Transform > To Sphere để làm tròn Edge Loop gốc Tai.
S-Y để scale theo trục Y (đang ở Right) để kéo thành hình eclip (tai sẽ dẹp chứ ko tròn)
G, R để tinh chỉnh một chút trước khi đùn, khi R thì hãy để con chuột xa điểm mid của vùng chọn để còn xoay.
Kết thúc tai sẽ Merge At Center, nếu làm tốt thì tai sẽ mượt mà và mũm mĩm cute.

Chọn một vùng tai và làm lồi lên bằng Solidify Modifier, cân chỉnh cho hợp lý để có 1 đôi tai đẹp.
Chọn vùng bụng và làm lồi lên bằng Solidify Modifier, cân chỉnh cho hợp lý để có 1 cái bụng lồi đẹp.

chuyển Right và bắt đầu tạo 2 Ria mỗi bên. Chọn 2 mắt lưới > Alt-E để Extrude > chọn "Extrude Individual Faces" để Đùn từng khuôn mặt riêng biệt dọc theo các quy tắc cục bộ.
Thêm Mắt, Mũi, Lông mày. Lông mày Shift-D từ Mắt và Rotate 90 độ, Dissolve Edges để Hòa tan các cạnh, hợp nhất các mặt. Scale cho hợp lý.
Nếu mắt không Mirror khi add Modifier Mirror thì vào Object > Apply > All Transform để Áp dụng phép biến đổi của đối tượng vào dữ liệu của nó.
Tạo viền miệng với Curve (Path), Tab sang Edit Mode để Subdivide. Kéo các Edge Control để tạo Curve cho miệng.
Tab thoát Edit Mode, vào Data Properties > Geometry > Bevel: Round, Depth = 0.06m, chọn Fill Caps để Điền mũ cho các đường cong vát.
Scale lại và đặt vào miệng cho hợp lý. Nhớ kiểm tra cả Top View để đảm bảo đưa sát Object vào bề mặt.

Tạo đuôi cáo với Box, Ctrl-R để chia làm 4 phần, SubD cho mươt.
```
{:.w3-card.w3-leftbar.w3-border-yellow.w3-pale-yellow.w3-panel.w3-padding-16}

### What Next?
- [3D Modeling Fundamentals (1. Tài liệu tham khảo > 2. Tỷ lệ > 3. Đơn giản hóa)](https://www.ebalstudios.com/blog/3d-modeling-fundamentals){:.external.hvr-forward rel="nofollow" target="_blank"}
- [3D Modeling Artifacts - Flow Check Reflection Map - Zebra Stripe Diagnostic](https://www.ebalstudios.com/blog/3d-modeling-artifacts-flow-check-reflection-map){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Polygon Modeling Practical Basics](https://www.ebalstudios.com/blog/polygon-modeling-basics){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Hard Surface Cheat Sheets by JS Mussi](https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/106766/themes/2153408233/downloads/530013a-07a-0e84-176e-0a41fbbafe6_Hard_Surface_Cheat_Sheets.pdf){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Topology (wiki.polycount.com)](http://wiki.polycount.com/wiki/Topology){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Youtube: CGDive (Blender Rigging Tuts)](https://www.youtube.com/@CGDive/videos){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Turbosquid Training](https://resources.turbosquid.com/training/){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Pinterest - Polygon modeling](https://www.pinterest.com/search/pins/?q=Polygon%20modeling){:.external.hvr-forward rel="nofollow" target="_blank"}
- [CG 101: 28 Bài học vỡ lòng về Thiết Kế Đồ Họa 3D cho người mới bắt đầu](https://lamphimquangcao.tv/cg-101-28-bai-hoc-vo-long-ve-thiet-ke-hoa-3d-cho-nguoi-moi-bat-dau/){:.external.hvr-forward rel="nofollow" target="_blank"}
- [8 Tips for Clean Topology in Blender](https://cgcookie.com/posts/guide-to-clean-topology){:.external.hvr-forward rel="nofollow" target="_blank"}
- [9 dự án 3D Blender đơn giản dành cho người mới bắt đầu](https://cgcookie.com/posts/9-simple-blender-projects-for-beginners){:.external.hvr-forward rel="nofollow" target="_blank"}
