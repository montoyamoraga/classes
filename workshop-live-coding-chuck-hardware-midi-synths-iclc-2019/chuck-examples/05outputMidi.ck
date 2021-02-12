// 05outputMidi.ck
// by aaron montoya-moraga
// april 2018

// print message to console monitor
<<< "05outputMidi.ck" >>>;

// declare new MidiIn variable
MidiOut outputMidi;

// declare new MidiMsg variable
MidiMsg msg;

// declare variable for MIDI port
int portMidi;

// assign MIDI port
1 => portMidi;

// try to open the MIDI port
if (!outputMidi.open(portMidi)) {
    // print error message
    <<< "cannot open MIDI port" >>>;
    // exit the shred
    me.exit();
}

// fill the message with data
// a MIDI message has three bytes
144 => msg.data1;
52 => msg.data2;
100 => msg.data3;

// send MIDI out
outputMidi.send( msg );