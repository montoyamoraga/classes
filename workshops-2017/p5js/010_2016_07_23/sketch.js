//2016 07 23
//taller p5js
//crear un canvas verde con una elipse que sigue al mouse

//camelCase, primera palabra minuscula, siguientes con mayuscula

//las variables de color en p5.js usan modo RGB por defecto
//y se pueden definir con distintos numeros de parametros
//los valores por defecto van entre 0 y 255
//1 es grayscale
//2 es grayscale + alpha
//3 es red, green, blue
//4 es red, green, blue + alpha

//en javascript existen variables
//para usar una variable, primero hay que DECLARARLA
//la DECLARACION se hace solo una vez
//es una instruccion al computador para que tenga un espacio en memoria
//que responda al nombre de la variable
var diametro;

//solo despues de declarar la variable, podemos ASIGNARLE un valor
//podemos asignarle un valor cuantas veces queramos
//la variable no tiene historia, solo va a saber el valor actual
diametro = 100;

//la manera corta de DECLARAR una variable y asignarle un valor inicial
//todo en una misma linea es asi
var x = 50;
//despues podemos seguir asignandole valores a lo largo del codigo
x = 10;

//javascript no es sensible a espacios,
//javascript si es sensible a mayusculas y minusculas

//hay dos tipos de variables, globales y locales
//las variables globales son DECLARADAS FUERA del cuerpo de una funcion
//las variables locales son DECLARADAS DENTRO del  cuerpo de una funcion

//todo el mundo sabe donde vive una variable global y la puede usar
//la variable local solo puede ser usada dentro de la funcion donde vive

//tradeoff variables globales
//las variables globales hacen mas facil la intercomunicacion entre funciones
//pero hacen que sea mas dificil aislar errores
//aparte consumen mas recursos, porque siempre estan ahi

//tradeoff variables locales
//las variables locales hacen que sea mas dificil la intercomunicacion entre funciones
//pero hacen que los errores sean mas localizables y acotados
//aparte de eso, consumen menos recursos
//porque liberan memoria luego de ejecutarse la funcion

//cuando una funcion se ejecuta, primero busca el valor de la variable
//dentro de ella, o sea, local. si no lo encuentra, busca en global.
//si no lo encuentra, el software se cae.
//corolario, pueden haber multiples variables locales con el mismo nombre
//pero que viven en distintas funciones y no va a haber problema

//funciones
//las funciones, al igual que las variables, deben ser DECLARADAS antes de ser usadas
//la declaracion se hace solo una vez
//hay varias maneras de declarar funciones en javascript, esta es una
function nombreFuncion() {
  //esto es el cuerpo de la funcion
  //aqui va lo que se ejecuta cuando la funcion es llamada o ejecutada
}

//para ejecutar la funcion, se usa el nombre y las funciones
nombreFuncion();


//funcion setup, corre una vez al principio
function setup() {
  //crear lienzo pantalla completa
  //createCanvas(dimHor, dimVer);
  createCanvas(windowWidth, windowHeight);
  //pintar el fondo verde
  //background(color);
  background(0, 255, 0);
}

//funcion draw, corre despues de setup, 60 veces por segundo
function draw() {
  
  //creemos una variable local verde y asignemosle un valor
  var verde = 255;
  
  //usemos la variable local
  background(0, verde, 0);
  
  //ellipse() dibuja una elipse en el lienzo
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);
  
  //diametro++;
}

//windowResized() se ejecuta cuando se cambia el tamaño
//de la ventana del navegador
function windowResized() {
  //resizeCanvas() cambia el tamaño del lienzo
  resizeCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
}

