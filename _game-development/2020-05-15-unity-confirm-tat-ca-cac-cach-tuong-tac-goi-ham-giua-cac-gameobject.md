---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Tất cả các cách tương tác, gọi hàm, truyền nhận dữ liệu giữa các GameObject"
description: "Tất cả các cách tương tác, gọi hàm, truyền nhận dữ liệu giữa các GameObject"

### HUMAN
header: "Tất cả các cách tương tác, gọi hàm, truyền nhận dữ liệu giữa các GameObject"
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

### Gọi một method của một GameObject khác từ GameObject hiện tại

•  Sử dụng phương thức **GetComponent** hoặc **GetComponentInChildren** để lấy một thành phần của một GameObject khác, và sau đó gọi method của thành phần đó. Ví dụ:<br>
```csharp
// Lấy một thành phần ScriptA của một GameObject khác
ScriptA scriptA = otherGameObject.GetComponent<ScriptA>();
// Gọi một method của ScriptA
scriptA.SomeMethod();
```

•  Sử dụng phương thức **SendMessage** hoặc **BroadcastMessage** để gửi một message đến một GameObject khác, và sau đó xử lý message đó trong method của GameObject đó. Ví dụ:<br>
```csharp
// Gửi một message đến một GameObject khác
otherGameObject.SendMessage("SomeMessage");
// Xử lý message đó trong method của GameObject đó
void SomeMessage()
{
	// Làm gì đó
}
```

•  Sử dụng phương thức **Invoke** hoặc **StartCoroutine** để gọi một method của một GameObject khác với một độ trễ hoặc một cách liên tục. Ví dụ:<br>
```csharp
// Gọi một method của một GameObject khác với một độ trễ 5 giây
otherGameObject.Invoke("SomeMethod", 5f);
// Gọi một method của một GameObject khác một cách liên tục
otherGameObject.StartCoroutine("SomeMethod");
```

•  Sử dụng phương thức **AddListener** để đăng ký một method của một GameObject hiện tại với một event của một GameObject khác, và sau đó gọi method đó khi event được kích hoạt. Ví dụ:<br>
```csharp
// Đăng ký một method của một GameObject hiện tại với một event của một GameObject khác
otherGameObject.someEvent.AddListener(SomeMethod);
// Gọi method đó khi event được kích hoạt
otherGameObject.someEvent.Invoke();
```

### Các cách truyền và nhận dữ liệu từ GameObject này sang GameObject khác.

•  Sử dụng **biến public** hoặc **[SerializeField]** để lưu trữ dữ liệu trong một GameObject, và sau đó gán reference của GameObject đó cho một GameObject khác trong **Inspector**. Ví dụ:<br>
```csharp
// Khai báo một biến public để lưu trữ dữ liệu kiểu int
public int someData;
// Khai báo một biến [SerializeField] để lưu trữ reference của một GameObject khác
[SerializeField] private GameObject otherGameObject;
```

•  Sử dụng phương thức **GetComponent** hoặc **GetComponentInChildren** để lấy một thành phần của một GameObject khác, và sau đó truy cập vào dữ liệu của thành phần đó. Ví dụ:<br>
```csharp
// Lấy một thành phần ScriptA của một GameObject khác
ScriptA scriptA = otherGameObject.GetComponent<ScriptA>();
// Truy cập vào dữ liệu của ScriptA
int someData = scriptA.someData;
```

•  Sử dụng phương thức **SendMessage** hoặc **BroadcastMessage** để gửi một message đến một GameObject khác, và sau đó xử lý message đó trong method của GameObject đó. Ví dụ:<br>
```csharp
// Gửi một message đến một GameObject khác, kèm theo một dữ liệu kiểu int
otherGameObject.SendMessage("SomeMessage", 10);
// Xử lý message đó trong method của GameObject đó, và lấy dữ liệu kiểu int
void SomeMessage(int someData)
{
	// Làm gì đó với someData
}
```

•  Sử dụng phương thức **Invoke** hoặc **StartCoroutine** để gọi một method của một GameObject khác, và sau đó truyền dữ liệu vào method đó. Ví dụ:<br>
```csharp
// Gọi một method của một GameObject khác, và truyền vào một dữ liệu kiểu int
otherGameObject.Invoke("SomeMethod", 10);
// Định nghĩa method đó, và nhận dữ liệu kiểu int
void SomeMethod(int someData)
{
	// Làm gì đó với someData
}
```

•  Sử dụng phương thức **AddListener** để đăng ký một method của một GameObject hiện tại với một event của một GameObject khác, và sau đó truyền dữ liệu vào event đó. Ví dụ:<br>
```csharp
// Đăng ký một method của một GameObject hiện tại với một event của một GameObject khác
otherGameObject.someEvent.AddListener(SomeMethod);
// Gọi event đó, và truyền vào một dữ liệu kiểu int
otherGameObject.someEvent.Invoke(10);
// Định nghĩa method đó, và nhận dữ liệu kiểu int
void SomeMethod(int someData)
{
	// Làm gì đó với someData
}
```

Ví dụ:<br>
```csharp
// SendMessage, BroadcastMessage có ở cả gameObject và MonoBehaviour, nhưng Invoke, StartCoroutine thì chỉ có trên MonoBehaviour
top1.SendMessage("Log"); // hoặc objectC.BroadcastMessage("Log"); // BroadcastMessage call tất cả, SendMessage chỉ THIS

top1.SendMessage("LogPrivate"); // call tất cả, kể cả private
top1.SendMessage("SpecialMethod"); // log lỗi nếu không tồn tại methodName
```