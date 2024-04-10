var playerX = 0;
var playerY = 0;
let instructionText;
var playerActive; //0 means stop, 1 means playing, 2 means paused. 
var mazePos = 0;
var winCollison;
var loseCollison;
var replayCollison;
var menuCollison;
var score = 0;
var dscore = 1;
var best = 0;
var multiplier = 1;
var counter = 0;

 function preload(){ //loadmusic
  soundFormats("mp3");
  backgroundMusic = loadSound("1168412-Time-Machine-2.mp3");
}

function setup() {
  playerActive = 0;
  dscore = 1;
  createCanvas(700, 500);
  winCollison = false;
  loseCollison = false;


}

function draw() {

  
  background(100);
  textSize(20);
  fill(60, 255, 0);



  if (playerActive == 0){ //startPos
    instructionText = "Click to begin!";
    dscore = 1;
    score = 0;
    backgroundMusic.stop();
    mazePos = 0;
  } else if (playerActive == 1) { //playing
    instructionText = "press r to restart, p or click to pause";
    mazePos -= 3.8;
    score += dscore*multiplier;
    
    if(playerActive == 1){
      counter += 10;
    }



    
    fill(47, 255, 0);
 //  a.position(0, 1000);
  //  b.position(0, 1000);
    if (backgroundMusic.isPlaying() == false){
    backgroundMusic.play(); 

}
  } else if (playerActive == 2){ //paused
    instructionText = "Click to continue playing!";
    backgroundMusic.pause();
  } 
  
winCollison = collidePointLine(mouseX, mouseY, 100000+mazePos, 0, 100000 + mazePos, 500);
//  winCollison = collidePointLine(mouseX, mouseY, 7560 + mazePos, 0, 7560 + mazePos, 500);

 
  
  playerGuide();
  
  createPlayer();

  

  
  //creating the blocks
  topBlock();
  fill(0);
  text("press esc at any time to return to menu", 10, 30);

  bottomBlock();
  if (winCollison && playerActive != 3){
    playerActive = 3;
   // playerTime = millis();
  }
  fill(0);
    text("score: ", 500, 50);
  text(score, 600, 50);
  text("x", 500, 100);
  text(multiplier, 515, 100);
  
   if (playerActive == 3){
    victoryRoyale();
  } 
  
  
  
  
  
    if (counter >= 10000){
      multiplier = 10;  
      fill(0);
      text("MAX", 600, 100);
    } else if (counter >= 6000){
      multiplier = 4;
     // text((int)((counter - 6000)/40), 600, 100);
     // text("%", 650, 100);
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      noStroke();
      fill(0);
      rect(550, 80, (counter - 6000)/40 ,25);
    } else if (counter >= 3000){
      multiplier = 3;
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      noStroke();
      fill(0);
      rect(550, 80, (counter - 3000)/30 ,25);
    } else if (counter >= 1000){
      multiplier = 2;
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      noStroke();
      fill(0);
      rect(550, 80, (counter-1000)/20 ,25);
    } else if (counter < 1000){
      noFill();
      stroke(0);
      rect(550, 80, 100, 25);
      multiplier = 1;
      noStroke();
      fill(0);
      rect(550, 80, counter/10 ,25);
    }

}

function mouseClicked(){ //music
if(playerActive == 0){
  score = 0;
  dscore = 1;
  playerActive = 1; //1 = game is playing
} else if (playerActive == 1){
  playerActive = 2;
} else if (playerActive == 2){
  playerActive = 1;
} else if (playerActive == 3 && !menuCollison){
  playerActive = 0;
}
 // attempt++;

  
if (menuCollison){
  returnToMenu();
}

}
  
