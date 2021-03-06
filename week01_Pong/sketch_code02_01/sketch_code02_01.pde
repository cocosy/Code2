//setup repo
//work together
//drawing api  -- visual 
//w1003
import processing.sound.*;

AudioDevice device;
SoundFile[] file;

int numsounds = 5;

int value[] = {0, 0, 0};

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

  device = new AudioDevice(this, 48000, 32);
  file = new SoundFile[numsounds];
  for (int i = 0; i < numsounds; i++) {
    file[i] = new SoundFile(this, (i+1) + ".wav");
  }
}

void draw() {
  background(0);
  int m = millis();
  if (m<7500) {
    drawIntro();
  } else {
    noStroke();
    p1.ballCollision();
    p2.ballCollision();

    b.paddleCollision(p1);
    b.paddleCollision(p2);

    b.update();   
    b.display();

    p1.laserCollision();
    p1.update();
    p1.display();

    p2.laserCollision();
    p2.update(); 
    p2.display();

    for (int i = 0; i < 501; i = i+20) {
      rect(width/2, i, 12, 12);
    }

    textSize(36);

    textAlign(CENTER, CENTER);

    fill(0, 0, 255);
    text(p1Score, width/2 - 100, 50);
    fill(255, 0, 0);
    text(p2Score, width/2 + 100, 50);
  }
}

void  drawIntro() {
  textSize(20);
  fill(255);
  textAlign(LEFT);

  text("Laser Pong", 30, 100);
  text("Player 1 : [W]/[S] to move,[D] to fire", 30, 130);
  text("Player 2 : [UP]/[DOWN] to move,[LEFT] to fire", 30, 160);
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

    if (p2Score >=11) {
      for (int i = 20; i < 502; i = i+35) {
        for (int j = 0; j < 503; j = j+35) {
          fill(random(255), random(255), random(255));
          rect(i, j, 20, 20);
        }
      }
      fill(255);
      text("Win!", width/2 + 100, 100);
    } else if ( p1Score >=11) {
       for (int i = 20; i < 502; i = i+35) {
        for (int j = 0; j < 503; j = j+35) {
          fill(random(255), random(255), random(255));
          ellipse(i, j, 20, 20);}}
        fill(255);
        text("Win!", width/2 - 100, 100);
      
    
  } else if (p2Score <11) {
    if (pos.x<s/2) {
      p2Score++;
      file[3].play(0.5, 1.0);
      pos = new PVector(width/2, height/2);
      //vel.x =random(30);
      //vel.y =random(30);
    } else if (pos.x>width-s/2) {
      p1Score++;
      file[3].play(0.5, 1.0);
      pos = new PVector(width/2, height/2);
      //vel.x =random(30);
      //vel.y =random(30);
    }

    if (pos.y < s/2 || pos.y > height - s/2) {
      vel.y *= -1;
      file[2].play(0.5, 1.0);
      //vel.x *= -1;
    }
    pos.add(vel);
  }
}

void display() {
  noStroke();
  fill(random(255), random(255), random(255));
  rectMode(CENTER);
  rect(pos.x, pos.y, s, s);
} 

void paddleCollision(Paddle p) {
  if (pos.x+s/2> p.pos.x-p.w/2 && pos.x-s/2<p.pos.x+p.w/2 && 
    pos.y+s/2> p.pos.y-p.h/2 && pos.y-s/2<p.pos.y+p.h/2) {
    vel.x *= -1;
    file[1].play(0.5, 1.0);
    // vel.y *= -1;
  }
}
}

//paddle
class Paddle {
  PVector pos;
  float laserPos;
  float laserPosY;
  float w;
  float h;
  int rgB = 0;
  int playerNum;


  Paddle(int whichPlayer) {
    playerNum = whichPlayer;
    if (whichPlayer == 0) {
      pos = new PVector(width-15-w, height/2); 
      laserPos = pos.x;
      laserPosY =pos.y;
      w = 20;
      h =100;
    } else if (whichPlayer == 1) {
      pos = new PVector(15, height/2);
      laserPos = pos.x;
      laserPosY = pos.y;
      w =20;
      h=100;
    }
  }

