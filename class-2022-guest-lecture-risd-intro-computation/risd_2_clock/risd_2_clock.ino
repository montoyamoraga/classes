// risd_2_hello.ino
// simulator of digital clock
// use real world noise as random seed
// connect one end of a cable to A0, other end is loose
// programmed on wednesday february 09 2022
// by aaron montoya-moraga

// current time measured in milliseconds, seconds, minutes, hours
int currentMs = 0;
int currentSeconds = 0;
int currentMinutes = 0;
int currentHours = 0;

// increment 
int incrementMs = 1000;

void setup() {

  // open serial port
  Serial.begin(9600);

  // wait until serial port is open
  while (!Serial) {
    ;
  }

}

void loop() {

  // update time in milliseconds
  currentMs = currentMs + incrementMs;

  // update seconds, minutes and hours
  currentSeconds = currentMs / 1000;
  currentMinutes = currentSeconds / 60;
  currentHours = currentMinutes / 60;
  
  // print time to console in format HH:MM:SS
  // with zero padding to the left

  checkPadding(currentHours);
  Serial.print(currentHours);
  Serial.print(":");

  checkPadding(currentMinutes);
  Serial.print(currentMinutes);
  Serial.print(":");

  checkPadding(currentSeconds);
  Serial.print(currentSeconds);
  Serial.println("");

  // wait until next iteration
  delay(incrementMs);

}

// function to add padding of zeros to the left
void checkPadding(int checkNumber) {

  // if number is less than 10, print a 0
  if (checkNumber < 10) {
    Serial.print("0");
  }
}
