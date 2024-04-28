---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Tạo ứng dụng Unity cho Android"
description: "Tạo ứng dụng Unity cho Android"

### HUMAN
header: "Tạo ứng dụng Unity cho Android"
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
## Cài đặt môi trường phát triển

Dưới đây là các bước cơ bản để cài đặt môi trường phát triển Android:
1. Cài đặt các phụ thuộc:
    - **Android Build Support**: Đây là một module cần thiết để xây dựng ứng dụng Android trong Unity.
    - **Android Software Development Kit (SDK)**: Bạn cần cài đặt SDK để phát triển và chạy mã nguồn trên thiết bị Android.
    - **Native Development Kit (NDK)**: NDK hỗ trợ việc phát triển ứng dụng Android sử dụng mã nguồn C/C++.
    - **Java Development Kit (JDK)**: Mặc định, Unity sử dụng OpenJDK. Tuy nhiên, bạn có thể tùy chỉnh phiên bản JDK nếu cần.
2. Cài đặt các module:
    - Sử dụng **Unity Hub** để cài đặt các module phụ thuộc. Bạn có thể cài đặt chúng khi cài đặt phiên bản Unity mới hoặc thêm chúng vào phiên bản Unity hiện tại.
    - Ba module cần cài đặt là (Unity sẽ tự động cài đặt Android SDK & NDK Tools và OpenJDK trong thư mục *[EditorVersion]*{:.w3-orange}*/Editor/Data/PlaybackEngines/AndroidPlayer/*{:.w3-green}):
        + **Android Build Support**
        + **Android SDK & NDK Tools**
        + **OpenJDK**
3. Tùy chỉnh các phụ thuộc:
    - Sử dụng Unity Hub để cài đặt Android SDK & NDK Tools và OpenJDK để đảm bảo bạn sử dụng phiên bản và cấu hình chính xác.
    - Nếu bạn muốn sử dụng phiên bản tùy chỉnh của các phụ thuộc (SDK, NDK, JDK), bạn có thể thay đổi đường dẫn đến chúng.

Lưu ý rằng đây là hướng dẫn cơ bản. Trước khi bắt đầu, hãy kiểm tra tài liệu về **Yêu cầu và khả năng tương thích của Unity cho Android** để biết về các giới hạn và hạn chế khi phát triển ứng dụng Unity cho Android. [Chi tiết xem ở đây](https://docs.unity3d.com/Manual/android-sdksetup.html){:.external.hvr-forward rel="nofollow" target="_blank"}

## Bộ công cụ SDK (Android Software Development Kit)

### Công cụ dòng lệnh
- SDK Android bao gồm nhiều gói cần thiết cho quá trình phát triển ứng dụng. [Chi tiết xem ở đây](https://developer.android.com/tools?hl=vi){:.external.hvr-forward rel="nofollow" target="_blank"}.
- Bạn có thể cài đặt và cập nhật từng gói bằng Trình quản lý SDK (SDK Manager) của Android Studio hoặc thông qua công cụ dòng lệnh **sdkmanager**
- Công cụ dòng lệnh SDK Android (Commandline Tools):
    + Vị trí: *[android_sdk]*{:.w3-green}/cmdline-tools/*[version]*{:.w3-green}/bin/
    + Lưu ý: Gói Bộ công cụ dòng lệnh SDK Android nằm trong cmdline-tools sẽ thay thế gói Bộ công cụ SDK (SDK) nằm trong tools.
    + Danh sách:
        + **apkanalyzer**: Cung cấp thông tin chi tiết về thành phần của tệp APK sau khi quá trình xây dựng hoàn tất.
        + [**avdmanager**](https://developer.android.com/studio/command-line/avdmanager?hl=vi){:.external.hvr-forward rel="nofollow" target="_blank"}: Cho phép bạn tạo và quản lý các Thiết bị Android ảo (AVD) thông qua dòng lệnh.
        + **lint**: Quét mã để giúp bạn xác định và khắc phục các vấn đề về chất lượng cấu trúc của mã.
        + **retrace**: Đối với các ứng dụng do [R8 biên dịch](https://developer.android.com/studio/build/shrink-code?hl=vi){:.external.hvr-forward rel="nofollow" target="_blank"}, công cụ **retrace** sẽ giải mã dấu vết ngăn xếp đã làm rối mã nguồn rồi ánh xạ trở lại mã nguồn ban đầu của bạn.
        + **sdkmanager**: Cho phép bạn xem, cài đặt, cập nhật và gỡ cài đặt các gói đối với SDK Android
- Công cụ xây dựng SDK Android (Build Tools):
    + Vị trí: *[android_sdk]*{:.w3-orange}/build-tools/*[version]*{:.w3-orange}/
    + Bạn sẽ cần đến gói này khi xây dựng ứng dụng Android. Hầu hết công cụ trong gói này do các công cụ xây dựng gọi ra và đều không dành cho bạn. Tuy nhiên, các công cụ dòng lệnh sau có thể hữu ích:
        + **AAPT2**: Phân tích cú pháp, lập chỉ mục và biên dịch các tài nguyên trên Android thành một định dạng nhị phân được tối ưu hoá cho nền tảng Android và gói các tài nguyên biên dịch thành một gói dữ liệu đầu ra.
        + **apksigner**: Ký tệp APK và kiểm tra xem các chữ ký APK được xác minh thành công trên tất cả phiên bản nền tảng mà một tệp APK nhất định hỗ trợ hay chưa.
        + **zipalign**: Tối ưu hoá các tệp APK bằng cách đảm bảo rằng tất cả dữ liệu chưa nén đều bắt đầu bằng một đường căn chỉnh cụ thể đồng bộ với thời điểm bắt đầu tệp.
- Công cụ nền tảng SDK Android (Platform Tools):
    + Vị trí: *[android_sdk]*{:.w3-yellow}/platform-tools/
    + Các công cụ này được cập nhật cho mọi phiên bản mới trên nền tảng Android để hỗ trợ các tính năng mới và khắc phục hoặc cải thiện các công cụ, đồng thời mỗi bản cập nhật sẽ tương thích ngược với các phiên bản trên nền tảng cũ.
    + Danh sách:
        + [**abd**](https://developer.android.com/studio/command-line/adb?hl=vi){:.external.hvr-forward rel="nofollow" target="_blank"}: Android Debug Bridge (adb) là một công cụ linh hoạt cho phép bạn quản lý trạng thái của một thực thể trình mô phỏng hoặc một thiết bị Android. Bạn cũng có thể sử dụng tệp này để cài đặt APK trên thiết bị.
        + **etc1tool**: Một tiện ích dòng lệnh cho phép bạn mã hoá hình ảnh PNG theo tiêu chuẩn nén ETC1 và giải mã hình ảnh nén theo tiêu chuẩn ETC1 về định dạng PNG.
        + **fastboot**: Cài đặt ROM trên thiết bị với các nền tảng và hình ảnh hệ thống khác. Để biết hướng dẫn cài đặt ROM, hãy xem Hình ảnh gốc về thiết bị Nexus và Pixel.
        + [**logcat**](https://developer.android.com/studio/command-line/logcat?hl=vi){:.external.hvr-forward rel="nofollow" target="_blank"}: Được adb gọi để xem nhật ký ứng dụng và hệ thống.
- Trình mô phỏng Android (Emulator)
    + Vị trí: **android_sdk**/emulator/ hoặc **android_sdk**/tools/ (Unity)
    + Bạn sẽ cần đến gói này khi dùng Trình mô phỏng Android. Gói này bao gồm những công cụ sau:
        + **emulator**: Công cụ mô phỏng thiết bị dựa trên QEMU mà bạn có thể sử dụng để gỡ lỗi và kiểm thử các ứng dụng trong môi trường thời gian chạy thực tế của Android.
        + **mksdcard**: Giúp bạn tạo hình ảnh đĩa để dùng trong trình mô phỏng, nhằm mô phỏng sự hiện diện của thẻ bộ nhớ ngoài, chẳng hạn như thẻ SD.

## Android Player settings

Khi làm việc với một Platform, bạn sẽ cầu cấu hình Độ phân giải, Aspect Ratio, Orientation, Icon, Splash Image, Rendering (Vulkan, Metal, OpenGL), Project Keystore, Gradle Build... [Chi tiết xem ở đây](https://docs.unity3d.com/Manual/class-PlayerSettingsAndroid.html){:.external.hvr-forward rel="nofollow" target="_blank"}

### Icon

**Tổng cần 12 icon**{:.w3-yellow} với các kích cỡ: *432x432, 324x324, 216x216, 192x192, 162x162, 144x144, 108x108, 96x96, 81x81, 72x72, 48x48, 36x36.*

| Property | Description                                                                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Adaptive | Android   8.0 (API level 26) or higher. Yêu cầu 6 cặp (Background-Foreground) icons, từ   xxxhdpi đến ldpi: 432x432, 324x324, 216x216, 162x162, 108x108, 81x81. |
| Round    | Android   7.1 (API level 25) or higher. Yêu cầu 6 icons, từ xxxhdpi đến ldpi: 192x192,   144x144, 96x96, 72x72, 48x48, 36x36.                                   |
| Legacy   | Android   7.1 (API level 25). Yêu cầu 6 icons, từ xxxhdpi đến ldpi: 192x192, 144x144,   96x96, 72x72, 48x48, 36x36.                                             |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue}

### Độ phân giải và trình bày (Resolution and Presentation)
- **Fullscreen Mode**{:.w3-yellow}: gồm 2 chế độ **Fullscreen Window** và **Windowed**
- **Resizable Window**: Cho biết liệu người dùng có thể thay đổi kích thước cửa sổ của ứng dụng hay không.
- **Width & Height**: Tùy chọn này chỉ khả dụng nếu **Fullscreen Mode** được đặt thành **Windowed**.
- Aspect Ratio Mode: Chỉ định tỷ lệ khung hình lớn nhất mà ứng dụng hỗ trợ. Nếu tỷ lệ khung hình của thiết bị lớn hơn tỷ lệ khung hình này, *Unity sẽ thêm các thanh màu đen để ứng dụng không bị giãn*.
- **Orientation**{:.w3-yellow}: Mặc định "**Auto Rotation**". Sử dụng phần Định hướng để tùy chỉnh các cài đặt liên quan đến hướng của ứng dụng trên thiết bị.
    + **Portrait**: Hướng màn hình **dọc** trong đó phần dưới cùng của cửa sổ ứng dụng thẳng hàng với phần dưới cùng của màn hình thiết bị.
    + **Portrait Upside Down**: Hướng màn hình **dọc** trong đó phần dưới cùng của cửa sổ ứng dụng thẳng hàng với phần trên cùng của màn hình thiết bị.
    + **Landscape Right**: Hướng màn hình **ngang** trong đó phía bên phải của cửa sổ ứng dụng thẳng hàng với phía dưới màn hình của thiết bị.
    + **Landscape Left**: Hướng màn hình **ngang** trong đó phía bên phải của cửa sổ ứng dụng thẳng hàng với phía trên màn hình của thiết bị.
- **Show Loading Indicator**: Chỉ định xem chỉ báo tải có xuất hiện hay không và như thế nào. Mặc định "**Don’t Show**"
- **Splash screen**{:.w3-yellow}:
    + **Image**: Chỉ định texture mà ứng dụng sử dụng cho Splash screen của Android. **Kích thước tiêu chuẩn là 320x480**{:.w3-yellow}.
    + **Scaling**: Chỉ định cách chia tỷ lệ hình ảnh Splash cho vừa với màn hình của thiết bị.
        - Center (only scale down): Vẽ hình ảnh ở kích thước gốc trừ khi nó quá lớn, trong trường hợp đó Unity sẽ thu nhỏ hình ảnh xuống cho vừa.
        - Scale to Fit (letter-boxed): lấy theo chiều dài và lấp đầy khoảng trống xung quanh các cạnh ở chiều ngắn hơn bằng màu đen.
        - Scale to Fill (cropped): lấy theo chiều ngắn và cắt chiều dài.

- **Other Settings**: ví dụ như: Rendering, Package Name, Version, Bundle Version Code, Minimum API Level, Target API Level, Permissions...
    + **Internet Access**{:.w3-yellow}: Chọn có luôn thêm quyền kết nối mạng (INTERNET) vào Bản kê khai ứng dụng Android hay không, ngay cả khi bạn không sử dụng bất kỳ API mạng nào, hãy đặt thành **Require** (mặc định là "**Auto**")s.
    + [**Android API Levels**](https://apilevels.com/){:.external.hvr-forward.w3-yellow rel="nofollow" target="_blank"}:
        - **Minimum**: Android 5 / Level 22 Android 5.1 / Lollipop / 99.2% / 2015
        - **Target**: (2024/04) Android 14 / Level 34 / Upside Down Cake / 12.6% / 2023
        {% msg success Việc định cấu hình ứng dụng của bạn để nhắm mục tiêu cấp API gần đây sẽ đảm bảo rằng người dùng được hưởng lợi từ các cải tiến về bảo mật, quyền riêng tư và hiệu suất, trong khi vẫn cho phép ứng dụng chạy trên các phiên bản Android cũ hơn (giảm xuống mức được chỉ định minSdkVersion). %}
- **Publishing Settings**{:.w3-yellow}:
    + Android keystores
        1. Keystore (Kho chứa khóa) Android:
            - **Khái niệm**: Keystore là một tệp nhị phân chứa các khóa riêng tư và chứng chỉ khóa công khai. Android sử dụng các khóa trong keystore để ký ứng dụng cho mục đích bảo mật.
            - **Quản lý keystore trong Unity**: Để tương tác với keystore, Unity cung cấp Keystore Manager và các thuộc tính trong Player Settings. Bạn có thể sử dụng các công cụ này để tạo, cấu hình hoặc tải keystore Android.
        2. Các bước cơ bản:
            - **Tạo keystore mới**: Sử dụng Keystore Manager để tạo tệp keystore mới và cấu hình đường dẫn của nó.
            - **Thêm khóa vào keystore**: Sử dụng Keystore Manager để thêm khóa vào keystore.
            - **Tải keystore hiện có**: Sử dụng Keystore Manager để tải một keystore đã tồn tại.
    + Project Key
    + Build (Manifest, Gradle...)
    + Minify (use R8, Release, Debug, Split Application Binary...)

## Android Build Settings
- Nếu Android có màu xám, hãy làm theo các bước thiết lập môi trường Android.
- Nếu nút **Build** không hiển thị và **Build And Run** có màu xám, hãy chọn Chuyển đổi nền tảng. Cài đặt bản dựng Android hiện có ảnh hưởng đến bản dựng.
- Build settings:
    + Texture Compression: Định dạng nén kết cấu để sử dụng cho bản dựng.
    + ETC2 fallback: Chỉ định định dạng kết cấu RGBA không nén mà Unity sử dụng cho các thiết bị Android không hỗ trợ ETC2.
    + Export Project: Cho biết có xuất dự án Unity dưới dạng Gradle hay không (dự án mà bạn có thể nhập vào Android Studio.)
    + Symlink Sources: Cho biết liệu có chia sẻ tệp nguồn Java và Kotlin giữa dự án Unity và Gradle đã xuất hay không.
    + Build App Bundle (Google Play): Cho biết có nên xây dựng ứng dụng dưới dạng Android App Bundle (AAB) để phân phối trên Google Play hay không. Nếu bạn bật cài đặt này, Unity sẽ xây dựng ứng dụng dưới dạng AAB. Nếu bạn tắt cài đặt này, Unity sẽ xây dựng ứng dụng dưới dạng APK.
    + Export for App Bundle: Cho biết liệu có định cấu hình dự án Gradle đã xuất để xây dựng dưới dạng Android App Bundle hay không.
    + Create symbols.zip: Chỉ định cách Unity tạo gói biểu tượng khi xây dựng ứng dụng của bạn.
    + **Run Device**: Chỉ định thiết bị được đính kèm nào để kiểm tra bản dựng. Các thiết bị được kết nối qua USB sẽ tự động xuất hiện trong danh sách. Chi tiết trong [Debug on Android devices](https://docs.unity3d.com/Manual/android-debugging-on-an-android-device.html){:.external.hvr-forward rel="nofollow" target="_blank"}
    + Build to Device: Quy trình xây dựng không tạo bản dựng đầy đủ mà thay vào đó triển khai các tệp đơn lẻ đã thay đổi kể từ bản vá cuối cùng trực tiếp vào thiết bị.
    + **Development Build**: Cho biết có bao gồm các ký hiệu gỡ lỗi tập lệnh và Trình phân tích hồ sơ hay không trong bản dựng của bạn. Sử dụng cài đặt này khi bạn muốn kiểm tra ứng dụng của mình.
    + Autoconnect Profiler: Cho biết có tự động kết nối Profiler với ứng dụng được xây dựng khi nó chạy hay không.
    + Deep Profiling Support: Cho biết liệu có bật Hồ sơ sâu trong Trình hồ sơ hay không. Điều này làm cho công cụ Profiler gọi mọi chức năng trong ứng dụng của bạn để nó trả về dữ liệu lược tả chi tiết hơn. Tùy chọn này có thể làm chậm quá trình thực thi tập lệnh.
    + **Script Debugging**: Cho biết có cho phép gỡ lỗi mã tập lệnh của ứng dụng hay không.
    + **Wait For Managed Debugger**: Cho biết liệu ứng dụng có đợi trình gỡ lỗi đính kèm hay không trước khi chạy bất kỳ mã tập lệnh nào.
    + Compression Method: Chỉ định phương thức Unity sử dụng để nén dữ liệu trong Dự án của bạn khi xây dựng Trình phát. Điều này bao gồm Assets, Scenes, Player settings, và GI data

## Developing for Android

### Định dạng xuất bản

{% msg warning Lưu ý quan trọng: Từ tháng 8 năm 2021, các ứng dụng mới phải xuất bản bằng Android App Bundle trên Google Play. Ứng dụng mới có kích thước lớn hơn 200 MB hiện được Play Feature Delivery hoặc Play Asset Delivery hỗ trợ. Từ tháng 6 năm 2023, các ứng dụng truyền hình hiện có cũng như các ứng dụng truyền hình mới phải được xuất bản dưới dạng Gói ứng dụng. %}

**Android App Bundle** là định dạng phát hành chứa toàn bộ tài nguyên và mã đã biên dịch của ứng dụng, đồng thời trì hoãn việc tạo APK và đăng nhập vào Google Play.

Google Play sử dụng gói ứng dụng của bạn để tạo và phân phát **APK được tối ưu hoá cho từng cấu hình thiết bị**. Do đó, chỉ mã và tài nguyên cần thiết cho một thiết bị cụ thể mới được tải xuống để chạy ứng dụng của bạn. Bạn không còn phải xây dựng, ký và quản lý nhiều APK để tối ưu hoá khả năng hỗ trợ cho nhiều thiết bị, đồng thời **các tệp người dùng tải xuống sẽ nhỏ hơn, được tối ưu hoá hơn.**

Xem thêm: [Giới thiệu về Android App Bundle](https://developer.android.com/guide/app-bundle?hl=vi){:.external.hvr-forward rel="nofollow" target="_blank"}

### Play Asset Delivery (PAD)

Google lưu trữ và phân phối các gói tài sản trên Google Play, có nghĩa là bạn không cần tạo mạng phân phối nội dung để gửi tài nguyên ứng dụng cho người dùng. Để biết thêm thông tin về PAD, hãy xem tài liệu [Phân phối tài sản trên Play](https://developer.android.com/guide/playcore/asset-delivery){:.external.hvr-forward rel="nofollow" target="_blank"} của Android.

PAD chỉ có sẵn cho Google Play và cho phép các ứng dụng lớn hơn giới hạn kích thước ứng dụng Google Play là 150MB.

### Building and delivering for Android

#### Debug on Android devices
- Connect via USB:
    + **Bật tuỳ chọn cho nhà phát triển** trên thiết bị:
        - Settings > About phone > Software information > Build number (Cài đặt > Giới thiệu về điện thoại > Thông tin phần mềm > Số bản dựng)
        - Nhấn vào tuỳ chọn **Build Number** (Số bản dựng) **7 lần** cho đến khi bạn thấy thông báo **You are now a developer!**
        - Quay lại màn hình trước để tìm Developer options (Tuỳ chọn cho nhà phát triển) ở dưới cùng.
        - Trong Developer options > Bật tuỳ chọn **USB debugging**{:.w3-green} (Gỡ lỗi qua USB)
    + Sử dụng **cáp USB** để kết nối thiết bị Android của bạn với máy chạy Unity.
    + Điều hướng đến **File > Build Settings > Android**
    + **Chọn thiết bị** của bạn từ các tùy chọn có sẵn. Nếu thiết bị của bạn không xuất hiện, hãy nhấp vào Làm mới (**Refresh**).
    + Click **Build And Run**. Nếu button bị disable thì có thể cần phải **Switch Platform** (switch sang Android)
- Connect wirelessly:
    + Kết nối với thiết bị qua Wi-Fi (Android 11 trở lên):
        - Bật tuỳ chọn cho nhà phát triển trên thiết bị.
        - Bật tính năng gỡ lỗi qua Wi-Fi (**Wireless debugging**{:.w3-green}) trên thiết bị
        - Trên máy trạm (PC), hãy mở một cửa sổ dòng lệnh rồi chuyển đến **[android_sdk]/platform-tools**
        - Chạy lệnh "```adb pair <ipaddr:port>```{:.w3-yellow}". Khi được nhắc, hãy nhập mã ghép nối.
        - Sau khi **pair** thành công, từ cài đặt **Run Device**, chọn tùy chọn **Enter IP** và điền **IP:Port** (*port khác với port lúc Pair*)
- View Android logs:
    + Sử dụng **Android Logcat package** trong **Unity Editor**
    + Mở **Android Logcat window** trong *Window > Analysis > Android Logcat*
    + Kết nối > Filter theo: app (game), Priority (log level), Tag (Unity, ViewRoot, AudioTrack...)
    + Tools (góc bên phải): Screen Capture, Open Terminal ([android_sdk]/platform-tools), Stacktrace Utility, Memory window
        - **Screen Capture**: có thể chụp Photo hoặc Video. Unity Editor gửi lệnh qua **adb** sau đó copy ảnh/video về thư mục *Temp* của *Project* hiện tại và hiển thị trên **Device Screen Capture**