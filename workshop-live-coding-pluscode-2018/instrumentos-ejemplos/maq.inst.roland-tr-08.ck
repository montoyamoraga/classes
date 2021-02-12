//maq.inst.roland-tr-08.ck

//print the name of the script to the console
<<< "maq.inst.roland-tr-08.ck" >>>;

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
    //data1: 53 is note on, channel 10
    //in binary, 1001nnnn is note on, where nnnn is midi channel
    //nnnn 0-15 in binary, corresponding to midi channels 1-16
    153 => msg.data1;
    //when data1 is 153, data2 is pitch
    //use 0-127 on roland tr-08 for selecting notes
    //36 bass drum
    //37 rim shot
    //38 snare drum
    //39 hand clap
    //42 closed hi-hat
    //43 low tom
    //46 open hi-hat
    //47 mid tom
    //49 cymbal
    //50 high tom
    //56 cow bell
    //62 high conga
    //63 mid conga
    //64 low conga
    //70 maracas
    //75 claves
    [36, 37, 38, 39, 42, 43, 46, 47, 49, 50, 56, 62, 63, 64, 70, 75] @=> int drumVoices[];
    drumVoices[Std.rand2(0, drumVoices.cap()-1)] => msg.data2;
    //when data1 is 153, data3 is velocity
    //use 0-127 on roland sh-01a for selecting velocity
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
        //data1: 153 is note on, channel 10
        //in binary, 1001nnnn is note on, where nnnn is midi channel
        //nnnn 0-15 in binary, corresponding to midi channels 1-16
        153 => msg.data1;
        //when data1 is 153, data2 is pitch
        //use 0-127 on roland tr-08 for selecting notes
        //36 bass drum
        //37 rim shot
        //38 snare drum
        //39 hand clap
        //42 closed hi-hat
        //43 low tom
        //46 open hi-hat
        //47 mid tom
        //49 cymbal
        //50 high tom
        //56 cow bell
        //62 high conga
        //63 mid conga
        //64 low conga
        //70 maracas
        //75 claves
        noteNumber => msg.data2;
        //when data1 is 153, data3 is velocity
        //use 0-127 on roland tr-08 for selecting velocity
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
    //data1: 176 is controller change, channel 10
    //in binary, 1011nnnn is controller on, where nnnn is midi channel
    //nnnn 0-15 in binary, corresponding to midi channels 1-16
    185 => msg.data1;
    //when data1 is 176, data2 is controller number
    //use 20-29, 46-63, 71, 80-88 on roland tr-08
    //25 is sd tone
    25 => msg.data2;
    //when data1 is 176, data3 is controller value
    //use 0-127 on roland tr-08 for selecting value
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



