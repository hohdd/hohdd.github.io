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

### Particle System API

```csharp
ParticleSystem ps
{
    get
    {
        if (_CachedSystem == null)
            _CachedSystem = GetComponent<ParticleSystem>();
        return _CachedSystem;
    }
}
private ParticleSystem _CachedSystem;
public bool includeChildren = true;

ps.Play(includeChildren);
ps.Pause(includeChildren);
ps.Stop(includeChildren, ParticleSystemStopBehavior.StopEmitting);
// BroadcastMessage, SendMessage, SendMessageUpwards... Instantiate, Destroy, DontDestroyOnLoad...
```

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
- **Duration (float)**: Tuổi/Khoảng thời gian hệ thống chạy (khi Start Lifetime vẫn còn thì thấy hệ thống vẫn Play?).
- **Looping (bool)**: Nếu được bật, hệ thống sẽ khởi động lại khi kết thúc để tiếp tục **lặp lại chu kỳ**.
    - **Prewarm (bool)**: Nếu được bật, hệ thống sẽ được khởi tạo **như thể nó đã hoàn thành** toàn bộ chu trình (chỉ hoạt động nếu Vòng lặp cũng được bật).
- **Start Delay (float)**: *Độ trễ tính bằng giây* trước khi hệ thống bắt đầu phát hạt.
- **Start Lifetime (float)**: *Thời gian sống* (ban đầu) của các hạt.
- **Start Speed (float)**: Vận tốc ban đầu của mỗi hạt (*khoảng bắn xa so với tâm*).
- **Start Size + 3D Start Size**: kiểm soát Kích thước ban đầu của mỗi hạt.
- **Start Rotation + 3D Start Rotation**: Góc quay ban đầu (XYZ) của mỗi hạt theo TRỤC (Start Rotation = Z).
- **Flip Rotation (0-1)**: Làm cho một số hạt **Flip (lật)**, 0-1 càng lớn Flip càng nhiều.
- **Start Color**: Màu sắc ban đầu của mỗi hạt (*bốc theo số lượng hạt* "**Max Particles**").
- **Gravity Modifier**: [*TODO*] Cân chỉnh giá trị trọng lực được đặt trong cửa sổ Vật lý (Edit > Project Settings > Physics). Giá trị bằng 0 sẽ tắt trọng lực.
- **Simulation Space (enum)**: (Không gian mô phỏng) Kiểm soát xem các hạt có hoạt hình trong **Local** của parent object hay không (di chuyển cùng parent object), trong **World** hoặc **Custom** (di chuyển với đối tượng tùy chỉnh được chọn).
- **Simulation Speed (float)**: Điều chỉnh tốc độ cập nhật (playback) toàn bộ hệ thống.
- **Delta Time (enum)**: lựa chọn giữa **Scaled** (sử dụng giá trị của *Time Scale* trong *Project Settings > Time*) và **Unscaled** (bỏ qua *Time Scale*). Điều này rất hữu ích cho các Hệ thống hạt xuất hiện trên Menu Tạm dừng (khi mà *Time Scale = 0*).
- **Scaling Mode (enum)**: Chọn cách áp dụng giá trị scale từ Transform với các tùy chọn **Hierarchy** (theo Parent), **Local** (ignore Parent) và **Shape** (size ko ảnh hưởng, chỉ ảnh hưởng vị trí bắt đầu)
- **Play on Awake (bool)**: Nếu được bật, Hệ thống hạt sẽ tự động khởi động khi đối tượng được tạo (ko cần gọi PLAY).
- **Emitter Velocity (enum)**: Chọn cách Hệ thống hạt tính toán vận tốc (velocity) được sử dụng bởi các mô-đun *Inherit Velocity* và *Emission*. Hệ thống hạt có thể tính toán vận tốc bằng Rigidbody Component nếu có tồn tại hoặc bằng cách theo dõi chuyển động của Transform Component. Nếu không có *Rigidbody Component* nào tồn tại, hệ thống sẽ sử dụng *Transform Component* theo mặc định.
- **Max Particles (int)**: Số lượng hạt tối đa trong hệ thống cùng một lúc. Nếu đạt đến giới hạn, một số hạt sẽ bị loại bỏ.
- **Auto Random Seed (bool)**: Nếu được bật, Hệ thống hạt sẽ trông khác đi mỗi khi được phát. Ngược lại, hệ thống hạt sẽ giống hệt nhau mỗi lần Play.
- **Random Seed (int)**: Khi vô hiệu hóa *Auto Random Seed*, giá trị này được sử dụng để tạo hiệu ứng lặp lại duy nhất.
- **Stop Action (enum)**: (Disable, Destroy, Callback). Khi tất cả các hạt thuộc hệ thống đã hoàn thành, hệ thống có thể **thực hiện một hành động**. Một hệ thống được xác định là đã dừng khi tất cả các hạt của nó đã chết và tuổi của nó đã vượt quá Thời lượng. Đối với *hệ thống lặp*, điều này chỉ xảy ra nếu hệ thống *bị dừng thông qua tập lệnh*.
- **Culling Mode (enum)**: (Automatic, Pause And Catch-up, Pause, Always Simulate) Chọn có nên **tạm dừng mô phỏng** Hệ thống hạt khi các hạt ở ngoài màn hình hay không.
- **Ring Buffer Mode (enum)**: (Disabled, Pause Until Replaced, Loop Until Replaced) **Giữ cho các hạt** tồn tại cho đến khi chúng đạt đến số lượng Hạt tối đa, tại thời điểm đó các hạt mới sẽ tái chế những hạt cũ nhất, thay vì loại bỏ các hạt khi vòng đời của chúng trôi qua.

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
- **Rate over Time (float)**: Số hạt phát ra trong một đơn vị thời gian (mỗi giây).
- **Rate over Distance (float)**: Số lượng hạt phát ra trên một đơn vị khoảng cách di chuyển.
- **Bursts (array)**: Một "bùng nổ" là một sự kiện SINH THÊM ra các hạt. Các cài đặt này cho phép các hạt được phát ra vào những thời điểm được chỉ định.
    - **Time (float)**: Mốc thời gian sẽ Burst (tính bằng giây, sau khi Hệ thống hạt bắt đầu phát).
    - **Count (int)**: Số lượng hạt sẽ Burst.
    - **Cycles (int)**: Số lần Burst liên tiếp.
    - **Interval (float)**: Thời gian (tính bằng giây) giữa mỗi chu kỳ của Burst được kích hoạt.
    - **Probability (float: 0-1)**: Xác suất để Burst (0-1: 0 chắc chắn ko Burst, 1 chắc chắn sẽ Burst)
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

