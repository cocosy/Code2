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
// var tutorialTimer;
// var gameTimer;
// var gameTimePressed;
// const timeForTutorial = 3000;
// const timeForGame = 5000;

function preload() {
  textData = loadJSON("text.json");
  title = loadFont('assets/Neons_demo.otf');
  cardText = loadFont('assets/CARDC.ttf');
  cocktail = loadImage('assets/cocktail.png');
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
		//0
		case sceneState.TUTORIAL:
			background(0);
			image(cocktail,width/2,height/2，400，200)
			noStroke();
			textFont(cardText);
			textAlign(CENTER, CENTER);
			if(currentState == 0){
			if(colorR<255){
				colorR ++;
			}else{keyOn = true;}
			}
			 // fill(random(0,255),110-mouseX/10,90-mouseY/10);
			fill(220-mouseX/10,20-mouseY/10,225,200+random(5,125));

			// text("Welcome to play this little drinking game",width/2,height/2-150+mouseX/80-mouseY/10);
			// fill(255-random(0,20),102 , 0)；


			textSize(50+colorR/6);
			strokeWeight(4);

			stroke(0,200-random(0,60), 255);
			text("GET DRUNK",width/2+10,height/2-200+mouseX/80-mouseY/30);
			// fill(90-mouseY/10,200+random(5,55),110-mouseX/10,120);
			// text("Welcome to play this little drinking game",width/2,height/2-127+mouseX/80-mouseY/10);
			noFill()
			stroke(255);
			strokeWeight(1);
			//200+random(5,55),110-mouseX/10,90-mouseY/10,180
			// strokeWeight(1);
			// rect(width/2-180,height/2-20,390+mouseX/100,120-mouseY/100);

			stroke(255);
			strokeWeight(2);
			noFill();
			rect(width/2-100,height/2-130,200,270);

			fill(255);
			noStroke();
			textFont(cardText);
			textSize(20);
			fill(random(0,25),130-mouseX/10,90-mouseY/10);
			text("*INSTRUCTION*",width/2,height/2);
			text("Right Arrow Key: \n Always to Next Step",width/2,height/2+50);
			textFont(title);
			fill(200-mouseX/10,20-mouseY/10,77,200+random(5,125));
		
			text("Welcome to play this little drinking game",width/2,height/2+150);
			text("Hope you guys enjoy it!",width/2,height/2+180);
			break;

		//1
		case sceneState.SETUP:
			background(0);
			textSize(28);
			textAlign(CENTER, CENTER);
			var space = 35;
			noStroke();
			// fill(255-random(0,20), 0, 225);pink
			fill(220-mouseX/10,20-mouseY/10,225,200+random(5,125))
			text("Choose the number of people:",width/2,height/2-50);

			stroke(255);
			noFill();
			rect(width/4,height/2,70,40);
			rect(width/4*2,height/2,70,40);
			rect(width/4*3,height/2,70,40);

			fill(255);
			noStroke();
			textSize(22);
			text("<6",width/4+space,height/2+20);
			text("6-9",width/4*2+space,height/2+20);
			text(">9",width/4*3+space,height/2+20);
			// noFill();


		



			break;
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
		//2
		case sceneState.CHOICE:
		background(0);
		fill(0);
		strokeWeight(1);
		stroke(255,0,0);
		rect(5,5,width-10,height-10);
		noStroke();
		// fill(200+random(5,55),110-mouseX/10,90-mouseY/10,180);
			for(var i = 0; i <cardX; i++){
				for(var j = 0; j<cardY; j++){
				fill(220-mouseX/10,20-mouseY/10,225,200+random(5,125));
				rect(i*(width/cardX)+((width-cardX*130)/cardX)/2,j*200+60,130,180);
				}
			}
				
		textFont(cardText);
		textAlign(CENTER);
		textSize(20);
		fill(255);
		text("[Choose your card by Clicking \n anywhere on the game canvas]",mouseX+20,mouseY);
		break;
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
		// return floor(random(0,cardArray.length));
		if(cardOn){

		var r = floor(map((mousePositionX+mousePositionY)/2,0,(width+height)/2,0,cardArray.length));
		cardArray[r].display();
  	   }
		print(cardArray.length);
		break;
		
		
   		 // noLoop();
   	//  if(cardOn){
   	// 	cardArray.push(new Card());
  	//  r = int(random(cardArray.length));
  	//  cardArray[r].display();
  	// 	 cardArray.splice(r,1);
		// print(cardArray.length);
		// cardOn=false;
	
		
		//4
		case sceneState.NEXT:
		background(0);
		textSize(28);
		textAlign(CENTER, CENTER);
		fill(255);
		text("["+cardArray.length+" cards left]", width/2,height/2-150);
		text("Now press Right Arrow to Next Person",width/2,height/2);
		break;

		//5
		case sceneState.END:
		background(0);
		textSize(28);
		textAlign(CENTER, CENTER);
		fill(255);
		text("This round is over. \n Take a break then refresh to Restart",width/2,height/2);
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
					currentState =2;
					setUpScene(currentState);
				}

				break;
				case sceneState.END:

				// if (keyOn) {
				// 	currentStat=0;
				// 	setUpScene(currentState);
				//}

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
				cardArray.splice(r,1);
			break;
			case sceneState.END:
			// cardOn = false;
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
textFont("CARDC");
text(cardArray,100,100,600,300);
}	
}



function keyPressed() {
if(keyCode === RIGHT_ARROW){
	if(cardArray.length>0){
	keyOn = true;
}else{
	currentState = 5;
	}
}
}
  
// if(keyCode === DOWN_ARROW){
	
//   	currentState = 2;
//   }else{
  	
//   }

//   };

// if(keyCode === ENTER){
//   	currentState = 0;
//   }
 

function keyReleased(){
keyOn = false;

 }

 function mousePressed(){

if(currentState == 1){
	mousePressedX = mouseX;
	mousePressedY = mouseY;
	if(mousePressedX>width/4 && mousePressedX<width/4+70 && mousePressedY>height/2 && mousePressedY<height/2+40){
		keyOn = true;
		cardX =3;
	}
	if(mousePressedX>width/4*2 && mousePressedX<width/4*2+70 && mousePressedY>height/2 && mousePressedY<height/2+40){
		keyOn = true;
		cardX =4;
	}
	if(mousePressedX>width/4*3 && mousePressedX<width/4*3+70 && mousePressedY>height/2 && mousePressedY<height/2+40){
		keyOn = true;
		cardX =5;
	}
}

if(currentState == 3){
	mousePressedX = mouseX;
	mousePressedY = mouseY;
	if(mousePressedX>width-155 && mousePressedX<width-155+80 && mousePressedY>height-105 && mousePressedY<height-105+30){
		keyOn = true;
	}
}


 if(currentState == 2){
 	mousePositionX = mouseX;
	mousePositionY = mouseY;
 	cardOn = true;
 	keyOn = true;
 }

}
 
  function mouseReleased(){
 cardOn = true;
  // keyOn = true;
}
