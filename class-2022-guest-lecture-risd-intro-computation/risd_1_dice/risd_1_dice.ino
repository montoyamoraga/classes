// risd_0_hello.ino
// simulator of throwing dice
// use real world noise as random seed
// connect one end of a cable to A0, other end is loose
// programmed on wednesday february 09 2022
// by aaron montoya-moraga


// number of dices to be thrown
int howManyDices = 2;

// minimum number in the result
int numberMin = 1;

// maximum number in the result
int numberMax = 6;


void setup() {

  // open serial port
  Serial.begin(9600);

  // wait until serial port is open
  while (!Serial) {
    ;
  }

  // read noise from the cable on pin A0
  int newSeed = analogRead(A0);

  // set the random seed
  randomSeed(newSeed);

  // print the seed to the console
  Serial.println(newSeed);

  // go through every dice
  for (int i = 0; i < howManyDices; i++) {

    // obtain a new random number to simulate the dice
    long newNumber = random(numberMin, numberMax + 1);

    // print the result to the console
    Serial.println(newNumber);
  }

}

void loop() {

}
