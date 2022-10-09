const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

//1. Prafiltruojam kad rodytu tik pilnamecius
//console.log(people.filter((x) => x.age >= 18));

console.log(people.filter((x) => x.age >= 18).map((x) => x.name));

//console.log(people.filter((x) => x.age >= 18));
//console.log(people.filter((x) => x.age >= 18).map((x) => x.name));
//console.log(people.filter((x) => x.age >= 18));
/*console.log(
  people
    .filter((x) => x.age >= 18)
    .map((x) => x.name)
    .sort()
);*/

//const adults = people.filter((x) => x.age >= 18);
//console.log(people.filter((x) => x.age >= 18).map((person) => person.name));

//Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price.
// Grąžins - brangiausią ir pigiausią prekes.
//Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).

const products = [
  { name: "braskes", price: 12 },
  { name: "vynuoges", price: 2 },
  { name: "burokai", price: 7 },
  { name: "bulves", price: 3 },
  { name: "aguonos", price: 4 },
  { name: "citrinos", price: 8 },
  { name: "bananai", price: 12 },
];

function price(items) {
  items.sort((a, v) => a - v);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}
console.log(price(products));
/*
function fn(items) {
  items.sort((a, b) => a.price - b.price);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}

console.log(fn(products));*/
