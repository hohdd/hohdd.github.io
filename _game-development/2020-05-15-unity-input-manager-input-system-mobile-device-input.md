---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Unity Input Manager - Input System - Mobile device input"
description: "Unity Input Manager - Input System - Mobile device input"

### HUMAN
header: "Unity Input Manager - Input System - Mobile device input"
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

## Input

Unity hỗ trợ đầu vào từ nhiều loại thiết bị đầu vào, bao gồm:
- Keyboards and mice
- Joysticks
- Controllers
- Touch screens
- Movement-sensing capabilities of mobile devices, such as accelerometers or gyroscopes
- VR and AR controllers

Unity hỗ trợ đầu vào thông qua hai hệ thống riêng biệt:
- Input Manager: Trình quản lý đầu vào là một phần của nền tảng Unity cốt lõi và có sẵn theo mặc định.
- Input System: Hệ thống đầu vào là một gói cần được cài đặt thông qua Trình quản lý gói trước khi bạn có thể sử dụng nó. Nó yêu cầu thời gian chạy .NET 4 và không hoạt động trong các dự án sử dụng thời gian chạy .NET 3.5 cũ.

## Input Manager

Trình quản lý đầu vào sử dụng các loại điều khiển sau:
- "Key" đề cập đến bất kỳ phím nào trên bàn phím vật lý, chẳng hạn như W, Shift hoặc phím cách..
- "Button" đề cập đến bất kỳ nút nào trên bộ controller vật lý (ví dụ: tay cầm chơi game), chẳng hạn như nút X trên điều khiển từ xa.
- "Virtual Axis" được ánh xạ tới một CONTROL, chẳng hạn như BUTTON hoặc KEY. Khi người dùng kích hoạt CONTROL, trục sẽ nhận được giá trị trong phạm vi [–1..1]. Bạn có thể sử dụng giá trị này trong tập lệnh của mình.

### Physical keys

Khi bật Physical keys, Unity sử dụng bố cục “Qwerty” ANSI/ISO để thể hiện vị trí thực của các phím bất kể bố cục thực tế của người dùng (QWERTY / AZERTY). Điều này có nghĩa là nếu bạn chỉ định phím “Q”, nó sẽ luôn là CHỮ CÁI NGOÀI CÙNG BÊN TRÁI TRÊN HÀNG PHÍM CHỮ CÁI ĐẦU TIÊN, ngay cả khi bàn phím của người dùng có một chữ cái khác ở vị trí đó.

Lưu ý, bạn không nên đọc phím nhập để nhập văn bản trong trò chơi, vì điều này sẽ không cho phép người dùng nhập các ký tự không phải tiếng Latinh. Thay vào đó, hãy sử dụng "Input.compositionString" (Ở một số ngôn ngữ như tiếng Trung, tiếng Nhật hoặc tiếng Hàn, văn bản được nhập bằng cách gõ nhiều phím để tạo ra một hoặc nhiều ký tự).

### Virtual Axes

Mỗi Dự án đều có một số trục đầu vào được tạo theo mặc định. Các trục này cho phép bạn sử dụng ngay đầu vào bàn phím, chuột và cần điều khiển trong Dự án của mình.

| Property | Function
|:-|:-:|-:
| Name | Tên trục. Bạn có thể sử dụng điều này để truy cập trục từ tập lệnh.
| Descriptive Name, Descriptive Negative Name | *Những giá trị này không được dùng nữa và không hoạt động*
| Negative Button, Positive Button | Controls đẩy trục theo chiều âm và chiều dương tương ứng. Đây có thể là các phím trên bàn phím hoặc các nút trên cần điều khiển hoặc chuột.
| Alt Negative Button, Alt Positive Button | Các điều khiển thay thế để đẩy trục theo hướng âm và dương tương ứng.
| Gravity | Tốc độ tính bằng đơn vị trên giây mà trục rơi về phía trung tính khi không có đầu vào.
| Dead | Người dùng cần di chuyển cần analog bao xa trước khi ứng dụng của bạn đăng ký chuyển động. Trong thời gian chạy, đầu vào từ tất cả các thiết bị analog nằm trong phạm vi này sẽ được coi là rỗng.
| Sensitivity | Tốc độ tính bằng đơn vị trên giây mà trục sẽ di chuyển về phía giá trị mục tiêu. Điều này chỉ dành cho các thiết bị kỹ thuật số.
| Snap | Nếu được bật, giá trị trục sẽ đặt lại về 0 khi nhấn nút tương ứng với hướng ngược lại.
| Type | Loại đầu vào điều khiển trục. Chọn từ các giá trị sau: Key or Mouse button, Mouse Movement, Joystick Axis
| Axis | Trục của thiết bị được kết nối điều khiển trục này.
| JoyNum | Cần điều khiển được kết nối điều khiển trục này. Bạn có thể chọn một phím điều khiển cụ thể hoặc đầu vào truy vấn từ tất cả các phím điều khiển.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

