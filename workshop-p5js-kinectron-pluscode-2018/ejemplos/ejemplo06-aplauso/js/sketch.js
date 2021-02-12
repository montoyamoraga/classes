// kinectv2, kinectron, p5.js
// basado en codigo por lisa jamhoury
// adaptado por aaron montoya-moraga
// ejemplo-06-aplauso
// distintas graficas segun estado manos
// noviembre 2018

// definir direccion IP kinect
// verificar que cliente y servidor esten en misma red
// la direccion son cuatro numeros separados por puntos
// cada uno de los numeros va entre 0 y 255
// cliente y servidor tienen los mismos los dos pimeros numeros
// en mac se puede revisar en preferencias de red
// en windows se puede revisar con comando ipconfig en consola cmd
let direccionKinect = "192.168.2.130";

//elegir si datos son en vivo o pregrabados
let enVivo = true;
// let enVivo = false;

//declarar variable para kinectron
let kinectron = null;

// variables para dibujar manos
let inicio = 30;
let target = 100;
let diametro = inicio;
let light = 255;
let dark = 100;
let hueValue = light;
let lerpAmt = 0.3;
let estado = 'ascendente';

// variables de datos grabados
let momentoActual = Date.now();
let cuadroActual = 0;
let esqueletoGrabado = null;
let archivoDatosGrabados = "./recorded_skeleton.json";

// declaracion de preload()
// preload() es una funcion opcional de p5.js
// preload() sirve para cargar archivos externos
function preload() {
  //si no estamos funcionando en vivo
  if (!enVivo) {
    //carga el archivo JSON con los datos del esqueleto
    esqueletoGrabado = loadJSON(archivoDatosGrabados);
  }
}

function setup() {
  //crear lienzo de 500 px por 500 px
  createCanvas(500, 500);
  // fondo negro
  background(0);
  // no dibujar bordes
  noStroke();

  // si estamos funcionando en vivo
  if (enVivo) {
    // ejecutar funcion para inicializar kinectron
    inicializarKinectron();
  }
}

// declaracion de funcion draw()
// la funcion draw() es de p5.js
// draw() ocurre despues de setup()
// draw() ocurre en bucle
function draw() {
  //si no estamos funcionando en vivo
  if (!enVivo) {
    // iterar sobre los datos grabados
    iterarDatosGrabados();
  }
}

function iterarDatosGrabados() {

  // send data every 20 seconds
  if (Date.now() > momentoActual + 20) {
    cuerpoDetectado(esqueletoGrabado[cuadroActual])
    momentoActual = Date.now();

    if (cuadroActual < Object.keys(esqueletoGrabado).length-1) {
      cuadroActual++;
    } else {
      cuadroActual = 0;
    }
  }

}

// funcion para inicializar Kinectron
function inicializarKinectron() {
  // definir y crear una nueva instancia de kinectron
  kinectron = new Kinectron(direccionKinect);

  // conectar con el servidor
  kinectron.makeConnection();

  // pedir los cuerpos detectados y asignar función de callback
  kinectron.startTrackedBodies(cuerpoDetectado);

}

// declarar funcion de callback cuando se detectan cuerpos
function cuerpoDetectado(cuerpo) {

  // fondo negro con transparencia baja
  background(0, 20);

  // declarar arreglo para manos
  let manos = [];

  // get all the joints off the tracked body and do something with them
  for(let tipoArticulacion in cuerpo.joints) {
    articulacion = cuerpo.joints[tipoArticulacion];

    dibujarArticulacion(articulacion);

    // get the hands off the tracked body and do somethign with them

    // encontrar mano derechas
    if (tipoArticulacion == 11) {
      manos.manoDerecha = articulacion;
      manos.rightHandState = traducirEstadoMano(cuerpo.rightHandState);
    }

    // encontrar mano izquierda
    if (tipoArticulacion == 7) {
      manos.manoIzquierda = articulacion;
      manos.leftHandState = traducirEstadoMano(cuerpo.leftHandState);
    }

  }

  // llamar a funcion dibujar manos
  dibujarManos(manos);

}

// dibujar esqueleto
function dibujarArticulacion(articulacion) {
  fill(100);

  // normalizar la informacion de ubicacion segun kinect segun porte del lienzo
  ellipse(articulacion.depthX * width, articulacion.depthY * height, 15, 15);

  fill(200);

  // kinect location data needs to be normalized to canvas size
  ellipse(articulacion.depthX * width, articulacion.depthY * height, 3, 3);
}

// make handstate more readable
function traducirEstadoMano(estadoMano) {
  switch (estadoMano) {
    case 0:
      return 'desconocido';

    case 1:
      return 'notTracked';

    case 2:
      return 'abierta';

    case 3:
      return 'cerrada';

    case 4:
      return 'lazo';
  }
}


// dibujar manos
function dibujarManos(manos) {

  // comprobar si las manos se estan tocando
  if ((Math.abs(manos.manoIzquierda.depthX - manos.manoDerecha.depthX) < 0.01) && (Math.abs(manos.manoIzquierda.depthY - manos.manoDerecha.depthY) < 0.01)) {
    manos.leftHandState = 'aplauso';
    manos.rightHandState = 'aplauso';
  }

  // draw hand states
  actualizarEstadoMano(manos.leftHandState, manos.manoIzquierda);
  actualizarEstadoMano(manos.rightHandState, manos.manoDerecha);
}

// actualizar estado de las manos
function actualizarEstadoMano(estadoMano, mano) {

  switch (estadoMano) {
    case 'cerrada':
      dibujarMano(mano, 1, 255);
      break;

    case 'abierta':
      dibujarMano(mano, 0, 255);
      break;

    case 'lazo':
      dibujarMano(mano, 0, 255);
      break;

      // crear nuevo estado para aplauso
    case 'aplauso':
      dibujarMano(mano, 1, 'red');
  }
}

// dibujar las manos segun su estado
function dibujarMano(mano, estadoMano, color) {

  if (estadoMano === 1) {
    estado = 'ascendente';
  }

  if (estadoMano === 0) {
    estado = 'descendiente';
  }

  if (estado == 'ascendente') {
    diametro = lerp(diametro, target, lerpAmt);
    hueValue = lerp(hueValue, dark, lerpAmt);
  }

  if (estado == 'descendiente') {
    diametro = lerp(diametro, inicio, lerpAmt);
    hueValue = lerp(hueValue, light, lerpAmt);
  }

  fill(color);

  // ubicacion de Kinect debe ser normalizada segun el leinzo
  ellipse(mano.depthX * width, mano.depthY * height, diametro, diametro);
}
