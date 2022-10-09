function Car(name, power, year, introduce) {
  (this.name = name),
    (this.power = power),
    (this.year = year),
    (this.introduce = function () {
      alert("Hiyou have new" + this.name);
    });
}
const nojusCar = new Car("BMW", 20, 2022);
//console.log(nojusCar.introduce());

//Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės
//metodą 'turnOn' - kuris alertins 'vrooom'.
// Sukurkite du objektus ir patikrinkite ar veikia.

// const viltesCar = new Car("VW", "Passat", 2000);
// console.log(viltesCar.turnOn());
// const myCar = new Car("bmw", "X5", "3.5L");
// console.log(myCar);

//Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą
//'getPrice'. basePrice propertį įrašys sukuriant objektą,
//tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' -
// kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, price) {
  (this.brand = brand),
    (this.model = model),
    (this.engine = engine),
    (this.basePrice = price),
    (this.getPrice = function () {
      let additionalPrice = 0;
      if (this.engine === "electric") {
        additionalPrice = 10_000;
      } else if (this.engine === "diesel") {
        additionalPrice = 5_000;
      }
      return this.basePrice + additionalPrice;
    });
}
const myCar = new Car("BMW", "X5", "electric", 2000);
console.log(myCar.getPrice());
