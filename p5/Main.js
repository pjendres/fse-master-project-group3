//load image
let handImage;
function preload() {
  handImage = loadImage('hand.png');
  soundFormats("mp3");
  backgroundMusic = loadSound("1168412-Time-Machine-2.mp3");
}

let currProgram = 0;
let programs = [];

function setup() {
  createCanvas(500, 500);
  
  //initialize and push programs to the programs array
  programs.push(new HomeScreen());
  programs.push(new Twister());
  programs.push(new SmallButtons());
  programs.push(new TwistingCircle());
  programs.push(new TracingPath());

  programs.push(new TwisterHelp());
  programs.push(new SmallButtonsHelp());
  programs.push(new TwistingCircleHelp());
  programs.push(new tracingPathHelp());
  
  //try setup
  for (let i = 0; i < programs.length; i++) {
    try {
      programs[i].setup();
    } catch {}
  } 
}

function draw() { 
  //set background color
  background(220);

  //try draw
  try {
    programs[currProgram].draw();
  } catch {}
}


function keyPressed(keyCode) {
  try {
    programs[currProgram].keyPressed(keyCode);
  } catch {}
}

function keyTyped(key) {
  try {
    programs[currProgram].keyTyped(key);
  } catch {}
}

//mouse functions
function mouseClicked() {
  //try mouse
  try {
    programs[currProgram].mouseClicked();
  } catch {}
}

function mousePressed() {
  //try mouse
  try {
    programs[currProgram].mousePressed();
  } catch {}
}

function mouseReleased() {
  //try mouse
  try {
    programs[currProgram].mouseReleased();
  } catch {}
}

function mouseDragged() {
  //try mouse
  try {
    programs[currProgram].mouseDragged();
  } catch {}
}




