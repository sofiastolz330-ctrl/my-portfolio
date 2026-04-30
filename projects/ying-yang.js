function setup() {
  let canvas = createCanvas(400, 400); // put let canvas and not just canvas
  canvas.parent('sketch-container');
}

function draw() {
  background(220);
  translate (width/2, height/2);
  
  fill(0);
  ellipse(0,0,300,300);
  
  fill(255);
  arc(0,0,300,300, HALF_PI, -HALF_PI, OPEN);
  
  fill(255);
  arc(0,-75,150,150, -HALF_PI, HALF_PI, OPEN);
  
  fill(0);
  arc(0,75,150,150, HALF_PI, -HALF_PI, OPEN);
  
  fill(255);
  ellipse(0,75,40,40);
  
  fill(0);
  ellipse(0,-75,40,40);
  
}