//Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
//Pvz: fn(3) => "180 seconds".

const time = (x) => x * 60;

console.log(time(6) + "sekundziu");

//Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau
//nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
//Pvz: fn(20) => 7300.

const age = (x) => x * 365;
console.log(age(2) + "dienu");

//Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
//Pvz.: fn(5) -> 25
const square = (x) => Math.pow(x, 2);
console.log(square(3));

//Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius
//(aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
//Pvz: fn(10, 10) -> 50

const triangle = (x, y) => (x * y) / 2;

console.log(triangle(2, 7));

//Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
//pvz. Paduodu: "Petras", grąžina "s".

const myName = (x) => x.slice(-1);
console.log(myName("Onute"));

//Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
//T.y. "Petras" -> "sartep"

const yourName = (x) => x.split("").reverse().join("").toLowerCase();

console.log(yourName("Bebras"));

//Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.

const myNumbers = [-1, -23, -43, 3, -35];
myDigits = myNumbers.filter((x) => x < 0).sort((a, b) => b - a)[0];

console.log(myDigits);

// //Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array
//su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
const numbers = (count) => {
  const hisNumber = [];
  for (let i = 0; i < count; i++) {
    hisNumber.push(Math.floor(Math.random() * 10) + 1);
  }
  return hisNumber;
};
console.log(numbers(4));

const randomNumbers = (quant) => {
  const generatedNums = [];
  for (let i = 0; i < quant; i++) {
    generatedNums.push(Math.floor(Math.random() * 10) + 1);
  }
  return generatedNums;
};
console.log(randomNumbers(7));

const plateNumbers = (run) => {
  const runNumbers = [];
  for (let i = 0; i < run; i++) {
    runNumbers.push(Math.floor(Math.random() * 10) + 1);
  }
  return runNumbers;
};
console.log(plateNumbers(7));

const yourSalary = (count) => {
  const mySalary = [];
  for (let i = 0; i < count; i++) {
    mySalary.push(Math.floor(Math.random() * 10) + 1);
  }
  return mySalary;
};
console.log(yourSalary(9));

//Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value
// ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const bigNumber = (x, y) => x + y >= 100;
console.log(bigNumber(50, 10));

// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium)
//bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.

const array = [
  {
    name: "Jonas",
    age: 17,
  },
  {
    name: "Stase",
    age: 20,
  },
  {
    name: "Juozas",
    age: 65,
  },
  {
    name: "Jurate",
    age: 20,
  },
  {
    name: "Kazys",
    age: 56,
  },
  {
    name: "Loreta",
    age: 39,
  },
];

// const byAge = (clientList) =>
//   clientList
//     .sort((a, b) => (a.name > b.name ? 1 : -1))
//     .sort((a, b) => a.age - b.age);
// console.log(byAge);

const fn = (array) =>
  array
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .sort((a, b) => a.age - b.age);

console.log(array);
