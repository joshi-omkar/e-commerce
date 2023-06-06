import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";
import { FilterProvider } from "./context/filterContext";
import { AddressProvider } from "./context/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <AddressProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </AddressProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
