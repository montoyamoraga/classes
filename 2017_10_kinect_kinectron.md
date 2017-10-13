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

Hoy usaremos p5.js para

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

## Agradecimientos

* A María José Contreras y Postgrado Artes UC por la invitación.
* A Lisa Jamhoury y Shawn van Every por Kinectron.
* A Lauren McCarthy y todo el equipo de p5.js.
* A Yuli Cai y Donald Shorter Jr. por todas las horas que hemos compartido usando y descubriendo las posibilidades de la Kinect para performance en vivo.
* A Mimi Yin por su clase Choreographic Interventions.
* A Kat Sullivan, Sergio Mora-Díaz, Elizabeth White y Tiriree Kananuruk por mantener el Movement Collective de NYU ITP.
