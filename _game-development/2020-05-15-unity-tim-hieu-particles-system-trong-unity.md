---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu Particle System trong Unity
description: Tìm hiểu Particle System trong Unity

### HUMAN
header: Tìm hiểu Particle System trong Unity
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
collection: Investigate # this for AMP related post
### category: dùng để group collection
category: Investigate

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Graphics > Visual effects > Particle System

Một hệ thống hạt mô phỏng và hiển thị nhiều hình ảnh nhỏ hoặc Lưới, được gọi là các hạt, để tạo hiệu ứng hình ảnh. Mỗi hạt trong hệ thống đại diện cho một thành phần đồ họa riêng lẻ trong hiệu ứng. Hệ thống mô phỏng chung từng hạt để tạo ấn tượng về hiệu ứng hoàn chỉnh.

Hệ thống hạt rất hữu ích khi bạn muốn tạo các vật thể động như lửa, khói hoặc chất lỏng vì rất khó để mô tả loại vật thể này bằng Lưới (3D) hoặc Sprite (2D). Lưới và Họa tiết mô tả các vật thể rắn tốt hơn như ngôi nhà hoặc ô tô.

Để mang lại sự linh hoạt khi bạn tạo một hệ thống hạt , Unity cung cấp hai giải pháp để bạn lựa chọn:
- Built-in Particle System: Tích hợp sẵn trong Unity
- Visual Effect Graph: Một giải pháp có thể chạy trên GPU để mô phỏng hàng triệu hạt và tạo hiệu ứng hình ảnh quy mô lớn. Cài đặt thông qua package manager.

### Particle Effect panel

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysEffectPanel.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysMainInspPartEffect.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Playback **Speed**: cho phép bạn tăng tốc hoặc làm chậm quá trình mô phỏng hạt.
- Playback **Time**: cho biết thời gian đã trôi qua kể từ khi hệ thống được khởi động; điều này tùy thuộc vào **playback speed**.
- Particle **Count**: cho biết có bao nhiêu hạt hiện có trong hệ thống.
- **Simulate Layers**: mặc định là "Nothing" (chỉ khi chọn mới có hiệu ứng), chọn một Layer khác sẽ tự động play mà không cần phải chọn (hữu ích để kiểm tra trong scence view).
- **Resimulate**: nếu Enabled thì System áp dụng các thay đổi luôn cho các hạt đã tạo, ngược lại chỉ những hạt mới sẽ có tác dụng.
- **Show Bounds**: sử dụng để kiểm tra bounds của Particles System.
- **Show Only Selected**: Khi được bật, Unity sẽ ẩn tất cả các Hệ thống hạt không được chọn, cho phép bạn tập trung vào việc tạo ra một hiệu ứng duy nhất.

### Varying properties over time

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ParticleSystemCurve.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Nhiều thuộc tính Number của hạt hoặc thậm chí toàn bộ Hệ thống hạt có thể thay đổi theo thời gian. Unity cung cấp một số phương pháp khác nhau để xác định cách thức biến đổi này xảy ra:
- **Constant**: (mặc định) Giá trị của property được cố định trong suốt vòng đời của nó.
- **Curve**: Giá trị được chỉ định bởi một curve/graph (*giá trị theo thời gian*).
- **Random Between Two Constants**: Giá trị ngẫu nhiên theo thời gian giữa 2 giá trị không đổi (giới hạn trên và giới hạn dưới).
- **Random Between Two Curves**: Hai đường cong (Curves) xác định giới hạn trên và dưới của giá trị, giá trị hiện tại thay đổi ngẫu nhiên giữa các giới hạn đó.

#### **Particle System Curves editor**:
- *Optimize*: Điều chỉnh đường cong thành bốn khóa trở xuống để xây dựng bộ đánh giá nhanh được gọi là Polynomial.
- *Remove*: Deletes the selected curve.
- **Loop**: Phát đường cong theo số lần được chỉ định trong vòng đời của hạt. Ví dụ: nếu bạn tạo một đường cong chia tỷ lệ kích thước của một hạt lên và xuống, bạn có thể yêu cầu nó lặp lại nhiều lần, điều này khiến cho hoạt ảnh “lên và xuống” xảy ra nhiều lần trước khi hạt chết, thay vì chỉ một lần.
- **Ping Pong**: Tương tự như Loop, nhưng chơi đường cong tiến rồi lùi trong một dao động liên tục.
- **Clamp**: Giới hạn các truy vấn hạt nằm ngoài phạm vi thời gian của đường cong ở giá trị đầu tiên hoặc cuối cùng của đường cong.

