// code 2
// bfa dt
// spring 2018

// week 6 mid-term


var textData;
 // var card;
 var cardArray = [];


function preload() {
  textData = loadJSON("text.json");
}


function setup() {
	createCanvas(800, 700);
	fill(0);
	 for (var i = 0; i < textData.card.length; i++) {
   var newCard = new Card(textData.card[i]);
   cardArray.push(newCard);}
}

	
	// CreateTextFromData(textData.card);

 function draw() {
 

    cardArray[4].display();
}
// 	Card.display();

// }

// function CreateTextFromData(data) {
//   for (var i = 0; i < data.length; i++) {
//     cards.push(new Card(data[i].card)）;
//   }


function Card(cardArray){
// 	this.width = width - 100;
// 	this.height = height - 50;
this.text = cardArray;

	

 	this.display = function () {
// rect(100,50,this.width, this.height);
    // r = int(random(0,cardArray.length));
	fill(255);
	textSize(15);
	text(this.text,10,100);
	}
}


// function keyPressed() {
//   var numberPressed = parseInt(key);
//   var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
//   if (newScene !== undefined) {
//     currentScene = newScene;
//   }
// }

// function keyPressed() {
// 	if (newScene === ' '){
//   r = int(random(0,cardArray.length));
//  }
// }







