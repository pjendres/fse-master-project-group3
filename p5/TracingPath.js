//note: my game uses the p52dcollison library, which you have to add into "index" in order for it to work properly. Add the following

//  <script defer src="https://unpkg.com/p5.collide2d"></script> 

// it also has music which I have included in the file. 
class TracingPath {

constructor() {
  this.playerX = 0;
  this.playerY = 0;
  this.instructionText;
  this.playerActive = 4; //0 means stop, 1 means playing, 2 means paused. 
  this.mazePos = 0;
  this.winCollison;
  this.loseCollison = false;
  this.replayCollison = false;
  this.menuCollison;
  this.score = 0;
  this.dscore = 1;
  this.best = 0;
  this.multiplier = 1;
  this.counter = 0;
}


 draw() {
  resizeCanvas(700,500);
  
  background(100);
  textSize(20);
  fill(60, 255, 0);

  if (this.playerActive == 0){ //startPos
    this.instructionText = "Click to begin!";
    this.dscore = 1;
    this.score = 0;
    backgroundMusic.stop();
    this.mazePos = 0;
  } else if (this.playerActive == 1) { //playing
    this.instructionText = "press r to restart, p or click to pause";
    this.mazePos -= 3.8;
    this.score += this.dscore*this.multiplier;
    
    if(this.playerActive == 1){
      this.counter += 10;
    }



    
    fill(47, 255, 0);
 //  a.position(0, 1000);
  //  b.position(0, 1000);
    if (backgroundMusic.isPlaying() == false){
    backgroundMusic.play(); 

}
  } else if (this.playerActive == 2){ //paused
    this.instructionText = "Click to continue playing!";
    backgroundMusic.pause();
  } else if (this.playerActive == 4){
    this.instructionText = "Click to proceed";
   // gameTutorial();
  }
  
//winCollison = collidePointLine(mouseX, mouseY, 100000+mazePos, 0, 100000 + mazePos, 500);
 //(test mode)
  this.winCollison = collidePointLine(mouseX, mouseY, 11800 +this.mazePos, 0, 11740 + this.mazePos, 500);


  
  this.playerGuide();
  
  this.createPlayer();

  

  
  //creating the blocks
  this.topBlock();
  fill(0);
  text("press esc at any time to return to menu", 10, 30);
    noFill();
  stroke(0);

  beginShape(); //tells p5 we are starting a custom shape with the following points. 
  vertex(20, 70);
  vertex(25, 65); 
  vertex(30, 70); 
  vertex(40, 70); 
  vertex(35, 75); 
  vertex(35, 80); 
  vertex(25, 75); 
  vertex(13, 80); 
  vertex(15, 75); 
  vertex(10, 70); 
  vertex(20, 70); 
  endShape(); //tells p5 to stop drawing a custom shape between the points.
  
 
   beginShape(); //tells p5 we are starting a custom shape with the following points. 
  vertex(50, 70);
  vertex(55, 65); 
  vertex(60, 70); 
  vertex(70, 70); 
  vertex(65, 75); 
  vertex(65, 80); 
  vertex(55, 75); 
  vertex(43, 80); 
  vertex(45, 75); 
  vertex(40, 70); 
  vertex(50, 70); 
  endShape(); //tells p5 to stop drawing a custom shape between the points.
  
  

   beginShape(); //tells p5 we are starting a custom shape with the following points. 
  vertex(80, 70);
  vertex(85, 65); 
  vertex(90, 70); 
  vertex(100, 70); 
  vertex(95, 75); 
  vertex(95, 80); 
  vertex(85, 75); 
  vertex(73, 80); 
  vertex(75, 75); 
  vertex(70, 70); 
  vertex(80, 70); 
  endShape(); //tells p5 to stop drawing a custom shape between the points.
  
  noStroke();
    fill("yellow"); 
  if (this.score > 5500){
  beginShape(); //tells p5 we are starting a custom shape with the following points. 
  vertex(20, 70);
  vertex(25, 65); 
  vertex(30, 70); 
  vertex(40, 70); 
  vertex(35, 75); 
  vertex(35, 80); 
  vertex(25, 75); 
  vertex(13, 80); 
  vertex(15, 75); 
  vertex(10, 70); 
  vertex(20, 70); 
  endShape(); //tells p5 to stop drawing a custom shape between the points.
  }
  if (this.score > 10500){
   beginShape(); //tells p5 we are starting a custom shape with the following points. 
  vertex(50, 70);
  vertex(55, 65); 
  vertex(60, 70); 
  vertex(70, 70); 
  vertex(65, 75); 
  vertex(65, 80); 
  vertex(55, 75); 
  vertex(43, 80); 
  vertex(45, 75); 
  vertex(40, 70); 
  vertex(50, 70); 
  endShape(); //tells p5 to stop drawing a custom shape between the points.
  }
  
  if (this.score > 22000){
   beginShape(); //tells p5 we are starting a custom shape with the following points. 
  vertex(80, 70);
  vertex(85, 65); 
  vertex(90, 70); 
  vertex(100, 70); 
  vertex(95, 75); 
  vertex(95, 80); 
  vertex(85, 75); 
  vertex(73, 80); 
  vertex(75, 75); 
  vertex(70, 70); 
  vertex(80, 70); 
  endShape(); //tells p5 to stop drawing a custom shape between the points.
  }

  this.bottomBlock();
  if (this.winCollison && this.playerActive != 3 || this.winCollison && this.loseCollison){
    this.playerActive = 3;
   // playerTime = millis();
  }
  //blue box
  fill(50, 196, 240);
  rect(490, 30, 190, 125);
  fill(0);
  //score indicator
    text("score: ", 500, 50);
  text(this.score, 600, 50);
  text("x", 500, 100);
  //multiplier
  text(this.multiplier, 515, 100);
  //target score
  if (this.score < 22000)
  text("target: ", 500, 150);
  if (this.score < 5750){
    text("5750", 600, 150);
  } else if (this.score < 10500){
    text("10500", 600, 150);
  } else if (this.score < 22000){
    text("22000", 600, 150);
  }
  
   if (this.playerActive == 3){
    this.victoryRoyale();
  } 
  if (this.playerActive == 2){
    this.gamePaused();
  }


  
  
  
    if (this.counter >= 10000){
      this.multiplier = 10;  
      fill(0);
      text("MAX", 600, 100);
    } else if (this.counter >= 6000){
      this.multiplier = 4;
     // text((int)((counter - 6000)/40), 600, 100);
     // text("%", 650, 100);
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      noStroke();
      fill(0);
      rect(550, 80, (this.counter - 6000)/40 ,25);
    } else if (this.counter >= 3000){
      this.multiplier = 3;
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      noStroke();
      fill(0);
      rect(550, 80, (this.counter - 3000)/30 ,25);
    } else if (this.counter >= 1000){
      this.multiplier = 2;
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      noStroke();
      fill(0);
      rect(550, 80, (this.counter-1000)/20 ,25);
    } else if (this.counter < 1000){
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      this.multiplier = 1;
      noStroke();
      fill(0);
      rect(550, 80, this.counter/10 ,25);
    }
  
    if (this.playerActive == 4){
    this.gameTutorial();
  }

}

mouseClicked(){ //music
if(this.playerActive == 0){
  this.score = 0;
  this.dscore = 1;
  this.playerActive = 1; //1 = game is playing
} else if (this.playerActive == 1){
  this.playerActive = 2;
} else if (this.playerActive == 2 && !this.menuCollison){
  this.playerActive = 1;
} else if (this.playerActive == 3 && !this.menuCollison){
  this.playerActive = 0;
  this.score = 0;
  this.counter = 0;
} else if (this.playerActive == 4){
  this.playerActive = 0;
}
 // attempt++;

  
if (this.menuCollison){
  this.returnToMenu();
}

}
  
keyPressed(){
  if (keyCode === ESCAPE){
    //FIXME: make the game returns to the level selection screen. 
    this.returnToMenu();
  }
}
keyTyped() {
  if (key === 'r'){

    this.playerActive = 0;
    this.counter = 0;
    //attempt++;
  } else if (key === 'p' && this.playerActive != 3 && this.playerActive != 0){
    this.playerActive = 2;

  }
}
 returnToMenu(){
  //FIXME: adds a return to menu func. 
}
 victoryRoyale(){
  if(this.score > 5750){
    this.instructionText = "You won! Press r to restart, esc to exit";
  } else {
    this.instructionText = "Try again. You got this.";
  }
  backgroundMusic.stop();
  fill(255);
  rect(100, 100, 500, 300);
  textSize(30);
  fill(37, 92, 17);
  if (this.score > 22000){
  text("Flawless!", 275, 150); } else if (this.score > 10500) {text("Great job!", 275, 150);}
  else if (this.score > 5750) {text("Not bad!", 175, 150);} else {text("Try again!", 175, 150);}
  fill(227, 252, 0);
  rect(150, 175, 150, 75);
  textSize(20);
  fill(0);

   text("Score:", 165, 195);
  text(this.score, 185, 215);
  
  if (this.best < this.score || this.best == 0){
    this.best = this.score;
  }
  text("Best: ", 165, 235);
  text(this.best, 225, 235);
  fill(47, 255, 0)
  rect(400, 175, 150, 75);
  fill(0);
  text("Click anywhere", 415, 195)
  text("to Replay!", 415, 215);
  this.replayCollison = collidePointRect(mouseX, mouseY, 400, 175, 150, 75);
  fill(118, 151, 222);
  rect(150, 300, 150, 75);
  fill(0);
  text("Back to menu", 165, 320);
  this.menuCollison = collidePointRect(mouseX, mouseY, 150, 300, 150, 75);
  fill(255, 196, 0);
  rect(400, 300, 150, 75);
  fill(0);
  textSize(15);

  text("TIME MACHINE 2", 415, 320);
  text("Credit goes", 415, 350);
  text("to Waterflame", 415, 370);
  }

