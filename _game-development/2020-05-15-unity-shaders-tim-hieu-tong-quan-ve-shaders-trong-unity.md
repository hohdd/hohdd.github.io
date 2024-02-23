---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Shaders: Tìm hiểu tổng quan Shaders trong Unity"
description: "Shaders: Tìm hiểu tổng quan Shaders trong Unity"

### HUMAN
header: "Shaders: Tìm hiểu tổng quan Shaders trong Unity"
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
collection: Graphic # this for AMP related post
### category: dùng để group collection
category: Graphic

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Tìm hiểu tổng quan Shaders trong Unity

### Introduction

Sơ đồ bên dưới thể hiện 3 Thực thể khác nhau trong quy trình rendering của Unity3D.<br>
![TEXT](/assets/img/collections/3d-shader.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- **3D Model**: là tập hợp **tọa độ các đỉnh (Vertex)**, chúng được nối với nhau tạo thành hình tam giác. Mỗi đỉnh có thể chứa một số thông tin khác như Color, Normal, UV data
- **Material**: là phần fill vào các hình tam giác tạo bởi các Vertex. Các vật liệu khác nhau có thể chia sẻ cùng một shader. Những thông tin trong Inspector khi một Material được chọn gồm: màu **Albedo, Normal Map, Height Map, Occlusion, Emission...** [chi tiết ở đây](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterRenderingMode.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Shaders core concepts: Các nguyên tắc cơ bản để hiểu và làm việc với trình đổ bóng trong Unity.
#### Shaders introduction: Thông tin giới thiệu về shader và thuật ngữ chính.
- Shader là một chương trình chạy trên GPU.
- Các loại shader: Trong Unity, shader được chia thành ba loại lớn. Bạn sử dụng mỗi danh mục cho những mục đích khác nhau và làm việc với chúng một cách khác nhau.
    + "Shaders" là một phần của đường dẫn đồ họa là loại shader phổ biến nhất. Họ thực hiện các phép tính xác định màu của pixel trên màn hình. Trong Unity, bạn thường làm việc với loại shader này bằng cách sử dụng các đối tượng Shader .
    + "Compute shaders" thực hiện các phép tính trên GPU, bên ngoài quy trình đồ họa thông thường.
    + "Ray tracing shaders" thực hiện các phép tính liên quan đến dò tia.
- Thuật ngữ:
    + shader or shader program - một chương trình chạy trên GPU. Trừ khi có quy định khác, điều này có nghĩa là các chương trình đổ bóng là một phần của quy trình đồ họa.
    + Shader object - một thể hiện của lớp Shader. Đối tượng Shader là một trình bao bọc cho các chương trình đổ bóng và các thông tin khác.
    + ShaderLab - một ngôn ngữ dành riêng cho Unity để viết shader.
    + Shader Graph - một công cụ tạo shader mà không cần viết mã.
    + shader asset - một tệp có phần mở rộng .shader trong dự án Unity của bạn. Nó định nghĩa một đối tượng Shader.
    + Shader Graph asset - một tệp trong dự án Unity của bạn. Nó định nghĩa một đối tượng Shader.

#### The Shader class: Tổng quan về lớp Shader, hoạt động như một trình bao bọc cho các chương trình đổ bóng đồ họa thông thường.
- Đối tượng Shader là một cách làm việc dành riêng cho Unity với các chương trình đổ bóng; nó là một trình bao bọc cho các chương trình đổ bóng và các thông tin khác. 
- Nó cho phép bạn xác định nhiều chương trình đổ bóng trong cùng một tệp và cho Unity biết cách sử dụng chúng.
- Đối tượng Shader chứa các chương trình đổ bóng (shader programs), hướng dẫn thay đổi cài đặt (settings) trên GPU (gọi chung là trạng thái kết xuất - render state) và thông tin cho Unity biết cách sử dụng chúng.
- Bạn sử dụng các đối tượng Shader với vật liệu (materials) để xác định sự xuất hiện của Scene của bạn.
- Bạn có thể tạo các đối tượng Shader theo hai cách. Mỗi loại có loại asset riêng:
    + Bạn có thể viết mã để tạo nội dung đổ bóng, đây là tệp văn bản có phần mở rộng .shader.
    + Bạn có thể sử dụng Biểu đồ đổ bóng (Shader Graph) để tạo nội dung Biểu đồ đổ bóng (Shader Graph asset).
- Bên trong một đối tượng Shader:
    + Một đối tượng Shader có cấu trúc lồng nhau. 
    + Nó tổ chức thông tin thành các cấu trúc được gọi là "SubShaders" và "Passes". 
    + Nó tổ chức các chương trình đổ bóng thành các biến thể đổ bóng (shader variants).
- Shader object: Một đối tượng Shader chứa:
    + Thông tin về chính nó, chẳng hạn như tên của nó
    + Một đối tượng Shader dự phòng tùy chọn mà Unity sẽ sử dụng nếu nó không thể sử dụng đối tượng này
    + Một hoặc nhiều SubShader
- SubShaders: SubShader cho phép bạn tách đối tượng Shader của mình thành các phần tương thích với phần cứng khác nhau, quy trình kết xuất và cài đặt thời gian chạy. Một SubShader chứa:
    + Thông tin về phần cứng, đường dẫn kết xuất và cài đặt thời gian chạy mà SubShader này tương thích
    + Thẻ SubShader, là cặp khóa-giá trị cung cấp thông tin về SubShader
    + Một hoặc nhiều "Passes"
- Passes: Một Pass chứa:
    + Thẻ Pass, là cặp khóa-giá trị cung cấp thông tin về Pass
    + Hướng dẫn cập nhật trạng thái render trước khi chạy các chương trình đổ bóng của nó
    + Các chương trình đổ bóng (Shader programs), được tổ chức thành một hoặc nhiều biến thể đổ bóng (shader variants)
- Shader variants:
    + Các chương trình đổ bóng (shader programs) có trong một Pass được sắp xếp thành các biến thể đổ bóng (shader variants). Các biến thể này chia sẻ mã chung nhưng có chức năng khác nhau khi bật hoặc tắt một từ khóa (keyword) nhất định.
    + Số lượng biến thể đổ bóng (shader variants) trong Pass tùy thuộc vào số lượng từ khóa (keywords) bạn xác định trong mã đổ bóng (shader code) và nền tảng đích (target platform). Mỗi Pass chứa ít nhất một biến thể (variant).

#### Shader assets: Thông tin về nội dung đại diện cho một phiên bản của lớp Shader.
- Creating a new shader asset: Assets > Create > Shader
- Import settings: Phần Cài đặt nhập của Trình kiểm tra cho phép bạn đặt họa tiết mặc định cho nội dung trình đổ bóng. Bất cứ khi nào có Vật liệu mới được tạo bằng trình đổ bóng này, các họa tiết này sẽ được gán tự động.
- Imported object: Phần Đối tượng được nhập của Trình kiểm tra cho phép bạn xem và chỉnh sửa các cài đặt liên quan đến chính đối tượng Shader cũng như cách trình biên dịch shader xử lý nó.
- Show generated code button: hiển thị mã mà Unity tạo từ tệp nguồn đơn giản hóa của bạn. Nếu muốn tùy chỉnh mã được tạo, bạn chỉ cần sao chép và dán mã đó vào tệp nguồn trình đổ bóng của mình.<br>![TEXT](https://docs.unity3d.com/uploads/Shaders/Inspector-Shader.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

#### Shader compilation: Cách thức và thời điểm Unity biên dịch các shader.
- Mỗi khi build, Unity Editor sẽ biên dịch tất cả các shader mà bản dựng của bạn yêu cầu: mọi shader variant cần thiết, cho mọi API đồ họa.
- Khi bạn đang làm việc trong Unity Editor, Trình chỉnh sửa không biên dịch trước mọi thứ. Điều này là do việc biên dịch mọi biến thể cho mọi API đồ họa có thể mất rất nhiều thời gian. Thay vào đó, Unity Editor thực hiện điều này:
    + Khi nhập nội dung shader, nó sẽ thực hiện một số xử lý tối thiểu (chẳng hạn như tạo Surface Shader).
    + Khi cần hiển thị một biến thể đổ bóng (shader variant), nó sẽ kiểm tra thư mục Library/ShaderCache.
    + Nếu nó tìm thấy một biến thể shader được biên dịch trước đó sử dụng mã nguồn giống hệt nhau thì nó sẽ sử dụng biến thể đó.
    + Nếu không tìm thấy kết quả khớp, nó sẽ biên dịch biến thể đổ bóng cần thiết và lưu kết quả vào bộ đệm. (Lưu ý: Nếu bạn bật tính năng biên dịch trình đổ bóng không đồng bộ "Asynchronous shader compilation", nó sẽ thực hiện việc này ở chế độ nền và hiển thị trình đổ bóng giữ chỗ trong thời gian chờ đợi.)
- Quá trình biên dịch Shader được thực hiện bằng quy trình có tên **UnityShaderCompiler**. Nhiều process **UnityShaderCompiler** có thể được khởi động (thường là một process cho mỗi lõi CPU trong máy của bạn), để việc biên dịch shader tại thời điểm xây dựng trình phát có thể được thực hiện song song. Trong khi Editor không biên dịch các shader, trình biên dịch sẽ không làm gì và không tiêu tốn tài nguyên máy tính.
- Thư mục bộ nhớ đệm của shader có thể trở nên khá lớn nếu bạn có nhiều shader được thay đổi thường xuyên. Việc xóa thư mục này là an toàn; nó chỉ khiến Unity biên dịch lại các biến thể đổ bóng.
- Tại thời điểm build, tất cả các biến thể đổ bóng “chưa được biên dịch” đều được biên dịch để chúng có trong dữ liệu trò chơi ngay cả khi Editor không sử dụng chúng.
- Trình biên dịch shader khác nhau: Các nền tảng khác nhau sử dụng các trình biên dịch shader khác nhau để biên dịch chương trình shader như sau:
    + Các nền tảng sử dụng **DirectX** sử dụng trình biên dịch **FXC HLSL** *của Microsoft.*
    + Các nền tảng sử dụng **OpenGL** (Core & ES) sử dụng trình biên dịch **FXC HLSL** *của Microsoft*, sau đó là *dịch mã byte sang GLSL* bằng **HLSLcc**.
    + Các nền tảng sử dụng **Metal** sử dụng trình biên dịch **FXC HLSL** *của Microsoft*, sau đó là *dịch mã byte sang Metal* bằng **HLSLcc**.
    + Các nền tảng sử dụng **Vulkan** sử dụng trình biên dịch **FXC HLSL** *của Microsoft*, sau đó là *dịch mã byte sang SPIR-V*, sử dụng **HLSLcc**.
    + Các nền tảng khác, chẳng hạn như **nền tảng Console**, *sử dụng trình biên dịch tương ứng của chúng.*
    + Bộ đổ bóng bề mặt (**Surface Shaders**) sử dụng **HLSL** và **MojoShader** cho bước phân tích tạo mã (code generation analysis).
- Bạn có thể định cấu hình các cài đặt trình biên dịch đổ bóng khác nhau bằng cách sử dụng chỉ thị pragma (**pragma directives**: #pragma target 3.0, #pragma exclude_renderers vulkan...).
- The Caching Shader Preprocessor:
    + Quá trình biên dịch Shader bao gồm một số bước. Một trong những bước đầu tiên là tiền xử lý. Trong bước này, một chương trình được gọi là bộ tiền xử lý sẽ chuẩn bị mã nguồn đổ bóng cho trình biên dịch.
    + Trong các phiên bản trước của Unity, Editor đã sử dụng bộ tiền xử lý do shader compiler cung cấp cho nền tảng hiện tại. Giờ đây, Unity sử dụng bộ tiền xử lý của riêng mình, còn được gọi là Bộ tiền xử lý bộ nhớ đệm (**Caching Shader Preprocessor**).
    + Bộ tiền xử lý bộ nhớ đệm được tối ưu hóa để nhập và biên dịch bộ đổ bóng nhanh hơn. Nó hoạt động bằng cách lưu vào bộ nhớ đệm dữ liệu tiền xử lý trung gian, do đó, Editor chỉ cần phân tích cú pháp các tệp bao gồm khi nội dung của chúng thay đổi, điều này giúp việc biên dịch nhiều biến thể của cùng một trình đổ bóng hiệu quả hơn.
- AssetBundles and shaders:
    + Nếu bạn sử dụng AssetBundles, Unity có thể biên dịch các trình đổ bóng trùng lặp nếu bạn tham chiếu một trình đổ bóng trong hai hoặc nhiều đối tượng. Ví dụ:
        - Material trong AssetBundle và Material trong cảnh được xây dựng tham chiếu cùng một shader.
        - Nhiều AssetBundle chứa các Material tham chiếu cùng một shader bên ngoài AssetBundle.
    + Điều này có thể làm tăng mức sử dụng bộ nhớ và không gian lưu trữ của trình đổ bóng cũng như phá vỡ việc "**draw call batching**".
    + Để tránh điều này, bạn có thể sử dụng các phương pháp sau:
        - Trước tiên hãy tải một AssetBundle chứa tất cả các trình đổ bóng của bạn, sau đó tải và khởi tạo nội dung AssetBundle tham chiếu các trình đổ bóng. Xem Phần phụ thuộc của AssetBundle để biết thêm thông tin.
        - Cấu trúc AssetBundles của bạn để giảm thiểu sự trùng lặp. Xem Sao chép nội dung để biết thêm thông tin.
    + Bạn có thể thêm các vật liệu và bộ sưu tập biến thể đổ bóng (**shader variant collections**: *A shader variant collection is effectively a list of shader variants*) vào AssetBundle để chỉ định những biến thể đổ bóng nào cần đưa vào.
    + Nếu bạn tạo một AssetBundle duy nhất, **một số trình đổ bóng có thể vẫn còn trong bộ nhớ ngay cả khi chúng không còn cần thiết nữa** vì bạn không thể dỡ bỏ một phần AssetBundle. Bạn có thể tránh điều này bằng cách tạo một AssetBundle riêng cho từng nhóm trình đổ bóng mà bạn sử dụng cùng nhau, ví dụ như AssetBundle 'rừng' và AssetBundle 'sa mạc'. Xem "**Managing loaded AssetBundles**", or "**Memory management in the Addressables system**" nếu bạn sử dụng Địa chỉ (**Addressables**).
- Build time stripping (Xây dựng tước thời gian): While building the game, Unity can detect that some of the internal shader variants are not used by the game, and exclude (“strip”) them from build data.
- Biên dịch shader không đồng bộ: là một tính năng chỉ dành cho Trình soạn thảo (Editor), có thể cải thiện quy trình làm việc của bạn khi bạn gặp các vấn đề phức tạp.

#### Shader loading: Cách thức và thời điểm Unity tải shader.
- Unity tải các shader đã biên dịch từ ứng dụng đã xây dựng của bạn theo cách sau:
    + Khi Unity tải một cảnh hoặc tài nguyên thời gian chạy, nó sẽ tải tất cả trình đổ bóng đã biên dịch shader variants của cảnh hoặc tài nguyên vào bộ nhớ CPU.
    + Theo mặc định, Unity giải nén tất cả các shader variants vào một vùng bộ nhớ CPU khác. Bạn có thể kiểm soát lượng bộ nhớ đổ bóng sử dụng trên các nền tảng khác nhau.
    + Lần đầu tiên Unity cần kết xuất hình học bằng cách sử dụng một shader variant, Unity sẽ chuyển shader variant và dữ liệu của nó tới API đồ họa và trình điều khiển đồ họa.
    + Trình điều khiển đồ họa (graphics driver) tạo một phiên bản dành riêng cho GPU của shader variant và tải nó lên GPU.
- Cách tiếp cận này (hoạt động Load ở trên) đảm bảo rằng Unity và trình điều khiển đồ họa tránh xử lý và lưu trữ tất cả các biến thể đổ bóng trên GPU trước khi Unity cần chúng. Tuy nhiên, có thể thấy hiện tượng dừng khi trình điều khiển đồ họa tạo biến thể đổ bóng dành riêng cho GPU lần đầu tiên.
- Unity lưu trữ từng shader variant dành riêng cho GPU để tránh tình trạng ngừng hoạt động khác khi Unity cần lại shader variant.
- Unity loại bỏ hoàn toàn shader variant khỏi bộ nhớ CPU và GPU khi không còn bất kỳ đối tượng nào tham chiếu shader variant.
- Which shaders Unity loads?
    + Unity chỉ tải các trình đổ bóng được biên dịch tương thích với cấp độ đồ họa, phần cứng và API đồ họa của nền tảng.
    + Nếu Unity không thể tìm thấy biến thể đổ bóng cần thiết vì bạn hoặc Unity đã loại bỏ biến thể đổ bóng khỏi ứng dụng đã xây dựng của bạn, Unity sẽ cố gắng chọn một biến thể đổ bóng tương tự. Nếu Unity không thể tìm thấy một biến thể shader tương tự, nó sẽ sử dụng shader lỗi màu đỏ tươi.
    + Bạn có thể bật tính năng khớp biến thể đổ bóng nghiêm ngặt để ngăn Unity cố gắng chọn một biến thể đổ bóng tương tự.
- How Unity selects a subshader?
    + Nếu một **shader variant** chứa nhiều **subshaders**, Unity sẽ cố gắng chọn và sử dụng một subshaders duy nhất tương thích với tất cả các mục sau:
        - Phần cứng của nền tảng.
        - Mức độ chi tiết ShaderLab hiện tại (LOD).
        - Đường dẫn kết xuất đang hoạt động (render pipeline).
    + Unity tìm kiếm subshader tương thích đầu tiên trong số các thành phần sau theo thứ tự sau:
        - Các subshader theo thứ tự chúng xuất hiện trong shader.
        - Các subshader trong bất kỳ đối tượng đổ bóng dự phòng nào, theo thứ tự chúng xuất hiện trong các đối tượng đổ bóng.
        - Nếu Unity không thể tìm thấy trình đổ bóng phụ tương thích, nó sẽ sử dụng trình đổ bóng lỗi màu đỏ tươi.
        - Bạn có thể đặt subshaders tương thích với phần cứng bằng cách sử dụng thẻ ShaderLab. Xem ShaderLab: gán thẻ cho SubShader (assigning tags to a SubShader).
- Prewarming shader variants: Để tránh tình trạng ngừng hoạt động có thể nhìn thấy vào những thời điểm cần nhiều hiệu năng, Unity có thể yêu cầu trình điều khiển đồ họa tạo bản trình bày GPU của các biến thể đổ bóng trước khi chúng cần đến lần đầu tiên. Điều này được gọi là làm ấm trước (**Prewarming**).
    + Bạn có thể làm ấm trước (**Prewarming**) bằng những cách sau:
        - Làm ấm trước bộ sưu tập đối tượng Shader hoặc biến thể shader bằng cách sử dụng API **Experimental.Rendering.ShaderWarmup**.
        - Làm ấm trước bộ sưu tập biến thể đổ bóng bằng cách sử dụng API **ShaderVariantCollection.WarmUp**.
        - Làm ấm trước tất cả các biến thể của tất cả đối tượng Shader hiện có trong bộ nhớ bằng API **Shader.WarmupAllShaders**.
    + Bạn cũng có thể thêm các "**shader variant collections**" vào phần "**Preloaded shaders**" của cửa sổ Cài đặt đồ họa (**Graphics Settings**). Unity sử dụng API ShaderVariantCollection.WarmUp để tải và làm ấm trước các bộ sưu tập biến thể đổ bóng khi ứng dụng đã xây dựng của bạn khởi động.
- Kiểm soát lượng bộ nhớ đổ bóng sử dụng:
    + Trong ứng dụng đã built, Unity lưu trữ một số '**chunks**' dữ liệu biến thể trình đổ bóng nén. Mỗi đoạn chứa nhiều biến thể đổ bóng. Khi Unity tải một cảnh trong thời gian chạy, nó sẽ tải tất cả các phần của cảnh đó vào bộ nhớ CPU và giải nén chúng.
    + Để giảm mức sử dụng bộ nhớ trên ***các nền tảng có bộ nhớ hạn chế***, bạn có thể giới hạn kích thước của các '**chunks**' và số lượng các '**chunks**' được giải nén mà Unity lưu giữ trong bộ nhớ. Để làm điều này: Player settings > Other Settings > Shader Variant Loading

#### Conditionals, Branching, Shader variants, Shader keywords, Shader variant collections: Giới thiệu về các khái niệm của Shader cũng như thông tin về cách làm việc với chúng.
##### Conditionals in shaders
- Đôi khi, bạn muốn có cùng một shader làm những việc khác nhau trong những hoàn cảnh khác nhau. Ví dụ: bạn có thể muốn định cấu hình các cài đặt khác nhau cho các vật liệu khác nhau, xác định chức năng cho phần cứng khác nhau hoặc tự động thay đổi hoạt động của trình đổ bóng khi chạy. Bạn cũng có thể muốn tránh thực thi mã tốn kém về mặt tính toán khi không cần thiết, chẳng hạn như đọc kết cấu, đầu vào đỉnh, bộ nội suy hoặc vòng lặp.
- Bạn có thể sử dụng các điều kiện để xác định hành vi mà GPU chỉ thực thi trong một số điều kiện nhất định.
- Different types of conditionals: Để sử dụng các điều kiện trong trình đổ bóng, bạn có thể sử dụng các phương pháp sau:
    + **Static branching** (Phân nhánh tĩnh): trình biên dịch đổ bóng đánh giá mã có điều kiện tại thời điểm biên dịch (#if, #elif, #else, #endif).
    + **Dynamic branching** (Phân nhánh động): GPU đánh giá mã có điều kiện khi chạy (Bạn có thể sử dụng **Shader keywords** để phân nhánh động).
    + **Shader variant** (Các biến thể đổ bóng): Unity sử dụng phân nhánh tĩnh để biên dịch mã nguồn shader thành nhiều chương trình shader. Unity sau đó sử dụng chương trình đổ bóng phù hợp với các điều kiện khi chạy.
- When to use which type of conditional?
    + Không có cách tiếp cận “one size fits all” đối với các điều kiện trong trình đổ bóng và bạn nên xem xét ưu điểm và nhược điểm của từng phương pháp đối với một trình đổ bóng nhất định, trong một dự án nhất định.
    + Việc sử dụng điều kiện nào (conditional) tùy thuộc vào thời điểm bạn cần shader chuyển sang một nhánh mã khác:
        - Chuyển nhánh mã trong Editor (inspector của Material, VD: Thêm phản xạ gương vào một số trường hợp của Material nhưng không thêm vào các trường hợp khác...)
        - Chuyển nhánh mã khi chạy (VD: Thay đổi Material khi người dùng thay đổi cài đặt chất lượng...)

##### Branching in shaders
- Phân nhánh là một cách đưa hành vi có điều kiện vào shader code.
    + Static branching: Bạn có thể sử dụng phân nhánh tĩnh trong trình đổ bóng của mình theo những cách sau:
        - Sử dụng các chỉ thị tiền xử lý #if, #elif, #else và #endif hoặc các chỉ thị tiền xử lý #ifdef và #ifndef để tạo các nhánh tĩnh.
        - Sử dụng câu lệnh if để đánh giá giá trị hằng số tại thời điểm biên dịch. Mặc dù các câu lệnh if cũng có thể được sử dụng cho các nhánh động, nhưng trình biên dịch sẽ phát hiện giá trị hằng số thời gian biên dịch và thay vào đó tạo một nhánh tĩnh.
        - Unity cung cấp các macro tích hợp (Built-in macros: SHADER_API_VULKAN, SHADER_API_METAL... UNITY_NO_RGBM, UNITY_NO_LINEAR_COLORSPACE...) cho một số hằng số thời gian biên dịch mà bạn có thể sử dụng với các nhánh tĩnh.
        - Lưu ý: Phân nhánh tĩnh chỉ khả dụng trong các trình đổ bóng được mã hóa bằng tay (**hand-coded**). Bạn không thể tạo các nhánh tĩnh trong **Shader Graph**.
    + Dynamic branching: Bạn có thể sử dụng phân nhánh động trong trình đổ bóng của mình theo những cách sau:
        - Trong **hand-coded** shaders: **shader keywords**, **if** statement
        - Trong **Shader Graph** (Shader Graph cho phép bạn xây dựng các shader một cách trực quan. Thay vì viết mã, bạn tạo và kết nối các nút trong khung biểu đồ): sử dụng "**Branch Node**"

##### Shader variants
- Các Shader variant, đôi khi còn được gọi là shader hoán vị (shader permutations), là một cách đưa hành vi có điều kiện vào mã đổ bóng (shader code).
- Unity biên dịch các tệp nguồn shader thành các chương trình shader. Mỗi chương trình đổ bóng được biên dịch có một hoặc nhiều **variants**: các phiên bản khác nhau của **shader program** cho các điều kiện khác nhau. Trong thời gian chạy, Unity sử dụng **variant** phù hợp với yêu cầu hiện tại. Bạn định cấu hình các biến thể bằng **shader keywords**.
- Các shader có số lượng biến thể lớn được gọi là “mega shader” hoặc “uber shader”. **Standard Shader** của Unity là một ví dụ về shader như vậy.
- Ưu điểm chính của các biến thể đổ bóng là chúng cho phép bạn sử dụng các điều kiện thời gian chạy trong các chương trình đổ bóng mà không bị ảnh hưởng đến hiệu suất GPU của việc phân nhánh động. Nhược điểm chính của các biến thể shader là số lượng lớn trong số chúng có thể dẫn đến các vấn đề về thời gian xây dựng và hiệu suất thời gian chạy.

{% msg danger Cảnh báo: Rất dễ vô tình tạo ra số lượng quá lớn các biến thể đổ bóng, điều này có thể dẫn đến các vấn đề đáng kể về hiệu suất. Do đó, điều rất quan trọng là phải hiểu cách Unity xác định số lượng biến thể của trình đổ bóng, cách loại trừ các biến thể không cần thiết (“strip”) khỏi quá trình biên dịch và khi nào nên sử dụng các loại điều kiện khác trong trình đổ bóng. %}

- **Number of shader variants**: Tại thời điểm xây dựng, Unity biên dịch một bộ biến thể đổ bóng cho từng API đồ họa cho mục tiêu xây dựng hiện tại. Số lượng biến thể cho mỗi sự kết hợp giữa API đồ họa và mục tiêu xây dựng tùy thuộc vào tệp nguồn trình đổ bóng và việc bạn sử dụng từ khóa trình đổ bóng. Bạn có thể kiểm tra xem bạn có bao nhiêu biến thể shader với "**Currently tracked**" trong **Edit > Project Settings > Graphics > Shader Loading**. Hoặc trong **Editor.log** tìm kiếm **Compiling shader** để đến phần thông tin được log ra.
- **Keywords that affect a shader program**: Số lượng biến thể mà Unity biên dịch **có thể tăng rất nhanh** khi bạn thêm nhiều bộ từ khóa biến thể đổ bóng. Thuật ngữ cho sự tăng trưởng rất nhanh này là **sự bùng nổ tổ hợp**.
    + Từ khóa biến thể của shader được khai báo trong tệp nguồn cho shader đó (Declaring shader keywords).
    + Bộ từ khóa shader mà Unity tự động thêm vào.

##### Shader keywords
- Shader keywords cho phép bạn sử dụng hành vi có điều kiện trong shader của mình mã. Bạn có thể tạo các trình đổ bóng chia sẻ một số mã chung nhưng có chức năng khác khi bật hoặc tắt một từ khóa nhất định.
- Bạn có thể sử dụng từ khóa shader với phân nhánh động hoặc với các biến thể Shader. Trước khi bạn sử dụng từ khóa shader, điều quan trọng là phải hiểu cách hoạt động của các kỹ thuật này và kỹ thuật nào phù hợp với dự án của bạn.

###### Using shader keywords:
+ Declaring shader keywords:
    - Bạn khai báo từ khóa shader theo bộ. Một tập hợp chứa các từ khóa loại trừ lẫn nhau.
        {% msg warning Lưu ý: Trong <strong>Shader Graph</strong>, thuật ngữ này khác: <i>a set of keywords</i> được gọi là <strong>Keyword</strong> và các từ khóa trong tập hợp (<i>keywords in a set</i>) được gọi là trạng thái (<strong>states</strong>). Nội bộ, chức năng là như nhau: Unity biên dịch chúng theo cách giống nhau, bạn làm việc với chúng theo cách tương tự với tập lệnh C#. %}
    - Cách bạn khai báo từ khóa shader ảnh hưởng đến một số thứ:
        + **Type** (kiểu) ảnh hưởng đến việc liệu Unity có sử dụng từ khóa để tạo các biến thể đổ bóng hay không hoặc liệu Unity có sử dụng chúng để phân nhánh động hay không.
        + **Scope** (phạm vi) ảnh hưởng đến việc các từ khóa là cục bộ hay toàn cầu. Điều này xác định hành vi của họ trong thời gian chạy.
        + **Stage** (giai đoạn) ảnh hưởng đến giai đoạn đổ bóng mà từ khóa ảnh hưởng (nếu có).
+ Making behavior conditional with shader keywords:
    - Bạn có thể sử dụng các từ khóa của trình đổ bóng để tạo các phần của trình đổ bóng có điều kiện, sao cho một số hành vi nhất định chỉ thực thi khi một từ khóa nhất định ở trạng thái nhất định.
    - Để làm điều này:
        + hand-coded shaders:
            ```csharp
            #pragma multi_compile QUALITY_LOW QUALITY_MED QUALITY_HIGH
            if (QUALITY_LOW)
            {
                // code for low quality setting
            }
            ```
        + Shader Graph: sử dụng **Keyword node**
+ Enabling and disabling shader keywords:
    - Bạn có thể bật hoặc tắt từ khóa đổ bóng. Khi bạn bật hoặc tắt từ khóa shader, shader sẽ hiển thị hành vi có điều kiện thích hợp.
    - Có hai cách để bật và tắt từ khóa shader:
        + Sử dụng tập lệnh trong thời gian chạy hoặc trong Unity Editor xem [Using shader keywords with C# scripts](https://docs.unity3d.com/Manual/shader-keywords-scripts.html){:.hvr-float-shadow rel="nofollow" target="_blank"}
        + Sử dụng Inspector Material trong Unity Editor. (Shader Graph => Exposed property; hand-coded => MaterialPropertyDrawer: [Toggle], [KeywordEnum])

###### Unity’s predefined shader keywords:
+ Unity sử dụng các bộ từ khóa shader được xác định trước để tạo các biến thể shader hỗ trợ chức năng chung.
+ Unity thêm các bộ từ khóa biến thể shader sau vào thời gian biên dịch:
    - Theo mặc định, Unity thêm bộ từ khóa này vào tất cả các chương trình đổ bóng đồ họa: *STEREO_INSTANCING_ON, STEREO_MULTIVIEW_ON, STEREO_CUBEMAP_RENDER_ON, UNITY_SINGLE_PASS_STEREO*
    - Theo mặc định, Unity thêm bộ từ khóa này vào Standard Shader: *LIGHTMAP_ON, DIRLIGHTMAP_COMBINED, DYNAMICLIGHTMAP_ON, LIGHTMAP_SHADOW_MIXING, SHADOWS_SHADOWMASK*
    - Trong *Built-in Render Pipeline*, nếu dự án của bạn sử dụng các cài đặt **TIER settings** khác nhau, Unity thêm bộ từ khóa này vào tất cả các trình đổ bóng đồ họa: UNITY_HARDWARE_TIER1, UNITY_HARDWARE_TIER2, UNITY_HARDWARE_TIER3

###### Shader keyword limits:
+ Unity có thể sử dụng tới 4.294.967.294 từ khóa shader toàn cầu. Các trình đổ bóng riêng lẻ và các trình đổ bóng điện toán có thể sử dụng tối đa 65.534 từ khóa trình đổ bóng cục bộ.
+ Nếu Unity gặp một từ khóa shader có cùng tên nhiều lần, nó chỉ được tính vào giới hạn một lần.
+ Nếu một trình đổ bóng sử dụng tổng cộng hơn 128 từ khóa thì nó sẽ phải chịu một mức phạt nhỏ về hiệu suất thời gian chạy; do đó, tốt nhất là giữ số lượng từ khóa ở mức thấp. Unity luôn dành 4 từ khóa cho mỗi shader.

###### Using shader keywords with C# scripts
- Khi Unity đại diện cho các từ khóa shader trong C#, nó sử dụng khái niệm **local shader keywords** và **global shader keywords**.
- Từ khóa shader cục bộ (**local shader keywords**) bao gồm tất cả các từ khóa mà bạn khai báo trong tệp nguồn shader. Từ khóa trình đổ bóng cục bộ *ảnh hưởng đến một trình đổ bóng riêng lẻ hoặc trình đổ bóng điện toán*. Từ khóa cục bộ có thể có phạm vi cục bộ hoặc toàn cầu, điều này ảnh hưởng đến việc liệu chúng có thể bị ghi đè bởi từ khóa đổ bóng toàn cầu hay không.
- Từ khóa đổ bóng toàn cầu (**global shader keywords**) **đóng vai trò ghi đè cho từ khóa đổ bóng cục bộ**. Bạn không khai báo những thứ này trong các tệp nguồn shader; **chúng chỉ tồn tại trong mã C#**. Từ khóa đổ bóng toàn cầu *có thể ảnh hưởng đến nhiều trình đổ bóng và tính toán các trình đổ bóng cùng một lúc*.
{% msg success Nên đặt tên Shader Keywords <strong>theo cách làm giảm khả năng xung đột</strong>. BEM (Block, Element, Modifers : .opinions-box__text-input) > S.E.M (Scope, Elements, Modifers) %}
- How local and global shader keywords interact
    + Khi từ khóa shader toàn cầu và cục bộ có cùng tên có trạng thái khác nhau, Unity sử dụng thuộc tính isOverridable của LocalKeyword để xác định xem từ khóa được bật hay tắt cho một shader tài liệu hoặc máy tính riêng lẻ. isOverridable là đúng nếu từ khóa được khai báo ở phạm vi toàn cục và sai nếu nó được khai báo ở phạm vi cục bộ.
    + Khi isOverridable là TRUE: Nếu một từ khóa chung có cùng tên tồn tại và được bật, Unity sẽ sử dụng trạng thái của từ khóa chung. Mặt khác, Unity sử dụng trạng thái của từ khóa cục bộ.
    + Khi isOverridable FALSE: Unity luôn sử dụng trạng thái của từ khóa cục bộ.
    + Do đó, để hiểu liệu từ khóa shader được bật hay tắt cho từng vật liệu hoặc shader máy tính riêng lẻ, bạn phải kiểm tra trạng thái của thuộc tính isOverridable và trạng thái từ khóa chung và/hoặc cục bộ.

###### Using shader keywords with the material Inspector
- Trong Unity Editor, khi bạn xem tài liệu trong Trình kiểm tra tài liệu , bạn có thể bật và tắt trình đổ bóng cục bộ của nó từ khóa. Điều này hữu ích vì hai lý do:
    + Nó cho phép các nghệ sĩ dễ dàng đặt các giá trị từ khóa khác nhau cho các vật liệu khác nhau mà không cần sử dụng mã.
    + Khi bạn bật một từ khóa bằng [KeywordEnum] MaterialPropertyDrawer, Unity sẽ tự động vô hiệu hóa các từ khóa khác trong một bộ. Điều này đảm bảo rằng chính xác một từ khóa trong một bộ được bật bất kỳ lúc nào.

###### Shader variant stripping
- Bạn có thể ngăn chặn các **Shader variant** khỏi bị **compiled**. Điều này được gọi là **stripping**. Việc loại bỏ các biến thể không cần thiết có thể giảm đáng kể thời gian xây dựng, kích thước tệp, trình đổ bóng thời gian tải và mức sử dụng bộ nhớ thời gian chạy. Trong các dự án lớn hơn hoặc các dự án có trình đổ bóng phức tạp, đây là một yếu tố rất quan trọng cần cân nhắc.

###### Shader variant collections
- **shader variant collection** thực chất là một danh sách các **shader variant collection**. Sử dụng các bộ sưu tập biến thể đổ bóng để làm ấm trước (**prewarm**) các biến thể đổ bóng hoặc để đảm bảo rằng các biến thể đổ bóng được yêu cầu trong thời gian chạy nhưng không được tham chiếu trong một cảnh không bị loại trừ (**stripped**) khỏi bản dựng (**build**) của bạn.

#### Replacing shaders at runtime: Trong Đường ống kết xuất tích hợp (Built-in Render Pipeline), bạn có thể nói với Camera để thay đổi trình đổ bóng mà nó sử dụng để hiển thị hình dạng nhất định khi chạy.
- Việc thay thế Shader được thực hiện từ các tập lệnh bằng chức năng **Camera.RenderWithShader** hoặc **Camera.SetReplacementShader**. Cả hai chức năng đều có một **shader** và một **replacementTag**.
- Nó hoạt động như thế này: máy ảnh hiển thị cảnh như bình thường. Các đối tượng vẫn sử dụng **materials** của chúng, nhưng **shader** mà chúng sử dụng sẽ thay đổi.

#### Compute shaders: Làm việc với các Compute shaders trong Unity.
- Trình đổ bóng tính toán (**Compute shaders**) là các chương trình shader chạy trên GPU, nằm ngoài quy trình kết xuất thông thường (**rendering pipeline**).
- Chúng có thể được sử dụng cho các thuật toán GPGPU song song trên diện rộng hoặc để tăng tốc các phần của quá trình kết xuất trò chơi. Để sử dụng chúng một cách hiệu quả, thường cần có kiến ​​thức chuyên sâu về kiến ​​trúc GPU và các thuật toán song song; cũng như kiến ​​thức về DirectCompute, OpenGL Computing, CUDA hoặc OpenCL.
- Tương tự như shader assets, compute shader assets là các tệp trong dự án của bạn. với phần mở rộng tệp .compute. Chúng được viết bằng ngôn ngữ HLSL kiểu DirectX 11
- Invoking compute shaders: trong C#, sử dụng hàm **ComputeShader.Dispatch(int kernelIndex, int threadGroupsX, int threadGroupsY, int threadGroupsZ)**

### Built-in shaders: Cách sử dụng các shader dựng sẵn đi kèm với Unity.
- Xem thêm: [Standard Shader Material Inspector reference](https://docs.unity3d.com/Manual/StandardShaderMaterialParameters.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Using Shader Graph: Cách sử dụng Shader Graph, một công cụ cho phép bạn tạo shader mà không cần viết mã.
- **Shader Graph** Là một Package được cài đặt thông qua **Package Manager** Xem thêm [Shader Graph documentation](https://docs.unity3d.com/Packages/com.unity.shadergraph@17.0/manual/index.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Writing shaders: Cách tạo shader bằng cách viết mã.
- Khi bạn viết shader đối với Unity, bạn sử dụng các ngôn ngữ sau (cả 2):
    + [HLSL in Unity (High-level shader language)](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html){:.hvr-float-shadow rel="nofollow" target="_blank"}
    + ShaderLab là ngôn ngữ dành riêng cho Unity, sử dụng để xác định một đối tượng Shader, hoạt động như một nơi chứa (container) các chương trình đổ bóng (shader programs)
- Bạn không cần sử dụng các ngôn ngữ khác nhau cho các nền tảng khác nhau. Unity sẽ biên dịch mã HLSL và ShaderLab của bạn thành các ngôn ngữ khác nhau cho các API đồ họa khác nhau.
- Có nhiều cách khác nhau để viết shader:
    + Cách phổ biến nhất là viết các shader đỉnh và đoạn (**vertex and fragment**) trong **HLSL**.
    + Trong Đường ống kết xuất tích hợp (**Built-in Render Pipeline**), bạn cũng có thể viết **Surface Shaders**. Chúng là một cách đơn giản để viết các **shader tương tác với ánh sáng**. 
    + Vì lý do tương thích ngược, Unity cũng hỗ trợ các lệnh ShaderLab “kiểu chức năng cố định”. Những thứ này cho phép bạn viết các shader trong ShaderLab mà không cần sử dụng HLSL (*Điều này không còn được khuyến nghị nữa*).

#### ShaderLab
- ShaderLab là ngôn ngữ khai báo mà bạn sử dụng trong shader các tập tin nguồn. Nó sử dụng cú pháp dấu ngoặc nhọn để mô tả đối tượng Shader.
- Có rất nhiều thứ bạn có thể định nghĩa trong ShaderLab, nhưng phổ biến nhất là:
    + Xác định **cấu trúc tổng thể** của đối tượng Shader. (*creating a Shader, creating a SubShader, creating a Pass*)
    + Sử dụng **các khối** mã để thêm các chương trình đổ bóng được viết bằng HLSL. (*adding shader programs*: HLSLPROGRAM/HLSLINCLUDE...ENDHLSL hoặc CGPROGRAM/CGINCLUDE...ENDCG)
    + Sử dụng **các lệnh** để đặt trạng thái kết xuất của GPU trước khi nó thực thi chương trình đổ bóng hoặc để thực hiện một thao tác liên quan đến Pass khác. (*AlphaToMask, Blend, BlendOp, ColorMask, Conservative, Cull, Offset, Stencil, ZClip, ZTest, ZWrite*)
    + Hiển thị các thuộc tính từ (**Exposing properties**) mã đổ bóng của bạn để có thể chỉnh sửa chúng trong **material Inspector**.
    + Chỉ định các yêu cầu gói (**package requirements**) *cho các SubShader và Pass*. Điều này cho phép Unity chỉ chạy một số SubShader và Pass nhất định khi các gói cụ thể được cài đặt trong dự án Unity. (VD: PackageRequirements { "com.unity.render-pipelines.universal": "[10.2.1,11.0]" })
    + Xác định hành vi dự phòng (**fallback behavior**) khi Unity không thể chạy bất kỳ SubShader nào có đối tượng Shader trên phần cứng hiện tại. (VD: Fallback "ExampleOtherShader" hoặc Fallback Off)

##### ShaderLab: defining a Shader object
- Đối tượng Shader là một khái niệm dành riêng cho Unity;
- Nó là một trình bao bọc cho các chương trình đổ bóng và các thông tin khác.
- Nó cho phép bạn xác định nhiều chương trình đổ bóng trong cùng một tệp và cho Unity biết cách sử dụng chúng.

```csharp
Shader "<name>"
{
    // <optional: Material properties>
    Properties
    {
        <Material property declaration>
        [optional: attribute] name("display text in Inspector", type name) = default value
        [Gamma] _ExampleName ("Integer display name", Integer) = 1
        [HDR] _ExampleName ("Float with range", Range(0.0, 1.0)) = 0.5
        [MainTexture] _ExampleName ("Texture3D", 3D) = "" {}
        [MainColor] _ExampleName("Example color", Color) = (.25, .5, .5, 1)
        [Normal] _ExampleName ("Example vector", Vector) = (.25, .5, .5, 1)
        ...
    }

    // <One or more SubShader definitions>

    // <optional: custom editor> // Sử dụng trình chỉnh sửa tùy chỉnh để hiển thị các loại dữ liệu mà Unity không thể hiển thị bằng Trình kiểm tra tài liệu mặc định của nó hoặc để xác định các điều khiển tùy chỉnh hoặc xác thực dữ liệu.
    CustomEditor “[custom editor class name]” // Unity sử dụng trình chỉnh sửa tùy chỉnh được xác định trong lớp được đặt tên, trừ khi điều này bị ghi đè bởi khối CustomEditorForRenderPipeline.
    CustomEditorForRenderPipeline “[custom editor class name]” “[render pipeline asset class name]” // Khi Nội dung đường ống kết xuất đang hoạt động là loại được đặt tên, Unity sử dụng trình chỉnh sửa tùy chỉnh được xác định trong lớp được đặt tên.

    // <optional: fallback>
    Fallback "<name>"
    Fallback "ExampleOtherShader"
    Fallback Off
}

```

##### ShaderLab: defining a SubShader
- Một đối tượng Shader chứa một hoặc nhiều SubShader.
- SubShader cho phép bạn xác định các cài đặt GPU và chương trình đổ bóng khác nhau cho các phần cứng khác nhau, quy trình kết xuất và cài đặt thời gian chạy.
- Một số đối tượng Shader chỉ chứa một SubShader duy nhất; một số khác chứa nhiều SubShader để hỗ trợ nhiều cấu hình khác nhau.
```csharp
SubShader
{
    <optional: PackageRequirements> // nó phải đứng trước tất cả các khai báo khác bên trong SubShader hoặc Pass nếu có.
    PackageRequirements{ [requirement definition]}

    <optional: LOD> // Assign a LOD (level of detail)
    LOD [value]
    LOD 200

    <optional: tags> // Assign key-value pairs of data to the SubShader, using the Tags block.
    Tags { “[name1]” = “[value1]” “[name2]” = “[value2]”}
    Tags { "RenderPipeline" = "UniversalRenderPipeline" }

    <optional: commands> // Add GPU instructions or shader code to the SubShader, using ShaderLab commands.

    <One or more Pass definitions> // Define one or more Passes, using the Pass block.
}
```

##### ShaderLab: defining a Pass
- Pass là thành phần cơ bản của đối tượng Shader. Nó chứa các hướng dẫn để thiết lập trạng thái của GPU và các chương trình đổ bóng chạy trên GPU.
- Các đối tượng Shader đơn giản có thể chỉ chứa một Pass duy nhất, nhưng các shader phức tạp hơn có thể chứa nhiều Pass.
```csharp
Pass
{
    <optional: PackageRequirements> // nó phải đứng trước tất cả các khai báo khác bên trong SubShader hoặc Pass nếu có.
    PackageRequirements{ [requirement definition]}

    <optional: name> // Assign a name to the Pass, using a Name block
    Name "<name>"
    Name "ExamplePassName"

    <optional: tags> // Assign key-value pairs of data to the Pass, using a Tags block.
    Tags {"<name1>" = "<value1>" "<name2>" = "<value2>"} // “LightMode” = “[value]”
    Tags { "ExampleTagKey" = "ExampleTagValue" }
    Tags { "LightMode" = "Always" }
    Tags { "LightMode" = "ForwardBase" "PassFlags" = "OnlyDirectional" }

    <optional: commands> // Perform operations using ShaderLab commands.

    <optional: shader code> // Add shader code to the Pass, using a shader code block.
    HLSLPROGRAM
        // [source code for shader programs, written in HLSL]
    ENDHLSL
    CGPROGRAM
        // [source code for shader programs, written in HLSL]
    ENDCG
    HLSLINCLUDE
        // [HLSL code that you want to share]
    ENDHLSL
    CGINCLUDE
        // [HLSL code that you want to share]
    ENDCG
}
```

##### ShaderLab: commands
- Xem [Commands for setting render state, Pass commands](https://docs.unity3d.com/Manual/shader-shaderlab-commands.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### HLSL in Unity
#### Thông tin
- Đây là thông tin về sử dụng HLSL trong Unity, [về thông tin chung của HLSL xem thêm ở Microsoft](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl){:.hvr-float-shadow rel="nofollow" target="_blank"}
{% msg warning Lưu ý: Unity ban đầu sử dụng ngôn ngữ Cg, do đó tên của một số từ khóa của Unity (CGPROGRAM) và phần mở rộng tệp (**.cginc**). Unity không còn sử dụng Cg nữa nhưng những tên này vẫn được sử dụng. %}
- Cách bạn viết các **custom shaders** trong Unity phụ thuộc vào đường dẫn kết xuất (**render pipeline**) bạn dùng:
    + Built-in Render Pipeline: xem [Custom shader fundamentals](https://docs.unity3d.com/Manual/SL-VertexFragmentShaderExamples.html){:.hvr-float-shadow rel="nofollow" target="_blank"}
    + Universal Render Pipeline (URP): xem [URP: Writing custom shaders](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/writing-custom-shaders-urp.html){:.hvr-float-shadow rel="nofollow" target="_blank"}
    + HDRP: Bạn không nên viết chương trình Shader cho HDRP của riêng mình do tính phức tạp của mã. Thay vào đó, hãy sử dụng [**Shader Graph**](https://docs.unity3d.com/Manual/shader-graph.html){:.hvr-float-shadow rel="nofollow" target="_blank"} để tạo các đối tượng Shader mà không cần viết mã.

#### Shader semantics, Built-in shader include files, macros, helper functions, variables, data types...
- [Xem tài liệu Unity](https://docs.unity3d.com/Manual/SL-BuiltinMacros.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Writing Surface Shaders
- Trong Đường ống kết xuất tích hợp (**Built-in Render Pipeline**), **Surface Shaders** là một cách viết **shaders** tương tác với ánh sáng.

#### How it works
+ Bạn xác định một “**surface function**” lấy bất kỳ UV hoặc dữ liệu nào bạn cần làm đầu vào và điền vào cấu trúc đầu ra **SurfaceOutput**.
+ **SurfaceOutput** về cơ bản ***mô tả các thuộc tính của bề mặt*** (*albedo color, normal, emission, specularity, v.v.*).
+ Bạn **viết mã này bằng HLSL**.
+ Sau đó, **Surface Shader compiler** sẽ tìm ra những **đầu vào (inputs)** nào là cần thiết, những **đầu ra (outputs)** nào được **filled**, v.v., đồng thời tạo ra các trình đổ bóng vertex và pixel thực tế, cũng như các **rendering passes** để xử lý chuyển tiếp và trì hoãn rendering.

#### Surface Shader input structure
- Cấu trúc đầu vào Đầu vào thường có bất kỳ tọa độ kết cấu nào mà trình đổ bóng cần. Tọa độ kết cấu phải được đặt tên là “uv”, theo sau là tên kết cấu (hoặc bắt đầu bằng “uv2” để sử dụng bộ tọa độ kết cấu thứ hai).
- Các giá trị bổ sung có thể được đưa vào cấu trúc Đầu vào:
    + float3 viewDir - chứa hướng nhìn, để tính toán hiệu ứng Thị sai (**Parallax effects**), chiếu sáng vành (**rim lighting**), v.v.
    + float4 với COLOR ngữ nghĩa (semantic) - chứa màu nội suy trên mỗi đỉnh.
    + float4 screenPos - chứa vị trí không gian màn hình cho các hiệu ứng phản chiếu hoặc không gian màn hình. Lưu ý rằng điều này không phù hợp với *GrabPass*; bạn cần tự mình tính toán UV tùy chỉnh bằng chức năng ComputGrabScreenPos.
    + float3 worldPos - chứa vị trí không gian thế giới.
    + float3 worldRefl - chứa vectơ phản chiếu thế giới nếu trình đổ bóng bề mặt không ghi vào o.Normal. Xem ví dụ về trình đổ bóng Reflect-Diffuse.
    + float3 worldNormal - chứa vectơ pháp tuyến thế giới nếu trình đổ bóng bề mặt không ghi vào o.Normal.
    + float3 worldRefl; INTERNAL_DATA - chứa vectơ phản chiếu thế giới (*reflection vector*) nếu trình đổ bóng bề mặt ghi vào o.Normal.
    + float3 worldNormal; INTERNAL_DATA - chứa vectơ pháp tuyến thế giới (*normal vector*) nếu trình đổ bóng bề mặt ghi vào o.Normal.

#### Surface Shader output structure
```csharp
struct SurfaceOutput
{
    fixed3 Albedo;  // diffuse color (màu khuếch tán)
    fixed3 Normal;  // tangent space normal, if written (không gian tiếp tuyến chuẩn tắc, nếu viết)
    fixed3 Emission;
    half Specular;  // specular power in 0..1 range (sức mạnh)
    fixed Gloss;    // specular intensity (cường độ)
    fixed Alpha;    // alpha for transparencies (alpha cho độ trong suốt)
};
```

#### Surface Shader **compile directives**
+ Surface shader *được đặt bên trong khối* **CGPROGRAM..ENDCG**, giống như bất kỳ bộ đổ bóng nào khác. Sự khác biệt là:
    - Nó phải được đặt bên trong **khối SubShader** *chứ không phải* **bên trong Pass**. Trình đổ bóng bề mặt sẽ tự biên dịch thành nhiều lượt.
    - Nó sử dụng chỉ thị **#pragma surface ...** để cho biết đó là một **surface shader** (trình đổ bóng bề mặt).
    ```csharp
    #pragma surface surfaceFunction lightModel [optionalparams]
    // Required parameters: surfaceFunction, lightModel, BlinnPhong ...
    // Optional parameters: alpha, alpha:auto, alpha:blend, alpha:fade, alpha:premul, keepalpha...
    // Custom modifier functions: vertex:VertexFunction, finalcolor:ColorFunction, finalgbuffer:ColorFunction
    // Shadows and Tessellation: addshadow, fullforwardshadows, tessellate:TessFunction
    // Code generation options: exclude_path:deferred, exclude_path:forward, noshadow, noambient, nolightmap...
    // Miscellaneous options: softvegetation, interpolateview, halfasview, approxview, dualforward...
    // 
    ```

#### Custom lighting models in Surface Shaders (Các mô hình chiếu sáng tùy chỉnh)
- Trong Built-in Render Pipeline, khi viết Surface Shaders, bạn mô tả các thuộc tính của một bề mặt (chẳng hạn như màu albedo, normal...) và rồi Mô hình chiếu sáng (**Lighting Model**) sẽ tính toán **tương tác ánh sáng**.
- Có hai mô hình chiếu sáng tích hợp:
    + **Lambert** *cho chiếu sáng khuếch tán*
    + **BlinnPhong** *cho chiếu sáng phản chiếu*.
- Tệp **Lighting.cginc bên** trong Unity xác định các mô hình này:
    + **Windows**: *[unity install path]/Data/CGINcludes/Lighting.cginc*
    + **macOS**: */Applications/Unity/Unity.app/Contents/CGINcludes/Lighting.cginc*
- Đôi khi bạn có thể muốn sử dụng một **mô hình chiếu sáng tùy chỉnh (custom lighting model)**. Bạn có thể làm điều này với Surface Shaders.
- Một mô hình chiếu sáng (**Lighting Model**) chỉ đơn giản là một vài chức năng Cg/HLSL phù hợp với một số quy ước.

##### Rendering paths in the Built-in Render Pipeline
- Đường dẫn kết xuất (**rendering path**) là một chuỗi các thao tác liên quan đến chiếu sáng (**lighting**) và tạo bóng (**shading**).
- Các rendering paths hiển thị khác nhau có khả năng và đặc tính hiệu suất khác nhau. Việc quyết định đường dẫn hiển thị nào phù hợp nhất cho Dự án của bạn tùy thuộc vào loại Dự án và phần cứng mục tiêu.
- **Forward rendering path**: *Kết xuất chuyển tiếp hiển thị từng đối tượng trong một hoặc nhiều lượt, tùy thuộc vào ánh sáng ảnh hưởng đến đối tượng. Bản thân đèn cũng được xử lý khác nhau bằng Forward Rendering, tùy thuộc vào cài đặt và cường độ của chúng.* xem thêm [Unity Manual](https://docs.unity3d.com/Manual/RenderTech-ForwardRendering.html){:.hvr-float-shadow rel="nofollow" target="_blank"}
- **Deferred Shading rendering path**: *Khi sử dụng deferred shading, không có giới hạn về số lượng đèn có thể ảnh hưởng đến GameObject. Tất cả các đèn đều được đánh giá trên mỗi pixel, có nghĩa là tất cả chúng đều tương tác chính xác với normal maps, v.v. Ngoài ra, tất cả các đèn đều có thể có cookie và shadows. Việc tạo bóng trì hoãn có ưu điểm là chi phí xử lý ánh sáng tỷ lệ thuận với số lượng pixel ánh sáng chiếu vào. Điều này được xác định bởi kích thước của lượng ánh sáng trong Cảnh bất kể nó chiếu sáng bao nhiêu GameObject. Vì vậy, hiệu suất có thể được cải thiện bằng cách giữ đèn nhỏ. Tính năng tạo bóng trì hoãn cũng có tính nhất quán cao và có thể dự đoán được. Mặt khác, tính năng tạo bóng bị trì hoãn không hỗ trợ thực sự cho việc khử răng cưa và không thể xử lý các GameObject bán trong suốt... Hầu hết các card đồ họa PC được sản xuất sau năm 2006 đều hỗ trợ tính năng tạo bóng chậm, bắt đầu với GeForce 8xxx, Radeon X2400, Intel G45....*
- **Vertex Lit Rendering Path**: *Đường dẫn Vertex Lit thường render từng đối tượng trong một lần, với ánh sáng từ tất cả các đèn được tính toán cho mỗi đỉnh. Đó là đường dẫn kết xuất nhanh nhất và có hỗ trợ phần cứng rộng nhất. Vì tất cả ánh sáng được tính toán ở cấp độ đỉnh nên đường dẫn hiển thị này không hỗ trợ hầu hết các hiệu ứng trên mỗi pixel: shadows, normal mapping, light cookies, và highly detailed specular highlights không được hỗ trợ.*

##### Declaring lighting models
- Một Lighting Model bao gồm các chức năng thông thường có tên **bắt đầu là Lighting**. 
- Bạn có thể khai báo chúng ở *bất kỳ đâu trong tệp shader* của mình hoặc một trong các tệp được bao gồm. Các chức năng là:
    + ```half4 Lighting<Name> (SurfaceOutput s, UnityGI gi);```: Sử dụng hàm này trong đường dẫn kết xuất chuyển tiếp dành cho các mẫu đèn *không phụ thuộc vào hướng nhìn*.
    + ```half4 Lighting<Name> (SurfaceOutput s, half3 viewDir, UnityGI gi);```: Sử dụng hàm này trong kết xuất chuyển tiếp đường dẫn cho các mô hình ánh sáng *phụ thuộc vào hướng nhìn*.
    + ```half4 Lighting<Name>_Deferred (SurfaceOutput s, UnityGI gi, out half4 outDiffuseOcclusion, out half4 outSpecSmoothness, out half4 outNormal);```: Sử dụng hàm này trong chế độ tô bóng trì hoãn những con đường.

    {% msg warning Lưu ý rằng bạn không cần phải khai báo tất cả các hàm. Một mô hình chiếu sáng sử dụng hướng nhìn hoặc không. Tương tự, nếu mô hình chiếu sáng chỉ hoạt động ở chế độ hiển thị chuyển tiếp thì không khai báo hàm _Deferred. Điều này đảm bảo rằng các Shader sử dụng nó chỉ biên dịch để chuyển tiếp kết xuất. %}

##### Custom GI
- Khai báo hàm sau để tùy chỉnh lightmap giải mã dữ liệu và thăm dò (**probes**): ```half4 Lighting<Name>_GI (SurfaceOutput s, UnityGIInput data, inout UnityGI gi);```
- **Lưu ý rằng**: để giải mã các bản đồ ánh sáng Unity tiêu chuẩn và đầu dò SH, bạn có thể sử dụng các hàm **DecodeLightmap** và **ShadeSHPerPixel** tích hợp sẵn, như đã thấy trong **UnityGI_Base** trong tệp **UnityGlobalIllumination.cginc** bên trong Unity:
    + **Windows**: *[unity install path]/Data/CGIncludes/UnityGlobalIllumination.cginc*
    + **macOS**: */Applications/Unity/Unity.app/Contents/CGINcludes/UnityGlobalIllumination.cginc_*
        
### Shader performance and profiling: Cách gỡ lỗi và phân tích hiệu suất của trình đổ bóng trong thời gian chạy.
#### Tối ưu hiệu suất
- **Chỉ tính toán những gì bạn cần**
- Để có hiệu suất tốt, **hãy luôn sử dụng độ chính xác thấp nhất có thể**. Điều này đặc biệt quan trọng trên phần cứng cấp thấp hơn.
- Tránh tính toán trong Shader Program, **tách hẳn tính toán khỏi shader**, chỉ nên đưa vào giá trị và sử dụng luôn.
- Các hàm toán học siêu việt (chẳng hạn như pow, exp, log, cos, sin, tan) khá tốn tài nguyên, vì vậy hãy tránh sử dụng chúng nếu có thể trên phần cứng cấp thấp. Hãy cân nhắc sử dụng **lookup textures** thay thế cho các phép tính toán phức tạp.
- **Tránh viết tính toán riêng** (VD: normalize, dot, inversesqrt)
- Trên một số nền tảng (chủ yếu là GPU di động có trong thiết bị iOS và Android), việc sử dụng **ColorMask** để loại bỏ một số kênh (ví dụ ColorMask RGB: ) có thể tốn nhiều tài nguyên, vì vậy chỉ sử dụng nó nếu thực sự cần thiết.

#### Gỡ lỗi - Debug
- Gỡ lỗi trình đổ bóng bằng Visual Studio (*Lưu ý: Nếu bạn đang sử dụng DirectX 12, Microsoft khuyên bạn nên sử dụng **PIX** để gỡ lỗi trình đổ bóng thay vì Visual Studio.*)
- [Xem hướng dẫn](https://docs.unity3d.com/Manual/SL-DebuggingD3D11ShadersWithVS.html){:.hvr-float-shadow rel="nofollow" target="_blank"}