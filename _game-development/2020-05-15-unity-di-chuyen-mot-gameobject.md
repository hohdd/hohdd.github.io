---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Unity - Di chuyển một GameObject
description: Unity - Di chuyển một GameObject

### HUMAN
header: Unity - Di chuyển một GameObject
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
collection: Scripts # this for AMP related post
### category: dùng để group collection
category: Scripts

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Di chuyển một GameObject dựa trên Input từ người dùng

```C#
void Update()
{
    // GetAxis: trả về giá trị tăng dần 0->1, luôn là 1 nếu không thả phím
    // GetAxisRaw: luôn luôn trả về -1 hoặc 1 khi bấm phím, 0 khi thả phím
    xAxis = Input.GetAxis("Horizontal"); // Left-Right hoặc A-D ~ [-,+]
    yAxis = Input.GetAxis("Vertical"); // Up-Down hoặc W-S ~ [+,-]

    #region Di chuyển một GameObject sang TRÁI và PHẢI bằng cách sử dụng phím A và D
    // trục X: bàn tay trái => là hướng ngang (dang 2 tay), [+] đi về bên phải, [-] đi về bên trái

    // Tính toán tốc độ di chuyển
    xSpeed = 5 * Time.deltaTime; // không bao gồm giá trị của Axis (lực bấm / distance tay cầm)

    // Di chuyển GameObject sang trái
    if (xAxis < 0)
    {
        gameObject.transform.Translate(-xSpeed, 0, 0); // người dùng bấm 'A' -> đi về bên trái [-]
    }
    // Di chuyển GameObject sang phải
    if (xAxis > 0)
    {
        gameObject.transform.Translate(xSpeed, 0, 0); // người dùng bấm 'D' -> đi về bên phải [+]
    }
    #endregion

    #region Di chuyển một GameObject LÊN và XUỐNG bằng cách sử dụng phím W và S
    // trục Z: bàn tay trái => là hướng người nhìn, + đi ra về phía trước, - đi về phía sau lưng

    // Tính toán tốc độ di chuyển
    ySpeed = 5 * Time.deltaTime; // không bao gồm giá trị của Axis (lực bấm / distance tay cầm)

    // Di chuyển GameObject lên
    if (yAxis < 0)
    {
        gameObject.transform.Translate(0, 0, -ySpeed); // người dùng bấm 'S' -> đi về phía sau lưng [-]
    }
    // Di chuyển GameObject xuống
    if (yAxis > 0)
    {
        gameObject.transform.Translate(0, 0, ySpeed); // người dùng bấm 'W' -> đi về phía trước [+]
    }
    #endregion

    // trục Y: bàn tay trái => là phương thẳng đứng => không sử dụng

    #region CÁCH DI CHUYỂN PHỤ THUỘC VÀO GIÁ TRỊ Axis (tăng dần từ 0->1 và luôn = 1 nếu giữ phím)
    //gameObject.transform.Translate(xSpeed * xAxis, 0, 0); // <--- đoạn code này sử dụng cả dấu của Axis
    //gameObject.transform.Translate(0, 0, ySpeed * yAxis); // <--- đoạn code này sử dụng cả dấu của Axis
    #endregion

    #region KẾT LUẬN
    // 1. Không nhầm lẫn giữa Horizontal và Vertical của INPUT với X-Y-Z (quy tắc bàn tay trái)
    // 2. Sử dụng cả giá trị của Axis để có cảm giá thật hơn (có quán tính 0->1) và đã kèm dấu (+,-) trong giá trị rồi.
    #endregion
}
```

## Lấy Input

**GetAxis**: Phương thức này trả về giá trị của một trục điều khiển.

**GetAxisRaw**: Phương thức này trả về giá trị thô của một trục điều khiển.

**GetKeyDown**: Phương thức này trả về true nếu một phím được nhấn xuống.

**GetKeyUp**: Phương thức này trả về true nếu một phím được thả ra.

```C#
float xAxis = Input.GetAxis("Horizontal"); // -1<-0->+1
float xAxisRaw = Input.GetAxisRaw("Horizontal"); // -1/0/+1
bool isKeyDown = Input.GetKeyDown(KeyCode.A);
bool isKeyUp = Input.GetKeyUp(KeyCode.A);
```

## Lấy Reference của một GameObject

Biến **gameObject** sẽ luôn trỏ đến GameObject đang được đính kèm Script hiện tại.

Hàm **GetComponent** có thể được sử dụng để lấy reference của một Component cụ thể từ một GameObject. VD: ```Rigidbody rb = GetComponent<Rigidbody>();``` hoặc ```otherGameObject.GetComponent<Rigidbody>();```

Khai báo một biến GameObject public và kéo thả GameObject vào Inspector.

Sử dụng hàm **Find** của GameObject. VD: ```GameObject player = GameObject.Find("MainHeroCharacter");```

Sử dụng hàm **FindWithTag** của GameObject. VD: ```GameObject chef = GameObject.FindWithTag("Chef");```

Sử dụng hàm **FindGameObjectsWithTag** của GameObject. VD: ```GameObject[] stoves = GameObject.FindGameObjectsWithTag("Stove");```

Ngoài ra, bạn cũng có thể sử dụng các phương thức sau để lấy reference của GameObject:
- **player.GetComponentInChildren**: Lấy reference của một thành phần từ một GameObject hoặc một GameObject con của nó.
- **player.GetComponentInParent**: Lấy reference của một thành phần từ một GameObject cha của nó.
- **GameObject.FindObjectOfType**: Tìm kiếm một GameObject có loại cụ thể trong Scene.

## Di chuyển bằng Transform

**Translate**: Phương thức này di chuyển GameObject theo một vector.

**Rotate**: Phương thức này xoay GameObject theo một góc.

```C#
// Di chuyển một GameObject sang bên phải
gameObject.Translate(1, 0, 0);

// Xoay một GameObject theo chiều kim đồng hồ
gameObject.Rotate(90);

```

**MoveTowards**: Phương thức này di chuyển GameObject về phía một điểm hoặc một GameObject khác.

**Lerp**: Phương thức này di chuyển GameObject từ một điểm đến một điểm khác theo một tỷ lệ.

```C#
// Di chuyển một GameObject về phía một điểm
gameObject.MoveTowards(new Vector3(1, 0, 0), 10);

// Di chuyển một GameObject từ vị trí hiện tại đến vị trí của một GameObject khác
gameObject.Lerp(otherGameObject.transform.position, 1);
```

### Di chuyển GameObject theo phản ứng lực và mô-men xoắn.

**AddForce**: Phương thức này thêm một lực vào GameObject.

**AddTorque**: Phương thức này thêm một mô-men xoắn vào GameObject.

```C#
// Thêm một lực vào GameObject
gameObject.AddForce(new Vector3(1, 0, 0));

// Thêm một mô-men xoắn vào GameObject
gameObject.AddTorque(new Vector3(0, 1, 0));

```


