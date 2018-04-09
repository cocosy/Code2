

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey ="&api_key=5n6MRuAtrByEc8M5piZdv66Y1Jvc4Igr";
var query = "&q=rick+morty";
var img;


/*
api key:


path: /v1/gifs/search


limit = 25;

*/

function setup(){
	noCanvas();
	var url = api +apiKey+query;
	loadJSON(url,gotData);

}



function gotData(giphy){
	for(var i = 0;i<giphy.data.length;i++){
 createImg(giphy.data[i].images.original.url);


}
}


function draw(){

}