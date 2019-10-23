// Global Variables

var targetNum = 0;
var yourScore = 0;

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0; 

var winCount = 0;
var lossCount = 0;

// Functions

function startGame() {
    yourScore = 0;
    targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    $("#targetNum").text(targetNum)
    $("#total").text(yourScore);
}

function score() {
    if (yourScore > targetNum) {
        $("#message").html("Try again?");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();
    }

    else if(yourScore === targetNum) {
        $("#message").html("It's a Winner!")
        winCount++;
        $("#winCount").html(winCount);
        startGame();
    }
}


startGame();

$("#crystal1").on("click", function () {
    yourScore = yourScore + crystal1;
    $("#total").html(yourScore);
    score();
})

$("#crystal2").on("click", function () {
    yourScore = yourScore + crystal2;
    $("#total").html(yourScore);
    score();
})

$("#crystal3").on("click", function () {
    yourScore = yourScore + crystal3;
    $("#total").html(yourScore);
    score();
})

$("#crystal4").on("click", function () {
    yourScore = yourScore + crystal4;
    $("#total").html(yourScore);
    score();
})
$("#resetGame").on("click", () => {
    document.getElementById("message").innerHTML = ""; 
    startGame();
})