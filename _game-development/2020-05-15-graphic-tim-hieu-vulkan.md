---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Graphic - Tìm hiểu Vulkan"
description: "Graphic - Tìm hiểu Vulkan"

### HUMAN
header: "Graphic - Tìm hiểu Vulkan"
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
glslEditor: false # nhúng glslEditor
amp: false
audioSetting: false # có menu để setting audio or not
collection: Graphic # this for AMP related post
### category: dùng để group collection
category: Graphic

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Graphic - Tìm hiểu Vulkan

### Tổng quan

**Vulkan** là một **giao diện lập trình ứng dụng *đồ họa* và *tính toán*** được phát triển bởi Khronos Group. Nó cung cấp một abstraction tốt hơn cho các card đồ họa **hiện đại so với OpenGL** (là đời sau).

Vulkan cho phép bạn mô tả rõ hơn về ý định của ứng dụng của bạn, giúp tối ưu hóa hiệu suất và giảm thiểu các vấn đề không mong muốn từ trình điều khiển. Mặc dù Vulkan có giao diện **cross-platform**, bạn cần làm việc nhiều hơn với API này. Nó không phải dành cho tất cả mọi người, nhưng nếu bạn đam mê về **đồ họa máy tính hiệu suất cao**, thì Vulkan là lựa chọn tốt. Nếu bạn quan tâm đến phát triển game, hãy xem xét sử dụng OpenGL hoặc Direct3D.

Vulkan là một công cụ mạnh mẽ cho những người muốn khám phá sâu hơn về đồ họa máy tính và tối ưu hóa hiệu suất. 🚀

Để theo dõi hướng dẫn này, bạn cần có:
- **Card đồ họa** và trình điều khiển **tương thích với Vulkan** (*NVIDIA, AMD, Intel, Apple Silicon*).
- Kinh nghiệm với **C++** (hiểu về **RAII**, **initializer lists**).
- Trình biên dịch hỗ trợ đủ tính năng của C++17 (**Visual Studio** 2017+, **GCC** 7+, hoặc Clang 5+).
- **Kiến thức cơ bản về đồ họa máy tính 3D**.

Hãy chuẩn bị sẵn sàng để khám phá thế giới của Vulkan! Dưới đây là một số bước cơ bản để bắt đầu:
- Cài đặt **Vulkan SDK**:
    + Trước tiên, bạn cần cài đặt Vulkan SDK. Điều này bao gồm các công cụ, thư viện và tài liệu cần thiết để phát triển ứng dụng sử dụng Vulkan.
    + Truy cập trang web của Khronos Group để tải và cài đặt SDK: Vulkan SDK
- Chọn **môi trường phát triển**:
    + Bạn có thể sử dụng **C++** hoặc Rust để viết ứng dụng Vulkan. C++ là ngôn ngữ phổ biến cho phát triển đồ họa máy tính, trong khi Rust cung cấp kiểm tra kiểu mạnh mẽ và an toàn hơn.
    + Đảm bảo bạn đã cài đặt **trình biên dịch phù hợp** (như **GCC**, Clang hoặc MSVC).
- Tạo một cửa sổ **hiển thị**:
    + Vulkan không cung cấp chức năng tạo cửa sổ hiển thị, vì vậy bạn cần sử dụng thư viện khác như **GLFW**, **SDL**, hoặc **Qt** để tạo cửa sổ.
    + Tạo một cửa sổ đơn giản để hiển thị đồ họa.
- **Khởi tạo Vulkan**:
    + Tạo một ứng dụng Vulkan đơn giản bằng cách **khởi tạo Vulkan instance**.
    + Đảm bảo bạn đã hiểu về các khái niệm như instance, physical device, và logical device.
- Tạo một **swap chain**:
    + Swap chain *là một chuỗi các hình ảnh mà bạn hiển thị trên màn hình*.
    + Tạo swap chain để hiển thị hình ảnh lên cửa sổ.
- **Viết mã shader**:
    + Vulkan sử dụng shader để xử lý đồ họa.
    + Viết mã shader **bằng GLSL** (OpenGL Shading Language).
- **Tạo và hiển thị hình ảnh**:
    + Tạo các đối tượng như **buffer**, **texture**, và **pipeline** để hiển thị hình ảnh lên màn hình.
    + **Render** các hình ảnh bằng cách **gửi dữ liệu đến GPU và sử dụng shader**.
- **Tối ưu hóa hiệu suất**:
    + Vulkan cho phép bạn tối ưu hóa hiệu suất bằng cách **sử dụng command buffers, pipelines, và memory management**.
    + Đọc tài liệu và ví dụ để hiểu cách tối ưu hóa ứng dụng của bạn.
- Khám phá thêm:
    + Đọc tài liệu chi tiết và tham khảo các ví dụ để hiểu sâu hơn về Vulkan.
    + Tham gia cộng đồng phát triển Vulkan để học hỏi và chia sẻ kinh nghiệm.

