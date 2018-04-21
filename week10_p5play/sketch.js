// week 9
// using p5.js DOM functionality with an API

// this example uses https://api.edamam.com/search?&q=sushi&app_id=0981de26&app_key=185129e1e195d4eb5fca31442908a81a
// it's an api categorizes under food&drinks, it provides recipe and dish names
// this example also uses giphy api for memes

// var api = "https://api.edamam.com/search?";
// var apiKey ="&app_key=185129e1e195d4eb5fca31442908a81a";
// var appId ="&app_id=0981de26";
// // var calories= "&calories=500-800";
// var query = "&q=sushi";
// // var limitFrom = "&from=0";
// // var limitTo = "&to=3";


// var myData = [];

// var picapi = "https://api.giphy.com/v1/gifs/search?";
// var picapiKey ="&api_key=5n6MRuAtrByEc8M5piZdv66Y1Jvc4Igr";
// var picquery = "&q=";
// var piclimit = "&limit=4";


// var h3 ;
// var allRecipes = [];	// used to store all the breeds data from the API request
// var recipeSelectElement; // gives the user an option to select a breed
// var buttonElement; // gives the user a button to press after selecting the breed 
// var imgElement;	// the reference to the image element we'll be using to show the doggo
// var selectedRecipe; // variable storing the string to the currently selected breed

// var targetLink;
// var targetText;
// var recipeImg;

// function setup() {
//   // noCanvas();
//   var url = api+appId+apiKey+query;
//   loadJSON(url, gotAllRecipes);

//   h3 = select('#subtitle');
//   h3.mouseOver(changeBackground);

//   recipeSelectElement = createSelect();

//   recipeSelectElement.style('margin-left','0px');
//   recipeSelectElement.style('margin-right','50px');
//   recipeSelectElement.style('padding','20px');
//   recipeSelectElement.style('font-family','Beirut');
//   recipeSelectElement.style('font-size','18px');
//   recipeSelectElement.style('color','white');
//   recipeSelectElement.style('background-color','black');
//   recipeSelectElement.style('border','4px solid black');


    
//   createElement('br');

//   buttonElement = createButton('show me the recipe');
//   buttonElement.mousePressed(onButtonPressed);
//   buttonElement.style('margin-top','30px');
//   buttonElement.style('margin-bottom','20px');
//   buttonElement.style('padding','5px');
//   buttonElement.style('font-family','Beirut');
//   buttonElement.style('font-size','18px');
//   buttonElement.style('color','white');
//   buttonElement.style('background-color','red');
//   buttonElement.style('border','4px solid white');

//   createElement('br');
//   createElement('br');
    
//   targetLink = "";
//   targetText = "";

//   theLink = createA(targetLink, targetText);

//   imgElement = createImg('https://www.edamam.com/web-img/a70/a7084bca278a91a19c1372e80c6f87fc.jpg');

// }

// function changeBackground(){
// 	h3.style('background-color','white');
// }


// function gotAllRecipes(data) {
// 	allRecipes = Object.keys(data.hits);
// 	 for (var i = 0; i < allRecipes.length; i++) {
// 	  	recipeSelectElement.option(data.hits[i].recipe.label);
      
//       myData.push({
//         label : data.hits[i].recipe.label ,
//         url : data.hits[i].recipe.url,
//         img : data.hits[i].recipe.image
//       });

// 	 }
// 	  selectedRecipe = recipeSelectElement.value();
// 	 recipeSelectElement.changed(selectEvent);
// }


// function selectEvent() {
// 	selectedRecipe = recipeSelectElement.value();
// 	console.log(selectedRecipe);

// }


// function onButtonPressed() {
//  imgElement.remove();
//    for (var i = 0; i < myData.length; i++){
//     if (selectedRecipe === myData[i].label) {
//       theLink.elt.innerHTML = myData[i].label;
//       theLink.elt.href = myData[i].url;
//       createElement('br');  
//      recipeImg = createImg (myData[i].img);
//     }
//   }

//    // createImg (recipeImg);
// 	// var picquery = "&q="+selectedRecipe;
//     // loadJSON(picapi+picapiKey+picquery+piclimit,onGotData);
// }



// function onGotData(giphy) {
//   imgElement.remove();
//  }