var score = 0;
var magicnumber = Math.floor(Math.random()*120) + 19;
var winnum = $("#win-number").text;
var lossnum = $("#loss-number").text;

function restart() {
    score = 0;
    console.log(score);
    magicnumber = Math.floor(Math.random()*120) + 19;
    console.log(magicnumber);
    var bluenumber = Math.floor(Math.random()*12) + 1;
    console.log(bluenumber);
    $("#blue").attr("points", bluenumber);
    console.log($("#blue").attr("points"));
    $("#red").data("points", Math.floor(Math.random()*12) + 1);
    $("#green").data("points", Math.floor(Math.random()*12) + 1);
    $("#orange").data("points", Math.floor(Math.random()*12) + 1);
    }

restart();
    
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

