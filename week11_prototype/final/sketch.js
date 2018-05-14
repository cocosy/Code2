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

//rotation
var message;

var player;
var x;
var y;
var millisecond=0;
var size;
var end;

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
var sea;

function preload() {
  textData = loadJSON('text.json');
  // sea = loadImage('assets/sea2.png');
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
   		var b = createSprite(random(width/2-80, width/2+100), (height/6)*i);
   		b.addImage(loadImage('assets/sea'+i+'.png'));
    	brick.add(b);
}

 player = createSprite(width/2, height-20, 20, 20);
 player.shapeColor = color(0);
 message = "where are we going";
 end = "This seems to be a good place to hide";

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
				// frameRate(40);
				textSize(12);
				waterfall.update();
				waterfall.display();
				if(waterfall.rec.y >=800){
					currentState =1;
				};
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
			fill(255);
			textSize(20)
			text(".",random(0,width),random(0,height/2));
			if(millis()-millisecond <5000 && buttonGame == false){

			fill(255);
 			textSize(12);
  			text("I’m an escaping period \nGetting tired of that book \nI'm trying to find a new home.",
    		mouseX+20, mouseY, 200, 200);
		    rect(width/2-10, height-30, 20, 20);
			textSize(28);
			fill(0);
		    text(".",width/2-8,height-13);

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
			text("wave", x,y-2);
			fill(0, 51, 128,20);
			x = x +25;
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
			fill(255);
 			textSize(12);
  			text("Use WSAD KEYS to find out who hides up the exit\nand get out of the sea!!",
    		mouseX+20, mouseY, 200, 200);
  			drawSprites();
			textSize(30);
			fill(0);
			text(".",player.position.x-8,player.position.y+6);
			textSize(10);
			fill(0,204,0);
			text("seagrass",brick[0].position.x-8,brick[0].position.y+32);
			fill(153, 221, 255);
			text("shrimp",brick[1].position.x+9,brick[1].position.y+2);
			fill(255, 204, 102);
			text("fish",brick[2].position.x-13,brick[2].position.y+2);
			fill(255, 255, 204);
			text("shell",brick[3].position.x-10,brick[3].position.y+2);
			fill(255, 80, 80);
			text("crab",brick[4].position.x-7,brick[4].position.y-20);
  	
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
			text("wave", x,y-2);
			fill(0, 51, 128,20);
			x = x +25;
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


if(millis()-millisecond>7000){
	currentState++;
	millisecond =millis();
}

fill(255,20);
  rect(0,0,width/height);
 
  fill(250,250,250,100);
  textSize(30);  
  translate(width/2,height/2);  
  rotate(theta);               
  textAlign(CENTER);            
  text(message,0,0);
  fill(0);
  rect(0,0,20,20); 
  textSize(28);
  fill(255);
  text(".",5,5);   
  theta += 0.05;               

  fill(200,200,200,100);
  textSize(45);
  translate(30,50);
  rotate(theta);                          
  text(message,0,0);            
  theta += 0.005;                
  
  fill(150,150,150,150);            
  textSize(60);
  translate(60,100); 
  rotate(theta);                     
  text(message,0,0);            
  theta += 0.0005;            
  
  fill(100,100,100,170);
  textSize(75);  
  translate(90,150); 
  rotate(theta);                     
  text(message,0,0);            
  theta += 0.00005;              
  
  fill(250,250,250,200);  
  textSize(90);  
  translate(90,150);  
  rotate(theta);                       
  text(message,0,0);            
  theta += 0.00005;   
		
		break;


		//3
		case sceneState.GAME:
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
		  		fill(255);
		  		textSize(28);
		  		text(".",player.position.x-8,player.position.y+8);
		  		textSize(12);
		  		fill(0);
		  		var num = 40 -score;
		  		var time = millis()-millisecond;
		  		time = parseInt(time);

				// textFont(cardText);
				text("[It's text storm]\nWe'd better find somewhere to hide.\nAvoid collide with the textDrops"+"\nLIFE: "+num+"/50"+"\nTIME: "+time+"/7000",width/2,height/2-150);
		break;
		

		//4
		case sceneState.NEXT:
		   
	
			background(0);
				
	
		 		fill(255);
				textAlign(RIGHT);
				textSize(20)
				text("You survived from the storm!",width/2+175,height/2-50);
				textSize(size);
				text(end,width/2+175,height/2);
				rect(width/2+176,height/2-8,10,10);
			 	mousePositionX=mouseX;
				mousePositionY=mouseY;
				// drawSprites();
				if(buttonTrigger){
				fill(0);
				textAlign(CENTER);
				end = "END";
				text(".",width/2+180,height/2);
				if(size<30){
					size++;

				}
				}
				else{fill(255);
				text(".",mousePositionX+20,mousePositionY);

			}
		
		break;


		//5
		case sceneState.END:
				background(0);
				textAlign(CENTER);
				fill(255);	
				if(size<25){
					textSize(size+10);
				}else{textSize(size);}
				text("RIP\n Here lies .\nA free period",width/2,height/2-50);
				text("Hit KEY T to try again",width/2,height/2+50);
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
					millisecond =millis();

				}
			
				break;
				case sceneState.CHOICE:
				if (keyOn) {
					currentState++;
					setUpScene(currentState);
					millisecond =millis();
				}

				break;
				case sceneState.GAME:
				if (millis()- millisecond>7000 && score <50) {				
					currentState++;
					setUpScene(currentState);
					buttonGame = false;
					size = 20;

				}else if (score >50){
					currentState +=2;
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
	this.rec = createVector(width / 2, 50);
	this.vel = createVector(0, 0);
	this.recvel = createVector(0, 0);
	var speed = 1.5;
	this.vel.y = this.pos.y/3 * speed;
	this.recvel.y = this.rec.y/3 * speed/3;



	this.update = function () {
	
		if(this.pos.y <= 800){
			this.pos.add(this.vel);
			this.rec.add(this.recvel);
		}else{
			this.pos = createVector(width / 2, 50);
		}
	}

	this.display = function () {
        fill(255);
        rect(this.rec.x-20, this.rec.y+10,40,40);
        textSize(50);
        fill(0);
        text(".",this.rec.x-15, this.rec.y+45);
  		for (var i = 0; i <= 10; i++) {
  		push();
  		fill(255);
  		textAlign(CENTER, CENTER);
  		translate(0, (i+1)*12+(random(1,3)));
  		textSize(12);
  		text(fall[10-i],this.pos.x, this.pos.y-20);
  		text(fall[i],this.pos.x, this.pos.y-600);
  		text(".",this.pos.x-200-15*i, this.pos.y+20);
  		text(".",this.pos.x+200+15*i, this.pos.y+20);
  		text(".",this.pos.x-200-15*i, this.pos.y+20-600);
  		text(".",this.pos.x+200+15*i, this.pos.y+20-600);
}
		for (var i = 0; i <= 10; i++) {
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
    // this.sprite.remove();
    score += 1;
  }
  
}

}

 function mousePressed() {
 	if(currentState == 4){
	mousePressedX = mouseX;
	mousePressedY = mouseY;
	if(mousePressedX>width/2+176 && mousePressedX<width/2+176+10 && mousePressedY>height/2-8 && mousePressedY<height/2+2){
		buttonTrigger = true;

	}
}



if(currentState == 1){
		mousePressedX = mouseX;
	mousePressedY = mouseY;
	if(mousePressedX>width/2-10 && mousePressedX<width/2+10 && mousePressedY>height-30 && mousePressedY<height-10){
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


	}if(key ==='T'){
		currentState =3;
		score =0;
		millisecond =millis();
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










