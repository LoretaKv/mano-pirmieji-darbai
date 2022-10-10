//Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert()
//ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

const milkPrice = 20.33;
if (milkPrice.isinteger) {
  alert(`Jums reikes centu ${milkPrice.toFixed(2)}`);
} else {
  alert("centu nereikes");
}

// const milkPrice = 60.63;
// if (milkPrice.isinteger) {
//   alert("nereikes centu");
// } else {
//   alert("reikes centu");
// }*/
/*
Pakoreguok pirmą pratimą, kad alert taip pat ir 
išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).*/
/*
const milkPrice = 60;
if (milkPrice.isinteger) {
  alert(`nereikes centu ${milkPrice.toFixed(2)}`);
} else {
  alert(`reikes centu ${milkPrice.toFixed(2)}`);
}*/
/*
Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): 
viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, 
su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti 
kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L.
 Pateikus duomenis - vartotojui apačioje turi išmesti
 kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).*/
/*
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const petrolPrice = Number(document.querySelector("#petrolprice").value);
  const petrolAmount = Number(document.querySelector("#petrolamount").value);

  let totalAmountToPay = petrolPrice * petrolAmount;

  const totalToPay = document.createElement("h1");
  totalToPay.textContent = totalAmountToPay.toFixed(2);
  document.body.append(totalToPay);
});*/
/*
Pasirašykite variable isLegalAge, kurį priskirkite true arba false. 
Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log,
 kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.

const legalAge = true;
console.log(legalAge);
console.log(legalAge.toString());*/

/*Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. 
Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, 
po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.*/
/*
      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const quant = Number(document.getElementById("quant").value);

        if (Number.isInteger(quant)) {
          const h1 = document.createElement("h1");
          h1.textContent = name.repeat(quant);
          document.body.append(h1);
        } else {
          alert("Number is not an integer");
        }
      });*/

/*Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. 
      Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.*/
/*
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();

  alert("Length: " + name.length);
});*/
/*
Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę).
 Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();

  const name = document.createElement("h1");
  name.textContent = fullName.split(" ")[0];

  const surname = document.createElement("h1");
  // Vardą+Pavardę paėmus, pakeičiame vardą - tarpeliu (ir nutriname vieną tarpelį). Paliekame visą kitą.
  surname.textContent = fullName.replace(name, "").slice(1);

  document.body.append(name, surname);
});*/

const myName = "Loreta Kvietkauskiene";
console.log(myName.split("")[10]); // Grazina E;
console.log(myName.repeat(10)); // Grazina 10 kart ta pati
console.log(myName.slice(2)); //Grazina eta Kvietkauskiene;
