let js = "amazing"
if (js == "amazing") {
    console.log("JavaScript is fun")
    //alert("JavaScript is fun")
};
console.log(40 + 30 - 20)
//let's talk about values
/*value is basicaly a piece of data So it's the moost fundamental unit
of information that we have in programming*/
console.log("mohamed");//mohamed is a value
console.log(30);//30 is a value
//let's talk about variables
/*Now, one extremely useful thing we can do with values is to store them 
into variables and so this way we can reuse them over and over again */
let firstName = "mohamed";
/*so what we did here is called decalaring a variable and so this actually
create a real variable in my computer memory and we'll store this value
"mohamed" inside of this variable "firstName"*/
console.log(firstName)
let camelCase = "mohamed"; //use camelCase
//let 3years=3; //illegal variable name because start s with number
/*And in fact names can only contains numbers ,letters, unerscores(_) or
the dollar assign ($) */
//let med&amin="mohamed amin"; // illegl because we use "&"
//let new = "mohamed;" //illegal name a variable using a reserved JS keyword
let Person = "mohamed";//works but aanother convention we should not start a variable name with an upperCase
let PI = 3.14;/* this number is never gonna change 
and so that's a constant and for that, we have a conventin of writing it
in all upper case*/

//===DATA TYPE===we have 7 primitive data type//
let age = 30; //1)Number
let lastName = "med"//2)string
let fullAge = true //3)boolean

let children; //4)Undefinect (value taken by a variable that is not yet defined)
//5)Null==>empty value
//6)symbol===>value is unique and cannot be changed
//7)Bigint  ==>larger integers than the number type can hold
/*JavaScript has dynamic typing: we dont have to manually define the data type
of the value stired a variable. Instead,data types are determined automatically */

//Single line commment
/* multi line comments
line 1
line 2
.
. 
.*/

true
let javaScriptIsFun = true;
console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)
console.log(typeof true)
console.log(typeof children)
console.log(typeof null)
console.log(typeof 1)
console.log(typeof "hekki")

javaScriptIsFun = "hello";

console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)