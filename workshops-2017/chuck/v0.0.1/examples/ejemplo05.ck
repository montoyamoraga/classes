//SinOsc, TriOsc, SqrOsc, SawOsc

//declarar oscilador
TriOsc miOsciladorBacan => dac;

//declarar variable float para frecuencia
100 => float miFrecuenciaBacan;

//declarar variables para
//frecuencia minima y maxima
20 => float min;
20000 => float max;




while (1) {
    
    Math.random2(0, 100) => int chance;

if (chance < 50) {
    <<< "lower than 50">>>;
    //elegir frecuencia aleatoria entre min y max
    Math.random2f(min, max) => miFrecuenciaBacan;
    //asignando frecuencia aleatoria a mi oscilador
    miFrecuenciaBacan => miOsciladorBacan.freq;
    //tiempo transcurre un segundo
    1 :: second => now;
    
}
else {
    <<< "equal or higher than 50">>>;
    //definir nota del oscilador
    440 + Math.random2(-10, 10) => miOsciladorBacan.freq;
    //definir duracion aleatoria de la nota
    Math.random2f(min, max) :: ms => now;
}
}