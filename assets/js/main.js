var gl, canvas;

function initWebGL(canvas) {
    gl = null;

    try {
        // Попытаться получить стандартный контекст. Если не получится, попробовать получить экспериментальный.
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}

    // Если мы не получили контекст GL, завершить работу
    if (!gl) {
        //alert("Unable to initialize WebGL. Your browser may not support it.");
        gl = null;
    }

    return gl;
}

function draw(){
    gl.clearColor(1.0, 1.0, 1.0, 0.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
}

function onResize(){
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    draw();
}

function start() {
    canvas = document.getElementById("overlay-canvas");
    gl = initWebGL(canvas);

    onResize();
    window.addEventListener("resize", onResize, true);

    draw();
}


document.addEventListener("DOMContentLoaded", start);