# 2017_intro_chuck_aimakoo.md


## Sobre el taller

Este taller fue dictado por Aarón Montoya-Moraga en el Centro Cultural España, Santiago de Chile, en el marco del festival Aimakoo, miércoles 11 de octubre 2017.

## Asistentes

10 personas

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


##
