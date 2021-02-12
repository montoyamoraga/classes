//2016 07 23
//funciona con p5.js
//estoy haciendo un lienzo verde con una elipse
//la elipse sigue al mouse

//apuntes de color
//por defecto, funciona con RGB y 8 bits
//8 bits implica que los valores de color van entre 0 y 255
//1 -> grayscale, donde 0 es negro y 255 es blanco
//2 -> grayscale + alpha, donde 0 es transparente y 255 es opaco
//3 -> RGB, donde r es red, g es green, b es blue
//4 -> RGB + alpha

//variables
//las variables son espacios en la memoria del computador
//donde podemos almacenar datos
//primero, tenemos que decirle al computador que la variable existe
//esto se llama DECLARAR y solo se hace una vez
var diametro;
//luego de declarar, puedo ASIGNARLE valores
diametro = 100;
//manera corta de hacerlo
//var diametro = 100;
//diametro = 40;

//existen variables globales y variables locales
//las variables globales son aquellas
//que son declaradas FUERA de una funcion
//las locales son declaradas DENTRO de una funcion

//las variables globales pueden ser usadas donde queramos
//las locales solo dentro de la funcion donde viven

//funciones
//las funciones se DECLARAN UNA VEZ
function nombreFuncion() {
  //aqui va el cuerpo de la funcion
}


//setup() corre una vez al principio
function setup() {

  //creamos un lienzo
  //createCanvas(hor, ver);
  createCanvas(windowWidth, windowHeight);

  //pintar el fondo verde
  //background(color);
  background(0, 255, 0);

  nombreFuncion();

  //frameRate(1);

}

//draw() corre despues de setup()
//draw() se ejecuta 60 veces por segundo maximo
function draw() {

  //console.log(x) imprime en la consola el valor de x
  console.log(diametro);

  //pintar el fondo verde
  //background(color);
  //background(0, 255, 0);

  //aumentar el diametro en 1
  //diametro = diametro + 1;
  //manera corta de hacerlo es diametro++;
  //otra manera corta es diametro += 1;

  miElipse();

  miTriangulo();

  muchasElipses();


}

//declarar funcion estiloVictoriano
function estiloVictoriano() {
  //definir ancho en px de la figura
  //strokeWeight(px);
  strokeWeight(5);

  //definir el color del trazo
  //stroke(color);
  //noStroke();
  stroke(140, 5, 38);

  //definir el color del relleno
  //fill(color);
  //noFill();
  fill(100, 100, 200);
}

//declarar funcion estiloRuso()
function estiloRuso() {
  //definir ancho en px de la figura
  //strokeWeight(px);
  //strokeWeight(10);

  //definir el color del trazo
  //stroke(color);
  noStroke();
  //stroke(140, 5, 38);

  //definir el color del relleno
  //fill(color);
  //noFill();
  fill(200, 0, 0, 120);
}

function miElipse() {
  //ejecutar la funcion estiloVictoriano()
  //nos permite elegir el estilo de las figuras
  estiloVictoriano();

  //aqui dibujamos una elipse que sigue al mouse
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);
}

function miTriangulo() {
  estiloRuso();

  //triangle(x1, y1, x2, y2, x3, y3);
  triangle(0, 0, 0, height, mouseX, mouseY);
}

//aqui demostraremos iteracion
function muchasElipses() {

  //iteracion
  //for(inicio;condicion;refresco) {}
  for (var i = 0; i < 1000; i++) {
    noStroke();

    fill(random(255), random(255), random(255), random(255));

    //ellipse se dibuja en una posicion aleatorio del canvas
    ellipse(random(width), random(height), random(100), random(100));
  }

}
