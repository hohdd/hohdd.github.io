---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity Getting Start
description: Unity Getting Start

### HUMAN
header: Unity Getting Start
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Unity # this for AMP related post
### category: dùng để group collection
category: Unity

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Getting Start
1. Tải Unity Hub > Đăng nhập bằng email > nhận mã qua email
2. Từ Unity Hub > tải về Editor LTS > có thể Add Modules ...
3. New Project > Learning > có thể tải sản một số Game Template có sẵn về để tìm hiểu (Karting, LEGO, FPS...)

## Unity Editor (Interface)
Tham khảo: https://docs.unity3d.com/2021.3/Documentation/Manual/UsingTheEditor.html
- Toolbar: gồm
	+ thông tin Account
	+ Unity Game Services
	+ Play mode
	+ Undo history
	+ Unity Search (Ctrl+K): ? help, p: only Project, find: tìm activate Files, h: only Hierarchy, m: only Menus, api: only Static API, pkg: only Packages...
	+ Layers: cho phép Show/Hide/Clickable các objects thuộc về layer. Có thể Edit Tags và Layers. Thêm/Sửa/Xóa Tags, có tối đa 31 User Layer và một số Builtin Layer mặc định.
	+ Layout: kiểu layout sử dụng (2 by 3, 4 split...)
- Hierarchy window: Unity sử dụng khái niệm "parent-child" để Phân cấp và Organize các GameObjects. Sử dụng Kéo-Thả để sắp xếp...
	+ Ctrl+Shift+N: để tạo mới empty GameObject nằm ở root
	+ Ctrl+Shift+G: để tạo parent của selected GameObject hiện tại
	+ Ctrl+D: để duplicate selected GameObject hiện tại
	+ Có thể thêm nhiều Scene vào Hierarchy
		+ Tip: giữ Alt để không loading Scence khi kéo Scene vào Hierarchy
		+ Set Active Scene để khi thêm mới GameObjects bằng Scripts sẽ thêm vào Scene đó
		+ Xem thêm "Work with multiple scenes in Unity": https://docs.unity3d.com/2021.3/Documentation/Manual/MultiSceneEditing.html
- Game view: để xem trước game sẽ như thế nào trong các thiết bị.
	![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/device-simulator-view.png)
	+ Game/Simulator: với Simulator có thể xem trước trong các thiết bị, Rotate, Safe Area
	+ Aspect: kiểm tra xem trò chơi trông như thế nào trên các màn hình có tỷ lệ khung hình khác nhau.
	+ Scale slider: để phóng to và kiểm tra các khu vực của màn hình Trò chơi một cách chi tiết hơn.
	+ Gizmos: hiển thị của Gizmos các GameObject, có thể filter để chỉ xem một số loại Gizmo nhất định.
