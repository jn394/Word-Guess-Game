
var winCount = 0;
var loseCount = 0;
var display = [];
var playerGuess = [];
var guessLeft = 9;

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

//Randomly picks a pokemon//    
var computerGuess = pokemonList[Math.floor(Math.random() * pokemonList.length)];

//Loop that pushes lines into an array equal the to the number of letters in the word//
for (var i = 0; i < computerGuess.length; i++) {
    display.push("_");
};

//Displays the array in HTML and turns it into a string//
document.getElementById("poke").innerHTML = display.join(" ");

//Starts the game with a keyup//
document.onkeyup = function (event) {
    var userGuess = event.key;

    //function that replaces the line in the array with the letter that was guessed if its correct//    
    function myfunction() {
        for (var i = 0; i < computerGuess.length; i++) {
            if (userGuess === computerGuess[i]) {
                display[i] = userGuess;
            };
        };
        //Displays the correct guess letter in HTML//
        document.getElementById("poke").innerHTML = display.join(" ");
    };

    //To use the function when a button is pressed//
    myfunction();

    //Checks if the current guessed letter was in the already guessed letters array//
    if (computerGuess.includes(userGuess)) {

    }

    else if (playerGuess.includes(userGuess)) {
        results = "You lost!";
    }
    else {
        guessLeft -= 1;
        results = "You lost!";
        playerGuess.push(userGuess);
    };

    if (display.includes("_")) {

    }
    else {
        winCount += 1;
    }

    if (guessLeft === 0) {
        document.getElementById("results").innerHTML = computerGuess;
        loseCount += 1;
        guessLeft = 5;
        playerGuess = []
        document.onkeyup = function (event) {
            location.reload();
        };
    };

    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("loses").innerHTML = loseCount;
    document.getElementById("guessleft").innerHTML = guessLeft;
    document.getElementById("lettersleft").innerHTML = playerGuess;
};

if (guessLeft === 0) {
    document.getElementById("results").innerHTML = computerGuess;
};