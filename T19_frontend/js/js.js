"use strict"

const movieData = async () => {
		data = await fetch(
		'https://www.omdbapi.com/?apikey=e4db3ced&t={fimo_pavadinimas}')
		.then(res => res.json());
}

const showData = async () => {
	await movieData();
	console.log(data);

	(function (){
		function movieSearch(){
			let getMovieTitle = document.querySelector('#search');
			console.log(getMovieTitle);
		}
		document.getElementById('#submit').addEventListener('click', movieSearch, true);
	})();
}

showData();


/* Kažkada savarankiškai žiūrėta, bet :)

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.listen(proccess.env.PORT, process.enc.IP, function(){
	console.log("App is working!"); 
}); //---> dar ne :)

//Paieškos vykdymas ir duomenų išvestis

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "https://www.omdbapi.com/?apikey=e4db3ced&t={fimo_pavadinimas}" + query;
	request(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body)
			res.render("results", {data: data});
		}else{
			console.log("Something went wrong, try again.")
		}
	});
});
*/