- Scene view: là nơi trực quan hóa và tương tác với thế giới game trong Unity Editor.
	+ Overlays: nhấn "Space" để hiển thị Overlays Menu (Tools, View Options, Grid and Snap Toolbar, Orientation, Search, Tool Settings)
	+ Tools:
		- Hand: Q
		- Move: W
		- Rotate: E
		- Scale: R
		- RectTransform: T (thường được sử dụng để định vị 2D, giao diện người dùng)
		- Tổng hợp Transform: Y (Move + Rotate + Scale)
		- Toggle Pivot Position (Tool Settings): Z
		- Toggle Pivot Orientation (Tool Settings): X
		![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/game-objects-transform-modes.png)
	+ Flythrough mode: Giữ chuột phải lên Scene View và nhấn kèm các phím sau:
		+ AD, WS, QE để di chuyển Trái-Phải, Tiến-Lùi, Lên-Xuống
		+ Giữ thêm Shift để di chuyển nhanh hơn
		+ cũng có thể sử dụng các phím mũi tên để Flythrough mode mà ko cần giữ chuột phải (nhưng sẽ không điều chỉnh hướng bay/xoay được)
	+ Grid: mặc định Y (nằm ngang)
		- có thể chọn hiện Grid theo phương nào (chỉ 1 trong X, Y, Z)
		- có thể ẩn hiện Grid trong Scene View
		- điều chỉnh kích thước các ô Grid với Ctrl+[/]
		- có thể đổi màu Grid trong Edit > Preferences > Color
		- có thể move Grid đến Object đang selected hoặc Original
	+ Snapping: có 3 loại Snapping
		- World grid snapping: https://docs.unity3d.com/2021.3/Documentation/Manual/GridSnapping.html
		- giữ Ctrl+Shift để move Object theo mặt phẳng Grid đã chọn.
		- giữ V để kéo các góc của Object Snap với Object khác.
	+ Scene Gizmo: mặc định Free + Perspective
		- có thể click chuột phải lên Gizmo để chọn góc nhìn nhanh
		- click chuột vào X, Y, Z để chuyển góc nhìn camera đến Top, Left, Right, Bottom...
	+ Scene view Camera: Những điều chỉnh ở đây không ảnh hưởng đến cài đặt trên GameObjects với các thành phần của Camera.
		- Field of View: Chiều cao của góc nhìn của Camera.
		- ... Mẹo: Để đặt lại các thuộc tính về giá trị mặc định, hãy nhấp vào biểu tượng bánh răng ở góc trên cùng bên phải của menu Cài đặt máy ảnh và chọn Đặt lại.
	+ Scene View Draw Mode: có thể chọn cách hiển thị của các GameObjects trong Scene View như thế nào (Shaded, Wireframe, Render Paths...)
	+ Scene visibility:
		- Chọn 1 GameObject ở Hierarchy và nhấn "H" để on/off visibility
		- Shift+H để vào chế độ "Isolate selected GameObjects" (ẩn những cái khác để chỉ xem cái đang chọn), nhấn Shift+H lại để thoát Isolate.
	+ Selection colors:
		- Khi một GameObject được chọn, nó có viền Orange
		- Nếu GameObject được chọn là Parents thì Children của nó có viền màu Blue
		- có thể thay đổi màu trong Edit > Preferences > Color
- Inspector window
	+ Khi có hai hoặc nhiều mục được chọn, bạn có thể chỉnh sửa tất cả các thuộc tính "chung" của chúng, các thuộc tính khác sẽ có dấu "-".
	+ "Lock the Inspector" để chỉnh sửa thuộc tính trong nó mà không bị nhảy sang Inspector của GameObject khác.
	+ "Toggle Debug Mode" để hiển thị cả biến private mặc dù không chỉnh sửa được chúng. Để bật chế độ Gỡ lỗi, hãy nhấp vào nút Mục khác (⋮) để mở menu ngữ cảnh và chọn Gỡ lỗi.
	+ Focused Inspectors: luôn hiển thị các thuộc tính của mục đã mở, ngay cả khi bạn chọn mục khác trong Scene hoặc Project. Unity lưu mọi Focused Inspectors đang mở khi bạn đóng Dự án và khôi phục chúng khi bạn mở lại.
		- Right-click a GameObject in the Hierarchy view, or an Asset in the Project view. (hoặc bấm Alt+P)
		- Một Component trong Inspector cũng có thể Focused
		- Hover lên title của Focused Inspector hoặc click chuột phải lên title và "ping" để tìm xem GameObject đó ở đâu (Hierarchy, Project Assets)
- Status Bar:
	+ Tin nhắn gần đây nhất được ghi vào cửa sổ Console . Bấm vào thông báo để mở cửa sổ Console.
	+ Thanh tiến trình chung cho các tác vụ không đồng bộ khác nhau
	+ Chế độ tối ưu hóa mã hiện tại. Nhấp vào biểu tượng tối ưu hóa mã để chuyển giữa chế độ DEBUG và chế độ RELEASE
	+ Trạng thái tạo ánh sáng tự động cho Chiếu sáng toàn cầu (Global illumination)
	+ Chỉ báo hoạt động (spinner) hiển thị khi Unity biên dịch tập lệnh C# hoặc chạy các tác vụ không đồng bộ.
- Console Window:
	+ Enter Player IP, tìm kiếm, lọc các log từ Editor, Player, Devices...
	+ Có thể mở open log files...
