// /*Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus ciklą į combo
// prisirašo Jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ).
// Sukurkite programą, kur bus kintamasis (let times = 5), kuris nurodys kiek kartų
// //  į combo kintamąjį turėtų būti pridėtas Jūsų vardas. Jei times skaičius 0 arba mažiau -
// //  vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
// // Pvz:
// // times = 0; combo = "Petras"
// // times = 1; combo = "Petras"
// // times = 2; combo = "PetrasPetras"
// // */
// // let combo = "";
// // let myName = "Loreta";
// // let times = 6;
// // do {
// //   combo += myName;
// //   combo--;
// // } while (times > 0);
// // console.log(times);

// //Sukurk random skaičių tarp 5 ir 12 (įskaitant abu).

// const randomNumber = Math.round(Math.random() * 5) + 7;
// console.log(randomNumber);

// //Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar
// //jis laimėjo bilietą ar ne. Tikimybė laimėti -
// //viena iš penkių. (Hint: čia reikės if-else su math random).

// const generateRandomNumber = Math.round(Math.random() * 5) + 1;
// if (generateRandomNumber === 2) {
//   alert("Jusu bilietas laimingas");
// } else {
//   alert("try againa later");
// }

//Susikurkite projektą, be jokių HTML tag'ų body.
//Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.

//document.body.innerHTML = "<h2>Loreta</h2>";

//Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown".
//Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

document.body.querySelector("#name").textContent = "Jolanta";

//Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena".
//Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".
document.body.querySelector("#products").lastChild = "Braske";

// pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

document.body.querySelector(".bluetext>span").textContent = "blue";

//Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis.
//Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma Jūs turite pasiimt pirmo ir
//antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.
const firstListItem = document.querySelector("li:first-child");
const secondListItem = document.querySelector("li:nth-child(2)");

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
