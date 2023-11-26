---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity Getting Start - làm việc với Unity Editor (Interface)
description: Unity Getting Start - làm việc với Unity Editor (Interface)

### HUMAN
header: Unity Getting Start - làm việc với Unity Editor (Interface)
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
collection: Get_Started # this for AMP related post
### category: dùng để group collection
category: Get_Started

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

### Toolbar
- Toolbar: gồm
	+ thông tin Account
	+ Unity Game Services
	+ Play mode
	+ Undo history
	+ Unity Search (Ctrl+K): ? help, p: only Project, find: tìm activate Files, h: only Hierarchy, m: only Menus, api: only Static API, pkg: only Packages...
	+ Layers: cho phép Show/Hide/Clickable các objects thuộc về layer. Có thể Edit Tags và Layers. Thêm/Sửa/Xóa Tags, có tối đa 31 User Layer và một số Builtin Layer mặc định.
	+ Layout: kiểu layout sử dụng (2 by 3, 4 split...)

### Hierarchy window
- Hierarchy window: Unity sử dụng khái niệm "parent-child" để Phân cấp và Organize các GameObjects. Sử dụng Kéo-Thả để sắp xếp...
	+ Ctrl+Shift+N: để tạo mới empty GameObject nằm ở root
	+ Ctrl+Shift+G: để tạo parent của selected GameObject hiện tại
	+ Ctrl+D: để duplicate selected GameObject hiện tại
	+ Có thể thêm nhiều Scene vào Hierarchy
		+ Tip: giữ Alt để không loading Scence khi kéo Scene vào Hierarchy
		+ Set Active Scene để khi thêm mới GameObjects bằng Scripts sẽ thêm vào Scene đó
		+ Xem thêm "Work with multiple scenes in Unity": https://docs.unity3d.com/2021.3/Documentation/Manual/MultiSceneEditing.html

### Game view
- Game view: để xem trước game sẽ như thế nào trong các thiết bị.
	![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/device-simulator-view.png)
	+ Game/Simulator: với Simulator có thể xem trước trong các thiết bị, Rotate, Safe Area
	+ Aspect: kiểm tra xem trò chơi trông như thế nào trên các màn hình có tỷ lệ khung hình khác nhau.
	+ Scale slider: để phóng to và kiểm tra các khu vực của màn hình Trò chơi một cách chi tiết hơn.
	+ Gizmos: hiển thị của Gizmos các GameObject, có thể filter để chỉ xem một số loại Gizmo nhất định.

### Scene view
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

### Inspector window
- Inspector window
	+ Khi có hai hoặc nhiều mục được chọn, bạn có thể chỉnh sửa tất cả các thuộc tính "chung" của chúng, các thuộc tính khác sẽ có dấu "-".
	+ "Lock the Inspector" để chỉnh sửa thuộc tính trong nó mà không bị nhảy sang Inspector của GameObject khác.
	+ "Toggle Debug Mode" để hiển thị cả biến private mặc dù không chỉnh sửa được chúng. Để bật chế độ Gỡ lỗi, hãy nhấp vào nút Mục khác (⋮) để mở menu ngữ cảnh và chọn Gỡ lỗi.
	+ Focused Inspectors: luôn hiển thị các thuộc tính của mục đã mở, ngay cả khi bạn chọn mục khác trong Scene hoặc Project. Unity lưu mọi Focused Inspectors đang mở khi bạn đóng Dự án và khôi phục chúng khi bạn mở lại.
		- Right-click a GameObject in the Hierarchy view, or an Asset in the Project view. (hoặc bấm Alt+P)
		- Một Component trong Inspector cũng có thể Focused
		- Hover lên title của Focused Inspector hoặc click chuột phải lên title và "ping" để tìm xem GameObject đó ở đâu (Hierarchy, Project Assets)
	+ Editing properties (Numeric field expressions): Các trường số cũng hỗ trợ các chức năng đặc biệt hữu ích khi chỉnh sửa nhiều đối tượng được chọn cùng một lúc:
		- L(a,b) dẫn đến đường nối tuyến tính giữa a và b.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/inspector-expr-L.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
		- R(a,b) dẫn đến một giá trị ngẫu nhiên giữa a và b.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/inspector-expr-R.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
		- Các biểu thức +=, -=, *=, /= có thể được sử dụng để sửa đổi giá trị hiện tại, ví dụ: nhập *=2 sẽ làm cho tất cả giá trị trường lớn gấp đôi.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/inspector-expr-assign.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
		- ExpressionEvaluator: sqrt(a), floor(a), ceil(a), round(a), cos(a), sin(a), tan(a), pi. Nhập cos(L(0,2*pi))*5 vào X và sin(L(0,2*pi))*5 vào tọa độ Z sẽ đặt mười viên nang đã chọn vào một vòng tròn.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/inspector-expr-trig.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Others
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