- Additional windows: Ngoài các cửa sổ chính của giao diện Unity, còn có một số cửa sổ khác được mô tả trong các phần khác. VD: Animation, Profiler, Lighting, Occlusion Culling, Rendering, Timeline...
- Undo History: cung cấp một cách trực quan để điều hướng qua lịch sử hoàn tác.<br>![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/undo-history-redo.png)

## Create Gameplay
- Scenes:
	+ mỗi Scene có môi trường, nhân vật, chướng ngại vật, đồ trang trí và giao diện người dùng riêng.
	+ Scene mặc định, chứa a Main Camera and a directional Light.
	+ Có thể tạo Scene template (Unity sử dụng các Scene template để tạo Scene mới. Scene template là nội dung được lưu trữ trong Project. Chúng tương tự như các Scene nhưng được thiết kế để sao chép thay vì sử dụng trực tiếp.)
	+ Ctrl+N để tạo Scene mới hoặc click chuột phải Project Assets chọn create Scene.
- GameObjects:
	+ Mặc định sẽ có thuộc tính Transform (luôn có, không thể xóa), được sử dụng để lưu trữ Position, Rotation, Scale, Parenting state.
	+ Parenting: root > GameObject > GameObject ... Cơ thể > Cánh tay > Bàn tay > Ngón tay... global coordinates > local coordinates
	+ Limitations with Non-Uniform Scaling: Tỷ lệ không đồng nhất là khi Tỷ lệ trong Biến đổi có các giá trị khác nhau cho x, y và z; ví dụ (2, 4, 2). Ngược lại, tỷ lệ đồng nhất có cùng giá trị cho x, y và z; ví dụ (3, 3, 3).
		- Một số Component nhất định không hỗ trợ đầy đủ khả năng chia tỷ lệ không đồng nhất. Ví dụ: một số Component có phần tử hình tròn hoặc hình cầu được xác định bởi thuộc tính bán kính.
		- Khi một đối tượng con có đối tượng cha mẹ có tỷ lệ không đồng nhất và được xoay so với đối tượng cha mẹ đó, nó có thể bị lệch hoặc "bị cắt".
		- Vì lý do hiệu suất, một đối tượng con của đối tượng cha có tỷ lệ không đồng nhất sẽ không được cập nhật tự động tỷ lệ khi nó xoay.
	+ Importance of Scale: Tỷ lệ Scale của Transform xác định sự khác biệt giữa kích thước của Mesh trong Modeling Application của bạn và kích thước của Mesh đó trong Unity. Kích thước của Mesh trong Unity (và do đó là thang đo của Transform) rất quan trọng, đặc biệt là trong quá trình mô phỏng vật lý. Theo mặc định, Physics Engine giả định rằng một đơn vị trong không gian tương ứng với một mét. Nếu một vật thể rất lớn, nó có thể rơi ở trạng thái “chuyển động chậm”.
		- Có ba yếu tố có thể ảnh hưởng đến Scale đối tượng của bạn:
			+ Kích thước của Mesh trong Modeling Application 3D của bạn.
			+ Cài đặt Hệ số tỷ lệ "Mesh Scale Factor" trong "Import Settings" của đối tượng.
			+ Các giá trị Scale của Transform Component.
		- Tốt nhất, bạn không nên điều chỉnh Scale của Transform Component. Tùy chọn tốt nhất là tạo Models real-life sale. Tùy chọn tốt nhất tiếp theo là điều chỉnh tỷ lệ khi import trong "Import Settings".
	+ Tips for Working with Transforms:
		- Parenting Transforms về <0,0,0> trước khi thêm Child. Điều này có nghĩa là tọa độ cục bộ của Child sẽ giống với tọa độ chung, giúp bạn dễ dàng đảm bảo rằng bạn đặt Child ở đúng vị trí.
		- Việc thay đổi Scale ảnh hưởng đến Position của child Transforms. Ví dụ: Scale cha mẹ thành (0,0,0) sẽ định vị tất cả Child ở (0,0,0) so với cha mẹ.
	+ Components:
		- là các phần chức năng (Functional) của mọi GameObject. Các Components chứa các thuộc tính mà bạn có thể chỉnh sửa để xác định hành vi của GameObject.<br>![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ComponentBrowser1.png)
		- Testing properties: trong "Play Mode" có thể thay đổi value của properties để xem nó tác động thế nào đến trò chơi, khi thoát "properties" value sẽ được reset.
	+ Deactivate GameObjects:
		- Để tạm thời xóa GameObject từ Scene, bạn có thể đánh dấu GameObject là "inactive" (trong Inspector, trong Script sử dụng method SetActive).
		- Nếu bạn Deactivate một GameObject gốc thì bạn cũng Deactivate tất cả các GameObject con của nó vì việc Deactivate sẽ ghi đè cài đặt "activeSelf" trên tất cả các GameObject con.
	+ "Tag" là một từ tham chiếu mà bạn có thể gán cho một hoặc nhiều GameObject để tìm reference trong code (FindWithTag)
	+ Static GameObjects:
		- Nếu một GameObject không di chuyển trong thời gian chạy, nó được gọi là "static GameObject". Nếu một GameObject di chuyển trong thời gian chạy thì nó được gọi là "dynamic GameObject".
		- Nhiều hệ thống trong Unity có thể tính toán trước thông tin về GameObject tĩnh trong Trình chỉnh sửa. Vì GameObject không di chuyển nên kết quả của những phép tính này vẫn có giá trị trong thời gian chạy. Điều này có nghĩa là Unity có thể tiết kiệm thời gian tính toán trong thời gian chạy và có khả năng cải thiện hiệu suất.
		- Các giá trị sau đây có sẵn:
			+ Nothing: Không đưa GameObject vào quá trình tính toán trước cho bất kỳ hệ thống nào.
			+ Everything: Đưa GameObject vào quá trình tính toán trước cho tất cả các hệ thống bên dưới.
			+ Contribute GI: Khi bạn bật thuộc tính này, Unity sẽ bao gồm Mesh Renderer trong "global illumination" tính toán.
			+ Occluder Static/Occludee Static: Đánh dấu GameObject là "Static Occluder/Static Occludee" trong hệ thống "occlusion culling". Xem thêm: https://docs.unity3d.com/2021.3/Documentation/Manual/OcclusionCulling.html
			+ Batching Static: Kết hợp Mesh  của GameObject với các Mesh đủ điều kiện khác để có khả năng giảm rendering costs trong thời gian chạy.
			+ Navigation Static: Bao gồm GameObject khi tính toán trước dữ liệu điều hướng (Navigation and Pathfinding).
			+ Off Mesh Link Generation: Cố gắng tạo Liên kết OffMesh bắt đầu từ GameObject này khi tính toán trước dữ liệu điều hướng (Navigation and Pathfinding). Xem thêm: https://docs.unity3d.com/2021.3/Documentation/Manual/nav-BuildingOffMeshLinksAutomatically.html
			+ Reflection Probe: Bao gồm GameObject này khi tính toán trước dữ liệu cho Reflection Probe có thuộc tính Type được đặt thành Baked (Lighting).

## Scripting


## Learning Pathways
- Home: https://learn.unity.com/
	- Pathways: https://learn.unity.com/pathways
		- Unity Essentials (Foundational): https://learn.unity.com/tutorial/get-ready-for-unity-essentials
			- TODO (Playground: Reference Guide) https://learn.unity.com/tutorial/playground-reference-guide#64885b62edbc2a01d4bbf3af
		
		- Junior Programmer (Foundational): TODO
		- Creative Core (10 weeks): TODO
		
- Get started
	- Unity Essentials:
		- Begin a Microgame:
			+ Làm quen với Unity Editor
			+ Các phím tắt
			+ Tìm hiểu cấu trúc Files/Folders

## Tools:
- Selection History Navigator: https://matthewminer.com/2018/04/22/unity-selection-history-navigator
- Scene View Bookmarks: https://github.com/mminer/scene-view-bookmarks.git


## Xem sau:
- Github:
	- https://github.com/mminer?tab=repositories
	- https://learn.unity.com/tutorial/playground-reference-guide#64885b62edbc2a01d4bbf3af
