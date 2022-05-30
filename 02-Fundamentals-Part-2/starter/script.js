/*function logger() {
    console.log("My name is Jonas");
}
logger();

function foodProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = foodProcessor(4, 2);
console.log(appleOrangeJuice);

const num = Number("23");

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function foodProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(foodProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired🎈.`;
    }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));
 */

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolfins = calcAverage(65, 54, 49);
let scoreKoalas = calcAverage(44, 23, 71);

function checkWinner(avgDolfins, avgKoalas) {
    if (avgDolfins >= 2 * avgKoalas) {
        return `Dolfins win (${avgDolfins} vs ${avgKoalas}).`;
    } else if (avgKoalas >= avgDolfins) {
        return `Koalas win (${avgKoalas} vs ${avgDolfins}) `;
    } else {
        return `No one wins.`;
    }
}
//const averageKoalas = calcAverage(score1, score2, score3);
//function checkWinner ()

console.log(checkWinner(scoreDolfins, scoreKoalas));
console.log(checkWinner(543, 123));

scoreDolfins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolfins, scoreKoalas);
console.log(checkWinner(scoreDolfins, scoreKoalas));

//Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
const years = new Array(1991, 2004, 1988, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";

const jonas = [firstName, "Schmendtman", 2037 - 1988, "teacher", friends];
console.log(jonas); */

/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];
console.log(ages);

/*const friends = ["Michael", "Steve", "Jay"];
const newLength = friends.push("Peter");
console.log(friends);
console.log(newLength);
friends.unshift("John");
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("Steve"));
console.log(friends.includes("Steve"));

if (friends.includes("Steve")) {
    console.log("You have a friend called Steve");
}
*/
/*let billValue;
billValue = 100;
if (billValue >= 50 && billValue < 300) {
    tip = billValue * (15 / 100);
} else {
    tip = billValue * (20 / 100);
}*/

const calctip = function (bill) {
    return bill >= 50 && bill < 300 ? bill * (15 / 100) : bill * (20 / 100);
};

const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];

console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
