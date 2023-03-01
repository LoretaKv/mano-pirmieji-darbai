const userName = prompt("Type your name");
const userAge = +prompt("Type your age");

console.log({ userName, userAge });

const userREgion = navigator.language.toLocaleLowerCase();
const hasAppropriateAge = userAge >= 16;
const isLithuanianUser = userREgion === "en-us";
console.log(userREgion);
console.log(hasAppropriateAge);
console.log(isLithuanianUser);

if (hasAppropriateAge && isLithuanianUser) {
  const firstThreeLetters = userName.slice(0, 3);
  const randomNumber = parseInt(1_000 + Math.random() * 8_999);
  const giftCode = `${firstThreeLetters}${randomNumber}`;

  alert(`Jums priklauso nuolaidu kodas:${giftCode}`);
}