#### Sphere (Hình cầu), Hemisphere (Bán cầu)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Lưu ý: Hình cầu và bán cầu có cùng tính chất. Phát hạt **đồng đều theo mọi hướng**. 

**Properties**:
- **Shape (enum)**: Hình dạng của emission volume.
    - **Sphere**: Phát hạt đồng đều theo mọi hướng.
    - **Hemisphere**: Phát hạt đồng đều theo mọi hướng trên một mặt của mặt phẳng..
- **Radius (float)**: Bán kính hình tròn của hình đó.
- **Radius Thickness (float)**: (Độ dày bán kính) Tỷ lệ volume phát ra các hạt. Giá trị 0 phát ra từ bề mặt ngoài. Giá trị 1 phát ra từ toàn bộ volume. Các giá trị ở giữa sẽ sử dụng một tỷ lệ volume.
- **Arc (0-360)**: góc lượng giác của hình dạng 0-360 độ
    - **Mode (enum)**: (Random, Loop, Ping-Pong, Burst Spread) kiểm soát cách các Hạt sinh ra xung quanh Arc.
    - **Spread (0-1)**: sinh ra các Hạt chỉ ở một góc cụ thể around the arc (0 để disable)
    - **Speed (float)**: control tốc độ phát.
- **Texture**: [?] Một kết cấu được sử dụng để pha màu và loại bỏ các hạt.
    - **Clip Channel (enum)**: Một kênh (*Green, Red, Blue, Alpha*) từ kết cấu được sử dụng để loại bỏ các hạt.
    - **Clip Threshold (0-1)**: (*Ngưỡng clip*) Khi ánh xạ các hạt tới các vị trí trên kết cấu, hãy loại bỏ bất kỳ điểm ảnh nào có màu sắc giảm xuống dưới ngưỡng này (0-1).
