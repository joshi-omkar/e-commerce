import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [productData, setProductData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [wishListCounter, setWishListCounter] = useState(0);

  const defaultHeader = {
    authorization: localStorage.getItem("token"),
  };

  const getWishlist = async () => {
    setShowLoader(true);
    const header = {
      authorization: localStorage.getItem("token"),
    };
    await fetch("/api/user/wishlist", {
      method: "GET",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        setWishList(data.wishlist);
      })
      .catch((e) => console.error(e));
    setShowLoader(false);
  };

  const addToWishlist = async (item) => {
    if (localStorage.getItem("token")) {
      const header = {
        authorization: localStorage.getItem("token"),
      };
      let reqBody = { product: item };
      await fetch("/api/user/wishlist", {
        method: "POST",
        headers: header,
        body: JSON.stringify(reqBody),
      })
        .then((res) => res.json())
        .then(async (data) => {
          setWishList(await data.wishlist);
        });
    }
  };

  const removeFromWishlist = async (item) => {
    const header = {
      authorization: localStorage.getItem("token"),
    };
    await fetch(`/api/user/wishlist/${item.id}`, {
      method: "DELETE",
      headers: header,
    })
      .then((res) => res.json())
      .then(async (data) => {
        setWishList(await data.wishlist);
      });
  };

  const getCart = async () => {
    const header = {
      authorization: localStorage.getItem("token"),
    };
    setShowLoader(true);
    await fetch("/api/user/cart", {
      method: "GET",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data.cart);
      })
      .catch((e) => console.error(e));
    setShowLoader(false);
  };

  const createNewCartProd = async (item, header) => {
    let reqBody = { product: item };
    await fetch("/api/user/cart", {
      method: "POST",
      headers: header,
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then(async (data) => {
        setCartProducts(await data.cart);
      });
  };

  const updateCartItem = async (item, action, header = defaultHeader) => {
    let reqBody = {};
    if (action === "increment") {
      reqBody = { action: { type: "increment" } };
    } else {
      reqBody = { action: { type: "decrement" } };
    }
    await fetch(`/api/user/cart/${item.id}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then(async (data) => {
        setCartProducts(await data.cart);
      });
  };

  const addToCart = async (item) => {
    if (localStorage.getItem("token")) {
      const header = {
        authorization: localStorage.getItem("token"),
      };
      const prodInList = cartProducts?.find(
        (product) => product.id === item.id
      );

      if (prodInList === undefined) {
        createNewCartProd(item, header);
      } else {
        updateCartItem(item, header, "increment");
      }
    }
  };

  const removeFromCart = async (item) => {
    const header = {
      authorization: localStorage.getItem("token"),
    };
    await fetch(`/api/user/cart/${item.id}`, {
      method: "DELETE",
      headers: header,
    })
      .then((res) => res.json())
      .then(async (data) => {
        setCartProducts(await data.cart);
      });
  };

  const resetCounters = () => {
    setWishList([]);
    setCartProducts([]);
  };

  const loginDataLoad = () => {
    getWishlist();
    getCart();
  };
  useEffect(() => {
    const updateCounter = () => {
      setWishListCounter(wishlist?.reduce((total, curr) => total + 1, 0));
    };

    updateCounter();
  }, [wishlist]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        removeFromCart,
        addToWishlist,
        wishlist,
        removeFromWishlist,
        setCartProducts,
        setWishList,
        wishListCounter,
        getWishlist,
        getCart,
        addToCart,
        resetCounters,
        productData, 
        setProductData,
        showLoader,
        loginDataLoad,
        updateCartItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
