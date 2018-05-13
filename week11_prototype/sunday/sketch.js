// code 2
// bfa dt
// spring 2018

// week 6 final
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
var d = [];

var sz;
var offSet
var theta =0;
var angle;
var step =22;
var arcEnd;

//json
var fall = [];
var words = [];
var textData;

var rainSprites = [];
var newText;
var a;
var score=0;
// var str = "Bowties are cool";
// var w = 40;
// var h = 40;
// var r = 100;
var brickX = [];
var brickY = [];
var brick = false;
var brickSprite =[];
var v = 0;


var player;
var x;
var y;
var millisecond;

//
var buttonTrigger =false;
var buttonGame =false;


//keys
var Up =false;
var Right = false;
var Down = false;
var Left = false;

var r;

// var cards;
var currentState = sceneState.TUTORIAL;

var keyOn = false;
var mousePositionX;
var mousePositionY;
var j;

function preload() {
  textData = loadJSON('text.json');
}



function setup() {
 	createCanvas(800, 700);

 	for(var i = 0 ; i < textData.fall.length; i++){
		fall.push(textData.fall[i]);
	}

	for(var i = 0 ; i < textData.Text.length; i++) {
		words.push(textData.Text[i]);
	}

	// for(var i = 0 ; i < textData.x.length; i++){
	// 	brickX.push(textData.x[i]);
	// 	brickY.push(textData.y[i]);
	// }

	for (var i = 0; i < 100; i++) {
    	d.push(new Drop(random(0, windowWidth), random(0, windowHeight), random(2, 4)));
  	}

 	waterfall = new Waterfall();
 	// walls = new wall();
	smooth(4); 

// for (var i = 0; i < textData.length; i++) {
// 	var newText = new TextSprite(textData[i].text);
//     Words.push(new TextSprite(textData[i].text));
// }
    brick = new Group();
 	for (var i = 1; i < 6; i++) {
   		var b = createSprite(random(width/2-80, width/2+100), (height/6)*i, 80, 10);
    	brick.add(b);
}

 player = createSprite(width/2, height-40, 40, 40);
 player.shapeColor = color(0);


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
				textSize(10);
				waterfall.update();
				waterfall.display();
				millisecond = millis();

		break;

		//1
		case sceneState.SETUP:
			 	// background(0);
			fill(0,15);

			rect(-10, -10, windowWidth, windowHeight);
	  	// frameRate(20);
			// beginShape();
			noStroke();
			//  noStroke();
			// stroke(102, 163, 255);
	


			if(millis()-millisecond <3000 && buttonGame == false){
			fill(255);
		    rect(width/2-20, height-60, 40, 40);
		    textSize(50);
			fill(0);
		    text(".",width/2,height-40);
			beginShape();
			noStroke();
			var x = 0;
  	 		while(x < width){
    		var y = height * noise(x/2500,pitch); //2D noise
    		// console.log(pitch);
			vertex(x, y);
			// vertex(0, 0);
			// vertex(windowWidth,0);
			vertex(0, windowHeight);
			vertex(windowWidth,windowHeight);
			fill(102, 163, 255);
			// noStroke();
			textSize(9);
			text("hi", x,y-2);
			fill(0, 51, 128,20);
			x = x +10;
			// rect(-10, y+20, windowWidth, windowHeight-y);
			// stroke(102, 163, 255);
			// noFill();
  		  //point(x ,y);
     		 //x座標の描画間隔
   			}
   			endShape();
   		}else{	
   			player.shapeColor = color(255,200);

			player.collide(brick);
		
				if(player.position.x>width/2+100 || player.position.x<width/2-80){
			player.velocity.x*= -1;
			}else if(player.position.y>height || player.position.y<0){
			player.velocity.y*= -1;
			}
		// console.log(brick[5].position.x);

  			drawSprites();
			// textSize(50);
			// fill(0);
			// text(".",player.position.x,player.position.y);
			textSize(50);
			fill(0);
			text(".",brick[0].position.x,brick[0].position.y+2);
			text(".",brick[3].position.x,brick[3].position.y+5);
  	
   			beginShape();
			
			noStroke();
   			var x = 0;
   			while(x < width/2-100){
    		var y = height * noise(x/2500,pitch); //2D noise
    		// console.log(pitch);
			vertex(width/2-100, y);
			vertex(0, y);
			// vertex(windowWidth,0);
			vertex(0, windowHeight);
			vertex(width/2-100,windowHeight);
			fill(102, 163, 255);
			// noStroke();
			textSize(9);
			text("hi", x,y-2);
			fill(0, 51, 128,20);
			x = x +10;
   			}
   			endShape();
   			var z = width/2+120;
   			while(z < width && z>width/2){
   			beginShape();
    		var y = height * noise(z/2500,pitch); //2D noise
    		// console.log(pitch);
			vertex(z, y);
			// vertex(0, 0);
			vertex(width/2+120,y);
			vertex(width/2+120, windowHeight);
			vertex(windowWidth,windowHeight);
			fill(102, 163, 255);
			// noStroke();
			textSize(9);
			text("hi",z,y-2);
			fill(0, 51, 128,20);
			z = z +10;

   			}
   			endShape();
   		}
					


  			pitch = pitch + 0.02; //y座標の描画間隔微調整
  			i++;
  			noStroke();

		
			break;

		
		case sceneState.CHOICE:
		// clear(brick);	
				background(255);
				// if(Up){
				// player.velocity.x = 0;
				// player.velocity.y -= 1;
				// }else if(Down){
				// player.velocity.x = 0;
				// player.velocity.y += 1;
				// }else if(Right){
				// player.velocity.x +=1;
				// player.velocity.y =0;
				// }else if(Left){
				// player.velocity.x -=1;
				// player.velocity.y =0;
				// }

		   		a = random(0,13);
		   		var i = parseInt(a);
		  		console.log(i);
				
		 		// for(var i = 0 ; i <words.length; i++){
		 		var s = new TextSprite(random(0,windowWidth),0,words[i]);
				rainSprites.push(s);
		    	//}


		  		for (var i = 0; i < rainSprites.length; i++) {
		      		rainSprites[i].display();
		      		rainSprites[i].collision();
		      		rainSprites[i].TextOverlap();
		      		if (rainSprites[i].sprite.position.y > windowHeight-100) {
		      			rainSprites[i].sprite.position.y = windowHeight+20;
		      			noFill();
		      			stroke(100);
		      			ellipse(rainSprites[i].sprite.position.x, windowHeight - random(50, 70), random(25, 100), 10);
		      			noStroke();
		      			fill(0);
		      				rainSprites.splice(i,1);
		      			// console.log(rainSprites.length);
		      		}
		  		}

		  		player.shapeColor = color(0);
		  		player.velocity.x = (mouseX-player.position.x)*0.1;
		  		player.velocity.y = (mouseY-player.position.y)*0.1;
		  		console.log(score);
				// player.collide(rainSprites);
		  		// rainSprites.debug = mouseIsPressed;
		  		player.debug = mouseIsPressed;
		  		drawSprites();
				// textFont(cardText);
				text("[This round is over] "+score+ "\n Feels GOOD? then refresh to Restart.",width/2,height/2-150);
		break;


		//3
		case sceneState.GAME:
				background(0);
				
	
		 		fill(255);
				textAlign(CENTER);
				textSize(28);
				text("End",width/2,height/2);
				rect(width/2+25,height/2-8,10,10);
			 	mousePositionX=mouseX;
				mousePositionY=mouseY;
				// drawSprites();
				if(buttonTrigger){
				fill(0);
				text(".",width/2+30,height/2);
				}
				else{fill(255);
				text(".",mousePositionX+20,mousePositionY);}

				// fill(0, 25);
		 		//rect(-5, -5, windowWidth, windowHeight);


// 		// brick =true;
// 		for (var i = 0 ; i < 3; i++){
// 	var brickSprite = createSprite(brickX[i],brickY[i], 40, 5);
// 	// brick.add(brickSprite);
// }
	
		// console.log(brickX.length);
	
		// 		player.velocity.x = 
		//     	(mouseX-player.position.x)*0.1;
		//   		player.velocity.y = 
		//     	(mouseY-player.position.y)*0.1;

		//   		// 	for (var i = 0; i < d.length; i++) {
		//    	// 	 d[i].displ();
		//   		// }
		//   		player.shapeColor = color(255);
		//   		drawSprites();
				
		break;
		

		//4
		case sceneState.NEXT:
				var arcEnd;
				background(20);
				strokeWeight(5);
		 		translate(width/2, height/2);
		  		var angle=0;
		 	 	for (var i=0; i<20; i+=2) {
		   	 	noFill();
		    	var sz = i*step;
		    	var offSet = TWO_PI/20*i;
		    	var arcEnd = map(sin(theta+offSet),-1,1, PI, TWO_PI);
		    	stroke(255);
		    	arc(0, 0, sz, sz, PI, arcEnd);
		    	 // console.log(sz);
		  		}
				// console.log(arcEND);
		  		// colorMode(RGB);
		  		// resetMatrix();
		  		theta += .0323;
				
		break;


		//5
		case sceneState.END:
				text("end",width/2,height/2-150);	
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
				if (player.collide(brick)||keyOn) {
					// console.log(player.collide(brick));
					currentState++;
					setUpScene(currentState);

				}
			
				break;
				case sceneState.CHOICE:
				if (keyOn||score>300) {
					currentState++;
					setUpScene(currentState);
					buttonGame = false;


				}

				break;
				case sceneState.GAME:
				if (keyOn) {				
					currentState++;
					setUpScene(currentState);

				}

				break;
				case sceneState.NEXT:
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
			for (var i = 0; i < brick.length; i++) {
					brick[i].remove();
				}
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
  		textSize(18);
		text("fall",this.pos.x, this.pos.y);


  		
//  		n = 1;
  		for (var i = 1; i <= 8; i++) {
  		push();
  		fill(255);
  		translate(0, i*12+(random(1,3)));
  		text(fall[i],this.pos.x, this.pos.y);	
}
		for (var i = 1; i <= 8; i++) {
		pop();
		}
		}

}



