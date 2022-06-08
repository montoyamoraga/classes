# Diseño de instrumentos musicales digitales

Esta documento por Aarón Montoya Moraga es una propuesta de curso de electivo de especialización para Diseño en la Facultad de Arquitectura y Urbanismo de la Universidad de Chile, para el llamado de Docencia Abierta Primavera 2022, publicada en el sitio web http://www.fau.uchile.cl/noticias/186978/docencia-abierta-primavera-2022

## Conocimientos previos

Curso diseñado y escrito para estudiantes sin conocimientos previos de computación o de música o de inglés.

## Requerimientos

Para la realización de este curso los estudiantes usarán los computadores de los laboratorios de la Universidad de Chile con:

* Computador con sistema operativo Linux, Mac o Windows, (no tablets).
* Conexión a internet.

Adicionalmente, usaremos los software gratuitos:

* Navegadores web Chrome y Firefox.
* Arduino: hardware y software para programar microcontroladores.
* Pure Data: entorno de programación gráfico para arte sonoro.
* Git y Github: entorno de desarrollo y publicación de software.
* Teensy: microcontroladores usados para creación de instrumentos musicales digitales.

Los estudiantes deberán adquirir y traer a clases los siguientes hardware:

* Kit de microcontrolador Teensy para audio https://www.pjrc.com/store/audio_tutorial_kit.html (60.00 USD)
* Cable micro USB
* Audífonos o parlantes con entrada auxiliar

## Contenidos

Descripción:

Las y los estudiantes aprenderán los fundamentos de programación y sonido necesarios para construir instrumentos musicales digitales.

En la primera mitad del curso usaremos el software gratuito y de fuente abierta para música por computador llamado Pure Data, para aprender a programar los componentes básicos de sonido digital, incluyendo osciladores, filtros, mezcladores y efectos. Esta plataforma es usada a nivel profesional y usa el paradigma de programación visual, donde se usan bloques y cables de conexión entre ellos para escribir software.

En la segunda mitad del curso programaremos en el lenguaje C usando el microcontrolador Teensy, una variante del microcontrolador Arduino, con un fuerte enfoque en sonido y controladores musicales. Construiremos sintetizadores monofónicos, samplers y efectos de audio. Las y los estudiantes aprenderán los fundamentos de electrónica necesarios para crear las interfaces físicas para controlar los instrumentos, incluyendo perillas, botones y luces.

## Programa

### Semanas 01 y 02: Introducción al sonido con software Pure Data

Aprenderemos los fundamentos de programación visual usando Pure Data, para entender cómo funciona la percepción humana de sonido los osciladores digitales de distintas formas de onda. También aprenderemos las parametrizaciones comunes utilizadas, incluyendo frecuencia base y amplitud, los que controlaremos con ratón y teclado.

Escribiremos software para crear instrumentos musicales digitales simples basados en osciladores y los usaremos en clase.

### Semanas 03 y 04 : Ondas envolventes y secuenciadores

Aprenderemos a crear ondas envolventes unipolares para controlar la amplitud de nuestros osciladores, incluyendo envolventes ADSR para instrumentos tonales y de AR para instrumentos percusivos. También aprenderemos variables de estado y parametrización para crear secuenciadores que son capaces de controlar y repetir rítmicamente nuestros instrumentos.

Escribiremos software para crear instrumentos musicales digitales con control y expresividad duración en el tiempo. También escribiremos software para crear secuenciadores que permiten almacenar información para crear secuencias musicales y patrones repetitivos.

### Semanas 05 y 06 : Filtros, grabación y sampleo

Aprenderemos los fundamentos de filtros de frecuencia para sonido, incluyendo pasabajos, pasaaltos, pasabanda y rechazabanda, y su parametrización en frecuencias de corte y resonancia.

Escribiremos software que permita filtrar en frecuencia nuestros sonidos hechos con osciladores o a partir de material grabado. Los parámetros de filtrado serán controlados de forma interactiva con ratón y teclado, y con secuenciadores digitales. 

### Semanas 07 y 08 : Introducción al sonido con hardware Teensy

Aprenderemos los fundamentos de programación en C usando el microcontrolador Teensy, una variante de Arduino. También los fundamentos de electrónica para montar nuestro microntrolador Teensy en una protoboard para crear nuestro primer instrumento hardware independiente del computador.

### Semanas 09 y 10 : Perillas y botones para instrumentos

Aprenderemos los fundamentos de electricidad para conectar perillas y botones al microcontrolador, basado en la interactividad que ya hemos aprendido con teclado y ratón del computador.

Usaremos las perillas y botones para controlar diversos parámetros musicales, incluyendo notas musicales, frecuencia de sonido, volumen, frecuencia de corte de filtrado y tempo.

### Semanas 11 y 12 : Grabación y sampleo

Aprenderemos cómo conectar un micrófono a nuestro microcontrolador Teensy para grabar sonido, y programar diversas rutinas con botones y perillas para controlar parámetros de grabación como ganancia de entrada, inicio, pausa y finalización de la grabación. Aprenderemos diversas técnicas de sampleo para manipular creativamente los sonidos grabados, incluyendo frecuencia y dirección de reproducción.

Construiremos con nuestro microcontrolador Teensy un instrumento capaz de grabar, reproducir y manipular audio.

### Semanas 13 y 14 : Proyecto final y diseño de instrumentos musicales digitales

Aprenderemos a documentar y diseñar instrumentos musicales digitales, incluyendo elementos como su lista de materiales, escritura y publicación del código, instalación de software, eléctrica y mecánica, diseño de interaccion instrumento-humano.

Los estudiantes trabajarán en sus propios proyectos finales, en grupos de 2 o 3,
y documentarán su proceso.

### Semanas 15 y de actividades especiales: Cierre de semestre y futuro

Aprenderemos sobre recursos para seguir aprendiendo después de este curso sobre la programación y construcción de instrumentos musicales digitales.

Realizaremos el ierre del semestre y acta de notas y actividades de retroalimentación.

## Evaluaciones

Las nota final del curso será un promedio simple de las siguientes notas:

* Asistencia y participación
* Tareas individuales
* Proyecto grupales de mitad y fin de semestre

## Referencias y créditos

* La primera mitad del curso está basada en el software Pure Data https://puredata.info/ creado por Miller Puckette http://msp.ucsd.edu/, incluyendo las siguientes referencias:
  * Curso Music 171, Computer Music 1 http://msp.ucsd.edu/syllabi/171.20w/index.htm
  * Libro gratuito loadbang, Programming Electronic Music in Pure Data, por Johannes Kreidler https://www.wolke-verlag.de/musikbuecher/johannes-kreidler-loadbang/
  * Libro The Computer Music Tutorial por Curtis Roads https://mitpress.mit.edu/books/computer-music-tutorial
  * Manual gratuito https://en.flossmanuals.net/pd-extended/_full/
* La segunda mitad del software está basada en el microcontrolador Teensy desarrollado por PJRC https://www.pjrc.com/, incluyendo las siguientes referencias:
  * Tutorial Teensy Audio Library, https://www.pjrc.com/teensy/td_libs_Audio.html
  * Libro Arduino for Musicians: A Complete Guide to Arduino and Teensy Microcontrollers https://global.oup.com/academic/product/arduino-for-musicians-9780199309320