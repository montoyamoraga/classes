// ex05-random.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex05-random.ck" >>>;

// print current directory
// tip: it ends with "/" character
<<< me.sourceDir() >>>;

// create string variable for storing samples directory
// in this example, samples/ is one directory upwards
me.sourceDir() + "../samples/" => string dirSamples;

// print samples folder
<<< dirSamples >>>;

// create strings for storing samples names
"hihatClosed" => string hihatClosedName;
"congaLow" => string congaLowName;
"clap" => string clapName;

// create strings for storing file format
".wav" => string fileFormat;

// create buffers for storing samples
// connect them to dac
SndBuf hihatClosed => dac;
SndBuf congaLow => dac;
SndBuf clap => dac;

// read samples and store in buffers
dirSamples + hihatClosedName + fileFormat => hihatClosed.read;
dirSamples + congaLowName + fileFormat => congaLow.read;
dirSamples + clapName + fileFormat => clap.read;

// arrays for sequencing
[1, 0, 0, 0,  1, 0, 0, 0] @=> int hihatClosedSequence[];
[0, 0, 1, 0,  0, 1, 1, 0] @=> int congaLowSequence[];

// define clap probability
0.1 => float clapProbability;

// define minimum and maximum gain
0.1 => float minGain;
0.4 => float maxGain;

// define random units of time
Std.rand2f(300.0, 500.00) => float timeStep;
timeStep / 3.0 => float timeMaxDelta;

// infinite loop
while (true) {
    
    // iterate through the sequence
    for (0 => int i; i < hihatClosedSequence.cap(); i++) {
        
        // default, all buffers fast forward
        hihatClosed.samples() - 1 => hihatClosed.pos;
        congaLow.samples() - 1 => congaLow.pos;
        clap.samples() - 1 => clap.pos;
        
        // define buffer playback rate
        -1.0 + Std.rand2f(-1.5, -1.0) => hihatClosed.rate;
        0.2 + Std.rand2f(0.2, 0.7) => congaLow.rate;
        -2.0 + Std.rand2f(0.2, 0.6) => clap.rate;        
        
        // define buffer gain
        Std.rand2f(minGain, maxGain) => hihatClosed.gain;
        Std.rand2f(minGain, maxGain) => congaLow.gain;
        0.5 * Std.rand2f(minGain, maxGain) => clap.gain;
        
        // rewind if sequencer is 1
        if (hihatClosedSequence[i] == 1) {
            0 => hihatClosed.pos;
        }
        
        // rewind if sequencer is 1
        if (congaLowSequence[i] == 1) {
            0 => congaLow.pos;
        }
        
        // rewind clap if probability
        if (Std.rand2f(0.0, 1.0) < clapProbability) {
            0 => clap.pos;
        }

        // let time flow
        (timeStep + Std.rand2f(-timeMaxDelta, timeMaxDelta)) :: ms => now;
    }
}