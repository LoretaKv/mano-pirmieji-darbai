const inputKilos = document.getElementById("search");
const form = document.querySelector("form");
const weightDisplay = document.querySelector("#weightDisplay");
const convertedGramsValue = document.querySelector("#convertedGramsValue");
const convertedOunceValue = document.querySelector("#covertedOunceValue");
const convertedPoundsValue = document.querySelector("#convertedpounsValue");

function handleWeightConverter(event) {
  event.preventDefault();
  const weight = Number(inputKilos.value);

  const gramsValue = +1000;
  const ounceValue = +35.274;
  const poundsValue = +2.2046;

  const kilosIntoGrams = weight * gramsValue;
  const kilosIntoOunce = weight * ounceValue;
  const kilosIntoPounds = weight * poundsValue;

  convertedGramsValue.replaceChildren();
  convertedOunceValue.replaceChildren();
  convertedPoundsValue.replaceChildren();

  convertedGramsValue.append(
    `${weight} kg is: ${kilosIntoGrams.toFixed(2)}  g.`
  );

  convertedOunceValue.append(
    `${weight} kg is: ${kilosIntoOunce.toFixed(2)}  oz`
  );

  convertedPoundsValue.append(
    `${weight} kg is: ${kilosIntoPounds.toFixed(2)}  lb`
  );

  weightDisplay.style.visibility = "visible";
}

form.addEventListener("submit", handleWeightConverter);
