//2016 08 03
//esto funciona con p5js
//mi primer programa
//donde los gomez
//hace calor
//es de noche

//apuntes de color
//existen variables de color
//1 -> grayscale, 0 es negro, 255 es blanco
//2 -> grayscale + alpha,  
//donde 0 es transp, 255 es solido
//3 -> RGB, donde r es rojo, g es verde, b es blue
//4 -> RGB + alpha

//en javascript a grandes rasgos
//hay dos cosas
//existen variables y funciones

//expliquemos las variables
//variable es un lugar de la memoria del PC
//nos permite almacenar datos

//como creo una variable
//crear es DECLARAR
//declare una variable que se llama x
var diametro;
//la DECLARACION SE HACE SOLO UNA VEZ
//repito
// SOLO UNA VEZ DECLARAR
//solo despues de declarar
//podemos ASIGNARLE UN VALOR
diametro = 1;
//solo despues de asignar un valor
//podemos llamar a la variable

//veamos funciones
//las funciones tambien hay que declararlas
function elNombreQueQuieras() {
  //esto es el cuerpo de la funcion
  //diametro = 10;
  //calculaHora();
  //llamaNandi();
}

function draw() {
  
  background(random(255), random(255), random(255), random(100));
  
  miTriangulo();
  
  //dibujar elipse que sigue al mouse
  ellipse(mouseX, mouseY, diametro, diametro);
  
  diametro = diametro + 1;
}

//setup() corre una vez, al principio 
function setup() {
  //camelCase, UPPERCASE, lowercase
  //createCanvas(dimHor, dimVer);
  //medido en pixeles
  createCanvas(windowWidth, windowHeight);
  
  //pintemos el fondo
  //background(red, green, blue);
  //nada es 0, todo es 255
  //fondo verde
  background(0, 255, 0);
  
  //ellipse(posX, posY, width, height);
  //mi elipse va 100 px a la derecha
  //300 px hacia abajo
  //tiene un ancho de 100 px
  //tiene un alto de 100px
  ellipse(100, 300, diametro, diametro);
  
  
  //tasa de refresco
  //frameRate(numMax);
  //frameRate(1);

}

//draw() corre despues de setup()
//corre 60 veces por segundo

function estilo() {
   //configurar modo de dibujar elipse
  //definir el ancho del borde
  //strokeWeight(px);
  strokeWeight(7.123);
  //definamos el color del borde
  //stroke(color);
  stroke(0, 0, 255, 255/2);
  //relleno se hace con fill(color);
  fill(200, 25, 140, 255);
}

function miTriangulo() {
  estilo();

  
  //dibujemos un triangulo
  //triangle(x1, y1, x2, y2, x3, y3);
  triangle(0, 0, 0, height, mouseX, mouseY);
}