- **Color affects Particles (bool)**: (Màu sắc ảnh hưởng đến hạt) Nhân màu hạt với **màu kết cấu**.
- **Alpha affects Particles (bool)**: (Alpha ảnh hưởng đến các hạt) Nhân alpha hạt với **alpha kết cấu**.
- **Bilinear Filtering (bool)**: (Lọc song tuyến) Khi đọc kết cấu, hãy *kết hợp 4 mẫu lân cận* để thay đổi **màu hạt mượt mà hơn**, bất kể kích thước kết cấu.
- **Position (Vector3)**: Áp dụng phần bù (*offset*) cho hình dạng bộ phát.
- **Rotation (Vector3)**: *Xoay* hình dạng bộ phát.
- **Scale (Vector3)**: Thay đổi *kích thước* của hình dạng bộ phát.
- **Align to Direction (bool)**: (Căn chỉnh theo hướng) **Định hướng các hạt dựa trên hướng di chuyển ban đầu** của chúng. Điều này có thể hữu ích nếu bạn muốn mô phỏng, chẳng hạn như các mảng sơn ô tô bay ra khỏi thân ô tô khi va chạm.
- **Randomize Direction (0-1)**: Random các **hướng hạt ngẫu nhiên**. Đặt 0 để Disable, Đặt 1 để hướng hạt hoàn toàn ngẫu nhiên.
- **Spherize Direction (0-1)**: Pha trộn các **hướng của hạt** theo hướng hình cầu, di chuyển ra ngoài từ tâm. Đặt 0 để Disable, Đặt 1 hướng hạt sẽ hướng ra ngoài từ tâm (hoạt động giống hệt như khi Hình dạng được đặt thành Hình cầu Sphere).
- **Randomize Position (float+)**: Di chuyển (Position) các hạt theo số lượng ngẫu nhiên, đến giá trị được chỉ định. Đặt 0 để Disable. Bất kỳ giá trị nào khác sẽ áp dụng một số **tính ngẫu nhiên cho vị trí** (Position) sinh sản của các hạt.
- **[Transform Tool for Shape]**: gizmo, position, rotation, scale. Sử dụng để tinh chỉnh Local Transform của Shape

#### Cone (hình nón)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule1.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Phát ra các **hạt từ đế hoặc thân hình nón**. Các hạt *phân kỳ tỷ lệ với khoảng cách của chúng với **đường tâm*** của hình nón.

**Properties**:
- **Angle (float:0-90)**: Góc của hình nón. Góc 0 tạo ra một hình trụ trong khi góc 90 tạo ra một đĩa phẳng.
- **Radius (float)**: Bán kính hình tròn của hình đó.
- **Radius Thickness (0-1)**: Giá trị 0 phát ra các hạt từ bề mặt bên ngoài của hình dạng. Giá trị 1 phát ra các hạt từ toàn bộ khối lượng.
- **Length (float)**: Chiều dài của hình nón. Điều này chỉ áp dụng khi thuộc tính **Emit from**: được đặt thành Volume.
- **Emit from (enum)**: (Base or Volume) Phần của hình nón để phát ra các hạt từ: Base hoặc Volume.
- **Texture**: Một kết cấu được sử dụng để pha màu và loại bỏ các hạt.
- **...**

#### Box (hình hộp)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule2.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Phát ra các hạt từ **cạnh, bề mặt hoặc thân của hình hộp**. Các **hạt di chuyển theo hướng thuận (Z)** của vật thể phát.

**Properties**:
- **Emit from: (enum)**: (Edge, Shell, or Volume.) Chọn phần của hộp để phát ra: Edge (cạnh), Shell (vỏ bọc) hoặc Volume (thể tích).
- **Texture**: Một kết cấu được sử dụng để pha màu và loại bỏ các hạt.
- **...**

#### Mesh, MeshRenderer, SkinnedMeshRenderer (Mesh mode)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule3.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Phát ra các hạt từ bất kỳ hình dạng Lưới nào.

**Properties**:
- **Mesh (Inspector)**: Phát ra các hạt từ bất kỳ hình dạng Lưới tùy ý nào được cung cấp thông qua Inspector.
- **MeshRenderer (Inspector)**: Phát ra các hạt từ tham chiếu đến **Mesh Renderer** *của GameObject*.
- **SkinnedMeshRenderer (Inspector)**: Phát ra các hạt từ tham chiếu đến **Skinned Mesh Renderer** *của GameObject*.
- **Type (enum)**: Các hạt được *phát ra từ đâu*. Chọn **Vertex** để các hạt phát ra từ **các đỉnh**, **Edge** để các hạt phát ra **từ các cạnh**, hoặc **Triangle** để các hạt phát ra từ các **hình tam giác**. Mặc định là **Vertex**.
    - **Mode**: (Random, Loop, Ping-Pong, Burst Spread) kiểm soát cách các Hạt sinh ra.
