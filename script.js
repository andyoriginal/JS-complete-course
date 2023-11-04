
/*
let js = "amazing";
//if (js === "amazing") alert("JavaScript is here!");

let number = 40 + 8 + 23 - 10;
console.log(number)

let firstName = "BingoBongo";

console.log(firstName);

let country = "USA",
    continent = "NA",
    population = "332 million";

console.log(country, continent, population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;


let age = 35;
age = 36;

const birthyear = 1987;

const job;

//math operators
const CY = 2037;
const ageJonas = CY - 1991;
const ageSarah = CY - 2018;

console.log(ageJonas);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Scmedtmann';
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; // += means x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x -1

console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

console.log(CY - 1991 > CY - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // order of operators

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);


const firstName = 'Jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthyear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthyear}, year old ${job} ! `;

console.log(jonasNew);
console.log(`String
multiple
lines`)


const age = 15;

if (age >= 18) {
    console.log('Jonas can start driving')
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young, waint another ${yearsLeft} years`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; // makes 11
n = n - 1; // 11 -1 = 10
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('Yay, Height is defined');
} else {
    console.log("Height is UNDEFINED");
}


const age = '18';
if (age === 18) console.log('You just became an adult (strict)'); // strict operator is better

if (age == 18) console.log('You just became an adult (loose)'); // avoid using this operator

const favourite = Number(prompt("What's your favorite number?")); //number prompt to convert string into number 
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //always try to use === operator // 22 === 23 -> FALSE 
    console.log("This is the best number");
} else if (favourite === 7) {
    console.log('This is also a good number!')
} else {
    console.log('Number is not 23 or 7');
}



const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('They are able to dive');
// } else {
//     console.log('Somebody else should drive');
// }

const isTired = false; // C 
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('They are able to drive');
} else {
    console.log('Somebody else should drive');
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy!");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
} else {
    console.log("Nobody wins the trophy")
}

const scoreDolphins = (97 + 112 + 102) / 3;
const scoreKoalas = (109 + 95 + 83) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("Nobody wins the trophy")
}
*/

const day = prompt('What day is it?');

switch (day) {
    case 'monday': //day === monday 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

3 + 4 // this is an expression 

