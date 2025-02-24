// 1. Obtener una referencia al elemento HTML <canvas> con el ID 'canvas'
var canvas = document.getElementById("canvas");
// En esta línea, accedemos al elemento <canvas> en el documento HTML. El método `getElementById()` 
// busca el elemento que tiene el atributo `id="canvas"`. Este es el área en la que vamos a dibujar.
// Este objeto `canvas` representa un lienzo en el que se pueden realizar operaciones gráficas.


// 2. Obtener el contexto de dibujo 2D del canvas
var ctx = canvas.getContext("2d");
// El método `getContext("2d")` obtiene el contexto de dibujo 2D del lienzo (canvas). 
// Este contexto es un objeto que tiene métodos y propiedades que permiten dibujar sobre el lienzo.
// El contexto "2d" indica que estamos trabajando con gráficos bidimensionales (2D).


// 3. Establecer el color de relleno a verde
ctx.fillStyle = "rgb(90, 146, 203)` ";
// `ctx.fillStyle` establece el color con el que se van a rellenar las formas que dibujamos. 
// En este caso, se establece a "green" (verde). 
// Esto afectará cualquier forma que usemos el método `fill()` para dibujar, como en el caso de `fillRect()`.


/* 
4. Dibujar un rectángulo relleno en el canvas
    - `x`: coordenada horizontal del punto de inicio del rectángulo
    - `y`: coordenada vertical del punto de inicio del rectángulo
    - `width`: ancho del rectángulo
    - `height`: altura del rectángulo
*/
ctx.fillRect(10, 10, 200, 100);
// El método `fillRect(x, y, width, height)` dibuja un rectángulo relleno en el lienzo.
// - `(10, 10)` son las coordenadas donde empieza el rectángulo (su esquina superior izquierda),
//    es decir, el rectángulo comenzará en el píxel 10 de la horizontal (x) y en el píxel 10 de la vertical (y).
// - `100` es el ancho del rectángulo en píxeles.
// - `100` es la altura del rectángulo en píxeles.
// El rectángulo se dibujará usando el color de relleno que se definió anteriormente (verde).
