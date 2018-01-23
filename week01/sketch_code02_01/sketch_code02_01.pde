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
Paddle P2;

void setup(){
  size(800,800);
  background(0);
  b = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
  
}

//ball
class Ball{
  float x;
  float y;
  float dx;
  float dy;
 
  Ball(){
   x = width/2;
   y = height/2;
   dx = 0.2;
   dy = random(-5,5);
  }
  
  void display(){
    rect(x,y,10,10); 
  }
  
  void update(){
    x+=dx;
    if(x<0 || x>width){
      dx=-dx;
  
    }
    
  }
  
}

//canvas

//score

//laser


//paddle
class Paddle(){
  
  
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


//void keyPressed() {
//  if (key == CODED) {
//    if (keyCode == UP) {
//      p1Up = true;
//    }
//    if (keyCode == DOWN) {
//      p1Down = true;
//    }
//  }

//  if (key == 'w') {
//    p2Up = true;
//  }

//  if (key == 's') {
//    p2Down = true;
//  }
//}

//void keyReleased() {
//  if (key == CODED) {
//    if (keyCode == UP) {
//      p1Up = false;
//    }
//    if (keyCode == DOWN) {
//      p1Down = false;
//    }
//  }

//  if (key == 'w') {
//    p2Up = false;
//  }

//  if (key == 's') {
//    p2Down = false;
//  }
//}