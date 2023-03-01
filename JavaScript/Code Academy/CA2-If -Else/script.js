//Sukurk variable 'legalAge', kuris būtų lygus 20.
//Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else,
//kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

const legalAge = 18;
const clientAge = 14;
if (clientAge >= legalAge) {
  alert("pilnametis");
} else {
  alert("nepilnametis");
}

//Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas",
//jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes.
//String ilgį gali susižinoti
//prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length).
// Daugiau čia.

const myName = "loreta";
if (myName.length > 4) {
  alert("long name");
} else {
  alert("very short");
}

//Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100,
//arba mažesnis nei 0 -
//tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

const yourAge = 110;
if (yourAge > 100 || yourAge < 0) {
  alert("Invalid age");
} else if (yourAge > 18) {
  alert("Adult");
} else {
  alert("Child");
}
