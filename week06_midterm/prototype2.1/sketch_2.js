// code 2
// bfa dt
// spring 2018

// week 6 mid-term
var sceneState = {
	TUTORIAL:0,
};

var sceneData;
var card;
var cards [];



var currentState = sceneState.TUTORIAL;

var keyOn = false;


function preload() {
  sceneData = loadJSON('text.json');
}


function setup() {
	createCanvas(800, 700);
	CreateScenesFromData(sceneData.cards);

}

function draw() {
	Card.display();
	keyOn = false;
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    cards.push(new Card(data[i]));
  }
}


function Card(cards){
	this.width = width - 100;
	this.height = height - 50;
	this.cardText = cards;
	

	this.update = function () {
		this,cardText = cards[r];

	}

	this.display = function () {
		rect(100,50,this.width, this.height);
		fill(255);
		textSize(28);
		textAlign(CENTER, CENTER);
		text(this.cardText,width/2,height/2);


	}
}

function keyPressed() {
  keyOn = true;

  if (key === ' ') {
  	r = int(random(0,cards.length));
  	print(r);
  }
}

function keyReleased() {
keyOn = false;

}


// function drawScene(whichScene) {
// 	switch (currentState) {
// 		case sceneState.TUTORIAL:

// 			background(150, 200, 200);
// 			fill(0);
// 			textSize(28);
// 			textAlign(CENTER, CENTER);
// 			text("Wecome to play this little drinking game",width/2,height/2-100);
// 			text("Hope your like it",width/2,height/2);

// 				break;
// 				default:
// 					break;
// 			}
// 	}

// 	function checkTransition(whichScene) {
// 		switch (whichScene) {
// 			case sceneState.TUTORIAL:
// 				if (keyOn) {
// 					currentState++;
// 					setUpScene(currentState);
// 				}
				
// 				break;
// 			default:
// 				break;
// 		}
// 	}







