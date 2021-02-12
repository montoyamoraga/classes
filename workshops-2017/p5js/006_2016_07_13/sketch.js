//2016 07 13
//esto es un taller de p5.js
//vino la veronica, la valentina, el pablo, la yorka
//vamos a hacer un lienzo verde con una
//elipse que sigue el mouse

//en javascript existen funciones y variables

//las variables hay que declararlas
//esto se hace solo una vez
//equivale a decirle al computador
//oye, guarda un espacio en memoria y ponle este nombre
var radioCirculo;

//asignacion de un valor a una variable
radioCirculo = 50;

//una variable declarada fuera de una funcion
//es una variable global
//todas las funciones pueden leerla y modificarla
//manera corta de declarar y asignar un valor inicial
var extra = 10;


//oscilador
var osc;



//funcion setup
//corre una vez, al principio
function setup() {
  //createCanvas(dimHor, dimVer);
  createCanvas(windowWidth, windowHeight);
  //background(red, green, blue)
  background(0, 255, 0);
  //ellipse(posX, posY, width, height);
  //ellipse(200, 100, 200, 50);

  //imprimir en consola
  console.log(extra);

  //declaremos una variable local
  var noSe = 40;
  //imprimir en consola
  console.log(noSe);

  //tasa de cuadros por segundo
  frameRate(20);
  
  //asignar un oscilador a la variable global osc
  osc = new p5.Oscillator();
  //determinar la frecuencia del oscilador
  osc.freq(440);
  //determinar la amplitud del oscilador
  osc.amp(0.7);
  osc.setType('square')
  //hacer que el oscilador empieze a funcionar
  osc.start();
}

//funcion draw
//se ejecuta 60 veces por segundo
function draw() {
  background(0, 255, 0);

  //estructuras condicionales
  //decidir con que borde se dibujan
  //if para tomar decisions
  //si es que el argument de if es verdadero,
  //se ejecuta su cuerpo
  //si es que no es verdadero, se ejecuta
  //el cuerpo de else
  if (mouseIsPressed) {
    borde1();
  } else {
    borde2();
  }

  ellipse(mouseX, mouseY, radioCirculo, radioCirculo);
  ellipse(100, 100, radioCirculo * 2, radioCirculo);

  muchosRectangulos(1000);
  
  //actualizar frecuencia del oscilador
  var freqOsc;
  freqOsc = mouseX * 10 + 500;
  osc.freq(freqOsc);
  var ampOsc;
  ampOsc = 0.1 + mouseY / height;
  osc.amp(ampOsc);
  
}


//declaracion de una funcion en javascript
function nombreFuncion() {
  //aqui va lo que hace la funcion
}

//funcion para definir el color de una figura
//hace que la figura tenga un ancho de 10px
//que sea relleno con cyan y borde amarillo
function borde1() {
  //stroke(r, g, b) define el color del trazo
  stroke(255, 255, 0);
  //fill(r, g, b) define el relleno
  fill(0, 255, 255);
  //strokeWeight(px) define el tamaño del trazado
  strokeWeight(10);
}

function borde2() {
  //stroke(r, g, b) define el color del trazo
  noStroke();
  //fill(r, g, b) define el relleno
  fill(120, 0, 255);
  //strokeWeight(px) define el tamaño del trazado
  strokeWeight(5);
}

//funcion que aumenta en 10 el radio del circulo
function aumentarRadio(aumento) {
  radioCirculo = radioCirculo + aumento;
}

function muchosRectangulos(numero) {
  //rect(posX, posY, width, height);

  //sin borde
  noStroke();


  //loop o bucle
  //for(crear contador; condicion a evaluar; refresco) {}
  for (i = 0; i < numero; i++) {
    //rect en posicion aleatoria
    //color aleatorio
    fill(random(255), random(255), random(255), 100);
    rect(random(width), random(height), random(100), random(100));
  }


}