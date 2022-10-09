//Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'.
//Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius ar daržovė.
//Pridėkite bent 5 kiekvienos kategorijos (trūksta idėjų? Wiki į pagalbą: vaisiai, daržovės).

const userInput = "melyne";

switch (userInput) {
  case "Obuolys":
  case "Kriause":
  case "Melionas":
  case "Arbuzas":
    console.log("Vaisius");
    break;
  case "braske":
  case "zemuoge":
  case "agrastas":
  case "melyne":
    console.log("uoga");
    break;
  default:
    console.log("nei vaisius, nei uoga");
}
let weekDay = new Date().getDay();

switch (weekDay) {
  case 0:
    weekDay = "pirmadienis";
  case 1:
    weekDay = "antradienis";
  case 2:
    weekDay = "treciadienis";
  case 3:
    weekDay = "kketvirtadienis";
  case 4:
    weekDay = "penktadienis";
  case 5:
    weekDay = "sestadienis";
  case 6:
    weekDay = "sekmadienis";
    break;
}
console.log(weekDay);

//Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y.
//clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

const clientAge = -2;
const legalAge = 20;
clientAge > 100 || clientAge < 0
  ? alert("invalid Age")
  : clientAge >= legalAge
  ? alert("gali vairuoti")
  : alert("vairuoti negali");

//Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą
//(atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai,
//vietoj to, kad išmestų kiekvienoje eilutėje).
//Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.

const myName = "Loreta";
const count = 10;
for (let i = 0; i < count; i++);
console.log(`${count}  ${myName}`);
