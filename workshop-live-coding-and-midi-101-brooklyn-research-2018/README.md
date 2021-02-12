# workshop-live-coding-and-midi-101-brooklyn-research-2018

## About

The Live Coding and Midi 101 workshop was designed, developed and taught by [Aarón Montoya-Moraga](http://montoyamoraga.io/). It includes previous work and material prepared by the author for similar workshops.

 Live Coding and Midi 101 was taught at [Brooklyn Research](https://brooklynresearch.org/), Brooklyn NY, USA on Saturday April 21st 2018. Thanks to Darya Dubouskaya for her help and for making this happen.

## Code of conduct

 * This is a safe space for sonic and artistic experimentation.
 * Respect everyone and be nice to everyone.
 * Don't be offensive or violent.
 * Ask questions, branch out, and improvise.

## About the author

 (5 mins)

 [Aarón Montoya-Moraga](http://montoyamoraga.io/) is a [Chilean](https://en.wikipedia.org/wiki/Chile) electrical engineer, musician, programmer and artist. He is a graduate from and works at [New York University](https://www.nyu.edu/)'s [Interactive Telecommunications Program](https://tisch.nyu.edu/itp). He teaches introduction to programming and FLOSS for the arts at [CODED Escuela](http://codedescuela.cl/), including Pure Data and ChucK for sound art, Python for poetry, p5.js and Processing for visual arts. He is a contributor to the [p5.js](https://p5js.org/) project and  translated the [Spanish introductory book](http://processingfoundation.press/) for the [Processing Foundation](https://processingfoundation.org/). He runs the music label [bandurria](http://bandurria.io/).

### Students introduce themselves (1 min each)

## Syllabus

* [Computer music history](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#computer-music-history)
* [Live coding and computer music frameworks](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#live-coding-and-computer-music-frameworks)
* [Programming ChucK](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#programming-chuck)
* [Programming Pure Data](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#programming-pure-data)
* [Electronic instruments](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#electronic-instruments)
* [MIDI protocol](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#midi-protocol)
* [MIDI note messages](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#midi-note-messages)
* [MIDI Continuous Controller messages](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#midi-continuous-controller-messages)
* [ChucK and MIDI](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#chuck-and-midi)
* [ChucK sequencer](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#chuck-sequencer)
* [MIDI interfaces](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#midi-interfaces)
* [Hardware MIDI devices](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#hardware-midi-devices)
* [Modular instruments](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#modular-instruments)
* [Digital audio workstation](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#digital-audio-workstation)
* [Arduino and MIDI](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#arduino-and-midi)
* [Open Sound Control](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#open-sound-control)
* [MPE](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#mpe)
* [Reference](https://github.com/montoyamoraga/edu8-workshop-live-coding-and-midi-101#reference)

## Computer music history

(20 mins)

In the 1920s, it became possible to both record and play back audio using electrical means.

[Electroacoustic music](https://en.wikipedia.org/wiki/Electroacoustic_music) started incorporating electric sound production into compositional practice.

[Musique concrète](https://en.wikipedia.org/wiki/Musique_concr%C3%A8te) is a form of music that explored the use of precorded sounds and tape manipulation to synthesize sound. The term was coined by [Pierre Schaeffer](https://en.wikipedia.org/wiki/Pierre_Schaeffer), and one of his most enduring works is [Cinq études de bruits](https://en.wikipedia.org/wiki/Cinq_%C3%A9tudes_de_bruits)./

[Elektronische Musik](https://en.wikipedia.org/wiki/Electronic_music#Elektronische_Musik)  is a form of music that synthesizes sound entirely from electronically produced signals. One of its biggest exponents is [Karlheinz Stockhausen](https://en.wikipedia.org/wiki/Karlheinz_Stockhausen)

[Electronic music](https://en.wikipedia.org/wiki/Electronic_music) employs electronic musical instruments, digital instruments and circuit-based music technology. It encompasses both electromechanical instruments, like the [electric guitar](https://en.wikipedia.org/wiki/Electric_guitar) and purely electronic instruments, like the [Theremin](https://en.wikipedia.org/wiki/Theremin).

[Computer music](https://en.wikipedia.org/wiki/Computer_music) is the application of computing technology in music composition.

## Live coding and computer music frameworks

(30 mins)

[Live coding](https://en.wikipedia.org/wiki/Live_coding) is a performing arts form centred upon the writing of source code and the use of interactive programming in a improvised way.

Live coding music has been feasible and accessible since the proliferation of portable and faster computers in the 1990s.

Here is a list of some frameworks that are used for live coding

[ChucK](https://en.wikipedia.org/wiki/ChucK) is a real-time synthesis, composition and performance programming language, created in 2003 by [Ge Wang](https://en.wikipedia.org/wiki/Ge_Wang).

[Csound](https://en.wikipedia.org/wiki/Csound) is a computer music programming language for sound, created in 1985 by Barry Vercoe. There is a [Csound book](https://mitpress.mit.edu/books/csound-book) to learn it.

[Csound live coding example](https://www.youtube.com/watch?v=NjSrh71B2yo)

[Max](https://en.wikipedia.org/wiki/Max_(software)): visual programming language for music and multimedia, released in the 1980s. It is currently developed by [Cycling '74](https://cycling74.com/) and owned by [Ableton](https://www.ableton.com/).

[Pure Data](https://en.wikipedia.org/wiki/Pure_Data) is a visual programming language developed by [Miller Puckette](https://en.wikipedia.org/wiki/Miller_Puckette) in the 1990s.

[Sonic Pi](https://en.wikipedia.org/wiki/Sonic_Pi) is a live coding environment, developed by Sam Aaron in collaboration with the Raspberry Pi Foundation.

[SuperCollider](https://en.wikipedia.org/wiki/SuperCollider): environment and programming language originally released in 1996 by James McCartney, for real-time audio synthesis and algorithmic composition. It is free and open-source software.

[Aphex Twin - The making of Vordhosbn](https://www.youtube.com/watch?v=pAZo7x83it4)

## Programming ChucK

(60 minutes)

[Download and install ChucK + miniAudicle](http://chuck.cs.princeton.edu/)

### 00myFirstOsc.ck

```chuck
//00myFirstOsc.ck
//by aaron montoya-moraga
//april 2018

//oscillator, 440 Hz, 1 second long

//print message to console monitor
<<< "00myFirsOsc.ck" >>>;

//declare oscillator
SinOsc myOsc;

//connect osc to dac
myOsc => dac;

//assign frequency of oscillator
440 => myOsc.freq;

//assign gain of oscillator
//gain goes from 0.0 to 1.0
0.7 => myOsc.gain;

//let 1 second pass
1 :: second => now;
```

### 01differentNotes.ck

```chuck
//01differentNotes.ck
//by aaron montoya-moraga
//april 2018

//oscillator, 440 Hz, 1 second long
//same oscillator, 770 Hz, 2 second long

//print message to console monitor
<<< "00myFirsOsc.ck" >>>;

//declare oscillator
SinOsc myOsc;

//connect osc to dac
myOsc => dac;

//assign frequency of oscillator
440 => myOsc.freq;

//assign gain of oscillator
//gain goes from 0.0 to 1.0
0.7 => myOsc.gain;

//let 1 second pass
1 :: second => now;

//change frequency
770 => myOsc.freq;

//let 2 seconds pass
2 :: second => now;
```

### 02randomOsc.ck

```chuck
//02randomOsc.ck
//by aaron montoya-moraga
//april 2018

//oscillator, random frequency, random duration

//print message to console monitor
<<< "02randomOsc.ck" >>>;

//declare oscillator
SinOsc myOsc;

//connect osc to dac
myOsc => dac;

//random frequency of oscillator
Std.rand2f(100, 5000) => myOsc.freq;

//random gain of oscillator
Std.rand2f(0.1, 0.9) => myOsc.gain;

//let random time passs
Std.rand2f(0.1, 2) :: second => now;
```

### 03ifCondition.ck

```chuck
//03ifCondition.ck
//by aaron montoya-moraga
//april 2018

//oscillator, random frequency, random duration

//print message to console monitor
<<< "03ifCondition.ck" >>>;

//declare triangular oscillator
TriOsc myOsc;

//connect osc to dac
myOsc => dac;

//declare variable for coin flip
int coinFlip;

//declare two possible frequencies
500 => float highFreq;
440 => float lowFreq;

Std.rand2(0,1) => coinFlip;

<<< "tossCoin: " + coinFlip >>>;

if (coinFlip == 0) {
    lowFreq => myOsc.freq;
}
else {
    highFreq => myOsc.freq;
}

//set gain
0.7 => myOsc.gain;

//let 0.1 minute pass
0.1 :: minute => now;
```

## Programming Pure Data

(40 minutes)

[Download and install Pure Data](http://puredata.info/)

The examples live on the folder pd-examples.

## Electronic instruments

(30 minutes)

### Components of instruments

* [Oscillator](https://en.wikipedia.org/wiki/Electronic_oscillator): element that produces a periodic, oscillating signal. Its parameters are frequency, amplitude and phase.
* [LFO](https://en.wikipedia.org/wiki/Low-frequency_oscillation) (LF for low-frequency), an oscillator with a sub-audio frequency (20 Hz).
* [Filter](https://en.wikipedia.org/wiki/Filter_(signal_processing)): element that removes certain frequencies of the audio spectrum.
* [Amplifier](https://en.wikipedia.org/wiki/Amplifier): electronic device that can boost or attenuate the power of a signal.
* [Sequencer](https://en.wikipedia.org/wiki/Music_sequencer): device that can record, edit or play back musical information, like on/off, note triggering.

### Types of instruments

* [Synthesizer](https://en.wikipedia.org/wiki/Synthesizer): instrument that generates electric signals that are converted to sound.
* [Drum machine](https://en.wikipedia.org/wiki/Drum_machine): musical instrument specialized in generating drums, cymbals and other percussive sounds.
* [Sampler](https://en.wikipedia.org/wiki/Sampler_(musical_instrument))instrument that uses pre-recorded sounds as the basis for generating sounds.

### Signal flow

Sound source -> Filter -> Effects -> Amplifier

### Classic instruments

* [Akai MPC](https://en.wikipedia.org/wiki/Music_Production_Controller): Polyphonic sampler, 1988
* [ARP Odyssey](https://en.wikipedia.org/wiki/ARP_Odyssey): Monophonic analog synthesizer, 1972.
* [Fairlight CMI](https://en.wikipedia.org/wiki/Fairlight_CMI): Digital sampler, 1979.
* [Moog Minimoog](https://en.wikipedia.org/wiki/Minimoog): Monophonic analog synthesizer, 1970.
* [Oberheim OB-X](https://en.wikipedia.org/wiki/Oberheim_OB-X): Polyphonic analog synthesizer, 1979.
* [Roland TB-303](https://en.wikipedia.org/wiki/Roland_TB-303): Monophonic nalog bass synth, 1981.
* [Roland TR-808](https://en.wikipedia.org/wiki/Roland_TR-808): Programmable analog drum machine, 1980.
* [Sequential Circuits Prophet-5](https://en.wikipedia.org/wiki/Sequential_Circuits_Prophet-5): Polyphonic analog synthesizer, 1978.
* [Yamaha DX7](https://en.wikipedia.org/wiki/Yamaha_DX7): Polyphonic digital synthesizer, 1983.
* [Yamaha CS-80](https://en.wikipedia.org/wiki/Yamaha_CS-80): Polyphonic analog synthesizer, 1976.

## MIDI protocol

(20 minutes)

In the early 1980s, there was no standardized means of synchronizing electronic musical instruments manufactured by different companies.

Manufacturers had their own proprietary standards to synchronize instruments.

[MIDI](https://en.wikipedia.org/wiki/MIDI) stands for Musical Instrument Digital Interface, it was standardized in 1983.

MIDI is a technical standard that allows musical instruments to communicate between each other.

MIDI allows devices to send and receive digital messages between each other.

MIDI can be transmitted over [MIDI DIN connectors](https://en.wikipedia.org/wiki/DIN_connector) and USB.

MIDI is transmitted at a rate of 31250 bps.

MIDI can be sent in parallel over 16 different channels on the same connector.

MIDI messages are 3 bytes (24 bits) long.

MIDI messages can trigger musical notes, modify parameters, start and stop sequences, and synchronize devices.

## MIDI note messages

(15 minutes)

A common use of MIDI is triggering musical notes on and off.

The first byte is both for signaling note on or off and for choosing the MIDI channel.

The second byte is for defining the note number.

The third byte is for defining the note velocity, used for gain.

### MIDI note on

1001nnnn	0kkkkkkk 0vvvvvvv

* 1001 stands for Note On
* nnnn is the MIDI channel number, its range is 0-15 (4-bit resolution)
* kkkkkkk is the note number, its range is 0-127 (7-bit resolution)
* vvvvvvv is the velocity, its range is 0-127 (7-bit resolution)

### MIDI note off

1000nnnn	0kkkkkkk 0vvvvvvv

* 1000 stands for Note Off
* nnnn is the MIDI channel number, its range is 0-15 (4-bit resolution)
* kkkkkkk is the note number, its range is 0-127 (7-bit resolution)
* vvvvvvv is the velocity, its range is 0-127 (7-bit resolution)

## MIDI Continuous Controller messages

(10 minutes)

MIDI CC messages are used for manipulating parameters of MIDI devices.

1011nnnn	0ccccccc 0vvvvvvv

* 1011 stands for Continuous Controller
* nnnn is the MIDI channel number, its range is 0-15 (4-bit resolution)
* ccccccc is the controller number, its range is 0-127 (7-bit resolution)
* vvvvvvv is the value, its range is 0-127 (7-bit resolution)

## ChucK and MIDI

(20 minutes)

### 04inputMidi.ck

```chuck
//04inputMidi.ck
//by aaron montoya-moraga
//april 2018

//oscillator, random frequency, random duration

//print message to console monitor
<<< "04inputMidi.ck" >>>;

//declare new MidiIn variable
MidiIn inputMidi;

//declare new MidiMsg variable
MidiMsg msg;

//declare variable for MIDI port
int portMidi;

//assign 0 to the MIDI port
0 => portMidi;

//try to open the MIDI port
if (!inputMidi.open(portMidi)) {
    //print error message
    <<< "cannot open MIDI port" >>>;
    //exit the shred
    me.exit();
}

//infinite loop
while (true) {
    //wait on midi event
    inputMidi => now;

    //receive MIDI messages
    while (inputMidi.recv(msg)) {
        //print content
        <<< msg.data1, msg.data2, msg.data3 >>>;
    }
}
```

### 05outputMidi.ck

```chuck
//05outputMidi.ck
//by aaron montoya-moraga
//april 2018

//print message to console monitor
<<< "05outputMidi.ck" >>>;

//declare new MidiIn variable
MidiOut outputMidi;

//declare new MidiMsg variable
MidiMsg msg;

//declare variable for MIDI port
int portMidi;

//assign 0 to the MIDI port
0 => portMidi;

//try to open the MIDI port
if (!outputMidi.open(portMidi)) {
    //print error message
    <<< "cannot open MIDI port" >>>;
    //exit the shred
    me.exit();
}

//fill the message with data
//a MIDI message has three bytes
144 => msg.data1;
52 => msg.data2;
100 => msg.data3;

//send MIDI out
outputMidi.send( msg );
```

## ChucK sequencer

(20 minutes)

We will build a 8-step sequencer using ChucK.

This sequencer will store 8 note values and velocities.

The playback rate is a parameter, and it can be changed.

### 06sequencer.ck

```chuck
//06sequencer.ck
//by aaron montoya-moraga
//april 2018

//8 step sequencer

//array of notes
[ 41,  42,  43,  44,  45,  46,  47,  48] @=> int note[];
//array of velocities
[127, 100,  90,  100, 80, 127,  95,  40] @=> int velocity[];

//beats per minute
60 => float bpm;
//milliseconds per beat
60*1000/bpm => float msPerBeat;

//print tempo information
<<< "msPerBeat: " + msPerBeat >>>;

//print message to console monitor
<<< "05outputMidi.ck" >>>;

//declare new MidiIn variable
MidiOut outputMidi;

//declare new MidiMsg variable
MidiMsg msg;

//declare variable for MIDI port
int portMidi;

//assign 0 to the MIDI port
0 => portMidi;

//try to open the MIDI port
if (!outputMidi.open(portMidi)) {
    //print error message
    <<< "cannot open MIDI port" >>>;
    //exit the shred
    me.exit();
}


//infinite loop
while (true) {
    //go through every step
    for (0 => int step; step < note.cap(); step++) {
        //go through every step
        <<< "step: " + step >>>;
        //fill the message with data
        //a MIDI message has three bytes
        //144 is note on, channel 1
        144 => msg.data1;
        //retrieve the corresponding note number
        note[step] => msg.data2;
        //retrieve the corresponding note velocity
        velocity[step] => msg.data3;
        //send MIDI out
        outputMidi.send(msg);
        //let time flow
        msPerBeat :: ms => now;
        //send note off
        0 => msg.data3;
        outputMidi.send(msg);
    }
}
```

## MIDI interfaces

(5 minutes)

There are several ways of interfacing different MIDI-enabled devices between each other.

There are splitters, repeaters, USB-DIN interfaces.

Today we will use MIDI over USB and over Din connectors using MIDI interfaces.

These are some companies that manufacture MIDI interfaces and related products.

* [Kenton](http://www.kentonuk.com/)
* [MIDI Solutions](http://midisolutions.com/)
* [MOTU](http://www.kentonuk.com/)

## Hardware MIDI devices

(40 minutes)

Today we will be using the following eight MIDI devices.

Each instrument has an associated ChucK script that lives on the folder instrument-examples.

Each instrument has a manual that lives on the folder instrument-manual.

We will be splitting in 8 teams, each team will use one device.

You are expected to create some sounds with the device and jam with the rest of the people.

### [BASTL microGranny 2](http://www.bastl-instruments.com/instruments/microgranny/)

* Power supply: 9 Vdc center positive or batteries.
* MIDI over 5-pin MIDI DIN cable + interface
* MIDI default channel 1
* No installation required
* Output is 1/8 inches TRS stereo cable (headphones)

### [Korg Volca Beats](http://www.korg.com/us/products/dj/volca_beats/page_1.php)

* Power supply: 9 Vdc center positive or batteries.
* MIDI over 5-pin MIDI DIN cable + interface
* MIDI default channel 10
* No installation required
* Output is 1/8 inches TRS stereo cable (headphones) and speakers

### [Moog Minitaur](https://www.moogmusic.com/products/taurus/minitaur)
* Power supply: 12 Vdc center positive
* MIDI over USB-B cable
* MIDI default channel 1
* Needs drivers installation for Windows
* Output is 1/4 inches TS mono cable (guitar cable)

### [Novation Bass Station II](https://global.novationmusic.com/synths/bass-station-ii)
* Power supply: USB-B
* MIDI over USB-B cable
* MIDI default channel 1
* Does not need drivers
* Output is 1/8 inches TS mono cable (guitar cable)

### [Roland SH-01A](https://www.roland.com/global/products/sh-01a/)
* Power supply: micro USB
* MIDI over micro USB cable
* MIDI default channel 1
* Needs drivers installation
* Output is 1/8 inches TRS stereo cable (headphones), plus speakers

### [Roland TB-03](https://www.roland.com/us/products/tb-03/)
* Power supply: micro USB
* MIDI over micro USB cable
* MIDI default channel 2
* Needs drivers installation
* Output is 1/8 inches TRS stereo cable (headphones), plus speakers

### [Roland TR-08](https://www.roland.com/global/products/tr-08/)
* Power supply: micro USB
* MIDI over micro USB cable
* MIDI default channel 10
* Needs drivers installation
* Output is 1/8 inches TRS stereo cable (headphones), plus speakers

### [Waldorf Streichfett](https://waldorfmusic.com/en/streichfett-overview)
* Power supply: USB-B
* MIDI over USB-B cable
* MIDI default channel omni (all of them)
* Does not need drivers
* Output is 1/8 inches TS mono cable (guitar cable)

https://vimeo.com/250499094

## Modular instruments

(20 minutes)

[Kaitlyn Aurelia Smith - In The Studio](https://www.youtube.com/watch?v=95UvPlhjbE4)

The instruments we used today have a fixed architecture.

You can program their memory but the signal path cannot be modified.

Modular instruments have each of their parts separated and they have to be connected with patch cables.

Modular instruments don't have a memory bank with presets.

There used to be proprietary formats, but Eurorack is the most popular format, defined by [Doepfer](http://www.doepfer.de/) in 1996.

[Eurorack](https://en.wikipedia.org/wiki/Eurorack) specifies both mechanical and electrical conventions, including width, height, power supply, connector jacks, and voltage range of instruments.

There are more than 5000 different modules by more than 250 different manufacturers.

* [modulargrid.net](https://www.modulargrid.net/)
* [4ms](http://www.4mspedals.com/)
* [Doepfer](http://www.doepfer.de/)
* [Expert Sleepers](http://www.expert-sleepers.co.uk/)
* [Intellijel](https://intellijel.com/)
* [Make Noise](http://www.makenoisemusic.com/)
* [Mannequins](http://whimsicalraps.com/)
* [Mutable instruments](https://mutable-instruments.net/)

There are three different types of signals:

* Audio signal: the actual sound
* Control voltage: for modulation of parameters
* Trigger/Gate/Clock: for sequencing

There are also semi-modular instruments, which have a fixed architecture by default, which can be overridden by patch cables.

* [Arturia Minibrute 2](https://www.arturia.com/minibrute-2/overview)
* [Moog DFAM](https://www.moogmusic.com/products/semi-modular/dfam-drummer-another-mother)
* [Moog Mother 32](https://www.moogmusic.com/products/semi-modular/mother-32)

## Digital audio workstation

(15 min)

Software for recording, mixing, and mastering sound, and writing, manipulating and sequencing MIDI.

* [Bitwig Studio](https://www.bitwig.com/)
* [Live](https://en.wikipedia.org/wiki/Ableton_Live)
* [Logic Pro](https://en.wikipedia.org/wiki/Logic_Pro)
* [FL Studio](https://en.wikipedia.org/wiki/FL_Studio)
* [Reason](https://en.wikipedia.org/wiki/Reason_(software))
* [Pro Tools](https://en.wikipedia.org/wiki/Pro_Tools)
* [Reaper](https://en.wikipedia.org/wiki/REAPER)

## Arduino and MIDI

(15 min)

The example lives on the folder arduino-examples and is taken from [https://www.arduino.cc/en/Tutorial/Midi](https://www.arduino.cc/en/Tutorial/Midi).

## Open Sound Control

(20 min)

[Open Sound Control](https://en.wikipedia.org/wiki/Open_Sound_Control) is a protocol for networking sound synthesizers, computers, and other multimedia devices.

Its advantages include interoperability, accuracy, flexibility and enhanced organization and documentation.

It can be transmitted wirelessly through software like Max.

An OSC message is made out of a a tag ("synth/freq") and a value or list of values (int, float, string, boolean).

Advantages over MIDI:

* Highly customizable
* More resolution
* Open ended tags and nesting

Software for OSC:

* [TouchOSC](https://hexler.net/software/touchosc)
* [OSCulator](https://osculator.net/)

## MPE

(15 min)

Good news is that MIDI is far from dead, or obsolete.

This year the MIDI standard was augmented to include MPE.

[MPE](http://www.rogerlinndesign.com/mpe.html) stands for MIDI Polyphonic Expression.

The principal reason for MPE is to get around a limitation of MIDI: Pitch Bend and Control Change messages must apply to all notes on the channel. This prevents polyphonic pitch bends and polyphonic Y-axis control (which uses Control Change messages) over a single MIDI channel. MPE solves this problem by sending each note's messages on a separate MIDI channel, rotating through a defined block of channels.

* [LinnStrument](https://www.youtube.com/watch?v=STz__28Scwc)
* [ROLI Seaboard](https://www.youtube.com/watch?v=6SCug5kUsBs)

## Reference

* [Ableton](https://www.ableton.com/)
* [Acousmatic sound](https://en.wikipedia.org/wiki/Acousmatic_sound)
* [Audacity](https://www.audacityteam.org/)
* [Aphex Twin](https://en.wikipedia.org/wiki/Aphex_Twin)
* [Cinq études de bruits](https://en.wikipedia.org/wiki/Cinq_%C3%A9tudes_de_bruits)
* [Computer music](https://en.wikipedia.org/wiki/Computer_music)
* [Control](https://www.ctrl-mod.com/)
* [Csound](http://csound.com/)
* [History of sound recording](https://en.wikipedia.org/wiki/History_of_sound_recording)
* [ChucK](http://chuck.cs.princeton.edu/)
* [Electroacoustic music](https://en.wikipedia.org/wiki/Electroacoustic_music)
* [Electronic music](https://en.wikipedia.org/wiki/Electronic_music)
* [Karlheinz Stockhausen](https://en.wikipedia.org/wiki/Karlheinz_Stockhausen)
* [International Conference on Live Coding](https://iclc.livecodenetwork.org/)
* [Live coding](https://en.wikipedia.org/wiki/Live_coding)
* [Max](https://cycling74.com/)
* [Musique concrète](https://en.wikipedia.org/wiki/Musique_concr%C3%A8te)
* [Korg](http://www.korg.com/us/)
* [Monome](https://monome.org/)
* [Modular Grid](https://www.modulargrid.net/)
* [Pierre Schaeffer](https://en.wikipedia.org/wiki/Pierre_Schaeffer)
* [Pure Data](http://puredata.info/)
* [Roland](https://www.roland.com/us/)
* [Sonic Pi](https://sonic-pi.net/)
* [Summary of MIDI messages](https://www.midi.org/specifications/item/table-1-summary-of-midi-message)
* [SuperCollider](https://supercollider.github.io/)
* [Tatsuya Takahashi](http://www.factmag.com/2017/07/11/aphex-twin-tatsuya-takahashi-interview/)
* [Theremin](https://en.wikipedia.org/wiki/Theremin)
* [TidalCycles](https://tidalcycles.org/)
* [Whimsical Raps](http://whimsicalraps.com/)
