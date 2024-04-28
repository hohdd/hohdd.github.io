---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Mobile Ads SDK (Unity)"
description: "Mobile Ads SDK (Unity)"

### HUMAN
header: "Mobile Ads SDK (Unity)"
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
collection: Platform development # this for AMP related post
### category: dùng để group collection
category: Platform development

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## Mobile Ads SDK (Unity)

Plugin Unity quảng cáo trên thiết bị di động của Google cho phép các nhà phát triển Unity phân phát quảng cáo trên thiết bị di động của Google trên ứng dụng Android và iOS mà không cần phải viết mã Java hoặc Objective-C. Plugin này cung cấp giao diện C# để yêu cầu quảng cáo được sử dụng bởi tập lệnh C# trong dự án Unity của bạn. [Chi tiết hướng dẫn ở đây.](https://developers.google.com/admob/unity/quick-start#prerequisites){:.external.hvr-forward rel="nofollow" target="_blank"}

### Prerequisites
- Use Unity 2019.4 or higher
- To deploy to iOS
    + Xcode 15.3 or higher
    + Target iOS 12.0 or higher
    + CocoaPods
- To deploy to Android
    + Minimum Android API level of 21 or higher
    + Target Android API level 31 or higher

### Install the Google Mobile Ads for Unity package
1. Download the latest [.unitypackage](https://github.com/googleads/googleads-mobile-unity/releases){:.external.hvr-forward rel="nofollow" target="_blank"} release from GitHub.
2. Import the **.unitypackage** file by selecting the Unity menu option **Assets > Import package > Custom Package** and importing all items (Assets[ExternalDependencyManager, GoogleMobileAds, Plugins]).
    - **ExternalDependencyManager**: Trình quản lý phụ thuộc bên ngoài cho Unity (**EDM4U**) (trước kia là Play Services Resolver/Jar Resolver)
    - **GoogleMobileAds**: Là giao diện của Google Mobile Ads trong Unity Editor
    - **Plugins** (/Android và /iOS): là nơi chứa thư viện giành riêng cho Android (AAR) và iOS CocoaPods.

### Bao gồm các phụ thuộc bên ngoài
- **Google Mobile Ads Unity plugin** được phân phối cùng với thư viện [**Unity Play Services Resolver**](https://github.com/googlesamples/unity-jar-resolver){:.external.hvr-forward rel="nofollow" target="_blank"}. Thư viện này dành cho bất kỳ plugin Unity nào yêu cầu quyền truy cập vào các thư viện dành riêng cho Android, chẳng hạn như **AAR** hoặc **iOS CocoaPods**. *Nó cung cấp cho các plugin Unity khả năng khai báo các phần phụ thuộc, sau đó được tự động giải quyết và sao chép vào dự án Unity của bạn*.
- Hãy làm theo các bước sau để đảm bảo rằng dự án của bạn bao gồm tất cả các phần phụ thuộc:
    1. Đi đến **Project Settings > Player > Android > Publishing Settings > Build**{:.w3-yellow} và chọn:
        - *Custom Main Gradle Template*
        - *Custom Gradle Properties Template*
    2. Trong Unity Editor:
        - Chọn **Assets > External Dependency Manager > Android Resolver > Resolve**{:.w3-yellow} để thư viện *Unity External Dependency Manager* sao chép các phần phụ thuộc đã khai báo vào thư mục *Assets/Plugins/Android* của ứng dụng Unity của bạn.
        - Các phần phụ thuộc của plugin *Google Mobile Ads Unity* được liệt kê trong **Assets/GoogleMobileAds/Editor/GoogleMobileAdsDependency.xml**.

- Có lỗi build với phiên bản 2021 > yêu cầu phiên bản 2022...
    + [Cannot change resolution strategy of dependency configuration ':unityLibrary:aarArtifacts' after it has been resolved.](https://github.com/googleads/googleads-mobile-unity/issues/3042){:.external.hvr-forward rel="nofollow" target="_blank"}