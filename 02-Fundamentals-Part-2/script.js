//1) ACTiving Strict Mode////////////////
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
//2)Function Declarations vs Expressions
//Function declarations
/*
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
console.log("Function declarations::", calcAge1(1993))


//Function Expressions
const calcAge2 = function (birthYeah) {
    return 2024 - birthYeah;
}
const age2 = calcAge2(1998);
console.log("Function Expressions::", age2);

//Arrow Functions
// we have One parameter
const calcAge3 = birthYeah => 2024 - birthYeah;
const age3 = calcAge3(1997)
console.log("Arrow Functions::", age3);
// we have Two parameters
const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2024 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Mohamed'));
console.log(yearsUntilRetirement(1959, 'Amine'));
*/
/*I like to think of functions as machines.
So I think that's a great analogy */
//////// ///////////////////////////////
//06)Functions Caliing Other Functions
/*we had this function which was like a fruit processor which received a certain number of apples and a certain number of oranges.
And then based on that it basically produced and returned juice to us.
But now in this example
let's consider that the fruit processorcan only make juice with smaller fruit pieces.
And so before making the juicethe fruit processor now needs another machinethat first cuts the fruits that we give it and to multiple smaller pieces.
I think it makes sense actually
to understand the point that I'm trying to make.
So, let's actually start by writing that machine.
So basically that function that cuts a fruitinto multiple pieces.
So let's say function cutFruitPieces and this function will receive a fruit.
And all this function will do is to return the fruit cut in four pieces.
So basically fruit multiplied by four.
So if we get two apples here it will return eight pieces to us.
So simply the number eight, okay?
So that's our machine that cuts the fruit in pieces.
 */
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);//Calling cutFruitPieces function
    const orangePieces = cutFruitPieces(oranges);//Calling cutFruitPieces function

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////
// Reviewing Functions
/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

*/
///////////////////////////////////////
//Intoduction to objects
/*
const mohamedArray = [
    'Mohamed Amine',
    "Benmansour",
    30,
    1.78,
    95,
    "male",
    "student",
    ['mouna', "omar", "moez", "bassem", "gnnena", "aymen", 'saiid']
];
console.log(mohamedArray)

const mohamedObject = {
    firstName: 'Mohamed Amine',
    lastName: "Benmansour",
    age: 30,
    height: 1.78,
    weight: 95,
    gender: "male",
    occupation: "student",
    friends: ['mouna', "omar", "moez", "bassem", "gnnena", "aymen", 'saiid']
};
console.log(mohamedObject)
*/
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
Choose between firstName, lastName, age, and friends?');// work with console on goole chromosome
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
//Object Method
/*
const mohamed = {
    firstName: 'Mohamed Amine',
    lastName: "Benmansour",
    birthYeah: 1993,
    height: 1.78,
    weight: 95,
    gender: "male",
    job: "student",
    hasDriversLicense: true,
    friends: ['mouna', "omar", "moez", "bassem", "gnnena", "aymen", 'saiid'],
    calcAge: function (birthYeah) {
        return 2024 - birthYeah;
    },
    calcAgeWithoutParemeter: function () {//best practice 
        return 2024 - this.birthYeah;//this mean this object ==>mohamed.birthYeah
    },
    calcAgeWithoutParemeter2: function () {//bad practice
        return 2024 - mohamed.birthYeah;//just expalin this
    },
    calculAgeBestPractice: function () {
        this.age = 2024 - this.birthYeah;//add property to this object
        return this.age;
    },
    getSymmary: function () {
        return `my name is ${this.firstName} ${this.lastName} and I am  ${this.age} years old
        my job is ${this.job} and my best friend is ${this.friends[0]}`;
    }
}
console.log("mohamed.calcAge(1993)=", mohamed.calcAge(1993));
console.log("mohamed['calcAge'](1993)=", mohamed['calcAge'](1993));

console.log("mohamed.calcAgeWithoutParemeter()=", mohamed.calcAgeWithoutParemeter());
console.log("mohamed.calcAgeWithoutParemeter2()=", mohamed.calcAgeWithoutParemeter2());
console.log("mohamed.calculAgeBestPractice()=", mohamed.calculAgeBestPractice());
console.log("mohamed.age=", mohamed.age);//(1)
console.log("mohamed.age=", mohamed.age);
console.log("mohamed.age=", mohamed.age);
console.log("mohamed.getSymmary()=", mohamed.getSymmary());*/
/*we only need to calculate the age once(1)
then form here we simply retrieve the property that we had already calculated before  
and so this is the most efficient solution 'calculAgeBestPractice'*/

