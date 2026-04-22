//This is an animation insriped by Frank Ocean's song, "Nights". This animation consists on three main elements. 1: The moon. The moon moves locations every time that the code is run, with some boundaries to it stays on screen. The moon helps set the sence of the night. 2: The falling stars. Stars and the moon go hand in hand, so it only felt right to include stars. When I listen to this song, I am transported to a state of calm, it's like I fall out of reality and into another. That is why the stars, which are yellow so it looks like stars, are falling. 3: The text. The text bounces back and forth on the screen, from 'Frank Ocean', the singers name, and 'Nights', the name of the song.


//Varibles
let stars = [];
//number of stars
let numStars = 400;

let textX=0;
let textMove= 0.1;
let textDir= "Nights";

let circleY;
let circleX;

function setup() {
 
  let canvas = createCanvas(400, 400); // put let canvas and not just canvas
  canvas.parent('sketch-container');
  circleX = random(width-width/2);
  circleY = random(height-height/2);
  
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background("navy");
  
    
  //The moon that will change possition
  fill(252,254,218);
  circle(circleX, circleY, 100);
  noStroke()
  
  
  fill(173, 216, 230);
  //Code for text changing
  textX = textX + textMove;
  textSize (20);
  text ("", textX,   height/2);
  text (""+textDir+".", textX, height/2+20);
  
  if (textX>150) {textMove=-1; textDir="Nights";}
  if (textX<20) {textMove=1;textDir="Frank Ocean";}
  
  
  
  

  // Loop through all the stars to move and display them
  for (let i = 0; i < stars.length; i++) {
    stars[i].fall();
    stars[i].show();
  }
}
//Draws the falling stars, got code from
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0); 
    // Start stars above the top of the canvas
    this.size = random(1, 4);
    this.speed = random(1, 3);
  }

  show() {
    noStroke();
    fill("yellow");
    ellipse(this.x, this.y, this.size, this.size);
  }

  fall() {
    this.y += this.speed;  
  }
}