
var winCount = 0;
var loseCount = 0;
var display = [];
var playerGuess = [];
var guessLeft = 9;

var pokemonList = ["pokemon"];

var computerGuess = pokemonList[Math.floor(Math.random() * pokemonList.length)];

//loop that prints out lines equal the to the number of letters in the word//
for (var i = 0; i < computerGuess.length; i++) {
    display.push("_");
};


document.onkeyup = function (event) {
    var userGuess = event.key;

//function that replaces the letter if its correct//    
    function myfunction() {
        for (var i = 0; i < computerGuess.length; i++) {
            if (userGuess === computerGuess[i]) {
                display[i] = userGuess;
            };
        };
        document.getElementById("poke").innerHTML = display;
    };
    myfunction();

    //split the string into each letter then add into array?//

    //code to idenifty each element of the array so it can be added into different array or displayed word//

    //checks in guess is in the word//
    //then replaces the "_" with the guessed letter?//
    if (computerGuess.includes(userGuess)) {
        winCount += 1;
        results = "You got it right!";
    }
    else if (playerGuess.includes(userGuess)) {
        guessLeft -= 1;
        results = "You lost!";
    }
    else {
        guessLeft -= 1;
        results = "You lost!";
        playerGuess.push(userGuess);
    };

    if (guessLeft === 0) {
        loseCount += 1;
        guessLeft = 5;
        playerGuess = [];
    }
    else {

    };

    document.getElementById("title").innerHTML = "Welcome To The Psychic Game!";
    document.getElementById("guess").innerHTML = "Guess what the letter I'm thinking of";
    document.getElementById("wins").innerHTML = "Wins: " + winCount;
    document.getElementById("loses").innerHTML = "Loses: " + loseCount;
    document.getElementById("guessleft").innerHTML = "Guesses Left: " + guessLeft;
    document.getElementById("lettersleft").innerHTML = "Your guess so far: " + playerGuess;
};