### Scenes
- Scenes:
	+ mỗi Scene có môi trường, nhân vật, chướng ngại vật, đồ trang trí và giao diện người dùng riêng.
	+ Scene mặc định, chứa a Main Camera and a directional Light.
	+ Có thể tạo Scene template (Unity sử dụng các Scene template để tạo Scene mới. Scene template là nội dung được lưu trữ trong Project. Chúng tương tự như các Scene nhưng được thiết kế để sao chép thay vì sử dụng trực tiếp.)
	+ Ctrl+N để tạo Scene mới hoặc click chuột phải Project Assets chọn create Scene.

### GameObjects
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

### Save your work
- Save your work:
	- Scene changes: Nếu bạn thêm, di chuyển hoặc xóa GameObject. Nếu bạn thay đổi các tham số của GameObject trong Inspector.
	- Project-wide changes: Những thay đổi trên toàn dự án trong Unity áp dụng cho toàn bộ dự án của bạn chứ không phải cho một Scence cụ thể.
		+ Project Settings: các file được lưu trong thư mục "Library", Input > InputManager.asset, Tags And Layers > TagManager.asset, Player > ProjectSettings.asset...
		+ Build Settings: Unity lưu các thay đổi đối với Cài đặt bản dựng trong thư mục "Library" dưới dạng EditorBuildSettings.asset.
		+ Changed assets: (Lưu ý) Một số loại nội dung có nút "Apply" trong "Inspector". Unity sẽ không lưu những thứ này trừ khi bạn chọn "Apply".
		+ Dirty assets: các tệp trên đĩa của bạn đã được sửa đổi trong phần mềm nhưng chưa được lưu.

### Prefabs
- Prefabs: Hệ thống Prefab của Unity cho phép bạn tạo, định cấu hình và lưu trữ GameObject hoàn chỉnh với tất cả các thành phần, giá trị thuộc tính và GameObject con của nó dưới dạng Nội dung có thể tái sử dụng.
	+ Creating Prefabs: Để tạo assets Prefab, hãy kéo GameObject từ Hierarchy vào Project window (Quá trình này cũng biến GameObject ban đầu thành một Prefab instance). Các Prefab instance hiển thị trong Hierarchy với text blue và GameObject gốc của Prefab được hiển thị bằng biểu tượng Prefab hình khối blue.
	+ Creating Prefab instances: có thể tạo các phiên bản của Prefab bằng cách kéo Prefab Assets từ chế Project view to Hierarchy or Scene view. (cũng có thể tạo các Prefabs instance trong runtime bằng Scripting)
	+ Replacing existing prefabs: có thể thay thế Prefab bằng cách kéo GameObject mới từ Hierarchy và thả nó lên trên Prefab hiện có trong Project window. (Lưu ý: Unity matching theo "NAME", do đó phải đảm bảo tất cả GameObject trong Prefab đều có tên duy nhất)
	+ Instance overrides:
		- cho phép tạo các biến thể giữa các Prefab instance, trong khi vẫn liên kết các instance đó với cùng một Asset Prefab.
		- Lưu ý: chỉ có thể overrides properties, thêm và xóa components, không thể xóa một phần của Prefab (GameObject/Nest Prefab), thay vì xóa thì có thể deactivate vì deactivate là property override.
		- Trong Inspector, phần override instance được hiển thị với Text Name được in đậm và có đường màu xanh lam ở lề trái. Ngoài ra trên Hierarchy và Inspector cũng có badges +- khi Prefab Instnace Override có Add/Remove components.
		- Overridden Property Value luôn được ưu tiên hơn Value từ Asset Prefab và nó cũng không ảnh hưởng gì tới Asset Prefab gốc
		- Alignment (Position, Rotation, Width, Height, Margins...) không được tính là Prefab Override vì thông thường bạn sẽ muốn các Prefab Instance ở các vị trí và góc quay khác nhau.
	+ Editing a Prefab via its instances<br>![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PrefabsInspectorControls1.png)
		- Applying: để áp dụng các Overrides của instance hiện tại vào Asset Prefab
		- Reverting: để loại bỏ tất cả các Overrides để về giá trị Prefab gốc<br>![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PrefabsOverridesDropdown1.png)
		- có thể click vào một mục của Overrides Drop-down để kiểm tra override đó<br>![alt](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PrefabsOverridesDropdownCompareComponent1.png)

