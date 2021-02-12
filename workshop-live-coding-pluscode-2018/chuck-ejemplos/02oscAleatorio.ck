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