- **Single Material (bool)**: Chỉ định xem có phát ra các hạt từ một Lưới phụ cụ thể hay không (được xác định bằng số chỉ mục vật liệu). Nếu được bật, một trường số sẽ xuất hiện, cho phép bạn chỉ định số chỉ mục vật liệu.
- **Use Mesh Colors (bool)**: Điều chỉnh màu hạt bằng *Mesh vertex colors* hoặc nếu chúng không tồn tại thì sử dụng Sharder Color Property (“Color“ hoặc “TintColor”) từ Material.
- **Normal Offset (float)**: Khoảng cách từ bề mặt Lưới đến các hạt phát ra (theo hướng **pháp tuyến** *của bề mặt*)
- **Texture**: Một kết cấu được sử dụng để pha màu và loại bỏ các hạt.
- **...**

#### Sprite and Sprite Renderer (Sprite mode)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModuleSprite.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Phát ra các hạt từ hình dạng **Sprite** được cung cấp qua Inspector.

**Properties**:
- **Type (enum)**: Các hạt được *phát ra từ đâu*. Chọn **Vertex** để các hạt phát ra từ **các đỉnh**, **Edge** để các hạt phát ra **từ các cạnh**, hoặc **Triangle** để các hạt phát ra từ các **hình tam giác**. Mặc định là **Vertex**.
- **Normal Offset (float)**: Khoảng cách từ bề mặt Lưới đến các hạt phát ra (theo hướng **pháp tuyến** *của bề mặt*)
- **Texture**: Một kết cấu được sử dụng để pha màu và loại bỏ các hạt.
- **...**

#### Circle (hình tròn)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule4.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Edge (đường thẳng)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule5.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Donut (Bánh vòng)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule6.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Rectangle (Hình chữ nhật)

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/ShapeModule7.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Renderer module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/renderer-module-view.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Các cài đặt của mô-đun này xác định cách **Hình ảnh hoặc Mesh** của hạt được biến đổi (**transformed**), tô bóng, bị che mờ (**shaded**) và lấn át (**overdrawn**) bởi các hạt khác.

Sử dụng Renderer module để chọn giữa một số chế độ đồ họa Billboard 2D (**PHẲNG**) và chế độ Lưới (**3D Mesh**).

**Mesh 3D** mang lại cho các hạt tính xác thực cao hơn khi chúng đại diện cho các GameObject rắn, chẳng hạn như đá, đồng thời cũng có thể cải thiện cảm giác về khối lượng cho các đám mây, quả cầu lửa và chất lỏng.

**Billboards** phù hợp với các mục đích sử dụng cụ thể:
- Chế độ **Billboard** rất hữu ích cho các phần tử biểu thị volume trông giống nhau từ bất kỳ hướng nào (chẳng hạn như các đám mây).
- Chế độ **Horizontal Billboard** rất hữu ích khi các hạt bao phủ mặt đất (chẳng hạn như chỉ báo mục tiêu và hiệu ứng phép thuật) hoặc khi chúng là những vật thể phẳng bay hoặc trôi song song với mặt đất.
- Chế độ **Vertical Billboard** giữ cho mỗi hạt thẳng đứng và vuông góc với mặt phẳng (sàn) XZ, nhưng cho phép nó xoay quanh trục y của nó. Điều này có thể hữu ích khi bạn đang sử dụng **orthographic Camera** và muốn kích thước hạt luôn ổn định.
- Chế độ **Stretched Billboard** làm nổi bật tốc độ rõ ràng của các hạt theo cách tương tự như kỹ thuật “kéo dài và ép” (*stretch and squash*) được các nhà làm phim hoạt hình truyền thống sử dụng. Lưu ý rằng ở chế độ này, các hạt được căn chỉnh đối diện với Máy ảnh và cũng được căn chỉnh theo vận tốc của chúng. Sự căn chỉnh này xảy ra bất kể giá trị của *Velocity Scale* - ngay cả khi *Velocity Scale* được đặt thành 0, các hạt trong chế độ này vẫn căn chỉnh theo vận tốc (velocity).

