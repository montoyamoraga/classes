// ex06-midi.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex06-midi.ck" >>>;

// declare new MidiOut variable
MidiOut myOutput;

// declare new midi message
MidiMsg myMsg;

// declare new variable for midi port
// check number on menu:
// window -> device browser -> midi
2 => int myPort;

// try to open the midi port, exit if fail
if (!myOutput.open(myPort)) {
    <<< "could not open MIDI port" >>>;
    me.exit();
}

// fill the message with data
// a midi messsage has three bytes
// we will use noteOn messages, where
// byte1: note on message, channel
// byte2: note number
// byte3: note velocity

// in korg volca beats, we have these drum voices
// 36: kick
// 38: snare
// 39: clap
// 42: closed hihat
// 43: lo tom
// 46: open hihat
// 50: hi tom

// declare variables for drum voices
[36, 38, 39, 42, 43, 46, 50] @=> int drumVoices[];

// declare channel number, default for this instrument is 10
10 => int channelNumber;

// byte for noteOn in channel10
// more info at midi.org
143 + channelNumber => int noteOn;

// drum sequences
[1, 0, 0, 0,   0, 1, 0, 0] @=> int sequence0[];
[0, 1, 1, 0,   0, 0, 1, 1] @=> int sequence1[];
[0, 0, 0, 1,   0, 0, 0, 0] @=> int sequence2[];

// infinite loop
while (true) {
    
    // iterate through the sequencer
    for (0 => int i; i < sequence0.cap(); i++) {
        
        // sequence0 plays a drum voice 
        if (sequence0[i] == 1) {
           noteOn => myMsg.data1;
           drumVoices[0]=> myMsg.data2;
           100 => myMsg.data3;
           myOutput.send(myMsg);
        }
        
        // sequence1 plays a drum voice
        if (sequence1[i] == 1) {
            noteOn => myMsg.data1;
            drumVoices[3]=> myMsg.data2;
            100 => myMsg.data3;
            myOutput.send(myMsg);
        }
        
        // sequence2 plays a drum voice
        if (sequence2[i] == 1) {
            noteOn => myMsg.data1;
            drumVoices[1]=> myMsg.data2;
            100 => myMsg.data3;
            myOutput.send(myMsg);
        }
                
        // let time flow
        200 :: ms => now;
    }
}