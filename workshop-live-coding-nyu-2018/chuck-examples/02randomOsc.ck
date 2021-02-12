//02randomOsc.ck
//by aaron montoya-moraga
//april 2018

//oscillator, random frequency, random duration

//print message to console monitor
<<< "02randomOsc.ck" >>>;

//declare oscillator
SinOsc myOsc;

//connect osc to dac
myOsc => dac;

//random frequency of oscillator
Std.rand2f(100, 5000) => myOsc.freq;

//random gain of oscillator
Std.rand2f(0.1, 0.9) => myOsc.gain;

//let random time passs
Std.rand2f(0.1, 2) :: second => now;