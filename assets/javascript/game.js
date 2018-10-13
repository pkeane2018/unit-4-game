$(document).ready(function() {

var score = 0;
var scorenum = 0;
var magicnumber = Math.floor(Math.random()*120) + 19;
$(".magic-number").text(magicnumber);
console.log(magicnumber);
var winnum = 0;
var lossnum = 0;
var bluenumber = Math.floor(Math.random()*12) + 1;
$("#blue").attr("points", bluenumber);
var rednumber = Math.floor(Math.random()*12) + 1;
$("#red").attr("points", rednumber);
var greennumber = Math.floor(Math.random()*12) + 1;
$("#green").attr("points", greennumber);
var orangenumber = Math.floor(Math.random()*12) + 1;
$("#orange").attr("points", orangenumber);

function restart() {
    score = 0;
    scorenum = 0;
    console.log(score);
    magicnumber = Math.floor(Math.random()*120) + 19;
    console.log(magicnumber);
    $(".magic-number").text(magicnumber);
    bluenumber = Math.floor(Math.random()*12) + 1;
    $("#blue").attr("points", bluenumber);
    rednumber = Math.floor(Math.random()*12) + 1;
    $("#red").attr("points", rednumber);
    greennumber = Math.floor(Math.random()*12) + 1;
    $("#green").attr("points", greennumber);
    orangenumber = Math.floor(Math.random()*12) + 1;
    $("#orange").attr("points", orangenumber);
    $("#score").text(score);
    }
    
$(".crystal").on("click", function() {
    var pointval = ($(this).attr("points"));
    console.log(pointval);
    pointval = parseInt(pointval);
    scorenum += pointval;
    score = scorenum.toString();
    console.log(score);
    $("#score").text(score);

    if (score == magicnumber) {
    winnum += 1;
    console.log(winnum);
    $("#win-number").text(winnum);
    alert("You win!")
    restart();
    }

    else if (score > magicnumber) {
    lossnum += 1;
    console.log(lossnum);
    $("#loss-number").text(lossnum);
    alert("You lose! Loser!")
    restart();
    }
})


})



