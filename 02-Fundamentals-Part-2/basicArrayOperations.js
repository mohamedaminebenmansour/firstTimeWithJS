const friends = ["mouna", "omar", "bassem", "tabbabi", "gnenne", "saiid", "aymen"];
console.log(friends);
//add elements
friends.push('amin');//add element to the end of the array
console.log(friends);
friends.unshift('Mouna');//add element to the front of the array
console.log(friends);

//remove elements
friends.pop();//last
console.log(friends);

friends.shift();//front 
console.log(friends);

console.log(friends.indexOf('tabbabi'));//33
console.log(friends.indexOf('mamo'));//-1 if dosent exist

friends.push(31);
console.log(friends.includes('tabbabi'));//true
console.log(friends.includes('mamo'));//false
console.log(friends.includes('31'));
console.log(friends.includes(31));

if (friends.includes("mouna")) {
    console.log('you have a friend called Mouna')
}
