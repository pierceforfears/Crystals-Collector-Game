// Global variables
let score = 0;
let targetNum = 0;
let wins = 0;
let losses = 0;
let total = [];

// Generate Random number
targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// console.log("target score is " + targetNum);
$("#targetNum").text(targetNum)

    // Crystals
    let crystalValues = [];
    for (var i = 0; i < 4; i++) {
        crystalValues.push(Math.round(Math.random() * 12))
        // console.log(crystalValues);
    }
    $("#crystal1").attr("value", crystalValues[0]);
    $("#crystal2").attr("value", crystalValues[1]);
    $("#crystal3").attr("value", crystalValues[2]);
    $("#crystal4").attr("value", crystalValues[3]);



    $("#crystal1").on("click", () => {
        total.push(crystalValues[0]);
    });
    $("#crystal2").on("click", () => {
        total.push(crystalValues[1]);    
    });
    $("#crystal3").on("click", () => {
        total.push(crystalValues[2]);
    });
    $("#crystal4").on("click", () => {
        total.push(crystalValues[3]);
    });
    document.getElementById("total").value;
    console.log(total);
