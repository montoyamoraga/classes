// 04inputMidi.ck
// by aaron montoya-moraga
// april 2018

// oscillator, random frequency, random duration

// print message to console monitor
<<< "04inputMidi.ck" >>>;

// declare new MidiIn variable
MidiIn inputMidi;

// declare new MidiMsg variable
MidiMsg msg;

// declare variable for MIDI port
int portMidi;

// assign MIDI port
1 => portMidi;

// try to open the MIDI port
if (!inputMidi.open(portMidi)) {
    // print error message
    <<< "cannot open MIDI port" >>>;
    // exit the shred
    me.exit();
}

// infinite loop
while (true) {
    // wait on midi event
    inputMidi => now;
    
    // receive MIDI messages
    while (inputMidi.recv(msg)) {
        // print content
        <<< msg.data1, msg.data2, msg.data3 >>>;
    }
}