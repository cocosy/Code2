// code 2
// bfa dt
// spring 2018

// week 6 mid-term
var sceneState = {
	TUTORIAL:0,
	SETUP:1,
	CHOICE: 2,
	GAME: 3,
	END: 4
};

var textData;
var r;
var cardArray = [];
// var cards;
var currentState = sceneState.TUTORIAL;

var keyOn = false;
var cardOn = false;
var mousePositionX;
var mousePositionY;
// var tutorialTimer;
// var gameTimer;
// var gameTimePressed;
// const timeForTutorial = 3000;
// const timeForGame = 5000;

function preload() {
  textData = loadJSON("text.json");
}


function setup() {
 createCanvas(800, 700);
  for(var j= 0; j<4;j++){
	      	for (var i = 0; i < textData.card.length-1; i++) {
          	 var newCard = new Card(textData.card[i]);
        	cardArray.push(newCard);}}
  			cardArray.push(new Card(textData.card[13]));
   			cardArray.push(new Card(textData.card[13]));
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

			background(150, 200, 200);
			fill(0);
			textSize(28);
			textAlign(CENTER, CENTER);
			text("Wecome to play this little drinking game",width/2,height/2-100);
			text("Hope your like it",width/2,height/2);
				break;

		case sceneState.SETUP:
			background(224, 224, 150);
			textSize(28);
			textAlign(CENTER, CENTER);
			text("Enter number people...",width/2,height/2-50);
			rect(width/2-50,height/2-15,100,30);





// -------------------------------input() -------------------------------------------------
		// background(255);

		// input = createInput();
		// input.position(width / 2, height / 2);

		// button = createButton('confirm');
		// button.position(input.x + input.width+20, height / 2);
		// button.mousePressed(greet);

		// greeting = createElement('h2', 'Enter the number');
  // 		greeting.position(width/2, height/2-100);

  // 		textAlign(CENTER);
  // 		textSize(50);
  // 		noStroke();

		// function greet() {
		// 	var person = input.value();
		// 	greeting.html('welcome');

		// 	for (var i = 0; i < person; i++) {
		// 	ellipse(width / 2 + i * 30, 300, 25, 25);
		// }}

// -------------------------------input() -------------------------------------------------
				break;
		case sceneState.CHOICE:
		background(255);
		fill(150, 200, 200);
			for(var i = 0; i <5; i++){
				for(var j = 0; j<3; j++){
				rect(i*150+40,j*200+60,130,180);
				}
			}
		textSize(28);
		fill(0);
		text("Click anywhere of the canvas",width/2,height/2);
// -------------------------------------cards with p5.play -------------------------------------------------
  //          var poker;
		 	
		// fill(150, 200, 200);
		// 	for(var i = 0; i <5; i++){
		// 		for(var j = 0; j<3; j++){
		// 	poker = createSprite(i*150+40,j*200+60,130,180);
		// poker.onMouseOver = funtciton(){
		// 		this.scale=2;
		// 		}
		// 	poker.onMouseOut = function(){
		// 			this.scale =1;
		// 		}
		// 	}
		// 	}
		     
		
		// fill(150, 200, 200);
		// 	for(var i = 0; i <5; i++){
		// 		for(var j = 0; j<3; j++){
		// 		rect(i*150+40,j*200+60,130,180);
		// 		}
		// 	}
// -------------------------------------cards with p5.play -------------------------------------------------
		
				break;
		case sceneState.GAME:
		background(255);
		fill(0);
		rect(50,50,width-100,height-100);
		// fill(255);
		// textSize(28);
		// text("Press anywhere of the canvas",width/2,height/2);
		if(cardOn){
		var r = floor(map((mousePositionX+mousePositionY)/2,0,(width+height)/2,0,cardArray.length));
		// return floor(random(0,cardArray.length));
		cardArray[r].display();
  	   r;}
		print(cardArray.length);
   		 // noLoop();
   // if(cardOn){
   // 	cardArray.push(new Card());
  //  		r = int(random(cardArray.length));
  // 		cardArray[r].display();
  // 	  	cardArray.splice(r,1);
		// print(cardArray.length);
		// cardOn=false;
	
		
		// cardOn=false;

		break;
		case sceneState.END:
		background(255,180,180);
		textSize(28);
		textAlign(CENTER, CENTER);
		text("Press Enter to restart",width/2,height/2-100);
		text("Press RIGHT arrow to Next Person",width/2,height/2);
				break;

				break
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
					
				//	print(int(random(0,13)));
					currentState++;
					setUpScene(currentState);
				}

				break;
				case sceneState.END:
				cardOn = false;

				if (keyOn) {
					currentState++;
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
			case sceneState.END:
			// cardOn = false;
			cardArray.splice(r,1);
				// tutorialTimer = millis();
				break;
			default:
				break;
		}
	}

function Card(cardArray){
// this.r = 5;
// this.cardArray = cardArray;
//int(random(cardArray.length));
// this.margin = 10;

this.display = function () {
fill(255);
textSize(28);
text(cardArray,100,100,600,300);
}

// thizs.afterDisplay = function(){
// 	this.cardArray.splice(r,1);
//     print(this.cardArray.length);

// }
	
}



function keyPressed() {
	keyOn = true;
  
if(keyCode === RIGHT_ARROW){
  	currentState = 1;
  };

if(keyCode === ENTER){
  	currentState = 0;
  }
 }

function keyReleased(){
keyOn = false;

 }

 function mousePressed(){
 mousePositionX = mouseX;
 mousePositionY = mouseY;
 cardOn = true;
 if(currentState == 2){
 	keyOn = true;
 }
}
 
  function mouseReleased(){
 cardOn = true;
}
