#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // tọa độ canvas
uniform vec2 u_mouse; // tọa độ chuột
uniform float u_time; // thời gian trôi qua từ khi load xong shader

// Hàm này sẽ trả về một giá trị giữa 0.0 và 1.0 để vẽ một đường thẳng trên trục y.
float plot(vec2 st) {    
    // Hàm smoothstep nhận ba tham số: edge0, edge1, và x.
    // Hàm này sẽ trả về 0.0 nếu x nhỏ hơn edge0, trả về 1.0 nếu x lớn hơn edge1,
    // và trả về một giá trị nội suy giữa 0.0 và 1.0 nếu x nằm giữa edge0 và edge1.
    // abs(st.y - st.x) biểu diễn khoảng cách giữa điểm st và đường thẳng y = x.
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
    // edge0 vaf edge1 bề dầy đường thẳng
    // abs(...) để lấy 2 phần ngoài edge0 và edge1 giống nhau, phần âm giống phần dương
}

void main() {
    // gl_FragCoord lưu trữ tọa độ của điểm ảnh hiện tại đang được xử lý bởi shader.
    // st = screen texture
	vec2 st = gl_FragCoord.xy/u_resolution; // chuẩn hóa giá trị (0.0-1.0)

    float y = st.x; // tách phần st.x ra y (để tạo đường thẳng y = x thể hiện bằng màu)
    vec3 color = vec3(y); // thể hiện màu cho trục y (gán màu của cả 3 kênh RGB giống nhau)

    // Plot a line (pct = percentage)
    float pct = plot(st); // --> được trọng số/hệ số theo nội dung triển khai trong hàm plot()
    // vì smoothstep bị kẹp trong 0-1 nên pct nằm trong khoảng [0,1]

    // color = 1.0 *color; // color không đổi -> y = x là một gradient từ 0->1
    // color = 0.0 *color; // color = black (0,0,0) bất kể giá trị x
    // color = 0.364 * color; // y = a*x
    // color = (1.0-pct)*color; // thêm pct làm trọng số
    // color = pct*vec3(0.0,1.0,0.0); // thể hiện pct với màu green

    color = (1.0-pct)*color + pct*vec3(0.0,1.0,0.0); // đường thẳng spot với màu nền có pct là trọng số

    // tạo một vector 4 chiều từ một vector 3 chiều kết hợp một số thực nữa dành cho chiều thứ tư
	gl_FragColor = vec4(color,1.0);
}