## Asset Workflow

Asset Workflow là quy trình tạo, quản lý và sử dụng các tài sản trong Unity. Asset Workflow bao gồm các bước sau:
- Tạo tài sản: Bước đầu tiên là tạo các tài sản cần thiết cho trò chơi của bạn. Tài sản có thể là bất kỳ thứ gì, từ mô hình 3D đến âm thanh và kịch bản.
- Xuất bản tài sản: Sau khi tạo tài sản, bạn cần xuất bản chúng để có thể sử dụng trong project của mình.
- Quản lý tài sản: Bạn cần quản lý tài sản của mình một cách hiệu quả để dễ dàng tìm thấy và sử dụng chúng.
- Sử dụng tài sản: Bước cuối cùng là sử dụng tài sản trong cảnh của trò chơi của bạn.

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/AssetWorkflowOverview.svg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Tạo tài sản

Có nhiều cách để tạo tài sản trong Unity. Bạn có thể tạo tài sản từ đầu bằng cách sử dụng các công cụ của Unity, hoặc bạn có thể nhập tài sản từ các nguồn bên ngoài, chẳng hạn như các trang web tải xuống tài sản miễn phí hoặc trả phí.

Nếu bạn muốn tạo tài sản từ đầu, Unity cung cấp một bộ công cụ mạnh mẽ để giúp bạn. Các công cụ này bao gồm:
- Modeler: Công cụ này cho phép bạn tạo mô hình 3D.
- Texturer: Công cụ này cho phép bạn tạo kết cấu cho các mô hình 3D.
- Audio Mixer: Công cụ này cho phép bạn tạo và chỉnh sửa âm thanh và nhạc.
- Scripting Editor: Công cụ này cho phép bạn tạo và chỉnh sửa kịch bản.

### Xuất bản tài sản

Sau khi tạo tài sản, bạn cần xuất bản chúng để có thể sử dụng trong project của mình. Để xuất bản tài sản, bạn có thể sử dụng menu File > Export Asset.

Khi xuất bản tài sản, bạn có thể chọn định dạng tệp mà bạn muốn xuất. Unity hỗ trợ nhiều định dạng tệp khác nhau, bao gồm .fbx, .obj, .png, .wav và .cs.

### Quản lý tài sản

Unity cung cấp một số công cụ để giúp bạn quản lý tài sản của mình. Các công cụ này bao gồm:
- Project Browser: Cửa sổ này cho phép bạn xem tất cả các tài sản trong project của mình.
- Asset Store: Cửa hàng trực tuyến này cung cấp nhiều tài sản miễn phí và trả phí mà bạn có thể sử dụng trong trò chơi của mình.
- Asset Bundles: Asset Bundles là một cách để nhóm các tài sản lại với nhau thành một tệp duy nhất. Điều này có thể giúp bạn giảm kích thước project của mình và cải thiện hiệu suất.

### Sử dụng tài sản

