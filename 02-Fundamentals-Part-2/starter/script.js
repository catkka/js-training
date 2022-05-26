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

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolfins = calcAverage(65, 54, 49);
const scoreKoalas = calcAverage(44, 23, 71);

function checkWinner(avgDolfins, avgKoalas) {
    if (avgDolfins > avgKoalas) {
        return `Dolfins win (${avgDolfins} vs ${avgKoalas}).`;
    } else {
        return `Koalas win (${avgKoalas} vs ${avgDolfins}) `;
    }
}
//const averageKoalas = calcAverage(score1, score2, score3);
//function checkWinner ()

console.log(checkWinner(scoreDolfins, scoreKoalas));
