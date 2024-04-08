
//load image
let handImage;
function preload() {
  handImage = loadImage('hand.png');
}

//class for homescreen program
class HomeScreen {
  constructor() {
    //buttons origin location
    this.originX = 10;
    this.originY = 100;

    //default distance between buttons
    this.dist = 50;

    //default size of buttons
    this.width = 150;
    this.height = 30;

    //initialize buttons array
    this.buttons = []; 

    //intialize menu buttons and add them to the array
    //name, x, y, width, height
    this.buttons.push(new MenuButton("Twister", this.originX, this.originY + (this.dist * 0),  this.width, this.height));
    this.buttons.push(new MenuButton("Small Buttons", this.originX, this.originY + (this.dist * 1),  this.width, 30));
    this.buttons.push(new MenuButton("Twisting Circle", this.originX, this.originY + (this.dist * 2),  this.width, 30));
    this.buttons.push(new MenuButton("Tracing Path", this.originX, this.originY + (this.dist * 3),  this.width, 30));

    //draw help screen buttons
    for (let i = 0; i < 4; i++) {
      this.buttons.push(new MenuButton("?", this.originX + this.width, this.originY + (this.dist * i),  25, 30));
    }
  }


  draw() {
    resizeCanvas(500,500);
    background(220);
    //title box
    fill(255);
    strokeWeight(1);
    rect(0, 10, width, 30);

    //title text 
    fill(0);
    strokeWeight(0);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("FMS Games", this.originX, 30);

    //display background image
    textSize(12);
    image(handImage, -150, 0,);

    //display menu buttons
    for (let i = 0; i < this.buttons.length; i++){
      this.buttons[i].display();
    }


  }
  
  //when mouse is clicked
  mouseClicked() {
    //check if any button is hovered
    for (let i = 0; i < this.buttons.length; i++){
      if (this.buttons[i].isHovered()) {
        //switch to respective program
        currProgram = i + 1;

      }
    }
  }
}


//class for menu buttons
class MenuButton {
  constructor(text, x, y, width, height) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    // Check if the mouse is hovering over the button
    if (this.isHovered()) {
      //change color when hovered
      fill(200);
    } else {
      //default color
      fill(255);
    }
    
    strokeWeight(1);
    //draw rectangle
    rect(this.x, this.y, this.width, this.height);

    fill(0);
    strokeWeight(0);
    //draw text
    text(this.text, this.x + 10, this.y + this.height / 2);
  }

  isHovered() {
        //right
    return mouseX > this.x 
        //left
        && mouseX < this.x + this.width 
        //bottom
        && mouseY > this.y 
        //top
        && mouseY < this.y + this.height;
  }
}

