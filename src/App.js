import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import ProductListing from "./Pages/ProductListing";
import SingleProduct from "./Pages/SingleProduct";
import Wishlist from "./Pages/Wishlist";
import Profile from "./Pages/Profile";
import PlaceOrder from "./Pages/PlaceOrder";
import Navbar from "./Components/Navbar";
import Mockman from "mockman-js";
import { useCart } from "./context/cartContext";
import RequireAuth from "./Components/RequireAuth";
import CheckOut from "./Pages/CheckOut";

export const TokenContext = createContext({});
export const UserContext = createContext({ user: {} });

const App = () => {
  const getUserToken = localStorage.getItem("token");
  const { productData, setProductData } = useCart();

  const [isAuth, setIsAuth] = useState(getUserToken !== null ? true : false);
  const [user, setUser] = useState([]);
  const [category, setCategory] = useState(null);

  const getProductData = () => {
    axios
      .get("/api/products")
      .then((res) => {
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  console.log(category)

  return (
    <UserContext.Provider value={{ user, setUser, getUserToken }}>
      <div className="App">
        <Navbar productData={productData} />
        <Routes>
          <Route path={`/`} exact element={<Home setCategory={setCategory}/>} />
          <Route path={`/login`} exact element={<Login />} />
          <Route path={`/signup`} exact element={<Signup />} />
          <Route
            path={`/cart`}
            exact
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route path={`/products`} exact element={<ProductListing category={category} setCategory={setCategory} />} />
          <Route path={`/product/:id`} exact element={<SingleProduct />} />
          <Route
            path={`/wishlist`}
            exact
            element={
              <RequireAuth>
                <Wishlist />
              </RequireAuth>
            }
          />
          <Route
            path={`/profile`}
            exact
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path={`/placeOrder`}
            exact
            element={
              <RequireAuth>
                <PlaceOrder />
              </RequireAuth>
            }
          />
          <Route
            path={`/checkOut`}
            exact
            element={
              <RequireAuth>
                <CheckOut />
              </RequireAuth>
            }
          />
          <Route path={`/mockman`} exact element={<Mockman />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
