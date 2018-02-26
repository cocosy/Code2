// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 4
// pong with all colliders

var ball;
var p1, p2;
var p1Score = 0;
var p2Score = 0;
var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;
var margin = 20;
var cnv;
// var paddleBounceSFX, hitColliderSFX;
var colliders = [];


var sceneState = {
  INTRO: 0,
  TUTORIAL: 1,
  LEVEL01: 2,
  LEVEL02: 3,
  LEVEL03: 4,
  LEVEL04: 5,
  LEVEL05: 6,
 END:7
};
const timeForTutorial = 3000;
var currentState = sceneState.INTRO;
var keyOn = false;
var tutorialTimer;


function preload() {
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  // paddleBounceSFX = loadSound('assets/ballCollide.mp3', function() { console.log("loaded"); });
  // hitColliderSFX = loadSound('assets/hitCollider.mp3', function() { console.log("loaded"); });
  cnv = createCanvas(900, 500);
  centerCanvas();
  ball = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
}

function draw() {
  background(255, 179, 179);
  drawField();
  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;

  p1.move(p1Up, p1Down);
  p2.move(p2Up, p2Down);

  ball.update();
  p1.update();
  p2.update();
  for (var i = 0; i < colliders.length; i++) {
    colliders[i].update();
  }

  p1.display();
  p2.display();

  for (var i = 0; i < colliders.length; i++) {
    colliders[i].display();
  }

  ball.display(); 

  checkCollisionWithBall(ball, p1);
  checkCollisionWithBall(ball, p2);

  for (var i = 0; i < colliders.length; i++) {
    checkCollisionWithBall(ball, colliders[i]);
  }

 
}

function drawField() {
  stroke(0);
  noFill();
  line(0, margin, width, margin);
  line(0, height - margin, width, height - margin);
  for (var i = margin; i < height - margin - 15; i += 35) {
    var start = i;
    var finish = start + 15;
    line(width/2, start, width/2, finish);
  }

  
  noStroke();
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(0);
  text(p1Score, width/2-50, 70);
  text(p2Score, width/2+50, 70);
}

function checkCollisionWithBall(ball, other) {
  if (ball.pos.x + ball.width/2 > other.pos.x && 
      ball.pos.x + ball.width/2 < other.pos.x + other.width && 
      ball.pos.y + ball.height/2 > other.pos.y &&
      ball.pos.y + ball.height/2 < other.pos.y + other.height) {
    ball.collided(other);
    other.collided(ball);
  }
}

