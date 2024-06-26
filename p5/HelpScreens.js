class TwisterHelp{
    draw() {
        fill(0);
        strokeWeight(0);
        textSize(20);
        textAlign(LEFT, CENTER);
        text("How to play Twister!", 10, height/3 - 30);
        
        textSize(15);
        text(
            "       Twister is a very simple game, simply place your fingers on the circles\n" + 
            "and don't let go! The more fingers you have placed on each button, the\n" +
            "faster your score increases! With 3 fingers, you will get x3 Score. Finally,\n" +
            "one you hit 1,000 points total, you win!\n\n" +
            
            "Extra challenges: \n" +
            "     - Try incorporating your thumb or pinky\n" +
            "     - Try to never let a circle turn red\n"
            
            , 10, height/2);
            
            textAlign(RIGHT);
            text('Main Menu', 479, 30);
        }

    mouseClicked() {
        if ((mouseX < 479 && mouseX > 430) && (mouseY > 15 && mouseY < 35)) {
            currProgram = 0;
        }
    }
}

class SmallButtonsHelp {
    draw() {
        fill(0);
        strokeWeight(0);
        textSize(20);
        textAlign(LEFT, CENTER);
        text("How to play Small Buttons!", 10, height/3 - 30);
        
        textSize(15);
        text(
            "Small Buttons is a very simple game,\nsimply tap your fingers on the buttons\n" + 
            "before they fly away!\nClick all 10 and YOU WIN!\n"
            
            , 10, height/2);    
        
        textAlign(RIGHT);
        text('Main Menu', 480, 30);
    }
    
    mouseClicked() {
        if ((mouseX < 480 && mouseX > 430) && (mouseY > 15 && mouseY < 35)) {
            currProgram = 0;
        }
    }
}

class TwistingCircleHelp {
    draw() {
        fill(0);
        strokeWeight(0);
        textSize(20);
        textAlign(LEFT, CENTER);
        text("How to play Twisting Circle!", 10, height/3 - 30);
        
        textSize(15);
        text(
            "  Click and drag the circle in the direction indicated.\n" +
            "- Try to react as quickly and accurately as possible.\n "

            , 10, height/2);    
        
            textAlign(RIGHT);
            text('Main Menu', 480, 30);
        }
        
        mouseClicked() {
            if ((mouseX < 480 && mouseX > 430) && (mouseY > 15 && mouseY < 35)) {
                currProgram = 0;
            }

    }
}

class tracingPathHelp{
    draw(){
        fill(255, 238, 0);
       // rect(50, 50, 600, 400);
        fill(0);
        textSize(30);
        textAlign(LEFT);
        text("How to play:", 125, 100);
        textSize(20);
        text("- Blue circle will follow your mouse wherever you", 10, 125);
        text("go", 10, 150);
        text("- Click anywhere to start after selecting the game", 10, 175);
        text("- Try to keep the circle between the orange and" , 10, 200);
        text("green block! ", 10, 225);
        text("- Stars indicate your performance." , 10, 250);
        text("The more you get the better!", 10, 275);
        text("- Increase your multiplier to gain more points.", 10, 300);
        text("- Multiplier increases as long as you do not hit", 10, 325);
        text("an obstacle, and resets if you hit one.", 10, 350);
        text("- Good luck, don't sweat it and have fun!", 10, 375);

        textAlign(RIGHT);
            text('Main Menu', 480, 30);
    }
        mouseClicked() {
            if ((mouseX < 480 && mouseX > 430) && (mouseY > 15 && mouseY < 35)) {
                currProgram = 0;
            }
        }
    
}
