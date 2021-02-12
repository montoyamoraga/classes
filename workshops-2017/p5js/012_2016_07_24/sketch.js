//2016 07 24
//funciona con p5.js
//estoy haciendo un lienzo de un color
//con elipse que sigue al mouse

//color en terminos de p5.js es por defecto RGB
//y cada valor va entre 0 y 255.
//1 -> grayscale, 0 es negro y 255 es blanco
//2 -> grayscale + alpha, 0 es transparente
//3 -> rgb, red, green y blue, 0 es nada, 255 es todo

//variables
//las variables son espacios en memoria del computador
//que almacenan valores y que pueden cambiar durante
//la ejecucion del software

//para crear una variable, se tiene que DECLARAR
//DECLARAR se hace SOLO UNA VEZ por variable
//REPITO, SOLO UNA VEZ POR VARIABLE
//se hace asi en javascript
var diametro;
//solo despues de declarar, podemos darle un valor
//darle un valor se llama ASIGNAR
//podemos ASIGNAR cuantas veces queramos
//pero solo despues de declarar
//se hace asi en javascript
diametro = 100;

//existen dos tipos de variables
//hay variables globales y variables locales
//la diferencia radica en donde son declaradas
//las GLOBALES son declaradas FUERA del cuerpo de alguna FUNCION
//las LOCALES son declaradas DENTRO del cuerpo de alguna FUNCION

//hablemos sobre funciones
//las funciones, al igual que las variables, tienen que
//ser DECLARADAS
//en javascript, se declaran asi (existen varias maneras si)
function nombreFuncion() {
  //aqui va el cuerpo de la funcion
}

//para ejecutar una funcion, se usa su nombre y los parentesis
//se puede ejecutar cuantas veces queramos, donde queramos
//nombreFuncion();

//declaracion de la funcion setup()
//aqui no se ejecuta
//setup() corre una vez al principio
function setup() {

  //crear un lienzo
  //createCanvas(dimHor, dimVer);
  createCanvas(windowWidth, windowHeight);

  //crear variable local verde
  var verde;
  //asignar un valor
  verde = 255;
  //atajo: se puede declarar y asignar un valor inicial
  //en una misma linea asi
  var rojo = 255;

  //pintar el fondo del lienzo
  //background(color);
  //background(0, 255, 0);
  background(0, verde, 0);

}

//draw() corre luego de setup, 60 veces por segundo
function draw() {

  //background(color);
  background(0, 255, 0);

  //crear una elipse en el mouse
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);

  //aumentar diametro en 1
  //a la variable diametro, asignale el valor del resultado de
  //valor actual de la variable diametro + 1.
  //diametro = diametro + 1;

}

//windowResized() es ejecutada cada vez que la ventana
//del navegador cambia de tamano
function windowResized() {

  //resizeCanvas() crea un nuevo lienzo
  resizeCanvas(windowWidth, windowHeight);

  //pintar el fondo del lienzo
  //background(color);
  background(0, 255, 0);

}