  void update() {
    if (playerNum == 0) {
      if (p1Up) {
        if (pos.y-h/2>0) {
          pos.y -= 10;
        }
      }
      if (p1Down) {
        if (pos.y+h/2< width) {
          pos.y +=10;
        }
      }
      if (p1Laser) {
        laserPosY = pos.y;
        if ( rgB>-1 && rgB<256) {
          rgB ++;
        } else {
          rgB=0;
        }
        stroke(255, 0, rgB);
        strokeWeight(8);
        line(laserPos, laserPosY, laserPos+10, laserPosY);
        stroke(255, 255, 0);
        strokeWeight(3);
        line(laserPos-3, laserPosY-8, laserPos-3, laserPosY-10);
        line(laserPos-13, laserPosY, laserPos-11, laserPosY);
        line(laserPos-3, laserPosY+8, laserPos-3, laserPosY+10);
        laserPos -= 5;
        noStroke();
        if (laserPos < -10|| p2Score >= 11 ||p1Score >=11) {
          p1Laser = false;
          laserPos =pos.x;
          //laserPosY = pos.y;
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
      if (p2Laser) {
        laserPosY = pos.y;
        laserPosY = pos.y;
        if ( rgB>-1 && rgB<256) {
          rgB ++;
        } else {
          rgB=0;
        }
        stroke(0, rgB, 255);
        strokeWeight(8);
        line(laserPos, laserPosY, laserPos+10, laserPosY);
        stroke(255, 255, 0);
        strokeWeight(3);
        line(laserPos+9, laserPosY-8, laserPos+9, laserPosY-10);
        line(laserPos+19, laserPosY, laserPos+21, laserPosY);
        line(laserPos+9, laserPosY+8, laserPos+9, laserPosY+10);
        laserPos += 5;
        noStroke();
        if (laserPos > width+10 || p1Score >= 11|| p2Score >= 11) {
          p2Laser = false;
          laserPos =pos.x;
          //laserPosY = pos.y;
        }
      }
    }
  }

  void display() {
    if (p1Score == p2Score) {
      fill(255);
    } else if (p1Score > p2Score) {
      fill(0, 0, 255);
    } else {
      fill(255, 0, 0, 200);
    }
    rectMode(CENTER);
    rect(pos.x, pos.y, w, h);
  }

  void laserCollision () {
    if (p1.laserPos == p2.pos.x && p1.laserPosY > p2.pos.y - p2.h/2 
      && p1.laserPosY < p2.pos.y + p2.h/2) {
      p2Score ++;
      file[1].play(0.5, 1.0);
    }
    if (p2.laserPos == p1.pos.x && p2.laserPosY > p1.pos.y - p1.h/2 
      && p2.laserPosY < p1.pos.y + p1.h/2) {
      p1Score++;
      file[1].play(0.5, 1.0);
    }
  }

  void ballCollision() {
    if (p1.laserPos > b.pos.x - b.s/2 && p1.laserPos < b.pos.x + b.s/2 
      && p1.laserPosY > b.pos.y - b.s/2 && p1.laserPosY < b.pos.y + b.s/2) {
      p1Score ++;
      file[3].play(0.5, 1.0);
    } else if (p2.laserPos + 10 > b.pos.x - b.s/2 && p2.laserPos + 10 < b.pos.x + b.s/2 
      && p2.laserPosY > b.pos.y - b.s/2 && p2.laserPosY < b.pos.y + b.s/2) {
      p2Score ++;
      file[3].play(0.5, 1.0);
    }
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
    if (keyCode == LEFT) {
      p1Laser = true;
    }
  }

  if (key == 'w') {
    p2Up = true;
  }

  if (key == 's') {
    p2Down = true;
  }
  if (key == 'd') {
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

//laser laser or ArrayList <Laser>
//outside paddle not collide with the paddle -- \n press return -- \t tab 



// arraylist for paddle1 and 2
//void check collisonwith paddle(){}

//void checkcollisionwithball(){}