function Drop(x, y, sp) {
  var x1 = x;
  var y1 = y;
  var x2;
  var y2;
  var s = sp;
  var vel;

  this.displ = function() {
    var mx = mouseX / 100;
    if (mx <= 0) {
      mx = 0.05;
    }
    y1 = y1 + s * mx;
    x2 = x1;
    y2 = y1 + 25;

	textAlign(CENTER, TOP);
    fill(200);
    strokeWeight(0.5);
    stroke(100);
    line(x1,y1,x2,y2);
    noStroke();

    textSize(10);
    textLeading(9);
    text("o\nm\ng",x1, y1);


    if (y1 >= windowHeight - 100) {
      noFill();
      stroke(200);
      ellipse(x1, windowHeight - random(50, 70), random(25, 100), 10);
      x1 = random(0, windowWidth);
      y1 = -120;
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

// function wall(){
// 	noFill();
// 	noStroke();
// 	rect(0,0,width/2-100,height);
// 	rect(width/2+100,0,width/2-200,height);

// 	this.collision = function(){
	


// }
		


function TextSprite(x,y,words) {
    this.text = words;
    // this.x = random(0,windowWidth);
    // this.y = 0;
    this.sprite = createSprite(x,y, 16, 50);
    this.sprite.velocity.x = 0;
    this.sprite.velocity.y = random(1,15);
    this.sprite.visible = false;
    this.sprite.debug = mouseIsPressed;

    this.display = function() {
        text(this.text, this.sprite.position.x-5, this.sprite.position.y-12);
    }
    

    this.collision = function(){player.collide(this.sprite);}

    this.TextOverlap = function() {
    	if (player.overlap(this.sprite)) {
    this.sprite.visible = true;
    this.sprite.remove();
    score += 1;
  }
  
}

}

 function mousePressed() {
 	if(currentState == 3){
	mousePressedX = mouseX;
	mousePressedY = mouseY;
	if(mousePressedX>width/2+25 && mousePressedX<width/2+25+10 && mousePressedY>height/2-8 && mousePressedY<height/2+2){
		buttonTrigger = true;

	}
}

if(currentState == 1){
		mousePressedX = mouseX;
	mousePressedY = mouseY;
	if(mousePressedX>width/2-20 && mousePressedX<width/2+20 && mousePressedY>height-60 && mousePressedY<height-20){
		buttonGame = true;

	}
}

//   var s = new TextSprite(random(0,windowWidth), 0,"hi");
//    // var d = new TextSprite(random(0,windowWidth), 0);
//    //    var f = new TextSprite(random(0,windowWidth), 0);
//   rainSprites.push(s);
//   // rainSprites.push(d);
//   // rainSprites.push(f);
//   // rainSprites.debug = mouseIsPressed;
}



function keyPressed() {


if(keyCode === RIGHT_ARROW){
	keyOn = true;
}if (key === 'W') {
		Up = true;
		player.setSpeed(1.5,270);
	}
	if (key === 'S') {

	    Down = true;
	    player.setSpeed(1.5,90);

	}
	if (key === 'D') {
		Right = true;
		player.setSpeed(1.5,0);

	}if (key === 'A') {
		Left = true;
		player.setSpeed(1.5,180);


	}

}


function keyReleased(){
if(keyCode === RIGHT_ARROW){
	keyOn = false;
}if (key === 'W') {
		Up = false;
	}
	if (key === 'S') {
	    Down = false;
	}
	if (key === 'D') {
		Right = false;
	}if (key === 'A') {
		Left = false;
	}
 }










