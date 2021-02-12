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