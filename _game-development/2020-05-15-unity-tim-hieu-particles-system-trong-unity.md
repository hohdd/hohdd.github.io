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
collection: VFX # this for AMP related post
### category: dùng để group collection
category: VFX

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

#### **API**:
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.MainModule main = ps.main;
main.startDelay = 5.0f;
main.startLifetime = 2.0f;
```

#### **Properties**:
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

#### Rate (over Time/Distance)

Tỉ lệ số hạt phát ra theo thời gian hoặc theo khoảng cách.

#### Bursts

Có thể cài đặt các Bursts là một mảng để emit thêm một số lượng hạt ngoài Rate ở trên.

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

Sử dụng Renderer module để chọn giữa một số chế độ đồ họa Billboard 2D (**PHẲNG**) và chế độ Lưới (**Mesh 3D**).

#### Mesh 3D

**Mesh 3D** mang lại cho các hạt tính xác thực cao hơn khi chúng đại diện cho các GameObject rắn, chẳng hạn như đá, đồng thời cũng có thể cải thiện cảm giác về khối lượng cho các đám mây, quả cầu lửa và chất lỏng.

#### Billboards

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

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysNoiseModule.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Thêm nhiễu loạn (turbulence) vào chuyển động của hạt bằng mô-đun này.

Thêm Noise vào các hạt của bạn là một cách đơn giản và hiệu quả để tạo ra các patterns và hiệu ứng thú vị. Ví dụ, hãy tưởng tượng than hồng từ ngọn lửa di chuyển xung quanh như thế nào hoặc khói cuộn tròn như thế nào khi nó di chuyển. Noise tần số cao, mạnh có thể được sử dụng để mô phỏng than hồng cháy, trong khi Noise tần số thấp, nhẹ sẽ phù hợp hơn để mô phỏng hiệu ứng khói.

Để kiểm soát tối đa Noise, bạn có thể bật tùy chọn **Separate Axes**. Điều này cho phép bạn kiểm soát cường độ (**strength**) và ánh xạ lại (**remapping**) trên từng trục (**axis**) một cách độc lập.

**API**:
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.NoiseModule noise = ps.noise;
noise.enabled = true;
noise.strength = 1.0f;
noise.quality = ParticleSystemNoiseQuality.High;
```

**Properties**:
- **Separate Axes (bool)**: (Trục riêng biệt) Kiểm soát cường độ và ánh xạ lại độc lập trên từng trục.
- **Strength**: (cường độ) Một đường cong (curve) xác định **mức độ ảnh hưởng của Noise** lên một hạt trong suốt vòng đời của nó. **Giá trị cao** hơn sẽ làm cho các hạt di chuyển **nhanh hơn và xa hơn**.
- **Frequency**: Kiểm soát **tần suất** các hạt *thay đổi hướng di chuyển* của chúng và *mức độ thay đổi hướng đột ngột* đó. Giá trị thấp tạo ra tiếng ồn nhẹ nhàng, êm ái và giá trị cao tạo ra tiếng ồn thay đổi nhanh chóng.
- **Scroll Speed**: Di chuyển trường nhiễu theo thời gian để gây ra chuyển động hạt thất thường và khó lường hơn.
- **Damping**: (Giảm xóc) Khi được bật, cường độ (strength) tỷ lệ thuận với tần số (frequency). Việc buộc các giá trị này lại với nhau có nghĩa là Noise có thể được điều chỉnh tỷ lệ (scaled) trong khi vẫn duy trì hoạt động tương tự (same behaviour) nhưng ở kích thước (size) khác.
- **Octaves**: (Quãng tám) Chỉ định số lượng lớp nhiễu (layers) chồng chéo (overlapping) được kết hợp để tạo ra giá trị nhiễu cuối cùng. Sử dụng nhiều lớp hơn sẽ mang lại Noise phong phú hơn, thú vị hơn nhưng làm tăng đáng kể chi phí hiệu suất (performance cost).
- **Octave Multiplier**: (Hệ số quãng tám) Đối với mỗi lớp nhiễu bổ sung, hãy giảm cường độ (strength) theo tỷ lệ này.
- **Octave Scale**: (Thang quãng tám) Đối với mỗi lớp nhiễu bổ sung, hãy điều chỉnh tần số (frequency) theo hệ số nhân này.
- **Quality (enum)**: [Low, Medium, High] Cài đặt chất lượng thấp hơn sẽ giảm đáng kể chi phí hiệu suất (performance cost) nhưng cũng ảnh hưởng đến mức độ thú vị của Noise. Hãy sử dụng chất lượng thấp nhất nhưng vẫn mang lại cho bạn hành vi mong muốn.
- **Remap (bool)**: Ánh xạ lại các giá trị nhiễu cuối cùng vào một phạm vi khác.
    - **Remap Curve**: Đường cong mô tả cách biến đổi các giá trị nhiễu cuối cùng. Ví dụ: bạn có thể sử dụng điều này để chọn ra các phạm vi thấp hơn của trường nhiễu và bỏ qua các phạm vi cao hơn bằng cách tạo một đường cong bắt đầu ở mức cao và kết thúc ở mức 0.
