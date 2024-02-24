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
- 

#### Uniform
- Hỗ trợ hầu hết các kiểu dữ liệu cơ bản như: **float, vec2, vec3, vec4, mat2, mat3, mat4, sampler2D** và **samplerCube**.
- Uniform được định nghĩa cùng với kiểu dữ liệu tương ứng, ở phần trên cùng của code shader, ngay sau khi quy định độ chính xác của các số thực.
- Tên của các biến có thể thay đổi theo từng chương trình

```glsl
#ifdef GL_ES
precision mediump float; // quy định độ chính xác của các số thực.
#endif

uniform vec2 u_resolution;  // Kích thước canvas (Rộng, cao)
uniform vec2 u_mouse;       // Vị trí con trỏ chuột trong canvas
uniform float u_time;       // Thời gian hiện tại tính từ lúc load xong shader
```

Phần cứng của **GPU giúp tăng tốc** các **hàm lượng giác** và **luỹ thừa**: *sin(), cos(), tan(), asin(), acos(), atan(), pow(), exp(), log(), sqrt(), abs(), sign(), floor(), ceil(), fract(), mod(), min(), max() và clamp()*. Chúng rất nhanh.

<div class="codeAndCanvas" data="/assets/glsl_frag/fragcolor_sin_utime.frag"></div>

#### 'gl_FragCoord' (input variable but not Uniform)

Ta cũng có biến **lưu trữ giá trị input**, vec4 **gl_FragCoord**, *là toạ độ của điểm ảnh* (**pixel**) *hoặc một vùng điểm ảnh* (**screen fragment**) *mà thread này đang xử lý*. Ta biết rằng giá trị của vec4 gl_FragCoord *khác nhau giữa từng thread*, nên nó **không phải là uniform**.

<div class="codeAndCanvas" data="/assets/glsl_frag/fragcoord_u_resolution.frag"></div>

Trong shader ta không có nhiều cách để debug lắm bên cạnh việc thử dùng một màu rất chói để kiểm tra.
