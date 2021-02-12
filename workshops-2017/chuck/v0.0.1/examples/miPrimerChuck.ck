//mi primer chucK
//por aaron montoya-moraga
//marzo 2017
//santiago de chile
//codigo hecho durante el taller de chucK donde mi mami
//version 0.0.1

//imprimir en consola
//<<< "mi mensaje">>>;
<<< "holaaaaaaaa" >>>;

SinOsc t;

SinOsc guaripolo;



SinOsc s => dac;
0.7 => s.gain;
1000 => s.freq;
0.1 :: week => now;