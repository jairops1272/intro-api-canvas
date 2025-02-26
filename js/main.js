// 1. Obtener una referencia al elemento HTML <canvas> con el ID 'canvas'
var canvas = document.getElementById("canvas");
// Este es el área en la que vamos a dibujar, representa el lienzo.

var ctx = canvas.getContext("2d");
// El método `getContext("2d")` obtiene el contexto de dibujo 2D del lienzo.

// Establecer el color de relleno a verde para el contenido inicial
ctx.fillStyle = "rgb(90, 146, 203)"; // Establece el color verde
ctx.fillRect(10, 10, 200, 100); // Dibuja un rectángulo relleno en las coordenadas (10, 10)

// Función para obtener el contexto del canvas por su ID
function getCanvasContext(canvasId) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    return canvas.getContext("2d");
}

// 1. Dibujar una cuadrícula
function drawGrid() {
    var ctx = getCanvasContext("gridCanvas");
    if (!ctx) return;

    ctx.strokeStyle = "gray";
    for (let x = 0; x <= 300; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 300);
        ctx.stroke();
    }
    for (let y = 0; y <= 300; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(300, y);
        ctx.stroke();
    }
}

// 2. Dibujar un rectángulo relleno
function drawRectangle() {
    var ctx = getCanvasContext("rectCanvas");
    if (!ctx) return;

    ctx.fillStyle = "rgb(56, 80, 105)";
    ctx.fillRect(25, 25, 100, 100); // Dibujar rectángulo relleno
    ctx.clearRect(45, 45, 60, 60); // Borrar una parte del rectángulo
    ctx.strokeRect(50, 50, 50, 50); // Dibujar el borde del rectángulo
}

// 3. Dibujar trazados
function drawPaths() {
    var canvas = document.getElementById("pathsCanvas");
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.fillStyle = "blue";

    // Centro del canvas
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    
    // Factor de escala para hacer el pentágono más grande
    var scale = 1.5; 

    ctx.beginPath();
    ctx.moveTo(centerX + scale * 0, centerY - scale * 40);  // Punto superior
    ctx.lineTo(centerX + scale * 38, centerY - scale * 12); // Arriba derecha
    ctx.lineTo(centerX + scale * 24, centerY + scale * 32); // Abajo derecha
    ctx.lineTo(centerX + scale * -24, centerY + scale * 32); // Abajo izquierda
    ctx.lineTo(centerX + scale * -38, centerY - scale * 12); // Arriba izquierda
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
}

// 4. Dibujar un triángulo
function drawTriangle() {
    var ctx = getCanvasContext("triangleCanvas");
    if (!ctx) return;

    ctx.fillStyle = "rgb(49, 192, 126)";
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(50, 250);
    ctx.lineTo(250, 250);
    ctx.closePath();
    ctx.fill();
}

// 5. Mover pluma (cara con ojo y boca)
function drawPluma() {
    var ctx = getCanvasContext("movercanvas");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar canvas

    // Dibujar la cara (círculo)
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
    ctx.stroke();

    // Dibujar la boca (arco)
    ctx.moveTo(80, 150);
    ctx.arc(150, 150, 70, 0, Math.PI, false);
    ctx.stroke();

    // Dibujar los ojos
    ctx.moveTo(130, 130);
    ctx.arc(120, 130, 15, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.stroke();

    ctx.moveTo(190, 130);
    ctx.arc(180, 130, 15, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
}

// 6. Dibujar arcos
function drawArcs() {
    var ctx = getCanvasContext("arcCanvas");
    if (!ctx) return;

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    const radius = 20;
    const padding = 50;

    const startX = 90;
    const startY = 90;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.beginPath();
            const x = startX + j * padding;
            const y = startY + i * padding;
            const startAngle = 0;
            const endAngle = Math.PI + (Math.PI * j) / 2;
            const counterclockwise = i % 2 !== 0;

            ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
            if (i > 1) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
    }
}

// 7. Curvas de Bézier
function drawBezierCurves() {
    var ctx = getCanvasContext("bezierCanvas");
    if (!ctx) return;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;

    // Curva cuadrática
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.quadraticCurveTo(150, 50, 250, 250);
    ctx.stroke();

    // Curva cúbica
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.bezierCurveTo(50, 50, 250, 50, 250, 250);
    ctx.stroke();
}

// 8. Curvas Bézier cúbicas
function drawCubicBezierCurves() {
    var ctx = getCanvasContext("cubicBezierCanvas");
    if (!ctx) return;

    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.bezierCurveTo(50, 50, 250, 50, 250, 250);
    ctx.stroke();
}

// 9. Tangram (Ave)
function drawTangram() {
    var ctx = getCanvasContext("puzzleCanvas");
    if (!ctx) return;

    const colors = ["#e63946", "#f4a261", "#2a9d8f", "#264653", "#8a5a44", "#1d3557", "#a8dadc"];
    // Triángulo grande 
    ctx.fillStyle = colors[0];
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(300, 250);
    ctx.lineTo(225, 150);
    ctx.closePath();
    ctx.fill();

    // Triángulo grande 
    ctx.fillStyle = colors[1];
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(375, 175);
    ctx.lineTo(225, 150);
    ctx.closePath();
    ctx.fill();

    // Triángulo mediano 
    ctx.fillStyle = colors[2];
    ctx.beginPath();
    ctx.moveTo(375, 175);
    ctx.lineTo(440, 120);
    ctx.lineTo(375, 80);
    ctx.closePath();
    ctx.fill();

    // Triángulo pequeño 
    ctx.fillStyle = colors[3];
    ctx.beginPath();
    ctx.moveTo(375, 80);
    ctx.lineTo(400, 50);
    ctx.lineTo(350, 50);
    ctx.closePath();
    ctx.fill();

    // Triángulo pequeño 
    ctx.fillStyle = colors[4];
    ctx.beginPath();
    ctx.moveTo(440, 120);
    ctx.lineTo(470, 100);
    ctx.lineTo(430, 100);
    ctx.closePath();
    ctx.fill();

    // Cuadrado 
    ctx.fillStyle = colors[5];
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(100, 300);
    ctx.lineTo(150, 350);
    ctx.lineTo(200, 300);
    ctx.closePath();
    ctx.fill();

    // Triángulo mediano 
    ctx.fillStyle = colors[6];
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(50, 350);
    ctx.lineTo(150, 350);
    ctx.closePath();
    ctx.fill();
} 

// Ejecutar todas las funciones al cargar la página
window.onload = function () {
    drawGrid();
    drawRectangle();
    drawPaths();
    drawTriangle();
    drawPluma();
    drawArcs();
    drawBezierCurves();
    drawCubicBezierCurves();
    drawTangram();
};
