// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// variables para modelo de aprendizaje de máquinas
let extractorCaracteristicas;
let clasificador;
let video;
let perdida;
let imagenesA = 0;
let imagenesB = 0;
let resultadoClasificacion;

let imagenFueraLienzo;
let ultimaCaptura;

let temporizador = 0;
let mostrarUltimaFoto = false;

let nClaseActual = 0;

// variables para almacenar sonido obturador
let obturador;

// preload() ocurre antes de setup()
// preload() ocurre una vez y espera a que carguen los medios
function preload() {
  obturador = loadSound('./assets/obturador.wav');
}

function setup() {
  // crear lienzo
  createCanvas(640, 480);

  // densidad de pixeles de la pantalla
  pixelDensity(1);

  // crear una captura de video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Agregar al elemento del DOM contenedorVideo
  //video.parent('videoContainer');
  // Extract the already learned features from MobileNet
  extractorCaracteristicas = ml5.featureExtractor('MobileNet', modeloListo);
  // crear un nuevo clasificador usando esas caracteristicas y el video
  clasificador = extractorCaracteristicas.classification(video, videoListo);

  // crear imagen fuera del lienzo
  imagenFueraLienzo = createGraphics(width, height);

  // configurar botones interfaz de usuario
  configurarBotones();
}

function draw() {

  background(122);
  image(video, 0, 0);

  if (resultadoClasificacion == 'A') {
    nClaseActual = 0;
  } else if (resultadoClasificacion == 'B') {
    nClaseActual++;
  }

  // mostrar brevemente la ultima imagen capturada
  if (mostrarUltimaFoto) {
    image(imagenFueraLienzo, 0, 0);
  }

  // efecto flash
  if (temporizador < 5) {
    background(temporizador * 25 + 130);
  } else if (temporizador < 8) {
    background(255);
  }

  if (temporizador > 100) {
    mostrarUltimaFoto = false;
  }
  temporizador++;

  if (resultadoClasificacion == 'B' && nClaseActual > 50) {
    tomarFoto();
  }
}

function tomarFoto() {
  //save('myCanvas.jpg');
  obturador.play();
  imagenFueraLienzo.image(video, 0, 0);
  temporizador = 0;
  mostrarUltimaFoto = true;
  nClaseActual = 0;
}

// función ejecutada cuando el modelo se carga
function modeloListo() {
  select('#estadoModelo').html('Modelo base (MobileNet) cargado!');
}

// función ejecutada cuando el video se carga
function videoListo() {
  select('#estadoVideo').html('Video listo!');
}

// clasificar el cuadro actual
function clasificar() {
  clasificador.classify(mostrarResultados);
}

// funcion utilitaria para crear una interfaz de usuario
function configurarBotones() {

  // cuando se presiona el boton A, agregar el cuadro actual
  // del video con la etiqueta A al clasificador
  botonA = select('#botonA');
  botonA.mousePressed(function() {
    clasificador.addImage('A');
    select('#cantidadImagenesA').html(imagenesA++);
  });

  // cuando se presiona el boton B, agregar el cuadro actual
  // del video con la etiqueta B al clasificador
  botonB = select('#botonB');
  botonB.mousePressed(function() {
    clasificador.addImage('B');
    select('#cantidadImagenesB').html(imagenesB++);
  });

  // boton entrenar
  entrenar = select('#entrenar');
  entrenar.mousePressed(function() {
    clasificador.train(function(valorPerdida) {
      if (valorPerdida) {
        perdida = valorPerdida;
        select('#perdida').html('Pérdida: ' + perdida);
      } else {
        select('#perdida').html('Entrenamiento listo! Pérdida final: ' + perdida);
        clasificar();
      }
    });
  });

}

// mostrar los resultados
function mostrarResultados(err, resultado) {
  // mostrar error si lo hay
  if (err) {
    console.error(err);
  }

  select('#resultado').html(resultado);

  resultadoClasificacion = resultado;

  clasificar();
}
