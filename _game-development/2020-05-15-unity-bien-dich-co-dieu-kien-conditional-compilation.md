---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Biên dịch có điều kiện (Conditional compilation)
description: Biên dịch có điều kiện (Conditional compilation)

### HUMAN
header: Biên dịch có điều kiện (Conditional compilation)
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

## Conditional compilation

```csharp
[ExecuteInEditMode]
public class PlatformDetector : MonoBehaviour
{
    #if UNITY_EDITOR
    void Start()
    {
        Debug.Log("Đang chạy trong editor");
    }
    #endif

    #if UNITY_ANDROID
    void Update()
    {
        Debug.Log("Đang chạy trên Android");
    }
    #endif
}
```

```csharp
using UnityEngine;
using System.Collections;
public class PlatformDefines : MonoBehaviour {
    void Start () {

        #if UNITY_EDITOR
        Debug.Log("Unity Editor");
        #endif

        #if UNITY_IOS
        Debug.Log("iOS");
        #endif

        #if UNITY_STANDALONE_OSX
            Debug.Log("Standalone OSX");
        #endif

        #if UNITY_STANDALONE_WIN
        Debug.Log("Standalone Windows");
        #endif

    }
}
```

Xem thêm: [Conditional compilation](https://docs.unity3d.com/2021.3/Documentation/Manual/PlatformDependentCompilation.html){:.hvr-forward rel="nofollow" target="_blank"}