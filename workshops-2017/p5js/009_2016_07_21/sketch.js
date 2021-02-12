//2016 07 21
//codigo corre en p5.js
//vamos a hacer un lienzo con fondo verde
//y una elipse que siga al mouse

//color puede ser definido con multiples numeros de parametros
//1 -> grayscale donde 0 es negro y 255 es blanco
//2 -> grayscale, alpha, donde 0 es transparente y 255 es opaco
//3 -> red, green, blue
//4 -> red, green, blue, alpha

//variables
//son espacios en memoria para guardar datos
//para crear una variable, se debe DECLARAR
//DECLARAR es decirle al pc que guarde memoria para la variable
//DECLARAR se hace SOLO UNA VEZ
//REPITO DECLARAR SOLO UNA VEZ
var diametro;
//despues de DECLARAR, puedo darle un valor a la variable
//ASIGNAR es darle un valor a una variable
//lo puedo hacer cuantas veces quiera
//pero solo lo puedo hacer despues de haber declarado
diametro = 50;

//existen dos tipos de variables
//globales y locales
//una variable global vive fuera de una funcion
//una variable local vive dentro de una funcion
//donde viven esta determinado por donde son DECLARADAS

//las variables globales pueden ser usadas en todo el codigo
//las variables locales pueden ser usadas solo dentro de la funcion
//donde viven (donde fueron declaradas)

//variable global oscilador
var osc;

//funcion de configuracion el oscilador
function setupOsc() {
  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(440);
  osc.amp(0.7);
  osc.start();
}



//las funciones tienen que ser DECLARADAS
//solo se declaran una funcion
function nombreFuncion() {
  //linea 1 de lo que nombreFuncion()
  //linea 2 de lo que nombreFuncion()
  //etc
}

//setup() corre una vez al principio del codigo
function setup() {
  //creamos un lienzo de 800px x 600px
  //createCanvas(dimHor, dimVer);
  createCanvas(windowWidth, windowHeight);
  //background() pinta el fondo del lienzo
  //background(color);
  //colores entre 0 y 255
  background(255, 255, 0);
  
  setupOsc();
  
  //cambiar la tasa de refresco
  frameRate(100);
  
}

//draw() corre justo despues de setup()
//draw() ocurre 60 veces por segundo
function draw() {
  
  
  //si el mouse esta en la mitad derecha
  //que suene, si no, que no suene
  if (mouseX > width/2 ) {
    osc.amp(0.7);
    osc.freq(500+4*random(100));
  }
  else {
    osc.amp(0);
  }
  
  //osc.freq(mouseX);
  //osc.amp(0.1+mouseY/height)

  var ancho;
  ancho = 5;

  //background(255, 255, 0);

  estilo1();
  //crear una elipse en la coordenada 100, 100
  //de ancho 50 y altura 50
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);

  estilo2();

  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(0, 0, 0, height, mouseX, mouseY);

  //rect(posX, posY, width, height); 
  rect(100, 100, 50, 50);
  
  muchasVeces();

}

//nueva funcion
//define el estilo de la elipse
function estilo1() {
  //elijamos las opciones de dibujo de la elipse
  //strokeWeight(px) define el ancho del borde de la figura
  strokeWeight(5);
  //stroke(color) elige el color del borde
  stroke(0, 0, 255, 100);
  //fill(color) elige el color del relleno
  fill(100, 255, 200, 200);
}

function estilo2() {
  //elijamos las opciones de dibujo de la elipse
  //strokeWeight(px) define el ancho del borde de la figura
  strokeWeight(10);
  //stroke(color) elige el color del borde
  stroke(0, 255, 255, 100);
  //fill(color) elige el color del relleno
  fill(100, 255, 0, 200);
}


function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}

//funcion para iterar
function muchasVeces() {
  
  //for(inicio;condicion;refresco) {}
  for (var i = 0; i < 1000; i++) {
    fill(random(255), random(255), random(255), random(255));
    ellipse(random(width), random(height), random(100), random(100));
  }
  
}


