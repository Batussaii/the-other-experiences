/**
 * WebGL Background Shader - The Others Experience
 * Fondo con circuitos azules + rayos estilo trueno
 */

// Utilidad WebGL mínima (sin dependencias)
const canvas = document.getElementById('bg');
const gl = canvas.getContext('webgl', {
    antialias: false, 
    depth: false, 
    stencil: false, 
    premultipliedAlpha: false
});

if (!gl) {
    console.error('WebGL no disponible');
    canvas.style.display = 'none';
}

// Vertex shader
const vert = `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Fragment shader avanzado con rayos que caen al centro
const frag = `
precision highp float;
uniform vec2  iResolution;
uniform float iTime;
uniform vec2  iMouse;
uniform float iFocusMode; // 0.0 = normal, 1.0 = focus mode
uniform float iActiveSide; // 0.0 = blue, 1.0 = red

/* ---------- util ---------- */
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v=0., a=0.5;
  for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
  return v;
}

/* ---------- parámetros rápidos ---------- */
const float BLUE_INTENSITY = 1.15;   // + azul visible
const float CRACK_GLOW     = 0.55;   // glow de la grieta
const float BOLT_CORE_W    = 0.012;  // grosor del filamento
const float BOLT_GLOW_W    = 0.085;  // grosor del halo
const float BOLT_POWER     = 0.85;  // fuerza de los rayos (mitad del anterior)
const int   BOLT_COUNT     = 5;      // nº de rayos

/* distancia firmada a un "rayo" que parte del centro y se extiende horizontalmente hacia la derecha */
float boltDistance(vec2 p, float startY, float seed){
  // trayectoria horizontal que progresa desde el centro hacia la derecha con ondulaciones en Y
  float x = clamp(p.x, 0.0, 1.2);  // solo lado derecho
  // Los rayos parten del centro (x=0) y se extienden horizontalmente hacia la derecha
  float progress = smoothstep(0.0, 1.0, x);  // progresión horizontal
  // Todos los rayos parten del centro (Y=0) y se ramifican hacia sus posiciones finales
  float path = mix(0.0, startY, progress);   // del centro hacia la posición final
  // Ondulaciones suaves usando ruido
  float wob = (noise(vec2(x*8.0 + seed*3.0, iTime*1.5 + seed*7.0)) - 0.5);
  path += wob * 0.15;                        // ondulaciones más pronunciadas
  return abs(p.y - path);
}

/* capa de rayos rojos (aditiva) */
vec3 lightningLayer(vec2 p, float dividerPos){
  if(p.x <= dividerPos) return vec3(0.0);    // solo lado rojo
  // posición vertical de partida de cada rayo (distribuidos verticalmente)
  float bolts = 0.0, halo = 0.0;
  for(int i=0;i<BOLT_COUNT;i++){
    float idx = float(i);
    float startY = -0.6 + 0.3*idx;           // -0.6, -0.3, 0.0, 0.3, 0.6 (distribuidos verticalmente)
    float d = boltDistance(p, startY, idx*1.37);
    // filamento muy fino + halo
    float core = smoothstep(BOLT_CORE_W, 0.0, d);
    float glow = smoothstep(BOLT_GLOW_W, 0.0, d);
    // parpadeo tipo trueno
    float flick = 0.75 + 0.25*sin(iTime*30.0 + idx*4.7);
    bolts += core * flick;
    halo  += glow  * 0.6;
  }
  // decae con la distancia a la grieta (más fuerte cerca del centro)
  float towardCenter = 1.0 - smoothstep(0.0, 0.9, abs(p.x));
  vec3 c = vec3(0.8,0.18,0.08) * (bolts*1.2 + halo*0.7) * towardCenter * BOLT_POWER;
  return c;
}

