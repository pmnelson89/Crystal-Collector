$(document).ready(function () {

    //Establishes the defalt values for the scoreboard.

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    resetRound();

    //Resets the values of the crystals, number to match, and total score at the beginning of the game and between rounds.

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
        $("#winText").text(wins);
        $("#lossText").text(losses);
        $("#targetText").text(targetNum);
        $("#scoreText").text(totalScore);
        console.log("red = " + redValue);
        console.log("blue = " + blueValue);
        console.log("green = " + greenValue);
        console.log("yellow = " + yellowValue);
    };

    //Resets the entire game once the limit of wins or losses has been met.

    function resetGame() {
        wins = 0;
        losses = 0;
        //resetRound(); Can you not call a function within a funtion?
    }

    // Assigns the value of the crystals clicked to the total score variable.

    $(".crystal-button").click(function () {

        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        totalScore = parseInt(totalScore);

        totalScore += crystalValue;

        //Prints the total score to the html.

        console.log("total = " + totalScore);
        $("#scoreText").text(totalScore);

        //Establishes the rules to gain a win or loss when the conditions are met.
        if (totalScore === targetNum) {
            wins++;
            $("#winText").text(wins);
            resetRound();
            alert("Winner!");
        }
        else if (totalScore >= targetNum) {
            losses++;
            $("#lossText").text(losses);
            resetRound();
            alert("You lose!");
        }

        //Establishes the rule to end the game if you lose too many times.
        if (losses >= 5) {
            resetRound();
            resetGame();
            alert("Game Over");
        }

    });


});


