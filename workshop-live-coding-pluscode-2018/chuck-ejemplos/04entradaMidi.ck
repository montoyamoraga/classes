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