function keyPressed(){
  if (keyCode === ESCAPE){
    //FIXME: make the game returns to the level selection screen. 
    returnToMenu();
  }
}
function keyTyped() {
  if (key === 'r'){

    playerActive = 0;
    counter = 0;
    //attempt++;
  } else if (key === 'p' && playerActive != 3 && playerActive != 0){
    playerActive = 2;

  }
}
function returnToMenu(){
  //FIXME: adds a return to menu func. 
}
function victoryRoyale(){
  if(score > 0){
    instructionText = "You won! Press r to restart, esc to exit";
  } else {
    instructionText = "Try again. You got this.";
  }
  backgroundMusic.stop();
  fill(255);
  rect(100, 100, 500, 300);
  textSize(30);
  fill(37, 92, 17);
  if (score > 0){
  text("You won!", 275, 150); } else {text("Try again", 275, 150);}
  fill(227, 252, 0);
  rect(150, 175, 150, 75);
  textSize(20);
  fill(0);

   text("Score:", 165, 195);
  text(score, 185, 215);
  
  if (best < score || best == 0){
    best = score;
  }
  text("Best: ", 165, 235);
  text(best, 225, 235);
  fill(47, 255, 0)
  rect(400, 175, 150, 75);
  fill(0);
  text("Click anywhere", 415, 195)
  text("to Replay!", 415, 215);
  replayCollison = collidePointRect(mouseX, mouseY, 400, 175, 150, 75);
  fill(118, 151, 222);
  rect(150, 300, 150, 75);
  fill(0);
  text("Back to menu", 165, 320);
  menuCollison = collidePointRect(mouseX, mouseY, 150, 300, 150, 75);
  fill(255, 196, 0);
  rect(400, 300, 150, 75);
  fill(0);
  textSize(15);

  text("TIME MACHINE 2", 415, 320);
  text("Credit goes", 415, 350);
  text("to Waterflame", 415, 370);
  }



function playerGuide(){
  text(instructionText, 10, 470);
  text("position the circle between the orange and green block! Drag your mouse to move", 10, 490);
  fill(3, 227, 252);
  text("Song: Time Machine 2 by Waterflame", 370, 465);
}

function createPlayer(){
    //player
  fill(66, 182, 245);
  stroke(0);
  circle(playerX, playerY, 20);
  playerX = mouseX;
  playerY = mouseY;
}































