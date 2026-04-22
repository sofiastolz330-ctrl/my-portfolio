
var X = 100
let centerY = 200
let size = 150;
var Cmove = 2;

function setup() {
  let canvas = createCanvas(400, 400); // put let canvas and not just canvas
  canvas.parent('sketch-container');
}


function draw() {
  background(0,0,139);
  
  //stars
  circle (10,100,5)
  circle (50,100,5)
  circle (136,100,5)
  circle (356,100,5)
  circle (280,100,5)
  circle (40,150,5)
  circle (99,150,5)
  circle (230,150,5)
  circle (354,150,5)
  circle (289,150,5)
  circle (29,50,5)
  circle (157,50,5)
  circle (127,50,5)
  circle (253,50,5)
  circle (333,50,5)
  circle (253,200,5)
  circle (23,200,5)
  circle (105,200,5)
  circle (222,200,5)
  circle (270,250,5)
  circle (70,250,5)
  circle (160,250,5)
  circle (370,250,5)
  circle (300,300,5)
  circle (40,300,5)
  circle (137,300,5)
  circle (200,300,5)
  circle (27,350,5)
  circle (134,350,5)
  circle (397,350,5)
  circle (306,350,5)
  
  if (X <= 50 || X >= width - 100) {
    
  }
  if (centerY <= 50 || centerY >= height - 100) {
    
  }

  

  
  
 //the car
  fill("black");
  rect(X - 100, centerY-100, 200, 80, 25);
  fill("white")
  ellipse(X + (size * 0.35), centerY - (size * 0.10), size * 0.5, size * 0.5);
  ellipse(X - (size * 0.220), centerY - (size / 10), size * 0.5, size * 0.5);
  X= X + Cmove
  if (X> width-20) {
    Cmove=-1;
    
  }
 // if (X > width - 10) {
 //   Cmove = 2;
 // }
  if(X < 20) {
    Cmove = +20
  }
 
//stars
  
}
