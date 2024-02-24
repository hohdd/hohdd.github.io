#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(abs(sin(u_time / 2.0)),0.0,0.0,1.0);
	
	// Try it yourself
	// gl_FragColor = vec4(abs(sin(u_time * 12.0)), abs(sin(u_time * 22.0)), abs(sin(u_time * 32.0)),1.0);
}