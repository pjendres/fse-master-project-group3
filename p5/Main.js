let currProgram = 0;
let programs = [];

function setup() {
  createCanvas(500, 500);
  
  //initialize and push programs to the programs array
  programs.push(new HomeScreen());
  programs.push(new Twister());
  programs.push(new SmallButtons());
  programs.push(new TwistingCircle());

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




