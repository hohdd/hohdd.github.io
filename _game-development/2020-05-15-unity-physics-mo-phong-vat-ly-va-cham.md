---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Physics: mô phỏng vật lý, gia tốc, trọng lực, va chạm"
description: "Physics: mô phỏng vật lý, gia tốc, trọng lực, va chạm"

### HUMAN
header: "Physics: mô phỏng vật lý, gia tốc, trọng lực, va chạm"
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
collection: "Chủ đề" # this for AMP related post
### category: dùng để group collection
category: "Chủ đề"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Physics

Bạn có thể đạt được một số mục tiêu vật lý cơ bản với giao diện người dùng, nhưng để kiểm soát tốt hơn mô phỏng, bạn cần làm quen với C#

## Built-in physics engines

### Built-in 3D physics (Nvidia PhysX engine integration)

Bạn có thể sử dụng công cụ này trong các dự án 3D hướng đối tượng.

| Topic | Description
|:-|:-:|-:
| [Character control](https://docs.unity3d.com/2021.3/Documentation/Manual/class-CharacterController.html){:.hvr-float-shadow.external rel="nofollow" target="_blank"} | Định cấu hình điều khiển nhân vật dựa trên vật lý cho nhân vật ở ngôi thứ nhất và ngôi thứ ba.
| [Rigidbody physics](https://docs.unity3d.com/2021.3/Documentation/Manual/rigidbody-physics-section.html){:.hvr-float-shadow.external rel="nofollow" target="_blank"} | Áp dụng hành vi dựa trên vật lý cho GameObjects.
| Collision | Sử dụng máy va chạm để định cấu hình xung đột giữa các GameObject.
| Joints | Áp dụng và định cấu hình các khớp kết nối GameObject và mô phỏng các lực vật lý để xoay, chuyển động và hạn chế.
| Articulations | Cấu hình các hệ thống phức tạp của thân và khớp cứng.
| Ragdoll physics | Cấu hình vật lý ragdoll cho nhân vật.
| Cloth | Mô phỏng chuyển động của vải cho quần áo nhân vật và các loại vải dệt ứng dụng khác.
| Multi-scene physics | Quản lý các bối cảnh vật lý khác nhau trong một dự án với nhiều cảnh vật lý chuyên dụng.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-green}

#### Character Controller component

Nó chỉ đơn giản là một chiếc Collider hình viên nang có thể được yêu cầu di chuyển theo một hướng nào đó từ một tập lệnh. Bộ điều khiển sau đó sẽ thực hiện chuyển động nhưng bị hạn chế do va chạm . Nó sẽ trượt dọc theo các bức tường, đi lên cầu thang (nếu chúng thấp hơn Step Offset) và đi trên các sườn dốc trong Giới hạn Độ dốc (Slope Limit).

Bộ điều khiển không tự phản ứng với các lực và nó không tự động đẩy các Vật thể rắn đi (cần sử dụng OnControllerColliderHit() thông qua tập lệnh).

Nếu bạn muốn nhân vật người chơi của mình bị ảnh hưởng bởi vật lý thì tốt hơn hết bạn nên sử dụng Rigidbody thay vì Character Controller.

Skin Width là một trong những thuộc tính quan trọng nhất cần sử dụng đúng khi Fine-tuning Character Controller của bạn. Nếu nhân vật của bạn bị kẹt thì rất có thể là do Skin Width của bạn quá nhỏ. Cách tốt nhất là giữ Skin Width của bạn ít nhất lớn hơn 0,01 và hơn 10% Radius.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/CharacterControllerWindow.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Rigidbody physics

Trong mô phỏng vật lý, các Rigidbody (vật thể không bị biến dạng hoặc thay đổi hình dạng dưới tác dụng của lực vật lý. Khoảng cách giữa hai điểm bất kỳ của vật rắn không đổi theo thời gian, bất kể ngoại lực tác dụng lên nó) cho phép thực hiện các hành vi dựa trên vật lý như chuyển động, trọng lực và va chạm.

Rigidbody component cung cấp cách thức dựa trên vật lý để điều khiển chuyển động và vị trí của GameObject. Thay vì các thuộc tính Transform, bạn có thể sử dụng các lực ([Rigidbody.AddForce](https://docs.unity3d.com/2021.3/Documentation/ScriptReference/Rigidbody.AddForce.html){:.hvr-float-shadow.external rel="nofollow" target="_blank"}) và mô-men xoắn ([Rigidbody.AddTorque](https://docs.unity3d.com/2021.3/Documentation/ScriptReference/Rigidbody.AddTorque.html){:.hvr-float-shadow.external rel="nofollow" target="_blank"}) vật lý mô phỏng để di chuyển GameObject và để physics system
tính toán kết quả. Nếu bạn thay đổi trực tiếp Transform thì Unity không thể tính toán chính xác mô phỏng vật lý và bạn có thể thấy hành vi không mong muốn. Điều này đặc biệt đúng với những Rigidbody có các Joints.

Nếu muốn thay đổi chuyển động trực tiếp thông qua Transform thì tick chọn "Is Kinematic" để loại bỏ GameObject khỏi sự điều khiển của công cụ vật lý để thành "kinematic motion". Một "Rigidbody Kinematic" có thể áp dụng lực dựa trên vật lý cho các GameObject Rigidbody physics-based khác, nhưng không nhận được lực dựa trên vật lý (lực đẩy của Rigidbody physics-based khác).

Nếu một vật cứng này va chạm với vật cứng khác, động cơ vật lý chỉ tính toán va chạm nếu cả hai GameObject đều có Collider được đính kèm. Nếu một GameObject có Rigidbody nhưng không có Collider, thì nó sẽ chuyển qua các GameObject khác và Unity không đưa nó vào tính toán va chạm.

Unity xử lý chuyển động dựa trên vật lý trên toàn cầu chứ không phải cục bộ. Khi một GameObject có Rigidbody di chuyển thông qua chuyển động dựa trên vật lý, nó sẽ di chuyển độc lập với bất kỳ GameObject cha mẹ hoặc con nào. Một GameObject con có Rigidbody vẫn sử dụng GameObject mẹ của nó để xác định vị trí cục bộ của nó cho quá trình khởi tạo, nhưng Unity tính toán chuyển động dựa trên vật lý của nó trong không gian toàn cầu.

Khối lượng tương đối (Mass) của mỗi vật rắn trong một vụ va chạm quyết định cách chúng phản ứng khi va chạm với nhau.

Convex and concave collider geometry (Hình học máy va chạm lồi và lõm), liên quan đến lồi lõm => nên sử dụng các primitive Colliders (Compound Collider cho giống Mesh của GameObject)...

Để áp dụng một lực tuyến tính hoặc lực quay không đổi cho GameObject Rigidbody, thêm "Constant Force" component (được đại diện bởi lớp API ConstantForce) vào GameObject của bạn. Lực không đổi không giống như tốc độ không đổi. Khi bạn tác dụng một lực không đổi, tốc độ chuyển động sẽ tăng dần theo thời gian dựa trên giá trị của lực. Trong cuộc sống thực, sự tăng tốc này tiếp tục vô tận (in Unity, reaches a max velocity of 50 rad/s. You can change these maximum velocities in code, via the properties Rigidbody.maxLinearVelocity and Rigidbody.maxAngularVelocity.)

Áp dụng phép nội suy (Interpolate)/Ngoại suy (Extrapolate) cho Rigidbody nếu nó có vẻ/hiện tượng giật cục trong thời gian chạy...

Rigidbody component reference:

| Property | Function
|:-|:-:|-:
| Mass | Xác định khối lượng của GameObject (tính bằng kilôgam). Khối lượng được đặt thành 1 theo mặc định. Giống như trong đời thực, khối lượng không ảnh hưởng đến tốc độ rơi của một vật thể dưới tác dụng của trọng lực. Để mô phỏng lực cản làm chậm chuyển động, hãy sử dụng Drag (ma sát).
| Drag | Xác định tốc độ phân rã của vận tốc tuyến tính của Vật rắn, để mô phỏng lực cản, lực cản không khí hoặc ma sát. Giá trị thấp tạo ra tốc độ phân rã chậm hơn, do đó GameObject di chuyển nhanh hơn trong thời gian dài hơn.
| Angular Drag | Xác định tốc độ phân rã của vận tốc quay của Vật cứng, để mô phỏng lực cản, lực cản không khí hoặc ma sát. Giá trị thấp tạo ra tốc độ phân rã chậm hơn, do đó GameObject di chuyển nhanh hơn trong thời gian dài hơn.
| Use Gravity | Chuyển đổi tác dụng của trọng lực lên Rigidbody. Nếu được bật, hệ thống vật lý sẽ áp dụng một lực để di chuyển GameObject theo hướng trọng lực mô phỏng (theo mặc định là dọc theo trục y). Sử dụng Gravity được bật theo mặc định.
| Is Kinematic | Khi Is Kinematic được bật, hệ thống vật lý không thể tác dụng lực để di chuyển hoặc xoay GameObject, thay vào đó, Unity chỉ có thể di chuyển và xoay nó thông qua Transform.
| Interpolate (None, Interpolate, Extrapolate) | Cài đặt Nội suy trên Rigidbody cung cấp hai tùy chọn để làm mượt sự xuất hiện của chuyển động của Rigidbody nếu nó có vẻ giật cục trong thời gian chạy. Các tùy chọn này là Nội suy và Ngoại suy. Cả phép nội suy và ngoại suy đều tính toán tư thế của Vật cứng nhắc (nghĩa là vị trí và góc quay) giữa các lần cập nhật vật lý. Bạn nên chọn cái nào tùy thuộc vào tùy chọn nào tạo ra kết quả hình ảnh tốt nhất cho trường hợp sử dụng của bạn.
| Collision Detection (Discrete, Continuous, Continuous Dynamic, Continuous Speculative) | Unity tạo ra một va chạm trên mỗi cặp máy va chạm và xác định phương pháp phát hiện va chạm dựa trên thuộc tính Phát hiện va chạm này.Theo mặc định, Phát hiện va chạm được đặt thành Rời rạc (Discrete).
| Constraints | Đặt các hạn chế đối với chuyển động của Rigidbody. Freeze Position + Freeze Position: hạn chế di chuyển/quay theo các trục X, Y và Z...
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

Info section: Phần Thông tin của thành phần Rigidbody chứa dữ liệu về Rigidbody mà bạn có thể sử dụng để theo dõi hành vi của nó. Bạn không thể chỉnh sửa các giá trị thuộc tính trong phần thành phần này. Bạn có thể sửa đổi chúng thông qua tập lệnh, nhưng điều đó không được khuyến khích; trong hầu hết các trường hợp, bạn nên tác dụng lực thông qua hệ thống vật lý để thay đổi các giá trị này.

Constant Force component reference:

| Property | Function
|:-|:-:|-:
| Force | Xác định hướng của lực tuyến tính. Các vectơ XYZ đề cập đến cảnh các trục toàn cầu.
| Relative Force  | Xác định hướng của lực tuyến tính. Các vectơ XYZ đề cập đến các trục cục bộ của Rigidbody.
| Torque | Xác định các trục tổng thể mà Rigidbody quay xung quanh.
| Relative Torque | Xác định các trục cục bộ mà Rigidbody quay xung quanh.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

#### Collision

Để cấu hình va chạm giữa GameObjects trong Unity, bạn cần sử dụng Colliders. Colliders xác định hình dạng của GameObject nhằm mục đích va chạm vật lý. Sau đó, bạn có thể sử dụng các Collider này để quản lý các sự kiện va chạm.

Collider là **vô hình** và không cần phải có hình dạng giống hệt như Mesh của GameObject.

Collider đơn giản nhất (và ít sử dụng bộ xử lý nhất) là loại **primitive collider**. Trong 3D, đây là Box Collider, Sphere Collider và Capsule Collider. Ở dạng 2D, bạn có thể sử dụng Box Collider 2D và Circle Collider 2D.

Compound colliders: có thể thêm Colliders vào child nhưng chỉ nên sử dụng 1 Rigidbody ở GameObject gốc.

Mesh colliders: sử dụng Mesh colliders (3D) hoặc Polygon Collider (2D), những máy va chạm này sử dụng nhiều bộ xử lý hơn nhiều so với các loại nguyên thủy, vì vậy hãy sử dụng chúng một cách tiết kiệm để duy trì hiệu suất tốt.

Static colliders: Bạn có thể thêm bộ va chạm vào GameObject mà không cần thành phần Rigidbody để tạo sàn, tường và các thành phần bất động khác của Cảnh. Chúng được gọi là máy va chạm tĩnh. Ngược lại, máy va chạm trên GameObject có Rigidbody được gọi là máy va chạm động. Máy va chạm tĩnh có thể tương tác với máy va chạm động nhưng vì chúng không có Vật rắn nên chúng không chuyển động khi va chạm.

Physics materials: Mặc dù hình dạng của máy va chạm không bị biến dạng trong quá trình va chạm, lực ma sát và lực nảy của chúng có thể được cấu hình bằng Vật liệu Vật lý (Physics materials).

Triggers: Hệ thống tập lệnh có thể phát hiện khi xảy ra xung đột và bắt đầu các hành động bằng hàm **OnCollisionEnter**. Tuy nhiên, bạn cũng có thể sử dụng công cụ vật lý chỉ đơn giản là phát hiện khi một máy va chạm đi vào không gian của một máy va chạm khác mà không tạo ra va chạm. Khi một trình va chạm đi vào không gian của nó, trình kích hoạt sẽ gọi hàm **OnTriggerEnter** trên các tập lệnh của đối tượng trình kích hoạt.

Collision callbacks for scripts (lưu ý có khác biệt nếu 2 đối tượng là Kinematic):
- OnCollisionEnter > OnCollisionStay > OnCollisionExit (tương tự 2D, tên hàm thêm 2D ở cuối) -> 2 Kinematic does not apply
- OnTriggerEnter > OnTriggerStay > OnTriggerExit (tương tự 2D, tên hàm thêm 2D ở cuối) -> 2 Kinematic apply

Khi hai đối tượng va chạm, một số sự kiện kịch bản khác nhau có thể xảy ra tùy thuộc vào cấu hình rigidbodies của các đối tượng va chạm. Biểu đồ bên dưới cung cấp thông tin chi tiết về các hàm sự kiện được gọi dựa trên các thành phần được gắn vào đối tượng.

<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">Collision: Phát hiện va chạm xảy ra và tin nhắn được gửi khi va chạm</div>

| | Static Collider | Rigidbody Collider | Kinematic Rigidbody Collider | Static Trigger Collider | Rigidbody Trigger Collider | Kinematic Rigidbody Trigger Collider
| Static Collider  | | Y 
| Rigidbody Collider  | Y | Y | Y 
| Kinematic Rigidbody Collider | | Y
| Static Trigger Collider
| Rigidbody Trigger Collider
| Kinematic Rigidbody Trigger Collider
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">Trigger: Thông báo kích hoạt được gửi khi va chạm</div>

| | Static Collider | Rigidbody Collider | Kinematic Rigidbody Collider | Static Trigger Collider | Rigidbody Trigger Collider | Kinematic Rigidbody Trigger Collider
| Static Collider | | | | | Y | Y 
| Rigidbody Collider | | | | Y | Y | Y
| Kinematic Rigidbody Collider | | | | Y | Y | Y
| Static Trigger Collider | | Y | Y | | Y | Y
| Rigidbody Trigger Collider | Y | Y | Y | Y | Y | Y
| Kinematic Rigidbody Trigger Collider | Y | Y | Y | Y | Y | Y
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

#### Joints

#### Articulations

#### Ragdoll physics

#### Cloth

#### Multi-scene physics

### Built-in 2D physics (Box2D engine integration)

TODO

## Physics engine packages

Nếu dự án của bạn sử dụng Data-Oriented Technology Stack (DOTS) của Unity, bạn cần cài đặt gói vật lý DOTS chuyên dụng. Các gói có sẵn là:
- Unity Physics package: công cụ vật lý DOTS mà bạn cần cài đặt theo mặc định để mô phỏng vật lý trong bất kỳ dự án hướng dữ liệu nào.
- Havok Physics for Unity package: triển khai công cụ vật lý Havok cho Unity, để sử dụng như một phần mở rộng của gói Vật lý Unity. Lưu ý rằng gói này tuân theo chương trình cấp phép cụ thể.

