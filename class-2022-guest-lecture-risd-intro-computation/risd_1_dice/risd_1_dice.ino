int howManyDices = 2;

int numberMin = 1;

int numberMax = 6;

void setup() {

  Serial.begin(9600);

  while (!Serial) {
    ;
  }

  int newSeed = analogRead(A0);

  randomSeed(newSeed);

  Serial.println(newSeed);

  for (int i = 0; i < howManyDices; i++) {
    long newNumber = random(numberMin, numberMax + 1);
    Serial.println(newNumber);
  }

}

void loop() {
  // put your main code here, to run repeatedly:
}
