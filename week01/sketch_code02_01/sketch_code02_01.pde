//setup repo
//work together
//drawing api  -- visual 
//w1003

int p1Score;
int p2Score;

boolean p1Up = false;
boolean p1Down =false;
boolean p2Up = false;
boolean p2Down =false;
boolean p1Laser = false;
boolean p2Laser =false;


Ball b;
Paddle p1;
Paddle p2;

void setup() {
  size(500, 500);
  background(0);
  b = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
}

void draw() {
  background(0);
  int m = millis();
  if (m<7500) {
    drawIntro();
  } else {
    b.paddleCollision(p1);
    b.paddleCollision(p2);
    b.update();
    b.display();
    p1.update();
    p1.display();
    p2.update();
    p2.display();
    
    for (int i = 0; i < 501; i = i+20) {
  rect(width/2, i, 12, 12);
}

    textSize(36);
    fill(255);
    textAlign(CENTER, CENTER);

    text(p1Score, width/2 - 100, 50);
    text(p2Score, width/2 + 100, 50);
  }
}

void  drawIntro() {
  textSize(20);
  fill(255);
  textAlign(LEFT);

  text("Laser Pong", 30, 100);
  text("Player 1 : [W]/[S] to move,[D] to fire", 30, 130);
  text("Player 2 : [UP]/[DOWN] to move,[LEFT] to fire",30, 160);
  text("Avoid missing ball for high score", 30, 190);
  text("Don't shoot the ball", 30, 220);
  
}


//ball
class Ball {
  PVector pos;
  PVector vel;
  float angle;
  float speed = 3;
  float s = 15;

  Ball() {
    pos = new PVector(width/2, height/2);
    vel = new PVector(0, 0);
    angle = random(TWO_PI);
    vel.x = cos(angle) * speed;
    vel.y = sin(angle) * speed;
  }

  void update() {

    //   if (pos.x < s/2 || pos.x > width - s/2) {

    if (p2Score >=11) {
      text("Win!", width/2 + 100, 100);
    } else if ( p1Score >=11) {
      text("Win!", width/2 - 100, 100);
    } else if (p2Score <11) {
      if (pos.x<s/2) {
        p2Score++;
        pos = new PVector(width/2, height/2);
        //vel.x =random(30);
        //vel.y =random(30);
      } else if (pos.x>width-s/2) {
        p1Score++;
        pos = new PVector(width/2, height/2);
        //vel.x =random(30);
        //vel.y =random(30);
      }

      if (pos.y < s/2 || pos.y > height - s/2) {
        vel.y *= -1;
        //vel.x *= -1;
      }
      pos.add(vel);
    }
  }

  void display() {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(pos.x, pos.y, s, s);
  } 

  void paddleCollision(Paddle p) {
    if (pos.x+s/2> p.pos.x-p.w/2 && pos.x-s/2<p.pos.x+p.w/2 && 
      pos.y+s/2> p.pos.y-p.h/2 && pos.y-s/2<p.pos.y+p.h/2) {
      vel.x *= -1;
      // vel.y *= -1;
    }
  }
}

//canvas



//laser



//paddle
class Paddle {
  PVector pos;
  float laserPos;
  float w;
  float h;
  int playerNum;


  Paddle(int whichPlayer) {
    playerNum = whichPlayer;
    if (whichPlayer == 0) {
      pos = new PVector(width-15-w, height/2); 
      laserPos = pos.x;
      w = 20;
      h =100;
    } else if (whichPlayer == 1) {
      pos = new PVector(15, height/2);
      laserPos = pos.x;
      w =20;
      h=100;
    }
  }
  void update() {
    if (playerNum == 0) {
      if (p1Up) {
        if (pos.y-h/2>0) {
          pos.y -= 7;
        }
      }
      if (p1Down) {
        if (pos.y+h/2< width) {
          pos.y +=7;
        }
      }
      if(p1Laser){
        stroke(255);
        strokeWeight(10);
        line(laserPos,pos.y,laserPos+10,pos.y);
        laserPos -= 5;
        noStroke();
        if(laserPos == 0){
            p1Laser = false;
            laserPos =pos.x;
        }
      }
    }
    if (playerNum ==1) {
      if (p2Up) {
        if (pos.y-h/2>0) {
          pos.y -= 7;
        }
      }
      if (p2Down) {
        if (pos.y+h/2< width) {
          pos.y +=7;
        }
      }
    }
  }

  void display() {
    fill(255);
    rectMode(CENTER);
    rect(pos.x, pos.y, w, h);
  }
 
}




void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      p1Up = true;
    }
    if (keyCode == DOWN) {
      p1Down = true;
    }
    if(keyCode == LEFT){
      p1Laser = true;
    }
  }

  if (key == 'w') {
    p2Up = true;
  }

  if (key == 's') {
    p2Down = true;
  }
  if (key == 'd'){
    p2Laser = true;
  }
}

void keyReleased() {
  if (key == CODED) {
    if (keyCode == UP) {
      p1Up = false;
    }
    if (keyCode == DOWN) {
      p1Down = false;
    }
  }

  if (key == 'w') {
    p2Up = false;
  }

  if (key == 's') {
    p2Down = false;
  }
}


//class ball
//float x;
//float y;
//float dx;
//float dy;

//Ball(){
// x = width/2;
// y = height/2;
// dx = 0.2;
// dy = random(-5,5);
//}

//void display(){
//  rect(x,y,10,10); 
//}

//void update(){
//  x+=dx;
//  if(x<0 || x>width){
//    dx=-dx;

//  }

//}