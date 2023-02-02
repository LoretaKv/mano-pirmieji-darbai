import React from "react";
import "./App.css";
import { GetToDos } from "./components/Ca-5-todos";
import { GetProducts } from "./components/FetchItems";
import { GetProductsAxios } from "./components/GetProductsAxios";

function App() {
  return (
    <div className="App">
      {/* <GetProducts /> */}
      {/* <GetProductsAxios /> */}
      <GetToDos />
    </div>
  );
}

export default App;
