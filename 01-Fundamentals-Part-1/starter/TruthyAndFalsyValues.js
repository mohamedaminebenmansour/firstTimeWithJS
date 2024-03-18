/*falsy values are values that are not exactly false,
but will become false when we try to convert them into a boolean.
And in JavaScript, there are only five falsy values.
        5 falsy values:0,'', undefined, null, Nan
Of course, false itself is already false, so we don't need to include it in the list of falsy values.
So again, all of these five values will be converted to false when we attempt to convert them to a boolean.
They're not exactly false initially,but they will become when converted to a boolean.
So, that's the definition of falsy values.
Everything else are our so-called truthy values.
So, values that will be converted to true, for example,
any number that is not zero or any string that is not an empty string will be converted to true
when we attempt to convert them to a boolean.
*/
console.log("Boolean(0)=", Boolean(0))
console.log("Boolean('')=", Boolean(''))
console.log("Boolean(undefined)=", Boolean(undefined))
console.log("Boolean(null)=", Boolean(null))
console.log("Boolean(NaN)=", Boolean(NaN))
console.log("Boolean(false)=", Boolean(false))

console.log("Boolean(12)=", Boolean(12))
console.log("Boolean('med')=", Boolean('med'))
console.log("Boolean(true)=", Boolean(true))
console.log("Boolean({})=", Boolean({}))

const money = 0
if (money) {
    console.log("Dont spend it all");
} else {
    console.log("You should get a job!");
}
/*So, this here is the code that got executed, but why?
Well, we know that money is a number right now.
And this number is zero, but in the logical context of an if else statement condition,
so that's right here in these parenthesis, here JavaScript will try to coerce any value into a boolean.
So, no matter what we put here, if it's not a boolean, JavaScript will try to convert it to a boolean.
And that happens using the truthy and falsy value rules
So, we know that money here is zero,but zero is a falsy value, right?
And so, in this logical environment here in this condition,this number zero will be converted to false.
Just like it happened here when we convert it manually zero to a boolean, right?
So here, this conversion to boolean returned false.
And here the exact same thing happens, money is zero, and so zero is converted to false
because it's a falsy value.
And as a result, the else block here is executed, and so on the console we see "you should get a job!"*/

let height;//undefined
console.log("height=", height)
if (height) {
    console.log("yay! height is defined");
} else {
    console.log("height is not defined");
}
height = 312
console.log("height=", height)
if (height) {
    console.log("yay! height is defined");
} else {
    console.log("height is not defined");
}
//the question here: what if height is defined but height =0
height = 0
console.log("height=", height)
if (height) {
    console.log("yay! height is defined");
} else {
    console.log("height is not defined");
}
//there can be problems using this approach