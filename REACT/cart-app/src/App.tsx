import "./App.css";

import { MainRouter } from "./components/MainRouter/MainRouter";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <MainRouter />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
