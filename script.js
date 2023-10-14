let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(movieTitle, movieRating, movieHaveWatched) {
        this.title = movieTitle;
        this.rating = movieRating;
        this.haveWatched = movieHaveWatched;
    }

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie, element) => {
    allMovies.push(movie);
    element.innerText= "A new movie is added";
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = (element) => {
    var stringToBeDisplayed = "Printing all movies..." + "\n";
    for (var i = 0; i < allMovies.length; i++) {
        stringToBeDisplayed = stringToBeDisplayed + allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched: " + allMovies[i].haveWatched + "\n";
    }
    stringToBeDisplayed = stringToBeDisplayed + "\n" + "You have " + allMovies.length + " movies in total";
    element.innerText = stringToBeDisplayed;
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating, element) => {
    var matches = 0;
    var stringy = "Printing all movies with a rating higher than " + rating + "\n";
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            stringy = stringy + allMovies[i].title + " has a rating of " + allMovies[i].rating + "\n";
            matches++;
        }
    }
    stringy = stringy + "\n" + "In total, there are " + matches + " matches" + "\n";
    element.innerText = stringy;
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title, element) => {
    element.innerText = "Changing the status of the movie...";
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !(allMovies[i].haveWatched);
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

var element0 = document.getElementById("runProgram");
element0.innerText = "----------------" + "\n" + "running program......" + "\n" + "----------------";

var element1 = document.getElementById("movieList1");
printMovies(element1);

var element8 = document.getElementById("aboveAdd");
element8.innerText = "----------------";

let movie1 = new Movie("Parasite", 2, false);

var element2 = document.getElementById("addingMovie1");
addMovie(movie1, element2);

var element9 = document.getElementById("belowAdd");
element9.innerText = "----------------";

var element3 = document.getElementById("changeMovie1");
changeWatched("Spiderman", element3);

var element10 = document.getElementById("belowChange1");
element10.innerText = "----------------" + "\n";

var element4 = document.getElementById("movieList2");
printMovies(element4);

var element11 = document.getElementById("belowMovieList2");
element11.innerText = "----------------" + "\n";

element6 = document.getElementById("changeMovie2");
changeWatched("Spiderman", element6);

element12 = document.getElementById("belowChange2");
element12.innerText = "----------------" + "\n";

var element5 = document.getElementById("movieList3");
printMovies(element5);

element13 = document.getElementById("belowMovieList3");
element13.innerText = "----------------" + "\n";

var element7 = document.getElementById("highRatingCall");
highRatings(3.5, element7);