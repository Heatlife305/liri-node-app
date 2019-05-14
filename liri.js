require("dotenv").config();

let axios = require("axios");

let keys = require("./keys.js");

let Spotify = require("node-spotify-api");

let spotify = new Spotify(keys.spotify);

// User Inputs
let command = process.argv[2];
let userInput = process.argv[3];


input(command, userInput);
function input(command, userInput) {
    switch (command) {
    case "movie-this":
        movieInfo(userInput);
        break;
    case "concert-this":
        concertInfo(userInput);
        break;
    case "spotify-this-song":
        spotifyInfo(userInput);
        break;
    case "do-what-it-says":
        randomInfo(userInput);
        break;
    default: 
    console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says");
    }
}

function movieInfo(userInput) {


    let queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        })
        .catch(function(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        });

}


function concertInfo(userInput) {

    let queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(function(response) {

        console.log(queryUrl);

        console.log(response.data[0].description)

    });

}