#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 offset = vec2(0.5); // <--- điều chỉnh khung nhìn canvas

float function(in float x) {
    float y = 0.0;
    ///////////////////////////////// --- B E G I N--- ////////////////////////////////////////////////////
    float x2 = x * x;
    float x4 = x2 * x2;
    float x6 = x4 * x2;

    float fa = (4.0 / 9.0);
    float fb = (17.0 / 9.0);
    float fc = (22.0 / 9.0);

    y = fa * x6 - fb * x4 + fc * x2 - 1.0;
    ///////////////////////////////// --- E N D --- ////////////////////////////////////////////////////

    return y;
}

float lineJitter = 0.5;
float lineWidth = 7.0;
float gridWidth = 1.7;
float scale = 0.0013;
float zoom = 10.0;

float rand(in float _x) {
    return fract(sin(_x) * 1e4);
}

float rand(in vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(in float _x) {
    float i = floor(_x);
    float f = fract(_x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(rand(i), rand(i + 1.0), u);
}

float noise(in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);
    // Four corners in 2D of a tile
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
        (c - a) * u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
}

vec3 plot2D(in vec2 _st, in float _width) {
    const float samples = 3.0;

    vec2 steping = _width * vec2(scale) / samples;

    float count = 0.0;
    float mySamples = 0.0;
    for(float i = 0.0; i < samples; i++) {
        for(float j = 0.0; j < samples; j++) {
            if(i * i + j * j > samples * samples)
                continue;
            mySamples++;
            float ii = i + lineJitter * rand(vec2(_st.x + i * steping.x, _st.y + j * steping.y));
            float jj = j + lineJitter * rand(vec2(_st.y + i * steping.x, _st.x + j * steping.y));
            float f = function(_st.x + ii * steping.x) - (_st.y + jj * steping.y);
            count += (f > 0.) ? 1.0 : -1.0;
        }
    }
    vec3 color = vec3(1.0);
    if(abs(count) != mySamples)
        color = vec3(abs(float(count)) / float(mySamples));
    return color;
}

vec3 grid2D(in vec2 _st, in float _width) {
    float axisDetail = _width * scale;
    if(abs(_st.x) < axisDetail || abs(_st.y) < axisDetail)
        return 1.0 - vec3(0.65, 0.65, 1.0);
    if(abs(mod(_st.x, 1.0)) < axisDetail || abs(mod(_st.y, 1.0)) < axisDetail)
        return 1.0 - vec3(0.80, 0.80, 1.0);
    if(abs(mod(_st.x, 0.25)) < axisDetail || abs(mod(_st.y, 0.25)) < axisDetail)
        return 1.0 - vec3(0.95, 0.95, 1.0);
    return vec3(0.0);
}

void main() {
    vec2 st = (gl_FragCoord.xy / u_resolution.xy) - offset;
    st.x *= u_resolution.x / u_resolution.y;

    scale *= zoom;
    st *= zoom;

    vec3 color = plot2D(st, lineWidth);
    color -= grid2D(st, gridWidth);

    gl_FragColor = vec4(color, 1.0);
}