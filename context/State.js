import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const qty =
    cartItems != undefined
      ? cartItems.reduce((sum, product) => sum + product.quantite, 0)
      : 0;

  const prices =
    cartItems != undefined
      ? cartItems.reduce(
          (sum, product) => sum + product.price * product.quantite,
          0
        )
      : 0;

  const addOn = (product) => {
    const productId = product.id;
    const checkProduct = cartItems.find((item) => item.id === productId);

    checkProduct
      ? setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantite: item.quantite + 1,
                }
              : item
          )
        )
      : setCartItems([...cartItems, { ...product, quantite: 1 }]);
  };

  const deleteOn = (product, qtt) => {
    if (qtt === 1) {
      removeOn(product.id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantite: item.quantite - 1,
              }
            : item
        )
      );
    }
  };

  const removeOn = (id) => {
    const filterCart = cartItems.filter((item) => item.id !== id);
    setCartItems(filterCart);
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        addOn,
        deleteOn,
        removeOn,
        qty,
        prices
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
