$(document).ready(function () {

    var scoreUp = 0;

    $('div#Q1,#Q2,#gameover').hide();

    $("#B1").on("click", function () {
        $("#greeting").hide(); $("#Q1").show();
    });

    $("#winner1").on("click", function () {
        $("#Q1").hide(); $("#Q2").show();
        scoreUp = scoreUp + 1;
        $("#scoreboard").html(scoreUp);
    });

    $("#loser1,#loser2,#loser3").on("click", function () {
        $("#Q1").hide(); $("#Q2").show();
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
        scoreUp = scoreUp - 1;
        $("#scoreboard").html(scoreUp);
    });

    $("#winner2").on("click", function () {
        $("#Q2").hide(); $("#gameover").show();
        scoreUp = scoreUp + 1;
        $("#scoreboard").html(scoreUp);
    });

    $("#loser4,#loser5,#loser6").on("click", function () {
        $("#Q2").hide(); $("#gameover").show();
        secondsLeft = secondsLeft - 10
        $("#time").html(secondsLeft);
    });

    $("#restart").on("click", function () {
        $("#gameover").hide(); $("#greeting").show();
    });


    var timeEl = document.querySelector("#time");
    var secondsLeft = 1000;
    var click = document.querySelector("#B1");

    click.addEventListener("click", function () {
        console.log(click)
        var timerInterval = setInterval(function () {
            console.log(timerInterval)
            secondsLeft--;
            timeEl.innerText = "Timer: " + secondsLeft;
            // secondsLeft + "Timer:"

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage("Time's Up!");
            }
            // this is the speed of the clock not the intervals
        }, 1000);
    })
    console.log(click)
    // setTime();
    // var click = document.querySelector("#answer1");
    // click.addEventListener("click",function answer(){
    // var scoreInterval = setTime
    // });
    // console.log('answer1')









});
