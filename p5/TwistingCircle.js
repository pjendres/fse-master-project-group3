class TwistingCircle {
  constructor() {
    this.circle = {
      x: 200,
      y: 200,
      size: 50,
      startX: 0, // circle's starting X position
      startY: 0 // circle's starting Y position
    };

    this.dragging = false;
    this.offsetX, this.offsetY; // mouse click offset
    this.currentInstruction = '';
    this.instructions = ['left', 'right', 'up', 'down'];
    this.nextInstructionTime = 0;
    this.feedbackMessage = ''; 
    this.backgroundColor; 
    this.score = 0; 
    this.level = 1;
    this.pointsNeededForNextLevel = 5; // points needed to reach the next level
    this.showInstructions = true; 

       }
   setup() {
      createCanvas(400, 400);
      textAlign(CENTER, CENTER);
      textSize(24);
      this.backgroundColor = color('purple'); 
      setNextInstruction();
    }

      draw() {
      if (this.showInstructions) {
        displayInstructions();
      } else {
        gameLoop();
      }
    }

      displayInstructions() {
      background(204);
      fill(0);
      textSize(16);
      text("Welcome to Twisting Circle!\n\n" +
          "Instructions:\n" +
          "- Follow the on-screen instructions to move the circle.\n" +
          "- Click and drag the circle in the direction indicated.\n" +
          "- Try to react as quickly and accurately as possible.\n\n" +
          "Click anywhere to start!", width / 2, height / 2);
    }

      gameLoop() {
      background(backgroundColor);

      
      fill(100, 100, 250); // circle's color
      ellipse(circle.x, circle.y, circle.size);

      // display instructions and feedback
      fill(0);
      textSize(20); 
      text(currentInstruction, width / 2, 50);
      text(`Score: ${score} | Level: ${level}`, width / 2, 20);
      textSize(16);
      text(feedbackMessage, width / 2, 80);

    
      if (millis() > nextInstructionTime) {
        setNextInstruction();
        feedbackMessage = 'Hurry up!';
        resetCirclePosition(); 
      }
    }

      mousePressed() {
      if (showInstructions) {
        showInstructions = false; // hide instructions and start the game
      } else {
        let d = dist(mouseX, mouseY, circle.x, circle.y);
        if (d < circle.size / 2) {
          dragging = true;
          offsetX = circle.x - mouseX;
          offsetY = circle.y - mouseY;
          circle.startX = circle.x;
          circle.startY = circle.y;
        }
      }
    }

      mouseReleased() {
      if (!showInstructions) {
        dragging = false;
        checkMovementDirection();
        resetCirclePosition();
      }
    }

      mouseDragged() {
      if (dragging && !showInstructions) {
        circle.x = mouseX + offsetX;
        circle.y = mouseY + offsetY;
      }
    }

      setNextInstruction() {
      currentInstruction = random(instructions);
      nextInstructionTime = millis() + 5000 - level * 100; // decrease time with higher levels
    }

      checkMovementDirection() {
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
        score++; // increase score
        if (score >= pointsNeededForNextLevel) {
          level++;
          pointsNeededForNextLevel *= 2; // double points needed for next level
          feedbackMessage += " Level Up!";
        }
      } else {
        feedbackMessage = "Try again!";
        backgroundColor = color(255, 0, 0); // Red for incorrect
      }
    }

      resetCirclePosition() {
      circle.x = 200;
      circle.y = 200;
    }


  }
