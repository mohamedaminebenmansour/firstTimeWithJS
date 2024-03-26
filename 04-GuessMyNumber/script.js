'use strict';
/*
console.log(document.querySelector('.message').textContent);
// .message if message is class 
//#message if message is id
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 99;
document.querySelector('.score').textContent = 100;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);//get value from
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function (e) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!';
        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Win Correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        //when guess is too high
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too hight';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over';
        }
        //when guess is too low
    } else {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too loww';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over';
        }
    }


})