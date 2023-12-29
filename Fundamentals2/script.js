
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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(2, 8, 16);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins} `);
//     } else {
//         console.log("No team wins")
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

/*
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Shmedtann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise 
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const years = new Array(1991, 1984, 2008, 2020);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Micheal', 'Steven', 'Peter'];
//add elements
friends.push('Jay');
friends.unshift('John');

//remove elements
friends.pop(); // removes last element of array 
friends.shift(); // removes first element of array

console.log(friends);
console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log("You have a friend in me!");
}
*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals);
