- **Position Amount**: Một hệ số nhân để kiểm soát mức độ tiếng ồn **ảnh hưởng đến vị trí** hạt.
- **Rotation Amount**: Một hệ số nhân để kiểm soát mức độ tiếng ồn **ảnh hưởng đến chuyển động quay** của hạt, tính bằng **độ trên giây**.
- **Size Amount**: Một hệ số nhân để kiểm soát mức độ tiếng ồn **ảnh hưởng đến kích thước** hạt.

### Lights module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysLightsModule.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Lights module là một cách nhanh chóng để **thêm ánh sáng theo thời gian thực** vào các hiệu ứng hạt của bạn. Nó có thể được sử dụng để làm cho các hệ thống chiếu ánh sáng vào môi trường xung quanh, ví dụ như để tạo ra lửa, pháo hoa hoặc tia sét. Nó cũng cho phép bạn để đèn thừa hưởng nhiều đặc tính khác nhau từ các hạt mà chúng được gắn vào. Điều này có thể khiến người ta tin chắc hơn rằng bản thân hiệu ứng hạt đang phát ra ánh sáng. Ví dụ, điều này có thể đạt được bằng cách làm cho ánh sáng mờ đi cùng với các hạt của chúng và để chúng có cùng màu sắc.

Mô-đun này giúp bạn dễ dàng tạo ra nhiều đèn thời gian thực rất nhanh và đèn thời gian thực **có chi phí hiệu suất cao** (*performance cost*), đặc biệt là trong Kết xuất chuyển tiếp cách thức (**Forward Rendering**). Nếu đèn cũng đổ bóng thì **chi phí hiệu suất thậm chí còn cao hơn**. Thuộc tính **Maximum Lights** được sử dụng để giúp bảo vệ chống lại sự điều chỉnh vô tình đối với tốc độ phát xạ và do đó tạo ra hàng nghìn đèn theo thời gian thực. Việc tạo ra nhiều đèn hơn khả năng quản lý của phần cứng mục tiêu có thể gây ra tình trạng chậm (**slowdowns**) và không phản hồi (**unresponsiveness**).

**API**
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.TrailModule trails = ps.trails;
trails.enabled = true;
trails.ratio = 0.5f;
```

**Properties**:
- **Light (inspector)**: Chỉ định một **Light Prefab** mô tả ánh sáng hạt của bạn trông như thế nào.
- **Ratio (0-1)**: Giá trị từ 0 đến 1 mô tả tỷ lệ (xác suất) các hạt sẽ nhận được ánh sáng.
- **Random Distribution (bool)**: Chọn xem Lights được chỉ định ngẫu nhiên (randomly) hay định kỳ (periodically). Khi được đặt thành TRUE, mọi hạt đều có cơ hội ngẫu nhiên nhận được ánh sáng dựa trên **Ratio**. Giá trị cao hơn làm tăng xác suất hạt có ánh sáng. Khi được đặt thành FALSE, **Ratio** sẽ kiểm soát tần suất một hạt mới được tạo nhận được ánh sáng (ví dụ: mọi hạt thứ N sẽ nhận được ánh sáng).
- **Use Particle Color (bool)**: Khi được đặt thành TRUE, màu cuối cùng của Ánh sáng sẽ được điều chỉnh theo màu của hạt được gắn vào. Nếu được đặt thành FALSE, Màu Light sẽ được sử dụng mà không có bất kỳ sửa đổi nào.
- **Size Affects Range (bool)**: Khi được bật, Phạm vi (Range) được chỉ định trong Ánh sáng (Light) sẽ được nhân với kích thước (Size) của hạt.
- **Alpha Affects Intensity (bool)**: Khi được bật, Cường độ ánh sáng (Intensity) sẽ được nhân với giá trị alpha của hạt.
- **Range Multiplier (float+)**: Áp dụng hệ số nhân tùy chỉnh cho Phạm vi ánh sáng (Range of the light) trong suốt thời gian tồn tại của hạt (lifetime) bằng giá trị/đường cong này.
- **Intensity Multiplier (float+)**: Áp dụng hệ số nhân tùy chỉnh cho Cường độ ánh sáng (Intensity of the light) trong suốt thời gian tồn tại của hạt (lifetime) bằng giá trị/đường cong này.
- **Maximum Lights (int)**: Sử dụng cài đặt này để tránh vô tình tạo ra một số lượng lớn đèn (lights), điều này có thể khiến Editor không phản hồi hoặc khiến ứng dụng của bạn chạy rất chậm.

### Trails module

Thêm các vệt (trails) vào các hạt theo tỷ lệ phần trăm (ratio). 
Mô-đun này chia sẻ một số properties với **Trail Renderer** nhưng cung cấp khả năng dễ dàng gắn Trails vào các hạt và kế thừa các đặc tính khác nhau từ các hạt. Vệt (Trail) có thể hữu ích cho nhiều hiệu ứng khác nhau, chẳng hạn như đạn, khói và hình ảnh ma thuật.

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysTrailsModule.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysTrailsModuleRibbon.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

**Tips**:
- Sử dụng **Renderer Module** để chỉ định **Trail Material**.
- Unity lấy mẫu màu từ *Color Gradient* ở mỗi đỉnh (vertex) và nội suy tuyến tính các màu giữa mỗi đỉnh. Thêm nhiều vertex hơn vào *Line Renderer* của bạn để có được dải màu gần đúng hơn.

**API**
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.TrailModule trails = ps.trails;
trails.enabled = true;
trails.ratio = 0.5f;
```