#### **Start Color (editor)**
- **Color**: Tất cả các hạt đều bắt đầu bằng màu này trong suốt thời gian tồn tại của Hệ thống Hạt. Các hạt vẫn có thể thay đổi màu sắc trong suốt cuộc đời của chúng (**cấu hình ở module khác**).
- **Gradient**: Bốc màu cho hạt từ dải màu Gradient dựa trên số lượng Queue hạt.
- **Random Between Two Colors**: Hệ thống hạt chọn màu hạt bắt đầu từ phép nội suy tuyến tính ngẫu nhiên giữa hai màu đã cho.
- **Random Between Two Gradients**: Màu hạt bắt đầu được chọn dưới dạng nội suy tuyến tính ngẫu nhiên giữa hai màu đã chọn giữa 2 Gradients.
- **Random Color**: gần giống với Gradient, màu sẽ không lấy theo đường Gradient (theo queue) mà pick Random trong toàn dải màu.

<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">Các thuộc tính màu khác, chẳng hạn như <strong>Color over Lifetime</strong>, có thể sử dụng chế độ Chuyển màu (Gradient) hoặc Ngẫu nhiên giữa hai chuyển màu.<br>Các <strong>Color properties</strong> trong các mô-đun khác nhau được nhân với nhau trên mỗi kênh để tính toán kết quả Color cuối cùng.</div>

### Animation bindings

Tất cả các thuộc tính của hạt đều có thể truy cập được bằng hệ thống Hoạt hình, nghĩa là bạn có thể tạo khung hình chính chúng vào và điều khiển chúng từ hoạt ảnh của bạn.

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ParticleSystemAnimatorComponent.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Để truy cập các thuộc tính của Hệ thống hạt, phải có **Animator Component** được gắn vào GameObject của Hệ thống Hạt. Bộ điều khiển Hoạt ảnh (**Animation Controller**) và Hoạt ảnh (**Animation**) cũng được yêu cầu.<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ParticleSystemAnimationWindow.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Particle System GPU Instancing

**GPU** giúp tăng performance render hơn CPU, hiệu quả đặc biệt là với **Mesh particles**

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysInstancingEnable.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Để có thể sử dụng **GPU** với hệ thống hạt:
- Đặt chế độ kết xuất của Hệ thống hạt thành **Mesh**
- Sử dụng **Shader** dành cho **render material** hỗ trợ GPU Instancing (*lưu ý ở dưới*)
- Chạy dự án của bạn trên **nền tảng hỗ trợ GPU Instancing**

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysInstancingShader.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
<div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">
LƯU Ý: Unity đi kèm với một <strong>built-in particle shader</strong> hợp hỗ trợ <strong>GPU Instancing</strong>, nhưng <strong>Default particle material</strong> không sử dụng nó, vì vậy bạn phải thay đổi điều này để sử dụng GPU Instancing. <strong>Particle shader</strong> hỗ trợ GPU được gọi là <strong>Particles/Standard Surface</strong>. Để sử dụng nó, bạn <strong>phải tạo Material mới</strong> của riêng mình có kiểu là <strong>Particles/Standard Surface</strong>. Sau đó, bạn phải gán Material mới này cho trường Material trong mô-đun <strong>Renderer</strong>.
<p>Nếu bạn đang sử dụng một shader khác cho các hạt của mình thì nó phải sử dụng <strong>'#pragma target 4.5' hoặc cao hơn</strong>. Yêu cầu này cao hơn so với GPU Instancing thông thường trong Unity vì Hệ thống Particle ghi tất cả instance data của nó vào <strong>một bộ đệm lớn duy nhất</strong> thay vì chia instancing thành nhiều <strong>lệnh draw</strong>.</p></div>

### Others Feature

- Particle System vertex streams and Standard Shader support
- Particle System C# Job System integration

## Components

### Particle System Components

Có thể thêm **Particle System Component** vào GameObject (có sẵn Transform), hoặc khi tạo ở menu Hierarchy Unity sẽ tự động tạo một GameObject (có Transform) và đính kèm Particle System Component vào GameObject đó.

Thành phần Hệ thống hạt có nhiều thuộc tính (properties), để thuận tiện, Inspector sắp xếp chúng thành các phần có thể thu gọn được (collapsible) gọi là “modules”.

