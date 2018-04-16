// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 8
// using p5.js DOM functionality with an API
// note this particular API doesn't require an API key
// this code creates ALL html elements in the p5js code. 
// you can do static stuff yourself in the index.html file if you wish.

// this example uses https://dog.ceo/dog-api/

var api = "https://api.edamam.com/search?";
var apiKey ="&app_key=185129e1e195d4eb5fca31442908a81a";
var appId ="&app_id=0981de26";
var calories= "&calories=500-800";
var query = "&q=sushi";
var limitFrom = "&from=0";
var limitTo = "&to=3";

var picapi = "https://api.giphy.com/v1/gifs/search?";
var picapiKey ="&api_key=5n6MRuAtrByEc8M5piZdv66Y1Jvc4Igr";
var picquery = "&q="+selectedRecipe;
var piclimit = "&limit=4";


var link = [];
var allRecipes = [];	// used to store all the breeds data from the API request
var recipeSelectElement; // gives the user an option to select a breed
var buttonElement; // gives the user a button to press after selecting the breed 
var imgElement;	// the reference to the image element we'll be using to show the doggo
var selectedRecipe; // variable storing the string to the currently selected breed

function setup() {
  noCanvas();
  var url = api+appId+apiKey+query;
  loadJSON(url, gotAllRecipes);

  createElement('h1', 'Welcome to Sushi Giphy Bar!');
  createElement('h3', 'Choose the sushi you love.');

  recipeSelectElement = createSelect();
    
  createElement('br');

  buttonElement = createButton('show me the meme');
  buttonElement.mousePressed(onButtonPressed);

  createElement('br');
  createElement('br');
    
  imgElement = createImg('https://www.edamam.com/web-img/a70/a7084bca278a91a19c1372e80c6f87fc.jpg');

}

// callback for loading the initial data of all the breeds.
// sets up the select element and its options.
function gotAllRecipes(data) {
	allRecipes = Object.keys(data.hits);
	 for (var i = 0; i < allRecipes.length; i++) {
	  	recipeSelectElement.option(data.hits[i].recipe.label);

	 }

	  selectedRecipe = recipeSelectElement.value();
	 recipeSelectElement.changed(selectEvent);
}

// callback for changing the select element, on line 46
function selectEvent() {
	selectedRecipe = recipeSelectElement.value();
	console.log(selectedRecipe);
}

// callback for pressing the button, and sending a request to the API to give back a picture of the selected breed
function onButtonPressed() {
    loadJSON(picapi+picapiKey+picquery+piclimit,onGotData);

}

// callback for line 58, when the API request is completed, display the new image and delete the old one.
function onGotData(giphy) {
	for (var i = 0;i<giphy.data.length;i++){
	imgElement.remove();
}
	 for (var i = 0;i<giphy.data.length;i++){
 imgElement= createImg(giphy.data[i].images.original.url);
}
// link = selectedRecipe.replace(label,);
// createElement("")
 }