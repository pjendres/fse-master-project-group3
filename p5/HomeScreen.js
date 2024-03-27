
//load image
let handImage;
function preload() {
  handImage = loadImage('hand.png');
}

//class for homescreen program
class HomeScreen {
  constructor() {
    this.x = 10;
    this.start = 100;
    this.dist = 50;
    this.width = 150;
    this.height = 30;
    this.buttons = []; 


    //menu buttons
    this.buttons.push(new MenuButton("Twister", this.x, this.start + (this.dist * 0),  this.width, this.height));
    this.buttons.push(new MenuButton("Small Buttons", this.x, this.start + (this.dist * 1),  this.width, 30));
    this.buttons.push(new MenuButton("Twisting Circle", this.x, this.start + (this.dist * 2),  this.width, 30));
    this.buttons.push(new MenuButton("Tracing Path", this.x, this.start + (this.dist * 3),  this.width, 30));

  }
  
  draw() {
    
    fill(255);
    strokeWeight(1);

    //main menu box
    rect(0, 10, width, 30);

    fill(0);
    strokeWeight(0);
    text("FMS Games", this.x, 30);

    //display background image
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
        /* TODO: 
        *
        *   change 1 to "i + 1"
        *   to implement linking to other games
        */
        currProgram = 1;
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

