let myText = document.getElementById("myText");

let textLength = 300;
let textTemperature = 0.9;

let currentText = null;
// let currentTextPlaceHolder = "loading...";

let rnn;
let generating = false;
let temperature = 0.9;

let decimasLines = 10;
let currentLine = 0;
let justDidNewLine = false;

const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// when the model is loaded
function modelLoaded() {
  console.log("model loaded!");
  myText.innerHTML = allChars[Math.floor(Math.random()*allChars.length)];
  detectOneFrame();
}

rnn = new ml5.charRNN("./models/manuelscorza", modelLoaded);

function detectOneFrame() {
  // if oneFrame
  rnn.generate({ seed: myText.innerHTML,
  length: textLength,
  temperature: textTemperature
  }, (err, results) => {
    for (let i = 0; i < results.sample.length; i++) {
      if (results.sample[i] == "\n" || results.sample[i] == "\r") {
        if (!justDidNewLine) {
          myText.innerHTML = myText.innerHTML + "\n";
          justDidNewLine = true;
          currentLine = currentLine + 1;
        }
      }
      else {
        myText.innerHTML = myText.innerHTML + results.sample[i];
        justDidNewLine = false;
      }

      if (currentLine > decimasLines - 1) {
        break;
      }
    }
  });  
}

function generate() {
  if (generating) {
    generating = false;
  } else {
    generating = true;
    loopRNN();
  }
}

async function loopRNN() {
  while (generating) {
    await predict();
  }
}

async function predict() {

  let next = await rnn.predict(temperature);
  await rnn.feed(next.sample);
  if (next.sample == "\r" || next.sample == "\n") {
    if (!justDidNewLine) {

      // create array of all lines
      let allLines = currentText.split("\n");
      // retrieve last line
      let lastLine = allLines[currentLine];

      currentText = currentText + "\n";
      justDidNewLine = true;
      currentLine = currentLine + 1
    
    }
  } else {
    currentText = currentText + next.sample;
    justDidNewLine = false;
    
  }

  if (currentLine > decimasLines - 1) {
    currentText = currentText + "\n";
    justDidNewLine = false;
    currentLine = 0;
    generating = false;
  }
}

