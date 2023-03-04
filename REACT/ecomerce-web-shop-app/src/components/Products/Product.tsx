import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import type { TproductProps } from "./types";

// export const Product = ({ product }: TproductProps) => {
export const Product: FC<TproductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);
  return (
    <div>
      <p>{product.category}</p>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <img src={product.image} />
      <p>{product.price}</p>
      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: 1 } })
        }
      >
        Add Product
      </button>
    </div>
  );
};
