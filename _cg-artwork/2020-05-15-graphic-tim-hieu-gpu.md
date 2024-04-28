---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Graphic - Tìm hiểu GPU"
description: "Graphic - Tìm hiểu GPU"

### HUMAN
header: "Graphic - Tìm hiểu GPU"
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

## Graphic - Tìm hiểu GPU

### Lịch sử
- GPU là viết tắt của Graphics Processing Unit, một loại chip chuyên dụng cho xử lý đồ họa 3D. GPU có thể tạo ra các hình ảnh chân thực và chi tiết trên màn hình máy tính, điện thoại, máy chơi game, và các thiết bị khác. GPU cũng có thể được sử dụng cho các ứng dụng tính toán song song, như trí tuệ nhân tạo, học máy, và khoa học dữ liệu.<br>![TEXT](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/A790GXH-128M-Motherboard.jpg/1920px-A790GXH-128M-Motherboard.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- Lịch sử phát triển và hình thành của GPU có thể được chia thành các giai đoạn sau:
    + Giai đoạn 1: Đồ họa 3D đầu tiên (1976 - 1995). Đây là thời kỳ của các máy chơi game điện tử, các máy tính cá nhân, và các hệ thống mô phỏng 3D. Các chip đồ họa đầu tiên chỉ có khả năng hiển thị các hình ảnh đơn giản, màu sắc hạn chế, và độ phân giải thấp. Các ví dụ nổi bật là chip Pixie của RCA, chip TMS34010 của Texas Instruments, và chip Geometry Engine của Silicon Graphics.
    + Giai đoạn 2: Sự ra đời của GPU (1995 - 1999). Đây là thời kỳ của các card đồ họa 3D độc lập, được gắn vào máy tính để cải thiện hiệu năng đồ họa. Các card đồ họa này có thể xử lý các phép biến đổi hình học, ánh sáng, bóng, và kết cấu của các đối tượng 3D. Các ví dụ nổi bật là card Voodoo của 3dfx, card Riva TNT của Nvidia, và card Rage Pro của ATI.
    + Giai đoạn 3: Sự cạnh tranh giữa Nvidia và ATI (2000 - 2006). Đây là thời kỳ của sự phát triển nhanh chóng của công nghệ đồ họa, với sự ra mắt của các thế hệ mới của GPU, có khả năng xử lý các hiệu ứng đồ họa nâng cao, như bề mặt phản xạ, bóng đổ động, và khói sương. Các ví dụ nổi bật là card GeForce 2 GTS của Nvidia, card Radeon 9700 Pro của ATI, và card GeForce 6800 Ultra của Nvidia.
    + Giai đoạn 4: GPU đa năng (2006 - 2013). Đây là thời kỳ của sự chuyển đổi của GPU từ các chip chuyên dụng cho đồ họa sang các chip đa năng, có thể xử lý các loại dữ liệu khác nhau, như âm thanh, video, và mã hóa. Các GPU đa năng cũng có thể được kết nối với nhau để tăng hiệu năng đồ họa hoặc tính toán. Các ví dụ nổi bật là card GeForce 8800 GTX của Nvidia, card Radeon HD 4870 của AMD (sau khi mua lại ATI), và card GeForce GTX 580 của Nvidia.
    + Giai đoạn 5: GPU cho trí tuệ nhân tạo và đám mây (2013 - nay). Đây là thời kỳ của sự ứng dụng của GPU cho các lĩnh vực mới, như trí tuệ nhân tạo, học máy, và dịch vụ đám mây. Các GPU hiện đại có thể xử lý hàng tỷ phép tính dấu chấm động mỗi giây, giúp giải quyết các bài toán phức tạp, như nhận dạng khuôn mặt, dịch ngôn ngữ, và lái xe tự động. Các ví dụ nổi bật là card Tesla K40 của Nvidia, card Radeon Instinct MI60 của AMD, và card GeForce RTX 3090 của Nvidia.

### Kiến trúc GPU
- Kiến trúc GPU là cách thức mà các đơn vị xử lý đồ họa (GPU) được thiết kế và hoạt động. Một GPU là một chip phần cứng có khả năng xử lý các tác vụ đồ họa nhanh chóng và hiệu quả, như hiển thị hình ảnh, video, hoạt ảnh và các hiệu ứng đồ họa khác. Một GPU thường có nhiều nhân xử lý (cores) hơn một CPU (bộ xử lý trung tâm), và mỗi nhân xử lý có thể thực hiện cùng một lệnh trên nhiều dữ liệu khác nhau. Điều này cho phép GPU xử lý song song (parallel processing), tức là xử lý nhiều tác vụ cùng một lúc.
- Một kiến trúc GPU thường bao gồm các thành phần sau:
    + **ALU (Arithmetic Logic Unit)**: Đây là phần quan trọng của GPU, nơi các phép tính số học và logic được thực hiện. ALU thực hiện các phép tính như cộng, trừ, nhân, chia và các phép tính logic như AND, OR, XOR.
    + **Memory**: GPU có bộ nhớ riêng để lưu trữ dữ liệu và các hướng dẫn xử lý. Bộ nhớ này bao gồm bộ nhớ VRAM (Video RAM) và bộ nhớ cache. VRAM được sử dụng để lưu trữ các dữ liệu hình ảnh và video, trong khi bộ nhớ cache được sử dụng để lưu trữ các dữ liệu tạm thời để tăng tốc độ xử lý.
    + **Rasterizer**: Đây là phần của GPU, có nhiệm vụ chuyển đổi các đối tượng 3D thành các hình ảnh 2D trên màn hình. Nó thực hiện các phép biến đổi hình học như phép chiếu, cắt, vẽ đường viền và điểm ảnh.
    + **Shader Cores**: Đây là các đơn vị xử lý đặc biệt trong GPU, được sử dụng để thực hiện các phép tính đồ họa phức tạp. Shader Cores có thể được chia thành các loại khác nhau như Vertex Shader, Geometry Shader và Pixel Shader, mỗi loại có nhiệm vụ xử lý các giai đoạn khác nhau của quá trình đồ họa.
    + **Bus Interface**: GPU kết nối với các thành phần khác trong hệ thống thông qua giao diện bus. Giao diện bus này cho phép truyền dữ liệu giữa GPU và CPU, bộ nhớ chính và các thành phần khác.
Cấu trúc và cấu tạo của GPU có thể khác nhau tùy thuộc vào nhà sản xuất và mục đích sử dụng. Các công nghệ và tính năng của GPU cũng được cải tiến liên tục để đáp ứng nhu cầu ngày càng cao của đồ họa và xử lý đa phương tiện.
- Một ví dụ về kiến trúc GPU là **CUDA**, *được phát triển bởi NVIDIA*. CUDA là một kiến trúc tính toán song song, *cho phép lập trình viên sử dụng các ngôn ngữ lập trình phổ biến như C, C++, Python để **viết các chương trình chạy trên GPU***. CUDA được sử dụng rộng rãi trong các lĩnh vực như trí tuệ nhân tạo, học máy, khoa học dữ liệu và đồ họa.

### Các loại kiến trúc GPU phổ biến
- GPU có thể được phân loại theo nhiều tiêu chí khác nhau, như nhà sản xuất, kiến trúc, công nghệ, tính năng, và cách kết nối. Một số loại kiến trúc GPU phổ biến hiện nay là:
    + **CUDA**: Đây là kiến trúc do NVIDIA phát triển, cho phép lập trình viên sử dụng các ngôn ngữ lập trình phổ biến như C, C++, Python để viết các chương trình chạy trên GPU. CUDA được sử dụng rộng rãi trong các lĩnh vực như trí tuệ nhân tạo, học máy, khoa học dữ liệu và đồ họa.
    + **OpenCL**: Đây là một nền tảng tính toán song song mở, cho phép lập trình viên sử dụng các ngôn ngữ lập trình như C, C++, Java để viết các chương trình chạy trên nhiều loại thiết bị khác nhau, bao gồm cả GPU. OpenCL được hỗ trợ bởi nhiều nhà sản xuất GPU như NVIDIA, AMD, Intel, và Apple.
    + **DirectX**: Đây là một bộ API đồ họa do Microsoft phát triển, cho phép lập trình viên sử dụng các ngôn ngữ lập trình như C#, C++, Visual Basic để viết các ứng dụng đồ họa trên Windows. DirectX hỗ trợ các tính năng đồ họa nâng cao như dò tia, shader, và bóng đổ.
    + **OpenGL**: Đây là một bộ API đồ họa mở, cho phép lập trình viên sử dụng các ngôn ngữ lập trình như C, C++, Java để viết các ứng dụng đồ họa trên nhiều nền tảng khác nhau, bao gồm cả Windows, Linux, Mac OS, và Android. OpenGL hỗ trợ các tính năng đồ họa cơ bản như vẽ hình, màu sắc, và kết cấu.
    + **Vulkan**: Đây là một bộ API đồ họa mới, được phát triển bởi Khronos Group, một tổ chức phi lợi nhuận. Vulkan là một phiên bản cải tiến của OpenGL, cho phép lập trình viên sử dụng các ngôn ngữ lập trình như C, C++, Rust để viết các ứng dụng đồ họa hiệu năng cao trên nhiều nền tảng khác nhau, bao gồm cả Windows, Linux, Mac OS, Android, và iOS. Vulkan hỗ trợ các tính năng đồ họa nâng cao như dò tia, shader, và bóng đổ.
- Đó là một số loại kiến trúc GPU phổ biến hiện nay. Ngoài ra, còn có một số loại kiến trúc GPU khác, như *Metal, Mantle, ROCm, và TensorRT*.

### How GPU works
- GPU xử lý dữ liệu theo các bước sau:
    + **Input**: GPU nhận dữ liệu đầu vào từ các nguồn khác nhau, như CPU, bộ nhớ, mạng, hoặc các thiết bị ngoại vi. Dữ liệu đầu vào có thể là các hình ảnh, video, âm thanh, văn bản, hoặc các dạng dữ liệu khác.
    + **Processing**: GPU sử dụng các nhân xử lý (cores) của mình để thực hiện các phép tính đồ họa hoặc tính toán song song trên dữ liệu đầu vào. GPU có thể chia dữ liệu đầu vào thành các khối nhỏ hơn, gọi là thread, và xử lý chúng một cách đồng thời. GPU cũng có thể sử dụng các công cụ và ngôn ngữ lập trình khác nhau, như CUDA, OpenCL, DirectX, OpenGL, hoặc Vulkan, để tạo ra các chương trình chạy trên GPU, gọi là kernel.
    + **Output**: GPU trả về dữ liệu đầu ra sau khi xử lý xong. Dữ liệu đầu ra có thể là các hình ảnh, video, âm thanh, văn bản, hoặc các dạng dữ liệu khác. Dữ liệu đầu ra có thể được gửi đến các đích khác nhau, như màn hình, loa, bộ nhớ, mạng, hoặc các thiết bị ngoại vi.

#### Load dữ liệu vào RAM & VRAM
- Bộ nhớ của CPU -> RAM
- Bộ nhớ của GPU -> VRAM

{% msg info Nếu GPU xử lý nhanh và thời gian truy cập VRAM chậm thì sao? %}

- Nếu thời gian GPU truy cập VRAM không đủ nhanh, thì GPU còn có một ***bộ nhớ*** nhỏ đặt ***trực tiếp trong GPU*** nữa gọi là **L2 Cache**, keyword của nó là “on-chip caches”.
- Thậm chí nếu vẫn không đủ nhanh thì GPU có thể truy cập vào một ***bộ nhớ*** nằm sát ngay ***cạnh các cores*** của GPU là **L1 Cache**
- Size của 2 cái bộ nhớ trên rất nhỏ, ví dụ L2 Cache của NVIDIA là GM204 chỉ có 2048 KB, L1 Cache như GM204 chỉ có 384 KB<br>![TEXT](/assets/img/collections/gpu-cached-memory.webp){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- Thật ra chúng ta còn bộ nhớ GPU dùng để lấy dữ liệu và xuất dữ liệu đã xử lý gọi là **Thanh Register**, GPU sẽ lấy dữ liệu từ Register, xử lý, rồi trả kết quả lại cho Register. Developer thường không cần quan tâm tới các bộ nhớ này.<br>![TEXT](/assets/img/collections/ram-vram-cachel1l2l3-register.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- Ngày nay, **GPU** rất phát triển vì vậy các công việc này thường được **xử lý một cách song song**.
- Thông thường, CPU hiện nay có **6-8 cores**, trong khi đó GPU lại *có từ hàng trăm đến **hàng ngàn cores** (không phức tạp bằng cpu-core)*, sau đây là một vài thông tin:
    + GTX 1050 có 640 cores trong khi GTX-1050Ti là **768 cores**
    + GTX 1060 3GB: 1152 cores và **1280 cores** cho phiên bản 6GB
    + GTX 1070 có **1920 cores**
    + GTX 1080 có 2560 cores (1080 Ti là **3584 cores**)

#### Render Pipeline

![TEXT](/assets/img/collections/render-pipeline.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Command Buffer

**CPU giao tiếp GPU thông qua Command Buffer** và hoạt động một cách song song, nếu CPU muốn thay đổi RenderState bằng lệnh SetPass Call hoặc vẽ mesh bằng lệnh DrawCall thì CPU sẽ đẩy vào trong Command Buffer. Sau khi xử lý xong công việc hiện tại, GPU lấy lệnh tiếp theo (theo nguyên tắc FIFO) trong buffer (nếu có) và thực thi.<br>![TEXT](/assets/img/collections/cpu-gpu-command-buffer.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

{% msg info Trong Unity3D, module UnityEngine.Rendering cũng có một class CommandBuffer hoạt động tương tự, chứa danh sách các lệnh mà graphics cần thực thi  %}