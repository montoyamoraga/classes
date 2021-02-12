//chuck workshop avatar
//by aaron montoya moraga
//february 2017

//setup() runs once at the beginning
function setup() {
    //canvas with dimensions for facebook cover photo
    //createCanvas(828, 315);
    createCanvas(1920, 1080);
    background(255,229,234);

    drawText();

}

//draw() runs on a loop after setup()
function draw() {

}

function drawText() {

    //save current drawing mode
    push();

    //blue
    fill(9,30,191);
    stroke(9,30,191);

    //black
    // fill(30);
    // stroke(30);

    //red
    // fill(178,3,26);
    // stroke(178,3,26);

    line(38,138,width, 138);

    //text font
    noStroke();
    textFont("Didot Regular");

    textAlign(RIGHT);
    textSize(30);
    text("introducción a la programación", 790, 78);

    textSize(30);
    text("+ diseño de instrumentos digitales", 790, 110);

    textSize(20);
    text("para músicos y artistas", 790, 175);

    textSize(20);
    text("con aplicaciones en lenguaje chucK", 790, 198);

    textSize(15);
    text("domingo 12 de marzo 2017, 11am a 8pm", 790, 220);

    textSize(15);
    text("$30.000, $10.000 estudiantes, incluye almuerzo + once", 790, 240);

    textSize(15);
    text("instructor: aarón montoya-moraga", 790, 260);

    textSize(15);
    text("inscripciones y dudas: aamontoya@gmail.com", 790, 280);

    //restore previous drawing mode
    pop();

}
