var workshop = "talleres gratuitos julio-agosto 2016";
var title = "introducción a la programación creativa"
var p5Text = "p5.js";

var audience1 = "artistas, músicos, educadores, programadores, diseñadores";
var audience2 = "escritores, pintores, escultores, fotógrafos y público general de todas las edades";

var contents1 = "programar y diseñar software interactivo, crear imágenes y animaciones, ";
var contents2 = "crear juegos e interfaces, incorporar el computador a su práctica artística";

var cost = "costo gratuito";

var about = "programador, artista multimedia, músico";
var contact = "aamontoya @ gmail.com"

var sponsor = "the processing foundation";

var verticalStep;

var textSizeUnit;

var speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(900, 675);
  background(255);
  rectMode(CORNER);
  frameRate(10);
  ellipseMode(CENTER);
}

function draw() {

  verticalStep = width / 40;
  textSizeUnit = width * height / 800000;

  noStroke();
  var speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  fill(int(random(255)), 30, 30, 10);
  ellipse(mouseX, mouseY, speed, speed);

  stroke(255);

  var randomColor1 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor2 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor3 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor4 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor5 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor6 = color(int(random(255)), int(random(255)), int(random(255)));
  var p5Color = color('#ED225D');
  var blueColor = color('#2D7BB6');

  textSize(35*textSizeUnit);
  textAlign(LEFT);

  fill(blueColor);
  text(workshop, 0, verticalStep * 1);
  fill(randomColor1);
  text(title, 0, verticalStep * 2);
  fill(p5Color);
  text("basado en el lenguaje " + p5Text, 0, verticalStep * 3);

  textSize(30*textSizeUnit);
  textAlign(CENTER);

  fill(randomColor2);
  text("diseñado para: ", width / 2, verticalStep * 5);
  fill(blueColor);
  text(audience1, width / 2, verticalStep * 6);
  text(audience2, width / 2, verticalStep * 7);

  fill(randomColor3);
  text("que quieran aprender a: ", width / 2, verticalStep * 9);
  fill(blueColor);
  text(contents1, width / 2, verticalStep * 10);
  text(contents2, width / 2, verticalStep * 11);

  fill(randomColor4);
  text("dictado por aarón montoya-moraga: ", width / 2, verticalStep * 13);
  fill(blueColor);
  text(about, width / 2, verticalStep * 14);

  fill(randomColor5);
  text("para inscripciones y más información escribe a: ", width / 2, verticalStep * 16);
  fill(blueColor);
  text(contact, width / 2, verticalStep * 17);

  textSize(30*textSizeUnit);
  textAlign(RIGHT);

  fill(randomColor6);
  text("auspiciado por: ", width, verticalStep * 19);
  fill(blueColor);
  text(sponsor + " ", width, verticalStep * 20);

  //saveCanvas('myCanvas', 'jpg');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
