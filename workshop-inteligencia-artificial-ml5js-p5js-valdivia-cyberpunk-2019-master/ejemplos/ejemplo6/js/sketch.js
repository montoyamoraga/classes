// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Using ml5js regression to control playback rate of a song.
Remember to include the p5js sound library in index.html!
=== */

let extractorCaracteristicas;
let regresor;
let video;
let perdida;
let barra;
let muestras = 0;

let cancion;
let resultadoInterpolado = 0.5;

function preload() {
  // cargar un archivo de sonido
  cancion = loadSound("./assets/Damscray_DancingTiger.mp3");
  cancion.amp(0.8);
}

function setup() {
  // crear lienzo
  createCanvas(640, 480);

  // crear un elemento de video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // extraer las caracteristicas de MobileNet
  extractorCaracteristicas = ml5.featureExtractor('MobileNet', modeloListo);

  // crea un nuevo regresor usando las caracteristicas
  // e ingresando el video que queremos usar
  regresor = extractorCaracteristicas.regression(video, videoListo);

  // crear los botones de la interfaz de usuario
  configurarBotones();

  // hacer que cancion se reproduzca en bucle
  cancion.loop();
}

function draw() {
  // posicionar video en el lienzo
  image(video, 0, 0, width, height);
  // no pintar borde
  noStroke();
  // elegir color de relleno
  fill(255, 0, 0, 100);
  // variar tasa reproduccion de cancion segun valor barra
  cancion.rate(barra.value());
}

// funcion ejecutada cuando el modelo ha cargado
function modeloListo() {
  select('#estadoModelo').html('Modelo cargado!');
}

// funcion ejecutada cuando el video es cargado
function videoListo() {
  select('#estadoVideo').html('Video cargado!');
}

// clasificar el cuadro actual.
function predecir() {
  regresor.predict(obtenerResultados);
}

// funcion utilitaria que crea botones de interfaz de usuario
function configurarBotones() {
  barra = select('#barra');
  select('#agregarMuestra').mousePressed(function() {
    regresor.addImage(barra.value());
    select('#numeroMuestras').html(muestras++);
  });

  // boton entrenar
  select('#entrenar').mousePressed(function() {
    regresor.train(function(valorPerdida) {
      if (valorPerdida) {
        perdida = valorPerdida;
        select('#perdida').html('Pérdida: ' + perdida);
      } else {
        select('#perdida').html('Entrenamiento listo! Pérdida final: ' + perdida);
      }
    });
  });

  // Predict Button
  select('#botonPredecir').mousePressed(predecir);
}

// mostrar los resultados
function obtenerResultados(err, resultado) {
  if (err) {
    console.error(err);
  }
  resultadoInterpolado = lerp(resultadoInterpolado, resultado, 0.05);
  barra.value(resultadoInterpolado);
  predecir();
}

// funcion ejecutada cuando se presiona el raton
function mousePressed() {
  // activar audio
  getAudioContext().resume()
}
