

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey ="&api_key=5n6MRuAtrByEc8M5piZdv66Y1Jvc4Igr";
var query = "&q=rick+morty";



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



function gotData(data){
 print(data.data[0].images.original.url);
}


function draw(){

}