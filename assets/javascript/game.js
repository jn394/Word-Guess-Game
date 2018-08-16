//The number of wins//
var winCount = 0;
//The number of loses//
var loseCount = 0;
//The display that will be shown on the HTML//
var display = [];
//The letters the player guessed//
var playerGuess = [];
//The number of guesses left//
var guessLeft = 21;

//This displays the current Wins, Loses, Guesses Left, and Players Guesses//
document.getElementById("wins").innerHTML = winCount;
document.getElementById("loses").innerHTML = loseCount;
document.getElementById("guessleft").innerHTML = guessLeft;

//Empty variables for my functions to push ojects from the array pokeList into// 
var computerGuess;
var compGuessName;
var compGuessTypes;
var compGuessSil;
var compGuessPic;

//A function that randomly picks a object from the array pokeList//
function myRandom() {
    computerGuess = pokeList[Math.floor(Math.random() * pokeList.length)];
    //Once the object is selected, compGuessName pulls the ojects name//
    compGuessName = computerGuess.pokeName.toLowerCase();
};

//Activates the myRandom function to start the game with a random pokemon selected//
myRandom();

//A function that pushes lines into an array equal to the number of letters in the word//
function myDisplay() {
    for (var i = 0; i < compGuessName.length; i++) {
        display.push("_");
    };
    //Displays the array in HTML and turns it into a string//
    document.getElementById("poke").innerHTML = display.join(" ");
};

//Activates the myDisplay function to start the game with the selected pokemon with "_"//
myDisplay();

//A function that pulls the properties "Type 1" & "Type 2" from the object that was selected in the function myRandom//
function myHint() {
    compGuessTypes = computerGuess["Type 1"] + ", " + computerGuess["Type 2"];
};

//Activates the myHint function to start the game with a hint//
myHint();

//Displays the hint in the HTML//
document.getElementById("hints").innerHTML = compGuessTypes;

//A function that takes the images from the object from the object that was selected in the function myRandom//
function myPic() {
    compGuessSil = computerGuess.imgSil;
    compGuessPic = computerGuess.imgPok;
};

//Activates the myPic function to start game with a image//
myPic();

//Creates a element called imgP that shows the images in the HTML//
var imgP = document.getElementById("pics");
imgP.src = compGuessSil;


//Starts the game with a keyup//
document.onkeyup = function (event) {
    var userGuess = event.key;

    //function that replaces the line in the array with the letter that was guessed if its correct//    
    function myFunction() {
        for (var i = 0; i < compGuessName.length; i++) {
            if (userGuess === compGuessName[i]) {
                display[i] = userGuess;
            };
        };
        //Displays the correct guess letter in HTML//
        document.getElementById("poke").innerHTML = display.join(" ");
    };

    //To use the function when a button is pressed//
    myFunction();

    //Once a new object is selected a new hint will appear//
    myHint();

    //Shows the silhouette image of the chosen pokemon//
    myPic();
    imgP.src = compGuessSil;

    //Displays the hint in the HTML//
    document.getElementById("hints").innerHTML = compGuessTypes;

    //This If/Else statment checks if the current userGuess was in the playerGuess//
    if (playerGuess.includes(userGuess)) {
        //If it is in playerGuess nothing happens//
    }
    //If not then the player guessed wrong and guessLeft -1 and the word that was guessed is pushed into the playerGuess array//
    else {
        guessLeft -= 1;
        playerGuess.push(userGuess);
    };

    //This If/Else statment checks if there is still any "_" left in the array "display"//
    //I might need?(computerGuess.includes(userGuess)//
    if (display.includes("_")) {
        //If there is any "_" nothing happens//
    }
    //If there isn't any "_" then the player wins the game. The answer is revealed, the winCount goes up by 1, the guessLeft and playerGuess is reset. 
    //Also the word is re-randomized and displayed with "_". The image of the pokemon is revealed.//
    else {
        document.getElementById("results").innerHTML = compGuessName;
        winCount += 1;
        guessLeft = 21;
        playerGuess = [];
        display = [];
        myRandom();
        myDisplay();
        imgP.src = compGuessPic;
    };

    //This If statment checks if the guessLeft is equal to 0. If so then the answer is revealed, the loseCount goes up by 1, the guessLeft and playerGuess is reset. 
    //Also the word is re-randomized and displayed with "_". The image of the pokemon is revealed.//
    if (guessLeft === 0) {
        document.getElementById("results").innerHTML = compGuessName;
        loseCount += 1;
        guessLeft = 21;
        playerGuess = [];
        display = [];
        myRandom();
        myDisplay();
        imgP.src = compGuessPic;
    };

    //This displays the current Wins, Loses, Guesses Left, and Players Guesses//
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("loses").innerHTML = loseCount;
    document.getElementById("guessleft").innerHTML = guessLeft;
    document.getElementById("lettersleft").innerHTML = playerGuess;
};
