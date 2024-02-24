#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    // chuẩn hoá (normalize) toạ độ của từng fragment bằng cách chia nó cho kích thước của canvas.
	vec2 st = gl_FragCoord.xy/u_resolution;
	gl_FragColor = vec4(st.x,st.y,0.0,1.0);

    // Try it yourself
    // vec2 stYX = gl_FragCoord.yx/u_resolution;
	// gl_FragColor = vec4(stYX.x,stYX.y,0.0,1.0);

    // vec2 stXZ = gl_FragCoord.xz/u_resolution;
	// gl_FragColor = vec4(stXZ.x,stXZ.y,0.0,1.0);

    // vec2 stZX = gl_FragCoord.zx/u_resolution;
	// gl_FragColor = vec4(stZX.x,stZX.y,0.0,1.0);

    // vec2 stYZ = gl_FragCoord.yz/u_resolution;
	// gl_FragColor = vec4(stYZ.x,stYZ.y,0.0,1.0);

    // vec2 stZY = gl_FragCoord.zy/u_resolution;
	// gl_FragColor = vec4(stZY.x,stZY.y,0.0,1.0);

    // vec2 stMouse = gl_FragCoord.xy/u_mouse;
	// gl_FragColor = vec4(stMouse.x,stMouse.y,0.0,1.0);

    // vec2 stMouse = gl_FragCoord.xy/u_mouse;
	// gl_FragColor = vec4(stMouse.x, abs(sin(u_time * 3.0)), stMouse.y,1.0);
    
}
