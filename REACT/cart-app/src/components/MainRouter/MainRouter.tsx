import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";
import { Header } from "../Header";
import { ItemsData } from "../ItemsData/ItemsData";
import { useShoppingcart } from "../../context/ShoppingCartContext";

export const MainRouter = () => {
  const { openCart, cartQuantity } = useShoppingcart();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemsData />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};