void main(){
  vec2 R=iResolution.xy;
  vec2 uv=gl_FragCoord.xy/R;
  vec2 p=(gl_FragCoord.xy-0.5*R)/R.y;

  // parallax suave
  vec2 par=(iMouse-0.5)*0.15;
  vec2 pl=p+par*0.08, pr=p-par*0.08;

  /* ---- base: azul a la izquierda, rojo más intenso a la derecha ---- */
  vec3 blueBase = vec3(0.03,0.09,0.16);
  vec3 redBase  = vec3(0.15,0.04,0.02);
  
  // Ajustar la división según el estado de navegación
  float dividerPos = 0.0; // centro por defecto
  if(iFocusMode > 0.5) {
    if(iActiveSide > 0.5) {
      // Modo rojo activo - mover división hacia la izquierda
      dividerPos = -0.3;
    } else {
      // Modo azul activo - mover división hacia la derecha
      dividerPos = 0.3;
    }
  }
  
  float side = smoothstep(dividerPos-0.02,dividerPos+0.02,p.x);
  vec3 col = mix(blueBase, redBase, side);

  /* ---- lado azul: leve textura "circuito" + barra vertical ---- */
  float grid = smoothstep(0.018,0.0, abs(fract((pl.x*3.8+pl.y*0.6+ iTime*0.04)/0.22)-0.5));
  float strip= smoothstep(0.10, 0.0, abs(p.x+0.22));
  vec3 blue  = vec3(0.12,0.28,0.65)*(grid*0.5 + strip*0.75);
  col += blue * BLUE_INTENSITY * smoothstep(0.0,-0.02,p.x);

  /* ---- grieta central ---- */
  float warp = 0.010 * sin(p.y*11.0 + iTime*0.55);
  float core = smoothstep(0.014, 0.0, abs(p.x-dividerPos+warp));
  float glow = smoothstep(0.42, 0.0, abs(p.x-dividerPos)) * CRACK_GLOW;
  col += vec3(1.0,0.40,0.16) * (core*0.55 + glow*0.45);

  /* ---- rayos rojos que caen al centro ---- */
  col += lightningLayer(pr, dividerPos);

  /* polvo/partículas sutiles + viñeteado */
  float dust = smoothstep(0.75,1.0, noise(uv*R.y*0.5 + iTime*22.0)) * 0.08;
  float vign = smoothstep(1.25, 0.25, length(p));
  col = (col + dust) * vign;

  gl_FragColor = vec4(pow(col, vec3(0.95)), 1.0);
}
`;

// Función para compilar shaders
function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); 
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(s)); 
        throw new Error('Shader compilation failed');
    }
    return s;
}

// Crear y configurar el programa WebGL
const prog = gl.createProgram();
gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
gl.linkProgram(prog);

if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { 
    console.error('Link error:', gl.getProgramInfoLog(prog)); 
    throw new Error('Program linking failed'); 
}

gl.useProgram(prog);

// Quad
const buf = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1,  -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
const loc = gl.getAttribLocation(prog, 'position'); 
gl.enableVertexAttribArray(loc);
gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

// Uniforms
const uRes = gl.getUniformLocation(prog, 'iResolution');
const uTime = gl.getUniformLocation(prog, 'iTime');
const uMouse = gl.getUniformLocation(prog, 'iMouse');
const uFocusMode = gl.getUniformLocation(prog, 'iFocusMode');
const uActiveSide = gl.getUniformLocation(prog, 'iActiveSide');

let start = performance.now();
let mouse = [0.5, 0.5];
let focusMode = 0.0; // 0.0 = normal, 1.0 = focus mode
let activeSide = 0.0; // 0.0 = blue, 1.0 = red

function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(innerWidth * dpr);
    const h = Math.floor(innerHeight * dpr);
    
    if (canvas.width !== w || canvas.height !== h) { 
        canvas.width = w; 
        canvas.height = h; 
        gl.viewport(0, 0, w, h); 
    }
    canvas.style.width = '100%'; 
    canvas.style.height = '100%';
}

addEventListener('resize', resize, {passive: true});
addEventListener('mousemove', e => { 
    mouse = [e.clientX / innerWidth, 1 - e.clientY / innerHeight]; 
}, {passive: true});

resize();

(function loop(now) {
    const t = (now - start) / 1000;
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, t);
    gl.uniform2f(uMouse, mouse[0], mouse[1]);
    gl.uniform1f(uFocusMode, focusMode);
    gl.uniform1f(uActiveSide, activeSide);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(loop);
})(start);

// Funciones para actualizar el estado del shader
window.updateWebGLState = function(isFocusMode, side) {
    focusMode = isFocusMode ? 1.0 : 0.0;
    activeSide = (side === 'red') ? 1.0 : 0.0;
};

// Función para resetear el estado
window.resetWebGLState = function() {
    focusMode = 0.0;
    activeSide = 0.0;
};
