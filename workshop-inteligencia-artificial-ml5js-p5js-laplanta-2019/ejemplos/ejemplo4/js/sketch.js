// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// variables para modelo de aprendizaje de máquinas

//////////////////////////////
//////////////////////////////


let numeroClases = 6;

let extractorCaracteristicas = null;
let clasificador = null;
let video = null;
let perdida = null;
let guitarra = null;
let numImagenes = null;
let etiqueta = null;
let botones = null;

// declarar arreglo vacio
let sonidos  = [];

function preload() {
  // cargar imagen guitarra
  guitarra = loadImage("./assets/guitarra.png");

  // cargar sonidos
  sonidos[0] = loadSound('./assets/doMayor.mp3')
  sonidos[1] = loadSound('./assets/faMayor.mp3')
  sonidos[2] = loadSound('./assets/solMayor.mp3')
  sonidos[3] = loadSound('./assets/laMenor.mp3')
  sonidos[4] = loadSound('./assets/reMenor.mp3')
  sonidos[5] = loadSound('./assets/miMenor.mp3')
}

function setup() {

  //crear lienzo
  createCanvas(500, 500);

  // etiqueta
  etiqueta = 0;

  // tantas imagenes como clases
  numImagenes = Array(numeroClases).fill(0);

  // video
  video = createCapture(VIDEO);
  video.parent('contenedorVideo');

  // declarar extractorCaracteristicas con MobileNet
  extractorCaracteristicas = ml5.featureExtractor('MobileNet', modeloListo);
  // definir numero de clases
  extractorCaracteristicas.numClasses = numeroClases;

  // el clasificador extrae caracteristicas del video entrante
  clasificador = extractorCaracteristicas.classification(video);

  crearBotones();

}

function modeloListo() {
  select('#cargando').html('Modelo base (MobileNet) cargado!');
}

function agregarImagen(etiqueta) {
  clasificador.addImage(etiqueta);
}

function clasificar() {
  clasificador.classify(obtenerResultados);
}

function crearBotones() {
  // crear arreglo vacio
  botones = [];
  // iterar segun cantidad de clases
  for (let i = 0; i < numeroClases; i++) {

    // crear boton
    let boton = createButton('clase '+ i);
    // hacer boton sea descendiente de botones
    boton.parent('botones');
    // agregar identificacion a boton
    boton.id('clase'+i);
    // agregar el boton al arreglo de botones
    botones.push(boton);

    !function outer(i){
      // cuando el boton se presiona
      boton.mousePressed(function() {
        // agregar imagen
        agregarImagen(i);
        // aumentar numImagenes
        numImagenes[i]++;
        // seleccionar segun clase
        select('#clase'+i).html('clase '+i+': '+numImagenes[i]);
      });
    }(i)
  }

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

  // boton predecir
  botonPredecir = select('#botonPredecir');
  botonPredecir.mousePressed(clasificar);
}

function obtenerResultados(err, siguienteEtiqueta) {
  if (err) {
    console.error(err);
  }
  select('#resultado').html(siguienteEtiqueta);
  if (etiqueta != siguienteEtiqueta) {
    etiqueta = siguienteEtiqueta;
    sonidos[int(etiqueta)].play();
  }
  clasificar();
}

function draw() {
  // fondo negro
  background(0);
  // dibujar imagen
  image(guitarra, 50, 50);
}
