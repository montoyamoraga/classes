//2016 07 19
//taller de p5.js
//lienzo de un color solido y elipse que sigue al mouse

//en javascript tenemos variables y funciones

//variables
//una variable es un lugar en la memoria del computador
//donde podemos almacenar datos
//declarar significa crear una variable
//declarar se hace solo una vez
var diametro;
//luego de declarar, podemos darle valores
//asignar significa darle un valor a la variable
//se puede hacer cuantas veces quieran
//la variable siempre va a tener un valor actual
//que va a ser igual a la ultima asignacion
diametro = 100;

//manera corta de declarar y asignar un valor inicial
//insisto, declarar se hace SOLO UNA VEZ
var x = 100;
//asignarle otro valor
x = 50;

//funciones
//las funciones se declaran una vez
function nombreFuncion(argumento1, argumento2) {
  //linea 1 del codigo
  //linea 2 del codigo
}

//funcion setup, corre una vez y al principio
function setup() {
  //crea un lienzo donde dibujar
  //createCanvas(dimHorizontal, dimVertical);
  createCanvas(800, 600);
  //pinta el fondo del lienzo
  //background(red, green, blue);
  background(0, 255, 0);

  //esto es una variable local
  //porque esta declarada dentro del cuerpo
  //de una funcion
  //solo esta funcion sabe donde vive
  //var velocidad = 10;

  //frameRate() elige cuantos cuadros por segundo de refresco
  //frameRate(tasa)
  //frameRate(10);

  //oscilemos();
}

//funcion draw, corre despues de setup, 60 veces por segundo
function draw() {
  
  //circulo rojo
  estiloCirculo();

  circulo(100 + random(width / 2), random(height), 30);

  circulo(300, 300, 30);

  //definimos el estilo de la elipse
  estiloElipse();

  //elipse en el lienzo
  //ellipse(posHorizontal, posVertical, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);

  //osc.freq(100 + random(500));
  
  //triangle(x1, y1, x2, y2, x3, y3);
  triangle(0, 0, 0, height, mouseX, mouseY);

}

//mousePresssed() se ejecuta cuando
//el mouse es presionado
function mousePressed() {
  background(random(255), random(255), random(255));
}

//declaracion de la funcion estiloElipse
//elige el pincel para crear elipse
function estiloElipse() {
  //configuracion de dibujo de la elipse

  //stroke() elige el color del borde
  //stroke(red, green, blue)
  stroke(255, 0, 255);

  //strokeWeight() determina el grosor del borde
  //strokeWeight(px);
  strokeWeight(5);

  //fill() elige el color del relleno de la figura
  //fill(red, green, blue);
  fill(0, 0, 255);
}

//declaracion de la funcion estiloElipse
//elige el pincel para crear elipse
function estiloCirculo() {
  //configuracion de dibujo de la elipse

  //stroke() elige el color del borde
  //stroke(red, green, blue)
  //stroke(255, 0, 255);
  noStroke();

  //strokeWeight() determina el grosor del borde
  //strokeWeight(px);
  //strokeWeight(1);

  //fill() elige el color del relleno de la figura
  //fill(red, green, blue);
  fill(random(255), random(255), 0, random(255));
}

//declaracion de la funcion 
function circulo(posX, posY, diam) {
  //circulo en el lienzo
  //ellipse(posHorizontal, posVertical, diametro, diametro);
  //fill(0, 0, rojo);
  ellipse(posX, posY, diam, diam);
}

var osc;

function oscilemos() {

  osc = new p5.Oscillator();
  osc.setType('square');
  osc.freq(640);
  osc.amp(0.7);
  osc.start();
}