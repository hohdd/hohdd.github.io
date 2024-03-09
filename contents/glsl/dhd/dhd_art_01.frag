// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// cosine based palette, 4 vec3 params
vec3 palette( in float t)
{
	vec3 a = vec3(0.5, 0.5, 0.5);
	// vec3 b = vec3(0.5, 0.5, 0.5);
	// vec3 c = vec3(1.0, 1.0, 1.0	);
	// vec3 d = vec3(0.263, 0.416, 0.557);
	vec3 b = vec3(0.780,0.780,0.780);
	vec3 c = vec3(0.760,0.760,0.760);
	vec3 d = vec3(0.099,0.157,0.210);
    
    // t chạy từ 0 đến 1
    // dao động c lần với pha d
    // sai lệch theo a và b để đáp ứng độ tương phản và độ sáng mong muốn.
    return a + b*cos( 6.28*(c*t+d) ); // color(t) = a + b ⋅ cos[2π(c ⋅ t + d)]
}

void main() {
    // vec2 uv = gl_FragCoord.xy / u_resolution;
    // uv -= 0.5;
    // uv *= 2.0;
    // uv *= u_resolution.x / u_resolution.y;
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    vec2 uv0 = uv; // <--- thêm một lớp color thứ 2 chồng lên
    
    vec3 finalColor = vec3(0.0);
    
    // for (float i = 0.0; i < 1.0; i++) {
    for (float i = 0.0; i < 4.0; i++) {
        // uv *= 2.;
        // uv = fract(uv);
        // uv -= 0.5;
        // uv = fract(uv*2.0)-0.5;
        uv = fract(uv*1.5)-0.5; // chia nhỏ UV làm nhiều phần lặp lại. Thay vì 2.0 thì sử dụng 1.5 để phá vỡ sự đối xứng

        // float d = length(uv);
        float d = length(uv) * exp(-length(uv0)); // exp tăng giảm ngược line (tạo animation)

        vec3 color = palette(length(uv0) + i*0.4 + u_time*0.4);

        d = sin(d*8. + u_time)/8.;
        d = abs(d);

        // d = 0.02/d;
        // d = 0.01/d;
        d = pow(0.01/d, 1.2); // sử dụng pow(x) để làm nổi bật vùng đen => tăng độ nét và tương phản
        // a/x => a giống cường độ sáng

        // color *= d;
        finalColor += color * d; // tương tự vẽ đồ thị F(d) với color
    }
    
    gl_FragColor = vec4(finalColor,1.0);
}