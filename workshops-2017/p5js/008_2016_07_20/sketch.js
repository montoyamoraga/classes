//2016 07 20 wednesday
//estoy en la uss
//con mucha gente
//estamos haciendo un codigo que
//hace que el fondo sea verde
//y que haya una elipse que siga al mouse

//camelCase es escribir la primera palabra con minus
//y todas las siguientes mayusculas

//variables
//para usar una variable, debemos declararla
//DECLARAR hace que el computador sepa que existe
var diametro;

//solo de despues de declarar una variable
//podemos ASIGNARle un valor
diametro = 50;

//hay dos sabores de variables
//estan las variables locales y las globales

//las variables globales viven fuera de una funcion
//las variables locales viven dentro de una funcion
//esto tiene que ver con la DECLARACION

//las variables globales todo el mundo sabe donde viven
//las variables locales solo viven dentro de la funcion
//donde fueron declaradas

//existen tambien funciones
//las funciones tambien se DECLARAN
function nombreFuncion() {
  //las instrucciones de la funcion
  //aqui va todo lo que hace la funcion
}

//para ejecutar una funcion
//nombreFuncion();

//funcion setup se ejecuta una vez al principio
function setup() {
  //createCanvas(dimHor, dimVer)
  //crea el lienzo

  createCanvas(windowWidth, windowHeight);

  //background(red, green, blue)
  //define el color del fondo
  background(0, 255, 0);
}

//funcion draw() se ejecuta despues de setup
//y se ejecuta 60 veces por segundo
function draw() {

  //declarar variable LOCAL anchoBorde
  var anchoBorde = 10;
  //asignarle un valor
  anchoBorde = 10;

  //background(0, 255, 0);

  estilo1();

  //elipse que en 100, 100 de diametro 30
  //ellipse(posX, posY, width, height)
  ellipse(100, 100, 30, 30);


  if (mouseX != 0 && mouseY != 0) {

    //elipse que sigue al mouse de diametro 30
    //ellipse(posX, posY, width, height)
    ellipse(mouseX, mouseY, diametro, diametro);
  }

  //asignacion nueva a la variable
  //global diametro
  diametro = diametro + 1;

  //muchasVeces();

}

//declaracion de funcion de estilo de elipse
function estilo1() {
  //definamos el tamano del borde
  //strokeWeight(px);
  strokeWeight(10);

  //color del borde
  //stroke(red, green, blue)
  stroke(210, 0, 100);

  //fill() elige el color del relleno
  //fill(red, green, blue)
  fill(255, 222, 0);
}

//declaracion de funcion de estilo de elipse
function estilo2() {
  //definamos el tamano del borde
  //strokeWeight(px);
  strokeWeight(1);

  //color del borde
  //stroke(red, green, blue)
  stroke(0, 100, 200);

  //fill() elige el color del relleno
  //fill(red, green, blue)
  fill(0, 222, 0);
}


//veamos iteracion
function muchasVeces() {

  var diez = 10;

  //for(inicio;condicion;actualizacion) {//lo que sea que este aqui}
  for (var i = 0; i < 10000; i++) {
    noStroke();
    fill(random(255));
    ellipse(random(width), random(height), diez, diez);
  }
  
  

}

//declarando la funcion mousePressed
function mousePressed() {

  //if, condicional
  //lo que esta adentro de las llaves se ejecuta
  //solo si la expresion es verdadera
  if (mouseX > width / 2) {
    console.log("hola");
    triangle(0, 0, 0, height, mouseX, mouseY);
  } else {
    console.log("chao");
    background(0);
  }

}