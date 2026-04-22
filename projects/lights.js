//Variables
let lights = [false, false, false, false, false, false];

let moves = 0;
let maxMoves = 12;
let gameOver = false;


function setup() {
  let canvas = createCanvas(600, 350); // put let canvas and not just canvas
  canvas.parent('sketch-container');
}

function draw() {
  background(gameOver ? 200 : 220);

  drawLights();
  displayInfo();
  checkWin();
}

//Draw the lights
function drawLights() {
  for (let i = 0; i < lights.length; i++) {
    fill(lights[i] ? "yellow" : "gray"); 
    ellipse(100 + i * 80, 120, 40, 40);
  }
}

function displayInfo() {
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("Press keys 1–6 to toggle lights", 10, 20);
  text("Moves: " + moves + " / " + maxMoves, 10, 40);

  fill(0);
  textAlign(CENTER);
  text("1    2    3    4    5    6", width / 2, 180);
}

//Human interaction
function keyPressed() {

  if (gameOver) return;

  let buttonNum = int(key) - 1;

  if (buttonNum >= 0 && buttonNum < 6) {
    moves++;
  }

  if (moves >= maxMoves) {
    gameOver = true;
  }
  switch (key) {
    case '1':
      toggle(0);
      toggle(2);
      break;

    case '2':
      toggle(1);
      toggle(3);
      break;

    case '3':
      toggle(2);
      toggle(4);
      break;

    case '4':
      toggle(0);
      toggle(5);
      break;

    case '5':
      toggle(1);
      toggle(4);
      break;

    case '6':
      toggle(3);
      toggle(5);
      break;
  }
}

function toggle(i) {
  lights[i] = !lights[i];
}

function checkWin() {
  let win = true;

  for (let i = 0; i < lights.length; i++) {
    if (!lights[i]) {
      win = false;
    }
  }

  if (win) {
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text("YOU WIN!", width / 2, 70);
    gameOver = true;
  }

  if (gameOver && !win) {
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text("GAME OVER", width / 2, 70);
  }
}