var s;
function setup() {
  let canvas = createCanvas(400, 400); // put let canvas and not just canvas
  canvas.parent('sketch-container');
}

function draw() {
  background(220);
  
  fill("black")
  s = second();
  text('Current second: \n' + s, 5, 50);
  
  //The stoplight drawn
  fill("gray")
  rect(100,115,80,150);

  //Red light
  fill("black")
  if(s>18 && s<31){
    fill("red")
  }
  if(s>46)
    fill("red")
  circle(138,150,25)

  
  
  //Yellow Light
  fill("black")
  if(s>12 && s<19){
    fill("yellow")
  }
  if(s>41 && s<47){
    fill("yellow")
  }
    circle(138,190,25)
  
  //Green Light
  fill("green")
  if (s>12){
    fill("black")
  }
  if (s>30 && s<42){
    fill("green")
  }
  if (s>42){
    fill("black")
  }
  circle(138,230,25)


}