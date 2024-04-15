class TwistingCircle {
  constructor() {
    this.circle = {
      x: 200,
      y: 200,
      size: 50,
      startX: 0, // this.circle's starting X position
      startY: 0 // this.circle's starting Y position
    };
  
    this.dragging = false;
    this.offsetX, this.offsetY; // mouse click offset
    this.currentInstruction = '';
    this.instructions = ['left', 'right', 'up', 'down'];
    this.nextInstructionTime = 0;
    this.feedbackMessage = ''; 
    this.backgroundColor = 204; // default background color
    this.score = 0; 
    this.level = 1; 
    this.pointsNeededForNextlevel = 5; // points needed to reach the next this.level
    this.timer = 0;
  }

  setup() {
    setNextInstruction();
  }

  draw() {
    
    resizeCanvas(400, 400);
    textAlign(CENTER, CENTER);
    textSize(24);
    background(this.backgroundColor);

    // Draw the circle
    fill(100, 100, 250); // circle's color
    ellipse(this.circle.x, this.circle.y, this.circle.size);

    // Display this.instructions
    fill(0);
    text(this.currentInstruction, width / 2, 50);
    // this.score and level at the top
    text(`Score: ${this.score} | Level: ${this.level}`, width / 2, 20);

    // feedback message below the instructions
    text(this.feedbackMessage, width / 2, 80);

    textSize(15);
    textAlign(RIGHT);
    text('Main Menu', 380, 30);

    // check for instruction update
    if (millis() > this.nextInstructionTime) {
      
      this.setNextInstruction();
      this.feedbackMessage = 'Hurry up!';
      this.backgroundColor = 204; 
      this.resetcirclePosition(); 
    }
  }

  mousePressed() {

    if ((mouseX < 380 && mouseX > 330) && (mouseY > 15 && mouseY < 35)) {
      this.score = 0; 
      this.currentInstruction = 0;
      this.level = 0;
      this.backgroundColor = 204;
      this.setNextInstruction();
      this.feedbackMessage = 'Hurry up!';
      currProgram = 0;
    }

    let d = dist(mouseX, mouseY, this.circle.x, this.circle.y);
    if (d < this.circle.size / 2) {
      this.dragging = true;
      this.offsetX = this.circle.x - mouseX;
      this.offsetY = this.circle.y - mouseY;
      this.circle.startX = this.circle.x; 
      this.circle.startY = this.circle.y; 
    }



  }
  
  mouseClicked() {
 
  }

  mouseReleased() {
    this.dragging = false;
    this.checkMovementDirection(); // check if movement is correct
    this.resetcirclePosition(); // move circle back to center
  }

  mouseDragged() {
    if (this.dragging) {
      this.circle.x = mouseX + this.offsetX;
      this.circle.y = mouseY + this.offsetY;
    }
  }

  setNextInstruction() {
    console.log("hello");
    this.currentInstruction = random(this.instructions); // randomly picks a new direction
    this.nextInstructionTime = millis() + 5000 - this.level * 100; // decrease time with higher levels for difficulty
  }

  checkMovementDirection() {
    let movedX = this.circle.x - this.circle.startX;
    let movedY = this.circle.y - this.circle.startY;
    let isCorrect = false;

    switch (this.currentInstruction) {
      case 'left':
        isCorrect = movedX < 0;
        break;
      case 'right':
        isCorrect = movedX > 0;
        break;
      case 'up':
        isCorrect = movedY < 0;
        break;
      case 'down':
        isCorrect = movedY > 0;
        break;
    }
    
    if (isCorrect) {
      this.feedbackMessage = "Good job!";
      this.backgroundColor = color(0, 255, 0); // Green for correct
      this.score++; // increase score for correct action
      if (this.score >= this.pointsNeededForNextlevel) {
        this.level++;
        this.pointsNeededForNextlevel *= 2; // double points needed per level
        this.feedbackMessage += "level Up!";
      }
    } else {
      this.feedbackMessage = "Try again!";
      this.backgroundColor = color(255, 0, 0); // Red for wrong
    }
  }

  resetcirclePosition() {
    // reset circle position to center
    this.circle.x = 200;
    this.circle.y = 200;
  }
}
