//2016 08 06
//en fabrica de medios
//pagina web interactiva
//funciona con p5.js
//mi nombre es aaron

//variables
//variables son lugares en el computador
//donde podemos almacenar datos

//para crear una variable, hay que DECLARARLA
//en javascript se hace asi
//voy a declarar una variable que se llama diametro
var diametro;

//la declaracion se hace SOLO UNA VEZ

//para darle un valor, se hace una ASIGNACION
//la asignacion se hace en javascript con el signo =
diametro = 100;

//existen dos tipos de variables
//las locales y las globales
//la diferencia radica en donde son declaradas

//las GLOBALES, FUERA de las FUNCIONES
//las LOCALES, DENTRO de las funciones

//las GLOBALES, pueden ser usadas en todas partesr
//las LOCALES, solo dentro de la funcion donde viven

//las funciones son para ejecutar acciones
//tambien tienen que ser declaradas
//asi se declara una funcion en javascript
function miFuncionBacan() {
  //aqui va lo que hace la funcion
}

//setup() es la configuracion inicial
//se ejecuta una vez, al principio
//de los tiempos
function setup() {
  //aqui va lo que hace setup()

  //creamos un lienzo
  //createCanvas(dimHor, dimVer);
  //medido en px
  createCanvas(windowWidth, windowHeight);

  //los colores en p5.js
  //los valores van entre 0 y 255
  //1 -> grayscale, 0 es negro, 255 es blanco
  //2 -> grayscale + alpha, 0 es transp, 255 es solido
  //3 -> RGB, red, green, blue
  //4 -> RGB + alpha

  //pintar el fondo verde
  //background(color);
  background(0, 255, 0);

  //declaracion de variable local
  var hola;

}

//draw() se ejecuta despues de setup()
//se ejecuta 60 veces por segundo
function draw() {

  background(0, 255, 0);

  //ejecutar mi funcion
  //estilo();

  //dibujar una elipse
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);

  //asignacion a la variable diametro
  diametro = diametro + 1;


  //if(condicion) {}
  if(mouseX > width/2) {
    background(0, 0, 255);
    muchasElipses(100);
  }
  else {
    background(255, 0, 0);
    muchasElipses(1000);
  }

}

//escribir nuestra primera funcion
//funcion para definir el estilo
function estilo() {
  //definir estilo de la elipse
  //definir ancho del borde
  //strokeWeight(px);
  //si queremos que no dibuje el borde
  //noStroke();
  strokeWeight(10);

  //definir el color del borde
  //stroke(color);
  stroke(0, 0, 255, 255/2);

  //definir el color del relleno
  //fill(color);
  fill(255, 0, 0, 255/2);
}


//funcion para hacer muchas elipses
//en cualquier parte
function muchasElipses(cantidad) {

  //iteracion
  //for(inicio; condicion; refresco) {}
  for(var i = 0; i < cantidad; i++) {
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    //dibujar una elipse en cualquier parte
    ellipse(random(width),random(height),50,50);
  }

}
