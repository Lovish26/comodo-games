import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const CartContext = createContext();

function CartProvider({ children }) {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useLocalStorageState([], "cart");

  return (
    <CartContext.Provider value={{ count, setCount, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context == undefined)
    throw new Error("CartContext was used outside of CartProvider");

  return context;
}

export { CartProvider, useCart };