function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.angle = random(TWO_PI);
  this.speed = 7;
  this.vel.x = cos(this.angle) * this.speed;
  this.vel.y = sin(this.angle) * this.speed;
  this.width = 15;
  this.height = 15;

  this.update = function() {
    if (this.pos.x < -this.width) {
      if(p2Score > 14){ 
      fill(255);
      p2Score = 15;
    }else{
      p2Score++;
      this.resetAfterPoint(0);
    }} else if (this.pos.x > width) {
      if(p1Score > 14){ 
      fill(255);
      p1Score =15;
    }else{
      p1Score++;
      this.resetAfterPoint(1);
    }}

    if (this.pos.y < margin || 
        this.pos.y > height - margin - this.height) {
      this.vel.y *= -1;
    }
if(p1Score != 15 && p2Score != 15 ){
    this.pos.add(this.vel);}
  };

  this.display = function() {
    noStroke();
    fill(0);
    rectMode(CORNER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  this.resetAfterPoint = function(whichPlayer) {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.speed = 7;
    if (whichPlayer === 1) {
      this.getStartingAngle(4 * PI/6, 8 * PI/6);
    } else if (whichPlayer === 0) {
      this.getStartingAngle(-PI/3, PI/3);
    }
  }

  this.getStartingAngle = function(angleLow, angleHigh) {  
    var angle = random(angleLow, angleHigh);
    this.vel.x = cos(angle) * this.speed;
    this.vel.y = sin(angle) * this.speed;
  }

  this.collided = function(other) {
    
  }
};

function Paddle(num) {
  this.num = num;
  this.width = 15;
  this.height = 80;
  if (num == 0) {
    this.pos = createVector(margin, height/2);
  } else {
    this.pos = createVector(width-this.width-margin, height/2);
  }
  this.vel = createVector(0, 0);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    noFill();
    rectMode(CORNER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    noStroke();
  }

  this.move = function(up, down) {
    this.vel.y = 0;
    if (up) {
      if (this.pos.y > margin) {
        this.vel.y = -5;
      } else {
        this.pos.y = margin;
      } 
    }
    if (down) {
      if (this.pos.y + this.height < height - margin) {
        this.vel.y = 5;
      } else {
        this.pos.y = height - this.height - margin;
      }
    } 
  }

  this.collided = function(other) {
    var diff = (other.pos.y + other.height/2) - this.pos.y;
    if (this.num === 0) {
      angle = map(diff, 0, this.height, -PI/3, PI/3);
    }
    if (this.num === 1) {
      angle = map(diff, this.height, 0, 4*PI/6, 8*PI/6);
    }
    other.speed += 1;
    other.vel.x = cos(angle) * other.speed;
    other.vel.y = sin(angle) * other.speed;
    // paddleBounceSFX.play();
  }
}



function keyPressed() {
  keyOn = true;

  if (key === 'W') {
    p1Up = true;
  }
  if (key === 'S') {
    p1Down = true;
  }

  if (keyCode === UP_ARROW) {
    p2Up = true;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = true;
  }
}

function keyReleased() {
  // keyOn = false;
  if (key === 'W') {
    p1Up = false;
  }
  if (key === 'S') {
    p1Down = false;
  }

  if (keyCode === UP_ARROW) {
    p2Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = false;
  }
}


//DrawScene(currentState) handles the drawing of the current scene.
function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:
      background(190 + sin(frameCount * 0.06) * 40, 130, 150 + sin(frameCount * 0.05) * 30);
      fill(255);
      textSize(80);
      textFont('Courier New');
      textAlign(CENTER, CENTER);
      text("welcome to the\nPong Colliders\n\"Game\"", width/2, height/2);
      break;
    case sceneState.TUTORIAL:
      if (millis() > tutorialTimer + timeForTutorial) {
        background(150, 180, 180);
        fill(0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("HOW TO PLAY...", width/2, height/2 - 100);
        textSize(32);
        text("Everytime you press KEYs\nCollider number increases", width/2, height/2);

        textSize(24);
        text("Different Collider appears every 3 points\nPlayer who first reaches 15 points will be the WINNER!", width/2, height/2 + 120);
        text("OK now you can hit a key", width/2, height/2 + 190);
      } else {
        background(160, 220, 250);
        fill(0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("HOW TO PLAY...", width/2, height/2 - 100);
        textSize(32);
        text("Everytime you press KEYs\nCollider number increases", width/2, height/2);

        textSize(24);
        text("Different Collider appears every 3 points\nPlayer who first reaches 15 points will be the WINNER!", width/2, height/2 + 120);
      }
      
      break;
    case sceneState.LEVEL01:
    if (keyOn) {
      
      colliders.push(new Bryan());}
      // var timeLeft = (timeForGame - (millis() - gameTimer))/1000;
      // background(map(timeLeft, 5, 0, 255, 0), 250, 150);
      // fill(0);
      // textSize(164);
      // textAlign(CENTER, CENTER);
      // text(timeLeft.toFixed(1), width/2, height/2);
      break;
    case sceneState.LEVEL02:
     if (keyOn) {
      colliders.push(new AlyssaForrest());}
      // background(127 + sin(frameCount * 0.05) * 127, 127 + sin(frameCount * 0.06) * 127, 127 + sin(frameCount * 0.07) * 127);
      // fill(0);
      // textSize(64);
      // textAlign(CENTER, CENTER);
      // text("You WIN!\n" + "result: " + gameTimePressed, width/2, height/2 - 70);
      // textSize(24);
      // text("Press any key to return to title", width/2, height - 100);
      // fill(255);
      // textSize(64);
      // text("You WIN!\n" + "result: " + gameTimePressed, width/2 + 5, height/2 - 75);
      // textSize(24);
      // text("Press any key to return to title", width/2 + 2, height - 102);
      break;
    case sceneState.LEVEL03:
     if (keyOn) {
      
      colliders.push(new MaddyRed());
      colliders.push(new MaddyGreen());
      colliders.push(new MaddyBlue());}
      break;
    case sceneState.LEVEL04:
     if (keyOn) {
      colliders.push(new Jackie());}
      break;
    case sceneState.LEVEL05:
     if (keyOn) {
      colliders.push(new Yanwen());}
      break;
    case sceneState.END:
      // background(255, 179, 179);
    
      textSize(64);
      textAlign(CENTER, CENTER);
      fill(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50)
      if(p1Score>p2Score){text('Win!', width / 2 - 100, 150);
    }else{
        text('Win!', width / 2 + 100, 150);
      }
      // text(p1Score, width/2-50, 70);
      // text(p2Score, width/2+50, 70);
      textAlign(CENTER, CENTER);
      fill(0);
      textSize(24);
      text("Press any key to try again", width/2, height - 100);
    default:
      break;
  }
}

//CheckTransition(currentState) handles checking for the transition logic for the current state
function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
            p1Score=0;
            p2Score=0;
      }
      break;
    case sceneState.TUTORIAL:
       if (millis() > tutorialTimer + timeForTutorial) {
         if (keyOn) {
          
           currentState+=1;
           setUpScene(currentState);
          p1Score=0;
          p2Score=0;     
         }
       }
      break;
    case sceneState.LEVEL01:
      if (p1Score>3 || p2Score>3) {
       // gameTimePressed = (timeForGame - (millis() - gameTimer))/1000;
       // gameTimePressed = gameTimePressed.toFixed(3);

      //  if (gameTimePressed < 0.1 && gameTimePressed > -0.1) {
      //    currentState = sceneState.WIN;      
      //  } else {
      //    currentState = sceneState.LOSE;
      //  }
      currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL02:
    
      if (p1Score>6 || p2Score>6) { 
        currentState++;
        setUpScene(currentState);
      
      }
      break;
    case sceneState.LEVEL03:
      if (p1Score>9 || p2Score>9) { 
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL04:
      if (p1Score>12 || p2Score>12) { 
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL05:
      if (p1Score == 15 || p2Score ==15) { 
        currentState+=1;
        setUpScene(currentState);
      }
      
      break;
    case sceneState.END:
 setUpScene(currentState);
      if (keyOn) {
        currentState = sceneState.TUTORIAL;

      }
    default:
      break;
  }
}

//setUpScene(), is called by the transition function.
function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.TUTORIAL:
      tutorialTimer = millis();

      break;
    case sceneState.LEVELs:
       break;
    // case sceneState.LEVEL02:
    //   break;
    // case sceneState.LEVEL03:
    //   break;
    // case sceneState.LEVEL04:
    //   break;
    // case sceneState.LEVEL05:
    //   break;
    // case sceneState.WIN:
    //   break;
    // case sceneState.LOSE:
    default:
      break;
  }
}








