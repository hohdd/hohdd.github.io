---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Cách tạo Hệ thống tăng sức mạnh (Powerup System) trong Unity
description: Cách tạo Hệ thống tăng sức mạnh (Powerup System) trong Unity

### HUMAN
header: Cách tạo Hệ thống tăng sức mạnh (Powerup System) trong Unity
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
collection: Practice # this for AMP related post
### category: dùng để group collection
category: Practice

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

Sonic The Hedgehog sẽ ra sao nếu không có nhẫn vàng và giày thể thao quyền lực; Super Mario, không có nấm; hay Pac-Man không có viên năng lượng? Các trò chơi sẽ không thú vị bằng!

Power-up là một thành phần trò chơi quan trọng vì chúng thêm các lớp phức tạp và chiến lược bổ sung để giữ cho hành động di chuyển.

Để triển khai Power-Up, thực hiện theo các bước sau:
- Tạo một GameObject mới để đại diện cho Power-Up của bạn.
- Thêm một Collider component vào GameObject của bạn và bật IsTrigger option.
- Thêm một Rigidbody component vào GameObject của bạn và đặt Gravity Scale thành 0.
- Tạo một script để xử lý chuyển động của Power-Up và các trigger của nó.

Dưới đây là một ví dụ:<br>
```csharp
using UnityEngine;

public class PowerUp : MonoBehaviour
{
    public float speedBoost = 10f;
    public float powerUpDuration = 5f;

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            StartCoroutine(Pickup(other));
        }
    }

    IEnumerator Pickup(Collider player)
    {
        // Apply effect to player
        player.GetComponent<PlayerController>().speed += speedBoost;

        // Disable the power-up object
        GetComponent<MeshRenderer>().enabled = false;
        GetComponent<Collider>().enabled = false;

        // Wait for powerupDuration
        yield return new WaitForSeconds(powerUpDuration);

        // Reverse the effect on player
        player.GetComponent<PlayerController>().speed -= speedBoost;

        // Destroy the power-up object
        Destroy(gameObject);
    }
}
```

Tham khảo thêm: [kodeco.com](https://www.kodeco.com/191-how-to-make-a-power-up-system-in-unity){:.hvr-forward rel="nofollow" target="_blank"}