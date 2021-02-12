

//
0.1 => float dura;
3 => int nota;
4 => int tercera;
3 => int quinta;

SinOsc s => dac;

function int nombreFuncion() {
    
}


while ( nota < 80) {
    <<< nota >>>;
    Std.mtof(nota) => s.freq;
    dura :: second => now;
    
    nota + tercera => nota;
    <<< nota >>>;
    Std.mtof(nota) => s.freq;
    dura :: second => now;
    
    nota + quinta => nota;  
    <<< nota >>>;
    Std.mtof(nota) => s.freq;
    dura :: second => now;
    
    //pasar a octava siguiente
    nota + 5 => nota;    
}
