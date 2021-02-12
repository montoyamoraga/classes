//2016 07 10
//taller intro progra creativa p5.js
// aaron

//declarar
//esto existe
var myFirstVariable;

//variable for storing the 
//width of my center ellipse
var centerWidth = 100;
//version larga
var centerWidth;
centerWidth = 100;

//asignar
//darle un valor a algo que existe
myFirstVariable = 4;

//scope variable

//declaracion de la funcion setup
function setup() {
  //camelCase
  //crea un lienzo donde dibujar
  //sintaxis createCanvas(dimHor, dimVer);
  createCanvas(840, 840);
  //background pinta el color del fondo
  //argumentos 0 y 255
  // 1 arg: grayscale
  // 3 arg: R, G, B
  background(255, 0, 0);

  ellipseMode(CENTER);

  //default value of frameRate is 60
  frameRate(60);
  
  //noCursor();
}

function draw() {

  background(255, 0, 0);

  //drawMode de la ellipse1
  //ellipse1
  //noStroke();
  //sintaxis: ellipse(posX, posY, width, height)
  stroke(0);
  strokeWeight(10);
  noFill();
  ellipse(500, 200, 50, 50);

  //drawMode de la ellipse2
  //ellipse2
  noStroke();
  fill(0, random(255), random(255));
  ellipse(width/2, height / 2, centerWidth, centerWidth);

  var localVariable = 40;
  //drawMode de la ellipse3
  //ellipse3
  stroke(0, random(255), 0);
  
  fill(0, 0, 255, random(255));
  strokeWeight(10);
  ellipse(mouseX, mouseY, localVariable, localVariable);
  
  // for (var i = 0; i < 255; i++) {
  //   fill(0, i, 0);
  //   noStroke();
  //   ellipse(random(width), random(height), random(100), random(100));
  // }
  
  /*
  this is
  a multiline
  comment
  */
  
  // if (mouseIsPressed) {
  //   background(255, 0, 0);
  // } else {
  //   background(0, 255, 0);
  // }
  
}

//contador de clicks
var clicks = 0;

function mousePressed() {
  
  console.log("holaaa");
  console.log(clicks);
  clicks = clicks + 1;
  //clicks++;
}