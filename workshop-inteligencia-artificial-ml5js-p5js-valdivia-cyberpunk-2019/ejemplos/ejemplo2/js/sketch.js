// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image Classification using Feature Extraction with MobileNet. Built with p5.js
This example uses a callback pattern to create the classifier
=== */

// variables para modelo de aprendizaje de máquinas
let extractorCaracteristicas;
let clasificador;
let video;
let perdida;
let imagenesA = 0;
let imagenesB = 0;
let resultadoClasificacion;
let ultimaClase = "C";

// variables para almacenar sonidos
let sonidoA;
let sonidoB;

// preload() ocurre antes de setup()
// preload() ocurre una vez y espera a que carguen los medios
function preload() {
  sonidoA = loadSound("./assets/A.mp3");
  sonidoB = loadSound("./assets/B.mp3");
}

function setup() {
  // crear lienzo
  createCanvas(640, 480);
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
  // configurar botones interfaz de usuario
  configurarBotones();
}

function draw() {
  background(122);
  image(video, 0, 0);
  textSize(64);
  if (resultadoClasificacion == 'A' && ultimaClase !== 'A') {
    sonidoA.play();
  } else if (resultadoClasificacion == 'B' && ultimaClase !== 'B') {
    sonidoB.play();
  }
  // guardar ultima clase
  ultimaClase = resultadoClasificacion;
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

// A util function to create UI buttons
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
      }
    });
  });

  // boton correr
  botonCorrer = select('#botonCorrer');
  botonCorrer.mousePressed(clasificar);
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
