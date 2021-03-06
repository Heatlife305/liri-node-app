require("dotenv").config();

// Declaring all global variables
let axios = require("axios");

let keys = require("./keys.js");

let Spotify = require("node-spotify-api");

let spotify = new Spotify(keys.spotify);

let moment = require("moment");

let fs = require("fs");

// User Inputs
let command = process.argv[2];
let userInput = process.argv[3];


// Controls which command user chooses and calls the function responsible for displaying the data
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

// Retrieves data from the OMDB api using the axios method
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

// Retrieves data from Bands In Town api 
function concertInfo(userInput) {


    let queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(function(response) {

        console.log(queryUrl);
        console.log(response.data);

        // Saving response into variable 
        let concerts = response.data;
    
        // Loop through response data array to obtain specific data from bands in town api
        for (let i = 0; i < concerts.length; i++) {

            // Displaying venue info
            
            console.log("\n=====UPCOMING CONCERT=====\n");
            console.log("Venue: " + concerts[i].venue.name);
            console.log("City: " + concerts[i].venue.city);
            // Using moment.js to convert date of event to a more user-friendly format
            console.log("Event Date: " + moment(concerts[i].datetime).format("MM/DD/YYYY"));

        }

    })
    .catch((error) => {
        if (error) {
            console.log(error)
        }
    })
}

// Retrieves data from Spotify api
function spotifyInfo(userInput) {

    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 

      let songs = data.tracks.items;

      for (let i = 0; i < songs.length; i++) {

        console.log("\n=====SONG INFO =====\n");
        console.log("Artist(s): " + songs[i].artists[0].name);
        console.log("Song name: " + songs[i].name);
        console.log("Preview song: " + songs[i].preview_url);
        console.log("Album: " + songs[i].album.name);
       
      }
    });
}

// This function will read off of random.txt file
function randomInfo(userInput) {

    fs.readFile("random.txt", "utf8", function(error,data) {
        if (error) {
            return console.log(error);
        }

        let dataArr = data.split(",");
        input(dataArr[0],dataArr[1]);
    })
}