Sau khi xuất bản tài sản, bạn có thể sử dụng chúng trong cảnh của trò chơi của mình. Để sử dụng tài sản, bạn có thể kéo và thả chúng vào cửa sổ Hierarchy.

Bạn cũng có thể sử dụng mã để sử dụng tài sản. Ví dụ: bạn có thể sử dụng mã để tải tài sản từ tệp hoặc tạo đối tượng từ tài sản.

Dưới đây là một số mẹo để cải thiện Asset Workflow của bạn:
- Sử dụng các thư mục và tên tài sản mô tả nội dung của chúng. Điều này sẽ giúp bạn dễ dàng tìm thấy các tài sản mà bạn cần.
- Tạo các Asset Bundles cho các tài sản có liên quan. Điều này sẽ giúp bạn giảm kích thước project của mình và cải thiện hiệu suất.
- Sử dụng mã để tải tài sản từ tệp. Điều này sẽ giúp bạn tiết kiệm thời gian và cải thiện hiệu suất.

### AssetBundles

AssetBundles là một tính năng của Unity cho phép bạn nhóm các tài sản lại với nhau thành một tệp duy nhất. AssetBundles có thể được sử dụng để giảm kích thước project, cải thiện hiệu suất và dễ dàng phân phối tài sản.

Các thành phần của AssetBundles:
- Manifest: Manifest là một tệp văn bản chứa thông tin về các tài sản được bao gồm trong AssetBundle.
- Assets: Assets là các tài sản thực tế được bao gồm trong AssetBundle.

Cách tạo AssetBundles:
- Để tạo một AssetBundle, bạn có thể sử dụng menu Assets > Create > AssetBundle. Bạn cũng có thể tạo AssetBundle bằng cách kéo và thả các tài sản vào cửa sổ Project.
- Khi bạn tạo một AssetBundle, Unity sẽ tạo một tệp AssetBundle mới trong thư mục Assets của project của bạn. Tệp AssetBundle này sẽ chứa tất cả các thông tin cần thiết để tải AssetBundle trong trò chơi của bạn.

Sử dụng AssetBundles:
- Để sử dụng một AssetBundle trong trò chơi của bạn, bạn có thể sử dụng hàm LoadAssetBundle. Hàm này sẽ trả về một đối tượng AssetBundle mà bạn có thể sử dụng để tải các tài sản từ AssetBundle.

Một số ví dụ về cách sử dụng AssetBundles:
- Sử dụng AssetBundles để lưu trữ các tài sản có kích thước lớn, chẳng hạn như mô hình 3D hoặc âm thanh.
- Sử dụng AssetBundles để lưu trữ các tài sản không cần thiết cho tất cả người chơi, chẳng hạn như nội dung bổ sung hoặc tài sản tùy chọn.
- Sử dụng AssetBundles để phân phối tài sản cho các nền tảng khác nhau, chẳng hạn như iOS và Android.

Tùy chỉnh AssetBundles:
- Compression: Bạn có thể chọn mức nén cho AssetBundle. Mức nén cao hơn sẽ giảm kích thước AssetBundle, nhưng cũng có thể làm giảm hiệu suất.
- Variants: Bạn có thể tạo các biến thể của AssetBundle với các tài sản khác nhau. Điều này có thể hữu ích nếu bạn muốn phân phối tài sản cho các nền tảng khác nhau hoặc cho các nhóm người chơi khác nhau.

Xuất AssetBundles:
- Bạn có thể xuất AssetBundles để chia sẻ chúng với những người khác hoặc sử dụng chúng trong các project khác. Để xuất AssetBundle, bạn có thể sử dụng menu File > Export AssetBundle.

Ngoài các tính năng cơ bản, AssetBundles còn có một số tính năng nâng cao, chẳng hạn như:
- AssetBundle Streaming: AssetBundle Streaming cho phép bạn tải AssetBundle một cách linh hoạt, giúp cải thiện hiệu suất của trò chơi của bạn.
- AssetBundle Dependencies: AssetBundle Dependencies cho phép bạn xác định các tài sản khác mà AssetBundle phụ thuộc vào. Điều này có thể hữu ích để quản lý AssetBundle của bạn một cách hiệu quả.

