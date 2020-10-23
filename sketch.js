var button;
var cnv;
var x = 0;
var y = 0;

function setup() {
 cnv = createCanvas(500, 500);
 cnv.position(windowWidth/2 - 200, 0);
 button = createButton("Click Me");
 button.position(windowWidth/2, 20);
 button.mousePressed(change);
 noLoop();
 colorMode(HSB);
}

function draw() {
  background(0);
}

function change(){
  background(random(255), 255, 255);
  fill(random(255), 255, 255);
  ellipse(width/2, height/2, 200, 200);
  
  x = random(0, width);
  y = random(0, height - 200);
  cnv.position(x, y);
  button.position(x+200, y);
}
