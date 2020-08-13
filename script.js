$(document).ready(function(){

$('div#Q1,#Q2,#gameover').hide();

$("#B1").on("click", function(){
    $("#greeting").hide();$("#Q1").show();
});

$("#winner1").on("click", function(){
    $("#Q1").hide();$("#Q2").show();
});

$("#loser1,#loser2,#loser3").on("click", function(){
    $("#Q1").hide();$("#Q2").show();
});

$("#winner2").on("click", function(){
    $("#Q2").hide();$("#gameover").show();
});

$("#loser4,#loser5,#loser6").on("click", function(){
    $("#Q2").hide();$("#gameover").show();
});

$("#restart").on("click", function(){
    $("#gameover").hide();$("#greeting").show();
});













});



// var click = document.querySelector("#tryme");
// click.addEventListener("click",function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till ";
//     if (click === 1) {
//         click.classList.add('hide')
//     }
//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
// // this is the speed of the clock not the intervals
//   }, 1000);
// })
// console.log(click)
// setTime();
// var click = document.querySelector("#answer1");
// click.addEventListener("click",function answer(){
// var scoreInterval = setTime
// });
// console.log('answer1')