Khi bạn sử dụng chế độ kết xuất **Billboard**, bạn có thể sử dụng **Normal Direction** để tạo bóng hình cầu trên các Billboard hình chữ nhật phẳng. Điều này có thể giúp tạo ảo giác về các hạt 3D nếu bạn sử dụng **Material** và áp dụng ánh sáng cho các hạt của mình.

**API**:
```csharp
ps = GetComponent<ParticleSystem>();
psr = GetComponent<ParticleSystemRenderer>();
psr.mesh = Resources.GetBuiltinResource<Mesh>("Capsule.fbx");
public ParticleSystemRenderMode renderMode = ParticleSystemRenderMode.Billboard;
psr.renderMode = renderMode;
psr.lengthScale = lengthScale;
psr.velocityScale = velocityScale;
// More: https://docs.unity3d.com/2021.3/Documentation/ScriptReference/ParticleSystemRenderer.html
```

**Properties**:
- **Render Mode (enum)**: Cách Unity tạo ra hình ảnh được hiển thị từ hình ảnh đồ họa (hoặc Lưới)
    - **Billboard**: Unity hiển thị các hạt dưới dạng biển quảng cáo (**PHẲNG**) và chúng hướng về hướng bạn chỉ định trong **Render Alignment**.
        - **Normal Direction (0-1)**: Độ lệch của các tiêu chuẩn ánh sáng mà Unity sử dụng cho đồ họa hạt. Giá trị 1 hướng các điểm chuẩn vào Máy ảnh, giá trị 0 hướng chúng về phía giữa màn hình.
        - **Min Particle Size (float+)**: Kích thước hạt nhỏ nhất (bất kể các cài đặt khác), được biểu thị bằng một phần kích thước khung nhìn.
        - **Max Particle Size (float+)**: Kích thước hạt lớn nhất (bất kể các cài đặt khác), được biểu thị bằng một phần kích thước khung nhìn.
        - **Allow Roll (bool)**: (Cho phép cuộn)Kiểm soát xem các hạt hướng về phía máy ảnh có thể xoay quanh trục Z của máy ảnh hay không. Việc tắt tính năng này có thể đặc biệt hữu ích cho VR các ứng dụng, trong đó cuộn HMD (Màn hình gắn trên đầu) có thể gây ra hiện tượng quay hạt không mong muốn cho Hệ thống hạt.
        - **Shadow Bias (float)**: Di chuyển bóng dọc theo hướng ánh sáng. Điều này loại bỏ các tạo tác tạo bóng (shadowing artifacts) do thể tích (volume) xấp xỉ của biển quảng cáo (Billboard) gây ra.
    - **Stretched Billboard**: Các hạt hướng về phía Camera với nhiều tùy chọn mở rộng quy mô có thể được áp dụng.
        - **Camera Scale (float)**: Kéo giãn các hạt theo chuyển động của Camera. Đặt giá trị này thành 0 để tắt tính năng kéo dài chuyển động của Máy ảnh.
        - **Velocity Scale (float)**: Kéo dài các hạt tỷ lệ thuận với tốc độ của chúng. Đặt giá trị này thành 0 để tắt tính năng kéo dài dựa trên tốc độ.
        - **Length Scale (float)**: Kéo giãn các hạt tỷ lệ với kích thước hiện tại của chúng dọc theo hướng vận tốc của chúng. Đặt giá trị này thành 0 sẽ làm cho các hạt biến mất, có độ dài thực tế bằng 0.
        - **Freeform Stretching (bool)**: Cho biết liệu các hạt có nên sử dụng sự kéo dài dạng tự do hay không. Với đặc tính kéo dãn này, các hạt không trở nên mỏng khi bạn nhìn trực diện vào chúng.
        - **Rotate With Stretch (bool)**: Cho biết có nên xoay các hạt hay không dựa trên hướng chúng kéo dài. Điều này được thêm vào bên trên phép quay hạt khác.
    - **Horizontal Billboard**: Mặt phẳng hạt song song với mặt phẳng “sàn” XX.
    - **Vertical Billboard**: Hạt đứng thẳng trên trục Y của thế giới nhưng quay mặt về phía Camera.
    - **Mesh**: Unity kết xuất hạt từ Lưới 3D (**Mesh 3D**) thay vì Bảng quảng cáo (**PHẲNG**). Có thể **thêm nhiều Mesh vào List** và **chọn Trọng Số** lựa chọn mesh.
        - **Mesh Distribution (enum)**: Chỉ định **phương thức** mà Unity sử dụng để gán ngẫu nhiên các mắt lưới cho các hạt.
            - **Uniform Random**: Unity gán ngẫu nhiên các mắt lưới cho các hạt với trọng số đều nhau?
            - **Non-uniform Random**: Unity gán ngẫu nhiên các mắt lưới cho các hạt có trọng số do người dùng xác định cho mỗi mắt lưới.
        - **Mesh Weightings (float+)**: Các trọng số của Mesh 3D mà Unity sẽ lựa chọn.
    - **None**: Unity không hiển thị bất kỳ hạt nào. Điều này có thể hữu ích cùng với mô-đun **Trails module**, nếu bạn chỉ muốn hiển thị các đường nhỏ và **ẩn mọi kết xuất hạt mặc định**.
