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

function preload() {
  textData = loadJSON("text.json");
  title = loadFont('assets/Neons_demo.otf');
  cardText = loadFont('assets/CARDC.ttf');
  cocktail = loadImage("assets/cocktail.png");
  end = loadImage("assets/end.png");
}


function setup() {
 createCanvas(800, 700);
 waterfall = new Waterfall();
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

 	// ellipse(200, 233, 10, 10);
  
  	
			// if(currentState == 0){
			// if(colorR<255){
			// 	colorR ++;
			// }else{colorR =255;
			// }}

			// fill(200+random(5,55),40,90-mouseY/10,180);
			// textSize(50+colorR/6);
			// strokeWeight(3);
			// text("GET DRUNK",width/2+10,height/2-200+mouseX/80-mouseY/30);

			break;

		//1
		case sceneState.SETUP:
			background(0);
			

			stroke(255);
			noFill();
			rect(width/4,height/2,70,40);
			rect(width/4*2,height/2,70,40);
			rect(width/4*3,height/2,70,40);

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
	this.pos = createVector(width / 2, 100);
	this.vel = createVector(0, 0);
	var speed = 3;
	this.vel.y = this.pos.y/6 * speed;


	this.update = function () {
	
		if(this.pos.y <= 800){
			this.pos.add(this.vel);
		}else{
			this.pos = createVector(width / 2, 100);
			this.pos.add(this.vel);
		}
	}

	this.display = function () {
		fill(255);
  		textAlign(CENTER, CENTER);
		text("Fall!",this.pos.x, this.pos.y);

  		push();
  		n = 1;
  		fill(255);
  		translate(0, n*10);
  		text("Fall!", this.pos.x, this.pos.y);	

		push();
		n = 2;
  		fill(255);
  		translate(0, n*12);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 3;
  		fill(255);
  		translate(0, n*14);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 4;
  		fill(255);
  		translate(0, n*16);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 5;
  		fill(255);
  		translate(0, n*18);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 6;
  		fill(255);
  		translate(0, n*20);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 7;
  		fill(255);
  		translate(0, n*22);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 8;
  		fill(255);
  		translate(0, n*24);
  		text("Fall!",this.pos.x, this.pos.y);	


for (var i = 1; i <= 8; i++) {
	pop();
}
	}

}



function Card(cardArray){
this.display = function () {
fill(255);
textSize(28);
textFont("CARDC");
text(cardArray,100,100,600,300);
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
