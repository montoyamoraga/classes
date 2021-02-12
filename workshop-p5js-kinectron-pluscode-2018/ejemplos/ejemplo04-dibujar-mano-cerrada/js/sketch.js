// kinectv2, kinectron, p5.js
// basado en codigo por dan o'sullivan
// adaptado por aaron montoya-moraga
// ejemplo-04-dibujar-mano-cerrada
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

// declarar variable para imagen
let imagen = null;

// declarar variables para x,y mano derecha
let manoDerechaX = null;
let manoDerechaY = null;

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

  // si la mano derecha esta cerrada
  if (cuerpo.rightHandState == 3){

    // declarar variable para almacenar valores
    let valor = null;

    // pedir x de mano derecha
    valor = cuerpo.joints[kinectron.HANDRIGHT].depthX;
    // acondicionar rango
  	manoDerechaX =  map(valor,0, 1, 0, width);

    // pedir y de mano derecha
  	valor = cuerpo.joints[kinectron.HANDRIGHT].depthY;
    // acondicionar rango
  	manoDerechaY = map(valor, 0, 1, 0, height);


  }

  // dibujar imagen
  image(imagen, manoDerechaX,manoDerechaY, 100,100);

}

//blabla
