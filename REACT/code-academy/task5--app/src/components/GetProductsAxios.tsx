import { useEffect, useState } from "react";
import axios from "axios";

export const GetProductsAxios = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data } = await axios.get(
      `https://golden-whispering-show.glitch.me`
    );
    setProducts(data);
  };

  useEffect(() => {
    getData();

    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  }, []);

  const removeProduct = (id: any) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts); //pasileis funkciją, kuri update'ins useState prafiltruodama array
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <h2>{product.price}</h2>
              <button
                onClick={() => {
                  removeProduct(product.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
