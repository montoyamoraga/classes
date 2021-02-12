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