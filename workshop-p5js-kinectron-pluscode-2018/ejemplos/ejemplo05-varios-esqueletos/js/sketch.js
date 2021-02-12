// kinectv2, kinectron, p5.js
// basado en codigo por dan o'sullivan
// adaptado por aaron montoya-moraga
// ejemplo-05-varios-esqueletos
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

  // asignar un color distinto a cada cuerpo
  if (cuerpo.bodyIndex == 0){
    fill(255,0,0);
  }else if (cuerpo.bodyIndex == 1){
    fill(255,0,255);
  }else if (cuerpo.bodyIndex == 2){
    fill(255,255,0);
  }else if (cuerpo.bodyIndex == 3){
    fill(0,255,0);
  }else if (cuerpo.bodyIndex == 4){
    fill(0,255,255);
  }else if (cuerpo.bodyIndex == 5){
    fill(0,0,255);
  }

  // declarar variable para almacenar valores
  let val;

  // obtener mano derecha en X
  val = cuerpo.joints[kinectron.HANDRIGHT].depthX;
  // acondicionar rango
  let manoDerechaX =  map(val,0,1,0,width);
    // obtener mano derecha en Y
  val = cuerpo.joints[kinectron.HANDRIGHT].depthY;

  // acondicionar rango
  let manoDerechaY = map(val, 0, 1, 0, height);

  // dibujar elipse en la posicion de la mano
  ellipse(manoDerechaX, manoDerechaY, 20,20);

  // imprimir indice del cuerpo
  print(cuerpo.bodyIndex + " " + val );

}
