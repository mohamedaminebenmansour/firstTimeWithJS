/*______--------_______ Type Converstion ______--------_______*/
const inputYear = '1993';// let's see that we have an input field on a page for the user to input thier birdh year
console.log(inputYear + 18);// "1993"+ 18 =>"1991"+"18"=>"199318" concat two strings
/*we must convert inputYear to number, we use 'Number()' to convert str to int */
console.log(Number(inputYear) + 18);// Number("1993")+ 18 =>1993+18=2011
console.log(Number("med"));// we got NaN (not a number)
console.log(Number("12med"));// we got NaN (not a number)
// the question here what is type of Nan
console.log(typeof NaN);// the type of NaN is number !!! I don't know why

console.log(typeof 23, 23)
console.log(typeof String(23), String(23));// "String(23)" convert 23 to "23"
/*JavaScript can only convert to three types
So we can convert to a number, to a string or to a Boolean */
/*______--------_______ Type Coercion______--------_______*/
/*So basically, type coerction happens whenever an operator is dealing with two values that have different types */

console.log(typeof ("I am " + 23), "I am " + 30)
/*
"I am "+ 30 ==> "I am "+ "30"==> "I am 30" javaScript have automatic type coercion
*/
console.log(typeof ("23" - "10"), "23" - "10");
/*
result = 13 not "13"
it looks like this time JavaScript converted the strings to numbers
so waht this means is that the minus (-) operator actually triggers the opposite conversion
So in this case, strings are converted to numbers and not the other way arround
*/
console.log(("23" - "10") + 7)//("23" - "10") +7==>(23 - 10 ) + 7==>13+7==>20 not "20"
console.log("23" * "2")//convert to number
console.log("23" / "2")//convert to number

let n = '1' + 1;// n= '1' + 1==>'1' +'1'==>'11' So n = "11"
n = n - 1;// n= "11"-1==>11-1=10 So n = 10
console.log(n)//10 not "10"