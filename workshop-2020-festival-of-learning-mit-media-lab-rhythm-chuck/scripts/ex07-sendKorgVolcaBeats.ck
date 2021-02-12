// ex07-sendKorgVolcaBeats.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex07-sendKorgVolcaBeats.ck" >>>;

// declare variables for host name and port
"18.21.142.93" => string hostName;
1234 => int hostPortKorg;

// declare Open Sound Control sender
OscSend mySender;

// point sender to receiver
// ask to sender what their host name and port are
mySender.setHost(hostName, hostPortKorg);

// infinite loop
while(true) 
    {
    // start new message
    // type i for one integer argument
    mySender.startMsg( "/korgVolcaBeats/noteOn", "i" );
    
    // send message by adding the argument
    // 36: kick, 38: snare, 39: clap, 42: closed hihat
    // 43: lo tom, 46: open hihat, 50: hi tom 
    36 => mySender.addInt;
    
    // let time flow
    0.2 :: second => now;
}
