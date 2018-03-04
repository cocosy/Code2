// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 5
// choose your own adventure data

// scene data model: 

// {
//   sceneText: '', //the scene text
//   options: [], // the text options to choose
//   nextScenes: []  // the target scene based on the previous options
// }

var sceneData;

var currentScene = 0;
var scenes = [];

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(255, 190, 190);
  scenes[currentScene].display();

  fill(0);
  textSize(24);
  text("press the option number to advance to the indicated scene", 50, 700);
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes, data[i].x, data[i].y,data[i].r,data[i].hair));
  }
}

function Scene(sceneText, options, nextScenes,x,y,r,hair) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.x = x;
  this.y = y;
  this.r = r;
  this.hair = hair;

  this.display = function() {
    fill(0);
    textSize(32);
    text(this.sceneText, 50, 50);

    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 50, 90+ i * 50);
    }

    
    strokeWeight(2);
    fill(this.hair*25,this.x/2,this.y/2);
    ellipse(this.x,this.y,350,350);
    fill(255);
    ellipse(this.x+65,this.y-50,70,70);
    ellipse(this.x-65,this.y-50,70,70);
    strokeWeight(5);
    // arc(this.x,this.y+110, 210, 180,-PI,PI*2,HALF_PI);
    for (var i = 0; i < this.hair; i++) {
    // line(this.x-80+10*i,this.y-120+i*sin(PI),this.x-110+i*15,this.y-270+i*sin(PI));
    line(this.x-50+i*30,this.y-120,this.x-70+i*50,this.y-270);}

    strokeWeight(2);
    angleMode(DEGREES);
    arc(this.x,this.y+110, 210,this.r,0,radians(this.r),PIE);
    // arc(this.x,this.y+110, 210, 180,-PI,TWO_PI,HALF_PI);
  
  }
}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}