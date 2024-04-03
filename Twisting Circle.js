let circle = {
  x: 200,
  y: 200,
  size: 50,
  startX: 0, // circle's starting X position
  startY: 0 // circle's starting Y position
};

let dragging = false;
let offsetX, offsetY; // mouse click offset
let currentInstruction = '';
let instructions = ['left', 'right', 'up', 'down'];
let nextInstructionTime = 0;
let feedbackMessage = ''; 
let backgroundColor = 204; // default background color
let score = 0; 
let level = 1; 
let pointsNeededForNextLevel = 5; // points needed to reach the next level

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
  setNextInstruction();
}

function draw() {
  background(backgroundColor);

  // Draw the circle
  fill(100, 100, 250); // circle's color
  ellipse(circle.x, circle.y, circle.size);

  // Display instructions
  fill(0);
  text(currentInstruction, width / 2, 50);
  // score and level at the top
  text(`Score: ${score} | Level: ${level}`, width / 2, 20);

  // feedback message below the instructions
  text(feedbackMessage, width / 2, 80);

  // check for instruction update
  if (millis() > nextInstructionTime) {
    setNextInstruction();
    feedbackMessage = 'Hurry up!';
    backgroundColor = 204; 
    resetCirclePosition(); 
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, circle.x, circle.y);
  if (d < circle.size / 2) {
    dragging = true;
    offsetX = circle.x - mouseX;
    offsetY = circle.y - mouseY;
    circle.startX = circle.x; 
    circle.startY = circle.y; 
  }
}

function mouseReleased() {
  dragging = false;
  checkMovementDirection(); // check if movement is correct
  resetCirclePosition(); // move circle back to center
}

function mouseDragged() {
  if (dragging) {
    circle.x = mouseX + offsetX;
    circle.y = mouseY + offsetY;
  }
}

function setNextInstruction() {
  currentInstruction = random(instructions); // randomly picks a new direction
  nextInstructionTime = millis() + 5000 - level * 100; // decrease time with higher levels for difficulty
}

function checkMovementDirection() {
  let movedX = circle.x - circle.startX;
  let movedY = circle.y - circle.startY;
  let isCorrect = false;

  switch (currentInstruction) {
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
    feedbackMessage = "Good job!";
    backgroundColor = color(0, 255, 0); // Green for correct
    score++; // increase score for correct action
    if (score >= pointsNeededForNextLevel) {
      level++;
      pointsNeededForNextLevel *= 2; // double points needed per level
      feedbackMessage += " Level Up!";
    }
  } else {
    feedbackMessage = "Try again!";
    backgroundColor = color(255, 0, 0); // Red for wrong
  }
}

function resetCirclePosition() {
  // reset circle position to center
  circle.x = 200;
  circle.y = 200;
}
