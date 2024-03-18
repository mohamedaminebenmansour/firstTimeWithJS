const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Mouna can start driving license")
} else {
    const yearsLeft = 18 - age;
    console.log(`Mouna is too young, Wait another ${yearsLeft} years`);
}