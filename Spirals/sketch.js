var r = 0;
var theta = 0;
var thetaPlus = 10;

function setup() {
    createCanvas(400,400);
    background (0);

    let button = createButton("RESET");
    let button2 = createButton("ADD");

    button.mousePressed(ThetaClear);
    button2.mousePressed(ThetaADD);
}

function ThetaClear(){
    background(0);
    thetaPlus = 10;
    r = 0;
    fill(255);
    text("Theta Value: " + thetaPlus, 150, 390);
}
function ThetaADD(){
    background(0);
    thetaPlus += 10;
    r = 0;
    fill(255);
    text("Theta Value: " + thetaPlus, 150, 390);
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
