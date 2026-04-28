//This below declares the variables
let beeImg;
let flowerImg;
let buzzSound;
let bee;
let flowers = [];

//This helps set up the baselines for the game score keeping
let pollen = 0;
let goal = 15;
let timeLeft = 30;

let scene = "start";

function preload () {
	//loads the images and sound that I will be using
	beeImg = loadImage("Bee-removebg-preview.png");
	//https://stock.adobe.com/search?k=bumblebee+cartoon
   flowerImg = loadImage("flower4.png");
	//https://www.dreamstime.com/cute-cartoon-flower-collection-collection-twelve-cute-cartoon-flower-illustrations-including-daisies-tulips-daffodils-image388586984
	buzzSound = loadSound("buzz.wav");
	//https://mixkit.co/free-sound-effects/buzzer/
	}


function setup() {
	let canvas = createCanvas(400, 400); // put let canvas and not just canvas
  canvas.parent('sketch-container');
   textAlign(CENTER, CENTER);

	//Sets up the bee's 'settings'
   bee = {
     x: width / 2,
     y: height / 2,
     size: 60,
     speed: 4
  };

  //Creates the flowers
  for (let i = 0; i < 5; i++) {
    flowers.push(createFlower());
  }
}


function draw() {
	background(135, 206, 235);
//If...else code that stays what 
//happens you you depending on your oucome of the game
  if (scene === "start") {
    drawStartScene();
  } 
  else if (scene === "game") {
    drawGameScene();
  } 
  else if (scene === "win") {
    drawWinScene();
  } 
  else if (scene === "lose") {
    drawLoseScene();
  }
}

function drawStartScene() {
  fill(0);
  textSize(40);
  text("🐝 Bee Mission: Pollen Quest 🌼", width / 2, height / 3);

  textSize(20);
  text("You are a young bee on your first mission.", width / 2, height / 2 - 40);
  text("Collect 15 pollen before it gets dark!", width / 2, height / 2);
  text("But it's VERY windy today...", width / 2, height / 2 + 30);			
  text("Press ENTER to begin!", width / 2, height / 2 + 80);
}

function drawGameScene() {

  //Creates the timer
  fill(0);
  textSize(20);
  text("Pollen: " + pollen + " / " + goal, 100, 30);
  text("Time Left: " + timeLeft, 700, 30);

  //Counts down
  if (frameCount % 60 === 0 && timeLeft > 0) {
    timeLeft--;
  }

  
  if (timeLeft <= 0 && pollen < goal) {
    scene = "lose";
  }

  
  if (pollen >= goal) {
    scene = "win";
  }

  moveBee();          
  drawBee();
  moveFlowers();       
  drawFlowers();
  checkCollisions();   
}

//Draws what happens if you win
function drawWinScene() {
  background(255, 223, 0);
  fill(0);
  textSize(40);
  text("MISSION SUCCESS! 🐝✨", width / 2, height / 2 - 20);
  textSize(20);
  text("You proved yourself as a true bee!", width / 2, height / 2 + 30);
}

//Draws what happens if you lose
function drawLoseScene() {
  background(50, 50, 100);
  fill(255);
  textSize(40);
  text("Oh no! It got dark... 🌙", width / 2, height / 2 - 20);
  textSize(20);
  text("Try again and collect pollen faster!", width / 2, height / 2 + 30);
}

function moveBee() {

  //Creates the 'wind' that moves the bee slightly
  bee.x += random(-1, 1);

  if (keyIsDown(LEFT_ARROW)) {
    bee.x -= bee.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    bee.x += bee.speed;
  }
  if (keyIsDown(UP_ARROW)) {
    bee.y -= bee.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    bee.y += bee.speed;
  }

  //Keep the bee inside canvas
  bee.x = constrain(bee.x, 0, width);
  bee.y = constrain(bee.y, 0, height);
}

//Draws the bee
function drawBee() {
  imageMode(CENTER);
  image(beeImg, bee.x, bee.y, bee.size, bee.size);
}

//Create a flower
function createFlower() {
  return {
    x: random(width),
    y: random(height),
    size: 50,
    speed: random(1, 3)
  };
}

// Move flowers with the 'wind'
function moveFlowers() {
  for (let f of flowers) {
    f.x += f.speed;

    if (f.x > width) {
      f.x = 0;
      f.y = random(height);
    }
  }
}

//Draw the multiple flowers
function drawFlowers() {
  for (let f of flowers) {
    imageMode(CENTER);
    image(flowerImg, f.x, f.y, f.size, f.size);
  }
}

//Checks if the bee collects pollen
function checkCollisions() {
  for (let f of flowers) {
    let d = dist(bee.x, bee.y, f.x, f.y);

    if (d < 40) {
      pollen++;
      buzzSound.play();
      f.x = random(width);
      f.y = random(height);
    }
  }
}

//Changes the scene from the start/direction to the game
function keyPressed() {
  if (scene === "start" && keyCode === ENTER) {
    scene = "game";
  }
}
