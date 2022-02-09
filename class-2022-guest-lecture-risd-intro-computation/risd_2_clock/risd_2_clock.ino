int currentMs = 0;
int incrementMs = 1000;

int currentSeconds = 0;
int currentMinutes = 0;
int currentHours = 0;

void setup() {

  Serial.begin(9600);

  while (!Serial) {
    ;
  }

}

void loop() {

  currentMs = currentMs + incrementMs;

  currentSeconds = currentMs / 1000;
  currentMinutes = currentSeconds / 60;
  currentHours = currentMinutes / 60;

  checkPadding(currentHours);
  Serial.print(currentHours);
  Serial.print(":");

  checkPadding(currentMinutes);
  Serial.print(currentMinutes);
  Serial.print(":");

  checkPadding(currentSeconds);
  Serial.print(currentSeconds);
  Serial.println("");

  delay(1000);

}

void checkPadding(int checkNumber) {
  if (checkNumber < 10) {
    Serial.print("0");
  }
}
