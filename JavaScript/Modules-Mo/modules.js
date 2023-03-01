//Vartotojams reikia istrinti savo paskyras, paspaudus mygtuka delete, kad butu vykdoma uzklausa.
import { displayPost } from "./displayPost.js";

const deleteButton = document.querySelector("#deleteButton");

displayPost();

deleteButton.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  const data = await response.json();
  const isUserDeleted = response.ok;
  console.log(data);
  console.log(isUserDeleted);
});
