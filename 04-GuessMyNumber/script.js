'use strict';
console.log(document.querySelector('.message').textContent);
// .message if message is class 
//#message if message is id
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 99;
document.querySelector('.score').textContent = 100;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);//get value from
