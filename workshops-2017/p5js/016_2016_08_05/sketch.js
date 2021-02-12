//2016 08 05 viernes
//p5js udd
//vamos a hacer una elipse
//que sigue al mouse

//en javascript
//vamos a usar variables y funciones

//veamos variables
//el computador es capaz de almacenar datos
//lo podemos hacer en variables
//primero hay que crearlas
//esto se llama DECLARAR
//asi se hace en javascript
var diametro;

//solo de despues de DECLARAR
//pueden darle un valor
//esto se llama ASIGNAR
diametro = 100;

//hay dos sabores de variables
//existen variables locales y globales
//GLOBALES: DECLARADAS FUERA DE FUNCION
//LOCALES: DECLARADAS DENTRO DE FUNCION

//globales: se pueden usar en cualquier parte
//locales: solo dentro de la funcion

//hablemos de funciones
//las funciones tambien se declaran
//luego de declararse, pueden llamarse
//asi se declara una funcion en javascript
function miFuncionBacan() {
  //esto es lo que hace la funcion
  //se le llama cuerpo
}

//ejecutar o llamar la funcion
//miFuncionBacan();

//setup() se ejecuta una vez
//al principio de los tiempos
function setup() {

  //camelCase, UPPERCASE, lowercase

  //crear un lienzo para dibujar
  //createCanvas(dimHor, dimVer);
  //dimensiones en px
  createCanvas(windowWidth, windowHeight);

  //pintar el fondo
  //background(color);
  //1: grayscale, 0 es negro, 255 es blanco
  //2: grayscale + alpha
  //3: rgb, redgreenblue, 0  nada, 255 todo
  //4: rgb + alpha
  //alpha: 0 es transparente, 255 es solido
  background(0, 255, 0);
  //variable local x
  var x;
  x = 10;

  //variable local y
  //modo rapido de DECLARAR
  //y asignarle valor inmediatamente
  var y = 10;
  //asignar otro valor
  y = 100;

  //frameRate(tasa de cuadros por segundo)
  //frameRate(1);

}

//draw() corre justo despues de setup()
//draw() se ejecuta 60 veces por segundo
function draw() {

  //pintar el fondo
  //background(miColor);
  background(0, 255, 0);

  //dibujamos la elipse
  //miElipse();

  //condicional
  //if() {}
  //si el mouse esta en el primer tercio de la ventana
  //a la izquierda
  if (mouseX < width/3) {
    //dibujamos muchas elipses
    muchasElipses(1000, 255);
  }

}

//declarar funcion nueva
//para dibujar elipse a mi gusto
function miElipse() {
  //definir ancho de borde
  //strokeWeight(px);
  strokeWeight(10);

  //definir color del borde
  //stroke(color);
  //para no dibujar el borde
  //noStroke(); 
  stroke(0, 0, 255, 255 / 2);

  //definir color del relleno
  //fill(color);
  //el mio es rojo semitransparente
  fill(255, random(100), 0, 100);

  //dibujemos elipse que sigue al mouse
  //ellipse(posX, posY, width, height);
  //medidos en pixeles
  //usamos variables de p5.js
  //mouseX, mouseY que sabe posMouse
  ellipse(mouseX, mouseY, diametro, diametro);

  //asignarle nuevo valor a diametro
  diametro = diametro + 1;
  //diametro = random(100);
}

//declarar funcion nueva
//funcion para hacer muchas elipses
//en lugares aleatorios
//de colores aleatorios
function muchasElipses(cantidad, rojo) {

  //for loop
  //for(inicio; condicion; refresco) {}
  for (var i = 0; i < cantidad; i++) {
    //color aleatorio sin borde
    noStroke();
    fill(random(rojo), random(255), random(255), random(255));
    //elipse en posicion aleatoria
    ellipse(random(width), random(height), 100, 100);
  }

}