function topBlock(){ //begin
    loseCollison =  collidePointRect(mouseX, mouseY, 0, 400, 10000, 200);
if((loseCollison) && (playerActive == 1))
  {score -= 5; counter = 0;}
  noStroke();
  fill(245, 179, 66); //top
  rect(0 + mazePos, 0, 1500, 30*4);
 loseCollison =  collidePointRect(mouseX, mouseY, 0 + mazePos, 0, 1500, 120);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(0 + mazePos, 30*4, 50*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 0 + mazePos, 30*4, 50*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(50*2 + mazePos, 30*4, 50*2 + mazePos, 40*4, 60*2 + mazePos, 30*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,50*2 + mazePos, 30*4, 50*2 + mazePos, 40*4, 60*2 + mazePos, 30*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(70*2 + mazePos, 30*4, 80*2 + mazePos, 30*4, 80*2 + mazePos, 40*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,70*2 + mazePos, 30*4, 80*2 + mazePos, 30*4, 80*2 + mazePos, 40*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

  rect(120*2 + mazePos, 40*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 120*2 + mazePos, 40*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

  rect(80*2 + mazePos,30*4,150*2,10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 80*2 + mazePos,30*4,150*2,10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}  
  triangle(230*2 + mazePos, 30*4, 230*2 + mazePos, 40*4, 240*2 + mazePos, 30*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,230*2 + mazePos, 30*4, 230*2 + mazePos, 40*4, 240*2 + mazePos, 30*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(250*2 + mazePos, 30*4, 260*2 + mazePos, 30*4, 260*2 + mazePos, 40*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,250*2 + mazePos, 30*4, 260*2 + mazePos, 30*4, 260*2 + mazePos, 40*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

  rect(330*2 + mazePos, 40*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 330*2 + mazePos, 40*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  rect(260*2 + mazePos, 30*4, 150*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 260*2 + mazePos, 30*4, 150*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(410*2 + mazePos, 30*4, 410*2 + mazePos, 40*4, 420*2 + mazePos, 30*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  410*2 + mazePos, 30*4, 410*2 + mazePos, 40*4, 420*2 + mazePos, 30*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(430*2 + mazePos, 30*4, 440*2 + mazePos, 30*4, 440*2 + mazePos, 40*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,430*2 + mazePos, 30*4, 440*2 + mazePos, 30*4, 440*2 + mazePos, 40*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(500*2 + mazePos, 40*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 500*2 + mazePos, 40*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(440*2 + mazePos, 30*4, 140*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 440*2 + mazePos, 30*4, 140*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(580*2 + mazePos, 30*4, 590*2 + mazePos, 30*4, 580*2 + mazePos, 40*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  580*2 + mazePos, 30*4, 590*2 + mazePos, 30*4, 580*2 + mazePos, 40*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(600*2 + mazePos, 30*4, 610*2 + mazePos, 30*4, 610*2 + mazePos, 40*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  600*2 + mazePos, 30*4, 610*2 + mazePos, 30*4, 610*2 + mazePos, 40*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(610*2 + mazePos, 30*4, 140*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 610*2 + mazePos, 30*4, 140*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(640*2 + mazePos, 40*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 640*2 + mazePos, 40*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1)){score -= 5; counter = 0;}
  
  
  
  
  
//maze
  rect(1500 + mazePos, 0, 1420, 40);
    loseCollison =  collidePointRect(mouseX, mouseY,1500 + mazePos, 0, 1500, 40);
if ((loseCollison) && (playerActive == 1)){score -= 5; counter = 0;}
  
  rect(1800+mazePos, 40, 280, 150);
    loseCollison =  collidePointRect(mouseX, mouseY,1800+mazePos, 40, 280, 150);
if ((loseCollison) && (playerActive == 1)){score -= 5; counter = 0;}


rect(2360+mazePos, 40, 260, 150);
    loseCollison =  collidePointRect(mouseX, mouseY,2360+mazePos, 40, 260, 150);
if ((loseCollison) && (playerActive == 1)){score -= 5; counter = 0;}

//rect(2920 + mazePos, 40, 80, 150);
 //   loseCollison =  collidePointRect(mouseX, mouseY,2920 + mazePos, 40, 80, 150);
//if ((loseCollison) && (playerActive == 1)){score -= 5; counter = 0;}
  
  
  
  
  //zigzag
triangle(2920 + mazePos, 0, 2920 + mazePos, 130, 3260 + mazePos, 0);
    loseCollison = collidePointTriangle(mouseX, mouseY,2920 + mazePos, 0, 2920 + mazePos, 130, 3260 + mazePos, 0);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

triangle(3260 + mazePos, 0, 3600 + mazePos, 0, 3600 + mazePos, 130);
    loseCollison = collidePointTriangle(mouseX, mouseY, 3260 + mazePos, 0, 3600 + mazePos, 0, 3600 + mazePos, 130);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
triangle(3600 + mazePos, 0, 3600 + mazePos, 130, 3940 + mazePos, 0);
    loseCollison = collidePointTriangle(mouseX, mouseY,3600 + mazePos, 0, 3600 + mazePos, 130, 3940 + mazePos, 0);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

triangle(3940 + mazePos, 0, 4280 + mazePos, 0, 4280 + mazePos, 130);
    loseCollison = collidePointTriangle(mouseX, mouseY, 3940 + mazePos, 0, 4280 + mazePos, 0, 4280 + mazePos, 130);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

triangle(4280 + mazePos, 0, 4280 + mazePos, 130, 4620 + mazePos, 0);
    loseCollison = collidePointTriangle(mouseX, mouseY,4280 + mazePos, 0, 4280 + mazePos, 130, 4620 + mazePos, 0);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

triangle(4620 + mazePos, 0, 4960 + mazePos, 0, 4960 + mazePos, 130);
    loseCollison = collidePointTriangle(mouseX, mouseY,4620 + mazePos, 0, 4960 + mazePos, 0, 4960 + mazePos, 130);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

  
  
  
  //tunnel
  rect(4960 + mazePos, 0, 300, 130);
  loseCollison =  collidePointRect(mouseX, mouseY, 4960 + mazePos, 0, 300, 130);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
//pole
rect(5580 + mazePos, 0, 20, 190);
  loseCollison =  collidePointRect(mouseX, mouseY,5580 + mazePos, 0, 20, 190);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  

rect(5880 + mazePos, 0, 20, 310);
  loseCollison =  collidePointRect(mouseX, mouseY,5880 + mazePos, 0, 20, 310);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  

rect(6240 + mazePos, 0, 20, 190);
  loseCollison =  collidePointRect(mouseX, mouseY,6240 + mazePos, 0, 20, 190);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(6540 + mazePos, 0, 20, 150);
  loseCollison =  collidePointRect(mouseX, mouseY,6240 + mazePos, 0, 20, 150);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
    rect(6880 + mazePos, 0, 20, 30);
  loseCollison =  collidePointRect(mouseX, mouseY,6880 + mazePos, 0, 20, 30);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
    rect(7180 + mazePos, 0, 20, 150);
  loseCollison =  collidePointRect(mouseX, mouseY,7180 + mazePos, 0, 20, 150);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
    rect(7560 + mazePos, 0, 20, 300);
  loseCollison =  collidePointRect(mouseX, mouseY,7560 + mazePos, 0, 20, 300);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(5260 + mazePos, 0, 2300, 20);
    loseCollison =  collidePointRect(mouseX, mouseY,5260 + mazePos, 0, 2300, 20);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
}






















function bottomBlock(){ //begin
  fill(84, 245, 66); //bottom
  rect(0 + mazePos, 80*4, 750*2, 30*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 0 + mazePos, 80*4, 750*2, 30*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(0 + mazePos, 70*4, 50*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 0 + mazePos, 70*4, 50*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(50*2 + mazePos, 70*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 50*2 + mazePos, 70*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(50*2 + mazePos, 70*4, 60*2 + mazePos, 70*4, 60*2 + mazePos, 60*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  50*2 + mazePos, 70*4, 60*2 + mazePos, 70*4, 60*2 + mazePos, 60*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(70*2 + mazePos, 60*4, 70*2 + mazePos, 70*4, 80*2 + mazePos, 70*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  70*2 + mazePos, 60*4, 70*2 + mazePos, 70*4, 80*2 + mazePos, 70*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}  
  rect(60*2 + mazePos, 60*4, 10*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 60*2 + mazePos, 60*4, 10*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(80*2 + mazePos, 70*4, 40*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 80*2 + mazePos, 70*4, 40*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(120*2 + mazePos, 70*4, 120*2 + mazePos, 80*4, 130*2 + mazePos, 80*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  120*2 + mazePos, 70*4, 120*2 + mazePos, 80*4, 130*2 + mazePos, 80*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(140*2 + mazePos, 80*4, 150*2 + mazePos, 80*4, 150*2 + mazePos, 70*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  140*2 + mazePos, 80*4, 150*2 + mazePos, 80*4, 150*2 + mazePos, 70*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(150*2 + mazePos, 70*4, 180*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 150*2 + mazePos, 70*4, 180*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(230*2 + mazePos, 60*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 230*2 + mazePos, 60*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(330*2 + mazePos, 70*4, 330*2 + mazePos, 4*80, 2*340 + mazePos, 4*80);
  loseCollison = collidePointTriangle(mouseX, mouseY,  330*2 + mazePos, 70*4, 330*2 + mazePos, 4*80, 2*340 + mazePos, 4*80);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(350*2 + mazePos, 80*4, 360*2 + mazePos, 80*4, mazePos + 360*2, 70*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  350*2 + mazePos, 80*4, 360*2 + mazePos, 80*4, mazePos + 360*2, 70*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(360*2 + mazePos, 70*4, 140*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 360*2 + mazePos, 70*4, 140*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(410*2 + mazePos, 60*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 410*2 + mazePos, 60*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}

  triangle(500*2 + mazePos, 70*4, 500*2 + mazePos, 80*4, 510*2 + mazePos, 80*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  500*2 + mazePos, 70*4, 500*2 + mazePos, 80*4, 510*2 + mazePos, 80*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  triangle(520*2 + mazePos, 80*4, 530*2 + mazePos, 80*4, 530*2 + mazePos, 70*4); 
  loseCollison = collidePointTriangle(mouseX, mouseY,  520*2 + mazePos, 80*4, 530*2 + mazePos, 80*4, 530*2 + mazePos, 70*4); 
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(530*2 + mazePos, 70*4, 110*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 530*2 + mazePos, 70*4, 110*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(580*2 + mazePos, 60*4, 30*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 580*2 + mazePos, 60*4, 30*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(640*2 + mazePos, 70*4, 640*2 + mazePos, 80*4, 650*2 + mazePos, 80*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  640*2 + mazePos, 70*4, 640*2 + mazePos, 80*4, 650*2 + mazePos, 80*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  triangle(660*2 + mazePos, 80*4, 670*2 + mazePos, 80*4, 670*2 + mazePos, 70*4);
  loseCollison = collidePointTriangle(mouseX, mouseY,  660*2 + mazePos, 80*4, 670*2 + mazePos, 80*4, 670*2 + mazePos, 70*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(670*2 + mazePos, 70*4, 80*2, 10*4);
  loseCollison =  collidePointRect(mouseX, mouseY, 670*2 + mazePos, 70*4, 80*2, 10*4);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}




//maze
  rect(1500 + mazePos, 280, 1420, 160);
  loseCollison =  collidePointRect(mouseX, mouseY,1500 + mazePos, 280, 1420, 160);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}


rect(1600 + mazePos, 120, 80, 160);
    loseCollison =  collidePointRect(mouseX, mouseY,1600 + mazePos, 120, 80, 160);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
rect(2190 + mazePos, 120, 80, 160);
    loseCollison =  collidePointRect(mouseX, mouseY,2190 + mazePos, 120, 80, 160);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
rect(2740 + mazePos, 120, 80, 160);
      loseCollison =  collidePointRect(mouseX, mouseY,2740 + mazePos, 120, 80, 160);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}




//zigzag
triangle(2920 + mazePos, 280, 3260 + mazePos, 280, 3260 + mazePos, 110);
    loseCollison = collidePointTriangle(mouseX, mouseY,  2920 + mazePos, 280, 3260 + mazePos, 280, 3260 + mazePos, 110);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
triangle(3260 + mazePos, 280, 3260 + mazePos, 110, 3600 + mazePos, 280);
    loseCollison = collidePointTriangle(mouseX, mouseY,  3260 + mazePos, 280, 3260 + mazePos, 110, 3600 + mazePos, 280);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
triangle(3600 + mazePos, 280, 3940 + mazePos, 280, 3940 + mazePos, 110);
    loseCollison = collidePointTriangle(mouseX, mouseY,  3600 + mazePos, 280, 3940 + mazePos, 280, 3940 + mazePos, 110);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
triangle(3940 + mazePos, 280, 3940 + mazePos, 110, 4280 + mazePos, 280);
    loseCollison = collidePointTriangle(mouseX, mouseY,  3940 + mazePos, 280, 3940 + mazePos, 110, 4280 + mazePos, 280);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}


triangle(4280 + mazePos, 280, 4620 + mazePos, 280, 4620 + mazePos, 110);
    loseCollison = collidePointTriangle(mouseX, mouseY,4280 + mazePos, 280, 4620 + mazePos, 280, 4620 + mazePos, 110);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
triangle(4620 + mazePos, 280, 4620 + mazePos, 110, 4960 + mazePos, 280);
    loseCollison = collidePointTriangle(mouseX, mouseY,4620 + mazePos, 280, 4620 + mazePos, 110, 4960 + mazePos, 280);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(2920 + mazePos, 280, 2040, 160);
      loseCollison =  collidePointRect(mouseX, mouseY,2920 + mazePos, 280, 2040, 160);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}



//tunnel
rect(4960 + mazePos, 280, 300, 160);
  loseCollison =  collidePointRect(mouseX, mouseY, 4960 + mazePos, 280, 300, 160);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
//pole
rect(5580 + mazePos, 240, 20, 200);
  loseCollison =  collidePointRect(mouseX, mouseY,5580 + mazePos, 240, 20, 200);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  

rect(5880 + mazePos, 360, 20, 80);
  loseCollison =  collidePointRect(mouseX, mouseY,5880 + mazePos, 360, 20, 80);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  

rect(6240 + mazePos, 240, 20, 200);
  loseCollison =  collidePointRect(mouseX, mouseY,6240 + mazePos, 240, 20, 200);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(6540 + mazePos, 200, 20, 240);
  loseCollison =  collidePointRect(mouseX, mouseY,6240 + mazePos, 240, 20, 200);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
    rect(6880 + mazePos, 80, 20, 360);
  loseCollison =  collidePointRect(mouseX, mouseY,6880 + mazePos, 80, 20, 360);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
    rect(7180 + mazePos, 240, 20, 200);
  loseCollison =  collidePointRect(mouseX, mouseY,7180 + mazePos, 240, 20, 200);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
    rect(7560 + mazePos, 360, 20, 80);
  loseCollison =  collidePointRect(mouseX, mouseY,7560 + mazePos, 360, 20, 80);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
  
  rect(5260 + mazePos, 420, 2300, 20);
    loseCollison =  collidePointRect(mouseX, mouseY,5260 + mazePos, 420, 2300, 20);
if ((loseCollison) && (playerActive == 1))
{score -= 5; counter = 0;}
}