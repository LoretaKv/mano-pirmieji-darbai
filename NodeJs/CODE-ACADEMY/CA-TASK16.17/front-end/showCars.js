const showCars = (cars) => {
  const carsPage = document.body.querySelector("#carsPage");
  carsPage.replaceChildren();

  cars.forEach((car) => {
    const { id, title, image, price, numberplate } = car;

    const carsContainer = document.createElement("div");
    carsContainer.className = "carsContainer";

    const carTitle = document.createElement("h2");
    carTitle.className = "carTitle";
    carTitle.textContent = `${title}`;

    const carImg = document.createElement("img");
    carImg.setAttribute("src", `${image}`);
    carImg.setAttribute("alt", "car");

    document.body.appendChild(carImg);

    const carPrice = document.createElement("h4");
    carPrice.className = "carPrice";
    carPrice.textContent = `${price}$`;

    const carNumberPlate = document.createElement("h4");
    carNumberPlate.className = "carNumberPlate";
    carNumberPlate.textContent = `${numberplate}`;

    const deleteCarContainer = document.createElement("div");
    deleteCarContainer.className = "deleteCarContainer";

    const deleteCarButton = document.createElement("button");
    deleteCarButton.id = `${id}`;
    deleteCarButton.className = "deleteCarBtn";
    deleteCarButton.textContent = "DELETE";

    deleteCarContainer.append(deleteCarButton);

    carsContainer.append(
      carTitle,
      carImg,
      carPrice,
      carNumberPlate,
      deleteCarContainer
    );
    carsPage.append(carsContainer);

    const deleteCarEl = async () => {
      try {
        const response = await fetch(
          `http://localhost:5004/cars/${deleteCarButton.id}`,
          {
            method: "DELETE",
          }
        );

        const isPostDeleted = response.ok;

        if (isPostDeleted) {
          alert("Car deleted succesfully");

          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    };

    deleteCarButton.addEventListener("click", deleteCarEl);
  });
};

// await showCars();

export { showCars };
