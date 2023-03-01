import { showCars } from "./showCars.js";

const ENDPOINT = "http://localhost:5004/cars";

const getCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();

    showCars(cars);
  } catch (error) {
    console.error(error);
  }
};
await getCars();

// const getCars = async () => {
//   try {
//     const response = await fetch("http://localhost:5004/cars/");
//     const cars = await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(await getCars());

export { getCars };
