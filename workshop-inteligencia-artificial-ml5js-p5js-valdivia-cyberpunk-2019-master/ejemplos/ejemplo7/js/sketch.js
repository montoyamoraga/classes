// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* === ff
ml5 Example
PoseNet example using p5.js to draw with your nose on the canvas
=== */

let video;
let poseNet;
let poses = [];
let esqueletos = [];

let imagenFueraLienzo;
let narizX;
let narizY;

let narizAntesX;
let narizAntesY;

function setup() {

  // crear lienzo
  createCanvas(640, 480);

  // crear captura de video
  video = createCapture(VIDEO);
  video.size(width, height);

  // configuracion pantalla
  pixelDensity(1);

  // crear nueva imagen fuera del lienzo
  imagenFueraLienzo = createGraphics(width, height);

  // crear un nuevo metodo poseNet con una unica deteccion
  poseNet = ml5.poseNet(video, modeloListo);

  poseNet.on('pose', function(resultados) {
    poses = resultados;
  });

  // esconder el elemento video, y solo mostrar el lienzo
  video.hide();
}

function draw() {

  image(video, 0, 0, width, height);
  image(imagenFueraLienzo, 0, 0, width, height);

  // Podemos ejecutar ambas funciones para dibujar tanto
  // keypoints como esqueletos
  dibujarKeypoints();
  //dibujarEsqueleto();
}

// A function to draw ellipses over the detected keypoints
function dibujarKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
      // un keypoint es un objeto que describe una parte
      // del cuerpo, como brazoDerecho o hombroIzquierdo
      let keypoint = poses[i].pose.keypoints[j];
      // solo dibuja una elipse si la probabilidad
      // de la pose es mayor a 0.2
      if (keypoint.score > 0.2) {
        //        fill(255, 0, 0);
        //        noStroke();
        //        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        //        fill(0,255,0);
        //        text(j, keypoint.position.x, keypoint.position.y);

        if (j == 0) {
          narizX = keypoint.position.x;
          narizY = keypoint.position.y;

          imagenFueraLienzo.stroke(230, 80, 0);
          imagenFueraLienzo.strokeWeight(5);
          imagenFueraLienzo.line(narizX, narizY, narizAntesX, narizAntesY);

          narizAntesX = narizX;
          narizAntesY = narizY;

        }
      }
    }
  }
}

// funcion para dibujar esqueletos
function dibujarEsqueleto() {
  // iterar sobre todos los esqueletos detectados
  for (let i = 0; i < poses.length; i++) {
    // por cada esqueleto, iterar sobre todas las conexiones de los cuerpos
    for (let j = 0; j < poses[i].skeleton.length; j++) {
      let parteA = poses[i].skeleton[j][0];
      let parteB = poses[i].skeleton[j][1];
      stroke(255, 0, 0);
      line(parteA.position.x, parteA.position.y, parteB.position.x, parteB.position.y);
    }
  }
}

// función ejecutada cada vez que el modelo actualiza
function obtenerPoses(resultados) {
  poses = resultados;
}

// función ejecutada cuando se presiona una tecla
function keyPressed() {
  // borrar imagen fuera del lienzo
  imagenFueraLienzo.clear();
}

// función ejecutada cuando el modelo está listo
function modeloListo() {

}
