//2016_07_25
//funciona con p5.js
//es una elipse que rebota contra las paredes

//declaracion de variables globales
//para lograr movimiento
var posX;
var posY;
var step;
var direction;

//declaracion de variables globales
//de como dibujar el circulo
var diametro;
var factorCrash;

//variable para contener una imagen
var img;

//preload() corre antes de setup()
//sirve para cargar archivos externos
function preload() {
  img = loadImage("images/shark.jpg");
}

//setup() es una funcion que permite definir
//las condiciones iniciales
//se ejecuta al principio de los tiempos y solo una vez
function setup() {

  //creamos un lienzo a pantalla completa
  //createCanvas(dimHor, dimVer);
  createCanvas(windowWidth, windowHeight);

  //definir las condiciones iniciales de la elipse
  setupEllipse();

  //hace que la posicion de las imagenes
  //este definida por el centro
  imageMode(CENTER);

}

//draw() se ejecuta despues de setup()
//por defecto, se ejecuta 60 veces por segundo
function draw() {

  //pintamos el fondo
  //background(color);
  background(0, 255, 0);

  drawEllipse();
  moveEllipse();
  crashEllipse();
  invertDirectionEllipse();
}

//funcion para definir condiciones iniciales
//de la elipse
function setupEllipse() {
  //asignar valores iniciales
  step = 10;
  direction = 1;
  diametro = 100;
  posX = diametro / 2;
  posY = height / 2;
  factorCrash = 1;
}

function drawEllipse() {
  //dibujamos una elipse
  //ellipse(posX, posY, width, height);
  //ellipse(posX, posY, factorCrash * diametro, diametro);
  image(img,posX, posY, factorCrash * diametro, diametro);
}

function moveEllipse() {
  //mover la elipse
  posX = posX + direction * step;
}

function crashEllipse() {
  //detectar cuando pega contra el borde
  //y hacer que se achate
  //si es que choca contra el borde derecho
  if (posX > width - diametro / 2) {
    //el factorCrash es un porcentaje de achatamiento
    //simula que la pelota se estrella contra el borde y se achata
    //depende de la posicion actual de la elipse, su diametro y
    //el ancho del lienzo
    factorCrash = (width - posX) / (diametro / 2);
  }
  //si es que choca contra el borde izquierdo
  else if (posX < diametro / 2) {
    factorCrash = posX / (diametro / 2);
  }
  //si es que no esta chocando
  else {
    factorCrash = 1;
  }
}

function invertDirectionEllipse() {
  //detectar donde esta la elipse
  //para cambiar la direccion de movimiento y
  //hacer que rebote en los bordes
  //y que cambie de color
  if (posX > width || posX < 0) {
    direction = -1 * direction;
    fill(random(255), random(255), random(255));
  }
}
