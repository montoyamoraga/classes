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