$(document).ready(function () {

    var pointsUp = 0;

    // I want to hide the last 6 slides so the Greeting is by itself
    $('div#Q1,#Q2,#Q3,#Q4,#Q5,#gameover').hide();

    // When I click the start button I want to see the first question and hide the greeting
    $("#B1").on("click", function () {
        $("#greeting").hide();
        $("#Q1").show();
    });

    // If the user chooses right, 1 point is added, the questions go away and the next slide is shown
    $("#winner1").on("click", function () {
        $("#Q1").hide();
        $("#Q2").show();
        pointsUp = pointsUp + 1;
        $("#scoreboard").html(pointsUp);
    });

    // If the user chooses wrong, time is deducted and the next slide is shown
    $("#loser1,#loser2,#loser3").on("click", function () {
        $("#Q1").hide();
        $("#Q2").show();
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
    });

    // If the user chooses right, 1 point is added, the questions go away and the next slide is shown
    $("#winner2").on("click", function () {
        $("#Q2").hide();
        $("#Q3").show();
        pointsUp = pointsUp + 1;
        $("#scoreboard").html(pointsUp);
    });

    // If the user chooses wrong, time is deducted and the next slide is shown
    $("#loser4,#loser5,#loser6").on("click", function () {
        $("#Q2").hide();
        $("#Q3").show();
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
    });

    // If the user chooses right, 1 point is added, the questions go away and the next slide is shown
    $("#winner3").on("click", function () {
        $("#Q3").hide();
        $("#Q4").show();
        pointsUp = pointsUp + 1;
        $("#scoreboard").html(pointsUp);
    });

    // If the user chooses wrong, time is deducted and the next slide is shown
    $("#loser7,#loser8,#loser9").on("click", function () {
        $("#Q3").hide();
        $("#Q4").show();
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
    });

    // If the user chooses right, 1 point is added, the questions go away and the next slide is shown
    $("#winner4").on("click", function () {
        $("#Q4").hide();
        $("#Q5").show();
        pointsUp = pointsUp + 1;
        $("#scoreboard").html(pointsUp);
    });

    // If the user chooses wrong, time is deducted and the next slide is shown
    $("#loser10,#loser11,#loser12").on("click", function () {
        $("#Q4").hide();
        $("#Q5").show();
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
    });

    // If the user chooses right, 1 point is added, the questions go away and the quiz is over
    $("#winner5").on("click", function () {
        pointsUp = pointsUp + 1;
        $("#scoreboard").html(pointsUp);
        endGame()
    });

    // If the user chooses wrong, time is deducted and the quiz is over
    $("#loser13,#loser14,#loser15").on("click", function () {
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
        endGame()
    });

    // If the restart button is clicked the gameover slide hides and the greeting slide is shown
    $("#restart").on("click", function () {
        $("#gameover").hide(); $("#greeting").show();
    });

    //This function will end the game for the user and store the points in local storage
    function endGame() {
        $("#Q5").hide();
        $("#gameover").show();
        //Show highscore
        localStorage.setItem("high-score", pointsUp)
    }

    // This funtion when clicked on will get scores and store them
    $("#highscore").on("click", function () {
        var highScore = localStorage.getItem("high-score")
        $(".high-scores").html(highScore)
    });

    var timeEl = document.querySelector("#time");
    var secondsLeft = 50;

    // This function will run the timer and count down as the user plays the game
    $("#B1").on("click", function () {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.innerText = "Timer: " + secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);

            }

        }, 1000);
    });


});