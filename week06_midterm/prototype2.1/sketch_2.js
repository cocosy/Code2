// code 2
// bfa dt
// spring 2018

// week 6 mid-term


var textData;
// var card;
var cards = [];


function preload() {
  textData = loadJSON('text.json');
}


function setup() {
	createCanvas(800, 700);
	var cards = textData.cards;
	 for (var i = 0; i < cards.length; i++) {
	 text(cards[i],width/2,height/2+15*i);
	 }
	// CreateTextFromData(textData.card);

}

// function draw() {
// 	Card.display();

// }

// function CreateTextFromData(data) {
//   for (var i = 0; i < data.length; i++) {
//     cards.push(new Card(data[i].card)）;
//   }
// }


// function Card(cards){
// 	this.width = width - 100;
// 	this.height = height - 50;
// 	this.text = cards;

	

// 	this.display = function () {

// 		rect(100,50,this.width, this.height);
// 		fill(255);
// 		textSize(28);
// 		textAlign(CENTER, CENTER);
// 		for (var j = 0; j < text.length; j++) {
// 		text(this.text[j],width/2,height/2+15*j);

// 	}}
// }



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







