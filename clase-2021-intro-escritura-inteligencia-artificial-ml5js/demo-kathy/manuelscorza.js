let myText = document.getElementById("myText");

myText.innerHTML = "blabla";


// let url = null;

// const oneFrameText = "?frame";
// const oneFrameStartIndex = oneFrameText.length;
// let oneFrame = null;
// let oneFrameLength = 300;
// let oneFrameTemperature = 0.9;

// let currentText = null;
// let currentTextPlaceHolder = "loading...";

// let rnn;
// let generating = false;
// let temperature = 0.9;

// let decimasLines = 10;
// let currentLine = 0;
// let justDidNewLine = false;

// const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // when the model is loaded
// function modelLoaded() {
//   console.log("model loaded!");
//   detectOneFrame();
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   rnn = new ml5.charRNN("./models/sherlock", modelLoaded);
 
//   url = getURL();

//   lastPartUrl = url.substring(url.length - oneFrameStartIndex, url.length);
 
//   currentText = allChars[int(random(allChars.length))];

// }

// function draw() {

//   // white background
//   background(255);

//   // display generated text
//   push();
//   textSize(12);
//   textAlign(CENTER);
//   fill(0);
//   noStroke();
//   if (currentText.length > 1) {
//     text(currentText, 50*windowWidth/100, 25*windowHeight/100);
//   } else {
//     text(currentTextPlaceHolder, 40*windowWidth/100, 25*windowHeight/100);
//   }
//   pop();

// }

// function detectOneFrame() {
//   if (lastPartUrl == oneFrameText) {
//     oneFrame = true;
//     // if oneFrame
//     rnn.generate({ seed: currentText,
//     length: oneFrameLength,
//     temperature: oneFrameTemperature
//     }, (err, results) => {
//       for (let i = 0; i < results.sample.length; i++) {
//         if (results.sample[i] == "\n" || results.sample[i] == "\r") {
//           if (!justDidNewLine) {
//             currentText = currentText + "\n";
//             justDidNewLine = true;
//             currentLine = currentLine + 1;
//           }
//         }
//         else {
//           currentText = currentText + results.sample[i];
//           justDidNewLine = false;
//         }

//         if (currentLine > decimasLines - 1) {
//           break;
//         }
//       }
//     });  
//   } else {
//     oneFrame = false;
//     generate();
//   }
// }

// function generate() {
//   if (generating) {
//     generating = false;
//   } else {
//     generating = true;
//     loopRNN();
//   }
// }

// async function loopRNN() {
//   while (generating) {
//     await predict();
//   }
// }

// async function predict() {

//   let next = await rnn.predict(temperature);
//   await rnn.feed(next.sample);
//   if (next.sample == "\r" || next.sample == "\n") {
//     if (!justDidNewLine) {

//       // create array of all lines
//       let allLines = currentText.split("\n");
//       // retrieve last line
//       let lastLine = allLines[currentLine];

//       currentText = currentText + "\n";
//       justDidNewLine = true;
//       currentLine = currentLine + 1
    
//     }
//   } else {
//     currentText = currentText + next.sample;
//     justDidNewLine = false;
    
//   }

//   if (currentLine > decimasLines - 1) {
//     currentText = currentText + "\n";
//     justDidNewLine = false;
//     currentLine = 0;
//     generating = false;
//   }
// }

// function mouseClicked() {
//   currentText = allChars[int(random(allChars.length))];
//   currentLine = 0;
//   detectOneFrame();
//   generating = true;
// }
