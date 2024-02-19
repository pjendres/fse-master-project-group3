//initialize shapes
let circleX, rectangleX, triangleX;
//1 = right
//-1 = left
let directionCircle = 1; 
let directionRectangle = -1;
let directionTriangle = 1;

function setup() {
  createCanvas(400, 400);
  
  //starting positions
  circleX = width / 4;
  rectangleX = width / 2;
  triangleX = width * 3 / 4;
}

function draw() {
  background(220);

  //circle
  //red fille
  fill(255, 0, 0);
  //green outline
  stroke(0, 255, 0);
  //outline thickness
  strokeWeight(3);
  //draw circle
  //x,y,width,height
  circle(circleX, height / 2, 50);

  //rectangle
  //blue fill
  fill(0, 0, 255);
  //yellow outline
  stroke(255, 255, 0); //yellow outline
  //outline thickness
  strokeWeight(2);
  //draw rectangle
  //x,y,width,height
  rect(rectangleX, height / 4, 80, 40);

  square()
  //triangle
  //green fill
  fill(0, 255, 0);
  //pink outline
  stroke(255, 0, 255);
  //outline thickness
  strokeWeight(4);
  //draw triangle
  //x,y of each point
  triangle(
    triangleX, height * 3 / 4,
    triangleX + 30, height * 3 / 4 - 50,
    triangleX - 30, height * 3 / 4 - 50
  );

  //font size
  textSize(69);
  //white fill
  fill(255, 255, 255);
  //black outline
  stroke(0, 0, 0);
  //outline thickness
  strokeWeight(2);
  //text,x,y
  text("Parker Endres", 50,50);
  
  //move shapes
  circleX += 2 * directionCircle;
  rectangleX += 1.5 * directionRectangle;
  triangleX += 1 * directionTriangle;

  //switch shapes directions if at edge
  if (circleX < 25 || circleX > width - 25) {
    directionCircle *= -1;
  }

  if (rectangleX < 0 || rectangleX > width - 80) {
    directionRectangle *= -1;
  }

  if (triangleX < 30 || triangleX > width - 30) {
    directionTriangle *= -1;
  }
}
