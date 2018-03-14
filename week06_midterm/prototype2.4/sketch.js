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
var currentState = sceneState.TUTORIAL;

var keyOn = false;
// var tutorialTimer;
// var gameTimer;
// var gameTimePressed;
// const timeForTutorial = 3000;
// const timeForGame = 5000;
// function preload() {
//   cards = loadJSON('card.json');
// }

function preload() {
  textData = loadJSON("text.json");
}


function setup() {
	createCanvas(800, 700);
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
		fill(255);
		// text("TEXT",width/2,height/2);

		if(keyOn){
		r = int(random(0,cardArray.length));
  	  	cardArray[r].display();
   	 	print(cardArray.length);
    	cardArray.splice(r,1);
   		 noLoop()
		}


				break;
		case sceneState.END:
		background(255,180,180);
		textSize(28);
		textAlign(CENTER, CENTER);
		text("Restart",width/2,height/2-100);
		text("Next Person",width/2,height/2);
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

	     for(var j= 0; j<4;j++){
	      	for (var i = 0; i < textData.card.length-1; i++) {
          	 var newCard = new Card(textData.card[i]);
        	cardArray.push(newCard);}}
  			cardArray.push(new Card(textData.card[14]));
   			cardArray.push(new Card(textData.card[14]));
				// tutorialTimer = millis();
				break;
			case sceneState.END:
				// tutorialTimer = millis();
				break;
			default:
				break;
		}
	}

function Card(cardArray){
this.text = cardArray;
this.margin = 10;
this.width = width;
this.height = height;

 this.display = function () {
 fill(255);
textSize(15);
text(this.text,width/2-200,100);
}
	
}

function keyPressed() {
  keyOn = true;

  if (key === ' ') {
  	currentState = 0;
  }
  }

function keyReleased(){
keyOn = false;
 }