**Properties**:
- **Mode (enum)**: Chọn cách tạo đường dẫn cho Hệ thống hạt.
    - **Particle**: tạo ra hiệu ứng trong đó mỗi hạt để lại một vệt cố định trên đường đi của nó.
        - **Ratio (0-1)**: Giá trị từ 0 đến 1, mô tả tỷ lệ các hạt được gán một Vệt. Unity chỉ định các đường dẫn một cách ngẫu nhiên, vì vậy giá trị này thể hiện xác suất.
        - **Lifetime (0-1)**: Thời gian tồn tại của mỗi vertex trong Trail, được biểu thị bằng hệ số nhân của thời gian tồn tại của hạt mà nó thuộc về. Khi mỗi đỉnh mới được thêm vào Trail, nó sẽ biến mất sau khi tồn tại lâu hơn tổng thời gian tồn tại của nó.
        - **Size affects Lifetime (bool)**: Nếu được bật, thời gian tồn tại của Trail sẽ được nhân với kích thước hạt.
        - **Minimum Vertex Distance (float+)**: Xác định khoảng cách mà một hạt phải di chuyển trước khi Trail của nó nhận được một đỉnh (vertex) mới.
        - **World Space (bool)**: Khi được bật, các đỉnh của Trail không di chuyển so với GameObject của Hệ thống hạt, ngay cả khi sử dụng Không gian mô phỏng cục bộ (Local Simulation Space). Thay vào đó, các vertex của Trail được thả xuống thế giới và bỏ qua mọi chuyển động của Hệ thống Hạt.
        - **Die With Particles (bool)**: Nếu được chọn, Trails sẽ biến mất ngay lập tức khi các hạt của chúng chết. Nếu tùy chọn này không được chọn, Trails còn lại sẽ hết hạn một cách tự nhiên dựa trên thời gian tồn tại còn lại của chính nó.
    - **Ribbon**: tạo ra một dải ruy băng gồm các **ĐƯỜNG NỐI TỪNG HẠT** dựa trên độ tuổi của nó.
        - **Ribbon Count (int)**: Chọn số lượng dải băng (ribbons) để hiển thị trong Hệ thống hạt. Giá trị 1 tạo ra một dải ruy băng duy nhất kết nối từng hạt. Tuy nhiên, giá trị cao hơn 1 sẽ tạo ra các dải băng kết nối mọi hạt thứ N. Ví dụ: khi sử dụng giá trị 2, sẽ có một dải băng kết nối các hạt 1, 3, 5 và một dải băng khác kết nối các hạt 2, 4, 6, v.v. Thứ tự của các hạt được quyết định dựa trên tuổi của chúng.
        - **Split Sub Emitter Ribbons (bool)**: (Chia dải băng phát phụ) Khi được bật trên **hệ thống đang được sử dụng làm bộ phát phụ** (*sub-emitter*), các hạt được sinh ra từ cùng một hạt của hệ thống mẹ sẽ chia sẻ một dải băng.
- **Texture Mode (enum)**: Chọn cách áp dụng họa tiết cho Vệt hạt (Trails).
    - **Stretch**: Chế độ kéo dài (Stretch) kéo dài kết cấu dọc theo toàn bộ chiều dài của đường nhỏ.
    - **Tile**: Ngói (Tile) lặp lại kết cấu mỗi N đơn vị khoảng cách. Tốc độ lặp lại được kiểm soát dựa trên các thông số **Tiling** trong **Material**.
    - **Repeat per Segment**: Chế độ Lặp lại trên mỗi Đoạn (Segment) lặp lại kết cấu dọc theo trail, lặp lại với tốc độ một lần trên mỗi **trail Segment**. Tốc độ lặp lại được kiểm soát dựa trên các thông số **Tiling** trong **Material**.
    - **Distribute per Segement**: Chế độ Phân phối (Distribute) trên mỗi phân đoạn (Segement) ánh xạ kết cấu một lần dọc theo toàn bộ chiều dài của trail và giả định rằng tất cả các đỉnh (vertex) đều cách đều nhau.
- **Size affects Width (bool)**: Nếu được bật, chiều rộng của vệt (Trail width) sẽ được nhân với kích thước hạt (size).
- **Inherit Particle Color (bool)**: Nếu được bật (hộp được chọn), màu Trail được điều chỉnh theo màu hạt.
- **Color over Lifetime (color)**: Để kiểm soát **màu sắc của toàn bộ Trail** trong suốt thời gian tồn tại của hạt mà nó được gắn vào.
- **Width over Trail (float+)**: Để kiểm soát chiều rộng của Trail trên chiều dài của nó.
- **Color over Trail**: Để kiểm soát màu của Trail trên toàn bộ chiều dài của nó.
- **Generate Lighting Data (bool)**: Kích hoạt tính năng này (đánh dấu vào hộp) để xây dựng hình dạng Trail với Chuẩn (Normals) và Tiếp tuyến (Tangents). Điều này cho phép Trails sử dụng Materials (cái mà sử dụng Scene Lighting), ví dụ như thông qua **Standard Shader** hoặc bằng cách sử dụng trình đổ bóng tùy chỉnh (**custom shader**).
- **Shadow Bias (float+)**: Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the trail width at each segement. (Áp dụng độ lệch bóng để ngăn hiện tượng tạo bóng tự tạo. Giá trị được chỉ định là tỷ lệ chiều rộng của vệt ở mỗi đoạn.)

