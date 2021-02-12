# workshop-live-coding-chuck-hardware-midi-synths-iclc-2019

## About

*Workshop: Live coding with ChucK and hardware MIDI synthesizers* is a workshop designed, written, and taught by [Aarón Montoya-Moraga](http://montoyamoraga.io/). It includes previous work and material prepared by the author for similar workshops, available here:

* [Live coding workshop, NYU, April 22nd 2018](https://github.com/montoyamoraga/workshop-live-coding-nyu-2018)
* [Live coding and MIDI 101 workshop, Brooklyn Research, April 21st 2018](https://github.com/montoyamoraga/workshop-live-coding-and-midi-101-brooklyn-research-2018)
* [Live coding workshop, PlusCODE Festival, November 13th 2018](https://github.com/montoyamoraga/workshop-live-coding-pluscode-2018)

*Workshop: Live coding with ChucK and hardware MIDI synthesizers* happened on January 16th 2019 at [Media Lab Prado](https://www.medialab-prado.es/), Madrid, Spain, by an invitation from the 4th edition of the [International Conference on Live Coding](https://iclc.livecodenetwork.org/2019/).

It was a free activity, with no previous knowledge requirements of music, MIDI or programming, and it was promoted and posted on the [Media Lab Prado website](https://www.medialab-prado.es/en/activities/workshop-live-coding-chuck-and-hardware-midi-synthesizers).

## Code of conduct of the workshop

This workshop is ruled by the [ICLC 2019 code of conduct](https://iclc.livecodenetwork.org/2019/).

Additionally, the author likes to follow the [Berlin Code of conduct](https://berlincodeofconduct.org/) for their activities.

For this particular workshop, let's also follow these rules:

 * This is a safe space for sonic and artistic experimentation.
 * Ask questions, branch out, and improvise.

## About the author

 [Aarón Montoya-Moraga](http://montoyamoraga.io/) is a [Chilean](https://en.wikipedia.org/wiki/Chile) electrical engineer, musician, programmer and artist. Aarón is a graduate, former research resident and adjunct professor at  [New York University](https://www.nyu.edu/)'s [Interactive Telecommunications Program](https://tisch.nyu.edu/itp). Aarón teaches introduction to programming and FLOSS for the arts at [CODED Escuela](http://codedescuela.cl/), including Pure Data and ChucK for sound art, Python for poetry, p5.js and Processing for visual arts. Aarón is a contributor to the [p5.js](https://p5js.org/) project and  translated the [Spanish introductory book](http://processingfoundation.press/) for the [Processing Foundation](https://processingfoundation.org/). Aarón runs the music label [bandurria](http://bandurria.io/).

### Students introduce themselves

You have [90 seconds](https://www.google.com/search?&q=timer+90+seconds) to answer the following questions:

* Name?
* Experience coding?
* Experience ChucK?
* Experience MIDI

## Contents

## Abstract

This workshop is open to people with no previous knowledge of programming or MIDI or ChucK, while still being engaging for people that master any of these skills.

We will concentrate on ChucK, because of its strict timing capabilities. We will learn how programming works in ChucK, starting from simple examples with oscillators and sequencers.

We will learn a brief historical review of MIDI and its origins and how this protocol works in a bit by bit level. We will learn how to program MIDI on ChucK and how to program routines for live manipulation of popular hardware MIDI synthesizers, such as the Moog Minitaur and the Roland TR-08, among others. We will learn how to automate parameters, create never-ending sequences, introduce randomness and incorporate hardware to our live coding practice.

## Programming ChucK

[Download and install ChucK + miniAudicle](http://chuck.cs.princeton.edu/)

## Chuck examples

* [00myFirstOsc.ck](chuck-examples/00myFirstOsc.ck)
* [01differentNotes.ck](chuck-examples/01differentNotes.ck)
* [02randomOsc.ck](chuck-examples/02randomOsc.ck)
* [03ifCondition.ck](chuck-examples/03ifCondition.ck)
* [04inputMidi.ck](chuck-examples/04inputMidi.ck)
* [05outputMidi.ck](chuck-examples/05outputMidi.ck)
* [06sequencer.ck](chuck-examples/06sequencer.ck)

## MIDI protocol

In the early 1980s, there was no standardized means of synchronizing electronic musical instruments manufactured by different companies.

Manufacturers had their own proprietary standards to synchronize instruments.

MIDI stands for Musical Instrument Digital Interface, it was standardized in 1983.

MIDI is a technical standard that allows musical instruments to communicate between each other.

MIDI allows devices to send and receive digital messages between each other.

MIDI can be transmitted over [MIDI DIN connectors](https://en.wikipedia.org/wiki/DIN_connector) and USB.

MIDI is transmitted at a rate of 31250 bps.

MIDI can be sent in parallel over 16 different channels on the same connector.

MIDI messages are 3 bytes (24 bits) long.

MIDI messages can trigger musical notes, modify parameters, start and stop sequences, and synchronize devices.

## MIDI note messages

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

MIDI CC messages are used for manipulating parameters of MIDI devices.

1011nnnn	0ccccccc 0vvvvvvv

* 1011 stands for Continuous Controller
* nnnn is the MIDI channel number, its range is 0-15 (4-bit resolution)
* ccccccc is the controller number, its range is 0-127 (7-bit resolution)
* vvvvvvv is the value, its range is 0-127 (7-bit resolution)

## ChucK and MIDI

For this workshop I prepared the first stable release of a library I am writing with ChucK, [maquinitas-chuck](https://github.com/maquinitas/maquinitas-chuck).

This library is intended to be used with different hardware MIDI synthesizers.

## MIDI interfaces

There are several ways of interfacing different MIDI-enabled devices between each other.

There are splitters, repeaters, USB-DIN interfaces.

Today we will use MIDI over USB and over DIN connectors using MIDI interfaces.

These are some companies that manufacture MIDI interfaces and related products.

* [Kenton](http://www.kentonuk.com/)
* [MIDI Solutions](http://midisolutions.com/)
* [MOTU](http://www.motu.com/)

## Hardware MIDI devices

Today we will be using the following MIDI devices.

Each instrument has an associated ChucK script that lives on the folder instrument-examples.

Each instrument has a manual that lives on the folder instrument-manual.

We will be splitting in teams, each team will use one device.

You are expected to create some sounds with the device and jam with the rest of the people.

* [Critter & Guitari Bolsa Bass](https://www.critterandguitari.com/): bass synth. No drivers needed, MIDI DIN. Default MIDI channel 1.
* [KORG volca fm](https://www.korg.com/us/products/dj/volca_fm/): FM synth. No drivers needed, MIDI DIN.  Default MIDI channel 1.
* [Roland JP-08](https://www.roland.com/global/products/jp-08/): synth. MIDI DIN or MIDI USB with driver.  Default MIDI channel 1.
* [Roland SH-01A](https://www.roland.com/global/products/sh-01a/): synth. MIDI DIN or MIDI USB with driver.  Default MIDI channel 1.
* [Roland TB-03](https://www.roland.com/global/products/tb-03/): bass synth. MIDI DIN or MIDI USB with driver.  Default MIDI channel 2.
* [Roland TR-08](https://www.roland.com/global/products/tr-08/): drum machine. MIDI DIN or MIDI USB with driver.  Default MIDI channel 10.
* [Roland TR-09](https://www.roland.com/global/products/tr-09/): drum machine. MIDI DIN or MIDI USB with driver.  Default MIDI channel 10.

## MPE

Good news is that MIDI is far from dead, or obsolete.

This year the MIDI standard was augmented to include MPE.

[MPE](http://www.rogerlinndesign.com/mpe.html) stands for MIDI Polyphonic Expression.

The principal reason for MPE is to get around a limitation of MIDI: Pitch Bend and Control Change messages must apply to all notes on the channel. This prevents polyphonic pitch bends and polyphonic Y-axis control (which uses Control Change messages) over a single MIDI channel. MPE solves this problem by sending each note's messages on a separate MIDI channel, rotating through a defined block of channels.

* [LinnStrument](https://www.youtube.com/watch?v=STz__28Scwc)
* [ROLI Seaboard](https://www.youtube.com/watch?v=6SCug5kUsBs)

## Reference
