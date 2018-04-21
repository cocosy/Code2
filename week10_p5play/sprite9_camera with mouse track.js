//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed


//-------------- ------------- ------------- ------------- mouse -------------- ------------- ------------- ----------

var stretchy;
var face;
var sushi;
var c;



//-------------- ------------- ------------- ------------- mouse -------------- ------------- ------------- ----------


//-------------- ------------- ------------- ------------- map-------------- ------------- ------------- ----------
var stretchy;
var bg;
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1600;
var SCENE_H = 800;


//-------------- ------------- ------------- ------------- map -------------- ------------- ------------- ----------

//-------------- ------------- ------------- ------------- API -------------- ------------- ------------- ----------

var api = "https://api.edamam.com/search?";
var apiKey ="&app_key=185129e1e195d4eb5fca31442908a81a";
var appId ="&app_id=0981de26";
// var calories= "&calories=500-800";
var query = "&q=sushi";
// var limitFrom = "&from=0";
// var limitTo = "&to=3";


var myData = [];

var picapi = "https://api.giphy.com/v1/gifs/search?";
var picapiKey ="&api_key=5n6MRuAtrByEc8M5piZdv66Y1Jvc4Igr";
var picquery = "&q=";
var piclimit = "&limit=4";


var h3 ;
var allRecipes = [];  // used to store all the breeds data from the API request
var recipeSelectElement; // gives the user an option to select a breed
var buttonElement; // gives the user a button to press after selecting the breed 
var imgElement; // the reference to the image element we'll be using to show the doggo
var selectedRecipe; // variable storing the string to the currently selected breed

var targetLink;
var targetText;
var recipeImg;

//-------------- ------------- ------------- ------------- API -------------- ------------- ------------- ----


function setup() {
  var c = createCanvas(800, 300);

  face = loadImage('assets/face.png');
  sushi = loadImage('assets/sushi.png');


  bg = new Group();
  for(var i=0; i<80; i++)
  {
  //create a sprite and add the 3 animations
  var rock = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
  //cycles through rocks 0 1 2
  rock.addAnimation("normal", "assets/rocks"+i%3+".png");
  bg.add(rock);
  }
  
frame = loadImage("assets/frame.png");
//-------------------------------------------------------------- option


  // noCanvas();
  var url = api+appId+apiKey+query;
  loadJSON(url, gotAllRecipes);
  // h3 = select('#subtitle');
  // h3.mouseOver(changeBackground);

  recipeSelectElement = createSelect();

  recipeSelectElement.style('margin-left','0px');
  recipeSelectElement.style('margin-right','50px');
  recipeSelectElement.style('padding','20px');
  recipeSelectElement.style('font-family','Beirut');
  recipeSelectElement.style('font-size','18px');
  recipeSelectElement.style('color','white');
  recipeSelectElement.style('background-color','black');
  recipeSelectElement.style('border','4px solid black');

  createElement('br');

  buttonElement = createButton('show me the recipe');
  buttonElement.mousePressed(onButtonPressed);

  buttonElement.style('margin-top','30px');
  buttonElement.style('margin-bottom','20px');
  buttonElement.style('padding','5px');
  buttonElement.style('font-family','Beirut');
  buttonElement.style('font-size','18px');
  buttonElement.style('color','white');
  buttonElement.style('background-color','red');
  buttonElement.style('border','4px solid white');

  createElement('br');
  createElement('br');
    
  targetLink = "";
  targetText = "";

  theLink = createA(targetLink, targetText);
  imgElement = createImg('https://www.edamam.com/web-img/a70/a7084bca278a91a19c1372e80c6f87fc.jpg');






//----------------------------------------------------------------------- option









  //Sometimes image sequences are not enough and you may want to
  //use p5's drawing function while retaining the built-in features of the
  //sprite class
  stretchy = createSprite(400, 200, 10, 10);

  //To do so you can override (overwrite) the draw() function of the sprite
  //and make it display anything you want in its current position.
  //In javascript function and methods can be assigned like variables

  stretchy.draw = function() {

    //the center of the sprite will be point 0,0
    //"this" in this function will reference the sprite itself
    fill(255,179,179);
    //make the ellipse stretch in the sprite direction
    //proportionally to its speed
    push();
    rotate(radians(this.getDirection()));
    // ellipse(0, 0, 50+this.getSpeed()/10, 50this.getSpeed()/10);
    pop();

    //this.deltaX and this.deltaY are the position increment
    //since the last frame, move the face image toward the direction
    image(sushi, this.deltaX*2+this.getSpeed()/5, this.deltaY*2-this.getSpeed()/8);
    image(face, this.deltaX*2+2, this.deltaY*2+25);
    image(face, this.deltaX*2-18, this.deltaY*2-10);
    // console.log(myData);


     //  createElement('br');  
     // recipeImg = createImg (myData[i].img);

  };

  stretchy.maxSpeed = 10;
}




