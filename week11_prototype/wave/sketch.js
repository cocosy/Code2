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




// var xspacing = 30;   // 波を描画している点の間隔調整
// var w;              //描画幅指定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 of entire wav

// var theta = 0.0;
// var amplitude = 70.0;  // 波の高さを調整
// var period = 1200.0;  // 波の数を調整
// var dx;
// var yvalues = [];
var pitch = 0;
var i = 0;


var r;
// var cards;
var currentState = sceneState.TUTORIAL;

var keyOn = false;
var mousePositionX;
var mousePositionY;
var j;

function preload() {
 
}


function setup() {
 createCanvas(800, 700);
 waterfall = new Waterfall();
smooth(4); 
  // for(var j= 0; j<4;j++){
	 //      	for (var i = 0; i < textData.card.length-1; i++) {
  //         	 var newCard = new Card(textData.card[i]);
  //       	cardArray.push(newCard);}}
  // 			cardArray.push(new Card(textData.card[13]));
  //  			cardArray.push(new Card(textData.card[13]));
	// CreateScenesFromData(card);

}


function draw() {
	setUpScene(currentState)
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


			break;

		//1
		case sceneState.SETUP:
		 // background(0);
		 fill(0,0,0, 180);
			if(i%5 == 0){
			rect(-10, -10, windowWidth, windowHeight);
		}
		noFill();
	  	// stroke( 184, 250, 211);
	  	 // frameRate(20);
	  	noStroke();
 	 	var x = 0;
		beginShape();
			noStroke();
  	 	while(x < width){
    		var y = height * noise(x/2500,pitch); //2D noise
			vertex(x, y);
			fill( 184, 250, 211);
			 textSize(9);
			 text("hi", x,y);
			 noFill();
    //point(x ,y);
     		x = x +15;  //x座標の描画間隔
   		}
		endShape();
  		pitch = pitch + 0.2; //y座標の描画間隔微調整
  		i++;
  			  	noStroke();

			break;



		//2
		case sceneState.CHOICE:
		background(0);
		fill(0);
		textAlign(CENTER);
		textSize(28);
		fill(255);
		text("Me",mouseX+20,mouseY);
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

		break;
		
		
	
		
		//4
		case sceneState.NEXT:
		background(0);
	



		break;

		//5
		case sceneState.END:
		background(0);
		textSize(28);
		textAlign(CENTER, CENTER);
		fill(255);
		textFont(cardText);
		text("[This round is over] \n Feels GOOD? then refresh to Restart.",width/2,height/2-150);

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
				// background(0);
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
	this.pos = createVector(width / 2, 50);
	this.vel = createVector(0, 0);
	var speed = 2.5;
	this.vel.y = this.pos.y/6 * speed;


	this.update = function () {
	
		if(this.pos.y <= 400){
			this.pos.add(this.vel);
		}else{
			this.pos = createVector(width / 2, 100);
		
		}
	}

	this.display = function () {
		fill(255);
  		textAlign(CENTER, CENTER);
		text("Fall!",this.pos.x, this.pos.y);

  		push();
  		n = 1;
  		fill(255);
  		translate(0, n*12);
  		text("Fall!", this.pos.x, this.pos.y);	

		push();
		n = 2;
  		fill(255);
  		translate(0, n*13);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 3;
  		fill(255);
  		translate(0, n*14);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 4;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 5;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 6;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 7;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 8;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	

  		push();
  		n = 9;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 10;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	
  		
  		push();
  		n = 11;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!", this.pos.x, this.pos.y);	
  		
  		push();
  		n = 12;
  		fill(255);
  		translate(0, n*15);
  		text("Fall!",this.pos.x, this.pos.y);	


for (var i = 1; i <= 12; i++) {
	pop();
}
	}

}


//  function Yvalues(){
//  	   var w = width+ 320;
//  			var dx = (TWO_PI / period) * xspacing;
//  			var x;

// this.update = function(){			
//   			var x = 0.01;
//   			for (var i = 0; i < yvalues.length; i++) {
//   			  yvalues[i] = sin(x)*amplitude;
// 			 x +=dx;
// 			 }
// 			}


// this.display = function () {
//   			 noStroke();
//   			for (var x = 0; x < yvalues.length; x++) {
//     		ellipse(x*xspacing, height/2+yvalues[x], 11 , 11 );
//     		fill(255);
//     		ellipse(x*xspacing + (-300), height/2+yvalues[x], 15 , 15 );
//    		 	fill(255);
//  		 	}

//  }
// }




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

