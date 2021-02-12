//UPPERCASE, lowercase, camelCase

//variables y funciones
//variable almacena datos
//funcion hace operaciones

//sintaxis de variables
//primero debemos declarar la variable
//esto se hace solo una vez
//le dice al computador, hey, esta variable existe
var miNumero;
//luego de declarar la variable
//podemos asignarle valores
miNumero = 50;
//aqui pueden pasar muchas cosas entre medio
//justo aca miNumero vale 50
miNumero = 40;
//ahora miNumero vale 40

//declarar otraVariable y asignar un valor inicial
var otraVariable = 100;

var bordeElipse = 10;

//declaracion de una funcion
function nombreFuncion(argumento1, argumento2, etc) {
  //cuerpo de la funcion

}

//declaracion de la funcion setup
function setup() {
  //ejecutar funcion createCanvas(arg1, arg2)
  createCanvas(400, 600);
  //ejecutar funcion background, es parte de p5.js
  background(230, 40, 90);
}

function draw() {
  background(230, 40, 90);

  dibujarRect();

  dibujarElipse();

  dibujarMucho();

  //esto es una variable local
  var x = 10;
  //imprimir en consola javascript
  console.log(x);

}

function dibujarElipse() {
  //elegimos la configuracion para dibujar figuras
  //stroke(r, g, b) elige el color del borde
  stroke(255, 255, 0);
  //strokeWeight(numPx) elige cuan ancho es el borde
  strokeWeight(bordeElipse);
  //elijamos el relleno
  //fill(r, g, b)
  fill(0, 102, 255);

  //ellipse(posX, posY, width, height)
  //ellipse(100, 200, 50, 50);
  ellipse(mouseX, mouseY, miNumero, miNumero);

  console.log("acaba de pasar dibujarElipse");

}

function dibujarRect() {
  //configuracion para dibujar de aqui en adelante
  noStroke();
  fill(100, 200, 50);

  //rect(posX, posY, width, height)
  rect(100, 100, 100, 75);
}

function dibujarMucho() {

  //variables locales
  var ancho = 100;
  var alto = 100;

  var repeticiones = 100000;

  //loop, bucle, repeticion
  //for(inicio; test; actualizacion) {}
  for (var i = 0; i < repeticiones; i++) {
    //random(x) arroja un numero aleatorio entre 0 y x
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(random(width), random(height), ancho, alto);
  }

  for (var j = 0; j < numPuntitosVer; j = j + 10) {
    for (var i = 0; i < numPuntitosHor; i = i + 10) {
      point(i, j);

    }

  }


}