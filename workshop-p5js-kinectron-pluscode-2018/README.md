# workshop-p5js-kinectron-pluscode-2018

Workshop para el [festival +CODE](http://pluscode.cc/) versión 2018, realizado en [elculturalsanmartin](http://elculturalsanmartin.org/), Buenos Aires, Argentina, noviembre 16 2018.

## Acerca de

Este workshop de Introducción a la programación y arte interactivo con p5.js y  Kinect fue diseñado y es impartido por [Aarón Montoya-Moraga](http://montoyamoraga.io/). Este workshop incluye trabajo y material que ya ha sido usado por el autor para workshops similares.

Esta versión fue enseñada en [elculturalsanmartin](http://elculturalsanmartin.org/), Buenos Aires, Argentina, viernes 16 noviembre 2018, en el contexto del festival [PlusCODE](http://pluscode.cc/) y con el generoso apoyo de la [Processing Foundation](https://processingfoundation.org/).

## Código de conducta

Nos regiremos por el [código de conducta de Berlin](http://berlincodeofconduct.org/es/), y por las siguientes reglas:

 * Este es un espacio seguro para experimentación sonora y artística.
 * Respeta a todos y sé amable.
 * No cometas actos ofensivos o violentos.
 * Haz preguntas, ándate por las ramas, improvisa.

## Sobre el autor

 (5 mins)

[Aarón Montoya-Moraga](http://montoyamoraga.io/) es ingeniero eléctrico, músico, programador y artista chileno. Se graduó y fue residente de investigación en el Programa de [Telecomunicaciones Interactivas](https://tisch.nyu.edu/itp) de la [Universidad de Nueva York](https://www.nyu.edu/). Enseña introducción a la programación y FLOSS para las artes en [CODED Escuela](http://codedescuela.cl/), que incluye [Pure Data](http://puredata.info/) y [ChucK](http://chuck.cs.princeton.edu/) para arte sonoro, [Python](https://www.python.org/) para poesía, [p5.js](https://p5js.org/es/) y [Processing](https://processing.org/) para artes visuales. Es colaborador del proyecto [p5.js](https://p5js.org/es/) y ha traducido a español el libro [Introducción a p5.js](https://processingfoundation.press/es/) para Processing Foundation. Dirige el sello de música [bandurria](https://bandurria.io/).

### Los estudiantes se presentan (90 segundos cada uno)

Por favor incluye esta información:

* Nombre?
* Por qué viniste a este curso?
* Experiencia programar?
* Experiencia movimiento / danza / actuación?
* Experiencia arte visual / diseño gráfico?

[Timer de 90 segundos](https://www.google.com.ar/search?rlz=1C5CHFA_enUS813US813&q=timer+90+seconds)

## Temario

* [Software a usar](#software-a-usar)
* [Historia de p5.js y Processing](#historia-de-p5js-y-processing)
* [Historia de Kinect y Kinectron]()
* [Programación creativa para artes visuales y diseño gráfico](#programaci%C3%B3n-creativa-para-artes-visuales-y-dise%C3%B1o-gr%C3%A1fico)
* [Mi comunidad](#mi-comunidad)
* [Programación en p5.js](#programaci%C3%B3n-en-p5js)
* [Referencia](#referencia)

## Software a usar

### Editor de texto

Por favor instalen un editor de texto, estas son algunas recomendaciones:
* [Atom](https://atom.io/)
* [Sublime Text](https://www.sublimetext.com/)

### Servidor local

Tendremos que usar también un servidor local.

Si tu computador es Mac, tienes instalado Python 2.7 por defecto.

Si instalaste el editor de texto, instala el paquete "atom-live-server", desde Settings->Install.

Por favor correr estos comandos para revisar si tienen Python instalado.

En Linux, abrir terminal.
En Mac, abrir app Terminal.
En Windows, abrir "cmd" o "Command Prompt".

Comprueba si tienes instalado Python ejecutando el comando.

```
python
```

Tras ejecutar este comando, el resultado es:

```
Python 2.7.15 (default, Oct  2 2018, 11:42:04)
[GCC 4.2.1 Compatible Apple LLVM 10.0.0 (clang-1000.11.45.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
```

La primera línea indica el número de versión de Python.

Si no tienes instalado Python, recomiendo instalar la versión más reciente de [Python](https://www.python.org/downloads/).

Comprueba que puedes iniciar un servidor local con el comando de Python 2:

```
python -m SimpleHTTPServer
```

Si tu computador tiene Python 3, el comando es:

```
python -m http.server
```

## Historia de p5.js y Processing

(20 minutos)

[Processing](https://processing.org/) es un [software libre, gratuito, y de código abierto](https://es.wikipedia.org/wiki/Software_libre_y_de_c%C3%B3digo_abierto) (FLOSS por sus siglas en inglés).

Processing fue creado por [Ben Fry](https://en.wikipedia.org/wiki/Ben_Fry) y [Casey Reas](https://en.wikipedia.org/wiki/Casey_Reas), para más información leer [A modern Prometheus - The History of Processing by Casey Reas and Ben Fry ](https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85).

Processing es desarrollado principalmente por la comunidad en torno a [UCLA DMA](http://dma.ucla.edu/), [Fathom Information Design](https://fathom.info/) y [NYU ITP](https://tisch.nyu.edu/itp).

La [Processing Foundation](https://processingfoundation.org/)

## Programación creativa para artes visuales y diseño gráfico

(30 mins)

* [Cinder](https://libcinder.org/), una biblioteca gratuita y de código abierto para programación creativa de calidad profesional, desarrollada en C++.

* [Processing](https://processing.org/): Existen proyectos relacionados como [p5.js](https://p5js.org/es/), [Processing for Android](https://android.processing.org/), [Processing for Pi](https://pi.processing.org/) y [Processing.py](https://py.processing.org/).

* [p5.js](https://p5js.org/es/), biblioteca de JavaScript creada por [Lauren McCarthy](http://lauren-mccarthy.com/)

* [openFrameWorks](https://openframeworks.cc/), biblioteca de C++ de código abierto para programación creativa.

## Historia de Kinect y Kinectron

Kinect es un hardware desarrollado por Microsoft, existen dos versiones.

* [Kinect 360 (Kinectv1)](https://en.wikipedia.org/wiki/Kinect#/media/File:Xbox-360-Kinect-Standalone.png) (2010-2016)
* [Kinect One (Kinectv2)](https://en.wikipedia.org/wiki/Kinect#/media/File:Xbox-One-Kinect.jpg) (2013-2017)

Kinect contiene:
* Sensor color (RGB)
* Sensor profundidad (depth)
* Sensor infrarrojo (infrared)
* Software para la detección y monitoreo de cuerpos humanos / esqueletos / extremidades.

Kinect fue lanzado como un accesorio para la consola Xbox, permitiendo que los videojuegos pudieran ser controlados con gestos y movimiento en el espacio de manera multi-jugador.

Posteriormente, Microsoft lanzó un kit para desarrolladores (Kinect SDK) que permitió conectarla a computadores con Windows y usar sus funcionalidades. También se puede usar en computadores sin Windows, gracias al desarrollo de plugins y proyectos que usan las funcionalidades de Kinect.

Hoy usaremos Kinectron, un software que permite transmitir datos desde una Kinect One (v2) conectada a un computador Windows y usar esta información en múltiples computadores. Desarrollado por [Shawn van Every](https://tisch.nyu.edu/about/directory/itp/1838206356) y [Lisa Jamhoury](http://lisajamhoury.com/), y mantenido por la comunidad de [NYU ITP](https://tisch.nyu.edu/itp).

Aunque Kinect esté descontinuada, artistas y creativos siguen usando Kinect en sus trabajos y este software puede ser adaptado para ser compatible con nuevas versiones de dispositivos similares a desarrolarse en el futuro.

## Instalación Kinectron

Kinectron funciona con dos componentes, un servidor y clientes. Los computadores servidor y clientes deben estar en la misma red Wifi e instalar los correspondientes software.

### Servidor

El servidor Kinectron "kinectron-server" está disponible en [https://github.com/kinectron/kinectron], en la sección "Releases". Debe ser instalado y ejecutado en un computador Windows.

A este computador Windows se conecta una Kinectv2 vía USB 3.0.

El servidor posee configuraciones avanzadas, para bloquear llamas API, para cambiar el servidor por defecto.

### Clientes

Para utilizar kinectron, tienes que estar en la misma red que el servidor.

Debes descargar la biblioteca cliente "kinectron.bundle.js" de Kinectron de JavaScript, disponible en [https://github.com/kinectron/kinectron], en la sección "Releases", archivo "Source code".

## Configuración de Kinectron

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

## Mi comunidad

* [Afrotectopia](https://www.afrotectopia.com/), festival de artes mediales, cultura y tecnología organizado por [Ari Melenciano](http://ariciano.com/).

* [CODED Escuela](http://codedescuela.cl/), colectivo chileno de educación de artes mediales, conformada por [Aarón Montoya-Moraga](http://montoyamoraga.io/), [Camila Colussi](https://www.camilacolussi.com/), [Christian Oyarzún](http://error404.cl/), [Guillermo Montecinos]() y [Natalia Cabrera](http://www.nataliacabrera.com/). Enseñan introducción a la programación para arte gráfico con p5.js, arte sonoro con ChucK, poesía con Python, entre otros.

* [The Coding Train](https://www.youtube.com/user/shiffman): canal de Youtube dedicado a la enseñanza de programación creativa, por [Daniel Shiffman](https://shiffman.net/).

* [Kadenze](https://www.kadenze.com/): cursos en línea, incluye [Introduction to Programming for the Visual Arts with p5.js](https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js-vi/info), por [Casey Reas](http://reas.com/) y [Lauren McCarthy](http://lauren-mccarthy.com/), y también [The Nature of Code](https://www.kadenze.com/courses/the-nature-of-code-ii/info), por [Daniel Shiffman](https://shiffman.net/).

* [New Latin Wave](https://newlatinwave.com/), festival de arte y cultura latinoamericana en New York, dirigido por Amanda Riesman y [Mauricio Diaz](http://sokio.me/).

* [NYU ITP](https://tisch.nyu.edu/itp), programa posgrado MPS, New York, New York, Estados Unidos. Aquí son profesores [Daniel Shiffman](https://shiffman.net/), [Allison Parrish](https://www.decontextualize.com/) entre otros. También existe un programa de pregrado asociado en China [NYU Shanghai IMA](https://shanghai.nyu.edu/academics/majors/interactive-media-arts) y en New York [NYU IMA](https://tisch.nyu.edu/itp).

* [NYU ITP](https://tisch.nyu.edu/itp), programa posgrado MPS, New York, New York, Estados Unidos. Aquí son profesores [Daniel Shiffman](https://shiffman.net/), [Allison Parrish](https://www.decontextualize.com/) entre otros.

* [School for Poetic Computation](http://sfpc.io/), New York, New York, Estados Unidos. Aquí son profesores [Taeyoon Choi](http://taeyoonchoi.com/) y [Zach Lieberman](http://thesystemis.com/), entre otros.

* [School of Machines, Making & Make-Believe](http://schoolofma.org/), Berlin, Alemania, dirigida por [Rachel Uwa](http://schoolofma.org/about/).

* [Sinestesia](http://sinestesia.cc/), laboratorio creativo y espacio de encuentro en torno a artes mediales en Santiago de Chile, cuyos miembros incluyen a [Sergio Mora-Diaz](http://www.sergiomoradiaz.com/) y [Joaquín González](http://www.sinestesia.cc/sinestesia-lie).

* [UCLA Design Media Arts](http://dma.ucla.edu/), programa posgrado MFA, Los Angeles, California, Estados Unidos. Aquí son profesores [Casey Reas](http://reas.com/) y [Lauren McCarthy](http://lauren-mccarthy.com/), entre otros.

## A programar!

Partiremos desde algunos ejemplos preparados para hoy, los que están en la carpeta [/ejemplos](/ejemplos), por favor descargar este repositorio.

* ejemplo00-detectar-esqueleto: detectar esqueleto en consola
* ejemplo01-cambiar-color: controlar color fondo según mano derecha eje Z
* ejemplo04-aplauso: detectar comportamiento manos y aplauso

## Ejemplos de obras con Kinect

* [Puppet](https://vimeo.com/168505358) (2015), por [Yuli Cai](http://www.caiyuli.com/), [Donald Shorter Jr.](https://www.donaldcshorterjr.com/) y [Aarón Montoya-Moraga](http://montoyamoraga.io/).

* [6:34](https://vimeo.com/197487076) (2016), por por [Yuli Cai](http://www.caiyuli.com/), [Donald Shorter Jr.](https://www.donaldcshorterjr.com/) y [Aarón Montoya-Moraga](http://montoyamoraga.io/).

* [50 shades of eyes](http://www.caiyuli.com/work/50-shades-of-eyes/), por [Yuli Cai](http://www.caiyuli.com/).

* [Facing you](http://lisajamhoury.com/portfolio/facing-you/) (2017), por [Lisa Jamhoury](http://lisajamhoury.com/).

## Otras bibliotecas de JavaScript

* [clmtrackr](https://github.com/auduno/clmtrackr), biblioteca de detección facial, desarrollada por [Audun Mathias Øygard](https://www.auduno.com/).
* [ml5.js](https://ml5js.org/), biblioteca para aprendizaje de máquinas, desarrollada por la comunidad de [NYU ITP](https://tisch.nyu.edu/itp), incluyendo a [Daniel Shiffman](https://shiffman.net/), [Hannah Davis](http://www.hannahishere.com/),  [Cristóbal Valenzuela](https://cvalenzuelab.com/), [Alejandro Matamala](http://matamala.info/).
* [Three.js](https://threejs.org/), biblioteca gráfica 3D, desarrollada por [Mr. doob](https://mrdoob.com/).
* [Tone.js](https://tonejs.github.io/), biblioteca para crear aplicaciones musicales interactivas en el navegador, desarrollada por [Yotam Mann](https://yotammann.info/).

## Otros recursos interesantes

* [ml4a][http://ml4a.github.io/], libro Machine Learning for Artists.
* [Runway](https://runwayapp.ai/), herramientas de aprendizaje de máquinas.
* [Wekinator](http://www.wekinator.org/), plataforma para aprendizaje de máquinas.

## Referencia

* [Tutorial Kinectron en Coding Train](https://www.youtube.com/watch?v=BV6xK3EOznI): por [Lisa Jamhoury](http://lisajamhoury.com/).
* [p5.js/es](https://p5js.org/es/): sitio web en español de p5.js, incluye tutoriales, ejemplos y referencia.
* [Libro Introducción a p5.js](https://processingfoundation.press/es): libro introductorio, disponible en PDF paga-lo-que-quieras y en formato físico. EScrito por [Lauren McCarthy](http://lauren-mccarthy.com/), [Casey Reas](http://caesuras.net/) y [Ben Fry](https://benfry.com/), ilustrado por [Taeyoon Choi](http://taeyoonchoi.com/) y traducido al español por [Aarón Montoya-Moraga](http://montoyamoraga.io/).
* [Tutorial video Introducción a la programación con p5.js](https://www.youtube.com/watch?v=DtAHvMjMzMQ): tutorial por [Aarón Montoya-Moraga](http://montoyamoraga.io/) y [Guillermo Montecinos](http://guillemontecinos.cl/), para [Processing Foundation](https://processingfoundation.org/) y [The Coding Train](https://www.youtube.com/user/shiffman).
* [Taller introducción a la programación creativa con p5.js](https://github.com/guillemontecinos/programacion_creativa_p5js): realizado por [Guillermo Montecinos](http://guillemontecinos.cl/) y [CODED Escuela](http://codedescuela.cl/).
* [Charla en Processing Community Day 2017](https://www.youtube.com/watch?v=Ix5RTKRJW0A): charla sobre el proyecto p5.js en español, por [Aarón Montoya-Moraga](http://montoyamoraga.io/) y [Guillermo Montecinos](http://guillemontecinos.cl/).
