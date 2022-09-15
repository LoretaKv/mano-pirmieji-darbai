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

//OBJECTS

document.querySelector("form").addEventListener("submit", whenSubmit);
function whenSubmit(event) {
    event.preventDefault();
    person = {
        name: document.querySelector("input").value,
        surname: document.querySelector("input:nth-of-type(2)").value
    }
}
return (person);




