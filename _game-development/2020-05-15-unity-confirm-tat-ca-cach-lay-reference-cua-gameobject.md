---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Tất cả các cách lấy Reference của một GameObject"
description: "Tất cả các cách lấy Reference của một GameObject"

### HUMAN
header: "Tất cả các cách lấy Reference của một GameObject"
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
collection: Confirm # this for AMP related post
### category: dùng để group collection
category: Confirm

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

### Tất cả các cách lấy Reference của một GameObject

Để lấy reference của một GameObject, phần tử, thành phần... trong game, bạn có thể sử dụng một số cách sau đây:

•  Sử dụng phương thức **GameObject.Find** hoặc **GameObject.FindWithTag** để tìm kiếm một GameObject theo tên hoặc tag. Ví dụ:<br>
```csharp
// Tìm kiếm một GameObject theo tên
GameObject someGameObject = GameObject.Find("GameObjectName");
// Tìm kiếm một GameObject theo tag
GameObject someGameObject = GameObject.FindWithTag("SomeTagName");
```

•  Sử dụng phương thức **GetComponent** hoặc **GetComponentInChildren** để lấy một thành phần của một GameObjec. Lưu ý là thành phần này phải là **Component** hoặc **MonoBehaviour**. Ví dụ:<br>
```csharp
// Lấy một thành phần MeshRenderer của một GameObject
MeshRenderer meshRenderer = someGameObject.GetComponent<MeshRenderer>();
// Lấy một thành phần Rigidbody của một GameObject hoặc con của nó
Rigidbody rigidbody = someGameObject.GetComponentInChildren<Rigidbody>();
```

•  Sử dụng phương thức **FindObjectOfType** hoặc **FindObjectsOfType** của *UnityEngine.Object* để tìm kiếm một hoặc nhiều GameObject có chứa một thành phần cụ thể. Ví dụ:<br>
```csharp
// Tìm kiếm một GameObject có chứa thành phần AudioSource
AudioSource audioSource = FindObjectOfType<AudioSource>();
// Tìm kiếm tất cả các GameObject có chứa thành phần Light
Light[] lights = FindObjectsOfType<Light>();
```

•  Sử dụng phương thức **Physics.Raycast** hoặc **Physics.OverlapSphere** để tìm kiếm các GameObject có va chạm với một tia hoặc một hình cầu. Ví dụ:<br>
```csharp
// 1. Tạo một tia từ vị trí và hướng của camera
Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
// 2. Tạo một biến để lưu kết quả va chạm
RaycastHit hit;
// 3. Kiểm tra xem tia có va chạm với một GameObject nào không
if (Physics.Raycast(ray, out hit))
{
	// 4. Lấy GameObject bị va chạm
	GameObject hitObject = hit.collider.gameObject;
}

// 1. Tạo một hình cầu có bán kính 5 tại vị trí (0, 0, 0)
Vector3 center = Vector3.zero;
float radius = 5f;
// 2. Tìm kiếm tất cả các GameObject có va chạm với hình cầu
Collider[] colliders = Physics.OverlapSphere(center, radius);
// 3. Duyệt qua mảng các Collider
foreach (Collider collider in colliders)
{
	// 4. Lấy GameObject bị va chạm
	GameObject hitObject = collider.gameObject;
}
```

•  Sử dụng phương thức **transform.Find** hoặc **transform.GetChild** để tìm kiếm một GameObject con của một GameObject cha. Ví dụ:<br>
```csharp
// Tìm kiếm một GameObject con theo tên
Transform childTransform = someGameObject.transform.Find("ChildName");
// Tìm kiếm một GameObject con theo chỉ số
Transform childTransform = someGameObject.transform.GetChild(0);
```

•  Sử dụng phương thức **transform.parent** hoặc **transform.root** để lấy một GameObject cha hoặc gốc của một GameObject con. Ví dụ:<br>
```csharp
// Lấy GameObject cha của một GameObject con
Transform parentTransform = someGameObject.transform.parent;
// Lấy GameObject gốc của một GameObject con
Transform rootTransform = someGameObject.transform.root;
```

•  Khai báo một **biến public** hoặc **[SerializeField]** để lấy reference của một GameObject, phần tử, thành phần... trong **Inspector**. Ví dụ:<br>
```csharp
// Khai báo một biến public để lấy reference của một GameObject
public GameObject someGameObject;
// Khai báo một biến [SerializeField] để lấy reference của một thành phần
[SerializeField] private Rigidbody someRigidbody;
```