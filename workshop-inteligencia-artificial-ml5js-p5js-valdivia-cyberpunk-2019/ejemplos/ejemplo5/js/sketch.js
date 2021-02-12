// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let anchoPong = 800;
let alturaPong = 560;
let WINNING_SCORE = 3;
let PADDLE_HEIGHT = 200;
let PADDLE_THICKNESS = 25;
let velocidadPaleta = 5;
let velocidadPelotaX = 10;
let velocidadPelotaY = 6;
let pelotaPorte = 50;

let extractorCaracteristicas;
let regresion;
let video;
let perdidas;
let barra;
let agregarMuestra;
let muestras = 0;

let pelotaX = anchoPong/2;
let pelotaY = alturaPong/2;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;
let mostrarVentanaGanar = false;
let jugarJuego = false;
let pelota1Y, pelota2Y;

function setup() {
  createCanvas(anchoPong, alturaPong);

  video = createCapture(VIDEO);
  video.hide();

  extractorCaracteristicas = ml5.featureExtractor('MobileNet', modeloListo);
  regresion = extractorCaracteristicas.regression(video);

  crearBotones();

  paleta1Y = height / 2 - PADDLE_HEIGHT / 2;
  paleta2Y = height / 2 - PADDLE_HEIGHT / 2;
}

function draw() {
  background("#E4C000");

  if(jugarJuego) {
    moverTodo();
  }

  dibujarTodo();

  if(!jugarJuego) {
    image(video, 0, 0, 320, 240);
  }
}

function actualizarPaleta(nuevoValorPaleta) {
  paleta1Y = paleta1Y = lerp(paleta1Y, alturaPong * nuevoValorPaleta, 0.2);
  paleta1Y = constrain(paleta1Y, 0, height - PADDLE_HEIGHT);
}

function moverTodo() {
  if (mostrarVentanaGanar) return;

  pelotaX += velocidadPelotaX;
  pelotaY += velocidadPelotaY;

  movimientoComputador();

  let amortiguacion = 0.2;

  if (pelotaX < (0 + pelotaPorte / 2 + PADDLE_THICKNESS)) {
    if (pelotaY > paleta1Y && pelotaY < paleta1Y + PADDLE_HEIGHT) {
      velocidadPelotaX *= -1;
      var deltaY = pelotaY - (paleta1Y + PADDLE_HEIGHT / 2);
      velocidadPelotaY = deltaY * amortiguacion;
    } else {
      puntajeJugador2++; // tiene que ser ANTES de resetPelota()
      resetPelota();
    }
  }

  if (pelotaX > (anchoPong - pelotaPorte / 2 - PADDLE_THICKNESS)) {
    if (pelotaY > paleta2Y && pelotaY < paleta2Y + PADDLE_HEIGHT) {
      velocidadPelotaX *= -1;
      var deltaY = pelotaY - (paleta2Y + PADDLE_HEIGHT / 2);
      velocidadPelotaY = deltaY * amortiguacion;
    } else {
      puntajeJugador1++; // tiene que ser ANTES de resetPelota()
      resetPelota();
    }
  }

  if (pelotaY > height) {
    pelotaY = height;
    velocidadPelotaY *= -1;
  }

  if (pelotaY < 0) {
    pelotaY = 0;
    velocidadPelotaY *= -1;
  }

  velocidadPelotaY = constrain (velocidadPelotaY, -5,5);
}

function movimientoComputador() {
  let paleta2YCentro = paleta2Y + PADDLE_HEIGHT / 2;
  if (paleta2YCentro < pelotaY - PADDLE_HEIGHT / 3) {
    paleta2Y += 6;
  } else if (paleta2YCentro > pelotaY + PADDLE_HEIGHT / 3) {
    paleta2Y -= 6;
  }
}

function resetPelota() {
  if (puntajeJugador1 >= WINNING_SCORE || puntajeJugador2 >= WINNING_SCORE) {
    mostrarVentanaGanar = true;
  }
  velocidadPelotaX *= -1;
  pelotaX = anchoPong / 2;
  pelotaY = height / 2;
}

function dibujarTodo() {
  fill(255, 219, 0);
  rect(0, 0, PADDLE_THICKNESS, height);

  fill(255);
  noStroke();

  if (mostrarVentanaGanar) {
    textSize(20);
    if (puntajeJugador1 >= WINNING_SCORE) {
      text("Ganó jugador izquierdo!", 200, 200);
    } else if (player2Score >= WINNING_SCORE) {
      text("Ganó jugador derecho!", pongWidth - 200, 200);
    }
    textSize(14);
    text("Click para continuar", anchoPong / 2, height - 200);
    return;
  }

  fill("#00B552");

  for (let i = 0; i < height; i += 40) {
    rect(anchoPong / 2 - 1, i, 2, 20);
  }

  rect(0, paleta1Y, PADDLE_THICKNESS, PADDLE_HEIGHT); // left paddle
  rect(anchoPong - PADDLE_THICKNESS, paleta2Y, PADDLE_THICKNESS, PADDLE_HEIGHT); // paleta derecha

  fill("#FAFBDF");
  ellipse(pelotaX, pelotaY, pelotaPorte, pelotaPorte);
  // pelota //15

  textSize(20);
  text(puntajeJugador1, 200, 100);
  text(puntajeJugador2, anchoPong - 200, 100);
}

function mouseReleased() {
  if (mostrarVentanaGanar) {
    puntajeJugador1 = 0;
    puntajeJugador2 = 0;
    mostrarVentanaGanar = false;
  }
}

function modeloListo() {
  select('#cargando').html('Modelo cargado!');
}

function predecir() {
  regresion.predict(obtenerResultados);
}

function crearBotones() {
  barra = select('#barra');

  agregarMuestra = select('#agregarMuestra');
  agregarMuestra.mousePressed(function() {
    regresion.addImage(barra.value());
    select('#cantidadMuestras').html(muestras++);
  });

  // botón entrenar
  entrenar = select('#entrenar');
  entrenar.mousePressed(function() {
    regresion.train(function(valorPerdidas) {
      if (valorPerdidas) {
        perdidas = valorPerdidas;
        select('#perdidas').html('Pérdidas: ' + perdidas);
      } else {
        select('#perdidas').html('Entrenamiento listo! Pérdida final: ' + perdidas);
      }
    });
  });

  // boton predecir
  botonPredecir = select('#botonPredecir');
  botonPredecir.mousePressed(function() {
    jugarJuego = true;
    predecir();
  });
}

// mostrar los resultados
function obtenerResultados(err, resultado) {
  if (err) {
    console.error(err);
  }
  barra.value(resultado);
  actualizarPaleta(resultado);
  predecir();
}
