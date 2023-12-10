---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Hiển thị Inspector dựa vào biến Public của Script
description: Hiển thị Inspector dựa vào biến Public của Script

### HUMAN
header: Hiển thị Inspector dựa vào biến Public của Script
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

## Hiển thị Inspector dựa vào biến Public của Script

- Biến Public hoặc có đánh dấu **[SerializeField]** (những private) sẽ được hiển thị ở Inspector
- Kiểu **List** sẽ hiển thị một section Collapse<br>
    ```csharp
    public List<GameObject> m_VisualWheels;
    ```
- Kiểu khởi tạo luôn một "struct" và "struct" đó phải là "**[System.Serializable]**" thì sẽ hiển thị là một section Collapse<br>
    ```csharp
    [System.Serializable]
    public struct Stats
    {
        [Header("Movement Settings")]
        [Min(0.001f), Tooltip("Top speed attainable when moving forward.")]
        public float TopSpeed;

        [Tooltip("How quickly the kart reaches top speed.")]
        public float Acceleration;
        
        [Range(0.2f, 1)]
        public float AccelerationCurve;

        //...
    }

    public ArcadeKart.Stats baseStats = new ArcadeKart.Stats // <--- Section Collapse
    {
        TopSpeed            = 10f,
        Acceleration        = 5f,
        AccelerationCurve   = 4f
        // ...
    };
    ```
- Kiểu **LayerMask** sẽ hiển thị một option-select các Layers<br>
    ```csharp
    [Tooltip("Which layers the wheels will detect.")]
    public LayerMask GroundLayers = Physics.DefaultRaycastLayers;
    ```