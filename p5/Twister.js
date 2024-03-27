class Twister {
  constructor() {
    //circle speed and size
    this.circleSpeed = 0.5;
    this.circleSize = 100;
    this.numColumns = 3;
    this.score = 0;
    this.circles = []; 
  }

  setup() {

    //create bound circle for each column
    for (let i = 0; i < this.numColumns; i++) {
      //width - (column width based on #columns * current column)
        //for example column 0 would be (width * 0) for right wall, then (width * 1) for left
        //then the next column would begin (width * 1) then (width * 2) and so on 
      let rightWall = width - ((width / this.numColumns) * i);
      let leftWall = width - ((width / this.numColumns) * (i + 1));
      //add to array
      this.circles.push(new TwisterBoundCircle("circle" + i, leftWall, rightWall, 0, height, this.circleSpeed, this.circleSize));
    }
  }

  draw() {
    strokeWeight(1);
    stroke(1);
    //for each circle in the array
    for (let i = 0; i < this.circles.length; i++) {
      //check if mouse is near circle
      //for score and color changes
      
      if (this.circles[i].isHovered() == true) {
        this.score += 1;
      }
      //draw circle
      this.score += this.circles[i].display() ? 1 : 0;
    }
    //draw text elements
    text("Score: " + this.score, 10, 15);
    text("Exit", width - 30, 15);

  }

  mouseClicked() {
    if (dist(mouseX, mouseY, width - 30, 15) < 30) {
      //reset score
      twister.score = 0;
      //switch to home
      currProgram = 0;
    }
  }
  
}

//bound circle class
class TwisterBoundCircle {
  //constructor
  constructor(name, left, right, top, bottom, speed, size) {
    this.name = name;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;    
    this.speed = speed;
    this.size = size;
    //starting pos based on binding walls
    this.x = left + size / 2 + 10;
    this.y = bottom - size / 2 - height / 2;
    //starting direction (random)
    this.dirX = random() < 0.5 ? -1 : 1;
    this.dirY = random() < 0.5 ? -1 : 1;
    //timer for random direction changes
    this.timer = 0;

  }
  
  //display function
  display() {

    //draw circle
    ellipse(this.x, this.y, this.size);

    //move circle
    this.x += this.speed * this.dirX;
    this.y += this.speed * this.dirY;
  
    //draw label
    fill(0);
    text(this.name, this.x - 19, this.y + 3);

    //increment random direction timer
    this.timer += 1;
    //change direction if at wall
    if (this.x > this.right - this.size / 2 || this.x < this.left + this.size / 2) {
      this.dirX *= -1;
    }
    if (this.y > this.bottom - this.size / 2 || this.y < this.top + this.size / 2) {
      this.dirY *= -1;  
    } 
    //once timer reaches limit, randomly change the direction and reset the timer
    else if (this.timer >= 50) {
      this.dirX *= random() < 0.5 ? -1 : 1;
      this.dirY *= random() < 0.5 ? -1 : 1;
      this.timer = 0;
    }


  }

  //check if mouse is near circle
  isHovered () {
    let distanceToCircle = dist(mouseX, mouseY, this.x, this.y);
    if (distanceToCircle < this.size - 15) {
      fill(0, 255, 0);
      return true;
    } else {
      fill(255, 0, 0);
      return false;
    }
  }
}
