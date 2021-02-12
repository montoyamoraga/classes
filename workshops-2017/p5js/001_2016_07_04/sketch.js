//taller 01 electros
// 2016 07 04

// fondo rojo y pelota que sigue el mouse

/*
esto
es un 
comentario
multilinea
*/

//declarar
var testNumber;
//asignar
testNumber = 40;
//declarar y asignar
var testOther = 100;
//asignar nuevamente
testOther = 100000;

//testNumber y testOther son variables globales
//puedo usarlas y modificarlas en todas las funciones

//esto corre una vez, al principio
function setup() {
  //esto define el lienzo
  //createCanvas(ancho, alto)
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  console.log("holaaaaaa");
  var hola = 45;
  console.log("hola");
}

//esto corre despues de setup, y para siempre 
//for ever and ever
function draw() {
  //1 param: grayscale
  //2 param: grayscale + alpha
  //3 param: R, G, B
  //4 param: R, G, B + alpha
  //background(R, G, B)
  background(testNumber, 0, 0);

  //si el mouse esta presionado
  //la elipse esta sobre el triangulo
  //si el mouse no esta presionado, es al reves
  if (mouseIsPressed) {
    drawTriangle();
    drawEllipse();
  } else {
    drawEllipse();
    drawTriangle();
  }

}

function drawTriangle() {
  fill(0, 255, 0);
  strokeWeight(10);
  triangle(mouseX + 100, mouseY + 100, 0, 100, 100, 0);
}

//declarar funcion
function drawEllipse() {

  //choose color
  //si el mouse esta presionado, dibuja con color 1
  //si el mouse no esta presionado, dibuja con color 2
  if (mouseIsPressed) {
    setColor1();
    //background(255, 0, 0);
  } else {
    setColor2();
    //background(0, 0, 255);
  }

  //sintaxis ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, 100, 100);
}


function setColor1() {
  console.log("vamos bkn, esto corrio");
  //color relleno de la figura
  fill(int(random(255)), int(random(255)), int(random(255)));
  //color trazo
  stroke(0, 0, 255);
  //ancho del trazo
  strokeWeight(10);
}

function setColor2() {
  //color relleno de la figura
  fill(0, 0, 0);
  //color trazo
  stroke(255, 0, 255);
  //ancho del trazo
  strokeWeight(10000);
}