### Particle System Force Field

**Particle System Force Field component** tác dụng lực (forces) lên các hạt trong Hệ thống hạt. Để gắn Component này vào Hệ thống hạt, hãy bật Mô-đun **External Forces** trong Hệ thống hạt và gán **Layer Mask** hoặc thành phần Trường lực cụ thể (Force Field component).

Tất cả các lực được tác dụng trong không gian cục bộ của Trường lực. Ví dụ: việc xoay Biến đổi sẽ ảnh hưởng đến các thuộc tính hướng và xoay.

**Properties**:
- **Shape**: Chọn hình dạng của vùng ảnh hưởng (Box, Sphere.. Start-End Range).
- **Gravity**: Càng lớn thì càng bị hút mạnh về tâm (nhanh chóng trở lại). Có thể chọn vị trí (hướng) các hạt bị hút về (0: tâm; 1: rìa ngoài của Shape)
- **Rotation**: cho phép tạo XOÁY (Attraction:0-1 độ rộng của xoáy; Speed: tốc độ xoáy, Randomness:X-Y:0-1 đê tạo ngẫu nhiên TRỤC ĐẨY các hạt)
- **Drag**: mức độ làm chậm các hạt (Strength), điều chỉnh theo Size của hạt (Multiply by Size), điều chỉnh theo Velocity (Multiply by Velocity)
- **Vector Field**: sử dụng file Texture 3D để đại diện hướng lực (x, y, z) tác dụng lên hạt.

## Modules

### Main Module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysPartSysInsp.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Main Module chứa các thuộc tính chung ảnh hưởng đến toàn bộ hệ thống hạt. Hầu hết các properties này kiểm soát trạng thái ban đầu của các hạt mới được tạo ra.

