// Car animation with star background (p5.js)

let X = 100;
let centerY = 200;
let size = 150;
let Cmove = 2;

// Star positions (cleaner than repeating code)
let stars = [
  [10,100],[50,100],[136,100],[356,100],[280,100],
  [40,150],[99,150],[230,150],[354,150],[289,150],
  [29,50],[157,50],[127,50],[253,50],[333,50],
  [253,200],[23,200],[105,200],[222,200],
  [270,250],[70,250],[160,250],[370,250],
  [300,300],[40,300],[137,300],[200,300],
  [27,350],[134,350],[397,350],[306,350]
];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch-container");
}

function draw() {
  background(0, 0, 139);

  drawStars();
  drawCar();
  moveCar();
}

// Draw all stars
function drawStars() {
  fill(255);
  noStroke();
  
  for (let i = 0; i < stars.length; i++) {
    circle(stars[i][0], stars[i][1], 5);
  }
}

// Draw the car
function drawCar() {
  fill("black");
  rect(X - 100, centerY - 100, 200, 80, 25);

  fill("white");
  ellipse(X + size * 0.35, centerY - size * 0.10, size * 0.5);
  ellipse(X - size * 0.22, centerY - size / 10, size * 0.5);
}

// Handle movement and bouncing
function moveCar() {
  X += Cmove;

 
  // Bounce off right edge
  if (X > width - 100) {
    Cmove = -2; //changed the numbers and formating
  }

  // Bounce off left edge
  if (X < 100) {
    Cmove = 2; //changed it from +20 to just 2
  }
}