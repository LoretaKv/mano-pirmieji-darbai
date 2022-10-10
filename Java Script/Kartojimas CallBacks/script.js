//Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant
//forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
/*
const cars = ["BMW", "VW", "Audi"];
cars.forEach((value) => console.log(value));
cars.forEach((value)=>console.log(value))

//Pakoreguok pirmą pratimą, kad atspaudintum
//index: value (pvz: "0: BMW", "1: VW" ir t.t.).*/

const myCars = ["BMW", "VW", "Audi"];
myCars.forEach((value, i) => console.log(i, value, i));

/*
cars.forEach((value, i) => console.log(i, value));

cars.forEach((value, i) => console.log(value, i));

cars.map((value, i) => console.log((value, i));
cars.forEach((value, i) => console.log(value, i));
//Sukurk Array su savo draugų vardais, raidžių kapitalizaciją
//pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.).
//Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink),
//kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").*/

const friendNames = ["BiRUte", "joNas", "lorETa", "AuDRa"];
console.log(
  friendNames.map(
    (x) => x.charAt(0).toUpperCase() + x.slice(1).toLocaleLowerCase()
  )
);
/*
const newNames = friendNames.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(newNames);

/*
const names = ["peTras", "Jonas", "aNTanaS"];
const newNames = names.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(newNames);*/ /*
const cars = ["mercedes", "audi", "bmw"];
cars.forEach((v) => console.log(v));

const friendNames = ["BiRUte", "joNas", "lorETa", "AuDRa"];
const myFriends = friendNames.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(myFriends);*/

//Sukurk Array su savo draugų amžiais (nuo 1 iki 99).
//Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const friendAges = [13, 14, 56, 8, 45, 23, 36];
console.log(friendAges.filter((x) => x >= 18));
//const myFriends = friendAges.filter((x) => x >= 18);

//Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas").
//Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
const cities = ["Vilnius", "Kaunas", "Klaipeda", "Siauliai"];

console.log(cities.filter((x) => x.charAt(0) === "K"));

//const cityK = cities.find((v) => v.charAt(0) === "S");
//console.log(cityK);

//Penktame pratime
//esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
const lowerCity = cities.some((v) => v.charAt(0) === v.charAt(0).toLowerCase());
console.log(lowerCity);

const capitalCity = cities.every(
  (x) => x.charAt(0) === x.charAt(0).toUpperCase()
);
console.log(capitalCity);

const classNames = ["peTRAS", "joNAS", "ANtanAS", "BirUTE"];
const finalNames = classNames.map(
  (x) => x.charAt(0).toUpperCase() + x.slice(1).toLocaleLowerCase()
);

console.log(finalNames);
// const myFriends = friendNames.map(
//   (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
// );
// console.log(myFriends)

const bedRooms = ["Delux", "suPErior", "STAndRT"];
const roomBeds = bedRooms.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLocaleUpperCase()
);
console.log(roomBeds);

const guestNames = ["John", "peTER", "aLExanDER"];

console.log(
  guestNames.map(
    (v) => v.charAt(0).toUpperCase() + v.slice(1).toLocaleLowerCase()
  )
);

const legoNames = ["Siauliai", "Prienai", "Kelme", ""];

const capitalnames = legoNames.filter((v) => v.charAt(0) === "K");
alert(capitalnames);

console.log(
  legoNames.filter((v) => v.charAt(0) === "B").some((x) => x.toLocaleLowerCase)
);

const customerAges = [23, 45, 56, 21, 12, 23, 12];
console.log(customerAges.filter((v) => v >= 21));
