


0.1 :: second => dur myDuration;
40 => int nota;
4 => int tercera;
3 => int quinta;

//declaracion de la funcion
function int arpegiadorJoaquin(int nota, int endNote, int interv1, int interv2, dur myDur) {
    
    SinOsc s => dac;
    
    while ( nota < endNote) {
        <<< nota >>>;
        Std.mtof(nota) => s.freq;
        myDur => now;
        
        nota + interv1 => nota;
        <<< nota >>>;
        Std.mtof(nota) => s.freq;
        myDur => now;
        
        nota + interv2 => nota;
        <<< nota >>>;
        Std.mtof(nota) => s.freq;
        myDur => now;
        
        //pasar a octava siguiente
        nota + 12 - interv1 - interv2 => nota;
    }
    
    0.0 => s.gain;
    
    
    return 1;
}

arpegiadorJoaquin(nota, 80, tercera, quinta, myDuration);
arpegiadorJoaquin(nota+ 1, 120, 6, 2, myDuration * 5);
arpegiadorJoaquin(nota, 80, tercera, quinta, myDuration);
arpegiadorJoaquin(nota, 80, tercera, quinta, myDuration);