### Sub Emitters module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysSubEmitInsp.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Mô-đun này cho phép bạn thiết lập các bộ phát phụ (Sub-Emitters). Đây là những nguồn phát hạt bổ sung được tạo ra ở **vị trí của hạt ở những giai đoạn nhất định** trong vòng đời của nó.

Nhiều loại hạt tạo ra hiệu ứng ở các giai đoạn khác nhau trong vòng đời của chúng cũng có thể được thực hiện bằng Hệ thống hạt. Ví dụ, một viên đạn có thể kèm theo một luồng khói khi nó rời khỏi nòng súng và một quả cầu lửa có thể phát nổ khi va chạm. Bạn có thể sử dụng bộ phát phụ để tạo hiệu ứng như thế.

Bộ phát phụ là các đối tượng Hệ thống hạt thông thường được tạo trong Cảnh hoặc từ Prefabs. Điều này có nghĩa là các bộ phát phụ có thể có các bộ phát phụ của riêng chúng (kiểu sắp xếp này có thể hữu ích cho các hiệu ứng phức tạp như pháo hoa). Tuy nhiên, điều này **rất dễ dàng có thể tiêu tốn nhiều tài nguyên** khi tạo ra một số lượng lớn các hạt bằng cách sử dụng các nguồn phát phụ.

Để **kích hoạt bộ phát phụ**, bạn có thể sử dụng các điều kiện sau:
- **Birth**: (Sự ra đời) **Khi các hạt được tạo ra**.
- **Collision**: (Va chạm) Khi các hạt **va chạm với một vật thể**.
- **Death**: Khi các hạt **bị phá hủy**.
- **Trigger**: Khi các hạt tương tác với **Trigger collider**
- **Manual**: (Thủ công) Chỉ được kích hoạt khi được yêu cầu qua tập lệnh. (```public void TriggerSubEmitter(int subEmitterIndex)```).

**Lưu ý rằng** các sự kiện **Collision**, **Trigger**, **Death** và **Manual** chỉ có thể sử dụng phát xạ nổ (**burst**) trong **Emission module**.

Ngoài ra, bạn có thể chuyển các **thuộc tính từ hạt gốc sang từng hạt mới** được tạo bằng cách sử dụng tùy chọn Kế thừa (**Inherit**). Các thuộc tính có thể chuyển nhượng là **size**, **rotation**, **color** và **lifetime**... **duration**, **everything**. Để kiểm soát cách kế thừa vận tốc (*velocity*), hãy cấu hình mô-đun **Inherit Velocity module** trên hệ thống bộ phát phụ (**sub-emitter system**).

Cũng có thể cấu hình xác suất mà sự kiện bộ phát phụ sẽ kích hoạt bằng thuộc tính **Emit Probability**. Giá trị 1 đảm bảo rằng sự kiện sẽ kích hoạt, trong khi giá trị thấp hơn sẽ làm giảm xác suất.

**API**
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.TrailModule trails = ps.trails;
trails.enabled = true;
trails.ratio = 0.5f;
```

**Properties**:
- **Sub Emitters**: cấu hình danh sách các bộ phát phụ và chọn điều kiện kích hoạt của chúng cũng như các thuộc tính mà chúng kế thừa từ các hạt gốc.

### Triggers module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysTriggersModule.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Mô-đun Kích hoạt của Hệ thống Hạt tích hợp cho phép bạn truy cập và sửa đổi các hạt dựa trên sự tương tác của chúng với một hoặc nhiều **Colliders** trong **Scence**. Khi bạn bật mô-đun này, Hệ thống hạt sẽ gọi *callback* **OnParticleTrigger()** trên các tập lệnh đính kèm mà bạn có thể sử dụng để truy cập danh sách các hạt tùy thuộc vào vị trí của chúng so với **Colliders in the Scene**.

**Lưu ý**: *OnParticleTrigger()* **không có parameter input**. Sử dụng **PS.GetTriggerParticles** để lấy ra List các hạt thỏa mãn điều kiện (Enter/Exit...) và **PS.SetTriggerParticles** để *re-assign* các *modified particles* trở lại hệ thống hạt.

Để bắt đầu, cần chỉ định **Colliders nào** mà các hạt có thể tương tác (**kéo vào Colliders List trong Inspector**).

Sau khi thêm Colliders, bạn có thể chỉ định một hạt sẽ *làm gì khi nó đáp ứng các tiêu chí* để vượt qua một loại sự kiện kích hoạt cụ thể. *Có bốn loại sự kiện mô tả cách một hạt có thể tương tác với Colliders*:
- **Inside**: Một hạt nằm trong giới hạn của Colliders.
- **Outside**: Một hạt nằm ngoài giới hạn của Colliders.
- **Enter**: Một hạt đi vào giới hạn của Colliders.
- **Exit**: Một hạt thoát ra khỏi giới hạn (bounds) của Colliders.

Trong Inspector, có một danh sách thả xuống cho từng loại sự kiện này cho phép bạn chọn điều gì sẽ xảy ra với một hạt nếu thỏa mãn các điều kiện của sự kiện kích hoạt. Các tùy chọn là:
- **Callback**: Gọi callback **OnParticleTrigger()**.
- **Kill**: Phá hủy hạt (Destroys). Bạn không thể truy cập hạt trong OnParticleTrigger().
- **Ignore**: Bỏ qua hạt (Ignores). Bạn không thể truy cập hạt trong OnParticleTrigger().

**API**
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
// particles
List<ParticleSystem.Particle> enter = new List<ParticleSystem.Particle>();
List exit = new List();
List inside = new List();
void OnParticleTrigger()
{
    // get the particles which matched the trigger conditions this frame
    int numEnter = ps.GetTriggerParticles(ParticleSystemTriggerEventType.Enter, enter);
    int numExit = ps.GetTriggerParticles(ParticleSystemTriggerEventType.Exit, exit);
    int numInside = ps.GetTriggerParticles(ParticleSystemTriggerEventType.Inside, inside, out var insideData);
    // Doing something with enter and exit List...
    // re-assign the modified particles back into the particle system
    ps.SetTriggerParticles(ParticleSystemTriggerEventType.Enter, enter);
    ps.SetTriggerParticles(ParticleSystemTriggerEventType.Exit, exit);
    // insideData
    if (insideData.GetColliderCount(index) == 1) ...
    if (insideData.GetCollider(index, 0) == ps.trigger.GetCollider(0)) ...
}
```