 gamePaused(){
  fill(255);
  rect(100, 100, 500, 300);
  textSize(30);
  fill(37, 92, 17);
  text("Game paused", 275, 150);
  fill(227, 252, 0);
  rect(150, 175, 150, 75);
  textSize(20);
  fill(0);

   text("Score:", 165, 195);
  text(this.score, 185, 215);
  
//  if (best < score || best == 0){
//    best = score;
//  }
 // text("Best: ", 165, 235);
 // text(best, 225, 235);
  fill(47, 255, 0)
  rect(400, 175, 150, 75);
  fill(0);
  text("Click anywhere", 415, 195)
  text("to continue!", 415, 215);
  this.replayCollison = collidePointRect(mouseX, mouseY, 400, 175, 150, 75);
  fill(118, 151, 222);
  rect(150, 300, 150, 75);
  fill(0);
  text("Back to menu", 165, 320);
  this.menuCollison = collidePointRect(mouseX, mouseY, 150, 300, 150, 75);
  fill(255, 196, 0);
  rect(400, 300, 150, 75);
  fill(0);
  textSize(15);

  text("TIME MACHINE 2", 415, 320);
  text("Credit goes", 415, 350);
  text("to Waterflame", 415, 370);
  fill(72, 255, 0);
  }






 playerGuide(){
  text(this.instructionText, 10, 470);
  text("position the circle between the orange and green block! Drag your mouse to move", 10, 490);
  fill(3, 227, 252);
  text("Song: Time Machine 2 by Waterflame", 370, 465);
}

