//arreglos
SqrOsc oscs[10];

for (0 => int i; i < oscs.cap(); i++) {
    oscs[i] => dac;
    Math.random2f(0, 1) / oscs.cap() => oscs[i].gain;
    Math.random2f(100, 1000) => oscs[i].freq;
}

1 :: second => now;



