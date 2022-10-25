const fetchProducts = async () => {
  const getProducts = async () => {
    const response = await fetch("https://golden-whispering-show.glitch.me");
    const productsList = await response.json();

    return productsList;
  };
  const products = await getProducts();
  products.forEach((product) => {
    const productImage = document.querySelector("img");
    const productTitle = document.querySelector("#title");
    const productPrice = document.querySelector("#price");
    productTitle.innerText = product.title;
    productPrice.innerText = "€" + product.price;
    productImage.src = product.image;
    productImage.setAttribute("alt", "Property picture");
  });
};

fetchProducts();
