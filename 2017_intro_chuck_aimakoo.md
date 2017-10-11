# 2017_intro_chuck_aimakoo.md


## Sobre el taller

Este taller fue dictado por Aarón Montoya-Moraga en el Centro Cultural España, Santiago de Chile, en el marco del festival Aimakoo, miércoles 11 de octubre 2017.

## Asistentes

Un minuto por persona, quiénes son, cuánto saben de sonido y de programación

## Instrucciones

Instalar ChucK: ir a  [http://chuck.cs.princeton.edu/](http://chuck.cs.princeton.edu/) y a download ChucK.

## Primer programa

```chuck
<<< "Hello World" >>>;
```

## Primer oscilador

```chuck
//Conecta una onda sinusoidal
SinOsc s => dac;
//Define la ganancia del oscilador como 0.6
0.6 => s.gain;
//Define la frecuencia del oscilador como 220
220 => s.freq;
//Permite que toque por un segundo
second => now;
```

## Varias notas musicales

```chuck
//Bloque 1
/* Música con onda sinusoidal
por un programador de ChucK
Enero 2025
*/

//Bloque 2
//Conecta una onda sinusoidal al dac
SinOsc s => dac;

//Bloque 3
//Toca una nota
//Define la ganancia como 1.0 y la frecuencia como 220 Hz.
//Deja que se ejecute por 0.3 segundos haciendo ChucKing a now.
220 => s.freq;
1.0 => s.gain;
0.3 :: second => now;

//Bloque 4
//Calla tu oscilador por 0.3 segundos para separarlo de la siguiente nota
0.0 => s.gain;
0.3 :: second => now;

//Bloque 5
//Toca una nota, con la misma altura
//Repite el proceso de los bloques 1 y 2
1.0 => s.gain;
0.3 :: second => now;

0.0 => s.gain;
0.3 :: second => now;

//Bloque 6
//Toca dos notas adicionales, más altas, menor volumen
//Repite el mismo patrón de los bloques 1, 3 y 4
//pero con una diferente frecuencia y volumen
330 => s.freq;
0.3 => s.gain;
0.3 :: second => now;

0.0 => s.gain;
0.3 :: second => now;

0.3 => s.gain;
0.3 :: second => now;

0.0 => s.gain;
0.3 :: second => now;
```

## Bucles

```chuck
Impulse imp => ResonZ filt => NRev rev => dac;
0.04 => rev.mix;
100.0 => filt.Q => filt.gain;

while (1) {
  Std.mtof(Math.random2(60,84)) => filt.freq;
  1.0 => imp.next;
  100 :: ms => now;
}
```

## Variables

```chuck
//declara un entero
int myPitch;

//almacena una variable
220 => myPitch;

//imprime su valor
<<< myPitch >>>;
```

## Duraciones

```chuck
4 :: quarter => dur whole;

4 * quarter => dur whole;

whole / 2 => dur half;

quarter /2 => dur eighth;
```

## MIDI

> ```chuck
<<< Std.mtof(64) >>>;
```

```chuck
//cadena de sonido
TriOsc t => dac;
0.4 => t.gain;

//bucle
for (0 => int i; i < 127; i++) {
  //(1) Usar Std.mtof para convertir de número de nota a frecuencia
  Std.mtof(i) => float Hz;
  //imprimir el resultado
  <<< i, Hz >>>
  //(2) Definir en Hz la frecuencia del oscilador
  Hz => t.freq;
  //Hacer avanzar el tiempo
  200 :: ms => now;
}
```
