//Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
/* 1.
const cars = ["BMW", "VW", "Audi"];
cars.forEach((v) => console.log(v));
*/

/*2.
const cars = ["BMW", "VW", "Audi"];
cars.forEach((v, i) => console.log(i + ":" + v));
*/
/*
//Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const names = ["BrONius", "NerINga", "laiMA"];
const newNames = names.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(newNames);*/
/*
const namesOne = ["BiRUTE", "LoRETa", "ALDona"];
const friendNames = namesOne.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(friendNames);*/
/*
const newHotels = ["hilton", "mariot", "pacai"];
const favoriteHotels = newHotels.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(favoriteHotels);*/

//3. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const age = [10, 5, 25, 36, 42, 21, 25];
console.log(age.filter((x) => x >= 18));

const myName = ["birute", "antanas", "albinas"];
myName.forEach((value) => {
  console.log(value);
});
const rooms = ["deluxe", "superior", "suite"];
rooms.forEach((v, i) => console.log(i + ":" + v));

const drinks = ["cola", "pepsi", "fanta"];
drinks.forEach((v, i) => console.log(i + ":" + v));

const names = ["birute", "sandra", "paulius"];
const friendNames = names.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(friendNames);
const flowers = ["jurGINAS", "bijunaS", "orcHIdeja"];
const gardenFlowers = flowers.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLocaleLowerCase()
);
console.log(gardenFlowers);

const friendsAge = [18, 20, 21, 15, 12, 16];
console.log(age.filter((x) => x >= 18));

const enginePower = [200, 350, 100, 20, 1000];
console.log(enginePower.filter((x) => x >= 100));

const weight = [20, 30, 500, 60, 160];
console.log(weight.filter((x) => x <= 160));

const cities = ["kaunas", "klaipeda", "raseiniai", "alytus", "kaisiadorys"];
console.log(cities.find((v) => v.charAt(0) === "k"));

const colors = ["Birute", "jonas", "jadvyga", "anele"];
console.log(colors.filter((v) => v.charAt(0) === "j"));

const myCities = ["Vilnius", "Klaipeda", "raseiniai", "alytus", "kaisiadorys"];
console.log(myCities.every((v) => v.charAt(0) === v.charAt(0).toUpperCase()));
