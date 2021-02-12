// kinectv2, kinectron, p5.js
// basado en codigo por dan o'sullivan
// adaptado por aaron montoya-moraga
// ejemplo-03-dibujar-imagen
// dibujar imagen entre manos izquierda y derecha
// noviembre 2018

// definir direccion IP kinect
// verificar que cliente y servidor esten en misma red
// la direccion son cuatro numeros separados por puntos
// cada uno de los numeros va entre 0 y 255
// cliente y servidor tienen los mismos los dos pimeros numeros
// en mac se puede revisar en preferencias de red
// en windows se puede revisar con comando ipconfig en consola cmd
let direccionKinect = "192.168.2.130 ";

// declarar variable para kinectron
let kinectron = null;

// declarar variable para imagen
let imagen = null;

// funcion preload() es de p5.js y es opcionals
// ejecutada antes de setup(), para cargar medios externos
function preload() {
  imagen = loadImage("./archivos/adventuretime.png");
}


function setup() {
  //crear lienzo de 500 px por 500 px
  createCanvas(500, 500);
  // fondo negro
  background(0);
  // no dibujar bordes
  noStroke();

  // inicializar kinectorn
  inicializarKinectron();

}

// declaracion de funcion draw()
// la funcion draw() es de p5.js
// draw() ocurre despues de setup()
// draw() ocurre en bucle
// en este caso draw() está vacío
function draw() {

}

// funcion para inicializar Kinectron
function inicializarKinectron() {
  // definir y crear una nueva instancia de kinectron
  kinectron = new Kinectron(direccionKinect);

  // conectar con el servidor
  kinectron.makeConnection();

  // usar metodos para deteccion de cuerpos y asignar función de callback
  // existen dos maneras de hacer callback, con funciones startX y setX
  // las funciones startX piden al servidor un modo, y ademas asignan callback
  // kinectron.startTrackedBodies(cuerpoDetectado);
  // las funciones setX solamente asignan callback
  kinectron.setTrackedBodiesCallback(cuerpoDetectado);

}

// funcion de callback cuando el cliente recibe un cuerpo desde el servidor
function cuerpoDetectado(cuerpo) {

  // imprimir en consola
  console.log("cuerpo detectado!");

  // fondo blanco
  // 0 es negro, 255 es blanco
  background(255);

  // declarar variable para almacenar valores
  let valor;

  // pedir valor de mano izquierda, eje X
  valor = cuerpo.joints[kinectron.HANDLEFT].depthX;
  // acondicionar rango para ocupar el ancho del lienzo
  let izquierdaX =  map(valor, 0, 1, 0, width);
  // pedir valor de mano izquierda, eje Y
  valor = cuerpo.joints[kinectron.HANDLEFT].depthY;
  // acondicionar rango para ocupar la altura del lienzo
  let izquierdaY = map(valor, 0, 1, 0, height);

  // pedir valor de mano derecha, eje X
  valor = cuerpo.joints[kinectron.HANDRIGHT].depthX;
  // acondicionar rango para ocupar el ancho del lienzo
  let derechaX = map(valor,0,1,0,width);
  // pedir valor de mano derecha, eje Y
  valor = cuerpo.joints[kinectron.HANDRIGHT].depthY;
  // acondicionar rango para ocupar la altura del lienzo
  let derechaY = map(valor, 0, 1, 0, height);

  // definir imagen segun esquinas opuestas
  imageMode(CORNERS);

  // image(imagen, x1, y1, x2, y2);
  image(imagen, izquierdaX, izquierdaY, derechaX, derechaY);

}
