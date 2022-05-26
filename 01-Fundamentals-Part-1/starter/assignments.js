/*const country = "Germany";
const continent = "Europe";
let population = 82900000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "German";

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Tetiana";
const lastName = "Voitovych";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10;
x *= 4; // x = x * 4;
x++; // x = x +1;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullage = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

console.log(population / 2);
population++;
console.log(population);
const populationOfFinland = 6000000;
console.log(populationOfFinland > population);
const averagePopulation = 33000000;
console.log(population > averagePopulation);
let description =
    country +
    " is in Europe, and its " +
    population +
    " speaks" +
    language +
    " .";
console.log(description);

//Challenge 2

let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

marksBMI = marksWeight / marksHeight ** 2;
johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(marksBMI, johnsBMI);

let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnsWeight2 = 85;
let johnsHeight2 = 1.76;

marksBMI2 = marksWeight2 / marksHeight2 ** 2;
johnsBMI2 = johnsWeight2 / johnsHeight2 ** 2;

console.log(marksBMI2, johnsBMI2);

if (marksHeight < johnsHeight) {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
} else {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
}


//Challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalasa win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    ("Nobody wins");
}

//Bonus Task
const hasDriverLincense = true;
const hasGoodVision = true;
console.log(hasDriverLincense && hasGoodVision);

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalasa win the trophy");
} else if (
    scoreDolphins === scoreKoalas &&
    scoreDolphins >= 100 &&
    scoreKoalas >= 100
) {
    console.log("Both win");
} else "No one wins the trophy"; */

const age = 23;
age >= 18
    ? console.log("I like to drink wine.")
    : console.log("I like to drink water.");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine." : "water."}`);

// Task Tip Calculator
let billValue;
billValue = 430;
/*if (billValue >= 50 && billValue < 300) {
    tip = billValue * (15 / 100);
} else {
    tip = billValue * (20 / 100);
}*/
const tip =
    billValue >= 50 && billValue < 300
        ? billValue * (15 / 100)
        : billValue * (20 / 100);
console.log(
    `The bill was ${billValue}, tips was ${tip}  and the total value is ${
        tip + billValue
    }`
);
