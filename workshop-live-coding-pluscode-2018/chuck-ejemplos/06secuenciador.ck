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