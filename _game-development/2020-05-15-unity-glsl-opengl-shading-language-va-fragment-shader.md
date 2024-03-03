---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "GLSL (OpenGL Shading Language) và Fragment shader trong Render"
description: "GLSL (OpenGL Shading Language) và Fragment shader trong Render"

### HUMAN
header: "GLSL (OpenGL Shading Language) và Fragment shader trong Render"
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
glslEditor: true # nhúng glslEditor
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

## GLSL (OpenGL Shading Language) và Fragment shader trong Render

### Nội dung

Nội dung ở đây sẽ tập trung vào việc sử dụng các pixel shader viết bằng **GLSL**. Học cách tạo các hình, mẫu, ảnh bằng Toán học và làm chúng chuyển động bằng shader.

**GLSL (OpenGL Shading Language)** là ngôn ngữ tạo bóng cấp cao với cú pháp dựa trên ngôn ngữ lập trình C. Nó được tạo bởi OpenGL ARB (Hội đồng đánh giá kiến ​​trúc OpenGL) để cung cấp cho các nhà phát triển quyền kiểm soát trực tiếp hơn đối với quy trình đồ họa mà không cần phải sử dụng ngôn ngữ ARB Assembly hoặc ngôn ngữ dành riêng cho phần cứng.

### Thông tin bên lề
- GLSL là gì? GLSL là viết tắt của OpenGL Shading Language, là một quy chuẩn để viết các shader. Có nhiều loại shader phụ thuộc vào phần cứng và hệ điều hành.
- Lịch sử: OpenGL > Vulkan (glNext); Apple có API Metal độc quyền của họ được giới thiệu vào 2014.
- Vulkan có thể so sánh với API Metal của Apple và Direct3D 12 của Microsoft và khó sử dụng hơn các API OpenGL và Direct3D 11 cấp cao hơn.
- Vulkan có nguồn gốc và được xây dựng dựa trên các thành phần API Mantle của AMD (được AMD tặng cho Khronos)
- Hiểu về lịch sử hình thành của OpenGL sẽ giúp ích trong việc vượt qua được một số rào cản kỳ lạ của nó [openglbook.com](https://openglbook.com/){:.hvr-float-shadow.external rel="nofollow" target="_blank"} > Ở thời điểm bắt đầu > Ống tia âm cực (CRT - Cathode Ray Tube) > Những tương tác đầu tiên > GUI > máy tính không còn đơn giản là thiết bị xử lý số mà còn có thể hiển thị các hình dạng hình học > 3D + AR > Nhỏ hơn, nhanh hơn, rẻ hơn (Bìa đục lỗ sơ khai > Đèn chân không GEN1 > Bóng bán dẫn GEN2 > Mạch tích hợp GEN3 > Bộ vi xử lý GEN4)...
- Thay đổi mô hình: CPU không theo kịp sự phát triển của GPU > Khi render CPU là một nút thắt  > Bộ đệm: chuyển từ bộ nhớ sang bộ nhớ của GPU sau khi khởi tạo và sẽ ở đó cho đến khi không còn cần thiết nữa.
- Vào năm 2000, Microsoft phát hành Direct3D 8.0, hỗ trợ một tính năng mới gọi là shader. Về cơ bản, Shader không gì khác hơn là những chương trình nhỏ chạy trực tiếp trên GPU, nhờ đó tận dụng được nhiều sức mạnh hơn của GPU và di chuyển nhiều chức năng ra khỏi CPU.
- The Software Pipeline (Đường ống phần mềm): Application layer > Abstraction layer > Device Driver > Hardware
- Render Thread: **bị mù** khi không thể biết được các thread khác đang làm gì + **mất trí nhớ** vì làm xong cái này là làm đến cái khác (vẽ xong 1 button > chuyển sang hiển thị 1 ảnh nào đó > chuyển sang hiển thị nội dung nào đó...)
- Các kiểu dữ liệu số thực là yếu tố sống còn trong shader, nên việc quy định mức độ chính xác của chúng là tối quan trọng. Độ chính xác thấp đồng nghĩa với việc dựng hình nhanh hơn và đánh đổi lấy chất lượng thấp hơn.  (precision mediump/lowp/highp float;)
- Nếu bạn muốn viết code có độ ổn định cao mà không phải tốn hàng giờ ngồi debug trước màn hình trắng tinh, thì hãy làm quen với việc viết thêm dấu chấm (.) sau các số thực, nó giúp GPU biết đang phải xử lý một số thực.

### GLSL (OpenGL Shading Language)
#### Operators (Toán tử)
- GLSL chứa các toán tử giống như các toán tử trong C và C++, ngoại trừ các con trỏ. Toán tử bitwise đã được thêm vào trong phiên bản 1.30.

#### Functions and control structures (Hàm và Điều khiển cấu trúc)
- Tương tự như ngôn ngữ lập trình C, GLSL hỗ trợ các vòng lặp và phân nhánh, ví dụ: if-else, for, switch, v.v. **Đệ quy bị cấm** và được kiểm tra trong quá trình biên dịch.
- Các function do **người dùng định nghĩa** được hỗ trợ và các built-in function được cung cấp. Nhà sản xuất card đồ họa có thể tối ưu hóa các built-in functions ở cấp độ phần cứng (nhiều hàm trong số này tương tự như các hàm trong thư viện toán học của ngôn ngữ lập trình C trong khi các hàm khác dành riêng cho lập trình đồ họa).
- Hầu hết các **built-in functions and operators** có thể hoạt động trên cả đại lượng vô hướng (các số) và vectơ (tối đa 4 phần tử, 4 chiều), cho một hoặc cả hai toán hạng.
- Các built-in functions phổ biến thường được sử dụng cho mục đích đồ họa là: **mix, smoothstep, normalize, inversesqrt, clamp, length, distance, dot, cross, reflect, refract** và **vector min** và **max**.
- Các functions khác như: **abs, sin, pow**... có thể hoạt động với cả các đại lượng vector. VD: *pow(vec3(1.5, 2.0, 2.5), abs(vec3(0.1, -0.2, 0.3)))*
- GLSL hỗ trợ **function overloading** (cho cả *built-in functions and operators* cũng như *user-defined functions*), do đó có thể có nhiều định nghĩa hàm có cùng tên, có số lượng tham số hoặc loại tham số khác nhau. Mỗi người trong số họ có thể có kiểu trả về độc lập riêng.

#### Preprocessor (Bộ tiền xử lý)
- GLSL định nghĩa một tập hợp con của bộ tiền xử lý C (CPP), kết hợp với các chỉ thị (directives) đặc biệt của riêng nó để chỉ định các **versions** và **OpenGL extensions**. Các *phần bị loại bỏ khỏi CPP là những phần liên quan đến tên tệp như #include và \__FILE\__*
- Tiện ích mở rộng **GL_ARB_shading_lingu_include** (VD: được triển khai trong Nvidia drivers trên Windows, Linux và tất cả drivers của Mesa 20.0.0 trên Linux, FreeBSD và Android) implement khả năng sử dụng #include trong mã nguồn, cho phép dễ dàng hơn chia sẻ mã và định nghĩa giữa nhiều shader mà không cần xử lý trước thủ công thêm.
- Tiện ích mở rộng tương tự **GL_GOOGLE_include_directive** và **GL_GOOGLE_cpp_style_line_directive** tồn tại để sử dụng GLSL với Vulkan và được hỗ trợ trong **trình biên dịch SPIR-V tham chiếu** (*glslang hay còn gọi là glslangValidator*).

#### Compilation and execution (Biên dịch và thực thi)
- **GLSL shaders** không phải là ứng dụng độc lập, **chúng yêu cầu một ứng dụng sử dụng API OpenGL**, *có sẵn trên nhiều nền tảng khác nhau* (ví dụ: Linux, macOS, Windows). Có các ràng buộc ngôn ngữ cho C, C++, C#, JavaScript, Delphi, Java và nhiều ngôn ngữ khác.
- Bản thân các trình đổ bóng GLSL chỉ đơn giản **là một tập hợp các chuỗi (string)** được *chuyển tới trình điều khiển (driver)* của nhà cung cấp phần cứng để biên dịch từ bên trong một ứng dụng bằng cách sử dụng các điểm vào (entry points) của API OpenGL. Shader có thể được tạo nhanh chóng từ bên trong ứng dụng hoặc đọc dưới dạng tệp văn bản nhưng **phải được gửi tới trình điều khiển (driver) dưới dạng chuỗi**.
- **Bộ API** được sử dụng để *biên dịch, liên kết và truyền tham số* cho các chương trình GLSL được chỉ định trong ba **OpenGL extensions (*biên dịch, liên kết và truyền tham số*)** và trở thành một phần của **OpenGL Core** kể từ OpenGL Phiên bản 2.0.
- API đã được mở rộng với các *geometry shaders* trong OpenGL 3.2, các *tessellation shaders* trong OpenGL 4.0 và các *compute shaders* trong OpenGL 4.3. Các API OpenGL này được tìm thấy trong các extensions sau:
    + ARB vertex shader
    + ARB fragment shader
    + ARB shader objects
    + ARB geometry shader 4
    + ARB tessellation shader
    + ARB compute shader
- *GLSL shaders cũng có thể được **sử dụng với Vulkan*** và *là cách phổ biến để sử dụng trình đổ bóng* trong Vulkan.
- GLSL shaders được *precompile trước khi sử dụng* hoặc *trong thời gian chạy* thành định *dạng mã byte nhị phân* được gọi là **SPIR-V**, thường sử dụng trình biên dịch ngoại tuyến.

### Hello GLSL
- Function nếu **không 'void' thì phải có return**
- Định nghĩa function trước khi dùng (**định nghĩa ở trên, dùng ở dưới**)
- Có nhiều cách khởi tạo kiểu **vec4**. VD: **vec4(vec3(vec2(-0.360,0.620),0.000),1.000);**
- Kiến trúc của **GPU yêu cầu** *dữ liệu gửi cho các thread* phải giống nhau (**uniform**) và không được thay đổi (**read only**).

#### Uniform
- Hỗ trợ hầu hết các kiểu dữ liệu cơ bản như: **float, vec2, vec3, vec4, mat2, mat3, mat4, sampler2D** và **samplerCube**.
- Uniform được định nghĩa cùng với kiểu dữ liệu tương ứng, ở phần trên cùng của code shader, ngay sau khi quy định độ chính xác của các số thực.
- Tên của các biến có thể thay đổi theo từng chương trình.

```glsl
#ifdef GL_ES
precision mediump float; // quy định độ chính xác của các số thực.
#endif

uniform vec2 u_resolution;  // Kích thước canvas (Rộng, cao)
uniform vec2 u_mouse;       // Vị trí con trỏ chuột trong canvas
uniform float u_time;       // Thời gian hiện tại tính từ lúc load xong shader
```

- Trong GLSL, có bốn loại biến đồng nhất:
    + **uniform**: là các biến có giá trị không thay đổi trong suốt quá trình thực thi shader. Các giá trị này được cung cấp bởi chương trình chính hoặc bên ngoài shader.
    + **varying**: là các biến có giá trị thay đổi tùy theo vị trí của điểm ảnh hoặc đỉnh. Các giá trị này được nội suy từ các giá trị của các đỉnh kề nhau.
    + **attribute**: là các biến có giá trị riêng biệt cho mỗi đỉnh. Các giá trị này được cung cấp bởi mảng đỉnh hoặc bộ đệm đỉnh.
    + **const**: là các biến có giá trị không thay đổi và được xác định tại thời điểm biên dịch. Các giá trị này được khai báo trực tiếp trong shader.

Phần cứng của **GPU giúp tăng tốc** các **hàm lượng giác** và **luỹ thừa**: *sin(), cos(), tan(), asin(), acos(), atan(), pow(), exp(), log(), sqrt(), abs(), sign(), floor(), ceil(), fract(), mod(), min(), max() và clamp()*. Chúng rất nhanh.

<div class="codeAndCanvas" data="/assets/glsl_frag/frag_color_sin_utime.frag"></div>

#### 'gl_FragCoord' (input variable but not Uniform)

Ta cũng có biến **lưu trữ giá trị input**, vec4 **gl_FragCoord**, *là toạ độ của điểm ảnh* (**pixel**) *hoặc một vùng điểm ảnh* (**screen fragment**) *mà thread này đang xử lý*. Ta biết rằng giá trị của vec4 gl_FragCoord *khác nhau giữa từng thread*, nên nó **không phải là uniform**.

<div class="codeAndCanvas" data="/assets/glsl_frag/frag_coord_u_resolution.frag"></div>

Trong shader ta không có nhiều cách để debug lắm bên cạnh việc thử dùng một màu rất chói để kiểm tra.

#### GLSL in Unity (dùng thử GLSL trong Unity)
- **Lưu ý**: *Điều này không được khuyến khích* hoặc *không cần thiết* như một phần của quy trình làm việc thông thường; Unity biên dịch chéo HLSL của bạn thành GLSL được tối ưu hóa khi cần. Việc sử dụng GLSL thô chỉ được khuyến nghị để **thử nghiệm** hoặc để hỗ trợ các dự án trên nền tảng sử dụng GLSL.
- Đoạn mã chương trình GLSL cần được viết giữa GLSLPROGRAM và ENDGLSL và đặt trong một Pass của SubShader
- Trong GLSL, tất cả các điểm vào của hàm đổ bóng phải được gọi main(). Khi Unity tải trình đổ bóng GLSL, nó sẽ tải nguồn một lần chương trình đỉnh với bộ VERTEX tiền xử lý và chương trình phân đoạn với bộ FRAGMENT tiền xử lý. Vì vậy, cách để phân tách các phần chương trình đỉnh và đoạn trong đoạn mã GLSL là bao quanh chúng bằng #ifdef VERTEX .. #endif và #ifdef FRAGMENT .. #endif. **Mỗi đoạn mã GLSL phải chứa cả chương trình đỉnh và chương trình phân đoạn**.
- **Built-in Variables của GLSL trong Unity**: là các biến được định nghĩa sẵn bởi GLSL hoặc Unity để lưu trữ và truyền dữ liệu hệ thống, như vị trí, màu sắc, ánh sáng, v.v. Các biến này có thể là chỉ đọc hoặc chỉ ghi, tùy thuộc vào loại chương trình.
    + **gl_MultiTexCoord0** : là một vector 4 chiều **chỉ đọc** chứa tọa độ texture của mỗi đỉnh, *được cung cấp bởi Unity*.
    + **gl_ModelViewProjectionMatrix** : là một ma trận 4x4 **chỉ đọc** chứa phép biến đổi từ không gian đối tượng sang không gian màn hình, *được cung cấp bởi Unity*.
    + **gl_Vertex** : là một vector 4 chiều **chỉ đọc** chứa vị trí của mỗi đỉnh trong không gian đối tượng, *được cung cấp bởi Unity*.
    + **gl_Position** : là một vector 4 chiều ***chỉ ghi*** chứa vị trí của mỗi đỉnh trong không gian màn hình, được tính toán bởi chương trình đỉnh (*tiêu chuẩn OpenGL*).
    + **gl_FragColor** : là một vector 4 chiều ***chỉ ghi*** chứa màu sắc của mỗi phân đoạn, được tính toán bởi chương trình phân đoạn (*tiêu chuẩn OpenGL*).
    + **gl_FragCoord**: là một vector 4 chiều **chỉ đọc** chứa tọa độ của mỗi phân đoạn trong không gian màn hình, *được cung cấp bởi Unity*. Giá trị x, y của biến này là tọa độ pixel, giá trị z là chiều sâu, và giá trị w là độ nghịch của chiều sâu.
    + **gl_FrontFacing**: là một biến boolean **chỉ đọc** cho biết mỗi phân đoạn có thuộc mặt trước hay mặt sau của một tam giác, *được cung cấp bởi Unity*. Giá trị true nghĩa là mặt trước, và giá trị false nghĩa là mặt sau.
    + **gl_PointSize**: là một biến float ***chỉ ghi*** cho phép bạn điều chỉnh kích thước của mỗi điểm khi vẽ các đỉnh dưới dạng điểm, *được cung cấp bởi Unity*. Giá trị của biến này là kích thước pixel của mỗi điểm.
    + **gl_NormalMatrix**: là một ma trận 3x3 **chỉ đọc** chứa phép biến đổi từ không gian đối tượng sang không gian xem cho các vector pháp tuyến, *được cung cấp bởi Unity*. Biến này được dùng để tính toán ánh sáng và bóng.
    + **gl_LightSource[i]**: là một cấu trúc **chỉ đọc** chứa thông tin về **nguồn sáng thứ i**, *được cung cấp bởi Unity*. Cấu trúc này có các trường như vị trí, màu sắc, hướng, v.v. của nguồn sáng.
    + **gl_ClipDistance[i]**: là một mảng float ***chỉ ghi*** cho phép bạn xác định khoảng cách từ mỗi đỉnh đến một mặt cắt, *được cung cấp bởi Unity*. Biến này được dùng để cắt bỏ các phần không cần thiết của vật thể.
    + **gl_CullDistance[i]**: là một mảng float ***chỉ ghi*** cho phép bạn xác định khoảng cách từ mỗi đỉnh đến một mặt cắt, *được cung cấp bởi Unity*. Biến này được dùng để cắt bỏ các tam giác không cần thiết của vật thể.
    + **gl_FragDepth**: là một biến float ***chỉ ghi*** cho phép bạn ghi đè giá trị chiều sâu của mỗi phân đoạn, *được cung cấp bởi Unity*. Biến này được dùng để điều khiển thứ tự vẽ các phân đoạn.
    + **gl_FrontColor**: là một vector 4 chiều ***chỉ ghi*** cho phép bạn ghi màu sắc của mỗi đỉnh thuộc mặt trước của một tam giác, *được cung cấp bởi Unity*. Biến này được dùng để truyền màu sắc từ chương trình đỉnh sang chương trình phân đoạn.
    + **gl_BackColor**: là một vector 4 chiều ***chỉ ghi*** cho phép bạn ghi màu sắc của mỗi đỉnh thuộc mặt sau của một tam giác, *được cung cấp bởi Unity*. Biến này được dùng để truyền màu sắc từ chương trình đỉnh sang chương trình phân đoạn.
    + **gl_FrontSecondaryColor**: là một vector 4 chiều ***chỉ ghi*** cho phép bạn ghi màu sắc thứ cấp của mỗi đỉnh thuộc mặt trước của một tam giác, *được cung cấp bởi Unity*. Biến này được dùng để truyền màu sắc thứ cấp từ chương trình đỉnh sang chương trình phân đoạn.
    + **gl_BackSecondaryColor**: là một vector 4 chiều ***chỉ ghi*** cho phép bạn ghi màu sắc thứ cấp của mỗi đỉnh thuộc mặt sau của một tam giác, *được cung cấp bởi Unity*. Biến này được dùng để truyền màu sắc thứ cấp từ chương trình đỉnh sang chương trình phân đoạn.
    + **gl_SecondaryColor**: là một vector 4 chiều **chỉ đọc** chứa màu sắc thứ cấp của mỗi phân đoạn, *được cung cấp bởi Unity*. Biến này được dùng để nhận màu sắc thứ cấp từ chương trình đỉnh.
    + **gl_TexCoord[i]**: là một mảng vector 4 chiều ***chỉ ghi*** cho phép bạn ghi tọa độ texture của mỗi đỉnh, *được cung cấp bởi Unity*. Biến này được dùng để truyền tọa độ texture từ chương trình đỉnh sang chương trình phân đoạn.
    + **gl_MultiTexCoord[i]**: là một mảng vector 4 chiều **chỉ đọc** chứa tọa độ texture của mỗi đỉnh, *được cung cấp bởi Unity*. Biến này được dùng để nhận tọa độ texture từ chương trình đỉnh.
    + **gl_PointCoord**: là một vector 2 chiều **chỉ đọc** chứa tọa độ texture của mỗi điểm, *được cung cấp bởi Unity*. Biến này được dùng để lấy màu sắc của texture khi vẽ các đỉnh dưới dạng điểm.
    + **gl_Normal**: là một vector 3 chiều **chỉ đọc** chứa vector pháp tuyến của mỗi đỉnh, *được cung cấp bởi Unity*. Biến này được dùng để tính toán ánh sáng và bóng.
    + **gl_Color**: là một vector 4 chiều **chỉ đọc** chứa màu sắc của mỗi phân đoạn, *được cung cấp bởi Unity*. Biến này được dùng để nhận màu sắc từ chương trình đỉnh.
    + **gl_FogFragCoord**: là một biến float **chỉ đọc** chứa khoảng cách từ mỗi phân đoạn đến camera, *được cung cấp bởi Unity*. Biến này được dùng để tính toán sương mù.
    + **gl_FogCoord**: là một biến float ***chỉ ghi*** cho phép bạn ghi khoảng cách từ mỗi đỉnh đến camera, *được cung cấp bởi Unity*. Biến này được dùng để truyền khoảng cách từ chương trình đỉnh sang chương trình phân đoạn.
    ```csharp
    Shader "Custom/TestGLSL"
    {
        Properties
        {
            _Color ("Color", Color) = (1,1,1,1)
            _MainTex ("Albedo (RGB)", 2D) = "white" {}
            _Glossiness ("Smoothness", Range(0,1)) = 0.5
            _Metallic ("Metallic", Range(0,1)) = 0.0
        }
        SubShader
        {
            Pass 
            {
                // Đoạn mã chương trình GLSL được viết giữa GLSLPROGRAM và ENDGLSL
                GLSLPROGRAM
                // Trong GLSL, tất cả các điểm vào của hàm đổ bóng phải được gọi main()
                // Khi Unity tải trình đổ bóng GLSL, nó sẽ tải nguồn một lần chương trình đỉnh với bộ VERTEX tiền xử lý và chương trình phân đoạn với bộ FRAGMENT tiền xử lý.
                // Vì vậy, cách để phân tách các phần chương trình đỉnh và đoạn trong đoạn mã GLSL là bao quanh chúng bằng #ifdef VERTEX .. #endif và #ifdef FRAGMENT .. #endif
                // Mỗi đoạn mã GLSL phải chứa cả chương trình đỉnh và chương trình phân đoạn.

                // *** Built-in Variables ***
                // *** là các biến được định nghĩa sẵn bởi GLSL hoặc Unity để lưu trữ và truyền dữ liệu hệ thống, như vị trí, màu sắc, ánh sáng, v.v.
                // *** Các biến này có thể là chỉ đọc hoặc chỉ ghi, tùy thuộc vào loại chương trình.
                // gl_MultiTexCoord0 : là một vector 4 chiều chỉ đọc chứa tọa độ texture của mỗi đỉnh, được cung cấp bởi Unity.
                // gl_ModelViewProjectionMatrix : là một ma trận 4x4 chỉ đọc chứa phép biến đổi từ không gian đối tượng sang không gian màn hình, được cung cấp bởi Unity.
                // gl_Vertex : là một vector 4 chiều chỉ đọc chứa vị trí của mỗi đỉnh trong không gian đối tượng, được cung cấp bởi Unity.
                // gl_Position : là một vector 4 chiều chỉ ghi chứa vị trí của mỗi đỉnh trong không gian màn hình, được tính toán bởi chương trình đỉnh (tiêu chuẩn OpenGL).
                // gl_FragColor : là một vector 4 chiều chỉ ghi chứa màu sắc của mỗi phân đoạn, được tính toán bởi chương trình phân đoạn (tiêu chuẩn OpenGL).

                // Phần định nghĩa chương trình đỉnh (vertex program), chạy trên mỗi đỉnh của một vật thể.
                // Phần này cho phép tính toán vị trí, phép biến đổi, và tọa độ texture của mỗi đỉnh.
                // Phần này cũng cho phép truyền dữ liệu từ Vertext sang Fragment thông qua các biến varying.
                #ifdef VERTEX
                    // attribute: là các biến chỉ đọc, sử dụng trong chương trình đỉnh để nhận dữ liệu từ các đỉnh của vật thể.
                    attribute vec4 _MainTex_ST; // texture Scalse and Offset, dùng để điều chỉnh tọa độ texture của mỗi đỉnh.
                    attribute vec4 Tangent; // tangent vector, chứa thông tin về vector tiếp tuyến của mỗi đỉnh, được dùng để tính toán ánh sáng và bóng.
                    // varying: là các biến có thể ghi và đọc được sử dụng để truyền dữ liệu từ chương trình đỉnh sang chương trình phân đoạn.
                    // Các biến này có giá trị khác nhau cho mỗi đỉnh và mỗi phân đoạn, và được nội suy tuyến tính giữa các đỉnh.
                    varying vec2 textcoord; // texture coordinate, truyền dữ liệu từ Vertext sang Fragment
                    void main()
                    {
                        textcoord = gl_MultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;
                        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
                    }
                #endif

                // Phần định nghĩa chương trình phân đoạn (fragment program), chạy trên mỗi điểm ảnh (pixel) của một vật thể.
                // Phần này cho phép tính toán màu sắc, ánh sáng, bóng, v.v. của mỗi điểm ảnh.
                // Phần này cũng cho phép nhận dữ liệu từ Vertext thông qua các biến varying.
                #ifdef FRAGMENT
                    // uniform: là các biến chỉ đọc được sử dụng trong cả chương trình đỉnh và chương trình phân đoạn để nhận dữ liệu từ Unity hoặc từ các thuộc tính của shader. 
                    uniform sampler2D _MainTex; // lấy mẫu texture, được dùng để lấy màu sắc của texture tại một tọa độ nhất định.
                    varying vec2 textcoord; // lấy INPUT dữ liệu truyền từ Vertex sang Frament
                    void main()
                    {
                        gl_FragColor = texture2D(_MainTex, textcoord);
                    }
                #endif
                ENDGLSL

            } // --- END: Pass
        } // --- END: SubShader
        FallBack "Diffuse"
    }
    ```

#### Các thuật toán hình học
##### Hàm hình dạng - Shape function
- Trước khi đi sâu vào việc biến đổi dữ liệu giữa các kiểu thì ta cần bắt đầu từ những thứ đơn giản hơn... rất nhiều. Đó là việc tạo ra các hàm chỉ xử lý vector 1 chiều.
- Cấu trúc code dưới đây sẽ chuẩn hoá giá trị x (st.x) bằng 2 cách:
    + Một là với cường độ sáng (quan sát gradient từ đen sang trắng)
    + Hai là vẽ đồ thị một đường màu xanh lá đè lên trên (trường hợp này giá trị của x được gán trực tiếp cho y).

<div class="codeAndCanvas" data="/assets/glsl_frag/frag_shape-func-linear.frag"></div>

- Ta có thể thay các hàm toán học khác để thay đổi hình dáng của đồ thị. Ví dụ ta có thể vẽ đồ thị luỹ thừa 5 của x để có được đường cong như hình dưới.

<div class="codeAndCanvas" data="/assets/glsl_frag/frag_shape_func_expo.frag"></div>

- Khi bạn muốn dùng Toán để **tạo chuyển động, tạo hình hay pha trộn các giá trị**, không có gì tốt hơn việc làm quen với **sin** và **cos**. Việc tìm hiểu cách chúng hoạt động và kết hợp với nhau ra sao rất quan trọng. <br>![TEXT](/assets/img/collections/sincos.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>Về cơ bản, cho một góc bất kỳ (đơn vị radian), hai hàm này sẽ cho kết quả là tọa độ x (cos) và y (sin) của 1 điểm trên đường tròn có bán kính bằng 1. Và chính việc kết quả thu được từ 2 hàm này vừa biến thiên một cách mềm mại (**tính chất tuần hoàn**) lại còn luôn được chuẩn hoá sẵn theo cặp và cả đơn lẻ (trong khoảng -1 tới 1) khiến cho 2 hàm này trở thành các công cụ siêu hữu ích.
- **Playground**
<div class="simpleFunction" data="/assets/glsl_frag/fs_playground_sin_cos.fs"></div>

##### Tìm hiểu một số hàm cơ bản

Các hàm này là "***hàng rào***" của chúng ta! Chúng ta đang dần thuần thục với các chuyển động 1 chiều, chỉ có lên và xuống. Sớm thôi, ta sẽ đụng tới các chiều thứ hai, ba và bốn!
<div class="simpleFunction" data="/assets/glsl_frag/fs_simple_funcs.fs"></div>

Khi tác phẩm nghệ thuật được tạo bởi toán học thì sẽ như thế nào? => GG:"***generative art***" (*Nghệ thuật tạo sinh*)

![TEXT](/assets/img/collections/anthony-mattox-ribbon.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- Roadmap: [The art of the Shade](https://github.com/vanrez-nez/awesome-glsl){:.external.hvr-forward rel="nofollow" target="_blank"} (tutorials, books, articles, tools, people...)

##### Các hàm nâng cao
- **Golan Levin** có tài liệu mô tả rất chi tiết về các hàm phức tạp khác vô cùng hữu ích:
    + [Các hàm đa thức](https://www.flong.com/archive/texts/code/shapers_poly/){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Các hàm luỹ thừa](http://www.flong.com/archive/texts/code/shapers_exp/){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Các hàm mô phỏng đường tròn và elip](http://www.flong.com/archive/texts/code/shapers_circ/){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Đường cong Bezier và các hàm tương tự](http://www.flong.com/archive/texts/code/shapers_bez/){:.external.hvr-forward rel="nofollow" target="_blank"}
        - [Quadratic Bezier](/tools/glsl_editor#content/160414041542.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
        - [Cubic Bezier](/tools/glsl_editor#content/160414041933.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
        - [Cubic Bezier through two points](/tools/glsl_editor#content/160414041756.frag){:.external.hvr-forward rel="nofollow" target="_blank"}

![TEXT](/assets/img/collections/bezier_curve.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- Như một đầu bếp đi thu thập các kỳ hoa dị thảo, nghệ sỹ kỹ thuật số và các lập trình viên đồ hoạ cũng sẽ có niềm yêu thích riêng với các hàm nội suy của riêng họ. [Iñigo Quiles có 1 bộ sưu tầm các hàm rất hữu ích.](http://www.iquilezles.org/www/articles/functions/functions.htm){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Impulse](/tools/glsl_editor#content/impulse.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Cubic Pulse](/tools/glsl_editor#content/cubicpulse.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Expo](/tools/glsl_editor#content/expo.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [ExpStep](/tools/glsl_editor#content/expstep.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Parabola](/tools/glsl_editor#content/parabola.frag){:.external.hvr-forward rel="nofollow" target="_blank"}
    + [Pcurve](/tools/glsl_editor#content/pcurve.frag){:.external.hvr-forward rel="nofollow" target="_blank"}

![TEXT](/assets/img/collections/inigo_quiles_funcs.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

##### Try it yourself

![TEXT](/assets/img/collections/kynd.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

##### Tools
- [GraphToy](https://graphtoy.com/){:.external.hvr-forward rel="nofollow" target="_blank"}: Một sản phẩm của Iñigo Quilez để minh hoạ các hàm GLSL trên WebGL.
- [LYGIA Shader Library](https://lygia.xyz/){:.external.hvr-forward rel="nofollow" target="_blank"}: LYGIA là một thư viện shader gồm các chức năng có thể tái sử dụng, cho phép bạn tạo nguyên mẫu, port or ship một dự án chỉ trong vài phút.

#### Màu sắc

Mỗi dòng code dưới đây đều truy cập một giá trị giống nhau trong vector:
```c
vec4 vector;
// - 0 1 2 3
// - x y z w
// - r g b a
// - s t p q
vector[0] = vector.r = vector.x = vector.s;
vector[1] = vector.g = vector.y = vector.t;
vector[2] = vector.b = vector.z = vector.p;
vector[3] = vector.a = vector.w = vector.q;
```

Một tính năng khác cũng tuyệt vời không kém của vector trong GLSL là các giá trị bên trong có thể được tráo đổi (swizzle) vị trí theo bất kỳ trật tự nào bạn muốn, khiến cho việc xử lý chúng dễ dàng hơn bao giờ hết.
```c
vec3 yellow, magenta, green;

// Tạo màu vàng (1., 1., 0.)
yellow.rg = vec2(1.0);  // Gán giá trị 1. cho kênh R và G
yellow[2] = 0.0;        // Gán giá trị 0. cho kênh B

// Tạo màu hồng (1., 0., 1.)
magenta = yellow.rbg;   // Đảo vị trí của 2 kênh G và B

// Tạo màu xanh lá (0., 1., 0.)
green.rgb = yellow.bgb; // Lấy giá trị ở kênh B của màu vàng để gán đồng thời cho cả kênh R và B của màu xanh lá
```

#### Trộn màu

<!-- ![TEXT](/assets/img/collections/mix-f.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br> -->
Trong GLSL có 1 hàm rất hữu ích, đó là mix(), giúp bạn trộn 2 màu với nhau theo 1 tỉ lệ nhất định. Và tỉ lệ đó cũng nằm trong khoảng [0.0, 1.0].
<div class="codeAndCanvas" data="/assets/glsl_frag/frag_mix_colors.frag"></div>

Thử xem bạn thuần thục môn võ karate-shader đến đâu rồi nào:
- Hãy tạo một vùng chuyển tiếp mượt mà giữa 2 màu xem sao. Hãy sử dụng nó để diễn tả một cảm giác nào đó nhé. Màu gì thì diễn tả cảm giác đó tốt nhất? Nó xuất hiện rồi biến mất như thế nào? Rồi lại thử với một cảm giác khác. Sửa code để đổi 2 màu được chọn để trộn phía trên xem sao.
- Thay vì dùng hàm sin, hãy thử các hàm khác mà ta đã học ở chương trước xem sao
- Robert Penner đã phát triển một series các hàm số dùng trong animation rất nổi tiếng, chúng được gọi là các easing functions, bạn có thể sử dụng ví dụ này để tham khảo và lấy cảm hứng nhưng tốt nhất là bạn tự tạo ra dải màu gradient của riêng mình.

#### Gradient

Hàm mix() còn nhiều vũ khí bí mật khác nữa. Thay vì truyền vào 1 số thực float để chỉ định tỉ lệ trộn 2 màu, bạn có thay nó bằng một vec3 (hoặc vec4 tuỳ vào định dạng của 2 màu gốc) để chỉ định tỉ lệ trộn màu cho từng kênh r, g, b (và cả a) riêng biệt.<br>
<!-- ![TEXT](/assets/img/collections/mix-vec.jpg){:.w3-image.cursor-zoom onclick="onZoomImg(this)"} -->

<div class="codeAndCanvas" data="/assets/glsl_frag/frag_gradient01.frag"></div>

Hãy thử:
- Tạo dải màu gradient mô phỏng cảnh hoàng hôn của William Turner
- Chuyển qua lại giữa màu bình minh và hoàng hôn bằng cách dùng biến u_time.
- Tạo dải màu 7 sắc cầu vồng
- Sử dụng hàm step() để tạo nên những lá cờ sặc sỡ

#### HSB (Hue, Saturation, Brightness)

HSB là viết tắt của Hue (sắc độ), Saturation (độ bão hoà màu) và Brightness (hoặc Value, độ sáng), là một cách định dạng màu khác, vốn có tổ chức và dễ hiểu hơn nhiều. Hãy dành vài phút để đọc hiểu 2 hàm rgb2hsv() và hsv2rgb() trong đoạn code dưới đây.
<div class="codeAndCanvas" data="/assets/glsl_frag/frag_hsb_spacecolor.frag"></div>

##### HSB trong hệ toạ độ cực

*(TODO)*