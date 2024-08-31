// function getRandomNumber(min =1, max =6){
//     return Math.floor(Math.random()*(max - min +1)) + min;
// }

// function changeDice(imageClass){
//     const randNum = getRandomNumber();
//     document.querySelector('.'+imageClass).setAttribute("src","images/dice"+randNum+".png");
//     return randNum;
// }

// function changeTitle(winnerNum){
//     let text;
//     if(winnerNum==1){
//         text="player 1 wins";
//     }else if (winnerNum==2){
//         text = "player 2 wins";
//     }else{
//         text="Draw";
//     }
//     document.querySelector("h1").innerHTML=text
// }




var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+ randomNumber1+".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}





