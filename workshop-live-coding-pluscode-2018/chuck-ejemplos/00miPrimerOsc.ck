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