var r = 0;
var theta = 0;
var thetaPlus = 10;

function ThetaClear(){
    background(0);
    thetaPlus = 10;
    r = 0;
    fill(255, 255, 255, 75);
    text("Theta Value: " + thetaPlus, width/2 - 50, height - 10);
    text("PRESS SPACE TO CLEAR", width/2 - 75, height - 25);
}
function ThetaADD(){
    background(0);
    thetaPlus += 2.5;
    r = 0;
    fill(255, 255, 255, 75);
    text("Theta Value: " + thetaPlus, width/2 - 50, height - 10);
    text("PRESS SPACE TO CLEAR", width/2 - 75, height - 25);
}

function setup() {
    createCanvas(400,400);
    background (0);
    ThetaClear();
}

function mouseClicked(){
      ThetaADD();
}
function keyPressed(){
      if (keyCode === 32){
        ThetaClear();
      }
}

function draw() {
   push();
   translate(width/2, height/2);

   var x = r * cos(theta);
   var y = r * sin(theta);

   noStroke();
   fill(255, 255, 255, 30);
   ellipse(x, y, 10, 10);
   pop();

   theta += thetaPlus;
   r += 0.2;
}