 createPlayer(){
    //player
  fill(66, 182, 245);
  stroke(0);
  circle(this.playerX, this.playerY, 20);
  this.playerX = mouseX;
  this.playerY = mouseY;
}

 gameTutorial(){
  fill(255, 238, 0);
  rect(50, 50, 600, 400);
  fill(0);
  textSize(30);
  text("How to play:", 275, 100);
  textSize(20);
  text("- Blue circle will follow your mouse wherever you go", 75, 125);
  text("- Click anywhere to begin playing", 75, 150);
  text("- Try to keep the circle between the orange and green block! ", 75, 175);
  text("- Stars indicate your performance. The more you get the better!", 75, 200);
  text("- Good luck, don't sweat it and have fun!", 75, 225);

}



 topBlock(){ //begin
    this.loseCollison =  collidePointRect(mouseX, mouseY, 0, 440, 11700, 200);
if((this.loseCollison) && (this.playerActive == 1))
  {this.score -= 1; this.counter = 0;}
  noStroke();
  fill(245, 179, 66); //top
  rect(0 + this.mazePos, 0, 1500, 30*4);
 this.loseCollison =  collidePointRect(mouseX, mouseY, 0 + this.mazePos, 0, 1500, 120);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(0 + this.mazePos, 30*4, 50*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 0 + this.mazePos, 30*4, 50*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(50*2 + this.mazePos, 30*4, 50*2 + this.mazePos, 40*4, 60*2 + this.mazePos, 30*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,50*2 + this.mazePos, 30*4, 50*2 + this.mazePos, 40*4, 60*2 + this.mazePos, 30*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(70*2 + this.mazePos, 30*4, 80*2 + this.mazePos, 30*4, 80*2 + this.mazePos, 40*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,70*2 + this.mazePos, 30*4, 80*2 + this.mazePos, 30*4, 80*2 + this.mazePos, 40*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  rect(120*2 + this.mazePos, 40*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 120*2 + this.mazePos, 40*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  rect(80*2 + this.mazePos,30*4,150*2,10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 80*2 + this.mazePos,30*4,150*2,10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}  
  triangle(230*2 + this.mazePos, 30*4, 230*2 + this.mazePos, 40*4, 240*2 + this.mazePos, 30*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,230*2 + this.mazePos, 30*4, 230*2 + this.mazePos, 40*4, 240*2 + this.mazePos, 30*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(250*2 + this.mazePos, 30*4, 260*2 + this.mazePos, 30*4, 260*2 + this.mazePos, 40*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,250*2 + this.mazePos, 30*4, 260*2 + this.mazePos, 30*4, 260*2 + this.mazePos, 40*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  rect(330*2 + this.mazePos, 40*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 330*2 + this.mazePos, 40*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  rect(260*2 + this.mazePos, 30*4, 150*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 260*2 + this.mazePos, 30*4, 150*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(410*2 + this.mazePos, 30*4, 410*2 + this.mazePos, 40*4, 420*2 + this.mazePos, 30*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  410*2 + this.mazePos, 30*4, 410*2 + this.mazePos, 40*4, 420*2 + this.mazePos, 30*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(430*2 + this.mazePos, 30*4, 440*2 + this.mazePos, 30*4, 440*2 + this.mazePos, 40*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,430*2 + this.mazePos, 30*4, 440*2 + this.mazePos, 30*4, 440*2 + this.mazePos, 40*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(500*2 + this.mazePos, 40*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 500*2 + this.mazePos, 40*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(440*2 + this.mazePos, 30*4, 140*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 440*2 + this.mazePos, 30*4, 140*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(580*2 + this.mazePos, 30*4, 590*2 + this.mazePos, 30*4, 580*2 + this.mazePos, 40*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  580*2 + this.mazePos, 30*4, 590*2 + this.mazePos, 30*4, 580*2 + this.mazePos, 40*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(600*2 + this.mazePos, 30*4, 610*2 + this.mazePos, 30*4, 610*2 + this.mazePos, 40*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  600*2 + this.mazePos, 30*4, 610*2 + this.mazePos, 30*4, 610*2 + this.mazePos, 40*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(610*2 + this.mazePos, 30*4, 140*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 610*2 + this.mazePos, 30*4, 140*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(640*2 + this.mazePos, 40*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 640*2 + this.mazePos, 40*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  
  
  
  
//maze
  rect(1500 + this.mazePos, 0, 1420, 40);
    this.loseCollison =  collidePointRect(mouseX, mouseY,1500 + this.mazePos, 0, 1500, 40);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(1800+this.mazePos, 40, 280, 150);
    this.loseCollison =  collidePointRect(mouseX, mouseY,1800+this.mazePos, 40, 280, 150);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}


rect(2360+this.mazePos, 40, 260, 150);
    this.loseCollison =  collidePointRect(mouseX, mouseY,2360+this.mazePos, 40, 260, 150);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

//rect(2920 + mazePos, 40, 80, 150);
 //   loseCollison =  collidePointRect(mouseX, mouseY,2920 + mazePos, 40, 80, 150);
//if ((loseCollison) && (playerActive == 1)){score -= 5; counter = 0;}
  
  
  
  
  
  
  
  //zigzag
triangle(2920 + this.mazePos, 0, 2920 + this.mazePos, 130, 3260 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,2920 + this.mazePos, 0, 2920 + this.mazePos, 130, 3260 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

triangle(3260 + this.mazePos, 0, 3600 + this.mazePos, 0, 3600 + this.mazePos, 130);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 3260 + this.mazePos, 0, 3600 + this.mazePos, 0, 3600 + this.mazePos, 130);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(3600 + this.mazePos, 0, 3600 + this.mazePos, 130, 3940 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,3600 + this.mazePos, 0, 3600 + this.mazePos, 130, 3940 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

triangle(3940 + this.mazePos, 0, 4280 + this.mazePos, 0, 4280 + this.mazePos, 130);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 3940 + this.mazePos, 0, 4280 + this.mazePos, 0, 4280 + this.mazePos, 130);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

triangle(4280 + this.mazePos, 0, 4280 + this.mazePos, 130, 4620 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,4280 + this.mazePos, 0, 4280 + this.mazePos, 130, 4620 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

triangle(4620 + this.mazePos, 0, 4960 + this.mazePos, 0, 4960 + this.mazePos, 130);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,4620 + this.mazePos, 0, 4960 + this.mazePos, 0, 4960 + this.mazePos, 130);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  
  
  
  
  
  
  //tunnel
  rect(4960 + this.mazePos, 0, 300, 130);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 4960 + this.mazePos, 0, 300, 130);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  
  
  
  
  
//pole
rect(5580 + this.mazePos, 0, 20, 190);
  this.loseCollison =  collidePointRect(mouseX, mouseY,5580 + this.mazePos, 0, 20, 190);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  

rect(5880 + this.mazePos, 0, 20, 310);
  this.loseCollison =  collidePointRect(mouseX, mouseY,5880 + this.mazePos, 0, 20, 310);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  

rect(6240 + this.mazePos, 0, 20, 190);
  this.loseCollison =  collidePointRect(mouseX, mouseY,6240 + this.mazePos, 0, 20, 190);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(6540 + this.mazePos, 0, 20, 150);
  this.loseCollison =  collidePointRect(mouseX, mouseY,6540 + this.mazePos, 0, 20, 150);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(6880 + this.mazePos, 0, 20, 30);
  this.loseCollison =  collidePointRect(mouseX, mouseY,6880 + this.mazePos, 0, 20, 30);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(7180 + this.mazePos, 0, 20, 150);
  this.loseCollison =  collidePointRect(mouseX, mouseY,7180 + this.mazePos, 0, 20, 150);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(7560 + this.mazePos, 0, 20, 300);
  this.loseCollison =  collidePointRect(mouseX, mouseY,7560 + this.mazePos, 0, 20, 300);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(5260 + this.mazePos, 0, 2300, 20);
    this.loseCollison =  collidePointRect(mouseX, mouseY,5260 + this.mazePos, 0, 2300, 20);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  
  
  
  
  
  
  //shrinking tunnel
  rect(7560 + this.mazePos, 0, 680, 20);
    this.loseCollison =  collidePointRect(mouseX, mouseY,7560 + this.mazePos, 0, 680, 20);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(8240 + this.mazePos, 0, 420, 120);
    this.loseCollison =  collidePointRect(mouseX, mouseY,8240 + this.mazePos, 0, 420, 120);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(8660 + this.mazePos, 0, 320, 170);
      this.loseCollison =  collidePointRect(mouseX, mouseY,8660 + this.mazePos, 0, 320, 170);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  
  
  
  
  
  
    //more poles
  rect(8980 + this.mazePos, 0, 2760, 20);
        this.loseCollison =  collidePointRect(mouseX, mouseY,8980 + this.mazePos, 0, 2700, 20);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(9120 + this.mazePos, 0, 20, 80);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9120 + this.mazePos, 0, 20, 80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(9260 + this.mazePos, 0, 20, 160);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9260 + this.mazePos, 0, 20, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9400 + this.mazePos, 0, 20, 200);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9400 + this.mazePos, 0, 20, 200);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9540 + this.mazePos, 0, 20, 160);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9540 + this.mazePos, 0, 20, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9680 + this.mazePos, 0, 20, 80);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9680 + this.mazePos, 0, 20, 80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9820 + this.mazePos, 0, 20, 160);
      this.loseCollison =  collidePointRect(mouseX, mouseY,9820 + this.mazePos, 0, 20, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
      rect(9960 + this.mazePos, 0, 20, 200);
      this.loseCollison =  collidePointRect(mouseX, mouseY,9960 + this.mazePos, 0, 20, 200);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
      rect(10100 + this.mazePos, 0, 20, 300);
      this.loseCollison =  collidePointRect(mouseX, mouseY,10100 + this.mazePos, 0, 20, 300);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  
  
  
  
  
  //zigzag (final part)
    triangle(10420 + this.mazePos, 220, 10560 + this.mazePos, 0, 10420 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,10420 + this.mazePos, 220, 10560 + this.mazePos, 0, 10420 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    triangle(10560 + this.mazePos, 0, 10700 + this.mazePos, 0, 10700 + this.mazePos, 220);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,10560 + this.mazePos, 0, 10700 + this.mazePos, 0, 10700 + this.mazePos, 220);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  triangle(10700 + this.mazePos, 0, 10700 + this.mazePos, 220, 10900 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,10700 + this.mazePos, 0, 10700 + this.mazePos, 220, 10900 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(10900 + this.mazePos, 0, 11100 + this.mazePos, 0, 11100 + this.mazePos, 220);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,10900 + this.mazePos, 0, 11100 + this.mazePos, 0, 11100 + this.mazePos, 220);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(11280 + this.mazePos, 0, 11460 + this.mazePos, 220, 11460 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 11280 + this.mazePos, 0, 11460 + this.mazePos, 220, 11460 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(11100 + this.mazePos, 0, 11100 + this.mazePos, 220, 11280 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,11100 + this.mazePos, 0, 11100 + this.mazePos, 220, 11280 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(11460 + this.mazePos, 0, 11460 + this.mazePos, 220, 11600 + this.mazePos, 0);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 11460 + this.mazePos, 0, 11460 + this.mazePos, 220, 11600 + this.mazePos, 0);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    triangle(11600 + this.mazePos, 0, 11740 + this.mazePos, 0, 11740 + this.mazePos, 220);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 11600 + this.mazePos, 0, 11740 + this.mazePos, 0, 11740 + this.mazePos, 220);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
}




 bottomBlock(){ //begin
  fill(84, 245, 66); //bottom
  rect(0 + this.mazePos, 80*4, 750*2, 30*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 0 + this.mazePos, 80*4, 750*2, 30*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(0 + this.mazePos, 70*4, 50*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 0 + this.mazePos, 70*4, 50*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(50*2 + this.mazePos, 70*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 50*2 + this.mazePos, 70*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(50*2 + this.mazePos, 70*4, 60*2 + this.mazePos, 70*4, 60*2 + this.mazePos, 60*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  50*2 + this.mazePos, 70*4, 60*2 + this.mazePos, 70*4, 60*2 + this.mazePos, 60*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(70*2 + this.mazePos, 60*4, 70*2 + this.mazePos, 70*4, 80*2 + this.mazePos, 70*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  70*2 + this.mazePos, 60*4, 70*2 + this.mazePos, 70*4, 80*2 + this.mazePos, 70*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}  
  rect(60*2 + this.mazePos, 60*4, 10*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 60*2 + this.mazePos, 60*4, 10*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(80*2 + this.mazePos, 70*4, 40*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 80*2 + this.mazePos, 70*4, 40*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(120*2 + this.mazePos, 70*4, 120*2 + this.mazePos, 80*4, 130*2 + this.mazePos, 80*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  120*2 + this.mazePos, 70*4, 120*2 + this.mazePos, 80*4, 130*2 + this.mazePos, 80*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(140*2 + this.mazePos, 80*4, 150*2 + this.mazePos, 80*4, 150*2 + this.mazePos, 70*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  140*2 + this.mazePos, 80*4, 150*2 + this.mazePos, 80*4, 150*2 + this.mazePos, 70*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(150*2 + this.mazePos, 70*4, 180*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 150*2 + this.mazePos, 70*4, 180*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(230*2 + this.mazePos, 60*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 230*2 + this.mazePos, 60*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(330*2 + this.mazePos, 70*4, 330*2 + this.mazePos, 4*80, 2*340 + this.mazePos, 4*80);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  330*2 + this.mazePos, 70*4, 330*2 + this.mazePos, 4*80, 2*340 + this.mazePos, 4*80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(350*2 + this.mazePos, 80*4, 360*2 + this.mazePos, 80*4, this.mazePos + 360*2, 70*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  350*2 + this.mazePos, 80*4, 360*2 + this.mazePos, 80*4, this.mazePos + 360*2, 70*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(360*2 + this.mazePos, 70*4, 140*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 360*2 + this.mazePos, 70*4, 140*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(410*2 + this.mazePos, 60*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 410*2 + this.mazePos, 60*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}

  triangle(500*2 + this.mazePos, 70*4, 500*2 + this.mazePos, 80*4, 510*2 + this.mazePos, 80*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  500*2 + this.mazePos, 70*4, 500*2 + this.mazePos, 80*4, 510*2 + this.mazePos, 80*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  triangle(520*2 + this.mazePos, 80*4, 530*2 + this.mazePos, 80*4, 530*2 + this.mazePos, 70*4); 
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  520*2 + this.mazePos, 80*4, 530*2 + this.mazePos, 80*4, 530*2 + this.mazePos, 70*4); 
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(530*2 + this.mazePos, 70*4, 110*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 530*2 + this.mazePos, 70*4, 110*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(580*2 + this.mazePos, 60*4, 30*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 580*2 + this.mazePos, 60*4, 30*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(640*2 + this.mazePos, 70*4, 640*2 + this.mazePos, 80*4, 650*2 + this.mazePos, 80*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  640*2 + this.mazePos, 70*4, 640*2 + this.mazePos, 80*4, 650*2 + this.mazePos, 80*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  triangle(660*2 + this.mazePos, 80*4, 670*2 + this.mazePos, 80*4, 670*2 + this.mazePos, 70*4);
  this.loseCollison = collidePointTriangle(mouseX, mouseY,  660*2 + this.mazePos, 80*4, 670*2 + this.mazePos, 80*4, 670*2 + this.mazePos, 70*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(670*2 + this.mazePos, 70*4, 80*2, 10*4);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 670*2 + this.mazePos, 70*4, 80*2, 10*4);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}




//maze
  rect(1500 + this.mazePos, 280, 1420, 160);
  this.loseCollison =  collidePointRect(mouseX, mouseY,1500 + this.mazePos, 280, 1420, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}


rect(1600 + this.mazePos, 120, 80, 160);
    this.loseCollison =  collidePointRect(mouseX, mouseY,1600 + this.mazePos, 120, 80, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
rect(2190 + this.mazePos, 120, 80, 160);
    this.loseCollison =  collidePointRect(mouseX, mouseY,2190 + this.mazePos, 120, 80, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
rect(2740 + this.mazePos, 120, 80, 160);
      this.loseCollison =  collidePointRect(mouseX, mouseY,2740 + this.mazePos, 120, 80, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}




//zigzag
triangle(2920 + this.mazePos, 280, 3260 + this.mazePos, 280, 3260 + this.mazePos, 110);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,  2920 + this.mazePos, 280, 3260 + this.mazePos, 280, 3260 + this.mazePos, 110);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(3260 + this.mazePos, 280, 3260 + this.mazePos, 110, 3600 + this.mazePos, 280);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,  3260 + this.mazePos, 280, 3260 + this.mazePos, 110, 3600 + this.mazePos, 280);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(3600 + this.mazePos, 280, 3940 + this.mazePos, 280, 3940 + this.mazePos, 110);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,  3600 + this.mazePos, 280, 3940 + this.mazePos, 280, 3940 + this.mazePos, 110);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(3940 + this.mazePos, 280, 3940 + this.mazePos, 110, 4280 + this.mazePos, 280);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,  3940 + this.mazePos, 280, 3940 + this.mazePos, 110, 4280 + this.mazePos, 280);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}


triangle(4280 + this.mazePos, 280, 4620 + this.mazePos, 280, 4620 + this.mazePos, 110);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,4280 + this.mazePos, 280, 4620 + this.mazePos, 280, 4620 + this.mazePos, 110);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(4620 + this.mazePos, 280, 4620 + this.mazePos, 110, 4960 + this.mazePos, 280);
    this.loseCollison = collidePointTriangle(mouseX, mouseY,4620 + this.mazePos, 280, 4620 + this.mazePos, 110, 4960 + this.mazePos, 280);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(2920 + this.mazePos, 280, 2040, 160);
      this.loseCollison =  collidePointRect(mouseX, mouseY,2920 + this.mazePos, 280, 2040, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}



//tunnel
rect(4960 + this.mazePos, 280, 300, 160);
  this.loseCollison =  collidePointRect(mouseX, mouseY, 4960 + this.mazePos, 280, 300, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
//pole
rect(5580 + this.mazePos, 240, 20, 200);
  this.loseCollison =  collidePointRect(mouseX, mouseY,5580 + this.mazePos, 240, 20, 200);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  

rect(5880 + this.mazePos, 360, 20, 80);
  this.loseCollison =  collidePointRect(mouseX, mouseY,5880 + this.mazePos, 360, 20, 80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  

rect(6240 + this.mazePos, 240, 20, 200);
  this.loseCollison =  collidePointRect(mouseX, mouseY,6240 + this.mazePos, 240, 20, 200);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(6540 + this.mazePos, 200, 20, 240);
  this.loseCollison =  collidePointRect(mouseX, mouseY,6540 + this.mazePos, 240, 20, 200);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(6880 + this.mazePos, 80, 20, 360);
  this.loseCollison =  collidePointRect(mouseX, mouseY,6880 + this.mazePos, 80, 20, 360);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(7180 + this.mazePos, 240, 20, 200);
  this.loseCollison =  collidePointRect(mouseX, mouseY,7180 + this.mazePos, 240, 20, 200);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(7560 + this.mazePos, 360, 20, 80);
  this.loseCollison =  collidePointRect(mouseX, mouseY,7560 + this.mazePos, 360, 20, 80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(5260 + this.mazePos, 420, 2300, 20);
    this.loseCollison =  collidePointRect(mouseX, mouseY,5260 + this.mazePos, 420, 2300, 20);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  //shrinking tunnel
  
    rect(7560 + this.mazePos, 420, 680, 20);
    this.loseCollison =  collidePointRect(mouseX, mouseY,7560 + this.mazePos, 420, 680, 20);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  
    rect(8240 + this.mazePos, 320, 420, 120);
    this.loseCollison =  collidePointRect(mouseX, mouseY,8240 + this.mazePos, 320, 420, 120);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}  
  
    rect(8660 + this.mazePos, 270, 320, 170);
    this.loseCollison =  collidePointRect(mouseX, mouseY,8660 + this.mazePos, 270, 320, 170);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}  
  
  
  
  
  
    //more poles
  rect(8980 + this.mazePos, 420, 2760, 20);
        this.loseCollison =  collidePointRect(mouseX, mouseY,8980 + this.mazePos, 420, 2700, 20);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(9120 + this.mazePos, 340, 20, 80);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9120 + this.mazePos, 340, 20, 80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
  rect(9260 + this.mazePos, 260, 20, 160);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9260 + this.mazePos, 260, 20, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9400 + this.mazePos, 240, 20, 180);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9400 + this.mazePos, 240, 20, 180);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9540 + this.mazePos, 260, 20, 160);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9540 + this.mazePos, 260, 20, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9680 + this.mazePos, 340, 20, 80);
        this.loseCollison =  collidePointRect(mouseX, mouseY,9680 + this.mazePos, 340, 20, 80);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
    rect(9820 + this.mazePos, 260, 20, 160);
      this.loseCollison =  collidePointRect(mouseX, mouseY,9820 + this.mazePos, 260, 20, 160);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
      rect(9960 + this.mazePos, 240, 20, 180);
      this.loseCollison =  collidePointRect(mouseX, mouseY,9960 + this.mazePos, 240, 20, 180);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  

  
  
  
  
  //zigzag (final part)
  
  triangle(10420 + this.mazePos, 420, 10560 + this.mazePos, 220, 10700 + this.mazePos, 420);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 10420 + this.mazePos, 420, 10560 + this.mazePos, 220, 10700 + this.mazePos, 420);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(10700 + this.mazePos, 420, 10900 + this.mazePos, 220, 11100 + this.mazePos, 420);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 10700 + this.mazePos, 420, 10900 + this.mazePos, 220, 11100 + this.mazePos, 420);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(11100 + this.mazePos, 420, 11280 + this.mazePos, 220, 11460 + this.mazePos, 420);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 11100 + this.mazePos, 420, 11280 + this.mazePos, 220, 11460 + this.mazePos, 420);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
  
triangle(11460 + this.mazePos, 420, 11600 + this.mazePos, 220, 11740 + this.mazePos, 420);
    this.loseCollison = collidePointTriangle(mouseX, mouseY, 11460 + this.mazePos, 420, 11600 + this.mazePos, 220, 11740 + this.mazePos, 420);
if ((this.loseCollison) && (this.playerActive == 1))
{this.score -= 1; this.counter = 0;}
}
  
}