**API**:
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.MainModule main = ps.main;
main.startDelay = 5.0f;
main.startLifetime = 2.0f;
```

**Properties**:
{% msg info <strong>Main Module</strong>: Start Speed, Start Lifetime, Start Color, Start Size, Stop Action  %}
- **Duration**: Tuổi/Khoảng thời gian hệ thống chạy (khi Start Lifetime vẫn còn thì thấy hệ thống vẫn Play?).
- **Looping**: Nếu được bật, hệ thống sẽ khởi động lại khi kết thúc để tiếp tục lặp lại chu kỳ.
- **Prewarm**: Nếu được bật, hệ thống sẽ được khởi tạo như thể nó đã hoàn thành toàn bộ chu trình (chỉ hoạt động nếu Vòng lặp cũng được bật).
- **Start Delay**: Độ trễ tính bằng giây trước khi hệ thống bắt đầu phát hạt.
- **Start Lifetime**: Thời gian sống (ban đầu) của các hạt.
- **Start Speed**: Vận tốc ban đầu của mỗi hạt (khoảng bắn xa so với tâm).
- **Start Size + 3D Start Size**: kiểm soát Kích thước ban đầu của mỗi hạt.
- **Start Rotation + 3D Start Rotation**: Góc quay ban đầu (XYZ) của mỗi hạt theo TRỤC (Start Rotation = Z).
- **Flip Rotation**: Làm cho một số hạt Flip, 0-1 càng lớn Flip càng nhiều.
- **Start Color**: Màu sắc ban đầu của mỗi hạt (bốc theo số lượng hạt "**Max Particles**").
- **Gravity Modifier**: [*TODO*] Cân chỉnh giá trị trọng lực được đặt trong cửa sổ Vật lý (Edit > Project Settings > Physics). Giá trị bằng 0 sẽ tắt trọng lực.
- **Simulation Space**: Kiểm soát xem các hạt có hoạt hình trong **Local** của parent object hay không (di chuyển cùng parent object), trong **World** hoặc **Custom** (di chuyển với đối tượng tùy chỉnh được chọn).
- **Simulation Speed**: Điều chỉnh tốc độ cập nhật (playback) toàn bộ hệ thống.
- **Delta Time**: lựa chọn giữa **Scaled** (sử dụng giá trị của *Time Scale* trong *Project Settings > Time*) và **Unscaled** (bỏ qua *Time Scale*). Điều này rất hữu ích cho các Hệ thống hạt xuất hiện trên Menu Tạm dừng (khi mà *Time Scale = 0*).
- **Scaling Mode**: Chọn cách áp dụng giá trị scale từ Transform với các tùy chọn **Hierarchy** (theo Parent), **Local** (ignore Parent) và **Shape** (size ko ảnh hưởng, chỉ ảnh hưởng vị trí bắt đầu)
- **Play on Awake**: Nếu được bật, Hệ thống hạt sẽ tự động khởi động khi đối tượng được tạo (ko cần gọi PLAY).
- **Emitter Velocity**: Chọn cách Hệ thống hạt tính toán vận tốc (velocity) được sử dụng bởi các mô-đun *Inherit Velocity* và *Emission*. Hệ thống hạt có thể tính toán vận tốc bằng Rigidbody Component nếu có tồn tại hoặc bằng cách theo dõi chuyển động của Transform Component. Nếu không có *Rigidbody Component* nào tồn tại, hệ thống sẽ sử dụng *Transform Component* theo mặc định.
- **Max Particles**: Số lượng hạt tối đa trong hệ thống cùng một lúc. Nếu đạt đến giới hạn, một số hạt sẽ bị loại bỏ.
- **Auto Random Seed**: Nếu được bật, Hệ thống hạt sẽ trông khác đi mỗi khi được phát. Ngược lại, hệ thống hạt sẽ giống hệt nhau mỗi lần Play.
- **Random Seed**: Khi vô hiệu hóa *Auto Random Seed*, giá trị này được sử dụng để tạo hiệu ứng lặp lại duy nhất.
- **Stop Action**: (Disable, Destroy, Callback). Khi tất cả các hạt thuộc hệ thống đã hoàn thành, hệ thống có thể thực hiện một hành động. Một hệ thống được xác định là đã dừng khi tất cả các hạt của nó đã chết và tuổi của nó đã vượt quá Thời lượng. Đối với *hệ thống lặp*, điều này chỉ xảy ra nếu hệ thống *bị dừng thông qua tập lệnh*.
- **Culling Mode**: (Automatic, Pause And Catch-up, Pause, Always Simulate) Chọn có nên tạm dừng mô phỏng Hệ thống hạt khi các hạt ở ngoài màn hình hay không.
- **Ring Buffer Mode**: (Disabled, Pause Until Replaced, Loop Until Replaced) Giữ cho các hạt tồn tại cho đến khi chúng đạt đến số lượng Hạt tối đa, tại thời điểm đó các hạt mới sẽ tái chế những hạt cũ nhất, thay vì loại bỏ các hạt khi vòng đời của chúng trôi qua.

### Emission Module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysEmissionModule-0.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Các thuộc tính trong mô-đun này ảnh hưởng đến/kiểm soát tốc độ và thời gian phát hạt của Hệ thống hạt.

**API**:
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.EmissionModule em = ps.emission;
em.enabled = true;
em.rateOverTime = 20.0f;
em.SetBursts(
    new ParticleSystem.Burst[]{
        new ParticleSystem.Burst(2.0f, 100),
        new ParticleSystem.Burst(4.0f, 100)
    }
);
```

**Properties**:
- **Rate over Time**: Số hạt phát ra trong một đơn vị thời gian (mỗi giây).
- **Rate over Distance**: Số lượng hạt phát ra trên một đơn vị khoảng cách di chuyển.
- **Bursts**: Một "bùng nổ" là một sự kiện SINH THÊM ra các hạt. Các cài đặt này cho phép các hạt được phát ra vào những thời điểm được chỉ định.
    - **Time**: Mốc thời gian sẽ Burst (tính bằng giây, sau khi Hệ thống hạt bắt đầu phát).
    - **Count**: Số lượng hạt sẽ Burst.
    - **Cycles**: Số lần Burst liên tiếp.
    - **Interval**: Thời gian (tính bằng giây) giữa mỗi chu kỳ của Burst được kích hoạt.
    - **Probability**: Xác suất để Burst (0-1: 0 chắc chắn ko Burst, 1 chắc chắn sẽ Burst)
{% msg success VD: <strong>(5, 3, 2, 3, 0.6)</strong> Tại thời điểm <strong>5s (Time)</strong> sẽ phát ra <strong>3 (Count)</strong> hạt, chờ tiếp <strong>3s (Interval)</strong> sau sẽ phát lượt tiếp theo cho đủ <strong>2 lần (Cycles)</strong>, việc có Burst thành công hay không tùy vào Xác suất <strong>0.6 (Probability)</strong> %}

