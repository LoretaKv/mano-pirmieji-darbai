import { useEffect, useState } from "react";

export const getProducts = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me").then((response) =>
      response.json()
    );
  });
};
