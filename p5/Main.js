

let currProgram = 0;
let twister;
let homeScreen;

function setup() {
  createCanvas(400, 400);

  //initialize twister
  twister = new Twister();
  twister.setup();
  
  //initialize main menu
  homeScreen = new HomeScreen();
}

function draw() { 

  background(220);
  //check which program to draw
  //menu
  if (currProgram == 0) {
    homeScreen.draw();
  } 
  //twister
  else if (currProgram == 1) {
    twister.draw();
  }
}

//when mouse is clicked
function mouseClicked() {
  //main menu
  if (currProgram == 0) {
    homeScreen.mouseClicked();
  } 
  //twister game
  else if (currProgram == 1) {
    twister.mouseClicked();
  }
}





