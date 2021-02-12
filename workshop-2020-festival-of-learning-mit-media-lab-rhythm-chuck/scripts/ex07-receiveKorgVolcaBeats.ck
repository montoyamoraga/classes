// ex07-receiveKorgVolcaBeats.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex07-receiveKorgVolcaBeats.ck" >>>;

// declare Open Sound Control receiver
OscRecv myReceiverKorg;

// declare port of receiver
1234 => myReceiverKorg.port;

// open ports of receiver
myReceiverKorg.listen();

// declare new OSC events for noteOn
myReceiverKorg.event("/korgVolcaBeats/noteOn, i") @=> OscEvent noteOnKorg;

// declare new MidiOut variable
MidiOut myOutput;

// declare new midi message
MidiMsg myMsg;

// declare new variable for midi port
// check number on menu:
// window -> device browser -> midi
2 => int myPort;

// try to open midi ports, exit if fail
if (!myOutput.open(myPort)) {
    <<< "could not open MIDI port" >>>;
    me.exit();
}

// declare channel number, default for this instrument is 10
10 => int channelNumber;

// byte for noteOn in channel10
// more info at midi.org
143 + channelNumber => int noteOn;

// infinite loop
while (true) {
    
    // wait until new event
    noteOnKorg => now;
    
    // grab the next message from the queue.
    while (noteOnKorg.nextMsg() != 0) {
        
        noteOnKorg.getInt() => int noteOnNew;
        
        <<< "receiveKorg", noteOnNew >>>;
        
        if (noteOnNew == 36 || noteOnNew == 38 || noteOnNew == 39 || noteOnNew == 42 || noteOnNew == 43 || noteOnNew == 46 || noteOnNew == 50) {
            noteOn => myMsg.data1;
            noteOnNew => myMsg.data2;
            100 => myMsg.data3;
            myOutput.send(myMsg);
        }
    }
}