Giá trị trục có thể là:
- Giữa –1 và 1 cho đầu vào cần điều khiển và bàn phím. Vị trí trung lập cho các trục này là 0. Một số loại điều khiển, chẳng hạn như các nút trên bàn phím, không nhạy cảm với cường độ đầu vào nên chúng không thể tạo ra các giá trị khác ngoài –1, 0 hoặc 1.
- Mouse delta (mức độ chuột đã di chuyển trong khung hình cuối cùng) để nhập chuột. Các giá trị cho trục đầu vào của chuột có thể lớn hơn 1 hoặc nhỏ hơn –1 khi người dùng di chuyển chuột nhanh.

#### Adding, removing, and copying virtual axes

Để thêm trục ảo, hãy tăng số lượng trong trường Kích thước. Điều này tạo ra một trục mới ở cuối danh sách. Trục mới sao chép các thuộc tính của trục trước đó trong danh sách (Giảm số lượng trong trường Kích thước. Việc này sẽ loại bỏ trục cuối cùng trong danh sách, hoặc Bấm chuột phải vào bất kỳ trục nào và chọn Xóa phần tử mảng. Lưu ý: Bạn không thể hoàn tác hành động xóa).

Tên Key tuân theo các quy ước đặt tên sau:

| Key family | Naming convention
|:-|:-:|-:
| Letter keys | a, b, c…
| Number keys  | 1, 2, 3…
| Arrow keys | up, down, left, right
| Numpad keys | [1], [2], [3], [+], [equals]…
| Modifier keys | right shift, left shift, right ctrl, left ctrl, right alt, left alt, right cmd, left cmd
| Special keys | backspace, tab, return, escape, space, delete, enter, insert, home, end, page up, page down
| Function keys | f1, f2, f3…
| Mouse buttons | mouse 0, mouse 1, mouse 2...
| A specific button on any joystick | joystick button 0, joystick button 1, joystick button 2…
| A specific button on a specific joystick | joystick 1 button 0, joystick 1 button 1, joystick 2 button 0…
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue}

### Lấy giá trị Input, Virtual Axes trong Scripts

- Sử dụng ```Input.GetKey("<Naming_Convention>")```. Ví dụ: ```Input.GetKey("right shift");```
- Sủ dụng "Axis Name". Ví dụ: ```float horizontalInput = Input.GetAxis ("Horizontal");```
- Đối với các trục mô tả một sự kiện chứ không phải một chuyển động (ví dụ: bắn vũ khí trong trò chơi), hãy sử dụng ```Input.GetButtonDown``` thay thế.
- Nếu hai hoặc nhiều trục có cùng tên, truy vấn sẽ trả về trục có giá trị tuyệt đối lớn nhất. Điều này cho phép gán nhiều thiết bị đầu vào cho một tên trục.

Ví dụ lấy giá trị Input "Horizontal" và "Vertical" và thay đổi "transform.Translate" để d chuyển GameObject.
```csharp
float moveSpeed = 10; // Xác định vận tốc chuyển động của vật.

float horizontalInput = Input.GetAxis("Horizontal"); // Lấy giá trị của trục đầu vào Horizontal.

float verticalInput = Input.GetAxis("Vertical"); // Lấy giá trị của trục đầu vào Vertical.

transform.Translate(new Vector3(horizontalInput, verticalInput, 0) * moveSpeed * Time.deltaTime);
// Di chuyển đối tượng đến tọa độ XYZ được xác định lần lượt là horizontalInput, 0 và verticalInput.
// Time.deltaTime là thời gian đã trôi qua kể từ khung hình cuối cùng. Nhân moveSpeed ​​với Time.deltaTime để đảm bảo rằng GameObject di chuyển với tốc độ không đổi trong mỗi khung hình.
```

