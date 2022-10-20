// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

// Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
// Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
// Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
// Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas).
// Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę
// (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

import { getRobots } from "./modules/getRobots.js";

await getRobots();

const createTable = () => {
  const newTable = document.createElement("table");
  const tableRow = document.createElement("tr");
  const tableHeader = document.createElement("thead");
  const tableHeadOfID = document.createElement("th");
  const tableHeadOfFirstName = document.createElement("th");
  const tableHeadOfLastName = document.createElement("th");
  const tableHeadOfCity = document.createElement("th");
  const tableHeadOFFavColor = document.createElement("th");
};

tableRow.innerText = "";
tableHeader.innerText = tableHeadOfID = "ID";
tableHeadOfFirstName = "FirstName";
tableHeadOfLastName = "Last Name";
tableHeadOfCity = "City";
tableHeadOFFavColor = "Favorite Color";
