$(document).ready(function () {

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //set initial variable values

    var targetNum = Math.floor(Math.random() * 101 + 19);
    var redValue = Math.floor(Math.random() * 12 + 1);
    var blueValue = Math.floor(Math.random() * 12 + 1);
    var greenValue = Math.floor(Math.random() * 12 + 1);
    var yellowValue = Math.floor(Math.random() * 12 + 1);
    totalScore = 0;

    //assign values to buttons

    $("#redCrystal").attr("value", redValue);
    $("#blueCrystal").attr("value", blueValue);
    $("#greenCrystal").attr("value", greenValue);
    $("#yellowCrystal").attr("value", yellowValue);

    //display values in html

    $("#targetText").text(targetNum);
    $("#scoreText").text(totalScore);
    
    console.log("red = " + redValue);
    console.log("blue = " + blueValue);
    console.log("green = " + greenValue);
    console.log("yellow = " + yellowValue);

    //reset button values and scoreboard

    function resetRound() {
        targetNum = Math.floor(Math.random() * 101 + 19);
        redValue = Math.floor(Math.random() * 12 + 1);
        blueValue = Math.floor(Math.random() * 12 + 1);
        greenValue = Math.floor(Math.random() * 12 + 1);
        yellowValue = Math.floor(Math.random() * 12 + 1);
        totalScore = 0;
        $("#redCrystal").attr("value", redValue);
        $("#blueCrystal").attr("value", blueValue);
        $("#greenCrystal").attr("value", greenValue);
        $("#yellowCrystal").attr("value", yellowValue);
        $("#targetText").text(targetNum);
        $("#scoreText").text(totalScore);
        console.log("red = " + redValue);
        console.log("blue = " + blueValue);
        console.log("green = " + greenValue);
        console.log("yellow = " + yellowValue);
    };


    //grab values when buttons are clicked and add them to total

    $(".crystal-button").on("click", function () {

        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        totalScore = parseInt(totalScore);

        totalScore += crystalValue;

        console.log("total = " + totalScore);
        $("#scoreText").text(totalScore);

        if (totalScore === targetNum) {
            wins++;
            $("#winText").text(wins);
            resetRound();
        }
        else if (totalScore >= targetNum) {
            losses++;
            $("#lossText").text(losses);
            resetRound();
        }

    });


});


