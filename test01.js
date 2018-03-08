function setup() {
  createCanvas(640, 480);
  stroke(255);
  noFill();
  size(640, 480);
}

function draw() {
  background(0);
  ellipse(mouseX, mouseY, 50, 50);  
}
