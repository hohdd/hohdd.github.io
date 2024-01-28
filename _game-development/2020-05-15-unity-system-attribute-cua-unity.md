---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: System.Attribute của UnityEngine
description: System.Attribute của UnityEngine

### HUMAN
header: System.Attribute của UnityEngine
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

## System.Attribute của UnityEngine

System.Attribute là một lớp cơ sở để tạo ra các thuộc tính tùy biến cho các **class, property hoặc function** trong C#. Các thuộc tính này **có thể thay đổi hành vi hoặc hiển thị** của các thành phần trong Unity [(hướng dẫn từ forum unity)](https://forum.unity.com/threads/tutorial-character-stats-aka-attributes-system.504095/){:.hvr-forward rel="nofollow" target="_blank"}. Đây là một số ví dụ về các System.Attribute của UnityEngine:

•  **[CreateAssetMenu]**: Thuộc tính này dùng để thêm menu context ở Asset, giúp tạo các ScriptableObject Asset. Ví dụ:<br>
```csharp
[CreateAssetMenu(menuName = "DongHD/Events/Game Event")]
public class GameEvent : ScriptableObject { ... }
```

•  **[AddComponentMenu]**: Thuộc tính này dùng để thêm một class kế thừa từ MonoBehaviour vào menu Components của trình soạn thảo Unity. Thuộc tính này nhận vào một chuỗi là tên của menu và tùy chọn một số nguyên là thứ tự của menu. Ví dụ:<br>
```csharp
[AddComponentMenu("Custom/MyScript", 1)]
public class MyScript : MonoBehaviour
{
    // Your code here
}
```

•  **[RequireComponent]**: Thuộc tính này dùng để chỉ rõ sự PHỤ THUỘC của class MonoBehaviour hiện tại vào một Component khác. Ví dụ:<br>
```csharp
[RequireComponent(typeof(Camera))]
[AddComponentMenu("Custom/MyScript", 1)]
public class MyScript : MonoBehaviour { ... }
```

•  **[ContextMenu]**: Thuộc tính này dùng để thêm một function vào menu ngữ cảnh của trình soạn thảo Unity. Thuộc tính này nhận vào một chuỗi là tên của menu. Function phải không có tham số và không trả về giá trị. Ví dụ:<br>
```csharp
public class MyScript : MonoBehaviour
{
    [ContextMenu("Reset Position")]
    void ResetPosition()
    {
        transform.position = Vector3.zero;
    }
}
```

•  **[ExecuteInEditMode]**: Thuộc tính này dùng để cho phép một class kế thừa từ MonoBehaviour chạy trong chế độ soạn thảo, không cần phải chạy trò chơi. Thuộc tính này không có tham số. Ví dụ:<br>
```csharp
[ExecuteInEditMode]
public class MyScript : MonoBehaviour
{
    void Update()
    {
        Debug.Log("This runs in edit mode");
    }
}
```

•  **[HideInInspector]**: Thuộc tính này dùng để ẩn một biến công khai khỏi Inspector, ngay cả khi nó là public. Thuộc tính này không có tham số. Ví dụ:<br>
```csharp
public class MyScript : MonoBehaviour
{
    [HideInInspector]
    public float speed;
}
```

•  **[SerializeField]**: Thuộc tính này dùng để cho phép một biến riêng tư hiển thị trong Inspector, để có thể chỉnh sửa giá trị của nó. Thuộc tính này không có tham số. Ví dụ:<br>
```csharp
public class MyScript : MonoBehaviour
{
    [SerializeField]
    private float health;
}
```

•  [Tooltip("...")]: Đặt một thuộc tính Tooltip cho biến, hiển thị một thông báo khi rê chuột lên biến đó trong trình soạn thảo Unity.<br>
```csharp
[Tooltip("How quickly the kart reaches top speed.")]
public float Acceleration;
```

•  [Min(0.001f), Tooltip("...")]: Đặt hai thuộc tính cho biến tiếp theo, là **Min** và **Tooltip**. Thuộc tính Min dùng để giới hạn giá trị nhỏ nhất của biến là 0.001f, để tránh trường hợp biến có giá trị âm hoặc bằng 0. Thuộc tính Tooltip dùng để hiển thị một thông báo khi rê chuột lên biến đó trong trình soạn thảo Unity.<br>
```csharp
[Min(0.001f), Tooltip("Top speed attainable when moving backward.")]
public float ReverseSpeed;
```

•  [Range(0.2f, 1)]: Đặt một thuộc tính **Range** cho biến tiếp theo, giới hạn giá trị của biến trong khoảng từ 0.2f đến 1. Thuộc tính này cũng cho phép điều chỉnh giá trị của biến bằng một thanh trượt trong trình soạn thảo Unity.<br>
```csharp
[Range(0.0f, 1.0f)]
[Tooltip("The amount of side-to-side friction.")]
public float Grip;
```

•  **[Header("Movement Settings")]**: Đặt một **tiêu đề cho nhóm các biến tiếp theo**, hiển thị một dòng chữ "Movement Settings" trên Inspector, để tạo ra sự phân cách và dễ nhìn hơn.