---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "Shaders: Cơ bản về Shaders trong Unity"
description: "Shaders: Cơ bản về Shaders trong Unity"

### HUMAN
header: "Shaders: Cơ bản về Shaders trong Unity"
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
collection: Investigate # this for AMP related post
### category: dùng để group collection
category: Investigate

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---

## Cơ bản về Shaders trong Unity

### Introduction

Sơ đồ bên dưới thể hiện 3 Thực thể khác nhau trong quy trình rendering của Unity3D.<br>
![TEXT](/assets/img/collections/3d-shader.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- **3D Model**: là tập hợp **tọa độ các đỉnh (Vertex)**, chúng được nối với nhau tạo thành hình tam giác. Mỗi đỉnh có thể chứa một số thông tin khác như Color, Normal, UV data
- **Material**: là phần fill vào các hình tam giác tạo bởi các Vertex. Các vật liệu khác nhau có thể chia sẻ cùng một shader. Những thông tin trong Inspector khi một Material được chọn gồm: màu **Albedo, Normal Map, Height Map, Occlusion, Emission...** [chi tiết ở đây](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterRenderingMode.html){:.hvr-float-shadow rel="nofollow" target="_blank"}

### Mổ xẻ một shader
- Unity3D hỗ trợ hai loại trình đổ bóng khác nhau: trình đổ bóng bề mặt ([**suface shaders**](https://docs.unity3d.com/Manual/SL-SurfaceShaders.html){:.hvr-float-shadow rel="nofollow" target="_blank"}) và trình đổ bóng đoạn và đỉnh ([**fragment and vertex shaders**](https://docs.unity3d.com/Manual/SL-ShaderPrograms.html){:.hvr-float-shadow rel="nofollow" target="_blank"}). Có một loại thứ ba, các shader chức năng cố định (**fixed function shaders**), nhưng chúng hiện đã lỗi thời và không khuyến khích sử dụng.
- Cấu trúc mộ file Shader code như bên dưới

```csharp
Shader "<name>"
{
    Properties // <optional: Material properties>
    {
        <Material property declaration>
        [optional: attribute] name("display text in Inspector", type name) = default value
        [Gamma] _ExampleName ("Integer display name", Integer) = 1
        [HDR] _ExampleName ("Float with range", Range(0.0, 1.0)) = 0.5
        [MainTexture] _ExampleName ("Texture3D", 3D) = "" {}
        [MainColor] _ExampleName("Example color", Color) = (.25, .5, .5, 1)
        [Normal] _ExampleName ("Example vector", Vector) = (.25, .5, .5, 1)
        ...
    } //--- end Properties

    SubShader // <One or more SubShader definitions>
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
        } //--- end Pass
    } //--- end SubShader

    // <optional: custom editor> // Sử dụng trình chỉnh sửa tùy chỉnh để hiển thị các loại dữ liệu mà Unity không thể hiển thị bằng Trình kiểm tra tài liệu mặc định của nó hoặc để xác định các điều khiển tùy chỉnh hoặc xác thực dữ liệu.
    CustomEditor “[custom editor class name]” // Unity sử dụng trình chỉnh sửa tùy chỉnh được xác định trong lớp được đặt tên, trừ khi điều này bị ghi đè bởi khối CustomEditorForRenderPipeline.
    CustomEditorForRenderPipeline “[custom editor class name]” “[render pipeline asset class name]” // Khi Nội dung đường ống kết xuất đang hoạt động là loại được đặt tên, Unity sử dụng trình chỉnh sửa tùy chỉnh được xác định trong lớp được đặt tên.

    // <optional: fallback>
    Fallback "<name>"
    Fallback "ExampleOtherShader"
    Fallback Off
} //--- end Shader
```

### How a surface shader works

![TEXT](/assets/img/collections/surface-shader.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

- Mô hình 3D trước tiên được chuyển đến một hàm có thể thay đổi hình dạng của nó.
- Sau đó, nó được chuyển (cùng với thông tin khác) đến một hàm xác định "giao diện" của nó bằng cách sử dụng một số thuộc tính trực quan.
- Cuối cùng, các thuộc tính này được mô hình chiếu sáng sử dụng để xác định mức độ ảnh hưởng của hình dạng bởi các nguồn sáng gần đó.
- Kết quả có được màu RGBA của từng pixel của mô hình.

### Surface function

Nó lấy dữ liệu từ mô hình 3D làm đầu vào và xuất ra các thuộc tính hiển thị của mô hình đó.

![TEXT](/assets/img/collections/shader_white.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Ví dụ: gán mầu trắng (White) cho Albedo
Shader "Example/Diffuse Simple" {
    SubShader {
      Tags { "RenderType" = "Opaque" }

      CGPROGRAM
      #pragma surface surf Lambert // Line 5 specifies that the surface function for this shader is "surf" and that a "Lambertian lighting model" should be used.
      struct Input {
          float4 color : COLOR;
      };
      void surf(Input IN, inout SurfaceOutput o) { // Hàm không sử dụng bất kỳ dữ liệu nào từ mô hình 3D gốc; mặc dù vậy, Cg/HLSL yêu cầu phải xác định cấu trúc đầu vào.
          o.Albedo = 1; // 1 = (1,1,1,1) = white
      }
      ENDCG

    }
    Fallback "Diffuse"
}
```

#### Surface intput
- Line 10: hàm **surf** không sử dụng bất kỳ dữ liệu nào từ mô hình 3D gốc; mặc dù vậy, Cg/HLSL yêu cầu phải xác định cấu trúc đầu vào.
- Input structure: viewDir, COLOR, screenPos, worldPos, worldRefl, worldNormal...

![TEXT](/assets/img/collections/shader_03.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Ví dụ: tạo hiệu ứng (chỉ định màu White cho Albedo) phụ thuộc vào khoảng cách từ một điểm cụ thể.
Shader "Example/Diffuse Distance" {
    Properties {
        _MainTex ("Texture", 2D) = "white" {}
        _Center ("Center", Vector) = (0,0,0,0) // Điểm so sánh
        _Radius ("Radius", Float) = 0.5 // khoảng cách, phạm vi, bán kính từ Center
    }
    SubShader {
        Tags { "RenderType" = "Opaque" }
        CGPROGRAM
        #pragma surface surf Lambert // Lighting Model
        struct Input { // Input Structure
            float2 uv_MainTex;
            float3 worldPos;
        };
        sampler2D _MainTex;
        float3 _Center;
        float _Radius;

        void surf (Input IN, inout SurfaceOutput o) { // Surface function
            float d = distance(_Center, IN.worldPos); // tính khoảng cách Center-Vertex
            float dN = 1 - saturate(d / _Radius); // clamps giá trị 'd' trong khoảng 0-1
            
            if (dN > 0.25 && dN < 0.3) // nếu 'dN' nằm trong một khoảng nào đó thì sẽ có màu WHITE
                o.Albedo = half3(1,1,1); // WHITE color
            else
                o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb; // nếu không thì lấy màu Texture
        }

        ENDCG
    } 
    Fallback "Diffuse"
}
```

#### Surface output
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

### Vertex function
![TEXT](/assets/img/collections/soldier.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Ví dụ: normal extrusion - đỉnh mới sẽ bị dịch chuyển một khoảng 'amount' so với đỉnh trước đó.
 Shader "Example/Normal Extrusion" {
    Properties {
      _MainTex ("Texture", 2D) = "white" {} // lấy Texture từ Inspector
      _Amount ("Extrusion Amount", Range(-0.0001,0.0001)) = 0 // cài đặt amount 
    }
    SubShader {
      Tags { "RenderType" = "Opaque" }
      CGPROGRAM
      #pragma surface surf Lambert vertex:vert // chỉ thị Surface function & Vertex Function
      struct Input {
          float2 uv_MainTex;
      };
      float _Amount;
      void vert (inout appdata_full v) { // Vertex Function
          v.vertex.xyz += v.normal * _Amount; // mở rộng các đỉnh theo hướng pháp tuyến
      }
      sampler2D _MainTex;
      void surf (Input IN, inout SurfaceOutput o) { // Surface function
          o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb; // màu từ Texture
      }
      ENDCG
    } 
    Fallback "Diffuse"
}
```

### Example: the snow shader
![TEXT](/assets/img/collections/shader_snow.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

![TEXT](/assets/img/collections/soldier_snow.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Ví dụ: tạo hiệu ứng Snow-Tuyết rơi trên các bề mặt đứng
Shader "Example/SnowShader" {
    Properties {
       _MainColor ("Main Color", Color) = (1.0,1.0,1.0,1.0)
        _MainTex ("Base (RGB)", 2D) = "white" {}
        _Bump ("Bump", 2D) = "bump" {}
        _Snow ("Level of snow", Range(-1, 1)) = 1
        _SnowColor ("Color of snow", Color) = (1.0,1.0,1.0,1.0)
        _SnowDirection ("Direction of snow", Vector) = (0,1,0)
        _SnowDepth ("Depth of snow", Range(0,0.0001)) = 0
    }
    SubShader {
        Tags { "RenderType"="Opaque" }
        LOD 200 // mức độ chi tiết
 
        CGPROGRAM
        #pragma surface surf Lambert vertex:vert
 
        sampler2D _MainTex;
        sampler2D _Bump;
        float _Snow;
        float4 _SnowColor;
        float4 _MainColor;
        float4 _SnowDirection;
        float _SnowDepth;
 
        struct Input {
            float2 uv_MainTex;
            float2 uv_Bump;
            float3 worldNormal;
            INTERNAL_DATA
        };
 
        //--- NOTE ---
        // Các hàm có sử dụng tính toán tốn kém, nên code bên dưới chỉ tham khảo, cân nhắc việc sử dụng trong thực tế để không ảnh hưởng hiệu suất!
        // -----------
        void vert (inout appdata_full v)
        {
            // Convert _SnowDirection from world space to object space
            float4 sn = mul(_SnowDirection, _World2Object);
            if(dot(v.normal, sn.xyz) >= _Snow)
                v.vertex.xyz += (sn.xyz + v.normal) * _SnowDepth * _Snow;         
        }
 
        void surf (Input IN, inout SurfaceOutput o)
        {
            half4 c = tex2D (_MainTex, IN.uv_MainTex);
            o.Normal = UnpackNormal (tex2D (_Bump, IN.uv_Bump));
            if(dot(WorldNormalVector(IN, o.Normal), _SnowDirection.xyz)>=_Snow)
                o.Albedo = _SnowColor.rgb;
            else
                o.Albedo = c.rgb * _MainColor;
            o.Alpha = 1;
        }
        ENDCG
    }
    FallBack "Diffuse"
}
```

### Lambertian model (Lighting Model)

#### Diffuse surfaces: the Lambertian model

Sơ đồ sau đây cho thấy các cạnh cực của hình bát giác nhận được ít ánh sáng hơn đáng kể so với cạnh phía trước<br>
![TEXT](/assets/img/collections/light-geometry2.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Đường **màu xanh** biểu thị **pháp tuyến của bề mặt**, là một vectơ trực giao (vuông góc) có độ dài đơn vị. **Màu cam** tượng trưng cho **hướng ánh sáng**. Lượng ánh sáng **I** khi mờ dần phụ thuộc vào góc giữa hướng normal **N** và hướng lighting **L**. Trong **mô hình Lambertian**, đại lượng này bằng với thành phần theo phương thẳng đứng của **tia sáng tới**.

#### The Lambertian shader

Cg/HLSL cho phép thay thế mô hình Lambertian (Lighting Model) tiêu chuẩn bằng chức năng tùy chỉnh

```csharp
Shader "Example/SimpleLambert" {
    Properties {
        _MainTex ("Texture", 2D) = "white" {}
    }
    SubShader {
        Tags { "RenderType" = "Opaque" }
        CGPROGRAM
        #pragma surface surf SimpleLambert // chỉ thị sử dụng 'SimpleLambert' buộc shader tìm kiếm một hàm 'LightingSimpleLambert'

        struct Input {
            float2 uv_MainTex;
        };

        sampler2D _MainTex;
        void surf (Input IN, inout SurfaceOutput o) {
            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;
        }

        // Hiểu cách hoạt động của mô hình chiếu sáng tiêu chuẩn là một bước thiết yếu nếu chúng ta muốn thay đổi nó. Trên thực tế, nhiều kỹ thuật tạo bóng thay thế vẫn sử dụng mô hình Lambertian làm bước đầu tiên.
        half4 LightingSimpleLambert (SurfaceOutput s, half3 lightDir, half atten) {
            half NdotL = dot (s.Normal, lightDir); // NdotL biểu thị hệ số cường độ, được nhân với màu của ánh sáng.
            half4 c;
            c.rgb = s.Albedo * _LightColor0.rgb * (NdotL * atten * 2); // 'atten' được dùng để điều chỉnh cường độ ánh sáng. Lý do tại sao nó được nhân với 2 là… một thủ thuật ban đầu được Unity3D sử dụng để mô phỏng một số hiệu ứng nhất định. Điều này cuối cùng đã được khắc phục trong Unity5 (hiện tại không cần *2)
            c.a = s.Alpha;
            return c;
        }

        ENDCG
    } 
    Fallback "Diffuse"
}
```

#### Toon shading

[Wikipadia: Cel shading](https://en.wikipedia.org/wiki/Cel_shading){:.hvr-float-shadow rel="nofollow" target="_blank"} thường được sử dụng để bắt chước phong cách của truyện tranh hoặc phim hoạt hình.

Đó là một phong cách kết xuất không mang tính chân thực, thay đổi cách ánh sáng phản chiếu trên mô hình để tạo ảo giác rằng nó được vẽ bằng tay. Để thực hiện phong cách này, chúng ta **cần thay thế mô hình chiếu sáng tiêu chuẩn** bằng một **mô hình tùy chỉnh (Lighting Model)**.

Kỹ thuật phổ biến nhất để đạt được phong cách này là sử dụng họa tiết bổ sung, được gọi là _RampTex trong trình đổ bóng bên dưới.

![TEXT](/assets/img/collections/solider_toon.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Ví dụ: shading theo phong cách vẽ tay, vẽ màu
Shader "Example/Toon Shading" {
    Properties {
        _MainTex ("Texture", 2D) = "white" {} // Texture chính
        _RampTex ("Ramp", 2D) = "white" {} // sử dụng họa tiết bổ sung
    }
    SubShader {
        Tags { "RenderType" = "Opaque" }
        CGPROGRAM
        #pragma surface surf Toon // chỉ thị 'Toon' để sử dụng 'LightingToon'

        struct Input {
            float2 uv_MainTex;
        };
        sampler2D _MainTex;
        void surf (Input IN, inout SurfaceOutput o) {
            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb; // sử dụng Texture chính
        }

        sampler2D _RampTex;
        fixed4 LightingToon (SurfaceOutput s, fixed3 lightDir, fixed atten)
        {
            half NdotL = dot(s.Normal, lightDir); 
            NdotL = tex2D(_RampTex, fixed2(NdotL, 0.5));

            fixed4 c;
            c.rgb = s.Albedo * _LightColor0.rgb * NdotL * atten * 2;
            c.a = s.Alpha;

            return c;
        }

        ENDCG
    } 
    Fallback "Diffuse"
}
```

Mô hình LightingToon tính toán hệ số cường độ Lambertian NdotL và sử dụng kết cấu đoạn đường nối để ánh xạ lại hệ số đó vào một tập hợp giá trị khác. Trong trường hợp này, chỉ giới hạn cường độ ở bốn giá trị. Các kết cấu đoạn đường nối khác nhau sẽ đạt được các biến thể bóng đổ hoạt hình hơi khác nhau.<br>![TEXT](/assets/img/collections/shader_ramp.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Specular surfaces: the Blinn-Phong model

Mô hình Lambertian không thể mô phỏng các vật liệu có phản xạ gương. Một kỹ thuật khác là mô hình Blinn-Phong. Thay vì tính tích số DOT giữa hướng pháp tuyến **N** và hướng sáng **L**, nó sử dụng vectơ **H** nằm giữa **L** và hướng xem **V**. Cả hai surface functions Lambertian và Blinn-Phong đều được tính toán trong tệp **Lighting.cginc**.<br>
![TEXT](/assets/img/collections/shader_blinn-phong.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

### Vertex and fragment shaders

Việc tính toán shader được thực hiện theo hai bước:
- Đầu tiên, hình học được truyền qua hàm **vert**, hàm **vert** có thể thay đổi vị trí và dữ liệu của từng đỉnh.
- Sau đó, kết quả đưa vào hàm **frag** và kết quả cuối cùng tạo ra Color của Pixel.

![TEXT](/assets/img/collections/shader-vertex-and-fragment.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

Quy trình làm việc ở trên có vẻ rất giống với trình đổ bóng bề mặt. Sự khác biệt chính là không có ngữ nghĩa cho các thuộc tính vật lý ở đây. Các khái niệm như albedo, gloss and specular là không có ở cấp độ này. Vì lý do này, Vertex and fragment shaders **thường được sử dụng cho các vật liệu phi thực tế**, *đồ họa 2D hoặc các hiệu ứng xử lý hậu kỳ*. Tuy nhiên, vẫn có thể triển khai lại mô hình chiếu sáng tùy chỉnh trong Vertex and fragment shaders. Trên thực tế, mọi trình đổ bóng bề mặt thực sự được tổng hợp thành một Vertex và một fragment.

Vì trình đổ bóng đỉnh và đoạn không có bất kỳ khái niệm nào về ánh sáng nên việc trả về màu đỏ ở đây có nghĩa là toàn bộ mô hình sẽ có màu đỏ #ff0000, không có sắc thái hoặc chi tiết; chỉ là một hình bóng màu đỏ.

![TEXT](/assets/img/collections/soldier-red.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Ví dụ: Vertex and fragment shaders
Shader "Custom/SolidColor" {
    SubShader {
        Pass {
            CGPROGRAM

            // chỉ định hàm nào sẽ được sử dụng để tính toán đỉnh và đoạn.
            #pragma vertex vert             
            #pragma fragment frag

            struct vertInput { // khởi tạo vertInput
                float4 pos : POSITION; // binding semantic (ngữ nghĩa ràng buộc): khởi tạo vị trí với các vị trí đỉnh.
            };  

            struct vertOutput { // khởi tạo vertOutput
                float4 pos : SV_POSITION; // binding semantic (ngữ nghĩa ràng buộc): khởi tạo vị trí màn hình của một đỉnh
            };

            vertOutput vert(vertInput input) {
                vertOutput o;
                o.pos = mul(UNITY_MATRIX_MVP, input.pos); // Đỉnh nhận được là vị trí của một đỉnh trong tọa độ thế giới, điểm này phải được chuyển đổi thành tọa độ màn hình
                return o; // UNITY_MATRIX_MVP khi kết hợp với vị trí của một đỉnh, nó sẽ trả về vị trí của nó trên màn hình.
            }

            half4 frag(vertOutput output) : COLOR {
                return half4(1.0, 0.0, 0.0, 1.0); 
            }
            ENDCG
        }
    }
}
```

#### Input semantics

Danh sách **binding semantics** phổ biến nhất của **vertInput**. Tham khảo [Cg Manual](https://developer.download.nvidia.com/cg/Cg_3.1/Cg-3.1_April2012_ReferenceManual.pdf){:.hvr-float-shadow rel="nofollow" target="_blank"}

| Binding Semantics | Description
|:-|:-:|-:
| POSITION, SV_POSITION | vị trí của một đỉnh trong tọa độ thế giới (không gian đối tượng);
| NORMAL  | pháp tuyến của một đỉnh, so với thế giới (không phải với máy ảnh);
| COLOR, COLOR0, DIFFUSE, SV_TARGET  | thông tin màu sắc được lưu trữ ở đỉnh;
| COLOR1, SPECULAR  | thông tin màu thứ cấp được lưu trữ ở đỉnh;
| FOGCOORD  | tọa độ sương mù;
| TEXCOORD0, TEXCOORD1, …, TEXCOORDi  | dữ liệu UV thứ i được lưu trữ ở đỉnh.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

#### Output semantics

Danh sách **binding semantics** phổ biến nhất của **vertOutput**.

| Binding Semantics | Description
|:-|:-:|-:
| POSITION, SV_POSITION, HPOS  | vị trí của một đỉnh trong tọa độ của máy ảnh (không gian clip, từ 0 đến 1 cho mỗi chiều);
| COLOR, COLOR0, COL0, COL, SV_TARGET  | màu cơ bản phía trước;
| COLOR1, COL1  | màu thứ cấp phía trước;
| FOGC, FOG  | tọa độ sương mù;
| TEXCOORD0, TEXCOORD1, …, TEXCOORDi, TEXi  | dữ liệu UV thứ i được lưu trữ ở đỉnh;
| PSIZE, PSIZ  | kích thước của điểm chúng ta đang vẽ;
| WPOS  | vị trí, tính bằng pixel, trong cửa sổ (gốc ở góc dưới bên trái).
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-orange}

#### Binding Semantics confusion
- Tất cả ngữ nghĩa đều có nhiều từ đồng nghĩa (ví dụ: COLOR và COLOR0), điều này thường gây hoang mang cho các nhà phát triển lần đầu tiếp cận
- Cùng một decorator có thể có các ý nghĩa khác nhau nếu được sử dụng trong verInput hoặc vertOutput (ví dụ: POSITION là tọa độ thế giới hoặc tọa độ màn hình tương ứng);
- Ý nghĩa tương tự có thể có các decorator khác nhau (ví dụ: FOGCOORD và FOG tương ứng cho vertInput và vertOutput);
- Hầu hết phần cứng buộc tất cả các trường của cấu trúc phải có ngữ nghĩa ràng buộc. Nếu bạn muốn đưa vào thứ gì đó không hoàn toàn phù hợp với những thứ được liệt kê ở trên, bạn sẽ phải tìm cách khác hoặc lưu trữ nó vào **TEXCOORD*i***;
- Một số ngữ nghĩa chỉ có thể chạy trên một số phần cứng nhất định và đã được thay thế (ví dụ: WPOS nên được thay thế bằng ComputerScreenPos).

#### Glass shading

Vertex and fragment shaders thường được sử dụng cho các vật liệu đặc biệt. Ví dụ: nước và thủy tinh thường đi kèm với các hiệu ứng biến dạng và mô hình ánh sáng không phù hợp với logic của trình đổ bóng bề mặt.

##### The grab pass

Một số shader phức tạp đến mức chúng cần được hiển thị nhiều lần trong các lần chuyển tiếp khác nhau. Unity3D hỗ trợ một loại **Pass** đặc biệt gọi là **GrabPass**; nó không hiển thị bất cứ thứ gì trên màn hình, nhưng nó ghi lại những gì đã được vẽ trên một kết cấu. Ví dụ sau đây sử dụng GrabPass để lấy họa tiết và xuất lại trên màn hình. Về cơ bản, nó thực hiện rất nhiều thứ mà không làm gì cả.

```csharp
Shader "Custom/GrabShader" 
{
    SubShader
    {
        Tags {"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Opaque"}
        ZWrite On Lighting Off Cull Off Fog { Mode Off } Blend One Zero

        GrabPass { "_GrabTexture" }
        
        Pass 
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            sampler2D _GrabTexture;

            struct vin_vct
            {
                float4 vertex : POSITION;
            };

            struct v2f_vct
            {
                float4 vertex : POSITION;
                float4 uvgrab : TEXCOORD1;
            };

            // Vertex function 
            v2f_vct vert (vin_vct v)
            {
                v2f_vct o;
                o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
                o.uvgrab = ComputeGrabScreenPos(o.vertex); // tính vị trí hiện tại của vật thể so với máy ảnh
                return o;
            }

            // Fragment function
            half4 frag (v2f_vct i) : COLOR
            {
                fixed4 col = tex2Dproj( _GrabTexture, UNITY_PROJ_COORD(i.uvgrab));
                return col;
            }
        
            ENDCG
        } 
    }
}
```

##### The distortion

Có một số cách để làm biến dạng hình ảnh. Cách mà trình đổ bóng thường thực hiện việc này là thông qua một kết cấu khác gọi là **bump map**. **Bump maps** thường được sử dụng để chỉ ra cách ánh sáng phản chiếu trên một bề mặt; chúng ta có thể sử dụng chúng để làm điều tương tự trên kính.

```csharp
_BumpMap ("Noise text", 2D) = "bump" {}
```

Trong **bump map** truyền thống, các kênh RGB biểu thị độ dịch chuyển tương ứng trên trục X, Y, Z. Vì quan tâm đến kính phẳng nên chúng tôi sẽ chỉ tính đến hai thành phần đầu tiên. Tuy nhiên do giá trị của pixel trong phạm vi hình ảnh từ 0 đến 1, trong khi chúng ta muốn có thể có độ dịch chuyển từ -1 đến +1. unity3D cung cấp chức năng trợ giúp để thực hiện chuyển đổi này (sử dụng **UnpackNormal**):

```csharp
half4 bump = tex2D(_BumpMap, i.texcoord);
half2 distortion = UnpackNormal(bump).rg; // From 0..1 to -1..+1
```

Có hai cách để tạo một **normal map**:
- Cách đầu tiên là tạo ba hình ảnh thang độ xám riêng biệt để sử dụng ở các kênh R, G và B. Tuy nhiên, việc này rất tốn công sức. Unity3D cung cấp một cách tiếp cận khác dựa trên **height maps**.
- Thay vì vẽ trực tiếp normal map, bạn có thể vẽ hình ảnh thang độ xám thể hiện khoảng cách của một vật thể với máy ảnh: các pixel trắng được dập nổi và các pixel đen được dập nổi.

![TEXT](/assets/img/collections/glass.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

![TEXT](/assets/img/collections/glass-normal.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}

##### glass shader
![TEXT](/assets/img/collections/glass.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Putting everything together...
// Mặc dù được sử dụng cho kính, kỹ thuật shading  này hoàn hảo cho các hiệu ứng khác chẳng hạn như nước chảy, sóng xung kích do vụ nổ của nhiễu loạn không khí do lửa tạo ra.
Shader "Custom/GlassShader" 
{
    Properties 
    {
        _MainTex ("Base (RGB) Trans (A)", 2D) = "white" {}
        _Colour ("Colour", Color) = (1,1,1,1)

        _BumpMap ("Noise text", 2D) = "bump" {}
        _Magnitude ("Magnitude", Range(0,1)) = 0.05
    }
    
    SubShader
    {
        Tags {"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Opaque"}
        ZWrite On Lighting Off Cull Off Fog { Mode Off } Blend One Zero

        GrabPass { "_GrabTexture" }
        
        Pass 
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            sampler2D _GrabTexture;

            sampler2D _MainTex;
            fixed4 _Colour;

            sampler2D _BumpMap;
            float  _Magnitude;

            struct vin_vct
            {
                float4 vertex : POSITION;
                float4 color : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            struct v2f_vct
            {
                float4 vertex : POSITION;
                fixed4 color : COLOR;
                float2 texcoord : TEXCOORD0;

                float4 uvgrab : TEXCOORD1;
            };

            // Vertex function 
            v2f_vct vert (vin_vct v)
            {
                v2f_vct o;
                o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
                o.color = v.color;

                o.texcoord = v.texcoord;

                o.uvgrab = ComputeGrabScreenPos(o.vertex);

                // Để giải quyết vấn đề mọi thứ lộn ngược (do sự không nhất quán giữa cách các phiên bản Unity3D khác nhau diễn giải dữ liệu UV) 
                #if UNITY_UV_STARTS_AT_TOP
                o.uvgrab.y *= -1;
                #endif

                return o;
            }

            // Fragment function
            half4 frag (v2f_vct i) : COLOR
            {
                half4 mainColour = tex2D(_MainTex, i.texcoord);
                
                half4 bump = tex2D(_BumpMap, i.texcoord);
                half2 distortion = UnpackNormal(bump).rg;

                i.uvgrab.xy += distortion * _Magnitude;

                fixed4 col = tex2Dproj( _GrabTexture, UNITY_PROJ_COORD(i.uvgrab));
                return col * mainColour * _Colour;
            }
        
            ENDCG
        } 
    }
}
```

#### Animated materials: a water shader

Nước, lửa và các vật liệu chuyển động khác biểu hiện những biến dạng phức tạp hơn và liên tục chuyển động. Để làm được điều này, chúng ta cần một cách để thêm khái niệm về thời gian vào trình đổ bóng. Về mặt lý thuyết, điều này có thể thực hiện được bằng cách thêm thuộc tính _Time được cập nhật ở mỗi khung hình theo thời gian trò chơi hiện tại.

May mắn thay, Unity3D đã tích hợp **_Time** là một mảng có độ dài 4, lần lượt chứa t/20, t, t*2 và t*3 (trong đó t là thời gian thực tế). Nếu cần thứ gì đó dao động theo thời gian, chúng ta cũng có thể sử dụng **_SinTime** *(sin(t/8), sin(t/4), sin(t/2) và sin(t)).*

![TEXT](/assets/img/collections/water.gif){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
```csharp
// Shader này sử dụng ba kết cấu:
// _GrabTexture: kết cấu đã được lấy trước đó;
// _NoiseTex: kết cấu chứa Noise ngẫu nhiên được sử dụng để tăng vẻ ngoài ngẫu nhiên của nước;
// _CausticTex: một kết cấu phản chiếu ăn da, được sử dụng để mang lại cảm giác chân thực hơn cho mặt nước.
...
// Fragment function
fixed4 frag (v2f_vct i) : COLOR {
    fixed4 noise = tex2D(_NoiseTex, i.texcoord); // _NoiseTex: tăng vẻ ngoài ngẫu nhiên của nước
    fixed4 mainColour = tex2D(_MainTex, i.texcoord);
            
    float time = _Time[1];

    float2 waterDisplacement =
    sinusoid // gọi hàm 'sinusoid' được định nghĩa ở dưới!
    (
        float2 (time, time) + (noise.xy) * _offset,
        float2(-_waterMagnitude, -_waterMagnitude),
        float2(+_waterMagnitude, +_waterMagnitude),
        float2(_waterPeriod, _waterPeriod)
    );
                
    i.grabUV.xy += waterDisplacement;
    fixed4 col = tex2Dproj( _GrabTexture, UNITY_PROJ_COORD(i.grabUV));
    fixed4 causticColour = tex2D(_CausticTex, i.texcoord.xy*0.25 + waterDisplacement*5); // _CausticTex: cảm giác chân thực hơn cho mặt nước
    return col * mainColour * _waterColour * causticColour;
}

// Thay vì dựa _SinTime, chúng ta sử dụng hàm 'sin' để kiểm soát tốt hơn. Công việc của nó là tạo một sóng hình sin tùy chỉnh có thời gian tối thiểu, tối đa và chu kỳ đã biết.
float2 sinusoid (float2 x, float2 m, float2 M, float2 p) {
    float2 e   = M - m;
    float2 c = 3.1415 * 2.0 / p;
    return e / 2.0 * (1.0 + sin(x * c)) + m;
}
...
```

#### World, screen and object positions

Trong input structure của surface shaders, bạn có thể khai báo các trường đặc biệt như **worldPos** và **screenPos** chứa vị trí của pixel hiện tại trong tọa độ thế giới và màn hình tương ứng. **Vertex and fragment shaders không hỗ trợ chúng**. *Đoạn mã sau đây cho biết cách sao chép chúng*:

```csharp
#include "UnityCG.cginc"

struct vertOutput {
    float4 pos : SV_POSITION;    // Clip space
    fixed4 color : COLOR;        // Vertex colour
    float2 texcoord : TEXCOORD0;    // UV data

    // wPos, sPos và cPos không có ngữ nghĩa ràng buộc thực sự (binding semantics).
    // TEXCOORD thường được sử dụng ngay cả khi chúng không chứa bất kỳ thông tin trực tiếp nào về dữ liệu UV.
    float3 wPos : TEXCOORD1;    // World position
    float4 sPos : TEXCOORD2;    // Screen position
    float3 cPos : TEXCOORD3;    // Object center in world
};

vertOutput vert (appdata_full v)
{
    vertOutput o;
    o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
    o.color = v.color;
    o.texcoord = v.texcoord;

    o.wPos = mul(_Object2World, v.vertex).xyz;
    o.sPos = ComputeScreenPos(o.pos);
    o.cPos = mul(_Object2World, half4(0,0,0,1));

    return o;
}
    
half4 frag (vertOutput i) : COLOR
{
    i.sPos.xy /= i.sPos.w;
    // ...rest of the shader
}
```

### Screen shaders and image effects

TODO...