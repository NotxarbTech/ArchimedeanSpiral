let a = 0;
let b = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  noFill();
  stroke(255);
  beginShape();
  strokeWeight(sqrt((mouseX - width/2)*(mouseX - width/2) + (mouseY - height/2)*(mouseY - height/2))/15);
  for (let theta = 0; theta < 55; theta += 0.1) {
    let r = a+b*theta;
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape();
}