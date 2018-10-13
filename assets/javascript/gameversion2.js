var score = 0;
var magicnumber = Math.floor(Math.random()*120) + 19;
var winnum = $("#win-number").text;
var lossnum = $("#loss-number").text;
var bluepoints = Math.floor(Math.random()*12) + 1;
console.log(bluepoints);
var redpoints = Math.floor(Math.random()*12) + 1;
console.log(redpoints);
var greenpoints = Math.floor(Math.random()*12) + 1;
console.log(greenpoints);
var orangepoints = Math.floor(Math.random()*12) + 1;
console.log(orangepoints);

function restart() {
    score = 0;
    console.log(score);
    magicnumber = Math.floor(Math.random()*120) + 19;
    console.log(magicnumber);
    bluepoints = Math.floor(Math.random()*12) + 1;
    console.log(bluepoints);
    redpoints = Math.floor(Math.random()*12) + 1;
    console.log(redpoints);
    greenpoints = Math.floor(Math.random()*12) + 1;
    console.log(greenpoints);
    orangepoints = Math.floor(Math.random()*12) + 1;
    console.log(orangepoints);
    }
    
$(".crystal").on("click", function() {
    var pointval = ($(this).attr("data-points"));
    console.log(pointval);
    pointval = parseInt(pointval);
    score += pointval;
    $("#score").text = score;

    if (score = magicnumber) {
    winnum = winnum++;
    $("#win-number").text = winnum;
    alert("You win!")
    restart();
    }

    else if (score > magicnumber) {
    lossnum = lossnum++;
    $("#loss-number").text = lossnum;
    alert("You lose! Loser!")
    restart();
    }
})