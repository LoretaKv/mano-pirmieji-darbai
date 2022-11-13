const getCars = await fetch("http://localhost:5000");
const showCars = await getCars.json();

const carsList = document.querySelector("#carsList");

showCars.forEach((car) => {
  const carEl = document.createElement("li");
  carEl.innerText = car;
  carsList.append(carEl);
});
