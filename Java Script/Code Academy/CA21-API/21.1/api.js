// Jums paskambino pažinčių portalas –
// jiems reikia greitai sukurti front-endą,
// kuris pasiimtų duomenis iš https:
// //randomuser.me/api/ ir juos atvaizduotų juos puslapyje.
// Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką,
//  vardą, amžių ir el. pašto adresą.
const fullUserCard = (user) => {
  const image = document.createElement("img");
  image.src = user.picture.large;
  image.alt = `${user.name.firs} profilr picture`;

  const intro = document.createElement("h4");
  intro.textContent = `${user.name.first},${user.name.last},${user.dob.age}`;

  const userContacts = document.createElement("h1");
  userContacts.textContent = user.email;

  const card = document.createElement("div");
  card.append(image, intro, userContacts);
  document.body.append(card);
};

const getFetch = async () => {
  const response = await fetch(" https://randomuser.me/api/ ");
  const data = await response.json();
  fullUserCard(data.results[0]);
};
await getFetch();

console.log(getFetch);
