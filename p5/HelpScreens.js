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
            "one you hit 10,000 points total, you win!\n\n" +
            
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
