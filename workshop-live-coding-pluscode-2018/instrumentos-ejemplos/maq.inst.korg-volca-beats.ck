//maq.inst.korg-volca-beats.ck

//print the name of the script to the console
<<< "maq.inst.korg-volca-beats.ck" >>>;

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
    //data1: 153 is note on, channel 10
    //in binary, 1001nnnn is note on, where nnnn is midi channel
    //nnnn 0-15 in binary, corresponding to midi channels 1-16
    153 => msg.data1;
    //when data1 is 153, data2 is pitch
    //use note numbers on korg volca beats for selecting notes
    //36 kick
    //38 snare
    //39 clap
    //42 cl hat
    //43 lo tom
    //46 op hat
    //49 crash
    //50 hi tom
    //67 agogo
    //75 claves
    42 => msg.data2;
    //when data1 is 153, data3 is velocity
    //use 0-127 on korg volca beats for selecting velocity
    127 => msg.data3;
    
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
        //data1: 53 is note on, channel 10
        //in binary, 1001nnnn is note on, where nnnn is midi channel
        //nnnn 0-15 in binary, corresponding to midi channels 1-16
        153 => msg.data1;
        //when data1 is 153, data2 is pitch
        //use 0-5 on korg volca beats for selecting samples
        noteNumber => msg.data2;
        //when data1 is 153, data3 is velocity
        //use 0-127 on korg volca beats for selecting velocity
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
    //data1: 185 is controller change, channel 10
    //in binary, 1011nnnn is controller on, where nnnn is midi channel
    //nnnn 0-15 in binary, corresponding to midi channels 1-16
    185 => msg.data1;
    //when data1 is 185, data2 is controller number
    //use 40-59 on korg volca beats
    //59 is hat grain
    59 => msg.data2;
    //when data1 is 185, data3 is controller value
    //use 0-127 on korg volca beats for selecting value
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



