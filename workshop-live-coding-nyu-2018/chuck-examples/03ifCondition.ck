//03ifCondition.ck
//by aaron montoya-moraga
//april 2018

//oscillator, random frequency, random duration

//print message to console monitor
<<< "03ifCondition.ck" >>>;

//declare triangular oscillator
TriOsc myOsc;

//connect osc to dac
myOsc => dac;

//declare variable for coin flip
int coinFlip;

//declare two possible frequencies
500 => float highFreq;
440 => float lowFreq;

Std.rand2(0,1) => coinFlip;

<<< "tossCoin: " + coinFlip >>>;

if (coinFlip == 0) {
    lowFreq => myOsc.freq;
}
else {
    highFreq => myOsc.freq;
}

//set gain
0.7 => myOsc.gain;

//let 0.1 minute pass
0.1 :: minute => now;