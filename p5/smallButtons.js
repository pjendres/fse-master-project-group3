class SmallButtons {
    constructor() {
        this.bubbles = [];
        this.score = 0
      }


    setup() {
        createCanvas(700, 550);
        for (let i = 0; i < 10; i++) {
            let x = constrain(random(600), 20, 680);
            let y = constrain(random(450), 20, 530);
            let r = random(5, 10);
            let b = new Bubble(x, y, r);
            this.bubbles.push(b);
            
            if (x < 20) {
                x = x * -1;
            }
            if (x > 680) {
                x = x * -1;
            }
            
            if (y < 20) {
                y = y * -1;
            }
            
            if (y > 530) {
                y = y * -1;
            }
        }
    }

    mouseClicked() {
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            if (this.bubbles[i].contains(mouseX, mouseY)) {
                this.bubbles.splice(i, 1);
                this.score += 1;
            }
        }
    }

    draw() {
        background(0);
        for (let i = 0; i < this.bubbles.length; i++) {
            if (this.bubbles[i].contains(mouseX, mouseY)) {
                this.bubbles[i].changeColor(255);
            } else {
                this.bubbles[i].changeColor(0);
            }
            this.bubbles[i].move();
            this.bubbles[i].show();
        }
        fill(250);
        stroke(0);
        textSize(15);
        textAlign(LEFT);
        text('Score: ' + this.score, 20, 30);
        //textSize(15);
        //textAlign(RIGHT);
        //text('Restart', 680, 30);
        
        if (this.score == 10) {
            textSize(90);
            fill(250,0,0);
            textAlign(CENTER);
            text("Level Completed!", 350, 225);
        }
    }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}