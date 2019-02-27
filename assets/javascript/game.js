$(document).ready(function() {

    function gameBegin() {

//set initial variable values
    var targetNum = Math.floor(Math.random() * 101 + 19);
    var redValue = Math.floor(Math.random() * 12 + 1);
    var blueValue = Math.floor(Math.random() * 12 + 1);
    var greenValue = Math.floor(Math.random() * 12 + 1);
    var yellowValue = Math.floor(Math.random() * 12 + 1);
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

//assign values to buttons

    $("#redCrystal").attr("value", redValue);
    $("#blueCrystal").attr("value", blueValue);
    $("#greenCrystal").attr("value", greenValue);
    $("#yellowCrystal").attr("value", yellowValue);

//display values in html

    $("#targetText").text(targetNum);
    $("#winText").text(wins);
    $("#lossText").text(losses);
    $("#scoreText").text(totalScore);
    console.log("red = " + redValue);
    console.log("blue = " + blueValue);
    console.log("green = " + greenValue);
    console.log("yellow = " + yellowValue);
    
    };

//grab values when buttons are clicked and add them to total

    $(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        totalScore = parseInt(totalScore);

        totalScore += crystalValue;
        
        console.log("total = " + totalScore);

    });

    gameBegin();
   
});


