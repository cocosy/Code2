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
	  	textSize(20);
	 for (var i = 0; i < textData.card.length; i++) {
	 var newCard = new Card (textData.card[i]);
	 cardArray.push(newCard);
	 }
	// CreateTextFromData(textData.card);

}

 function draw() {

	    fill(255);
	
 		textAlign(CENTER, CENTER);

 		for (var i = 0; i < textData.card.length; i++) {
        Card(i).display();
    }
// 	Card.display();

// }

// function CreateTextFromData(data) {
//   for (var i = 0; i < data.length; i++) {
//     cards.push(new Card(data[i].card)）;
//   }
 }


function Card(cardArray){
// 	this.width = width - 100;
// 	this.height = height - 50;
this.text = cardArray;

	

 	this.display = function () {

// 		rect(100,50,this.width, this.height);
		fill(255);
		textSize(28);
		textAlign(CENTER, CENTER);
for (var j = 0; j < text.length; j++) {
text(this.text[j],width/2,height/2+15*j);

	}}
}



// function keyPressed() {
//   var numberPressed = parseInt(key);
//   var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
//   if (newScene !== undefined) {
//     currentScene = newScene;
//   }
// }







