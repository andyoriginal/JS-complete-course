
// function logger() {
//     console.log("My name is Andy");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const fruitjuice = fruitProcessor(5, 0);
// console.log(fruitjuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function multiplyFive(number) {
//     return number * 5;
// }
// console.log(multiplyFive(2));

// function calculatedogage(dogage) {
//     const age = `Your dogs age is ${dogage * 7}`
//     return age;
// }
// console.log(calculatedogage(2))

//function declaration 
// function calcAge1(birthYear) {
// return 2023 - birthYear;
// }
// const age1 = calcAge1(1992);

//function expression 
// const calcAge2 = function (birthYear) {
// return 2037 - birthYear;
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1994, 'Bob'));

// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 6));

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(2, 8, 16);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins} `);
    } else {
        console.log("No team wins")
    }
}

checkWinner(scoreDolphins, scoreKoalas);













