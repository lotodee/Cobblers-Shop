import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, img, color, size, price, productId, name) => {
    setItems((prevState) => [
      ...prevState,
      { id, img, color, size, price, productId, name },
    ]);
  };

  return (
    <CartContext.Provider value={{items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default { CartContext, CartProvider };
