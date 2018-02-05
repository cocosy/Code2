var p1Score = 0;
var p2Score = 0;

var p1Up = false;
var p1Down =false;
var p2Up = false;
var p2Down =false;
var p1Laser = false;
var p2Laser =false;

var ball;
var p1;
var p2;

function setup() {
	createCanvas(500,500);
	ball = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
  // put setup code here
}

function draw() {
	background(0);
   // var m = millis();
   // if (m<1500) {
  // drawIntro();
   // } else {
   //  noStroke();
   //  p1.ballCollision();
   //  p2.ballCollision();

    // b.paddleCollision(p1);
    // b.paddleCollision(p2);

    ball.update();   
    ball.display();

    // p1.laserCollision();
    p1.update();
    p1.display();

    // p2.laserCollision();
    p2.update(); 
    p2.display();
	fill(random(255),random(255),random(255));
	 for (var i = 0; i < 501; i = i+20) {
      rect(width/2, i, 12, 12);
    }

    textSize(36);

 //   textAlign(CENTER, CENTER);

    fill(0, 0, 255);
    text(p1Score, width/2 - 100, 50);
    fill(255, 0, 0);
    text(p2Score, width/2 + 100, 50);
 //  }
	// }
}

// function drawIntro() {
//   textSize(20);
//   fill(255);
//   textAlign(LEFT);

//   text("Laser Pong", 30, 100);
//   text("Player 1 : [W]/[S] to move,[D] to fire", 30, 130);
//   text("Player 2 : [UP]/[DOWN] to move,[LEFT] to fire", 30, 160);
//   text("Avoid missing ball for high score", 30, 190);
//   text("Don't shoot the ball", 30, 220);
// };

function Ball(){
	this.pos = createVector(width/2, height/2);
  this.vel = createVector(0,0);
  var angle = random(TWO_PI);
  this.s = 15;
  var speed =3;
	this.vel.x = cos(angle)*speed;
	this.vel.y = sin(angle)*speed;
  

this.update = function(){
  if(p2Score >= 11){
    for(var i =20;i<502;i=i+35){
      for(var j=0;j<503;j=j+35){
        fill(0);
        rect(i,j,20,20);
      }
    }
    fill(255);
    text('Win!',width/2+100,100);}
  else if(p1Score >=11){
    for(var i =20;i<502;i=i+35){
      for(var j=0;j<503;j=j+35){
        ellipse(i,j,20,20);
      }
    }
    fill(255);
    text('Win!', width/2 - 100, 100);
}
  else if(p2Score <11){
    if(this.pos.x < this.s/2){
      p2Score++;
      this.pos = createVector(width/2,height/2);
    }
    else if (this.pos.x > width - this.s/2){
      p1Score++;
      this.pos = createVector(width/2,height/2);
    }
    else if(this.pos.y < this.s/2 || this.pos.y > height - this.s/2){
      this.vel.y *= -1;
    }
    this.pos.add(this.vel);
  }
};

this.display = function(){
	noStroke();
	fill(random(255),random(255),random(255));
	rectMode(CENTER);
	rect(this.pox.x,this.pos.y,this.s,this.s);
}

};

function Paddle(whichPlayer){
  playerNum = whichPlayer;
  var laserPos;
  var laserPosY;
  var w = 20;
  var h = 100;

  if (whichPlayer == 0){
    this.pos = createVector(width-15, height/2);
    laserPos = this.pos.x;
    laserPosY = this.pos.y;   
  } else if (whichPlayer == 1){
    this.pos = createVector(15, height/2);
    laserPos = this.pos.x;
    laserPosY = this.pos.y;
  }

  this.update = function(){
    if (whichPlayer == 0){
      if (p1Up && this.pos.y - h/2 > 0){
        this.pos.y -= 10;
      }
      if (p1Down && this.pos.y + h/2 < width){
        this.pos.y += 10;
      }
      if (p1Laser) {
        laserPosY = this.pos.y;
        stroke(0, 135, 255);
        strokeWeight(5);        
        line(laserPos+20, laserPosY-10, laserPos+10, laserPosY-10);
        line(laserPos+20, laserPosY+10, laserPos+10, laserPosY+10);

        line(laserPos, laserPosY, laserPos+10, laserPosY);        
        laserPos -= 5;
        noStroke();

        if (laserPos < -10){
          p1Laser = false;
          laserPos = this.pos.x;
          laserPosY = this.pos.y;
        }
      }
    }

    if (whichPlayer == 1){
      if (p2Up && this.pos.y - h/2 > 0){
        this.pos.y -= 10;
      }
      if (p2Down && this.pos.y + h/2 < width){
        this.pos.y += 10;
      }
      if (p2Laser) {
        laserPosY = this.pos.y;
        stroke(255, 199, 0);
        strokeWeight(5);        
        line(laserPos-10, laserPosY-10, laserPos, laserPosY-10);
        line(laserPos-10, laserPosY+10, laserPos, laserPosY+10);

        line(laserPos, laserPosY, laserPos+10, laserPosY);        
        laserPos += 5;
        noStroke();

        if (laserPos > width + 10){
          p2Laser = false;
          laserPos = this.pos.x;
          laserPosY = this.pos.y;
        }
      }
    }
  }

  this.display = function(){
    fill(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, w, h);
  }
}



//keyborad
function keyPressed() {
  if (key === 'W') {
    p2Up = true;
  }
  if (key === 'S') {
    p2Down = true;
  }
  if(key === 'D'){
    p2Laser = true;
  }

  // note - we aren't checking for keyCode anymore.
  if (keyCode === UP_ARROW) {
    p1Up = true;
  }
  if (keyCode === DOWN_ARROW) {
    p1Down = true;
  }
  if(keyCode === LEFT_ARROW){
    p1Laser = true;
  }
}

function keyReleased() {
  if (key === 'W') {
    p2Up = false;
  }
  if (key === 'S') {
    p2Down = false;
  }


  if (keyCode === UP_ARROW) {
    p1Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p1Down = false;
  }

}


