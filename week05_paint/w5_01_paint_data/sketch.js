// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 5
// saving/loading paint data
// based on example by Jon Beilin

var paintmarks = [];
var paintDataFile = 'paintData.json';

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  fill(0);
  textSize(24);
  text("drag the mouse across the canvas to draw.", 50, 570);
  text("press 'S' to save a json file with the current paint data.", 50, 600);
  text("press 'L' to load a json file from your computer.", 50, 630);

    for (var i = 0; i < paintmarks.length; i++) {
    paintmarks[i].display();
  }
}

function PaintMark(position,size,r,g,b) {
  this.position = position;
  this.r = r;
  this.g = g;
  this.b = b;
  this.size = size;
  

  this.display = function() {
    // noStroke();
    // fill(250,5,250);
    stroke(this.r, this.g, this.b);
    fill(this.g, this.b, this.r,100+random(0,50));
    ellipse(this.position.x, this.position.y, this.size, this.size);
    rect(this.position.y,this.position.x,this.size,this.size);
  }

}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY),map(mouseX,0,800,1,50),map(mouseX,0,800,0,255),random(20,255),map(mouseY,0,800,0,255)));

}


function keyPressed() {
  if (key === 'S') {
    savePaintData();
  }
  if (key === 'L') {
    loadPaintData();
  }
}

function savePaintData() {
  positionsToSave = [];
  for (var i = 0; i < paintmarks.length; i++) {
    positionsToSave.push(
      { 
        x: paintmarks[i].position.x, 
        y: paintmarks[i].position.y,
        size: paintmarks[i].size,
        r: paintmarks[i].r,
        g: paintmarks[i].g,
        b: paintmarks[i].b
      }
    );
  }
  saveJSON(positionsToSave, 'paintData.json');
}

function loadPaintData() {
  loadJSON(paintDataFile, parsePaintData);
}

function parsePaintData(data) {
  paintmarks = [];

  for (var i = 0; i < data.length; i++) {
    paintmarks.push(new PaintMark(createVector(data[i].x, data[i].y),map(mouseX,0,800,1,50),map(mouseX,0,800,0,255),random(20,255),map(mouseY,0,800,0,255)));
   
  }
}