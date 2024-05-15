---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Tìm hiểu Expo
description: Tìm hiểu Expo
robots: noindex, nofollow, follow, noarchive

### HUMAN
header: Tìm hiểu Expo
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: false # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Expo # this for AMP related post
### category: dùng để group collection
category: Expo

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
---

## Tìm hiểu Expo
- Expo là hệ sinh thái (develop, review, deploy) để tạo ứng dụng đa nền tảng (android, ios, web).
- Expo sử dụng React Native, được viết bằng TypeScript.
- Expo là một [framework mã nguồn mở](https://github.com/expo/expo){:.external.hvr-forward rel="nofollow" target="_blank"} dành cho các ứng dụng chạy tự nhiên trên Android, iOS và web.

## Tools
- [**Expo Go**](https://expo.dev/go){:.external.hvr-forward rel="nofollow" target="_blank"}: là một hộp cát cho phép bạn nhanh chóng thử nghiệm việc xây dựng các ứng dụng Android và iOS gốc. Expo Go kết nối **Development Server** hoặc **URL từ EAS** thông qua **URL hoặc Barcode**
    - [**Android Client**](https://play.google.com/store/apps/details?id=host.exp.exponent){:.external.hvr-forward rel="nofollow" target="_blank"}: để xem project trên android trong khi develop.
    - [**iOS Client**](https://apps.apple.com/us/app/expo-go/id982107779){:.external.hvr-forward rel="nofollow" target="_blank"}: để xem project trên ios trong khi develop.
        - Theo truyền thống, bạn cần có macOS để phát triển ứng dụng iOS, tuy nhiên, bạn có thể sử dụng EAS Build để xây dựng ứng dụng của mình trên đám mây. Bạn cũng có thể sử dụng EAS Submit để gửi ứng dụng của mình đến các cửa hàng.
        - Việc kiểm tra có thể được thực hiện trên thiết bị iOS vật lý bằng cách sử dụng Expo Go hoặc bản dựng phát triển.
    - [**expo-dev-client**](https://docs.expo.dev/versions/latest/sdk/dev-client/){:.external.hvr-forward rel="nofollow" target="_blank"}: cho phép tạo bản dựng phát triển (giống **Expo Go**) và bao gồm các công cụ phát triển hữu ích.
- [Expo CLI](https://github.com/expo/expo/tree/main/packages/%40expo/cli){:.external.hvr-forward rel="nofollow" target="_blank"}: Command Line để develop và build
    - **expo-cli** không dùng nữa, sử dụng **@expo/cli** để thay thế
    - Gói **@expo/cli** là tệp nhị phân CLI nên được sử dụng thông qua các tệp expo như **npx expo start**
- **Development Server** (máy chủ phát triển) là proxy giữa **native runtime** (thời gian chạy gốc như: Expo Go, Dev Client) và JS Bundler (Metro, Webpack).<br>![TEXT](/assets/img/collections/expo-server-proxy.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- [**EAS CLI**](https://github.com/expo/eas-cli){:.external.hvr-forward rel="nofollow" target="_blank"}: EAS (Expo Application Services - Dịch vụ ứng dụng Expo) để xây dựng dự án của bạn thành ứng dụng Android và iOS, sau đó gửi chúng đến các cửa hàng ứng dụng.<br>![TEXT](/assets/img/collections/expo-build-and-submit.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - [EAS](https://expo.dev/eas){:.external.hvr-forward rel="nofollow" target="_blank"} là dịch vụ của Expo để giúp build (trên cloud), submit (app store), update (không cần gửi file review ở trên store)
    - Native Runtime trên App Store nhưng JS Bundle ở trên cloud của Expo.
    - EAS có thể gửi thông báo đẩy (push notification).
    - Bạn có thể sử dụng EAS miễn phí nếu **hạn ngạch gói miễn phí** đủ cho ứng dụng của bạn. Thông tin thêm có sẵn trên [trang giá cả](https://expo.dev/pricing){:.external.hvr-forward rel="nofollow" target="_blank"}.
- [**Expo Snack**](https://snack.expo.dev/){:.external.hvr-forward rel="nofollow" target="_blank"}: thử Expo trong trình duyệt (playground).

## Set up your environment
- Cài **npm** hoặc **yarn**, khi *upgrade có thể sẽ cần yarn* khi chạy **npx expo install --fix**
- Tạo project: ```npx create-expo-app@latest```
- Chạy project: ```npx expo start```
- Upgrade Expo SDK:
    - B1. Upgrade the Expo SDK: Cài đặt phiên bản mới của gói Expo
        - NPM: ```npm install expo@latest``` hoặc ```npm install expo@51```
        - YARN: ```yarn add expo@latest``` hoặc ```yarn add expo@51```
    - B2. Upgrade dependencies: Nâng cấp tất cả các phần phụ thuộc để phù hợp với phiên bản SDK đã cài đặt.
        - ```npx expo install --fix``` (có thể cần phần có YARN globaly)
        - ```npx expo-doctor@latest``` (Kiểm tra mọi vấn đề có thể xảy ra trong phần phụ thuộc dự án của bạn)
    - B3. Follow [the release notes](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#sdk-changelogs){:.external.hvr-forward rel="nofollow" target="_blank"} for any other instructions

### Debugger (Press 'j' to open debugger)

```
› Metro waiting on exp://192.xxx.xxx.xxx:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
```