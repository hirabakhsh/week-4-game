$(document).ready(function() {

// Global Variables

// Random number to match
var gameRand = 0;
// 4 sided shape
var randTetra = 0;
// 5 sided shape
var randPenta = 0;
// 6 sided shape
var randHexa = 0;
// 8 sided shape
var randOcta = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;


// Playing Game

//1. Start game
resetVars();
printAllVars();

//2. PlayGame

$("#randTetra").on("click", playGameTetra);
$("#randPenta").on("click", playGamePenta);
$("#randHexa").on("click", playGameHexa);
$("#randOcta").on("click", playGameOcta);

// changing total Score every time user clicks an image

function playGameTetra() {
    totalScore = totalScore + randTetra;
    if (isWin()) {
        resetVars();
        printAllVars();
    } else if (isLost()) {
        resetVars();
        printAllVars();
    } else {
        printAllVars();
    }
}

function playGamePenta() {
    totalScore = totalScore + randPenta;
    if (isWin()) {
        resetVars();
        printAllVars();
    } else if (isLost()) {
        resetVars();
        printAllVars();
    } else {
        printAllVars();
    }
}

function playGameHexa() {
    totalScore = totalScore + randHexa;
    if (isWin()) {
        resetVars();
        printAllVars();
    } else if (isLost()) {
        resetVars();
        printAllVars();
    } else {
        printAllVars();
    }
}

function playGameOcta() {
    totalScore = totalScore + randOcta;
    if (isWin()) {
        resetVars();
        printAllVars();
    } else if (isLost()) {
        resetVars();
        printAllVars();
    } else {
        printAllVars();
    }
}

// winnign/losing criteria

function isWin() {
    if (totalScore == gameRand) {
        printAllVars();
        alert("You won!");
        wins++;
        return true;
    }
    return false;
}

function isLost() {
    if (totalScore > gameRand) {
        printAllVars();
        alert("sorry you lost. Play again!")
        losses++;
        return true;
    }
    return false;
}

// random number generation: between 19 and 120
// Random number for crystals: between 1 and 12

function randomGenerator(shape) {
    if (shape == "notCrystal") {
        return Math.floor(Math.random() * (120 - 19) + 19) + 1;
    } else if (shape == "crystal") {
        return Math.floor(Math.random() * (12 - 1) + 1) + 1;
    }
}

// Reset variables once a game ends

 function resetVars() {
    gameRand = randomGenerator("notCrystal");
    randTetra = randomGenerator("crystal");
    randPenta = randomGenerator("crystal");
    randHexa = randomGenerator("crystal");
    randOcta = randomGenerator("crystal");
    totalScore = 0;
}

// Print all variables:

function printAllVars() {
    console.log("Wins: " + wins.toString());
    console.log("Losses: " + losses.toString());
    console.log("Random Number: " + gameRand.toString());
    console.log("Tetra vale: " + randTetra.toString());
    console.log("Penta value: " + randPenta.toString());
    console.log("Hexa Value: " + randHexa.toString());
    console.log("Octa Value: " + randOcta.toString());
    console.log("score: " + totalScore.toString());

    $("#random").html(gameRand.toString());
    $(".wins").html("Wins: " + wins.toString());
    $(".losses").html("Losses: " + losses.toString());
    $("#score").html(totalScore.toString());
}

})