const age = 18;
if (age === 18) console.log('you just became an adult')
/*
1) "===" is called the strict equality operator
    because it does not perform type coercion.And so it only returns to when both values are exactly the same.
    same values and same types
2) "==" is called the loose equality operator
    actually does type coercion
    same values not nessesary same types
*/
console.log('20==20 =>', 20 == 20);
console.log('"20"==20 =>', "20" == 20);

console.log('20===20 =>', 20 === 20);
console.log('"20"===20 =>', "20" === 20);
const newAge = "20";
if (newAge === 20) console.log('you just became an adult (strict)')
if (newAge == 20) console.log('you just became an adult (loose)')
/*with the loose equality operator 18 to string is the same as 18 the number
because 18 to string will be converted to 18 the number.
it is actually quite a confusing topic in JavaScript,because this loose equality operator.
So this one here, is full of really weird rules and behaviors.
This means that if we use this one here, this can introduce many hard to find bugs into our code.
So as a general rule for clean code, avoid the loose equality operator as much as you can.
So when comparing values,always use strict equality with the three equal signs(===) */
const favourite = prompt("what's ur favourite number?");
console.log(typeof favourite, favourite)

if (favourite == 23) {//'23'==23 =>true
    console.log("great (loose)")
}
if (favourite === 23) {//'23'===23 =>false
    console.log("great (strict)")
}

const favourite2 = Number(prompt("what's ur favourite2 number?"));
console.log(typeof favourite2, favourite2)

if (favourite2 == 23) {//23==23 =>true
    console.log("great2 (loose)")
}
if (favourite2 === 23) {//23===23 =>true
    console.log("great2 (strict)")
}