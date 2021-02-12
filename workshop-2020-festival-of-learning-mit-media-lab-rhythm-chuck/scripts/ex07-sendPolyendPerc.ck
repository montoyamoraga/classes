// ex07-sendPolyendPerc.ck
// example of loading samples
// runs on chuck 1.4.0.0
// written by by aaron montoya-moraga & manaswi mishra
// for mit media lab festival of learning 2020 

// print file name
<<< "ex07-sendPolyendPerc.ck" >>>;

// declare variables for host name and port
"18.21.142.93" => string hostName;
1236 => int hostPortPolyend;

// declare Open Sound Control sender
OscSend mySender;

// point sender to receiver
// ask to sender what their host name and port are
mySender.setHost(hostName, hostPortPolyend);

// infinite loop
while(true) 
    {
    // start new message
    // type i for one integer argument
    mySender.startMsg( "/polyendPerc/noteOn", "i" );
    
    // send message by adding the argument
    50 => mySender.addInt;
    
    // let time flow
    0.2 :: second => now;
}
