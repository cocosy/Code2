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

    
    
    // arc(this.x,this.y+110, 210, 180,-PI,PI*2,HALF_PI);
    for (var i = 0; i < this.hair; i++) {
    for (var j = 0; j < this.hair; j++) {
   strokeWeight(5);
    line(this.x-50+i*20+j*155,this.y-60,this.x-70+i*30+j*157,this.y-120);
  }
   strokeWeight(2);
    fill(this.hair*25,this.x/2,this.y/2);
    ellipse(this.x+i*152,this.y,150,150);
    fill(255);
    ellipse(this.x+25+i*152,this.y-20,20,20);
    ellipse(this.x-25+i*152,this.y-20,20,20);
   strokeWeight(2);
  
    arc(this.x+i*152,this.y+20,90,60,radians(180)-radians(this.r),radians(this.r),CHORD);
  }
    // arc(this.x,this.y+110, 210, 180,-PI,TWO_PI,HALF_PI);
    //0,PI smile; PI - 0
  
  }
}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}