### Shape module

Mô-đun này xác định thể tích (**volume**) hoặc bề mặt (**surface**) mà các hạt được phát ra và hướng của vận tốc bắt đầu (**direction** of the start velocity).

**Shape property** xác định hình dạng của thể tích phát, các thuộc tính còn lại sẽ khác nhau tùy thuộc vào *Shape property* đã chọn.

Phần lớn hướng emit sẽ là **trục Y** nếu là đường thẳng (Edge) hoặc hình tròn/cầu/mesh tròn sẽ **hướng ra ngoài**. Nếu là hình vuông/mesh vuông thì hướng sẽ **vuông góc với bề mặt**.

**API**:
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.ShapeModule sh = ps.shape;
sh.enabled = true;
sh.shapeType = ParticleSystemShapeType.Mesh;
sh.mesh = myMesh; // public Mesh myMesh;
```

#### Sphere, Hemisphere

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Lưu ý: Hình cầu và bán cầu có cùng tính chất.

**Properties**:
- **Shape**: Hình dạng của emission volume.
    - **Sphere**: Phát hạt đồng đều theo mọi hướng.
    - **Hemisphere**: Phát hạt đồng đều theo mọi hướng trên một mặt của mặt phẳng..
- **Radius**: Bán kính hình tròn của hình đó.
- **Radius Thickness**: (Độ dày bán kính) Tỷ lệ volume phát ra các hạt. Giá trị 0 phát ra từ bề mặt ngoài. Giá trị 1 phát ra từ toàn bộ volume. Các giá trị ở giữa sẽ sử dụng một tỷ lệ volume.
- **Arc**: góc lượng giác của hình dạng 0-360 độ
- **Texture**: [?] Một kết cấu được sử dụng để pha màu và loại bỏ các hạt.
- **Clip Channel**: [?] Một kênh từ kết cấu được sử dụng để loại bỏ các hạt.
- **Clip Threshold**: (Ngưỡng clip) Khi ánh xạ các hạt tới các vị trí trên kết cấu, hãy loại bỏ bất kỳ điểm ảnh nào có màu sắc giảm xuống dưới ngưỡng này (0-1).
- **Color affects Particles**: (Màu sắc ảnh hưởng đến hạt) Nhân màu hạt với màu kết cấu.
- **Alpha affects Particles**: (Alpha ảnh hưởng đến các hạt) Nhân alpha hạt với alpha kết cấu.
- **Bilinear Filtering**: (Lọc song tuyến) Khi đọc kết cấu, hãy kết hợp 4 mẫu lân cận để thay đổi màu hạt mượt mà hơn, bất kể kích thước kết cấu.
- **Position**: Áp dụng phần bù (offset) cho hình dạng bộ phát.
- **Rotation**: Xoay hình dạng bộ phát.
- **Scale**: Thay đổi kích thước của hình dạng bộ phát.
- **Align to Direction**: (Căn chỉnh theo hướng) Định hướng các hạt dựa trên hướng di chuyển ban đầu của chúng. Điều này có thể hữu ích nếu bạn muốn mô phỏng, chẳng hạn như các mảng sơn ô tô bay ra khỏi thân ô tô khi va chạm.
- **Randomize Direction**: Random các hướng hạt ngẫu nhiên. Khi được đặt thành 0, cài đặt này không có hiệu lực. Khi được đặt thành 1, hướng hạt hoàn toàn ngẫu nhiên.
- **Spherize Direction**: Pha trộn các hướng của hạt theo hướng hình cầu, di chuyển ra ngoài từ tâm. Khi được đặt thành 0, cài đặt này không có hiệu lực. Khi được đặt thành 1, hướng hạt sẽ hướng ra ngoài từ tâm (hoạt động giống hệt như khi Hình dạng được đặt thành Hình cầu Sphere).
- **Randomize Position**: Di chuyển (Position) các hạt theo số lượng ngẫu nhiên, đến giá trị được chỉ định. Khi giá trị này được đặt thành 0, cài đặt này không có hiệu lực. Bất kỳ giá trị nào khác sẽ áp dụng một số tính ngẫu nhiên cho vị trí (Position) sinh sản của các hạt.
- **Transform Tool for Shape**: gizmo, position, rotation, scale. Sử dụng để tinh chỉnh Local Transform của Shape

#### Cone

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule1.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

**Properties**:
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB
- **AAA**: BBBB