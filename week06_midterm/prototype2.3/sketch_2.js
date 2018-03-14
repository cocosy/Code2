// code 2
// bfa dt
// spring 2018

// week 6 mid-term


var textData;
var r;
var cardArray = [];
keyOn = false;

function preload() {
  textData = loadJSON("text.json");
}


function setup() {
	createCanvas(800, 700);
	fill(0);
	for(var j= 0; j<4;j++){
	 for (var i = 0; i < textData.card.length-1; i++) {
   var newCard = new Card(textData.card[i]);
   cardArray.push(newCard);}}
   cardArray.push(new Card(textData.card[14]));
   cardArray.push(new Card(textData.card[14]));
}

	
	// CreateTextFromData(textData.card);

 function draw() {

 if(keyOn){
	r = int(random(0,cardArray.length));
    cardArray[r].display();
    print(cardArray.length);
    cardArray.splice(r,1);
    noLoop()
}

 if(keyOn){
	r = int(random(0,cardArray.length));
    cardArray[r].display();
    print(cardArray.length);
    cardArray.splice(r,1);
    noLoop()
}

}


// function CreateTextFromData(data) {
//   for (var i = 0; i < data.length; i++) {
//     cards.push(new Card(data[i].card)）;
//   }


function Card(cardArray){
// 	this.width = width - 100;
// 	this.height = height - 50;
this.text = cardArray;
this.margin = 10;
	
// this.setup = function(){
  
//   r = int(random(0,cardArray.length));
// 	}

 this.display = function () {
// rect(100,50,this.width, this.height);
    // r = int(random(0,cardArray.length));
fill(255);
textSize(15);
text(this.text,width/2,100);
}
}


function keyPressed() {
keyOn = true;
 }

function keyReleased(){
keyOn = false;
 }
// }







