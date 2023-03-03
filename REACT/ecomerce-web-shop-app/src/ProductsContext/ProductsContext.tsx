import { createContext } from "react";
import type { TProductsContext } from "./types";

const INITIAL_VALUE = {
  fetchedProducts: [],
  cartProducts: [],
  dispatch: () => {},
} as const;

export const ProductsContexts = createContext<TProductsContext>(INITIAL_VALUE);
