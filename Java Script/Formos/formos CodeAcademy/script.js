let serviceInput = document.getElementById("service");
const form = document.querySelector("form");
let finalbonus = document.getElementById("finalBonus");

function formsubmit(event) {
    event.preventDefault()
    const bonus = 50;
    let service = Number(serviceInput.value);
    if (service >= 10) {
        finalbonus.textContent = (bonus++ 50);
    } else if (service >= 20) {
        finalbonus.textContent = (bonus++ 100);
    } else {
        finalbonus.textContent = bonus;
    }
    form.addEventListener('submit', formsubmit);






