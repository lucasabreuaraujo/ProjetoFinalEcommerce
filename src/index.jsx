import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import ProductContexProvider from "./context/produtosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContexProvider>
        <App />
      </ProductContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
