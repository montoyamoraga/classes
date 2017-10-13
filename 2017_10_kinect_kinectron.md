# 2017_10_kinect_kinectron.md

## Sobre el taller

Este taller fue dictado por [Aarón Montoya-Moraga](http://montoyamoraga.io/) en el Campus Oriente de la Universidad Católica de Chile, para el Postgrado de Artes UC, viernes 13 de octubre 2017, entre 10am y 1pm.

## Asistentes

12 alumnos. Presentación de un minuto por persona, quiénes son, cuánto saben de programación.

## Contenidos

Hoy veremos:

* Introducción al sensor Kinect
* Introducción al software Kinectron
* Fundamentos de programación: variables y funciones
* Introducción a p5.js para programación interactiva
* Manipulación en vivo de elementos audiovisuales usando movimiento

## Sobre Kinect

Kinect es un sensor desarrollado por Microsoft que cuenta con
* Cámara RGB
* Cámara infrarroja
* Sensor de profundidad
* Software para la detección y monitoreo de cuerpos humanos / esqueletos / extremidades.

Existen dos versiones de Kinect:

* Kinect 360 (2010, primera generación)
* Kinect One (2013, segunda generación)

Hoy usaremos Kinect One.

La Kinect se puede conectar vía USB 3.0 al computador:

* Windows: todas las funcionalidades.
* Mac solamente las cámaras, no el software.

## Software Kinectron

[Kinectron](https://github.com/lisajamhoury/kinectron) es un software de código abierto y gratuito desarrollado por [Lisa Jamhoury](http://lisajamhoury.com/) y [Shawn van Every](https://tisch.nyu.edu/about/directory/itp/1838206356).

Kinectron permite que un sistema computador Windows + Kinect envíe datos a otros computadores, incluyendo computadores no Windows.

Para instalar Kinectron, visita [https://github.com/lisajamhoury/kinectron](https://github.com/lisajamhoury/kinectron) y descargar desde "Releases".

Hoy usaremos un computador Windows, un Kinect One y el software Kinectron, versión 0.0.4.9.

Recibiremos los datos de la Kinect en nuestros computadores, usando p5.js.

## p5.js

[p5.js](https://p5js.org/) es una herramienta web para programación creativa creada por [Lauren McCarthy](http://lauren-mccarthy.com/). Permite crear sitios web con gráficas y sonidos interactivos.

Hoy usaremos p5.js para visualizar y manipular en nuestros computadores la información enviada por la Kinect.

## Ejemplos de obras con Kinect

* [Two skeletons](http://www.caiyuli.com/work/two-skeletons/) (2015), por Yuli Cai, Adam Ray Dyer y Aarón Montoya-Moraga.

* [Puppet](https://vimeo.com/168505358) (2015), por Yuli Cai, Donald Shorter Jr. y Aarón Montoya-Moraga.

* [6:34](https://vimeo.com/197487076) (2016), por Yuli Cai, Donald Shorter Jr. y Aarón Montoya-Moraga.

* [50 shades of eyes](http://www.caiyuli.com/work/50-shades-of-eyes/), por Yuli Cai.

* [Facing you](http://lisajamhoury.com/portfolio/facing-you/) (2017), por Lisa Jamhoury.


## Instrucciones

### Configuración de p5.js

Ir a [https://alpha.editor.p5js.org/](https://alpha.editor.p5js.org/) y crear una cuenta para usar el editor web de p5.js.

Hoy programaremos usando este editor.

### Configuración de Kinectron

Descargamos Kinectron en el computador Windows, descomprimimos la carpeta y luego hacemos doble click en "Kinectron", para abrir la aplicación.

Conectamos la Kinect al puerto USB 3.0 y elegimos modos de visualización de la Kinect para asegurarnos de que funcionando.

Tenemos los siguientes modos disponibles:

* SINGLE FRAME: para enviar un cuadro a la vez, usaremos este.
* MULTIPLE FRAMES: para enviar múltiples cuadros a la vez.

* COLOR: imagen RGB
* DEPTH: imagen de profundidad
* RAW DEPTH: imagen de profundidad, sin filtrar
* SKELETON (TRACKED BODIES): esqueletos
* ALL BODIES: esqueletos
* INFRARED: imagen infrarroja
* LONG EXPOSURE INFRARED: imagen infrarroja de larga exposición
* KEY: esqueleto con imagen RGB del cuerpo (chromakeying)
* STOP ALL: detiene la transmisión

## Ejemplos en p5.js

Como referencia, usaremos código de la clase [Introduction to Computational Media: Dancer's edition](https://itp.nyu.edu/classes/dance-f16/kinect/), por Dan O'Sullivan y William Moulton.

Estos proyecto incluyen las siguientes bibliotecas:

* p5.js: disponible en [p5js.org](https://p5js.org/)
* p5.dom.js: disponible en [p5js.org](https://p5js.org/)
* p5.sound.js: disponible en [p5js.org](https://p5js.org/)
* kinectron.bundle.js: disponible en [github.com/lisajamhoury/kinectron](https://github.com/lisajamhoury/kinectron)

* (00_z)[http://alpha.editor.p5js.org/montoyamoraga/sketches/HkfZczChb]: cambiar color del fondo según posición de la mano derecha en el eje z.

* (00_z)[http://alpha.editor.p5js.org/montoyamoraga/sketches/HkfZczChb]: cambiar color del fondo según posición de la mano derecha en el eje z.



## Agradecimientos

* A María José Contreras y Postgrado Artes UC por la invitación.
* A Lisa Jamhoury y Shawn van Every por Kinectron.
* A Lauren McCarthy y todo el equipo de p5.js.
* A Yuli Cai y Donald Shorter Jr. por todas las horas que hemos compartido usando y descubriendo las posibilidades de la Kinect para performance en vivo.
* A Mimi Yin por su clase Choreographic Interventions.
* A Kat Sullivan, Sergio Mora-Díaz, Elizabeth White y Tiriree Kananuruk por mantener el Movement Collective de NYU ITP.
