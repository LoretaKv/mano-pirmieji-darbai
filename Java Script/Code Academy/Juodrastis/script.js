//Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę);

const getProducts = async () => {
  try {
    const response = await fetch(" https://golden-whispering-show.glitch.me");
    if (response.ok) {
      const productList = await response.json();
      return productList;
    }
  } catch (error) {
    console.error(error);
  }
};

const products = await getProducts();
const showProducts = (products) => {
  const productName = document.querySelector("#productName");
  const productImage = document.querySelector("#productImg");
  const productPrice = document.querySelector("#productPrice");
  productName.textContent = products.title;
  productImage.src = products.image;
  productPrice.textContent = +"€" + products.price;
};
showProducts(products);
