//The number of wins//
var winCount = 0;
//The number of loses//
var loseCount = 0;
//The display that will be shown on the HTML//
var display = [];
//The letters the player guessed//
var playerGuess = [];
//The number of guesses left//
var guessLeft = 20;

//The list of pokemon the computer can choose from//
// var pokemonList = ["pok"];
var pokemonList = ["Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch'd",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew"];

//For some reason I needed computerGuess to be a empty string for myRandom function to work// 
var computerGuess = "";

//A function that randomly picks a pokemon//
function myRandom() {
    computerGuess = pokemonList[Math.floor(Math.random() * pokemonList.length)];
};

//Activates the myRandom function to start the game with a random pokemon selected//
myRandom();

//A function that pushes lines into an array equal to the number of letters in the word//
function myDisplay() {
    for (var i = 0; i < computerGuess.length; i++) {
        display.push("_");
    };
    //Displays the array in HTML and turns it into a string//
    document.getElementById("poke").innerHTML = display.join(" ");
};

//Activates the myDisplay function to start the game with the selected pokemon with "_"//
myDisplay();

//Starts the game with a keyup//
document.onkeyup = function (event) {
    var userGuess = event.key;

    //function that replaces the line in the array with the letter that was guessed if its correct//    
    function myFunction() {
        for (var i = 0; i < computerGuess.length; i++) {
            if (userGuess === computerGuess[i]) {
                display[i] = userGuess;
            };
        };
        //Displays the correct guess letter in HTML//
        document.getElementById("poke").innerHTML = display.join(" ");
    };

    //To use the function when a button is pressed//
    myFunction();

    //This If/Else statment checks if there is still any "_" left in the array "display"//
    //I might need?(computerGuess.includes(userGuess)//
    if (display.includes("_")) {
        //If there is any "_" nothing happens//
    }
    //If there isn't any "_" then the player wins the game. The answer is revealed, the winCount goes up by 1, the guessLeft and playerGuess is reset. Also the word is re-randomized and displayed with "_"//
    else {
        document.getElementById("results").innerHTML = computerGuess;
        winCount += 1;
        guessLeft = 20;
        playerGuess = [];
        display = [];
        myRandom();
        myDisplay();
    };

    //This If/Else statment checks if the current userGuess was in the playerGuess//
    if (playerGuess.includes(userGuess)) {
        //If it is in playerGuess nothing happens//
    }
    //If not then the player guessed wrong and guessLeft -1 and the word that was guessed is pushed into the playerGuess array//
    else {
        guessLeft -= 1;
        playerGuess.push(userGuess);
    };

    //This If statment checks if the guessLeft is equal to 0. If so then the answer is revealed, the loseCount goes up by 1, the guessLeft and playerGuess is reset. Also the word is re-randomized and displayed with "_"//
    if (guessLeft === 0) {
        document.getElementById("results").innerHTML = computerGuess;
        loseCount += 1;
        guessLeft = 20;
        playerGuess = [];
        display = [];
        myRandom();
        myDisplay();
    };

    //This displays all the values//
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("loses").innerHTML = loseCount;
    document.getElementById("guessleft").innerHTML = guessLeft;
    document.getElementById("lettersleft").innerHTML = playerGuess;
};
