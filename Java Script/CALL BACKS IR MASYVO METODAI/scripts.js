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