**Properties**
- **Inside**: Chỉ định hành động thực hiện đối với các hạt trong **mọi Frame** mà chúng có **trong Collider**.
- **Outside**: Chỉ định hành động thực hiện đối với các hạt ở **mọi Frame** mà chúng ở bên **ngoài Collider**.
- **Enter**: Chỉ định hành động thực hiện đối với các hạt **trong Frame** mà chúng **đi vào Collider**.
- **Exit**: Chỉ định hành động thực hiện đối với các hạt **trong Frame** mà chúng **thoát ra khỏi Collider**.
- **Collider Query Mode**: Chỉ định phương pháp sử dụng để lấy thông tin về Collider mà các hạt tương tác. Điều này làm **tăng cường độ sử dụng tài nguyên**, vì vậy, nếu bạn không cần thêm bất kỳ thông tin collision nào thì **hãy TẮT thuộc tính này**.
- **Radius Scale**: Giới hạn Collider của hạt.
- **Visualize Bounds**: Bật *hiển thị giới hạn Collider của từng hạt* trong **SceneView**.

### Collision module

Mô-đun này kiểm soát cách các hạt va chạm với GameObjects trong Scence.

Khi các vật thể khác bao quanh Hệ thống hạt, hiệu ứng thường thuyết phục hơn khi các hạt tương tác với các vật thể đó. Ví dụ, nước hoặc mảnh vụn phải bị cản trở bởi một bức tường vững chắc thay vì chỉ đi qua nó. Với *Collision module*, các hạt có thể va chạm với các đối tượng trong Scence.

#### Chế độ Planes và World

Hệ thống hạt có thể được thiết lập để các hạt của nó va chạm với bất kỳ Collider nào trong Scence bằng cách chọn chế độ **World**. Colliders cũng có thể bị vô hiệu hóa tùy theo **layer** mà chúng đang thuộc về bằng cách sử dụng **Collides With property**.

Chế độ **Planes** cho phép bạn thêm một tập hợp (List) các mặt phẳng (Plane) vào Scence mà không cần có Collider. Tùy chọn này hữu ích cho các tầng (floors), tường (walls) đơn giản và các vật thể tương tự, đồng thời có chi phí sử dụng bộ xử lý thấp hơn chế độ **World**.

Trong chế độ **Planes**, danh sách các Transforms (thường là GameObject trống) cần được thêm thông qua Inspector. Các mặt phẳng (Plane) *mở rộng vô tận trong các mặt phẳng XZ* **cục bộ (local) của vật thể**, với *trục Y dương biểu thị các vectơ pháp tuyến của các mặt phẳng*. **Để hỗ trợ quá trình development**, các planes sẽ được *hiển thị dưới dạng Gizmos* trong Scene bất kể các đối tượng có Lưới hiển thị hay không. *Gizmos có thể được hiển thị dưới dạng Mesh hoặc mặt phẳng đặc (solid plane) và cũng có thể được thu nhỏ*. Tuy nhiên, việc chia tỷ lệ chỉ áp dụng cho trực quan hóa - bản thân **các mặt phẳng va chạm kéo dài vô tận** trong Scence.

Khi kích hoạt va chạm, kích thước của một hạt đôi khi là một vấn đề vì đồ họa của nó có thể bị cắt bớt khi nó tiếp xúc với một bề mặt. Điều này có thể dẫn đến việc một hạt dường như “chìm” một phần vào bề mặt trước khi dừng lại hoặc nảy lên. **Radius Scale property** giải quyết vấn đề này bằng cách xác định bán kính hình tròn gần đúng cho các hạt, dưới dạng phần trăm kích thước thực tế của nó. Thông tin kích thước này được sử dụng để ngăn chặn việc cắt bớt và tránh hiệu ứng chìm.

#### Dampen, Bounce và Collision Quality

Thuộc tính **Dampen** và **Bounce** rất hữu ích khi các hạt đại diện cho vật thể rắn. Ví dụ, sỏi sẽ có xu hướng **nảy ra** khỏi bề mặt cứng khi ném nhưng các hạt của quả cầu tuyết có thể **mất tốc độ** khi va chạm.

