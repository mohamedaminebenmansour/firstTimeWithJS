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

/*___________-----______ let, const and var _____------________-- */
let newAge = 30;
newAge = 31;

const birthYear = 1993;
//birthYear = 1995;// immutable variable

//const job;//'const' declarations must be initialized

/*
Var:
    Variables declared with var are function-scoped or globally scoped, but not block-scoped.
    They can be redeclared and reassigned.
    var variables are hoisted to the top of their function or global scope. This means you can access them before they are declared.
let:
    Variables declared with let are block-scoped. They cannot be redeclared or reassigned.Variables declared with let are block-scoped, which means they are only accessible within the block they are declared in (if, for, while, etc.), or within a function if declared inside a function.
    They can be reassigned but not redeclared within the same scope.
    let variables are not hoisted. They are only accessible after the declaration.
const:
    Variables declared with const are block-scoped. They cannot be redeclared or reassigned.Variables declared with const are also block-scoped like let.
    They cannot be reassigned once they are initialized. However, for objects and arrays, while the reference cannot be changed, the properties of objects and elements of arrays can be modified.
    const variables are not hoisted. 
When to choose between them:
    Use const by default for variables that won't be reassigned, as it makes your code more predictable and helps catch unintended mutations.
    Use let for variables that need to be reassigned.
    Avoid using var unless you have a specific reason to use it, as it can lead to unpredictable behavior and make code harder to reason about due to hoisting. Use var only if you need to support older browsers or if you specifically need its function-scoped behavior.
*/
var job = 'programmer'
job = 'teacher'
lalo = "shema"//never just write a variable like this without really decalaring it
console.log(lalo)