//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed


//-------------- ------------- ------------- ------------- mouse -------------- ------------- ------------- ----------

var stretchy;
var face;
var sushi;


//-------------- ------------- ------------- ------------- mouse -------------- ------------- ------------- ----------

var box,circle,triangle;
//-------------- ------------- ------------- ------------- map-------------- ------------- ------------- ----------

var bg;
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1600;
var SCENE_H = 800;
var gliche;
var bingo;

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
var piclimit = "&limit=3";


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

// function preload(){

 
//   gliche = loadAnimation('assets/sushi.png','assets/sushi.png');
//   bingo = loadAnimation("assets/asterisk_circle0006.png","assets/asterisk_circle0008.png");
// }


function setup() {
createCanvas(800, 300);
 face = loadImage('assets/face.png');
  sushi = loadImage('assets/sushi.png');

  circle = createSprite(500, 250);
  triangle = createSprite(300, 150);
  box = createSprite(150, 150);




//-------------------------------------------------------------- option


  // noCanvas();
  var url = api+appId+apiKey+query+piclimit;
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


  stretchy = createSprite(200, 200);
  stretchy.addAnimation("hi",'assets/sushi.png','assets/sushi01.png');
 stretchy.addAnimation("round","assets/asterisk_circle0006.png","assets/asterisk_circle0008.png");


  stretchy.draw = function() {


    push();
    // rotate(radians(this.getDirection()));

     ellipse(0, 0, 80+this.getSpeed()/10, 80+this.getSpeed()/10);
    pop();
   
    image(face, this.deltaX*2+2+this.getSpeed()/5, this.deltaY*2+25-this.getSpeed()/8);
    image(face, this.deltaX*2-18+this.getSpeed()/5, this.deltaY*2-10-this.getSpeed()/8);
  }
 
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
  
   // stretchy.position.x = mouseX;
   // stretchy.position.y = mouseY;

  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;

  // camera.position.x = stretchy.position.x;
  // camera.position.y = stretchy.position.y;
  
  if(stretchy.position.x < 20)
    stretchy.position.x = 20;
  if(stretchy.position.y < 20)
    stretchy.position.y = 20;
  if(stretchy.position.x > width-20)
    stretchy.position.x = width-20;
  if(stretchy.position.y > height-20)
    stretchy.position.y = height-20;

   // drawSprites(bg);

    // if(stretchy.overlap(box))
    //   stretchy.changeAnimation("round");
    // else
    //   stretchy.changeAnimation("normal");
    
// console.log(stretchy.overlap(box));
box.debug = mouseIsPressed;
stretchy.debug = mouseIsPressed;

   drawSprites();

    if(stretchy.overlap(box))
    stretchy.changeAnimation("round");
  else
    stretchy.changeAnimation("hi");



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

