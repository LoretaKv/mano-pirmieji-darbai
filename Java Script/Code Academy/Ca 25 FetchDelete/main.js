const getProducts = async () => {
  try {
    const response = await fetch("https://golden-whispering-show.glitch.me");
    if (response.ok) {
      const productsList = await response.json();
      console.log(productsList);
      return productsList;
    }
  } catch (error) {
    console.error(error);
  }
};
