const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.querySelector("#colorInput");
const headingElement = document.createElement("h1");

let colorChangeTimes = 0;

colorInput.addEventListener("input", (event) => {
  const userColorValue = event.target.value.trim().toLowerCase();
  const colors = ["red", "green", "yellow", "blue"];

  const isValueColor = colors.includes(userColorValue);

  if (isValueColor) {
    colorChangeTimes++;

    headingElement.textContent = `Pakeite spalva ${colorChangeTimes}`;

    document.body.append(headingElement);

    productsContainer.style.border = `4px dotted ${userColorValue}`;

    console.log("spalva nustatoma");
  }

  switch (userColorValue) {
    case "red":
      console.log("red");
      break;
    case "green":
      console.log("green");
      break;
    case "yellow":
      console.log("yellow");
      break;
    case "brown":
      console.log("brown");
      break;
    default:
      console.log("Nepriimtina spalva", userColorValue);
  }
});
