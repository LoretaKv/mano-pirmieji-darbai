// // //Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę)

// const getProducts = async () => {
//   const response = await fetch("https://golden-whispering-show.glitch.me");
//   const productsList = await response.json();

//   showProducts(productsList);
// };

// const showProducts = (productList) => {
//   productList.forEach((products) => {
//     const productsContainer = document.createElement("div");
//     const productName = document.createElement("h3");
//     const productPrice = document.createElement("p");
//     const productImage = document.createElement("img");

//     productsContainer.textContent = "Preke";
//     productName.textContent = products.title;
//     productPrice.textContent = "€" + products.price;
//     productImage.src = products.image;

//     productsContainer.append(productName, productPrice, productImage);
//     document.body.querySelector("#productsContainer").append(productsContainer);
//   });
// };

// await getProducts();

// [20:47] Loreta Kvietkauskienė
// //Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę)

const getProducts = async () => {
  const response = await fetch("https://golden-whispering-show.glitch.me");
  const productsList = await response.json();

  showProducts(productsList);
};

const showProducts = (productList) => {
  productList.forEach((products) => {
    const productsContainer = document.createElement("div");
    const productName = document.createElement("h3");
    const productPrice = document.createElement("p");
    const productImage = document.createElement("img");

    productsContainer.textContent = "Preke";
    productName.textContent = products.title;
    productPrice.textContent = "€" + products.price;
    productImage.src = products.image;

    productsContainer.append(productName, productPrice, productImage);
    document.body.querySelector("#productsContainer").append(productsContainer);
  });
};

await getProducts();
