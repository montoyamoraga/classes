// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let nariz;

function preload() {
  nariz = loadImage("./assets/nariz.png");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // crea un nuevo método poseNet con una sola detección
  poseNet = ml5.poseNet(video, modeloListo);
  // esto configura un evento que puebla la variable global
  // "poses" con un arreglo cada vez que se detectan nuevas poses
  poseNet.on('pose', function(resultados) {
    poses = resultados;
  });
  // esconde el elemento video y solamente muestra el lienzo
  video.hide();

  textSize(16);
}

function modeloListo() {
  select('#estado').html('Modelo cargado!');
}

function draw() {
  image(video, 0, 0, width, height);

  // Llamando a ambas funciones se pueden dibujar
  // los keypoints y los esqueletos
  dibujarKeypoints();
  //dibujarEsqueletos();
}

// funcion para dibujar elipses sobre los keypoints detectados
function dibujarKeypoints()  {
  // itera sobre todas las poses detectadas
  for (let i = 0; i < poses.length; i++) {
    // por cada pose detectada, itera sobre todos los keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // Un keypoint es un objeto que describe una
      // parte del cuerpo, como brazoDerecho u hombroIzquierdo
      let keypoint = pose.keypoints[j];
      // solamente dibuja una elipse si la
      // probabilidad de la pose es mayor a 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        text(j, keypoint.position.x, keypoint.position.y);
        if (j == 0) {
          push();
          imageMode(CENTER);
          pop();
        }
      }
    }
  }
}

// función para dibujar esqueletos
function dibujarEsqueletos() {
  // itera sobre todos los esqueletos detectados
  for (let i = 0; i < poses.length; i++) {
    let esqueleto = poses[i].skeleton;
    // por cada esqueleto, itera sobre
    // todas las conexiones del cuerpo
    for (let j = 0; j < skeleton.length; j++) {
      let parteA = skeleton[j][0];
      let parteB = skeleton[j][1];
      stroke(255, 0, 0);
      line(parteA.position.x, parteA.position.y, parteB.position.x, parteB.position.y);
    }
  }
}
