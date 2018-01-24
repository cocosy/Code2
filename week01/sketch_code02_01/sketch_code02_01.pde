//setup repo
//work together
//drawing api  -- visual 
//w1003

int p1score;
int p2score;

boolean p1Up = false;
boolean p1Down =false;
boolean p2Up = false;
boolean p2Down =false;

Ball b;
Paddle p1;
Paddle p2;

void setup(){
  size(800,500);
  background(0);
  b = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
  
}

void draw(){
  background(0);
  b.update();
  b.display();
  p1.update();
  p1.display();
  p2.update();
  p2.display();

 
}

//ball
class Ball{
  PVector pos;
  PVector vel;
  float angle;
  float speed = 5;
  float s = 15;

  Ball() {
    pos = new PVector(width/2, height/2);
    vel = new PVector(0, 0);
    angle = random(TWO_PI);
    vel.x = cos(angle) * speed;
    vel.y = sin(angle) * speed;
  }

  void update() {
    
    if (pos.x < s/2 || pos.x > width - s/2) {
      pos = new PVector(width/2, height/2);
    }
    if (pos.y < s/2 || pos.y > height - s/2) {
      vel.y *= -1;
      //vel.x *= -1;
    }
    pos.add(vel);
  }

  void display() {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(pos.x, pos.y, s, s);
  } 
  
  void paddleCollision(Paddle p){
    if(pos.x> p.pos.x && pos.x<p.pos.x+20){
      if(pos.y> p.pos.y && pos.y<p.pos.y+100){
        //vel.x *= -1;
        vel.y *= -1;
    }
    
  }
}
}

//canvas

//score

//laser


//paddle
class Paddle{
  PVector pos;
  float w;
  float h;
  int playerNum;
  
  
  Paddle(int whichPlayer){
    playerNum = whichPlayer;
    if(whichPlayer == 0){
     pos = new PVector(width-30-w,height/2); 
      w = 20;
      h =100;    
    }else if(whichPlayer == 1){
      pos = new PVector(30,height/2);
      w =20;
      h=100;}      
    }
   void update(){
     if (playerNum == 0){
       if(p1Up){
         pos.y -= 10;
       }
       if(p1Down){
         pos.y +=10;
       }
     }
     if (playerNum ==1){
       if(p2Up){
         pos.y -= 10;
       }
       if(p2Down){
         pos.y +=10;
       }
       }
   }
    
  void display(){
    fill(255);
    rect(pos.x,pos.y,w,h);
    
  }
  
  
  
  
}

//keypress
//boolean p1Up = false;
//boolean p1Down = false;
//boolean p2Up = false;
//boolean p2Down = false;


//void setup() {
  
//}

//void draw() {
//  println("p1Up: " + p1Up +
//          "\np1Down: " + p1Down + 
//          "\np2Up: " + p2Up + 
//          "\np2Down: " + p2Down);
//}


void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      p1Up = true;
    }
    if (keyCode == DOWN) {
      p1Down = true;
    }
  }

  if (key == 'w') {
    p2Up = true;
  }

  if (key == 's') {
    p2Down = true;
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