for (let i = 0; i < 100; i++) {
  const isOddNumber = i % 2 === 1;

  if (isOddNumber) console.log(i);
}
/*
let = 80;
while (i > 0) {
  const isDivisibleByFive = i % 5 === 0;
  if (isDivisibleByFive) {
    console.log(i);
  }
  i--;
}*/
/*
const names = ["Birute", "Juozas", Algis, Petras, Jonas, Zygis, Marius];
names.forEach((name, i) => {
  if (i % 2 === 0) console.log(name);
});
*/
const userNumber = +prompt();
const randomNumber = Math.round(Math.random() * 1_000);
alert(Math.pow(Math.ceil(randomNumber / userNumber), 4));
