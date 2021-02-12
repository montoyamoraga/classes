

//
0.1 => float dur;
3 => int nota;
4 => int tercera;
3 => int quinta;

SinOsc s => dac;


while ( nota < 80) {
    <<< nota >>>;
    Std.mtof(nota) => s.freq;
    dur :: second => now;
    nota + tercera => nota;
    
    <<< nota >>>;
    Std.mtof(nota) => s.freq;
    dur :: second => now;
    nota + quinta => nota;
    
    <<< nota >>>;
    Std.mtof(nota) => s.freq;
    dur :: second => now;
    nota + 12 => nota;
    
    
    
    
    
}