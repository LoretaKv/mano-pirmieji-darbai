import { useReducer } from "react";
import { MainRouter, ProductsContext, productsReducer } from "./components";
import { Fade } from "@mui/material";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  return (
    <Fade in>
      <div>
        <ProductsContext.Provider value={{ ...state, dispatch }}>
          <MainRouter />
        </ProductsContext.Provider>
      </div>
    </Fade>
  );
};