- **Material**: Vật liệu mà Unity sử dụng để hiển thị các hạt.
- **Trail Material**: Vật liệu mà Unity sử dụng để hiển thị các **particle trails** (chỉ khả dụng khi **Trails module** được bật).
- **Sort Mode (enum)**: Thứ tự Unity vẽ (draws) và phủ (overlays) các hạt bằng Hệ thống hạt.
    - **None**: Khi cài đặt này được bật, Unity sẽ không sắp xếp các hạt.
    - **By Distance**: Sắp xếp các hạt trong hệ thống dựa trên khoảng cách đến Camera đang hoạt động. Unity hiển thị các hạt ở gần Camera hơn trên những hạt ở xa hơn. Thứ tự của các hạt không thay đổi khi bạn xoay camera với cài đặt này.
    - **Oldest in Front**: Unity kết xuất các hạt tồn tại lâu nhất ở phía trước Hệ thống hạt.
    - **Youngest in Front**: Unity kết xuất các hạt tồn tại trong thời gian ngắn nhất ở phía trước Hệ thống hạt.
    - **By Depth**: Unity kết xuất các hạt dựa trên khoảng cách của chúng với mặt phẳng gần của máy ảnh. Thứ tự của các hạt có thể thay đổi khi bạn xoay camera với cài đặt này.
- **Sorting Fudge (float)**: Sự thiên vị (bias) của thứ tự sắp xếp Hệ thống hạt. Giá trị thấp hơn làm tăng cơ hội tương đối để Unity thu hút Hệ thống hạt qua các GameObject minh bạch khác, bao gồm cả các Hệ thống hạt khác. Cài đặt này chỉ ảnh hưởng đến toàn bộ Hệ thống hạt xuất hiện trong cảnh - nó không thực hiện việc sắp xếp các hạt riêng lẻ trong một hệ thống.
- **Render Alignment (enum)**: Thuộc tính này xác định hướng mà bảng quảng cáo dạng hạt (billboards) hướng về phía trước (Mesh Mode cũng có thuộc tính này).
    - **View**: Các hạt đối mặt với mặt phẳng Camera.
    - **World**: Các hạt thẳng hàng với trục thế giới.
    - **Local**: Các hạt căn chỉnh theo thành phần Transform GameObject của họ.
    - **Facing**: Các hạt hướng về vị trí trực tiếp được xác định bởi thành phần Transform trong GameObject của Camera đang hoạt động.
    - **Velocity**: Các hạt cùng hướng với vectơ vận tốc của chúng.
