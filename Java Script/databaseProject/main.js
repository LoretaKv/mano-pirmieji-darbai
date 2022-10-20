import { getPost } from "./modules/getPost.js";
import { showPost } from "./modules/showPost.js";

const form = document.querySelector("#getPostNumberForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const postNumber = +document.querySelector("#postNumberInput").value;

  if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
    //uzdejus pliusa-teoriskai nebutinas.
    const post = await getPost(postNumber);

    showPost(post);
  }
});

// Iš jau naudoto  fiktyvaus
// API back-end atvaizduoti postą nr. X (vartotojas įveda input
//      laukelyje skaičių (prisiminkit, kaip tikrinti)) ir prie posto input
//      laukelį - pakeitus jame reikšmę, keičiasi ir
// posto aprašymas (prisiminkit, kokį HTTP metodą naudoti).
