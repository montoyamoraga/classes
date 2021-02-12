//maq.inst.novation-bass-station-ii.ck

//print the name of the script to the console
<<< "maq.inst.novation-bass-station-ii.ck" >>>;

function void sendNote() {
    //declare MidiOut variable
    MidiOut midiOut;
    
    //declare MidiMsg variable
    MidiMsg msg;
    
    //declare midiPort variable
    int midiPort;
    
    //assign midiPort number
    //to check your midi interface, you have two options:
    //on miniAudicle
    //go to Window-Device Browser- MIDI
    //on the terminal write
    //chuck --probe
    0 => midiPort;
    
    //check if midiPort is open
    if (!midiOut.open(midiPort)) {
        me.exit();
    }
    
    //do note on message
    //data1: 144 is note on, channel 1
    //in binary, 1001nnnn is note on, where nnnn is midi channel
    //nnnn 0-15 in binary, corresponding to midi channels 1-16
    144 => msg.data1;
    //when data1 is 144, data2 is pitch
    //use 0-127 on novation bass station ii for selecting notes
    Std.rand2(0,127) => msg.data2;
    //when data1 is 144, data3 is velocity
    //use 0-127 on novation bass station ii for selecting velocity
    6 => msg.data3;
    
    //send midi message
    midiOut.send(msg);
}

function void allNotesOff() {
    //declare MidiOut variable
    MidiOut midiOut;
    
    //declare MidiMsg variable
    MidiMsg msg;
    
    //declare midiPort variable
    int midiPort;
    
    //assign midiPort number
    //to check your midi interface, you have two options:
    //on miniAudicle
    //go to Window-Device Browser- MIDI
    //on the terminal write
    //chuck --probe
    0 => midiPort;
    
    //check if midiPort is open
    if (!midiOut.open(midiPort)) {
        me.exit();
    }
    
    for (0 => int noteNumber; noteNumber < 127; noteNumber++) {
        //do note on message
        //data1: 144 is note on, channel 1
        //in binary, 1001nnnn is note on, where nnnn is midi channel
        //nnnn 0-15 in binary, corresponding to midi channels 1-16
        144 => msg.data1;
        //when data1 is 144, data2 is pitch
        //use 0-127 on novation bass station ii for selecting notes
        noteNumber => msg.data2;
        //when data1 is 144, data3 is velocity
        //use 0-127 on novation bass station ii for selecting velocity
        0 => msg.data3;
      
         //send midi message
         midiOut.send(msg);
    }
     
}

function void controlChange() {
    //declare MidiOut variable
    MidiOut midiOut;
    
    //declare MidiMsg variable
    MidiMsg msg;
    
    //declare midiPort variable
    int midiPort;
    
    //assign midiPort number
    //to check your midi interface, you have two options:
    //on miniAudicle
    //go to Window-Device Browser- MIDI
    //on the terminal write
    //chuck --probe
    0 => midiPort;
    
    //check if midiPort is open
    if (!midiOut.open(midiPort)) {
        me.exit();
    }
    
    //do note on message
    //data1: 176 is controller change, channel 1
    //in binary, 1011nnnn is controller on, where nnnn is midi channel
    //nnnn 0-15 in binary, corresponding to midi channels 1-16
    176 => msg.data1;
    //when data1 is 176, data2 is controller number
    //TODO check manual for controller values on novation bass station ii
    //0 is modulation
    0 => msg.data2;
    //when data1 is 176, data3 is controller value
    //use 0-127 on novation bass station ii for selecting value
    Std.rand2(0, 127) => msg.data3;
     
    //send midi message
    midiOut.send(msg);  
}


while (true) {
    controlChange();
    0.1 :: second => now;
    sendNote();
    0.4 :: second => now;
    allNotesOff();
    0.01 :: second => now;
}