Thuộc tính **Lifetime Loss** và **Min Kill Speed** có thể giúp giảm tác động của các hạt còn sót lại sau một vụ va chạm. Ví dụ, một quả cầu lửa có thể tồn tại trong vài giây khi bay trong không khí nhưng sau khi va chạm, các hạt lửa riêng biệt sẽ tiêu tan nhanh chóng.

Bằng cách phát hiện va chạm (**Send Collision Messages** được bật), bạn có thể sử dụng các hạt làm vật thể kích hoạt trong trò chơi, chẳng hạn như đệm gió, phép thuật và power-ups.

Thuộc tính **Collision Quality** trong chế độ **World** có thể đặt thành **High**, **Medium** hoặc **Low**. Khi là **Medium** (Static Colliders) hoặc **Low** (Static Colliders), các va chạm sẽ sử dụng lưới các điểm ảnh ba chiều (value on a 3D grid of voxels) để lưu vào bộ nhớ đệm các collisions trước đó để sử dụng lại nhanh chóng trong các khung hình sau.
**Bộ nhớ đệm** này bao gồm một mặt phẳng trong mỗi voxel, trong đó mặt phẳng biểu thị bề mặt va chạm tại vị trí đó. Trên mỗi khung hình, Unity kiểm tra bộ đệm để tìm mặt phẳng ở vị trí của hạt và nếu có, Unity sẽ sử dụng nó để phát hiện va chạm. Nếu không, nó sẽ hỏi hệ thống vật lý. Nếu collision được trả về, nó sẽ được thêm vào bộ đệm để truy vấn nhanh trên các khung tiếp theo.

**Lưu ý rằng** cài đặt **Medium** và **Low** chỉ phù hợp với máy va chạm tĩnh không bao giờ chuyển động (Static Colliders). **Đây chỉ là giá trị gần đúng** nên có thể xảy ra một số va chạm bị bỏ sót. Bạn có thể giảm giá trị Kích thước Voxel để trợ giúp việc này; tuy nhiên, làm như vậy sẽ sử dụng thêm bộ nhớ và kém hiệu quả hơn.
**Sự khác biệt duy nhất** giữa **Medium** và **Low** là số lần hệ thống được phép truy vấn hệ thống vật lý bao nhiêu lần trên mỗi khung hình. **Low** tạo ra ít truy vấn trên mỗi khung hình hơn **Medium**. Khi vượt quá ngân sách (budget) cho mỗi khung hình, chỉ bộ đệm được sử dụng cho mọi phần còn lại. Điều này có thể dẫn đến sự gia tăng số lần va chạm bị bỏ lỡ cho đến khi bộ đệm được điền đầy đủ hơn.

**Properties**

Cần lựa chọn kiểu va chạm (**Type**) là **Planes** hay **World** (Physics World). Nếu là **Planes** cần kéo các **Collider** (GameObject EMPTY) vào **List Collision Transforms**. Nếu là **World** cần chọn **Mode** là **2D** hay **3D** (Physics).

