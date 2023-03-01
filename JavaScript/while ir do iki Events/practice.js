//Mats
/*const randomNumber = Math.floor(Math.random() * 5) + 1;
if (randomNumber === 1) {
    alert("You won");
} else {
    alert("Try again next time");
}

const availableRooms = 103;
let soldRooms = 103;

if (soldRooms == availableRooms) {
    console.log("No rooms available")
}
else {
    console.log("Rooms still available")
}



const myAge = 3;

if (myAge >= 120 || myAge < 0) {
    console.log("Invalid Age");
}

else if (myAge >= 18) {
    console.log('Adult');
}
else {
    console.log("Child")
}

const myCar = "KARIETA"
switch (myCar) {
    case "Vw":
    case "Bentley":
    case "Karieta":
        console.log("Vw Group");
        break;
    case "Bmw":
    case "Toyota":
    case "Skoda":
        console.log("Bmw Group");
        break;
    default:
        console.log("Nei Vienam");

}

const userInput = "Obuolys";

switch (userInput) {
    case "Obuolys":
    case "Kriause":
    case "Bananas":
    case "Apelsinas":
        console.log("Vaisius");
        break;
    case "Braske":
    case "Zemuoge":
    case "Agrastas":
    case "Serbentas":
        console.log("Uoga");
        break;
    default:
        console.log("Nei Vaisius nei Uoga")
}

let weekDay = new Date().getDay();

switch (weekDay) {
    case 0:
        weekDay = `Sekmadienis`;
        break;
    case 1:
        weekDay = `Pirmadienis`;
        break;
    case 2:
        weekDay = `Antradienis`;
        break;
    case 3:
        weekDay = `Treciadienis`;
        break;
    case 4:
        weekDay = `Ketvirtadienis`;
        break;
    case 5:
        weekDay = `Penktadienis`;
        break;
    case 6:
        weekDay = `Sestadienis`;
        break;
}
console.log(weekDay)


const myName = "Juozas";
console.log(myName < 6 ? "Short Name" : "Long Name");

const legalAge = 18;
const clientAge = 25;

clientAge >= legalAge ? console.log("Can Drive") : console.log("Cant Drive");

const myPhone = "Iphone";
const isIphoneUser = myPhone === "Iphone";*/

/*const myPhone = 'Iphone';

const userPhone = myPhone === 'Iphone';*/

/*for (let i = 0; i < 20; i++) {
    console.log("Loreta")*/

/*const myName = 'Loreta';
const count = 10;

for (let i = 0; i < count; i++) {
    console.log(`${i}. ${myName}`);
}*/

/*let i = 10;
while (i > 0); {
    console.log(i);
    i--;
}*/

/*const myName = "Loreta";
let i = 10;
while (i > 0) {
    console.log(myName);}
    i--;*/

/*let i = '';
const myName = "Loreta";
let times = 20;
do {
    i = +myName;
    times--;
}
while
    times > 0);

console.log(i);*/


/*document.body.innerHTML = "<h2>Loreta</h2>";*/

/*const myName = 'Juozas';
const h2 = document.createElement('h2');
h2.textContent = myName;
document.body.append(h2);*/

/*
const myName = 'Juozas';
const h2 = document.createElement('h2');
h2.textContent = myName;
document.body.append(h2);
*/



/*
myName = "Loreta"
document.getElementById('name').textContent = myName
*/

/*
document.querySelector('li:last-child').textContent = "Kefyras";
*/
/*
document.querySelector('.bluetext>span').textContent = "blue";
*/
/*
const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
*/

/*
const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
*/
/*
function alertName(name) {
    alert(name);
}
alertName('Loreta');
*/
/*
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
generateRandomNumber();
*/
//Function 3 Pratimas
/*
function getNameAndSurnameLength(name, surname) {
    return name.length + surname.length;
}
getNameAndSurnameLength('John', 'Snow');
*/


//4 Pratimas
/*
function getLetterByIndex(index) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return alphabet[index];
}
getLetterByIndex(5);

*/

/*
document.querySelector('button').addEventListener("click".sayMyName);

function sayMyName() {
    alert("Loreta");
}
*/
/*
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').innerText = 'Some nice text';
});
*/
/*
document.querySelector('p').addEventListener('copy', () => {
    event.preventDefault();
    alert("Can't copy this")
});
*/
/*
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

document.querySelector('button').addEventListener('click', () => {
    const randomNumber = generateRandomNumber();
    document.querySelector('h1').innerText = randomNumber;
});
*/
/*
document.getElementsByClassName('adult').addEventListener('click', () =>
    document.getElementById('OldEnough').innerText = 'Alus');
*/
/*
document.getElementById('adult').addEventListener('click', () => document.getElementById('output').innerText = 'Alus');
document.getElementById('child').addEventListener('click', () => alert('nepilnametis - nieko neturim'));
*/
/*
function generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}
const randomNumber = generateRandomNumber();
console.log(randomNumber);

document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yay') : alert('Nay'));
document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert('Nay'));
document.getElementById('tree').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert('Nay'));
*/

/*
function generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}
const randomNumber = generateRandomNumber();
console.log(randomNumber);

document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yay') : alert('Nay'));
document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert('Nay'));
document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert('Nay'));
*/

/*
document.body.addEventListener('mousemove', () => document.getElementById('output').innerText = 'Kiek galima neklausyti?!');
*/