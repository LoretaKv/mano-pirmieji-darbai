const ENDPOINT = "cars.json";

const renderCars = (cars) => {
  cars.forEach((car) => {
    const carsContainerElement = document.querySelector("#renderCarList");
    const carsContainer = document.createElement("div");
    const brandElement = document.createElement("h2");
    const modelsElement = document.createElement("h3");

    brandElement.innerText = car.brand;
    modelsElement.innerText = car.models;

    carsContainer.append(brandElement, modelsElement);
    carsContainerElement.append(carsContainer);
  });
};

const getCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();
    renderCars(cars);
    return cars;
  } catch (error) {
    console.error(error);
  }
};
await getCars();