**Planes module properties (RIÊNG)**<br>
![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysCollisionInsp.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
- **Planes**: Một danh sách các Transforms (GameObject EMPTY) có thể mở rộng (phục vụ Development) để xác định các mặt phẳng va chạm.
- **Visualization**: Chọn xem mặt phẳng va chạm Gizmos sẽ được hiển thị trong chế độ xem Cảnh như lưới khung dây hoặc mặt phẳng rắn.
- **Scale Plane**: Kích thước của các mặt phẳng được sử dụng để trực quan hóa (mục đích development).

**World module properties (RIÊNG)**<br>
![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysCollisionInsp2.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
- **Collision Mode**: 3D or 2D
- **Collision Quality**: Điều này ảnh hưởng đến số lượng hạt có thể đi qua máy va chạm. Ở mức chất lượng thấp (Low), các hạt đôi khi có thể đi qua máy va chạm nhưng lại tốn ít tài nguyên hơn để tính toán.
    - **High**: Khi Chất lượng va chạm được đặt thành Cao, các va chạm luôn sử dụng hệ thống vật lý để phát hiện kết quả va chạm. Đây là tùy chọn tốn nhiều tài nguyên nhất nhưng cũng chính xác nhất.
    - **Medium (Static Colliders)**: các va chạm sẽ sử dụng một mạng lưới các điểm ảnh ba chiều để lưu vào bộ nhớ đệm các va chạm trước đó, để sử dụng lại nhanh hơn trong các khung hình sau này.
    - **Low (Static Colliders)**: Giống với **Medium (Static Colliders)**, sự khác biệt là số lần hệ thống được phép truy vấn hệ thống vật lý bao nhiêu lần trên mỗi khung hình. **Low** tạo ra ít truy vấn hơn.
- **Collides With**: Các hạt sẽ chỉ va chạm với các đối tượng trên các **layers đã chọn**.
- **Max Collision Shapes**: Có bao nhiêu hình dạng va chạm có thể được xem xét cho các va chạm hạt. Các hình dạng dư thừa sẽ bị bỏ qua và **Terrain được ưu tiên**.
- **Enable Dynamic Colliders**: *Dynamic colliders là bất cứ collider nào* **không phải** *là* **Kinematic**. Bỏ chọn tùy chọn này, các hạt chỉ phản ứng với **static colliders**.
- **Voxel Size**: Cài đặt này kiểm soát kích thước lưới (grid size). Giá trị nhỏ hơn mang lại độ chính xác cao hơn nhưng tốn nhiều bộ nhớ hơn và kém hiệu quả hơn. *Lưu ý tùy chọn này chỉ có sẵn với Collision Quality là Medium or Low*.
- **Collider Force**: Tác dụng một lực lên **Physics Colliders** sau một vụ va chạm Hạt. Điều này rất hữu ích cho việc **đẩy Collider bằng các hạt**.
- **Multiply by Collision Angle**: (mức độ va chạm trực diện) Khi tác dụng lực lên Collider, hãy chia độ lớn của lực dựa trên **góc va chạm** giữa hạt và Collider. Các góc lướt/ngang (Grazing) sẽ tạo ra ít lực hơn so với va chạm trực diện.
- **Multiply by Particle Speed**: Khi tác dụng lực lên Collider, hãy chia độ lớn của lực dựa trên tốc độ của hạt. Các hạt chuyển động nhanh sẽ tạo ra lực lớn hơn các hạt chuyển động chậm hơn.
- **Multiply by Particle Size**: Khi tác dụng lực lên Collider, hãy chia độ lớn của lực dựa trên kích thước của hạt. Những hạt lớn hơn sẽ tạo ra lực lớn hơn những hạt nhỏ hơn.

#### Planes + World properties (CHUNG)
- **Dampen**: (chung) Phần tốc độ của hạt bị mất đi sau một vụ va chạm.
- **Bounce**: (chung) Một phần tốc độ của hạt bật lại khỏi bề mặt sau một vụ va chạm.
- **Lifetime Loss**: (chung) Một phần trong tổng thời gian tồn tại của một hạt mà nó bị mất nếu va chạm.
- **Min Kill Speed**: (chung) Các hạt di chuyển dưới tốc độ này sau khi va chạm sẽ bị loại khỏi hệ thống.
- **Max Kill Speed**: (chung) Các hạt di chuyển trên tốc độ này sau khi va chạm sẽ bị loại khỏi hệ thống.
- **Radius Scale**: (chung) Cho phép bạn điều chỉnh bán kính của các quả cầu va chạm hạt để nó khớp chặt hơn với các cạnh trực quan của đồ họa hạt.
- **Send Collision Messages**: (chung) Nếu được bật, các va chạm hạt có thể được phát hiện từ tập lệnh bởi hàm OnParticleCollision.
- **Visualize Bounds**: (chung) Hiển thị giới hạn va chạm của từng hạt dưới dạng hình khung dây trong chế độ SceneView.

### Texture Sheet Animation module

![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysTexSheetAnimModule-0.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
Đồ họa của một hạt không nhất thiết phải là một hình ảnh tĩnh. Mô-đun này cho phép bạn coi Kết cấu (Texture) như một lưới gồm các hình ảnh phụ riêng biệt có thể được phát lại dưới dạng khung hình động. Điều này đạt được bằng cách tạo ra các kết cấu lật (flipbook textures), trông như thế này:<br>![TEXT](https://docs.unity3d.com/2021.3/Documentation/StaticFiles/ScriptRefImages/ParticleFlipbook.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

**Particle animations** thường đơn giản hơn và ít chi tiết hơn **character animations**. Trong các hệ thống mà các hạt được nhìn thấy riêng lẻ, hình ảnh động có thể được sử dụng để truyền tải hành động hoặc chuyển động. Ví dụ, ngọn lửa có thể nhấp nháy và côn trùng trong đàn có thể rung lên hoặc rùng mình như thể đang vỗ cánh. Trong trường hợp các hạt tạo thành một thực thể duy nhất, liên tục như đám mây, các **animated particles** có thể giúp tăng thêm ấn tượng về năng lượng và chuyển động.

Sử dụng thuộc tính **Row Mode** để phá vỡ tính đều đặn dễ thấy trong Hệ thống hạt (ví dụ: một nhóm GameObject lặp đi lặp lại một hoạt ảnh nhấp nháy giống hệt nhau). Để tạo các hạt có đồ họa ngẫu nhiên, hãy sử dụng thuộc tính này với một khung hình trên mỗi hàng. Điều này rất hữu ích để phá vỡ tính quy luật trong một hệ thống duy nhất, chẳng hạn như đám mây hoặc để tạo ra các loại mảnh vụn khác nhau. Ví dụ: một khẩu súng có thể bắn ra một cụm đinh, bu lông và các loại đạn khác hoặc hiệu ứng va chạm ô tô có thể phát ra lò xo, sơn ô tô, ốc vít và các mảnh kim loại khác.

**UV flipping** là một cách tuyệt vời để tăng thêm sự đa dạng về hình ảnh cho các hiệu ứng của bạn mà không cần phải tạo thêm họa tiết.

Chế độ **Sprites** cho phép bạn xác định danh sách các Sprites sẽ được hiển thị cho từng hạt, thay vì sử dụng lưới khung thông thường trên một texture. Sử dụng chế độ này cho phép bạn tận dụng được nhiều tính năng của Sprites, chẳng hạn như **Sprite Packer**, các trục tùy chỉnh (**custom pivot**) và các kích thước khác nhau trên mỗi khung Sprite. **Sprite Packer** có thể giúp bạn **chia sẻ Material** giữa các Hệ thống hạt khác nhau, bằng cách điều chỉnh textures, từ đó có thể cải thiện hiệu suất thông qua **Dynamic Batching**. Có một số hạn chế cần lưu ý với chế độ này. Quan trọng nhất, tất cả các Sprite được gắn vào Hệ thống hạt **phải có cùng texture**. Điều này có thể đạt được bằng cách sử dụng **Multiple Mode Sprite** hoặc bằng cách sử dụng **Sprite Packer**. Nếu sử dụng các điểm xoay tùy chỉnh (**custom pivot**) cho từng Sprite, xin lưu ý rằng bạn không thể hòa trộn (blend) giữa các Frames của chúng, vì hình dạng sẽ khác nhau giữa mỗi Frame. Chỉ các Sprite đơn giản được hỗ trợ chứ không phải "**9 slice**". Ngoài ra, hãy lưu ý rằng các **Mesh particles** không hỗ trợ các **custom pivots** hoặc các kích cỡ Sprite khác nhau.

**API**
```csharp
ParticleSystem ps = GetComponent<ParticleSystem>();
ParticleSystem.TextureSheetAnimationModule ts = ps.textureSheetAnimation;
// Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.
ts.enabled = true;
ts.numTilesX = 2;
ts.rowMode = ParticleSystemAnimationRowMode.Random;
```

#### Grid mode properties
![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysTexSheetAnimModule-0.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
- **Tiles**: Số ô mà Họa tiết được chia thành theo hướng X (ngang) và Y (dọc).
- **Animation**: Chế độ Hoạt ảnh (Animation) có thể được đặt thành **Whole Sheet** hoặc **Single Row** (nghĩa là mỗi hàng của sheet đại diện cho một chuỗi Hoạt ảnh (**Animation sequence**) riêng biệt).
- **Time Mode**: Chọn cách tạo khung mẫu (samples frames).
    - **Lifetime**: Các khung mẫu sử dụng **Animation Curve** trong suốt thời gian tồn tại của hạt.
    - **Speed**: Khung mẫu dựa trên tốc độ của hạt. Một **speed range** được chỉ định cho tốc độ tối thiểu và tối đa cho việc lựa chọn khung (**frame selection**).
    - **FPS**: Các khung hình mẫu dựa trên giá trị khung hình trên giây được chỉ định.
- **Row Mode**: Chọn một hàng từ **Texture sheet** để tạo hoạt ảnh. Thuộc tính này chỉ khả dụng khi chế độ Hoạt ảnh được đặt thành **Single Row**.
    - **Custom**: Sử dụng một hàng cụ thể của bảng Kết cấu cho hoạt ảnh.
    - **Random**: Chọn ngẫu nhiên một hàng cho mỗi hạt khi tạo hoạt ảnh.
    - **Mesh Index**: Chọn một hàng dựa trên **Mesh index** được gán cho một hạt. Điều này hữu ích khi bạn muốn đảm bảo rằng một hạt sử dụng một Mesh cụ thể cũng như là sử dụng cùng một Texture.
- **Random Row**: Chọn ngẫu nhiên một hàng từ **Texture sheet** để tạo hoạt ảnh. Tùy chọn này chỉ khả dụng khi Animation Mode là **Single Row**.
- **Row**: Chọn một hàng cụ thể từ **Texture sheet** để tạo hoạt ảnh, Tùy chọn này chỉ khả dụng khi **Single Row** được chọn và **Random Row** bị tắt.
- **Frame over Time**: Một curve chỉ định cách khung hình hoạt ảnh (**frame of animation**) tăng lên theo thời gian.
- **Start Frame**: Cho phép bạn chỉ định sẽ bắt đầu từ frame nào (hữu ích cho việc phân chia ngẫu nhiên hoạt ảnh trên mỗi hạt).
- **Cycles**: Số lần chuỗi hoạt ảnh lặp lại trong suốt vòng đời của hạt.
- **Affected UV Channels**: Cho phép bạn chỉ định chính xác luồng UV nào bị ảnh hưởng bởi Hệ thống hạt.

#### Sprite mode properties
![TEXT](https://docs.unity3d.com/2021.3/Documentation/uploads/Main/PartSysTexSheetAnimModule-1.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
- **Frame over Time**: Một đường cong chỉ định cách khung hình hoạt ảnh tăng lên theo thời gian.
- **Start Frame**: Cho phép bạn chỉ định khung nào mà hoạt ảnh hạt sẽ bắt đầu (hữu ích cho việc phân chia ngẫu nhiên hoạt ảnh trên mỗi hạt).
- **Cycles**: Số lần chuỗi hoạt ảnh lặp lại trong suốt vòng đời của hạt.
- **Enabled UV Channels**: Cho phép bạn chỉ định chính xác luồng UV nào bị ảnh hưởng bởi Hệ thống hạt.

### Các Modules khác...

Tham khảo thêm ở đây: [https://docs.unity3d.com/2021.3/Documentation/Manual/ParticleSystemModules.html](https://docs.unity3d.com/2021.3/Documentation/Manual/ParticleSystemModules.html){:.hvr-forward rel="nofollow" target="_blank"}