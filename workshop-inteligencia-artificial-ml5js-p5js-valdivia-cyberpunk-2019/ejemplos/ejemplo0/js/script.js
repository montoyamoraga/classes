// la imagen que queremos clasificar
const imagen = document.getElementById('image');
// tag resultado en el archivo HTML
const resultado = document.getElementById('resultado');
// tag probabilidad en el archivo HTML
const probabilidad = document.getElementById('probabilidad');

// inicializar el método de clasificador de imágenes con MobileNet
// documentacion https://ml5js.org/docs/ImageClassifier
const clasificador = ml5.imageClassifier('MobileNet', function() {
  console.log('Modelo cargado!');
});

// hacer una predicción con la imagen seleccionada
// retorna por defecto un arreglo con 10 opciones con sus probabilidades
clasificador.predict(imagen, function(err, resultados) {
  // cambiar el contenido del texto resultado
  resultado.innerText = resultados[0].className;
  // cambiar el contenido del texto probabilidad
  probabilidad.innerText = resultados[0].probability.toFixed(4);
});
