/* PIRMA UZDUOTIS

let serviceInput = document.getElementById("service");
const form = document.querySelector("form");
let finalbonus = document.getElementById("finalBonus");


function formsubmit(event) {
    event.preventDefault()
    const bonus = 50;
    const servicelenth = Number(serviceInput.value);
    if (servicelenth >= 10) {
        finalbonus.textContent = (bonus + 50);
    } if (servicelenth >= 20) {
        finalbonus.textContent = (bonus + 150);
    } else {
        finalbonus.textContent = bonus;
    }
}
form.addEventListener('submit', formsubmit);
*/

/*KELEMIEJI METAI

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const year = Number(document.getElementById("year").value);
    const outputElement = document.getElementById('output');
    if (isLeapYear(year)) {
        outputElement.textContent = "Metai keliamieji";
    } else {
        outputElement.textContent = "Metai nėra keliamieji";
    }
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);

*/
/* FARENHEITAI

function convertToFarenheit(event) {
  const celciusInputValue = event.target.value;
  const outputElement = document.getElementById("output");
  if (celciusInputValue) {
    const celcius = Number(celciusInputValue);
    const farenheit = (celcius * 1.8 + 32).toFixed(1);
    outputElement.innerText = farenheit;
  } else {
    outputElement.innerText = "";
  }
}
document
  .getElementById("celcius")
  .addEventListener("input", convertToFarenheit);
  */

/*EMAIL SUBMIT
function handleFormSubmit(event) {
  event.preventDefault();
  const enterEmail = document.getElementById("inputemail").value;
  const checkedMark = document.getElementById("checkbox").checked;
  const outputElement = document.getElementById("output");
  outputElement.textContent = checkedMark
    ? `Elektroninis pastas ${enterEmail} sekmingai uzregistruotas`
    : "Jusu registracija nesekminga";
}
document.querySelector(`form`).addEventListener("submit", handleFormSubmit);
*/
/*
function listMyName(event) {
  event.preventDefault();
  const yourName = document.getElementById("nameInput").value;
  const yourNumber = Number(document.getElementById("numberInput").value);

  const myNameList = document.getElementById("list");
  myNameList.innerHTML = "";
  for (let i = 0; i < yourNumber; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = yourName;
    list.append(listItem);
  }
}

document.querySelector("form").addEventListener("submit", listMyName);
*/
//CALL BACKS
const showAlert=()=>{
  alert();

callback();
}
const logGreeting=()=>{
  console.log("Laba Diena")
}

const