Dưới đây là một số mẹo để sử dụng AssetBundles hiệu quả:
- Sử dụng AssetBundles cho các tài sản có kích thước lớn hoặc không cần thiết cho tất cả người chơi.
- Tùy chỉnh cài đặt nén và biến thể để tối ưu hóa AssetBundle của bạn cho nhu cầu của bạn.
- Sử dụng AssetBundle Streaming để cải thiện hiệu suất

## Presets

Presets là một tính năng của Unity cho phép bạn lưu trữ và áp dụng các giá trị cài đặt cho các thành phần, tài sản hoặc cài đặt Project. Presets có thể được sử dụng để tiết kiệm thời gian và cải thiện hiệu quả khi làm việc với Unity.

Lợi ích của Presets:
- Tiết kiệm thời gian: Presets cho phép bạn lưu trữ các cài đặt mà bạn thường sử dụng, giúp bạn tiết kiệm thời gian khi cần sử dụng chúng.
- Cải thiện hiệu quả: Presets có thể giúp bạn làm việc với Unity một cách hiệu quả hơn bằng cách cho phép bạn nhanh chóng áp dụng các cài đặt mà bạn cần.

Một số ví dụ về cách sử dụng Presets:
- Sử dụng Presets để lưu trữ các cài đặt cho các thành phần thường sử dụng, chẳng hạn như Rigidbody2D hoặc Light.
- Sử dụng Presets để lưu trữ các cài đặt cho các tài sản thường sử dụng, chẳng hạn như mô hình 3D hoặc kết cấu.
- Sử dụng Presets để lưu trữ các cài đặt Project, chẳng hạn như cài đặt hình ảnh hoặc cài đặt âm thanh.

### Cách tạo Presets

Để tạo một Preset, bạn có thể sử dụng menu Assets > Create > Preset. Bạn cũng có thể tạo Preset bằng cách nhấp chuột phải vào một thành phần, tài sản hoặc cài đặt Project và chọn Create Preset.

Khi bạn tạo một Preset, Unity sẽ mở một cửa sổ cho phép bạn chọn các giá trị cài đặt mà bạn muốn lưu trữ.

Bạn có thể tùy chỉnh Presets bằng cách thêm hoặc xóa các giá trị cài đặt. Để làm điều này, bạn có thể mở Preset trong Editor và chỉnh sửa các giá trị cài đặt của nó.

### Sử dụng Presets

Để sử dụng một Preset, bạn có thể nhấp chuột phải vào một thành phần, tài sản hoặc cài đặt Project và chọn Apply Preset. Bạn cũng có thể áp dụng Preset bằng cách sử dụng menu Window > Presets.

Lưu ý: Áp dụng Preset sẽ sao chép các thuộc tính từ Preset vào item. Nó không liên kết Preset với item. Những thay đổi bạn thực hiện đối với Preset không ảnh hưởng đến các items mà bạn đã áp dụng Preset trước đó.

Bạn có thể xuất Presets để chia sẻ chúng với những người khác hoặc sử dụng chúng trong các project khác. Để xuất Preset, bạn có thể sử dụng menu File > Export Preset.

### Preset Manager

Preset Manager là một cửa sổ trong Cài đặt dự án (menu: Edit > Project Settings > Preset Manager) cho phép bạn quản lý các Cài đặt sẵn tùy chỉnh mà bạn tạo để chỉ định các thuộc tính mặc định khi bạn thêm một thành phần vào GameObject hoặc Nội dung mới vào dự án của mình. Các cài đặt trước mặc định mà bạn xác định sẽ ghi đè cài đặt mặc định của Unity.

Lưu ý: Bạn không thể đặt thuộc tính mặc định cho Project settings, Preferences settings hoặc native Assets như Materials, Animations hoặc SpriteSheets.

Ngoài việc sử dụng Giá trị đặt trước mặc định khi tạo Components mới và import Assets, Unity còn áp dụng Giá trị đặt trước mặc định khi bạn sử dụng lệnh Reset trong Inspector.

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
