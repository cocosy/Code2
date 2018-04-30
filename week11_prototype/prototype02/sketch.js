// code 2
// bfa dt
// spring 2018

// week 6 mid-term
var sceneState = {
	TUTORIAL:0,
	SETUP:1,
	CHOICE: 2,
	GAME: 3,
	NEXT: 4,
	END:5
};

cardX =5;
cardY = 3;

var textData;
var r;
var cardArray = [];
// var cards;
var currentState = sceneState.TUTORIAL;

var keyOn = false;
var cardOn = false;
var mousePositionX;
var mousePositionY;
var title;
var colorR =0;
var cocktail;
var end;
var start;
var j;

var myAngle = 30;
var myColor = '#eeee00';

var gui;


function preload() {
 
}


function setup() {
 createCanvas(800, 700);
 waterfall = new Waterfall();
  sliderRange(0, 90, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('myColor', 'myAngle');

  // Only call draw when then gui is changed
  noLoop();

  // for(var j= 0; j<4;j++){
	 //      	for (var i = 0; i < textData.card.length-1; i++) {
  //         	 var newCard = new Card(textData.card[i]);
  //       	cardArray.push(newCard);}}
  // 			cardArray.push(new Card(textData.card[13]));
  //  			cardArray.push(new Card(textData.card[13]));
	// CreateScenesFromData(card);

}


function draw() {
	drawScene(currentState);
	checkTransition(currentState);
	keyOn = false;

}

function drawScene(whichScene) {
	switch (currentState) {
		case sceneState.TUTORIAL:
			background(0);
			fill(0, 255, 0);
		waterfall.update();
		waterfall.display();


			break;

		//1
		case sceneState.SETUP:
		background(0);
  fill(myColor);
  angleMode(DEGREES);
  arc(width/2, height/2, 100, 100, myAngle/2, 360 - myAngle/2, PIE);

			// fill(255);
			// noStroke();
			// textSize(22);
			// text("<6",width/4+space,height/2+20);
			// text("6-9",width/4*2+space,height/2+20);
			// text(">9",width/4*3+space,height/2+20);
			// // noFill();
			break;



		//2
		case sceneState.CHOICE:
		background(0);
		fill(0);

				
		textFont(cardText);
		textAlign(CENTER);
		textSize(20);
		fill(255);
		text("[Choose your card by Clicking \n anywhere on the game canvas]",mouseX+20,mouseY);
		break;

		//3
		case sceneState.GAME:
		background(255,0,0);
		fill(0);
		rect(10,10,width-20,height-20);
		noFill();
		stroke(255,0,0);
		rect(width-155,height-105,80,30);
		noStroke();
		textSize(18);
		fill(255);
		text("Okay",width-115,height-90);
		// if(cardOn){

		// var r = floor(map((mousePositionX+mousePositionY)/2,0,(width+height)/2,0,cardArray.length));
		// cardArray[r].display();
  // 	   }
		// print(cardArray.length);
		break;
		
		
	
		
		//4
		case sceneState.NEXT:
		background(0);
		textSize(28);
		textAlign(CENTER, CENTER);
		fill(255);
		text("["+cardArray.length+" cards left]", width/2,height/2-150);
		text("Now press Right Arrow to Next Person",width/2,height/2);
		image(cocktail,width/2-65,height/2+50,150,200);


		break;

		//5
		case sceneState.END:
		background(0);
		textSize(28);
		textAlign(CENTER, CENTER);
		fill(255);
		textFont(cardText);
		text("[This round is over] \n Feels GOOD? then refresh to Restart.",width/2,height/2-150);
		image(end,width/2-50,height/2-50);
		break;

				
		default:
		break;
			}
	}

	function checkTransition(whichScene) {
		switch (whichScene) {
			case sceneState.TUTORIAL:
				if (keyOn) {
					currentState++;
					setUpScene(currentState);
				}
				
				break;
			case sceneState.SETUP:

				if (keyOn) {
					currentState++;
					setUpScene(currentState);
				}
			
				break;
				case sceneState.CHOICE:
				if (keyOn) {
					currentState++;
					setUpScene(currentState);

				}

				break;
				case sceneState.GAME:
				if (keyOn) {				
					currentState++;
					setUpScene(currentState);
				}

				break;
				case sceneState.NEXT:
				cardOn = false;	
				if (keyOn) {							
				//	print(int(random(0,13)));
					currentState++;
					setUpScene(currentState);
				}

				break;
				case sceneState.END:

				if (keyOn) {
					currentState=0;
					setUpScene(currentState);
				}

				break;
			default:
				break;
		}
	}

	function setUpScene(whichScene) {
		switch (whichScene) {
			case sceneState.TUTORIAL:
				break;
			case sceneState.SETUP:
				// tutorialTimer = millis();
				background(255);
				break;
			case sceneState.CHOICE:
				// tutorialTimer = millis();
				break;
			case sceneState.GAME:
			
				// tutorialTimer = millis();
				break;
			case sceneState.NEXT:
				// cardArray.splice(r,1);
			break;
			case sceneState.END:
			// cardOn = false;
				// tutorialTimer = millis();
				break;
			default:
				break;
		}
	}

function Waterfall(){
	this.pos = createVector(width / 2, 50);
	this.vel = createVector(0, 0);
	var speed = 2.5;
	this.vel.y = this.pos.y/6 * speed;


	this.update = function () {
	
		if(this.pos.y <= 400){
			this.pos.add(this.vel);
		}else{
			this.pos = createVector(width / 2, 100);
		
		}
	}

	this.display = function () {
		fill(255);
  		textAlign(CENTER, CENTER);
		text("Fall!",this.pos.x, this.pos.y);

  		push();
  		n = 1;
  		fill(255);
  		translate(0, n*12);
  		text("Fall!", this.pos.x, this.pos.y);	

		push();
		n = 2;
  		fill(255);
  		translate(0, n*13);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 3;
  		fill(255);
  		translate(0, n*14);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 4;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 5;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 6;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 7;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 8;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	

  		push();
  		n = 9;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 10;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 11;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 12;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	


for (var i = 1; i <= 12; i++) {
	pop();
}
	}

}





function keyPressed() {

if(keyCode === RIGHT_ARROW){
	keyOn = true;
}else{
	keyOn = false;
}
}


function keyReleased(){
keyOn = false;
 }


 function mousePressed(){
 	cardOn = true;
 	keyOn = true;
}
 

  function mouseReleased(){
 cardOn = false;
 keyOn = false;
  // keyOn = true;
}
