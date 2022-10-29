import { getUsers } from "./modules/getusers.js";

const handleFormSubmit = async (event) => {
  event.preventDefault();
  document.querySelector("p").style.visibility = "hidden";
  await getUsers();
};
document.querySelector("#btn").addEventListener("click", handleFormSubmit);
