

//
0.1 :: second => dur myDuration;
3 => int nota;
4 => int tercera;
3 => int quinta;

SinOsc s => dac;

//declaracion de la funcion
function int arpegiadorJoaquin(int nota, int endNote, int interv1, int interv2, dur myDur) {

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


    return 1;
}
