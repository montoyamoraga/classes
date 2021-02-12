# workshop-live-coding-pluscode-2018

## Acerca de

Este workshop de Live Coding workshop fue diseñado y es impartido por [Aarón Montoya-Moraga](http://montoyamoraga.io/). Este workshop incluye trabajo y material que ya ha sido usado por el autor para workshops similares.

Esta versión fue enseñada en la [Universidad Nacional San Martín](http://www.unsam.edu.ar/), Buenos Aires, Argentina, martes 13 noviembre 2018.

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
* Experiencia música/sonido?

[Timer de 90 segundos](https://www.google.com.ar/search?rlz=1C5CHFA_enUS813US813&q=timer+90+seconds)

## Temario

* [Historia de computer music](#historia-de-computer-music)
* [Plataformas para computer music y live coding](#plataformas-para-computer-music-y-live-coding)
* [Programación en  ChucK](#programaci%C3%B3n-en-chuck)
* [Programación en Pure Data](#programaci%C3%B3n-en-pure-data)
* [Instrumentos electrónicos](#instrumentos-electr%C3%B3nicos)
* [Protocolo MIDI](#protocolo-midi)
* [MIDI Note message](#midi-note-message)
* [MIDI Continuous Controller Message](#midi-continuous-controller-message)
* [ChucK y MIDI](#chuck-y-midi)
* [Secuenciador en ChucK](#secuenciador-en-chuck)
* [Interfaces MIDI](#interfaces-midi)
* [Instrumentos hardware MIDI](#instrumentos-midi-hardware)
* [Instrumentos modulares](-101#instrumentos-modulares)
* [Digital audio workstation](h#digital-audio-workstation)
* [Arduino y MIDI](#arduino-y-midi)
* [Open Sound Control](#open-sound-control)
* [MPE](#mpe)
* [Referencia](#referencia)

## Instalación de software

Por favor descargar e instalar los siguientes software:

* Pure Data, disponible en [http://puredata.info/](http://puredata.info/)
* ChucK y MiniAudicle, disponibles en [http://chuck.cs.princeton.edu/](http://chuck.cs.princeton.edu/)

Opcionalmente, instalar [Max](https://cycling74.com/).

## Historia de computer music

(20 minutos)

En los años 1920s, se logró tanto grabar como reproducir sonido usando medio electromecánicos.

La [música electroacústica](https://es.wikipedia.org/wiki/M%C3%BAsica_electroac%C3%BAstica) comenzó a incorporar la producción de sonidos eléctricos a la práctica composicional, donde lo eléctrico no se remite solamente a grabar, reproducir o amplificar.

La [música concreta](https://es.wikipedia.org/wiki/M%C3%BAsica_concreta) es una forma de música que explora el uso de sonidos pregrabados y manipulación de cintas para sintetizar sonido. El nombre fue adoptado por [Pierre Schaeffer](https://es.wikipedia.org/wiki/Pierre_Schaeffer), y uno de sus trabajos más icónicos es [Cinq études de bruits](https://en.wikipedia.org/wiki/Cinq_%C3%A9tudes_de_bruits).

La [Elektronische Musik](https://es.wikipedia.org/wiki/M%C3%BAsica_electr%C3%B3nica#Elektronische_Musik)  es una forma de música que sintetiza sonido desde cero a partir de señales electrónicas. Uno de sus máximos exponentes es [Karlheinz Stockhausen](https://es.wikipedia.org/wiki/Karlheinz_Stockhausen).

La [música electrónica](https://es.wikipedia.org/wiki/M%C3%BAsica_electr%C3%B3nica) emplea tecnología musical que incluye instrumentos musicales electrónicos, instrumentos digitales y también basados en circuitos eléctricos. Abarca tanto instrumentos electromecánicos, como la [guitarra eléctrica](https://es.wikipedia.org/wiki/Guitarra_el%C3%A9ctrica), y también instrumentos completamente eléctricos como el [theremin](https://es.wikipedia.org/wiki/Therem%C3%ADn).

La [Computer music](https://en.wikipedia.org/wiki/Computer_music) es la aplicación de tecnología computacional a la composición y producción musical.

## Plataformas para computer music y live coding

(30 mins)

[Live coding](https://en.wikipedia.org/wiki/Live_coding) es una forma de arte performático audiovisual que se enfoca en improvisar al escribir código fuente y usando programación interactiva.

La música hecha con live coding ha sido posible y accesible desde la proliferación de computadores portátiles y rápidos a partir de la década de los 1990s.

Esta es una lista de algunas plataformas y ambientes usados para live coding

[ChucK](https://es.wikipedia.org/wiki/ChucK) un lenguaje de programación para síntesis en tiempo real, composición y performance. Fue creado en 2003 por [Ge Wang](https://en.wikipedia.org/wiki/Ge_Wang). Es gratuito y de código abierto.

[Csound](https://es.wikipedia.org/wiki/Csound) es un lenguaje de programación para música por computador, creado en 1985 por Barry Vercoe. Existe un libro para aprenderlo, [Csound book](https://mitpress.mit.edu/books/csound-book). Aquí hay un [ejemplo de live coding con Csound](https://www.youtube.com/watch?v=NjSrh71B2yo). Es gratuito y de código abierto.

[Max](https://es.wikipedia.org/wiki/Max_(programa)): lenguaje de programación visual para música y multimedia, creado en los 1980s. Fue creado por [Miller Puckette](https://es.wikipedia.org/wiki/Miller_Puckette) y actualmente es desarrollado y mantenido por [Cycling '74](https://cycling74.com/), a su vez propiedad de [Ableton](https://www.ableton.com/).

[Pure Data](https://en.wikipedia.org/wiki/Pure_Data) es un lenguaje de programación visual creado por [Miller Puckette](https://es.wikipedia.org/wiki/Miller_Puckette) en los 1990s. Es gratuito y de código abierto.

[Sonic Pi](https://en.wikipedia.org/wiki/Sonic_Pi) es un ambiente de live coding, creado por Sam Aaron con apoyo de la [Raspberry Pi Foundation](https://en.wikipedia.org/wiki/Raspberry_Pi_Foundation).

[SuperCollider](https://en.wikipedia.org/wiki/SuperCollider) es un lenguaje de programación lanzado en 1996 por James McCartney, para síntesis de audio en tiempo real y composición algorítmica. Es gratuito y de código abierto.

Bonus: [Aphex Twin - The making of Vordhosbn](https://www.youtube.com/watch?v=pAZo7x83it4)

## Programación en ChucK

(60 minutos)

[Descargar e instalar ChucK + miniAudicle](http://chuck.cs.princeton.edu/)

Ahora vamos a programar nuestros primeros programas en ChucK. Abre miniAudicle en tu computador y empecemos. Como referencia, a continuación están los programas que haremos en conjunto. También están incluidos en la carpeta adjunta [chuck-ejemplos](/chuck-ejemplos).

### [00miPrimerOsc.ck](/chuck-ejemplos/00miPrimerOsc.ck)

```chuck
// 00miPrimerOsc.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en español: noviembre 2018

// oscilator, 440 Hz, 1 segundo de duracion

// imprimir mensaje a la consola
<<< "00miPrimerOsc.ck" >>>;

// declarar oscilador sinusoidal
SinOsc miOsc;

// connectar oscilador al dac
// dac es conversor digital-analogo
miOsc => dac;

// asignar frecuencia de 440 Hz al oscilador
440 => miOsc.freq;

// asignar ganancia de 0.7 al oscilador
// el rango de la ganancia es entre 0.0 y 1.0
0.7 => miOsc.gain;

//dejar que transcurra 1 segundo
1 :: second => now;
```

### [01variasNotas.ck](/chuck-ejemplos/01variasNotas.ck)

```chuck
// 01variasNotas.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en espanol: noviembre 2018

// oscilador, 440 Hz, 1 segundo de duracion
// el mismo oscilador, 770 Hz, 2 segundos de duracion

// imprimir mensaje a la consola
<<< "01variasNotas.ck" >>>;

// declarar oscilador
SinOsc miOsc;

// conectar oscilador al dac
miOsc => dac;

//assign frequency of oscillator
440 => miOsc.freq;

// asignar ganancia al oscilador
// el rango de ganancia es entre 0.0 y 1.0
0.7 => miOsc.gain;

// dejar que transcurra 1 segundo
1 :: second => now;

// modificar la frecuencia
770 => miOsc.freq;

// dejar que transcurran 2 segundos
2 :: second => now;
```

### [02oscAleatorio.ck](/chuck-ejemplos/02oscAleatorio.ck)

```chuck
// 02oscAleatorio.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en espanol: noviembre 2018

// oscilador
// frecuencia aleatoria
// ganancia aleatoria
// duracion aleatoria

// imprimir mensaje a la consola
<<< "02oscAleatorio.ck" >>>;

// declarar oscilador
SinOsc miOsc;

// conectar oscilador al dac
miOsc => dac;

// frecuencia aleatoria del oscilador
Std.rand2f(100, 1000) => miOsc.freq;

// ganancia aleatoria del oscilador
Std.rand2f(0.1, 0.9) => miOsc.gain;

// dejar que transcurra una duracion aleatoria
Std.rand2f(0.1, 2) :: second => now;
```

### [03ifCondicion.ck](/chuck-ejemplos/03ifCondicion.ck)

```chuck
// 03ifCondicion.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en espanol: noviembre 2018

// oscilador, dos posibles frecuencias

// imprimir mensaje a la consola
<<< "03ifCondicion.ck" >>>;

// declarar oscilador de onda triangular
TriOsc miOsc;

// conectar oscilador al dac
miOsc => dac;

// definir ganancia del oscilador
0.7 => miOsc.gain;

// declarar variable de numero entero para resultado moneda
int resultadoMoneda;

// declarar dos posibles frecuencias
440 => float frecBaja;
500 => float frecAlta;

// lanzar moneda
Std.rand2(0,1) => resultadoMoneda;

<<< "resultadoMoneda: " + resultadoMoneda >>>;

// bloque if
// si resultadoMoneda es 0, se usa frecBaja
// si resultadoMoneda es 1, se usa frecAlta
if (resultadoMoneda == 0) {
    frecBaja => miOsc.freq;
}
else {
    frecAlta => miOsc.freq;
}

// dejar que transcurra 0.1 minutos
0.1 :: minute => now;
```

## Programación en Pure Data

(40 minutos)

[Descarga e instala Pure Data](http://puredata.info/)

Ahora vamos a programar nuestros primeros programas en Pure Data. Abre Pd en tu computador y empecemos. Como referencia, a continuación están los programas que haremos en conjunto. También están incluidos en la carpeta adjunta [pd-ejemplos](/pd-ejemplos).


## Instrumentos electrónicos

(30 minutos)

### Componentes de los instrumentos

* [Oscilador](https://es.wikipedia.org/wiki/Oscilador_electr%C3%B3nico): elemento que produce una señal periódica ondulatoria. Sus parámetros básicos son frecuencia, amplitud y fase.
* [LFO](https://es.wikipedia.org/wiki/Low_frequency_oscillation) (LF por baja frecuencia), un oscilador de frecuencias sub-audio (< 20 Hz).
* [Filtro](https://es.wikipedia.org/wiki/Filtro_electr%C3%B3nico): elemento que remueve ciertas frecuencias del espectro de audio.
* [Amplificador](https://es.wikipedia.org/wiki/Amplificador_electr%C3%B3nico): elemento que puede acentuar o atenuar la potencia de una señal, modifica la amplitud.
* [Secuenciador](https://es.wikipedia.org/wiki/Secuenciador): dispositivo que puede grabar, editar, o reproducir información musical como encendido/apagado, gatillamiento de notas, y valores de parámetros.

### Tipos de instrumentos

* [Sintetizador](https://es.wikipedia.org/wiki/Sintetizador): instrumento que genera señales eléctricas que son convertidas a sonido.
* [Sampler](https://es.wikipedia.org/wiki/Sampler): instrumento que usa sonido pre-grabado como la base para generar sonidos nuevos.
* [Caja de ritmos](https://es.wikipedia.org/wiki/Caja_de_ritmos): instrumento musical especializado en la generación de sonidos percusivos como tambores y platillos.

### Flujo de señal

Oscilador o fuente sonora -> Filtro -> Efectos -> Amplificador

### Instrumentos clásicos

* [Akai MPC](https://en.wikipedia.org/wiki/Music_Production_Controller): sampler polifónico, 1988
* [ARP Odyssey](https://en.wikipedia.org/wiki/ARP_Odyssey): sintetizador monofónico análogo, 1972.
* [Fairlight CMI](https://en.wikipedia.org/wiki/Fairlight_CMI): sampler digital, 1979.
* [Moog Minimoog](https://en.wikipedia.org/wiki/Minimoog): sintetizador monofónico análogo, 1970.
* [Oberheim OB-X](https://en.wikipedia.org/wiki/Oberheim_OB-X): sintetizador polifónico análogo, 1979.
* [Roland TB-303](https://en.wikipedia.org/wiki/Roland_TB-303): sintetizador de bajo monofónico análogo, 1981.
* [Roland TR-808](https://en.wikipedia.org/wiki/Roland_TR-808): caja de ritmos análoga programable, 1980.
* [Sequential Circuits Prophet-5](https://en.wikipedia.org/wiki/Sequential_Circuits_Prophet-5): sintetizador polifónico análogo, 1978.
* [Yamaha DX7](https://en.wikipedia.org/wiki/Yamaha_DX7): sintetizador polifónico digital, 1983.
* [Yamaha CS-80](https://en.wikipedia.org/wiki/Yamaha_CS-80): sintetizador polifónico análogo, 1976.

## Protocolo MIDI

(20 minutos)

A inicios de los 1980s, no existía una manera standard para sincronizar instrumentos musicales de fabricantes distintas.

Existían protocolos propietarios para ecosistemas del mismo fabricante.

[MIDI](https://es.wikipedia.org/wiki/MIDI) es un standard del 1983, que significa Interfaz Digital para Instrumentos Musicales.

MIDI is a technical standard that allows musical instruments to communicate between each other.

MIDI es un standard técnico que permite que los instrumentos musicales se comuniquen entre ellos.

MIDI permite que los distintos dispositivos envíen y reciban mensajes digitales.

MIDI puede ser transmitido a través de [conectores DIN](https://es.wikipedia.org/wiki/Conector_DIN) y USB.

MIDI se transmite a una tasa de transferencia de 31,250 bits por segundo.

MIDI puede usar 16 canales en paralelo en el mismo conector físico.

Los mensajes MIDI tienen una longitud de 3 bytes, equivalente a 24 bits.

Los mensajes MIDI pueden gatillar notas musicales, modificar parámetros, empezar y detener secuencias, y sincronizar tempos.

## MIDI Note Message

(15 minutos)

Un uso común de MIDI es el gatillamiento de notas musicales, tanto para encenderlas como para apagarlas.

El primer byte define si el mensaje es de encendido (note on) o de apagado (note of) y también codifica el canal MIDI a usar.

El segundo byte define el número de nota (note number).

El tercer byte define la velocidad de nota (note velocity), que se traduce en ganancia.

### MIDI note on

1001nnnn	0kkkkkkk 0vvvvvvv

* 1001 define Note On.
* nnnn es el número de canal, su rango es 0-15 (resolución de 4 bits).
* kkkkkkk es el número de nota, su rango es 0-127 (esolución de 7 bits).
* vvvvvvv es la velocidad, su rango es 0-127 (esolución de 7 bits).

### MIDI note off

1000nnnn	0kkkkkkk 0vvvvvvv

* 1000 define Note Off.
* nnnn es el número de canal, su rango es 0-15 (resolución de 4 bits).
* kkkkkkk es el número de nota, su rango es 0-127 (esolución de 7 bits).
* vvvvvvv es la velocidad, su rango es 0-127 (esolución de 7 bits).

## MIDI Continuous Controller Message

(10 minutos)

Los mensajes MIDI CC son usados para modificar parámetros de dispositivos MIDI.

1011nnnn	0ccccccc 0vvvvvvv

* 1011 define Continuous Controller.
* nnnn es el número de canal, su rango es 0-15 (resolución de 4 bits).
* ccccccc es el número de controlador, su rango es 0-127 (esolución de 7 bits).
* vvvvvvv es el valor, su rango es 0-127 (esolución de 7 bits).

## ChucK y MIDI

(20 minutos)

### 04entradaMidi.ck

```chuck
// 04entradaMidi.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en espanol: noviembre 2018

// imprimir mensaje a la consola
<<< "04entradaMidi.ck" >>>;

// declarar nueva variable para entrada MIDI
MidiIn entradaMIDI;

// declarar variable para nuevo mensaje MIDI
MidiMsg mensaje;

// declarar variable para puerto MIDI
int puertoMIDI;

// asignar 0 al puerto MIDI
0 => puertoMIDI;

// tratar de abrir el puerto MIDI
if (!entradaMIDI.open(puertoMIDI)) {
    // imprimir mensaje de error
    <<< "no se pudo abrir el puerto MIDI" >>>;
    // terminar ejecucion
    me.exit();
}

// bucle infinito
while (true) {
    // esperar hasta que ocurra una entrada MIDI
    entradaMIDI => now;

    // recibir mensaje MIDI
    while (entradaMIDI.recv(mensaje)) {
        //print content
        <<< mensaje.data1, mensaje.data2, mensaje.data3 >>>;
    }
}
```

### 05salidaMidi.ck

```chuck
// 05salidaMidi.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en espanol: noviembre 2018

// imprimir mensaje en la consola
<<< "05salidaMidi.ck" >>>;

// declarar nueva variable de salida MIDI
MidiOut salidaMIDI;

// declarar nueva variable de mensaje MIDI
MidiMsg mensaje;

// declarar variable para seleccionar el puerto MIDI
int puertoMIDI;

// asignar 0 a la varible puertoMIDI
0 => puertoMIDI;

// tratar de abrir el puerto MIDI
if (!salidaMIDI.open(puertoMIDI)) {
    // imprime mensaje de error
    <<< "no se pudo abrir el puerto MIDI" >>>;
    // terminar la ejecucion
    me.exit();
}

// escribir los datos del mensaje
// un mensaje MIDI posee tres bytes
// esto es tres numeros entre 0 y 255
// 144 es note on, channel 1
144 => mensaje.data1;
// segundo numero es note number
52 => mensaje.data2;
// tercer numero es velocity
100 => mensaje.data3;

// enviar mensaje MIDI
salidaMIDI.send(mensaje);
```

## Secuenciador en ChucK

(20 minutos)

Ahora construiremos un secuenciador de 8 pasos usando ChucK.

Este secuenciador almacenará 8 valores de notas y 8 valores de velocidades.

La velocidad de reproducción es un parámetro, que podrá ser modificado.

### 06secuenciador.ck

```chuck
// 06secuenciador.ck
// por aaron montoya-moraga
// version en ingles: abril 2018
// version en espanol: noviembre 2018

// secuenciador de 8 pasos

// imprimir mensaje a la consola
<<< "06secuenciador.ck" >>>;

// arreglo de notas
[ 41,  42,  43,  44,  45,  46,  47,  48] @=> int notas[];
// arreglo de velocidades
[127, 100,  90,  100, 80, 127,  95,  40] @=> int velocidades[];

// indicar 60 beats por minuto
60 => float bpm;
// milisegundos por beat
60*1000/bpm => float msPorBeat;

// imprimir en consola el tempo
<<< "msPorBeat: " + msPorBeat >>>;

// declarar nueva variable para salida MIDI
MidiOut salidaMIDI;

// declarar nueva variable para mensaje MIDI
MidiMsg mensaje;

// declarar nueva variable para puerto MIDI
int puertoMIDI;

// asignar 0 a la variable de puerto MIDI
0 => puertoMIDI;

// trata de abrir el puerto MIDI
if (!salidaMIDI.open(puertoMIDI)) {
    // imprimir mensaje de error
    <<< "no se pudo abrir el puerto MIDI" >>>;
    // terminar la ejecucion
    me.exit();
}


// bucle infinito
while (true) {
    // iterar y recorrer cada paso del secuenciador
    for (0 => int paso; paso < notas.cap(); paso++) {
        // indicar paso
        <<< "paso: " + paso >>>;
        // armar el mensaje MIDI
        // un mensaje MIDI posee tres bytes
        // 144 indica note on, channel 1
        144 => mensaje.data1;
        // accesar el numero de nota correspondiente
        notas[paso] => mensaje.data2;
        // accesar la velocidad de nota correspondiente
        velocidades[paso] => mensaje.data3;
        // enviar el mensaje MIDI
        salidaMIDI.send(mensaje);
        // dejar que el tiempo transcurra
        msPorBeat :: ms => now;
        // enviar note off
        0 => mensaje.data3;
        salidaMIDI.send(mensaje);
    }
}
```

## Interfaces MIDI

(5 minutos)

Existen distintas maneras de hacer conexiones entre dispositivos con capacidad MIDI.

Hay splitters, repetidores, interfaces USB, interfaces DIN, entre otras.

Hoy usaremos interfaces MIDI usando USB y conectores DIN.

Estas son algunas empresas que fabrican interfaces MIDI y productos relacionados.

* [Kenton](http://www.kentonuk.com/)
* [MIDI Solutions](http://midisolutions.com/)
* [MOTU](http://www.kentonuk.com/)

## Instrumentos MIDI hardware

(40 minutos)

Hoy usaremos los siguientes instrumentos MIDI hardware.

Cada uno de estos instrumentos posee un script de ChucK que vive en la carpeta [/instrumentos-ejemplos].

Cada instrumento posee un manual que vive en la carpeta [/instrumentos-manuales].

Nos dividiremos en equipos, cada equipo se concentrará en un instrumento.

Trata de crear sonidos y secuencias, para que podamos tocar entre todos. Se recomienda abrazar el caos.

### [Korg Volca FM](http://www.korg.com/us/products/dj/volca_beats/page_1.php)

* Fuente de poder: 9 volt DC centro positivo o baterías
* MIDI a través de cable MIDI DIN de 5 pines + interfaz MIDI
* Canal MIDI 1 por defecto
* No requiere instalación
* Salida es cable 1/8 pulgadas TRS stereo (audífonos), y parlantes incorporados.

### [Roland SH-01A](https://www.roland.com/global/products/sh-01a/)
* Fuente de poder: micro USB
* MIDI a través de cable micro USB
* Canal MIDI 1 por defecto
* Necesita instalación de [driver](https://www.roland.com/us/products/sh-01a/).
* Salida es cable 1/8 pulgadas TRS stereo (audífonos), y parlantes incorporados.

### [Roland TB-03](https://www.roland.com/us/products/tb-03/)
* Fuente de poder: micro USB
* MIDI a través de cable micro USB
* Canal MIDI 2 por defecto
* Necesita instalación de [driver](https://www.roland.com/us/products/sh-01a/).
* Salida es cable 1/8 pulgadas TRS stereo (audífonos), y parlantes incorporados.

Bonus: [voodoochild - abyssal:raw live (2017)](https://vimeo.com/250499094)

## Instrumentos modulares

(20 minutos)

[Kaitlyn Aurelia Smith - In The Studio](https://www.youtube.com/watch?v=95UvPlhjbE4)

Los instrumentos electrónicos más populares tienen arquitecturas fijas. Puedes programar su memoria pero el flujo de señal no puede ser modificado.

Los instrumentos modulares poseen componentes aislados que deben ser interconectados con cables patch.

Los instrumentos modualres no poseen un banco de memoria con presets.

Existen distintos formatos propietarios, pero Eurorack es el formato más popular. Fue definido por [Doepfer](http://www.doepfer.de/) en 1996.

[Eurorack](https://en.wikipedia.org/wiki/Eurorack) especifica tanto convenciones mecánicas como eléctricas, incluyendo alto, ancho, fuente de poder, cables de conexión, y rangos de voltaje para los instrumentos.

Existen más de 5,000 módulos de más de 250 fabricantes distintos.

* [modulargrid.net](https://www.modulargrid.net/)
* [4ms](http://www.4mspedals.com/)
* [Doepfer](http://www.doepfer.de/)
* [Expert Sleepers](http://www.expert-sleepers.co.uk/)
* [Intellijel](https://intellijel.com/)
* [Make Noise](http://www.makenoisemusic.com/)
* [Mannequins](http://whimsicalraps.com/)
* [Mutable instruments](https://mutable-instruments.net/)

Existen tres tipos de señales distintas:

* Audio: para transmitir sonidos
* Control de voltage: para modulación de parámetros
* Trigger/Gate/Clock: para secuencias

También existen instrumentos semi-modulares, que poseen una arquitectura por defecto, la cual puede ser modificada con el uso de cables patch.

* [Arturia Minibrute 2](https://www.arturia.com/minibrute-2/overview)
* [Moog DFAM](https://www.moogmusic.com/products/semi-modular/dfam-drummer-another-mother)
* [Moog Mother 32](https://www.moogmusic.com/products/semi-modular/mother-32)

## Digital audio workstation

(15 min)

Software para grabar, mezclar y masterizar sonido, y escribir, manipular y secuenciar MIDI.

* [Bitwig Studio](https://www.bitwig.com/)
* [Live](https://en.wikipedia.org/wiki/Ableton_Live)
* [Logic Pro](https://en.wikipedia.org/wiki/Logic_Pro)
* [FL Studio](https://en.wikipedia.org/wiki/FL_Studio)
* [Reason](https://en.wikipedia.org/wiki/Reason_(software))
* [Pro Tools](https://en.wikipedia.org/wiki/Pro_Tools)
* [Reaper](https://en.wikipedia.org/wiki/REAPER)

## Arduino y MIDI

(15 min)

Este ejemplo vive en la carpeta [/arduino-ejemplos] y está fuertemente basado en [https://www.arduino.cc/en/Tutorial/Midi](https://www.arduino.cc/en/Tutorial/Midi).

## Open Sound Control

(20 min)

[Open Sound Control](https://es.wikipedia.org/wiki/OpenSound_Control) es un protocolo para realizar interconexiones entre sintetizadores, computadores y otros dispositivos multimedia.

Sus ventajas son su interoperabilidad, precisión, flexibilidad y organización y documentación avanzada.

Puede ser transmitido de forma inalámbrica con softwares como Max.

Un mensaje OSC está compuesto de un tag ("sinte/frecuencia") y un valor o lista de valores (int, float, string, boolean).

Ventajas sobre MIDI

* Altamente configurable
* Mayor resolución
* Tags configurables y anidación

Software para control OSC:

* [TouchOSC](https://hexler.net/software/touchosc)
* [OSCulator](https://osculator.net/)

## MPE

(15 minutos)

Buenas noticias, MIDI no está ni muerto ni obsoleta.

Este año el standard MIDI fue aumentado para incluir MPE.

[MPE](http://www.rogerlinndesign.com/mpe.html) viene de MIDI Polyphonic Expression, expresión polifónica MIDI.

La principal razón para la creación de MPE era superar una limitación de MIDI: los mensajes de Pitch Bend y Control Change se aplican a todas las notas del canal. Esto hace que sea imposible realizar pitch bending polifónico en el mismo canal MIDI. MPE resuelve este problema al enviar cada mensaje de nota en un canal MIDI por separado, rotando entre un bloque predefinido de canales.

Los siguientes instrumentos usan MPE:

* [LinnStrument](https://www.youtube.com/watch?v=STz__28Scwc)
* [ROLI Seaboard](https://www.youtube.com/watch?v=6SCug5kUsBs)

## Referencia

* [Ableton](https://www.ableton.com/)
* [Acousmatic sound](https://en.wikipedia.org/wiki/Acousmatic_sound)
* [Audacity](https://www.audacityteam.org/)
* [Aphex Twin](https://en.wikipedia.org/wiki/Aphex_Twin)
* [Cinq études de bruits](https://en.wikipedia.org/wiki/Cinq_%C3%A9tudes_de_bruits)
* [Computer music](https://en.wikipedia.org/wiki/Computer_music)
* [Control](https://www.ctrl-mod.com/)
* [Csound](http://csound.com/)
* [History of sound recording](https://en.wikipedia.org/wiki/History_of_sound_recording)
* [ChucK](http://chuck.cs.princeton.edu/)
* [Electroacoustic music](https://en.wikipedia.org/wiki/Electroacoustic_music)
* [Electronic music](https://en.wikipedia.org/wiki/Electronic_music)
* [Karlheinz Stockhausen](https://en.wikipedia.org/wiki/Karlheinz_Stockhausen)
* [International Conference on Live Coding](https://iclc.livecodenetwork.org/)
* [Live coding](https://en.wikipedia.org/wiki/Live_coding)
* [Max](https://cycling74.com/)
* [Musique concrète](https://en.wikipedia.org/wiki/Musique_concr%C3%A8te)
* [Korg](http://www.korg.com/us/)
* [Monome](https://monome.org/)
* [Modular Grid](https://www.modulargrid.net/)
* [Pierre Schaeffer](https://en.wikipedia.org/wiki/Pierre_Schaeffer)
* [Pure Data](http://puredata.info/)
* [Roland](https://www.roland.com/us/)
* [Sonic Pi](https://sonic-pi.net/)
* [Summary of MIDI messages](https://www.midi.org/specifications/item/table-1-summary-of-midi-message)
* [SuperCollider](https://supercollider.github.io/)
* [Tatsuya Takahashi](http://www.factmag.com/2017/07/11/aphex-twin-tatsuya-takahashi-interview/)
* [Theremin](https://en.wikipedia.org/wiki/Theremin)
* [TidalCycles](https://tidalcycles.org/)
* [Whimsical Raps](http://whimsicalraps.com/)
