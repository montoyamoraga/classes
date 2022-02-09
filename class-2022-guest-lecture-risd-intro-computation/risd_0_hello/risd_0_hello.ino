// risd_0_hello.ino
// open serial port and print a hello message
// programmed on wednesday february 09 2022
// by aaron montoya-moraga



// setup() runs once, at the beginning
void setup() {

  // turn on serial port at baud rate of 9600
  Serial.begin(9600);

}

// loop() runs after setup(), until the end of times
void loop() {

  Serial.println("hola!");

}
