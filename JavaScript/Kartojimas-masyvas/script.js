const car = {
  price: 20_000,
  color: "red",
};

const products = [car];

const premiumCar = new Car(100_000, "red");

const flower = {
  price: 20,
  color: "pink",
};

products.push(premiumCar);

function RandomProduct() {
  const randomNumber = Math.random();
  const roundedNumber = Math.round(randomNumber * 9_000 + 1_000);

  this.price = randomNumber;
  if (Math.round(randomNumber)) {
    this.color = "black";
  } else {
    this.isAvailable = true;
  }
}

function Car(price, color) {
  this.price = price;
  this.color = color;
}

const addProducts = (productsAmount) => {
  for (let index = 0; index < productsAmount; index++) {
    const product = new RandomProduct();
    products.push(product);
  }
};

const removeFirstProduct = () => {
  products.shift();
};

removeFirstProduct();
addProducts(15);

products.shift();

console.log(products);

products.forEach((product, productNumber) =>
  console.log({ price: product.price, productNumber })
);

const getProductToMiddle = (product) => {
  const halfLenghtOfArray = Math.round(product.lenght / 2);

  const modifiedProduct = [
    ...products.slice(0, halfLenghtOfArray),
    flower,
    ...products.slice(halfLenghtOfArray),
  ];

  return modifiedProduct;
};
const modifiedProducts = getProductToMiddle(flower);
