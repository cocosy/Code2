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
   cardArray.push = new Card(textData.card[i]);
}

	
	// CreateTextFromData(textData.card);

}



 function draw() {

	    fill(255);
	
 	textAlign(CENTER, CENTER);
 	 for (var i = 0; i < textData.card.length; i++) {
 	// r = int(random(0,cardArray.length));
    cardArray[i].display();
}
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

// 		rect(100,50,this.width, this.height);
    r = int(random(0,cardArray.length));
	fill(255);
	textSize(15);
	textAlign(CENTER, CENTER);
	text(this.text[r],100,100+30*i);

	}
}





// function keyPressed() {
//   var numberPressed = parseInt(key);
//   var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
//   if (newScene !== undefined) {
//     currentScene = newScene;
//   }
// }







