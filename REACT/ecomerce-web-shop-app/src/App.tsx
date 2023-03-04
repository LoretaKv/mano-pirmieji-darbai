import { useReducer } from "react";
import { MainRouter, ProductsContext, productsReducer } from "./components";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  return (
    <div>
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <MainRouter />
      </ProductsContext.Provider>
    </div>
  );
};
