//2016 07 12 taller p5 numero 04
//elipse que sigue al mouse en un fondo verde

//variables
//declaracion de variables
var anchoElipse;

//asignacion de variables
anchoElipse = 100;
//pasan cosas
//nueva asignacion
anchoElipse = 50;

//manera abreviada de declarar y asignar en una linea
//equivale a dos lineas de codigo
//var alturaEllipse;
//alturaEllipse = 100;
var alturaElipse = 100;
//nueva asignacion
alturaElipse = 50;

//scope o rango o alcance
//variables globales y locales

//las variables globales son declaradas
//fuera de los cuerpos de las funciones

//las variables locales
//son declaradas dentro del cuerpo de alguna funcion
//y solo pueden ser variado su valor con una asignacion
//dentro de esa misma funcion

//declaracion de la funcion setup
function setup() {

  //createCanvas(dimHor, dimVer);
  //createCanvas(600, 400);
  c = createCanvas(windowWidth, windowHeight);

  //background(R, G, B);
  background(0, 255, 0);

  //relleno de la elipse
  //fill(R, G, B);
  fill(112, 0, 112);

  //stroke(R, G, B);
  //noStroke() hace que no tenga borde
  noStroke();

  //strokeWeight(px);
  //define el borde en pixeles
  //strokeWeight(12);

  //frameRate(framesPorSegundoMaxima);
  frameRate(60);

}

//declaracion de la funcion draw
function draw() {

  background(255);

  //ejecutar funcion fondoRojo()
  //fondoRojo();

  //ellipse(posX_en_px, posY_en_px, width_en_px, height_en_px);
  //ellipse(mouseX, mouseY, anchoElipse, alturaElipse);

  //escribe en la consola de javascript
  //console.log("ola ke ase");
  //console.log(alturaElipse);

  muchasElipses();


}

//declaracion de funcion nueva
function nombreFuncion(argumento1, argumento2, etc) {

}

//declaracion de la funcion fondoRojo()
function fondoRojo() {
  //declaracion y asignacion de variable local
  //llamada rojo
  var rojo = 255;
  //usamos variable local llamada rojo 
  background(rojo, 0, 0);
  //imprimir variable local rojo en consola
  console.log("el valor de la variable rojo es " + rojo);
}

//camelCase: muchasElipses
//underscores: muchas_elipses


//declaracion de la funcion muchasElipses()
function muchasElipses() {

  var muchas = 1000;

  //for(variable de loop; condicion de seguir iterando; refrescar) {}
  for (var i = 0; i < muchas; i++) {
    //color del relleno
    fill(random(255), random(255), random(255), 200 + random(20));
    //sin borde
    noStroke();

    var ancho = 100;
    var alto = 100;
    //la funcion random(x) arroja un valor aleatorio entre 0 y x
    ellipse(random(width), random(height), random(ancho), random(alto));
  }

}