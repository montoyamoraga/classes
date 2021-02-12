//2016 07 11
//workshop for los electros
//basic p5js sketch

//red background and ellipse following mouse
//with random color and leaving a trail

var ellipseWidth = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0); 
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, ellipseWidth, ellipseWidth);
}