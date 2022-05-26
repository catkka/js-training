/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Voitovych";
console.log(lastName);

const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


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

markHigherBMI = marksHeight < johnsHeight;

console.log(markHigherBMI);


const firstName = "Tetiana";
const job = "teacher";
const birthYear = 1988;
const year = 2037;

const tetiana =
    "I am " +
    firstName +
    ", a " +
    (year - birthYear) +
    " years old " +
    job +
    "!";
console.log(tetiana);
const tetianaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(tetianaNew);
console.log("Just a regular string");
console.log(`String with \n\ multiple \n\ lines`);

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23));

//type coercion
console.log("23" - "10" - 3);
console.log("23" * "3");

let n = "1" + 1;
n--;
console.log(n);

//5 falsy values: 0, "", undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 10;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY, height is defined");
} else {
    console.log("Height is not defined!");
}

const age = 18;
if (age === 18) console.log("You just became an adult! (strict)");

if (age == 18) console.log("You just became an adult! (loose)");

/*const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite ===7){
    console.log("7 is also a cool number!")
} else {
    console.log("Number is not 23 or 7!")
}

if (favourite !== 23) console.log("Why not 23?")
*/

const day = "monday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("write code examples");
        break;
    case "friday":
        console.log("record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy your day off");
        break;
    default:
        console.log("Not a valid day");
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("write code examples");
} else if (day === "friday") {
    console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy your day off");
} else {
    console.log("Not a valid day");
}
