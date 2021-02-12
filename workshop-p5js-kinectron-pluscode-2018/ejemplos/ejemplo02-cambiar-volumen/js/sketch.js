// kinectv2, kinectron, p5.js
// basado en codigo por dan o'sullivan
// adaptado por aaron montoya-moraga
// ejemplo-02-cambiar-volumen
// mano derecha eje Z cambiar color fondo
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

// declarar variable para sonido
let sonido = null;

// funcion preload() es de p5.js y es opcionals
// ejecutada antes de setup(), para cargar medios externos
function preload() {
  // mp3 de artista voodoochild
  // disponible en voodoochild.bandcamp.com, Spotify, iTunes
  sonido = loadSound("./archivos/voodoochild.mp3");
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

  // iniciar reproduccion del sonido en bucle
  sonido.loop();
  sonido.play();
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

  // fondo negro
  // 0 es negro, 255 es blanco
  background(0);

  // variable que recoge informacion de manod derecha eje Z
  let valor = cuerpo.joints[kinectron.HANDRIGHT].cameraZ;

  // variable para acondicionar rango
  // rango inicial: la mano se mueve en el espacio entre 0 y 4
  //  rango objetivo: volumen entre 0 y1
  let vol = map(valor, 0, 4, 0, 1);

  // imprimir variables en consola
  print("valor: " + valor);
  print("vol: " + vol);

  // modificar la amplitud del sonido
  sonido.amp(vol);

}
