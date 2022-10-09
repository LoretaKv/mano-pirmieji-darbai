//Petras is old enoug to drink

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age >= 18) {
      alert(this.name + "Is Old enoug to drink");
    } else {
      alert(this.name + "Only Cola for you");
    }
  }
}
const me = new Person("Jonas", 15);
console.log(me.compareAge());

//Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
//pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

// const filterOutLetters = (arr) =>
//   arr.filter((element) => typeof element === "number");
// console.log(filterOutLetters([1, 5, "a", "g", "z", 6]));

const filterOut = (arr) => arr.filter((e) => typeof e === "number");
console.log(filterOut([1, 6, 8, "e", "f", "5"]));

const newArray = (arr) => arr.filter((element) => typeof element === "number");
console.log(newArray([1, 5, "f", "r", 1, "o"]));

//Sukurk funkciją, kuri paims stringą kaip parametrą
//ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
//pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

const returnLetters = (text) =>
  text
    .split("")
    .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
    .join("");
console.log(returnLetters("Loreta 12345 Kvietka"));

// const duplicateAllLetters = (text) =>
//   text
//     .split("")
//     .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
//     .join("");
// console.log(duplicateAllLetters("Petras 123 Slekys"));

//Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas.
//Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių.
//Jei yra tarpų - post code neteisingas.
//Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

const isValidPostCode = (postCode) =>
  /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
console.log(isValidPostCode("abc123"));
console.log(isValidPostCode("12345"));
console.log(isValidPostCode("123ab"));
