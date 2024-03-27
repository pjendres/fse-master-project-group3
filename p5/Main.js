

let currProgram = 0;
let programs = [];

function setup() {
  createCanvas(400, 400);
  
  programs.push(new HomeScreen());
  programs.push(new Twister());

  //try setup
  for (let i = 0; i < programs.length; i++) {
    try {
      programs[i].setup();
    } catch {}
  } 
}

function draw() { 
  background(220);

  //try draw
  try {
    programs[currProgram].draw();
  } catch {}

}

//when mouse is clicked
function mouseClicked() {
  //try mouse
  try {
    programs[currProgram].mouseClicked();
  } catch {}
  

}





