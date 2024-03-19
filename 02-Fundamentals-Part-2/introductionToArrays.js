const friends = ["mouna", "omar", "bassem", "gnenne", "saiid", "aymen"];
console.log(friends);
console.log(`friends.length = ${friends.length}`);
console.log(`friends[friends.length - 1] = ${friends[friends.length - 1]}`);
//only primitive value are immutable but an array is not a primitive value
friends[2] = "amine";// change friends[2] by "amine"
console.log(friends);
console.log(`friends.length = ${friends.length}`);
//friends = ["tabbabi", "ali"] // error we canot do is to replace the entire array
const firstName = "Moohamed"
const mohamed = [firstName, "Amine", 1993, 'student', friends];
console.log(mohamed);

const years = new Array(1998, 1993, 1994, 1995, 1995, 1990);
console.log(years);
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
//calcAge(years); Not illegal
console.log(calcAge(years));// NAN
console.log(years + 10);//1998,1993,1994,1995,1995,199010
console.log(years - 10);//NaN
console.log(calcAge(years[0]));

// I dont know why 
/*
console.log("exemple" instanceof String)
console.log(typeof "exemple")
console.log(String("exemple") instanceof String)
console.log(new String("exemple") instanceof String)*/