//Dot vs Bracket
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

console.log(`${mohamed.firstName} has ${mohamed.friends.length} and his best friends is ${mohamed.friends[0]}`)