- **Flip (Vector3)**: Phản chiếu một tỷ lệ các hạt trên các trục được chỉ định. Giá trị cao hơn sẽ lật được (Flip) nhiều hạt hơn.
- **Enable Mesh GPU Instancing (bool)**: Thuộc tính này chỉ khả dụng khi sử dụng **Mesh Mode**. Thuộc tính này kiểm soát liệu Unity có hiển thị Hệ thống hạt bằng cách sử dụng **GPU Instancing** hay không. Điều này đòi hỏi phải sử dụng một **shader** tương thích (**Material:Particles/Standard Surface**).
- **Pivot (Vector3)**: Sửa đổi điểm xoay trung tâm cho các hạt quay. Giá trị là hệ số nhân của kích thước hạt.
- **Visualize Pivot (bool)**: Xem trước các điểm trục của hạt trong Chế độ xem Scence (Editor sẽ draw điểm Pivot trong SceneView).
- **Masking (enum)**: Đặt cách các hạt được Hệ thống hạt hiển thị hoạt động khi chúng tương tác với Sprite Mặt nạ.
    - **No Masking**: Hệ thống hạt không tương tác với bất kỳ Mặt nạ Sprite nào trong hiện trường. Đây là tùy chọn mặc định.
    - **Visible Inside Mask**: Các hạt có thể nhìn thấy được ở nơi Sprite Mask phủ lên chúng, nhưng không thể nhìn thấy bên ngoài nó.
    - **Visible Outside Mask**: Các hạt có thể nhìn thấy bên ngoài Sprite Mask nhưng không nhìn thấy được bên trong nó. Mặt nạ Sprite ẩn các phần của hạt mà nó phủ lên.
- **Apply Active Color Space (bool)**: Khi kết xuất trong Không gian màu tuyến tính (*Linear Color Space*), hệ thống sẽ chuyển đổi các màu hạt từ Không gian Gamma (*Gamma Space*) trước khi tải chúng lên GPU.
- **Custom Vertex Streams (bool)**: Định cấu hình các thuộc tính hạt nào có sẵn trong Vertex **Shader** của Material. Nếu được chọn thì có thể Add thêm cái thuộc tính vào **Shader**.
- **Cast Shadows (enum)**: Nếu thuộc tính này được bật, Hệ thống hạt sẽ tạo bóng khi Ánh sáng tạo bóng chiếu vào nó.
    - **On**: Bật bóng cho Hệ thống hạt này.
    - **Off**: Vô hiệu hóa bóng cho Hệ thống hạt này.
    - **Two-Sided**: Tùy chọn này cho phép đổ bóng từ hai phía của Lưới (Billboard cũng là Mesh PHẲNG). Việc loại bỏ mặt sau (Backface culling) không được tính đến khi thuộc tính này được bật.
    - **Shadows Only**: Chọn Chỉ bóng (Shadows) để làm cho bóng hiển thị, bản thân Lưới thì không.
- **Motion Vectors (enum)**: Đặt xem có sử dụng vectơ chuyển động để theo dõi chuyển động trên mỗi pixel, không gian màn hình của thành phần Chuyển đổi của Hệ thống hạt này từ khung hình này sang khung hình tiếp theo hay không. **Lưu ý**: Không phải tất cả nền tảng đều hỗ trợ vectơ chuyển động.
    - **Camera Motion Only**: Chỉ sử dụng chuyển động của Camera để theo dõi chuyển động.
    - **Per Object Motion**: Sử dụng một thẻ cụ thể (specific pass) để theo dõi chuyển động cho Trình kết xuất này (Renderer).
    - **Force No Motion**: Không theo dõi chuyển động.
- **Receive Shadows (bool)**: Quyết định xem các hạt trong hệ thống này có thể nhận bóng **từ các nguồn khác** hay không. Chỉ những vật liệu mờ đục mới có thể nhận được bóng.
- **Sorting Layer ID (list)**: Tên của lớp sắp xếp của Trình kết xuất (kiểu như Z-Index, liên quan đến Sprites, Renderer).
- **Order in Layer (int)**: Thứ tự của Trình kết xuất này trong một lớp sắp xếp (**Sorting Layer**, Z-Index of Z-Index).
- **Light Probes (enum)**: Chế độ nội suy ánh sáng dựa trên đầu dò (Probe-based, **ProbesLight probes** lưu trữ thông tin về cách ánh sáng truyền qua không gian). [TODO: Off, Blend Probes, Use Proxy Volume, Custom Provided]
- **Reflection Probes (enum)**: Nếu được bật (khác Off) và nếu có đầu dò phản chiếu (*reflection probes*) trong Scence, Unity sẽ chỉ định kết cấu phản chiếu (*reflection texture*) từ đầu dò phản chiếu (reflection probes) gần nhất cho GameObject này và đặt kết cấu làm biến thống nhất *Shader* tích hợp sẵn (built-in Shader).
- **Anchor Override**: một Transform (cung cấp từ Inspector) xác định vị trí nội suy khi bạn sử dụng hệ thống Đầu dò ánh sáng (**Light Probe**) hoặc Đầu dò phản xạ (**Reflection Probe**).

### Noise module

