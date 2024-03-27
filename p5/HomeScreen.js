
let handImage;
function preload() {
  handImage = loadImage('hand.png');
}

class HomeScreen {
  constructor() {
    this.x = 10;
    this.start = 100;
    this.dist = 50;
    this.width = 150;
    this.height = 30;
    this.buttons = []; 


    // Initialize menu buttons
    this.buttons.push(new MenuButton("Twister", this.x, this.start + (this.dist * 0),  this.width, this.height));
    this.buttons.push(new MenuButton("Small Buttons", this.x, this.start + (this.dist * 1),  this.width, 30));

  }
  
  draw() {
    background(220); // Clear the background each frame
    
    fill(255);
    strokeWeight(1);
    // Main menu box
    rect(0, 10, width, 30);

    fill(0);
    strokeWeight(0);
    text("FMS Games", this.x, 30);

    // Display the image
    image(handImage, -150, 0,);

    // Display menu buttons
    for (let i = 0; i < this.buttons.length; i++){
      this.buttons[i].display();
    }


  }
  
  mouseClicked() {
    // Check if any button is clicked
    if (this.twisterButton.isHovered()) {
      currProgram = 1;
    }
    if (this.smallButtonsButton.isHovered()) {
      currProgram = 2;
    }
  }
}

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
      fill(200); // Change the button color when hovered
    } else {
      fill(255); // Default button color
    }
    
    strokeWeight(1);
    rect(this.x, this.y, this.width, this.height);

    fill(0);
    strokeWeight(0);
    text(this.text, this.x + 10, this.y + this.height / 2);
  }

  isHovered() {
    return mouseX > this.x 
        && mouseX < this.x + this.width 
        && mouseY > this.y 
        && mouseY < this.y + this.height;
  }
}

