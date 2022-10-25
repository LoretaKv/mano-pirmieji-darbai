const getProducts = async () => {
  try {
    const response = await fetch("https://golden-whispering-show.glitch.me");
    if (response.ok) {
      const products = await response.json();
      console.log(products);
      return products;
    }
  } catch (error) {
    console.log(error);
  }
};
export { getProducts };

const showProducts = (products) => {
  const productImage = document.querySelector("img");
  const productTitle = document.querySelector("#title");
  const productPrice = document.querySelector("#price");
  productTitle.innerText = products.title;
  productPrice.innerText = +"€" + products.price;
  productImage.src = products.image;
  productImage.setAttribute("alt", "Property picture");
  console.log(showProducts);
};
showProducts();
