// ex01-sine.ck
// example of sine wave oscillator, no sound
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex01-sine.ck" >>>;

// declare oscillator
SinOsc myOsc;

// connect osc to dac
myOsc => dac;

// define oscillator's frequency, in Hertz
// human hearing frequency range is ~ 20 to 20,000 Hz
440 => myOsc.freq;

// define oscillator's gain, normalized 0.0 to 1.0
0.7 => myOsc.gain;

