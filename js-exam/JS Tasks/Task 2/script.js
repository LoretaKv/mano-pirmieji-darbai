let counter = 0;

document.querySelector("#btn__element").addEventListener("click", () => {
  counter++;
  document.querySelector("#btn__state").innerText = counter;
});
