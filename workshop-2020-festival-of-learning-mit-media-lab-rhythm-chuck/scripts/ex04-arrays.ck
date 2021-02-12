// ex04-arrays.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex04-arrays.ck" >>>;

// print current directory
// tip: it ends with "/" character
<<< me.sourceDir() >>>;

// create string variable for storing samples directory
// in this example, samples/ is one directory upwards
me.sourceDir() + "../samples/" => string dirSamples;

// print samples folder
<<< dirSamples >>>;

// create strings for storing samples names
"hihatClosed" => string nameHihatClosed;
"congaLow" => string nameCongaLow;

// create strings for storing file format
".wav" => string fileFormat;

// create buffers for storing samples
// connect them to dac
SndBuf hihatClosed => dac;
SndBuf congaLow => dac;

// read samples and store in buffers
dirSamples + nameHihatClosed + fileFormat => hihatClosed.read;
dirSamples + nameCongaLow + fileFormat => congaLow.read;

// arrays for sequencing
[1, 0, 0, 0,  1, 0, 0, 0] @=> int hihatClosedSequence[];
[0, 0, 1, 0,  0, 1, 1, 0] @=> int congaLowSequence[];

// infinite loop
while (true) {
    
    for (0 => int i; i < hihatClosedSequence.cap(); i++) {
        
        // default, all buffers fast forward
        hihatClosed.samples() - 1 => hihatClosed.pos;
        congaLow.samples() - 1 => congaLow.pos;
        
        // define buffer playback rate
        1.0 => hihatClosed.rate;
        1.0 => congaLow.rate;
        
        // define buffer gain
        0.15 => hihatClosed.gain;
        0.15 => congaLow.gain;
        
        // if sequencer is 1 rewind
        if (hihatClosedSequence[i] == 1) {
            0 => hihatClosed.pos;
        }
        
        // if sequencer is 1 rewind
        if (congaLowSequence[i] == 1) {
            0 => congaLow.pos;
        }
         
        // let time flow
        180 :: ms => now;
    }
}