// ----------------------------------------------------------------------- draw







function draw() {
 background(255,179,179);
   for (var i = 0; i < myData.length; i++){
  if (selectedRecipe === myData[i].label) {
      // theLink.elt.innerHTML = myData[i].label;
      // theLink.elt.href = myData[i].url;
      text(myData[i].label,this.width/2-300,this.height-100+10*i);
      // text(myData[i].ingredient,this.width/2-100,this.height-100+10*i);
      text(myData[i].calories,this.width/2-100,this.height-100+10*i);
      
      // createElement('br'); 
      // recipeImg = img(myData[i].img,width/2-100,this.height/2);
   }
   };
    // for (var i = 0; i < myData.length; i++){
    //   fill(255);
    //   theLink.elt.innerHTML = myData[i].label;
    //   theLink.elt.href = myData[i].url;
    //    // text(myData[i].label,this.width/2-300,this.height/2+10*i);
    //    // createElement('link','myData[i].url');
    // };
  //mouse trailer, the speed is inversely proportional to the mouse distance
  stretchy.velocity.x = (camera.mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (camera.mouseY-stretchy.position.y)/10;

  camera.position.x = stretchy.position.x;
  camera.position.y = stretchy.position.y;
  
    if(stretchy.position.x < 0)
    stretchy.position.x = 0;
  if(stretchy.position.y < 0)
    stretchy.position.y = 0;
  if(stretchy.position.x > SCENE_W)
    stretchy.position.x = SCENE_W;
  if(stretchy.position.y > SCENE_H)
    stretchy.position.y = SCENE_H;

  drawSprites(bg);

   drawSprites(stretchy);

}



// function changeBackground(){
//   h3.style('background-color','white');
// }


function gotAllRecipes(data) {
  allRecipes = Object.keys(data.hits);
   for (var i = 0; i < allRecipes.length; i++) {
      recipeSelectElement.option(data.hits[i].recipe.label);
      
      myData.push({
        label : data.hits[i].recipe.label ,
        calories: data.hits[i].recipe.calories,
        url : data.hits[i].recipe.url,
        img : data.hits[i].recipe.image
      });

   }
    selectedRecipe = recipeSelectElement.value();
   recipeSelectElement.changed(selectEvent);
}


function selectEvent() {
  selectedRecipe = recipeSelectElement.value();
  console.log(selectedRecipe);

}


function onButtonPressed() {
 imgElement.remove();
   for (var i = 0; i < myData.length; i++){
    if (selectedRecipe === myData[i].label) {
      theLink.elt.innerHTML = myData[i].label;
      theLink.elt.href = myData[i].url;
      createElement('br');  
     recipeImg = createImg (myData[i].img);
    }
    }
  }

   // createImg (recipeImg);
  // var picquery = "&q="+selectedRecipe;
    // loadJSON(picapi+picapiKey+picquery+piclimit,onGotData);