## Mobile device input

Trên thiết bị di động, class "Input" cung cấp quyền truy cập vào màn hình cảm ứng, gia tốc kế và đầu vào địa lý/vị trí. Tham khảo [class "Input"](https://docs.unity3d.com/2021.3/Documentation/ScriptReference/Input.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

Quyền truy cập vào bàn phím trên thiết bị di động được cung cấp thông qua [Mobile Keyboard](https://docs.unity3d.com/2021.3/Documentation/Manual/MobileKeyboard.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Multi-touch screen

Các thiết bị iPhone, iPad và iPod Touch có khả năng theo dõi tối đa năm ngón tay chạm vào màn hình cùng một lúc. Bạn có thể truy xuất trạng thái của từng ngón tay chạm vào màn hình trong khung hình cuối cùng bằng cách truy cập vào mảng thuộc tính [Input.touches](https://docs.unity3d.com/2021.3/Documentation/ScriptReference/Input-touches.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

Các thiết bị Android không có giới hạn thống nhất về số lượng ngón tay mà chúng theo dõi. Thay vào đó, nó thay đổi tùy theo thiết bị và có thể là bất kỳ thao tác nào từ chạm hai lần trên thiết bị cũ đến năm ngón tay trên một số thiết bị mới hơn.

Mỗi lần chạm ngón tay được thể hiện bằng cấu trúc dữ liệu Input.Touch như bảng dưới đây:

| Property | Description
|:-|:-:|-:
| fingerId (int) | Chỉ số duy nhất cho một lần chạm.
| position (Vector2) | Vị trí màn hình của cảm ứng.
| deltaPosition (Vector2) | Vị trí màn hình thay đổi kể từ khung hình cuối cùng.
| deltaTime (float) | Khoảng thời gian đã trôi qua kể từ lần thay đổi trạng thái cuối cùng.
| tapCount (int) | Màn hình iPhone/iPad có thể phân biệt các thao tác chạm ngón tay nhanh của người dùng. Bộ đếm này sẽ cho bạn biết người dùng đã chạm vào màn hình bao nhiêu lần mà không di chuyển ngón tay sang hai bên. Thiết bị Android không tính số lần nhấn, trường này luôn là 1.
| phase (enum TouchPhase) | Mô tả trạng thái chạm, có thể giúp bạn xác định xem người dùng mới bắt đầu chạm vào màn hình, vừa di chuyển ngón tay hay vừa nhấc ngón tay lên.
| TouchPhase.Began | ngón tay chạm vào màn hình.
| TouchPhase.Moved | ngón tay di chuyển trên màn hình.
| TouchPhase.Stationary | ngón tay đang chạm vào màn hình nhưng không di chuyển.
| TouchPhase.Ended | ngón tay được nhấc lên khỏi màn hình. Đây là giai đoạn cuối cùng của một liên lạc.
| TouchPhase.Canceled | Hệ thống đã hủy theo dõi thao tác chạm.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

### Mobile Keyboard

Bàn phím sẽ tự động xuất hiện khi người dùng chạm vào các thành phần GUI có thể chỉnh sửa. Hiện tại, GUI.TextField, GUI.TextArea và GUI.PasswordField sẽ hiển thị bàn phím.

Trong hầu hết các trường hợp, Unity sẽ tự động xử lý việc nhập bàn phím cho các thành phần GUI nhưng cũng dễ dàng hiển thị bàn phím theo yêu cầu từ tập lệnh.

Manual Keyboard Handling: Sử dụng hàm ```TouchScreenKeyboard.Open()``` để mở bàn phím.

Tham khảo thêm [Mobile Keyboard](https://docs.unity3d.com/2021.3/Documentation/Manual/MobileKeyboard.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Unity XR Input

Unity hỗ trợ cho thực tế ảo , thực tế tăng cường và Windows Mixed Reality. Tham khảo [Unity XR Input](https://docs.unity3d.com/2021.3/Documentation/Manual/xr_input.html){:.hvr-float-shadow rel="nofollow" target="_blank"}