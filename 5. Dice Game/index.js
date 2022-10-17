var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "Images/dice" + randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

/*Dice 2*/
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "Images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "😎Player 1 Wins!";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!😎";
}
else {
document.querySelector("h1").innerHTML = "😐It's a Draw😐";
}