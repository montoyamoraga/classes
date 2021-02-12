// ex07-receivePolyendPerc.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex07-receivePolyendPerc.ck" >>>;

// declare Open Sound Control receiver
OscRecv myReceiverPolyend;

// declare port of receiver
1236 => myReceiverPolyend.port;

// open ports of receiver
myReceiverPolyend.listen();

// declare new OSC events for noteOn
myReceiverPolyend.event("/polyendPerc/noteOn, i") @=> OscEvent noteOnPolyend;

// declare new MidiOut variable
MidiOut myOutput;

// declare new midi message
MidiMsg myMsg;

// declare new variable for midi port
// check number on menu:
// window -> device browser -> midi
4 => int myPort;

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
    noteOnPolyend => now;
    
    // grab the next message from the queue.
    while (noteOnPolyend.nextMsg() != 0) {
        
        noteOnPolyend.getInt() => int noteOnNew;
        
        <<< "receivedPolyend: ", noteOnNew >>>;
        
        if (noteOnNew == 50) {
            noteOn => myMsg.data1;
            noteOnNew => myMsg.data2;
            30 => myMsg.data3;
            myOutput.send(myMsg);
        }
    }
}