
function setup(){
  background(20);
  createCanvas(windowWidth, windowHeight);
  
  
  
}

function draw(){
  stroke(255);
  kaleidoscope(6);
}
  

function kaleidoscope(n){
  
  var originX = windowWidth/2;
  var originY = windowHeight/2;
  
  var px= pmouseX - originX;
  var py= pmouseY - originY;
  var x = mouseX - originX;
  var y = mouseY - originY;
  

  var dpx = atan2(py,px);
  var dx = atan2(y,x);
  
  var dispx = dist(originX,originY,pmouseX,pmouseY);
  var disx = dist(originX,originY,mouseX,mouseY);
  
  for(var i =0; i<n; i++){
    var da = 2*PI*i/n;
    
    var dgrpx = dpx + da;
    var dgrx = dx + da;
    
    var npx = originX+cos(dgrpx)*dispx;
    var npy = originY+sin(dgrpx)*dispx;
    var nx = originX + cos(dgrx)*disx;
    var ny = originY + sin(dgrx)*disx;
    
    strokeWeight(4);
    stroke(random(150,200),120,random(180,255));
    line(npx, npy,nx, ny);
  
}}