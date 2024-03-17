const firstName = "mohamed"
const job = "business manager"
const birthDay = 1993
const year = 2024
//without template leterals
const mohamed = "I'm " + firstName + ",a " + (year - birthDay) + ' years old ' +
    job + " !!"

console.log(mohamed)
//with template leterals
const mohamedNew = `I'm ${firstName} a ${year - birthDay} years old ${job} !!`
console.log(mohamedNew)

console.log(`Just a regular string ...`)
//create multiline strings without template leterals
console.log("create multiline strings\nline1\nline2\n line3")
console.log("create multiline strings\n\
line1\n\
line2\n\
line3")
//create multiline strings with template leterals
console.log(`create multiline strings
line1
line2
line3`)