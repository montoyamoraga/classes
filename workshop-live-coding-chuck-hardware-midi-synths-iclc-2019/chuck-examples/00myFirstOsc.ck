// 00myFirstOsc.ck
// by aaron montoya-moraga
// april 2018

// oscillator, 440 Hz, 1 second long

// print message to console monitor
<<< "00myFirsOsc.ck" >>>;

// declare oscillator
SinOsc myOsc;

// connect osc to dac
myOsc => dac;

// assign frequency of oscillator
440 => myOsc.freq;

// assign gain of oscillator
// gain goes from 0.0 to 1.0
0.7 => myOsc.gain;

// let 1 second pass
1 :: second => now;