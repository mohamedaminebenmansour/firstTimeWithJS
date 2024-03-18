//////////////// ACTiving Strict Mode////////////////
'use strict';
/*
let hasDrieversLiscene = false;
const passTest = true;
if (passTest) {
    hasDrieversLiscene = true;
}
if (hasDrieversLiscene) { console.log("I can drive") }

//const interface = "audio"
*/
//////////////////////////////
// Functions
/*
function logger() {
    console.log('My name is Daminco');
}//this function does not return anything
// calling / running / invoking function (same things)
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}// function return string

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/////////////////////////////////////////
//----------_________------- Function Declarations vs Expressions
//Function declarations
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
console.log(calcAge1(1993))


//Function Expressions
const calcAge2 = function (birthYeah) {
    return 2024 - birthYeah;
}
const age2 = calcAge2(1998);
console.log(age2);


/*I like to think of functions as machines.
So I think that's a great analogy */
//////// ///////////////////////////////
//Dot vs Bracket
/*
const mohamed = {
    firstName: 'Mohamed Amine',
    lastName: "Benmansour",
    age: 30,
    height: 1.78,
    weight: 95,
    gender: "male",
    occupation: "student",
    friends: ['mouna', "omar", "moez", "bassem", "gnnena", "aymen", 'saiid']
};
console.log(mohamed)

console.log("first nmae =", mohamed.firstName);//we have to use the real final property name
console.log("last name =", mohamed['lastName']);//computed property name

const nameKey = "Name";
console.log(mohamed['first' + nameKey])
console.log(mohamed['last' + nameKey])
//console.log(mohamed.'last'+nameKey) // error
const interstedIn = prompt('What do you want to know about Mohamed?\
Choose between firstName, lastName, age, and friends?')
console.log(interstedIn);
console.log("mohamed.interstedIn =", mohamed.interstedIn);//dosent works


if (mohamed[interstedIn]) {
    console.log("mohamed[interstedIn] =", mohamed[interstedIn]);
} else {
    console.log('Wrong Request')
}

//add properties
mohamed.location = "tunisia";
mohamed.instagram = "@mohamedAmineBenmansour";
console.log(mohamed)

console.log(`${mohamed.firstName} has ${mohamed.friends.length} and his best friends is ${mohamed.friends[0]}`);
*/
////////////////// Object Methods/////////////////
