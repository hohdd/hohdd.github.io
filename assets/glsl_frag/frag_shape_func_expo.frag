// Author: Inigo Quiles
// Title: Expo

// Kết quả của đoạn mã này là một hình ảnh có một đường cong màu xanh lá cây trên nền màu xám.
// Đường cong này có độ rộng không đều và có dạng như một hàm số mũ.
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    
    float tryItYourself = 5.0;
    // float tryItYourself = 2.0;
    // float tryItYourself = 1.0;
    // float tryItYourself = 20.0;
    // float tryItYourself = 0.0;
    // float tryItYourself = 0.2;
    // float tryItYourself = sin(u_time) + tan(u_time);

    // Giá trị này biểu diễn một hàm số mũ có đồ thị cong lên trên.
    float y = pow(st.x, tryItYourself); // giá trị của 'base' mũ 'exponent' (x mũ 5)

    // GLSL có vài hàm số riêng biệt PHẦN LỚN được tăng tốc bởi phần cứng.
    // VD: pow(), exp(), log(), sqrt(), step() và smoothstep()...
    // float y = step(0.5,st.x);
    // float y = smoothstep(0.1,0.9,st.x); // Smooth interpolation between 0.1 and 0.9
    // float y = smoothstep(0.1,0.5,st.x) - smoothstep(0.5,0.9,st.x); // paraboloid
    // float y = sin(st.x + u_time); // tuần hoàn 'sin'
    // float y = sin(st.x * PI + u_time); // chu kỳ bị co lại
    // float y = sin(st.x * u_time * 50.0 ); // tần số (frequency) giữa các chu kỳ ngày càng ngắn lại

    vec3 color = vec3(y);

    // Giá trị này biểu diễn mức độ gần gũi của điểm ảnh với đường thẳng y = pow(x,5.0).
    float pct = plot(st,y);

    // giá trị của biến pct có thể âm, nên phép nội suy tuyến tính sẽ không hoạt động chính xác.
    // Để khắc phục điều này, ta cần sử dụng hàm 'abs' để lấy giá trị tuyệt đối của biến pct trước khi nội suy.
    color = (1.0 - abs(pct))*color + abs(pct)*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}