// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image Classification using Feature Extraction with MobileNet. Built with p5.js
This example uses a callback pattern to create the classifier
=== */

let extractorCaracteristicas;
let clasificador;
let video;
let perdida;
let imagenesA = 0;
let imagenesB = 0;
let resultadoClasificacion;

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
  if (resultadoClasificacion == 'A') {
    rect(100, 100, 100, 100);
  } else if (resultadoClasificacion == 'B') {
    ellipse(100, 100, 100, 100);
  }
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
  // When the A button is pressed, add the current frame
  // from the video with a label of "A" to the classifier
  botonA = select('#botonA');
  botonA.mousePressed(function() {
    clasificador.addImage('A');
    select('#cantidadImagenesA').html(imagenesA++);
  });

  // When the B button is pressed, add the current frame
  // from the video with a label of "B" to the classifier
  botonB = select('#botonB');
  botonB.mousePressed(function() {
    clasificador.addImage('B');
    select('#cantidadImagenesB').html(imagenesB++);
  });

  // Train Button
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

  // Predict Button
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