### Sử dụng Vulkan để làm gì?

#### Các bước sử dụng Vulkan để tối ưu hóa hiệu suất.

Bạn đang phát triển một trò chơi đua xe 3D và muốn sử dụng Vulkan để tối ưu hóa hiệu suất. Dưới đây là các bước bạn có thể thực hiện:
- Khởi tạo Vulkan Instance:
    + Tạo một Vulkan instance để bắt đầu sử dụng Vulkan.
    + Điều này bao gồm việc cài đặt và khởi tạo các cấu trúc dữ liệu cần thiết.
- Chọn Physical Device (Card đồ họa):
    + Liệt kê tất cả các physical devices (card đồ họa) có sẵn trên hệ thống.
    + Chọn card đồ họa phù hợp với yêu cầu của bạn (ví dụ: hỗ trợ Vulkan, hiệu suất tốt).
- Khởi tạo Logical Device:
    + Tạo logical device từ physical device đã chọn.
    + Logical device là giao diện để giao tiếp với card đồ họa.
- Tạo Swap Chain:
    + Swap chain là chuỗi các hình ảnh mà bạn hiển thị trên màn hình.
    + Tạo swap chain để hiển thị hình ảnh lên cửa sổ.
- Viết Mã Shader:
    + Viết mã shader bằng GLSL để xử lý đồ họa.
    + Shader sẽ xử lý ánh sáng, màu sắc, bóng đổ, và các hiệu ứng khác.
- Tạo Và Hiển Thị Đối Tượng 3D:
    + Tạo các đối tượng 3D (ví dụ: xe đua, đường đua) bằng cách sử dụng vertex buffers và index buffers.
    + Sử dụng shader để hiển thị các đối tượng này lên màn hình.
- Xử Lý Sự Kiện Người Dùng:
    + Xử lý sự kiện như bấm phím, di chuyển chuột để điều khiển xe đua.
    + Cập nhật vị trí và góc xoay của đối tượng dựa trên sự kiện người dùng.
- Tối Ưu Hóa Hiệu Suất:
    + Sử dụng command buffers, pipelines, và memory management để tối ưu hóa hiệu suất.
    + Đảm bảo rằng bạn không gọi các hàm tốn tài nguyên quá nhiều lần.
- Render Hình Ảnh 3D:
    + Sử dụng swap chain để hiển thị hình ảnh lên màn hình.
    + Render các frame liên tục để tạo hiệu ứng chuyển động.
- Kiểm Tra Và Sửa Lỗi:
    + Kiểm tra ứng dụng trên nhiều loại card đồ họa và hệ điều hành.
    + Sửa lỗi và tối ưu hóa cho mọi trường hợp sử dụng.

#### một số điểm cần xem xét khi chuyển OpenGL sang Vulkan

- Hiệu suất và tối ưu hóa:
    + Vulkan được thiết kế để cung cấp hiệu suất tốt hơn so với OpenGL. Nó cho phép bạn kiểm soát tài nguyên và tối ưu hóa hiệu suất một cách linh hoạt hơn.
    + Nếu ứng dụng của bạn đang gặp vấn đề về hiệu suất hoặc bạn muốn tối ưu hóa, chuyển sang Vulkan có thể là lựa chọn tốt.
- Khả năng tương thích ngược:
    + Vulkan không tương thích ngược với OpenGL. Điều này có nghĩa là bạn không thể chạy mã nguồn OpenGL trực tiếp trên Vulkan mà phải viết lại mã.
    + Tuy nhiên, có một số dự án triển khai OpenGL trên cơ sở Vulkan như ANGLE của Google và Zink của Mesa1.
- Thời gian và công sức:
    + Chuyển đổi từ OpenGL sang Vulkan đòi hỏi bạn phải học cách sử dụng Vulkan và viết lại mã nguồn.
    + Bạn cần xem xét xem liệu việc chuyển đổi này đáng đối với thời gian và công sức bạn đầu tư.
- Hỗ trợ thiết bị và phiên bản Android:
    + Vulkan có sẵn trên Android từ phiên bản 7.0 (API cấp 24) trở lên.
    + Hãy xác định những thiết bị Android mà trò chơi của bạn hỗ trợ và đảm bảo chúng hỗ trợ Vulkan2.
- Lợi ích và mục tiêu ứng dụng:
    + Xem xét lợi ích của việc chuyển đổi. Nếu ứng dụng của bạn đang hoạt động tốt với OpenGL và không gặp vấn đề về hiệu suất, bạn có thể không cần chuyển sang Vulkan.
    + Nếu bạn muốn tìm hiểu sâu hơn về đồ họa máy tính và tối ưu hóa hiệu suất, chuyển sang Vulkan có thể là cơ hội tốt.

Tóm lại, chuyển từ OpenGL sang Vulkan khả thi, nhưng bạn cần xem xét kỹ lưỡng và đánh giá lợi ích của việc chuyển đổi.

### Vulkan Tutorial

*TODO...*