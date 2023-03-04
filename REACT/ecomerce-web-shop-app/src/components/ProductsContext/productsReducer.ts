import type { TProductsAction, TProductsState } from "./types";

export const productsReducer = (
  state: TProductsState,
  action: TProductsAction
) => {
  switch (action.type) {
    case "addProduct":
      console.log("add Products");
      break;
    case "removeProduct":
      console.log("remove Product");
      break;
    case "setProducts": {
      const { fetchedProducts } = action.payload;

      if (Array.isArray(fetchedProducts)) {
        return { ...state, fetchedProducts };
      }
      return state;
    }

    default:
      console.log("no Case matched");
      break;
  }
  return state;
};
