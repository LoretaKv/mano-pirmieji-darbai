import { useEffect, useState } from "react";

export const GetProducts = () => {
  const [products, setProduct] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("https://golden-whispering-show.glitch.me");
    const data = await response.json();
    console.log(setProduct(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <h2>{product.price}</h2>

          <button
            onClick={() => {
              fetch(`https://golden-whispering-show.glitch.me/${product.id}`, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Something went wrong");
                  }
                })
                .catch((error) => console.error(error));
            }}
          >
            Delete Product
          </button>
        </div>
      ))}
    </div>
  );
};
