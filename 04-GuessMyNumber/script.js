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
document.querySelector('.check').addEventListener('click', function (e) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!';
    }

})