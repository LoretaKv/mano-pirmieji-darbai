const heading = document.body.querySelector("#seo-heading");
const firstName = prompt("Your Name");
const lastNameInput = document.body.querySelector("last-Name-Input");
heading.textContent = firstName;
lastNameInput.addEventListener("input", (event) => {
  const lastName = event.target.value.trim();
  console.log({ lastName });

  heading.textContent = `${firstName} ${lastName}`;
});

const onSubmit = (event) => {
  event.preventDefault;
  alert("submitted succesfuly");
};

document.body.querySelector("form");
