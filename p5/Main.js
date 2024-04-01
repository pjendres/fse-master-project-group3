

let currProgram = 0;
let programs = [];

function setup() {
  createCanvas(500, 500);
  
  //initialize and push programs to the programs array
  programs.push(new HomeScreen());
  programs.push(new Twister());
  programs.push(new SmallButtons());

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

//when mouse is clicked
function mouseClicked() {
  //try mouse
  try {
    programs[currProgram].mouseClicked();
  } catch {}
}





