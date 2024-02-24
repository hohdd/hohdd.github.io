---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Unity - Microgame - KartingMicrogame"
description: "Unity - Microgame - KartingMicrogame"

### HUMAN
header: "Unity - Microgame - KartingMicrogame"
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
collection: Uncategorized # this for AMP related post
### category: dùng để group collection
category: Uncategorized

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Giải thích

### namespace

•  UnityEngine: Chứa các lớp và phương thức cơ bản của Unity, như GameObject, Transform, Mesh, Material, và nhiều hơn nữa.

•  UnityEngine.**ProBuilder**: Chứa các lớp và phương thức của ProBuilder, một công cụ để tạo và chỉnh sửa các hình học trong Unity, như ProBuilderMesh, Face, Vertex, và nhiều hơn nữa.

•  UnityEngine.**Rendering**: Chứa các lớp và phương thức liên quan đến quá trình hiển thị đồ họa trong Unity, như ShadowCastingMode, MotionVectorGenerationMode, IndexFormat, và nhiều hơn nữa.

•  using UnityEngine.**SceneManagement**;: Sử dụng không gian tên UnityEngine.SceneManagement, chứa các lớp và phương thức liên quan đến quản lý các cảnh trong Unity.

### Quản lý việc chọn các đối tượng giao diện người dùng trên menu, bằng cách sử dụng con trỏ chuột hoặc bàn phím.

•  public **Selectable** defaultSelection;: Khai báo một trường công khai có kiểu Selectable. Trường này có thể được thiết lập trong Editor (Inspector) để chỉ định đối tượng mặc định được chọn khi mở menu.

•  **Cursor.lockState** = CursorLockMode.None;: Đặt trạng thái khóa của con trỏ chuột thành None, có nghĩa là con trỏ chuột không bị giới hạn trong một khu vực.

•  **Cursor.visible** = true;: Đặt thuộc tính visible của con trỏ chuột thành true, có nghĩa là con trỏ chuột sẽ hiển thị trên màn hình.

•  **EventSystem.current**.SetSelectedGameObject(null);: Đặt đối tượng được chọn hiện tại của hệ thống sự kiện thành null, có nghĩa là không có đối tượng nào được chọn. Hệ thống sự kiện là một thành phần quản lý các sự kiện giao diện người dùng.

•  **SceneManager.LoadSceneAsync**(SceneName);: Gọi phương thức LoadSceneAsync của lớp SceneManager, truyền vào trường SceneName làm tham số. Phương thức này sẽ nạp cảnh có tên được chỉ định một cách bất đồng bộ, có nghĩa là không làm đứng trò chơi trong khi nạp cảnh.

### Hệ thống lái

•  steeringSmoother = **Mathf.Lerp**(steeringSmoother, Kart.Input.TurnInput, Time.deltaTime * 5f);: Phương thức này sẽ trả về một giá trị nằm giữa hai giá trị đầu tiên, theo tỷ lệ của tham số thứ ba.

•  Phương thức này có thể dùng để tạo ra hiệu ứng chuyển màu mượt mà giữa hai màu<br>
```csharp
public static Color Lerp(Color a, Color b, float t)
{
    t = Mathf.Clamp01(t);
    return new Color(
        a.r + (b.r - a.r) * t,
        a.g + (b.g - a.g) * t,
        a.b + (b.b - a.b) * t,
        a.a + (b.a - a.a) * t
    );
}
```

•  Đoạn mã này có thể dùng để tạo ra hiệu ứng chuyển động mượt mà giữa hai vị trí<br>
```csharp
[MethodImpl(MethodImplOptionsEx.AggressiveInlining)] // báo cho trình biên dịch rằng nên thực hiện inline cho phương thức này. Inline là một kỹ thuật tối ưu hóa mã, giúp giảm thời gian thực thi bằng cách thay thế lời gọi phương thức bằng nội dung của phương thức
public static Vector3 Lerp(Vector3 a, Vector3 b, float t)
{
    t = Mathf.Clamp01(t);
    return new Vector3(
        a.x + (b.x - a.x) * t,
        a.y + (b.y - a.y) * t,
        a.z + (b.z - a.z) * t
    );
}
```


## Note

- Tách riêng hệ thống input thành Interface (KartClassic_Player > Script: KeyboardInput):
    + Tạo 1 file "BaseInput.cs": có "struct InputData" () + "interface IInput" + "abstract class **BaseInput** : **MonoBehaviour**, IInput"
    + Tạo class **KeyboardInput** extend **BaseInput** có hàm **override InputData GenerateInput()** trả về value Input của game


## Mod

[Karting Template](https://learn.unity.com/project/karting-template){:.hvr-forward.external rel="nofollow" target="_blank"}